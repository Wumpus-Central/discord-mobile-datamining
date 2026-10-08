// === Module 9733: NitroUpsellButton ===

// Module 9733 (NitroUpsellButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9005 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NitroUpsellButton(arg0) {
  const cResult = c.c(9);
  ({ loading, onPress, text, shiny, size } = arg0);
  let tmp4 = undefined === shiny || shiny;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.WHITE, size: "sm" };
    const tmp12 = jsx(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "sm" });
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (tmp4) {
    tmp4 = !stateFromStores;
  }
  if (cResult[3] === loading) {
    if (cResult[4] === onPress) {
      if (cResult[5] === str) {
        if (cResult[6] === tmp4) {
          if (cResult[7] === text) {
            let tmp13 = cResult[8];
          }
          return tmp13;
        }
      }
    }
  }
  const tmp14 = jsx(components_Button_Button.Button, { text, size: str, loading, onPress, icon: tmp9, variant: "experimental_premium-primary", shiny: tmp4 });
  cResult[3] = loading;
  cResult[4] = onPress;
  cResult[5] = str;
  cResult[6] = tmp4;
  cResult[7] = text;
  cResult[8] = tmp14;
  tmp13 = tmp14;
  const tmpResult = initialize;
}) : (function NitroUpsellButton(shiny) {
  let flag = shiny.shiny;
  ({ loading, onPress, text } = shiny);
  if (flag === undefined) {
    flag = true;
  }
  let str = shiny.size;
  if (str === undefined) {
    str = "lg";
  }
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null };
  obj2.icon = jsx(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj2.shiny = flag;
  return jsx(components_Button_Button.Button, { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null });
}));