import React from "react";

const AddTicket = (props: any) => {
  const { handleAddRow } = props;
  return <button onClick={handleAddRow}>Add Row</button>;
};

export default AddTicket;
