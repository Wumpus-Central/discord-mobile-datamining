// discord_app/components_native/calls/stream/StreamReportProblemActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../modules/toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import BottomSheetModal from "../../../../_runtime/06112_BottomSheetModal.js";
import BottomSheetTitleHeader2 from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheetRow from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ActionSheet2 from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import StreamerApplicationSelectors from "../../../modules/go_live/utils/StreamerApplicationSelectors.tsx";
import trackStreamProblemDefault from "../../../modules/go_live/utils/trackStreamProblem.tsx";
import getStreamIssueReportOptionsDefault from "../../../modules/go_live/utils/getStreamIssueReportOptions.tsx";
import react from "../../../../_runtime/00019_react.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (stream) => {
      let tmp5;
      let tmp = stream;
      let obj = stream(576);
      const cResult = obj.c(11);
      stream = stream.stream;
      const analyticsData = stream.analyticsData;
      const tmp4 = closure_6();
      if (cResult[0] !== stream) {
        const fn = function c() {
          let id;
          let id1;
          let name;
          const obj = StreamerApplicationSelectors;
          const streamerApplication = obj.getStreamerApplication(stream, PresenceStore);
          const obj2 = {
            type: "Stream Issue Sheet",
            other_user_id: stream.ownerId,
            application_id: id,
            application_name: name,
            game_id: id1,
          };
          id = null;
          const track = AnalyticsUtilsDefault.track;
          const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
          AnalyticsUtilsDefault;
          if (null != streamerApplication) {
            id = streamerApplication.id;
          }
          name = null;
          if (null != streamerApplication) {
            name = streamerApplication.name;
          }
          id1 = null;
          if (null != streamerApplication) {
            id1 = streamerApplication.id;
          }
          track(OPEN_POPOUT, obj2);
        };
        cResult[0] = stream;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      analyticsData(5590)(tmp5);
      const tmp6 = analyticsData;
      if (cResult[2] === analyticsData) {
        let tmp8;
        let tmp11;
        let tmp14;
        if (cResult[3] === stream) {
          tmp8 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
          const intl = tmp(1126).intl;
          const tmp13 = <BottomSheetTitleHeader title={intl.string(tmp(1126).t.XuqqwI)} />;
          cResult[5] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== tmp8) {
          const tmp16 = jsx(tmp(6697).ActionSheetRow.Group, { hasIcons: false, children: tmp8 });
          cResult[6] = tmp8;
          cResult[7] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === tmp4.container) {
          let tmp17;
          if (cResult[9] === tmp14) {
            tmp17 = cResult[10];
          }
          return tmp17;
        }
        const ActionSheet = tmp(6701).ActionSheet;
        const tmp19 = (
          <ActionSheet scrollable header={tmp11}>
            {null}
          </ActionSheet>
        );
        cResult[8] = tmp4.container;
        cResult[9] = tmp14;
        cResult[10] = tmp19;
        tmp17 = tmp19;
      }
      const arr = tmp6(17361)({ isStreamer: false, isEndStream: false });
      const mapped = arr.map((label, index) => {
        let value;
        stream = label.value;
        return jsx(
          stream(dependencyMap[15]).ActionSheetRow,
          {
            label: label.label,
            arrow: true,
            onPress() {
              let obj2;
              const obj = {
                problem: stream,
                stream,
                feedback: "",
                streamApplication: obj2.getStreamerApplication(stream, PresenceStore),
                analyticsData,
                location: "Stream",
              };
              const tmp = trackStreamProblemDefault;
              obj2 = StreamerApplicationSelectors;
              tmp(obj);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet();
              const obj4 = ToastUtils;
              obj4.presentFeedbackSent();
            },
          },
          index,
        );
      });
      cResult[2] = analyticsData;
      cResult[3] = stream;
      cResult[4] = mapped;
      tmp8 = mapped;
    }
  : (arg0) => {
      let analyticsData;
      let intl;
      let stream;
      ({ stream: require, analyticsData: importDefault } = arg0);
      let tmp = closure_6();
      const tmp2 = useMountEffectDefault(() => {
        let id;
        let id1;
        let name;
        const obj = StreamerApplicationSelectors;
        const streamerApplication = obj.getStreamerApplication(require, PresenceStore);
        const obj2 = {
          type: "Stream Issue Sheet",
          other_user_id: require.ownerId,
          application_id: id,
          application_name: name,
          game_id: id1,
        };
        id = null;
        const track = AnalyticsUtilsDefault.track;
        const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
        AnalyticsUtilsDefault;
        if (null != streamerApplication) {
          id = streamerApplication.id;
        }
        name = null;
        if (null != streamerApplication) {
          name = streamerApplication.name;
        }
        id1 = null;
        if (null != streamerApplication) {
          id1 = streamerApplication.id;
        }
        track(OPEN_POPOUT, obj2);
      });
      const arr = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false });
      const mapped = arr.map((label, index) => {
        const value = label.value;
        return jsx(
          ActionSheetRow.ActionSheetRow,
          {
            label: label.label,
            arrow: true,
            onPress() {
              let obj2;
              const obj = {
                problem: value,
                stream: require,
                feedback: "",
                streamApplication: obj2.getStreamerApplication(require, PresenceStore),
                analyticsData: importDefault,
                location: "Stream",
              };
              const tmp = trackStreamProblemDefault;
              obj2 = StreamerApplicationSelectors;
              tmp(obj);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet();
              const obj4 = ToastUtils;
              obj4.presentFeedbackSent();
            },
          },
          index,
        );
      });
      const ActionSheet = ActionSheet2.ActionSheet;
      let obj2 = { title: intl.string(intl2.t.XuqqwI) };
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl2.intl;
      let obj3 = { style: tmp.container, children: null };
      const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      return (
        <ActionSheet scrollable header={null}>
          {null}
        </ActionSheet>
      );
    };
const result = size.fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default tmp3;
