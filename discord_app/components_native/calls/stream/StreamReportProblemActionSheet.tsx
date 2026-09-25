// === Module 17009: StreamReportProblemActionSheet ===

// Module 17009 (StreamReportProblemActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4524 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import useMountEffectDefault from "useMountEffect" /* 5291 */;
import BottomSheetModal from "BottomSheetModal" /* 6040 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6565 */;
import ActionSheet from "ActionSheet" /* 6613 */;
import ActionSheetRow from "ActionSheetRow" /* 6615 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7152 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 16293 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 17010 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4869 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { container: { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  ({ stream: require, analyticsData: importDefault } = arg0);
  useMountEffectDefault(() => {
    const streamerApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
    const obj3 = { type: "Stream Issue Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    obj3.application_id = id;
    let name = null;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    obj3.application_name = name;
    let id1 = null;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    obj3.game_id = id1;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj3);
  });
  let tmp = closure_6();
  const mapped = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false }).map((label, index) => {
    value = label.value;
    return jsx(stream(dependencyMap[13]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: value, stream, feedback: "", streamApplication: null, analyticsData: null, location: "Stream" };
        const tmp = trackStreamProblemDefault;
        obj.streamApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
        obj.analyticsData = analyticsData;
        tmp(obj);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        ToastUtils.presentFeedbackSent();
      }
    }, index);
  });
  let obj = { scrollable: true, header: null, children: null };
  let obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.XuqqwI);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const arr = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { style: tmp.container, children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
  return jsx(ActionSheet.ActionSheet, { scrollable: true, header: null, children: null });
};