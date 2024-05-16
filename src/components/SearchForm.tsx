import { useRef } from "react";

const SearchForm: React.FC<{ onSearch: (text: string) => void }> = (props) => {
    const searchInputRef = useRef<HTMLInputElement>(null); // clears the kind/type of data we will store in this ref

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const eneteredText = searchInputRef.current!.value; // ! - the connection will always be established therefore will never be null
        if (eneteredText.trim().length === 0) {
            // throw error
            alert('Empty!');
            return;
        } else {
            alert(eneteredText);
            searchInputRef.current!.value = '';
        }
        props.onSearch(eneteredText);
    };

    return (
        <form action="submit" onSubmit={submitHandler}>
            <input type="text" name="search" id="search" ref={searchInputRef} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;