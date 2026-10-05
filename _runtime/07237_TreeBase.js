// _runtime/07237_TreeBase.js
class TreeBase {
  constructor() {}
  clear() {}
  find(arg0) {
    const self = this;
    let _root = this._root;
    if (null !== _root) {
      const _comparatorResult = self._comparator(arg0, _root.data);
      while (0 !== _comparatorResult) {
        _root = _root.get_child(_comparatorResult > 0);
      }
      return _root.data;
    }
    return null;
  }
  findIter(arg0) {
    const self = this;
    let _root = this._root;
    const iteratorResult = this.iterator();
    if (null !== _root) {
      const _comparatorResult = self._comparator(arg0, _root.data);
      while (0 !== _comparatorResult) {
        let _ancestors = iteratorResult._ancestors;
        let arr = _ancestors.push(_root);
        _root = _root.get_child(_comparatorResult > 0);
      }
      iteratorResult._cursor = _root;
      return iteratorResult;
    }
    return null;
  }
  lowerBound(arg0) {
    let _root = this._root;
    const iteratorResult = this.iterator();
    const _comparator = this._comparator;
    if (null !== _root) {
      const _comparatorResult = _comparator(arg0, _root.data);
      while (0 !== _comparatorResult) {
        let _ancestors = iteratorResult._ancestors;
        let arr = _ancestors.push(_root);
        _root = _root.get_child(_comparatorResult > 0);
      }
      iteratorResult._cursor = _root;
      return iteratorResult;
    }
    let diff = iteratorResult._ancestors.length - 1;
    if (0 <= diff) {
      while (_comparator(arg0, iteratorResult._ancestors[diff].data) >= 0) {
        diff = diff - 1;
      }
      iteratorResult._cursor = iteratorResult._ancestors[diff];
      iteratorResult._ancestors.length = diff;
      return iteratorResult;
    }
    iteratorResult._ancestors.length = 0;
    return iteratorResult;
  }
  upperBound(_queue) {
    const iter = this.lowerBound(_queue);
    const _comparator = this._comparator;
    if (null !== iter.data()) {
      if (0 === _comparator(iter.data(), _queue)) {
        iter.next();
        while (null !== iter.data()) {
          if (0 !== _comparator(iter.data(), _queue)) {
            break;
          }
        }
      }
    }
    return iter;
  }
  min() {
    let left2;
    const _root = this._root;
    if (null === _root) {
      return null;
    } else {
      let tmp = _root;
      let tmp2 = _root;
      if (null !== _root.left) {
        do {
          let left = tmp.left;
          tmp = left;
          tmp2 = left;
          left2 = left.left;
        } while (null !== left2);
      }
      return tmp2.data;
    }
  }
  max() {
    let right2;
    const _root = this._root;
    if (null === _root) {
      return null;
    } else {
      let tmp = _root;
      let tmp2 = _root;
      if (null !== _root.right) {
        do {
          let right = tmp.right;
          tmp = right;
          tmp2 = right;
          right2 = right.right;
        } while (null !== right2);
      }
      return tmp2.data;
    }
  }
  iterator() {
    Object.create(Iterator.prototype);
    return { _tree: this, _ancestors: [], _cursor: null };
  }
  each(fn) {
    const iter = this.iterator();
    let nextResult = iter.next();
    if (null !== nextResult) {
      do {
        let tmp2 = fn(nextResult);
        nextResult = iter.next();
      } while (null !== nextResult);
    }
  }
  reach(fn) {
    const iteratorResult = this.iterator();
    let prevResult = iteratorResult.prev();
    if (null !== prevResult) {
      do {
        let tmp2 = fn(prevResult);
        prevResult = iteratorResult.prev();
      } while (null !== prevResult);
    }
  }
}
class Iterator {
  constructor(arg0) {}
  data() {
    let data = null;
    if (null !== this._cursor) {
      data = this._cursor.data;
    }
    return data;
  }
  next() {
    const self = this;
    if (null === this._cursor) {
      const _root = self._tree._root;
      if (null !== _root) {
        self._minNode(_root);
      }
    } else if (null === self._cursor.right) {
      while (self._ancestors.length) {
        let _ancestors = self._ancestors;
        self._cursor = _ancestors.pop();
      }
      self._cursor = null;
    } else {
      const _ancestors1 = self._ancestors;
      _ancestors1.push(self._cursor);
      self._minNode(self._cursor.right);
    }
    let data = null;
    if (null !== self._cursor) {
      data = self._cursor.data;
    }
    return data;
  }
  prev() {
    const self = this;
    if (null === this._cursor) {
      const _root = self._tree._root;
      if (null !== _root) {
        self._maxNode(_root);
      }
    } else if (null === self._cursor.left) {
      while (self._ancestors.length) {
        let _ancestors = self._ancestors;
        self._cursor = _ancestors.pop();
      }
      self._cursor = null;
    } else {
      const _ancestors1 = self._ancestors;
      _ancestors1.push(self._cursor);
      self._maxNode(self._cursor.left);
    }
    let data = null;
    if (null !== self._cursor) {
      data = self._cursor.data;
    }
    return data;
  }
  _minNode(left) {
    let left2;
    const self = this;
    let tmp = left;
    let tmp2 = left;
    if (null !== left.left) {
      do {
        let _ancestors = self._ancestors;
        let arr = _ancestors.push(tmp);
        left = tmp.left;
        tmp = left;
        tmp2 = left;
        left2 = left.left;
      } while (null !== left2);
    }
    self._cursor = tmp2;
  }
  _maxNode(right) {
    let right2;
    const self = this;
    let tmp = right;
    let tmp2 = right;
    if (null !== right.right) {
      do {
        let _ancestors = self._ancestors;
        let arr = _ancestors.push(tmp);
        right = tmp.right;
        tmp = right;
        tmp2 = right;
        right2 = right.right;
      } while (null !== right2);
    }
    self._cursor = tmp2;
  }
}

export default TreeBase;
