// === Module 17332: MessageRequestsScreenWithTabs ===

// Module 17332 (MessageRequestsScreenWithTabs)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import SegmentedControlState from "SegmentedControlState" /* 9889 */;
import SegmentedControl from "SegmentedControl" /* 9890 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12149 */;
import SegmentedControlPages from "SegmentedControlPages" /* 12867 */;
import MessageRequestListDefault from "MessageRequestList" /* 17333 */;
import SpamMessageListDefault from "SpamMessageList" /* 17349 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
const createStyles = fn(4756);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, messageRequestContent: { flex: 1 }, tabContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.tabContainer = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default noop.memo((navigation) => {
  navigation = navigation.navigation;
  closure_1 = undefined;
  const tmp = closure_9();
  [obj2.pageWidth, closure_1] = noop.useState(0);
  const items = [navigation];
  const callback = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj2 = { items: null, pageWidth: null, defaultIndex: 0 };
  const obj3 = { label: null, id: null, page: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["7RFcXZ"]);
  obj3.id = constants.REQUEST;
  obj3.page = timestampProducer(MessageRequestListDefault, { goToMessageRequestPreview: callback });
  const items1 = [obj3, ];
  const obj4 = { label: null, id: null, page: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.ulKXHp);
  obj4.id = constants.SPAM;
  obj4.page = timestampProducer(SpamMessageListDefault, { goToMessageRequestPreview: callback });
  items1[1] = obj4;
  obj2.items = items1;
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj2);
  const obj5 = { style: tmp.container, children: null };
  const items2 = [timestampProducer(View, { style: tmp.tabContainer, onLayout: callback1, children: timestampProducer(SegmentedControl.SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj6 = { style: tmp.tabContainer, onLayout: callback1, children: timestampProducer(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items2[1] = timestampProducer(View, { style: tmp.messageRequestContent, children: timestampProducer(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = timestampProducer(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
  obj5.children = items2;
  return React5(View, obj5);
});