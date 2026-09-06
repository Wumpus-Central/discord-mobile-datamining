// discord_app/lib/VoiceDuration.tsx
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import discord_common_BaseConnectionEvent from "../../discord_common/js/packages/media-engine/BaseConnectionEvent.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_2 = [1, 100, 1000, 10000];
let closure_3 = [100, 500, 1000, 5000];
let result = size.fileFinishedImporting("lib/VoiceDuration.tsx");
class VoiceDuration {
  constructor(arg0, arg1) {
    TimeStampProducer = importDefault;
    if (importDefault === undefined) {
      tmp = closure_0;
      tmp2 = closure_1;
      TimeStampProducer = closure_0(closure_1[0]).TimeStampProducer;
    }
    merged = Object.assign({
      listeningUsers: null,
      timesUntilSpeakingDurationMilestonesMs: null,
      speakingMinimumChunks: null,
      speakingMinimumChunkCounts: null,
      speechEventCount: 0,
    });
    set = new Set();
    merged[0] = set;
    map = new Map();
    merged[1] = map;
    map1 = new Map();
    merged[2] = map1;
    map2 = new Map();
    merged[3] = map2;
    merged.userId = global;
    merged.connection = require;
    merged.timestampProducer = TimeStampProducer;
    stopWatch = new closure_0(closure_1[0]).StopWatch(merged.timestampProducer);
    merged.listening = stopWatch;
    stopWatch1 = new closure_0(closure_1[0]).StopWatch(merged.timestampProducer);
    merged.speaking = stopWatch1;
    stopWatch2 = new closure_0(closure_1[0]).StopWatch(merged.timestampProducer);
    merged.participation = stopWatch2;
    stopWatch3 = new closure_0(closure_1[0]).StopWatch(merged.timestampProducer);
    merged.connected = stopWatch3;
    stopWatch4 = new closure_0(closure_1[0]).StopWatch(merged.timestampProducer);
    merged.muted = stopWatch4;
    stopWatch5 = new closure_0(closure_1[0]).StopWatch(merged.timestampProducer);
    merged.deafened = stopWatch5;
    durationEnabled = new closure_0(closure_1[0]).DurationEnabled(
      require.getNoiseCancellation(),
      merged.timestampProducer,
    );
    merged.noiseCancellation = durationEnabled;
    durationEnabled1 = new closure_0(closure_1[0]).DurationEnabled(
      require.getSpatialAudioEnabled(),
      merged.timestampProducer,
    );
    merged.spatialAudio = durationEnabled1;
    return merged;
  }
}
const prototype = VoiceDuration.prototype;
prototype["start"] = function start() {
  const self = this;
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
  connection.on(discord_common_BaseConnectionEvent.BaseConnectionEvent.Speaking, (arg0, arg1) => {
    if (self.userId === arg0) {
      self.onSpeaking(0 !== arg1);
    } else {
      self.onListening(0 !== arg1, arg0);
    }
  });
  self.onMuted(flag);
  self.onDeafened(flag2);
  const connection2 = self.connection;
  connection2.on(discord_common_BaseConnectionEvent.BaseConnectionEvent.Mute, (flag) => {
    self.onMuted(flag);
  });
  const connection3 = self.connection;
  connection3.on(discord_common_BaseConnectionEvent.BaseConnectionEvent.Deafen, (flag2) => {
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
    const speakingDurationMilestones = self.computeSpeakingDurationMilestones(
      self.connected.lastStartTime,
      self.speaking.lastStartTime,
      self.speaking.lastElapsed,
    );
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
prototype["computeSpeakingDurationMilestones"] = function computeSpeakingDurationMilestones(
  lastStartTime,
  lastStartTime2,
  lastElapsed,
) {
  const self = this;
  closure_1 = lastStartTime;
  closure_2 = lastStartTime2;
  closure_3 = lastElapsed;
  if (null != lastStartTime) {
    if (null != lastStartTime2) {
      const speaking = this.speaking;
      closure_0 = speaking.elapsed().asMilliseconds();
      const found = closure_2.filter((item) => {
        const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
        return !timesUntilSpeakingDurationMilestonesMs.has(item);
      });
      const found1 = found.filter((item) => closure_0 >= item);
      const item = found1.forEach((item) => {
        const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
        const result = timesUntilSpeakingDurationMilestonesMs.set(item, closure_2 - closure_1 + item - closure_3);
      });
      const elapsedResult = speaking.elapsed();
    }
  }
};
prototype["addSpeechChunk"] = function addSpeechChunk() {
  const self = this;
  const lastStartTime = this.speaking.lastStartTime;
  if (null != lastStartTime) {
    timestampProducer = this.timestampProducer;
    closure_0 = timestampProducer.now() - lastStartTime;
    const found = closure_3.filter((item) => closure_0 >= item);
    const item = found.forEach((item) => {
      const speakingMinimumChunks = self.speakingMinimumChunks;
      let num = speakingMinimumChunks.get(item);
      if (num == null) {
        num = 0;
      }
      const speakingMinimumChunks2 = self.speakingMinimumChunks;
      const result = speakingMinimumChunks2.set(item, num + closure_0);
      const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
      let num2 = speakingMinimumChunkCounts.get(item);
      if (num2 == null) {
        num2 = 0;
      }
      const speakingMinimumChunkCounts2 = self.speakingMinimumChunkCounts;
      const result1 = speakingMinimumChunkCounts2.set(item, num2 + 1);
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
  const speakingDurationMilestones = this.computeSpeakingDurationMilestones(
    this.connected.lastStartTime,
    this.speaking.lastStartTime,
    this.speaking.lastElapsed,
  );
};
prototype["getDurationStats"] = function getDurationStats() {
  const self = this;
  const lastStartTime = this.speaking.lastStartTime;
  timestampProducer = this.timestampProducer;
  if (null != lastStartTime) {
    let num = timestampProducer.now() - lastStartTime;
  }
  const speakingDurationMilestones = self.computeSpeakingDurationMilestones(
    self.connected.lastStartTime,
    self.speaking.lastStartTime,
    self.speaking.lastElapsed,
  );
  let obj = {
    duration_listening_ms: null,
    duration_speaking_ms: null,
    duration_participation_ms: null,
    duration_connected_ms: null,
    duration_muted_ms: null,
    duration_deafened_ms: null,
    duration_noise_cancellation_enabled_ms: null,
    duration_spatial_ms: null,
    speech_event_count: null,
  };
  const listening = self.listening;
  obj.duration_listening_ms = listening.elapsed().asMilliseconds();
  const speaking = self.speaking;
  const elapsedResult = listening.elapsed();
  obj.duration_speaking_ms = speaking.elapsed().asMilliseconds();
  const participation = self.participation;
  const elapsedResult1 = speaking.elapsed();
  obj.duration_participation_ms = participation.elapsed().asMilliseconds();
  const connected = self.connected;
  const elapsedResult2 = participation.elapsed();
  obj.duration_connected_ms = connected.elapsed().asMilliseconds();
  const muted = self.muted;
  const elapsedResult3 = connected.elapsed();
  obj.duration_muted_ms = muted.elapsed().asMilliseconds();
  const deafened = self.deafened;
  const elapsedResult4 = muted.elapsed();
  obj.duration_deafened_ms = deafened.elapsed().asMilliseconds();
  const noiseCancellation = self.noiseCancellation;
  obj.duration_noise_cancellation_enabled_ms = noiseCancellation.totalDuration();
  const spatialAudio = self.spatialAudio;
  obj.duration_spatial_ms = spatialAudio.totalDuration();
  obj.speech_event_count = self.speechEventCount;
  const found = closure_2.filter((item) => {
    const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
    return timesUntilSpeakingDurationMilestonesMs.has(item);
  });
  let merged = Object.assign(
    found.reduce((acc, item) => {
      const obj = {};
      const merged = Object.assign(acc);
      const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
      const combined = "time_to_first_" + item + "ms_speech_ms";
      obj[combined] = timesUntilSpeakingDurationMilestonesMs.get(item);
      return obj;
    }, {}),
  );
  const found1 = closure_3.filter((item) => {
    const speakingMinimumChunks = self.speakingMinimumChunks;
    let hasItem = speakingMinimumChunks.has(item);
    if (!hasItem) {
      hasItem = num >= item;
    }
    return hasItem;
  });
  const merged1 = Object.assign(
    found1.reduce((acc, item) => {
      const obj = {};
      const merged = Object.assign(acc);
      const speakingMinimumChunks = self.speakingMinimumChunks;
      const combined = "duration_speaking_gte_" + item + "ms_ms";
      num = speakingMinimumChunks.get(item);
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      if (num >= item) {
        num2 = tmp4;
      }
      obj[combined] = num + num2;
      const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
      const combined1 = "speech_event_count_gte_" + item + "ms";
      let num3 = speakingMinimumChunkCounts.get(item);
      if (num3 == null) {
        num3 = 0;
      }
      let num4 = 0;
      if (num >= item) {
        num4 = 1;
      }
      obj[combined1] = num3 + num4;
      return obj;
    }, {}),
  );
  return obj;
};

export default VoiceDuration;
