// === Module 8062: ConversationListItem ===

// Module 8062 (ConversationListItem)
import nativeDefault from "native" /* 576 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 8029 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 8031 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 8045 */;
import ConversationPreviewBlockedMessageDefault from "ConversationPreviewBlockedMessage" /* 8064 */;
import ConversationPreviewMessageDefault from "ConversationPreviewMessage" /* 8067 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7712 */;

require = fn;
function ConversationListItemBase(conversation) {
  conversation = conversation.conversation;
  let stateFromStores;
  const tmp = closure_12();
  const navigation = conversation(stateFromStores[8]).useNavigation();
  let obj = conversation(stateFromStores[8]);
  const tmp2 = stateFromStores;
  const items = [ConversationsStore];
  const items1 = [, ];
  ({ channelId: arr2[0], id: arr2[1] } = conversation);
  stateFromStores = conversation(stateFromStores[9]).useStateFromStores(items, () => ConversationsStore.getHydratedMessages(conversation.channelId, conversation.id), items1);
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let substr;
    if (stateFromStores != null) {
      substr = stateFromStores.slice(0, closure_6);
    }
    if (substr == null) {
      substr = null;
    }
    return substr;
  }, items2);
  const items3 = [navigation, , , , ];
  ({ channelId: arr5[1], guildId: arr5[2], id: arr5[3], title: arr5[4] } = conversation);
  const callback = noop.useCallback(() => {
    const conversationMessages = ConversationsActionCreators.fetchConversationMessages(conversation.channelId, conversation.id, { includeReactions: true, includeMessageReferences: true });
    navigation.navigate(ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS, { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title });
    const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
    const result = ConversationsAnalytics.trackTopicsUnitClicked({ channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false });
  }, items3);
  const obj3 = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: null };
  const obj4 = { style: tmp.headerContainer, children: null };
  const items4 = [closure_8(conversation(stateFromStores[14]).Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: null };
  const intl = conversation(stateFromStores[15]).intl;
  obj6.children = intl.formatToPlainString(conversation(stateFromStores[15]).t.poZZGL, { count: conversation.messageCount });
  items4[1] = closure_8(conversation(stateFromStores[14]).Text, obj6);
  obj4.children = items4;
  const items5 = [closure_9(closure_4, obj4), ];
  const obj8 = { style: tmp.previewsMask, maskElement: null, children: null };
  const obj9 = { style: tmp.maskColumn, children: null };
  const obj2 = conversation(stateFromStores[9]);
  const obj5 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title };
  const obj7 = { count: conversation.messageCount };
  const tmp9 = navigation;
  const items6 = [closure_8(navigation(stateFromStores[17]), { colors, style: tmp.maskOpaque }), closure_8(navigation(stateFromStores[17]), { colors: colors2, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.maskFade })];
  obj9.children = items6;
  obj8.maskElement = closure_9(closure_4, obj9);
  const obj12 = { style: tmp.previews, children: null };
  if (null == memo) {
    let mapped = closure_8(tmp9(tmp2[18]), {});
  } else {
    mapped = memo.map((blocked) => {
      if (!blocked.blocked) {
        if (!blocked.ignored) {
          const obj = { message: blocked, guildId: null, channelId: null };
          ({ guildId: obj.guildId, channelId: obj.channelId } = conversation);
          let tmp6Result = React6(ConversationPreviewMessageDefault, obj, blocked.id);
        }
        return tmp6Result;
      }
      let str = "ignored";
      if (blocked.blocked) {
        str = "blocked";
      }
      tmp6Result = React6(ConversationPreviewBlockedMessageDefault, { reason: str }, blocked.id);
    });
  }
  obj12.children = mapped;
  obj8.children = closure_8(closure_4, obj12);
  items5[1] = closure_8(navigation(stateFromStores[16]), obj8);
  obj3.children = items5;
  return closure_9(conversation(stateFromStores[13]).Card, obj3);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(7709).MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
const createStyles = fn(4640);
let obj = { card: { marginBottom: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, height: 232, overflow: "hidden", paddingBottom: 0 }, title: { flexShrink: 1, minWidth: 0 }, timestamp: { flexShrink: 0 }, headerContainer: null, previewsMask: null, previews: null, maskColumn: null, maskOpaque: null, maskFade: null };
let obj3 = { marginBottom: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, height: 232, overflow: "hidden", paddingBottom: 0 };
obj.headerContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj.previewsMask = { flex: 1, marginTop: nativeDefault.space.PX_8 };
let obj5 = { flex: 1, marginTop: nativeDefault.space.PX_8 };
obj.previews = { gap: nativeDefault.space.PX_16 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.maskColumn = {};
obj.maskOpaque = { flex: 1 };
let obj6 = { gap: nativeDefault.space.PX_16 };
let obj7 = {};
obj.maskFade = { height: nativeDefault.space.PX_64 };
let closure_12 = createStyles.createStyles(obj);
let obj8 = { height: nativeDefault.space.PX_64 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default noop.memo(function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
    let conversation;
    if (conversationMetadata != null) {
      conversation = conversationMetadata.conversation;
    }
    return conversation;
  }, items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { conversation: stateFromStores };
    tmp2 = closure_8(ConversationListItemBase, obj2);
  }
  return tmp2;
});