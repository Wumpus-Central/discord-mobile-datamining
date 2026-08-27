// discord_app/modules/main_tabs_v2/native/you_bar/YouBarUser.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/UserStore.tsx";
import CONNECTION_BANNER_HEIGHT from "YouBarConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

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
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  _require = tmp5;
  obj1 = ReanimatedRexport;
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
  const animatedStyle = require("../../../reanimated/ReanimatedRexport.tsx").useAnimatedStyle(S);
  let obj3 = sharedValue(4289);
  const name = obj3.useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      obj = { style: null, children: null };
      obj[0] = tmp.youButton;
      obj = { isLargeAvatar: null, onPress: null };
      obj[0] = tmp5;
      obj[1] = isQuestRendered.onAvatarPress;
      const items2 = [callback(tmp9(15888), obj), ];
      obj1 = { style: null, children: null };
      const items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      obj1[0] = items3;
      const obj2 = { userId: null, username: null };
      obj2[0] = stateFromStores.id;
      obj2[1] = name;
      obj1[1] = callback(tmp9(15889), obj2);
      items2[1] = callback(tmp9(4185).View, obj1);
      obj[1] = items2;
    }
    return tmp11(tmp12, obj);
  }
  obj3 = { style: items4, children: null };
  items4 = [tmp.youButton];
  const items5 = [callback(sharedValue(15887), { isLarge: !isQuestRendered }), ];
  const tmp2 = _require;
  const tmp2Result = ReanimatedRexport;
  const items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  items5[1] = callback(sharedValue(4185).View, { style: items6, children: callback(View, obj5) });
  obj3[1] = items5;
  obj = obj3;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;