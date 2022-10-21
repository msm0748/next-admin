import styled from "@emotion/styled/macro";
import tw from "twin.macro";

const StyleProductTable = styled.div`
    ${tw`mt-7`}
    h3 {
        ${tw`font-bold px-2 py-3 text-lg`}
    }
    table {
        ${tw`w-full border divide-gray-200`}
    }

    caption {
        ${tw`hidden`}
    }
    tbody {
        ${tw`divide-y divide-gray-200`}
    }
    th {
        ${tw`bg-gray-50 px-6 py-3 text-sm font-bold text-left border-r`}
    }
    td {
        ${tw`px-6 py-3 text-sm text-left`}
    }
`;

export default function Table({ children }) {
    return <StyleProductTable>{children}</StyleProductTable>;
}
