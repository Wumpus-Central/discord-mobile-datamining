// discord_app/modules/stage_channels/native/components/EndStageActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelsConstants from "../../StageChannelsConstants.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = StageChannelsConstants.EXPLICIT_END_STAGE_SHEET_KEY;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" },
  title: obj2,
  subtitle: { marginTop: 8, textAlign: "center" },
  cancelButton: { marginTop: 24, alignSelf: "stretch" },
  confirmButton: { marginTop: 8, alignSelf: "stretch" },
};
obj2 = {
  fontSize: 24,
  fontFamily: Fonts.PRIMARY_BOLD,
  textAlign: "center",
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_1;
      let container;
      let items;
      let obj7;
      let title;
      let tmp5;
      let obj = channel(576);
      const cResult = obj.c(29);
      channel = channel.channel;
      const tmp4 = closure_7();
      if (cResult[0] !== channel) {
        const fn = function c() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(closure_4);
          const obj2 = CallsUtils;
          obj2.handleDisconnect(channel);
        };
        cResult[0] = channel;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      importDefault = tmp5;
      if (cResult[2] === channel) {
        let tmp6;
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp20;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        ({ container, title } = tmp4);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(channel(1126).t.pADdJu);
          cResult[5] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== tmp4.title) {
          let obj2 = { style: title, accessibilityRole: "header", children: tmp8 };
          const tmp12 = closure_5(channel(1188).LegacyText, obj2);
          cResult[6] = tmp4.title;
          cResult[7] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        const _Symbol2 = Symbol;
        const subtitle = tmp4.subtitle;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(channel(1126).t.mT7jwN);
          cResult[8] = stringResult1;
          tmp13 = stringResult1;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp4.subtitle) {
          const obj3 = { style: subtitle, variant: "text-md/medium", color: "text-default", children: tmp13 };
          const tmp17 = closure_5(channel(4892).Text, obj3);
          cResult[9] = tmp4.subtitle;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        const _Symbol3 = Symbol;
        const cancelButton = tmp4.cancelButton;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(channel(1126).t.xTwqz2);
          cResult[11] = stringResult2;
          tmp18 = stringResult2;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== tmp5) {
          const obj4 = { variant: "secondary", text: tmp18, onPress: tmp5 };
          const tmp22 = closure_5(channel(5601).Button, obj4);
          cResult[12] = tmp5;
          cResult[13] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[13];
        }
        if (cResult[14] === tmp4.cancelButton) {
          let tmp23;
          let tmp27;
          let tmp29;
          if (cResult[15] === tmp20) {
            tmp23 = cResult[16];
          }
          const _Symbol4 = Symbol;
          const confirmButton = tmp4.confirmButton;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(channel(1126).t.wnWqGg);
            cResult[17] = stringResult3;
            tmp27 = stringResult3;
          } else {
            tmp27 = cResult[17];
          }
          if (cResult[18] !== tmp6) {
            const obj5 = { variant: "destructive", text: tmp27, onPress: tmp6 };
            const tmp31 = closure_5(channel(5601).Button, obj5);
            cResult[18] = tmp6;
            cResult[19] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[19];
          }
          if (cResult[20] === tmp4.confirmButton) {
            let tmp32;
            if (cResult[21] === tmp29) {
              tmp32 = cResult[22];
            }
            if (cResult[23] === tmp4.container) {
              if (cResult[24] === tmp23) {
                if (cResult[25] === tmp32) {
                  if (cResult[26] === tmp10) {
                    let tmp36;
                    if (cResult[27] === tmp15) {
                      tmp36 = cResult[28];
                    }
                    return tmp36;
                  }
                }
              }
            }
            const obj6 = { children: closure_6(View, obj7) };
            obj7 = { style: container, children: items };
            items = [tmp10, tmp15, tmp23, tmp32];
            const tmp39 = ScrollHandlingActionSheetDefault;
            const tmp42 = closure_5(tmp39, obj6);
            cResult[23] = tmp4.container;
            cResult[24] = tmp23;
            cResult[25] = tmp32;
            cResult[26] = tmp10;
            cResult[27] = tmp15;
            cResult[28] = tmp42;
            tmp36 = tmp42;
          }
          const obj8 = { style: confirmButton, children: tmp29 };
          const tmp35 = closure_5(View, obj8);
          cResult[20] = tmp4.confirmButton;
          cResult[21] = tmp29;
          cResult[22] = tmp35;
          tmp32 = tmp35;
        }
        const obj9 = { style: cancelButton, children: tmp20 };
        const tmp26 = closure_5(View, obj9);
        cResult[14] = tmp4.cancelButton;
        cResult[15] = tmp20;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
      const fn2 = function _() {
        const obj = StageChannelActionCreators;
        obj.endStage(channel);
        closure_1();
      };
      cResult[2] = channel;
      cResult[3] = tmp5;
      cResult[4] = fn2;
      tmp6 = fn2;
    }
  : (channel) => {
      let Button;
      let Button2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj2;
      let obj6;
      let obj8;
      channel = channel.channel;
      const tmp = closure_7();
      let obj = { children: closure_6(View, obj2) };
      obj2 = { style: tmp.container, children: items };
      let obj3 = { style: tmp.title, accessibilityRole: "header", children: intl.string(channel(1126).t.pADdJu) };
      const tmp2 = ScrollHandlingActionSheetDefault;
      const LegacyText = channel(1188).LegacyText;
      intl = channel(1126).intl;
      items = [closure_5(LegacyText, obj3), , ,];
      const obj4 = {
        style: tmp.subtitle,
        variant: "text-md/medium",
        color: "text-default",
        children: intl2.string(channel(1126).t.mT7jwN),
      };
      const Text = channel(4892).Text;
      intl2 = channel(1126).intl;
      items[1] = closure_5(Text, obj4);
      const obj5 = { style: tmp.cancelButton, children: closure_5(Button, obj6) };
      obj6 = {
        variant: "secondary",
        text: intl3.string(channel(1126).t.xTwqz2),
        onPress: function handleClose() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(closure_4);
          const obj2 = CallsUtils;
          obj2.handleDisconnect(channel);
        },
      };
      Button = channel(5601).Button;
      intl3 = channel(1126).intl;
      items[2] = closure_5(View, obj5);
      const obj7 = { style: tmp.confirmButton, children: closure_5(Button2, obj8) };
      obj8 = {
        variant: "destructive",
        text: intl4.string(channel(1126).t.wnWqGg),
        onPress() {
          const obj = StageChannelActionCreators;
          obj.endStage(channel);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet(closure_4);
          const obj3 = CallsUtils;
          obj3.handleDisconnect(channel);
        },
      };
      Button2 = channel(5601).Button;
      intl4 = channel(1126).intl;
      items[3] = closure_5(View, obj7);
      return closure_5(tmp2, obj);
    };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default tmp4;
