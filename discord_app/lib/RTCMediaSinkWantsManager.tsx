// === Module 13617: RTCMediaSinkWantsManager ===

// Module 13617 (RTCMediaSinkWantsManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Constants2 from "Constants" /* 4915 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4945 */;
import WindowVisibilityVideoManager2 from "WindowVisibilityVideoManager" /* 9109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BrowserUtils from "BrowserUtils" /* 5402 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4948 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, active, connection, quality;

function getDefaultWants(wantsLevel) {
  let obj3;
  const obj = PlatformUtils;
  if (obj.isWeb()) {
    obj2 = {};
    const merged = Object.assign(obj);
    obj3 = obj2;
  } else {
    obj3 = { any: wantsLevel };
  }
  return obj3;
}
const VideoToggleState = Constants.VideoToggleState;
const SimulcastOverrideQuality = Constants2.SimulcastOverrideQuality;
let c7 = 100;
const DEFAULT_WANTS_DISABLED = { any: 0 };
let closure_9 = 30 * DurationsDefault.Millis.SECOND;
let closure_10 = 120 * DurationsDefault.Millis.SECOND;
let closure_11 = -1 !== BrowserUtils.getFirefoxVersion();
let obj2 = { UserSSRCUpdate: "user-ssrc-update", Update: "update" };
class RTCMediaSinkWantsManager extends TypedEventEmitter {
  constructor(userId, isStageChannel, supportsSeamless, arg3) {
    let closure_0;
    let obj3;
    let tmp3;
    let tmp4;
    let tmp5;
    let mediaSinkWantsLadder = arg3;
    if (arg3 === undefined) {
      let tmp7 = _require;
      const self = this;
      const self2 = this;
      mediaSinkWantsLadder = new require("MediaSinkWantsLadder").MediaSinkWantsLadder();
    }
    const tmp9 = new RTCMediaSinkWantsManager(tmp5, tmp4, tmp3, tmp2, tmp);
    _require = tmp9;
    tmp9.connection = null;
    tmp9.audioSsrcs = {};
    tmp9.videoSsrcs = {};
    tmp9.remoteVideoSsrcs = {};
    tmp9.framesReceived = {};
    tmp9.streamIds = {};
    tmp9.offscreenUsers = {};
    tmp9.offscreenDisabledUsers = {};
    tmp9.streamPixelCounts = {};
    let tmp11 = _require;
    let obj = require("PlatformUtils");
    if (obj.isWeb()) {
      obj2 = {};
      const tmp13 = obj;
      let merged = Object.assign(obj);
      obj3 = obj2;
    } else {
      obj3 = { any };
    }
    tmp9.latestWants = obj3;
    tmp9.participants = new Set();
    tmp9.selectedParticipantId = null;
    tmp9.pipOpen = false;
    new Set();
    tmp9.simulcastDebugOverrides = new Map();
    tmp9.videoHealthManager = null;
    new Map();
    tmp9.otherUsers = new Set();
    tmp9.delayedUpdate = function delayedUpdate() {
      const delayedCall = closure_0.delayedCall;
      delayedCall.delay();
    };
    tmp9.addLru = function addLru(arg0, timestamp, items) {
      items.push(arg0);
      if (items.length > 3) {
        let num = 0;
        let num2 = -1;
        let num3 = -1;
        let num4 = -1;
        if (0 < items.length) {
          do {
            let diff = timestamp - closure_0.offscreenUsers[items[num]];
            let tmp5 = num2;
            let tmp6 = num3;
            if (diff > num3) {
              tmp5 = num;
              tmp6 = diff;
            }
            num = num + 1;
            num2 = tmp5;
            num3 = tmp6;
            num4 = tmp5;
          } while (num < items.length);
        }
        closure_0.offscreenDisabledUsers[items[num4]] = true;
        items.splice(num4, 1);
      }
    };
    tmp9.updateOffscreenUsers = function updateOffscreenUsers() {
      let tmp17;
      let tmp18;
      connection = closure_0.connection;
      let activeOutputSinkTrackingEnabled;
      if (connection != null) {
        activeOutputSinkTrackingEnabled = connection.getActiveOutputSinkTrackingEnabled();
      }
      if (activeOutputSinkTrackingEnabled) {
        const _Date = Date;
        const timestamp = Date.now();
        const items = [];
        const obj = SnowflakeUtilsDefault;
        const entries = obj.entries(closure_0.streamIds);
        const tmp11 = entries[Symbol.iterator]();
        while (tmp11 !== undefined) {
          let tmp16 = _slicedToArray(tmp13, 2);
          [tmp17, tmp18] = tmp16;
          if (null != tmp18) {
            let connection2 = closure_0.connection;
            let hasActiveVideoOutputSink;
            if (connection2 != null) {
              hasActiveVideoOutputSink = connection2.getHasActiveVideoOutputSink(tmp19);
            }
            let offscreenUsers = closure_0.offscreenUsers;
            if (hasActiveVideoOutputSink) {
              delete offscreenUsers[tmp17];
              delete closure_0.offscreenDisabledUsers[tmp17];
            } else if (null == offscreenUsers[tmp17]) {
              closure_0.offscreenUsers[tmp17] = timestamp;
              let addLruResult = closure_0.addLru(tmp17, timestamp, items);
            } else if (!closure_0.offscreenDisabledUsers[tmp17]) {
              let diff = timestamp - closure_0.offscreenUsers[tmp17];
              if (diff >= closure_0.getOffscreenTimeoutMs()) {
                closure_0.offscreenDisabledUsers[tmp17] = true;
              } else {
                let addLruResult1 = closure_0.addLru(tmp17, timestamp, items);
              }
            }
          }
          continue;
        }
        if (items.length > 0) {
          let sum = timestamp + closure_0.getOffscreenTimeoutMs();
          for (const item10083 of items) {
            let _Math = Math;
            sum = Math.min(sum, closure_0.offscreenUsers[item10083] + closure_0.getOffscreenTimeoutMs());
            continue;
          }
          const offscreenTimeout2 = closure_0.offscreenTimeout;
          offscreenTimeout2.start(sum - timestamp, closure_0.update);
        } else {
          const offscreenTimeout = closure_0.offscreenTimeout;
          offscreenTimeout.stop();
        }
      }
    };
    tmp9.handleLocalVideoDisabled = function handleLocalVideoDisabled() {
      closure_0.update();
    };
    tmp9.handleLocalMute = function handleLocalMute() {
      closure_0.update();
    };
    tmp9.update = function update() {
      let arr2;
      let first;
      let tmp131;
      let tmp132;
      let items = arg0;
      if (arg0 === undefined) {
        items = [];
      }
      const wantsLevel = closure_0.getWantsLevel();
      let tmp3 = getDefaultWants(wantsLevel);
      obj2 = PlatformUtils;
      let tmp7 = tmp3;
      if (obj2.isWeb()) {
        closure_0.invertWants(tmp3, wantsLevel);
        let tmp11 = tmp3;
        if (closure_11) {
          const obj3 = {};
          const merged = Object.assign(tmp3);
          tmp11 = obj3;
        }
        tmp7 = tmp11;
      }
      closure_0.updateOffscreenUsers();
      const tmp4Result = PlatformUtils;
      const isDesktopResult = tmp4Result.isDesktop() && closure_0.isOneToOneCall() && !closure_0.isStageChannel;
      const obj5 = SnowflakeUtilsDefault;
      const entries = obj5.entries(closure_0.videoSsrcs);
      const tmp20 = entries[Symbol.iterator]();
      while (tmp20 !== undefined) {
        [first, arr2] = tmp21;
        let tmp25 = first;
        let items1 = [];
        let flag = false;
        let num = closure_0.streamPixelCounts[closure_0.streamIds[first]];
        if (num == null) {
          num = 0;
        }
        let wantsLevel1 = closure_0.getWantsLevel(num);
        let ssrc = arr2[0].ssrc;
        if (closure_0.shouldReceiveFromUser(tmp25)) {
          let tmp35 = tmp25 === closure_0.selectedParticipantId && wantsLevel !== c7 && !closure_0.pipOpen;
          let tmp39 = tmp35;
          if (arr2.length > 1) {
            for (const item10119 of arr2) {
              if (item10119.quality === c7) {
                let ssrc2 = item10119.ssrc;
                if (tmp39) {
                  tmp3[ssrc2] = tmp51;
                  ssrc = item10119.ssrc;
                } else {
                  tmp3[ssrc2] = 0;
                }
              } else if (tmp39) {
                tmp3[item10119.ssrc] = 0;
              } else {
                if (isDesktopResult) {
                  tmp3[item10119.ssrc] = wantsLevel1;
                }
                ssrc = item10119.ssrc;
              }
              continue;
            }
            if (closure_0.supportsSeamless) {
              if (!tmp60.framesReceived[ssrc]) {
                flag = true;
                let items2 = [ssrc];
                items1 = items2;
                for (const item10150 of arr2) {
                  let tmp68 = item10150.ssrc !== ssrc && closure_0.framesReceived[item10150.ssrc];
                  if (tmp68) {
                    if (item10150.quality === c7) {
                      tmp3[item10150.ssrc] = tmp74;
                    } else {
                      let tmp76 = wantsLevel;
                      let ssrc3 = item10150.ssrc;
                      if (isDesktopResult) {
                        tmp76 = wantsLevel1;
                      }
                      tmp3[ssrc3] = tmp76;
                    }
                    let arr = items1.push(item10150.ssrc);
                  }
                  continue;
                }
              }
            }
          } else if (tmp39) {
            tmp3[ssrc] = c7;
          } else if (isDesktopResult) {
            tmp3[ssrc] = wantsLevel1;
          }
        } else {
          for (const item10094 of arr2) {
            tmp3[item10094.ssrc] = 0;
            continue;
          }
        }
        let simulcastOverrideQuality = closure_0.getSimulcastOverrideQuality(tmp25);
        if (simulcastOverrideQuality === SimulcastOverrideQuality.HIGH) {
          tmp3[ssrc] = c7;
        } else if (tmp86 === tmp87.LOW) {
          tmp3[ssrc] = 50;
        }
        let tmp94 = closure_0.supportsSeamless && flag;
        if (!tmp94) {
          let items3 = [ssrc];
          items1 = items3;
        }
        for (const item10199 of arr2) {
          if (!items1.includes(item10199.ssrc)) {
            delete closure_0.framesReceived[item10199.ssrc];
          }
          continue;
        }
        let hasItem = items.includes(tmp25);
        if (!hasItem) {
          let tmp108 = undefined !== closure_0.remoteVideoSsrcs[tmp25];
          if (tmp108) {
            tmp108 = !shallowEqualDefault(tmp106.remoteVideoSsrcs[tmp25], items1);
          }
          hasItem = tmp108;
        }
        if (hasItem) {
          let items4 = [];
          let remoteVideoSsrcs = closure_0.remoteVideoSsrcs;
          let arraySpreadResult = HermesBuiltin.arraySpread(items4, items1, 0);
          remoteVideoSsrcs[tmp25] = items4;
          let emitResult = closure_0.emit(obj2.UserSSRCUpdate, first, closure_0.audioSsrcs[tmp25], items1);
        }
        continue;
      }
      if (closure_11) {
        tmp3 = tmp7;
      }
      const entries1 = Object.entries(closure_0.audioSsrcs);
      for (const item10263 of entries1) {
        let tmp130 = _slicedToArray(item10263, 2);
        [tmp131, tmp132] = tmp130;
        connection = closure_0.connection;
        let localMute;
        if (connection != null) {
          localMute = connection.getLocalMute(tmp131);
        }
        if (localMute) {
          tmp3[tmp132] = 0;
        }
        continue;
      }
      let isEqualResult = null == closure_0.connection;
      if (!isEqualResult) {
        const obj8 = _modDef12;
        isEqualResult = obj8.isEqual(closure_0.latestWants, tmp3);
      }
      if (!isEqualResult) {
        closure_0.latestWants = tmp3;
        closure_0.emit(obj2.Update, tmp3);
      }
      return tmp3;
    };
    tmp9.incomingVideoEnabledChanged = function incomingVideoEnabledChanged() {
      closure_0.update();
    };
    tmp9.userId = userId;
    tmp9.isStageChannel = isStageChannel;
    tmp9.supportsSeamless = supportsSeamless;
    tmp9.ladder = mediaSinkWantsLadder;
    new Set();
    let delayedCall = new tmp11(2046).DelayedCall(100, tmp9.update);
    tmp9.delayedCall = delayedCall;
    const timeout = new tmp11(2046).Timeout();
    tmp9.offscreenTimeout = timeout;
    const WindowVisibilityVideoManager = tmp11(9109).WindowVisibilityVideoManager;
    WindowVisibilityVideoManager.on(tmp11(9109).WindowVisibilityEvent.IncomingVideoEnabledChanged, tmp9.incomingVideoEnabledChanged);
    return tmp9;
  }
  getWantsLevel(arg0) {
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    const ladder = this.ladder;
    return ladder.getMaxSinkValue(this.getVideoParticipantCount(), num);
  }
  userVideoDisabled(arg0) {
    return this.offscreenDisabledUsers[arg0];
  }
  isOneToOneCall() {
    return 1 === this.otherUsers.size;
  }
  updateCallUserIds(_userIds) {
    this.otherUsers = new Set(_userIds);
    const otherUsers = this.otherUsers;
    new Set(_userIds);
    otherUsers.delete(AuthenticationStore.getId());
    this.update();
  }
  shouldReceiveFromUser(arg0) {
    const self = this;
    connection = this.connection;
    let localVideoDisabled;
    if (connection != null) {
      localVideoDisabled = connection.getLocalVideoDisabled(arg0);
    }
    if (!localVideoDisabled) {
      let userVideoDisabledResult = self.userVideoDisabled(arg0);
      if (userVideoDisabledResult) {
        const videoHealthManager = self.videoHealthManager;
        let currentVideoToggleState;
        if (videoHealthManager != null) {
          currentVideoToggleState = videoHealthManager.getCurrentVideoToggleState(arg0);
        }
        userVideoDisabledResult = currentVideoToggleState !== VideoToggleState.AUTO_PROBING;
      }
      localVideoDisabled = userVideoDisabledResult;
    }
    const tmp5 = !localVideoDisabled;
    const WindowVisibilityVideoManager = WindowVisibilityVideoManager2.WindowVisibilityVideoManager;
    const tmp6 = WindowVisibilityVideoManager.isIncomingVideoEnabled() && tmp5;
    return tmp6;
  }
  invertWants(arg0, wantsLevel) {
    let ssrc;
    let ssrc2;
    const values = Object.values(this.videoSsrcs);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (closure_11) {
        let obj = _modDef12;
        let minByResult = obj.minBy(tmp3, (quality) => quality.quality);
        for (const item10038 of nextResult) {
          let ssrc1;
          ({ ssrc, ssrc: ssrc2 } = item10038);
          if (minByResult != null) {
            ssrc1 = minByResult.ssrc;
          }
          let num = 0;
          if (ssrc2 === ssrc1) {
            num = c7;
          }
          arg0[ssrc] = num;
          continue;
        }
      } else {
        for (const item10023 of nextResult) {
          arg0[item10023.ssrc] = wantsLevel;
          continue;
        }
      }
      continue;
    }
    const values2 = Object.values(this.audioSsrcs);
    for (const item10055 of values2) {
      arg0[item10055] = c7;
      continue;
    }
  }
  getAudioSSRCs() {
    return this.audioSsrcs;
  }
  setConnection(c3, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const self = this;
    connection = this.connection;
    if (connection != null) {
      connection.removeListener(BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, self.handleLocalVideoDisabled);
    }
    const connection2 = self.connection;
    if (connection2 != null) {
      connection2.removeListener(BaseConnectionEvent.BaseConnectionEvent.LocalMute, self.handleLocalMute);
    }
    const connection3 = self.connection;
    if (connection3 != null) {
      connection3.removeListener(BaseConnectionEvent.BaseConnectionEvent.ActiveSinksChange, self.delayedUpdate);
    }
    self.connection = connection;
    const connection4 = self.connection;
    if (connection4 != null) {
      connection4.addListener(BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, self.handleLocalVideoDisabled);
    }
    const connection5 = self.connection;
    if (connection5 != null) {
      connection5.addListener(BaseConnectionEvent.BaseConnectionEvent.LocalMute, self.handleLocalMute);
    }
    const connection6 = self.connection;
    if (connection6 != null) {
      connection6.addListener(BaseConnectionEvent.BaseConnectionEvent.ActiveSinksChange, self.delayedUpdate);
    }
    if (flag) {
      self.update();
    }
  }
  setAudioSSRC(userId, audioSSRC) {
    const self = this;
    if (audioSSRC > 0) {
      self.audioSsrcs[userId] = audioSSRC;
    } else {
      delete self.audioSsrcs[tmp];
    }
    return self.update();
  }
  setVideoSSRCs(userId, mapped) {
    const self = this;
    const found = mapped.filter((active) => {
      active = active.active;
      if (active) {
        let num = active.ssrc;
        if (num == null) {
          num = 0;
        }
        active = num > 0;
      }
      return active;
    });
    mapped = found.map((quality) => {
      quality = quality.quality;
      if (quality == null) {
        quality = any;
      }
      return { quality, ssrc: quality.ssrc };
    });
    if (mapped.length > 0) {
      self.videoSsrcs[userId] = mapped;
      const participants2 = self.participants;
      participants2.add(userId);
    } else {
      if (undefined !== self.videoSsrcs[userId]) {
        for (const item10017 of tmp2) {
          delete self.framesReceived[item10017.ssrc];
          continue;
        }
      }
      delete self.remoteVideoSsrcs[userId];
      delete self.videoSsrcs[userId];
      const participants = self.participants;
      participants.delete(userId);
      self.emit(obj2.UserSSRCUpdate, userId, self.audioSsrcs[userId], []);
    }
    return self.update(Array.from(self.participants));
  }
  setFirstFrameReceived(arg0) {
    this.framesReceived[arg0] = true;
    return this.update();
  }
  setStreamId(arg0, arg1) {
    const self = this;
    if (null != arg1) {
      self.streamIds[arg0] = arg1;
    } else {
      if (arg0 in self.streamIds) {
        delete self.streamPixelCounts[self.streamIds[arg0]];
      }
      delete self.streamIds[tmp];
    }
    return self.update();
  }
  destroyUser(arg0) {
    delete this.audioSsrcs[arg0];
    delete this.videoSsrcs[arg0];
    const participants = this.participants;
    participants.delete(arg0);
    delete this.streamPixelCounts[this.streamIds[arg0]];
    delete this.streamIds[arg0];
    return this.update(Array.from(this.participants));
  }
  reset() {
    let obj3;
    const self = this;
    this.setConnection(null, false);
    this.audioSsrcs = {};
    this.videoSsrcs = {};
    this.remoteVideoSsrcs = {};
    this.framesReceived = {};
    this.streamIds = {};
    this.streamPixelCounts = {};
    const obj = PlatformUtils;
    if (obj.isWeb()) {
      obj2 = {};
      const merged = Object.assign(obj);
      obj3 = obj2;
    } else {
      obj3 = { any };
    }
    self.latestWants = obj3;
    const WindowVisibilityVideoManager = WindowVisibilityVideoManager2.WindowVisibilityVideoManager;
    WindowVisibilityVideoManager.off(WindowVisibilityVideoManager2.WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
  }
  setSelectedParticipant(selectedParticipantId) {
    const self = this;
    if (selectedParticipantId === this.selectedParticipantId) {
      return self.latestWants;
    } else {
      const items = [];
      const tmp = null != self.selectedParticipantId && self.selectedParticipantId !== self.userId;
      if (tmp) {
        const arr = items.push(self.selectedParticipantId);
      }
      if (null != selectedParticipantId) {
        const participants = self.participants;
        if (participants.has(selectedParticipantId)) {
          self.selectedParticipantId = selectedParticipantId;
          items.push(selectedParticipantId);
        } else if (self.userId !== selectedParticipantId) {
          return self.latestWants;
        } else {
          self.selectedParticipantId = selectedParticipantId;
        }
      } else {
        self.selectedParticipantId = null;
      }
      return self.update(items.filter((item) => {
        let length;
        if (self.videoSsrcs[item] != null) {
          length = arr.length;
        }
        return length > 1;
      }));
    }
  }
  setPipOpen(pipOpen) {
    let latestWants;
    const self = this;
    this.pipOpen = pipOpen;
    if (null != this.selectedParticipantId) {
      const items = [self.selectedParticipantId];
      latestWants = self.update(items);
    } else {
      latestWants = self.latestWants;
    }
    return latestWants;
  }
  getOffscreenDisabledUsers() {
    return this.offscreenDisabledUsers;
  }
  setSimulcastDebugOverride(arg0, arg1) {
    const simulcastDebugOverrides = this.simulcastDebugOverrides;
    const result = simulcastDebugOverrides.set(arg0, arg1);
    this.update();
  }
  setVideoSize(arg0, arg1) {
    const self = this;
    if (arg1 > 0) {
      self.streamPixelCounts[arg0] = arg1;
    } else {
      delete self.streamPixelCounts[tmp];
    }
    self.delayedUpdate();
  }
  getVideoParticipantCount() {
    let num = 0;
    const keys = Object.keys(this.videoSsrcs);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      connection = this.connection;
      let localVideoDisabled;
      if (connection != null) {
        localVideoDisabled = connection.getLocalVideoDisabled(tmp3);
      }
      if (!localVideoDisabled) {
        num = num + 1;
      }
      continue;
    }
    return num;
  }
  getOffscreenTimeoutMs() {
    return this.isStageChannel ? closure_10 : closure_9;
  }
  getSimulcastOverrideQuality(arg0) {
    let NO_OVERRIDE;
    const simulcastDebugOverrides = this.simulcastDebugOverrides;
    if (simulcastDebugOverrides.has(arg0)) {
      const simulcastDebugOverrides2 = this.simulcastDebugOverrides;
      NO_OVERRIDE = simulcastDebugOverrides2.get(arg0);
    } else {
      NO_OVERRIDE = SimulcastOverrideQuality.NO_OVERRIDE;
    }
    return NO_OVERRIDE;
  }
}
const prototype = RTCMediaSinkWantsManager.prototype;
let result = size.fileFinishedImporting("lib/RTCMediaSinkWantsManager.tsx");

export default RTCMediaSinkWantsManager;
export const DEFAULT_WANTS_FULL = { any: 100 };
export { DEFAULT_WANTS_DISABLED };
export const RTCMediaSinkWantsManagerEvent = obj2;