// discord_app/modules/messages/VoiceSessionUtils.tsx
import getHumanizedCallDurationDefault from "getHumanizedCallDuration.tsx";
import noop from "../../../_runtime/00019_noop.js";
import recomputeAffinities from "../user_affinities/UserAffinitiesV2Store.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { useNullableMessageAuthor } from "useMessageAuthor.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export const getSortedVoiceSessionParticipants = function getSortedVoiceSessionParticipants(message) {
  const _require = message;
  const call = message.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce((acc, item, index) => {
      const user = closure_1_6.getUser(item);
      let tmp2 = acc;
      if (null != user) {
        tmp2 = acc;
        if (user.id !== channel_id.author.id) {
          const items = [];
          items[HermesBuiltin.arraySpread(acc, 0)] = user;
          tmp2 = items;
        }
      }
      return tmp2;
    }, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = authStore.getUserAffinitiesMap();
  return require("../user_affinities/maybeSortByProbability.tsx").maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
};
export const useSortedVoiceSessionParticipants = function useSortedVoiceSessionParticipants(author) {
  let stateFromStoresArray = author;
  const items = [closure_6];
  const items1 = [author.author.id, author.call];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => {
    const call = stateFromStoresArray.call;
    let participants;
    if (call != null) {
      participants = call.participants;
    }
    if (null != participants) {
      const participants1 = stateFromStoresArray.call.participants;
      const mapped = participants1.map((item, index) => user.getUser(item));
      const found = mapped.filter((item, index) => null != item);
      let found1 = found.filter((item, index) => item.id !== author.author.id);
    } else {
      found1 = [];
    }
    return found1;
  }, items1);
  const obj = stateFromStoresArray(589);
  const items2 = [closure_4];
  const stateFromStores = stateFromStoresArray(589).useStateFromStores(items2, () => userAffinitiesMap.getUserAffinitiesMap(), []);
  const items3 = [stateFromStoresArray, stateFromStores];
  return React.useMemo(() => stateFromStoresArray(dependencyMap[4]).maybeSortByProbability(stateFromStoresArray, stateFromStores, "VoiceSessionUtils - participants"), items3);
};
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
  let _require = channel.getChannel(channel_id.channel_id);
  let tmp2 = getHumanizedCallDurationDefault(channel_id);
  let obj = useNullableMessageAuthor;
  const messageAuthor = obj.getMessageAuthor(channel_id);
  _require = channel_id;
  const call = channel_id.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce((acc, item, index) => {
      const user = closure_1_6.getUser(item);
      let tmp2 = acc;
      if (null != user) {
        tmp2 = acc;
        if (user.id !== channel_id.author.id) {
          const items = [];
          items[HermesBuiltin.arraySpread(acc, 0)] = user;
          tmp2 = items;
        }
      }
      return tmp2;
    }, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = authStore.getUserAffinitiesMap();
  const result = require("../user_affinities/maybeSortByProbability.tsx").maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
  const mapped = result.map((item, index) => {
    const obj = { user: item, messageAuthor: channel_id(dependencyMap[7]).getUserAuthor(item, channel_id) };
    return obj;
  });
  if (null == tmp2) {
    const intl = tmp3(1236).intl;
    obj = { username: null, usernameOnClick: null };
    obj[0] = messageAuthor.nick;
    obj[1] = tmp3(12).identity;
    let formatToPlainStringResult = intl.formatToPlainString(tmp3(1236).t.HzBfIN, obj);
  } else {
    const intl2 = tmp3(1236).intl;
    obj = { userCount: null, username: null, usernameOnClick: null, username2: null, username2OnClick: null, username3: null, username3OnClick: null, otherCount: null, duration: null };
    obj[0] = mapped.length + 1;
    obj[1] = messageAuthor.nick;
    obj[2] = tmp3(12).identity;
    const first = mapped[0];
    let nick;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    obj[3] = nick;
    obj[4] = tmp3(12).identity;
    let nick1;
    if (mapped[1] != null) {
      nick1 = tmp7.messageAuthor.nick;
    }
    obj[5] = nick1;
    obj[6] = tmp3(12).identity;
    obj[7] = mapped.length - 1;
    obj[8] = tmp2;
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(1236).t.atbXuX, obj);
  }
  return formatToPlainStringResult;
};