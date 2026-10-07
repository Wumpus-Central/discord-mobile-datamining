// === Module 16325: useChannelUnreadBadgeState ===

// Module 16325 (useChannelUnreadBadgeState)
import NewChannelsStore from "NewChannelsStore" /* 7056 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;

const require = globalThis.__r;

const require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  _require = id;
  dependencyMap = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id.id) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
    }
    return tmp(504).useStateFromStoresObject(first, tmp6);
  }
  const fn = function u() {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(id.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = ReadStateStore.hasUnread(id.id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = ReadStateStore.getMentionCount(id.id);
    obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(id.id);
    return obj;
  };
  cResult[1] = id.id;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(id.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = ReadStateStore.hasUnread(id.id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = ReadStateStore.getMentionCount(id.id);
    obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(id.id);
    return obj;
  });
});
let closure_5 = tmp3;
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  _require = guild_id;
  const cResult = require("c").c(15);
  const obj = require("c");
  ({ unread, mentionCount, isMentionLowImportance } = closure_5(guild_id, arg1));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NewChannelsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    if (cResult[2] === guild_id.id) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
    const tmpResult = tmp(504);
    const optInEnabledForGuild = tmp(7059).useOptInEnabledForGuild(guild_id.guild_id);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserGuildSettingsStore];
      cResult[5] = items1;
      let tmp11 = items1;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== guild_id) {
      const fn2 = function b() {
        return UserGuildSettingsStore.resolveUnreadSetting(closure_0);
      };
      cResult[6] = guild_id;
      cResult[7] = fn2;
      let tmp13 = fn2;
    } else {
      tmp13 = cResult[7];
    }
    const tmpResult3 = tmp(7059);
    const stateFromStores1 = tmp(504).useStateFromStores(tmp11, tmp13);
    if (cResult[8] === isMentionLowImportance) {
      if (cResult[9] === mentionCount) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === optInEnabledForGuild) {
            if (cResult[12] === stateFromStores1) {
              if (cResult[13] === unread) {
                let tmp15 = cResult[14];
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
    const tmpResult4 = tmp(504);
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
  const tmp4 = closure_5(guild_id, arg1);
}) : ((guild_id, arg1) => {
  _require = guild_id;
  ({ unread, mentionCount, isMentionLowImportance } = closure_5(guild_id, arg1));
  const tmp = closure_5(guild_id, arg1);
  const items = [NewChannelsStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = guild_id);
  const stateFromStores = require("initialize").useStateFromStores(items, () => NewChannelsStore.shouldIndicateNewChannel(guild_id.guild_id, guild_id.id), items1);
  const obj = require("initialize");
  const obj3 = { unread, resolvedUnreadSetting: null, newChannel: null, optInEnabled: null, mentionCount: null, isMentionLowImportance: null };
  const optInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild(guild_id.guild_id);
  const obj2 = require("isOptInEnabled");
  const items2 = [UserGuildSettingsStore];
  obj3.resolvedUnreadSetting = require("initialize").useStateFromStores(items2, () => UserGuildSettingsStore.resolveUnreadSetting(closure_0));
  obj3.newChannel = stateFromStores;
  obj3.optInEnabled = optInEnabledForGuild;
  obj3.mentionCount = mentionCount;
  obj3.isMentionLowImportance = isMentionLowImportance;
  return obj3;
});
export const useBaseChannelUnreadBadgeState = tmp3;