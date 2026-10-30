// discord_app/modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1, overflow: "hidden" }, header: null };
const rect = { position: "absolute", zIndex: 1, top: 0, left: 0, right: 0, paddingTop: nativeDefault.space.PX_4 };
obj2.header = rect;
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ProfileCustomizationScrollAwayTabsTsx1(){const{activeIndex,mainScrollY,height,guildScrollY}=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx");

export default function ProfileCustomizationScrollAwayTabs(state) {
  state = state.state;
  let token;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_8();
  const tmp2 = sharedValue(sharedValue1.useState(0), 2);
  const height = tmp2[0];
  importDefault = tmp2[1];
  token = height(token[6]).useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj = height(token[6]);
  sharedValue = height(token[7]).useSharedValue(0);
  let obj2 = height(token[7]);
  sharedValue1 = height(token[7]).useSharedValue(0);
  const activeIndex = state.activeIndex;
  const memo = sharedValue1.useMemo(() => {
    let NativeResult;
    if (obj.isAndroid()) {
      const Gesture = first(token[9]).Gesture;
      NativeResult = Gesture.Native();
    }
    return NativeResult;
  }, []);
  const callback = sharedValue1.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.height);
  }, []);
  const obj3 = height(token[7]);
  const fn = function f() {
    const bound = Math.min(Math.max(activeIndex.get(), 0), 1);
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const result = Math.min(Math.max(sharedValue.get(), 0), first) * (1 - bound);
    obj2.translateY = -result + Math.min(Math.max(sharedValue1.get(), 0), first) * bound;
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { activeIndex, mainScrollY: sharedValue, height, guildScrollY: sharedValue1 };
  fn.__workletHash = 14885523841037;
  fn.__initData = __initData;
  let items = [height, token, sharedValue, sharedValue1, memo];
  const animatedStyle = height(token[7]).useAnimatedStyle(fn);
  const memo1 = sharedValue1.useMemo(
    () => ({
      height,
      backgroundColor: token,
      mainScrollY: sharedValue,
      guildScrollY: sharedValue1,
      pagerGesture: memo,
    }),
    items,
  );
  const obj5 = { value: memo1, children: null };
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: null, onLayout: callback, children: memo(height(token[11]).Tabs, { state }) };
  const items1 = [tmp.header, { backgroundColor: token }, animatedStyle];
  obj7.style = items1;
  const items2 = [
    memo(require("ReanimatedRexport").View, obj7),
    memo(height(token[12]).SegmentedControlPages, { state, nativeGesture: memo }),
  ];
  obj6.children = items2;
  obj5.children = closure_7(activeIndex, obj6);
  return memo(require("ProfileCustomizationHeaderContext").Provider, obj5);
}
