import { Layout } from "antd";
import { useState } from "react";
import { Box , Input, useColorModeValue } from "@chakra-ui/react";
import { AddIconButton, ChargeOutlineButton, CommentIconButton, ShareIconButton } from "../UI/IconButton";
import { nearStore } from "../../stores/near";
import MemberTag from "./tagmembers";

const { Header, Footer, Content } = Layout;

const InteractionBar = ({onOpen, currentCharge}) => {
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
    
   async function clickchargePost() {
        if (nearState?.aexBalance == 0){
            return;
        } else {
        const amount = 1;
        nearState.tokenContract
            .ft_transfer(
                {
                    receiver_id: nft.owner_id,
                    amount: amount.toString(),
                    memo:
                        "Charge :zap: from " +
                        nearState?.accountId +
                        " for your AEXpost id." +
                        nft.token_id,
                },
                "300000000000000", // attached GAS (optional)
                1, // attached deposit in yoctoNEAR (optional)
            )
            .catch((e) => {
                console.log("Charge failed!", e);
                console.log("nft.owner_id", nft.owner_id);
                toast("error", "Charge failed!", "ChargeIderr");
            });
        }
    }

    
    (function () {
  
  // Create variable for setTimeout
  var delay,
      start,
      end;
  
  // Set number of milliseconds for longpress
  var longpress = 1300;
  
  var listItems = document.getElementsByClassName('charging-click');
  var listItem;
  
  for (var i = 0, j = listItems.length; i < j; i++) {
    listItem = listItems[i];
    
    listItem.addEventListener('mousedown', function (e) {
      var _this = this;
      start = Date.now();
      console.log('start',start)
      
      function check() {
          _this.classList.add('is-selected');
      }
      
    }, true);
    
    listItem.addEventListener('mouseup', function (e) {
      // On mouse up, we know it is no longer a longpress
      end = Date.now();
      console.log('end',end)
      delay = (end - start) + 1;
  console.log('diff1',delay);
      if (delay > longpress) {
        console.log("it works for longclick", delay);
      } else {
          myFunction();
          console.log("it works for click", delay);
        
      }
    });
   }
}());
    
    
    

    return (
        <>
            <Footer style={styles.footer} className="flex align-middle gap-2" >
                <ChargeOutlineButton className="charging-click"/>{currentCharge}
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
