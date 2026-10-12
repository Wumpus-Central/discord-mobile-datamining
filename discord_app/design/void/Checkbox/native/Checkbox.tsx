// === Module 14396: Checkbox/Checkbox ===

// Module 14396 (Checkbox/Checkbox)
import c from "c" /* 576 */;
import _modDef14397 from "module_14397" /* 14397 */;
import _modDef14398 from "module_14398" /* 14398 */;
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
      tmp = _modDef14397;
      obj2.source = tmp;
      const tmp12 = <Image style={style} source={null} />;
      cResult[0] = style;
      cResult[1] = tmp12;
    }
  } else {
    if (cResult[2] !== style) {
      const obj3 = { style, source: _modDef14398 };
      const tmp7 = <Image style={style} source={_modDef14398} />;
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
    obj.source = _modDef14397;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14398;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
});