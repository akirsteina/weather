import { useRef } from "react";

const SearchForm: React.FC<{ onSearch: (text: string) => void }> = (props) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const eneteredText = searchInputRef.current!.value;
        if (eneteredText.trim().length === 0) {
            // throw error
            return;
        }
        props.onSearch(eneteredText);
    }

    return (
        <form action="submit" onSubmit={submitHandler}>
            <label htmlFor="search"></label>
            <input type="text" name="search" id="search" ref={searchInputRef} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;