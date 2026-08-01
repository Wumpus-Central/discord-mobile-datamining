// === Module 775: Stack ===

// Module 775 (Stack)
class Stack {
  constructor(arg0) {
    obj = {};
    tmp = new require("ListCache")(global);
    obj.__data__ = tmp;
    obj.size = tmp.size;
    return;
  }
}
Stack.prototype.clear = require("stackClear");
Stack.prototype.delete = require("stackDelete");
Stack.prototype.get = require("stackGet");
Stack.prototype.has = require("stackHas");
Stack.prototype.set = require("stackSet");

export default Stack;