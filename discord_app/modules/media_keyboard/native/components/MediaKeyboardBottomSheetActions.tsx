// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { n } from "../../../../../_runtime/00689_n.js";
import { LinearGradient } from "../../../../../_runtime/04706_LinearGradient.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { set } from "../../../../utils/PlatformUtils.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  let PX_24 = arg0;
  let obj = { wrap: null, container: null, buttonsContainer: null, button: null, gradient: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.alignItems = "center";
  obj.top = undefined;
  obj[0] = obj;
  obj = { paddingVertical: Themes.space.PX_8, marginHorizontal: Themes.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL, marginBottom: null, borderRadius: null, backgroundColor: null, paddingHorizontal: null, borderWidth: null };
  let obj3 = set;
  if (obj3.isIOS()) {
    PX_24 = tmp3(712).space.PX_24;
  }
  let tmp5 = arg2;
  obj[2] = PX_24;
  obj[3] = Themes.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  obj[4] = tmp5;
  obj[5] = Themes.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj[6] = Themes.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(tmp3(712).shadows.SHADOW_HIGH);
  if (arg3) {
    const obj1 = { borderColor: null };
    obj1[0] = tmp3(712).colors.BORDER_MUTED;
    let obj2 = obj1;
  } else {
    obj2 = { borderTopColor: null };
    obj2[0] = tmp3(712).colors.BORDER_MUTED;
  }
  const merged2 = Object.assign(obj2);
  obj[1] = obj;
  obj3 = { gap: tmp3(712).modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: tmp3(712).modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  obj[2] = obj3;
  obj[3] = { flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: Themes.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: Themes.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 };
  const obj5 = {};
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj5.color = Themes.colors.BACKGROUND_BASE_LOW;
  obj[4] = obj5;
  return obj;
});
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetActions(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const overflowButtons = onHeightChange.overflowButtons;
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let closure_4;
  let obj = onHeightChange(4096);
  const gradientValue = obj.useGradientValue(onHeightChange(4096).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    let obj1 = n(gradientValue);
    hexResult = obj1.alpha(0.95).hex();
    let alphaResult = obj1.alpha(0.95);
  }
  let tmpResult = tmp(3989);
  const token = tmpResult.useToken(Themes.colors.CARD_BACKGROUND_DEFAULT);
  const obj5 = n(token);
  let hexResult1 = n(token).alpha(0.95).hex();
  tmpResult = tmp(1348);
  const enabled = tmpResult.useMobileVisualRefreshConfig({ location: "MediaKeyboardBottomSheetActions" }).enabled;
  const alphaResult1 = n(token).alpha(0.95);
  if (enabled) {
    hexResult1 = tmpResult1.useToken(Themes.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
  }
  const tmp9Result = closure_8(useSafeAreaInsets().bottom, hexResult1, hexResult, enabled);
  importDefault = tmp9Result;
  const tmp9 = closure_8;
  tmpResult1 = onHeightChange(3989);
  dependencyMap = onHeightChange(3989).useToken(tmp6(712).modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  const tmpResult2 = onHeightChange(3989);
  importAllResult = onHeightChange(3989).useToken(tmp6(712).modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const tmpResult3 = onHeightChange(3989);
  closure_4 = onHeightChange(3989).useToken(tmp6(712).modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
  let items = [tmp9Result.gradient.color];
  const memo = importAllResult.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _undefined(689)(_undefined.gradient.color);
    const items = [_undefined(689)(_undefined.gradient.color).alpha(0).hex(), ];
    const alphaResult = _undefined(689)(_undefined.gradient.color).alpha(0);
    const obj4 = _undefined(689)(_undefined.gradient.color);
    items[1] = _undefined(689)(_undefined.gradient.color).alpha(1).hex();
    obj[2] = items;
    return obj;
  }, items);
  const items1 = [onHeightChange];
  obj = {
    style: tmp9Result.wrap,
    pointerEvents: "box-none",
    onLayout: importAllResult.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1),
    children: null
  };
  obj = { style: tmp9Result.gradient };
  const tmpResult4 = onHeightChange(3989);
  const merged = Object.assign(memo);
  obj.pointerEvents = "none";
  const items2 = [callback(LinearGradient, obj), ];
  obj1 = { style: tmp9Result.container, children: null };
  const tmp6Result = LinearGradient;
  obj1[1] = callback(closure_5, {
    style: tmp9Result.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel) => {
      obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: obj, disabled: accessibilityLabel.disabled, style: _undefined.button, onPress: accessibilityLabel.onPress, children: null };
      obj = { disabled: accessibilityLabel.disabled };
      let str = "text-muted";
      let str2 = "text-muted";
      if (!accessibilityLabel.disabled) {
        str2 = dependencyMap;
      }
      const items = [outer1_6(accessibilityLabel.IconComponent, { size: "md", color: str2 }), ];
      obj = { lineClamp: 1, variant: closure_4, color: null, children: null };
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      obj[2] = str;
      obj[3] = accessibilityLabel.text;
      items[1] = outer1_6(onHeightChange(4281).Text, obj);
      obj[6] = items;
      return outer1_7(onHeightChange(4812).PressableOpacity, obj, arg1);
    })
  });
  items2[1] = callback(closure_5, obj1);
  obj[3] = items2;
  return callback2(closure_5, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx");

export default memoResult;