// discord_app/modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import ProfileCustomizationHeaderContextDefault from "ProfileCustomizationHeaderContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { flex: 1, overflow: "hidden" }, header: null };
const rect = { position: "absolute", zIndex: 1, top: 0, left: 0, right: 0, paddingTop: nativeDefault.space.PX_4 };
obj2.header = rect;
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "(function ProfileCustomizationScrollAwayTabsTsx1(){let[activeIndex,mainScrollY,height,guildScrollY]=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx");

export default function ProfileCustomizationScrollAwayTabs(state) {
  state = state.state;
  let sharedValue1;
  const tmp = closure_8();
  [first, importDefault] = sharedValue1.useState(0);
  _require = first;
  const token = require("useToken").useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj = sharedValue1;
  let obj2 = require("useToken");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const memo = sharedValue1.useMemo(() => {
    let NativeResult;
    if (obj.isAndroid()) {
      const Gesture = height(backgroundColor[9]).Gesture;
      NativeResult = Gesture.Native();
    }
    return NativeResult;
  }, []);
  const callback = sharedValue1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const obj4 = require("../../../../../_runtime/metro/01652__.js");
  items = [closure_9, state.activeIndex, sharedValue, first, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class ProfileCustomizationScrollAwayTabsTsx1 {
    constructor() {
      bound = Math.min(Math.max(closure_0.get(), 0), 1);
      obj = { transform: null };
      obj1 = { translateY: null };
      result = Math.min(Math.max(closure_1.get(), 0), closure_2) * (1 - bound);
      obj1.translateY = -result + Math.min(Math.max(closure_3.get(), 0), closure_2) * bound;
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp13, tmp14, tmp15, tmp16];
  ProfileCustomizationScrollAwayTabsTsx1.__closure = items1;
  ProfileCustomizationScrollAwayTabsTsx1.__workletHash = 6091010255124;
  ProfileCustomizationScrollAwayTabsTsx1.__initData = tmp12;
  const items2 = [first, token, sharedValue, sharedValue1, memo];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ProfileCustomizationScrollAwayTabsTsx1,
  );
  const memo1 = obj.useMemo(
    () => ({ height, backgroundColor, mainScrollY, guildScrollY: sharedValue1, pagerGesture: memo }),
    items2,
  );
  const obj6 = { value: memo1, children: null };
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { style: null, onLayout: callback, children: closure_6(require("Tabs/Tabs").Tabs, { state }) };
  const items3 = [tmp.header, { backgroundColor: token }, animatedStyle];
  obj8.style = items3;
  const items4 = [
    closure_6(_modDef1652.View, obj8),
    closure_6(require("SegmentedControlPages").SegmentedControlPages, { state, nativeGesture: memo }),
  ];
  obj7.children = items4;
  obj6.children = closure_7(memo, obj7);
  return closure_6(ProfileCustomizationHeaderContextDefault.Provider, obj6);
}
