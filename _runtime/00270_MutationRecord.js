// _runtime/00270_MutationRecord.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const MutationRecord = fn;
class MutationRecord {
  constructor(arg0) {
    tmp = c2(this, MutationRecord);
    this._target = global.target;
    obj = closure_0(closure_1[2]);
    this._addedNodes = obj.createNodeList(global.addedNodes);
    obj2 = closure_0(closure_1[2]);
    this._removedNodes = obj2.createNodeList(global.removedNodes);
    return;
  }
}
const items = [
  {
    key: "addedNodes",
    get() {
      return this._addedNodes;
    },
  },
  {
    key: "attributeName",
    get() {
      return null;
    },
  },
  {
    key: "nextSibling",
    get() {
      return null;
    },
  },
  {
    key: "oldValue",
    get() {
      return null;
    },
  },
  {
    key: "previousSibling",
    get() {
      return null;
    },
  },
  {
    key: "removedNodes",
    get() {
      return this._removedNodes;
    },
  },
  {
    key: "target",
    get() {
      return this._target;
    },
  },
  {
    key: "type",
    get() {
      return "childList";
    },
  },
];
const tmp2 = _createClassDefault(MutationRecord, items);
let closure_3 = tmp2;
const module_126 = fn(126);
module_126.setPlatformObject(tmp2);

export default tmp2;
export const createMutationRecord = function createMutationRecord(arg0) {
  return new closure_3(arg0);
};
