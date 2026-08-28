// discord_app/lib/VoiceDuration.tsx
import set2 from "../../_runtime/00002_set.js";
import sleep from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";

let closure_2 = [1, 100, 1000, 10000];
let closure_3 = [100, 500, 1000, 5000];
let result = set2.fileFinishedImporting("lib/VoiceDuration.tsx");
class VoiceDuration {
  constructor(arg0, arg1) {
    TimeStampProducer = importDefault;
    if (importDefault === undefined) {
      tmp = closure_0;
      tmp2 = closure_1;
      TimeStampProducer = require("sleep").TimeStampProducer;
    }
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[0] = set;
    map = new Map();
    obj[1] = map;
    map1 = new Map();
    obj[2] = map1;
    map2 = new Map();
    obj[3] = map2;
    obj.userId = global;
    obj.connection = require;
    obj.timestampProducer = TimeStampProducer;
    stopWatch = new require("sleep").StopWatch(obj.timestampProducer);
    obj.listening = stopWatch;
    stopWatch1 = new require("sleep").StopWatch(obj.timestampProducer);
    obj.speaking = stopWatch1;
    stopWatch2 = new require("sleep").StopWatch(obj.timestampProducer);
    obj.participation = stopWatch2;
    stopWatch3 = new require("sleep").StopWatch(obj.timestampProducer);
    obj.connected = stopWatch3;
    stopWatch4 = new require("sleep").StopWatch(obj.timestampProducer);
    obj.muted = stopWatch4;
    stopWatch5 = new require("sleep").StopWatch(obj.timestampProducer);
    obj.deafened = stopWatch5;
    durationEnabled = new require("sleep").DurationEnabled(require.getNoiseCancellation(), obj.timestampProducer);
    obj.noiseCancellation = durationEnabled;
    durationEnabled1 = new require("sleep").DurationEnabled(require.getSpatialAudioEnabled(), obj.timestampProducer);
    obj.spatialAudio = durationEnabled1;
    return obj;
  }
}
const prototype = VoiceDuration.prototype;
prototype["start"] = function start(flag, flag2) {
  let self = this;
  self = this;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const listeningUsers = self.listeningUsers;
  listeningUsers.clear();
  const listening = self.listening;
  listening.reset();
  const speaking = self.speaking;
  speaking.reset();
  const participation = self.participation;
  participation.reset();
  const muted = self.muted;
  muted.reset();
  const deafened = self.deafened;
  deafened.reset();
  const connected = self.connected;
  connected.reset();
  const noiseCancellation = self.noiseCancellation;
  noiseCancellation.reset();
  const spatialAudio = self.spatialAudio;
  spatialAudio.reset();
  const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
  timesUntilSpeakingDurationMilestonesMs.clear();
  const speakingMinimumChunks = self.speakingMinimumChunks;
  speakingMinimumChunks.clear();
  const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
  speakingMinimumChunkCounts.clear();
  self.speechEventCount = 0;
  const connected2 = self.connected;
  connected2.start();
  const connection = self.connection;
  connection.on(self(4561).BaseConnectionEvent.Speaking, (arg0, arg1) => {
    if (self.userId === arg0) {
      obj.onSpeaking(0 !== arg1);
    } else {
      obj.onListening(0 !== arg1, arg0);
    }
  });
  self.onMuted(flag);
  self.onDeafened(flag2);
  const connection2 = self.connection;
  connection2.on(self(4561).BaseConnectionEvent.Mute, (flag) => {
    self.onMuted(flag);
  });
  const connection3 = self.connection;
  connection3.on(self(4561).BaseConnectionEvent.Deafen, (flag2) => {
    self.onDeafened(flag2);
  });
};
prototype["onSpeaking"] = function onSpeaking(arg0) {
  const self = this;
  if (arg0) {
    const speaking2 = self.speaking;
    speaking2.start();
    const participation2 = self.participation;
    participation2.start();
    self.speechEventCount = self.speechEventCount + 1;
  } else {
    self.addSpeechChunk();
    const speaking = self.speaking;
    speaking.stop();
    const listening = self.listening;
    if (!listening.isRunning()) {
      const participation = self.participation;
      participation.stop();
    }
    const speakingDurationMilestones = self.computeSpeakingDurationMilestones(self.connected.lastStartTime, self.speaking.lastStartTime, self.speaking.lastElapsed);
  }
};
prototype["onListening"] = function onListening(arg0, arg1) {
  const self = this;
  const listeningUsers = this.listeningUsers;
  if (arg0) {
    listeningUsers.add(arg1);
    const listening2 = self.listening;
    listening2.start();
    const participation2 = self.participation;
    participation2.start();
  } else {
    let deleteResult = listeningUsers.delete(arg1);
    if (deleteResult) {
      deleteResult = 0 === self.listeningUsers.size;
    }
    if (deleteResult) {
      const listening = self.listening;
      listening.stop();
      const speaking = self.speaking;
      if (!speaking.isRunning()) {
        const participation = self.participation;
        participation.stop();
      }
    }
  }
};
prototype["onMuted"] = function onMuted(flag) {
  const muted = this.muted;
  if (flag) {
    muted.start();
  } else {
    muted.stop();
  }
};
prototype["onDeafened"] = function onDeafened(flag2) {
  const deafened = this.deafened;
  if (flag2) {
    deafened.start();
  } else {
    deafened.stop();
  }
};
prototype["computeSpeakingDurationMilestones"] = function computeSpeakingDurationMilestones(lastStartTime, lastStartTime2, lastElapsed) {
  const self = this;
  closure_1 = lastStartTime;
  closure_2 = lastStartTime2;
  closure_3 = lastElapsed;
  if (null != lastStartTime) {
    if (null != lastStartTime2) {
      const speaking = this.speaking;
      closure_0 = speaking.elapsed().asMilliseconds();
      const found = closure_2.filter((arg0) => {
        const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
        return !timesUntilSpeakingDurationMilestonesMs.has(arg0);
      });
      const found1 = found.filter((arg0) => closure_0 >= arg0);
      const item = found1.forEach((arg0) => {
        const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
        const result = timesUntilSpeakingDurationMilestonesMs.set(arg0, closure_2 - closure_1 + arg0 - closure_3);
      });
      const elapsedResult = speaking.elapsed();
    }
  }
};
prototype["addSpeechChunk"] = function addSpeechChunk() {
  const self = this;
  const lastStartTime = this.speaking.lastStartTime;
  if (null != lastStartTime) {
    const timestampProducer = this.timestampProducer;
    closure_0 = timestampProducer.now() - lastStartTime;
    const found = closure_3.filter((arg0) => closure_0 >= arg0);
    const item = found.forEach((arg0) => {
      const speakingMinimumChunks = self.speakingMinimumChunks;
      let num = speakingMinimumChunks.get(arg0);
      if (num == null) {
        num = 0;
      }
      const speakingMinimumChunks2 = tmp.speakingMinimumChunks;
      const result = speakingMinimumChunks2.set(arg0, num + closure_0);
      const speakingMinimumChunkCounts = tmp.speakingMinimumChunkCounts;
      let num2 = speakingMinimumChunkCounts.get(arg0);
      if (num2 == null) {
        num2 = 0;
      }
      const speakingMinimumChunkCounts2 = tmp.speakingMinimumChunkCounts;
      const result1 = speakingMinimumChunkCounts2.set(arg0, num2 + 1);
    });
  }
};
prototype["setNoiseCancellationEnabled"] = function setNoiseCancellationEnabled(value) {
  this.noiseCancellation.value = value;
};
prototype["setSpatialAudioEnabled"] = function setSpatialAudioEnabled(value) {
  this.spatialAudio.value = value;
};
prototype["stop"] = function stop() {
  this.addSpeechChunk();
  const speaking = this.speaking;
  speaking.stop();
  const listening = this.listening;
  listening.stop();
  const participation = this.participation;
  participation.stop();
  const connected = this.connected;
  connected.stop();
  const muted = this.muted;
  muted.stop();
  this.noiseCancellation.value = false;
  this.spatialAudio.value = false;
  const speakingDurationMilestones = this.computeSpeakingDurationMilestones(this.connected.lastStartTime, this.speaking.lastStartTime, this.speaking.lastElapsed);
};
prototype["getDurationStats"] = function getDurationStats() {
  let self = this;
  self = this;
  const lastStartTime = this.speaking.lastStartTime;
  const timestampProducer = this.timestampProducer;
  let num = 0;
  if (null != lastStartTime) {
    num = timestampProducer.now() - lastStartTime;
  }
  const speakingDurationMilestones = self.computeSpeakingDurationMilestones(self.connected.lastStartTime, self.speaking.lastStartTime, self.speaking.lastElapsed);
  let obj = { duration_listening_ms: listening.elapsed().asMilliseconds(), duration_speaking_ms: null, duration_participation_ms: null, duration_connected_ms: null, duration_muted_ms: null, duration_deafened_ms: null, duration_noise_cancellation_enabled_ms: null, duration_spatial_ms: null, speech_event_count: null };
  listening = self.listening;
  const speaking = self.speaking;
  const elapsedResult = listening.elapsed();
  obj[1] = speaking.elapsed().asMilliseconds();
  const participation = self.participation;
  const elapsedResult1 = speaking.elapsed();
  obj[2] = participation.elapsed().asMilliseconds();
  const connected = self.connected;
  const elapsedResult2 = participation.elapsed();
  obj[3] = connected.elapsed().asMilliseconds();
  const muted = self.muted;
  const elapsedResult3 = connected.elapsed();
  obj[4] = muted.elapsed().asMilliseconds();
  const deafened = self.deafened;
  const elapsedResult4 = muted.elapsed();
  obj[5] = deafened.elapsed().asMilliseconds();
  const noiseCancellation = self.noiseCancellation;
  obj[6] = noiseCancellation.totalDuration();
  const spatialAudio = self.spatialAudio;
  obj[7] = spatialAudio.totalDuration();
  obj[8] = self.speechEventCount;
  const found = closure_2.filter((arg0) => {
    const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
    return timesUntilSpeakingDurationMilestonesMs.has(arg0);
  });
  let merged = Object.assign(found.reduce((arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(arg0);
    const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
    const combined = "time_to_first_" + arg1 + "ms_speech_ms";
    obj[combined] = timesUntilSpeakingDurationMilestonesMs.get(arg1);
    return obj;
  }, {}));
  const found1 = closure_3.filter((arg0) => {
    const speakingMinimumChunks = self.speakingMinimumChunks;
    let hasItem = speakingMinimumChunks.has(arg0);
    if (!hasItem) {
      hasItem = num >= arg0;
    }
    return hasItem;
  });
  const merged1 = Object.assign(found1.reduce((arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(arg0);
    const speakingMinimumChunks = self.speakingMinimumChunks;
    const combined = "duration_speaking_gte_" + arg1 + "ms_ms";
    num = speakingMinimumChunks.get(arg1);
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    if (num >= arg1) {
      num2 = tmp4;
    }
    obj[combined] = num + num2;
    const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
    const combined1 = "speech_event_count_gte_" + arg1 + "ms";
    let num3 = speakingMinimumChunkCounts.get(arg1);
    if (num3 == null) {
      num3 = 0;
    }
    let num4 = 0;
    if (num >= arg1) {
      num4 = 1;
    }
    obj[combined1] = num3 + num4;
    return obj;
  }, {}));
  return obj;
};

export default VoiceDuration;