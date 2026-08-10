// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx
import { View } from "get ActivityIndicator";
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { useSafeAreaInsets } from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import { trackTabPressed } from "../TabsPerformanceTracker.tsx";

const require = arg1;
let obj = { container: null, androidContainer: null, wrapper: null };
obj = { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.xl };
obj[0] = obj;
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SCRIM, borderRadius: require("Themes").radii.none };
obj[1] = createCacheKey;
obj[2] = { flex: 1, borderRadius: require("Themes").radii.xl, overflow: "hidden" };
let closure_6 = createCacheKey.createStyles(obj);
let obj2 = { flex: 1, borderRadius: require("Themes").radii.xl, overflow: "hidden" };
const memoResult = importAllResult.memo(function YouScreenContainer(route) {
  route = route.route;
  let items1 = callback();
  let tmp = importDefault;
  let tmp5Result = dependencyMap;
  let obj = trackTabPressed;
  const trackTabPerformance = obj.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      const initialTab = params.initialTab;
    }
  }
  if (tmp(4161)().isChatBesideChannelList) {
    const items = [items1.container, ];
    let tmp3Result = tmp3(501);
    let tmp7;
    if (tmp3Result.isAndroid()) {
      obj = {};
      const merged = Object.assign(items1.androidContainer);
      obj.paddingTop = useSafeAreaInsets().top;
      tmp7 = obj;
    }
    obj = { style: null, children: null };
    items[1] = tmp7;
    obj[0] = items;
    tmp3Result = tmp3(501);
    if (tmp3Result.isAndroid()) {
      const obj1 = { style: null, children: null };
      items1 = [, ];
      items1[0] = items1.wrapper;
      const obj2 = { maxWidth: null };
      obj2[0] = 0.6 * tmp(1474)().width;
      items1[1] = obj2;
      obj1[0] = items1;
      tmp = tmp(15861);
      const obj3 = { initialTab: null };
      obj3[0] = initialTab;
      tmp5Result = tmp5(tmp, obj3);
      obj1[1] = tmp5Result;
      tmp5Result = tmp5(tmp6, obj1);
    } else {
      const obj4 = { initialTab: null };
      obj4[0] = initialTab;
      tmp5Result = tmp5(tmp(15861), obj4);
    }
    obj[1] = tmp5Result;
    tmp5(View, obj);
  } else {
    const obj5 = { initialTab: null };
    obj5[0] = initialTab;
    return tmp5(tmp(15861), obj5);
  }
});
const result = require("MODE_CHANGE_PHYSICS").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;