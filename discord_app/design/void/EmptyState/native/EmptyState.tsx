// discord_app/design/void/EmptyState/native/EmptyState.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { AccessibilityAnnouncer } from "../../../shared.tsx";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ View: obj1, Image: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, emptyImage: null, emptyTitle: null, emptyBody: null };
createCacheKey = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, maxWidth: 300, maxHeight: 200 };
createCacheKey[2] = { marginTop: 20, textTransform: "uppercase" };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  let body;
  let bodyStyle;
  let children;
  let title;
  const tmp = createCacheKey();
  AccessibilityAnnouncer;
  if (null != Illustration.Illustration) {
    let obj = { accessible: false, importantForAccessibility: "no", accessibilityRole: "none", resizeMode: "contain", style: null };
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj[4] = items;
    let tmp8Result = callback(Illustration.Illustration, obj);
  } else {
    tmp8Result = null;
    if (tmp6) {
      obj = { resizeMode: "contain", source: null, style: null };
      obj[1] = tmp2(4101).isThemeLight(tmp5) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj[2] = items1;
      tmp8Result = callback(closure_3, obj);
      const tmp2Result = tmp2(4101);
      const tmp8 = callback;
      const tmp9 = closure_3;
    }
    tmp6 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj1 = { style: items2, accessible: true, children: null };
  items2 = [tmp.container, Illustration.style];
  const items3 = [tmp8Result, , , ];
  let tmp14 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
    const items4 = [tmp.emptyTitle, tmp11];
    obj2[3] = items4;
    obj2[4] = title;
    tmp14 = callback(tmp2(4251).Text, obj2);
  }
  items3[1] = tmp14;
  let tmp16 = null;
  if (null != body) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj3[3] = items5;
    obj3[4] = body;
    tmp16 = callback(tmp2(4251).Text, obj3);
  }
  items3[2] = tmp16;
  items3[3] = children;
  obj1[2] = items3;
  return closure_5(closure_2, obj1);
};