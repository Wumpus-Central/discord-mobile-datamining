// discord_app/modules/voice_panel/VoicePanelStore.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = fn;
const identity = fn(1244);
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
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
  obj.voicePanelsFullscreen = new Set();
  let set1 = new Set();
  obj.voicePanelsOpened = new Set();
  let set2 = new Set();
  obj.voicePanelsPIP = new Set();
  obj.openChannel = function openChannel(arg0) {
    closure_0 = arg0;
    let result = closure_0(4769).isStageVoicePanelEnabled("voice_panel_store");
    if (!result) {
      channel = channel.getChannel(arg0);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      result = true !== isGuildStageVoiceResult;
    }
    if (result) {
      const channels = dependencyMap().channels;
      if (!channels.has(arg0)) {
        tmp(1249).batchUpdates(() => {
          closure_0((channels) => {
            const obj = {};
            const merged = Object.assign(channels);
            const items = [closure_1_0, ...Array.from(channels.channels)];
            obj.channels = new Set(items);
            const items1 = [closure_1_0, ...Array.from(channels.voicePanelsOpened)];
            const set = new Set(items);
            obj.voicePanelsOpened = new Set(items1);
            return obj;
          });
        });
        const tmpResult = tmp(1249);
      }
    }
    let obj = closure_0(4769);
    tmp = closure_0;
  };
  obj.closeChannel = function closeChannel(channelId) {
    channelId(1249).batchUpdates(() => {
      channelId((arg0) => {
        ({ channels, voicePanelsFullscreen, voicePanelsOpened } = arg0);
        if (!channels.has(channelId)) {
          if (!voicePanelsFullscreen.has(channelId)) {
            let tmp2 = arg0;
          }
          return tmp2;
        }
        let tmp3 = channels;
        if (channels.has(channelId)) {
          const _Set = Set;
          const set = new Set(channels);
          set.delete(channelId);
          tmp3 = set;
        }
        let tmp10 = voicePanelsFullscreen;
        if (voicePanelsFullscreen.has(channelId)) {
          const _Set2 = Set;
          const set1 = new Set(voicePanelsFullscreen);
          set1.delete(channelId);
          tmp10 = set1;
        }
        let tmp17 = voicePanelsOpened;
        if (voicePanelsOpened.has(channelId)) {
          const _Set3 = Set;
          const set2 = new Set(voicePanelsOpened);
          set2.delete(channelId);
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
  obj.isMounted = function isMounted(arg0) {
    const channels = dependencyMap().channels;
    return channels.has(arg0);
  };
  obj.setIsActivityFocused = function setIsActivityFocused(connectedValue) {
    connectedValue(1249).batchUpdates(() => {
      connectedValue((isActivityFocused) => {
        let tmp2 = isActivityFocused;
        if (isActivityFocused.isActivityFocused !== connectedValue) {
          const obj = {};
          const merged = Object.assign(isActivityFocused);
          obj.isActivityFocused = tmp;
          tmp2 = obj;
        }
        return tmp2;
      });
    });
  };
  obj.setChannelPanelFullscreen = function setChannelPanelFullscreen(channelId, lockEnabled) {
    dependencyMap = lockEnabled;
    channelId(1249).batchUpdates(() => {
      channelId((voicePanelsFullscreen) => {
        const set = new Set(voicePanelsFullscreen.voicePanelsFullscreen);
        const hasItem = set.has(channelId);
        if (lockEnabled) {
          if (hasItem) {
            return voicePanelsFullscreen;
          } else {
            set.add(channelId);
          }
        } else if (hasItem) {
          set.delete(channelId);
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
  obj.setChannelPanelOpen = function setChannelPanelOpen(channelId, arg1) {
    dependencyMap = arg1;
    channelId(1249).batchUpdates(() => {
      channelId((channels) => {
        channels = channels.channels;
        if (channels.has(channelId)) {
          const _Set = Set;
          const set = new Set(channels.voicePanelsOpened);
          const hasItem = set.has(channelId);
          if (closure_1_1) {
            if (hasItem) {
              return channels;
            } else {
              set.add(channelId);
            }
          } else if (hasItem) {
            set.delete(channelId);
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
  obj.isChannelOpen = function isChannelOpen(arg0) {
    const voicePanelsOpened = dependencyMap().voicePanelsOpened;
    return voicePanelsOpened.has(arg0);
  };
  obj.setChannelPanelPIP = function setChannelPanelPIP(channelId, arg1) {
    dependencyMap = arg1;
    channelId(1249).batchUpdates(() => {
      channelId((voicePanelsPIP) => {
        const set = new Set(voicePanelsPIP.voicePanelsPIP);
        const hasItem = set.has(channelId);
        if (closure_1_1) {
          if (hasItem) {
            return voicePanelsPIP;
          } else {
            set.add(channelId);
          }
        } else if (hasItem) {
          set.delete(channelId);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/VoicePanelStore.tsx");

export default withEqualityFn;
