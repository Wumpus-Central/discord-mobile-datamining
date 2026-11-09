// discord_app/modules/main_tabs_v2/native/you_bar/YouBarUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(17396);
({
  YOU_BAR_SPRING_CONFIG: closure_6,
  YOU_BAR_LARGE_AVATAR_NAME_MARGIN: metroImportDefault,
  YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8,
} = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5140);
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
let closure_12 = {
  code: "(function YouBarUserTsx1(){let[nameMargin]=this.__closure;return{marginLeft:nameMargin.get()};})",
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default noop.memo(function YouBarUser(isCondensed) {
  isCondensed = isCondensed.isCondensed;
  _require = undefined;
  const tmp = closure_11();
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  _require = tmp5;
  let obj = require("initialize");
  const tmp2 = _require;
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(
    isCondensed ? closure_8 : closure_7,
  );
  const items1 = [!isCondensed, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(spring_spring.withSpring(c0 ? metroImportDefault : React5, timestampProducer));
  }, items1);
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [closure_12, sharedValue];
  _require = undefined;
  [tmp8, tmp9] = items2;
  class YouBarUserTsx1 {
    constructor() {
      obj = { marginLeft: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  YouBarUserTsx1.__closure = items3;
  YouBarUserTsx1.__workletHash = 12382860773339;
  YouBarUserTsx1.__initData = tmp8;
  const animatedStyle = tmp2(1652).useAnimatedStyle(YouBarUserTsx1);
  const tmp2Result = tmp2(1652);
  const name = sharedValue(5194).useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      let obj3 = { style: tmp.youButton, children: null };
      const obj5 = { isLargeAvatar: tmp5, onPress: isCondensed.onAvatarPress };
      const items4 = [closure_9(tmp11(18813), obj5)];
      const obj6 = { style: null, children: null };
      const items5 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      obj6.style = items5;
      const obj7 = { userId: stateFromStores.id, username: name };
      obj6.children = closure_9(tmp11(18814), obj7);
      items4[1] = closure_9(tmp11(1652).View, obj6);
      obj3.children = items4;
    }
    return tmp13(View, obj3);
  }
  const obj8 = { style: tmp.youButton, children: null };
  const items6 = [closure_9(sharedValue(18812), { isLarge: !isCondensed })];
  const obj9 = { style: null, children: closure_9(View, { style: tmp.placeholder }) };
  const items7 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj9.style = items7;
  items6[1] = closure_9(sharedValue(1652).View, obj9);
  obj8.children = items6;
  obj3 = obj8;
  const obj10 = { style: tmp.placeholder };
  const obj4 = sharedValue(5194);
});
