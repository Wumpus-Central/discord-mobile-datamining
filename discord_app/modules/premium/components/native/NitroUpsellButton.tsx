// === Module 9498: ? ===

// Module 9498
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 4745 */;
import NitroWheelIcon from "NitroWheelIcon" /* 7988 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const memoResult = importAllResult.memo(function NitroUpsellButton(shiny) {
  let flag = shiny.shiny;
  ({ loading, onPress, text } = shiny);
  if (flag === undefined) {
    flag = true;
  }
  let str = shiny.size;
  if (str === undefined) {
    str = "lg";
  }
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { color: ThemesDefault.colors.WHITE, size: "sm" };
  obj[4] = jsx(NitroWheelIcon.NitroWheelIcon, { color: ThemesDefault.colors.WHITE, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj[6] = flag;
  return jsx(Button.Button, { color: ThemesDefault.colors.WHITE, size: "sm" });
});
const result = require("obj132").fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;