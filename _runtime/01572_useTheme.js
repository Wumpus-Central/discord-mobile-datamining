import { context } from "01568_context.js";
// _runtime/01572_useTheme.js
import noop from "noop";


export default function useTheme() {
  return React.useContext(context);
};