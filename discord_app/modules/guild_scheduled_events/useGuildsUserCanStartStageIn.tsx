// === Module 9188: useGuildsUserCanStartStageIn ===

// Module 9188 (useGuildsUserCanStartStageIn)
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(4507).GUILD_VOCAL_CHANNELS_KEY;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = id(576).c(4);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function c() {
      return GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].reduce((arr, channel) => {
        channel = channel.channel;
        if (channel.isGuildStageVoice()) {
          const channel2 = channel.channel;
          if (closure_1_4 !== undefined) {
            let canResult = channel2.isGuildStageVoice();
            if (canResult) {
              canResult = closure_1_4.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
            }
            if (canResult) {
              arr = arr.push(channel);
            }
          }
        }
        return arr;
      }, []);
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = id(576);
  return id(504).useStateFromStoresArray(first, tmp8, tmp9);
}) : ((id) => {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = null;
  }
  const items = [GuildChannelStore, PermissionStore];
  const items1 = [id];
  return id(504).useStateFromStoresArray(items, () => GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      if (closure_1_4 !== undefined) {
        let canResult = channel2.isGuildStageVoice();
        if (canResult) {
          canResult = closure_1_4.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
        }
        if (canResult) {
          arr = arr.push(channel);
        }
      }
    }
    return arr;
  }, []), items1);
});