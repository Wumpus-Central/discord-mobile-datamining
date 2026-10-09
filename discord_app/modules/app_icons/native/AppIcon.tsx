// === Module 15740: AppIcon ===

// Module 15740 (AppIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import FastImageDefault from "FastImage" /* 6163 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const getIconById = fn(9439).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, image: { resizeMode: "contain", height: "100%", width: "100%" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppIcon(arg0) {
  const cResult = c.c(15);
  ({ id, size, style } = arg0);
  let num = 56;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_6();
  if (cResult[0] !== id) {
    const tmp9 = getIconById(id);
    cResult[0] = id;
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  const tmp6 = useThemeDefault();
  let num4 = 1;
  if (tmpResult.isThemeDark(tmp6)) {
    num4 = 0;
  }
  if (cResult[2] === num4) {
    if (cResult[3] === num) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === style) {
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp10) {
          let tmp11 = cResult[8];
        }
        const iconSource = tmp7.iconSource;
        if (cResult[9] === tmp4.image) {
          if (cResult[10] === iconSource) {
            let tmp12 = cResult[11];
          }
          if (cResult[12] === tmp11) {
            if (cResult[13] === tmp12) {
              let tmp15 = cResult[14];
            }
            return tmp15;
          }
          const obj2 = { style: tmp11, children: tmp12 };
          const tmp18 = <View style={tmp11}>{tmp12}</View>;
          cResult[12] = tmp11;
          cResult[13] = tmp12;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
        const obj3 = { style: tmp4.image, source: iconSource };
        const tmp14 = jsx(FastImageDefault, { style: tmp4.image, source: iconSource });
        cResult[9] = tmp4.image;
        cResult[10] = iconSource;
        cResult[11] = tmp14;
        tmp12 = tmp14;
      }
    }
    const items = [tmp4.container, tmp10, style];
    cResult[5] = style;
    cResult[6] = tmp4.container;
    cResult[7] = tmp10;
    cResult[8] = items;
    tmp11 = items;
  }
  const size1 = { width: num, height: num, borderWidth: num4 };
  cResult[2] = num4;
  cResult[3] = num;
  cResult[4] = size1;
  tmp10 = size1;
  tmpResult = shared;
}) : (function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = closure_6();
  const tmp4 = useThemeDefault();
  const tmp5 = getIconById(size.id);
  let num2 = 1;
  if (obj.isThemeDark(tmp4)) {
    num2 = 0;
  }
  const obj2 = { style: null, children: jsx(FastImageDefault, { style: tmp.image, source: tmp5.iconSource }) };
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj2.style = items;
  return <View style={null}>{jsx(FastImageDefault, { style: tmp.image, source: tmp5.iconSource })}</View>;
});