// _runtime/07683_withScope.js
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let AsyncContextStack = require;
function withScope(arg0) {
  const mainCarrier = AsyncContextStack(7681).getMainCarrier();
  const obj = AsyncContextStack(7681);
  const sentryCarrier = AsyncContextStack(7681).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    let tmpResult = tmp(7689);
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    tmpResult = tmp(7689);
    stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(arg0);
}
function withSetScope(arg0, arg1) {
  AsyncContextStack = arg0;
  dependencyMap = arg1;
  const mainCarrier = AsyncContextStack(7681).getMainCarrier();
  const obj = AsyncContextStack(7681);
  const sentryCarrier = AsyncContextStack(7681).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    let tmpResult = tmp(7689);
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    tmpResult = tmp(7689);
    stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(() => {
    stack.getStackTop().scope = closure_0;
    return callback(closure_0);
  });
}
function withIsolationScope(arg0) {
  AsyncContextStack = arg0;
  const mainCarrier = AsyncContextStack(7681).getMainCarrier();
  const obj = AsyncContextStack(7681);
  const sentryCarrier = AsyncContextStack(7681).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    let tmpResult = tmp(7689);
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    tmpResult = tmp(7689);
    stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(() => {
    const mainCarrier = callback(closure_1_1[4]).getMainCarrier();
    const obj = callback(closure_1_1[4]);
    const tmp = callback;
    const sentryCarrier = callback(closure_1_1[4]).getSentryCarrier(mainCarrier);
    let stack = sentryCarrier.stack;
    if (!stack) {
      let tmp2Result = tmp2(tmp3[5]);
      const defaultCurrentScope = tmp2Result.getDefaultCurrentScope();
      tmp2Result = tmp2(tmp3[5]);
      stack = new closure_1_3(defaultCurrentScope, tmp2Result.getDefaultIsolationScope());
    }
    sentryCarrier.stack = stack;
    return tmp(stack.getIsolationScope());
  });
}
class AsyncContextStack {
  constructor(arg0, arg1) {
    self = this;
    scope = global;
    tmp2 = closure_2(this, AsyncContextStack);
    if (!global) {
      tmp3 = AsyncContextStack;
      tmp4 = closure_1;
      tmp5 = new.target;
      tmp6 = new.target;
      scope = new require("ScopeClass").Scope();
    }
    scope1 = require;
    if (!require) {
      tmp8 = AsyncContextStack;
      tmp9 = closure_1;
      tmp10 = new.target;
      tmp11 = new.target;
      scope1 = new require("ScopeClass").Scope();
    }
    items = [];
    items[0] = { scope };
    self._stack = items;
    self._isolationScope = scope1;
    return;
  }
}
let items = [
  {
    key: "withScope",
    value: function withScope(arg0) {
      let self = this;
      self = this;
      try {
        const promise = arg0(tmp);
        if (obj2.isThenable(promise)) {
          let nextPromise = promise.then((arg0) => {
            self._popScope();
            return arg0;
          }, (arg0) => {
            self._popScope();
            throw arg0;
          });
        } else {
          self._popScope();
          nextPromise = promise;
        }
        return nextPromise;
      } catch (tmp9) {
        obj._popScope();
        throw tmp9;
      }
    }
  },
  {
    key: "getClient",
    value: function getClient() {
      return this.getStackTop().client;
    }
  },
  {
    key: "getScope",
    value: function getScope() {
      return this.getStackTop().scope;
    }
  },
  {
    key: "getIsolationScope",
    value: function getIsolationScope() {
      return this._isolationScope;
    }
  },
  {
    key: "getStackTop",
    value: function getStackTop() {
      return this._stack[this._stack.length - 1];
    }
  },
  {
    key: "_pushScope",
    value: function _pushScope() {
      const scope = this.getScope();
      const cloneResult = scope.clone();
      const _stack = this._stack;
      _stack.push({ client: this.getClient(), scope: cloneResult });
      return cloneResult;
    }
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
    }
  }
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
      const callback = arg1;
      let mainCarrier = callback(7681).getMainCarrier();
      let obj = callback(7681);
      let sentryCarrier = callback(7681).getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        let tmpResult = tmp(7689);
        let defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        tmpResult = tmp(7689);
        stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.withScope(() => {
        const mainCarrier = callback(closure_1_1[4]).getMainCarrier();
        const obj = callback(closure_1_1[4]);
        const tmp = callback;
        const sentryCarrier = callback(closure_1_1[4]).getSentryCarrier(mainCarrier);
        let stack = sentryCarrier.stack;
        if (!stack) {
          let tmp2Result = tmp2(tmp3[5]);
          const defaultCurrentScope = tmp2Result.getDefaultCurrentScope();
          tmp2Result = tmp2(tmp3[5]);
          stack = new closure_1_3(defaultCurrentScope, tmp2Result.getDefaultIsolationScope());
        }
        sentryCarrier.stack = stack;
        return tmp(stack.getIsolationScope());
      });
    },
    getCurrentScope() {
      const mainCarrier = callback(7681).getMainCarrier();
      const obj = callback(7681);
      const sentryCarrier = callback(7681).getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        let tmpResult = tmp(7689);
        const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        tmpResult = tmp(7689);
        stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.getScope();
    },
    getIsolationScope() {
      const mainCarrier = callback(7681).getMainCarrier();
      const obj = callback(7681);
      const sentryCarrier = callback(7681).getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        let tmpResult = tmp(7689);
        const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        tmpResult = tmp(7689);
        stack = new closure_3(defaultCurrentScope, tmpResult.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.getIsolationScope();
    }
  };
}