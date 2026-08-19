// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PendingMessageRequestRowDefault from "../../../../message_request/native/MessageRequestList.tsx";
import PendingSpamMessageRequestRowDefault from "../../../../message_request/native/spam/SpamMessageList.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { REQUEST: "REQUEST", SPAM: "SPAM" };
let obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
obj[1] = { flex: 1 };
const createCacheKey = { minHeight: 32, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  importDefault = tmp2[1];
  const items = [navigation];
  callback = importAllResult.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  navigation(8799);
  const obj = { label: null, id: null, page: null };
  const intl = navigation(1236).intl;
  obj[0] = intl.string(navigation(1236).t["7RFcXZ"]);
  obj[1] = constants.REQUEST;
  obj[2] = callback2(PendingMessageRequestRowDefault, { goToMessageRequestPreview: callback });
  const items1 = [obj, ];
  obj1 = { label: null, id: null, page: null };
  const intl2 = navigation(1236).intl;
  obj1[0] = intl2.string(navigation(1236).t.ulKXHp);
  obj1[1] = constants.SPAM;
  obj1[2] = callback2(PendingSpamMessageRequestRowDefault, { goToMessageRequestPreview: callback });
  items1[1] = obj1;
  obj[0] = items1;
  obj[1] = tmp2[0];
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj2 = { style: tmp.container, children: null };
  const items2 = [callback2(View, { style: tmp.tabContainer, onLayout: callback1, children: callback2(navigation(10096).SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj3 = { style: tmp.tabContainer, onLayout: callback1, children: callback2(navigation(10096).SegmentedControl, { state: segmentedControlState }) };
  items2[1] = callback2(View, { style: tmp.messageRequestContent, children: callback2(navigation(11785).SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = callback2(navigation(11075).TTIFirstContentfulPaint, { label: "message_requests" });
  obj2[1] = items2;
  return callback3(View, obj2);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default memoResult;