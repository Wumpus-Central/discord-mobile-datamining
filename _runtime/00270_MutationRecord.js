import _classCallCheck from "_classCallCheck";
import setPlatformObject from "setPlatformObject";

const MutationRecord = arg1;
class MutationRecord {
  constructor(arg0) {
    tmp = outer1_2(this, MutationRecord);
    this._target = global.target;
    obj = require("NodeList");
    this._addedNodes = obj.createNodeList(global.addedNodes);
    obj2 = require("NodeList");
    this._removedNodes = obj2.createNodeList(global.removedNodes);
    return;
  }
}
const items = [
  {
    key: "addedNodes",
    get() {
      return this._addedNodes;
    }
  },
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
const tmp2 = require("_createClass")(MutationRecord, items);
let c3 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createMutationRecord = function createMutationRecord(arg0) {
  return new closure_3(arg0);
};