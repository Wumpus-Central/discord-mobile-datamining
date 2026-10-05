// discord_app/modules/activate_device/native/ActivateDeviceError.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import AssetRegistryDefault from "../../../../_runtime/08762_AssetRegistry.js";
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let onRetry;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onRetry) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let tmp10;
      let tmp14;
      let tmp20;
      let tmp22;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(10);
      onRetry = onRetry.onRetry;
      const tmp4 = closure_8();
      if (cResult[0] !== tmp4.image) {
        const obj2 = { source: AssetRegistryDefault, style: tmp4.image };
        const tmp9 = hasOwnProperty(_false, obj2);
        cResult[0] = tmp4.image;
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: ActivateDeviceSharedStylesDefault.centerText,
          children: intl.string(intl4.t["3dgwPD"]),
        };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp13 = hasOwnProperty(Text, obj3);
        cResult[2] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items };
        items = [tmp10];
        const obj5 = {
          variant: "text-md/medium",
          color: "text-default",
          style: ActivateDeviceSharedStylesDefault.centerText,
          children: intl2.string(intl4.t["/GAO1P"]),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        items[1] = hasOwnProperty(Text2, obj5);
        const tmp19 = metroRequire(React3, obj4);
        cResult[3] = tmp19;
        tmp14 = tmp19;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult = intl3.string(intl4.t["5911Lb"]);
        cResult[4] = stringResult;
        tmp20 = stringResult;
      } else {
        tmp20 = cResult[4];
      }
      if (cResult[5] !== onRetry) {
        const obj6 = { size: "lg", text: tmp20, onPress: onRetry, grow: true };
        const tmp24 = hasOwnProperty(components_Button_Button.Button, obj6);
        cResult[5] = onRetry;
        cResult[6] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        let tmp25;
        if (cResult[8] === tmp22) {
          tmp25 = cResult[9];
        }
        return tmp25;
      }
      const obj7 = { children: items1 };
      items1 = [tmp5, tmp14, tmp22];
      const tmp26 = metroRequire(metroImportDefault, obj7);
      cResult[7] = tmp5;
      cResult[8] = tmp22;
      cResult[9] = tmp26;
      tmp25 = tmp26;
    }
  : (onRetry) => {
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let tmp;
      onRetry = onRetry.onRetry;
      const obj = { children: items };
      const obj2 = { source: AssetRegistryDefault, style: tmp.image };
      tmp = closure_8();
      items = [hasOwnProperty(_false, obj2), ,];
      const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items1 };
      const obj4 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: ActivateDeviceSharedStylesDefault.centerText,
        children: intl.string(intl4.t["3dgwPD"]),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items1 = [hasOwnProperty(Text, obj4)];
      const obj5 = {
        variant: "text-md/medium",
        color: "text-default",
        style: ActivateDeviceSharedStylesDefault.centerText,
        children: intl2.string(intl4.t["/GAO1P"]),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items1[1] = hasOwnProperty(Text2, obj5);
      items[1] = metroRequire(React3, obj3);
      const obj6 = { size: "lg", text: intl3.string(intl4.t["5911Lb"]), onPress: onRetry, grow: true };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items[2] = hasOwnProperty(Button, obj6);
      return metroRequire(metroImportDefault, obj);
    };
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = tmp5;
