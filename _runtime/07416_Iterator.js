// === Module 7416: Iterator ===

// Module 7416 (Iterator)
class TreeBase {
  constructor() {
    return;
  }
  clear() {
    return;
  }
  find(arg0) {
    self = this;
    _root = this._root;
    if (null !== _root) {
      _comparatorResult = self._comparator(global, _root.data);
      tmp2 = _root;
      while (0 !== _comparatorResult) {
        _root = _root.get_child(_comparatorResult > 0);
      }
      return _root.data;
    }
    return null;
  }
  findIter(arg0) {
    self = this;
    _root = this._root;
    iteratorResult = this.iterator();
    if (null !== _root) {
      _comparatorResult = self._comparator(global, _root.data);
      tmp3 = _root;
      while (0 !== _comparatorResult) {
        _ancestors = iteratorResult._ancestors;
        arr = _ancestors.push(_root);
        _root = _root.get_child(_comparatorResult > 0);
      }
      iteratorResult._cursor = _root;
      return iteratorResult;
    }
    return null;
  }
  lowerBound(arg0) {
    _root = this._root;
    iteratorResult = this.iterator();
    _comparator = this._comparator;
    if (null !== _root) {
      _comparatorResult = _comparator(global, _root.data);
      tmp3 = _root;
      while (0 !== _comparatorResult) {
        _ancestors = iteratorResult._ancestors;
        arr = _ancestors.push(_root);
        _root = _root.get_child(_comparatorResult > 0);
      }
      iteratorResult._cursor = _root;
      return iteratorResult;
    }
    diff = iteratorResult._ancestors.length - 1;
    if (0 <= diff) {
      tmp5 = iteratorResult._ancestors[diff];
      tmp6 = diff;
      while (_comparator(global, tmp5.data) >= 0) {
        diff = diff - 1;
      }
      iteratorResult._cursor = tmp5;
      iteratorResult._ancestors.length = diff;
      return iteratorResult;
    }
    iteratorResult._ancestors.length = 0;
    return iteratorResult;
  }
  upperBound(arg0) {
    iter = this.lowerBound(global);
    _comparator = this._comparator;
    if (null !== iter.data()) {
      num = 0;
      if (0 === _comparator(iter.data(), global)) {
        nextResult = iter.next();
        while (null !== iter.data()) {
          if (0 !== _comparator(iter.data(), global)) {
            break;
          }
        }
      }
    }
    return iter;
  }
  min() {
    _root = this._root;
    if (null === _root) {
      return null;
    } else {
      tmp = _root;
      tmp2 = _root;
      if (null !== _root.left) {
        do {
          left = tmp.left;
          tmp = left;
          tmp2 = left;
          left2 = left.left;
        } while (null !== left2);
      }
      return tmp2.data;
    }
  }
  max() {
    _root = this._root;
    if (null === _root) {
      return null;
    } else {
      tmp = _root;
      tmp2 = _root;
      if (null !== _root.right) {
        do {
          right = tmp.right;
          tmp = right;
          tmp2 = right;
          right2 = right.right;
        } while (null !== right2);
      }
      return tmp2.data;
    }
  }
  iterator() {
    obj = Object.create(Iterator.prototype);
    obj = { _tree: this, _ancestors: [], _cursor: null };
    return obj;
  }
  each(arg0) {
    iter = this.iterator();
    nextResult = iter.next();
    if (null !== nextResult) {
      do {
        tmp2 = global(nextResult);
        nextResult = iter.next();
      } while (null !== nextResult);
    }
    return;
  }
  reach(arg0) {
    iteratorResult = this.iterator();
    prevResult = iteratorResult.prev();
    if (null !== prevResult) {
      do {
        tmp2 = global(prevResult);
        prevResult = iteratorResult.prev();
      } while (null !== prevResult);
    }
    return;
  }
}
class Iterator {
  constructor(arg0) {
    return;
  }
  data() {
    data = null;
    if (null !== this._cursor) {
      data = this._cursor.data;
    }
    return data;
  }
  next() {
    self = this;
    if (null === this._cursor) {
      _root = self._tree._root;
      if (null !== _root) {
        _minNodeResult = self._minNode(_root);
      }
    } else if (null === self._cursor.right) {
      while (self._ancestors.length) {
        _ancestors = self._ancestors;
        self._cursor = _ancestors.pop();
      }
      self._cursor = null;
    } else {
      _ancestors1 = self._ancestors;
      arr = _ancestors1.push(self._cursor);
      _minNodeResult1 = self._minNode(self._cursor.right);
    }
    data = null;
    if (null !== self._cursor) {
      data = self._cursor.data;
    }
    return data;
  }
  prev() {
    self = this;
    if (null === this._cursor) {
      _root = self._tree._root;
      if (null !== _root) {
        _maxNodeResult = self._maxNode(_root);
      }
    } else if (null === self._cursor.left) {
      while (self._ancestors.length) {
        _ancestors = self._ancestors;
        self._cursor = _ancestors.pop();
      }
      self._cursor = null;
    } else {
      _ancestors1 = self._ancestors;
      arr = _ancestors1.push(self._cursor);
      _maxNodeResult1 = self._maxNode(self._cursor.left);
    }
    data = null;
    if (null !== self._cursor) {
      data = self._cursor.data;
    }
    return data;
  }
  _minNode(arg0) {
    self = this;
    tmp = global;
    tmp2 = global;
    if (null !== global.left) {
      do {
        _ancestors = self._ancestors;
        arr = _ancestors.push(tmp);
        left = tmp.left;
        tmp = left;
        tmp2 = left;
        left2 = left.left;
      } while (null !== left2);
    }
    self._cursor = tmp2;
    return;
  }
  _maxNode(arg0) {
    self = this;
    tmp = global;
    tmp2 = global;
    if (null !== global.right) {
      do {
        _ancestors = self._ancestors;
        arr = _ancestors.push(tmp);
        right = tmp.right;
        tmp = right;
        tmp2 = right;
        right2 = right.right;
      } while (null !== right2);
    }
    self._cursor = tmp2;
    return;
  }
}

export default TreeBase;