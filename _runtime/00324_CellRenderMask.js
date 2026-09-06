// === Module 324: CellRenderMask ===

// Module 324 (CellRenderMask)
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const CellRenderMask = importDefault;
class CellRenderMask {
  constructor(arg0) {
    tmp = closure_3(this, CellRenderMask);
    tmp2 = closure_0(closure_1[3])(global >= 0, "CellRenderMask must contain a non-negative number os cells");
    this._numCells = global;
    if (0 === global) {
      items = [];
    } else {
      obj = { first: 0, last: null, isSpacer: true };
      num = 1;
      obj.last = global - 1;
      items = [];
      items[0] = obj;
    }
    this._regions = items;
    return;
  }
}
const entry = {
  key: "enumerateRegions",
  value: function enumerateRegions() {
    return this._regions;
  }
};
let items = [
  entry,
  {
    key: "addCells",
    value: function addCells(VirtualizedList) {
      let self = this;
      let tmp2 = VirtualizedList.first >= 0;
      if (tmp2) {
        tmp2 = VirtualizedList.first < self._numCells;
      }
      if (tmp2) {
        tmp2 = VirtualizedList.last >= -1;
      }
      if (tmp2) {
        tmp2 = VirtualizedList.last < self._numCells;
      }
      if (tmp2) {
        tmp2 = VirtualizedList.last >= VirtualizedList.first - 1;
      }
      CellRenderMask(38)(tmp2, "CellRenderMask.addCells called with invalid cell range");
      if (VirtualizedList.last >= VirtualizedList.first) {
        let num7 = 2;
        [tmp24, tmp25] = _slicedToArray(self._findRegion(VirtualizedList.first), 2);
        const tmp23 = _slicedToArray(self._findRegion(VirtualizedList.first), 2);
        [last, splice] = _slicedToArray(self._findRegion(VirtualizedList.last), 2);
        const items = [];
        let obj = {};
        const merged = Object.assign(VirtualizedList);
        obj.isSpacer = false;
        if (tmp24.first < obj.first) {
          if (tmp24.isSpacer) {
            obj = { first: tmp24.first, last: null, isSpacer: true };
            obj.last = obj.first - 1;
            items.push(obj);
          } else {
            obj.first = tmp24.first;
          }
        }
        let items1 = [];
        if (last.last <= obj.last) {
          const items2 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
          items2[arraySpreadResult] = obj;
          arraySpreadResult = HermesBuiltin.arraySpread(items1, arraySpreadResult + 1);
          items1 = self._regions;
          const sum = splice - tmp25 + 1;
          splice = items1.splice;
          const items3 = [tmp25, sum];
          num7 = HermesBuiltin.arraySpread(items2, num7);
          self = HermesBuiltin.apply(items3, items1);
        } else if (!last.isSpacer) {
          obj.last = last.last;
        }
        obj = { first: null, last: null, isSpacer: true };
        obj.first = obj.last + 1;
        last = last.last;
        obj.last = last;
        items1.push(obj);
        const tmp26 = _slicedToArray(self._findRegion(VirtualizedList.last), 2);
      }
    }
  },
  {
    key: "numCells",
    value: function numCells() {
      return this._numCells;
    }
  },
  {
    key: "equals",
    value: function equals(_numCells) {
      const self = this;
      let _regions = _numCells;
      let everyResult = this._numCells === _numCells._numCells && self._regions.length === _numCells._regions.length;
      if (everyResult) {
        _regions = self._regions;
        everyResult = _regions.every((item, index) => item.first === _regions._regions[index].first && item.last === _regions._regions[index].last && item.isSpacer === _regions._regions[index].isSpacer);
      }
      return everyResult;
    }
  },
  {
    key: "_findRegion",
    value: function _findRegion(arg0) {
      let rounded;
      let tmp4;
      let diff = this._regions.length - 1;
      let num = 0;
      if (0 <= diff) {
        while (true) {
          let _Math = Math;
          rounded = Math.floor((num + diff) / 2);
          tmp4 = tmp._regions[rounded];
          if (arg0 >= tmp4.first) {
            if (arg0 <= tmp4.last) {
              break;
            }
          }
          if (arg0 < tmp4.first) {
            let diff1 = rounded - 1;
            let sum = num;
          } else {
            diff1 = diff;
            sum = num;
            if (arg0 > tmp4.last) {
              sum = rounded + 1;
              diff1 = diff;
            }
          }
          diff = diff1;
          num = sum;
        }
        const items = [tmp4, rounded];
        return items;
      }
      CellRenderMask(38)(false, "A region was not found containing cellIdx " + arg0);
    }
  }
];

export const CellRenderMask = _createClassDefault(CellRenderMask, items);