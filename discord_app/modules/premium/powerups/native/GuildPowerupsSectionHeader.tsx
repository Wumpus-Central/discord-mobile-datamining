// === Module 10759: GuildPowerupsSectionHeader ===

// Module 10759 (GuildPowerupsSectionHeader)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5929 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { headerContainer: { padding: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  ({ title, description } = arg0);
  const obj = { style: closure_5().headerContainer, children: null };
  items = [React3(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), React3(Text_Text.Text, { variant: "body-sm/normal", children: description })];
  obj.children = items;
  return React4(View, obj);
};