// === Module 8329: VoiceSessionUtils ===

// Module 8329 (VoiceSessionUtils)
import useMessageAuthor from "useMessageAuthor" /* 4988 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8238 */;
import maybeSortByProbability from "maybeSortByProbability" /* 8330 */;
import noop from "module_19" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7895 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export const getSortedVoiceSessionParticipants = function getSortedVoiceSessionParticipants(message) {
  _require = message;
  const call = message.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce((acc, item) => {
      const user = UserStore.getUser(item);
      let tmp2 = acc;
      if (null != user) {
        tmp2 = acc;
        if (user.id !== author.author.id) {
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
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  return require("maybeSortByProbability").maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
};
export const useSortedVoiceSessionParticipants = function useSortedVoiceSessionParticipants(author) {
  closure_129_0 = author;
  const items = [UserStore];
  const items1 = [author.author.id, author.call];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    const call = stateFromStoresArray.call;
    let participants;
    if (call != null) {
      participants = call.participants;
    }
    if (null != participants) {
      const participants1 = stateFromStoresArray.call.participants;
      const mapped = participants1.map((item) => user.getUser(item));
      const found = mapped.filter((item) => null != item);
      let found1 = found.filter((id) => id.id !== author.author.id);
    } else {
      found1 = [];
    }
    return found1;
  }, items1);
  const obj = stateFromStoresArray(504);
  const items2 = [UserAffinitiesV2Store];
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(items2, () => userAffinitiesMap.getUserAffinitiesMap(), []);
  const items3 = [stateFromStoresArray, stateFromStores];
  return noop.useMemo(() => maybeSortByProbability.maybeSortByProbability(stateFromStoresArray, stateFromStores, "VoiceSessionUtils - participants"), items3);
};
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
  _require = ChannelStore.getChannel(channel_id.channel_id);
  let tmp2 = getHumanizedCallDurationDefault(channel_id);
  const messageAuthor = require("useMessageAuthor").getMessageAuthor(channel_id);
  closure_129_0 = channel_id;
  const call = channel_id.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce((acc, item) => {
      const user = UserStore.getUser(item);
      let tmp2 = acc;
      if (null != user) {
        tmp2 = acc;
        if (user.id !== author.author.id) {
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
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  let obj = require("useMessageAuthor");
  const result = require("maybeSortByProbability").maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
  const mapped = result.map((user) => {
    const obj = { user, messageAuthor: useMessageAuthor.getUserAuthor(user, closure_0) };
    return obj;
  });
  if (null == tmp2) {
    const intl = tmp3(1115).intl;
    const obj2 = { username: messageAuthor.nick, usernameOnClick: tmp3(12).identity };
    let formatToPlainStringResult = intl.formatToPlainString(tmp3(1115).t.HzBfIN, obj2);
  } else {
    const intl2 = tmp3(1115).intl;
    const obj3 = { userCount: mapped.length + 1, username: messageAuthor.nick, usernameOnClick: tmp3(12).identity, username2: null, username2OnClick: null, username3: null, username3OnClick: null, otherCount: null, duration: null };
    const first = mapped[0];
    let nick;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    obj3.username2 = nick;
    obj3.username2OnClick = tmp3(12).identity;
    let nick1;
    if (mapped[1] != null) {
      nick1 = tmp7.messageAuthor.nick;
    }
    obj3.username3 = nick1;
    obj3.username3OnClick = tmp3(12).identity;
    obj3.otherCount = mapped.length - 1;
    obj3.duration = tmp2;
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(1115).t.atbXuX, obj3);
  }
  return formatToPlainStringResult;
};