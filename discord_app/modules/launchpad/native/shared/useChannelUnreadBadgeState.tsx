// === Module 16285: useChannelUnreadBadgeState ===

// Module 16285 (useChannelUnreadBadgeState)
import NewChannelsStore from "NewChannelsStore" /* 7043 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  let first;
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(15);
  ({ unread, mentionCount, isMentionLowImportance } = closure_5(guild_id, arg1));
  closure_5(guild_id, arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NewChannelsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    let tmp7;
    let tmp8;
    let tmp11;
    let tmp13;
    if (cResult[2] === guild_id.id) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    const tmpResult3 = require("isOptInEnabled");
    const optInEnabledForGuild = tmpResult3.useOptInEnabledForGuild(guild_id.guild_id);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserGuildSettingsStore];
      cResult[5] = items1;
      tmp11 = items1;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== guild_id) {
      const fn2 = function b() {
        return UserGuildSettingsStore.resolveUnreadSetting(guild_id);
      };
      cResult[6] = guild_id;
      cResult[7] = fn2;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[7];
    }
    const tmpResult4 = require("get initialized");
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp13);
    if (cResult[8] === isMentionLowImportance) {
      if (cResult[9] === mentionCount) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === optInEnabledForGuild) {
            if (cResult[12] === stateFromStores1) {
              let tmp15;
              if (cResult[13] === unread) {
                tmp15 = cResult[14];
              }
              return tmp15;
            }
          }
        }
      }
    }
    const obj2 = { unread, resolvedUnreadSetting: stateFromStores1, newChannel: stateFromStores, optInEnabled: optInEnabledForGuild, mentionCount, isMentionLowImportance };
    cResult[8] = isMentionLowImportance;
    cResult[9] = mentionCount;
    cResult[10] = stateFromStores;
    cResult[11] = optInEnabledForGuild;
    cResult[12] = stateFromStores1;
    cResult[13] = unread;
    cResult[14] = obj2;
    tmp15 = obj2;
  }
  const fn = function c() {
    return NewChannelsStore.shouldIndicateNewChannel(guild_id.guild_id, guild_id.id);
  };
  const items2 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = guild_id);
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.id;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp8 = items2;
  tmp7 = fn;
}) : ((guild_id, arg1) => {
  let isMentionLowImportance;
  let items2;
  let mentionCount;
  let obj4;
  let optInEnabledForGuild;
  let unread;
  _require = guild_id;
  ({ unread, mentionCount, isMentionLowImportance } = closure_5(guild_id, arg1));
  closure_5(guild_id, arg1);
  const items = [NewChannelsStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = guild_id);
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => NewChannelsStore.shouldIndicateNewChannel(guild_id.guild_id, guild_id.id), items1);
  const obj3 = { unread, resolvedUnreadSetting: obj4.useStateFromStores(items2, () => UserGuildSettingsStore.resolveUnreadSetting(guild_id)), newChannel: stateFromStores, optInEnabled: optInEnabledForGuild, mentionCount, isMentionLowImportance };
  const obj2 = require("isOptInEnabled");
  optInEnabledForGuild = obj2.useOptInEnabledForGuild(guild_id.guild_id);
  items2 = [UserGuildSettingsStore];
  obj4 = require("get initialized");
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let closure_1;
  let first;
  _require = id;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id.id) {
    let tmp6;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresObject(first, tmp6);
  }
  const fn = function u() {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(id.id), unread: !closure_1 && ReadStateStore.hasUnread(id.id), mentionCount: ReadStateStore.getMentionCount(id.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id.id) };
    !closure_1 && ReadStateStore.hasUnread(id.id);
    return obj;
  };
  cResult[1] = id.id;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_1;
  let id;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(id.id), unread: !closure_1 && ReadStateStore.hasUnread(id.id), mentionCount: ReadStateStore.getMentionCount(id.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id.id) };
    !closure_1 && ReadStateStore.hasUnread(id.id);
    return obj;
  });
});
let closure_5 = tmp3;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = tmp2;
export const useBaseChannelUnreadBadgeState = tmp3;