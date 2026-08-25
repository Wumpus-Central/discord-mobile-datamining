// === Module 16669: _initialize ===

// Module 16669 (_initialize)
import initializeDefault from "initialize" /* 5367 */;
import importDefaultResult from "Soundpacks" /* 9936 */;
import closure_3 from "callConnect" /* 5103 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "DesktopNotificationTypes" /* 9909 */;
import closure_6 from "handleConnectionOpen" /* 1981 */;
import closure_7 from "initialize" /* 4225 */;
import closure_8 from "updateVoiceState" /* 4399 */;
import closure_9 from "getVoiceStatesForGuild" /* 4455 */;
import closure_10 from "getParticipants" /* 4396 */;
import createSoundForPack from "createSoundForPack" /* 9935 */;

let require = arg1;
let closure_11 = createSoundForPack.createSoundForPack("call_calling", importDefaultResult.getSoundpack());
initializeDefault;
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
          tmp2 = closure_9.countVoiceStatesForChannel(currentClientVoiceChannelId) >= 2;
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
        const channel = closure_1_4.getChannel(closure_1_6.getVoiceChannelId());
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        const calls = closure_1_3.getCalls();
        let someResult = calls.some((ringing) => {
          let tmp = ringing.ringing.length > 0;
          if (tmp) {
            tmp = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null) === ringing.channelId;
          }
          return tmp;
        });
        if (!someResult) {
          // GetOwnPrivateBySym (0x65)
          someResult = closure_1_12.size > 0;
        }
        applyArgumentsResult._handleRing(someResult, guild_id);
      };
      applyArgumentsResult.handleGuildRingStart = function handleGuildRingStart(arg0) {
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((arg0) => {
          // GetOwnPrivateBySym (0x65)
          obj.add(arg0);
        });
        // GetOwnPrivateBySym (0x65)
        applyArgumentsResult._handleRing(closure_1_12.size > 0, guildId);
      };
      applyArgumentsResult.handleGuildRingStop = function handleGuildRingStop(arg0) {
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((arg0) => {
          // GetOwnPrivateBySym (0x65)
          obj.delete(arg0);
        });
        // GetOwnPrivateBySym (0x65)
        applyArgumentsResult._handleRing(closure_1_12.size > 0, guildId);
      };
      applyArgumentsResult.handleChannelRTCStoreChange = function handleChannelRTCStoreChange() {
        const voiceChannelId = closure_1_6.getVoiceChannelId();
        // GetOwnPrivateBySym (0x65)
        if (tmp.size > 0) {
          if (null == voiceChannelId) {
            const _Set = Set;
            new Set();
            // PutOwnPrivateBySym (0x66)
            // GetOwnPrivateBySym (0x65)
            obj._handleRing(tmp4.size > 0, null);
          } else if (null != voiceChannelId) {
            const guildRingingUsers = closure_1_10.getGuildRingingUsers(voiceChannelId);
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
  const result = new Map().set(closure_3, this.handleRingUpdate);
  const result1 = result.set(closure_5, this.handleRingUpdate);
  const result2 = result1.set(closure_7, this.handleRingUpdate);
  const result3 = result2.set(closure_8, this.handleRingUpdate);
  const result4 = result3.set(closure_10, this.handleChannelRTCStoreChange);
  this.stores = result4.set(closure_2, this.handleSoundpackUpdate);
};
const channelCallManager = new ChannelCallManager();
let result = require("set").fileFinishedImporting("modules/calls/ChannelCallManager.tsx");

export default channelCallManager;