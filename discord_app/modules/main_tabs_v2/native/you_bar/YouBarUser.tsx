// === Module 16385: YouBarUser ===

// Module 16385 (YouBarUser)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15098);
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_LARGE_AVATAR_NAME_MARGIN: closure_7, YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8 } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let obj = { youButton: null, userText: null, placeholder: null };
obj = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
obj.youButton = obj;
obj.userText = { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, height: 16, width: 80 };
obj.placeholder = size;
let closure_11 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default noop.memo(function YouBarUser(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  _require = undefined;
  const tmp = closure_11();
  let obj = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  _require = tmp5;
  let obj1 = require("ReanimatedRexport");
  const sharedValue = obj1.useSharedValue(isQuestRendered ? closure_8 : closure_7);
  const items1 = [!isQuestRendered, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(spring.withSpring(closure_0 ? React5 : React6, timestampProducer));
  }, items1);
  class S {
    constructor() {
      obj = { marginLeft: closure_1.get() };
      return obj;
    }
  }
  S.__closure = { nameMargin: sharedValue };
  S.__workletHash = 12063452832866;
  S.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(S);
  let obj3 = sharedValue(4404);
  const name = obj3.useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      obj = { style: tmp.youButton, children: null };
      obj = { isLargeAvatar: tmp5, onPress: isQuestRendered.onAvatarPress };
      const items2 = [closure_9(tmp9(16387), obj), ];
      obj1 = { style: null, children: null };
      const items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      obj1.style = items3;
      const obj2 = { userId: stateFromStores.id, username: name };
      obj1.children = closure_9(tmp9(16388), obj2);
      items2[1] = closure_9(tmp9(4296).View, obj1);
      obj.children = items2;
    }
    return tmp11(View, obj);
  }
  obj3 = { style: null, children: null };
  const items4 = [tmp.youButton];
  obj3.style = items4;
  const items5 = [closure_9(sharedValue(16386), { isLarge: !isQuestRendered }), ];
  const obj4 = { style: null, children: closure_9(View, { style: tmp.placeholder }) };
  const items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj4.style = items6;
  items5[1] = closure_9(sharedValue(4296).View, obj4);
  obj3.children = items5;
  obj = obj3;
  const obj5 = { style: tmp.placeholder };
  const tmp2Result = require("ReanimatedRexport");
});