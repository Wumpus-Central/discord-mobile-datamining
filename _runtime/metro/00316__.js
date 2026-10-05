// === Module 316: ? ===

// Module 316
import _modDef38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let set;

class ChildListCollection {
  constructor() {
    _classCallCheck(this, ChildListCollection);
    this._cellKeyToChildren = new Map();
    new Map();
    this._childrenToCellKey = new Map();
    new Map();
  }
}
const entry = {
  key: "add",
  value: function add(arg0, arg1) {
    const self = this;
    const _childrenToCellKey = this._childrenToCellKey;
    const tmp = _modDef38;
    tmp(!_childrenToCellKey.has(arg0), "Trying to add already present child list");
    const _cellKeyToChildren = this._cellKeyToChildren;
    set = _cellKeyToChildren.get(arg1);
    if (set == null) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      set = new Set();
    }
    set.add(arg0);
    const _cellKeyToChildren2 = self._cellKeyToChildren;
    const result = _cellKeyToChildren2.set(arg1, set);
    const _childrenToCellKey2 = self._childrenToCellKey;
    const result1 = _childrenToCellKey2.set(arg0, arg1);
  }
};
let items = [
  entry,
  {
    key: "remove",
    value: function remove(arg0) {
      const _childrenToCellKey = this._childrenToCellKey;
      const value = _childrenToCellKey.get(arg0);
      _modDef38(null != value, "Trying to remove non-present child list");
      const _childrenToCellKey2 = this._childrenToCellKey;
      _childrenToCellKey2.delete(arg0);
      const _cellKeyToChildren = this._cellKeyToChildren;
      const value2 = _cellKeyToChildren.get(value);
      _modDef38(value2, "_cellKeyToChildren should contain cellKey");
      value2.delete(arg0);
      if (0 === value2.size) {
        const _cellKeyToChildren2 = this._cellKeyToChildren;
        _cellKeyToChildren2.delete(value);
      }
    }
  },
  {
    key: "forEach",
    value: function forEach(fn) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      const values = _cellKeyToChildren.values();
      for (const item10009 of values) {
        for (const item10014 of item10009) {
          let tmp4 = fn(item10014);
          continue;
        }
        continue;
      }
    }
  },
  {
    key: "forEachInCell",
    value: function forEachInCell(cellKey, fn) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      let items = _cellKeyToChildren.get(cellKey);
      if (items == null) {
        items = [];
      }
      for (const item10011 of items) {
        let tmp = fn(item10011);
        continue;
      }
    }
  },
  {
    key: "anyInCell",
    value: function anyInCell(value, fn) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      let items = _cellKeyToChildren.get(value);
      if (items == null) {
        items = [];
      }
      for (const item10011 of items) {
        if (fn(item10011)) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    }
  },
  {
    key: "size",
    value: function size() {
      return this._childrenToCellKey.size;
    }
  }
];

export default _createClassDefault(ChildListCollection, items);