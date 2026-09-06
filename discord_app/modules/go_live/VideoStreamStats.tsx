// === Module 4613: VideoStreamStats ===

// Module 4613 (VideoStreamStats)
import TimeUtils from "TimeUtils" /* 4589 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4606 */;

require = fn;
const StreamLayouts = fn(1074).StreamLayouts;
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
prototype["getStats"] = function getStats() {
  const self = this;
  let obj = { num_layout_changes: this._layoutChanges, duration_layout_fullscreen: null, duration_layout_theatre: null, duration_layout_pip: null, duration_layout_popout: null, duration_layout_portrait: null, duration_layout_landscape: null, duration_layout_minimized: null };
  let num = 0;
  if (null != this._layoutBuckets[StreamLayouts.FULL_SCREEN]) {
    const _Math = Math;
    num = Math.round(tmp2);
  }
  obj.duration_layout_fullscreen = num;
  let num2 = 0;
  if (null != self._layoutBuckets[StreamLayouts.THEATRE]) {
    const _Math2 = Math;
    num2 = Math.round(tmp4);
  }
  obj.duration_layout_theatre = num2;
  let num3 = 0;
  if (null != self._layoutBuckets[StreamLayouts.PIP]) {
    const _Math3 = Math;
    num3 = Math.round(tmp6);
  }
  obj.duration_layout_pip = num3;
  let num4 = 0;
  if (null != self._layoutBuckets[StreamLayouts.POPOUT]) {
    const _Math4 = Math;
    num4 = Math.round(tmp8);
  }
  obj.duration_layout_popout = num4;
  let num5 = 0;
  if (null != self._layoutBuckets[StreamLayouts.PORTRAIT]) {
    const _Math5 = Math;
    num5 = Math.round(tmp10);
  }
  obj.duration_layout_portrait = num5;
  let num6 = 0;
  if (null != self._layoutBuckets[StreamLayouts.LANDSCAPE]) {
    const _Math6 = Math;
    num6 = Math.round(tmp12);
  }
  obj.duration_layout_landscape = num6;
  let num7 = 0;
  if (null != self._layoutBuckets[StreamLayouts.MINIMIZED]) {
    const _Math7 = Math;
    num7 = Math.round(tmp14);
  }
  obj.duration_layout_minimized = num7;
  let tmp16 = obj;
  if (self._isSender) {
    obj = {};
    const merged = Object.assign(obj);
    ({ _targetFPS: obj2.target_fps, _targetResolution: obj2.target_resolution_height, _streamSettingsChanged: obj2.stream_settings_changed, _automaticQualityChanges: obj2.num_auto_quality_changes } = self);
    tmp16 = obj;
  }
  return tmp16;
};

export default VideoStreamStats;