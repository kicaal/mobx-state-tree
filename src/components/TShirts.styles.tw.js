import styled from "styled-components";
import tw from "twin.macro";

const TShirtsStyles = styled.div`
  ${tw`w-full flex gap-5 p-4`}
  & {
    .wrapper {
      ${tw`w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`}
    }
    img {
      ${tw` rounded-t-lg`}
    }
    .product-info-wrapper {
      ${tw`px-5 py-5`}
      h5 {
        ${tw`text-xl font-semibold tracking-tight text-gray-900 dark:text-white`}
      }

      .stars-wrapper {
        ${tw`flex items-center mt-2.5 mb-5`}

        svg {
          ${tw`w-5 h-5 text-yellow-300`}
        }

        span {
          ${tw`bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3`}
        }
      }

      .add-cart-button {
        ${tw`flex justify-between items-center`}

        span {
          ${tw`text-3xl font-bold text-gray-900 dark:text-white`}
        }

        button {
          ${tw`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        }
      }
    }
  }
`;
export default TShirtsStyles;
