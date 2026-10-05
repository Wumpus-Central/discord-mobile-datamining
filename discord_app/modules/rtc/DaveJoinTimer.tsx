// === Module 13614: DaveJoinTimer ===

// Module 13614 (DaveJoinTimer)
import TimeUtils from "TimeUtils" /* 4919 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/DaveJoinTimer.tsx");
class DaveJoinTimer {
  constructor(createdTime) {
    let TimeStampProducer = arg1;
    if (arg1 === undefined) {
      TimeStampProducer = TimeUtils.TimeStampProducer;
    }
    const merged = Object.assign({ pending: false, aloneWaitDuration: 0, joinIsGroupCreation: false, reported: false });
    merged.createdTime = createdTime;
    merged.timestampProducer = TimeStampProducer;
    return merged;
  }
  start(arg0) {
    const self = this;
    this.clearJoin();
    this.pending = true;
    const tmp2 = arg0;
    if (tmp2) {
      if (self.aloneSince == null) {
        const timestampProducer = self.timestampProducer;
        self.aloneSince = timestampProducer.now();
      }
    }
  }
  clientDisconnected(size) {
    const self = this;
    const tmp = size <= 1 && self.pending;
    if (tmp) {
      if (self.aloneSince == null) {
        const timestampProducer = self.timestampProducer;
        self.aloneSince = timestampProducer.now();
      }
    }
  }
  proposalsReceived(size) {
    if (size > 1) {
      const self = this;
      this.closeAlonePeriod();
    }
  }
  socketLost() {
    this.closeAlonePeriod();
    this.end();
  }
  joinSucceeded(joinTransitionId, joinIsGroupCreation) {
    const self = this;
    const pending = this.pending && null == self.joinTransitionId;
    if (pending) {
      self.joinTransitionId = joinTransitionId;
      self.joinIsGroupCreation = joinIsGroupCreation;
      if (joinIsGroupCreation) {
        const timestampProducer = self.timestampProducer;
        self.joinedTime = timestampProducer.now();
      }
    }
  }
  executed(transition_id, flag) {
    const self = this;
    const tmp = transition_id !== this.joinTransitionId || self.joinIsGroupCreation || flag;
    if (!tmp) {
      const timestampProducer = self.timestampProducer;
      self.joinedTime = timestampProducer.now();
    }
  }
  report(arg0) {
    const self = this;
    if (arg0 !== this.joinTransitionId) {
      return {};
    } else {
      let obj = {};
      const tmp2 = null == self.joinedTime || self.reported;
      if (!tmp2) {
        self.reported = true;
        obj = { timeToDaveGroup: self.joinedTime - self.createdTime - self.aloneWaitDuration, aloneWaitDuration: self.aloneWaitDuration };
        const obj2 = { timeToDaveGroup: self.joinedTime - self.createdTime - self.aloneWaitDuration, aloneWaitDuration: self.aloneWaitDuration };
      }
      self.end();
      return obj;
    }
  }
  closeAlonePeriod() {
    let aloneWaitDuration;
    let timestampProducer;
    const self = this;
    if (null != this.aloneSince) {
      const _Math = Math;
      ({ timestampProducer, aloneWaitDuration } = self);
      self.aloneWaitDuration = aloneWaitDuration + Math.max(0, timestampProducer.now() - self.aloneSince);
      self.aloneSince = undefined;
    }
  }
  clearJoin() {
    this.joinTransitionId = undefined;
    this.joinIsGroupCreation = false;
    this.joinedTime = undefined;
  }
  end() {
    const self = this;
    this.pending = false;
    this.clearJoin();
    if (this.reported) {
      self.aloneSince = undefined;
      self.aloneWaitDuration = 0;
    }
  }
}
const prototype = DaveJoinTimer.prototype;

export default DaveJoinTimer;