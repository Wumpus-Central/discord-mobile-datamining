// discord_app/modules/media/native/MediaPlayerManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import discord_common_shallowEqualDefault from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import Constants2 from "../../../../discord_common/js/shared/Constants.tsx";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import ActivityPanelConstants from "../../activities/panel/ActivityPanelConstants.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import VoicePanelStore from "../../voice_panel/VoicePanelStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import MediaPlaybackPanelConstants from "../../media_panel/native/MediaPlaybackPanelConstants.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

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
    mediaSourceMessage: "flexDirection",
    canAccessMedia: "ip",
    isPlaying: false,
    wasPipClosedByUser: null,
    progress: null,
    rate: "flex",
    showPip: "comic",
    closePip() {
      ReactBatchUpdates.batchUpdates(() => closure_1_0({ showPip: false }));
    },
    displayedMediaItemIdsPerChannel: {},
    currentlyDisplayedChannelId: "droplets"
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
  tmp2Result = PlatformUtils;
};
prototype["updateMediaPermissions"] = function updateMediaPermissions() {
  const self = this;
  self(1248).batchUpdates(() => {
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
  self(1248).batchUpdates(() => {
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
    if (null == source) {
      obj.setState({ rate: 0, isPlaying: false });
    }
    let id;
    if (source != null) {
      id = source.id;
    }
    closure_16.verbose("Playback rate changed to " + _require + ": " + id);
    const state = obj.getState();
    ({ activeMediaPlayerSource, isPlaying, wasPipClosedByUser } = state);
    if (tmp9(activeMediaPlayerSource, source)) {
      const obj2 = { rate: _require, isPlaying: 0 !== _require, wasPipClosedByUser: null };
      let tmp15 = false === isPlaying;
      if (tmp15) {
        tmp15 = _require > 0;
      }
      let tmp16 = !tmp15;
      if (!tmp15) {
        tmp16 = wasPipClosedByUser;
      }
      obj2.wasPipClosedByUser = tmp16;
      obj.setState(obj2);
      self.updateDisplayState();
    } else {
      obj = { source };
      const result = self.handleMediaPlayerPlaybackSourceChanged(obj);
      const obj3 = { source, rate: _require };
      const result1 = self.handleMediaPlayerPlaybackRateChanged(obj3);
    }
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
          const obj2 = { time, duration: dependencyMap, isCompleted: null };
          let flag;
          if (dependencyMap > 0) {
            flag = dependencyMap - time <= map1;
          }
          if (flag == null) {
            flag = false;
          }
          obj2.isCompleted = flag;
          tmp7 = obj2;
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
          const obj3 = { progress: tmp7 };
          obj.setState(obj3);
        }
      } else if (null != currentlyDisplayedChannelId) {
        let channelId;
        if (_require != null) {
          channelId = _require.channelId;
        }
      }
    }
    tmp2 = discord_common_shallowEqualDefault;
  });
};
prototype["handleMediaPlayerPlaybackSourceChanged"] = function handleMediaPlayerPlaybackSourceChanged(source) {
  const self = this;
  source = source.source;
  source(1248).batchUpdates(() => {
    let id;
    const state = obj.getState();
    if (source != null) {
      id = source.id;
    }
    closure_16.verbose("Playback source changed: " + id);
    const activeMediaPlayerSource = state.activeMediaPlayerSource;
    if (!tmp6(activeMediaPlayerSource, source)) {
      const obj2 = { activeMediaPlayerSource: source, mediaSourceMessage: null, progress: "ip", rate: false, isPlaying: false, wasPipClosedByUser: 0 };
      let orFetchMediaSourceMessage;
      if (null != source) {
        orFetchMediaSourceMessage = self.getOrFetchMediaSourceMessage(source);
      }
      obj2.mediaSourceMessage = orFetchMediaSourceMessage;
      obj.setState(obj2);
      const result = self.updateMediaPermissions();
      self.updateDisplayState();
    }
    tmp6 = discord_common_shallowEqualDefault;
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
          const messages = MessageStore.getMessages(channelId);
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
      const obj2 = { mediaSourceMessage: tmp2 };
      obj.setState(obj2);
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
    const set = new Set(items1);
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
    const state = useMediaPlayerManagerStore.getState();
    ({ displayedMediaItemIdsPerChannel, activeMediaPlayerSource } = state);
    if (undefined === activeMediaPlayerSource) {
      activeMediaPlayerSource = {};
    }
    const id = activeMediaPlayerSource.id;
    ({ progress, isPlaying } = state);
    if (state.wasPipClosedByUser) {
      useMediaPlayerManagerStore.setState({ showPip: false });
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
      const focusedChannelId = require("isChannelFocused").getFocusedChannelId();
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
            const obj3 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
            useMediaPlayerManagerStore.setState(obj3);
          } else {
            const obj4 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
            useMediaPlayerManagerStore.setState(obj4);
          }
        } else {
          const obj6 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
          useMediaPlayerManagerStore.setState(obj6);
        }
      } else {
        const obj7 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
        useMediaPlayerManagerStore.setState(obj7);
      }
      const obj2 = require("isChannelFocused");
    }
  });
}
prototype["updateDisplayState"] = updateDisplayState;
const updateDisplayState1 = new updateDisplayState("MediaPlayerManager", tmp2, tmp, prototype, MediaPlayerManager, new.target, require);
updateDisplayState1.subscriptions = [];
updateDisplayState1.voicePanelStoreUnsubscribe = undefined;
updateDisplayState1.showPipUnsubscribe = undefined;
let pauseAndClosePip = updateDisplayState1.pauseAndClosePip;
updateDisplayState1.pauseAndClosePip = pauseAndClosePip.bind(updateDisplayState1);
let handleVoicePanelStateUpdated = updateDisplayState1.handleVoicePanelStateUpdated;
updateDisplayState1.handleVoicePanelStateUpdated = handleVoicePanelStateUpdated.bind(updateDisplayState1);
let handleEmbeddedActivitiesUpdated = updateDisplayState1.handleEmbeddedActivitiesUpdated;
updateDisplayState1.handleEmbeddedActivitiesUpdated = handleEmbeddedActivitiesUpdated.bind(updateDisplayState1);
let handleMediaPlayerPlaybackRateChanged = updateDisplayState1.handleMediaPlayerPlaybackRateChanged;
updateDisplayState1.handleMediaPlayerPlaybackRateChanged = handleMediaPlayerPlaybackRateChanged.bind(updateDisplayState1);
let handleMediaPlayerPlaybackSourceChanged = updateDisplayState1.handleMediaPlayerPlaybackSourceChanged;
updateDisplayState1.handleMediaPlayerPlaybackSourceChanged = handleMediaPlayerPlaybackSourceChanged.bind(updateDisplayState1);
let handleMediaPlayerViewWillAppear = updateDisplayState1.handleMediaPlayerViewWillAppear;
updateDisplayState1.handleMediaPlayerViewWillAppear = handleMediaPlayerViewWillAppear.bind(updateDisplayState1);
let handleMediaPlayerViewDidDisappear = updateDisplayState1.handleMediaPlayerViewDidDisappear;
updateDisplayState1.handleMediaPlayerViewDidDisappear = handleMediaPlayerViewDidDisappear.bind(updateDisplayState1);
const updateDisplayState2 = updateDisplayState1.updateDisplayState;
updateDisplayState1.updateDisplayState = updateDisplayState2.bind(updateDisplayState1);
let updateMediaPermissions = updateDisplayState1.updateMediaPermissions;
updateDisplayState1.updateMediaPermissions = updateMediaPermissions.bind(updateDisplayState1);
let result = size.fileFinishedImporting("modules/media/native/MediaPlayerManager.tsx");

export default updateDisplayState1;
export { useMediaPlayerManagerStore };
export const isPlaybackComplete = function isPlaybackComplete(duration) {
  if (duration.duration > 0) {
    return duration.duration - duration.time <= map1;
  }
};