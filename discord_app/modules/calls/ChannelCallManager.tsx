// === Module 16170: _initialize ===

// Module 16170 (_initialize)
import importDefaultResult from "Soundpacks";
import callConnect from "callConnect";
import ensureGuildLoaded from "ensureGuildLoaded";
import DesktopNotificationTypes from "DesktopNotificationTypes";
import handleConnectionOpen from "handleConnectionOpen";
import initialize from "initialize";
import updateVoiceState from "updateVoiceState";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import getParticipants from "getParticipants";
import createSoundForPack from "createSoundForPack";
import "initialize";

let require = arg1;
let closure_11 = createSoundForPack.createSoundForPack("call_calling", importDefaultResult.getSoundpack());
// CreatePrivateName (0x9e)
class ChannelCallManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    // PrivateIsIn (0x32)
    if (tmp) {
      str = "Cannot initialize private field twice.";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
      return;
    } else {
      tmp5 = tmp4;
      // AddOwnPrivateBySym (0x64)
      obj = { GUILD_LOCAL_RING_START: null, GUILD_RING_STOP: null };
      obj[0] = function GUILD_LOCAL_RING_START(arg0) {
        return applyArgumentsResult.handleGuildRingStart(arg0);
      };
      obj[1] = function GUILD_RING_STOP(arg0) {
        return applyArgumentsResult.handleGuildRingStop(arg0);
      };
      applyArgumentsResult.actions = obj;
      applyArgumentsResult._handleRing = function _handleRing(someResult, guildId) {
        currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(guildId);
        let tmp2 = null != currentClientVoiceChannelId;
        if (tmp2) {
          tmp2 = getVoiceStatesForGuild.countVoiceStatesForChannel(currentClientVoiceChannelId) >= 2;
        }
        if (null != currentClientVoiceChannelId) {
          if (!tmp2) {
            if (someResult) {
              if (!soundDisabled.isSoundDisabled("call_calling")) {
                if (!disableSounds.disableSounds) {
                  closure_11.loop();
                }
              }
            }
          }
        }
        closure_11.stop();
      };
      applyArgumentsResult.handleSoundpackUpdate = function handleSoundpackUpdate() {
        closure_11.stop();
        closure_11 = applyArgumentsResult(table[9]).createSoundForPack("call_calling", soundpack.getSoundpack());
      };
      applyArgumentsResult.handleRingUpdate = function handleRingUpdate() {
        const channel = outer1_4.getChannel(outer1_6.getVoiceChannelId());
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        const calls = outer1_3.getCalls();
        let someResult = calls.some((ringing) => {
          let tmp = ringing.ringing.length > 0;
          if (tmp) {
            tmp = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null) === ringing.channelId;
          }
          return tmp;
        });
        if (!someResult) {
          // GetOwnPrivateBySym (0x65)
          someResult = outer1_12.size > 0;
        }
        applyArgumentsResult._handleRing(someResult, guild_id);
      };
      applyArgumentsResult.handleGuildRingStart = function handleGuildRingStart(arg0) {
        let guildId;
        let ringing;
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((arg0) => {
          // GetOwnPrivateBySym (0x65)
          obj.add(arg0);
        });
        // GetOwnPrivateBySym (0x65)
        applyArgumentsResult._handleRing(outer1_12.size > 0, guildId);
      };
      applyArgumentsResult.handleGuildRingStop = function handleGuildRingStop(arg0) {
        let guildId;
        let ringing;
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((arg0) => {
          // GetOwnPrivateBySym (0x65)
          obj.delete(arg0);
        });
        // GetOwnPrivateBySym (0x65)
        applyArgumentsResult._handleRing(outer1_12.size > 0, guildId);
      };
      applyArgumentsResult.handleChannelRTCStoreChange = function handleChannelRTCStoreChange() {
        const voiceChannelId = outer1_6.getVoiceChannelId();
        // GetOwnPrivateBySym (0x65)
        if (tmp.size > 0) {
          if (null == voiceChannelId) {
            const _Set = Set;
            new Set();
            // PutOwnPrivateBySym (0x66)
            // GetOwnPrivateBySym (0x65)
            obj._handleRing(tmp4.size > 0, null);
          } else if (null != voiceChannelId) {
            const guildRingingUsers = outer1_10.getGuildRingingUsers(voiceChannelId);
            const _Set2 = Set;
            // GetOwnPrivateBySym (0x65)
            const items = [];
            HermesBuiltin.arraySpread(tmp2, 0);
            const set1 = new Set(items.filter((arg0) => !set.has(arg0)));
            if (set1.size > 0) {
              const forEach = set1.forEach;
              const item = forEach((arg0) => {
                // GetOwnPrivateBySym (0x65)
                obj.delete(arg0);
              });
              // GetOwnPrivateBySym (0x65)
              obj._handleRing(forEach.size > 0, null);
            }
          }
        }
      };
      return applyArgumentsResult;
    }
  }
}
ChannelCallManager.prototype["_initialize"] = function _initialize() {
  const result = new Map().set(callConnect, this.handleRingUpdate);
  const result1 = result.set(DesktopNotificationTypes, this.handleRingUpdate);
  const result2 = result1.set(initialize, this.handleRingUpdate);
  const result3 = result2.set(updateVoiceState, this.handleRingUpdate);
  const result4 = result3.set(getParticipants, this.handleChannelRTCStoreChange);
  this.stores = result4.set(closure_2, this.handleSoundpackUpdate);
};
const channelCallManager = new ChannelCallManager();
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/calls/ChannelCallManager.tsx");

export default channelCallManager;