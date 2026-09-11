// discord_app/modules/conversations/components/native/ConversationListItem.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConversationsActionCreators from "../../ConversationsActionCreators.tsx";
import ConversationsAnalytics2 from "../../ConversationsAnalytics.tsx";
import ConversationNavigatorUtils from "ConversationNavigatorUtils.tsx";
import ConversationPreviewBlockedMessageDefault from "ConversationPreviewBlockedMessage.tsx";
import ConversationPreviewMessageDefault from "ConversationPreviewMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationsStore from "../../ConversationsStore.tsx";

require = fn;
function ConversationListItemBase(conversation) {
  conversation = conversation.conversation;
  let stateFromStores;
  const tmp = closure_12();
  let obj = conversation(stateFromStores[8]);
  const navigation = obj.useNavigation();
  let obj1 = conversation(stateFromStores[9]);
  const items = [ConversationsStore];
  const items1 = [,];
  ({ channelId: arr2[0], id: arr2[1] } = conversation);
  stateFromStores = obj1.useStateFromStores(
    items,
    () => ConversationsStore.getHydratedMessages(conversation.channelId, conversation.id),
    items1,
  );
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
  const items3 = [navigation, , , ,];
  ({ channelId: arr5[1], guildId: arr5[2], id: arr5[3], title: arr5[4] } = conversation);
  const callback = noop.useCallback(() => {
    let obj = ConversationsActionCreators;
    const conversationMessages = obj.fetchConversationMessages(
      conversation.channelId,
      conversation.guildId,
      conversation.id,
      { includeReactions: true, includeMessageReferences: true },
    );
    obj = {
      channelId: conversation.channelId,
      guildId: conversation.guildId,
      conversationId: conversation.id,
      title: conversation.title,
    };
    navigation.navigate(ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS, obj);
    const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
    obj = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
    const result = ConversationsAnalytics.trackTopicsUnitClicked(obj);
  }, items3);
  obj = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = {
    variant: "text-md/semibold",
    color: "text-default",
    lineClamp: 1,
    style: tmp.title,
    children: conversation.title,
  };
  const items4 = [closure_8(conversation(stateFromStores[14]).Text, obj1)];
  const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: null };
  const intl = conversation(stateFromStores[15]).intl;
  obj2.children = intl.formatToPlainString(conversation(stateFromStores[15]).t.poZZGL, {
    count: conversation.messageCount,
  });
  items4[1] = closure_8(conversation(stateFromStores[14]).Text, obj2);
  obj.children = items4;
  const items5 = [closure_9(closure_4, obj)];
  const obj4 = { style: tmp.previewsMask, maskElement: null, children: null };
  const obj5 = { style: tmp.maskColumn, children: null };
  const items6 = [
    closure_8(navigation(stateFromStores[17]), { colors, style: tmp.maskOpaque }),
    closure_8(navigation(stateFromStores[17]), {
      colors: colors2,
      start: VerticalGradient.START,
      end: VerticalGradient.END,
      style: tmp.maskFade,
    }),
  ];
  obj5.children = items6;
  obj4.maskElement = closure_9(closure_4, obj5);
  const obj8 = { style: tmp.previews, children: null };
  if (null == memo) {
    let mapped = closure_8(navigation(stateFromStores[18]), {});
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
  obj8.children = mapped;
  obj4.children = closure_8(closure_4, obj8);
  items5[1] = closure_8(navigation(stateFromStores[16]), obj4);
  obj.children = items5;
  return closure_9(conversation(stateFromStores[13]).Card, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(7670).MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
fn(4606);
let obj = {
  card: null,
  title: null,
  timestamp: null,
  headerContainer: null,
  previewsMask: null,
  previews: null,
  maskColumn: null,
  maskOpaque: null,
  maskFade: null,
};
obj = {
  marginBottom: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  height: 232,
  overflow: "hidden",
  paddingBottom: 0,
};
obj.card = obj;
obj.title = { flexShrink: 1, minWidth: 0 };
obj.timestamp = { flexShrink: 0 };
const createStyles = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
obj.headerContainer = createStyles;
obj.previewsMask = { flex: 1, marginTop: nativeDefault.space.PX_8 };
let obj2 = { flex: 1, marginTop: nativeDefault.space.PX_8 };
obj.previews = { gap: nativeDefault.space.PX_16 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.maskColumn = {};
obj.maskOpaque = { flex: 1 };
const obj3 = { gap: nativeDefault.space.PX_16 };
let obj4 = {};
obj.maskFade = { height: nativeDefault.space.PX_64 };
let closure_12 = createStyles.createStyles(obj);
let obj5 = { height: nativeDefault.space.PX_64 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default noop.memo(function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  let obj = channelId(504);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
      let conversation;
      if (conversationMetadata != null) {
        conversation = conversationMetadata.conversation;
      }
      return conversation;
    },
    items1,
  );
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { conversation: stateFromStores };
    tmp2 = closure_8(ConversationListItemBase, obj);
  }
  return tmp2;
});
