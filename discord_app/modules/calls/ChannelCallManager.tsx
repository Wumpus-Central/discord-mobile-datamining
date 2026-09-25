// discord_app/modules/calls/ChannelCallManager.tsx
import SoundpackStore from "../soundpacks/SoundpackStore.tsx";
import CallStore from "../../stores/CallStore.tsx";
import NotificationSettingsStore from "../../stores/NotificationSettingsStore.tsx";
import StreamerModeStore from "../../stores/StreamerModeStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const SoundUtils = fn(9346);
let closure_8 = SoundUtils.createSoundForPack("call_calling", SoundpackStore.getSoundpack());
class ChannelCallManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._handleRing = function _handleRing(arg0) {
      currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null);
      let tmp2 = null != currentClientVoiceChannelId;
      if (tmp2) {
        tmp2 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) >= 2;
      }
      if (null != currentClientVoiceChannelId) {
        if (!tmp2) {
          if (arg0) {
            if (!soundDisabled.isSoundDisabled("call_calling")) {
              if (!disableSounds.disableSounds) {
                closure_8.loop();
              }
            }
          }
        }
      }
      closure_8.stop();
    };
    applyArgumentsResult.handleSoundpackUpdate = function handleSoundpackUpdate() {
      closure_8.stop();
      closure_8 = applyArgumentsResult(dependencyMap[6]).createSoundForPack("call_calling", soundpack.getSoundpack());
    };
    applyArgumentsResult.handleRingUpdate = function handleRingUpdate() {
      const calls = CallStore.getCalls();
      applyArgumentsResult._handleRing(
        calls.some((ringing) => {
          let tmp = ringing.ringing.length > 0;
          if (tmp) {
            tmp = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null) === ringing.channelId;
          }
          return tmp;
        }),
      );
    };
    return applyArgumentsResult;
  }
}
ChannelCallManager.prototype["_initialize"] = function _initialize() {
  const result = new Map().set(CallStore, this.handleRingUpdate);
  const result1 = result.set(NotificationSettingsStore, this.handleRingUpdate);
  const result2 = result1.set(StreamerModeStore, this.handleRingUpdate);
  const result3 = result2.set(VoiceStateStore, this.handleRingUpdate);
  this.stores = result3.set(SoundpackStore, this.handleSoundpackUpdate);
};
const channelCallManager = new ChannelCallManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/ChannelCallManager.tsx");

export default channelCallManager;
