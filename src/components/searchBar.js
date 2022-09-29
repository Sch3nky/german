
function SearchBar({search}) {

    return (
        <div className="search">
            <input type="text" onChange={event => search(event.target.value)}/>
        </div>
    )
}

export default SearchBar