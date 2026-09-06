// discord_app/design/void/RefreshEmptyState/native/RefreshEmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import components_Button_Button from "../../../components/Button/native/Button.native.tsx";
import LegacyText_LegacyTextDefault from "../../LegacyText/native/LegacyText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../modules/rebrand/native/TextStyles.tsx";

require = fn;
class EmptyState {
  constructor(arg0) {
    ({ source, title, callToAction } = global);
    ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = global);
    tmp = closure_7();
    tmp3 = View;
    obj = { style: null, children: null };
    items = [,];
    items[0] = tmp.container;
    items[1] = containerStyle;
    obj.style = items;
    tmp4 = null;
    tmp2 = jsxs;
    if (null != source) {
      tmp5 = jsx;
      tmp6 = Image;
      obj = { source: null, style: null };
      obj.source = source;
      items1 = [,];
      items1[0] = tmp.image;
      items1[1] = imageStyle;
      obj.style = items1;
      tmp4 = jsx(Image, obj);
    }
    items2 = [, , ,];
    items2[0] = tmp4;
    tmp7 = null;
    if (null != title) {
      tmp8 = jsx;
      tmp9 = closure_1;
      tmp10 = closure_2;
      obj1 = { style: null, children: null };
      items3 = [,];
      items3[0] = tmp.title;
      items3[1] = titleStyle;
      obj1.style = items3;
      obj1.children = title;
      tmp7 = jsx(closure_1(closure_2[7]), obj1);
    }
    items2[1] = tmp7;
    tmp11 = jsx;
    tmp12 = closure_2;
    obj2 = { style: null, children: body };
    items4 = [,];
    items4[0] = tmp.body;
    items4[1] = bodyStyle;
    obj2.style = items4;
    items2[2] = jsx(closure_1(closure_2[7]), obj2);
    tmp11Result = null;
    if (null != callToAction) {
      obj3 = { style: null, children: null };
      obj3.style = tmp.cta;
      tmp14 = closure_0;
      obj4 = { shrink: true, text: null, onPress: null, size: "sm" };
      ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
      obj3.children = tmp11(closure_0(tmp12[8]).Button, obj4);
      tmp11Result = tmp11(tmp3, obj3);
    }
    items2[3] = tmp11Result;
    obj.children = items2;
    return tmp2(tmp3, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  container: { alignItems: "center", justifyContent: "center", padding: 16 },
  title: null,
  body: null,
  image: null,
  cta: null,
};
createStyles = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createStyles.textAlign = "center";
createStyles.marginBottom = 8;
createStyles.title = createStyles;
let obj1 = {};
let merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
obj1.textAlign = "center";
createStyles.body = obj1;
createStyles.image = { marginBottom: 32 };
createStyles.cta = { alignSelf: "center", marginTop: 16 };
const React5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default EmptyState;
export const ThemedEmptyState = function ThemedEmptyState(darkSource) {
  let lightSource = darkSource.darkSource;
  const merged = Object.assign(darkSource, Object.assign({ lightSource: 0, darkSource: 0 }));
  let obj = shared;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    lightSource = darkSource.lightSource;
  }
  obj = { source: lightSource };
  const merged1 = Object.assign(merged);
  return hasOwnProperty(EmptyState, obj);
};
