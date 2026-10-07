// === Module 15365: AppIcon ===

// Module 15365 (AppIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const getIconById = fn(8858).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { container: { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, image: { resizeMode: "contain", height: "100%", width: "100%" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ id, size, style } = arg0);
  let num = 56;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_7();
  if (cResult[0] !== id) {
    const tmp8 = getIconById(id);
    cResult[0] = id;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  const tmp5 = useThemeDefault();
  let num4 = 1;
  if (tmpResult.isThemeDark(tmp5)) {
    num4 = 0;
  }
  if (cResult[2] === num4) {
    if (cResult[3] === num) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === style) {
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        const iconSource = tmp6.iconSource;
        if (cResult[9] === tmp4.image) {
          if (cResult[10] === iconSource) {
            let tmp11 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp11) {
              let tmp15 = cResult[14];
            }
            return tmp15;
          }
          const obj2 = { style: tmp10, children: tmp11 };
          const tmp18 = <React4 style={tmp10}>{tmp11}</React4>;
          cResult[12] = tmp10;
          cResult[13] = tmp11;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
        const obj3 = { style: tmp4.image, source: iconSource };
        const tmp14 = <React3 style={tmp4.image} source={iconSource} />;
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
  tmpResult = shared;
}) : ((size) => {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = closure_7();
  const tmp2 = useThemeDefault();
  const tmp3 = getIconById(size.id);
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  const obj2 = { style: null, children: <React3 style={tmp.image} source={tmp3.iconSource} /> };
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj2.style = items;
  return <React4 style={null}><React3 style={tmp.image} source={tmp3.iconSource} /></React4>;
});