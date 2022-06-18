import { nearStore } from "../../stores/near.js";
import { useState, useEffect } from "react";
import Profile from "../../components/ProfileMain";
import { Box } from "@chakra-ui/react";

export async function getServerSideProps({ params }) {
  const profiledid = params.profiledid;
  const nearState = nearStore((state) => state);
  const [profiledidView, setProfiledidView] = useState();
    useEffect(() => {
        async function get_current_profile() {
            if( profiledid ===  "Aerx.testnet" ){
                return
            } else {
            var res = await nearState.pnftContract.profile_by_id({
                user_id: nearState.accountId,
                user_to_find_id: profiledid,
            });

            setProfiledidView(res);
            // return res;
            }
        }
        get_current_profile();
    }, [nearState, nearState.pnftContract, nearState.accountId, profiledid, ]);
  const profiledidViewer = await get_current_profile().then(res => res.json());
  return {
    props: {
      profiledid,
    }
  }
}

const ProfilePage = () => {
    return (
        <Box>
            <Profile profiledid = {profiledid}  />
        </Box>
    );
};
export default ProfilePage;
