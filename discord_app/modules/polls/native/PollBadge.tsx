// discord_app/modules/polls/native/PollBadge.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../_runtime/16867_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let style;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, text: { marginLeft: 4, textTransform: "uppercase" } };
obj2 = {
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  color: nativeDefault.colors.TEXT_MUTED,
  flexDirection: "row",
  alignItems: "center",
};
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let items;
      const obj = react2;
      const cResult = obj.c(10);
      style = style.style;
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        let tmp5;
        let tmp7;
        let tmp11;
        let tmp13;
        if (cResult[1] === tmp4.container) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: native.IconSizes.EXTRA_SMALL_10, source: AssetRegistryDefault };
          const Icon = native.Icon;
          const tmp10 = React3(Icon, obj2);
          cResult[3] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[3];
        }
        const _Symbol2 = Symbol;
        const text = tmp4.text;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.RgIi2B);
          cResult[4] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp4.text) {
          const obj3 = { style: text, variant: "text-xs/semibold", children: tmp11 };
          const tmp15 = React3(Text_Text.Text, obj3);
          cResult[5] = tmp4.text;
          cResult[6] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          let tmp16;
          if (cResult[8] === tmp13) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
        const obj4 = { style: tmp5, children: items };
        items = [tmp7, tmp13];
        const tmp19 = hasOwnProperty(View, obj4);
        cResult[7] = tmp5;
        cResult[8] = tmp13;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const items1 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : (style) => {
      let intl;
      let items;
      let items1;
      style = style.style;
      const tmp = closure_6();
      const obj = { style: items, children: items1 };
      items = [tmp.container, style];
      const obj2 = { size: native.IconSizes.EXTRA_SMALL_10, source: AssetRegistryDefault };
      const Icon = native.Icon;
      items1 = [React3(Icon, obj2)];
      const obj3 = { style: tmp.text, variant: "text-xs/semibold", children: intl.string(intl2.t.RgIi2B) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items1[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default tmp4;
