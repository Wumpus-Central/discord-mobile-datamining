// discord_app/modules/premium/components/native/NitroUpsellButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NitroWheelIcon2 from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let loading;
        let onPress;
        let shiny;
        let text;
        let tmp5;
        let tmp6;
        let tmp9;
        let useReducedMotion;
        const obj = react2;
        const cResult = obj.c(9);
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
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
          const tmp12 = <NitroWheelIcon color={nativeDefault.colors.WHITE} size="sm" />;
          cResult[2] = tmp12;
          tmp9 = tmp12;
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
                let tmp13;
                if (cResult[7] === text) {
                  tmp13 = cResult[8];
                }
                return tmp13;
              }
            }
          }
        }
        const tmp14 = jsx(components_Button_Button.Button, {
          text,
          size: str,
          loading,
          onPress,
          icon: tmp9,
          variant: "experimental_premium-primary",
          shiny: tmp4,
        });
        cResult[3] = loading;
        cResult[4] = onPress;
        cResult[5] = str;
        cResult[6] = tmp4;
        cResult[7] = text;
        cResult[8] = tmp14;
        tmp13 = tmp14;
      }
    : (shiny) => {
        let loading;
        let onPress;
        let text;
        let useReducedMotion;
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
        const obj = get_initialized;
        const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        const Button = components_Button_Button.Button;
        ({ color: nativeDefault.colors.WHITE, size: "sm" });
        const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        if (flag) {
          flag = !stateFromStores;
        }
        return (
          <Button
            text={text}
            size={str}
            loading={loading}
            onPress={onPress}
            icon={null}
            variant="experimental_premium-primary"
            shiny={flag}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;
