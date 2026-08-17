// _runtime/metro/00160__construct.js
import _setPrototypeOf from "_setPrototypeOf" /* 99 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 161 */;


export default function _construct(bind) {
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const apply = construct.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  } else {
    const items = [null];
    const push = items.push;
    push.apply(items, arg1);
    bind = bind.bind;
    const tmp9 = new bind.apply(bind, items)();
    if (arg2) {
      _setPrototypeOf(tmp9, arg2.prototype);
    }
    return tmp9;
  }
  const tmp = require;
};