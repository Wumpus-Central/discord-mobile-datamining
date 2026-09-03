// === Module 7501: Node ===

// Module 7501 (Node)
import Iterator from "Iterator" /* 7502 */;

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
class RBTree {
  constructor(arg0) {
    return;
  }
  insert(arg0) {
    self = this;
    if (null === this._root) {
      tmp25 = Node;
      obj = Object.create(Node.prototype);
      obj1 = {};
      obj1.data = global;
      obj1.left = null;
      obj1.right = null;
      flag3 = true;
      obj1.red = true;
      self._root = obj1;
      self.size = self.size + 1;
      flag = true;
    } else {
      tmp27 = Node;
      obj2 = Object.create(Node.prototype);
      obj3 = {};
      obj3.data = undefined;
      obj3.left = null;
      obj3.right = null;
      flag4 = true;
      obj3.red = true;
      ({ _root, _root: obj6.right } = self);
      num3 = 0;
      flag5 = false;
      tmp23 = null;
      tmp22 = obj3;
      tmp24 = null;
      num = 0;
      num2 = 0;
      flag2 = false;
      while (true) {
        tmp = _root;
        obj = tmp22;
        tmp3 = tmp24;
        tmp4 = num;
        tmp5 = num2;
        tmp6 = flag2;
        tmp2 = tmp23;
        if (null === _root) {
          tmp9 = Node;
          obj4 = Object.create(Node.prototype);
          obj5 = {};
          obj5.data = global;
          obj5.left = null;
          obj5.right = null;
          obj5.red = true;
          set_childResult = tmp23.set_child(num2, obj5);
          self.size = self.size + 1;
          obj2 = obj5;
          flag = true;
        } else {
          left = _root.left;
          tmp7 = null !== left && left.red;
          if (tmp7) {
            right = _root.right;
            tmp8 = null !== right && right.red;
            tmp7 = tmp8;
          }
          obj2 = _root;
          flag = flag2;
          if (tmp7) {
            _root.red = true;
            _root.left.red = false;
            _root.right.red = false;
            obj2 = _root;
            flag = flag2;
          }
        }
        tmp12 = null !== obj2 && obj2.red;
        if (tmp12) {
          tmp13 = null !== tmp23 && tmp23.red;
          if (tmp13) {
            tmp14 = obj.right === tmp24;
            if (obj2 === tmp23.get_child(num)) {
              tmp15 = !num;
              tmp16 = !tmp15;
              get_childResult = tmp24.get_child(tmp16);
              set_childResult1 = tmp24.set_child(tmp16, get_childResult.get_child(tmp15));
              set_childResult2 = get_childResult.set_child(tmp15, tmp24);
              tmp24.red = true;
              get_childResult.red = false;
              set_childResult3 = obj.set_child(tmp14, get_childResult);
            } else {
              tmp29 = !num;
              tmp30 = !tmp29;
              get_childResult1 = tmp24.get_child(tmp30);
              tmp31 = !tmp30;
              get_childResult2 = get_childResult1.get_child(tmp31);
              set_childResult4 = get_childResult1.set_child(tmp31, get_childResult2.get_child(tmp30));
              set_childResult5 = get_childResult2.set_child(tmp30, get_childResult1);
              get_childResult1.red = true;
              get_childResult2.red = false;
              set_childResult6 = tmp24.set_child(tmp30, get_childResult2);
              get_childResult3 = tmp24.get_child(tmp30);
              set_childResult7 = tmp24.set_child(tmp30, get_childResult3.get_child(tmp29));
              set_childResult8 = get_childResult3.set_child(tmp29, tmp24);
              tmp24.red = true;
              get_childResult3.red = false;
              set_childResult9 = obj.set_child(tmp14, get_childResult3);
            }
          }
        }
        _comparatorResult = self._comparator(obj2.data, global);
        if (0 === _comparatorResult) {
          break;
        } else {
          tmp21 = _comparatorResult < 0;
          if (null !== tmp24) {
            obj = tmp24;
          }
          _root = obj2.get_child(tmp21);
          tmp22 = obj;
          tmp23 = obj2;
          tmp24 = tmp2;
          num = num2;
          num2 = tmp21;
          flag2 = flag;
          continue;
        }
      }
      self._root = obj3.right;
    }
    self._root.red = false;
    return flag;
  }
  remove(arg0) {
    self = this;
    if (null === this._root) {
      flag = false;
      return false;
    } else {
      tmp43 = Node;
      obj = Object.create(Node.prototype);
      obj1 = {};
      obj1.data = undefined;
      obj1.left = null;
      obj1.right = null;
      flag2 = true;
      obj1.red = true;
      obj1.right = self._root;
      num2 = 1;
      flag3 = false;
      num3 = 0;
      num = 1;
      tmp38 = null;
      tmp37 = null;
      obj8 = obj1;
      tmp39 = null;
      obj9 = obj1;
      tmp40 = null;
      if (null !== require("module_1")) {
        do {
          get_childResult = obj8.get_child(num);
          _comparatorResult = self._comparator(global, get_childResult.data);
          tmp2 = _comparatorResult > 0;
          tmp3 = num;
          tmp4 = tmp38;
          tmp5 = tmp37;
          tmp6 = obj8;
          if (0 === _comparatorResult) {
            tmp4 = get_childResult;
          }
          tmp7 = null !== get_childResult && get_childResult.red;
          tmp8 = obj8;
          if (!tmp7) {
            get_childResult1 = get_childResult.get_child(tmp2);
            tmp10 = null !== get_childResult1 && get_childResult1.red;
            tmp8 = obj8;
            if (!tmp10) {
              tmp11 = !tmp2;
              get_childResult2 = get_childResult.get_child(tmp11);
              tmp13 = null !== get_childResult2 && get_childResult2.red;
              get_childResult3 = get_childResult.get_child(tmp11);
              if (tmp13) {
                set_childResult = get_childResult.set_child(tmp11, get_childResult3.get_child(tmp2));
                set_childResult1 = get_childResult3.set_child(tmp2, get_childResult);
                get_childResult.red = true;
                get_childResult3.red = false;
                set_childResult2 = obj8.set_child(num, get_childResult3);
                tmp8 = get_childResult3;
              } else {
                tmp14 = null !== get_childResult3 && get_childResult3.red;
                tmp8 = obj8;
                if (!tmp14) {
                  tmp15 = !num;
                  get_childResult4 = obj8.get_child(tmp15);
                  tmp8 = obj8;
                  if (null !== get_childResult4) {
                    get_childResult5 = get_childResult4.get_child(tmp15);
                    tmp16 = null !== get_childResult5 && get_childResult5.red;
                    if (!tmp16) {
                      get_childResult6 = get_childResult4.get_child(num);
                      tmp18 = null !== get_childResult6 && get_childResult6.red;
                      if (!tmp18) {
                        obj8.red = false;
                        get_childResult4.red = true;
                        get_childResult.red = true;
                        tmp8 = obj8;
                      }
                    }
                    get_childResult7 = get_childResult4.get_child(num);
                    tmp20 = null !== get_childResult7 && get_childResult7.red;
                    tmp21 = tmp37.right === obj8;
                    if (tmp20) {
                      get_childResult8 = obj8.get_child(tmp15);
                      tmp27 = !tmp15;
                      get_childResult9 = get_childResult8.get_child(tmp27);
                      set_childResult3 = get_childResult8.set_child(tmp27, get_childResult9.get_child(tmp15));
                      set_childResult4 = get_childResult9.set_child(tmp15, get_childResult8);
                      get_childResult8.red = true;
                      get_childResult9.red = false;
                      set_childResult5 = obj8.set_child(tmp15, get_childResult9);
                      get_childResult10 = obj8.get_child(tmp15);
                      set_childResult6 = obj8.set_child(tmp15, get_childResult10.get_child(num));
                      set_childResult7 = get_childResult10.set_child(num, obj8);
                      obj8.red = true;
                      get_childResult10.red = false;
                      set_childResult8 = tmp37.set_child(tmp21, get_childResult10);
                    } else {
                      get_childResult11 = get_childResult4.get_child(tmp15);
                      tmp23 = null !== get_childResult11 && get_childResult11.red;
                      if (tmp23) {
                        get_childResult12 = obj8.get_child(tmp15);
                        set_childResult9 = obj8.set_child(tmp15, get_childResult12.get_child(num));
                        set_childResult10 = get_childResult12.set_child(num, obj8);
                        obj8.red = true;
                        get_childResult12.red = false;
                        set_childResult11 = tmp37.set_child(tmp21, get_childResult12);
                      }
                    }
                    rect = tmp37.get_child(tmp21);
                    rect.red = true;
                    get_childResult.red = true;
                    rect.left.red = false;
                    rect.right.red = false;
                    tmp8 = obj8;
                  }
                }
              }
            }
          }
          tmp37 = tmp8;
          num = tmp2;
          tmp38 = tmp4;
          obj8 = get_childResult;
          tmp39 = tmp4;
          tmp40 = tmp8;
          obj9 = get_childResult;
        } while (null !== get_childResult.get_child(tmp2));
      }
      tmp41 = null !== tmp39;
      if (tmp41) {
        tmp39.data = obj9.data;
        ({ set_child, right } = tmp40);
        set_childResult12 = set_child(right === obj9, obj9.get_child(null === obj9.left));
        self.size = self.size - 1;
      }
      self._root = obj1.right;
      if (null !== self._root) {
        self._root.red = false;
      }
      return tmp41;
    }
  }
}
RBTree.prototype = new Iterator();

export default RBTree;