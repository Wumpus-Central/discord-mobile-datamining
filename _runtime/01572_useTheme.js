// _runtime/01572_useTheme.js
import noop from "noop";


export default function useTheme() {
  return React.useContext(require("01568_context.js"));
};