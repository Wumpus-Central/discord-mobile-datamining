// _runtime/metro/12585__.js
import _mod12572 from "12572__.js";
import _mod12583 from "12583__.js";
import _mod12586 from "12586__.js";
import _mod12591 from "12591__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const require = globalThis.__r;
let _require;

function withScope(arg0) {
  const obj = _mod12583;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12583;
  const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    const tmpResult = _mod12591;
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    const self = this;
    const self2 = this;
    const tmpResult2 = _mod12591;
    stack = new c3(defaultCurrentScope, tmpResult2.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(arg0);
}
function withSetScope(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = _mod12583;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12583;
  const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    const tmpResult = _mod12591;
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    const self = this;
    const self2 = this;
    const tmpResult2 = _mod12591;
    stack = new c3(defaultCurrentScope, tmpResult2.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return closure_1(scope);
  });
}
function withIsolationScope(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("12583__.js");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("12583__.js");
  const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    const tmpResult = require("12591__.js");
    const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
    const self = this;
    const self2 = this;
    const tmpResult2 = require("12591__.js");
    stack = new closure_3(defaultCurrentScope, tmpResult2.getDefaultIsolationScope());
  }
  sentryCarrier.stack = stack;
  return stack.withScope(function () {
    const obj = require("12583__.js");
    const mainCarrier = obj.getMainCarrier();
    const obj2 = require("12583__.js");
    const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
    let stack = sentryCarrier.stack;
    if (!stack) {
      const tmp2Result = require("12591__.js");
      const defaultCurrentScope = tmp2Result.getDefaultCurrentScope();
      const self = this;
      const self2 = this;
      const tmp2Result2 = require("12591__.js");
      stack = new closure_2_3(defaultCurrentScope, tmp2Result2.getDefaultIsolationScope());
    }
    sentryCarrier.stack = stack;
    return closure_0(stack.getIsolationScope());
  });
}
class AsyncContextStack {
  constructor(arg0, arg1) {
    const self = this;
    let scope = arg0;
    _classCallCheck(this, AsyncContextStack);
    if (!arg0) {
      const self2 = this;
      const self3 = this;
      scope = new _mod12586.Scope();
    }
    let scope1 = arg1;
    if (!scope1) {
      const self4 = this;
      const self5 = this;
      scope1 = new _mod12586.Scope();
    }
    const items = [{ scope }];
    self._stack = items;
    self._isolationScope = scope1;
  }
}
const entry = {
  key: "withScope",
  value: function withScope(fn) {
    const self = this;
    try {
      let nextPromise;
      const promise = fn(tmp);
      const obj = _mod12572;
      if (obj.isThenable(promise)) {
        nextPromise = promise.then(
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
      self._popScope();
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
      const obj = { client: this.getClient(), scope: cloneResult };
      _stack.push(obj);
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
const AsyncContextStack_export = _moduleResult;

export { AsyncContextStack_export as AsyncContextStack };
export function getStackAsyncContextStrategy() {
  let obj = {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope(arg0, arg1) {
      let closure_0 = arg1;
      let obj = closure_0(closure_1[4]);
      let mainCarrier = obj.getMainCarrier();
      let obj2 = closure_0(closure_1[4]);
      let sentryCarrier = obj2.getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        const tmpResult = closure_0(closure_1[5]);
        let defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        let self = this;
        let self2 = this;
        const tmpResult2 = closure_0(closure_1[5]);
        stack = new closure_3(defaultCurrentScope, tmpResult2.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.withScope(function () {
        const obj = require("12583__.js");
        const mainCarrier = obj.getMainCarrier();
        const obj2 = require("12583__.js");
        const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
        let stack = sentryCarrier.stack;
        if (!stack) {
          const tmp2Result = require("12591__.js");
          const defaultCurrentScope = tmp2Result.getDefaultCurrentScope();
          const self = this;
          const self2 = this;
          const tmp2Result2 = require("12591__.js");
          stack = new closure_2_3(defaultCurrentScope, tmp2Result2.getDefaultIsolationScope());
        }
        sentryCarrier.stack = stack;
        return closure_0(stack.getIsolationScope());
      });
    },
    getCurrentScope() {
      const obj = require("12583__.js");
      const mainCarrier = obj.getMainCarrier();
      const obj2 = require("12583__.js");
      const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        const tmpResult = require("12591__.js");
        const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        const self = this;
        const self2 = this;
        const tmpResult2 = require("12591__.js");
        stack = new closure_1_3(defaultCurrentScope, tmpResult2.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.getScope();
    },
    getIsolationScope() {
      const obj = require("12583__.js");
      const mainCarrier = obj.getMainCarrier();
      const obj2 = require("12583__.js");
      const sentryCarrier = obj2.getSentryCarrier(mainCarrier);
      let stack = sentryCarrier.stack;
      if (!stack) {
        const tmpResult = require("12591__.js");
        const defaultCurrentScope = tmpResult.getDefaultCurrentScope();
        const self = this;
        const self2 = this;
        const tmpResult2 = require("12591__.js");
        stack = new closure_1_3(defaultCurrentScope, tmpResult2.getDefaultIsolationScope());
      }
      sentryCarrier.stack = stack;
      return stack.getIsolationScope();
    },
  };
  return obj;
}
