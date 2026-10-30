// _runtime/12809_MappingList.js
import _mod12807 from "metro/12807__.js";

require = arg1;
const dependencyMap = arg6;
class MappingList {
  constructor() {
    return;
  }
  unsortedForEach(arg0, arg1) {
    _array = this._array;
    item = _array.forEach(arg0, arg1);
    return;
  }
  add(arg0) {
    self = this;
    _last = this._last;
    generatedLine = _last.generatedLine;
    generatedLine2 = arg0.generatedLine;
    tmp3 = generatedLine2 > generatedLine;
    if (!tmp3) {
      tmp4 = generatedLine2 == generatedLine && tmp2 >= tmp;
      tmp3 = tmp4;
    }
    if (!tmp3) {
      tmp5 = closure_0;
      tmp6 = closure_1;
      obj = closure_0(closure_1[0]);
      num = 0;
      tmp3 = obj.compareByGeneratedPositionsInflated(_last, arg0) <= 0;
    }
    if (tmp3) {
      self._last = arg0;
      _array = self._array;
      arr1 = _array.push(arg0);
    } else {
      flag = false;
      self._sorted = false;
      _array1 = self._array;
      arr3 = _array1.push(arg0);
    }
    return;
  }
  toArray() {
    self = this;
    if (!this._sorted) {
      _array = self._array;
      tmp = closure_0;
      tmp2 = closure_1;
      sorted = _array.sort(closure_0(closure_1[0]).compareByGeneratedPositionsInflated);
      flag = true;
      self._sorted = true;
    }
    return self._array;
  }
}

export { MappingList };
