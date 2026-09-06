// _runtime/01030_userInteractionIntegration.js
import _mod682 from "metro/00682__.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01023_SPAN_ORIGIN_AUTO_INTERACTION.js";
import startIdleSpan from "01025_startIdleSpan.js";
import _mod1026 from "metro/01026__.js";
import _mod1031 from "metro/01031__.js";

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";

export () => ({ name: UserInteraction })
export const startUserInteractionSpan = (arg0) => {
  let obj = _mod682;
  const client = obj.getClient();
  if (client) {
    let tmpResult = _mod1031;
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          tmpResult = _mod682;
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !startIdleSpan.isSentryInteractionSpan(activeSpan);
              const tmpResult1 = startIdleSpan;
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = _mod682.debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + _mod682.spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult2 = _mod682;
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult3.spanToJSON(activeSpan).description === combined) {
                if (tmpResult4.spanToJSON(activeSpan).op === op) {
                  const debug5 = _mod682.debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + _mod682.spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult5 = _mod682;
                }
                tmpResult4 = _mod682;
              }
              tmpResult3 = _mod682;
            }
            const currentScope = _mod682.getCurrentScope();
            obj = { name: combined, op, scope: currentScope };
            const tmpResult6 = _mod682;
            const result = startIdleSpan.clearActiveSpanFromScope(currentScope);
            const tmpResult7 = startIdleSpan;
            obj = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = startIdleSpan.startIdleSpan(obj, obj);
            const attr = startIdleSpanResult.setAttribute(_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult8 = startIdleSpan;
            const result1 = _mod1026.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = _mod682.debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult.debug;
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
  }
};