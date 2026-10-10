// === Module 18040: UploadLogsActionSheet ===

// Module 18040 (UploadLogsActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import DebugUploadManager from "DebugUploadManager" /* 12628 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, DebugLogCategory: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, body: null, buttonSpacer: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.buttonSpacer = { height: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { height: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UploadLogsActionSheet(mediaSessionId) {
  const cResult = mediaSessionId(576).c(19);
  mediaSessionId = mediaSessionId.mediaSessionId;
  const rtcConnectionId = mediaSessionId.rtcConnectionId;
  let tmp4 = closure_8();
  if (cResult[0] === mediaSessionId) {
    if (cResult[1] === rtcConnectionId) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { title: null };
      const intl = tmp(1126).intl;
      obj2.title = intl.string(tmp(1126).t.KTjjrG);
      const tmp9 = closure_6(tmp(6838).BottomSheetTitleHeader, obj2);
      cResult[3] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    const _Symbol2 = Symbol;
    ({ container, body } = tmp4);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t["ZvRR/t"]);
      cResult[4] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp4.body) {
      let obj3 = { variant: "text-sm/normal", color: "text-muted", style: body, children: tmp10 };
      const tmp14 = closure_6(tmp(5088).Text, obj3);
      cResult[5] = tmp4.body;
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t.EbwFfR);
      cResult[7] = stringResult1;
      let tmp15 = stringResult1;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== tmp5) {
      const obj4 = { text: tmp15, onPress: tmp5 };
      const tmp19 = closure_6(tmp(5379).Button, obj4);
      cResult[8] = tmp5;
      cResult[9] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] !== tmp4.buttonSpacer) {
      const obj5 = { style: tmp4.buttonSpacer };
      const tmp23 = closure_6(View, obj5);
      cResult[10] = tmp4.buttonSpacer;
      cResult[11] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult2 = intl4.string(tmp(1126).t["ETE/oC"]);
      cResult[12] = stringResult2;
      let tmp24 = stringResult2;
    } else {
      tmp24 = cResult[12];
    }
    const _Symbol5 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = {
        text: tmp24,
        variant: "secondary",
        onPress() {
              return rtcConnectionId(dependencyMap[10]).hideActionSheet();
            }
      };
      const tmp28 = closure_6(tmp(5379).Button, obj6);
      cResult[13] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[13];
    }
    if (cResult[14] === tmp4.container) {
      if (cResult[15] === tmp12) {
        if (cResult[16] === tmp17) {
          if (cResult[17] === tmp20) {
            let tmp29 = cResult[18];
          }
          return tmp29;
        }
      }
    }
    const obj7 = { header: tmp7, children: null };
    const obj8 = { style: container, children: null };
    const items = [tmp12, tmp17, tmp20, tmp26];
    obj8.children = items;
    obj7.children = closure_7(View, obj8);
    const tmp33 = closure_6(tmp(6839).BottomSheet, obj7);
    cResult[14] = tmp4.container;
    cResult[15] = tmp12;
    cResult[16] = tmp17;
    cResult[17] = tmp20;
    cResult[18] = tmp33;
    tmp29 = tmp33;
  }
  function handleUpload() {
    DebugUploadManager.uploadDebugLogFiles(constants2.RTC);
    let tmp4 = mediaSessionId;
    if (mediaSessionId == null) {
      tmp4 = null;
    }
    const obj3 = { media_session_id: tmp4, rtc_connection_id: null };
    let tmp5 = rtcConnectionId;
    if (rtcConnectionId == null) {
      tmp5 = null;
    }
    obj3.rtc_connection_id = tmp5;
    AnalyticsUtilsDefault.track(constants.DEBUG_LOG_UPLOADED, obj3);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const tmp3Result = ActionSheetActionCreatorsDefault;
  }
  cResult[0] = mediaSessionId;
  cResult[1] = rtcConnectionId;
  cResult[2] = handleUpload;
  tmp5 = handleUpload;
  let obj = mediaSessionId(576);
}) : (function UploadLogsActionSheet(arg0) {
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
  obj5.onPress = function handleUpload() {
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
});