import { nearStore } from "../../stores/near.js";
import { useState } from "react";
import Profile from "../../components/Profile";
import { Box } from "@chakra-ui/react";
const nearState = nearStore((state) => state)
    async function get_current_profile() {

  const res = await nearState.pnftContract.profile_by_id({
                user_id: nearState.accountId,
                user_to_find_id: 'dipo1.testnet',
            })
  const data = await res.json()
  }
  console.log("dd",data)
const ProfilePage = () => {
    return (
        <Box>
            <Profile />
        </Box>
    );
};
export async function getServerSideProps() {
  // Fetch data from external API
  
  // Pass data to the page via props
  return { props:{ message: `Next.js is awesome` } }
}
export default ProfilePage;
