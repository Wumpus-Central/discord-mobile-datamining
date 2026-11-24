// discord_app/modules/rtc/DaveRecipientTracker.tsx
import TimeUtils from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/rtc/DaveRecipientTracker.tsx");
class DaveRecipientTracker {
  constructor() {
    TimeStampProducer = global;
    if (global === undefined) {
      tmp = closure_0;
      tmp2 = closure_1;
      TimeStampProducer = closure_0(closure_1[0]).TimeStampProducer;
    }
    merged = Object.assign({
      mode: "none",
      modeSince: 0,
      summary: null,
      hasGroup: false,
      recipients: null,
      newestRoster: null,
      resetSinceInstall: false,
      voiceStateUsers: null,
      connectedUsers: null,
      everPresent: null,
      openLingers: null,
      prepared: null,
      prepareSeq: 0,
      submitted: null,
      earlyExecutes: null,
    });
    merged[2] = {
      encryptedDuration: 0,
      mirrorUncertainCount: 0,
      lingerCount: 0,
      lingerTotalDuration: 0,
      lingerMaxDuration: 0,
      lingerMaxCause: "channel_id",
    };
    set = new Set();
    merged[4] = set;
    set1 = new Set();
    merged[5] = set1;
    set2 = new Set();
    merged[7] = set2;
    set3 = new Set();
    merged[8] = set3;
    set4 = new Set();
    merged[9] = set4;
    map = new Map();
    merged[10] = map;
    map1 = new Map();
    merged[11] = map1;
    merged[13] = [];
    set5 = new Set();
    merged[14] = set5;
    merged.timestampProducer = TimeStampProducer;
    return merged;
  }
}
const prototype = DaveRecipientTracker.prototype;
prototype["mlsInit"] = function mlsInit() {
  const self = this;
  this.hasGroup = false;
  if ("encrypted" === this.mode) {
    self.resetSinceInstall = true;
  }
  self.update();
};
prototype["mlsMessageSubmitted"] = function mlsMessageSubmitted(arg0) {
  const submitted = this.submitted;
  submitted.push(arg0);
};
prototype["mlsMessageProcessed"] = function mlsMessageProcessed(arg0, arg1, protocolVersion, items) {
  const self = this;
  ({ submitted, submitted: submitted2 } = this);
  submitted2.splice(0, submitted.indexOf(arg0) + 1);
  if (arg1) {
    self.hasGroup = true;
    const _Set = Set;
    set = new Set(items);
    self.newestRoster = set;
    self.prepare(arg0, protocolVersion);
    if (0 === arg0) {
      self.execute(arg0, false);
    } else {
      const earlyExecutes2 = self.earlyExecutes;
      if (earlyExecutes2.delete(arg0)) {
        self.execute(arg0, true);
      }
    }
    self.update();
  } else {
    const earlyExecutes = self.earlyExecutes;
    earlyExecutes.delete(arg0);
    self.update();
  }
};
prototype["transitionPrepared"] = function transitionPrepared(arg0, protocolVersion) {
  const self = this;
  if (0 === arg0) {
    const prepared = self.prepared;
    const item = prepared.forEach((item) => {
      item.stale = true;
      return true;
    });
  }
  self.prepare(arg0, protocolVersion);
  if (0 === arg0) {
    self.execute(arg0, false);
  }
  self.update();
};
prototype["transitionExecuted"] = function transitionExecuted(_secureFramesLastExecutedTransitionId) {
  const self = this;
  const prepared = this.prepared;
  if (prepared.has(_secureFramesLastExecutedTransitionId)) {
    self.execute(_secureFramesLastExecutedTransitionId, false);
    self.update();
  } else {
    const submitted = self.submitted;
    if (submitted.includes(_secureFramesLastExecutedTransitionId)) {
      const earlyExecutes = self.earlyExecutes;
      earlyExecutes.add(_secureFramesLastExecutedTransitionId);
    }
  }
};
prototype["voiceStateUsersChanged"] = function voiceStateUsersChanged(items) {
  const self = this;
  this.voiceStateUsers = new Set(items);
  const voiceStateUsers = this.voiceStateUsers;
  const item = voiceStateUsers.forEach((item) => {
    const everPresent = self.everPresent;
    return everPresent.add(item);
  });
  this.update();
};
prototype["connectedUsersChanged"] = function connectedUsersChanged(_userIds) {
  const self = this;
  this.connectedUsers = new Set(_userIds);
  const connectedUsers = this.connectedUsers;
  const item = connectedUsers.forEach((item) => {
    const everPresent = self.everPresent;
    return everPresent.add(item);
  });
  this.update();
};
prototype["finish"] = function finish() {
  const self = this;
  if ("none" !== this.mode) {
    timestampProducer = self.timestampProducer;
    closure_0 = timestampProducer.now();
    const openLingers = self.openLingers;
    const item = openLingers.forEach((item, index) => self.closeLinger(index, item, false, closure_0));
    self.setMode("none");
    return self.summary;
  }
};
prototype["isPresent"] = function isPresent(item) {
  const voiceStateUsers = this.voiceStateUsers;
  let hasItem = voiceStateUsers.has(item);
  if (!hasItem) {
    const connectedUsers = this.connectedUsers;
    hasItem = connectedUsers.has(item);
  }
  return hasItem;
};
prototype["prepare"] = function prepare(arg0, protocolVersion) {
  const self = this;
  const prepared = this.prepared;
  value = prepared.get(arg0);
  let tmp2 = null != value;
  if (tmp2) {
    tmp2 = value.uncertain || value.protocolVersion !== protocolVersion;
    const tmp3 = value.uncertain || value.protocolVersion !== protocolVersion;
  }
  const prepared2 = self.prepared;
  const obj = { protocolVersion, prepareSeq: null, stale: false, uncertain: tmp2 };
  const sum = self.prepareSeq + 1;
  self.prepareSeq = sum;
  obj.prepareSeq = sum;
  const result = prepared2.set(arg0, obj);
};
prototype["execute"] = function execute(arg0, arg1) {
  const self = this;
  closure_0 = arg0;
  const prepared = this.prepared;
  value = prepared.get(arg0);
  dependencyMap = value;
  if (null != value) {
    const prepared2 = self.prepared;
    prepared2.delete(arg0);
    if (value.stale) {
      const summary2 = self.summary;
      summary2.mirrorUncertainCount = summary2.mirrorUncertainCount + 1;
    } else {
      let uncertain = arg1;
      const prepared1 = self.prepared;
      const item = prepared1.forEach((prepareSeq) => {
        let tmp = 0 === closure_0;
        if (!tmp) {
          tmp = prepareSeq.prepareSeq < value.prepareSeq;
        }
        if (tmp) {
          prepareSeq.stale = true;
        }
      });
      if (!arg1) {
        uncertain = value.uncertain;
      }
      if (!uncertain) {
        uncertain = self.submitted.length > 0;
      }
      if (uncertain) {
        const summary = self.summary;
        summary.mirrorUncertainCount = summary.mirrorUncertainCount + 1;
      }
      if (0 === value.protocolVersion) {
        self.hasGroup = false;
        const _Set2 = Set;
        set = new Set();
        self.recipients = set;
        self.setMode("passthrough");
      } else {
        const _Set = Set;
        if (self.hasGroup) {
          const _Set1 = new _Set(self.newestRoster);
          self.recipients = _Set1;
          self.setMode("encrypted");
        } else {
          const _Set3 = new _Set();
          self.recipients = _Set3;
          self.setMode("no_key");
        }
      }
      self.resetSinceInstall = false;
    }
  }
};
prototype["setMode"] = function setMode(mode) {
  const self = this;
  timestampProducer = this.timestampProducer;
  const nowResult = timestampProducer.now();
  if ("encrypted" === this.mode) {
    const summary = self.summary;
    summary.encryptedDuration = summary.encryptedDuration + (nowResult - self.modeSince);
  }
  self.mode = mode;
  self.modeSince = nowResult;
};
prototype["update"] = function update() {
  const self = this;
  timestampProducer = this.timestampProducer;
  const start = timestampProducer.now();
  closure_0 = tmp;
  let openLingers = this.openLingers;
  const item = openLingers.forEach((removed, index) => {
    if (closure_0) {
      const recipients = self.recipients;
      if (recipients.has(index)) {
        if (!self.isPresent(index)) {
          if (!removed.removed) {
            const newestRoster = self.newestRoster;
            removed.removed = !newestRoster.has(index);
          }
          if (!removed.resetDuring) {
            removed.resetDuring = self.resetSinceInstall;
          }
        }
      }
    }
    self.closeLinger(index, removed, self.isPresent(index), closure_1);
  });
  if ("encrypted" === this.mode) {
    let recipients = this.recipients;
    const item1 = recipients.forEach((item) => {
      let isPresentResult = self.isPresent(item);
      if (!isPresentResult) {
        const openLingers = self.openLingers;
        isPresentResult = openLingers.has(item);
      }
      if (!isPresentResult) {
        const openLingers2 = self.openLingers;
        const obj = { start, wasPresentAtStart: null, removed: null, resetDuring: null };
        const everPresent = self.everPresent;
        obj.wasPresentAtStart = everPresent.has(item);
        const newestRoster = self.newestRoster;
        obj.removed = !newestRoster.has(item);
        obj.resetDuring = self.resetSinceInstall;
        const result = openLingers2.set(item, obj);
      }
    });
  }
};
prototype["closeLinger"] = function closeLinger(index, wasPresentAtStart, self, arg3) {
  const openLingers = this.openLingers;
  openLingers.delete(index);
  if (wasPresentAtStart.wasPresentAtStart) {
    let str2 = "reset_gap";
    if (!wasPresentAtStart.resetDuring) {
      let str3 = "not_removed";
      if (wasPresentAtStart.removed) {
        str3 = "pending_execute";
      }
      str2 = str3;
    }
    let str = str2;
  } else {
    str = "ghost";
    if (self) {
      str = "join_lead";
    }
  }
  const diff = arg3 - wasPresentAtStart.start;
  const summary = this.summary;
  summary.lingerCount = summary.lingerCount + 1;
  summary.lingerTotalDuration = summary.lingerTotalDuration + diff;
  if (tmp4) {
    summary.lingerMaxDuration = diff;
    summary.lingerMaxCause = str;
  }
};

export default DaveRecipientTracker;
