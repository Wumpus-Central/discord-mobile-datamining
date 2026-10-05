// === Module 324: CellRenderMask ===

// Module 324 (CellRenderMask)
import _modDef38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class CellRenderMask {
  constructor(itemCount) {
    let items;
    _classCallCheck(this, CellRenderMask);
    _modDef38(itemCount >= 0, "CellRenderMask must contain a non-negative number os cells");
    this._numCells = itemCount;
    if (0 === itemCount) {
      items = [];
    } else {
      items = [{ first: 0, last: itemCount - 1, isSpacer: true }];
      const obj = { first: 0, last: itemCount - 1, isSpacer: true };
    }
    this._regions = items;
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
      let tmp25;
      let tmp26;
      let tmp28;
      let tmp29;
      const self = this;
      let tmp3 = VirtualizedList.first >= 0;
      const tmp2 = _modDef38;
      if (tmp3) {
        tmp3 = VirtualizedList.first < self._numCells;
      }
      if (tmp3) {
        tmp3 = VirtualizedList.last >= -1;
      }
      if (tmp3) {
        tmp3 = VirtualizedList.last < self._numCells;
      }
      if (tmp3) {
        tmp3 = VirtualizedList.last >= VirtualizedList.first - 1;
      }
      tmp2(tmp3, "CellRenderMask.addCells called with invalid cell range");
      if (VirtualizedList.last >= VirtualizedList.first) {
        [tmp25, tmp26] = self._findRegion(VirtualizedList.first);
        _slicedToArray(self._findRegion(VirtualizedList.first), 2);
        [tmp28, tmp29] = self._findRegion(VirtualizedList.last);
        _slicedToArray(self._findRegion(VirtualizedList.last), 2);
        if (tmp26 !== tmp29) {
          const items = [];
          const obj = { isSpacer: false };
          const merged = Object.assign(VirtualizedList);
          if (tmp25.first < obj.first) {
            if (tmp25.isSpacer) {
              const obj2 = { first: tmp25.first, last: obj.first - 1, isSpacer: true };
              items.push(obj2);
            } else {
              obj.first = tmp25.first;
            }
          }
          const items1 = [];
          if (tmp28.last > obj.last) {
            if (tmp28.isSpacer) {
              const obj3 = { first: obj.last + 1, last: tmp28.last, isSpacer: true };
              items1.push(obj3);
            } else {
              obj.last = tmp28.last;
            }
          }
          const items2 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items2, items, 0);
          items2[arraySpreadResult] = obj;
          HermesBuiltin.arraySpread(items2, items1, arraySpreadResult + 1);
          const _regions = self._regions;
          const splice = _regions.splice;
          const items3 = [tmp26, tmp29 - tmp26 + 1];
          HermesBuiltin.arraySpread(items3, items2, 2);
          HermesBuiltin.apply(splice, items3, _regions);
        }
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
    value: function _findRegion(VirtualizedList) {
      let rounded;
      let tmp4;
      let diff = this._regions.length - 1;
      let num = 0;
      if (0 <= diff) {
        while (true) {
          let diff1;
          let sum;
          let _Math = Math;
          rounded = Math.floor((num + diff) / 2);
          tmp4 = tmp._regions[rounded];
          if (VirtualizedList >= tmp4.first) {
            if (VirtualizedList <= tmp4.last) {
              break;
            }
          }
          if (VirtualizedList < tmp4.first) {
            diff1 = rounded - 1;
            sum = num;
          } else {
            diff1 = diff;
            sum = num;
            if (VirtualizedList > tmp4.last) {
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
      const tmp9 = _modDef38;
      tmp9(false, "A region was not found containing cellIdx " + VirtualizedList);
    }
  }
];
const CellRenderMask_export = _createClassDefault(CellRenderMask, items);

export { CellRenderMask_export as CellRenderMask };