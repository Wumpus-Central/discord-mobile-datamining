// discord_app/modules/parent_tools/native/FamilyCenterEmpty.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../_runtime/14725_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let text;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  art: { marginBottom: 10, width: 243 },
  empty: { display: "flex", alignItems: "center" },
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      let items;
      let tmp10;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      text = text.text;
      const tmp4 = closure_7();
      if (cResult[0] !== tmp4.art) {
        const obj2 = { source: AssetRegistryDefault, style: tmp4.art, resizeMethod: "scale" };
        const tmp9 = hasOwnProperty(React3, obj2);
        cResult[0] = tmp4.art;
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== text) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: text };
        const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[2] = text;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp4.empty) {
        if (cResult[5] === tmp5) {
          let tmp13;
          if (cResult[6] === tmp10) {
            tmp13 = cResult[7];
          }
          return tmp13;
        }
      }
      const obj4 = { style: tmp4.empty, children: items };
      items = [tmp5, tmp10];
      const tmp14 = metroRequire(_false, obj4);
      cResult[4] = tmp4.empty;
      cResult[5] = tmp5;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : (text) => {
      let items;
      text = text.text;
      const tmp = closure_7();
      const obj = { style: tmp.empty, children: items };
      items = [,];
      const obj2 = { source: AssetRegistryDefault, style: tmp.art, resizeMethod: "scale" };
      items[0] = hasOwnProperty(React3, obj2);
      items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text });
      return metroRequire(_false, obj);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default tmp5;
