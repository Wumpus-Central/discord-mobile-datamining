// discord_app/components_native/calls/stream/StreamReportProblemActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import presentAddedFriendToast from "../../../modules/toast/native/ToastUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import useMountLayoutEffectDefault from "../../../hooks/useMountEffect.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import BottomSheetModal from "../../../../_runtime/06952_BottomSheetModal.js";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import _findPlayingActivity from "../../../modules/go_live/utils/StreamerApplicationSelectors.tsx";
import trackStreamProblemDefault from "../../../modules/go_live/utils/trackStreamProblem.tsx";
import getStreamIssueReportOptionsDefault from "../../../modules/go_live/utils/getStreamIssueReportOptions.tsx";
import sortActivity from "../../../stores/PresenceStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  ({ stream: require, analyticsData: importDefault } = arg0);
  useMountLayoutEffectDefault(() => {
    let obj = _findPlayingActivity;
    const streamerApplication = obj.getStreamerApplication(ownerId, closure_1_3);
    obj = { type: "Stream Issue Sheet", other_user_id: ownerId.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    obj[2] = id;
    let name = null;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    obj[3] = name;
    let id1 = null;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    obj[4] = id1;
    expandEventPropertiesDefault.track(AnalyticEvents.OPEN_POPOUT, obj);
  });
  let tmp = callback();
  const mapped = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false }).map((item, index) => {
    const value = item.value;
    return jsx(ActionSheetRowIcon.ActionSheetRow, {
      label: item.label,
      arrow: true,
      onPress() {
        const obj = { problem: closure_0, stream: value, feedback: "", streamApplication: null, analyticsData: null, location: "Stream" };
        const tmp = trackStreamProblemDefault;
        obj[3] = _findPlayingActivity.getStreamerApplication(value, closure_2_3);
        obj[4] = closure_1_1;
        tmp(obj);
        ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
        presentAddedFriendToast.presentFeedbackSent();
      }
    }, index);
  });
  let obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.XuqqwI);
  obj[1] = jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: null });
  obj = { style: tmp.container, children: jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: mapped }) };
  obj[2] = jsx(BottomSheetModal.BottomSheetScrollView, { style: tmp.container, children: jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
  return jsx(ActionSheet.ActionSheet, { style: tmp.container, children: jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
};