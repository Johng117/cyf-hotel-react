import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const rowData = props.results;
  const [rowId, setRowId] = useState("");

  const rowIdSetter = (e, id) => {
    e.stopPropagation();
    setRowId(id);
  };

  return (
    <div className="tableBox">
      <table id="aTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in-date</th>
            <th scope="col">Check-out-date</th>
            <th scope="col">Number of Nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {rowData.map(element => {
            return <Row row={element} idSetter={rowIdSetter} />;
          })}
        </tbody>
      </table>
      {rowId === "" ? null : <CustomerProfile id={rowId} />}
    </div>
  );
};

export default SearchResults;
