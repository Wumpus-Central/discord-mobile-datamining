// === Module 17662: useChannelsAllowedToUnlink ===

// Module 17662 (useChannelsAllowedToUnlink)
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(4507).GUILD_SELECTABLE_CHANNELS_KEY;
const ReactCompilerGating = fn(558);
function getChannelsAllowedToUnlink(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildChannelStore;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = PermissionStore;
  }
  closure_0 = tmp;
  if (null == arg0) {
    let items = [];
  } else {
    const found = obj.getChannels(arg0)[closure_3].filter((channel) => closure_0(dependencyMap[2]).canUnlinkLobbyChannel(channel.channel, closure_0));
    items = found.map((channel) => channel.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export { getChannelsAllowedToUnlink };
export const useChannelsAllowedToUnlink = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore, GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (GuildChannelStore !== undefined) {
        if (PermissionStore !== undefined) {
          closure_0 = PermissionStore;
          if (null == tmp) {
            let items = [];
          } else {
            const found = GuildChannelStore.getChannels(tmp)[closure_3].filter((channel) => closure_0(dependencyMap[2]).canUnlinkLobbyChannel(channel.channel, closure_0));
            items = found.map((channel) => channel.channel);
            const arr = GuildChannelStore.getChannels(tmp)[closure_3];
          }
          return items;
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  let items = [PermissionStore, GuildChannelStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (GuildChannelStore !== undefined) {
      if (PermissionStore !== undefined) {
        closure_0 = PermissionStore;
        if (null == tmp) {
          let items = [];
        } else {
          const found = GuildChannelStore.getChannels(tmp)[closure_3].filter((channel) => closure_0(dependencyMap[2]).canUnlinkLobbyChannel(channel.channel, closure_0));
          items = found.map((channel) => channel.channel);
          const arr = GuildChannelStore.getChannels(tmp)[closure_3];
        }
        return items;
      }
    }
  });
});