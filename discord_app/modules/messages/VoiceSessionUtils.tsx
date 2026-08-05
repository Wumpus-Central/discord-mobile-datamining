// discord_app/modules/messages/VoiceSessionUtils.tsx
import noop from "noop";
import recomputeAffinities from "recomputeAffinities";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export const getSortedVoiceSessionParticipants = function getSortedVoiceSessionParticipants(message) {
  const _require = message;
  const call = message.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce((arg0, arg1) => {
      const user = outer1_6.getUser(arg1);
      let tmp2 = arg0;
      if (null != user) {
        tmp2 = arg0;
        if (user.id !== channel_id.author.id) {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = user;
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
  return _require("../user_affinities/maybeSortByProbability.tsx").maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
};
export const useSortedVoiceSessionParticipants = function useSortedVoiceSessionParticipants(author) {
  let stateFromStoresArray = author;
  const items = [mergeGuildAvatar];
  const items1 = [author.author.id, author.call];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => {
    const call = stateFromStoresArray.call;
    let participants;
    if (call != null) {
      participants = call.participants;
    }
    if (null != participants) {
      const participants1 = stateFromStoresArray.call.participants;
      const mapped = participants1.map((arg0) => user.getUser(arg0));
      const found = mapped.filter((arg0) => null != arg0);
      let found1 = found.filter((id) => id.id !== author.author.id);
    } else {
      found1 = [];
    }
    return found1;
  }, items1);
  const obj = stateFromStoresArray(589);
  const items2 = [recomputeAffinities];
  const stateFromStores = stateFromStoresArray(589).useStateFromStores(items2, () => userAffinitiesMap.getUserAffinitiesMap(), []);
  const items3 = [stateFromStoresArray, stateFromStores];
  return React.useMemo(() => stateFromStoresArray(outer1_2[4]).maybeSortByProbability(stateFromStoresArray, stateFromStores, "VoiceSessionUtils - participants"), items3);
};
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
  let _require = channel.getChannel(channel_id.channel_id);
  let tmp2 = require("getHumanizedCallDuration.tsx")(channel_id);
  let obj = _require("useMessageAuthor.tsx");
  const messageAuthor = obj.getMessageAuthor(channel_id);
  _require = channel_id;
  const call = channel_id.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce((arg0, arg1) => {
      const user = outer1_6.getUser(arg1);
      let tmp2 = arg0;
      if (null != user) {
        tmp2 = arg0;
        if (user.id !== channel_id.author.id) {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = user;
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
  const result = _require("../user_affinities/maybeSortByProbability.tsx").maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
  const mapped = result.map((user) => {
    const obj = { user, messageAuthor: null };
    obj[1] = channel_id(outer1_2[7]).getUserAuthor(user, channel_id);
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