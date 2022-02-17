import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          className="city-input"
          type="search"
          placeholder="change city..."
        />
        <input type="submit" value="SEARCH" className="btn btn-secondary" />
        <input type="button" value="my location" className="btn btn-primary" />
      </form>
    </div>
  );
}
