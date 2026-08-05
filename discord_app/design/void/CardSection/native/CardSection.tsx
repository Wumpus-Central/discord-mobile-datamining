// discord_app/design/void/CardSection/native/CardSection.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: null, card: null };
createCacheKey[1] = require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 });
createCacheKey = { borderRadius: require("Themes").radii.xs, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  let accessibilityLabel;
  let accessibilityRole;
  let cardStyle;
  let children;
  let headerComponent;
  let style;
  let title;
  let titleStyle;
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, accessibilityRole, accessibilityLabel, children: null };
  items = [tmp.container, style];
  let tmp4 = null;
  if (null != title) {
    obj = { style: null, accessibilityRole: "header", children: null };
    const items1 = [tmp.title, titleStyle];
    obj[0] = items1;
    obj[2] = title;
    tmp4 = callback(importDefault(7809), obj);
  }
  const items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    obj = { style: null, children: null };
    const items3 = [tmp.card, cardStyle];
    obj[0] = items3;
    obj[1] = children;
    tmp9 = callback(tmp3, obj);
  }
  items2[2] = tmp9;
  obj[3] = items2;
  return closure_4(View, obj);
};