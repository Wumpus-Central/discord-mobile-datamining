// discord_app/components_native/premium/PremiumPerksList.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import react from "../../../_runtime/00019_react.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, perks;

let c3;
let closure_4;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = {
  perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 },
  perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 },
  perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 },
  perkIconContainer: size,
};
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
};
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (perks) => {
      let closure_0;
      let tmp4;
      let obj = require("react");
      const cResult = obj.c(12);
      perks = perks.perks;
      const tmp2 = closure_5();
      _require = tmp2;
      if (cResult[0] === perks) {
        if (cResult[1] === tmp2.perkIconContainer) {
          if (cResult[2] === tmp2.perkInfoContainer) {
            if (cResult[3] === tmp2.perkInfoTextContainer) {
              tmp4 = cResult[4];
            }
            if (cResult[9] === tmp2.perkListContainer) {
              let tmp7;
              if (cResult[10] === tmp4) {
                tmp7 = cResult[11];
              }
              return tmp7;
            }
            let obj2 = { style: tmp3, children: tmp4 };
            const tmp10 = closure_3(View, obj2);
            cResult[9] = tmp2.perkListContainer;
            cResult[10] = tmp4;
            cResult[11] = tmp10;
            tmp7 = tmp10;
          }
        }
      }
      if (cResult[5] === tmp2.perkIconContainer) {
        if (cResult[6] === tmp2.perkInfoContainer) {
          let tmp5;
          if (cResult[7] === tmp2.perkInfoTextContainer) {
            tmp5 = cResult[8];
          }
          const mapped = perks.map(tmp5);
          cResult[0] = perks;
          cResult[1] = tmp2.perkIconContainer;
          cResult[2] = tmp2.perkInfoContainer;
          cResult[3] = tmp2.perkInfoTextContainer;
          cResult[4] = mapped;
          tmp4 = mapped;
        }
      }
      const fn = function p(children, arg1) {
        let items;
        let items1;
        const obj = { style: closure_0.perkInfoContainer, children: items };
        items = [,];
        const obj2 = { style: closure_0.perkIconContainer, children: _false(children.IconComponent, { size: "md" }) };
        items[0] = _false(View, obj2);
        const obj3 = { style: closure_0.perkInfoTextContainer, children: items1 };
        items1 = [,];
        const obj4 = { variant: "text-md/bold", color: "text-strong", children: children.label };
        items1[0] = _false(Text_Text.Text, obj4);
        const obj5 = { variant: "text-md/medium", color: "text-default", children: children.description };
        items1[1] = _false(Text_Text.Text, obj5);
        items[1] = React3(View, obj3);
        return React3(View, obj, arg1);
      };
      cResult[5] = tmp2.perkIconContainer;
      cResult[6] = tmp2.perkInfoContainer;
      cResult[7] = tmp2.perkInfoTextContainer;
      cResult[8] = fn;
      tmp5 = fn;
    }
  : (perks) => {
      perks = perks.perks;
      const tmp = closure_5();
      let closure_0 = tmp;
      let obj = {
        style: tmp.perkListContainer,
        children: perks.map((children, index) => {
          let items;
          let items1;
          const obj = { style: closure_0.perkInfoContainer, children: items };
          items = [,];
          const obj2 = { style: closure_0.perkIconContainer, children: _false(children.IconComponent, { size: "md" }) };
          items[0] = _false(View, obj2);
          const obj3 = { style: closure_0.perkInfoTextContainer, children: items1 };
          items1 = [,];
          const obj4 = { variant: "text-md/bold", color: "text-strong", children: children.label };
          items1[0] = _false(Text_Text.Text, obj4);
          const obj5 = { variant: "text-md/medium", color: "text-default", children: children.description };
          items1[1] = _false(Text_Text.Text, obj5);
          items[1] = React3(View, obj3);
          return React3(View, obj, index);
        }),
      };
      return closure_3(View, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default tmp4;
