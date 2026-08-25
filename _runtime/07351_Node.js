// === Module 7351: Node ===

// Module 7351 (Node)
import Iterator from "Iterator" /* 7350 */;

class Node {
  constructor(arg0) {
    return;
  }
  get_child(arg0) {
    self = this;
    return global ? self.right : self.left;
  }
  set_child(arg0, arg1) {
    self = this;
    if (global) {
      self.right = require;
    } else {
      self.left = require;
    }
    return;
  }
}
class BinTree {
  constructor(arg0) {
    return;
  }
  insert(arg0) {
    self = this;
    if (null === this._root) {
      tmp10 = Node;
      obj = Object.create(Node.prototype);
      obj1 = {};
      obj1.data = global;
      obj1.left = null;
      obj1.right = null;
      self._root = obj1;
      self.size = self.size + 1;
      flag3 = true;
      return true;
    } else {
      _root = self._root;
      num2 = 0;
      tmp5 = null;
      num = 0;
      tmp2 = tmp5;
      tmp3 = num;
      while (null !== _root) {
        if (0 === self._comparator(_root.data, global)) {
          flag = false;
          return false;
        } else {
          tmp4 = self._comparator(_root.data, global) < 0;
          _root = _root.get_child(tmp4);
          tmp5 = tmp;
          num = tmp4;
          continue;
        }
      }
      tmp6 = Node;
      obj2 = Object.create(Node.prototype);
      obj = {};
      obj.data = global;
      obj.left = null;
      obj.right = null;
      set_childResult = tmp5.set_child(num, obj);
      tmp9 = globalThis;
      flag2 = true;
      globalThis.ret = true;
      self.size = self.size + 1;
      return true;
    }
  }
  remove(arg0) {
    self = this;
    if (null === this._root) {
      flag2 = false;
      return false;
    } else {
      tmp9 = Node;
      obj = Object.create(Node.prototype);
      obj1 = {};
      obj1.data = undefined;
      obj1.left = null;
      obj1.right = null;
      obj1.right = self._root;
      num2 = 1;
      num3 = 0;
      num = 1;
      tmp5 = null;
      obj2 = obj1;
      tmp6 = null;
      obj3 = obj1;
      tmp7 = null;
      if (null !== require("module_1")) {
        do {
          get_childResult = obj2.get_child(num);
          _comparatorResult = self._comparator(global, get_childResult.data);
          tmp2 = _comparatorResult > 0;
          tmp3 = tmp5;
          tmp4 = obj2;
          if (0 === _comparatorResult) {
            tmp3 = get_childResult;
          }
          tmp5 = tmp3;
          num = tmp2;
          obj2 = get_childResult;
          tmp6 = tmp3;
          tmp7 = tmp4;
          obj3 = get_childResult;
        } while (null !== get_childResult.get_child(tmp2));
      }
      flag = null !== tmp6;
      if (flag) {
        tmp6.data = obj3.data;
        ({ set_child, right } = tmp7);
        set_childResult = set_child(right === obj3, obj3.get_child(null === obj3.left));
        self._root = obj1.right;
        self.size = self.size - 1;
        flag = true;
      }
      return flag;
    }
  }
}
BinTree.prototype = new Iterator();

export default BinTree;