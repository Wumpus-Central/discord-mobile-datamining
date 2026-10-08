// === Module 8073: VoiceSessionUtils ===

// Module 8073 (VoiceSessionUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useMessageAuthor from "useMessageAuthor" /* 5623 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7971 */;
import maybeSortByProbability from "maybeSortByProbability" /* 8074 */;
import noop from "module_19" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7336 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceSessionParticipants(author) {
  _require = author;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === author.author.id) {
    if (cResult[2] === author.call) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStoresArray(first, tmp6, tmp7);
  }
  const fn = function s() {
    const call = author.call;
    let participants;
    if (call != null) {
      participants = call.participants;
    }
    if (null != participants) {
      const participants1 = author.call.participants;
      const mapped = participants1.map((item) => user.getUser(item));
      const found = mapped.filter((item) => null != item);
      let found1 = found.filter((id) => id.id !== author.author.id);
    } else {
      found1 = [];
    }
    return found1;
  };
  const items1 = [author.author.id, author.call];
  cResult[1] = author.author.id;
  cResult[2] = author.call;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useVoiceSessionParticipants(author) {
  _require = author;
  const items = [UserStore];
  const items1 = [author.author.id, author.call];
  return require("initialize").useStateFromStoresArray(items, () => {
    const call = author.call;
    let participants;
    if (call != null) {
      participants = call.participants;
    }
    if (null != participants) {
      const participants1 = author.call.participants;
      const mapped = participants1.map((item) => user.getUser(item));
      const found = mapped.filter((item) => null != item);
      let found1 = found.filter((id) => id.id !== author.author.id);
    } else {
      found1 = [];
    }
    return found1;
  }, items1);
});
ReactCompilerGating = fn(558);
function getSortedVoiceSessionParticipants(message) {
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
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export { getSortedVoiceSessionParticipants };
export const useSortedVoiceSessionParticipants = ReactCompilerGating.isReactCompilerEnabled() ? (function useSortedVoiceSessionParticipants(arg0) {
  const cResult = c.c(6);
  const tmp4 = closure_7(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserAffinitiesV2Store];
    const fn = function o() {
      return userAffinitiesMap.getUserAffinitiesMap();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = fn;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6, tmp7);
  if (cResult[3] === tmp4) {
    if (cResult[4] === stateFromStores) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmpResult = initialize;
  const result = maybeSortByProbability.maybeSortByProbability(tmp4, stateFromStores, "VoiceSessionUtils - participants");
  cResult[3] = tmp4;
  cResult[4] = stateFromStores;
  cResult[5] = result;
  tmp10 = result;
  const tmpResult2 = maybeSortByProbability;
}) : (function useSortedVoiceSessionParticipants(arg0) {
  const tmp = closure_7(arg0);
  _require = tmp;
  const items = [UserAffinitiesV2Store];
  const stateFromStores = require("initialize").useStateFromStores(items, () => userAffinitiesMap.getUserAffinitiesMap(), []);
  const items1 = [tmp, stateFromStores];
  return noop.useMemo(() => maybeSortByProbability.maybeSortByProbability(closure_0, stateFromStores, "VoiceSessionUtils - participants"), items1);
});
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
    const intl = tmp3(1126).intl;
    const obj2 = { username: messageAuthor.nick, usernameOnClick: tmp3(12).identity };
    let formatToPlainStringResult = intl.formatToPlainString(tmp3(1126).t.HzBfIN, obj2);
  } else {
    const intl2 = tmp3(1126).intl;
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
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(1126).t.atbXuX, obj3);
  }
  return formatToPlainStringResult;
};