// _runtime/00775_Stack.js
import ListCache from "00748_ListCache.js";
import stackClear from "00776_stackClear.js";
import stackDelete from "00777_stackDelete.js";
import stackGet from "00778_stackGet.js";
import stackHas from "00779_stackHas.js";
import stackSet from "00780_stackSet.js";

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