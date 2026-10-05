// _runtime/metro/00318__.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

class Info {
  constructor() {
    _classCallCheck(this, Info);
    this.any_blank_count = 0;
    this.any_blank_ms = 0;
    this.any_blank_speed_sum = 0;
    this.mostly_blank_count = 0;
    this.mostly_blank_ms = 0;
    this.pixels_blank = 0;
    this.pixels_sampled = 0;
    this.pixels_scrolled = 0;
    this.total_time_spent = 0;
    this.sample_count = 0;
  }
}
let closure_2 = _createClass(Info);
let closure_3 = [];
let c4 = 10;
let c5 = null;
class FillRateHelper {
  constructor(_listMetrics) {
    const self = this;
    _classCallCheck(this, FillRateHelper);
    this._anyBlankStartTime = null;
    this._enabled = false;
    this._info = new closure_2();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
    this._listMetrics = _listMetrics;
    new closure_2();
    const tmp3 = c5 || 0;
    self._enabled = tmp3 > Math.random();
    self._resetData();
  }
}
const entry = {
  key: "activate",
  value: function activate() {
    const self = this;
    const _enabled = this._enabled && null == self._samplesStartTime;
    if (_enabled) {
      const _performance = global.performance;
      self._samplesStartTime = _performance.now();
    }
  },
};
const items = [
  entry,
  {
    key: "deactivateAndFlush",
    value: function deactivateAndFlush() {
      let diff;
      const self = this;
      if (this._enabled) {
        const _samplesStartTime = self._samplesStartTime;
        if (null != _samplesStartTime) {
          if (self._info.sample_count < c4) {
            self._resetData();
          } else {
            const _performance = global.performance;
            const obj = { total_time_spent: diff };
            diff = _performance.now() - _samplesStartTime;
            const merged = Object.assign(self._info);
            const item = closure_3.forEach((fn) => fn(obj));
            self._resetData();
          }
        }
      }
    },
  },
  {
    key: "computeBlankness",
    value: function computeBlankness(props, cellsAroundViewport, _scrollMetrics) {
      let dOffset;
      let offset;
      let visibleLength;
      const self = this;
      if (this._enabled) {
        if (0 !== props.getItemCount(props.data)) {
          if (cellsAroundViewport.last >= cellsAroundViewport.first) {
            if (null != self._samplesStartTime) {
              ({ dOffset, offset, visibleLength } = _scrollMetrics);
              const _info7 = self._info;
              _info7.sample_count = _info7.sample_count + 1;
              const _info8 = self._info;
              const _Math7 = Math;
              const velocity = _scrollMetrics.velocity;
              _info8.pixels_sampled = _info8.pixels_sampled + Math.round(visibleLength);
              const _info9 = self._info;
              const _Math8 = Math;
              const _Math9 = Math;
              _info9.pixels_scrolled = _info9.pixels_scrolled + Math.round(Math.abs(dOffset));
              const _Math10 = Math;
              const _Math11 = Math;
              const rounded = Math.round(1000 * Math.abs(velocity));
              const _performance = global.performance;
              const nowResult = _performance.now();
              if (null != self._anyBlankStartTime) {
                const _info = self._info;
                _info.any_blank_ms = _info.any_blank_ms + (nowResult - self._anyBlankStartTime);
              }
              self._anyBlankStartTime = null;
              if (null != self._mostlyBlankStartTime) {
                const _info2 = self._info;
                _info2.mostly_blank_ms = _info2.mostly_blank_ms + (nowResult - self._mostlyBlankStartTime);
              }
              self._mostlyBlankStartTime = null;
              const first = cellsAroundViewport.first;
              const _listMetrics = self._listMetrics;
              const cellMetrics = _listMetrics.getCellMetrics(first, props);
              let tmp3 = cellMetrics;
              let tmp4 = first;
              if (first <= cellsAroundViewport.last) {
                let tmp5 = first;
                if (!cellMetrics) {
                  const _listMetrics2 = self._listMetrics;
                  const cellMetrics1 = _listMetrics2.getCellMetrics(tmp5, props);
                  const sum = tmp5 + 1;
                  tmp3 = cellMetrics1;
                  tmp4 = sum;
                  while (sum <= cellsAroundViewport.last) {
                    tmp5 = sum;
                    if (!cellMetrics1) {
                      continue;
                    } else {
                      tmp5 = sum;
                      tmp3 = cellMetrics1;
                      tmp4 = sum;
                      if (cellMetrics1.isMounted) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  tmp5 = first;
                  tmp3 = cellMetrics;
                  tmp4 = first;
                }
              }
              let num2 = 0;
              const tmp8 = tmp3 && tmp4 > 0;
              if (tmp8) {
                const _Math = Math;
                const _Math2 = Math;
                num2 = Math.min(visibleLength, Math.max(0, tmp3.offset - offset));
              }
              const last = cellsAroundViewport.last;
              const _listMetrics3 = self._listMetrics;
              const cellMetrics2 = _listMetrics3.getCellMetrics(last, props);
              let arr = cellMetrics2;
              let tmp10 = last;
              if (last >= cellsAroundViewport.first) {
                let tmp11 = last;
                if (!cellMetrics2) {
                  const _listMetrics4 = self._listMetrics;
                  const cellMetrics3 = _listMetrics4.getCellMetrics(tmp11, props);
                  const diff = tmp11 - 1;
                  arr = cellMetrics3;
                  tmp10 = diff;
                  while (diff >= cellsAroundViewport.first) {
                    tmp11 = diff;
                    if (!cellMetrics3) {
                      continue;
                    } else {
                      tmp11 = diff;
                      arr = cellMetrics3;
                      tmp10 = diff;
                      if (cellMetrics3.isMounted) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  tmp11 = last;
                  arr = cellMetrics2;
                  tmp10 = last;
                }
              }
              let num3 = 0;
              if (arr) {
                num3 = 0;
                if (tmp10 < props.getItemCount(props.data) - 1) {
                  const _Math3 = Math;
                  const _Math4 = Math;
                  num3 = Math.min(visibleLength, Math.max(0, offset + visibleLength - (arr.offset + arr.length)));
                }
              }
              const _Math5 = Math;
              const rounded1 = Math.round(num2 + num3);
              const result = rounded1 / visibleLength;
              if (result > 0) {
                self._anyBlankStartTime = nowResult;
                const _info3 = self._info;
                _info3.any_blank_speed_sum = _info3.any_blank_speed_sum + rounded;
                const _info4 = self._info;
                _info4.any_blank_count = _info4.any_blank_count + 1;
                const _info5 = self._info;
                _info5.pixels_blank = _info5.pixels_blank + rounded1;
                if (result > 0.5) {
                  self._mostlyBlankStartTime = nowResult;
                  const _info6 = self._info;
                  _info6.mostly_blank_count = _info6.mostly_blank_count + 1;
                }
              } else {
                let tmp16 = rounded < 0.01;
                if (!tmp16) {
                  const _Math6 = Math;
                  tmp16 = Math.abs(dOffset) < 1;
                }
                if (tmp16) {
                  self.deactivateAndFlush();
                }
              }
              return result;
            }
          }
        }
      }
      return 0;
    },
  },
  {
    key: "enabled",
    value: function enabled() {
      return this._enabled;
    },
  },
  {
    key: "_resetData",
    value: function _resetData() {
      ({ _anyBlankStartTime: null, _info: new closure_2(), _mostlyBlankStartTime: null, _samplesStartTime: null });
      new closure_2();
    },
  },
];
const entry1 = {
  key: "addListener",
  value: function addListener(arg0) {
    let closure_0 = arg0;
    if (null === c5) {
      const _console = console;
      console.warn("Call `FillRateHelper.setSampleRate` before `addListener`.");
    }
    closure_3.push(arg0);
    return {
      remove() {
        closure_3 = closure_3.filter((item) => closure_1_0 !== item);
      },
    };
  },
};
const items1 = [
  entry1,
  {
    key: "setSampleRate",
    value: function setSampleRate(arg0) {
      c5 = arg0;
    },
  },
  {
    key: "setMinSampleCount",
    value: function setMinSampleCount(arg0) {
      c4 = arg0;
    },
  },
];

export default _createClass(FillRateHelper, items, items1);
