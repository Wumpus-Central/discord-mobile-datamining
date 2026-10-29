// discord_app/modules/pinot/useIsChannelPinotPromotable.tsx
import Constants from "../../Constants.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import PinotEligibility from "PinotEligibility.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const ChannelTypes = Constants.ChannelTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePinotPromotableChannelId(guild_id, arg1) {
      _require = guild_id;
      const cResult = require("c").c(5);
      let obj = require("c");
      const tmp = _require;
      const tmp2 = isPinotAdminEnabled;
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guild_id, arg1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildRoleStore, ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guild_id) {
        if (cResult[2] === isPinotAdminEnabled) {
          let tmp10 = cResult[3];
          let tmp11 = cResult[4];
        }
        return tmp(tmp2[9]).useStateFromStores(first, tmp10, tmp11);
      }
      const fn = function h() {
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
      };
      const items1 = [isPinotAdminEnabled, guild_id];
      cResult[1] = guild_id;
      cResult[2] = isPinotAdminEnabled;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp11 = items1;
      tmp10 = fn;
      const obj2 = require("PinotExperiment");
    }
  : function usePinotPromotableChannelId(guild_id, arg1) {
      _require = guild_id;
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guild_id, arg1);
      let obj = require("PinotExperiment");
      const items = [GuildStore, GuildRoleStore, ChannelStore];
      const items1 = [isPinotAdminEnabled, guild_id];
      return require("initialize").useStateFromStores(
        items,
        () => {
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
        },
        items1,
      );
    };
let closure_7 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/pinot/useIsChannelPinotPromotable.tsx");

export const usePinotPromotableChannelId = tmp2;
export function useIsChannelPinotPromotable(arg0, arg1) {
  return null != closure_7(arg0, arg1);
}
