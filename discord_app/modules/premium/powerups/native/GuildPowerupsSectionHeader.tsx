// === Module 12288: GuildPowerupsSectionHeader ===

// Module 12288 (GuildPowerupsSectionHeader)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6663 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { headerContainer: { padding: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj);
let obj2 = { padding: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsSectionHeader(arg0) {
  const cResult = c.c(9);
  ({ title, description } = arg0);
  const tmp4 = closure_5();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
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
}) : (function GuildPowerupsSectionHeader(arg0) {
  ({ title, description } = arg0);
  const tmp = closure_5();
  const obj2 = { style: tmp.headerContainer, children: null };
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
  const items = [React3(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), ];
  let str = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  items[1] = React3(Text_Text.Text, { variant: str, children: description });
  obj2.children = items;
  return React4(View, obj2);
});