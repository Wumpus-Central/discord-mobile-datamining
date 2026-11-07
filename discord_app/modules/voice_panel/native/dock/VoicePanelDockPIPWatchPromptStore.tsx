// discord_app/modules/voice_panel/native/dock/VoicePanelDockPIPWatchPromptStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
function markWatched(ownerId) {
  let flag = ownerId !== AuthenticationStore.getId();
  if (flag) {
    flag = !set.has(ownerId);
  }
  if (flag) {
    const _Set = Set;
    set = new Set(set);
    set = set.add(ownerId);
    flag = true;
  }
  return flag;
}
let c5 = null;
let set = new Set();
let c7 = false;
let c8 = false;
const Store = initializeDefault.Store;
class VoicePanelDockPIPWatchPromptStore extends Store {}
const prototype = VoicePanelDockPIPWatchPromptStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore);
  let voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (voiceChannelId == null) {
    voiceChannelId = null;
  }
  c5 = voiceChannelId;
  const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
  while (tmp4 !== undefined) {
    let tmp7 = markWatched(tmp5.ownerId);
    continue;
  }
  tmp4 = allActiveStreams[Symbol.iterator]();
};
prototype["hasWatched"] = function hasWatched(ownerId) {
  return set.has(ownerId);
};
prototype["isDismissed"] = function isDismissed() {
  return c7;
};
prototype["isVideoPIPDismissed"] = function isVideoPIPDismissed() {
  return c8;
};
VoicePanelDockPIPWatchPromptStore.displayName = "VoicePanelDockPIPWatchPromptStore";
const voicePanelDockPIPWatchPromptStore = new VoicePanelDockPIPWatchPromptStore(DispatcherDefault, {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (channelId == null) {
      channelId = null;
    }
    let tmp2 = channelId !== c5;
    if (tmp2) {
      let tmp3 = c5 !== channelId;
      if (!tmp3) {
        tmp3 = set.size > 0;
      }
      if (!tmp3) {
        tmp3 = c7;
      }
      if (!tmp3) {
        tmp3 = c8;
      }
      c5 = channelId;
      const _Set = Set;
      set = new Set();
      c7 = false;
      c8 = false;
      tmp2 = tmp3;
    }
    return tmp2;
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    const ownerId = StreamKeyUtils.decodeStreamKey(streamKey.streamKey).ownerId;
    let flag = ownerId !== AuthenticationStore.getId();
    if (flag) {
      flag = !set.has(ownerId);
    }
    if (flag) {
      const _Set = Set;
      set = new Set(set);
      set = set.add(ownerId);
      flag = true;
    }
    return flag;
  },
  VOICE_PANEL_DOCK_WATCH_PROMPT_DISMISS: function handleDismiss() {
    let flag = !c7;
    if (!c7) {
      c7 = true;
      flag = true;
    }
    return flag;
  },
  VOICE_PANEL_DOCK_VIDEO_PIP_DISMISS: function handleVideoPIPDismiss() {
    let flag = !c8;
    if (!c8) {
      c8 = true;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    let tmp = c5 !== null;
    if (!tmp) {
      tmp = set.size > 0;
    }
    if (!tmp) {
      tmp = c7;
    }
    if (!tmp) {
      tmp = c8;
    }
    c5 = null;
    set = new Set();
    c7 = false;
    c8 = false;
    return tmp;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPromptStore.tsx");

export default voicePanelDockPIPWatchPromptStore;
