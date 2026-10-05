// discord_app/modules/feedback/native/UploadLogsActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import BottomSheetTitleHeader2 from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import DebugUploadManager from "../../debug/DebugUploadManager.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, mediaSessionId;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AnalyticEvents: closure_4, DebugLogCategory: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: obj3, buttonSpacer: obj4 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj4 = { height: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (mediaSessionId) => {
      let body;
      let container;
      let intl;
      let items;
      let obj8;
      let obj = mediaSessionId(576);
      const cResult = obj.c(19);
      mediaSessionId = mediaSessionId.mediaSessionId;
      const rtcConnectionId = mediaSessionId.rtcConnectionId;
      const tmp4 = closure_8();
      if (cResult[0] === mediaSessionId) {
        let tmp5;
        let tmp7;
        let tmp10;
        let tmp12;
        let tmp15;
        let tmp17;
        let tmp20;
        let tmp24;
        let tmp26;
        if (cResult[1] === rtcConnectionId) {
          tmp5 = cResult[2];
        }
        let tmp6 = globalThis;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { title: intl.string(mediaSessionId(1126).t.KTjjrG) };
          const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
          intl = tmp(1126).intl;
          const tmp9 = closure_6(BottomSheetTitleHeader, obj2);
          cResult[3] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        const _Symbol2 = Symbol;
        ({ container, body } = tmp4);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(mediaSessionId(1126).t["ZvRR/t"]);
          cResult[4] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== tmp4.body) {
          const obj3 = { variant: "text-sm/normal", color: "text-muted", style: body, children: tmp10 };
          const tmp14 = closure_6(mediaSessionId(4886).Text, obj3);
          cResult[5] = tmp4.body;
          cResult[6] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(mediaSessionId(1126).t.EbwFfR);
          cResult[7] = stringResult1;
          tmp15 = stringResult1;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== tmp5) {
          const obj4 = { text: tmp15, onPress: tmp5 };
          const tmp19 = closure_6(mediaSessionId(5594).Button, obj4);
          cResult[8] = tmp5;
          cResult[9] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] !== tmp4.buttonSpacer) {
          const obj5 = { style: tmp4.buttonSpacer };
          const tmp23 = closure_6(View, obj5);
          cResult[10] = tmp4.buttonSpacer;
          cResult[11] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[11];
        }
        const _Symbol4 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(mediaSessionId(1126).t["ETE/oC"]);
          cResult[12] = stringResult2;
          tmp24 = stringResult2;
        } else {
          tmp24 = cResult[12];
        }
        const _Symbol5 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = {
            text: tmp24,
            variant: "secondary",
            onPress() {
              const obj = rtcConnectionId(dependencyMap[10]);
              return obj.hideActionSheet();
            },
          };
          const tmp28 = closure_6(mediaSessionId(5594).Button, obj6);
          cResult[13] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp12) {
            if (cResult[16] === tmp17) {
              let tmp29;
              if (cResult[17] === tmp20) {
                tmp29 = cResult[18];
              }
              return tmp29;
            }
          }
        }
        const obj7 = { header: tmp7, children: closure_7(View, obj8) };
        obj8 = { style: container, children: items };
        items = [tmp12, tmp17, tmp20, tmp26];
        BottomSheet = tmp(6645).BottomSheet;
        const tmp33 = closure_6(BottomSheet, obj7);
        cResult[14] = tmp4.container;
        cResult[15] = tmp12;
        cResult[16] = tmp17;
        cResult[17] = tmp20;
        cResult[18] = tmp33;
        tmp29 = tmp33;
      }
      const fn = function l() {
        let tmp6;
        const obj = DebugUploadManager;
        obj.uploadDebugLogFiles(hasOwnProperty.RTC);
        let tmp5 = mediaSessionId;
        const track = AnalyticsUtilsDefault.track;
        const DEBUG_LOG_UPLOADED = constants.DEBUG_LOG_UPLOADED;
        AnalyticsUtilsDefault;
        if (mediaSessionId == null) {
          tmp5 = null;
        }
        const obj2 = { media_session_id: tmp5, rtc_connection_id: tmp6 };
        tmp6 = rtcConnectionId;
        if (rtcConnectionId == null) {
          tmp6 = null;
        }
        track(DEBUG_LOG_UPLOADED, obj2);
        const tmp3Result = ActionSheetActionCreatorsDefault;
        tmp3Result.hideActionSheet();
      };
      cResult[0] = mediaSessionId;
      cResult[1] = rtcConnectionId;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (arg0) => {
      let BottomSheetTitleHeader;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj2;
      let obj3;
      ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
      const tmp = closure_8();
      let obj = { header: closure_6(BottomSheetTitleHeader, obj2), children: closure_7(View, obj3) };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj2 = { title: intl.string(intl5.t.KTjjrG) };
      BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl5.intl;
      obj3 = { style: tmp.container, children: items };
      const obj4 = {
        variant: "text-sm/normal",
        color: "text-muted",
        style: tmp.body,
        children: intl2.string(intl5.t["ZvRR/t"]),
      };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items = [closure_6(Text, obj4), , ,];
      const obj5 = {
        text: intl3.string(intl5.t.EbwFfR),
        onPress() {
          let tmp6;
          const obj = DebugUploadManager;
          obj.uploadDebugLogFiles(hasOwnProperty.RTC);
          let tmp5 = require;
          const track = AnalyticsUtilsDefault.track;
          const DEBUG_LOG_UPLOADED = constants.DEBUG_LOG_UPLOADED;
          AnalyticsUtilsDefault;
          if (require == null) {
            tmp5 = null;
          }
          const obj2 = { media_session_id: tmp5, rtc_connection_id: tmp6 };
          tmp6 = importDefault;
          if (importDefault == null) {
            tmp6 = null;
          }
          track(DEBUG_LOG_UPLOADED, obj2);
          const tmp3Result = ActionSheetActionCreatorsDefault;
          tmp3Result.hideActionSheet();
        },
      };
      const Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items[1] = closure_6(Button, obj5);
      const obj6 = { style: tmp.buttonSpacer };
      items[2] = closure_6(View, obj6);
      const obj7 = {
        text: intl4.string(intl5.t["ETE/oC"]),
        variant: "secondary",
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet();
        },
      };
      const Button2 = components_Button_Button.Button;
      intl4 = intl5.intl;
      items[3] = closure_6(Button2, obj7);
      return closure_6(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default tmp6;
