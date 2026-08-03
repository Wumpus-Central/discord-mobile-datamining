
export default function _construct(bind) {
  if (require(161) /* _isNativeReflectConstruct */()) {
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
      tmp(99)(tmp9, arg2.prototype);
    }
    return tmp9;
  }
  tmp = require;
};