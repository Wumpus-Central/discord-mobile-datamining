// _runtime/metro/00160__construct.js
import _setPrototypeOf from "../00099__setPrototypeOf.js";
import _isNativeReflectConstruct from "../00161__isNativeReflectConstruct.js";

export default function _construct(bind, arg1, arg2) {
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    return construct(...arguments);
  } else {
    const items = [null];
    const push = items.push;
    push.apply(items, arg1);
    bind = bind.bind;
    const self = this;
    const self2 = this;
    const tmp7 = new bind.apply(bind, items)();
    if (arg2) {
      _setPrototypeOf(tmp7, arg2.prototype);
    }
    return tmp7;
  }
}
