// discord_app/modules/profile_customization/native/EditIcon.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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