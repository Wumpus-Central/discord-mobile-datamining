// === Module 16515: AdvertiserCtaBanner ===

// Module 16515 (AdvertiserCtaBanner)
import nativeDefault from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import Text_Text from "Text/Text" /* 5603 */;
import components_Button_Button from "components/Button/Button" /* 5610 */;
import ButtonHooks from "ButtonHooks" /* 5617 */;
import FastImageDefault from "FastImage" /* 5699 */;
import BackgroundBlurView from "BackgroundBlurView" /* 8049 */;
import AssetUtils from "AssetUtils" /* 9861 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const module_1653 = _mod1653;

require = fn;
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = module_1653.createAnimatedComponent(Pressable);
const createStyles = fn(5012);
let closure_10 = createStyles.createStyles(() => {
  const obj = { outerContainer: null, ctaPressable: null, cta: null, ctaLogoContainer: null, ctaLogo: null, ctaInfo: null };
  const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj.outerContainer = rect;
  const obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj2.alignSelf = "stretch";
  obj2.borderRadius = nativeDefault.radii.lg;
  obj.ctaPressable = obj2;
  obj.cta = { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj.ctaLogoContainer = size;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center" };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AdvertiserCtaBanner.tsx");

export default function AdvertiserCtaBanner(ctaInfo) {
  ctaInfo = ctaInfo.ctaInfo;
  ({ style, onContainerPress, onButtonPress } = ctaInfo);
  const tmp = closure_10();
  let scaledImageUrl;
  if (null != ctaInfo.iconImageUri) {
    const size = { assetUrl: ctaInfo.iconImageUri, width: 40, height: 40 };
    scaledImageUrl = AssetUtils.getScaledImageUrl(size);
  }
  const sharedValue = _mod1653.useSharedValue(0);
  const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(sharedValue);
  const obj2 = { style: null, children: null };
  items = [tmp.outerContainer, style];
  obj2.style = items;
  const obj5 = {};
  const merged = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_3));
  obj5.onPress = onContainerPress;
  obj5.accessibilityRole = "button";
  obj5.accessibilityLabel = ctaInfo.label;
  const items1 = [tmp.ctaPressable, buttonPressAnimationProps.style];
  obj5.style = items1;
  const obj6 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: null };
  const obj7 = { style: tmp.ctaLogoContainer, children: metroImportDefault(FastImageDefault, { source: { uri: scaledImageUrl }, style: tmp.ctaLogo, resizeMode: "cover" }) };
  const items2 = [metroImportDefault(timestampProducer, obj7), , ];
  const obj9 = { style: tmp.ctaInfo, children: metroImportDefault(Text_Text.Text, { lineClamp: 2, variant: "body-sm/semibold", color: "text-default", children: ctaInfo.label }) };
  items2[1] = metroImportDefault(timestampProducer, obj9);
  const obj11 = { accessible: false, importantForAccessibility: "no-hide-descendants", children: metroImportDefault(components_Button_Button.Button, { variant: "primary-overlay", text: ctaInfo.buttonLabel, size: "sm", onPress: onButtonPress }) };
  items2[2] = metroImportDefault(timestampProducer, obj11);
  obj6.children = items2;
  obj5.children = React5(BackgroundBlurView.BackgroundBlurView, obj6);
  obj2.children = metroImportDefault(closure_9, obj5);
  return metroImportDefault(module_1653.View, obj2);
};