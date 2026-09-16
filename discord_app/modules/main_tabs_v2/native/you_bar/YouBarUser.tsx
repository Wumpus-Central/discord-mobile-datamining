// discord_app/modules/main_tabs_v2/native/you_bar/YouBarUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15205);
({
  YOU_BAR_SPRING_CONFIG: metroRequire,
  YOU_BAR_LARGE_AVATAR_NAME_MARGIN: closure_7,
  YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8,
} = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let obj = {
  youButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
  },
  userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 },
  placeholder: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.round,
  height: 16,
  width: 80,
};
obj.placeholder = size;
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}",
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default noop.memo(function YouBarUser(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  _require = undefined;
  const tmp = closure_11();
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  _require = tmp5;
  let obj = require("initialize");
  const tmp2 = _require;
  const sharedValue = require("ReanimatedRexport").useSharedValue(isQuestRendered ? closure_8 : closure_7);
  const items1 = [!isQuestRendered, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(spring.withSpring(closure_0 ? React5 : React6, timestampProducer));
  }, items1);
  const obj2 = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = { marginLeft: closure_1.get() };
      return obj;
    }
  }
  S.__closure = { nameMargin: sharedValue };
  S.__workletHash = 12063452832866;
  S.__initData = __initData;
  const animatedStyle = tmp2(4374).useAnimatedStyle(S);
  const tmp2Result = tmp2(4374);
  const name = sharedValue(4482).useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      let obj3 = { style: tmp.youButton, children: null };
      const obj5 = { isLargeAvatar: tmp5, onPress: isQuestRendered.onAvatarPress };
      const items2 = [closure_9(tmp9(16517), obj5)];
      const obj6 = { style: null, children: null };
      const items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      obj6.style = items3;
      const obj7 = { userId: stateFromStores.id, username: name };
      obj6.children = closure_9(tmp9(16518), obj7);
      items2[1] = closure_9(tmp9(4374).View, obj6);
      obj3.children = items2;
    }
    return tmp11(View, obj3);
  }
  const obj8 = { style: null, children: null };
  const items4 = [tmp.youButton];
  obj8.style = items4;
  const items5 = [closure_9(sharedValue(16516), { isLarge: !isQuestRendered })];
  const obj9 = { style: null, children: closure_9(View, { style: tmp.placeholder }) };
  const items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj9.style = items6;
  items5[1] = closure_9(sharedValue(4374).View, obj9);
  obj8.children = items5;
  obj3 = obj8;
  const obj10 = { style: tmp.placeholder };
  const obj4 = sharedValue(4482);
});
