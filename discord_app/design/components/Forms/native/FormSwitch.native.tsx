// discord_app/design/components/Forms/native/FormSwitch.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../modules/haptics/HapticFeedbackTypes.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const module_1652_mod = _mod1652;

require = fn;
let jsx = fn(21).jsx;
let module_1652 = module_1652_mod;
let closure_6 = module_1652.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(5170);
let obj = { switch: null, unselectedIcon: null, selectedIcon: null, knob: null };
let size = { width: nativeDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: nativeDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: nativeDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: nativeDefault.radii.lg, borderWidth: 1, backgroundColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
obj.switch = size;
obj.unselectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj.selectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
const size1 = { height: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.SWITCH_THUMB_BACKGROUND_DEFAULT };
obj.knob = size1;
let closure_7 = createStyles.createStyles(obj);
let module_1652 = module_1652_mod;
const Icon = module_1652.createAnimatedComponent(IconDefault);
let closure_9 = { code: "(function FormSwitchNativeTsx1(){let[progress,interpolateColor,trackColor,trackSelectedColor,trackBorderColor,trackBorderSelectedColor]=this.__closure;const t=progress.get();return{backgroundColor:interpolateColor(t,[0,1],[trackColor,trackSelectedColor]),borderColor:interpolateColor(t,[0,1],[trackBorderColor,trackBorderSelectedColor])};})" };
let closure_10 = { code: "(function FormSwitchNativeTsx2(){let[progress,interpolate,knobCheckedLeft,interpolateColor,knobBackgroundColor,knobSelectedBackgroundColor]=this.__closure;const t=progress.get();return{left:interpolate(t,[0,1],[0,knobCheckedLeft]),backgroundColor:interpolateColor(t,[0,1],[knobBackgroundColor,knobSelectedBackgroundColor])};})" };
let closure_11 = { code: "(function FormSwitchNativeTsx3(){let[progress,interpolate,off,on,useReducedMotion]=this.__closure;const t=progress.get();const opacity=interpolate(t,[0,1],[off,on]);const scale=useReducedMotion?1:interpolate(t,[0,1],[off,on]);return{opacity:opacity,transform:[{scale:scale}]};})" };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export function FormSwitch(onValueChange) {
  ({ disabled, value } = onValueChange);
  _require = value;
  importDefault = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext);
  dependencyMap = context.reducedMotion.enabled;
  [tmp6, c3] = noop.useState(value);
  let obj = noop;
  const tmp5 = _slicedToArray(noop.useState(value), 2);
  let num = 0;
  if (value) {
    num = 1;
  }
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  items = [value, sharedValue];
  const effect = obj.useEffect(() => {
    _undefined3(c0);
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined4.set(spring_spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp9 = closure_7();
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const token = require("useToken").useToken(nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT);
  const tmp2Result = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result9 = require("useToken");
  const token2 = require("useToken").useToken(nativeDefault.colors.SWITCH_BORDER_DEFAULT);
  const tmp2Result10 = require("useToken");
  const token3 = require("useToken").useToken(nativeDefault.colors.SWITCH_BORDER_SELECTED_DEFAULT);
  const tmp2Result11 = require("useToken");
  const token4 = require("useToken").useToken(nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  const tmp2Result12 = require("useToken");
  const token5 = require("useToken").useToken(nativeDefault.colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  const tmp2Result13 = require("useToken");
  const token6 = require("useToken").useToken(nativeDefault.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result14 = require("useToken");
  let items1 = [closure_9, sharedValue, require("../../../../../_runtime/metro/01652__.js").interpolateColor, token, token1, token2, token3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  jsx = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items1;
  class FormSwitchNativeTsx1 {
    constructor() {
      value = closure_0.get();
      obj = { backgroundColor: null, borderColor: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj.backgroundColor = closure_1(value, [0, 1], items);
      items1 = [, ];
      items1[0] = closure_4;
      items1[1] = closure_5;
      obj.borderColor = closure_1(value, [0, 1], items1);
      return obj;
    }
  }
  let items2 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  FormSwitchNativeTsx1.__closure = items2;
  FormSwitchNativeTsx1.__workletHash = 962173607693;
  FormSwitchNativeTsx1.__initData = tmp18;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(FormSwitchNativeTsx1);
  const tmp2Result15 = require("../../../../../_runtime/metro/01652__.js");
  const items3 = [closure_10, sharedValue, require("../../../../../_runtime/metro/01652__.js").interpolate, token4, require("../../../../../_runtime/metro/01652__.js").interpolateColor, token5, token6];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  jsx = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items3;
  function useIconAnimation(arg0, arg1) {
    items = [closure_11, c4, _mod1652.interpolate, arg1, arg0, c2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    class FormSwitchNativeTsx3 {
      constructor() {
        value = closure_0.get();
        obj = { opacity: null, transform: null };
        items = [, ];
        items[0] = closure_2;
        items[1] = closure_3;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        obj.opacity = closure_1(value, [0, 1], items);
        num = 1;
        if (!closure_4) {
          items1 = [, ];
          items1[0] = tmp3;
          items1[1] = tmp4;
          num = tmp2(value, [0, 1], items1);
        }
        items2 = [];
        items2[0] = { scale: num };
        obj.transform = items2;
        return obj;
      }
    }
    let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6];
    FormSwitchNativeTsx3.__closure = items1;
    FormSwitchNativeTsx3.__workletHash = 4913489422961;
    FormSwitchNativeTsx3.__initData = tmp;
    return _mod1652.useAnimatedStyle(FormSwitchNativeTsx3);
  }
  class FormSwitchNativeTsx2 {
    constructor() {
      value = closure_0.get();
      obj = { left: null, backgroundColor: null };
      items = [0];
      items[1] = closure_2;
      obj.left = closure_1(value, [0, 1], items);
      items1 = [, ];
      items1[0] = closure_4;
      items1[1] = closure_5;
      obj.backgroundColor = closure_3(value, [0, 1], items1);
      return obj;
    }
  }
  const items4 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  FormSwitchNativeTsx2.__closure = items4;
  FormSwitchNativeTsx2.__workletHash = 13709465542766;
  FormSwitchNativeTsx2.__initData = tmp26;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(FormSwitchNativeTsx2);
  const iconAnimation = useIconAnimation(1, 0);
  if (!context.switchIconsEnabled) {
    if (tmp) {
      let obj3 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    } else {
      obj3 = { accessible: true, accessibilityRole: "switch", accessibilityLabel, accessibilityHint, accessibilityState: null, onAccessibilityTap: null };
      const obj4 = { disabled, checked: tmp6 };
      obj3.accessibilityState = obj4;
      obj3.onAccessibilityTap = function handleAccessibilityTap() {
        const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
        const tmp3 = haptics_HapticFeedbackTypesDefault;
        if (c0) {
          const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
        }
        _undefined3(!c0);
        let num = 1;
        if (c0) {
          num = 0;
        }
        const result2 = _undefined4.set(spring_spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
        const timerId = setTimeout(() => {
          if (_undefined2 != null) {
            tmp(!_undefined);
          }
        });
      };
    }
    const obj5 = { style: null, onPress: null, disabled: null };
    const items5 = [tmp9.switch, animatedStyle];
    obj5.style = items5;
    obj5.onPress = function onPress() {
      const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
      const tmp3 = haptics_HapticFeedbackTypesDefault;
      if (c0) {
        const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
      } else {
        const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
      }
      if (c1 != null) {
        tmp6(!c0);
      }
    };
    obj5.disabled = disabled;
    const merged = Object.assign(obj3);
    const obj6 = { style: null, children: null };
    const items6 = [tmp9.knob, animatedStyle1];
    obj6.style = items6;
    obj6.children = null;
    obj5.children = jsx(tmp10(1652).View, { style: null, children: null });
    return <closure_6 style={null} onPress={null} disabled={null} />;
  } else {
    const obj7 = { source: null, size: null, style: null };
    if (tmp6) {
      obj7.source = tmp10(7081);
      obj7.size = tmp10(5790).Sizes.SMALL_20;
      const items7 = [tmp9.selectedIcon, iconAnimation];
      obj7.style = items7;
      let tmp38 = obj7;
    } else {
      obj7.source = tmp10(7454);
      obj7.size = tmp10(5790).Sizes.SMALL;
      const items8 = [tmp9.unselectedIcon, tmp35];
      obj7.style = items8;
      tmp38 = obj7;
    }
    <Icon {...tmp38} />;
  }
  const tmp2Result16 = require("../../../../../_runtime/metro/01652__.js");
}