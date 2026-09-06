// === Module 16385: ? ===

// Module 16385
import ThemesDefault from "Themes" /* 576 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1371 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 15098 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c3 = importAllResult;
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_LARGE_AVATAR_NAME_MARGIN: error, YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8 } = CONNECTION_BANNER_HEIGHT);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { youButton: null, userText: null, placeholder: null };
obj = { flexDirection: "row", alignItems: "center", borderRadius: ThemesDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
obj[0] = obj;
obj[1] = { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.round, height: 16, width: 80 };
obj[2] = createCacheKey;
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
const memoResult = importAllResult.memo(function YouBarUser(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  let _require;
  let sharedValue;
  const tmp = callback2();
  let obj = _require(504);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  _require = tmp5;
  obj1 = _require(4296);
  sharedValue = obj1.useSharedValue(isQuestRendered ? closure_8 : closure_7);
  const items1 = [!isQuestRendered, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(callback(closure_1_2[9]).withSpring(callback ? closure_1_7 : closure_1_8, closure_1_6));
  }, items1);
  class S {
    constructor() {
      obj = { marginLeft: closure_1.get() };
      return obj;
    }
  }
  S.__closure = { nameMargin: sharedValue };
  S.__workletHash = 12063452832866;
  S.__initData = closure_12;
  const animatedStyle = _require(4296).useAnimatedStyle(S);
  let obj3 = sharedValue(4404);
  const name = obj3.useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      obj = { style: null, children: null };
      obj[0] = tmp.youButton;
      obj = { isLargeAvatar: null, onPress: null };
      obj[0] = tmp5;
      obj[1] = isQuestRendered.onAvatarPress;
      const items2 = [callback(tmp9(16387), obj), ];
      obj1 = { style: null, children: null };
      const items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      obj1[0] = items3;
      const obj2 = { userId: null, username: null };
      obj2[0] = stateFromStores.id;
      obj2[1] = name;
      obj1[1] = callback(tmp9(16388), obj2);
      items2[1] = callback(tmp9(4296).View, obj1);
      obj[1] = items2;
    }
    return tmp11(tmp12, obj);
  }
  obj3 = { style: items4, children: null };
  items4 = [tmp.youButton];
  const items5 = [callback(sharedValue(16386), { isLarge: !isQuestRendered }), ];
  const tmp2 = _require;
  const tmp2Result = _require(4296);
  const items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  items5[1] = callback(sharedValue(4296).View, { style: items6, children: callback(View, obj5) });
  obj3[1] = items5;
  obj = obj3;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;