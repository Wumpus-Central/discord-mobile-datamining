// === Module 14612: EditIcon ===

// Module 14612 (EditIcon)
import nativeDefault from "native" /* 576 */;
import PencilIcon from "PencilIcon" /* 10250 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { editIcon: null, xs: null, sm: null };
createStyles = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.editIcon = createStyles;
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md };
createStyles.xs = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
createStyles.sm = size1;
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default function EditIcon(style) {
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
};