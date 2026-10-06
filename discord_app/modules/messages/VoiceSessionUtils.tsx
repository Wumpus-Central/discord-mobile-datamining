// discord_app/modules/messages/VoiceSessionUtils.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import useMessageAuthor from "useMessageAuthor.tsx";
import getHumanizedCallDurationDefault from "getHumanizedCallDuration.tsx";
import maybeSortByProbability from "../user_affinities/maybeSortByProbability.tsx";
import react from "../../../_runtime/00019_react.js";
import UserAffinitiesV2Store from "../user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const f138522 = (acc, item) => {
  user = user.getUser(item);
  let tmp3 = acc;
  if (null != user) {
    tmp3 = acc;
    if (user.id !== author.author.id) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, acc, 0)] = user;
      tmp3 = items;
    }
  }
  return tmp3;
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (author) => {
      let first;
      _require = author;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === author.author.id) {
        let tmp6;
        let tmp7;
        if (cResult[2] === author.call) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
      }
      const fn = function s() {
        let found1;
        let user;
        const call = author.call;
        let participants;
        if (call != null) {
          participants = call.participants;
        }
        if (null != participants) {
          const participants1 = author.call.participants;
          const mapped = participants1.map((item) => user.getUser(item));
          const found = mapped.filter((item) => null != item);
          found1 = found.filter((id) => id.id !== author.author.id);
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
    }
  : (author) => {
      _require = author;
      const items = [UserStore];
      const items1 = [author.author.id, author.call];
      const obj = require("get initialized");
      return obj.useStateFromStoresArray(
        items,
        () => {
          let found1;
          let user;
          const call = author.call;
          let participants;
          if (call != null) {
            participants = call.participants;
          }
          if (null != participants) {
            const participants1 = author.call.participants;
            const mapped = participants1.map((item) => user.getUser(item));
            const found = mapped.filter((item) => null != item);
            found1 = found.filter((id) => id.id !== author.author.id);
          } else {
            found1 = [];
          }
          return found1;
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp5;
      let tmp6;
      let tmp7;
      let userAffinitiesMap;
      const obj = react2;
      const cResult = obj.c(6);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
      if (cResult[3] === tmp4) {
        let tmp10;
        if (cResult[4] === stateFromStores) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmpResult2 = maybeSortByProbability;
      const result = tmpResult2.maybeSortByProbability(tmp4, stateFromStores, "VoiceSessionUtils - participants");
      cResult[3] = tmp4;
      cResult[4] = stateFromStores;
      cResult[5] = result;
      tmp10 = result;
    }
  : (arg0) => {
      let closure_0;
      let userAffinitiesMap;
      const tmp = closure_7(arg0);
      _require = tmp;
      let obj = require("get initialized");
      const items = [UserAffinitiesV2Store];
      const stateFromStores = obj.useStateFromStores(items, () => userAffinitiesMap.getUserAffinitiesMap(), []);
      const items1 = [tmp, stateFromStores];
      return react.useMemo(() => {
        const obj = maybeSortByProbability;
        return obj.maybeSortByProbability(closure_0, stateFromStores, "VoiceSessionUtils - participants");
      }, items1);
    };
function getSortedVoiceSessionParticipants(message) {
  _require = message;
  const call = message.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce(f138522, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  const obj = require("maybeSortByProbability");
  return obj.maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
}
let result = size.fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export { getSortedVoiceSessionParticipants };
export const useSortedVoiceSessionParticipants = tmp2;
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
  let closure_0;
  let formatToPlainStringResult;
  let nick;
  let nick1;
  _require = ChannelStore.getChannel(channel_id.channel_id);
  const tmp2 = getHumanizedCallDurationDefault(channel_id);
  let tmp3 = _require;
  let obj = require("useMessageAuthor");
  const messageAuthor = obj.getMessageAuthor(channel_id);
  _require = channel_id;
  const call = channel_id.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce(f138522, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  const tmp3Result = tmp3(7753);
  const result = tmp3Result.maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
  const mapped = result.map((user) => {
    let obj2;
    const obj = { user, messageAuthor: obj2.getUserAuthor(user, closure_0) };
    obj2 = useMessageAuthor;
    return obj;
  });
  if (null == tmp2) {
    const intl = tmp3(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    let obj2 = { username: messageAuthor.nick, usernameOnClick: tmp3(12).identity };
    const HzBfIN = tmp3(1126).t.HzBfIN;
    formatToPlainStringResult = formatToPlainString(HzBfIN, obj2);
  } else {
    const intl2 = tmp3(1126).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj3 = {
      userCount: mapped.length + 1,
      username: messageAuthor.nick,
      usernameOnClick: tmp3(12).identity,
      username2: nick,
      username2OnClick: tmp3(12).identity,
      username3: nick1,
      username3OnClick: tmp3(12).identity,
      otherCount: mapped.length - 1,
      duration: tmp2,
    };
    const atbXuX = tmp3(1126).t.atbXuX;
    const first = mapped[0];
    nick = undefined;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    nick1 = undefined;
    if (mapped[1] != null) {
      nick1 = tmp7.messageAuthor.nick;
    }
    formatToPlainStringResult = formatToPlainString2(atbXuX, obj3);
  }
  return formatToPlainStringResult;
};
