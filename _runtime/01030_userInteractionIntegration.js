// === Module 1030: userInteractionIntegration ===

// Module 1030 (userInteractionIntegration)
import _mod682 from "module_682" /* 682 */;
import SPAN_ORIGIN_AUTO_INTERACTION from "SPAN_ORIGIN_AUTO_INTERACTION" /* 1023 */;
import startIdleSpan from "startIdleSpan" /* 1025 */;
import _mod1026 from "module_1026" /* 1026 */;
import _mod1031 from "module_1031" /* 1031 */;

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";

export () => ({ name: UserInteraction })
export const startUserInteractionSpan = (arg0) => {
  const client = _mod682.getClient();
  if (client) {
    const currentReactNativeTracingIntegration = _mod1031.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const tmpResult11 = _mod682;
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult11.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !startIdleSpan.isSentryInteractionSpan(activeSpan);
              const tmpResult12 = startIdleSpan;
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = _mod682.debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + _mod682.spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult13 = _mod682;
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult14.spanToJSON(activeSpan).description === combined) {
                if (tmpResult15.spanToJSON(activeSpan).op === op) {
                  const debug5 = _mod682.debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + _mod682.spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult16 = _mod682;
                }
                tmpResult15 = _mod682;
              }
              tmpResult14 = _mod682;
            }
            const currentScope = _mod682.getCurrentScope();
            const obj2 = { name: combined, op, scope: currentScope };
            const tmpResult17 = _mod682;
            const result = startIdleSpan.clearActiveSpanFromScope(currentScope);
            const tmpResult18 = startIdleSpan;
            const obj3 = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = startIdleSpan.startIdleSpan(obj2, obj3);
            const attr = startIdleSpanResult.setAttribute(_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult19 = startIdleSpan;
            const result1 = _mod1026.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = _mod682.debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult11.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = _mod682.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = _mod682.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = _mod682.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
    const tmpResult = _mod1031;
  }
};