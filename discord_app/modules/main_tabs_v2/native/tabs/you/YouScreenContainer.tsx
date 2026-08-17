// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useChatLayoutDefault from "../../../../chat/native/useChatLayout.tsx";
import trackTabPressed from "../TabsPerformanceTracker.tsx";
import handleBackButtonPressDefault from "YouScreen.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { RootNavigatorScreen } from "../../MainTabsConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
let obj = { container: null, androidContainer: null, wrapper: null };
obj = { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.xl };
obj[0] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, borderRadius: ThemesDefault.radii.none };
obj[1] = createCacheKey;
obj[2] = { flex: 1, borderRadius: ThemesDefault.radii.xl, overflow: "hidden" };
let closure_6 = createCacheKey.createStyles(obj);
let obj2 = { flex: 1, borderRadius: ThemesDefault.radii.xl, overflow: "hidden" };
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
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const items = [items1.container, ];
    let tmp3Result = tmp3(501);
    let tmp7;
    if (tmp3Result.isAndroid()) {
      obj = {};
      const merged = Object.assign(items1.androidContainer);
      obj.paddingTop = useSafeAreaInsetsDefault().top;
      tmp7 = obj;
    }
    obj = { style: null, children: null };
    items[1] = tmp7;
    obj[0] = items;
    tmp3Result = tmp3(501);
    if (tmp3Result.isAndroid()) {
      obj1 = { style: null, children: null };
      items1 = [, ];
      items1[0] = items1.wrapper;
      const obj2 = { maxWidth: null };
      obj2[0] = 0.6 * useWindowDimensionsDefault().width;
      items1[1] = obj2;
      obj1[0] = items1;
      tmp = handleBackButtonPressDefault;
      const obj3 = { initialTab: null };
      obj3[0] = initialTab;
      tmp5Result = tmp5(tmp, obj3);
      obj1[1] = tmp5Result;
      tmp5Result = tmp5(tmp6, obj1);
    } else {
      const obj4 = { initialTab: null };
      obj4[0] = initialTab;
      tmp5Result = tmp5(handleBackButtonPressDefault, obj4);
    }
    obj[1] = tmp5Result;
    tmp5(View, obj);
  } else {
    const obj5 = { initialTab: null };
    obj5[0] = initialTab;
    return tmp5(handleBackButtonPressDefault, obj5);
  }
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;