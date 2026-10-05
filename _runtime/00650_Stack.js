// === Module 650: Stack ===

// Module 650 (Stack)
import ListCache from "ListCache" /* 623 */;
import stackClear from "stackClear" /* 651 */;
import stackDelete from "stackDelete" /* 652 */;
import stackGet from "stackGet" /* 653 */;
import stackHas from "stackHas" /* 654 */;
import stackSet from "stackSet" /* 655 */;

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