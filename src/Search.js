import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="change city..."
          className="city-input"
          autoFocus="on"
        />
        <input type="submit" value="SEARCH" className="btn btn-secondary" />
        <input type="button" value="my location" className="btn btn-primary" />
      </form>
    </div>
  );
}
