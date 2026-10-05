// === Module 7236: ? ===

// Module 7236
import TreeBase from "TreeBase" /* 7237 */;

class Node {
  constructor(arg0) {

  }
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
class RBTree {
  constructor(compare_centroid_means) {

  }
  insert(data) {
    let _root;
    let flag;
    const self = this;
    if (null === this._root) {
      Object.create(Node.prototype);
      const obj3 = { data, left: null, right: null, red: true };
      self._root = obj3;
      self.size = self.size + 1;
      flag = true;
    } else {
      Object.create(Node.prototype);
      const obj6 = { data: undefined, left: null, right: null, red: true };
      ({ _root, _root: obj5.right } = self);
      let tmp24 = null;
      let tmp23 = obj6;
      let tmp25 = null;
      let num = 0;
      let num2 = 0;
      let flag2 = false;
      while (true) {
        let obj;
        let tmp3 = tmp23;
        let tmp2 = tmp24;
        if (null === _root) {
          let obj7 = Object.create(Node.prototype);
          let obj8 = { data, left: null, right: null, red: true };
          let set_childResult = tmp24.set_child(num2, obj8);
          self.size = self.size + 1;
          obj = obj8;
          flag = true;
        } else {
          let left = _root.left;
          let tmp8 = null !== left && left.red;
          if (tmp8) {
            let right = _root.right;
            let tmp9 = null !== right && right.red;
            tmp8 = tmp9;
          }
          obj = _root;
          flag = flag2;
          if (tmp8) {
            _root.red = true;
            _root.left.red = false;
            _root.right.red = false;
            obj = _root;
            flag = flag2;
          }
        }
        let tmp13 = null !== obj && obj.red;
        if (tmp13) {
          let tmp14 = null !== tmp24 && tmp24.red;
          if (tmp14) {
            let tmp15 = tmp3.right === tmp25;
            if (obj === tmp24.get_child(num)) {
              let tmp16 = !num;
              let tmp17 = !tmp16;
              let set_child = tmp3.set_child;
              let get_childResult = tmp25.get_child(tmp17);
              let set_childResult1 = tmp25.set_child(tmp17, get_childResult.get_child(tmp16));
              let set_childResult2 = get_childResult.set_child(tmp16, tmp25);
              tmp25.red = true;
              get_childResult.red = false;
              let set_childResult3 = set_child(tmp15, get_childResult);
            } else {
              let tmp30 = !num;
              let tmp31 = !tmp30;
              let set_child2 = tmp3.set_child;
              let set_child3 = tmp25.set_child;
              let get_childResult1 = tmp25.get_child(tmp31);
              let tmp32 = !tmp31;
              let get_childResult2 = get_childResult1.get_child(tmp32);
              let set_childResult4 = get_childResult1.set_child(tmp32, get_childResult2.get_child(tmp31));
              let set_childResult5 = get_childResult2.set_child(tmp31, get_childResult1);
              get_childResult1.red = true;
              get_childResult2.red = false;
              let set_child3Result = set_child3(tmp31, get_childResult2);
              let get_childResult3 = tmp25.get_child(tmp31);
              let set_childResult6 = tmp25.set_child(tmp31, get_childResult3.get_child(tmp30));
              let set_childResult7 = get_childResult3.set_child(tmp30, tmp25);
              tmp25.red = true;
              get_childResult3.red = false;
              let set_child2Result = set_child2(tmp15, get_childResult3);
            }
          }
        }
        let _comparatorResult = self._comparator(obj.data, data);
        if (0 === _comparatorResult) {
          break;
        } else {
          let tmp22 = _comparatorResult < 0;
          if (null !== tmp25) {
            tmp3 = tmp25;
          }
          _root = obj.get_child(tmp22);
          tmp23 = tmp3;
          tmp24 = obj;
          tmp25 = tmp2;
          num = num2;
          num2 = tmp22;
          flag2 = flag;
          continue;
        }
      }
      self._root = obj6.right;
    }
    self._root.red = false;
    return flag;
  }
  remove(arg0) {
    let get_childResult;
    let right2;
    let set_child4;
    let tmp2;
    const self = this;
    if (null === this._root) {
      return false;
    } else {
      Object.create(Node.prototype);
      const obj2 = { data: undefined, left: null, right: self._root, red: true };
      let num = 1;
      let tmp38 = null;
      let tmp37 = null;
      let obj8 = obj2;
      let tmp39 = null;
      let obj9 = obj2;
      let tmp40 = null;
      if (null !== obj2.get_child(1)) {
        do {
          get_childResult = obj8.get_child(num);
          let _comparatorResult = self._comparator(arg0, get_childResult.data);
          tmp2 = _comparatorResult > 0;
          let tmp4 = tmp38;
          if (0 === _comparatorResult) {
            tmp4 = get_childResult;
          }
          let tmp7 = null !== get_childResult && get_childResult.red;
          let tmp8 = obj8;
          if (!tmp7) {
            let get_childResult1 = get_childResult.get_child(tmp2);
            let tmp10 = null !== get_childResult1 && get_childResult1.red;
            tmp8 = obj8;
            if (!tmp10) {
              let tmp11 = !tmp2;
              let get_childResult2 = get_childResult.get_child(tmp11);
              let tmp13 = null !== get_childResult2 && get_childResult2.red;
              let get_childResult3 = get_childResult.get_child(tmp11);
              if (tmp13) {
                let set_childResult = get_childResult.set_child(tmp11, get_childResult3.get_child(tmp2));
                let set_childResult1 = get_childResult3.set_child(tmp2, get_childResult);
                get_childResult.red = true;
                get_childResult3.red = false;
                let set_childResult2 = obj8.set_child(num, get_childResult3);
                tmp8 = get_childResult3;
              } else {
                let tmp14 = null !== get_childResult3 && get_childResult3.red;
                tmp8 = obj8;
                if (!tmp14) {
                  let tmp15 = !num;
                  let get_childResult4 = obj8.get_child(tmp15);
                  tmp8 = obj8;
                  if (null !== get_childResult4) {
                    let get_childResult5 = get_childResult4.get_child(tmp15);
                    let tmp16 = null !== get_childResult5 && get_childResult5.red;
                    if (!tmp16) {
                      let get_childResult6 = get_childResult4.get_child(num);
                      let tmp18 = null !== get_childResult6 && get_childResult6.red;
                      if (!tmp18) {
                        obj8.red = false;
                        get_childResult4.red = true;
                        get_childResult.red = true;
                        tmp8 = obj8;
                      }
                    }
                    let right = tmp37.right;
                    let get_childResult7 = get_childResult4.get_child(num);
                    let tmp20 = null !== get_childResult7 && get_childResult7.red;
                    let tmp21 = right === obj8;
                    if (tmp20) {
                      let set_child2 = tmp37.set_child;
                      let set_child3 = obj8.set_child;
                      let get_childResult8 = obj8.get_child(tmp15);
                      let tmp27 = !tmp15;
                      let get_childResult9 = get_childResult8.get_child(tmp27);
                      let set_childResult3 = get_childResult8.set_child(tmp27, get_childResult9.get_child(tmp15));
                      let set_childResult4 = get_childResult9.set_child(tmp15, get_childResult8);
                      get_childResult8.red = true;
                      get_childResult9.red = false;
                      let set_child3Result = set_child3(tmp15, get_childResult9);
                      let get_childResult10 = obj8.get_child(tmp15);
                      let set_childResult5 = obj8.set_child(tmp15, get_childResult10.get_child(num));
                      let set_childResult6 = get_childResult10.set_child(num, obj8);
                      obj8.red = true;
                      get_childResult10.red = false;
                      let set_child2Result = set_child2(tmp21, get_childResult10);
                    } else {
                      let get_childResult11 = get_childResult4.get_child(tmp15);
                      let tmp23 = null !== get_childResult11 && get_childResult11.red;
                      if (tmp23) {
                        let set_child = tmp37.set_child;
                        let get_childResult12 = obj8.get_child(tmp15);
                        let set_childResult7 = obj8.set_child(tmp15, get_childResult12.get_child(num));
                        let set_childResult8 = get_childResult12.set_child(num, obj8);
                        obj8.red = true;
                        get_childResult12.red = false;
                        let set_childResult9 = set_child(tmp21, get_childResult12);
                      }
                    }
                    let rect = tmp37.get_child(tmp21);
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
      if (null !== tmp39) {
        tmp39.data = obj9.data;
        ({ set_child: set_child4, right: right2 } = tmp40);
        set_child4(right2 === obj9, obj9.get_child(null === obj9.left));
        self.size = self.size - 1;
      }
      self._root = obj2.right;
      if (null !== self._root) {
        self._root.red = false;
      }
      return null !== tmp39;
    }
  }
}
let tmp = new TreeBase();
RBTree.prototype = tmp;

export default RBTree;