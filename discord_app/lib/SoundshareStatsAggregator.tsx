// discord_app/lib/SoundshareStatsAggregator.tsx
import set2 from "../../_runtime/00002_set.js";

const result = set2.fileFinishedImporting("lib/SoundshareStatsAggregator.tsx");
class SoundshareStatsAggregator {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._report = { soundshare_attach_requested_count: 0, soundshare_capturing_count: 0, soundshare_capture_stopped_count: 0, soundshare_hooked_count: 0, soundshare_recv_connect_count: 0, soundshare_recv_disconnect_count: 0, soundshare_recv_started_count: 0, soundshare_recv_stopped_count: 0, soundshare_recv_failed_count: 0, soundshare_recv_format_count: 0, soundshare_send_announce_count: 0, soundshare_send_start_count: 0, soundshare_send_stop_count: 0, soundshare_malformed_trace_count: 0, soundshare_audio_detected_count: 0, soundshare_state_transition_detached_count: 0, soundshare_state_transition_waiting_count: 0, soundshare_state_transition_attached_count: 0, soundshare_state_transition_started_count: 0, soundshare_state_transition_playing_count: 0, soundshare_state_transition_silence_count: 0, soundshare_unknown_event_count: 0, soundshare_first_pid: 0, soundshare_last_pid: 0, soundshare_unique_pids: 0, soundshare_first_session: null, soundshare_last_session: null };
    set = new Set();
    obj._pids = set;
    return obj;
  }
}
const prototype = SoundshareStatsAggregator.prototype;
prototype["traceEvent"] = function traceEvent(soundshareSession, type) {
  const _report = this._report;
  if ("soundshare_state_transition" === type.type) {
    const _HermesInternal2 = HermesInternal;
    let combined = "soundshare_state_transition_" + ["detached", "waiting", "attached", "started", "playing", "silence"][type.newState] + "_count";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + type.type + "_count";
  }
  if (undefined !== _report[combined]) {
    if (_report[combined] < 32767) {
      _report[combined] = _report[combined] + 1;
    }
  } else {
    _report.soundshare_unknown_event_count = _report.soundshare_unknown_event_count + 1;
  }
  if ("pid" in type) {
    if (0 === _report.soundshare_first_pid) {
      _report.soundshare_first_pid = type.pid;
    }
    _report.soundshare_last_pid = type.pid;
    const _pids = this._pids;
    _pids.add(type.pid);
  }
  if (null != soundshareSession) {
    if (null == _report.soundshare_first_session) {
      _report.soundshare_first_session = soundshareSession;
    }
    _report.soundshare_last_session = soundshareSession;
  }
};
prototype["getStats"] = function getStats() {
  const obj = {};
  const merged = Object.assign(this._report);
  obj.soundshare_unique_pids = this._pids.size;
  return obj;
};

export default SoundshareStatsAggregator;