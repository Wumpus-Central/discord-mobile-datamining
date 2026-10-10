// === Module 5214: DaveJoinTimer ===

// Module 5214 (DaveJoinTimer)
import TimeUtils from "TimeUtils" /* 5121 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/DaveJoinTimer.tsx");
class DaveJoinTimer {
  constructor(arg0) {
    TimeStampProducer = require;
    if (require === undefined) {
      tmp = closure_0;
      tmp2 = closure_1;
      TimeStampProducer = closure_0(closure_1[0]).TimeStampProducer;
    }
    merged = Object.assign({ pending: false, aloneWaitDuration: 0, joinIsGroupCreation: false, reported: false });
    merged.createdTime = global;
    merged.timestampProducer = TimeStampProducer;
    return merged;
  }
}
const prototype = DaveJoinTimer.prototype;
prototype["start"] = function start(arg0) {
  const self = this;
  this.clearJoin();
  this.pending = true;
  if (arg0) {
    if (self.aloneSince == null) {
      timestampProducer = self.timestampProducer;
      self.aloneSince = timestampProducer.now();
    }
  }
};
prototype["clientDisconnected"] = function clientDisconnected(size) {
  const self = this;
  if (tmp) {
    if (self.aloneSince == null) {
      timestampProducer = self.timestampProducer;
      self.aloneSince = timestampProducer.now();
    }
  }
};
prototype["proposalsReceived"] = function proposalsReceived(size) {
  if (size > 1) {
    const self = this;
    this.closeAlonePeriod();
  }
};
prototype["socketLost"] = function socketLost() {
  this.closeAlonePeriod();
  this.end();
};
prototype["joinSucceeded"] = function joinSucceeded(joinTransitionId, joinIsGroupCreation) {
  const self = this;
  let pending = this.pending;
  if (pending) {
    pending = null == self.joinTransitionId;
  }
  if (pending) {
    self.joinTransitionId = joinTransitionId;
    self.joinIsGroupCreation = joinIsGroupCreation;
    if (joinIsGroupCreation) {
      timestampProducer = self.timestampProducer;
      self.joinedTime = timestampProducer.now();
    }
  }
};
prototype["executed"] = function executed(transition_id, flag) {
  const self = this;
  if (!tmp) {
    timestampProducer = self.timestampProducer;
    self.joinedTime = timestampProducer.now();
  }
};
prototype["report"] = function report(arg0) {
  const self = this;
  if (arg0 !== this.joinTransitionId) {
    return {};
  } else {
    let obj = {};
    if (!tmp2) {
      self.reported = true;
      const obj2 = { timeToDaveGroup: self.joinedTime - self.createdTime - self.aloneWaitDuration, aloneWaitDuration: self.aloneWaitDuration };
      obj = obj2;
    }
    self.end();
    return obj;
  }
};
prototype["closeAlonePeriod"] = function closeAlonePeriod() {
  const self = this;
  if (null != this.aloneSince) {
    const _Math = Math;
    ({ timestampProducer, aloneWaitDuration } = self);
    self.aloneWaitDuration = aloneWaitDuration + Math.max(0, timestampProducer.now() - self.aloneSince);
    self.aloneSince = undefined;
  }
};
prototype["clearJoin"] = function clearJoin() {
  this.joinTransitionId = undefined;
  this.joinIsGroupCreation = false;
  this.joinedTime = undefined;
};
prototype["end"] = function end() {
  const self = this;
  this.pending = false;
  this.clearJoin();
  if (this.reported) {
    self.aloneSince = undefined;
    self.aloneWaitDuration = 0;
  }
};

export default DaveJoinTimer;