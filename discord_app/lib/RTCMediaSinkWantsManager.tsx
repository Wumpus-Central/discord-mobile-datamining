// === Module 13805: RTCMediaSinkWantsManager ===

// Module 13805 (RTCMediaSinkWantsManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import DurationsDefault from "Durations" /* 1090 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import WindowVisibilityVideoManager2 from "WindowVisibilityVideoManager" /* 9609 */;
import BrowserInvertedWantsExperiment from "BrowserInvertedWantsExperiment" /* 13806 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4618 */;

require = fn;
function getDefaultWants(wantsLevel) {
  obj = BrowserInvertedWantsExperiment;
  if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
    obj = {};
    const merged = Object.assign(obj);
  } else {
    obj = { any: wantsLevel };
  }
  return obj;
}
const VideoToggleState = fn(1074).VideoToggleState;
const SimulcastOverrideQuality = fn(4585).SimulcastOverrideQuality;
let c7 = 100;
let obj = { any: 0 };
let closure_9 = 30 * DurationsDefault.Millis.SECOND;
let closure_10 = 120 * DurationsDefault.Millis.SECOND;
const BrowserUtils = fn(4882);
let closure_11 = -1 !== BrowserUtils.getFirefoxVersion();
obj = { UserSSRCUpdate: "user-ssrc-update", Update: "update" };
class RTCMediaSinkWantsManager extends tmp2 {
  constructor(arg0, arg1, arg2) {
    mediaSinkWantsLadder = importAll;
    if (importAll === undefined) {
      tmp7 = closure_0;
      tmp8 = closure_2;
      tmp9 = new.target;
      tmp10 = new.target;
      mediaSinkWantsLadder = new closure_0(closure_2[8]).MediaSinkWantsLadder();
    }
    tmp11 = new RTCMediaSinkWantsManager(tmp5, tmp4, tmp3, tmp2, tmp);
    closure_0 = tmp11;
    tmp11.connection = null;
    tmp11.audioSsrcs = {};
    tmp11.videoSsrcs = {};
    tmp11.remoteVideoSsrcs = {};
    tmp11.framesReceived = {};
    tmp11.streamIds = {};
    tmp11.offscreenUsers = {};
    tmp11.offscreenDisabledUsers = {};
    tmp11.streamPixelCounts = {};
    tmp13 = closure_0;
    tmp14 = closure_2;
    tmp12 = c7;
    obj = closure_0(closure_2[6]);
    if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
      obj = {};
      tmp15 = closure_8;
      tmp16 = obj;
      merged = Object.assign(closure_8);
      obj1 = obj;
    } else {
      obj1 = { any: null };
      obj1.any = tmp12;
    }
    tmp11.latestWants = obj1;
    set = new Set();
    tmp11.participants = set;
    tmp11.selectedParticipantId = null;
    tmp11.pipOpen = false;
    map = new Map();
    tmp11.simulcastDebugOverrides = map;
    tmp11.videoHealthManager = null;
    set1 = new Set();
    tmp11.otherUsers = set1;
    tmp11.delayedUpdate = function delayedUpdate() {
      const delayedCall = closure_0.delayedCall;
      delayedCall.delay();
    };
    tmp11.addLru = function addLru(arg0, timestamp, items) {
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
    tmp11.updateOffscreenUsers = function updateOffscreenUsers() {
      const connection = closure_0.connection;
      let activeOutputSinkTrackingEnabled;
      if (connection != null) {
        activeOutputSinkTrackingEnabled = connection.getActiveOutputSinkTrackingEnabled();
      }
      if (activeOutputSinkTrackingEnabled) {
        const _Date = Date;
        const timestamp = Date.now();
        const items = [];
        const entries = SnowflakeUtilsDefault.entries(closure_0.streamIds);
        const tmp14 = entries[Symbol.iterator]();
        while (tmp14 !== undefined) {
          let tmp19 = _slicedToArray(tmp16, 2);
          [tmp20, tmp21] = tmp19;
          if (null != tmp21) {
            let obj2 = closure_0;
            let connection2 = closure_0.connection;
            let hasActiveVideoOutputSink;
            if (connection2 != null) {
              hasActiveVideoOutputSink = connection2.getHasActiveVideoOutputSink(tmp22);
            }
            if (hasActiveVideoOutputSink) {
              delete tmp3[tmp2];
              let offscreenDisabledUsers = obj2.offscreenDisabledUsers;
              delete tmp[tmp2];
            } else if (null == tmp26[tmp20]) {
              obj2.offscreenUsers[tmp20] = timestamp;
              let addLruResult = obj2.addLru(tmp20, timestamp, items);
            } else if (!obj2.offscreenDisabledUsers[tmp20]) {
              let diff = timestamp - obj2.offscreenUsers[tmp20];
              if (diff >= obj2.getOffscreenTimeoutMs()) {
                obj2.offscreenDisabledUsers[tmp20] = true;
              } else {
                let addLruResult1 = obj2.addLru(tmp20, timestamp, items);
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
    tmp11.handleLocalVideoDisabled = function handleLocalVideoDisabled() {
      closure_0.update();
    };
    tmp11.handleLocalMute = function handleLocalMute() {
      closure_0.update();
    };
    tmp11.update = function update() {
      let items = arg0;
      if (arg0 === undefined) {
        items = [];
      }
      obj = closure_0;
      const wantsLevel = closure_0.getWantsLevel();
      let tmp5 = getDefaultWants(wantsLevel);
      let tmp9 = tmp5;
      if (obj2.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.update").invertWants) {
        obj.invertWants(tmp5, wantsLevel);
        let tmp13 = tmp5;
        if (closure_11) {
          obj = {};
          const merged = Object.assign(tmp5);
          tmp13 = obj;
        }
        tmp9 = tmp13;
      }
      obj.updateOffscreenUsers();
      obj2 = BrowserInvertedWantsExperiment;
      let isDesktopResult = PlatformUtils.isDesktop();
      if (isDesktopResult) {
        isDesktopResult = obj.isOneToOneCall();
      }
      if (isDesktopResult) {
        isDesktopResult = !obj.isStageChannel;
      }
      const tmp6Result = PlatformUtils;
      const entries = SnowflakeUtilsDefault.entries(obj.videoSsrcs);
      while (tmp22 !== undefined) {
        let tmp25 = _slicedToArray(tmp23, 2);
        let first = tmp25[0];
        let tmp27 = first;
        let arr2 = tmp25[1];
        let items1 = [];
        let flag = false;
        let obj6 = closure_0;
        let num = closure_0.streamPixelCounts[closure_0.streamIds[first]];
        if (num == null) {
          num = 0;
        }
        let wantsLevel1 = obj6.getWantsLevel(num);
        let ssrc = arr2[0].ssrc;
        if (obj6.shouldReceiveFromUser(tmp27)) {
          let tmp37 = tmp27 === obj6.selectedParticipantId;
          if (tmp37) {
            tmp37 = wantsLevel !== c7;
          }
          if (tmp37) {
            tmp37 = !obj6.pipOpen;
          }
          let tmp41 = tmp37;
          if (arr2.length > 1) {
            for (const item10121 of arr2) {
              let tmp51 = item10121;
              if (item10121.quality === c7) {
                let ssrc2 = tmp51.ssrc;
                if (tmp41) {
                  tmp5[ssrc2] = tmp53;
                  ssrc = tmp51.ssrc;
                } else {
                  tmp5[ssrc2] = 0;
                }
              } else if (tmp41) {
                tmp5[tmp51.ssrc] = 0;
              } else {
                if (isDesktopResult) {
                  tmp5[tmp51.ssrc] = wantsLevel1;
                }
                ssrc = tmp51.ssrc;
              }
              continue;
            }
            if (closure_0.supportsSeamless) {
              if (!tmp62.framesReceived[ssrc]) {
                flag = true;
                let items2 = [ssrc];
                items1 = items2;
                for (const item10152 of arr2) {
                  let tmp68 = item10152;
                  let tmp70 = item10152.ssrc !== ssrc;
                  if (tmp70) {
                    tmp70 = closure_0.framesReceived[tmp68.ssrc];
                  }
                  if (!tmp70) {
                    continue;
                  } else {
                    if (tmp68.quality === c7) {
                      tmp5[tmp68.ssrc] = tmp76;
                    } else {
                      let tmp78 = wantsLevel;
                      if (isDesktopResult) {
                        tmp78 = wantsLevel1;
                      }
                      tmp5[tmp68.ssrc] = tmp78;
                    }
                    let arr = items1.push(tmp68.ssrc);
                  }
                }
              }
            }
          } else if (tmp41) {
            tmp5[ssrc] = c7;
          } else if (isDesktopResult) {
            tmp5[ssrc] = wantsLevel1;
          }
        } else {
          for (const item10096 of arr2) {
            tmp5[item10096.ssrc] = 0;
            continue;
          }
        }
        let tmp85 = closure_0;
        let simulcastOverrideQuality = closure_0.getSimulcastOverrideQuality(tmp27);
        if (simulcastOverrideQuality === SimulcastOverrideQuality.HIGH) {
          tmp5[ssrc] = c7;
        } else if (tmp88 === tmp89.LOW) {
          tmp5[ssrc] = 50;
        }
        let tmp96 = tmp85.supportsSeamless && flag;
        if (!tmp96) {
          let items3 = [ssrc];
          items1 = items3;
        }
        for (const item10201 of arr2) {
          let tmp100 = item10201;
          if (!items1.includes(item10201.ssrc)) {
            let framesReceived = closure_0.framesReceived;
            let ssrc3 = tmp100.ssrc;
            delete tmp2[tmp];
          }
          continue;
        }
        let hasItem = items.includes(tmp27);
        if (!hasItem) {
          let tmp110 = undefined !== closure_0.remoteVideoSsrcs[tmp27];
          if (tmp110) {
            tmp110 = !discord_common_shallowEqualDefault(tmp108.remoteVideoSsrcs[tmp27], items1);
          }
          hasItem = tmp110;
        }
        if (hasItem) {
          let items4 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
          closure_0.remoteVideoSsrcs[tmp27] = items4;
          let emitResult = closure_0.emit(obj.UserSSRCUpdate, first, closure_0.audioSsrcs[tmp27], items1);
        }
        continue;
      }
      if (closure_11) {
        tmp5 = tmp9;
      }
      const entries1 = Object.entries(closure_0.audioSsrcs);
      for (const item10265 of entries1) {
        let tmp131 = _slicedToArray(item10265, 2);
        [tmp132, tmp133] = tmp131;
        let connection = closure_0.connection;
        let localMute;
        if (connection != null) {
          localMute = connection.getLocalMute(tmp132);
        }
        if (localMute) {
          tmp5[tmp133] = 0;
        }
        continue;
      }
      let isEqualResult = null == closure_0.connection;
      if (!isEqualResult) {
        isEqualResult = _modDef12.isEqual(obj7.latestWants, tmp5);
      }
      if (!isEqualResult) {
        obj7.latestWants = tmp5;
        obj7.emit(obj.Update, tmp5);
      }
      return tmp5;
    };
    tmp11.incomingVideoEnabledChanged = function incomingVideoEnabledChanged() {
      closure_0.update();
    };
    tmp11.userId = global;
    tmp11.isStageChannel = fn;
    tmp11.supportsSeamless = importDefault;
    tmp11.ladder = mediaSinkWantsLadder;
    delayedCall = new tmp13(tmp14[9]).DelayedCall(100, tmp11.update);
    tmp11.delayedCall = delayedCall;
    timeout = new tmp13(tmp14[9]).Timeout();
    tmp11.offscreenTimeout = timeout;
    WindowVisibilityVideoManager = tmp13(tmp14[10]).WindowVisibilityVideoManager;
    onResult = WindowVisibilityVideoManager.on(tmp13(tmp14[10]).WindowVisibilityEvent.IncomingVideoEnabledChanged, tmp11.incomingVideoEnabledChanged);
    return tmp11;
  }
}
const prototype = RTCMediaSinkWantsManager.prototype;
prototype["getWantsLevel"] = function getWantsLevel(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const ladder = this.ladder;
  return ladder.getMaxSinkValue(this.getVideoParticipantCount(), num);
};
prototype["userVideoDisabled"] = function userVideoDisabled(arg0) {
  return this.offscreenDisabledUsers[arg0];
};
prototype["isOneToOneCall"] = function isOneToOneCall() {
  return 1 === this.otherUsers.size;
};
prototype["updateCallUserIds"] = function updateCallUserIds(_userIds) {
  this.otherUsers = new Set(_userIds);
  const otherUsers = this.otherUsers;
  otherUsers.delete(AuthenticationStore.getId());
  this.update();
};
prototype["shouldReceiveFromUser"] = function shouldReceiveFromUser(arg0) {
  const self = this;
  const connection = this.connection;
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
  const WindowVisibilityVideoManager = WindowVisibilityVideoManager2.WindowVisibilityVideoManager;
  return WindowVisibilityVideoManager.isIncomingVideoEnabled() && !localVideoDisabled;
};
prototype["invertWants"] = function invertWants(arg0, wantsLevel) {
  let values = Object.values(this.videoSsrcs);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (closure_11) {
      obj = _modDef12;
      let minByResult = obj.minBy(tmp3, (quality) => quality.quality);
      for (const item10038 of nextResult) {
        ssrc = undefined;
        ({ ssrc, ssrc: ssrc2 } = item10038);
        if (minByResult != null) {
          ssrc = minByResult.ssrc;
        }
        let num = 0;
        if (ssrc2 === ssrc) {
          num = c7;
        }
        arg0[ssrc] = num;
        continue;
      }
    } else {
      for (const item10023 of nextResult) {
        arg0[item10023.ssrc] = arg1;
        continue;
      }
    }
    continue;
  }
  values = Object.values(this.audioSsrcs);
  for (const item10055 of values) {
    arg0[item10055] = c7;
    continue;
  }
};
prototype["getAudioSSRCs"] = function getAudioSSRCs() {
  return this.audioSsrcs;
};
prototype["setConnection"] = function setConnection(c3, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const self = this;
  const connection = this.connection;
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
  self.connection = c3;
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
};
prototype["setAudioSSRC"] = function setAudioSSRC(userId, audioSSRC) {
  const self = this;
  if (audioSSRC > 0) {
    self.audioSsrcs[userId] = audioSSRC;
  } else {
    const audioSsrcs = self.audioSsrcs;
    delete tmp[tmp2];
  }
  return self.update();
};
prototype["setVideoSSRCs"] = function setVideoSSRCs(userId, mapped) {
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
      for (const item10017 of tmp5) {
        let ssrc = item10017.ssrc;
        let framesReceived = self.framesReceived;
        delete tmp3[tmp4];
        continue;
      }
    }
    const remoteVideoSsrcs = self.remoteVideoSsrcs;
    delete tmp2[tmp];
    const videoSsrcs = self.videoSsrcs;
    delete tmp2[tmp];
    const participants = self.participants;
    participants.delete(userId);
    self.emit(obj.UserSSRCUpdate, userId, self.audioSsrcs[userId], []);
  }
  return self.update(Array.from(self.participants));
};
prototype["setFirstFrameReceived"] = function setFirstFrameReceived(arg0) {
  this.framesReceived[arg0] = true;
  return this.update();
};
prototype["setStreamId"] = function setStreamId(arg0, arg1) {
  const self = this;
  if (null != arg1) {
    self.streamIds[arg0] = arg1;
  } else {
    if (arg0 in self.streamIds) {
      const streamPixelCounts = self.streamPixelCounts;
      delete tmp3[tmp];
    }
    const streamIds = self.streamIds;
    delete tmp[tmp2];
  }
  return self.update();
};
prototype["destroyUser"] = function destroyUser(arg0) {
  delete tmp[tmp2];
  delete tmp[tmp2];
  const participants = this.participants;
  participants.delete(arg0);
  delete tmp3[tmp];
  delete tmp[tmp2];
  return this.update(Array.from(this.participants));
};
prototype["reset"] = function reset() {
  const self = this;
  this.setConnection(null, false);
  this.audioSsrcs = {};
  this.videoSsrcs = {};
  this.remoteVideoSsrcs = {};
  this.framesReceived = {};
  this.streamIds = {};
  this.streamPixelCounts = {};
  obj = BrowserInvertedWantsExperiment;
  if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
    obj = {};
    const merged = Object.assign(obj);
  } else {
    obj = { any };
  }
  self.latestWants = obj;
  const WindowVisibilityVideoManager = tmp3(9609).WindowVisibilityVideoManager;
  WindowVisibilityVideoManager.off(WindowVisibilityVideoManager2.WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
};
prototype["setSelectedParticipant"] = function setSelectedParticipant(selectedParticipantId) {
  const self = this;
  if (selectedParticipantId === this.selectedParticipantId) {
    return self.latestWants;
  } else {
    const items = [];
    if (tmp) {
      items.push(self.selectedParticipantId);
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
};
prototype["setPipOpen"] = function setPipOpen(pipOpen) {
  const self = this;
  this.pipOpen = pipOpen;
  if (null != this.selectedParticipantId) {
    const items = [self.selectedParticipantId];
    let latestWants = self.update(items);
  } else {
    latestWants = self.latestWants;
  }
  return latestWants;
};
prototype["getOffscreenDisabledUsers"] = function getOffscreenDisabledUsers() {
  return this.offscreenDisabledUsers;
};
prototype["setSimulcastDebugOverride"] = function setSimulcastDebugOverride(arg0, arg1) {
  const simulcastDebugOverrides = this.simulcastDebugOverrides;
  const result = simulcastDebugOverrides.set(arg0, arg1);
  this.update();
};
prototype["setVideoSize"] = function setVideoSize(arg0, arg1) {
  const self = this;
  if (arg1 > 0) {
    self.streamPixelCounts[arg0] = arg1;
  } else {
    const streamPixelCounts = self.streamPixelCounts;
    delete tmp[tmp2];
  }
  self.delayedUpdate();
};
prototype["getVideoParticipantCount"] = function getVideoParticipantCount() {
  let num = 0;
  const keys = Object.keys(this.videoSsrcs);
  const iter = keys[Symbol.iterator]();
  while (iter !== undefined) {
    let connection = this.connection;
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
};
prototype["getOffscreenTimeoutMs"] = function getOffscreenTimeoutMs() {
  return this.isStageChannel ? closure_10 : closure_9;
};
prototype["getSimulcastOverrideQuality"] = function getSimulcastOverrideQuality(arg0) {
  const simulcastDebugOverrides = this.simulcastDebugOverrides;
  if (simulcastDebugOverrides.has(arg0)) {
    const simulcastDebugOverrides2 = this.simulcastDebugOverrides;
    let NO_OVERRIDE = simulcastDebugOverrides2.get(arg0);
  } else {
    NO_OVERRIDE = SimulcastOverrideQuality.NO_OVERRIDE;
  }
  return NO_OVERRIDE;
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/RTCMediaSinkWantsManager.tsx");

export default RTCMediaSinkWantsManager;
export const DEFAULT_WANTS_FULL = { any: 100 };
export const DEFAULT_WANTS_DISABLED = obj;
export const RTCMediaSinkWantsManagerEvent = obj;