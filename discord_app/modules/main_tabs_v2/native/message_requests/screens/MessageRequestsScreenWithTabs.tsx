// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { REQUEST: "REQUEST", SPAM: "SPAM" };
let obj = { container: null, messageRequestContent: null, tabContainer: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
obj[1] = { flex: 1 };
createCacheKey = { minHeight: 32, paddingHorizontal: require("Themes").space.PX_16 };
obj[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  let importDefault;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  importDefault = tmp2[1];
  const items = [navigation];
  callback = importAllResult.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = navigation(8878);
  obj = { items: null, pageWidth: null, defaultIndex: 0 };
  obj = { label: null, id: null, page: null };
  const intl = navigation(1236).intl;
  obj[0] = intl.string(navigation(1236).t["7RFcXZ"]);
  obj[1] = constants.REQUEST;
  obj[2] = callback2(importDefault(15819), { goToMessageRequestPreview: callback });
  const items1 = [obj, ];
  const obj1 = { label: null, id: null, page: null };
  const intl2 = navigation(1236).intl;
  obj1[0] = intl2.string(navigation(1236).t.ulKXHp);
  obj1[1] = constants.SPAM;
  obj1[2] = callback2(importDefault(15835), { goToMessageRequestPreview: callback });
  items1[1] = obj1;
  obj[0] = items1;
  obj[1] = tmp2[0];
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj2 = { style: tmp.container, children: null };
  const items2 = [callback2(View, { style: tmp.tabContainer, onLayout: callback1, children: callback2(navigation(9063).SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj3 = { style: tmp.tabContainer, onLayout: callback1, children: callback2(navigation(9063).SegmentedControl, { state: segmentedControlState }) };
  items2[1] = callback2(View, { style: tmp.messageRequestContent, children: callback2(navigation(9480).SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = callback2(navigation(11207).TTIFirstContentfulPaint, { label: "message_requests" });
  obj2[1] = items2;
  return callback3(View, obj2);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default memoResult;