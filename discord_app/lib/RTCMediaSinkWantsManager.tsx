// discord_app/lib/RTCMediaSinkWantsManager.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import { VideoToggleState } from "ME";
import { SimulcastOverrideQuality } from "DesktopSources";
import "on";
import num2 from "num2";

let require = arg1;
function getDefaultWants(arg0) {
  let obj = require(12882) /* getBrowserInvertedWantsConfig */;
  if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
    obj = {};
    const merged = Object.assign(obj);
  } else {
    obj = { any: null };
    obj[0] = arg0;
  }
  return obj;
}
let c7 = 100;
let obj = { any: 0 };
let closure_9 = 30 * require("set").Millis.SECOND;
let closure_10 = 120 * require("set").Millis.SECOND;
let closure_11 = -1 !== require("num2").getFirefoxVersion();
obj = { UserSSRCUpdate: "user-ssrc-update", Update: "update" };
class RTCMediaSinkWantsManager extends tmp2 {
  constructor(arg0, arg1, arg2) {
    mediaSinkWantsLadder = importAll;
    if (importAll === undefined) {
      tmp7 = MediaSinkWantsLadder;
      tmp8 = closure_2;
      tmp9 = new.target;
      tmp10 = new.target;
      mediaSinkWantsLadder = new require("getMaxSinkValue").MediaSinkWantsLadder();
    }
    tmp11 = new RTCMediaSinkWantsManager(tmp5, tmp4, tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    MediaSinkWantsLadder = tmp11;
    tmp11.connection = null;
    tmp11.audioSsrcs = {};
    tmp11.videoSsrcs = {};
    tmp11.remoteVideoSsrcs = {};
    tmp11.framesReceived = {};
    tmp11.streamIds = {};
    tmp11.offscreenUsers = {};
    tmp11.offscreenDisabledUsers = {};
    tmp11.streamPixelCounts = {};
    tmp13 = MediaSinkWantsLadder;
    tmp14 = closure_2;
    tmp12 = c7;
    obj = require("getBrowserInvertedWantsConfig");
    if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
      obj = {};
      tmp15 = __esModule;
      tmp16 = obj;
      merged = Object.assign(__esModule);
      obj1 = obj;
    } else {
      obj1 = { any: null };
      obj1[0] = tmp12;
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
      const delayedCall = tmp11.delayedCall;
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
            let tmp2 = tmp11;
            let diff = timestamp - tmp11.offscreenUsers[items[num]];
            let tmp4 = num;
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
        tmp11.offscreenDisabledUsers[items[num4]] = true;
        items.splice(num4, 1);
      }
    };
    tmp11.updateOffscreenUsers = function updateOffscreenUsers() {
      let tmp20;
      let tmp21;
      const connection = tmp11.connection;
      let activeOutputSinkTrackingEnabled;
      if (connection != null) {
        activeOutputSinkTrackingEnabled = connection.getActiveOutputSinkTrackingEnabled();
      }
      if (activeOutputSinkTrackingEnabled) {
        const _Date = Date;
        const timestamp = Date.now();
        const items = [];
        const entries = outer1_1(outer1_2[11]).entries(tmp11.streamIds);
        const tmp14 = entries[Symbol.iterator]();
        while (tmp14 !== undefined) {
          let tmp18 = outer1_3;
          let tmp19 = outer1_3(tmp16, 2);
          [tmp20, tmp21] = tmp19;
          if (null != tmp21) {
            let tmp55 = tmp11;
            let obj2 = tmp11;
            let connection2 = tmp11.connection;
            let hasActiveVideoOutputSink;
            if (connection2 != null) {
              let tmp23 = tmp21;
              hasActiveVideoOutputSink = connection2.getHasActiveVideoOutputSink(tmp22);
            }
            let tmp25 = tmp55;
            let tmp27 = tmp20;
            if (hasActiveVideoOutputSink) {
              delete tmp3[tmp2];
              let offscreenDisabledUsers = obj2.offscreenDisabledUsers;
              delete tmp[tmp2];
            } else if (null == tmp26[tmp20]) {
              let tmp38 = tmp55;
              let tmp39 = tmp20;
              obj2.offscreenUsers[tmp20] = timestamp;
              let addLruResult = obj2.addLru(tmp20, timestamp, items);
            } else {
              let tmp28 = tmp55;
              let tmp29 = tmp20;
              if (!obj2.offscreenDisabledUsers[tmp20]) {
                let tmp30 = tmp55;
                let tmp31 = tmp20;
                let diff = timestamp - obj2.offscreenUsers[tmp20];
                if (diff >= obj2.getOffscreenTimeoutMs()) {
                  let tmp36 = tmp55;
                  let tmp37 = tmp20;
                  obj2.offscreenDisabledUsers[tmp20] = true;
                } else {
                  let tmp33 = tmp55;
                  let tmp34 = tmp20;
                  let addLruResult1 = obj2.addLru(tmp20, timestamp, items);
                }
              }
            }
          }
          continue;
        }
        if (items.length > 0) {
          let sum = timestamp + tmp11.getOffscreenTimeoutMs();
          for (const item10083 of items) {
            let _Math = Math;
            let tmp49 = sum;
            let tmp50 = tmp11;
            let tmp51 = tmp11;
            sum = Math.min(sum, tmp11.offscreenUsers[item10083] + tmp11.getOffscreenTimeoutMs());
            continue;
          }
          const offscreenTimeout2 = tmp11.offscreenTimeout;
          offscreenTimeout2.start(sum - timestamp, tmp11.update);
        } else {
          const offscreenTimeout = tmp11.offscreenTimeout;
          offscreenTimeout.stop();
        }
        const obj = outer1_1(outer1_2[11]);
      }
    };
    tmp11.handleLocalVideoDisabled = function handleLocalVideoDisabled() {
      tmp11.update();
    };
    tmp11.handleLocalMute = function handleLocalMute() {
      tmp11.update();
    };
    tmp11.update = function update() {
      let tmp;
      let items = arg0;
      if (arg0 === undefined) {
        items = [];
      }
      let obj = tmp11;
      const wantsLevel = tmp11.getWantsLevel();
      let tmp5 = outer1_13(wantsLevel);
      let tmp9 = tmp5;
      if (obj2.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.update").invertWants) {
        obj.invertWants(tmp5, wantsLevel);
        let tmp13 = tmp5;
        if (outer1_11) {
          obj = {};
          const merged = Object.assign(tmp5);
          tmp13 = obj;
        }
        tmp9 = tmp13;
      }
      obj.updateOffscreenUsers();
      obj2 = tmp11(outer1_2[6]);
      const tmp6 = tmp11;
      let isDesktopResult = tmp11(outer1_2[13]).isDesktop();
      if (isDesktopResult) {
        isDesktopResult = obj.isOneToOneCall();
      }
      if (isDesktopResult) {
        isDesktopResult = !obj.isStageChannel;
      }
      const tmp6Result = tmp11(outer1_2[13]);
      const entries = outer1_1(outer1_2[11]).entries(obj.videoSsrcs);
      const obj5 = outer1_1(outer1_2[11]);
      while (tmp22 !== undefined) {
        let tmp24 = outer1_3;
        let tmp25 = outer1_3(tmp23, 2);
        let first = tmp25[0];
        let tmp27 = first;
        let arr2 = tmp25[1];
        let items1 = [];
        let flag = false;
        let tmp28 = tmp11;
        let obj6 = tmp11;
        let num = tmp11.streamPixelCounts[tmp11.streamIds[first]];
        if (num == null) {
          num = 0;
        }
        let tmp29 = tmp28;
        let wantsLevel1 = obj6.getWantsLevel(num);
        let tmp31 = arr2;
        let ssrc = arr2[0].ssrc;
        let tmp32 = first;
        if (obj6.shouldReceiveFromUser(tmp27)) {
          let tmp35 = first;
          let tmp36 = tmp28;
          let tmp37 = tmp27 === obj6.selectedParticipantId;
          if (tmp37) {
            let tmp38 = outer1_7;
            let tmp39 = outer1_7;
            tmp37 = wantsLevel !== outer1_7;
          }
          if (tmp37) {
            let tmp40 = tmp28;
            tmp37 = !obj6.pipOpen;
          }
          let tmp41 = tmp37;
          let tmp42 = arr2;
          if (arr2.length > 1) {
            let tmp49 = arr2;
            let tmp50 = arr2;
            for (const item10121 of arr2) {
              let tmp51 = item10121;
              if (item10121.quality === outer1_7) {
                let tmp59 = tmp37;
                let tmp60 = item10121;
                let ssrc2 = tmp51.ssrc;
                if (tmp41) {
                  let tmp61 = tmp52;
                  tmp5[ssrc2] = tmp53;
                  ssrc = tmp51.ssrc;
                } else {
                  tmp5[ssrc2] = 0;
                }
              } else {
                let tmp54 = tmp37;
                if (tmp41) {
                  let tmp58 = item10121;
                  tmp5[tmp51.ssrc] = 0;
                } else {
                  if (isDesktopResult) {
                    let tmp55 = item10121;
                    let tmp56 = wantsLevel1;
                    tmp5[tmp51.ssrc] = wantsLevel1;
                  }
                  let tmp57 = item10121;
                  ssrc = tmp51.ssrc;
                }
              }
              continue;
            }
            if (tmp11.supportsSeamless) {
              let tmp63 = tmp11;
              let tmp64 = ssrc;
              if (!tmp62.framesReceived[ssrc]) {
                flag = true;
                let tmp65 = ssrc;
                let items2 = [ssrc];
                items1 = items2;
                let tmp66 = arr2;
                let tmp67 = arr2;
                for (const item10152 of arr2) {
                  let tmp68 = item10152;
                  let tmp69 = ssrc;
                  let tmp70 = item10152.ssrc !== ssrc;
                  if (tmp70) {
                    let tmp71 = tmp11;
                    let tmp72 = tmp11;
                    let tmp73 = item10152;
                    tmp70 = tmp11.framesReceived[tmp68.ssrc];
                  }
                  if (!tmp70) {
                    continue;
                  } else {
                    let tmp74 = item10152;
                    if (tmp68.quality === outer1_7) {
                      let tmp79 = item10152;
                      let tmp80 = tmp75;
                      tmp5[tmp68.ssrc] = tmp76;
                    } else {
                      let tmp77 = item10152;
                      let tmp78 = wantsLevel;
                      if (isDesktopResult) {
                        tmp78 = wantsLevel1;
                      }
                      tmp5[tmp68.ssrc] = tmp78;
                    }
                    let tmp81 = items1;
                    let tmp82 = item10152;
                    let arr = items1.push(tmp68.ssrc);
                  }
                }
              }
            }
          } else {
            let tmp43 = tmp37;
            if (tmp41) {
              let tmp46 = ssrc;
              let tmp47 = outer1_7;
              let tmp48 = outer1_7;
              tmp5[ssrc] = outer1_7;
            } else if (isDesktopResult) {
              let tmp44 = ssrc;
              let tmp45 = wantsLevel1;
              tmp5[ssrc] = wantsLevel1;
            }
          }
        } else {
          let tmp33 = arr2;
          let tmp34 = arr2;
          for (const item10096 of arr2) {
            tmp5[item10096.ssrc] = 0;
            continue;
          }
        }
        let tmp86 = first;
        let tmp84 = tmp11;
        let tmp85 = tmp11;
        let simulcastOverrideQuality = tmp11.getSimulcastOverrideQuality(tmp27);
        if (simulcastOverrideQuality === outer1_6.HIGH) {
          let tmp92 = ssrc;
          let tmp93 = outer1_7;
          let tmp94 = outer1_7;
          tmp5[ssrc] = outer1_7;
        } else {
          let tmp90 = simulcastOverrideQuality;
          if (tmp88 === tmp89.LOW) {
            let tmp91 = ssrc;
            tmp5[ssrc] = 50;
          }
        }
        let tmp95 = tmp84;
        let tmp96 = tmp85.supportsSeamless && flag;
        if (!tmp96) {
          let tmp97 = ssrc;
          let items3 = [ssrc];
          items1 = items3;
        }
        let tmp98 = arr2;
        let tmp99 = arr2;
        for (const item10201 of arr2) {
          let hasItem = items1;
          hasItem = item10201;
          if (!items1.includes(item10201.ssrc)) {
            hasItem = tmp11;
            hasItem = tmp11;
            let framesReceived = tmp11.framesReceived;
            hasItem = item10201;
            let ssrc3 = hasItem.ssrc;
            delete tmp2[tmp];
          }
          continue;
        }
        hasItem = first;
        hasItem = items.includes(tmp27);
        if (!hasItem) {
          hasItem = first;
          hasItem = undefined !== tmp11.remoteVideoSsrcs[tmp27];
          if (hasItem) {
            hasItem = outer1_1;
            hasItem = outer1_2;
            hasItem = outer1_2;
            hasItem = first;
            hasItem = items1;
            hasItem = !outer1_1(outer1_2[14])(hasItem.remoteVideoSsrcs[tmp27], items1);
          }
        }
        if (hasItem) {
          hasItem = tmp11;
          hasItem = tmp11;
          hasItem = first;
          hasItem = items1;
          let items4 = [];
          hasItem = items4;
          hasItem = items1;
          let num2 = 0;
          hasItem = HermesBuiltin.arraySpread(items1, 0);
          tmp11.remoteVideoSsrcs[tmp27] = items4;
          hasItem = outer1_12;
          hasItem = tmp11;
          hasItem = tmp27;
          hasItem = items1;
          hasItem = tmp11.emit(outer1_12.UserSSRCUpdate, first, tmp11.audioSsrcs[tmp27], items1);
        }
        continue;
      }
      if (outer1_11) {
        tmp5 = tmp9;
      }
      hasItem = Object.entries(tmp11.audioSsrcs);
      for (const item10265 of hasItem) {
        hasItem = outer1_3;
        hasItem = outer1_3(item10265, 2);
        [tmp, tmp] = hasItem;
        hasItem = tmp11;
        hasItem = tmp11;
        let connection = tmp11.connection;
        hasItem = undefined;
        if (connection != null) {
          hasItem = connection.getLocalMute(hasItem);
        }
        if (hasItem) {
          tmp5[hasItem] = 0;
        }
        continue;
      }
      hasItem = tmp11;
      hasItem = null == tmp11.connection;
      if (!hasItem) {
        hasItem = outer1_1;
        hasItem = outer1_2;
        hasItem = outer1_2;
        hasItem = outer1_1(outer1_2[12]).isEqual(obj7.latestWants, tmp5);
        const obj8 = outer1_1(outer1_2[12]);
      }
      if (!hasItem) {
        obj7.latestWants = tmp5;
        hasItem = outer1_12;
        hasItem = obj7.emit(outer1_12.Update, tmp5);
      }
      return tmp5;
    };
    tmp11.incomingVideoEnabledChanged = function incomingVideoEnabledChanged() {
      tmp11.update();
    };
    tmp11.userId = global;
    tmp11.isStageChannel = arg1;
    tmp11.supportsSeamless = importDefault;
    tmp11.ladder = mediaSinkWantsLadder;
    delayedCall = new require("start").DelayedCall(100, tmp11.update);
    tmp11.delayedCall = delayedCall;
    timeout = new require("start").Timeout();
    tmp11.offscreenTimeout = timeout;
    WindowVisibilityVideoManager = require("isIncomingVideoEnabled").WindowVisibilityVideoManager;
    onResult = WindowVisibilityVideoManager.on(require("isIncomingVideoEnabled").WindowVisibilityEvent.IncomingVideoEnabledChanged, tmp11.incomingVideoEnabledChanged);
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
  otherUsers.delete(id.getId());
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
  const WindowVisibilityVideoManager = require(10573) /* isIncomingVideoEnabled */.WindowVisibilityVideoManager;
  return WindowVisibilityVideoManager.isIncomingVideoEnabled() && !localVideoDisabled;
};
prototype["invertWants"] = function invertWants(arg0, wantsLevel) {
  let ssrc;
  let ssrc2;
  let values = Object.values(this.videoSsrcs);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = closure_11;
    if (closure_11) {
      let tmp7 = importDefault;
      let tmp8 = dependencyMap;
      let obj = importDefault(12);
      let tmp9 = nextResult;
      let minByResult = obj.minBy(tmp3, (quality) => quality.quality);
      let tmp11 = tmp3;
      let tmp12 = tmp9;
      for (const item10038 of nextResult) {
        let tmp13 = minByResult;
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
      let tmp5 = tmp3;
      let tmp6 = nextResult;
      for (const item10023 of nextResult) {
        arg0[item10023.ssrc] = arg1;
        continue;
      }
    }
    continue;
  }
  values = Object.values(this.audioSsrcs);
  for (const item10055 of values) {
    let tmp16 = c7;
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
    connection.removeListener(require(4290) /* BaseConnectionEvent */.BaseConnectionEvent.LocalVideoDisabled, self.handleLocalVideoDisabled);
  }
  const connection2 = self.connection;
  if (connection2 != null) {
    connection2.removeListener(require(4290) /* BaseConnectionEvent */.BaseConnectionEvent.LocalMute, self.handleLocalMute);
  }
  const connection3 = self.connection;
  if (connection3 != null) {
    connection3.removeListener(require(4290) /* BaseConnectionEvent */.BaseConnectionEvent.ActiveSinksChange, self.delayedUpdate);
  }
  self.connection = c3;
  const connection4 = self.connection;
  if (connection4 != null) {
    connection4.addListener(require(4290) /* BaseConnectionEvent */.BaseConnectionEvent.LocalVideoDisabled, self.handleLocalVideoDisabled);
  }
  const connection5 = self.connection;
  if (connection5 != null) {
    connection5.addListener(require(4290) /* BaseConnectionEvent */.BaseConnectionEvent.LocalMute, self.handleLocalMute);
  }
  const connection6 = self.connection;
  if (connection6 != null) {
    connection6.addListener(require(4290) /* BaseConnectionEvent */.BaseConnectionEvent.ActiveSinksChange, self.delayedUpdate);
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
      quality = closure_7;
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
  let obj = require(12882) /* getBrowserInvertedWantsConfig */;
  if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
    obj = {};
    const merged = Object.assign(obj);
  } else {
    obj = { any: null };
    obj[0] = c7;
  }
  self.latestWants = obj;
  const WindowVisibilityVideoManager = tmp3(10573).WindowVisibilityVideoManager;
  WindowVisibilityVideoManager.off(require(10573) /* isIncomingVideoEnabled */.WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
};
prototype["setSelectedParticipant"] = function setSelectedParticipant(selectedParticipantId) {
  let self = this;
  self = this;
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
    return self.update(items.filter((arg0) => {
      let length;
      if (self.videoSsrcs[arg0] != null) {
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
      let tmp5 = nextResult;
      localVideoDisabled = connection.getLocalVideoDisabled(tmp3);
    }
    if (!localVideoDisabled) {
      let tmp6 = num;
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
let result = require("ME").fileFinishedImporting("lib/RTCMediaSinkWantsManager.tsx");

export default RTCMediaSinkWantsManager;
export const DEFAULT_WANTS_FULL = { any: 100 };
export const DEFAULT_WANTS_DISABLED = obj;
export const RTCMediaSinkWantsManagerEvent = obj;