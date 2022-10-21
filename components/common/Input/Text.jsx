export default function StyleTextInput({ placeholder, className, ...rest }) {
    return (
        <>
            <input
                type="text"
                className={`border rounded-md py-1 pl-2 ${className}`}
                placeholder={placeholder}
                {...rest}
            />
        </>
    );
}
