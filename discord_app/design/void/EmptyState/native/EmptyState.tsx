// discord_app/design/void/EmptyState/native/EmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
let closure_7 = {
  accessible: false,
  accessibilityRole: "none",
  accessibilityElementsHidden: true,
  importantForAccessibility: "no-hide-descendants",
};
fn(4636);
let createStyles = { container: null, emptyImage: null, textGroup: null, emptyTitle: null, emptyBody: null };
createStyles = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 36,
  paddingBottom: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
createStyles.container = createStyles;
createStyles.emptyImage = { flex: 1, maxWidth: 300, maxHeight: 200 };
createStyles.textGroup = { alignSelf: "stretch", alignItems: "center" };
createStyles.emptyTitle = { marginTop: 20, textTransform: "uppercase" };
createStyles.emptyBody = { textAlign: "center", marginTop: 8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_8();
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
    obj = {};
    const merged = Object.assign(closure_7);
    obj.resizeMode = "contain";
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj.style = items;
    let tmp11Result = React4(Illustration.Illustration, obj);
  } else {
    tmp11Result = null;
    if (tmp9) {
      obj = {};
      const merged1 = Object.assign(closure_7);
      obj.resizeMode = "contain";
      tmp2Result = shared;
      obj.source = tmp2Result.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj.style = items1;
      tmp11Result = React4(React3, obj);
    }
    tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj1 = { style: null, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj1.style = items2;
  const items3 = [tmp11Result, ,];
  if (null != title) {
    const obj2 = { style: tmp.textGroup, accessible: true, children: null };
    let tmp25 = null;
    if (null != title) {
      const obj3 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        style: null,
        children: null,
      };
      const items4 = [tmp.emptyTitle, tmp21, closure_6];
      obj3.style = items4;
      obj3.children = title;
      tmp25 = React4(Text_Text.Text, obj3);
    }
    const items5 = [tmp25];
    let tmp27 = null;
    if (null != body) {
      const obj4 = {
        variant: "text-md/medium",
        color: "text-muted",
        maxFontSizeMultiplier: 2,
        style: null,
        children: null,
      };
      const items6 = [tmp.emptyBody, tmp20];
      obj4.style = items6;
      obj4.children = body;
      tmp27 = React4(Text_Text.Text, obj4);
    }
    items5[1] = tmp27;
    obj2.children = items5;
    let tmp22Result = hasOwnProperty(React2, obj2);
  } else {
    tmp22Result = null;
  }
  items3[1] = tmp22Result;
  items3[2] = Illustration.children;
  obj1.children = items3;
  return hasOwnProperty(React2, obj1);
}
