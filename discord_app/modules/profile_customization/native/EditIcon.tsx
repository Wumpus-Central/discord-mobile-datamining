// === Module 13793: EditIcon ===

// Module 13793 (EditIcon)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { editIcon: null, xs: null, sm: null };
createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 24, height: 24, borderRadius: require("Themes").radii.md };
const obj1 = { width: 24, height: 24, borderRadius: require("Themes").radii.md };
createCacheKey[2] = { width: 32, height: 32, borderRadius: require("Themes").radii.lg };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { width: 32, height: 32, borderRadius: require("Themes").radii.lg };
const result = require("jsxProd").fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default function EditIcon(style) {
  style = style.style;
  let str = style.size;
  if (str === undefined) {
    str = "xs";
  }
  let React;
  const tmp = createCacheKey();
  React = tmp;
  const items = [tmp, style, str];
  return <View style={React.useMemo(() => {
    const iconContainerStyle = [_undefined.editIcon, "sm" === str ? _undefined.sm : _undefined.xs, style];
    return { iconContainerStyle };
  }, items).iconContainerStyle}>{jsx(style(str[5]).PencilIcon, { size: str })}</View>;
};