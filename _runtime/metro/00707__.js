// _runtime/metro/00707__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let AsyncContextStack = require;
function withScope(arg0) {
  const mainCarrier = AsyncContextStack(690).getMainCarrier();
  const obj = AsyncContextStack(690);
  const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    let tmpResult = tmp(712);
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    tmpResult = tmp(712);
    stack = new _moduleResult(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(arg0);
}
function withSetScope(scope, arg1) {
  closure_1 = arg1;
  const mainCarrier = AsyncContextStack(690).getMainCarrier();
  const obj = AsyncContextStack(690);
  const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    let tmpResult = tmp(712);
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    tmpResult = tmp(712);
    stack = new _moduleResult(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return closure_1(scope);
  });
}
function withIsolationScope(arg0) {
  AsyncContextStack = arg0;
  const mainCarrier = AsyncContextStack(690).getMainCarrier();
  const obj = AsyncContextStack(690);
  const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    let tmpResult = tmp(712);
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    tmpResult = tmp(712);
    stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(() => {
    const mainCarrier = AsyncContextStack(690).getMainCarrier();
    const obj = AsyncContextStack(690);
    const tmp = closure_0;
    const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
    let stack = sentryCarrier.stack;
    if (!stack) {
      let tmp2Result = tmp2(712);
      const defaultCurrentScope = tmp2Result.getDefaultCurrentScope();
      tmp2Result = tmp2(712);
      stack = new closure_2_3(defaultCurrentScope, tmp2Result.getDefaultIsolationScope());
    }
    sentryCarrier.stack = stack;
    return tmp(stack.getIsolationScope());
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class AsyncContextStack {
  constructor(arg0, arg1) {
    self = this;
    scope = global;
    tmp2 = c2(this, AsyncContextStack);
    if (!global) {
      tmp3 = closure_0;
      tmp4 = closure_1;
      tmp5 = new.target;
      tmp6 = new.target;
      scope = new closure_0(closure_1[2]).Scope();
    }
    scope1 = require;
    if (!require) {
      tmp8 = closure_0;
      tmp9 = closure_1;
      tmp10 = new.target;
      tmp11 = new.target;
      scope1 = new closure_0(closure_1[2]).Scope();
    }
    items = [];
    items[0] = { scope };
    self._stack = items;
    self._isolationScope = scope1;
    return;
  }
}
const entry = {
  key: "withScope",
  value: function withScope(fn) {
    const self = this;
    try {
      const promise = fn(tmp);
      if (obj2.isThenable(promise)) {
        let nextPromise = promise.then(
          (result) => {
            self._popScope();
            return result;
          },
          (arg0) => {
            self._popScope();
            throw arg0;
          },
        );
      } else {
        self._popScope();
        nextPromise = promise;
      }
      return nextPromise;
    } catch (tmp9) {
      obj._popScope();
      throw tmp9;
    }
  },
};
let items = [
  entry,
  {
    key: "getClient",
    value: function getClient() {
      return this.getStackTop().client;
    },
  },
  {
    key: "getScope",
    value: function getScope() {
      return this.getStackTop().scope;
    },
  },
  {
    key: "getIsolationScope",
    value: function getIsolationScope() {
      return this._isolationScope;
    },
  },
  {
    key: "getStackTop",
    value: function getStackTop() {
      return this._stack[this._stack.length - 1];
    },
  },
  {
    key: "_pushScope",
    value: function _pushScope() {
      const scope = this.getScope();
      const cloneResult = scope.clone();
      const _stack = this._stack;
      _stack.push({ client: this.getClient(), scope: cloneResult });
      return cloneResult;
    },
  },
  {
    key: "_popScope",
    value: function _popScope() {
      let arr = this._stack.length > 1;
      if (arr) {
        const _stack = this._stack;
        arr = _stack.pop();
      }
      return arr;
    },
  },
];
const _moduleResult = _createClass(AsyncContextStack, items);
let c3 = _moduleResult;

export const AsyncContextStack = _moduleResult;
export function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope(arg0, arg1) {
      closure_0 = arg1;
      let mainCarrier = closure_0(690).getMainCarrier();
      let obj = closure_0(690);
      let sentryCarrier = closure_0(690).getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        let tmpResult = tmp(712);
        let defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        tmpResult = tmp(712);
        stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.withScope(() => {
        const mainCarrier = AsyncContextStack(690).getMainCarrier();
        const obj = AsyncContextStack(690);
        const tmp = closure_0;
        const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
        let stack = sentryCarrier.stack;
        if (!stack) {
          let tmp2Result = tmp2(712);
          const defaultCurrentScope = tmp2Result.getDefaultCurrentScope();
          tmp2Result = tmp2(712);
          stack = new closure_2_3(defaultCurrentScope, tmp2Result.getDefaultIsolationScope());
        }
        sentryCarrier.stack = stack;
        return tmp(stack.getIsolationScope());
      });
    },
    getCurrentScope() {
      const mainCarrier = AsyncContextStack(690).getMainCarrier();
      const obj = AsyncContextStack(690);
      const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        let tmpResult = tmp(712);
        const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        tmpResult = tmp(712);
        stack = new closure_1_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.getScope();
    },
    getIsolationScope() {
      const mainCarrier = AsyncContextStack(690).getMainCarrier();
      const obj = AsyncContextStack(690);
      const sentryCarrier = AsyncContextStack(690).getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        let tmpResult = tmp(712);
        const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        tmpResult = tmp(712);
        stack = new closure_1_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.getIsolationScope();
    },
  };
}
