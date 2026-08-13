// discord_app/modules/reanimated/native/REAWorkaroundView.tsx
import { jsx } from "jsxProd";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult from "cancelAnimation";

const forwardRefResult = require("noop").forwardRef((entering, ref) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj.hasEnteringAnimation = null != entering.entering;
  obj.ref = ref;
  return <__INTERNAL_VIEW_CONFIG />;
});
forwardRefResult.displayName = "REAWorkaroundView";
const result = require("cancelAnimation").fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;