import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { getRootNavigationRef } from "../../main_tabs_v2/RootNavigationRef.native.tsx";
// discord_app/modules/media/native/MediaPlayerManager.tsx
import get_ActivityIndicator from "set";
import participantFromServer from "participantFromServer";
import withEqualityFn from "withEqualityFn";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import getState from "getState";
import { AppStates } from "ME";
import { ActivityPanelModes } from "ActivityPanelModes";
import MediaPlaybackPanelModes from "MediaPlaybackPanelModes";
import { Permissions } from "sum";
import keys from "keys";
import "initialize";

let c3;
let c4;
let closure_14;
let map1;
({ NativeEventEmitter: c3, NativeModules: c4 } = get_ActivityIndicator);
({ PLAYBACK_COMPLETION_DETECTION_TOLERANCE: map1, PLAYBACK_PROGRESS_UPDATE_INTERVAL: closure_14 } = MediaPlaybackPanelModes);
let closure_16 = new require("ensureGuildLoaded")("MediaPlayerManager");
let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  const obj = { activeMediaPlayerSource: "HermesInternal", mediaSourceMessage: "PX_16", canAccessMedia: "disabled", isPlaying: false, wasPipClosedByUser: null, progress: null, rate: "ct", showPip: "Instance", closePip: "function determine_Pnpm_installWorkletsSupportTs1(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);}", displayedMediaItemIdsPerChannel: "function pack_Pnpm_installWorkletsSupportTs2(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);}", currentlyDisplayedChannelId: "function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();}" };
  obj[8] = function closePip() {
    callback(outer1_2[13]).batchUpdates(() => callback({ showPip: false }));
  };
  obj[9] = {};
  return obj;
});
class MediaPlayerManager extends tmp8 {
  constructor() {
    tmp2 = new MediaPlayerManager(tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  const obj = new closure_3(closure_4.MediaPlayerManager);
  const items = [obj.addListener("MediaPlayerPlaybackSourceChanged", this.handleMediaPlayerPlaybackSourceChanged), obj.addListener("MediaPlayerPlaybackProgressUpdated", this.handleMediaPlayerPlaybackProgressUpdated), obj.addListener("MediaPlayerPlaybackRateChanged", this.handleMediaPlayerPlaybackRateChanged), obj.addListener("MediaPlayerViewWillAppear", this.handleMediaPlayerViewWillAppear), obj.addListener("MediaPlayerViewDidDisappear", this.handleMediaPlayerViewDidDisappear)];
  this.subscriptions = items;
  let MediaPlayerManager = closure_4.MediaPlayerManager;
  const result = MediaPlayerManager.subscribeToPlaybackEvents();
  const rootNavigationRef = getRootNavigationRef /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.addListener("state", self.updateDisplayState);
  }
  self.voicePanelStoreUnsubscribe = withEqualityFn.subscribe(self.handleVoicePanelStateUpdated);
  participantFromServer.addChangeListener(self.handleEmbeddedActivitiesUpdated);
  ensureGuildLoaded.addChangeListener(self.updateMediaPermissions);
  getUncachedChannelPermissions.addChangeListener(self.updateMediaPermissions);
  const obj2 = getRootNavigationRef /* getRootNavigationRef */;
  const tmp2 = require;
  const subscription = dispatcher.subscribe("LOGOUT", self.userDidClosePip);
  const obj4 = dispatcher;
  if (tmp2Result.isIOS()) {
    self.showPipUnsubscribe = obj.subscribe((showPip, showPip2) => {
      if (showPip2.showPip) {
        if (!showPip.showPip) {
          const MediaPlayerManager = closure_4.MediaPlayerManager;
          MediaPlayerManager.clearNowPlayingInfo();
        }
      }
      let tmp3 = 0 !== showPip2.rate && 0 === showPip.rate && !showPip.showPip;
      if (tmp3) {
        tmp3 = state.getState() === constants.ACTIVE;
      }
      if (tmp3) {
        const MediaPlayerManager2 = closure_4.MediaPlayerManager;
        MediaPlayerManager2.clearNowPlayingInfo();
      }
    });
  }
  tmp6.verbose("Initialized and subscribed to playback events");
};
prototype["updateMediaPermissions"] = function updateMediaPermissions() {
  const self = this;
  self(705).batchUpdates(() => {
    const activeMediaPlayerSource = outer1_17.getState().activeMediaPlayerSource;
    let channelId;
    if (activeMediaPlayerSource != null) {
      channelId = activeMediaPlayerSource.channelId;
    }
    if (channelId == null) {
      channelId = null;
    }
    const channel = outer1_7.getChannel(channelId);
    if (null != channel) {
      if (!channel.isPrivate()) {
        if (!outer1_9.can(outer1_15.VIEW_CHANNEL, channel)) {
          obj.setState({ canAccessMedia: false });
          self.pauseCurrentPlayer();
        }
      }
    }
    outer1_17.setState({ canAccessMedia: true });
  });
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  const subscriptions = this.subscriptions;
  const item = subscriptions.forEach((remove) => remove.remove());
  this.subscriptions = [];
  const rootNavigationRef = getRootNavigationRef /* getRootNavigationRef */.getRootNavigationRef();
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
  participantFromServer.removeChangeListener(self.handleEmbeddedActivitiesUpdated);
  ensureGuildLoaded.removeChangeListener(self.updateMediaPermissions);
  getUncachedChannelPermissions.removeChangeListener(self.updateMediaPermissions);
  const obj = getRootNavigationRef /* getRootNavigationRef */;
  dispatcher.unsubscribe("LOGOUT", self.userDidClosePip);
};
prototype["pauseCurrentPlayer"] = function pauseCurrentPlayer(arg0) {
  const MediaPlayerManager = closure_4.MediaPlayerManager;
  MediaPlayerManager.pauseCurrentPlayer();
};
prototype["playCurrentPlayer"] = function playCurrentPlayer() {
  const MediaPlayerManager = closure_4.MediaPlayerManager;
  MediaPlayerManager.playCurrentPlayer();
};
prototype["userDidClosePip"] = function userDidClosePip() {
  batchUpdates /* batchUpdates */.batchUpdates(() => state.setState({ wasPipClosedByUser: true, showPip: false }));
};
prototype["pauseAndClosePip"] = function pauseAndClosePip() {
  const self = this;
  self(705).batchUpdates(() => {
    self.pauseCurrentPlayer();
    outer1_17.setState({ wasPipClosedByUser: true, showPip: false });
  });
};
prototype["handleVoicePanelStateUpdated"] = function handleVoicePanelStateUpdated() {
  const state = withEqualityFn.getState();
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
  if (participantFromServer.getActivityPanelMode() === ActivityPanelModes.PIP) {
    const self = this;
    this.pauseAndClosePip();
  }
};
prototype["handleMediaPlayerPlaybackRateChanged"] = function handleMediaPlayerPlaybackRateChanged(arg0) {
  let importDefault;
  let require;
  const self = this;
  ({ source: importDefault, rate: require } = arg0);
  require(self[13]).batchUpdates(() => {
    let activeMediaPlayerSource;
    let isPlaying;
    let wasPipClosedByUser;
    if (null == closure_1) {
      outer1_17.setState({ rate: 0, isPlaying: false });
    }
    let id;
    if (closure_1 != null) {
      id = tmp.id;
    }
    outer1_16.verbose("Playback rate changed to " + closure_0 + ": " + id);
    const state = outer1_17.getState();
    ({ activeMediaPlayerSource, isPlaying, wasPipClosedByUser } = state);
    if (tmp9(activeMediaPlayerSource, tmp10)) {
      let obj = { rate: null, isPlaying: null, wasPipClosedByUser: null };
      obj[0] = tmp5;
      obj[1] = 0 !== tmp5;
      let tmp15 = false === isPlaying;
      if (tmp15) {
        tmp15 = tmp5 > 0;
      }
      let tmp16 = !tmp15;
      if (!tmp15) {
        tmp16 = wasPipClosedByUser;
      }
      obj[2] = tmp16;
      outer1_17.setState(obj);
      self.updateDisplayState();
    } else {
      obj = { source: null };
      obj[0] = tmp;
      const result = self.handleMediaPlayerPlaybackSourceChanged(obj);
      obj = { source: null, rate: null };
      obj[0] = tmp;
      obj[1] = tmp5;
      const result1 = self.handleMediaPlayerPlaybackRateChanged(obj);
    }
    tmp10 = closure_1;
    tmp9 = outer1_1(self[18]);
  });
};
prototype["handleMediaPlayerPlaybackProgressUpdated"] = function handleMediaPlayerPlaybackProgressUpdated(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ source: require, time: importDefault, duration: dependencyMap } = arg0);
  batchUpdates /* batchUpdates */.batchUpdates(() => {
    let obj = outer1_17;
    const state = outer1_17.getState();
    if (tmp2(state.activeMediaPlayerSource, closure_0)) {
      const currentlyDisplayedChannelId = state.currentlyDisplayedChannelId;
      if (state.showPip) {
        let tmp7;
        if (closure_2 > 0) {
          obj = { time: null, duration: null, isCompleted: null };
          obj[0] = closure_1;
          obj[1] = tmp6;
          let flag;
          if (tmp6 > 0) {
            flag = tmp6 - closure_1 <= outer1_13;
          }
          if (flag == null) {
            flag = false;
          }
          obj[2] = flag;
          tmp7 = obj;
        }
        const progress = state.progress;
        let tmp9 = null != progress && null != tmp7;
        if (tmp9) {
          const _Math = Math;
          tmp9 = Math.abs(tmp7.time - progress.time) < outer1_14;
        }
        if (tmp9) {
          tmp9 = tmp7.time !== tmp7.duration;
        }
        if (!tmp9) {
          obj = { progress: null };
          obj[0] = tmp7;
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
  source(705).batchUpdates(() => {
    let obj = outer1_17;
    let id;
    const state = outer1_17.getState();
    if (source != null) {
      id = tmp3.id;
    }
    outer1_16.verbose("Playback source changed: " + id);
    const activeMediaPlayerSource = state.activeMediaPlayerSource;
    if (!tmp6(activeMediaPlayerSource, source)) {
      obj = { activeMediaPlayerSource: null, mediaSourceMessage: null, progress: "disabled", rate: false, isPlaying: false, wasPipClosedByUser: 0 };
      obj[0] = tmp3;
      let orFetchMediaSourceMessage;
      if (null != tmp3) {
        orFetchMediaSourceMessage = self.getOrFetchMediaSourceMessage(tmp3);
      }
      obj[1] = orFetchMediaSourceMessage;
      obj.setState(obj);
      const result = self.updateMediaPermissions();
      self.updateDisplayState();
      const tmp8 = tmp3;
    }
  });
};
prototype["getOrFetchMediaSourceMessage"] = function getOrFetchMediaSourceMessage(arg0) {
  let assetUrl;
  let channelId;
  let messageId;
  const self = this;
  ({ channelId, messageId, assetUrl } = arg0);
  if (null != messageId) {
    if (null != channelId) {
      message = message.getMessage(channelId, messageId);
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
                someResult = attachments.some((url) => url.url === closure_0);
              }
            }
            return someResult;
          });
          if (null != found) {
            return found;
          }
          const toArrayResult = messages.toArray();
        }
        const obj = { channelId: null, messageId: null };
        obj[0] = channelId;
        obj[1] = messageId;
        const message1 = self(6826).fetchMessage(obj);
        message1.then((arg0) => {
          if (null != arg0) {
            const result = self.handleMediaSourceMessageUpdated(arg0);
          }
        });
        const obj2 = self(6826);
      }
      obj4 = message;
    }
  }
};
prototype["handleMediaSourceMessageUpdated"] = function handleMediaSourceMessageUpdated(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => {
    let obj = outer1_17;
    const activeMediaPlayerSource = outer1_17.getState().activeMediaPlayerSource;
    let messageId;
    if (activeMediaPlayerSource != null) {
      messageId = activeMediaPlayerSource.messageId;
    }
    if (messageId === id.id) {
      obj = { mediaSourceMessage: null };
      obj[0] = tmp2;
      obj.setState(obj);
    }
  });
};
prototype["handleMediaPlayerViewWillAppear"] = function handleMediaPlayerViewWillAppear(arg0) {
  let importDefault;
  let require;
  const self = this;
  ({ mediaItemIds: importDefault, channelId: require } = arg0);
  require(self[13]).batchUpdates(() => {
    const displayedMediaItemIdsPerChannel = outer1_17.getState().displayedMediaItemIdsPerChannel;
    let items = displayedMediaItemIdsPerChannel[closure_0];
    if (items == null) {
      items = [];
    }
    const items1 = [...closure_1];
    displayedMediaItemIdsPerChannel[closure_0] = new Set(items1);
    outer1_17.setState({ displayedMediaItemIdsPerChannel });
    self.updateDisplayState();
  });
};
prototype["handleMediaPlayerViewDidDisappear"] = function handleMediaPlayerViewDidDisappear(arg0) {
  let importDefault;
  let require;
  const self = this;
  ({ mediaItemIds: importDefault, channelId: require } = arg0);
  require(self[13]).batchUpdates(() => {
    const displayedMediaItemIdsPerChannel = outer1_17.getState().displayedMediaItemIdsPerChannel;
    let set = displayedMediaItemIdsPerChannel[closure_0];
    if (set == null) {
      const _Set = Set;
      set = new Set();
    }
    const items = [...set];
    const set1 = new Set(items.filter((arg0) => !closure_1.includes(arg0)));
    if (0 === set1.size) {
      delete tmp2[tmp];
    } else {
      displayedMediaItemIdsPerChannel[closure_0] = set1;
    }
    outer1_17.setState({ displayedMediaItemIdsPerChannel });
    self.updateDisplayState();
  });
};
function updateDisplayState(MediaPlayerManager, arg1, arg2, prototype, MediaPlayerManager2, arg5, require) {
  batchUpdates /* batchUpdates */.batchUpdates(() => {
    let activeMediaPlayerSource;
    let displayedMediaItemIdsPerChannel;
    let isPlaying;
    let progress;
    let obj = store;
    const state = store.getState();
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
            tmp7 = progress.duration - progress.time <= closure_13;
          }
          tmp6 = !tmp7;
        }
        isPlaying = tmp6;
      }
      let obj1 = callback(table[20]);
      const focusedChannelId = obj1.getFocusedChannelId();
      if (null != focusedChannelId) {
        if (state.currentlyDisplayedChannelId !== focusedChannelId) {
          for (const key10031 in displayedMediaItemIdsPerChannel) {
            let tmp23 = key10031;
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
            obj = { showPip: null, currentlyDisplayedChannelId: null, displayedMediaItemIdsPerChannel: null };
            obj[0] = isPlaying;
            obj[1] = focusedChannelId;
            obj[2] = displayedMediaItemIdsPerChannel;
            store.setState(obj);
          } else {
            obj = { showPip: null, currentlyDisplayedChannelId: null, displayedMediaItemIdsPerChannel: null };
            obj[0] = isPlaying;
            obj[1] = focusedChannelId;
            obj[2] = displayedMediaItemIdsPerChannel;
            store.setState(obj);
          }
        } else {
          obj1 = { showPip: null, currentlyDisplayedChannelId: null, displayedMediaItemIdsPerChannel: null };
          obj1[0] = isPlaying;
          obj1[1] = focusedChannelId;
          obj1[2] = displayedMediaItemIdsPerChannel;
          store.setState(obj1);
        }
      } else {
        const obj2 = { showPip: null, currentlyDisplayedChannelId: null, displayedMediaItemIdsPerChannel: null };
        obj2[0] = isPlaying;
        obj2[1] = focusedChannelId;
        obj2[2] = displayedMediaItemIdsPerChannel;
        store.setState(obj2);
      }
    }
  });
}
prototype["updateDisplayState"] = updateDisplayState;
updateDisplayState = new updateDisplayState("MediaPlayerManager", tmp2, tmp, prototype, MediaPlayerManager, new.target, require);
// ThrowIfThisInitialized (0x7c)
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
let tmp6 = new require("ensureGuildLoaded")("MediaPlayerManager");
let result = require("withEqualityFn").fileFinishedImporting("modules/media/native/MediaPlayerManager.tsx");

export default updateDisplayState;
export const useMediaPlayerManagerStore = obj;
export const isPlaybackComplete = function isPlaybackComplete(duration) {
  if (duration.duration > 0) {
    return duration.duration - duration.time <= closure_13;
  }
};