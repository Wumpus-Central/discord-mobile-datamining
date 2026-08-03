import noop from "noop";

const result = require("set").fileFinishedImporting("hooks/useInitialValue.tsx");

export default function useInitialValue(arg0) {
  return React.useState(arg0)[0];
};