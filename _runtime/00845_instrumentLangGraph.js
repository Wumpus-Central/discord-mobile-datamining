// _runtime/00845_instrumentLangGraph.js
import SPAN_STATUS_ERROR from "00705_SPAN_STATUS_ERROR.js";
import captureCheckIn from "00734_captureCheckIn.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentLangGraph = function instrumentLangGraph(compile, arg1) {
  if (!arg1) {
    let obj = {};
  }
  compile = compile.compile;
  let proxy = new Proxy(compile.bind(compile), {
    apply(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      obj = obj(731);
      let obj2 = { op: "gen_ai.create_agent", name: "create_agent", attributes: null };
      let obj3 = {};
      obj3[obj(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = obj(846).LANGGRAPH_ORIGIN;
      obj3[obj(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
      obj3[obj(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
      obj2.attributes = obj3;
      return obj.startSpan(obj2, (setAttribute) => {
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
            let attr = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_AGENT_NAME_ATTRIBUTE, tmp7.name);
            let _HermesInternal = HermesInternal;
            setAttribute.updateName("create_agent " + tmp7.name);
          }
          let invoke = applyResult.invoke;
          if (invoke) {
            invoke = typeof obj3 === "function";
          }
          if (invoke) {
            applyResult.invoke = (function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, arg3) {
              dependencyMap = arg2;
              closure_2 = arg3;
              const proxy = new Proxy(arg0, {
                apply(arg0, arg1, arg2) {
                  applyResult = arg0;
                  dependencyMap = arg1;
                  closure_2 = arg2;
                  let obj2 = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: null };
                  let obj3 = {};
                  obj3[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(846).LANGGRAPH_ORIGIN;
                  obj3[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(823).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                  obj3[applyResult(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
                  obj2.attributes = obj3;
                  applyResult = closure_2(/* F128154 */ function() { ... });
                  return applyResult(731).startSpan(obj2, () => { ... });
                }
              });
              return proxy;
            })(obj3.bind(applyResult), applyResult, tmp7, obj);
          }
          return applyResult;
        } catch (tmp23) {
          let obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
          obj.setStatus(obj2);
          let obj4 = { mechanism: { handled: false, type: "auto.ai.langgraph.error" } };
          captureCheckIn.captureException(tmp23, obj4);
          throw tmp23;
        }
      });
    }
  });
  compile.compile = proxy;
  return compile;
};
export const instrumentStateGraphCompile = function instrumentStateGraphCompile(arg0, arg1) {
  closure_0 = arg1;
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      obj = obj(731);
      let obj2 = { op: "gen_ai.create_agent", name: "create_agent", attributes: null };
      let obj3 = {};
      obj3[obj(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = obj(846).LANGGRAPH_ORIGIN;
      obj3[obj(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
      obj3[obj(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
      obj2.attributes = obj3;
      return obj.startSpan(obj2, (setAttribute) => {
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
            let attr = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_AGENT_NAME_ATTRIBUTE, tmp7.name);
            let _HermesInternal = HermesInternal;
            setAttribute.updateName("create_agent " + tmp7.name);
          }
          let invoke = applyResult.invoke;
          if (invoke) {
            invoke = typeof obj3 === "function";
          }
          if (invoke) {
            applyResult.invoke = (function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, arg3) {
              dependencyMap = arg2;
              closure_2 = arg3;
              const proxy = new Proxy(arg0, {
                apply(arg0, arg1, arg2) {
                  applyResult = arg0;
                  dependencyMap = arg1;
                  closure_2 = arg2;
                  let obj2 = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: null };
                  let obj3 = {};
                  obj3[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(846).LANGGRAPH_ORIGIN;
                  obj3[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(823).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                  obj3[applyResult(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
                  obj2.attributes = obj3;
                  applyResult = closure_2(/* F128154 */ function() { ... });
                  return applyResult(731).startSpan(obj2, () => { ... });
                }
              });
              return proxy;
            })(obj3.bind(applyResult), applyResult, tmp7, obj);
          }
          return applyResult;
        } catch (tmp23) {
          let obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
          obj.setStatus(obj2);
          let obj4 = { mechanism: { handled: false, type: "auto.ai.langgraph.error" } };
          captureCheckIn.captureException(tmp23, obj4);
          throw tmp23;
        }
      });
    }
  });
  return proxy;
};