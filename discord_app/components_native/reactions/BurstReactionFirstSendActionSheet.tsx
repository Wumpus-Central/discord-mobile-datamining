// === Module 8063: BurstReactionFirstSendActionSheet ===

// Module 8063 (BurstReactionFirstSendActionSheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7390 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8003 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 8024 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 8064 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 8065 */;
import noop from "module_19" /* 19 */;

require = fn;
function onDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 }, fill: null, nitroWheel: null, textContainer: null, body: null, content: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flex = 1;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.top = -120;
obj2.fill = obj3;
let size = { tintColor: nativeDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
obj2.nitroWheel = size;
obj2.textContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" };
obj2.body = { paddingTop: 8, paddingBottom: 18 };
obj2.content = { paddingHorizontal: 16 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  ({ emoji, channelId, messageId } = arg0);
  const tmp = closure_6();
  const obj = getDeviceSpecificString;
  const deviceSpecificString = obj.getDeviceSpecificString({ quest: util.t["5TpPli"] }, util.t["2Yp7dF"]);
  const obj3 = { backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY, contentStyles: tmp.content, backdropChildren: null, onDismiss: null, children: null };
  const obj4 = { style: tmp.fill, children: null };
  const obj5 = { channelId, emoji, messageId, reactionType: null };
  const obj2 = { quest: util.t["5TpPli"] };
  obj5.reactionType = MessageReactionsTypes.ReactionTypes.BURST;
  obj4.children = React4(BurstReactionAnimationPreviewDefault, obj5);
  obj3.backdropChildren = React4(React3, obj4);
  obj3.onDismiss = onDismiss;
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.textContainer, children: null };
  const items = [React4(native.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj9 = { variant: "heading-xl/bold", children: null };
  const intl = util.intl;
  obj9.children = intl.string(util.t.NX7HI7);
  items[1] = React4(Text_Text.Text, obj9);
  obj7.children = items;
  const items1 = [hasOwnProperty(React3, obj7), , ];
  const obj10 = { style: tmp.body, children: React4(Text_Text.Text, { style: tmp.textContainer, variant: "text-md/normal", children: deviceSpecificString }) };
  items1[1] = React4(React3, obj10);
  const obj12 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj12.text = intl2.string(util.t["+IrDzN"]);
  obj12.onPress = onDismiss;
  items1[2] = React4(components_Button_Button.Button, obj12);
  obj6.children = items1;
  obj3.children = hasOwnProperty(React3, obj6);
  return React4(Sheet_BottomSheet.BottomSheet, obj3);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  ({ channelId, messageId, emoji } = arg0);
  ActionSheetActionCreatorsDefault.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    const obj3 = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    DispatcherDefault.dispatch(obj3);
    const tmpResult = DispatcherDefault;
  } else {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    const tmp4Result = DismissibleContentUnsafeUtils;
    const obj4 = { channelId, messageId, emoji };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8063, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj4);
    const tmpResult2 = ActionSheetActionCreatorsDefault;
  }
  obj2 = DismissibleContentUnsafeUtils;
};