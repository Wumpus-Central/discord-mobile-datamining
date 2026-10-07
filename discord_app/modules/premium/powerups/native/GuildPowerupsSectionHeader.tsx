// discord_app/modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { headerContainer: { padding: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj);
let obj2 = { padding: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      ({ title, description } = arg0);
      const tmp4 = closure_5();
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
      if (cResult[0] !== title) {
        const obj3 = { variant: "heading-lg/semibold", accessibilityRole: "header", children: title };
        const tmp8 = React3(Text_Text.Text, obj3);
        cResult[0] = title;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      let str = "text-md/normal";
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-sm/normal";
      }
      if (cResult[2] === description) {
        if (cResult[3] === str) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.headerContainer) {
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp9) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
        const obj4 = { style: tmp4.headerContainer, children: null };
        const items = [tmp6, tmp9];
        obj4.children = items;
        const tmp14 = React4(View, obj4);
        cResult[5] = tmp4.headerContainer;
        cResult[6] = tmp6;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = React3(Text_Text.Text, { variant: str, children: description });
      cResult[2] = description;
      cResult[3] = str;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      ({ title, description } = arg0);
      const tmp = closure_5();
      const obj2 = { style: tmp.headerContainer, children: null };
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
      const items = [
        React3(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }),
      ];
      let str = "text-md/normal";
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-sm/normal";
      }
      items[1] = React3(Text_Text.Text, { variant: str, children: description });
      obj2.children = items;
      return React4(View, obj2);
    };
