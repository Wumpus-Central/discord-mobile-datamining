// discord_app/modules/media_keyboard/native/components/MediaKeyboardFooter.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import DeviceMediaDefault from "../../../device/native/DeviceMedia.tsx";
import AssetRegistryDefault from "../../../../../_runtime/10400_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: c3, Image: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  label: { textAlign: "center", marginBottom: 16 },
  buttonWrapper: obj3,
  loadingSpinner: obj4,
};
obj2 = { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
obj4 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let container;
        let disabled;
        let items;
        let label;
        let onViewAll;
        const obj = react2;
        const cResult = obj.c(17);
        ({ disabled, onViewAll } = arg0);
        const tmp4 = closure_8();
        const obj2 = DeviceMediaDefault;
        if (obj2.useHasReachedEnd()) {
          let tmp11;
          let tmp13;
          let tmp16;
          const _Symbol = Symbol;
          ({ container, label } = tmp4);
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl3.intl;
            const stringResult = intl.string(intl3.t.mKSwAW);
            cResult[2] = stringResult;
            tmp11 = stringResult;
          } else {
            tmp11 = cResult[2];
          }
          if (cResult[3] !== tmp4.label) {
            const obj3 = { variant: "text-sm/normal", style: label, children: tmp11 };
            const tmp15 = metroRequire(Text_Text.Text, obj3);
            cResult[3] = tmp4.label;
            cResult[4] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[4];
          }
          const _Symbol2 = Symbol;
          const buttonWrapper = tmp4.buttonWrapper;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl3.intl;
            const stringResult1 = intl2.string(intl3.t.ZT24In);
            cResult[5] = stringResult1;
            tmp16 = stringResult1;
          } else {
            tmp16 = cResult[5];
          }
          if (cResult[6] === disabled) {
            let tmp18;
            if (cResult[7] === onViewAll) {
              tmp18 = cResult[8];
            }
            if (cResult[9] === tmp4.buttonWrapper) {
              let tmp21;
              let tmp25;
              if (cResult[10] === tmp18) {
                tmp21 = cResult[11];
              }
              const _Symbol3 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { source: AssetRegistryDefault };
                const tmp28 = metroRequire(React3, obj4);
                cResult[12] = tmp28;
                tmp25 = tmp28;
              } else {
                tmp25 = cResult[12];
              }
              if (cResult[13] === tmp4.container) {
                if (cResult[14] === tmp13) {
                  let tmp29;
                  if (cResult[15] === tmp21) {
                    tmp29 = cResult[16];
                  }
                  return tmp29;
                }
              }
              const obj5 = { style: container, children: items };
              items = [tmp13, tmp21, tmp25];
              const tmp32 = metroImportDefault(_false, obj5);
              cResult[13] = tmp4.container;
              cResult[14] = tmp13;
              cResult[15] = tmp21;
              cResult[16] = tmp32;
              tmp29 = tmp32;
            }
            const obj6 = { style: buttonWrapper, children: tmp18 };
            const tmp24 = metroRequire(_false, obj6);
            cResult[9] = tmp4.buttonWrapper;
            cResult[10] = tmp18;
            cResult[11] = tmp24;
            tmp21 = tmp24;
          }
          const obj7 = { variant: "primary", size: "sm", onPress: onViewAll, text: tmp16, disabled };
          const tmp20 = metroRequire(components_Button_Button.Button, obj7);
          cResult[6] = disabled;
          cResult[7] = onViewAll;
          cResult[8] = tmp20;
          tmp18 = tmp20;
        } else {
          let tmp6;
          if (cResult[0] !== tmp4.loadingSpinner) {
            const obj8 = { style: tmp4.loadingSpinner, size: "large", color: tmp4.loadingSpinner.color };
            const tmp9 = metroRequire(hasOwnProperty, obj8);
            cResult[0] = tmp4.loadingSpinner;
            cResult[1] = tmp9;
            tmp6 = tmp9;
          } else {
            tmp6 = cResult[1];
          }
          return tmp6;
        }
      }
    : (arg0) => {
        let Button;
        let disabled;
        let intl;
        let intl2;
        let items;
        let obj5;
        let onViewAll;
        let tmp6;
        ({ disabled, onViewAll } = arg0);
        const tmp = closure_8();
        const obj = DeviceMediaDefault;
        if (obj.useHasReachedEnd()) {
          const obj2 = { style: tmp.container, children: items };
          const obj3 = { variant: "text-sm/normal", style: tmp.label, children: intl.string(intl3.t.mKSwAW) };
          const Text = Text_Text.Text;
          intl = intl3.intl;
          items = [metroRequire(Text, obj3), ,];
          const obj4 = { style: tmp.buttonWrapper, children: metroRequire(Button, obj5) };
          obj5 = { variant: "primary", size: "sm", onPress: onViewAll, text: intl2.string(intl3.t.ZT24In), disabled };
          Button = components_Button_Button.Button;
          intl2 = intl3.intl;
          items[1] = metroRequire(_false, obj4);
          const obj6 = { source: AssetRegistryDefault };
          items[2] = metroRequire(React3, obj6);
          tmp6 = metroImportDefault(_false, obj2);
        } else {
          const obj7 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
          tmp6 = metroRequire(hasOwnProperty, obj7);
        }
        return tmp6;
      },
);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default memoResult;
export const FOOTER_HEIGHT = 280;
