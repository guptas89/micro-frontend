import React, { useState } from "react";
import "../App.css";

const TicketsList = (props: any) => {
  const descriptions = [
    "Facing issue while login to the application",
    "Not able to add data",
    "Getting error while downloading resources",
    "My Coupon is not valid",
    "Not able to signup",
  ];

  function getNumber() {
    const min = Math.ceil(0);
    const max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const assignees = [
    "John Doe",
    "William Doe",
    "James Ahana",
    "Gillbert Chang",
    "Ana lisa",
  ];

  const priorities = ["Medium", "Low", "High", "Critical", "Blocker"];

  const dates = [
    "09-Jan-2023",
    "29-Dec-2022",
    "01-Jan-2023",
    "25-Dec-2022",
    "30-Dec-2022",
  ];

  const data = [
    {
      id: "INC001",
      description: descriptions[0],
      assignee: assignees[0],
      created: dates[0],
      priority: priorities[0],
    },
    {
      id: "INC002",
      description: descriptions[1],
      assignee: assignees[1],
      created: dates[1],
      priority: priorities[1],
    },
  ];

  const [tableData, setTableData] = useState(data);

  const renderHeader = () => {
    return (
      <thead className="mf-table__thead">
        <tr className="mf-table__row">
          <th className="mf-table__th mf-table__col-4">ID</th>
          <th className="mf-table__th mf-table__col-4">Description</th>
          <th className="mf-table__th mf-table__col-3">Priority</th>
          <th className="mf-table__th mf-table__col-4">Assignee</th>
          <th className="mf-table__th mf-table__col-3">Created</th>
        </tr>
      </thead>
    );
  };

  const renderRow = () => {
    return (
      <>
        {tableData?.map((row) => (
          <tr className="mf-table__tbody-row">
            <td className="mf-table__td">{row.id}</td>
            <td className="mf-table__td">{row.description}</td>
            <td className="mf-table__td">{row.priority}</td>
            <td className="mf-table__td">{row.assignee}</td>
            <td className="mf-table__td">{row.created}</td>
          </tr>
        ))}
      </>
    );
  };

  const handleAddRow = () => {
    const newRow = {
      id: `INC00${tableData.length + 1}`,
      description: descriptions[getNumber()],
      assignee: assignees[getNumber()],
      created: dates[getNumber()],
      priority: priorities[getNumber()],
    };
    setTableData([...tableData, newRow]);
  };

  const handleRemoveRow = () => {
    const cloneData = tableData;
    cloneData.pop();

    setTableData([...cloneData]);
  };
  const renderButton = () => {
    return (
      <div className="mf-spacing__my-04">
        <button
          onClick={handleAddRow}
          className="mf-button mf-button--override"
        >
          Add Row
        </button>
        <button
          onClick={handleRemoveRow}
          className="mf-button mf-button--warning mf-spacing__ml-04"
        >
          Remove Row
        </button>
      </div>
    );
  };
  return (
    <div className="mf-salesforce mf-flex-full mf-spacing__py-04 mf-spacing__px-04">
      <table className="mf-table mf-table-fixed-layout">
        {renderHeader()}
        <tbody className="mf-table__tbody">{renderRow()}</tbody>
      </table>
      {/* {renderButton()} */}
    </div>
  );
};

export default TicketsList;
