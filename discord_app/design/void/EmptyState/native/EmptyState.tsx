// === Module 14126: EmptyState ===

// Module 14126 (EmptyState)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4411 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, emptyImage: null, emptyTitle: null, emptyBody: null };
createStyles = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.emptyImage = { flex: 1, maxWidth: 300, maxHeight: 200 };
createStyles.emptyTitle = { marginTop: 20, textTransform: "uppercase" };
createStyles.emptyBody = { textAlign: "center", marginTop: 8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_6();
  shared;
  if (null != Illustration.Illustration) {
    let obj = { accessible: false, importantForAccessibility: "no", accessibilityRole: "none", resizeMode: "contain", style: null };
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj.style = items;
    let tmp8Result = React4(Illustration.Illustration, obj);
  } else {
    tmp8Result = null;
    if (tmp6) {
      obj = { resizeMode: "contain", source: tmp2(4411).isThemeLight(tmp5) ? Illustration.lightSource : Illustration.darkSource, style: null };
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj.style = items1;
      tmp8Result = React4(React3, obj);
      const tmp2Result = tmp2(4411);
    }
    tmp6 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj1 = { style: null, accessible: true, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj1.style = items2;
  const items3 = [tmp8Result, , , ];
  let tmp14 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
    const items4 = [tmp.emptyTitle, tmp11];
    obj2.style = items4;
    obj2.children = title;
    tmp14 = React4(tmp2(4556).Text, obj2);
  }
  items3[1] = tmp14;
  let tmp16 = null;
  if (null != body) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj3.style = items5;
    obj3.children = body;
    tmp16 = React4(tmp2(4556).Text, obj3);
  }
  items3[2] = tmp16;
  items3[3] = children;
  obj1.children = items3;
  return hasOwnProperty(React2, obj1);
};