// discord_app/design/void/IconPill/native/IconPill.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconSizesDefault from "../../Icon/native/Icon.tsx";
import _modDef8323 from "../../LegacyText/native/LegacyText.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { pillContainer: null, pillIcon: null, pillText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md, height: 20, paddingHorizontal: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE, marginRight: 4 };
const obj1 = { tintColor: ThemesDefault.colors.TEXT_SUBTLE, marginRight: 4 };
createCacheKey[2] = { fontFamily: require("sum").Fonts.PRIMARY_NORMAL, color: ThemesDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj2 = { fontFamily: require("sum").Fonts.PRIMARY_NORMAL, color: ThemesDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
const result = require("set").fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default function IconPill(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [tmp.pillContainer, style];
  if (null != IconComponent) {
    obj = { size: "xxs", style: null };
    obj[1] = tmp.pillIcon;
    let tmp9 = callback(IconComponent, obj);
    let tmp8 = callback;
  } else {
    obj = { source: null, size: null, style: null };
    obj[0] = source;
    obj[1] = IconSizesDefault.Sizes.EXTRA_SMALL;
    obj[2] = tmp.pillIcon;
    tmp8 = callback;
    tmp9 = callback(IconSizesDefault, obj);
    const tmp7 = IconSizesDefault;
  }
  const items1 = [tmp9, ];
  const items2 = [tmp.pillText, textStyle];
  items1[1] = tmp8(_modDef8323, { style: items2, numberOfLines: 1, accessibilityLabel, children: text });
  obj[1] = items1;
  return closure_4(View, obj);
};