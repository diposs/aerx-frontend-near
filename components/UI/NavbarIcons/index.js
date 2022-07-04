import { Icon, IconButton, useColorModeValue} from "@chakra-ui/react";

export const WalletSignedIn = () => {
    return (
        <Icon
            width="20" height="18" viewBox="0 0 20 18" fill="none"
        >
            <path dfill-rule="evenodd" clipRule="evenodd" d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z" fill={useColorModeValue("gray", "white")}/>
        </Icon>
    )
}

export const WalletSignedOut = () => {
    return (
        <Icon
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            fill="none"
        >
            <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill={useColorModeValue("gray", "white")}/>
            <path d="M21.779 11.455L18.9332 8.54604C18.6391 8.24604 18.1657 8.24604 17.8726 8.54804C17.5804 8.85004 17.5814 9.33704 17.8745 9.63704L19.4338 11.23H17.9388H9.5485C9.13459 11.23 8.79858 11.575 8.79858 12C8.79858 12.426 9.13459 12.77 9.5485 12.77H19.4338L17.8745 14.363C17.5814 14.663 17.5804 15.15 17.8726 15.452C18.0196 15.603 18.2115 15.679 18.4043 15.679C18.5952 15.679 18.7871 15.603 18.9332 15.454L21.779 12.546C21.9202 12.401 22 12.205 22 12C22 11.796 21.9202 11.6 21.779 11.455Z" fill={useColorModeValue("gray", "white")}/>
        </Icon>
    )
}

export const FeedIcon = () => {
    return (
        <Icon
            width="1em" 
            height="1em" 
            viewBox="0 0 25 24" fill="none"
        >
            <path opacity="0.4" d="M16.7502 2H8.474C5.472 2 3.72412 3.78 3.72412 6.83V17.16C3.72412 20.26 5.472 22 8.474 22H16.7502C19.8006 22 21.4991 20.26 21.4991 17.16V6.83C21.4991 3.78 19.8006 2 16.7502 2" fill={useColorModeValue("gray", "white")}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.74109 6.6499V6.6599C8.31548 6.6599 7.97084 7.0099 7.97084 7.4399C7.97084 7.8699 8.31548 8.2199 8.74109 8.2199H11.6927C12.1183 8.2199 12.464 7.8699 12.464 7.4289C12.464 6.9999 12.1183 6.6499 11.6927 6.6499H8.74109ZM16.4831 12.7399H8.74109C8.31548 12.7399 7.97084 12.3899 7.97084 11.9599C7.97084 11.5299 8.31548 11.1789 8.74109 11.1789H16.4831C16.9077 11.1789 17.2533 11.5299 17.2533 11.9599C17.2533 12.3899 16.9077 12.7399 16.4831 12.7399ZM16.4827 17.3099H8.74072C8.44447 17.3499 8.15809 17.1999 8.00009 16.9499C7.84209 16.6899 7.84209 16.3599 8.00009 16.1099C8.15809 15.8499 8.44447 15.7099 8.74072 15.7399H16.4827C16.8767 15.7799 17.174 16.1199 17.174 16.5299C17.174 16.9289 16.8767 17.2699 16.4827 17.3099Z" fill={useColorModeValue("gray", "white")}/>
        </Icon>
    )
}

export const ProfileIcon = () => {
    return (
        <Icon
            width="1em" 
            height="1em" 
            viewBox="0 0 25 24" fill="none"
        >
            <path d="M12.4088 15.1743C8.14967 15.1743 4.51172 15.8543 4.51172 18.5743C4.51172 21.2953 8.12696 21.9993 12.4088 21.9993C16.6678 21.9993 20.3058 21.3203 20.3058 18.5993C20.3058 15.8783 16.6915 15.1743 12.4088 15.1743" fill={useColorModeValue("gray", "white")}/>
            <path opacity="0.4" d="M12.4087 12.5835C15.31 12.5835 17.6346 10.2285 17.6346 7.29151C17.6346 4.35451 15.31 1.99951 12.4087 1.99951C9.50842 1.99951 7.18286 4.35451 7.18286 7.29151C7.18286 10.2285 9.50842 12.5835 12.4087 12.5835" fill={useColorModeValue("gray", "white")}/>
        </Icon>
    )
}

export const AccountIcon = () => {
    return (
        <Icon
            width="1em" 
            height="1em" 
            viewBox="0 0 25 24" fill="none"
        >
            <path d="M12.8238 14.8302C11.2394 14.8302 9.95776 13.5802 9.95776 12.0102C9.95776 10.4402 11.2394 9.18018 12.8238 9.18018C14.4083 9.18018 15.6596 10.4402 15.6596 12.0102C15.6596 13.5802 14.4083 14.8302 12.8238 14.8302" fill={useColorModeValue("gray", "white")}/>
            <path opacity="0.4" d="M21.9267 14.37C21.7349 14.07 21.4624 13.77 21.1092 13.58C20.8267 13.44 20.645 13.21 20.4835 12.94C19.9689 12.08 20.2716 10.95 21.1294 10.44C22.1386 9.87 22.4615 8.6 21.8762 7.61L21.2001 6.43C20.6248 5.44 19.3633 5.09 18.3643 5.67C17.4762 6.15 16.3358 5.83 15.8211 4.98C15.6596 4.7 15.5688 4.4 15.589 4.1C15.6193 3.71 15.4982 3.34 15.3165 3.04C14.9431 2.42 14.267 2 13.5202 2H12.0972C11.3605 2.02 10.6844 2.42 10.311 3.04C10.1192 3.34 10.0082 3.71 10.0284 4.1C10.0486 4.4 9.95776 4.7 9.79629 4.98C9.28161 5.83 8.14123 6.15 7.26324 5.67C6.25406 5.09 5.00267 5.44 4.41734 6.43L3.74119 7.61C3.16596 8.6 3.4889 9.87 4.48799 10.44C5.34579 10.95 5.64855 12.08 5.14396 12.94C4.9724 13.21 4.79074 13.44 4.50817 13.58C4.16505 13.77 3.86229 14.07 3.70082 14.37C3.32743 14.99 3.34761 15.77 3.72101 16.42L4.41734 17.62C4.79074 18.26 5.48708 18.66 6.21369 18.66C6.55681 18.66 6.96049 18.56 7.28342 18.36C7.53572 18.19 7.83847 18.13 8.17151 18.13C9.1706 18.13 10.0082 18.96 10.0284 19.95C10.0284 21.1 10.9569 22 12.1275 22H13.5C14.6606 22 15.589 21.1 15.589 19.95C15.6193 18.96 16.4569 18.13 17.456 18.13C17.7789 18.13 18.0817 18.19 18.3441 18.36C18.667 18.56 19.0606 18.66 19.4138 18.66C20.1303 18.66 20.8267 18.26 21.2001 17.62L21.9065 16.42C22.2698 15.75 22.3001 14.99 21.9267 14.37" fill={useColorModeValue("gray", "white")}/>
        </Icon>
    )
}

export const LightIcon = () => {
    return (
        <Icon
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            fill="none"
        >
            <path opacity="0.4" d="M12.0137 18.25C12.341 18.25 12.655 18.3817 12.8865 18.6161C13.118 18.8505 13.248 19.1685 13.248 19.5V20.75C13.248 21.0815 13.118 21.3995 12.8865 21.6339C12.655 21.8683 12.341 22 12.0137 22C11.6863 22 11.3723 21.8683 11.1408 21.6339C10.9093 21.3995 10.7793 21.0815 10.7793 20.75V19.5C10.7793 19.1685 10.9093 18.8505 11.1408 18.6161C11.3723 18.3817 11.6863 18.25 12.0137 18.25ZM12.0137 5.75C11.6863 5.75 11.3723 5.6183 11.1408 5.38388C10.9093 5.14946 10.7793 4.83152 10.7793 4.5V3.25C10.7793 2.91848 10.9093 2.60054 11.1408 2.36612C11.3723 2.1317 11.6863 2 12.0137 2C12.341 2 12.655 2.1317 12.8865 2.36612C13.118 2.60054 13.248 2.91848 13.248 3.25V4.5C13.248 4.83152 13.118 5.14946 12.8865 5.38388C12.655 5.6183 12.341 5.75 12.0137 5.75ZM20.6543 10.75C20.9817 10.75 21.2956 10.8817 21.5271 11.1161C21.7586 11.3505 21.8887 11.6685 21.8887 12C21.8887 12.3315 21.7586 12.6495 21.5271 12.8839C21.2956 13.1183 20.9817 13.25 20.6543 13.25H19.4199C19.0925 13.25 18.7786 13.1183 18.5471 12.8839C18.3156 12.6495 18.1855 12.3315 18.1855 12C18.1855 11.6685 18.3156 11.3505 18.5471 11.1161C18.7786 10.8817 19.0925 10.75 19.4199 10.75H20.6543ZM5.8418 12C5.8418 12.3315 5.71175 12.6495 5.48026 12.8839C5.24877 13.1183 4.9348 13.25 4.60742 13.25H3.37305C3.04567 13.25 2.7317 13.1183 2.50021 12.8839C2.26872 12.6495 2.13867 12.3315 2.13867 12C2.13867 11.6685 2.26872 11.3505 2.50021 11.1161C2.7317 10.8817 3.04567 10.75 3.37305 10.75H4.60742C4.9348 10.75 5.24877 10.8817 5.48026 11.1161C5.71175 11.3505 5.8418 11.6685 5.8418 12ZM18.1238 16.42L18.9965 17.3038C19.2214 17.5395 19.3458 17.8553 19.343 18.183C19.3402 18.5107 19.2104 18.8243 18.9815 19.056C18.7526 19.2878 18.443 19.4192 18.1194 19.4221C17.7957 19.4249 17.4839 19.2989 17.2511 19.0712L16.3784 18.1875C16.1536 17.9517 16.0292 17.636 16.032 17.3082C16.0348 16.9805 16.1646 16.667 16.3935 16.4352C16.6223 16.2035 16.9319 16.072 17.2556 16.0692C17.5792 16.0663 17.891 16.1923 18.1238 16.42ZM5.90352 7.58L5.03081 6.69625C4.91621 6.58019 4.8253 6.44242 4.76327 6.29078C4.70125 6.13915 4.66933 5.97663 4.66933 5.8125C4.66933 5.64837 4.70125 5.48585 4.76327 5.33422C4.8253 5.18258 4.91621 5.04481 5.03081 4.92875C5.14542 4.81269 5.28147 4.72063 5.43121 4.65783C5.58095 4.59502 5.74144 4.56269 5.90352 4.56269C6.06559 4.56269 6.22608 4.59502 6.37582 4.65783C6.52556 4.72063 6.66161 4.81269 6.77622 4.92875L7.64892 5.8125C7.76353 5.92856 7.85444 6.06633 7.91646 6.21797C7.97848 6.3696 8.01041 6.53212 8.01041 6.69625C8.01041 6.86038 7.97848 7.0229 7.91646 7.17453C7.85444 7.32617 7.76353 7.46394 7.64892 7.58C7.53432 7.69606 7.39826 7.78812 7.24852 7.85092C7.09878 7.91373 6.9383 7.94606 6.77622 7.94606C6.61414 7.94606 6.45365 7.91373 6.30392 7.85092C6.15418 7.78812 6.01812 7.69606 5.90352 7.58ZM18.1238 7.58C17.8924 7.81439 17.5785 7.94606 17.2511 7.94606C16.9238 7.94606 16.6099 7.81439 16.3784 7.58C16.147 7.34562 16.0169 7.02772 16.0169 6.69625C16.0169 6.36478 16.147 6.04689 16.3784 5.8125L17.2511 4.92875C17.4826 4.69436 17.7965 4.56269 18.1238 4.56269C18.4512 4.56269 18.7651 4.69436 18.9965 4.92875C19.228 5.16313 19.358 5.48103 19.358 5.8125C19.358 6.14397 19.228 6.46186 18.9965 6.69625L18.1238 7.58ZM5.90352 16.42C6.13632 16.1923 6.44813 16.0663 6.77178 16.0692C7.09543 16.072 7.40502 16.2035 7.63389 16.4352C7.86275 16.667 7.99257 16.9805 7.99538 17.3082C7.99819 17.636 7.87377 17.9517 7.64892 18.1875L6.77622 19.0712C6.54341 19.2989 6.23161 19.4249 5.90796 19.4221C5.58431 19.4192 5.27471 19.2878 5.04585 19.056C4.81699 18.8243 4.68717 18.5107 4.68436 18.183C4.68154 17.8553 4.80596 17.5395 5.03081 17.3038L5.90352 16.42Z" fill={useColorModeValue("gray", "white")}/>
            <path d="M12.0135 8C10.9659 8 9.96117 8.42143 9.2204 9.17157C8.47964 9.92172 8.06348 10.9391 8.06348 12C8.06348 13.0609 8.47964 14.0783 9.2204 14.8284C9.96117 15.5786 10.9659 16 12.0135 16C13.0611 16 14.0658 15.5786 14.8065 14.8284C15.5473 14.0783 15.9635 13.0609 15.9635 12C15.9635 10.9391 15.5473 9.92172 14.8065 9.17157C14.0658 8.42143 13.0611 8 12.0135 8Z" fill={useColorModeValue("gray", "white")}/>
        </Icon>
    )
}
