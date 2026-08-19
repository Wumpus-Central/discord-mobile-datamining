// _runtime/00319_ViewabilityHelper.js
import _createClassDefault from "metro/00042__createClass.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const ViewabilityHelper = arg1;
class ViewabilityHelper {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = { viewAreaCoveragePercentThreshold: 0 };
    }
    tmp = closure_3(this, ViewabilityHelper);
    this._hasInteracted = false;
    set = new Set();
    this._timers = set;
    this._viewableIndices = [];
    map = new Map();
    this._viewableItems = map;
    this._config = obj;
    return;
  }
}
let items = [
  {
    key: "dispose",
    value: function dispose() {
      const _timers = this._timers;
      const item = _timers.forEach(clearTimeout);
    }
  },
  {
    key: "computeViewableItems",
    value: function computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, arg4) {
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      ({ itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold } = this._config);
      let tmp3 = itemVisiblePercentThreshold;
      if (null != viewAreaCoveragePercentThreshold) {
        tmp3 = viewAreaCoveragePercentThreshold;
      }
      let tmp5 = null != tmp3;
      if (tmp5) {
        tmp5 = null != itemVisiblePercentThreshold !== (null != viewAreaCoveragePercentThreshold);
      }
      ViewabilityHelper(38)(tmp5, "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
      const items = [];
      if (0 === itemCount) {
        return items;
      } else {
        let tmp7 = arg4;
        if (!arg4) {
          let obj = { first: 0, last: null };
          obj[1] = itemCount - 1;
          tmp7 = obj;
        }
        ({ first, last } = tmp7);
        if (last >= itemCount) {
          const _console = console;
          const _JSON = JSON;
          obj = { renderRange: null, itemCount: null };
          obj[0] = arg4;
          obj[1] = itemCount;
          console.warn(`Invalid render range computing viewability ${JSON.stringify(obj2)}`);
          return [];
        } else {
          let num2 = -1;
          if (first <= last) {
            while (true) {
              let cellMetrics = getCellMetrics.getCellMetrics(first, getItemCount);
              let tmp10 = num2;
              if (!cellMetrics) {
                first = first + 1;
                num2 = tmp10;
                if (first > last) {
                  break;
                }
              } else {
                let _Math = Math;
                let rounded = Math.floor(cellMetrics.offset - arg1);
                let _Math2 = Math;
                let rounded1 = Math.floor(rounded + cellMetrics.length);
                if (rounded < arg2) {
                  if (rounded1 > 0) {
                    let tmp13 = rounded >= 0;
                    if (tmp13) {
                      tmp13 = rounded1 <= arg2;
                    }
                    if (tmp13) {
                      tmp13 = rounded1 > rounded;
                    }
                    let flag = true;
                    if (tmp13) {
                      tmp10 = first;
                      {
                        let arr = items.push(first);
                        tmp10 = first;
                      }
                    } else {
                      let _Math3 = Math;
                      let _Math4 = Math;
                      let bound = Math.min(rounded1, arg2);
                      let _Math5 = Math;
                      let bound1 = Math.max(0, bound - Math.max(rounded, 0));
                    }
                  }
                }
                tmp10 = num2;
                if (num2 >= 0) {
                  break;
                }
              }
              break;
            }
          }
          return items;
        }
      }
      const tmp4 = ViewabilityHelper(38);
    }
  },
  {
    key: "onUpdate",
    value: function onUpdate(getItemCount, arg1, arg2, getCellMetrics, closure_2, closure_3) {
      const self = this;
      closure_1 = getItemCount;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      if (!this._config.waitForInteraction) {
        if (0 !== itemCount) {
          if (getCellMetrics.getCellMetrics(0, getItemCount)) {
            let items = [];
            let viewableItems = items;
            if (itemCount) {
              viewableItems = self.computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, arg6);
              items = viewableItems;
            }
            if (self._viewableIndices.length !== items.length) {
              self._viewableIndices = items;
              if (self._config.minimumViewTime) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  const _timers = self._timers;
                  _timers.delete(timerId);
                  self._onUpdateSync(closure_1, viewableItems, closure_3, closure_2);
                }, self._config.minimumViewTime);
                let _timers = self._timers;
                _timers.add(timerId);
              } else {
                self._onUpdateSync(getItemCount, items, closure_3, closure_2);
              }
            } else {
              const _viewableIndices = self._viewableIndices;
            }
          }
        }
      }
    }
  },
  {
    key: "resetViewableIndices",
    value: function resetViewableIndices() {
      this._viewableIndices = [];
    }
  },
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      this._hasInteracted = true;
    }
  },
  {
    key: "_onUpdateSync",
    value: function _onUpdateSync(closure_1, items, closure_3, closure_2) {
      const self = this;
      closure_0 = closure_2;
      const found = items.filter((item, index) => {
        const _viewableIndices = self._viewableIndices;
        return _viewableIndices.includes(item);
      });
      const _viewableItems = this._viewableItems;
      const map = new Map(found.map((item, index) => {
        const tmp = callback(item, true, closure_1);
        const items = [tmp.key, tmp];
        return items;
      }));
      items = [];
      while (tmp !== undefined) {
        let tmp4 = self(tmp2, 2);
        let tmp5 = tmp4[1];
        if (!_viewableItems.has(tmp4[0])) {
          let arr = items.push(tmp5);
        }
        continue;
      }
      tmp = map[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let tmp11 = self(tmp9, 2);
        let tmp12 = tmp11[1];
        if (!map.has(tmp11[0])) {
          let obj = {};
          let merged = Object.assign(tmp12);
          obj.isViewable = false;
          arr = items.push(obj);
        }
        continue;
      }
      if (items.length > 0) {
        self._viewableItems = map;
        obj = { viewableItems: null, changed: null, viewabilityConfig: null };
        const _Array = Array;
        obj[0] = Array.from(map.values());
        obj[1] = items;
        obj[2] = self._config;
        callback(obj);
      }
    }
  }
];

export default _createClassDefault(ViewabilityHelper, items);