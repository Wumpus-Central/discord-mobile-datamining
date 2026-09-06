// === Module 17356: UploadLogsActionSheet ===

// Module 17356 (UploadLogsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import DebugUploadManager from "DebugUploadManager" /* 10188 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, DebugLogCategory: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, body: null, buttonSpacer: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj1 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.buttonSpacer = { height: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
  const tmp = closure_8();
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.KTjjrG);
  obj.header = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj = { style: tmp.container, children: null };
  const obj1 = { variant: "text-sm/normal", color: "text-muted", style: tmp.body, children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t["ZvRR/t"]);
  const items = [closure_6(Text_Text.Text, obj1), , , ];
  let obj2 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.EbwFfR);
  obj2.onPress = function onPress() {
    let obj = DebugUploadManager;
    obj.uploadDebugLogFiles(constants2.RTC);
    let tmp4 = closure_1_0;
    if (closure_1_0 == null) {
      tmp4 = null;
    }
    obj = { media_session_id: tmp4, rtc_connection_id: null };
    let tmp5 = closure_1_1;
    if (closure_1_1 == null) {
      tmp5 = null;
    }
    obj.rtc_connection_id = tmp5;
    AnalyticsUtilsDefault.track(constants.DEBUG_LOG_UPLOADED, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_6(components_Button_Button.Button, obj2);
  items[2] = closure_6(View, { style: tmp.buttonSpacer });
  const obj4 = { text: null, variant: "secondary", onPress: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["ETE/oC"]);
  obj4.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_6(components_Button_Button.Button, obj4);
  obj.children = items;
  obj.children = closure_7(View, obj);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
};