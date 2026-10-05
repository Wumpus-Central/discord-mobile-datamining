// _runtime/00650_Stack.js
import ListCache from "00623_ListCache.js";
import stackClear from "00651_stackClear.js";
import stackDelete from "00652_stackDelete.js";
import stackGet from "00653_stackGet.js";
import stackHas from "00654_stackHas.js";
import stackSet from "00655_stackSet.js";

class Stack {
  constructor(arg0) {
    const tmp = new ListCache(arg0);
  }
}
Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

export default Stack;
