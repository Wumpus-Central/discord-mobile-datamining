// === Module 16874: MessageRequestsScreenWithTabs ===

// Module 16874 (MessageRequestsScreenWithTabs)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import SegmentedControlState from "SegmentedControlState" /* 9792 */;
import SegmentedControl from "SegmentedControl" /* 9793 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11896 */;
import SegmentedControlPages from "SegmentedControlPages" /* 12616 */;
import MessageRequestListDefault from "MessageRequestList" /* 16875 */;
import SpamMessageListDefault from "SpamMessageList" /* 16891 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
fn(4560);
let obj = { container: null, messageRequestContent: null, tabContainer: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.messageRequestContent = { flex: 1 };
const createStyles = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
obj.tabContainer = createStyles;
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default noop.memo((navigation) => {
  navigation = navigation.navigation;
  const tmp = closure_9();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  closure_1 = tmp2[1];
  const items = [navigation];
  const callback = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = { items: null, pageWidth: null, defaultIndex: 0 };
  obj = { label: null, id: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["7RFcXZ"]);
  obj.id = constants.REQUEST;
  obj.page = timestampProducer(MessageRequestListDefault, { goToMessageRequestPreview: callback });
  const items1 = [obj, ];
  const obj1 = { label: null, id: null, page: null };
  const intl2 = util.intl;
  obj1.label = intl2.string(util.t.ulKXHp);
  obj1.id = constants.SPAM;
  obj1.page = timestampProducer(SpamMessageListDefault, { goToMessageRequestPreview: callback });
  items1[1] = obj1;
  obj.items = items1;
  obj.pageWidth = tmp2[0];
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj2 = { style: tmp.container, children: null };
  const items2 = [timestampProducer(View, { style: tmp.tabContainer, onLayout: callback1, children: timestampProducer(SegmentedControl.SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj3 = { style: tmp.tabContainer, onLayout: callback1, children: timestampProducer(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items2[1] = timestampProducer(View, { style: tmp.messageRequestContent, children: timestampProducer(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = timestampProducer(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
  obj2.children = items2;
  return React5(View, obj2);
});