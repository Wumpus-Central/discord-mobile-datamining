// discord_app/modules/go_live/VideoStreamStats.tsx
import TimeUtils from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import ApplicationStreamingSettingsStore from "../../stores/ApplicationStreamingSettingsStore.tsx";

require = fn;
const StreamLayouts = fn(1072).StreamLayouts;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/VideoStreamStats.tsx");
class VideoStreamStats {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._targetResolution = 0;
    obj._targetFPS = 0;
    obj._streamSettingsChanged = false;
    obj._lastLayoutChanged = 0;
    obj._layoutChanges = 0;
    obj._automaticQualityChanges = 0;
    obj._incrementLayout = function _incrementLayout(_lastLayout, arg1) {
      if (null == obj._layoutBuckets[_lastLayout]) {
        obj._layoutBuckets[_lastLayout] = 0;
      }
      const _layoutBuckets = obj._layoutBuckets;
      _layoutBuckets[_lastLayout] = _layoutBuckets[_lastLayout] + arg1;
    };
    obj._sampleStats = function _sampleStats() {
      const state = ApplicationStreamingSettingsStore.getState();
      obj._streamSettingsChanged = state.resolution !== obj._targetResolution || tmp2 !== obj._targetFPS;
    };
    obj._isSender = fn;
    interval = new closure_0(closure_1[2]).Interval();
    obj._statInterval = interval;
    obj._lastLayout = global;
    obj._layoutBuckets = {};
    return obj;
  }
}
const prototype = VideoStreamStats.prototype;
prototype["start"] = function start() {
  const state = ApplicationStreamingSettingsStore.getState();
  ({ resolution: this._targetResolution, fps: this._targetFPS } = state);
  const _statInterval = this._statInterval;
  _statInterval.start(1000, this._sampleStats);
  this._lastLayoutChanged = TimeUtils.now();
};
prototype["stop"] = function stop() {
  const _statInterval = this._statInterval;
  _statInterval.stop();
  this._streamEnd = TimeUtils.now();
  this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
};
prototype["autoQualityChange"] = function autoQualityChange() {
  this._automaticQualityChanges = this._automaticQualityChanges + 1;
};
prototype["layoutChange"] = function layoutChange(_lastLayout) {
  const self = this;
  if (_lastLayout !== this._lastLayout) {
    if (null == self._streamEnd) {
      const nowResult = TimeUtils.now();
      self._incrementLayout(self._lastLayout, (nowResult - self._lastLayoutChanged) / 1000);
      self._layoutChanges = self._layoutChanges + 1;
      self._lastLayout = _lastLayout;
      self._lastLayoutChanged = nowResult;
    }
  }
};
prototype["getLayout"] = function getLayout() {
  return this._lastLayout;
};
prototype["restartForFragment"] = function restartForFragment() {
  this._layoutChanges = 0;
  this._layoutBuckets = {};
  this._automaticQualityChanges = 0;
  this._lastLayoutChanged = TimeUtils.now();
};
prototype["getStats"] = function getStats() {
  const self = this;
  const obj = {};
  const merged = Object.assign(this._layoutBuckets);
  if (null == this._streamEnd) {
    let num = obj[self._lastLayout];
    if (num == null) {
      num = 0;
    }
    obj[self._lastLayout] = num + (TimeUtils.now() - self._lastLayoutChanged) / 1000;
  }
  const obj3 = {
    num_layout_changes: self._layoutChanges,
    duration_layout_fullscreen: null,
    duration_layout_theatre: null,
    duration_layout_pip: null,
    duration_layout_popout: null,
    duration_layout_portrait: null,
    duration_layout_landscape: null,
    duration_layout_minimized: null,
  };
  let num3 = 0;
  if (null != obj[StreamLayouts.FULL_SCREEN]) {
    const _Math = Math;
    num3 = Math.round(tmp5);
  }
  obj3.duration_layout_fullscreen = num3;
  let num4 = 0;
  if (null != obj[StreamLayouts.THEATRE]) {
    const _Math2 = Math;
    num4 = Math.round(tmp7);
  }
  obj3.duration_layout_theatre = num4;
  let num5 = 0;
  if (null != obj[StreamLayouts.PIP]) {
    const _Math3 = Math;
    num5 = Math.round(tmp9);
  }
  obj3.duration_layout_pip = num5;
  let num6 = 0;
  if (null != obj[StreamLayouts.POPOUT]) {
    const _Math4 = Math;
    num6 = Math.round(tmp11);
  }
  obj3.duration_layout_popout = num6;
  let num7 = 0;
  if (null != obj[StreamLayouts.PORTRAIT]) {
    const _Math5 = Math;
    num7 = Math.round(tmp13);
  }
  obj3.duration_layout_portrait = num7;
  let num8 = 0;
  if (null != obj[StreamLayouts.LANDSCAPE]) {
    const _Math6 = Math;
    num8 = Math.round(tmp15);
  }
  obj3.duration_layout_landscape = num8;
  let num9 = 0;
  if (null != obj[StreamLayouts.MINIMIZED]) {
    const _Math7 = Math;
    num9 = Math.round(tmp17);
  }
  obj3.duration_layout_minimized = num9;
  let tmp19 = obj3;
  if (self._isSender) {
    const obj6 = {};
    const merged1 = Object.assign(obj3);
    ({
      _targetFPS: obj4.target_fps,
      _targetResolution: obj4.target_resolution_height,
      _streamSettingsChanged: obj4.stream_settings_changed,
      _automaticQualityChanges: obj4.num_auto_quality_changes,
    } = self);
    tmp19 = obj6;
  }
  return tmp19;
};

export default VideoStreamStats;
