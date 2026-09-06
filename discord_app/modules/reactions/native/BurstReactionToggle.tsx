// === Module 11125: BurstReactionToggle ===

// Module 11125 (BurstReactionToggle)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useToken from "useToken" /* 4262 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import SuperReactionIcon from "SuperReactionIcon" /* 9373 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const Pressable = fn(17).Pressable;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let obj = { duration: 100, easing: null };
const Easing = fn(4296).Easing;
obj.easing = Easing.out(fn(4296).Easing.quad);
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
const __initData = { code: "function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};}" };
const createStyles = fn(4560);
obj = { container: null };
let size = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 8, marginLeft: 8, width: 40, height: 40 };
obj.container = size;
let closure_11 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  ({ onPress: require, isActive } = arg0);
  importDefault = undefined;
  const colors = nativeDefault.colors;
  if (isActive) {
    let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    let tmp4 = tmp2;
    let tmp7 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp4 = tmp2;
    tmp7 = tmp2;
  }
  obj = noop;
  const ref = noop.useRef(null);
  importDefault = tmp7(11126)(ref);
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  const tmp = closure_11();
  let items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_0 = stateFromStores;
  const colors2 = tmp4(576).colors;
  let str = useToken.useToken(isActive ? colors2.BACKGROUND_BRAND : colors2.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  closure_129_1 = str;
  let num = 0;
  if (isActive) {
    num = 360;
  }
  closure_129_2 = num;
  let tmp9Result = ReanimatedRexport;
  const sharedValue = tmp9Result.useSharedValue(str);
  closure_129_3 = sharedValue;
  tmp9Result = ReanimatedRexport;
  const sharedValue1 = tmp9Result.useSharedValue(num);
  closure_129_4 = sharedValue1;
  const fn = function s() {
    if (require) {
      value = closure_1;
    } else {
      value = noop.get();
    }
    obj = { backgroundColor: value, transform: null };
    let num = 0;
    if (!require) {
      num = Pressable.get();
    }
    obj = { rotate: "" + num + "deg" };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { reducedMotion: stateFromStores, targetBackgroundColor: str, backgroundColor: sharedValue, rotation: sharedValue1 };
  fn.__workletHash = 1525758595013;
  fn.__initData = __initData;
  const items1 = [sharedValue, str, sharedValue1, num];
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    obj = timing;
    const result = noop.set(obj.withTiming(closure_1, obj));
    const result1 = Pressable.set(spring.withSpring(dependencyMap, closure_9));
  }, items1);
  obj = {
    onPress() {
      closure_1(ContentDismissActionType.AUTO);
      require();
    },
    accessible: true,
    accessibilityLabel: null,
    accessibilityRole: "switch",
    accessibilityState: null,
    children: null
  };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isActive) {
    let stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  obj.accessibilityLabel = stringResult;
  obj.accessibilityState = { checked: isActive };
  obj = { style: null, ref, children: jsx(SuperReactionIcon.SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT }) };
  const items2 = [tmp.container, animatedStyle];
  obj.style = items2;
  obj.children = jsx(tmp7(4296).View, { style: null, ref, children: jsx(SuperReactionIcon.SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT }) });
  return <Pressable style={null} ref={ref}>{jsx(SuperReactionIcon.SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT })}</Pressable>;
};