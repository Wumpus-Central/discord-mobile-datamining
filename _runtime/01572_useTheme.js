// _runtime/01572_useTheme.js
import noop from "noop";
import { context } from "01568_context.js";


export default function useTheme() {
  return React.useContext(context);
};