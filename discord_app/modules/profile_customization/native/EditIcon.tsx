// === Module 14455: EditIcon ===

// Module 14455 (EditIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PencilIcon from "PencilIcon" /* 10071 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { editIcon: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, xs: null, sm: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md };
obj2.xs = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
obj2.sm = size1;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ style, size } = arg0);
  let str = "xs";
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = closure_5();
  const tmp5 = "sm" === str ? tmp4.sm : tmp4.xs;
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.editIcon) {
      if (cResult[2] === tmp5) {
        let tmp6 = cResult[3];
      }
      const iconContainerStyle = tmp6.iconContainerStyle;
      if (cResult[4] !== str) {
        const obj2 = { size: str };
        const tmp9 = jsx(PencilIcon.PencilIcon, { size: str });
        cResult[4] = str;
        cResult[5] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === iconContainerStyle) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj3 = { style: iconContainerStyle, children: tmp7 };
      const tmp13 = <View style={iconContainerStyle}>{tmp7}</View>;
      cResult[6] = iconContainerStyle;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const obj4 = { iconContainerStyle: null };
  const items = [tmp4.editIcon, tmp5, style];
  obj4.iconContainerStyle = items;
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
  const editIcon = tmp;
  const items = [tmp, style, str];
  return <View style={noop.useMemo(() => {
    const iconContainerStyle = [editIcon.editIcon, "sm" === str ? editIcon.sm : editIcon.xs, style];
    return { iconContainerStyle };
  }, items).iconContainerStyle}>{jsx(PencilIcon.PencilIcon, { size: str })}</View>;
});