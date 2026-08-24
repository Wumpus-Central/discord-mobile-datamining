// === Module 14098: EditIcon ===

// Module 14098 (EditIcon)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
createCacheKey = { editIcon: null, xs: null, sm: null };
createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 24, height: 24, borderRadius: ThemesDefault.radii.md };
const obj1 = { width: 24, height: 24, borderRadius: ThemesDefault.radii.md };
createCacheKey[2] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj2 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg };
const result = require("set").fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default function EditIcon(style) {
  style = style.style;
  let str = style.size;
  if (str === undefined) {
    str = "xs";
  }
  let React;
  const tmp = callback();
  React = tmp;
  const items = [tmp, style, str];
  return <View style={React.useMemo(() => {
    const iconContainerStyle = [editIcon.editIcon, "sm" === str ? editIcon.sm : editIcon.xs, style];
    return { iconContainerStyle };
  }, items).iconContainerStyle}>{jsx(style(str[5]).PencilIcon, { size: str })}</View>;
};