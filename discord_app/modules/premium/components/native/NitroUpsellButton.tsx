// discord_app/modules/premium/components/native/NitroUpsellButton.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
