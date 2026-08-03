// === Module 13218: IconPill ===

// Module 13218 (IconPill)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { pillContainer: null, pillIcon: null, pillText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md, height: 20, paddingHorizontal: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: require("Themes").colors.TEXT_SUBTLE, marginRight: 4 };
const obj1 = { tintColor: require("Themes").colors.TEXT_SUBTLE, marginRight: 4 };
createCacheKey[2] = { fontFamily: require("sum").Fonts.PRIMARY_NORMAL, color: require("Themes").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { fontFamily: require("sum").Fonts.PRIMARY_NORMAL, color: require("Themes").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
const result = require("sum").fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default function IconPill(IconComponent) {
  let accessibilityLabel;
  let source;
  let style;
  let text;
  let textStyle;
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = createCacheKey();
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
    obj[1] = importDefault(4668).Sizes.EXTRA_SMALL;
    obj[2] = tmp.pillIcon;
    tmp8 = callback;
    tmp9 = callback(importDefault(4668), obj);
    const tmp7 = importDefault(4668);
  }
  const items1 = [tmp9, ];
  const items2 = [tmp.pillText, textStyle];
  items1[1] = tmp8(importDefault(7797), { style: items2, numberOfLines: 1, accessibilityLabel, children: text });
  obj[1] = items1;
  return closure_4(View, obj);
};