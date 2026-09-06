// === Module 845: instrumentLangGraph ===

// Module 845 (instrumentLangGraph)
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 823 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentLangGraph = function instrumentLangGraph(compile, attributes) {
  if (!attributes) {
    attributes = {};
  }
  compile = compile.compile;
  attributes = {
    apply(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      attributes(731);
      attributes = { op: "gen_ai.create_agent", name: "create_agent", attributes: null };
      attributes = {};
      attributes[attributes(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = attributes(846).LANGGRAPH_ORIGIN;
      attributes[attributes(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
      attributes[attributes(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
      attributes.attributes = attributes;
      return attributes.startSpan(attributes, (setAttribute) => {
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
                  applyResult(731);
                  attributes = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: null };
                  attributes = {};
                  attributes[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(846).LANGGRAPH_ORIGIN;
                  attributes[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(823).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                  attributes[applyResult(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
                  attributes.attributes = attributes;
                  applyResult = closure_2(/* F125852 */ function() { ... });
                  return attributes.startSpan(attributes, () => { ... });
                }
              });
              return proxy;
            })(obj3.bind(applyResult), applyResult, tmp7, obj);
          }
          return applyResult;
        } catch (tmp23) {
          obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
          obj.setStatus(obj);
          obj = { mechanism: { handled: false, type: "auto.ai.langgraph.error" } };
          captureCheckIn.captureException(tmp23, obj);
          throw tmp23;
        }
      });
    }
  };
  let proxy = new Proxy(compile.bind(compile), attributes);
  compile.compile = proxy;
  return compile;
};
export const instrumentStateGraphCompile = function instrumentStateGraphCompile(arg0, arg1) {
  closure_0 = arg1;
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      attributes(731);
      attributes = { op: "gen_ai.create_agent", name: "create_agent", attributes: null };
      attributes = {};
      attributes[attributes(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = attributes(846).LANGGRAPH_ORIGIN;
      attributes[attributes(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
      attributes[attributes(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
      attributes.attributes = attributes;
      return attributes.startSpan(attributes, (setAttribute) => {
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
                  applyResult(731);
                  attributes = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: null };
                  attributes = {};
                  attributes[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(846).LANGGRAPH_ORIGIN;
                  attributes[applyResult(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(823).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                  attributes[applyResult(823).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
                  attributes.attributes = attributes;
                  applyResult = closure_2(/* F125852 */ function() { ... });
                  return attributes.startSpan(attributes, () => { ... });
                }
              });
              return proxy;
            })(obj3.bind(applyResult), applyResult, tmp7, obj);
          }
          return applyResult;
        } catch (tmp23) {
          obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
          obj.setStatus(obj);
          obj = { mechanism: { handled: false, type: "auto.ai.langgraph.error" } };
          captureCheckIn.captureException(tmp23, obj);
          throw tmp23;
        }
      });
    }
  });
  return proxy;
};