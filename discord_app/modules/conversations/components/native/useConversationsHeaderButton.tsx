// discord_app/modules/conversations/components/native/useConversationsHeaderButton.tsx
import util from "../../../../intl/index.native.tsx";
import ConversationsActionCreators from "../../ConversationsActionCreators.tsx";
import PaperIcon from "../../../../design/components/Icon/native/redesign/generated/PaperIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationsStore from "../../ConversationsStore.tsx";

require = fn;
const ConversationConstants = fn(7598);
({
  CONVERSATION_HAS_MORE_EXPIRATION_MS: hasOwnProperty,
  MOBILE_FETCH_LIMIT: metroRequire,
  MOBILE_PREVIEW_MESSAGE_COUNT: closure_7,
} = ConversationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/useConversationsHeaderButton.tsx");

export const useConversationsHeaderButton = function useConversationsHeaderButton(channel) {
  _require = channel;
  let isTopicalNavEnabled = require("ConversationExperiments").useIsTopicalNavEnabled(
    channel.guild_id,
    "channel_header",
  );
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = channel.type === tmp(tmp2[5]).ChannelTypes.GUILD_TEXT;
  }
  let tmpResult = tmp(tmp2[6]);
  const items = [channel.id];
  const conversationBackoffRef = tmpResult.useConversationBackoffRef(items);
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
  _require = conversationBackoffRef(function* () {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else if (c1) {
            ref = 1;
            let obj1 = tmp3(fetchPage[7]);
            obj1 = {
              channelId: null,
              guildId: null,
              direction: "before",
              anchor: null,
              limit: null,
              isJump: true,
              throwOnError: true,
              hydrateMessages: null,
            };
            ({ id: obj3.channelId, guild_id: obj3.guildId } = tmp3);
            obj1.limit = isTopicalNavEnabled;
            const obj2 = { limit };
            obj1.hydrateMessages = obj2;
            c1 = 2;
            c3 = 1;
            const obj3 = { value: obj1.fetchChannelConversations(obj1), done: false };
            return obj3;
          }
        } else {
          if (1 === tmp7) {
            ref = 0;
            const current2 = ref.current;
            current2.fail(closure_128_1);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const current = ref.current;
            current.succeed();
            ref = 0;
          }
          ref = 0;
          c3 = 3;
          obj = { value, done: true };
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
  const items1 = [, , ,];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = isTopicalNavEnabled;
  items1[3] = conversationBackoffRef;
  callback = callback.useCallback(fetchPage, items1);
  const items2 = [, , ,];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  items2[2] = isTopicalNavEnabled;
  items2[3] = callback;
  const effect = callback.useEffect(() => {
    let hasChannelDataResult = !fetchPage;
    if (fetchPage) {
      hasChannelDataResult = ConversationsStore.hasChannelData(user.id);
    }
    if (!hasChannelDataResult) {
      hasChannelDataResult = ConversationsStore.isPendingFetch(user.id);
    }
    if (!hasChannelDataResult) {
      callback();
    }
  }, items2);
  tmpResult = tmp(tmp2[8]);
  const items3 = [stateFromStores];
  const items4 = [channel.id];
  stateFromStores = tmpResult.useStateFromStores(
    items3,
    () => ConversationsStore.getEdgeMarker(user.id, "after"),
    items4,
  );
  const items5 = [stateFromStores, isTopicalNavEnabled, callback];
  const effect1 = callback.useEffect(() => {
    if (fetchPage) {
      if (null != stateFromStores) {
        const _Date = Date;
        const sum = tmp + hasOwnProperty;
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
  let obj = require("ConversationExperiments");
  const items6 = [stateFromStores];
  const items7 = [channel.id];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items6,
    () => {
      const channelConversations = ConversationsStore.getChannelConversations(user.id);
      let num;
      if (channelConversations != null) {
        num = channelConversations.length;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    },
    items7,
  );
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = stateFromStores1 > 0;
  }
  callback.useRef(null);
  const items8 = [isTopicalNavEnabled, stateFromStores1, channel.id];
  const effect2 = obj3.useEffect(() => {
    let tmp = isTopicalNavEnabled;
    if (isTopicalNavEnabled) {
      tmp = ref.current !== user.id;
    }
    if (tmp) {
      ref.current = user.id;
      const result = ConversationsActionCreators.trackTopicalNavigationEntrypointImpression(user.id, stateFromStores1);
    }
  }, items8);
  const items9 = [isTopicalNavEnabled, conversationBackoffRef, ,];
  ({ id: arr10[2], guild_id: arr10[3] } = channel);
  return callback.useMemo(() => {
    let tmp = null;
    if (isTopicalNavEnabled) {
      let obj = {
        source: null,
        IconComponent: PaperIcon.PaperIcon,
        onPress() {
          const current = ref.current;
          current.cancel();
          const ConversationsAnalytics = closure_0(fetchPage[10]).ConversationsAnalytics;
          let obj = { channelId: user.id, conversationIds: [], isFocusMode: false };
          const result = ConversationsAnalytics.trackTopicsUnitImpression(obj);
          obj = { channelId: user.id, guildId: user.guild_id };
          const result1 = closure_0(fetchPage[11]).openConversationNavigator(obj);
        },
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.u54FxB);
      tmp = obj;
    }
    return tmp;
  }, items9);
};
