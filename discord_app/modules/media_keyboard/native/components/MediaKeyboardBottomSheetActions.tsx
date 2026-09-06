// === Module 10642: MediaKeyboardBottomSheetActions ===

// Module 10642 (MediaKeyboardBottomSheetActions)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let PX_24 = arg0;
  let obj = { wrap: null, container: null, buttonsContainer: null, button: null, gradient: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.alignItems = "center";
  obj.top = undefined;
  obj.wrap = obj;
  obj = { paddingVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL, marginBottom: null, borderRadius: null, backgroundColor: null, paddingHorizontal: null, borderWidth: null };
  let obj3 = PlatformUtils;
  if (obj3.isIOS()) {
    PX_24 = tmp3(576).space.PX_24;
  }
  let tmp5 = arg2;
  obj.marginBottom = PX_24;
  obj.borderRadius = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  obj.backgroundColor = tmp5;
  obj.paddingHorizontal = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj.borderWidth = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(tmp3(576).shadows.SHADOW_HIGH);
  obj.borderColor = nativeDefault.colors.BORDER_MUTED;
  obj.container = obj;
  obj.buttonsContainer = { gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  const obj1 = { gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  const tmp = absoluteFillObject;
  obj.button = { flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 };
  obj3 = {};
  const merged2 = Object.assign(tmp.absoluteFillObject);
  obj3.color = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj.gradient = obj3;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx");

export default noop.memo(function MediaKeyboardBottomSheetActions(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const overflowButtons = onHeightChange.overflowButtons;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  let variant;
  let obj = onHeightChange(4378);
  const gradientValue = obj.useGradientValue(onHeightChange(4378).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    let obj1 = _modDef672(gradientValue);
    hexResult = obj1.alpha(0.95).hex();
    let alphaResult = obj1.alpha(0.95);
  }
  let tmpResult = tmp(4262);
  const tmp6 = closure_8(useSafeAreaInsetsDefault().bottom, tmpResult.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER), hexResult);
  importDefault = tmp6;
  tmpResult = tmp(4262);
  dependencyMap = tmpResult.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  noop = onHeightChange(4262).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const tmpResult1 = onHeightChange(4262);
  variant = onHeightChange(4262).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
  let items = [tmp6.gradient.color];
  const memo = noop.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef672(closure_1.gradient.color);
    const items = [_modDef672(closure_1.gradient.color).alpha(0).hex(), ];
    const alphaResult = _modDef672(closure_1.gradient.color).alpha(0);
    const obj4 = _modDef672(closure_1.gradient.color);
    items[1] = _modDef672(closure_1.gradient.color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items);
  const items1 = [onHeightChange];
  obj = {
    style: tmp6.wrap,
    pointerEvents: "box-none",
    onLayout: noop.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1),
    children: null
  };
  obj = { style: tmp6.gradient };
  const tmpResult2 = onHeightChange(4262);
  const merged = Object.assign(memo);
  obj.pointerEvents = "none";
  const items2 = [closure_6(LinearGradientDefault, obj), ];
  obj1 = { style: tmp6.container, children: null };
  obj1.children = closure_6(closure_5, {
    style: tmp6.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel, index) => {
      let obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: { disabled: accessibilityLabel.disabled }, disabled: accessibilityLabel.disabled, style: closure_1.button, onPress: accessibilityLabel.onPress, children: null };
      let str = "text-muted";
      let str2 = "text-muted";
      if (!accessibilityLabel.disabled) {
        str2 = closure_2;
      }
      const items = [timestampProducer(accessibilityLabel.IconComponent, { size: "md", color: str2 }), ];
      obj = { lineClamp: 1, variant, color: null, children: null };
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      obj.color = str;
      obj.children = accessibilityLabel.text;
      items[1] = timestampProducer(Text_Text.Text, obj);
      obj.children = items;
      return React5(Pressables.PressableOpacity, obj, index);
    })
  });
  items2[1] = closure_6(closure_5, obj1);
  obj.children = items2;
  return closure_7(closure_5, obj);
});