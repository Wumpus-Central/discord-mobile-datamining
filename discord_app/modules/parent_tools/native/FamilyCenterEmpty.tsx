// === Module 15113: FamilyCenterEmpty ===

// Module 15113 (FamilyCenterEmpty)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef15114 from "module_15114" /* 15114 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterEmpty(text) {
  const cResult = c.c(8);
  text = text.text;
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.art) {
    const obj2 = { source: _modDef15114, style: tmp4.art, resizeMethod: "scale" };
    const tmp9 = React4(FastImageDefault, obj2);
    cResult[0] = tmp4.art;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== text) {
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: text };
    const tmp12 = React4(Text_Text.Text, obj3);
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
  const tmp14 = hasOwnProperty(View, obj4);
  cResult[4] = tmp4.empty;
  cResult[5] = tmp5;
  cResult[6] = tmp10;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function FamilyCenterEmpty(children) {
  const tmp = closure_6();
  const obj = { style: tmp.empty, children: null };
  const obj2 = { source: _modDef15114, style: tmp.art, resizeMethod: "scale" };
  const items = [React4(FastImageDefault, obj2), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});