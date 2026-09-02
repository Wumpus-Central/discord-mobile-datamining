// === Module 772: Stack ===

// Module 772 (Stack)
import ListCache from "ListCache" /* 745 */;
import stackClear from "stackClear" /* 773 */;
import stackDelete from "stackDelete" /* 774 */;
import stackGet from "stackGet" /* 775 */;
import stackHas from "stackHas" /* 776 */;
import stackSet from "stackSet" /* 777 */;

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