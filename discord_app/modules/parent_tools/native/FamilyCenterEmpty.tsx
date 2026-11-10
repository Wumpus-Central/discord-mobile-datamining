// === Module 17168: FamilyCenterEmpty ===

// Module 17168 (FamilyCenterEmpty)
import Text_Text from "Text/Text" /* 5753 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_4 = createStyles.createStyles({ empty: { display: "flex", alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  return <View style={closure_4().empty}>{jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-muted", children: children.text })}</View>;
};