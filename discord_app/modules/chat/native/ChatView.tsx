// === Module 10546: ? ===

// Module 10546
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import { createChannelRecord } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import { ChannelTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
let c3 = importAllResult;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let obj = { flex: 1, borderTopWidth: require("get ActivityIndicator").StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[0] = obj;
obj[1] = { flex: 1, overflow: "hidden" };
const createCacheKey = { backgroundColor: ThemesDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
obj[2] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChatView(alwaysRespectKeyboard) {
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = alwaysRespectKeyboard.channelId;
  const chatInputRef = alwaysRespectKeyboard.chatInputRef;
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: closure_3, screenIndex: closure_4, secondaryTextFieldRef: createChannelRecord, setNoExtractUI: closure_6 } = alwaysRespectKeyboard);
  channel = undefined;
  closure_10 = undefined;
  let ref;
  let callback;
  closure_13 = undefined;
  closure_14 = undefined;
  c15 = undefined;
  c16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  closure_20 = undefined;
  let setInterstitial = callback();
  let obj = importAllResult;
  let items = [channelId, flag];
  const effect = importAllResult.useEffect(() => {
    if (!flag) {
      flag(chatInputRef[10]).dismissKeyboard();
      const obj = flag(chatInputRef[10]);
    }
  }, items);
  obj1 = flag(chatInputRef[11]);
  let items1 = [closure_6];
  let stateFromStores = obj1.useStateFromStores(items1, () => closure_1_6.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = importAllResult.useMemo(() => {
    let tmp2 = stateFromStores;
    if (null == stateFromStores) {
      let obj = { id: null, type: null, name: null };
      obj[0] = channelId;
      obj[1] = stateFromStores.GUILD_TEXT;
      const intl = flag(chatInputRef[12]).intl;
      obj[2] = intl.string(flag(chatInputRef[12]).t.ZTNur7);
      tmp2 = createChannelRecord(obj);
    }
    obj = { channel: tmp2, channelIsLoading: null == stateFromStores };
    return obj;
  }, items2);
  ({ channelIsLoading, channel } = memo);
  let obj2 = flag(chatInputRef[13]);
  const isChannelContentGated = obj2.useIsChannelContentGated(channel);
  let obj3 = flag(chatInputRef[14]);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = obj3.useGetSpoilerGatingChannelId(stateFromStores);
  closure_10 = obj.useRef(channelId);
  ref = obj.useRef(null);
  callback = obj.useRef(null);
  closure_13 = channelId(tmp3[15])(() => new channelId(chatInputRef[16])());
  const tmp10 = channelId(chatInputRef[17])(channelId);
  closure_14 = tmp10;
  let tmp2Result = tmp2(tmp3[11]);
  const items3 = [setInterstitial];
  const items4 = [channelId, tmp10];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items3, () => {
    const messages = setInterstitial.getMessages(channelId);
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
    }
    const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: null };
    const hasMoreBefore = messages.hasMoreBefore;
    let tmp3 = !hasMoreBefore;
    if (!hasMoreBefore) {
      tmp3 = !closure_14;
    }
    obj[1] = tmp3;
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c15, shouldRenderBegginingRow: c16 } = stateFromStoresObject);
  closure_17 = obj.useCallback((isFirstMessageVisible) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(isFirstMessageVisible);
    }
  }, []);
  const items5 = [chatInputRef];
  closure_18 = obj.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (current != null) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  closure_19 = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  closure_20 = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = obj.useLayoutEffect(() => flag(chatInputRef[18]).trackAppUIViewed(), []);
  const items8 = [channelId];
  const effect1 = obj.useEffect(() => {
    const thread = channelId(chatInputRef[19]).loadThread(channelId);
    const obj = channelId(chatInputRef[19]);
    const summaries = flag(chatInputRef[20]).fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = obj.useEffect(() => {
    closure_10.current = channel.id;
  }, items9);
  const effect3 = obj.useEffect(() => () => {
    const result = flag(chatInputRef[21]).clearOldestUnreadMessageId(ref.current);
  }, []);
  obj = { profile: flag(chatInputRef[33]).Profiles.ChatView, children: null };
  const items10 = [channel(channelId(chatInputRef[34]), { channelId, guildId }), , ];
  let tmp18Result = null;
  if (!flag2) {
    tmp18Result = tmp18(tmp9(tmp3[35]), { absolute: true });
  }
  items10[1] = tmp18Result;
  tmp2Result = tmp2(tmp3[37]);
  if (tmp2Result.shouldNSFWGateGuild(guildId)) {
    tmp18Result = tmp18(tmp9(tmp3[38]), {});
    let tmp9Result = tmp9(tmp3[36]);
    tmp9Result.setInterstitial("NsfwGateChat");
  } else {
    function renderMessagesWrapper() {
      let obj = { channel, ref: closure_12, scrollToNewMessages: closure_19 };
      obj[2] = channel(channelId(chatInputRef[23]), obj);
      obj = { alwaysRespectKeyboard: flag, channel, screenIndex: closure_4, chatInputRef, HACK_fixModalInteraction: closure_3, isResourceChannel: closure_14, onPressKey: closure_18, onScroll: closure_17, ref, style: setInterstitial.chat, visibleMessagesWindowHandler: closure_13, children: null };
      const tmp5 = channelId(chatInputRef[22]);
      const items = [channel(channelId(chatInputRef[25]), { ref: chatInputRef, channel, isResourceChannel: closure_14, screenIndex: closure_4, secondaryTextFieldRef: closure_5, setNoExtractUI: closure_6, onJumpToPresent: closure_20 }), ];
      const obj2 = { channelId, guildId: null, shouldRender: null };
      const tmp9 = channelId(chatInputRef[24]);
      obj2[1] = channel.getGuildId();
      obj2[2] = c16;
      items[1] = channel(channelId(chatInputRef[26]), obj2);
      obj[11] = items;
      const items1 = [callback(tmp9, obj), , , ];
      let obj5 = flag(chatInputRef[27]);
      let tmp7Result = null;
      if (!obj5.isAndroid()) {
        const obj3 = { channelId: null, messagesRef: null };
        obj3[0] = channel.id;
        obj3[1] = ref;
        tmp7Result = channel(channelId(chatInputRef[28]), obj3);
      }
      items1[1] = tmp7Result;
      tmp7Result = null;
      if (c15) {
        const obj4 = { screenIndex: null };
        obj4[0] = closure_4;
        tmp7Result = channel(channelId(chatInputRef[29]), obj4);
      }
      items1[2] = tmp7Result;
      const tmp13 = channelId(chatInputRef[26]);
      let tmp7Result1 = null;
      if (tmp14Result.isAndroid()) {
        obj5 = { channelId: null, screenIndex: null, onJumpToPresent: null };
        obj5[0] = channelId;
        obj5[1] = closure_4;
        obj5[2] = closure_20;
        tmp7Result1 = channel(channelId(chatInputRef[30]), obj5);
      }
      const obj6 = { children: null };
      items1[3] = tmp7Result1;
      obj[3] = items1;
      const items2 = [callback(tmp5, obj), channel(channelId(chatInputRef[31]), { channelId }), channel(channelId(chatInputRef[32]), { channelId })];
      obj6[0] = items2;
      return callback(ref, obj6);
    }
    if (channelIsLoading) {
      if (!connected.isConnected()) {
        tmp18Result = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      obj = { style: null, title: null, body: null };
      obj[0] = setInterstitial.empty;
      let intl = tmp2(tmp3[12]).intl;
      obj[1] = intl.string(tmp2(tmp3[12]).t.ai6Lbr);
      const intl2 = tmp2(tmp3[12]).intl;
      obj[2] = intl2.string(tmp2(tmp3[12]).t["LTr+x9"]);
      let tmp18Result1 = tmp18(tmp2(tmp3[39]).EmptyState, obj);
      tmp9Result = tmp9(tmp3[36]);
      setInterstitial = tmp9Result.setInterstitial;
      setInterstitial("EmptyState");
    } else if (isChannelContentGated) {
      obj1 = { guildId: null, channelId: null };
      obj1[0] = guildId;
      obj1[1] = channelId;
      tmp18Result1 = tmp18(tmp9(tmp3[40]), obj1);
      tmp9(tmp3[36]).setInterstitial("GuildNSFW");
      const tmp9Result1 = tmp9(tmp3[36]);
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          obj2 = { guildId: null, channelId: null };
          obj2[0] = guildId;
          obj2[1] = getSpoilerGatingChannelId;
          tmp18Result1 = tmp18(tmp9(tmp3[41]), obj2, channelId);
          tmp9(tmp3[36]).setInterstitial("ChannelSpoiler");
          const tmp9Result2 = tmp9(tmp3[36]);
        }
      }
      if (channel.isDirectory()) {
        obj3 = { channel: null, guildId: null };
        obj3[0] = channel;
        obj3[1] = guildId;
        tmp18Result1 = tmp18(tmp9(tmp3[42]), obj3);
        tmp9(tmp3[36]).setInterstitial("GuildDirectory");
        const tmp9Result3 = tmp9(tmp3[36]);
      } else if (channel.isForumLikeChannel()) {
        let obj4 = { channel: null };
        obj4[0] = channel;
        tmp18Result1 = tmp18(tmp9(tmp3[43]), obj4);
        tmp9(tmp3[36]).setInterstitial("ForumChannel");
        const tmp9Result4 = tmp9(tmp3[36]);
      } else {
        tmp18Result1 = renderMessagesWrapper();
      }
    }
  }
  items10[2] = tmp18Result;
  obj[1] = items10;
  return closure_10(channelId(chatInputRef[33]), obj);
});
let result = require("obj132").fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;