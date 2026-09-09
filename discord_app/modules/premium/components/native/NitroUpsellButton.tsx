// === Module 10002: NitroUpsellButton ===

// Module 10002 (NitroUpsellButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 4989 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8695 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default noop.memo(function NitroUpsellButton(shiny) {
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
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null };
  obj = { color: nativeDefault.colors.WHITE, size: "sm" };
  obj.icon = jsx(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj.shiny = flag;
  return jsx(components_Button_Button.Button, { color: nativeDefault.colors.WHITE, size: "sm" });
});