import "noop";
import sortActivity from "sortActivity";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("components_native/calls/stream/StreamReportProblemActionSheet.tsx");

export default function ReportProblem(arg0) {
  let importDefault;
  let require;
  ({ stream: require, analyticsData: importDefault } = arg0);
  importDefault(4682)(() => {
    let obj = outer1_0(outer1_2[7]);
    const streamerApplication = obj.getStreamerApplication(ownerId, outer1_3);
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
    outer1_1(outer1_2[8]).track(outer1_4.OPEN_POPOUT, obj);
  });
  let tmp = createCacheKey();
  const mapped = importDefault(16124)({ isStreamer: false, isEndStream: false }).map((label) => {
    const value = label.value;
    return outer1_5(outer1_0(outer1_2[13]).ActionSheetRow, {
      label: label.label,
      arrow: true,
      onPress() {
        const obj = { problem: closure_0, stream: value, feedback: "", streamApplication: null, analyticsData: null, location: "Stream" };
        const tmp = outer2_1(outer2_2[9]);
        obj[3] = outer2_0(outer2_2[7]).getStreamerApplication(value, outer2_3);
        obj[4] = outer1_1;
        tmp(obj);
        const obj2 = outer2_0(outer2_2[7]);
        outer2_1(outer2_2[10]).hideActionSheet();
        const obj3 = outer2_1(outer2_2[10]);
        outer2_0(outer2_2[11]).presentFeedbackSent();
      }
    }, arg1);
  });
  let obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.XuqqwI);
  obj[1] = jsx(require(5308) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  obj = { style: tmp.container, children: null };
  obj[1] = jsx(require(5619) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: false, children: mapped });
  obj[2] = jsx(require(5311) /* BottomSheetModal */.BottomSheetScrollView, { style: tmp.container, children: null });
  return jsx(require(5617) /* ActionSheet */.ActionSheet, { style: tmp.container, children: null });
};