// discord_app/modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  const items = [
    React3(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }),
  ];
  let str = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  items[1] = React3(Text_Text.Text, { variant: str, children: description });
  obj.children = items;
  return React4(View, obj);
}
