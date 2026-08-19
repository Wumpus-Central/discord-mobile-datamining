// === Module 1165: userInteractionIntegration ===

// Module 1165 (userInteractionIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import _mod1158 from "module_1158" /* 1158 */;
import startIdleSpan from "startIdleSpan" /* 1160 */;
import onThisSpanEnd from "onThisSpanEnd" /* 1161 */;
import INTEGRATION_NAME from "INTEGRATION_NAME" /* 1166 */;

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";
arg5.userInteractionIntegration = () => ({ name: UserInteraction });
arg5.startUserInteractionSpan = (arg0) => {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  if (client) {
    let tmpResult = INTEGRATION_NAME;
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          tmpResult = registerSpanErrorInstrumentation;
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !startIdleSpan.isSentryInteractionSpan(activeSpan);
              const tmpResult1 = startIdleSpan;
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = registerSpanErrorInstrumentation.debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + registerSpanErrorInstrumentation.spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult2 = registerSpanErrorInstrumentation;
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult3.spanToJSON(activeSpan).description === combined) {
                if (tmpResult4.spanToJSON(activeSpan).op === op) {
                  const debug5 = registerSpanErrorInstrumentation.debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + registerSpanErrorInstrumentation.spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult5 = registerSpanErrorInstrumentation;
                }
                tmpResult4 = registerSpanErrorInstrumentation;
              }
              tmpResult3 = registerSpanErrorInstrumentation;
            }
            const currentScope = registerSpanErrorInstrumentation.getCurrentScope();
            obj = { name: null, op: null, scope: null };
            obj[0] = combined;
            obj[1] = op;
            obj[2] = currentScope;
            const tmpResult6 = registerSpanErrorInstrumentation;
            const result = startIdleSpan.clearActiveSpanFromScope(currentScope);
            const tmpResult7 = startIdleSpan;
            obj = { idleTimeout: null, finalTimeout: null };
            obj[0] = currentReactNativeTracingIntegration.options.idleTimeoutMs;
            obj[1] = currentReactNativeTracingIntegration.options.finalTimeoutMs;
            const startIdleSpanResult = startIdleSpan.startIdleSpan(obj, obj);
            const attr = startIdleSpanResult.setAttribute(registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, _mod1158.SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult8 = startIdleSpan;
            const result1 = onThisSpanEnd.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = registerSpanErrorInstrumentation.debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = registerSpanErrorInstrumentation.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = registerSpanErrorInstrumentation.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = registerSpanErrorInstrumentation.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
  }
};