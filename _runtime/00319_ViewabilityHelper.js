// === Module 319: ViewabilityHelper ===

// Module 319 (ViewabilityHelper)
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

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
const entry = {
  key: "dispose",
  value: function dispose() {
    const _timers = this._timers;
    const item = _timers.forEach(clearTimeout);
  }
};
let items = [
  entry,
  {
    key: "computeViewableItems",
    value: function computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, renderRange) {
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
        let tmp7 = renderRange;
        if (!renderRange) {
          let obj = { first: 0, last: itemCount - 1 };
          tmp7 = obj;
        }
        ({ first, last } = tmp7);
        if (last >= itemCount) {
          const _console = console;
          const _JSON = JSON;
          obj = { renderRange, itemCount };
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
                      let tmp16 = 100 * (tmp2 ? bound1 / arg2 : bound1 / cellMetrics.length) >= tmp3;
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
    value: function onUpdate(getItemCount, arg1, arg2, getCellMetrics, arg4, fn, renderRange) {
      const self = this;
      closure_1 = getItemCount;
      closure_2 = arg4;
      closure_3 = fn;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      if (!this._config.waitForInteraction) {
        if (0 !== itemCount) {
          if (getCellMetrics.getCellMetrics(0, getItemCount)) {
            let items = [];
            let viewableItems = items;
            if (itemCount) {
              viewableItems = self.computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, renderRange);
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
                self._onUpdateSync(getItemCount, items, fn, arg4);
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
    value: function _onUpdateSync(getItemCount, items, fn, arg3) {
      const self = this;
      closure_1 = getItemCount;
      closure_0 = arg3;
      const found = items.filter((item) => {
        const _viewableIndices = self._viewableIndices;
        return _viewableIndices.includes(item);
      });
      const _viewableItems = this._viewableItems;
      const map = new Map(found.map((item) => {
        const tmp = closure_0(item, true, closure_1);
        const items = [tmp.key, tmp];
        return items;
      }));
      items = [];
      while (tmp !== undefined) {
        let tmp4 = _slicedToArray(tmp2, 2);
        let tmp5 = tmp4[1];
        if (!_viewableItems.has(tmp4[0])) {
          let arr = items.push(tmp5);
        }
        continue;
      }
      tmp = map[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let tmp11 = _slicedToArray(tmp9, 2);
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
        obj.viewableItems = Array.from(map.values());
        obj.changed = items;
        obj.viewabilityConfig = self._config;
        fn(obj);
      }
      tmp8 = _viewableItems[Symbol.iterator]();
    }
  }
];

export default _createClassDefault(ViewabilityHelper, items);