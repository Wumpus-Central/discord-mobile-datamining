// === Module 9188: useGuildsUserCanStartStageIn ===

// Module 9188 (useGuildsUserCanStartStageIn)
import GuildChannelStore2 from "GuildChannelStore" /* 4507 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let id;

const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp8;
  let tmp9;
  const obj = id(576);
  const cResult = obj.c(4);
  const tmp = id;
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
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function c() {
      let arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
      return arr.reduce((arr, channel) => {
        channel = channel.channel;
        if (channel.isGuildStageVoice()) {
          const channel2 = channel.channel;
          if (closure_1_4 !== undefined) {
            const canResult = channel2.isGuildStageVoice() && closure_1_4.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
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
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
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
  const obj = id(504);
  return obj.useStateFromStoresArray(items, () => {
    let arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    return arr.reduce((arr, channel) => {
      channel = channel.channel;
      if (channel.isGuildStageVoice()) {
        const channel2 = channel.channel;
        if (closure_1_4 !== undefined) {
          const canResult = channel2.isGuildStageVoice() && closure_1_4.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
          if (canResult) {
            arr = arr.push(channel);
          }
        }
      }
      return arr;
    }, []);
  }, items1);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = tmp2;