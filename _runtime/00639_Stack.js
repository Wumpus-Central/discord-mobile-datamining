// === Module 639: Stack ===

// Module 639 (Stack)
import ListCache from "ListCache" /* 612 */;
import stackClear from "stackClear" /* 640 */;
import stackDelete from "stackDelete" /* 641 */;
import stackGet from "stackGet" /* 642 */;
import stackHas from "stackHas" /* 643 */;
import stackSet from "stackSet" /* 644 */;

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