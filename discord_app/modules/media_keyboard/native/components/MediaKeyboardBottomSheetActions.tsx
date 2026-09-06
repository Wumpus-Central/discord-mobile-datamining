// === Module 10642: ? ===

// Module 10642
import ThemesDefault from "Themes" /* 576 */;
import nDefault from "n" /* 672 */;
import set from "set" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let PX_24 = arg0;
  let obj = { wrap: null, container: null, buttonsContainer: null, button: null, gradient: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.alignItems = "center";
  obj.top = undefined;
  obj[0] = obj;
  obj = { paddingVertical: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL, marginBottom: null, borderRadius: null, backgroundColor: null, paddingHorizontal: null, borderWidth: null };
  let obj3 = set;
  if (obj3.isIOS()) {
    PX_24 = tmp3(576).space.PX_24;
  }
  let tmp5 = arg2;
  obj[2] = PX_24;
  obj[3] = ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  obj[4] = tmp5;
  obj[5] = ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj[6] = ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(tmp3(576).shadows.SHADOW_HIGH);
  obj.borderColor = ThemesDefault.colors.BORDER_MUTED;
  obj[1] = obj;
  obj[2] = { gap: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  obj1 = { gap: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  const tmp = absoluteFillObject;
  obj[3] = { flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 };
  obj3 = {};
  const merged2 = Object.assign(tmp.absoluteFillObject);
  obj3.color = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  obj[4] = obj3;
  return obj;
});
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetActions(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const overflowButtons = onHeightChange.overflowButtons;
  importDefault = undefined;
  dependencyMap = undefined;
  importAllResult = undefined;
  closure_4 = undefined;
  let obj = onHeightChange(4378);
  const gradientValue = obj.useGradientValue(onHeightChange(4378).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    obj1 = nDefault(gradientValue);
    hexResult = obj1.alpha(0.95).hex();
    let alphaResult = obj1.alpha(0.95);
  }
  let tmpResult = tmp(4262);
  const tmp6 = callback3(useSafeAreaInsetsDefault().bottom, tmpResult.useToken(ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER), hexResult);
  importDefault = tmp6;
  tmpResult = tmp(4262);
  dependencyMap = tmpResult.useToken(ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  importAllResult = onHeightChange(4262).useToken(ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const tmpResult1 = onHeightChange(4262);
  closure_4 = onHeightChange(4262).useToken(ThemesDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
  let items = [tmp6.gradient.color];
  const memo = importAllResult.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = lib(672)(lib.gradient.color);
    const items = [lib(672)(lib.gradient.color).alpha(0).hex(), ];
    const alphaResult = lib(672)(lib.gradient.color).alpha(0);
    const obj4 = lib(672)(lib.gradient.color);
    items[1] = lib(672)(lib.gradient.color).alpha(1).hex();
    obj[2] = items;
    return obj;
  }, items);
  const items1 = [onHeightChange];
  obj = {
    style: tmp6.wrap,
    pointerEvents: "box-none",
    onLayout: importAllResult.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1),
    children: null
  };
  obj = { style: tmp6.gradient };
  const tmpResult2 = onHeightChange(4262);
  const merged = Object.assign(memo);
  obj.pointerEvents = "none";
  const items2 = [callback(LinearGradientDefault, obj), ];
  obj1 = { style: tmp6.container, children: null };
  const tmp8 = LinearGradientDefault;
  obj1[1] = callback(closure_5, {
    style: tmp6.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel) => {
      obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: obj, disabled: accessibilityLabel.disabled, style: lib.button, onPress: accessibilityLabel.onPress, children: null };
      obj = { disabled: accessibilityLabel.disabled };
      let str = "text-muted";
      let str2 = "text-muted";
      if (!accessibilityLabel.disabled) {
        str2 = dependencyMap;
      }
      const items = [closure_1_6(accessibilityLabel.IconComponent, { size: "md", color: str2 }), ];
      obj = { lineClamp: 1, variant: closure_4, color: null, children: null };
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      obj[2] = str;
      obj[3] = accessibilityLabel.text;
      items[1] = closure_1_6(onHeightChange(4556).Text, obj);
      obj[6] = items;
      return closure_1_7(onHeightChange(5123).PressableOpacity, obj, arg1);
    })
  });
  items2[1] = callback(closure_5, obj1);
  obj[3] = items2;
  return callback2(closure_5, obj);
});
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx");

export default memoResult;