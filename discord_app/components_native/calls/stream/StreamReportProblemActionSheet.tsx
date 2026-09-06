// discord_app/components_native/calls/stream/StreamReportProblemActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../modules/toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import BottomSheetModal from "../../../../_runtime/06627_BottomSheetModal.js";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import StreamerApplicationSelectors from "../../../modules/go_live/utils/StreamerApplicationSelectors.tsx";
import trackStreamProblemDefault from "../../../modules/go_live/utils/trackStreamProblem.tsx";
import getStreamIssueReportOptionsDefault from "../../../modules/go_live/utils/getStreamIssueReportOptions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";

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
    obj = {
      type: "Stream Issue Sheet",
      other_user_id: stream.ownerId,
      application_id: null,
      application_name: null,
      game_id: null,
    };
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
    return jsx(
      stream(dependencyMap[13]).ActionSheetRow,
      {
        label: label.label,
        arrow: true,
        onPress() {
          const obj = {
            problem: value,
            stream,
            feedback: "",
            streamApplication: null,
            analyticsData: null,
            location: "Stream",
          };
          const tmp = trackStreamProblemDefault;
          obj.streamApplication = StreamerApplicationSelectors.getStreamerApplication(stream, PresenceStore);
          obj.analyticsData = analyticsData;
          tmp(obj);
          ActionSheetActionCreatorsDefault.hideActionSheet();
          ToastUtils.presentFeedbackSent();
        },
      },
      index,
    );
  });
  let obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.XuqqwI);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  obj = {
    style: tmp.container,
    children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }),
  };
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, {
    style: tmp.container,
    children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }),
  });
  return jsx(ActionSheet.ActionSheet, {
    style: tmp.container,
    children: jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: mapped }),
  });
}
