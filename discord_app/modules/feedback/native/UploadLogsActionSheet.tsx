// === Module 17606: UploadLogsActionSheet ===

// Module 17606 (UploadLogsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Text_Text from "Text/Text" /* 4636 */;
import components_Button_Button from "components/Button/Button" /* 5062 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7263 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7264 */;
import DebugUploadManager from "DebugUploadManager" /* 10334 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, DebugLogCategory: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, body: null, buttonSpacer: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.buttonSpacer = { height: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
  const tmp = closure_8();
  let obj = { header: null, children: null };
  let obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.KTjjrG);
  obj.header = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.body, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t["ZvRR/t"]);
  const items = [closure_6(Text_Text.Text, obj4), , , ];
  const obj5 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.EbwFfR);
  obj5.onPress = function onPress() {
    DebugUploadManager.uploadDebugLogFiles(constants2.RTC);
    let tmp4 = closure_1_0;
    if (closure_1_0 == null) {
      tmp4 = null;
    }
    const obj3 = { media_session_id: tmp4, rtc_connection_id: null };
    let tmp5 = closure_1_1;
    if (closure_1_1 == null) {
      tmp5 = null;
    }
    obj3.rtc_connection_id = tmp5;
    AnalyticsUtilsDefault.track(constants.DEBUG_LOG_UPLOADED, obj3);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const tmp3Result = ActionSheetActionCreatorsDefault;
  };
  items[1] = closure_6(components_Button_Button.Button, obj5);
  items[2] = closure_6(View, { style: tmp.buttonSpacer });
  const obj7 = { text: null, variant: "secondary", onPress: null };
  const intl4 = util.intl;
  obj7.text = intl4.string(util.t["ETE/oC"]);
  obj7.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_6(components_Button_Button.Button, obj7);
  obj3.children = items;
  obj.children = closure_7(View, obj3);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
};