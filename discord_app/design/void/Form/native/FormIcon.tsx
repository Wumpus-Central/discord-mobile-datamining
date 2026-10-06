// === Module 6650: FormIcon ===

// Module 6650 (FormIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["style", "color", "themedColor"];
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ icon: { opacity: 0.6 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let style;
  let themedColor;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(19);
  if (cResult[0] !== arg0) {
    ({ style, color, themedColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = color;
    cResult[2] = tmp10;
    cResult[3] = style;
    cResult[4] = themedColor;
    tmp7 = themedColor;
    tmp6 = style;
    tmp5 = tmp10;
    tmp4 = color;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const tmp11 = closure_5();
  if (null != tmp7) {
    if (cResult[5] === tmp6) {
      let tmp19;
      if (cResult[6] === tmp11.icon) {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp19) {
          let tmp20;
          if (cResult[10] === tmp7) {
            tmp20 = cResult[11];
          }
          tmp13 = tmp20;
        }
      }
      const ThemedIcon = native.ThemedIcon;
      const merged = Object.assign(tmp5);
      const tmp25 = <ThemedIcon style={tmp19} themedColor={tmp7} />;
      cResult[8] = tmp5;
      cResult[9] = tmp19;
      cResult[10] = tmp7;
      cResult[11] = tmp25;
      tmp20 = tmp25;
    }
    const items = [tmp11.icon, tmp6];
    cResult[5] = tmp6;
    cResult[6] = tmp11.icon;
    cResult[7] = items;
    tmp19 = items;
  } else {
    if (cResult[12] === tmp6) {
      let tmp12;
      if (cResult[13] === tmp11.icon) {
        tmp12 = cResult[14];
      }
      if (cResult[15] === tmp4) {
        if (cResult[16] === tmp5) {
          if (cResult[17] === tmp12) {
            tmp13 = cResult[18];
          }
        }
      }
      const Icon = native.Icon;
      const merged1 = Object.assign(tmp5);
      const tmp18 = <Icon style={tmp12} color={tmp4} />;
      cResult[15] = tmp4;
      cResult[16] = tmp5;
      cResult[17] = tmp12;
      cResult[18] = tmp18;
      tmp13 = tmp18;
    }
    const items1 = [tmp11.icon, tmp6];
    cResult[12] = tmp6;
    cResult[13] = tmp11.icon;
    cResult[14] = items1;
    tmp12 = items1;
  }
  return tmp13;
}) : ((color) => {
  let style;
  let themedColor;
  let tmp9;
  ({ style, themedColor } = color);
  color = color.color;
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0, themedColor: 0 }));
  const tmp2 = closure_5();
  if (null != themedColor) {
    const items = [tmp2.icon, style];
    const ThemedIcon = native.ThemedIcon;
    const merged1 = Object.assign(merged);
    tmp9 = <ThemedIcon style={items} themedColor={themedColor} />;
  } else {
    const items1 = [tmp2.icon, style];
    const Icon = native.Icon;
    const merged2 = Object.assign(merged);
    tmp9 = <Icon style={items1} color={color} />;
  }
  return tmp9;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default tmp3;