import { nearStore } from "../../stores/near.js";
import { useState, useEffect } from "react";
import Profile from "../../components/ProfileMain";
import { Box } from "@chakra-ui/react";

export async function getServerSideProps({ params }) {
  const profiledid = params.profiledid;
  const nearState = nearStore((state) => state);
  const profiledidViewer = await nearState.pnftContract.profile_by_id({
                user_id: nearState.accountId,
                user_to_find_id: profiledid,
            }).then(res => res.json());
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
