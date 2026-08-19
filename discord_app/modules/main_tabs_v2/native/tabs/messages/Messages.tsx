// discord_app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../../a11y/AccessibilityStore.tsx";
import _handleConnectionOpen from "../../../../gateway/GatewayConnectionStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  const obj = { flex: 1, backgroundColor: ThemesDefault.colors.PANEL_BG };
  obj[0] = obj;
  return obj;
});
let closure_10 = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const memoResult = importAllResult.memo(function Messages(style) {
  let sharedValue;
  let dataKey;
  let sections;
  let externalScrollEventHandler;
  const tmp = callback2();
  let obj = sharedValue(sections[9]);
  sharedValue = obj.useSharedValue(0);
  obj1 = sharedValue(sections[10]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  let obj2 = sharedValue(sections[11]);
  const sum = youBarTotalHeight + obj2.useMobileQuestDockHeight();
  let obj3 = sharedValue(sections[10]);
  const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
  const tmp4 = dataKey(sections[7]);
  const tmp5 = sharedValue;
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[12])());
  const tmp11 = dataKey(sections[13])();
  dataKey = tmp11.dataKey;
  sections = tmp11.sections;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  const tmp10 = dataKey(sections[12])();
  const config = dataKey(sections[14]).useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[15])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[16])();
  const obj5 = dataKey(sections[14]);
  const commonTriggerPoint = sharedValue(sections[17]).useCommonTriggerPoint(sharedValue(sections[18]).DmGdmListRenderTriggerPoint);
  const items = [dataKey];
  const obj6 = sharedValue(sections[17]);
  const effect = externalScrollEventHandler.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!closure_1_5.useReducedMotion) {
          let tmp5Result = sharedValue(sections[21]);
          const rootNavigationRef = tmp5Result.getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            tmp5Result = sharedValue(sections[22]);
            const rootNavigationRef1 = sharedValue(sections[21]).getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != tmp5Result.coerceGuildsRoute(currentRoute);
            const tmp5Result1 = sharedValue(sections[21]);
          }
          if (tmp2) {
            const result = sharedValue(sections[23]).DeprecatedLayoutAnimation();
            const tmp5Result2 = sharedValue(sections[23]);
          }
        }
      }
      obj7 = sharedValue(sections[20]);
    }
  }, items);
  const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
    sharedValue(sections[24]).trackAppUIViewed();
    const obj = sharedValue(sections[24]);
    const reduced = sections.reduce((acc, item, index) => acc + item, 0);
    dataKey(sections[25]).recordRender(reduced, closure_1_6.isConnected());
  });
  const tmp18 = dataKey(sections[19])("Messages");
  externalScrollEventHandler = sharedValue(sections[26]).useExternalScrollEventHandler({ id: "messages" });
  let obj7 = sharedValue(sections[26]);
  const fn = function z(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = closure_10;
  obj = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, isRefreshEnabled: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const obj8 = sharedValue(sections[9]);
  const intl = sharedValue(sections[27]).intl;
  obj[0] = intl.string(sharedValue(sections[27]).t.OIgYlQ);
  obj[1] = tmp11;
  obj[2] = sharedValue(sections[9]).useAnimatedScrollHandler(fn);
  obj[3] = sum;
  obj[4] = tmp18;
  obj[5] = listItemHeight;
  obj[6] = listItemSizes;
  obj[7] = listItemSuggestedFriendHeight;
  obj[8] = listLeft;
  obj[9] = ref1;
  obj[10] = listTop;
  obj[11] = recycleItems;
  obj[12] = youBarTotalHeight1;
  obj[13] = sharedValue;
  obj = { value: tmp4(dataKey(sections[8]).MESSAGES).analyticsLocations, children: null };
  obj1 = { style: items1, children: null };
  items1 = [tmp.container, style.style];
  obj2 = { backgroundColor: tmp.container.backgroundColor, children: null };
  const items2 = [callback(dataKey(sections[29]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp11.showFullscreenEmptyState) {
    let tmp23Result = callback(tmp2(tmp3[30]), {});
  } else {
    if ("legend" === list) {
      let tmp26 = tmp3[31];
    } else {
      tmp26 = "flash" === list ? tmp3[32] : tmp3[33];
    }
    obj3 = { ref: null };
    obj3[0] = ref;
    const merged = Object.assign(obj);
    tmp23Result = callback(tmp2(tmp26), obj3);
    const tmp2Result = tmp2(tmp26);
  }
  items2[1] = tmp23Result;
  items2[2] = callback(tmp5(sections[34]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj2[1] = items2;
  obj1[1] = callback(sharedValue(sections[28]).CutoutBackgroundProvider, obj2);
  obj[1] = callback(View, obj1);
  return callback(sharedValue(sections[7]).AnalyticsLocationProvider, obj);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;