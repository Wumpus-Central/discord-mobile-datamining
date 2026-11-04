// === Module 11508: useIsChannelPinotPromotable ===

// Module 11508 (useIsChannelPinotPromotable)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4994 */;
import PinotEligibility from "PinotEligibility" /* 9198 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import GuildStore from "GuildStore" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/pinot/useIsChannelPinotPromotable.tsx");

export function usePinotPromotableChannelId(guild_id, mobile_member_coachmark) {
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guild_id, mobile_member_coachmark);
  const obj = require("PinotExperiment");
  items = [GuildStore, GuildRoleStore, ChannelStore];
  const items1 = [isPinotAdminEnabled, guild_id];
  return require("initialize").useStateFromStores(items, () => {
    if (isPinotAdminEnabled) {
      if (null != guild_id) {
        if (guild_id.type !== ChannelTypes.PRIVATE_THREAD) {
          let channel = guild_id;
          if (THREAD_CHANNEL_TYPES.has(guild_id.type)) {
            channel = ChannelStore.getChannel(guild_id.parent_id);
          }
          let id = null;
          if (null != channel) {
            id = null;
            if (obj.isChannelPinotPromotable(GuildStore.getGuild(guild_id.guild_id), channel)) {
              id = channel.id;
            }
            obj = PinotEligibility;
          }
          return id;
        }
      }
    }
    return null;
  }, items1);
}
export function useIsChannelPinotPromotable(guild_id, create_guild_channel) {
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guild_id, create_guild_channel);
  let obj = require("PinotExperiment");
  items = [GuildStore, GuildRoleStore, ChannelStore];
  const items1 = [isPinotAdminEnabled, guild_id];
  return null != require("initialize").useStateFromStores(items, () => {
    if (isPinotAdminEnabled) {
      if (null != guild_id) {
        if (guild_id.type !== ChannelTypes.PRIVATE_THREAD) {
          let channel = guild_id;
          if (THREAD_CHANNEL_TYPES.has(guild_id.type)) {
            channel = ChannelStore.getChannel(guild_id.parent_id);
          }
          let id = null;
          if (null != channel) {
            id = null;
            if (obj.isChannelPinotPromotable(GuildStore.getGuild(guild_id.guild_id), channel)) {
              id = channel.id;
            }
            obj = PinotEligibility;
          }
          return id;
        }
      }
    }
    return null;
  }, items1);
}