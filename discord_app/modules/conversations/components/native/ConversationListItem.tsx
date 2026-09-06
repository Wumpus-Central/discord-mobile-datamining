// discord_app/modules/conversations/components/native/ConversationListItem.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
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
  let token;
  let stateFromStores;
  const tmp = closure_11();
  let obj = conversation(token[8]);
  const navigation = obj.useNavigation();
  let obj1 = conversation(token[9]);
  token = obj1.useToken(navigation(token[7]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [token];
  const memo = stateFromStores.useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), token];
    return items;
  }, items);
  let obj2 = conversation(token[11]);
  const items1 = [ConversationsStore];
  const items2 = [,];
  ({ channelId: arr3[0], id: arr3[1] } = conversation);
  stateFromStores = obj2.useStateFromStores(
    items1,
    () => ConversationsStore.getHydratedMessages(conversation.channelId, conversation.id),
    items2,
  );
  const items3 = [stateFromStores];
  const memo1 = stateFromStores.useMemo(() => {
    let substr;
    if (stateFromStores != null) {
      substr = stateFromStores.slice(0, closure_6);
    }
    if (substr == null) {
      substr = null;
    }
    return substr;
  }, items3);
  const items4 = [navigation, , , ,];
  ({ channelId: arr6[1], guildId: arr6[2], id: arr6[3], title: arr6[4] } = conversation);
  const callback = stateFromStores.useCallback(() => {
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
  }, items4);
  obj = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = {
    variant: "text-md/semibold",
    color: "text-default",
    lineClamp: 1,
    style: tmp.title,
    children: conversation.title,
  };
  const items5 = [closure_8(conversation(token[16]).Text, obj1)];
  obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: null };
  const intl = conversation(token[17]).intl;
  obj2.children = intl.formatToPlainString(conversation(token[17]).t.poZZGL, { count: conversation.messageCount });
  items5[1] = closure_8(conversation(token[16]).Text, obj2);
  obj.children = items5;
  const items6 = [closure_9(View, obj), ,];
  const obj4 = { style: tmp.previews, children: null };
  if (null == memo1) {
    let mapped = closure_8(tmp4(tmp2[18]), {});
  } else {
    mapped = memo1.map((blocked) => {
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
  obj4.children = mapped;
  items6[1] = closure_8(View, obj4);
  items6[2] = closure_8(navigation(token[21]), {
    style: tmp.bottomFade,
    start: VerticalGradient.START,
    end: VerticalGradient.END,
    colors: memo,
    locations,
  });
  obj.children = items6;
  return closure_9(conversation(token[15]).Card, obj);
}
const View = fn(17).View;
let closure_6 = fn(7598).MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const locations = [0, 0.8];
fn(4560);
let obj = { card: null, title: null, timestamp: null, headerContainer: null, previews: null, bottomFade: null };
obj = {
  marginBottom: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 232,
  overflow: "hidden",
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
obj.previews = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: -nativeDefault.space.PX_4,
  height: nativeDefault.space.PX_64,
  zIndex: 1,
};
obj.bottomFade = rect;
let closure_11 = createStyles.createStyles(obj);
let obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
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
