import Sub from "../Snb";

export default function Main({ children }) {
    return (
        <div className="flex">
            <Sub />
            <div className="p-7 w-full">{children}</div>
        </div>
    );
}
