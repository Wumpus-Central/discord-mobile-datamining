// discord_app/components_native/reactions/BurstReactionFirstSendActionSheet.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../design/components/Sheet/native/BottomSheet.native.tsx";
import MessageReactionsTypes from "../../modules/messages/MessageReactionsTypes.tsx";
import burst_reactions_BurstReactionEffectUtils from "../../modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx";
import getDeviceSpecificString from "../../modules/intl/overrides/getDeviceSpecificString.tsx";
import BurstReactionAnimationPreviewDefault from "../../modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function onDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 },
  fill: null,
  nitroWheel: null,
  textContainer: null,
  body: null,
  content: null,
};
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flex = 1;
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
createStyles.top = -120;
createStyles.fill = createStyles;
let size = { tintColor: nativeDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
createStyles.nitroWheel = size;
createStyles.textContainer = {
  flexDirection: "row",
  flexShrink: 1,
  alignItems: "center",
  alignSelf: "center",
  textAlign: "center",
};
createStyles.body = { paddingTop: 8, paddingBottom: 18 };
createStyles.content = { paddingHorizontal: 16 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  ({ emoji, channelId, messageId } = arg0);
  const tmp = closure_6();
  let obj = { quest: util.t["5TpPli"] };
  const deviceSpecificString = obj.getDeviceSpecificString(obj, util.t["2Yp7dF"]);
  obj = {
    backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY,
    contentStyles: tmp.content,
    backdropChildren: null,
    onDismiss: null,
    children: null,
  };
  const obj1 = { style: tmp.fill, children: null };
  const obj2 = { channelId, emoji, messageId, reactionType: MessageReactionsTypes.ReactionTypes.BURST };
  obj1.children = React4(BurstReactionAnimationPreviewDefault, obj2);
  obj.backdropChildren = React4(React3, obj1);
  obj.onDismiss = onDismiss;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  const items = [React4(native.NitroWheel, { style: tmp.nitroWheel })];
  const obj6 = { variant: "heading-xl/bold", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.NX7HI7);
  items[1] = React4(Text_Text.Text, obj6);
  obj4.children = items;
  const items1 = [hasOwnProperty(React3, obj4), ,];
  const obj7 = {
    style: tmp.body,
    children: React4(Text_Text.Text, {
      style: tmp.textContainer,
      variant: "text-md/normal",
      children: deviceSpecificString,
    }),
  };
  items1[1] = React4(React3, obj7);
  const obj9 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj9.text = intl2.string(util.t["+IrDzN"]);
  obj9.onPress = onDismiss;
  items1[2] = React4(components_Button_Button.Button, obj9);
  obj3.children = items1;
  obj.children = hasOwnProperty(React3, obj3);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
}
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  ({ channelId, messageId, emoji } = arg0);
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    let tmpResult = tmp(573);
    obj = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    tmpResult.dispatch(obj);
  } else {
    const result = tmp4(4380).UNSAFE_markDismissibleContentAsDismissed(
      tmp4(1943).DismissibleContent.SUPER_REACTIONS_FIRST_SENT,
    );
    tmpResult = tmp(4527);
    obj = { channelId, messageId, emoji };
    tmpResult.openLazy(tmp4(1896)(7823, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj);
    const tmp4Result = tmp4(4380);
  }
};
