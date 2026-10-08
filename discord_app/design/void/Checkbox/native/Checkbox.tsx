// === Module 14222: Checkbox/Checkbox ===

// Module 14222 (Checkbox/Checkbox)
import c from "c" /* 576 */;
import _modDef14223 from "module_14223" /* 14223 */;
import _modDef14224 from "module_14224" /* 14224 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Checkbox(style) {
  let tmp = dependencyMap;
  const cResult = c.c(4);
  style = style.style;
  if (style.selected) {
    if (cResult[0] !== style) {
      const obj2 = { style, source: null };
      tmp = _modDef14223;
      obj2.source = tmp;
      const tmp12 = <Image style={style} source={null} />;
      cResult[0] = style;
      cResult[1] = tmp12;
    }
  } else {
    if (cResult[2] !== style) {
      const obj3 = { style, source: _modDef14224 };
      const tmp7 = <Image style={style} source={_modDef14224} />;
      cResult[2] = style;
      cResult[3] = tmp7;
      let tmp3 = tmp7;
    } else {
      tmp3 = cResult[3];
    }
    return tmp3;
  }
}) : (function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14223;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14224;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
});