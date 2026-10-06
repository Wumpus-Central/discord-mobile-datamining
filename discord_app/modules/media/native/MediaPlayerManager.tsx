// === Module 14396: MediaPlayerManager ===

// Module 14396 (MediaPlayerManager)
import LoggerDefault from "Logger" /* 3 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import react_native from "react-native" /* 1259 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import react_native2 from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import VoicePanelStore from "VoicePanelStore" /* 5104 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 14397 */;
import module_570 from "module_570" /* 570 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, verbose;

let c3;
let closure_14;
let closure_4;
let map1;
let tmp;
let tmp2;
({ NativeEventEmitter: c3, NativeModules: closure_4 } = react_native2);
const AppStates = Constants.AppStates;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ PLAYBACK_COMPLETION_DETECTION_TOLERANCE: map1, PLAYBACK_PROGRESS_UPDATE_INTERVAL: closure_14 } = MediaPlaybackPanelConstants);
const Permissions = Constants2.Permissions;
const authStore3 = new LoggerDefault("MediaPlayerManager");
new LoggerDefault("MediaPlayerManager");
const useMediaPlayerManagerStore = module_570.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    activeMediaPlayerSource: "IconComponent",
    mediaSourceMessage: "Set",
    canAccessMedia: "duration",
    isPlaying: false,
    wasPipClosedByUser: null,
    progress: null,
    rate: "Reflect",
    showPip: "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z",
    closePip() {
      const obj = react_native;
      obj.batchUpdates(() => closure_1_0({ showPip: false }));
    },
    displayedMediaItemIdsPerChannel: {},
    currentlyDisplayedChannelId: "<string:3645964289>"
  };
  return obj;
});
class MediaPlayerManager extends LifecycleManager {
  constructor() {
    const tmp2 = new MediaPlayerManager(tmp, new.target);
    tmp2.subscriptions = [];
    tmp2.voicePanelStoreUnsubscribe = undefined;
    tmp2.showPipUnsubscribe = undefined;
    const pauseAndClosePip = tmp2.pauseAndClosePip;
    tmp2.pauseAndClosePip = pauseAndClosePip.bind(tmp2);
    const handleVoicePanelStateUpdated = tmp2.handleVoicePanelStateUpdated;
    tmp2.handleVoicePanelStateUpdated = handleVoicePanelStateUpdated.bind(tmp2);
    const handleEmbeddedActivitiesUpdated = tmp2.handleEmbeddedActivitiesUpdated;
    tmp2.handleEmbeddedActivitiesUpdated = handleEmbeddedActivitiesUpdated.bind(tmp2);
    const handleMediaPlayerPlaybackRateChanged = tmp2.handleMediaPlayerPlaybackRateChanged;
    tmp2.handleMediaPlayerPlaybackRateChanged = handleMediaPlayerPlaybackRateChanged.bind(tmp2);
    const handleMediaPlayerPlaybackSourceChanged = tmp2.handleMediaPlayerPlaybackSourceChanged;
    tmp2.handleMediaPlayerPlaybackSourceChanged = handleMediaPlayerPlaybackSourceChanged.bind(tmp2);
    const handleMediaPlayerViewWillAppear = tmp2.handleMediaPlayerViewWillAppear;
    tmp2.handleMediaPlayerViewWillAppear = handleMediaPlayerViewWillAppear.bind(tmp2);
    const handleMediaPlayerViewDidDisappear = tmp2.handleMediaPlayerViewDidDisappear;
    tmp2.handleMediaPlayerViewDidDisappear = handleMediaPlayerViewDidDisappear.bind(tmp2);
    const updateDisplayState = tmp2.updateDisplayState;
    tmp2.updateDisplayState = updateDisplayState.bind(tmp2);
    const updateMediaPermissions = tmp2.updateMediaPermissions;
    tmp2.updateMediaPermissions = updateMediaPermissions.bind(tmp2);
    return tmp2;
  }
  _initialize() {
    let state;
    const self = this;
    const obj = new _false(React3.MediaPlayerManager);
    const items = [obj.addListener("MediaPlayerPlaybackSourceChanged", this.handleMediaPlayerPlaybackSourceChanged), obj.addListener("MediaPlayerPlaybackProgressUpdated", this.handleMediaPlayerPlaybackProgressUpdated), obj.addListener("MediaPlayerPlaybackRateChanged", this.handleMediaPlayerPlaybackRateChanged), obj.addListener("MediaPlayerViewWillAppear", this.handleMediaPlayerViewWillAppear), obj.addListener("MediaPlayerViewDidDisappear", this.handleMediaPlayerViewDidDisappear)];
    this.subscriptions = items;
    MediaPlayerManager = React3.MediaPlayerManager;
    const result = MediaPlayerManager.subscribeToPlaybackEvents();
    const obj2 = RootNavigationRef;
    const rootNavigationRef = obj2.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", self.updateDisplayState);
    }
    self.voicePanelStoreUnsubscribe = VoicePanelStore.subscribe(self.handleVoicePanelStateUpdated);
    EmbeddedActivitiesStore.addChangeListener(self.handleEmbeddedActivitiesUpdated);
    ChannelStore.addChangeListener(self.updateMediaPermissions);
    PermissionStore.addChangeListener(self.updateMediaPermissions);
    const obj4 = DispatcherDefault;
    const subscription = obj4.subscribe("LOGOUT", self.userDidClosePip);
    const tmp2Result = PlatformUtils;
    if (tmp2Result.isIOS()) {
      self.showPipUnsubscribe = obj.subscribe((showPip, showPip2) => {
        if (showPip2.showPip) {
          if (!showPip.showPip) {
            MediaPlayerManager = closure_1_4.MediaPlayerManager;
            MediaPlayerManager.clearNowPlayingInfo();
          }
        }
        const tmp3 = 0 !== showPip2.rate && 0 === showPip.rate && !showPip.showPip && state.getState() === constants.ACTIVE;
        if (tmp3) {
          const MediaPlayerManager2 = closure_1_4.MediaPlayerManager;
          MediaPlayerManager2.clearNowPlayingInfo();
        }
      });
    }
    closure_16.verbose("Initialized and subscribed to playback events");
  }
  updateMediaPermissions() {
    const self = this;
    const obj = self(1259);
    obj.batchUpdates(() => {
      const activeMediaPlayerSource = obj.getState().activeMediaPlayerSource;
      let channelId;
      const getChannel = ChannelStore.getChannel;
      if (activeMediaPlayerSource != null) {
        channelId = activeMediaPlayerSource.channelId;
      }
      if (channelId == null) {
        channelId = null;
      }
      const channel = getChannel(channelId);
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
  }
  _terminate() {
    const self = this;
    const subscriptions = this.subscriptions;
    const item = subscriptions.forEach((remove) => remove.remove());
    this.subscriptions = [];
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
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
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("LOGOUT", self.userDidClosePip);
  }
  pauseCurrentPlayer() {
    MediaPlayerManager = React3.MediaPlayerManager;
    MediaPlayerManager.pauseCurrentPlayer();
  }
  playCurrentPlayer() {
    MediaPlayerManager = React3.MediaPlayerManager;
    MediaPlayerManager.playCurrentPlayer();
  }
  userDidClosePip() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState({ wasPipClosedByUser: true, showPip: false }));
  }
  pauseAndClosePip() {
    const self = this;
    const obj = self(1259);
    obj.batchUpdates(() => {
      self.pauseCurrentPlayer();
      obj.setState({ wasPipClosedByUser: true, showPip: false });
    });
  }
  handleVoicePanelStateUpdated() {
    const state = VoicePanelStore.getState();
    const result = state.isVoicePanelFullscreen() || state.voicePanelsPIP.size > 0;
    if (result) {
      const self = this;
      this.pauseAndClosePip();
    }
  }
  handleEmbeddedActivitiesUpdated() {
    if (EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PIP) {
      const self = this;
      this.pauseAndClosePip();
    }
  }
  handleMediaPlayerPlaybackRateChanged(arg0) {
    let require;
    const self = this;
    ({ source: importDefault, rate: require } = arg0);
    let obj = require("react-native");
    obj.batchUpdates(() => {
      let activeMediaPlayerSource;
      let isPlaying;
      let obj;
      let tmp15;
      let wasPipClosedByUser;
      if (null == importDefault) {
        obj.setState({ rate: 0, isPlaying: false });
      }
      let id;
      verbose = verbose.verbose;
      if (importDefault != null) {
        id = importDefault.id;
      }
      verbose("Playback rate changed to " + _require + ": " + id);
      const state = obj.getState();
      ({ activeMediaPlayerSource, isPlaying, wasPipClosedByUser } = state);
      const tmp9 = shallowEqualDefault;
      if (tmp9(activeMediaPlayerSource, importDefault)) {
        const obj2 = { rate: _require, isPlaying: 0 !== _require, wasPipClosedByUser: !tmp15 && wasPipClosedByUser };
        tmp15 = false === isPlaying;
        const setState = obj.setState;
        if (tmp15) {
          tmp15 = _require > 0;
        }
        setState(obj2);
        self.updateDisplayState();
      } else {
        obj = { source: importDefault };
        const result = self.handleMediaPlayerPlaybackSourceChanged(obj);
        const obj3 = { source: importDefault, rate: _require };
        const result1 = self.handleMediaPlayerPlaybackRateChanged(obj3);
      }
    });
  }
  handleMediaPlayerPlaybackProgressUpdated(arg0) {
    let require;
    let time;
    ({ source: require, time: importDefault, duration: dependencyMap } = arg0);
    const obj = react_native;
    obj.batchUpdates(() => {
      let flag;
      const state = obj.getState();
      const activeMediaPlayerSource = state.activeMediaPlayerSource;
      const tmp2 = shallowEqualDefault;
      if (tmp2(activeMediaPlayerSource, _require)) {
        const currentlyDisplayedChannelId = state.currentlyDisplayedChannelId;
        if (state.showPip) {
          let tmp7;
          if (dependencyMap > 0) {
            const obj2 = { time: importDefault, duration: dependencyMap, isCompleted: flag };
            flag = undefined;
            if (dependencyMap > 0) {
              flag = dependencyMap - importDefault <= map1;
            }
            if (flag == null) {
              flag = false;
            }
            tmp7 = obj2;
          }
          const progress = state.progress;
          let tmp9 = null != progress && null != tmp7;
          if (tmp9) {
            const _Math = Math;
            tmp9 = Math.abs(tmp7.time - progress.time) < authStore2;
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
    });
  }
  handleMediaPlayerPlaybackSourceChanged(source) {
    const self = this;
    source = source.source;
    let obj = source(1259);
    obj.batchUpdates(() => {
      let obj;
      let orFetchMediaSourceMessage;
      let id;
      const state = obj.getState();
      verbose = verbose.verbose;
      const tmp = obj;
      if (source != null) {
        id = source.id;
      }
      verbose("Playback source changed: " + id);
      const activeMediaPlayerSource = state.activeMediaPlayerSource;
      const tmp7 = shallowEqualDefault;
      if (!tmp7(activeMediaPlayerSource, source)) {
        const setState = tmp.setState;
        obj = { activeMediaPlayerSource: source, mediaSourceMessage: orFetchMediaSourceMessage, progress: "duration", rate: false, isPlaying: false, wasPipClosedByUser: 0 };
        orFetchMediaSourceMessage = undefined;
        if (null != source) {
          orFetchMediaSourceMessage = self.getOrFetchMediaSourceMessage(source);
        }
        setState(obj);
        const result = self.updateMediaPermissions();
        self.updateDisplayState();
      }
    });
  }
  getOrFetchMediaSourceMessage(source) {
    let assetUrl;
    let channelId;
    let messageId;
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
            const toArrayResult = messages.toArray();
            const found = toArrayResult.find((getContentMessage) => {
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
          }
          const obj = { channelId, messageId };
          const obj2 = MessageActionCreatorsDefault;
          const message1 = obj2.fetchMessage(obj);
          message1.then((result) => {
            if (null != result) {
              result = self.handleMediaSourceMessageUpdated(result);
            }
          });
        }
      }
    }
  }
  handleMediaSourceMessageUpdated(result) {
    let id;
    _require = result;
    const obj = require("react-native");
    obj.batchUpdates(() => {
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
  }
  handleMediaPlayerViewWillAppear(arg0) {
    let args;
    let require;
    const self = this;
    ({ mediaItemIds: importDefault, channelId: require } = arg0);
    const obj = require("react-native");
    obj.batchUpdates(() => {
      const displayedMediaItemIdsPerChannel = obj.getState().displayedMediaItemIdsPerChannel;
      let items = displayedMediaItemIdsPerChannel[_require];
      if (items == null) {
        items = [];
      }
      const items1 = [...closure_1_1];
      displayedMediaItemIdsPerChannel[_require] = new Set(items1);
      new Set(items1);
      obj.setState({ displayedMediaItemIdsPerChannel });
      self.updateDisplayState();
    });
  }
  handleMediaPlayerViewDidDisappear(arg0) {
    let require;
    let self = this;
    ({ mediaItemIds: importDefault, channelId: require } = arg0);
    const obj = require("react-native");
    obj.batchUpdates(function() {
      const displayedMediaItemIdsPerChannel = obj.getState().displayedMediaItemIdsPerChannel;
      set = displayedMediaItemIdsPerChannel[_require];
      const _Set = Set;
      if (set == null) {
        const _Set2 = Set;
        const self2 = this;
        self = this;
        set = new Set();
      }
      const items = [...set];
      const _Set1 = new _Set(items.filter((item) => !closure_1_1.includes(item)));
      if (0 === _Set1.size) {
        delete displayedMediaItemIdsPerChannel[_require];
      } else {
        displayedMediaItemIdsPerChannel[_require] = _Set1;
      }
      obj.setState({ displayedMediaItemIdsPerChannel });
      self.updateDisplayState();
    });
  }
}
const prototype = MediaPlayerManager.prototype;
function updateDisplayState() {
  const obj = react_native;
  obj.batchUpdates(() => {
    let activeMediaPlayerSource;
    let displayedMediaItemIdsPerChannel;
    let isPlaying;
    let progress;
    const state = useMediaPlayerManagerStore.getState();
    ({ displayedMediaItemIdsPerChannel, activeMediaPlayerSource } = state);
    const currentlyDisplayedChannelId = state.currentlyDisplayedChannelId;
    if (undefined === activeMediaPlayerSource) {
      activeMediaPlayerSource = {};
    }
    const id = activeMediaPlayerSource.id;
    ({ progress, isPlaying } = state);
    if (state.wasPipClosedByUser) {
      useMediaPlayerManagerStore.setState({ showPip: false });
    } else if (isPlaying) {
      if (!isPlaying) {
        let tmp4 = null != progress;
        if (tmp4) {
          let tmp5;
          if (progress.duration > 0) {
            tmp5 = progress.duration - progress.time <= closure_1_13;
          }
          tmp4 = !tmp5;
        }
        isPlaying = tmp4;
      }
      const obj2 = require("isChannelFocused");
      const focusedChannelId = obj2.getFocusedChannelId();
      if (null != focusedChannelId) {
        if (currentlyDisplayedChannelId !== focusedChannelId) {
          for (const key10031 in displayedMediaItemIdsPerChannel) {
            if (key10031 === focusedChannelId) {
              continue;
            } else {
              delete displayedMediaItemIdsPerChannel[tmp21];
              continue;
            }
            continue;
          }
        }
      }
      if (null != id) {
        if (null != focusedChannelId) {
          if (null != displayedMediaItemIdsPerChannel[focusedChannelId]) {
            const setState = useMediaPlayerManagerStore.setState;
            if (isPlaying) {
              isPlaying = !obj5.has(id);
            }
            const obj3 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
            setState(obj3);
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
    }
  });
}
prototype["updateDisplayState"] = updateDisplayState;
const updateDisplayState1 = new updateDisplayState("MediaPlayerManager", tmp2, tmp, prototype, MediaPlayerManager, this, require);
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