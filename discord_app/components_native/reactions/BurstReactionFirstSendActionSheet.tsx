// discord_app/components_native/reactions/BurstReactionFirstSendActionSheet.tsx
import "dispatcher";
import get_ActivityIndicator from "onDismiss";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { Button } from "../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { Button } from "../../design/void/native.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import { getDeviceSpecificString } from "../../modules/intl/overrides/getDeviceSpecificString.tsx";
import { ReactionTypes } from "../../modules/messages/MessageReactionsTypes.tsx";
import { BurstReactionAnimationPreview } from "../../modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx";
import { _generateAnimationSource } from "../../modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx";

let StyleSheet;
let c3;
let c4;
let c5;
const require = arg1;
function onDismiss() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
}
({ View: c3, StyleSheet } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 }, fill: null, nitroWheel: null, textContainer: null, body: null, content: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flex = 1;
createCacheKey.alignItems = "center";
createCacheKey.justifyContent = "center";
createCacheKey.top = -120;
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { tintColor: require("Themes").colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
createCacheKey[3] = { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" };
createCacheKey[4] = { paddingTop: 8, paddingBottom: 18 };
createCacheKey[5] = { paddingHorizontal: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: require("Themes").colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
let result = require("jsxProd").fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ emoji, channelId, messageId } = arg0);
  const tmp = createCacheKey();
  let obj = getDeviceSpecificString /* getDeviceSpecificString */;
  obj = { quest: getSystemLocale /* getSystemLocale */.t["5TpPli"] };
  const deviceSpecificString = obj.getDeviceSpecificString(obj, getSystemLocale /* getSystemLocale */.t["2Yp7dF"]);
  obj = { backdropOpacity: null, contentStyles: null, backdropChildren: null, onDismiss: null, children: null };
  obj[0] = _generateAnimationSource /* _generateAnimationSource */.BACKDROP_OPACITY;
  obj[1] = tmp.content;
  const obj1 = { style: tmp.fill, children: null };
  const obj2 = { channelId, emoji, messageId, reactionType: null };
  obj2[3] = ReactionTypes /* ReactionTypes */.ReactionTypes.BURST;
  obj1[1] = callback(BurstReactionAnimationPreview, obj2);
  obj[2] = callback(closure_3, obj1);
  obj[3] = onDismiss;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  const items = [callback(Button /* Button */.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj6 = { variant: "heading-xl/bold", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj6[1] = intl.string(getSystemLocale /* getSystemLocale */.t.NX7HI7);
  items[1] = callback(Text /* Text */.Text, obj6);
  obj4[1] = items;
  const items1 = [callback2(closure_3, obj4), , ];
  const obj5 = { style: tmp.nitroWheel };
  const tmp3 = BurstReactionAnimationPreview;
  items1[1] = callback(closure_3, { style: tmp.body, children: callback(Text /* Text */.Text, obj8) });
  const obj9 = { text: null, onPress: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj9[0] = intl2.string(getSystemLocale /* getSystemLocale */.t["+IrDzN"]);
  obj9[1] = onDismiss;
  items1[2] = callback(Button /* Button */.Button, obj9);
  obj3[1] = items1;
  obj[4] = callback2(closure_3, obj3);
  return callback(Background /* Background */.BottomSheet, obj);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(DismissibleContent /* DismissibleContent */.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    let tmpResult = tmp(709);
    obj = { type: "BURST_REACTION_EFFECT_SEND", channelId: null, messageId: null, emoji: null };
    obj[1] = channelId;
    obj[2] = messageId;
    obj[3] = emoji;
    tmpResult.dispatch(obj);
  } else {
    const result = tmp4(4101).UNSAFE_markDismissibleContentAsDismissed(tmp4(1358).DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    tmpResult = tmp(4253);
    obj = { channelId: null, messageId: null, emoji: null };
    obj[0] = channelId;
    obj[1] = messageId;
    obj[2] = emoji;
    tmpResult.openLazy(tmp4(1959)(7202, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj);
    const tmp4Result = tmp4(4101);
  }
};