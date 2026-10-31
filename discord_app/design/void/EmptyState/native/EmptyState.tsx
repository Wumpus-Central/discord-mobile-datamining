// discord_app/design/void/EmptyState/native/EmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
let closure_7 = {
  accessible: false,
  accessibilityRole: "none",
  accessibilityElementsHidden: true,
  importantForAccessibility: "no-hide-descendants",
};
const createStyles = fn(5014);
let obj2 = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
    paddingBottom: 80,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  },
  emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 },
  textGroup: { alignSelf: "stretch", alignItems: "center" },
  emptyTitle: { marginTop: 20, textTransform: "uppercase" },
  emptyBody: { textAlign: "center", marginTop: 8 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_8();
  const themeContext = shared.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  shared;
  if (null != Illustration.Illustration) {
    const obj2 = {};
    const merged = Object.assign(closure_7);
    obj2.resizeMode = "contain";
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj2.style = items;
    let tmp11Result = React4(Illustration.Illustration, obj2);
  } else {
    tmp11Result = null;
    if (tmp9) {
      const obj3 = {};
      const merged1 = Object.assign(closure_7);
      obj3.resizeMode = "contain";
      const tmp13 = FastImageDefault;
      obj3.source = shared.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj3.style = items1;
      tmp11Result = React4(tmp13, obj3);
      const tmp2Result2 = shared;
    }
    tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj4 = { style: null, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj4.style = items2;
  const items3 = [tmp11Result, ,];
  if (null != title) {
    const obj5 = { style: tmp.textGroup, accessible: true, children: null };
    let tmp26 = null;
    if (null != title) {
      const obj6 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        style: null,
        children: null,
      };
      const items4 = [tmp.emptyTitle, tmp22, closure_6];
      obj6.style = items4;
      obj6.children = title;
      tmp26 = React4(Text_Text.Text, obj6);
    }
    const items5 = [tmp26];
    let tmp28 = null;
    if (null != body) {
      const obj7 = {
        variant: "text-md/medium",
        color: "text-muted",
        maxFontSizeMultiplier: 2,
        style: null,
        children: null,
      };
      const items6 = [tmp.emptyBody, tmp21];
      obj7.style = items6;
      obj7.children = body;
      tmp28 = React4(Text_Text.Text, obj7);
    }
    items5[1] = tmp28;
    obj5.children = items5;
    let tmp23Result = hasOwnProperty(View, obj5);
  } else {
    tmp23Result = null;
  }
  items3[1] = tmp23Result;
  items3[2] = Illustration.children;
  obj4.children = items3;
  return hasOwnProperty(View, obj4);
}
