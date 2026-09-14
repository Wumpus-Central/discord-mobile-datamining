// === Module 10771: MediaKeyboardBottomSheetActions ===

// Module 10771 (MediaKeyboardBottomSheetActions)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4632 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import Pressables from "Pressables" /* 5204 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let PX_24 = arg0;
  const obj = { wrap: null, container: null, buttonsContainer: null, button: null, gradient: null };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.alignItems = "center";
  obj2.top = undefined;
  obj.wrap = obj2;
  const obj3 = { paddingVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL, marginBottom: null, borderRadius: null, backgroundColor: null, paddingHorizontal: null, borderWidth: null };
  if (obj4.isIOS()) {
    PX_24 = nativeDefault.space.PX_24;
  }
  let tmp5 = arg2;
  obj3.marginBottom = PX_24;
  obj3.borderRadius = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  obj3.backgroundColor = tmp5;
  obj3.paddingHorizontal = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj3.borderWidth = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj3.borderColor = nativeDefault.colors.BORDER_MUTED;
  obj.container = obj3;
  obj4 = PlatformUtils;
  obj.buttonsContainer = { gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  const obj5 = { gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  obj.button = { flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 };
  const obj7 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj7.color = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj.gradient = obj7;
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
  const gradientValue = onHeightChange(4455).useGradientValue(onHeightChange(4455).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    let obj2 = _modDef672(gradientValue);
    hexResult = _modDef672(gradientValue).alpha(0.95).hex();
    let alphaResult = _modDef672(gradientValue).alpha(0.95);
  }
  let obj = onHeightChange(4455);
  const tmp6 = closure_8(useSafeAreaInsetsDefault().bottom, onHeightChange(4338).useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER), hexResult);
  importDefault = tmp6;
  const tmpResult = onHeightChange(4338);
  dependencyMap = onHeightChange(4338).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  const tmpResult4 = onHeightChange(4338);
  noop = onHeightChange(4338).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const tmpResult5 = onHeightChange(4338);
  variant = onHeightChange(4338).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
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
  const obj3 = {
    style: tmp6.wrap,
    pointerEvents: "box-none",
    onLayout: noop.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1),
    children: null
  };
  let obj4 = { style: tmp6.gradient };
  const tmpResult6 = onHeightChange(4338);
  const merged = Object.assign(memo);
  obj4.pointerEvents = "none";
  const items2 = [closure_6(LinearGradientDefault, obj4), ];
  const obj5 = { style: tmp6.container, children: null };
  obj5.children = closure_6(closure_5, {
    style: tmp6.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel, index) => {
      const obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: { disabled: accessibilityLabel.disabled }, disabled: accessibilityLabel.disabled, style: closure_1.button, onPress: accessibilityLabel.onPress, children: null };
      let str = "text-muted";
      let str2 = "text-muted";
      if (!accessibilityLabel.disabled) {
        str2 = closure_2;
      }
      const items = [timestampProducer(accessibilityLabel.IconComponent, { size: "md", color: str2 }), ];
      const obj2 = { lineClamp: 1, variant, color: null, children: null };
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      obj2.color = str;
      obj2.children = accessibilityLabel.text;
      items[1] = timestampProducer(Text_Text.Text, obj2);
      obj.children = items;
      return React5(Pressables.PressableOpacity, obj, index);
    })
  });
  items2[1] = closure_6(closure_5, obj5);
  obj3.children = items2;
  return closure_7(closure_5, obj3);
});