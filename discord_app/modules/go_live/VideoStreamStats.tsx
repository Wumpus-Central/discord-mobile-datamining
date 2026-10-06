// === Module 4949: VideoStreamStats ===

// Module 4949 (VideoStreamStats)
import Constants from "Constants" /* 1085 */;
import TimeUtils from "TimeUtils" /* 4925 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4942 */;
import size from "module_2" /* 2 */;

const StreamLayouts = Constants.StreamLayouts;
const result = size.fileFinishedImporting("modules/go_live/VideoStreamStats.tsx");
class VideoStreamStats {
  constructor(_lastLayout, _isSender) {
    const obj = Object.create(new.target.prototype);
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
    obj._isSender = _isSender;
    const interval = new obj(2046).Interval();
    obj._statInterval = interval;
    obj._lastLayout = _lastLayout;
    obj._layoutBuckets = {};
    return obj;
  }
  start() {
    const state = ApplicationStreamingSettingsStore.getState();
    ({ resolution: this._targetResolution, fps: this._targetFPS } = state);
    const _statInterval = this._statInterval;
    _statInterval.start(1000, this._sampleStats);
    const obj = TimeUtils;
    this._lastLayoutChanged = obj.now();
  }
  stop() {
    const _statInterval = this._statInterval;
    _statInterval.stop();
    const obj = TimeUtils;
    this._streamEnd = obj.now();
    this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
  }
  autoQualityChange() {
    this._automaticQualityChanges = this._automaticQualityChanges + 1;
  }
  layoutChange(_lastLayout) {
    const self = this;
    if (_lastLayout !== this._lastLayout) {
      if (null == self._streamEnd) {
        const obj = TimeUtils;
        const nowResult = obj.now();
        self._incrementLayout(self._lastLayout, (nowResult - self._lastLayoutChanged) / 1000);
        self._layoutChanges = self._layoutChanges + 1;
        self._lastLayout = _lastLayout;
        self._lastLayoutChanged = nowResult;
      }
    }
  }
  getLayout() {
    return this._lastLayout;
  }
  getStats() {
    let num;
    let num2;
    let num3;
    let num4;
    let num5;
    let num6;
    let num7;
    const self = this;
    const obj = { num_layout_changes: this._layoutChanges, duration_layout_fullscreen: num, duration_layout_theatre: num2, duration_layout_pip: num3, duration_layout_popout: num4, duration_layout_portrait: num5, duration_layout_landscape: num6, duration_layout_minimized: num7 };
    num = 0;
    if (null != this._layoutBuckets[StreamLayouts.FULL_SCREEN]) {
      const _Math = Math;
      num = Math.round(tmp2);
    }
    num2 = 0;
    if (null != self._layoutBuckets[StreamLayouts.THEATRE]) {
      const _Math2 = Math;
      num2 = Math.round(tmp4);
    }
    num3 = 0;
    if (null != self._layoutBuckets[StreamLayouts.PIP]) {
      const _Math3 = Math;
      num3 = Math.round(tmp6);
    }
    num4 = 0;
    if (null != self._layoutBuckets[StreamLayouts.POPOUT]) {
      const _Math4 = Math;
      num4 = Math.round(tmp8);
    }
    num5 = 0;
    if (null != self._layoutBuckets[StreamLayouts.PORTRAIT]) {
      const _Math5 = Math;
      num5 = Math.round(tmp10);
    }
    num6 = 0;
    if (null != self._layoutBuckets[StreamLayouts.LANDSCAPE]) {
      const _Math6 = Math;
      num6 = Math.round(tmp12);
    }
    num7 = 0;
    if (null != self._layoutBuckets[StreamLayouts.MINIMIZED]) {
      const _Math7 = Math;
      num7 = Math.round(tmp14);
    }
    let tmp16 = obj;
    if (self._isSender) {
      const obj3 = {};
      const merged = Object.assign(obj);
      ({ _targetFPS: obj2.target_fps, _targetResolution: obj2.target_resolution_height, _streamSettingsChanged: obj2.stream_settings_changed, _automaticQualityChanges: obj2.num_auto_quality_changes } = self);
      tmp16 = obj3;
    }
    return tmp16;
  }
}
const prototype = VideoStreamStats.prototype;

export default VideoStreamStats;