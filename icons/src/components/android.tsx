import { IconProps } from "../types/types";
const Androidicon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      {...resProps}
    >
      <g clipPath="url(#clip0_2009_1889)">
        <path
          d="M14.5997 6.18376C14.5997 5.64056 14.1641 5.19437 13.6338 5.19437C13.1035 5.19437 12.668 5.64056 12.668 6.18376V10.3062C12.668 10.8494 13.1035 11.2956 13.6338 11.2956C14.1641 11.2956 14.5997 10.8494 14.5997 10.3062V6.18376Z"
          fill="#79C257"
        />
        <path
          d="M3.3321 6.18376C3.3321 5.64056 2.89652 5.19437 2.36624 5.19437C1.83597 5.19437 1.40039 5.64056 1.40039 6.18376V10.3062C1.40039 10.8494 1.83597 11.2956 2.36624 11.2956C2.89652 11.2956 3.3321 10.8494 3.3321 10.3062V6.18376Z"
          fill="#79C257"
        />
        <path
          d="M10.1115 1.46957L10.7933 0.208579C10.8311 0.14068 10.8075 0.05338 10.7412 0.0194303C10.7223 0.00973043 10.6986 3.05176e-05 10.6749 3.05176e-05C10.6276 3.05176e-05 10.5802 0.0242803 10.5565 0.0727798L9.86529 1.34832C9.30188 1.09127 8.66745 0.945772 7.99987 0.945772C7.3323 0.945772 6.69786 1.09127 6.13445 1.34832L5.44793 0.0727798C5.41006 0.00488047 5.32957 -0.0193693 5.26329 0.0194303C5.197 0.05823 5.17333 0.14068 5.21121 0.208579L5.89298 1.46957C4.57677 2.16796 3.69141 3.492 3.69141 5.01488H12.3083C12.3083 3.492 11.423 2.16796 10.1115 1.46957ZM6.01135 3.39985C5.8125 3.39985 5.65152 3.23495 5.65152 3.03125C5.65152 2.82755 5.8125 2.66265 6.01135 2.66265C6.2102 2.66265 6.37118 2.82755 6.37118 3.03125C6.37118 3.23495 6.2102 3.39985 6.01135 3.39985ZM9.98839 3.39985C9.78954 3.39985 9.62857 3.23495 9.62857 3.03125C9.62857 2.82755 9.78954 2.66265 9.98839 2.66265C10.1872 2.66265 10.3482 2.82755 10.3482 3.03125C10.3482 3.23495 10.1872 3.39985 9.98839 3.39985Z"
          fill="#79C257"
        />
        <path
          d="M3.69141 5.36429V11.7613C3.69141 12.353 4.15539 12.8283 4.73301 12.8283H5.42426V15.0108C5.42426 15.554 5.85984 16.0002 6.39011 16.0002C6.92039 16.0002 7.35597 15.554 7.35597 15.0108V12.8283H8.64377V15.0108C8.64377 15.554 9.07935 16.0002 9.60963 16.0002C10.1399 16.0002 10.5755 15.554 10.5755 15.0108V12.8283H11.2667C11.8443 12.8283 12.3083 12.353 12.3083 11.7613V5.36429H3.69141Z"
          fill="#79C257"
        />
      </g>
      <defs>
        <clipPath id="clip0_2009_1889">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Androidicon;
