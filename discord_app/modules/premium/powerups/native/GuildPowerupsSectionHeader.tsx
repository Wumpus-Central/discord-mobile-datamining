// === Module 12552: GuildPowerupsSectionHeader ===

// Module 12552 (GuildPowerupsSectionHeader)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 8095 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { headerContainer: null };
obj = { padding: nativeDefault.space.PX_16 };
obj.headerContainer = obj;
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  ({ title, description } = arg0);
  const obj = { style: closure_5().headerContainer, children: null };
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
  const items = [React3(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), ];
  let str = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  items[1] = React3(Text_Text.Text, { variant: str, children: description });
  obj.children = items;
  return React4(View, obj);
};