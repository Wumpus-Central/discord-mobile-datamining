// === Module 14201: EmptyState ===

// Module 14201 (EmptyState)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4456 */;
import Text_Text from "Text/Text" /* 4601 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
fn(4605);
let createStyles = { container: null, emptyImage: null, emptyTitle: null, emptyBody: null };
createStyles = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.emptyImage = { flex: 1, maxWidth: 300, maxHeight: 200 };
createStyles.emptyTitle = { marginTop: 20, textTransform: "uppercase" };
createStyles.emptyBody = { textAlign: "center", marginTop: 8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_7();
  let obj = shared;
  const themeContext = obj.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  let tmp2Result = shared;
  if (null != Illustration.Illustration) {
    obj = { accessible: false, importantForAccessibility: "no", accessibilityRole: "none", resizeMode: "contain", style: null };
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj.style = items;
    let tmp11Result = React4(Illustration.Illustration, obj);
  } else {
    tmp11Result = null;
    if (tmp9) {
      tmp2Result = shared;
      obj = { resizeMode: "contain", source: tmp2Result.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource, style: null };
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj.style = items1;
      tmp11Result = React4(React3, obj);
    }
    tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj1 = { style: null, accessible: true, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj1.style = items2;
  const items3 = [tmp11Result, , , ];
  let tmp17 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
    const items4 = [tmp.emptyTitle, tmp14, closure_6];
    obj2.style = items4;
    obj2.children = title;
    tmp17 = React4(Text_Text.Text, obj2);
  }
  items3[1] = tmp17;
  let tmp19 = null;
  if (null != body) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj3.style = items5;
    obj3.children = body;
    tmp19 = React4(Text_Text.Text, obj3);
  }
  items3[2] = tmp19;
  items3[3] = children;
  obj1.children = items3;
  return hasOwnProperty(React2, obj1);
};