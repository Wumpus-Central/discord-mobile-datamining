// discord_app/modules/voice_panel/VoicePanelStore.tsx
import identity from "../../../_runtime/metro/01254__.js";
import size from "../../../_runtime/metro/00002__.js";

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
    voicePanelsWithDock: null,
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
    setChannelPanelWithDock: null,
  };
  let set = new Set();
  obj.voicePanelsWithDock = new Set();
  let set1 = new Set();
  obj.voicePanelsFullscreen = new Set();
  let set2 = new Set();
  obj.voicePanelsOpened = new Set();
  const set3 = new Set();
  obj.voicePanelsPIP = new Set();
  obj.openChannel = function openChannel(arg0) {
    closure_0 = arg0;
    const channels = dependencyMap().channels;
    if (!channels.has(arg0)) {
      closure_0(1259).batchUpdates(() => {
        closure_0((channels) => {
          const obj = {};
          const merged = Object.assign(channels);
          items = [closure_1_0, ...Array.from(channels.channels)];
          obj.channels = new Set(items);
          const items1 = [closure_1_0, ...Array.from(channels.voicePanelsOpened)];
          const set = new Set(items);
          obj.voicePanelsOpened = new Set(items1);
          return obj;
        });
      });
      let obj = closure_0(1259);
    }
  };
  obj.closeChannel = function closeChannel(channelId) {
    channelId(1259).batchUpdates(() => {
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
    connectedValue(1259).batchUpdates(() => {
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
  obj.setChannelPanelFullscreen = function setChannelPanelFullscreen(c0, lockEnabled) {
    dependencyMap = lockEnabled;
    c0(1259).batchUpdates(() => {
      c0((voicePanelsFullscreen) => {
        const set = new Set(voicePanelsFullscreen.voicePanelsFullscreen);
        const hasItem = set.has(closure_1_0);
        if (lockEnabled) {
          if (hasItem) {
            return voicePanelsFullscreen;
          } else {
            set.add(closure_1_0);
          }
        } else if (hasItem) {
          set.delete(closure_1_0);
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
  obj.setChannelPanelOpen = function setChannelPanelOpen(c0, arg1) {
    dependencyMap = arg1;
    c0(1259).batchUpdates(() => {
      c0((channels) => {
        channels = channels.channels;
        if (channels.has(closure_1_0)) {
          const _Set = Set;
          const set = new Set(channels.voicePanelsOpened);
          const hasItem = set.has(closure_1_0);
          if (closure_1_1) {
            if (hasItem) {
              return channels;
            } else {
              set.add(closure_1_0);
            }
          } else if (hasItem) {
            set.delete(closure_1_0);
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
  obj.isChannelOpen = function isChannelOpen(id) {
    const voicePanelsOpened = dependencyMap().voicePanelsOpened;
    return voicePanelsOpened.has(id);
  };
  obj.setChannelPanelPIP = function setChannelPanelPIP(c0, arg1) {
    dependencyMap = arg1;
    c0(1259).batchUpdates(() => {
      c0((voicePanelsPIP) => {
        const set = new Set(voicePanelsPIP.voicePanelsPIP);
        const hasItem = set.has(closure_1_0);
        if (closure_1_1) {
          if (hasItem) {
            return voicePanelsPIP;
          } else {
            set.add(closure_1_0);
          }
        } else if (hasItem) {
          set.delete(closure_1_0);
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
  obj.setChannelPanelWithDock = function setChannelPanelWithDock(c0, arg1) {
    dependencyMap = arg1;
    c0(1259).batchUpdates(() => {
      c0((voicePanelsWithDock) => {
        voicePanelsWithDock = voicePanelsWithDock.voicePanelsWithDock;
        if (voicePanelsWithDock.has(closure_1_0) === closure_1_1) {
          return voicePanelsWithDock;
        } else {
          const _Set = Set;
          const set = new Set(voicePanelsWithDock.voicePanelsWithDock);
          if (tmp2) {
            set.add(closure_1_0);
          } else {
            set.delete(closure_1_0);
          }
          const obj = {};
          const merged = Object.assign(voicePanelsWithDock);
          obj.voicePanelsWithDock = set;
          return obj;
        }
      });
    });
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelStore.tsx");

export default withEqualityFn;
