// === Module 15006: FamilyCenterEmpty ===

// Module 15006 (FamilyCenterEmpty)
import Text_Text from "Text/Text" /* 4632 */;
import _modDef15007 from "module_15007" /* 15007 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = closure_7();
  const obj = { style: tmp.empty, children: null };
  const items = [hasOwnProperty(React4, { source: _modDef15007, style: tmp.art, resizeMethod: "scale" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj.children = items;
  return timestampProducer(React3, obj);
};