// discord_app/components_native/reactions/BurstReactionFirstSendActionSheet.tsx
import react2 from "../../../_runtime/00576_react.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../modules/dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../design/components/Sheet/native/BottomSheet.native.tsx";
import MessageReactionsTypes from "../../modules/messages/MessageReactionsTypes.tsx";
import burst_reactions_BurstReactionEffectUtils from "../../modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx";
import getDeviceSpecificString2 from "../../modules/intl/overrides/getDeviceSpecificString.tsx";
import BurstReactionAnimationPreviewDefault from "../../modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let BottomSheet;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
function onDismiss() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
}
({ View: c3, StyleSheet } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 },
  fill: obj2,
  nitroWheel: size,
  textContainer: {
    flexDirection: "row",
    flexShrink: 1,
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  body: { paddingTop: 8, paddingBottom: 18 },
  content: { paddingHorizontal: 16 },
};
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", top: -120 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { tintColor: nativeDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
let closure_6 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let emoji;
      let first;
      let intl;
      let intl2;
      let items;
      let items1;
      let messageId;
      const obj = react2;
      const cResult = obj.c(28);
      ({ emoji, channelId, messageId } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { quest: intl3.t["5TpPli"] };
        const getDeviceSpecificString = getDeviceSpecificString2.getDeviceSpecificString;
        getDeviceSpecificString2;
        const deviceSpecificString = getDeviceSpecificString(obj2, intl3.t["2Yp7dF"]);
        cResult[0] = deviceSpecificString;
        first = deviceSpecificString;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === emoji) {
          let tmp8;
          if (cResult[3] === messageId) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp4.fill) {
            let tmp11;
            let tmp15;
            let tmp18;
            if (cResult[6] === tmp8) {
              tmp11 = cResult[7];
            }
            if (cResult[8] !== tmp4.nitroWheel) {
              const obj3 = { style: tmp4.nitroWheel };
              const tmp17 = React3(native.NitroWheel, obj3);
              cResult[8] = tmp4.nitroWheel;
              cResult[9] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "heading-xl/bold", children: intl.string(intl3.t.NX7HI7) };
              const Text = Text_Text.Text;
              intl = intl3.intl;
              const tmp20 = React3(Text, obj4);
              cResult[10] = tmp20;
              tmp18 = tmp20;
            } else {
              tmp18 = cResult[10];
            }
            if (cResult[11] === tmp4.textContainer) {
              let tmp21;
              let tmp25;
              if (cResult[12] === tmp15) {
                tmp21 = cResult[13];
              }
              if (cResult[14] !== tmp4.textContainer) {
                const obj5 = { style: tmp4.textContainer, variant: "text-md/normal", children: first };
                const tmp27 = React3(Text_Text.Text, obj5);
                cResult[14] = tmp4.textContainer;
                cResult[15] = tmp27;
                tmp25 = tmp27;
              } else {
                tmp25 = cResult[15];
              }
              if (cResult[16] === tmp4.body) {
                let tmp28;
                let tmp32;
                if (cResult[17] === tmp25) {
                  tmp28 = cResult[18];
                }
                const _Symbol2 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { text: intl2.string(intl3.t["+IrDzN"]), onPress: onDismiss };
                  const Button = components_Button_Button.Button;
                  intl2 = intl3.intl;
                  const tmp35 = React3(Button, obj6);
                  cResult[19] = tmp35;
                  tmp32 = tmp35;
                } else {
                  tmp32 = cResult[19];
                }
                if (cResult[20] === tmp4.container) {
                  if (cResult[21] === tmp21) {
                    let tmp36;
                    if (cResult[22] === tmp28) {
                      tmp36 = cResult[23];
                    }
                    if (cResult[24] === tmp4.content) {
                      if (cResult[25] === tmp36) {
                        let tmp40;
                        if (cResult[26] === tmp11) {
                          tmp40 = cResult[27];
                        }
                        return tmp40;
                      }
                    }
                    const obj7 = {
                      backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY,
                      contentStyles: tmp4.content,
                      backdropChildren: tmp11,
                      onDismiss,
                      children: tmp36,
                    };
                    BottomSheet = Sheet_BottomSheet.BottomSheet;
                    const tmp43 = React3(BottomSheet, obj7);
                    cResult[24] = tmp4.content;
                    cResult[25] = tmp36;
                    cResult[26] = tmp11;
                    cResult[27] = tmp43;
                    tmp40 = tmp43;
                  }
                }
                const obj8 = { style: tmp4.container, children: items };
                items = [tmp21, tmp28, tmp32];
                const tmp39 = hasOwnProperty(_false, obj8);
                cResult[20] = tmp4.container;
                cResult[21] = tmp21;
                cResult[22] = tmp28;
                cResult[23] = tmp39;
                tmp36 = tmp39;
              }
              const obj9 = { style: tmp4.body, children: tmp25 };
              const tmp31 = React3(_false, obj9);
              cResult[16] = tmp4.body;
              cResult[17] = tmp25;
              cResult[18] = tmp31;
              tmp28 = tmp31;
            }
            const obj10 = { style: tmp4.textContainer, children: items1 };
            items1 = [tmp15, tmp18];
            const tmp24 = hasOwnProperty(_false, obj10);
            cResult[11] = tmp4.textContainer;
            cResult[12] = tmp15;
            cResult[13] = tmp24;
            tmp21 = tmp24;
          }
          const obj11 = { style: tmp4.fill, children: tmp8 };
          const tmp14 = React3(_false, obj11);
          cResult[5] = tmp4.fill;
          cResult[6] = tmp8;
          cResult[7] = tmp14;
          tmp11 = tmp14;
        }
      }
      const obj12 = { channelId, emoji, messageId, reactionType: MessageReactionsTypes.ReactionTypes.BURST };
      const tmp9 = BurstReactionAnimationPreviewDefault;
      const tmp10 = React3(tmp9, obj12);
      cResult[1] = channelId;
      cResult[2] = emoji;
      cResult[3] = messageId;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    }
  : (arg0) => {
      let channelId;
      let emoji;
      let intl;
      let intl2;
      let items;
      let items1;
      let messageId;
      let obj11;
      let obj4;
      let obj5;
      let obj6;
      let tmp3;
      ({ emoji, channelId, messageId } = arg0);
      const tmp = closure_6();
      const obj = getDeviceSpecificString2;
      const obj2 = { quest: intl3.t["5TpPli"] };
      const deviceSpecificString = obj.getDeviceSpecificString(obj2, intl3.t["2Yp7dF"]);
      const obj3 = {
        backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY,
        contentStyles: tmp.content,
        backdropChildren: React3(_false, obj4),
        onDismiss,
        children: hasOwnProperty(_false, obj6),
      };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj4 = { style: tmp.fill, children: React3(tmp3, obj5) };
      obj5 = { channelId, emoji, messageId, reactionType: MessageReactionsTypes.ReactionTypes.BURST };
      const obj7 = { style: tmp.textContainer, children: items };
      items = [,];
      obj6 = { style: tmp.container, children: items1 };
      const obj8 = { style: tmp.nitroWheel };
      tmp3 = BurstReactionAnimationPreviewDefault;
      items[0] = React3(native.NitroWheel, obj8);
      const obj9 = { variant: "heading-xl/bold", children: intl.string(intl3.t.NX7HI7) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items[1] = React3(Text, obj9);
      items1 = [hasOwnProperty(_false, obj7), ,];
      const obj10 = { style: tmp.body, children: React3(Text_Text.Text, obj11) };
      obj11 = { style: tmp.textContainer, variant: "text-md/normal", children: deviceSpecificString };
      items1[1] = React3(_false, obj10);
      const obj12 = { text: intl2.string(intl3.t["+IrDzN"]), onPress: onDismiss };
      const Button = components_Button_Button.Button;
      intl2 = intl3.intl;
      items1[2] = React3(Button, obj12);
      return React3(BottomSheet, obj3);
    };
size = size_mod;
let result = size.fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default tmp7;
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = DismissibleContentUnsafeUtils;
  if (obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    const obj3 = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj3);
  } else {
    const tmp4Result = DismissibleContentUnsafeUtils;
    const result = tmp4Result.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT,
    );
    const obj4 = { channelId, messageId, emoji };
    const tmpResult2 = ActionSheetActionCreatorsDefault;
    tmpResult2.openLazy(asyncRequire(7462, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj4);
  }
};
