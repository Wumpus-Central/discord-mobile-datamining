// _runtime/07251_BinTree.js
import TreeBase from "07250_TreeBase.js";

class Node {
  constructor(arg0) {}
  get_child(arg0) {
    const self = this;
    return arg0 ? self.right : self.left;
  }
  set_child(arg0, right) {
    const self = this;
    const tmp = arg0;
    if (tmp) {
      self.right = right;
    } else {
      self.left = right;
    }
  }
}
class BinTree {
  constructor(arg0) {}
  insert(data) {
    const self = this;
    if (null === this._root) {
      Object.create(Node.prototype);
      const obj5 = { data, left: null, right: null };
      self._root = obj5;
      self.size = self.size + 1;
      return true;
    } else {
      let _root = self._root;
      let tmp5 = null;
      let num = 0;
      while (null !== _root) {
        if (0 === self._comparator(_root.data, data)) {
          let flag = false;
          return false;
        } else {
          let tmp4 = self._comparator(_root.data, data) < 0;
          _root = _root.get_child(tmp4);
          tmp5 = tmp;
          num = tmp4;
          continue;
        }
      }
      Object.create(Node.prototype);
      const obj = { data, left: null, right: null };
      tmp5.set_child(num, obj);
      globalThis.ret = true;
      self.size = self.size + 1;
      return true;
    }
  }
  remove(arg0) {
    let get_childResult;
    let right;
    let set_child;
    let tmp2;
    const self = this;
    if (null === this._root) {
      return false;
    } else {
      Object.create(Node.prototype);
      const obj4 = { data: undefined, left: null, right: self._root };
      let num = 1;
      let tmp5 = null;
      let obj2 = obj4;
      let tmp6 = null;
      let obj3 = obj4;
      let tmp7 = null;
      if (null !== obj4.get_child(1)) {
        do {
          get_childResult = obj2.get_child(num);
          let _comparatorResult = self._comparator(arg0, get_childResult.data);
          tmp2 = _comparatorResult > 0;
          let tmp3 = tmp5;
          let tmp4 = obj2;
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
      let flag = null !== tmp6;
      if (flag) {
        tmp6.data = obj3.data;
        ({ set_child, right } = tmp7);
        set_child(right === obj3, obj3.get_child(null === obj3.left));
        self._root = obj4.right;
        self.size = self.size - 1;
        flag = true;
      }
      return flag;
    }
  }
}
let tmp = new TreeBase();
BinTree.prototype = tmp;

export default BinTree;
