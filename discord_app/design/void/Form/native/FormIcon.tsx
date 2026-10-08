// === Module 6827: FormIcon ===

// Module 6827 (FormIcon)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const native = ThemedIcon(1200);
require = fn;
let closure_2 = ["style", "color", "themedColor"];
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({ icon: { opacity: 0.6 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormIcon(arg0) {
  let ThemedIcon = require;
  let tmp = dependencyMap;
  const cResult = c.c(19);
  if (cResult[0] !== arg0) {
    ({ style, color, themedColor } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = color;
    cResult[2] = tmp9;
    cResult[3] = style;
    cResult[4] = themedColor;
    let tmp6 = themedColor;
    let tmp5 = style;
    let tmp4 = tmp9;
    let tmp3 = color;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const tmp10 = closure_5();
  if (null != tmp6) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp10.icon) {
        let tmp18 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp18) {
        }
      }
      ThemedIcon = native.ThemedIcon;
      const obj2 = { style: tmp18, themedColor: tmp6 };
      const merged = Object.assign(tmp4);
      tmp = <ThemedIcon style={tmp18} themedColor={tmp6} />;
      cResult[8] = tmp4;
      cResult[9] = tmp18;
      cResult[10] = tmp6;
      cResult[11] = tmp;
    }
    const items = [tmp10.icon, tmp5];
    cResult[5] = tmp5;
    cResult[6] = tmp10.icon;
    cResult[7] = items;
    tmp18 = items;
  } else {
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp10.icon) {
        let tmp11 = cResult[14];
      }
      if (cResult[15] === tmp3) {
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp11) {
            let tmp12 = cResult[18];
          }
          return tmp12;
        }
      }
      const obj3 = { style: tmp11, color: tmp3 };
      const merged1 = Object.assign(tmp4);
      const tmp17 = jsx(native.Icon, { style: tmp11, color: tmp3 });
      cResult[15] = tmp3;
      cResult[16] = tmp4;
      cResult[17] = tmp11;
      cResult[18] = tmp17;
      tmp12 = tmp17;
    }
    const items1 = [tmp10.icon, tmp5];
    cResult[12] = tmp5;
    cResult[13] = tmp10.icon;
    cResult[14] = items1;
    tmp11 = items1;
  }
}) : (function FormIcon(color) {
  ({ style, themedColor } = color);
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0, themedColor: 0 }));
  const tmp2 = closure_5();
  if (null != themedColor) {
    const obj2 = { style: null, themedColor: null };
    const items = [tmp2.icon, style];
    obj2.style = items;
    obj2.themedColor = themedColor;
    const merged1 = Object.assign(merged);
    let tmp9 = jsx(native.ThemedIcon, { style: null, themedColor: null });
  } else {
    const obj = { style: null, color: null };
    const items1 = [tmp2.icon, style];
    obj.style = items1;
    obj.color = color.color;
    const merged2 = Object.assign(merged);
    tmp9 = jsx(native.Icon, { style: null, color: null });
  }
  return tmp9;
});