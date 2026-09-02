// === Module 15841: ? ===

// Module 15841
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_6 from "_handleConnectionOpen" /* 5229 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { container: null };
  obj = { flex: 1, backgroundColor: ThemesDefault.colors.PANEL_BG };
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
  const effect = externalScrollEventHandler.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!closure_1_5.useReducedMotion) {
          let tmp5Result = tmp5(tmp6[20]);
          const rootNavigationRef = tmp5Result.getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            tmp5Result = tmp5(tmp6[21]);
            const rootNavigationRef1 = tmp5(tmp6[20]).getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != tmp5Result.coerceGuildsRoute(currentRoute);
            const tmp5Result1 = tmp5(tmp6[20]);
          }
          if (tmp2) {
            const result = tmp5(tmp6[22]).DeprecatedLayoutAnimation();
            const tmp5Result2 = tmp5(tmp6[22]);
          }
        }
      }
      obj7 = sharedValue(sections[19]);
    }
  }, items);
  const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
    sharedValue(sections[23]).trackAppUIViewed();
    const obj = sharedValue(sections[23]);
    const reduced = sections.reduce((arg0, arg1) => arg0 + arg1, 0);
    dataKey(sections[24]).recordRender(reduced, closure_1_6.isConnected());
  });
  const obj6 = sharedValue(sections[17]);
  externalScrollEventHandler = sharedValue(sections[25]).useExternalScrollEventHandler({ id: "messages" });
  let obj7 = sharedValue(sections[25]);
  class O {
    constructor(arg0) {
      result = closure_0.set(style.contentOffset.y);
      tmp2 = closure_3(style.contentOffset.y, style.contentSize.height, style.layoutMeasurement.height);
      return;
    }
  }
  O.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  O.__workletHash = 5461403437592;
  O.__initData = closure_10;
  obj = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const obj8 = sharedValue(sections[9]);
  const intl = sharedValue(sections[26]).intl;
  obj[0] = intl.string(sharedValue(sections[26]).t.OIgYlQ);
  obj[1] = tmp11;
  obj[2] = sharedValue(sections[9]).useAnimatedScrollHandler(O);
  obj[3] = sum;
  obj[4] = listItemHeight;
  obj[5] = listItemSizes;
  obj[6] = listItemSuggestedFriendHeight;
  obj[7] = listLeft;
  obj[8] = ref1;
  obj[9] = listTop;
  obj[10] = recycleItems;
  obj[11] = youBarTotalHeight1;
  obj[12] = sharedValue;
  obj = { value: tmp4(dataKey(sections[8]).MESSAGES).analyticsLocations, children: null };
  obj1 = { style: items1, children: null };
  items1 = [tmp.container, style.style];
  obj2 = { backgroundColor: tmp.container.backgroundColor, children: null };
  const items2 = [callback(dataKey(sections[28]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp11.showFullscreenEmptyState) {
    let tmp22Result = tmp22(tmp2(tmp3[29]), {});
  } else {
    if ("legend" === list) {
      let tmp25 = tmp3[30];
    } else {
      tmp25 = "flash" === list ? tmp3[31] : tmp3[32];
    }
    obj3 = { ref: null };
    obj3[0] = ref;
    const merged = Object.assign(obj);
    tmp22Result = tmp22(tmp2(tmp25), obj3);
    const tmp2Result = tmp2(tmp25);
  }
  items2[1] = tmp22Result;
  items2[2] = callback(tmp5(sections[33]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj2[1] = items2;
  obj1[1] = closure_8(sharedValue(sections[27]).CutoutBackgroundProvider, obj2);
  obj[1] = callback(View, obj1);
  return callback(sharedValue(sections[7]).AnalyticsLocationProvider, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;