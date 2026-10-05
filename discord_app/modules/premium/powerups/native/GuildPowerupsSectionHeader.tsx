// discord_app/modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { headerContainer: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let items;
      let title;
      let tmp6;
      const obj = react;
      const cResult = obj.c(9);
      ({ title, description } = arg0);
      const tmp4 = closure_5();
      const obj2 = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
      if (cResult[0] !== title) {
        const obj3 = { variant: "heading-lg/semibold", accessibilityRole: "header", children: title };
        const tmp8 = _false(Text_Text.Text, obj3);
        cResult[0] = title;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      let str = "text-md/normal";
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-sm/normal";
      }
      if (cResult[2] === description) {
        let tmp9;
        if (cResult[3] === str) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.headerContainer) {
          if (cResult[6] === tmp6) {
            let tmp11;
            if (cResult[7] === tmp9) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
        const obj4 = { style: tmp4.headerContainer, children: items };
        items = [tmp6, tmp9];
        const tmp14 = React3(View, obj4);
        cResult[5] = tmp4.headerContainer;
        cResult[6] = tmp6;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = _false(Text_Text.Text, { variant: str, children: description });
      cResult[2] = description;
      cResult[3] = str;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let description;
      let items;
      let title;
      ({ title, description } = arg0);
      const obj2 = { style: closure_5().headerContainer, children: items };
      const obj = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
      items = [
        _false(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }),
      ];
      let str = "text-md/normal";
      const Text = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-sm/normal";
      }
      items[1] = _false(Text, { variant: str, children: description });
      return React3(View, obj2);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default tmp3;
