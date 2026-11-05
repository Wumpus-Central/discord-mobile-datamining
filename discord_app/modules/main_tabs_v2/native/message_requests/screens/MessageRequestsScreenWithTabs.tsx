// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import SegmentedControlState from "../../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import useMeasuredLayoutDefault from "../../../../screen/native/useMeasuredLayout.tsx";
import SegmentedControl from "../../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import TTIFirstContentfulPaint from "../../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import SegmentedControlPages from "../../../../../design/components/SegmentedControl/native/SegmentedControlPages.native.tsx";
import MessageRequestListDefault from "../../../../message_request/native/MessageRequestList.tsx";
import SpamMessageListDefault from "../../../../message_request/native/spam/SpamMessageList.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
const createStyles = fn(5143);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  messageRequestContent: { flex: 1 },
  tabContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.tabContainer = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let obj4 = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx",
);

export default noop.memo(function MessageRequestsScreenWithTabs(navigation) {
  navigation = navigation.navigation;
  const tmp = closure_8();
  const tmp4 = useMeasuredLayoutDefault();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  items = [navigation];
  const callback = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const obj2 = { items: null, pageWidth: null, defaultIndex: 0 };
  const obj3 = { label: null, id: null, page: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["7RFcXZ"]);
  obj3.id = constants.REQUEST;
  obj3.page = hasOwnProperty(MessageRequestListDefault, { goToMessageRequestPreview: callback });
  const items1 = [obj3];
  const obj4 = { label: null, id: null, page: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.ulKXHp);
  obj4.id = constants.SPAM;
  obj4.page = hasOwnProperty(SpamMessageListDefault, { goToMessageRequestPreview: callback });
  items1[1] = obj4;
  obj2.items = items1;
  obj2.pageWidth = num;
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj2);
  const obj5 = { style: tmp.container, children: null };
  const items2 = [
    hasOwnProperty(View, {
      style: tmp.tabContainer,
      ref,
      onLayout,
      children: hasOwnProperty(SegmentedControl.SegmentedControl, { state: segmentedControlState }),
    }),
    ,
  ];
  const obj6 = {
    style: tmp.tabContainer,
    ref,
    onLayout,
    children: hasOwnProperty(SegmentedControl.SegmentedControl, { state: segmentedControlState }),
  };
  items2[1] = hasOwnProperty(View, {
    style: tmp.messageRequestContent,
    children: hasOwnProperty(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }),
  });
  items2[2] = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
  obj5.children = items2;
  return timestampProducer(View, obj5);
});
