// _runtime/metro/00270__.js
import _createClassDefault from "00042__createClass.js";
import _mod130 from "00130__.js";
import _classCallCheck from "00041__classCallCheck.js";
import 00126__ from "00126__.js";

class MutationRecord {
  constructor(target) {
    _classCallCheck(this, MutationRecord);
    this._target = target.target;
    const addedNodes = target.addedNodes;
    const obj = _mod130;
    this._addedNodes = obj.createNodeList(addedNodes);
    const removedNodes = target.removedNodes;
    const obj2 = _mod130;
    this._removedNodes = obj2.createNodeList(removedNodes);
  }
}
let obj = {
  key: "addedNodes",
  get() {
    return this._addedNodes;
  }
};
const items = [
  obj,
  {
    key: "attributeName",
    get() {
      return null;
    }
  },
  {
    key: "nextSibling",
    get() {
      return null;
    }
  },
  {
    key: "oldValue",
    get() {
      return null;
    }
  },
  {
    key: "previousSibling",
    get() {
      return null;
    }
  },
  {
    key: "removedNodes",
    get() {
      return this._removedNodes;
    }
  },
  {
    key: "target",
    get() {
      return this._target;
    }
  },
  {
    key: "type",
    get() {
      return "childList";
    }
  }
];
const tmp2 = _createClassDefault(MutationRecord, items);
let closure_3 = tmp2;
module_126.setPlatformObject(tmp2);

export default tmp2;
export const createMutationRecord = function createMutationRecord(item10013) {
  const tmp = new closure_3(item10013);
  return tmp;
};