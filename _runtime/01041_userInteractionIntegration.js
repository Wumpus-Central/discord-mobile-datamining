// _runtime/01041_userInteractionIntegration.js
import _mod693 from "metro/00693__.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01034_SPAN_ORIGIN_AUTO_INTERACTION.js";
import startIdleSpan from "01036_startIdleSpan.js";
import _mod1037 from "metro/01037__.js";
import _mod1042 from "metro/01042__.js";

require = arg1;
const dependencyMap = arg6;
const UserInteraction = "UserInteraction";

export () => ({ name: UserInteraction })
export const startUserInteractionSpan = (arg0) => {
  const client = _mod693.getClient();
  if (client) {
    const currentReactNativeTracingIntegration = _mod1042.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const tmpResult11 = _mod693;
          if (currentReactNativeTracingIntegration.state.currentRoute) {
            const activeSpan = tmpResult11.getActiveSpan();
            let tmp18 = activeSpan;
            if (activeSpan) {
              tmp18 = !startIdleSpan.isSentryInteractionSpan(activeSpan);
              const tmpResult12 = startIdleSpan;
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = _mod693.debug;
                const _HermesInternal8 = HermesInternal;
                debug7.warn("[" + UserInteraction + "] Did not create " + op + " transaction because active transaction " + _mod693.spanToJSON(activeSpan).description + " exists on the scope.");
                const tmpResult13 = _mod693;
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              if (tmpResult14.spanToJSON(activeSpan).description === combined) {
                if (tmpResult15.spanToJSON(activeSpan).op === op) {
                  const debug5 = _mod693.debug;
                  const _HermesInternal6 = HermesInternal;
                  debug5.warn("[" + UserInteraction + "] Did not create " + op + " transaction because it the same transaction " + _mod693.spanToJSON(activeSpan).description + " already exists on the scope.");
                  const tmpResult16 = _mod693;
                }
                tmpResult15 = _mod693;
              }
              tmpResult14 = _mod693;
            }
            const currentScope = _mod693.getCurrentScope();
            const obj2 = { name: combined, op, scope: currentScope };
            const tmpResult17 = _mod693;
            const result = startIdleSpan.clearActiveSpanFromScope(currentScope);
            const tmpResult18 = startIdleSpan;
            const obj3 = { idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs, finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs };
            const startIdleSpanResult = startIdleSpan.startIdleSpan(obj2, obj3);
            const attr = startIdleSpanResult.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION);
            const tmpResult19 = startIdleSpan;
            const result1 = _mod1037.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = _mod693.debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log("[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".");
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult11.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.");
          }
        } else {
          const debug3 = _mod693.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.");
        }
      } else {
        const debug2 = _mod693.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + UserInteraction + "] User Interaction Tracing is disabled.");
      }
    } else {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[" + UserInteraction + "] Tracing integration is not available. Can not start user interaction span.");
    }
    const tmpResult = _mod1042;
  }
};