// _runtime/00316_ChildListCollection.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";

const ChildListCollection = importDefault;
class ChildListCollection {
  constructor() {
    tmp = closure_2(this, ChildListCollection);
    map = new Map();
    this._cellKeyToChildren = map;
    map1 = new Map();
    this._childrenToCellKey = map1;
    return;
  }
}
let items = [
  {
    key: "add",
    value: function add(arg0, arg1) {
      const self = this;
      const _childrenToCellKey = this._childrenToCellKey;
      ChildListCollection(38)(!_childrenToCellKey.has(arg0), "Trying to add already present child list");
      const _cellKeyToChildren = this._cellKeyToChildren;
      let set = _cellKeyToChildren.get(arg1);
      if (set == null) {
        const _Set = Set;
        set = new Set();
      }
      set.add(arg0);
      const _cellKeyToChildren2 = self._cellKeyToChildren;
      const result = _cellKeyToChildren2.set(arg1, set);
      const _childrenToCellKey2 = self._childrenToCellKey;
      const result1 = _childrenToCellKey2.set(arg0, arg1);
    },
  },
  {
    key: "remove",
    value: function remove(arg0) {
      const _childrenToCellKey = this._childrenToCellKey;
      let value = _childrenToCellKey.get(arg0);
      ChildListCollection(38)(null != value, "Trying to remove non-present child list");
      const _childrenToCellKey2 = this._childrenToCellKey;
      _childrenToCellKey2.delete(arg0);
      const _cellKeyToChildren = this._cellKeyToChildren;
      value = _cellKeyToChildren.get(value);
      ChildListCollection(38)(value, "_cellKeyToChildren should contain cellKey");
      value.delete(arg0);
      if (0 === value.size) {
        const _cellKeyToChildren2 = this._cellKeyToChildren;
        _cellKeyToChildren2.delete(value);
      }
    },
  },
  {
    key: "forEach",
    value: function forEach(arg0) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      const values = _cellKeyToChildren.values();
      for (const item10009 of values) {
        let tmp2 = item10009;
        let tmp3 = item10009;
        for (const item10014 of item10009) {
          let tmp4 = arg0(item10014);
          continue;
        }
        continue;
      }
    },
  },
  {
    key: "forEachInCell",
    value: function forEachInCell(closure_0, arg1) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      let items = _cellKeyToChildren.get(closure_0);
      if (items == null) {
        items = [];
      }
      for (const item10011 of items) {
        let tmp = arg1(item10011);
        continue;
      }
    },
  },
  {
    key: "anyInCell",
    value: function anyInCell(value, arg1) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      let items = _cellKeyToChildren.get(value);
      if (items == null) {
        items = [];
      }
      for (const item10011 of items) {
        if (arg1(item10011)) {
          let tmp = obj;
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    },
  },
  {
    key: "size",
    value: function size() {
      return this._childrenToCellKey.size;
    },
  },
];

export default _createClassDefault(ChildListCollection, items);
