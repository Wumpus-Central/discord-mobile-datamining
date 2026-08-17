// _runtime/01165_userInteractionIntegration.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";
arg5.userInteractionIntegration = () => ({ name: UserInteraction });
arg5.startUserInteractionSpan = (arg0) => {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  if (client) {
    let tmpResult = tmp(1166);
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          tmpResult = tmp(817);
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !tmp(1160).isSentryInteractionSpan(activeSpan);
              const tmpResult1 = tmp(1160);
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = tmp(817).debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + tmp(817).spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult2 = tmp(817);
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult3.spanToJSON(activeSpan).description === combined) {
                if (tmpResult4.spanToJSON(activeSpan).op === op) {
                  const debug5 = tmp(817).debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + tmp(817).spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult5 = tmp(817);
                }
                tmpResult4 = tmp(817);
              }
              tmpResult3 = tmp(817);
            }
            const currentScope = tmp(817).getCurrentScope();
            obj = { name: null, op: null, scope: null };
            obj[0] = combined;
            obj[1] = op;
            obj[2] = currentScope;
            const tmpResult6 = tmp(817);
            const result = tmp(1160).clearActiveSpanFromScope(currentScope);
            const tmpResult7 = tmp(1160);
            obj = { idleTimeout: null, finalTimeout: null };
            obj[0] = currentReactNativeTracingIntegration.options.idleTimeoutMs;
            obj[1] = currentReactNativeTracingIntegration.options.finalTimeoutMs;
            const startIdleSpanResult = tmp(1160).startIdleSpan(obj, obj);
            const attr = startIdleSpanResult.setAttribute(tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1158).SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult8 = tmp(1160);
            const result1 = tmp(1161).onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = tmp(817).debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = tmp(817).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = tmp(817).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = tmp(817).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
  }
};