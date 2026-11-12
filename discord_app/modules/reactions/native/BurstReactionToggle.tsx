// discord_app/modules/reactions/native/BurstReactionToggle.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const Pressable = fn(17).Pressable;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsx = fn(21).jsx;
let obj = { duration: 100, easing: null };
const Easing = fn(1652).Easing;
obj.easing = Easing.out(fn(1652).Easing.quad);
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
let closure_10 = {
  code: '(function BurstReactionToggleTsx1(){let[reducedMotion,targetBackgroundColor,backgroundColor,rotation]=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+"deg"}]};})',
};
const createStyles = fn(5243);
let obj3 = { container: null };
let size = {
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  padding: 8,
  marginLeft: 8,
  width: 40,
  height: 40,
};
obj3.container = size;
let closure_11 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  ({ onPress: c0, isActive } = arg0);
  importDefault = undefined;
  colors = nativeDefault.colors;
  if (isActive) {
    let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    let tmp4 = tmp2;
    let tmp7 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp4 = tmp2;
    tmp7 = tmp2;
  }
  const ref = noop.useRef(null);
  importDefault = tmp7(9490)(ref);
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  obj = noop;
  const tmp = closure_11();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("initialize");
  const colors2 = tmp4(575).colors;
  let str = require("useToken").useToken(isActive ? colors2.BACKGROUND_BRAND : colors2.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  closure_129_0 = str;
  let num = 0;
  if (isActive) {
    num = 360;
  }
  closure_129_1 = num;
  const obj3 = require("useToken");
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(str);
  closure_129_2 = sharedValue;
  const tmp9Result = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(num);
  closure_129_3 = sharedValue1;
  const tmp9Result3 = require("../../../../_runtime/metro/01652__.js");
  const items1 = [closure_10, stateFromStores, str, sharedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
  class BurstReactionToggleTsx1 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        value = closure_1;
      } else {
        tmp2 = closure_2;
        value = closure_2.get();
      }
      obj = { backgroundColor: value, transform: null };
      num = 0;
      if (!tmp) {
        tmp4 = closure_3;
        num = closure_3.get();
      }
      obj1 = { rotate: "" + num + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp14, tmp15, tmp16, tmp17];
  BurstReactionToggleTsx1.__closure = items2;
  BurstReactionToggleTsx1.__workletHash = 1303974688188;
  BurstReactionToggleTsx1.__initData = tmp13;
  const items3 = [sharedValue, str, sharedValue1, num];
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BurstReactionToggleTsx1);
  const effect = obj.useEffect(() => {
    obj = timing_timing;
    const result = _undefined3.set(obj.withTiming(c0, obj));
    const result1 = _undefined4.set(spring_spring.withSpring(c1, closure_9));
  }, items3);
  const obj4 = {
    onPress: function handleOnPress() {
      _undefined2(ContentDismissActionType.AUTO);
      _undefined();
    },
    accessible: true,
    accessibilityLabel: null,
    accessibilityRole: "switch",
    accessibilityState: null,
    children: null,
  };
  const intl = tmp9(1113).intl;
  const string = intl.string;
  const t = tmp9(1113).t;
  if (isActive) {
    let stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  obj4.accessibilityLabel = stringResult;
  obj4.accessibilityState = { checked: isActive };
  const obj5 = {
    style: null,
    ref,
    children: jsx(require("SuperReactionIcon").SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT }),
  };
  const items4 = [tmp.container, animatedStyle];
  obj5.style = items4;
  obj4.children = jsx(tmp7(1652).View, {
    style: null,
    ref,
    children: jsx(require("SuperReactionIcon").SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT }),
  });
  return (
    <Pressable
      onPress={function handleOnPress() {
        _undefined2(ContentDismissActionType.AUTO);
        _undefined();
      }}
      accessible
      accessibilityLabel={null}
      accessibilityRole="switch"
      accessibilityState={null}
    >
      {null}
    </Pressable>
  );
}
