// === Module 9126: BurstReactionToggle ===

// Module 9126 (BurstReactionToggle)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { jsx } from "jsxProd" /* 21 */;
import { Easing } from "module_4217" /* 4217 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let obj = { duration: 100, easing: null };
obj[1] = Easing.out(require("module_4217").Easing.quad);
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
let closure_10 = { code: "function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};}" };
obj = { container: null };
obj = { borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, padding: 8, marginLeft: 8, width: 40, height: 40 };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
let result = require("set").fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  ({ onPress: stateFromStores, isActive } = arg0);
  let str;
  const colors = str(num[8]).colors;
  if (isActive) {
    let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    let tmp4 = tmp2;
    let tmp5 = tmp3;
    let tmp6 = tmp3;
    let tmp7 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp4 = tmp2;
    tmp5 = tmp3;
    tmp6 = tmp3;
    tmp7 = tmp2;
  }
  obj = sharedValue;
  const ref = sharedValue.useRef(null);
  str = tmp7(tmp6[12])(ref);
  stateFromStores = undefined;
  str = undefined;
  num = undefined;
  sharedValue = undefined;
  let sharedValue1;
  const tmp = callback();
  let items = [closure_5];
  stateFromStores = stateFromStores(tmp5[6]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = stateFromStores(tmp5[6]);
  const colors2 = tmp4(tmp5[8]).colors;
  str = stateFromStores(tmp5[7]).useToken(isActive ? colors2.BACKGROUND_BRAND : colors2.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  num = 0;
  if (isActive) {
    num = 360;
  }
  let tmp9Result = tmp9(tmp5[5]);
  sharedValue = tmp9Result.useSharedValue(str);
  tmp9Result = tmp9(tmp5[5]);
  sharedValue1 = tmp9Result.useSharedValue(num);
  const obj3 = stateFromStores(tmp5[7]);
  const fn = function s() {
    if (stateFromStores) {
      let value = str;
    } else {
      value = sharedValue.get();
    }
    obj = { backgroundColor: value, transform: null };
    num = 0;
    if (!stateFromStores) {
      num = sharedValue1.get();
    }
    obj = { rotate: "" + num + "deg" };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  fn.__closure = { reducedMotion: stateFromStores, targetBackgroundColor: str, backgroundColor: sharedValue, rotation: sharedValue1 };
  fn.__workletHash = 1525758595013;
  fn.__initData = closure_10;
  const items1 = [sharedValue, str, sharedValue1, num];
  const animatedStyle = stateFromStores(tmp5[5]).useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(stateFromStores(num[9]).withTiming(str, closure_1_8));
    obj = stateFromStores(num[9]);
    const result1 = sharedValue1.set(stateFromStores(num[10]).withSpring(num, closure_1_9));
  }, items1);
  obj = {
    onPress() {
      str(closure_1_6.AUTO);
      stateFromStores();
    },
    accessible: true,
    accessibilityLabel: null,
    accessibilityRole: "switch",
    accessibilityState: null,
    children: null
  };
  const intl = tmp9(tmp6[13]).intl;
  const string = intl.string;
  const t = tmp9(tmp6[13]).t;
  if (isActive) {
    let stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  obj[2] = stringResult;
  obj[4] = { checked: isActive };
  obj = { style: items2, ref, children: tmp15(tmp9(tmp6[14]).SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT }) };
  items2 = [tmp.container, animatedStyle];
  obj[5] = jsx(tmp7(tmp6[5]).View, { style: items2, ref, children: tmp15(tmp9(tmp6[14]).SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT }) });
  return <sharedValue1 style={items2} ref={ref}>{tmp15(tmp9(tmp6[14]).SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT })}</sharedValue1>;
};