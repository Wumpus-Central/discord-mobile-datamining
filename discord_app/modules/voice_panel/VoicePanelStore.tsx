// === Module 5104: VoicePanelStore ===

// Module 5104 (VoicePanelStore)
import module_1254 from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

let set, set2;

const withEqualityFn = module_1254.createWithEqualityFn((arg0, arg1) => {
  let set1;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    channels: set,
    isActivityFocused: false,
    isVoicePanelFullscreen() {
      return closure_1().voicePanelsFullscreen.size > 0;
    },
    isAnyVoicePanelOpen() {
      return closure_1().voicePanelsOpened.size > 0;
    },
    voicePanelsFullscreen: set1,
    voicePanelsOpened: set2,
    voicePanelsPIP: new Set(),
    openChannel(arg0) {
      closure_0 = arg0;
      const channels = closure_1().channels;
      if (!channels.has(arg0)) {
        let obj = closure_0(closure_1[1]);
        obj.batchUpdates(() => {
          closure_0((channels) => {
            let items;
            let items1;
            const obj = { channels: new Set(items), voicePanelsOpened: new Set(items1) };
            const merged = Object.assign(channels);
            items = [closure_1_0, ...Array.from(channels.channels)];
            items1 = [closure_1_0, ...Array.from(channels.voicePanelsOpened)];
            new Set(items);
            new Set(items1);
            return obj;
          });
        });
      }
    },
    closeChannel(channelId) {
      let obj = channelId(closure_1[1]);
      obj.batchUpdates(() => {
        channelId(function(arg0) {
          let channels;
          let voicePanelsFullscreen;
          let voicePanelsOpened;
          ({ channels, voicePanelsFullscreen, voicePanelsOpened } = arg0);
          if (!channels.has(channelId)) {
            let tmp2;
            if (!voicePanelsFullscreen.has(channelId)) {
              tmp2 = arg0;
            }
            return tmp2;
          }
          let tmp3 = channels;
          if (channels.has(channelId)) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(channels);
            set.delete(channelId);
            tmp3 = set;
          }
          let tmp8 = voicePanelsFullscreen;
          if (voicePanelsFullscreen.has(channelId)) {
            const _Set2 = Set;
            const self3 = this;
            const self4 = this;
            const set1 = new Set(voicePanelsFullscreen);
            set1.delete(channelId);
            tmp8 = set1;
          }
          let tmp13 = voicePanelsOpened;
          if (voicePanelsOpened.has(channelId)) {
            const _Set3 = Set;
            const self5 = this;
            const self6 = this;
            set2 = new Set(voicePanelsOpened);
            set2.delete(channelId);
            tmp13 = set2;
          }
          const obj = { channels: tmp3, voicePanelsFullscreen: tmp8, voicePanelsOpened: tmp13 };
          const merged = Object.assign(arg0);
          tmp2 = obj;
        });
      });
    },
    isMounted(arg0) {
      const channels = closure_1().channels;
      return channels.has(arg0);
    },
    setIsActivityFocused(connectedValue) {
      let obj = connectedValue(closure_1[1]);
      obj.batchUpdates(() => {
        const tmp = connectedValue((isActivityFocused) => {
          let tmp2 = isActivityFocused;
          if (isActivityFocused.isActivityFocused !== connectedValue) {
            const obj = { isActivityFocused: tmp };
            const merged = Object.assign(isActivityFocused);
            tmp2 = obj;
          }
          return tmp2;
        });
      });
    },
    setChannelPanelFullscreen(channelId, lockEnabled) {
      closure_1 = lockEnabled;
      let obj = channelId(closure_1[1]);
      obj.batchUpdates(() => {
        channelId((voicePanelsFullscreen) => {
          set = new Set(voicePanelsFullscreen.voicePanelsFullscreen);
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
          const obj = { voicePanelsFullscreen: set };
          const merged = Object.assign(voicePanelsFullscreen);
          return obj;
        });
      });
    },
    setChannelPanelOpen(channelId, arg1) {
      closure_1 = arg1;
      let obj = channelId(closure_1[1]);
      obj.batchUpdates(() => {
        channelId(function(channels) {
          channels = channels.channels;
          if (channels.has(channelId)) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(channels.voicePanelsOpened);
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
            const obj = { voicePanelsOpened: set };
            const merged = Object.assign(channels);
            return obj;
          } else {
            return channels;
          }
        });
      });
    },
    isChannelOpen(arg0) {
      const voicePanelsOpened = closure_1().voicePanelsOpened;
      return voicePanelsOpened.has(arg0);
    },
    setChannelPanelPIP(channelId, arg1) {
      closure_1 = arg1;
      let obj = channelId(closure_1[1]);
      obj.batchUpdates(() => {
        channelId((voicePanelsPIP) => {
          set = new Set(voicePanelsPIP.voicePanelsPIP);
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
          const obj = { voicePanelsPIP: set };
          const merged = Object.assign(voicePanelsPIP);
          return obj;
        });
      });
    }
  };
  set = new Set();
  set1 = new Set();
  set2 = new Set();
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelStore.tsx");

export default withEqualityFn;