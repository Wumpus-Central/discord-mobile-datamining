// === Module 14536: MediaPlayerManager ===

// Module 14536 (MediaPlayerManager)
import LoggerDefault from "Logger" /* 3 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9505 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import VoicePanelStore from "VoicePanelStore" /* 4768 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 14537 */;
import module_560 from "module_560" /* 560 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

({ NativeEventEmitter: c3, NativeModules: closure_4 } = get_ActivityIndicator);
const AppStates = Constants.AppStates;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ PLAYBACK_COMPLETION_DETECTION_TOLERANCE: map1, PLAYBACK_PROGRESS_UPDATE_INTERVAL: closure_14 } = MediaPlaybackPanelConstants);
const Permissions = Constants2.Permissions;
let closure_16 = new LoggerDefault("MediaPlayerManager");
const useMediaPlayerManagerStore = module_560.create((arg0) => {
  closure_0 = arg0;
  const obj = {
    activeMediaPlayerSource: "HermesInternal",
    mediaSourceMessage: "flex",
    canAccessMedia: "ip",
    isPlaying: false,
    wasPipClosedByUser: null,
    progress: null,
    rate: "PX_16",
    showPip: "setRequestSession",
    closePip() {
      ReactBatchUpdates.batchUpdates(() => closure_1_0({ showPip: false }));
    },
    displayedMediaItemIdsPerChannel: {},
    currentlyDisplayedChannelId: true
  };
  return obj;
});
class MediaPlayerManager extends tmp8 {
  constructor() {
    tmp2 = new MediaPlayerManager(tmp, new.target);
    tmp2.subscriptions = [];
    tmp2.voicePanelStoreUnsubscribe = undefined;
    tmp2.showPipUnsubscribe = undefined;
    pauseAndClosePip = tmp2.pauseAndClosePip;
    tmp2.pauseAndClosePip = pauseAndClosePip.bind(tmp2);
    handleVoicePanelStateUpdated = tmp2.handleVoicePanelStateUpdated;
    tmp2.handleVoicePanelStateUpdated = handleVoicePanelStateUpdated.bind(tmp2);
    handleEmbeddedActivitiesUpdated = tmp2.handleEmbeddedActivitiesUpdated;
    tmp2.handleEmbeddedActivitiesUpdated = handleEmbeddedActivitiesUpdated.bind(tmp2);
    handleMediaPlayerPlaybackRateChanged = tmp2.handleMediaPlayerPlaybackRateChanged;
    tmp2.handleMediaPlayerPlaybackRateChanged = handleMediaPlayerPlaybackRateChanged.bind(tmp2);
    handleMediaPlayerPlaybackSourceChanged = tmp2.handleMediaPlayerPlaybackSourceChanged;
    tmp2.handleMediaPlayerPlaybackSourceChanged = handleMediaPlayerPlaybackSourceChanged.bind(tmp2);
    handleMediaPlayerViewWillAppear = tmp2.handleMediaPlayerViewWillAppear;
    tmp2.handleMediaPlayerViewWillAppear = handleMediaPlayerViewWillAppear.bind(tmp2);
    handleMediaPlayerViewDidDisappear = tmp2.handleMediaPlayerViewDidDisappear;
    tmp2.handleMediaPlayerViewDidDisappear = handleMediaPlayerViewDidDisappear.bind(tmp2);
    updateDisplayState = tmp2.updateDisplayState;
    tmp2.updateDisplayState = updateDisplayState.bind(tmp2);
    updateMediaPermissions = tmp2.updateMediaPermissions;
    tmp2.updateMediaPermissions = updateMediaPermissions.bind(tmp2);
    return tmp2;
  }
}
const prototype = MediaPlayerManager.prototype;
prototype["_initialize"] = function _initialize() {
  const self = this;
  const obj = new React3(React4.MediaPlayerManager);
  const items = [obj.addListener("MediaPlayerPlaybackSourceChanged", this.handleMediaPlayerPlaybackSourceChanged), obj.addListener("MediaPlayerPlaybackProgressUpdated", this.handleMediaPlayerPlaybackProgressUpdated), obj.addListener("MediaPlayerPlaybackRateChanged", this.handleMediaPlayerPlaybackRateChanged), obj.addListener("MediaPlayerViewWillAppear", this.handleMediaPlayerViewWillAppear), obj.addListener("MediaPlayerViewDidDisappear", this.handleMediaPlayerViewDidDisappear)];
  this.subscriptions = items;
  MediaPlayerManager = React4.MediaPlayerManager;
  const result = MediaPlayerManager.subscribeToPlaybackEvents();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.addListener("state", self.updateDisplayState);
  }
  self.voicePanelStoreUnsubscribe = VoicePanelStore.subscribe(self.handleVoicePanelStateUpdated);
  EmbeddedActivitiesStore.addChangeListener(self.handleEmbeddedActivitiesUpdated);
  ChannelStore.addChangeListener(self.updateMediaPermissions);
  PermissionStore.addChangeListener(self.updateMediaPermissions);
  const subscription = DispatcherDefault.subscribe("LOGOUT", self.userDidClosePip);
  if (tmp2Result.isIOS()) {
    self.showPipUnsubscribe = obj.subscribe((showPip, showPip2) => {
      if (showPip2.showPip) {
        if (!showPip.showPip) {
          MediaPlayerManager = closure_1_4.MediaPlayerManager;
          MediaPlayerManager.clearNowPlayingInfo();
        }
      }
      let tmp3 = 0 !== showPip2.rate && 0 === showPip.rate && !showPip.showPip;
      if (tmp3) {
        tmp3 = state.getState() === constants.ACTIVE;
      }
      if (tmp3) {
        const MediaPlayerManager2 = closure_1_4.MediaPlayerManager;
        MediaPlayerManager2.clearNowPlayingInfo();
      }
    });
  }
  closure_16.verbose("Initialized and subscribed to playback events");
};
prototype["updateMediaPermissions"] = function updateMediaPermissions() {
  const self = this;
  self(1249).batchUpdates(() => {
    const activeMediaPlayerSource = obj.getState().activeMediaPlayerSource;
    let channelId;
    if (activeMediaPlayerSource != null) {
      channelId = activeMediaPlayerSource.channelId;
    }
    if (channelId == null) {
      channelId = null;
    }
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (!channel.isPrivate()) {
        if (!PermissionStore.can(Permissions.VIEW_CHANNEL, channel)) {
          obj.setState({ canAccessMedia: false });
          self.pauseCurrentPlayer();
        }
      }
    }
    obj.setState({ canAccessMedia: true });
  });
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  const subscriptions = this.subscriptions;
  const item = subscriptions.forEach((remove) => remove.remove());
  this.subscriptions = [];
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.removeListener("state", self.updateDisplayState);
  }
  const voicePanelStoreUnsubscribe = self.voicePanelStoreUnsubscribe;
  if (voicePanelStoreUnsubscribe != null) {
    const result = voicePanelStoreUnsubscribe();
  }
  const showPipUnsubscribe = self.showPipUnsubscribe;
  if (showPipUnsubscribe != null) {
    showPipUnsubscribe();
  }
  EmbeddedActivitiesStore.removeChangeListener(self.handleEmbeddedActivitiesUpdated);
  ChannelStore.removeChangeListener(self.updateMediaPermissions);
  PermissionStore.removeChangeListener(self.updateMediaPermissions);
  DispatcherDefault.unsubscribe("LOGOUT", self.userDidClosePip);
};
prototype["pauseCurrentPlayer"] = function pauseCurrentPlayer() {
  MediaPlayerManager = React4.MediaPlayerManager;
  MediaPlayerManager.pauseCurrentPlayer();
};
prototype["playCurrentPlayer"] = function playCurrentPlayer() {
  MediaPlayerManager = React4.MediaPlayerManager;
  MediaPlayerManager.playCurrentPlayer();
};
prototype["userDidClosePip"] = function userDidClosePip() {
  ReactBatchUpdates.batchUpdates(() => state.setState({ wasPipClosedByUser: true, showPip: false }));
};
prototype["pauseAndClosePip"] = function pauseAndClosePip() {
  const self = this;
  self(1249).batchUpdates(() => {
    self.pauseCurrentPlayer();
    obj.setState({ wasPipClosedByUser: true, showPip: false });
  });
};
prototype["handleVoicePanelStateUpdated"] = function handleVoicePanelStateUpdated() {
  const state = VoicePanelStore.getState();
  let result = state.isVoicePanelFullscreen();
  if (!result) {
    result = state.voicePanelsPIP.size > 0;
  }
  if (result) {
    const self = this;
    this.pauseAndClosePip();
  }
};
prototype["handleEmbeddedActivitiesUpdated"] = function handleEmbeddedActivitiesUpdated() {
  if (EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PIP) {
    const self = this;
    this.pauseAndClosePip();
  }
};
prototype["handleMediaPlayerPlaybackRateChanged"] = function handleMediaPlayerPlaybackRateChanged(arg0) {
  const self = this;
  ({ source: importDefault, rate: require } = arg0);
  require("ReactBatchUpdates").batchUpdates(() => {
    if (null == closure_1_1) {
      obj.setState({ rate: 0, isPlaying: false });
    }
    let id;
    if (closure_1_1 != null) {
      id = tmp.id;
    }
    closure_16.verbose("Playback rate changed to " + _require + ": " + id);
    const state = obj.getState();
    ({ activeMediaPlayerSource, isPlaying, wasPipClosedByUser } = state);
    if (tmp9(activeMediaPlayerSource, tmp10)) {
      obj = { rate: tmp5, isPlaying: 0 !== tmp5, wasPipClosedByUser: null };
      let tmp15 = false === isPlaying;
      if (tmp15) {
        tmp15 = tmp5 > 0;
      }
      let tmp16 = !tmp15;
      if (!tmp15) {
        tmp16 = wasPipClosedByUser;
      }
      obj.wasPipClosedByUser = tmp16;
      obj.setState(obj);
      self.updateDisplayState();
    } else {
      obj = { source: tmp };
      const result = self.handleMediaPlayerPlaybackSourceChanged(obj);
      obj = { source: tmp, rate: tmp5 };
      const result1 = self.handleMediaPlayerPlaybackRateChanged(obj);
    }
    tmp10 = closure_1_1;
    tmp9 = discord_common_shallowEqualDefault;
  });
};
prototype["handleMediaPlayerPlaybackProgressUpdated"] = function handleMediaPlayerPlaybackProgressUpdated(arg0) {
  ({ source: require, time: importDefault, duration: dependencyMap } = arg0);
  ReactBatchUpdates.batchUpdates(() => {
    const state = obj.getState();
    if (tmp2(state.activeMediaPlayerSource, _require)) {
      const currentlyDisplayedChannelId = state.currentlyDisplayedChannelId;
      if (state.showPip) {
        let tmp7;
        if (dependencyMap > 0) {
          obj = { time, duration: tmp6, isCompleted: null };
          let flag;
          if (tmp6 > 0) {
            flag = tmp6 - time <= map1;
          }
          if (flag == null) {
            flag = false;
          }
          obj.isCompleted = flag;
          tmp7 = obj;
        }
        const progress = state.progress;
        let tmp9 = null != progress && null != tmp7;
        if (tmp9) {
          const _Math = Math;
          tmp9 = Math.abs(tmp7.time - progress.time) < closure_2_14;
        }
        if (tmp9) {
          tmp9 = tmp7.time !== tmp7.duration;
        }
        if (!tmp9) {
          obj = { progress: tmp7 };
          obj.setState(obj);
        }
      } else if (null != currentlyDisplayedChannelId) {
        let channelId;
        if (tmp3 != null) {
          channelId = tmp3.channelId;
        }
      }
    }
  });
};
prototype["handleMediaPlayerPlaybackSourceChanged"] = function handleMediaPlayerPlaybackSourceChanged(source) {
  const self = this;
  source = source.source;
  source(1249).batchUpdates(() => {
    let id;
    const state = obj.getState();
    if (source != null) {
      id = tmp3.id;
    }
    closure_16.verbose("Playback source changed: " + id);
    const activeMediaPlayerSource = state.activeMediaPlayerSource;
    if (!tmp6(activeMediaPlayerSource, source)) {
      obj = { activeMediaPlayerSource: tmp3, mediaSourceMessage: null, progress: "ip", rate: false, isPlaying: false, wasPipClosedByUser: 0 };
      let orFetchMediaSourceMessage;
      if (null != tmp3) {
        orFetchMediaSourceMessage = self.getOrFetchMediaSourceMessage(tmp3);
      }
      obj.mediaSourceMessage = orFetchMediaSourceMessage;
      obj.setState(obj);
      const result = self.updateMediaPermissions();
      self.updateDisplayState();
    }
  });
};
prototype["getOrFetchMediaSourceMessage"] = function getOrFetchMediaSourceMessage(source) {
  const self = this;
  ({ channelId, messageId, assetUrl } = source);
  if (null != messageId) {
    if (null != channelId) {
      const message = MessageStore.getMessage(channelId, messageId);
      if (null != message) {
        return message;
      } else {
        if (null != assetUrl) {
          const messages = obj4.getMessages(channelId);
          const found = messages.toArray().find((getContentMessage) => {
            const contentMessage = getContentMessage.getContentMessage();
            let someResult;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              if (attachments != null) {
                someResult = attachments.some((url) => url.url === assetUrl);
              }
            }
            return someResult;
          });
          if (null != found) {
            return found;
          }
          const toArrayResult = messages.toArray();
        }
        const obj = { channelId, messageId };
        const message1 = MessageActionCreatorsDefault.fetchMessage(obj);
        message1.then((result) => {
          if (null != result) {
            result = self.handleMediaSourceMessageUpdated(result);
          }
        });
      }
      obj4 = MessageStore;
    }
  }
};
prototype["handleMediaSourceMessageUpdated"] = function handleMediaSourceMessageUpdated(result) {
  _require = result;
  require("ReactBatchUpdates").batchUpdates(() => {
    const activeMediaPlayerSource = obj.getState().activeMediaPlayerSource;
    let messageId;
    if (activeMediaPlayerSource != null) {
      messageId = activeMediaPlayerSource.messageId;
    }
    if (messageId === id.id) {
      obj = { mediaSourceMessage: tmp2 };
      obj.setState(obj);
    }
  });
};
prototype["handleMediaPlayerViewWillAppear"] = function handleMediaPlayerViewWillAppear(arg0) {
  const self = this;
  ({ mediaItemIds: importDefault, channelId: require } = arg0);
  require("ReactBatchUpdates").batchUpdates(() => {
    const displayedMediaItemIdsPerChannel = obj.getState().displayedMediaItemIdsPerChannel;
    let items = displayedMediaItemIdsPerChannel[_require];
    if (items == null) {
      items = [];
    }
    const items1 = [...closure_1_1];
    displayedMediaItemIdsPerChannel[_require] = new Set(items1);
    obj.setState({ displayedMediaItemIdsPerChannel });
    self.updateDisplayState();
  });
};
prototype["handleMediaPlayerViewDidDisappear"] = function handleMediaPlayerViewDidDisappear(arg0) {
  const self = this;
  ({ mediaItemIds: importDefault, channelId: require } = arg0);
  require("ReactBatchUpdates").batchUpdates(() => {
    const displayedMediaItemIdsPerChannel = obj.getState().displayedMediaItemIdsPerChannel;
    let set = displayedMediaItemIdsPerChannel[_require];
    if (set == null) {
      const _Set = Set;
      set = new Set();
    }
    const items = [...set];
    const set1 = new Set(items.filter((item) => !closure_1_1.includes(item)));
    if (0 === set1.size) {
      delete tmp2[tmp];
    } else {
      displayedMediaItemIdsPerChannel[_require] = set1;
    }
    obj.setState({ displayedMediaItemIdsPerChannel });
    self.updateDisplayState();
  });
};
function updateDisplayState() {
  ReactBatchUpdates.batchUpdates(() => {
    let obj = useMediaPlayerManagerStore;
    const state = useMediaPlayerManagerStore.getState();
    ({ displayedMediaItemIdsPerChannel, activeMediaPlayerSource } = state);
    if (undefined === activeMediaPlayerSource) {
      activeMediaPlayerSource = {};
    }
    const id = activeMediaPlayerSource.id;
    ({ progress, isPlaying } = state);
    if (state.wasPipClosedByUser) {
      obj.setState({ showPip: false });
    } else if (isPlaying) {
      if (!isPlaying) {
        let tmp6 = null != progress;
        if (tmp6) {
          let tmp7;
          if (progress.duration > 0) {
            tmp7 = progress.duration - progress.time <= closure_1_13;
          }
          tmp6 = !tmp7;
        }
        isPlaying = tmp6;
      }
      let obj1 = require("isChannelFocused");
      const focusedChannelId = obj1.getFocusedChannelId();
      if (null != focusedChannelId) {
        if (state.currentlyDisplayedChannelId !== focusedChannelId) {
          for (const key10031 in displayedMediaItemIdsPerChannel) {
            if (key10031 === focusedChannelId) {
              continue;
            } else {
              delete tmp[tmp2];
              continue;
            }
            continue;
          }
        }
      }
      if (null != id) {
        if (null != focusedChannelId) {
          if (null != displayedMediaItemIdsPerChannel[focusedChannelId]) {
            if (isPlaying) {
              isPlaying = !obj5.has(id);
            }
            obj = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
            useMediaPlayerManagerStore.setState(obj);
          } else {
            obj = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
            useMediaPlayerManagerStore.setState(obj);
          }
        } else {
          obj1 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
          useMediaPlayerManagerStore.setState(obj1);
        }
      } else {
        const obj2 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
        useMediaPlayerManagerStore.setState(obj2);
      }
    }
  });
}
prototype["updateDisplayState"] = updateDisplayState;
updateDisplayState = new updateDisplayState("MediaPlayerManager", tmp2, tmp, prototype, MediaPlayerManager, new.target, require);
updateDisplayState.subscriptions = [];
updateDisplayState.voicePanelStoreUnsubscribe = undefined;
updateDisplayState.showPipUnsubscribe = undefined;
let pauseAndClosePip = updateDisplayState.pauseAndClosePip;
updateDisplayState.pauseAndClosePip = pauseAndClosePip.bind(updateDisplayState);
let handleVoicePanelStateUpdated = updateDisplayState.handleVoicePanelStateUpdated;
updateDisplayState.handleVoicePanelStateUpdated = handleVoicePanelStateUpdated.bind(updateDisplayState);
let handleEmbeddedActivitiesUpdated = updateDisplayState.handleEmbeddedActivitiesUpdated;
updateDisplayState.handleEmbeddedActivitiesUpdated = handleEmbeddedActivitiesUpdated.bind(updateDisplayState);
let handleMediaPlayerPlaybackRateChanged = updateDisplayState.handleMediaPlayerPlaybackRateChanged;
updateDisplayState.handleMediaPlayerPlaybackRateChanged = handleMediaPlayerPlaybackRateChanged.bind(updateDisplayState);
let handleMediaPlayerPlaybackSourceChanged = updateDisplayState.handleMediaPlayerPlaybackSourceChanged;
updateDisplayState.handleMediaPlayerPlaybackSourceChanged = handleMediaPlayerPlaybackSourceChanged.bind(updateDisplayState);
let handleMediaPlayerViewWillAppear = updateDisplayState.handleMediaPlayerViewWillAppear;
updateDisplayState.handleMediaPlayerViewWillAppear = handleMediaPlayerViewWillAppear.bind(updateDisplayState);
let handleMediaPlayerViewDidDisappear = updateDisplayState.handleMediaPlayerViewDidDisappear;
updateDisplayState.handleMediaPlayerViewDidDisappear = handleMediaPlayerViewDidDisappear.bind(updateDisplayState);
const updateDisplayState2 = updateDisplayState.updateDisplayState;
updateDisplayState.updateDisplayState = updateDisplayState2.bind(updateDisplayState);
let updateMediaPermissions = updateDisplayState.updateMediaPermissions;
updateDisplayState.updateMediaPermissions = updateMediaPermissions.bind(updateDisplayState);
let result = size.fileFinishedImporting("modules/media/native/MediaPlayerManager.tsx");

export default updateDisplayState;
export { useMediaPlayerManagerStore };
export const isPlaybackComplete = function isPlaybackComplete(duration) {
  if (duration.duration > 0) {
    return duration.duration - duration.time <= map1;
  }
};