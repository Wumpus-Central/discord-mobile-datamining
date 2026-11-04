// === Module 16238: EmptyState ===

// Module 16238 (EmptyState)
import nativeDefault from "native" /* 575 */;
import shared from "shared" /* 5148 */;
import Text_Text from "Text/Text" /* 5761 */;
import FastImageDefault from "FastImage" /* 5851 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
const createStyles = fn(5141);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, textGroup: { alignSelf: "stretch", alignItems: "center" }, emptyTitle: { marginTop: 20 }, emptyBody: { textAlign: "center", marginTop: 8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_7();
  shared;
  if (null != Illustration.Illustration) {
    const obj2 = {};
    const merged = Object.assign(closure_6);
    obj2.resizeMode = "contain";
    items = [tmp.emptyImage, Illustration.imageStyle];
    obj2.style = items;
    let tmp8Result = React4(Illustration.Illustration, obj2);
  } else {
    tmp8Result = null;
    if (tmp6) {
      const obj = {};
      const merged1 = Object.assign(closure_6);
      obj.resizeMode = "contain";
      const tmp10 = FastImageDefault;
      obj.source = shared.isThemeLight(tmp5) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj.style = items1;
      tmp8Result = React4(tmp10, obj);
      const tmp2Result = shared;
    }
    tmp6 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj3 = { style: null, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj3.style = items2;
  const items3 = [tmp8Result, , ];
  if (null != title) {
    const obj4 = { style: tmp.textGroup, accessible: true, children: null };
    let tmp23 = null;
    if (null != title) {
      const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
      const items4 = [tmp.emptyTitle, tmp19];
      obj5.style = items4;
      obj5.children = title;
      tmp23 = React4(Text_Text.Text, obj5);
    }
    const items5 = [tmp23, ];
    let tmp25 = null;
    if (null != body) {
      const obj6 = { variant: "body-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
      const items6 = [tmp.emptyBody, tmp18];
      obj6.style = items6;
      obj6.children = body;
      tmp25 = React4(Text_Text.Text, obj6);
    }
    items5[1] = tmp25;
    obj4.children = items5;
    let tmp20Result = hasOwnProperty(View, obj4);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  items3[2] = Illustration.children;
  obj3.children = items3;
  return hasOwnProperty(View, obj3);
};