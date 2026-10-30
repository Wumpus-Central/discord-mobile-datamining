// === Module 11295: useIsChannelPinotPromotable ===

// Module 11295 (useIsChannelPinotPromotable)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import PinotEligibility from "PinotEligibility" /* 11297 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/pinot/useIsChannelPinotPromotable.tsx");

export function usePinotPromotableChannelId(guild_id, mobile_channel_header_label) {
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guild_id, mobile_channel_header_label);
  const obj = require("PinotExperiment");
  const items = [GuildStore, GuildRoleStore, ChannelStore];
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
export function useIsChannelPinotPromotable(guild_id, location) {
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guild_id, location);
  let obj = require("PinotExperiment");
  const items = [GuildStore, GuildRoleStore, ChannelStore];
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