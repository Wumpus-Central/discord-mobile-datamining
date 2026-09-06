// _runtime/00639_Stack.js
import ListCache from "00612_ListCache.js";
import stackClear from "00640_stackClear.js";
import stackDelete from "00641_stackDelete.js";
import stackGet from "00642_stackGet.js";
import stackHas from "00643_stackHas.js";
import stackSet from "00644_stackSet.js";

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
