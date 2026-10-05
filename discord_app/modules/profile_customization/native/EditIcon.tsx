// === Module 14439: EditIcon ===

// Module 14439 (EditIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PencilIcon from "PencilIcon" /* 10058 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { editIcon: obj2, xs: size, sm: size1 };
createStyles = createStyles.createStyles;
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
let closure_5 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let style;
  const obj = react2;
  const cResult = obj.c(9);
  ({ style, size } = arg0);
  let str = "xs";
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = closure_5();
  const tmp5 = "sm" === str ? tmp4.sm : tmp4.xs;
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.editIcon) {
      let tmp6;
      let tmp7;
      if (cResult[2] === tmp5) {
        tmp6 = cResult[3];
      }
      const iconContainerStyle = tmp6.iconContainerStyle;
      if (cResult[4] !== str) {
        const tmp9 = jsx(PencilIcon.PencilIcon, { size: str });
        cResult[4] = str;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === iconContainerStyle) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const tmp13 = <View style={iconContainerStyle}>{tmp7}</View>;
      cResult[6] = iconContainerStyle;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const obj4 = { iconContainerStyle: items };
  items = [tmp4.editIcon, tmp5, style];
  cResult[0] = style;
  cResult[1] = tmp4.editIcon;
  cResult[2] = tmp5;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : ((style) => {
  style = style.style;
  let str = style.size;
  if (str === undefined) {
    str = "xs";
  }
  const tmp = closure_5();
  let closure_2 = tmp;
  const items = [tmp, style, str];
  return <View style={react.useMemo(() => {
    const iconContainerStyle = [editIcon.editIcon, "sm" === str ? editIcon.sm : editIcon.xs, style];
    return { iconContainerStyle };
  }, items).iconContainerStyle}>{jsx(PencilIcon.PencilIcon, { size: str })}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default tmp3;