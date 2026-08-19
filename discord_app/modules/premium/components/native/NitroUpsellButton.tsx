// discord_app/modules/premium/components/native/NitroUpsellButton.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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