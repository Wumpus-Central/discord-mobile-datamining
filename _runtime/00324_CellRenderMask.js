// === Module 324: CellRenderMask ===

// Module 324 (CellRenderMask)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";

const CellRenderMask = importDefault;
class CellRenderMask {
  constructor(arg0) {
    tmp = outer1_3(this, CellRenderMask);
    tmp2 = require("module_38")(global >= 0, "CellRenderMask must contain a non-negative number os cells");
    this._numCells = global;
    if (0 === global) {
      items = [];
    } else {
      obj = { first: 0, last: null, isSpacer: true };
      num = 1;
      obj[1] = global - 1;
      items = [];
      items[0] = obj;
    }
    this._regions = items;
    return;
  }
}
let items = [
  {
    key: "enumerateRegions",
    value: function enumerateRegions() {
      return this._regions;
    }
  },
  {
    key: "addCells",
    value: function addCells(VirtualizedList) {
      let last;
      let splice;
      let tmp24;
      let tmp25;
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
        [tmp24, tmp25] = callback(self._findRegion(VirtualizedList.first), 2);
        const tmp23 = callback(self._findRegion(VirtualizedList.first), 2);
        [last, splice] = callback(self._findRegion(VirtualizedList.last), 2);
        const items = [];
        let obj = {};
        const merged = Object.assign(VirtualizedList);
        obj.isSpacer = false;
        if (tmp24.first < obj.first) {
          if (tmp24.isSpacer) {
            obj = { first: null, last: null, isSpacer: true };
            obj[0] = tmp24.first;
            obj[1] = obj.first - 1;
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
        obj[0] = obj.last + 1;
        last = last.last;
        obj[1] = last;
        items1.push(obj);
        const tmp26 = callback(self._findRegion(VirtualizedList.last), 2);
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
      let closure_0 = _numCells;
      let everyResult = this._numCells === _numCells._numCells && self._regions.length === _numCells._regions.length;
      if (everyResult) {
        const _regions = self._regions;
        everyResult = _regions.every((first) => first.first === _regions._regions[arg1].first && first.last === _regions._regions[arg1].last && first.isSpacer === _regions._regions[arg1].isSpacer);
      }
      return everyResult;
    }
  },
  {
    key: "_findRegion",
    value: function _findRegion(first) {
      let rounded;
      let tmp4;
      let diff = this._regions.length - 1;
      let num = 0;
      if (0 <= diff) {
        while (true) {
          let _Math = Math;
          rounded = Math.floor((num + diff) / 2);
          tmp4 = tmp._regions[rounded];
          let tmp5 = diff;
          let tmp6 = num;
          if (first >= tmp4.first) {
            if (first <= tmp4.last) {
              break;
            }
          }
          if (first < tmp4.first) {
            let diff1 = rounded - 1;
            let sum = num;
          } else {
            diff1 = diff;
            sum = num;
            if (first > tmp4.last) {
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
      CellRenderMask(38)(false, "A region was not found containing cellIdx " + first);
    }
  }
];

export const CellRenderMask = require("_createClass")(CellRenderMask, items);