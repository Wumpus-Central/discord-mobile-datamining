// discord_app/modules/icymi/native/ICYMIHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj2;
  const obj = { text: obj2, separator: size };
  obj2 = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  size = {
    height: 1,
    width: "100%",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: nativeDefault.space.PX_16,
  };
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let tmp11;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      const tmp4 = closure_7();
      if (cResult[0] !== tmp4.separator) {
        const obj2 = { style: tmp4.separator };
        const tmp8 = React3(View, obj2);
        cResult[0] = tmp4.separator;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      const text = tmp4.text;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["jnXV/V"]);
        cResult[2] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp4.text) {
        const obj3 = {
          style: text,
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: tmp9,
        };
        const tmp13 = React3(Text_Text.Text, obj3);
        cResult[3] = tmp4.text;
        cResult[4] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        let tmp14;
        if (cResult[6] === tmp11) {
          tmp14 = cResult[7];
        }
        return tmp14;
      }
      const obj4 = { children: items };
      items = [tmp5, tmp11];
      const tmp15 = metroRequire(hasOwnProperty, obj4);
      cResult[5] = tmp5;
      cResult[6] = tmp11;
      cResult[7] = tmp15;
      tmp14 = tmp15;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_7();
      const obj = { children: items };
      items = [,];
      const obj2 = { style: tmp.separator };
      items[0] = React3(View, obj2);
      const obj3 = {
        style: tmp.text,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl2.t["jnXV/V"]),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = React3(Text, obj3);
      return metroRequire(hasOwnProperty, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default tmp4;
