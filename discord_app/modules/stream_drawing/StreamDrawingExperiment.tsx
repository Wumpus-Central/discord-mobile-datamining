// discord_app/modules/stream_drawing/StreamDrawingExperiment.tsx
import StreamDrawingChannel from "StreamDrawingChannel.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1071).EMPTY_STRING_SNOWFLAKE_ID;
let ApexExperiment = fn(1450);
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-11-stream-drawing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
ApexExperiment = fn(1450);
const apexExperiment1 = ApexExperiment.createApexExperiment({
  name: "2026-11-stream-drawing-guild",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stream_drawing/StreamDrawingExperiment.tsx");

export const StreamDrawingExperiment = apexExperiment;
export const StreamDrawingGuildExperiment = apexExperiment1;
export function useIsStreamDrawingEnabled(arg0, location) {
  _require = arg0;
  items = [ChannelStore, GuildStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      const channel = ChannelStore.getChannel(closure_0);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj = { guildId: guild_id, supported: null };
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      obj.supported = StreamDrawingChannel.supportsStreamDrawing(channel, GuildStore.getGuild(guild_id1));
      return obj;
    },
    items1,
  );
  ({ guildId, supported } = stateFromStoresObject);
  const config = apexExperiment.useConfig({ location }, { autoTrackExposure: supported });
  if (supported) {
    let enabled = config.enabled;
    if (!enabled) {
      enabled = null != guildId && tmp5.enabled;
      const tmp6 = null != guildId && tmp5.enabled;
    }
    supported = enabled;
  }
  return supported;
}
export function getIsStreamDrawingEnabled(channelId, LocalVoiceStateManager, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (obj.supportsStreamDrawing(channel, GuildStore.getGuild(guild_id))) {
    const obj2 = { location: LocalVoiceStateManager };
    const obj3 = { autoTrackExposure: flag };
    const config = apexExperiment.getConfig(obj2, obj3);
    if (null != guild_id) {
      const obj4 = { guildId: guild_id, location: LocalVoiceStateManager };
      const obj5 = { autoTrackExposure: flag };
      const config1 = apexExperiment1.getConfig(obj4, obj5);
    }
    let enabled = config.enabled;
    if (!enabled) {
      let enabled1;
      if (config1 != null) {
        enabled1 = config1.enabled;
      }
      enabled = true === enabled1;
    }
    return enabled;
  } else {
    return false;
  }
  obj = StreamDrawingChannel;
}
