// _runtime/metro/01019__.js
import _mod693 from "00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = {
  attachReduxState: true,
  actionTransformer(arg0) {
    return arg0;
  },
  stateTransformer(arg0) {
    return arg0 || null;
  },
};

export const createReduxEnhancer = function createReduxEnhancer(arg0) {
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  return (arg0) => {
    let closure_0 = arg0;
    return (arg0, arg1) => {
      if (obj.attachReduxState) {
        obj = _mod693;
        const globalScope = obj.getGlobalScope();
        globalScope.addEventProcessor((type, attachments) => {
          try {
            const tmp2 = undefined === type.type && "redux" === type.contexts.state.state.type;
            if (tmp2) {
              attachments = attachments.attachments || [];
              const items = [];
              const _JSON = JSON;
              obj = { filename: "redux_state.json", data: JSON.stringify(type.contexts.state.state.value) };
              items[HermesBuiltin.arraySpread(items, attachments, 0)] = obj;
              attachments.attachments = items;
              const arraySpreadResult = HermesBuiltin.arraySpread(items, attachments, 0);
            }
          } catch (err) {}
          return type;
        });
      }
      closure_0 = arg0;
      const tmp4 = closure_0((arg0, arg1) => {
        let obj5;
        const tmp = closure_0(arg0, arg1);
        obj = closure_0(closure_3_1[0]);
        const currentScope = obj.getCurrentScope();
        const actionTransformerResult = closure_2_0.actionTransformer(arg1);
        if (null != actionTransformerResult) {
          const obj2 = { category: "redux.action", data: actionTransformerResult, type: "info" };
          const tmp2Result = closure_0(closure_3_1[0]);
          tmp2Result.addBreadcrumb(obj2);
        }
        const stateTransformerResult = closure_2_0.stateTransformer(tmp);
        if (null != stateTransformerResult) {
          const tmp2Result3 = closure_0(closure_3_1[0]);
          const client = tmp2Result3.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          let num;
          if (options != null) {
            num = options.normalizeDepth;
          }
          if (!num) {
            num = 3;
          }
          const obj4 = { state: obj5 };
          obj5 = { type: "redux", value: stateTransformerResult };
          const tmp2Result4 = closure_0(closure_3_1[0]);
          const result = tmp2Result4.addNonEnumerableProperty(obj4, "__sentry_override_normalization_depth__", 3 + num);
          currentScope.setContext("state", obj4);
        } else {
          currentScope.setContext("state", null);
        }
        const configureScopeWithState = closure_2_0.configureScopeWithState;
        if (typeof configureScopeWithState === "function") {
          const result1 = configureScopeWithState(currentScope, tmp);
        }
        return tmp;
      }, arg1);
      let obj2 = {
        apply(apply, arg1, arg2) {
          closure_0 = arg2[0];
          const items = [
            (arg0, arg1) => {
              let obj5;
              const tmp = closure_0(arg0, arg1);
              obj = closure_0(closure_3_1[0]);
              const currentScope = obj.getCurrentScope();
              const actionTransformerResult = closure_2_0.actionTransformer(arg1);
              if (null != actionTransformerResult) {
                const obj2 = { category: "redux.action", data: actionTransformerResult, type: "info" };
                const tmp2Result = closure_0(closure_3_1[0]);
                tmp2Result.addBreadcrumb(obj2);
              }
              const stateTransformerResult = closure_2_0.stateTransformer(tmp);
              if (null != stateTransformerResult) {
                const tmp2Result3 = closure_0(closure_3_1[0]);
                const client = tmp2Result3.getClient();
                let options;
                if (client != null) {
                  options = client.getOptions();
                }
                let num;
                if (options != null) {
                  num = options.normalizeDepth;
                }
                if (!num) {
                  num = 3;
                }
                const obj4 = { state: obj5 };
                obj5 = { type: "redux", value: stateTransformerResult };
                const tmp2Result4 = closure_0(closure_3_1[0]);
                const result = tmp2Result4.addNonEnumerableProperty(
                  obj4,
                  "__sentry_override_normalization_depth__",
                  3 + num,
                );
                currentScope.setContext("state", obj4);
              } else {
                currentScope.setContext("state", null);
              }
              const configureScopeWithState = closure_2_0.configureScopeWithState;
              if (typeof configureScopeWithState === "function") {
                const result1 = configureScopeWithState(currentScope, tmp);
              }
              return tmp;
            },
          ];
          apply.apply(arg1, items);
        },
      };
      const proxy = new Proxy(tmp4.replaceReducer, obj2);
      tmp4.replaceReducer = proxy;
      return tmp4;
    };
  };
};
