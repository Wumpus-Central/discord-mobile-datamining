// discord_app/modules/conversations/components/native/ConversationListItem.tsx
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "removePendingListFetch" /* 5014 */;
import { MOBILE_PREVIEW_MESSAGE_COUNT as closure_6 } from "CONVERSATION_COLORS" /* 5016 */;
import { VerticalGradient } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function ConversationListItemBase(conversation) {
  conversation = conversation.conversation;
  let navigation;
  let token;
  let stateFromStores;
  const tmp = callback3();
  let obj = conversation(token[8]);
  navigation = obj.useNavigation();
  obj1 = conversation(token[9]);
  token = obj1.useToken(navigation(token[7]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [token];
  const memo = stateFromStores.useMemo(() => {
    const obj = navigation(token[10])(token);
    const items = [navigation(token[10])(token).alpha(0).hex(), token];
    return items;
  }, items);
  let obj2 = conversation(token[11]);
  const items1 = [closure_5];
  const items2 = [, ];
  ({ channelId: arr3[0], id: arr3[1] } = conversation);
  stateFromStores = obj2.useStateFromStores(items1, () => closure_1_5.getHydratedMessages(conversation.channelId, conversation.id), items2);
  const items3 = [stateFromStores];
  const memo1 = stateFromStores.useMemo(() => {
    let substr;
    if (stateFromStores != null) {
      substr = stateFromStores.slice(0, closure_1_6);
    }
    if (substr == null) {
      substr = null;
    }
    return substr;
  }, items3);
  const items4 = [navigation, , , , ];
  ({ channelId: arr6[1], guildId: arr6[2], id: arr6[3], title: arr6[4] } = conversation);
  const callback = stateFromStores.useCallback(() => {
    let obj = conversation(token[12]);
    const conversationMessages = obj.fetchConversationMessages(conversation.channelId, conversation.guildId, conversation.id, { includeReactions: true, includeMessageReferences: true });
    obj = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
    navigation.navigate(conversation(token[13]).ConversationNavigatorScreens.FOCUS, obj);
    const ConversationsAnalytics = conversation(token[14]).ConversationsAnalytics;
    obj = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
    const result = ConversationsAnalytics.trackTopicsUnitClicked(obj);
  }, items4);
  obj = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title };
  const items5 = [callback(conversation(token[16]).Text, obj1), ];
  obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: null };
  const intl = conversation(token[17]).intl;
  obj2[4] = intl.formatToPlainString(conversation(token[17]).t.poZZGL, { count: conversation.messageCount });
  items5[1] = callback(conversation(token[16]).Text, obj2);
  obj[1] = items5;
  const items6 = [callback2(View, obj), , ];
  const obj4 = { style: tmp.previews, children: null };
  if (null == memo1) {
    let mapped = tmp11(tmp4(tmp2[18]), {});
  } else {
    mapped = memo1.map((blocked) => {
      if (!blocked.blocked) {
        if (!blocked.ignored) {
          const obj = { message: null, guildId: null, channelId: null };
          obj[0] = blocked;
          ({ guildId: obj[1], channelId: obj[2] } = conversation);
          let tmp6Result = closure_1_8(navigation(token[20]), obj, blocked.id);
        }
        return tmp6Result;
      }
      let str = "ignored";
      if (blocked.blocked) {
        str = "blocked";
      }
      tmp6Result = closure_1_8(navigation(token[19]), { reason: str }, blocked.id);
    });
  }
  obj4[1] = mapped;
  items6[1] = callback(View, obj4);
  items6[2] = callback(navigation(token[21]), { style: tmp.bottomFade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations: closure_10 });
  obj[3] = items6;
  return callback2(conversation(token[15]).Card, obj);
}
let c3 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = [0, 0.8];
let obj = { card: null, title: null, timestamp: null, headerContainer: null, previews: null, bottomFade: null };
obj = { marginBottom: ThemesDefault.space.PX_12, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, height: 232, overflow: "hidden" };
obj[0] = obj;
obj[1] = { flexShrink: 1, minWidth: 0 };
obj[2] = { flexShrink: 0 };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8 };
obj[3] = createCacheKey;
obj[4] = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_16 };
let obj2 = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_16 };
obj[5] = { position: "absolute", left: 0, right: 0, bottom: -ThemesDefault.space.PX_4, height: ThemesDefault.space.PX_64, zIndex: 1 };
let closure_11 = createCacheKey.createStyles(obj);
const obj3 = { position: "absolute", left: 0, right: 0, bottom: -ThemesDefault.space.PX_4, height: ThemesDefault.space.PX_64, zIndex: 1 };
const memoResult = importAllResult.memo(function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  let obj = channelId(589);
  const items = [closure_5];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const conversationMetadata = closure_1_5.getConversationMetadata(channelId, conversationId);
    let conversation;
    if (conversationMetadata != null) {
      conversation = conversationMetadata.conversation;
    }
    return conversation;
  }, items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { conversation: null };
    obj[0] = stateFromStores;
    tmp2 = callback(ConversationListItemBase, obj);
  }
  return tmp2;
});
let result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default memoResult;