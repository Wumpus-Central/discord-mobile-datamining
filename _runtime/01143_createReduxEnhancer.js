const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let obj = {
  attachReduxState: true,
  actionTransformer(arg0) {
    return arg0;
  },
  stateTransformer(arg0) {
    let tmp = arg0;
    if (!arg0) {
      tmp = null;
    }
    return tmp;
  }
};
arg5.createReduxEnhancer = function createReduxEnhancer(arg0) {
  let obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  return (arg0) => {
    let closure_0 = arg0;
    return (arg0, arg1) => {
      if (lib.attachReduxState) {
        obj = obj(outer2_1[0]);
        const globalScope = obj.getGlobalScope();
        globalScope.addEventProcessor((type, attachments) => {
          try {
            let tmp = undefined === type.type;
            if (tmp) {
              tmp = "redux" === type.contexts.state.state.type;
            }
            if (tmp) {
              attachments = attachments.attachments;
              if (!attachments) {
                attachments = [];
              }
              const items = [];
              const obj = { filename: "redux_state.json", data: null };
              const _JSON = JSON;
              obj[1] = JSON.stringify(type.contexts.state.state.value);
              items[HermesBuiltin.arraySpread(attachments, 0)] = obj;
              attachments.attachments = items;
              const arraySpreadResult = HermesBuiltin.arraySpread(attachments, 0);
            }
            return type;
          } catch (err) {
          }
        });
      }
      lib = arg0;
      const tmp4 = lib((arg0, arg1) => {
        const tmp = lib(arg0, arg1);
        let obj = lib(outer2_1[0]);
        const currentScope = obj.getCurrentScope();
        const actionTransformerResult = lib.actionTransformer(arg1);
        if (null != actionTransformerResult) {
          let tmp2Result = tmp2(tmp3[0]);
          obj = { category: "redux.action", data: null, type: "info" };
          obj[1] = actionTransformerResult;
          tmp2Result.addBreadcrumb(obj);
        }
        const stateTransformerResult = lib.stateTransformer(tmp);
        if (null != stateTransformerResult) {
          tmp2Result = tmp2(tmp3[0]);
          const client = tmp2Result.getClient();
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
          obj = { state: null };
          const obj1 = { type: "redux", value: null };
          obj1[1] = stateTransformerResult;
          obj[0] = obj1;
          const result = tmp2(tmp3[0]).addNonEnumerableProperty(obj, "__sentry_override_normalization_depth__", 3 + num);
          currentScope.setContext("state", obj);
          const tmp2Result1 = tmp2(tmp3[0]);
        } else {
          currentScope.setContext("state", null);
        }
        const configureScopeWithState = obj3.configureScopeWithState;
        if (typeof configureScopeWithState === "function") {
          const result1 = configureScopeWithState(currentScope, tmp);
        }
        return tmp;
      }, arg1);
      obj = {
        apply(apply) {
          let closure_0 = arg2[0];
          const items = [
            (arg0, arg1) => {
              const tmp = lib(arg0, arg1);
              let obj = lib(outer2_1[0]);
              const currentScope = obj.getCurrentScope();
              const actionTransformerResult = lib.actionTransformer(arg1);
              if (null != actionTransformerResult) {
                let tmp2Result = tmp2(tmp3[0]);
                obj = { category: "redux.action", data: null, type: "info" };
                obj[1] = actionTransformerResult;
                tmp2Result.addBreadcrumb(obj);
              }
              const stateTransformerResult = lib.stateTransformer(tmp);
              if (null != stateTransformerResult) {
                tmp2Result = tmp2(tmp3[0]);
                const client = tmp2Result.getClient();
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
                obj = { state: null };
                const obj1 = { type: "redux", value: null };
                obj1[1] = stateTransformerResult;
                obj[0] = obj1;
                const result = tmp2(tmp3[0]).addNonEnumerableProperty(obj, "__sentry_override_normalization_depth__", 3 + num);
                currentScope.setContext("state", obj);
                const tmp2Result1 = tmp2(tmp3[0]);
              } else {
                currentScope.setContext("state", null);
              }
              const configureScopeWithState = obj3.configureScopeWithState;
              if (typeof configureScopeWithState === "function") {
                const result1 = configureScopeWithState(currentScope, tmp);
              }
              return tmp;
            }
          ];
          apply.apply(arg1, items);
        }
      };
      const proxy = new Proxy(tmp4.replaceReducer, obj);
      tmp4.replaceReducer = proxy;
      return tmp4;
    };
  };
};