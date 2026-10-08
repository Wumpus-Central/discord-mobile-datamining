// === Module 15001: FamilyCenterEmpty ===

// Module 15001 (FamilyCenterEmpty)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5086 */;
import _modDef15002 from "module_15002" /* 15002 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterEmpty(text) {
  const cResult = c.c(8);
  text = text.text;
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.art) {
    const obj2 = { source: _modDef15002, style: tmp4.art, resizeMethod: "scale" };
    const tmp9 = hasOwnProperty(React4, obj2);
    cResult[0] = tmp4.art;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== text) {
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: text };
    const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = text;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.empty) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp10) {
        let tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const obj4 = { style: tmp4.empty, children: null };
  const items = [tmp5, tmp10];
  obj4.children = items;
  const tmp14 = timestampProducer(React3, obj4);
  cResult[4] = tmp4.empty;
  cResult[5] = tmp5;
  cResult[6] = tmp10;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function FamilyCenterEmpty(children) {
  const tmp = closure_7();
  const obj = { style: tmp.empty, children: null };
  const items = [hasOwnProperty(React4, { source: _modDef15002, style: tmp.art, resizeMethod: "scale" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj.children = items;
  return timestampProducer(React3, obj);
});