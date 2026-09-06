// === Module 7823: BurstReactionFirstSendActionSheet ===

// Module 7823 (BurstReactionFirstSendActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7784 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 7824 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 7825 */;
import noop from "module_19" /* 19 */;

require = fn;
function onDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 }, fill: null, nitroWheel: null, textContainer: null, body: null, content: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flex = 1;
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
createStyles.top = -120;
createStyles.fill = createStyles;
let size = { tintColor: nativeDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
createStyles.nitroWheel = size;
createStyles.textContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" };
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
  obj = { backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY, contentStyles: tmp.content, backdropChildren: null, onDismiss: null, children: null };
  const obj1 = { style: tmp.fill, children: null };
  const obj2 = { channelId, emoji, messageId, reactionType: MessageReactionsTypes.ReactionTypes.BURST };
  obj1.children = React4(BurstReactionAnimationPreviewDefault, obj2);
  obj.backdropChildren = React4(React3, obj1);
  obj.onDismiss = onDismiss;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  const items = [React4(native.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj6 = { variant: "heading-xl/bold", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.NX7HI7);
  items[1] = React4(Text_Text.Text, obj6);
  obj4.children = items;
  const items1 = [hasOwnProperty(React3, obj4), , ];
  const obj7 = { style: tmp.body, children: React4(Text_Text.Text, { style: tmp.textContainer, variant: "text-md/normal", children: deviceSpecificString }) };
  items1[1] = React4(React3, obj7);
  const obj9 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj9.text = intl2.string(util.t["+IrDzN"]);
  obj9.onPress = onDismiss;
  items1[2] = React4(components_Button_Button.Button, obj9);
  obj3.children = items1;
  obj.children = hasOwnProperty(React3, obj3);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  ({ channelId, messageId, emoji } = arg0);
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    let tmpResult = tmp(573);
    obj = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    tmpResult.dispatch(obj);
  } else {
    const result = tmp4(4380).UNSAFE_markDismissibleContentAsDismissed(tmp4(1943).DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    tmpResult = tmp(4527);
    obj = { channelId, messageId, emoji };
    tmpResult.openLazy(tmp4(1896)(7823, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj);
    const tmp4Result = tmp4(4380);
  }
};