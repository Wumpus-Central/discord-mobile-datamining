// === Module 17217: StreamReportProblemActionSheet ===

// Module 17217 (StreamReportProblemActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import ActionSheetRow from "ActionSheetRow" /* 7200 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7738 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 17218 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 17219 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4600 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  ({ stream: require, analyticsData: importDefault } = arg0);
  useMountEffectDefault(() => {
    let obj = StreamerApplicationSelectors;
    const streamerApplication = obj.getStreamerApplication(stream, PresenceStore);
    obj = { type: "Stream Issue Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    obj.application_id = id;
    let name = null;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    obj.application_name = name;
    let id1 = null;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    obj.game_id = id1;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj);
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
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.XuqqwI);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  obj = { style: tmp.container, children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }) };
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { style: tmp.container, children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
  return jsx(ActionSheet.ActionSheet, { style: tmp.container, children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
};