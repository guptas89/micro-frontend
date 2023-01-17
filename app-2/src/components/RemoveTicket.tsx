import React from "react";

const RemoveTicket = (props: any) => {
  const { handleRemoveRow } = props;
  return <button onClick={handleRemoveRow}>Remove Row</button>;
};

export default RemoveTicket;
