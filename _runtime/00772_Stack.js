// _runtime/00772_Stack.js
import ListCache from "00745_ListCache.js";
import stackClear from "00773_stackClear.js";
import stackDelete from "00774_stackDelete.js";
import stackGet from "00775_stackGet.js";
import stackHas from "00776_stackHas.js";
import stackSet from "00777_stackSet.js";

class Stack {
  constructor(arg0) {
    obj = {};
    tmp = new require("ListCache")(global);
    obj.__data__ = tmp;
    obj.size = tmp.size;
    return;
  }
}
Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

export default Stack;
