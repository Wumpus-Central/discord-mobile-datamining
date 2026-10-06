// === Module 15365: AppIcon ===

// Module 15365 (AppIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import AppIconConstants from "AppIconConstants" /* 8858 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ Image: c3, View: closure_4 } = react_native);
const getIconById = AppIconConstants.getIconById;
const jsx = Fragment.jsx;
let obj = { container: obj2, image: { resizeMode: "contain", height: "100%", width: "100%" } };
obj2 = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let id;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  ({ id, size, style } = arg0);
  let num = 56;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_7();
  const tmp5 = useThemeDefault();
  if (cResult[0] !== id) {
    const tmp8 = getIconById(id);
    cResult[0] = id;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  let num4 = 1;
  const tmpResult = shared;
  if (tmpResult.isThemeDark(tmp5)) {
    num4 = 0;
  }
  if (cResult[2] === num4) {
    let tmp9;
    if (cResult[3] === num) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === style) {
      if (cResult[6] === tmp4.container) {
        let tmp10;
        if (cResult[7] === tmp9) {
          tmp10 = cResult[8];
        }
        const iconSource = tmp6.iconSource;
        if (cResult[9] === tmp4.image) {
          let tmp11;
          if (cResult[10] === iconSource) {
            tmp11 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            let tmp15;
            if (cResult[13] === tmp11) {
              tmp15 = cResult[14];
            }
            return tmp15;
          }
          const tmp18 = <React3 style={tmp10}>{tmp11}</React3>;
          cResult[12] = tmp10;
          cResult[13] = tmp11;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
        const tmp14 = <_false style={tmp4.image} source={iconSource} />;
        cResult[9] = tmp4.image;
        cResult[10] = iconSource;
        cResult[11] = tmp14;
        tmp11 = tmp14;
      }
    }
    const items = [tmp4.container, tmp9, style];
    cResult[5] = style;
    cResult[6] = tmp4.container;
    cResult[7] = tmp9;
    cResult[8] = items;
    tmp10 = items;
  }
  const size1 = { width: num, height: num, borderWidth: num4 };
  cResult[2] = num4;
  cResult[3] = num;
  cResult[4] = size1;
  tmp9 = size1;
}) : ((size) => {
  let num = size.size;
  const id = size.id;
  if (num === undefined) {
    num = 56;
  }
  const style = size.style;
  const tmp = closure_7();
  const tmp2 = useThemeDefault();
  let num2 = 1;
  const tmp3 = getIconById(id);
  const obj = shared;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, style];
  return <React3 style={items}>{null}</React3>;
});
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default tmp4;