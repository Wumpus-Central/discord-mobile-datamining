// discord_app/design/void/RefreshEmptyState/native/RefreshEmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import components_Button_Button from "../../../components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import LegacyText_LegacyTextDefault from "../../LegacyText/native/LegacyText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../../modules/rebrand/native/TextStyles.tsx";

require = fn;
class EmptyState {
  constructor(arg0) {
    ({ source, title, callToAction } = global);
    ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = global);
    tmp = closure_6();
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
      tmp6 = closure_1;
      tmp7 = closure_2;
      obj1 = { source: null, style: null };
      obj1.source = source;
      items1 = [,];
      items1[0] = tmp.image;
      items1[1] = imageStyle;
      obj1.style = items1;
      tmp4 = jsx(closure_1(closure_2[7]), obj1);
    }
    items2 = [, , ,];
    items2[0] = tmp4;
    tmp8 = null;
    if (null != title) {
      tmp9 = jsx;
      tmp10 = closure_1;
      tmp11 = closure_2;
      obj7 = { style: null, children: null };
      items3 = [,];
      items3[0] = tmp.title;
      items3[1] = titleStyle;
      obj7.style = items3;
      obj7.children = title;
      tmp8 = jsx(closure_1(closure_2[8]), obj7);
    }
    items2[1] = tmp8;
    tmp12 = jsx;
    tmp13 = closure_2;
    obj8 = { style: null, children: body };
    items4 = [,];
    items4[0] = tmp.body;
    items4[1] = bodyStyle;
    obj8.style = items4;
    items2[2] = jsx(closure_1(closure_2[8]), obj8);
    tmp12Result = null;
    if (null != callToAction) {
      obj9 = { style: null, children: null };
      obj9.style = tmp.cta;
      tmp15 = closure_0;
      obj10 = { shrink: true, text: null, onPress: null, size: "sm" };
      ({ label: obj6.text, onPress: obj6.onPress } = callToAction);
      obj9.children = tmp12(closure_0(tmp13[9]).Button, obj10);
      tmp12Result = tmp12(tmp3, obj9);
    }
    items2[3] = tmp12Result;
    obj.children = items2;
    return tmp2(tmp3, obj);
  }
}
const View = fn(17).View;
const Fonts = fn(1072).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: { alignItems: "center", justifyContent: "center", padding: 16 },
  title: null,
  body: null,
  image: null,
  cta: null,
};
let obj3 = {};
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3.textAlign = "center";
obj3.marginBottom = 8;
obj2.title = obj3;
let obj4 = {};
let TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
obj4.textAlign = "center";
obj2.body = obj4;
obj2.image = { marginBottom: 32 };
obj2.cta = { alignSelf: "center", marginTop: 16 };
const timestampProducer = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default EmptyState;
export function ThemedEmptyState(darkSource) {
  let lightSource = darkSource.darkSource;
  const merged = Object.assign(darkSource, Object.assign({ lightSource: 0, darkSource: 0 }));
  const obj = shared;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    lightSource = darkSource.lightSource;
  }
  const merged1 = Object.assign(merged);
  return React4(EmptyState, { source: lightSource });
}
