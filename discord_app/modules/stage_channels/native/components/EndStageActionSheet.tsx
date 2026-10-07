// discord_app/modules/stage_channels/native/components/EndStageActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(5578).EXPLICIT_END_STAGE_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" },
  title: {
    fontSize: 24,
    fontFamily: fn(1085).Fonts.PRIMARY_BOLD,
    textAlign: "center",
    color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  },
  subtitle: { marginTop: 8, textAlign: "center" },
  cancelButton: { marginTop: 24, alignSelf: "stretch" },
  confirmButton: { marginTop: 8, alignSelf: "stretch" },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  fontSize: 24,
  fontFamily: fn(1085).Fonts.PRIMARY_BOLD,
  textAlign: "center",
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(29);
      channel = channel.channel;
      const tmp4 = closure_7();
      if (cResult[0] !== channel) {
        const fn = function c() {
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
          CallsUtils.handleDisconnect(channel);
        };
        cResult[0] = channel;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      importDefault = tmp5;
      if (cResult[2] === channel) {
        if (cResult[3] === tmp5) {
          let tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        ({ container, title } = tmp4);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.pADdJu);
          cResult[5] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== tmp4.title) {
          const obj2 = { style: title, accessibilityRole: "header", children: tmp8 };
          const tmp12 = closure_5(tmp(1188).LegacyText, obj2);
          cResult[6] = tmp4.title;
          cResult[7] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.mT7jwN);
          cResult[8] = stringResult1;
          let tmp13 = stringResult1;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp4.subtitle) {
          const obj3 = { style: tmp4.subtitle, variant: "text-md/medium", color: "text-default", children: tmp13 };
          const tmp17 = closure_5(tmp(4892).Text, obj3);
          cResult[9] = tmp4.subtitle;
          cResult[10] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(tmp(1126).t.xTwqz2);
          cResult[11] = stringResult2;
          let tmp18 = stringResult2;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== tmp5) {
          const obj4 = { variant: "secondary", text: tmp18, onPress: tmp5 };
          const tmp22 = closure_5(tmp(5601).Button, obj4);
          cResult[12] = tmp5;
          cResult[13] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[13];
        }
        if (cResult[14] === tmp4.cancelButton) {
          if (cResult[15] === tmp20) {
            let tmp23 = cResult[16];
          }
          const _Symbol4 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(tmp(1126).t.wnWqGg);
            cResult[17] = stringResult3;
            let tmp27 = stringResult3;
          } else {
            tmp27 = cResult[17];
          }
          if (cResult[18] !== tmp6) {
            const obj5 = { variant: "destructive", text: tmp27, onPress: tmp6 };
            const tmp31 = closure_5(tmp(5601).Button, obj5);
            cResult[18] = tmp6;
            cResult[19] = tmp31;
            let tmp29 = tmp31;
          } else {
            tmp29 = cResult[19];
          }
          if (cResult[20] === tmp4.confirmButton) {
            if (cResult[21] === tmp29) {
              let tmp32 = cResult[22];
            }
            if (cResult[23] === tmp4.container) {
              if (cResult[24] === tmp23) {
                if (cResult[25] === tmp32) {
                  if (cResult[26] === tmp10) {
                    if (cResult[27] === tmp15) {
                      let tmp36 = cResult[28];
                    }
                    return tmp36;
                  }
                }
              }
            }
            const obj6 = { children: null };
            const obj7 = { style: container, children: null };
            const items = [tmp10, tmp15, tmp23, tmp32];
            obj7.children = items;
            obj6.children = closure_6(View, obj7);
            const tmp42 = closure_5(ScrollHandlingActionSheetDefault, obj6);
            cResult[23] = tmp4.container;
            cResult[24] = tmp23;
            cResult[25] = tmp32;
            cResult[26] = tmp10;
            cResult[27] = tmp15;
            cResult[28] = tmp42;
            tmp36 = tmp42;
          }
          const obj8 = { style: tmp4.confirmButton, children: tmp29 };
          const tmp35 = closure_5(View, obj8);
          cResult[20] = tmp4.confirmButton;
          cResult[21] = tmp29;
          cResult[22] = tmp35;
          tmp32 = tmp35;
        }
        const obj9 = { style: tmp4.cancelButton, children: tmp20 };
        const tmp26 = closure_5(View, obj9);
        cResult[14] = tmp4.cancelButton;
        cResult[15] = tmp20;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
      const fn2 = function _() {
        StageChannelActionCreators.endStage(channel);
        closure_1();
      };
      cResult[2] = channel;
      cResult[3] = tmp5;
      cResult[4] = fn2;
      tmp6 = fn2;
      let obj = channel(576);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_7();
      let obj = { children: null };
      let obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.title, accessibilityRole: "header", children: null };
      const intl = channel(1126).intl;
      obj3.children = intl.string(channel(1126).t.pADdJu);
      const items = [closure_5(channel(1188).LegacyText, obj3), , ,];
      const obj4 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
      const intl2 = channel(1126).intl;
      obj4.children = intl2.string(channel(1126).t.mT7jwN);
      items[1] = closure_5(channel(4892).Text, obj4);
      const obj5 = { style: tmp.cancelButton, children: null };
      const obj6 = { variant: "secondary", text: null, onPress: null };
      const intl3 = channel(1126).intl;
      obj6.text = intl3.string(channel(1126).t.xTwqz2);
      obj6.onPress = function handleClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
        CallsUtils.handleDisconnect(channel);
      };
      obj5.children = closure_5(channel(5601).Button, obj6);
      items[2] = closure_5(View, obj5);
      const obj7 = { style: tmp.confirmButton, children: null };
      const obj8 = { variant: "destructive", text: null, onPress: null };
      const intl4 = channel(1126).intl;
      obj8.text = intl4.string(channel(1126).t.wnWqGg);
      obj8.onPress = function onPress() {
        StageChannelActionCreators.endStage(channel);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
        CallsUtils.handleDisconnect(channel);
      };
      obj7.children = closure_5(channel(5601).Button, obj8);
      items[3] = closure_5(View, obj7);
      obj2.children = items;
      obj.children = closure_6(View, obj2);
      return closure_5(ScrollHandlingActionSheetDefault, obj);
    };
