// === Module 775: Stack ===

// Module 775 (Stack)
import ListCache from "ListCache" /* 748 */;
import stackClear from "stackClear" /* 776 */;
import stackDelete from "stackDelete" /* 777 */;
import stackGet from "stackGet" /* 778 */;
import stackHas from "stackHas" /* 779 */;
import stackSet from "stackSet" /* 780 */;

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