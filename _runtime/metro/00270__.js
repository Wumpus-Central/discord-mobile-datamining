// === Module 270: ? ===

// Module 270
import _createClassDefault from "_createClass" /* 42 */;
import _mod130 from "module_130" /* 130 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import module_126 from "module_126" /* 126 */;

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