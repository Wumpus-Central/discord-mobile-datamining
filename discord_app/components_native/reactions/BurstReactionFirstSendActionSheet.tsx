// === Module 7570: onDismiss ===

// Module 7570 (onDismiss)
import noopAll from "noop" /* 19 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import Background from "Background" /* 6950 */;
import ReactionTypes from "ReactionTypes" /* 7510 */;
import _generateAnimationSource from "_generateAnimationSource" /* 7531 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 7571 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 7572 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function onDismiss() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
}
noopAll;
({ View: c3, StyleSheet } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flex = 1;
createCacheKey.alignItems = "center";
createCacheKey.justifyContent = "center";
createCacheKey.top = -120;
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
createCacheKey[3] = { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" };
createCacheKey[4] = { paddingTop: 8, paddingBottom: 18 };
createCacheKey[5] = { paddingHorizontal: 16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  ({ emoji, channelId, messageId } = arg0);
  const tmp = callback3();
  let obj = { quest: getSystemLocale.t["5TpPli"] };
  const deviceSpecificString = obj.getDeviceSpecificString(obj, getSystemLocale.t["2Yp7dF"]);
  obj = { backdropOpacity: _generateAnimationSource.BACKDROP_OPACITY, contentStyles: tmp.content, backdropChildren: null, onDismiss: null, children: null };
  obj1 = { style: tmp.fill, children: null };
  const obj2 = { channelId, emoji, messageId, reactionType: ReactionTypes.ReactionTypes.BURST };
  obj1[1] = callback(BurstReactionAnimationPreviewDefault, obj2);
  obj[2] = callback(closure_3, obj1);
  obj[3] = onDismiss;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  const items = [callback(Button.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj6 = { variant: "heading-xl/bold", children: null };
  const intl = getSystemLocale.intl;
  obj6[1] = intl.string(getSystemLocale.t.NX7HI7);
  items[1] = callback(Text.Text, obj6);
  obj4[1] = items;
  const items1 = [callback2(closure_3, obj4), , ];
  items1[1] = callback(closure_3, { style: tmp.body, children: callback(Text.Text, obj8) });
  const obj9 = { text: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj9[0] = intl2.string(getSystemLocale.t["+IrDzN"]);
  obj9[1] = onDismiss;
  items1[2] = callback(Button2.Button, obj9);
  obj3[1] = items1;
  obj[4] = callback2(closure_3, obj3);
  return callback(Background.BottomSheet, obj);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  ({ channelId, messageId, emoji } = arg0);
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    let tmpResult = dispatcherDefault;
    obj = { type: "BURST_REACTION_EFFECT_SEND", channelId: null, messageId: null, emoji: null };
    obj[1] = channelId;
    obj[2] = messageId;
    obj[3] = emoji;
    tmpResult.dispatch(obj);
  } else {
    const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    tmpResult = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { channelId: null, messageId: null, emoji: null };
    obj[0] = channelId;
    obj[1] = messageId;
    obj[2] = emoji;
    tmpResult.openLazy(asyncRequireImpl(7570, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj);
    const tmp4Result = UNSAFE_isDismissibleContentDismissed;
  }
  obj2 = UNSAFE_isDismissibleContentDismissed;
};