// _runtime/00980_instrumentLangGraph.js
import asyncGeneratorStep from "getSpanStatusFromHttpCode";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentLangGraph = function instrumentLangGraph(compile) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  compile = compile.compile;
  obj = {
    apply(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      obj = obj(outer1_1[1]);
      obj = { op: "gen_ai.create_agent", name: "create_agent", attributes: null };
      obj = {};
      obj[obj(outer1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = obj(outer1_1[3]).LANGGRAPH_ORIGIN;
      obj[obj(outer1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
      obj[obj(outer1_1[4]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
      obj[2] = obj;
      return obj.startSpan(obj, (setAttribute) => {
        try {
          let _Reflect = Reflect;
          let applyResult = Reflect.apply(closure_0, closure_1, length);
          if (length.length > 0) {
            let first = length[0];
          } else {
            first = {};
          }
          let name;
          if (first != null) {
            name = first.name;
          }
          if (name) {
            name = typeof tmp7.name === "string";
          }
          if (name) {
            let attr = setAttribute.setAttribute(obj(outer2_1[4]).GEN_AI_AGENT_NAME_ATTRIBUTE, tmp7.name);
            let _HermesInternal = HermesInternal;
            setAttribute.updateName("create_agent " + tmp7.name);
          }
          let invoke = applyResult.invoke;
          if (invoke) {
            invoke = typeof obj3 === "function";
          }
          if (invoke) {
            applyResult.invoke = (function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, closure_0) {
              closure_0 = applyResult;
              let closure_1 = arg2;
              let closure_2 = closure_0;
              const proxy = new Proxy(arg0, {
                apply(arg0, arg1, arg2) {
                  let applyResult = arg0;
                  const dependencyMap = arg1;
                  const callback = arg2;
                  let obj = applyResult(866);
                  obj = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: null };
                  obj = {};
                  obj[applyResult(839).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(981).LANGGRAPH_ORIGIN;
                  obj[applyResult(839).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(958).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                  obj[applyResult(958).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
                  obj[2] = obj;
                  applyResult = undefined;
                  applyResult = callback(/* F120609 */ function() { ... });
                  return obj.startSpan(obj, () => { ... });
                }
              });
              return proxy;
            })(obj3.bind(applyResult), applyResult, tmp7, closure_0);
          }
          return applyResult;
        } catch (tmp23) {
          obj = { code: null, message: "internal_error" };
          obj[0] = obj(outer2_1[5]).SPAN_STATUS_ERROR;
          obj.setStatus(obj);
          obj = { mechanism: null };
          obj[0] = { handled: false, type: "auto.ai.langgraph.error" };
          obj(outer2_1[6]).captureException(tmp23, obj);
          throw tmp23;
        }
      });
    }
  };
  let proxy = new Proxy(compile.bind(compile), obj);
  compile.compile = proxy;
  return compile;
};
export const instrumentStateGraphCompile = function instrumentStateGraphCompile(arg0, arg1) {
  let closure_0 = arg1;
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      obj = obj(outer1_1[1]);
      obj = { op: "gen_ai.create_agent", name: "create_agent", attributes: null };
      obj = {};
      obj[obj(outer1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = obj(outer1_1[3]).LANGGRAPH_ORIGIN;
      obj[obj(outer1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
      obj[obj(outer1_1[4]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
      obj[2] = obj;
      return obj.startSpan(obj, (setAttribute) => {
        try {
          let _Reflect = Reflect;
          let applyResult = Reflect.apply(closure_0, closure_1, length);
          if (length.length > 0) {
            let first = length[0];
          } else {
            first = {};
          }
          let name;
          if (first != null) {
            name = first.name;
          }
          if (name) {
            name = typeof tmp7.name === "string";
          }
          if (name) {
            let attr = setAttribute.setAttribute(obj(outer2_1[4]).GEN_AI_AGENT_NAME_ATTRIBUTE, tmp7.name);
            let _HermesInternal = HermesInternal;
            setAttribute.updateName("create_agent " + tmp7.name);
          }
          let invoke = applyResult.invoke;
          if (invoke) {
            invoke = typeof obj3 === "function";
          }
          if (invoke) {
            applyResult.invoke = (function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, closure_0) {
              closure_0 = applyResult;
              let closure_1 = arg2;
              let closure_2 = closure_0;
              const proxy = new Proxy(arg0, {
                apply(arg0, arg1, arg2) {
                  let applyResult = arg0;
                  const dependencyMap = arg1;
                  const callback = arg2;
                  let obj = applyResult(866);
                  obj = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: null };
                  obj = {};
                  obj[applyResult(839).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(981).LANGGRAPH_ORIGIN;
                  obj[applyResult(839).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(958).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                  obj[applyResult(958).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
                  obj[2] = obj;
                  applyResult = undefined;
                  applyResult = callback(/* F120609 */ function() { ... });
                  return obj.startSpan(obj, () => { ... });
                }
              });
              return proxy;
            })(obj3.bind(applyResult), applyResult, tmp7, closure_0);
          }
          return applyResult;
        } catch (tmp23) {
          obj = { code: null, message: "internal_error" };
          obj[0] = obj(outer2_1[5]).SPAN_STATUS_ERROR;
          obj.setStatus(obj);
          obj = { mechanism: null };
          obj[0] = { handled: false, type: "auto.ai.langgraph.error" };
          obj(outer2_1[6]).captureException(tmp23, obj);
          throw tmp23;
        }
      });
    }
  });
  return proxy;
};