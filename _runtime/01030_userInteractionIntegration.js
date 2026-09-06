// _runtime/01030_userInteractionIntegration.js
import _mod682 from "metro/00682__.js";

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";

export () => ({ name: UserInteraction })
export const startUserInteractionSpan = (arg0) => {
  let obj = _mod682;
  const client = obj.getClient();
  if (client) {
    let tmpResult = tmp(1031);
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          tmpResult = tmp(682);
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !tmp(1025).isSentryInteractionSpan(activeSpan);
              const tmpResult1 = tmp(1025);
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = tmp(682).debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + tmp(682).spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult2 = tmp(682);
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult3.spanToJSON(activeSpan).description === combined) {
                if (tmpResult4.spanToJSON(activeSpan).op === op) {
                  const debug5 = tmp(682).debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + tmp(682).spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult5 = tmp(682);
                }
                tmpResult4 = tmp(682);
              }
              tmpResult3 = tmp(682);
            }
            const currentScope = tmp(682).getCurrentScope();
            obj = { name: combined, op, scope: currentScope };
            const tmpResult6 = tmp(682);
            const result = tmp(1025).clearActiveSpanFromScope(currentScope);
            const tmpResult7 = tmp(1025);
            obj = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = tmp(1025).startIdleSpan(obj, obj);
            const attr = startIdleSpanResult.setAttribute(tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1023).SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult8 = tmp(1025);
            const result1 = tmp(1026).onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = tmp(682).debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = tmp(682).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = tmp(682).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = tmp(682).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
  }
};