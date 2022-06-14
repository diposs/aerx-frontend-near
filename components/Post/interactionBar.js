import { Layout } from "antd";
import { useState } from "react";
import { Box , Input, useColorModeValue } from "@chakra-ui/react";
import { AddIconButton, ChargeOutlineButton, CommentIconButton, ShareIconButton } from "../UI/IconButton";
import MemberTag from "./tagmembers";
import { clickchargePost } from "./chargeModal"
import { nearStore } from "../../stores/near";

const { Header, Footer, Content } = Layout;

const InteractionBar = ({ nft, onOpen, currentCharge}) => {
    const bdcolorchanger = useColorModeValue("white", "#1B1D1E");
    const nearState = nearStore((state) => state);
    const styles = {
        footer: {
            height: 64,
            display: "flex",
            alignItems: "center",
        },
        tag: {
            position: "absolute",
            right: "20px",
        },
    };

    const [ commentBox , setCommentBox ] = useState(false);
    const comment = () =>{
        setCommentBox(!commentBox)
    }
    
    (function(){
  var start,
      end,
      diff;
  var clickTime = 1500;
  var longClick = new CustomEvent('longclick');
  
  var div = document.getElementsByClassName('.charging-click');
  document.body.addEventListener('longclick', function(event){
    
    
      {onOpen}
    
  });
  
  div.onmousedown = function() {
    start = Date.now();
    
    div.onmouseup = function() {
      end = Date.now();
      diff = (end - start) + 1;
      if (diff > clickTime) {
        document.body.dispatchEvent(longClick);
      } else {
        clickchargePost()
      }
      
    }
  }
  
  



})();
    
    
    return (
        <>
            <Footer style={styles.footer} className="flex align-middle gap-2" >
                <ChargeOutlineButton className="charging-click" />{currentCharge}
                <CommentIconButton onClick={comment}/>0
                <ShareIconButton opacity={0.7} ml={2}/>0
                <MemberTag style={styles.tag}/>
            </Footer>
            <Footer>
                { commentBox ? 
                    <Box 
                        flexDirection="row"
                        display="flex"
                        alignItems="center">
                            <Input
                                maxLength={500}
                                type="text"
                                data-path="text"
                                placeholder="comment"
                                borderRadius={20}
                                size="sm"
                                border="none"
                                bg={bdcolorchanger}
                            />
                        <Box>
                            <AddIconButton/>
                        </Box>
                    </Box> : null}
            </Footer>
        </>
    );
}

export default InteractionBar;
