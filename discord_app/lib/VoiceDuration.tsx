// === Module 13632: VoiceDuration ===

// Module 13632 (VoiceDuration)
import TimeUtils from "TimeUtils" /* 4919 */;
import discord_common_BaseConnectionEvent from "discord_common/BaseConnectionEvent" /* 4962 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3;

const React2 = [1, 100, 1000, 10000];
const _false = [100, 500, 1000, 5000];
let result = size.fileFinishedImporting("lib/VoiceDuration.tsx");
class VoiceDuration {
  constructor(userId, connection) {
    let TimeStampProducer = arg2;
    if (arg2 === undefined) {
      TimeStampProducer = TimeUtils.TimeStampProducer;
    }
    const merged = Object.assign({ listeningUsers: null, timesUntilSpeakingDurationMilestonesMs: null, speakingMinimumChunks: null, speakingMinimumChunkCounts: null, speechEventCount: 0 });
    merged[0] = new Set();
    new Set();
    merged[1] = new Map();
    new Map();
    merged[2] = new Map();
    new Map();
    merged[3] = new Map();
    merged.userId = userId;
    merged.connection = connection;
    merged.timestampProducer = TimeStampProducer;
    new Map();
    const stopWatch = new TimeUtils.StopWatch(merged.timestampProducer);
    merged.listening = stopWatch;
    const stopWatch1 = new TimeUtils.StopWatch(merged.timestampProducer);
    merged.speaking = stopWatch1;
    const stopWatch2 = new TimeUtils.StopWatch(merged.timestampProducer);
    merged.participation = stopWatch2;
    const stopWatch3 = new TimeUtils.StopWatch(merged.timestampProducer);
    merged.connected = stopWatch3;
    const stopWatch4 = new TimeUtils.StopWatch(merged.timestampProducer);
    merged.muted = stopWatch4;
    const stopWatch5 = new TimeUtils.StopWatch(merged.timestampProducer);
    merged.deafened = stopWatch5;
    const durationEnabled = new TimeUtils.DurationEnabled(connection.getNoiseCancellation(), merged.timestampProducer);
    merged.noiseCancellation = durationEnabled;
    const durationEnabled1 = new TimeUtils.DurationEnabled(connection.getSpatialAudioEnabled(), merged.timestampProducer);
    merged.spatialAudio = durationEnabled1;
    return merged;
  }
  start() {
    let flag;
    let flag2;
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
  }
  onSpeaking(arg0) {
    const self = this;
    const tmp = arg0;
    if (tmp) {
      const speaking2 = self.speaking;
      speaking2.start();
      const participation2 = self.participation;
      participation2.start();
      self.speechEventCount = self.speechEventCount + 1;
    } else {
      const lastStartTime = self.connected.lastStartTime;
      const lastStartTime2 = self.speaking.lastStartTime;
      const lastElapsed = self.speaking.lastElapsed;
      self.addSpeechChunk();
      const speaking = self.speaking;
      speaking.stop();
      const listening = self.listening;
      if (!listening.isRunning()) {
        const participation = self.participation;
        participation.stop();
      }
      const speakingDurationMilestones = self.computeSpeakingDurationMilestones(lastStartTime, lastStartTime2, lastElapsed);
    }
  }
  onListening(arg0, arg1) {
    const self = this;
    const listeningUsers = this.listeningUsers;
    const tmp = arg0;
    if (tmp) {
      listeningUsers.add(arg1);
      const listening2 = self.listening;
      listening2.start();
      const participation2 = self.participation;
      participation2.start();
    } else {
      const deleteResult = listeningUsers.delete(arg1) && 0 === self.listeningUsers.size;
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
  }
  onMuted(flag) {
    const muted = this.muted;
    const tmp = flag;
    if (tmp) {
      muted.start();
    } else {
      muted.stop();
    }
  }
  onDeafened(flag2) {
    const deafened = this.deafened;
    const tmp = flag2;
    if (tmp) {
      deafened.start();
    } else {
      deafened.stop();
    }
  }
  computeSpeakingDurationMilestones(lastStartTime, lastStartTime2, lastElapsed) {
    const self = this;
    let closure_1 = lastStartTime;
    closure_2 = lastStartTime2;
    closure_3 = lastElapsed;
    if (null != lastStartTime) {
      if (null != lastStartTime2) {
        const speaking = this.speaking;
        const elapsedResult = speaking.elapsed();
        let closure_0 = elapsedResult.asMilliseconds();
        const found = closure_2.filter((item) => {
          const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
          return !timesUntilSpeakingDurationMilestonesMs.has(item);
        });
        const found1 = found.filter((item) => closure_0 >= item);
        const item = found1.forEach((item) => {
          const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
          const result = timesUntilSpeakingDurationMilestonesMs.set(item, closure_2 - closure_1 + item - closure_3);
        });
      }
    }
  }
  addSpeechChunk() {
    const self = this;
    const lastStartTime = this.speaking.lastStartTime;
    if (null != lastStartTime) {
      const timestampProducer = this.timestampProducer;
      let closure_0 = timestampProducer.now() - lastStartTime;
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
  }
  setNoiseCancellationEnabled(value) {
    this.noiseCancellation.value = value;
  }
  setSpatialAudioEnabled(value) {
    this.spatialAudio.value = value;
  }
  stop() {
    this.addSpeechChunk();
    const speaking = this.speaking;
    const lastStartTime = this.connected.lastStartTime;
    const lastStartTime2 = this.speaking.lastStartTime;
    const lastElapsed = this.speaking.lastElapsed;
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
    const speakingDurationMilestones = this.computeSpeakingDurationMilestones(lastStartTime, lastStartTime2, lastElapsed);
  }
  getDeprecatedDurationStats() {
    let elapsedResult;
    let elapsedResult1;
    let elapsedResult2;
    let elapsedResult3;
    let round;
    let round2;
    let round3;
    let round4;
    const listening = this.listening;
    const obj = { duration_listening: round(elapsedResult.asSeconds()), duration_speaking: round2(elapsedResult1.asSeconds()), duration_participation: round3(elapsedResult2.asSeconds()), duration_connected: round4(elapsedResult3.asSeconds()) };
    round = Math.round;
    const speaking = this.speaking;
    round2 = Math.round;
    elapsedResult = listening.elapsed();
    const participation = this.participation;
    round3 = Math.round;
    elapsedResult1 = speaking.elapsed();
    const connected = this.connected;
    round4 = Math.round;
    elapsedResult2 = participation.elapsed();
    elapsedResult3 = connected.elapsed();
    return obj;
  }
  getDurationStats() {
    let elapsedResult;
    let elapsedResult1;
    let elapsedResult2;
    let elapsedResult3;
    let elapsedResult4;
    let elapsedResult5;
    let noiseCancellation;
    let spatialAudio;
    const self = this;
    const lastStartTime = this.speaking.lastStartTime;
    const timestampProducer = this.timestampProducer;
    let num = 0;
    if (null != lastStartTime) {
      num = timestampProducer.now() - lastStartTime;
    }
    const speakingDurationMilestones = self.computeSpeakingDurationMilestones(self.connected.lastStartTime, self.speaking.lastStartTime, self.speaking.lastElapsed);
    let obj = { duration_listening_ms: elapsedResult.asMilliseconds(), duration_speaking_ms: elapsedResult1.asMilliseconds(), duration_participation_ms: elapsedResult2.asMilliseconds(), duration_connected_ms: elapsedResult3.asMilliseconds(), duration_muted_ms: elapsedResult4.asMilliseconds(), duration_deafened_ms: elapsedResult5.asMilliseconds(), duration_noise_cancellation_enabled_ms: noiseCancellation.totalDuration(), duration_spatial_ms: spatialAudio.totalDuration(), speech_event_count: self.speechEventCount };
    const listening = self.listening;
    const speaking = self.speaking;
    elapsedResult = listening.elapsed();
    const participation = self.participation;
    elapsedResult1 = speaking.elapsed();
    const connected = self.connected;
    elapsedResult2 = participation.elapsed();
    const muted = self.muted;
    elapsedResult3 = connected.elapsed();
    const deafened = self.deafened;
    elapsedResult4 = muted.elapsed();
    noiseCancellation = self.noiseCancellation;
    spatialAudio = self.spatialAudio;
    elapsedResult5 = deafened.elapsed();
    const found = closure_2.filter((item) => {
      const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
      return timesUntilSpeakingDurationMilestonesMs.has(item);
    });
    let merged = Object.assign(found.reduce((acc, item) => {
      const obj = {};
      const merged = Object.assign(acc);
      const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
      const combined = "time_to_first_" + item + "ms_speech_ms";
      obj[combined] = timesUntilSpeakingDurationMilestonesMs.get(item);
      return obj;
    }, {}));
    const found1 = closure_3.filter((item) => {
      const speakingMinimumChunks = self.speakingMinimumChunks;
      const hasItem = speakingMinimumChunks.has(item) || num >= item;
      return hasItem;
    });
    const merged1 = Object.assign(found1.reduce((acc, item) => {
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
    }, {}));
    return obj;
  }
}
const prototype = VoiceDuration.prototype;

export default VoiceDuration;