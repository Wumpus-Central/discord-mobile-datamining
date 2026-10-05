// === Module 7547: useConversationsHeaderButton ===

// Module 7547 (useConversationsHeaderButton)
import intl2 from "intl" /* 1126 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7550 */;
import PaperIcon from "PaperIcon" /* 7553 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7103 */;
import ConversationConstants from "ConversationConstants" /* 7105 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ CONVERSATION_HAS_MORE_EXPIRATION_MS: hasOwnProperty, MOBILE_FETCH_LIMIT: metroRequire, MOBILE_PREVIEW_MESSAGE_COUNT: metroImportDefault } = ConversationConstants);
let result = size.fileFinishedImporting("modules/conversations/components/native/useConversationsHeaderButton.tsx");

export const useConversationsHeaderButton = function useConversationsHeaderButton(channel) {
  let callback;
  let isTopicalNavEnabled;
  let stateFromStores;
  _require = channel;
  let tmp = _require;
  const tmp2 = isTopicalNavEnabled;
  let obj = require("ConversationExperiments");
  isTopicalNavEnabled = obj.useIsTopicalNavEnabled(channel.guild_id, "channel_header") && channel.type === tmp(tmp2[5]).ChannelTypes.GUILD_TEXT;
  const items = [channel.id];
  const tmpResult = tmp(tmp2[6]);
  const conversationBackoffRef = tmpResult.useConversationBackoffRef(items);
  let obj3 = callback;
  function fetchPage() {
    return closure_0(...arguments);
  }
  const useCallback = callback.useCallback;
  _require = conversationBackoffRef(function*() {
    let obj2;
    let obj7;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const tmp22 = c1;
            if (tmp22) {
              ref = 1;
              const obj6 = { channelId: null, guildId: null, direction: "before", anchor: null, limit, isJump: true, throwOnError: true, hydrateMessages: obj7 };
              ({ id: obj3.channelId, guild_id: obj3.guildId } = tmp);
              obj7 = { limit: limit2 };
              c1 = 2;
              c3 = 1;
              const obj12 = { value: obj2.fetchChannelConversations(obj6), done: false };
              obj2 = tmp(fetchPage[7]);
              return obj12;
            }
          }
        } else if (1 === tmp4) {
          ref = 0;
          const current2 = ref.current;
          current2.fail(closure_128_1);
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          ref = 0;
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const current = ref.current;
          current.succeed();
          ref = 0;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        if (0 === ref) {
          c3 = 3;
          throw tmp17;
        } else {
          c1 = 1;
        }
      }
    }
  });
  const items1 = [, , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = isTopicalNavEnabled;
  items1[3] = conversationBackoffRef;
  callback = useCallback(fetchPage, items1);
  const items2 = [, , , ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  items2[2] = isTopicalNavEnabled;
  items2[3] = callback;
  const effect = callback.useEffect(() => {
    let hasChannelDataResult = !isTopicalNavEnabled;
    if (isTopicalNavEnabled) {
      hasChannelDataResult = ChannelConversationsStore.hasChannelData(channel.id);
    }
    if (!hasChannelDataResult) {
      hasChannelDataResult = ChannelConversationsStore.isPendingFetch(channel.id);
    }
    if (!hasChannelDataResult) {
      callback();
    }
  }, items2);
  const items3 = [stateFromStores];
  const items4 = [channel.id];
  const tmpResult3 = tmp(tmp2[8]);
  stateFromStores = tmpResult3.useStateFromStores(items3, () => ChannelConversationsStore.getEdgeMarker(channel.id, "after"), items4);
  const items5 = [stateFromStores, isTopicalNavEnabled, callback];
  const effect1 = callback.useEffect(() => {
    if (isTopicalNavEnabled) {
      if (null != stateFromStores) {
        const _Date = Date;
        const sum = tmp2 + hasOwnProperty;
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
  const items6 = [stateFromStores];
  const items7 = [channel.id];
  const tmpResult4 = tmp(tmp2[8]);
  const stateFromStores1 = tmpResult4.useStateFromStores(items6, () => {
    const channelConversations = ChannelConversationsStore.getChannelConversations(channel.id);
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
    let num = 0;
    isTopicalNavEnabled = stateFromStores1 > 0;
  }
  let ref = obj3.useRef(null);
  const items8 = [isTopicalNavEnabled, stateFromStores1, channel.id];
  const effect2 = obj3.useEffect(() => {
    const tmp = isTopicalNavEnabled && ref.current !== channel.id;
    if (tmp) {
      ref.current = channel.id;
      const obj = ConversationsActionCreators;
      const result = obj.trackTopicalNavigationEntrypointImpression(channel.id, stateFromStores1);
    }
  }, items8);
  const items9 = [isTopicalNavEnabled, conversationBackoffRef, , ];
  ({ id: arr10[2], guild_id: arr10[3] } = channel);
  return obj3.useMemo(() => {
    let intl;
    let tmp = null;
    if (isTopicalNavEnabled) {
      let obj = {
        source: null,
        IconComponent: PaperIcon.PaperIcon,
        onPress() {
            const current = ref.current;
            current.cancel();
            const ConversationsAnalytics = closure_0(isTopicalNavEnabled[10]).ConversationsAnalytics;
            const obj = { channelId: closure_1_0.id, conversationIds: [], isFocusMode: false };
            const result = ConversationsAnalytics.trackTopicsUnitImpression(obj);
            const obj2 = closure_0(isTopicalNavEnabled[11]);
            const obj3 = { channelId: closure_1_0.id, guildId: closure_1_0.guild_id };
            const result1 = obj2.openConversationNavigator(obj3);
          },
        accessibilityLabel: intl.string(intl2.t.u54FxB)
      };
      intl = intl2.intl;
      tmp = obj;
    }
    return tmp;
  }, items9);
};