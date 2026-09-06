// discord_app/modules/calls/ChannelCallManager.tsx
import SoundpackStore from "../soundpacks/SoundpackStore.tsx";
import CallStore from "../../stores/CallStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import NotificationSettingsStore from "../../stores/NotificationSettingsStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import StreamerModeStore from "../../stores/StreamerModeStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import ChannelRTCStore from "ChannelRTCStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const SoundUtils = fn(9902);
let closure_11 = SoundUtils.createSoundForPack("call_calling", SoundpackStore.getSoundpack());
class ChannelCallManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = _n;
    set = new Set();
    if (_n in applyArgumentsResult) {
      str = "Cannot initialize private field twice.";
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      tmp5 = set;
      applyArgumentsResult[set] = tmp3;
      obj = { GUILD_LOCAL_RING_START: null, GUILD_RING_STOP: null };
      obj.GUILD_LOCAL_RING_START = function GUILD_LOCAL_RING_START(arg0) {
        return applyArgumentsResult.handleGuildRingStart(arg0);
      };
      obj.GUILD_RING_STOP = function GUILD_RING_STOP(arg0) {
        return applyArgumentsResult.handleGuildRingStop(arg0);
      };
      applyArgumentsResult.actions = obj;
      applyArgumentsResult._handleRing = function _handleRing(someResult, guildId) {
        currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(guildId);
        let tmp2 = null != currentClientVoiceChannelId;
        if (tmp2) {
          tmp2 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) >= 2;
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
        closure_11 = applyArgumentsResult(dependencyMap[9]).createSoundForPack(
          "call_calling",
          soundpack.getSoundpack(),
        );
      };
      applyArgumentsResult.handleRingUpdate = function handleRingUpdate() {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        const calls = CallStore.getCalls();
        let someResult = calls.some((ringing) => {
          let tmp = ringing.ringing.length > 0;
          if (tmp) {
            tmp = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null) === ringing.channelId;
          }
          return tmp;
        });
        if (!someResult) {
          someResult = applyArgumentsResult.#n.size > 0;
        }
        applyArgumentsResult._handleRing(someResult, guild_id);
      };
      applyArgumentsResult.handleGuildRingStart = function handleGuildRingStart(arg0) {
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((item) => {
          closure_1_0[closure_2_12].add(item);
        });
        applyArgumentsResult._handleRing(applyArgumentsResult.#n.size > 0, guildId);
      };
      applyArgumentsResult.handleGuildRingStop = function handleGuildRingStop(arg0) {
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((item) => {
          closure_1_0[closure_2_12].delete(item);
        });
        applyArgumentsResult._handleRing(applyArgumentsResult.#n.size > 0, guildId);
      };
      applyArgumentsResult.handleChannelRTCStoreChange = function handleChannelRTCStoreChange() {
        voiceChannelId = voiceChannelId.getVoiceChannelId();
        if (applyArgumentsResult[closure_1_12].size > 0) {
          if (null == voiceChannelId) {
            const _Set = Set;
            const set = new Set();
            obj[tmp2] = set;
            obj._handleRing(obj[tmp2].size > 0, null);
          } else if (null != voiceChannelId) {
            applyArgumentsResult = guildRingingUsers.getGuildRingingUsers(voiceChannelId);
            const _Set2 = Set;
            const items = [];
            HermesBuiltin.arraySpread(obj[tmp2], 0);
            const set1 = new Set(items.filter((item) => !set.has(item)));
            if (set1.size > 0) {
              const item = set1.forEach((item) => {
                set[closure_2_12].delete(item);
              });
              obj._handleRing(obj[tmp2].size > 0, null);
            }
          }
        }
      };
      return applyArgumentsResult;
    }
  }
}
ChannelCallManager.prototype["_initialize"] = function _initialize() {
  const result = new Map().set(CallStore, this.handleRingUpdate);
  const result1 = result.set(NotificationSettingsStore, this.handleRingUpdate);
  const result2 = result1.set(StreamerModeStore, this.handleRingUpdate);
  const result3 = result2.set(VoiceStateStore, this.handleRingUpdate);
  const result4 = result3.set(ChannelRTCStore, this.handleChannelRTCStoreChange);
  this.stores = result4.set(SoundpackStore, this.handleSoundpackUpdate);
};
const channelCallManager = new ChannelCallManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/ChannelCallManager.tsx");

export default channelCallManager;
