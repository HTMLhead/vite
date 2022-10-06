import React from "react";

export const HistoryContext = React.createContext<History>(null!);

export const useHistory = () => React.useContext(HistoryContext);
