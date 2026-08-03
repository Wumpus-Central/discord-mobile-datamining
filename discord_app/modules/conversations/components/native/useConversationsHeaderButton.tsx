// === Module 9448: useConversationsHeaderButton ===

// Module 9448 (useConversationsHeaderButton)
import set from "set";
import noop from "noop";
import removePendingListFetch from "removePendingListFetch";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";

let c5;
let closure_6;
let error;
const require = arg1;
({ CONVERSATION_HAS_MORE_EXPIRATION_MS: c5, MOBILE_FETCH_LIMIT: closure_6, MOBILE_PREVIEW_MESSAGE_COUNT: error } = CONVERSATION_COLORS);
let result = require("removePendingListFetch").fileFinishedImporting("modules/conversations/components/native/useConversationsHeaderButton.tsx");

export const useConversationsHeaderButton = function useConversationsHeaderButton(channel) {
  let _require = channel;
  let isTopicalNavEnabled = _require(fetchPage[4]).useIsTopicalNavEnabled(channel.guild_id, "channel_header");
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = channel.type === tmp(tmp2[5]).ChannelTypes.GUILD_TEXT;
  }
  fetchPage = isTopicalNavEnabled;
  let tmpResult = tmp(tmp2[6]);
  const items = [channel.id];
  const conversationBackoffRef = tmpResult.useConversationBackoffRef(items);
  _require = undefined;
  fetchPage = function fetchPage() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  _require = conversationBackoffRef(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            if (c1) {
              let ref = 1;
              let obj1 = callback(fetchPage[7]);
              obj1 = { channelId: null, guildId: null, direction: "before", anchor: null, limit: null, isJump: true, throwOnError: true, hydrateMessages: null };
              ({ id: obj3[0], guild_id: obj3[1] } = outer1_0);
              obj1[4] = isTopicalNavEnabled;
              const obj2 = { limit: null };
              obj2[0] = closure_7;
              obj1[7] = obj2;
              c1 = 2;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj1.fetchChannelConversations(obj1);
              return obj3;
            }
          }
        } else {
          if (1 === tmp7) {
            ref = 0;
            const current2 = ref.current;
            current2.fail(c1);
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const current = ref.current;
            current.succeed();
            ref = 0;
          }
          ref = 0;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c3 = 3;
      } catch (tmp20) {
        if (tmp4 === ref) {
          c3 = tmp2;
          throw tmp20;
        } else {
          c1 = tmp;
        }
      }
    }
  });
  const items1 = [, , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = isTopicalNavEnabled;
  items1[3] = conversationBackoffRef;
  callback = callback.useCallback(fetchPage, items1);
  const items2 = [, , , ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  items2[2] = isTopicalNavEnabled;
  items2[3] = callback;
  const effect = callback.useEffect(() => {
    let hasChannelDataResult = !fetchPage;
    if (fetchPage) {
      hasChannelDataResult = stateFromStores.hasChannelData(lib.id);
    }
    if (!hasChannelDataResult) {
      hasChannelDataResult = stateFromStores.isPendingFetch(lib.id);
    }
    if (!hasChannelDataResult) {
      callback();
    }
  }, items2);
  tmpResult = tmp(tmp2[8]);
  const items3 = [stateFromStores];
  const items4 = [channel.id];
  stateFromStores = tmpResult.useStateFromStores(items3, () => stateFromStores.getEdgeMarker(lib.id, "after"), items4);
  const items5 = [stateFromStores, isTopicalNavEnabled, callback];
  const effect1 = callback.useEffect(() => {
    if (fetchPage) {
      if (null != stateFromStores) {
        const _Date = Date;
        const sum = tmp + stateFromStores1;
        const diff = sum - Date.now();
        if (diff > 0) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(callback, diff);
          return () => clearTimeout(closure_0);
        } else {
          callback();
        }
      }
    }
  }, items5);
  let obj = _require(fetchPage[4]);
  const items6 = [stateFromStores];
  const items7 = [channel.id];
  const stateFromStores1 = _require(fetchPage[8]).useStateFromStores(items6, () => {
    const channelConversations = stateFromStores.getChannelConversations(lib.id);
    let num;
    if (channelConversations != null) {
      num = channelConversations.length;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items7);
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = stateFromStores1 > 0;
  }
  let closure_7 = obj3.useRef(null);
  const items8 = [isTopicalNavEnabled, stateFromStores1, channel.id];
  const effect2 = obj3.useEffect(() => {
    let tmp = isTopicalNavEnabled;
    if (isTopicalNavEnabled) {
      tmp = ref.current !== lib.id;
    }
    if (tmp) {
      ref.current = lib.id;
      const result = lib(fetchPage[7]).trackTopicalNavigationEntrypointImpression(lib.id, stateFromStores1);
      const obj = lib(fetchPage[7]);
    }
  }, items8);
  const items9 = [isTopicalNavEnabled, conversationBackoffRef, , ];
  ({ id: arr10[2], guild_id: arr10[3] } = channel);
  return callback.useMemo(() => {
    let tmp = null;
    if (isTopicalNavEnabled) {
      let obj = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      obj[1] = lib(fetchPage[9]).PaperIcon;
      obj[2] = function onPress() {
        const current = ref.current;
        current.cancel();
        const ConversationsAnalytics = outer1_0(outer1_1[10]).ConversationsAnalytics;
        let obj = { channelId: user.id, conversationIds: [], isFocusMode: false };
        const result = ConversationsAnalytics.trackTopicsUnitImpression(obj);
        obj = { channelId: user.id, guildId: user.guild_id };
        const result1 = outer1_0(outer1_1[11]).openConversationNavigator(obj);
      };
      const intl = lib(fetchPage[12]).intl;
      obj[3] = intl.string(lib(fetchPage[12]).t.u54FxB);
      tmp = obj;
    }
    return tmp;
  }, items9);
};