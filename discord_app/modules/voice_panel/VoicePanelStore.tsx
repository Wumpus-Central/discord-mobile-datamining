// discord_app/modules/voice_panel/VoicePanelStore.tsx
import closure_2 from "../../stores/ChannelStore.tsx";
import identity from "../../../_runtime/00700_identity.js";

const require = arg1;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = {
    channels: new Set(),
    isActivityFocused: false,
    isVoicePanelFullscreen() {
      return dependencyMap().voicePanelsFullscreen.size > 0;
    },
    isAnyVoicePanelOpen() {
      return dependencyMap().voicePanelsOpened.size > 0;
    },
    voicePanelsFullscreen: null,
    voicePanelsOpened: null,
    voicePanelsPIP: null,
    openChannel: null,
    closeChannel: null,
    isMounted: null,
    setIsActivityFocused: null,
    setChannelPanelFullscreen: null,
    setChannelPanelOpen: null,
    isChannelOpen: null,
    setChannelPanelPIP: null,
  };
  let set = new Set();
  obj[4] = new Set();
  let set1 = new Set();
  obj[5] = new Set();
  let set2 = new Set();
  obj[6] = new Set();
  obj[7] = function openChannel(arg0) {
    const callback = arg0;
    let result = callback(4729).isStageVoicePanelEnabled("voice_panel_store");
    if (!result) {
      const channel = closure_1_2.getChannel(arg0);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      result = true !== isGuildStageVoiceResult;
    }
    if (result) {
      const channels = dependencyMap().channels;
      if (!channels.has(arg0)) {
        callback(705).batchUpdates(() => {
          callback((channels) => {
            const obj = {};
            const merged = Object.assign(channels);
            const items = [closure_0, ...Array.from(channels.channels)];
            obj.channels = new Set(items);
            const items1 = [closure_0, ...Array.from(channels.voicePanelsOpened)];
            const set = new Set(items);
            obj.voicePanelsOpened = new Set(items1);
            return obj;
          });
        });
        const tmpResult = callback(705);
      }
    }
  };
  obj[8] = function closeChannel(channelId) {
    const callback = channelId;
    callback(705).batchUpdates(() => {
      channelId((arg0) => {
        ({ channels, voicePanelsFullscreen, voicePanelsOpened } = arg0);
        if (!channels.has(closure_0)) {
          if (!voicePanelsFullscreen.has(tmp)) {
            let tmp2 = arg0;
          }
          return tmp2;
        }
        let tmp3 = channels;
        if (channels.has(closure_0)) {
          const _Set = Set;
          const set = new Set(channels);
          set.delete(tmp);
          tmp3 = set;
        }
        let tmp10 = voicePanelsFullscreen;
        if (voicePanelsFullscreen.has(closure_0)) {
          const _Set2 = Set;
          const set1 = new Set(voicePanelsFullscreen);
          set1.delete(tmp);
          tmp10 = set1;
        }
        let tmp17 = voicePanelsOpened;
        if (voicePanelsOpened.has(closure_0)) {
          const _Set3 = Set;
          const set2 = new Set(voicePanelsOpened);
          set2.delete(tmp);
          tmp17 = set2;
        }
        const obj = {};
        const merged = Object.assign(arg0);
        obj.channels = tmp3;
        obj.voicePanelsFullscreen = tmp10;
        obj.voicePanelsOpened = tmp17;
        tmp2 = obj;
      });
    });
  };
  obj[9] = function isMounted(arg0) {
    const channels = dependencyMap().channels;
    return channels.has(arg0);
  };
  obj[10] = function setIsActivityFocused(arg0) {
    const callback = arg0;
    callback(705).batchUpdates(() => {
      callback((isActivityFocused) => {
        let tmp2 = isActivityFocused;
        if (isActivityFocused.isActivityFocused !== closure_0) {
          const obj = {};
          const merged = Object.assign(isActivityFocused);
          obj.isActivityFocused = tmp;
          tmp2 = obj;
        }
        return tmp2;
      });
    });
  };
  obj[11] = function setChannelPanelFullscreen(closure_0, closure_02) {
    const callback = closure_0;
    dependencyMap = closure_02;
    callback(705).batchUpdates(() => {
      callback((voicePanelsFullscreen) => {
        const set = new Set(voicePanelsFullscreen.voicePanelsFullscreen);
        const hasItem = set.has(closure_0);
        if (closure_1) {
          if (hasItem) {
            return voicePanelsFullscreen;
          } else {
            set.add(tmp);
          }
        } else if (hasItem) {
          set.delete(tmp);
        } else {
          return voicePanelsFullscreen;
        }
        const obj = {};
        const merged = Object.assign(voicePanelsFullscreen);
        obj.voicePanelsFullscreen = set;
        return obj;
      });
    });
  };
  obj[12] = function setChannelPanelOpen(scrollPosition, arg1) {
    const callback = scrollPosition;
    dependencyMap = arg1;
    callback(705).batchUpdates(() => {
      scrollPosition((channels) => {
        channels = channels.channels;
        if (channels.has(closure_0)) {
          const _Set = Set;
          const set = new Set(channels.voicePanelsOpened);
          const hasItem = set.has(tmp);
          if (closure_1) {
            if (hasItem) {
              return channels;
            } else {
              set.add(tmp);
            }
          } else if (hasItem) {
            set.delete(tmp);
          } else {
            return channels;
          }
          const obj = {};
          const merged = Object.assign(channels);
          obj.voicePanelsOpened = set;
          return obj;
        } else {
          return channels;
        }
      });
    });
  };
  obj[13] = function isChannelOpen(closure_0) {
    const voicePanelsOpened = dependencyMap().voicePanelsOpened;
    return voicePanelsOpened.has(closure_0);
  };
  obj[14] = function setChannelPanelPIP(scrollPosition, arg1) {
    const callback = scrollPosition;
    dependencyMap = arg1;
    callback(705).batchUpdates(() => {
      scrollPosition((voicePanelsPIP) => {
        const set = new Set(voicePanelsPIP.voicePanelsPIP);
        const hasItem = set.has(closure_0);
        if (closure_1) {
          if (hasItem) {
            return voicePanelsPIP;
          } else {
            set.add(tmp);
          }
        } else if (hasItem) {
          set.delete(tmp);
        } else {
          return voicePanelsPIP;
        }
        const obj = {};
        const merged = Object.assign(voicePanelsPIP);
        obj.voicePanelsPIP = set;
        return obj;
      });
    });
  };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/voice_panel/VoicePanelStore.tsx");

export default withEqualityFn;
