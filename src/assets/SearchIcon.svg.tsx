import { FC, HTMLProps } from "react";

const SearchIcon: FC<HTMLProps<SVGSVGElement>> = ({ ...props }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#CACCCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.0004 19L14.6504 14.65" stroke="#CACCCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default SearchIcon;