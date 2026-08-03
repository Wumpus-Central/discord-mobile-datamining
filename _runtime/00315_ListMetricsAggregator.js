import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const ListMetricsAggregator = arg1;
class ListMetricsAggregator {
  constructor() {
    tmp = outer1_3(this, ListMetricsAggregator);
    this._averageCellLength = 0;
    map = new Map();
    this._cellMetrics = map;
    this._highestMeasuredCellIndex = 0;
    this._measuredCellsLength = 0;
    this._measuredCellsCount = 0;
    this._orientation = { horizontal: false, rtl: false };
    return;
  }
}
const items = [
  {
    key: "notifyCellLayout",
    value: function notifyCellLayout(orientation) {
      let cellIndex;
      let cellKey;
      let layout;
      const self = this;
      ({ cellIndex, cellKey, layout } = orientation);
      const result = this._invalidateIfOrientationChanged(orientation.orientation);
      const obj = { index: cellIndex, length: this._selectLength(layout), isMounted: true, offset: this.flowRelativeOffset(layout) };
      const _cellMetrics = this._cellMetrics;
      const value = _cellMetrics.get(cellKey);
      if (value) {
        if (obj.offset === value.offset) {
          if (obj.length === value.length) {
            value.isMounted = true;
            return false;
          }
        }
      }
      if (value) {
        self._measuredCellsLength = self._measuredCellsLength + (obj.length - value.length);
      } else {
        self._measuredCellsLength = self._measuredCellsLength + obj.length;
        self._measuredCellsCount = self._measuredCellsCount + 1;
      }
      self._averageCellLength = self._measuredCellsLength / self._measuredCellsCount;
      const _cellMetrics2 = self._cellMetrics;
      const result1 = _cellMetrics2.set(cellKey, obj);
      self._highestMeasuredCellIndex = Math.max(self._highestMeasuredCellIndex, cellIndex);
      return true;
    }
  },
  {
    key: "notifyCellUnmounted",
    value: function notifyCellUnmounted(arg0) {
      const _cellMetrics = this._cellMetrics;
      const value = _cellMetrics.get(arg0);
      if (value) {
        value.isMounted = false;
      }
    }
  },
  {
    key: "notifyListContentLayout",
    value: function notifyListContentLayout(orientation) {
      const result = this._invalidateIfOrientationChanged(orientation.orientation);
      this._contentLength = this._selectLength(orientation.layout);
    }
  },
  {
    key: "getAverageCellLength",
    value: function getAverageCellLength() {
      return this._averageCellLength;
    }
  },
  {
    key: "getHighestMeasuredCellIndex",
    value: function getHighestMeasuredCellIndex() {
      return this._highestMeasuredCellIndex;
    }
  },
  {
    key: "getCellMetricsApprox",
    value: function getCellMetricsApprox(first, props) {
      let data;
      let getItemCount;
      const self = this;
      const cellMetrics = this.getCellMetrics(first, props);
      if (cellMetrics) {
        if (cellMetrics.index === first) {
          return cellMetrics;
        }
      }
      const highestMeasuredCellIndex = self.getHighestMeasuredCellIndex();
      let sum;
      if (highestMeasuredCellIndex < first) {
        const cellMetrics1 = self.getCellMetrics(highestMeasuredCellIndex, props);
        if (cellMetrics1) {
          sum = cellMetrics1.offset + cellMetrics1.length + self._averageCellLength * (first - highestMeasuredCellIndex - 1);
        }
      }
      if (null == sum) {
        sum = self._averageCellLength * first;
      }
      ({ data, getItemCount } = props);
      let tmp5 = first >= 0;
      if (tmp5) {
        tmp5 = first < getItemCount(data);
      }
      importDefault(38)(tmp5, `Tried to get frame for out of range index ${first}`);
      return { length: self._averageCellLength, offset: sum, index: first, isMounted: false };
    }
  },
  {
    key: "getCellMetrics",
    value: function getCellMetrics(first, keyExtractor) {
      let data;
      let getItem;
      let getItemCount;
      let getItemLayout;
      ({ data, getItemLayout } = keyExtractor);
      ({ getItem, getItemCount } = keyExtractor);
      let tmp3 = first >= 0;
      if (tmp3) {
        tmp3 = first < getItemCount(data);
      }
      importDefault(38)(tmp3, `Tried to get metrics for out of range cell index ${first}`);
      keyExtractor = keyExtractor.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = ListMetricsAggregator(313).keyExtractor;
      }
      const _cellMetrics = this._cellMetrics;
      const value = _cellMetrics.get(keyExtractor(getItem(data, first), first));
      if (value) {
        if (value.index === first) {
          return value;
        }
      }
      if (getItemLayout) {
        const itemLayout = getItemLayout(data, first);
        const obj = { index: null, length: null, offset: null, isMounted: true };
        obj[0] = first;
        ({ length: obj[1], offset: obj[2] } = itemLayout);
        return obj;
      } else {
        return null;
      }
      const tmp2 = importDefault(38);
    }
  },
  {
    key: "getCellOffsetApprox",
    value: function getCellOffsetApprox(index, props) {
      const self = this;
      const getCellMetricsApprox = this.getCellMetricsApprox;
      if (Number.isInteger(index)) {
        return getCellMetricsApprox(index, props).offset;
      } else {
        const _Math = Math;
        const cellMetricsApprox = getCellMetricsApprox(Math.floor(index), props);
        const _Math2 = Math;
        return cellMetricsApprox.offset + (index - Math.floor(index)) * cellMetricsApprox.length;
      }
    }
  },
  {
    key: "getContentLength",
    value: function getContentLength() {
      let num = this._contentLength;
      if (num == null) {
        num = 0;
      }
      return num;
    }
  },
  {
    key: "hasContentLength",
    value: function hasContentLength() {
      return null != this._contentLength;
    }
  },
  {
    key: "flowRelativeOffset",
    value: function flowRelativeOffset(layout) {
      const self = this;
      const _orientation = this._orientation;
      if (_orientation.horizontal) {
        if (_orientation.rtl) {
          let _contentLength = arg1;
          if (arg1 == null) {
            _contentLength = self._contentLength;
          }
          importDefault(38)(null != _contentLength, "ListMetricsAggregator must be notified of list content layout before resolving offsets");
          return _contentLength - (self._selectOffset(layout) + self._selectLength(layout));
        }
      }
      return self._selectOffset(layout);
    }
  },
  {
    key: "cartesianOffset",
    value: function cartesianOffset(arg0) {
      const self = this;
      let diff = arg0;
      if (this._orientation.horizontal) {
        diff = arg0;
        if (tmp) {
          importDefault(38)(null != self._contentLength, "ListMetricsAggregator must be notified of list content layout before resolving offsets");
          diff = self._contentLength - arg0;
        }
      }
      return diff;
    }
  },
  {
    key: "_invalidateIfOrientationChanged",
    value: function _invalidateIfOrientationChanged(orientation) {
      const self = this;
      if (orientation.rtl !== this._orientation.rtl) {
        const _cellMetrics = self._cellMetrics;
        _cellMetrics.clear();
      }
      if (orientation.horizontal !== self._orientation.horizontal) {
        self._averageCellLength = 0;
        self._highestMeasuredCellIndex = 0;
        self._measuredCellsLength = 0;
        self._measuredCellsCount = 0;
      }
      self._orientation = orientation;
    }
  },
  {
    key: "_selectLength",
    value: function _selectLength(height) {
      let width = height.height;
      if (this._orientation.horizontal) {
        width = height.width;
      }
      return width;
    }
  },
  {
    key: "_selectOffset",
    value: function _selectOffset(arg0) {
      let x = arg0.y;
      if (this._orientation.horizontal) {
        x = arg0.x;
      }
      return x;
    }
  }
];

export default _createClass(ListMetricsAggregator, items);