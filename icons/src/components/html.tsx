import { IconProps } from "../types/types";
const Htmlicon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_2009_2847)">
        <path
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill="url(#paint0_linear_2009_2847)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.91306 7.967L6.28006 9.294C6.68006 9.682 6.68506 10.322 6.29006 10.716C5.90306 11.102 5.27706 11.106 4.88406 10.726L2.82106 8.723C2.76652 8.67 2.71821 8.61095 2.67706 8.547C2.54596 8.35613 2.48516 8.12568 2.50504 7.89498C2.52491 7.66428 2.62424 7.44763 2.78606 7.282L4.80006 5.223C4.98615 5.0371 5.238 4.93201 5.50104 4.9305C5.76408 4.92899 6.01712 5.03117 6.20534 5.21492C6.39357 5.39867 6.50181 5.64919 6.50662 5.91219C6.51144 6.17518 6.41243 6.42949 6.23106 6.62L4.91306 7.967ZM11.0691 8L9.73606 6.706C9.64137 6.61367 9.56594 6.50347 9.51413 6.38178C9.46232 6.26009 9.43517 6.12934 9.43424 5.99709C9.43331 5.86484 9.45862 5.73371 9.50871 5.61131C9.5588 5.48891 9.63268 5.37766 9.72606 5.284C10.1131 4.898 10.7401 4.894 11.1321 5.275L13.1961 7.28C13.4161 7.493 13.5161 7.783 13.4961 8.065C13.4821 8.305 13.3811 8.54 13.1951 8.721L11.1301 10.726C10.9394 10.9076 10.6848 11.0066 10.4215 11.0016C10.1582 10.9966 9.90758 10.888 9.72391 10.6994C9.54024 10.5107 9.4384 10.2572 9.44049 9.99389C9.44257 9.73059 9.54842 9.47874 9.73506 9.293L11.0691 8Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2009_2847"
          x1="8"
          y1="0"
          x2="8"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2D68FF" />
          <stop offset="1" stop-color="#2450BF" />
        </linearGradient>
        <clipPath id="clip0_2009_2847">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Htmlicon;