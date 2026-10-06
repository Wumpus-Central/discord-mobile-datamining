// discord_app/design/void/Form/native/FormArrow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../../_runtime/06645_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: obj2 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let items2;
      let label;
      let style;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      ({ label, style } = arg0);
      const tmp4 = closure_6();
      if (null != label) {
        let tmp9;
        if (cResult[0] !== label) {
          const obj2 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
          const tmp11 = React3(Text_Text.Text, obj2);
          cResult[0] = label;
          cResult[1] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] === style) {
          let tmp12;
          if (cResult[3] === tmp4.icon) {
            tmp12 = cResult[4];
          }
          if (cResult[5] === tmp4.wrapper) {
            if (cResult[6] === tmp9) {
              let tmp16;
              if (cResult[7] === tmp12) {
                tmp16 = cResult[8];
              }
              tmp5 = tmp16;
            }
          }
          const obj3 = { style: tmp4.wrapper, children: items };
          items = [tmp9, tmp12];
          const tmp19 = hasOwnProperty(View, obj3);
          cResult[5] = tmp4.wrapper;
          cResult[6] = tmp9;
          cResult[7] = tmp12;
          cResult[8] = tmp19;
          tmp16 = tmp19;
        }
        const obj4 = { style: items1, source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
        items1 = [tmp4.icon, style];
        const Icon2 = native.Icon;
        const tmp15 = React3(Icon2, obj4);
        cResult[2] = style;
        cResult[3] = tmp4.icon;
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        if (cResult[9] === style) {
          if (cResult[10] === tmp4.icon) {
            tmp5 = cResult[11];
          }
        }
        const obj5 = { style: items2, source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
        items2 = [tmp4.icon, style];
        const Icon = native.Icon;
        const tmp8 = React3(Icon, obj5);
        cResult[9] = style;
        cResult[10] = tmp4.icon;
        cResult[11] = tmp8;
        tmp5 = tmp8;
      }
      return tmp5;
    }
  : (arg0) => {
      let items;
      let items1;
      let items2;
      let label;
      let style;
      let tmp6;
      ({ label, style } = arg0);
      const tmp = closure_6();
      if (null != label) {
        const obj2 = { style: tmp.wrapper, children: items };
        const obj3 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
        items = [React3(Text_Text.Text, obj3)];
        const obj4 = { style: items1, source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
        items1 = [tmp.icon, style];
        const Icon2 = native.Icon;
        items[1] = React3(Icon2, obj4);
        tmp6 = hasOwnProperty(View, obj2);
      } else {
        const obj = { style: items2, source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
        items2 = [tmp.icon, style];
        const Icon = native.Icon;
        tmp6 = React3(Icon, obj);
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default tmp4;
