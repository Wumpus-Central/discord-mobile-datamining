// === Module 17217: ReportProblem ===

// Module 17217 (ReportProblem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4992 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7200 */;
import getStreamIssueReportOptionsDefault from "getStreamIssueReportOptions" /* 17219 */;
import closure_3 from "sortActivity" /* 4600 */;
import { AnalyticEvents } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  ({ stream: require, analyticsData: importDefault } = arg0);
  useMountLayoutEffectDefault(() => {
    let obj = closure_1_0(closure_1_2[7]);
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
    closure_1_1(closure_1_2[8]).track(closure_1_4.OPEN_POPOUT, obj);
  });
  let tmp = callback();
  const mapped = getStreamIssueReportOptionsDefault({ isStreamer: false, isEndStream: false }).map((label) => {
    const value = label.value;
    return closure_1_5(closure_1_0(closure_1_2[13]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: closure_0, stream: value, feedback: "", streamApplication: null, analyticsData: null, location: "Stream" };
        const tmp = closure_2_1(closure_2_2[9]);
        obj[3] = closure_2_0(closure_2_2[7]).getStreamerApplication(value, closure_2_3);
        obj[4] = closure_1_1;
        tmp(obj);
        const obj2 = closure_2_0(closure_2_2[7]);
        closure_2_1(closure_2_2[10]).hideActionSheet();
        const obj3 = closure_2_1(closure_2_2[10]);
        closure_2_0(closure_2_2[11]).presentFeedbackSent();
      }
    }, arg1);
  });
  let obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.XuqqwI);
  obj[1] = jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: null });
  obj = { style: tmp.container, children: jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: mapped }) };
  obj[2] = jsx(BottomSheetModal.BottomSheetScrollView, { style: tmp.container, children: jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
  return jsx(ActionSheet.ActionSheet, { style: tmp.container, children: jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: mapped }) });
};