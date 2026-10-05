// discord_app/modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import SafetyWarningUtils from "../SafetyWarningUtils.tsx";
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, description: obj3 };
obj2 = {
  display: "flex",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  paddingTop: 0,
};
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8, maxWidth: 300 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let container;
      let description;
      let first;
      let items;
      let onClose;
      let recipientId;
      let tmp12;
      let tmp14;
      let tmp17;
      let tmp19;
      let tmp7;
      let tmp9;
      let trackAnalyticsEvent;
      let warningId;
      let warningType;
      let obj = trackAnalyticsEvent(576);
      const cResult = obj.c(22);
      ({ channelId, recipientId, warningId, warningType, onClose, trackAnalyticsEvent } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = trackAnalyticsEvent(1126).intl;
        const stringResult = intl.string(trackAnalyticsEvent(1126).t.NUMAsF);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      ({ container, description } = tmp4);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = trackAnalyticsEvent(1126).intl;
        const stringResult1 = intl2.string(trackAnalyticsEvent(1126).t.uicS5l);
        cResult[1] = stringResult1;
        tmp7 = stringResult1;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.description) {
        const obj2 = { variant: "text-md/medium", color: "text-default", style: description, children: tmp7 };
        const tmp11 = closure_6(trackAnalyticsEvent(4886).Text, obj2);
        cResult[2] = tmp4.description;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = trackAnalyticsEvent(1126).intl;
        const stringResult2 = intl3.string(trackAnalyticsEvent(1126).t.lkUb4S);
        cResult[4] = stringResult2;
        tmp12 = stringResult2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== trackAnalyticsEvent) {
        const obj3 = {
          variant: "secondary",
          size: "lg",
          text: tmp12,
          grow: true,
          onPress() {
            const obj = LinkingDefault;
            obj.openURL(React3);
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
          },
        };
        const tmp16 = closure_6(trackAnalyticsEvent(5594).Button, obj3);
        cResult[5] = trackAnalyticsEvent;
        cResult[6] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = trackAnalyticsEvent(1126).intl;
        const stringResult3 = intl4.string(trackAnalyticsEvent(1126).t.ogLlvy);
        cResult[7] = stringResult3;
        tmp17 = stringResult3;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== trackAnalyticsEvent) {
        const obj4 = {
          variant: "secondary",
          size: "lg",
          text: tmp17,
          grow: true,
          onPress() {
            const obj = LinkingDefault;
            obj.openURL(hasOwnProperty);
            trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
          },
        };
        const tmp21 = closure_6(trackAnalyticsEvent(5594).Button, obj4);
        cResult[8] = trackAnalyticsEvent;
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp14) {
            let tmp22;
            if (cResult[13] === tmp19) {
              tmp22 = cResult[14];
            }
            if (cResult[15] === channelId) {
              if (cResult[16] === onClose) {
                if (cResult[17] === recipientId) {
                  if (cResult[18] === tmp22) {
                    if (cResult[19] === warningId) {
                      let tmp24;
                      if (cResult[20] === warningType) {
                        tmp24 = cResult[21];
                      }
                      return tmp24;
                    }
                  }
                }
              }
            }
            const obj5 = {
              hasHeaderBack: true,
              recipientId,
              warningId,
              warningType,
              headerTitle: first,
              channelId,
              onClose,
              children: tmp22,
            };
            const tmp27 = closure_6(SafetyToolsActionSheetWrapperDefault, obj5);
            cResult[15] = channelId;
            cResult[16] = onClose;
            cResult[17] = recipientId;
            cResult[18] = tmp22;
            cResult[19] = warningId;
            cResult[20] = warningType;
            cResult[21] = tmp27;
            tmp24 = tmp27;
          }
        }
      }
      const obj6 = { style: container, children: items };
      items = [tmp9, tmp14, tmp19];
      const tmp23 = closure_7(View, obj6);
      cResult[10] = tmp4.container;
      cResult[11] = tmp9;
      cResult[12] = tmp14;
      cResult[13] = tmp19;
      cResult[14] = tmp23;
      tmp22 = tmp23;
    }
  : (trackAnalyticsEvent) => {
      let channelId;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj2;
      let onClose;
      let recipientId;
      let warningId;
      let warningType;
      trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
      ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
      const tmp = closure_8();
      let obj = {
        hasHeaderBack: true,
        recipientId,
        warningId,
        warningType,
        headerTitle: intl.string(trackAnalyticsEvent(1126).t.NUMAsF),
        channelId,
        onClose,
        children: closure_7(View, obj2),
      };
      const tmp2 = SafetyToolsActionSheetWrapperDefault;
      intl = trackAnalyticsEvent(1126).intl;
      obj2 = { style: tmp.container, children: items };
      const obj3 = {
        variant: "text-md/medium",
        color: "text-default",
        style: tmp.description,
        children: intl2.string(trackAnalyticsEvent(1126).t.uicS5l),
      };
      const Text = trackAnalyticsEvent(4886).Text;
      intl2 = trackAnalyticsEvent(1126).intl;
      items = [closure_6(Text, obj3), ,];
      const obj4 = {
        variant: "secondary",
        size: "lg",
        text: intl3.string(trackAnalyticsEvent(1126).t.lkUb4S),
        grow: true,
        onPress() {
          const obj = LinkingDefault;
          obj.openURL(React3);
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
        },
      };
      const Button = trackAnalyticsEvent(5594).Button;
      intl3 = trackAnalyticsEvent(1126).intl;
      items[1] = closure_6(Button, obj4);
      const obj5 = {
        variant: "secondary",
        size: "lg",
        text: intl4.string(trackAnalyticsEvent(1126).t.ogLlvy),
        grow: true,
        onPress() {
          const obj = LinkingDefault;
          obj.openURL(hasOwnProperty);
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
        },
      };
      const Button2 = trackAnalyticsEvent(5594).Button;
      intl4 = trackAnalyticsEvent(1126).intl;
      items[2] = closure_6(Button2, obj5);
      return closure_6(tmp2, obj);
    };
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default tmp6;
