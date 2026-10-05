// _runtime/01041_userInteractionIntegration.js
import _mod693 from "metro/00693__.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01034_SPAN_ORIGIN_AUTO_INTERACTION.js";
import DEFAULT_NAVIGATION_SPAN_NAME from "01036_DEFAULT_NAVIGATION_SPAN_NAME.js";
import _mod1037 from "metro/01037__.js";
import _mod1042 from "metro/01042__.js";

const UserInteraction = "UserInteraction";

export const userInteractionIntegration = () => ({ name: UserInteraction });
export const startUserInteractionSpan = (arg0) => {
  let elementId;
  let op;
  const obj = _mod693;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod1042;
    const currentReactNativeTracingIntegration = tmpResult.getCurrentReactNativeTracingIntegration();
    if (currentReactNativeTracingIntegration) {
      ({ elementId, op } = arg0);
      if (client.getOptions().enableUserInteractionTracing) {
        if (elementId) {
          const currentRoute = currentReactNativeTracingIntegration.state.currentRoute;
          const tmpResult11 = _mod693;
          if (currentRoute) {
            const activeSpan = tmpResult11.getActiveSpan();
            let tmp18 = activeSpan;
            if (tmp18) {
              const tmpResult12 = DEFAULT_NAVIGATION_SPAN_NAME;
              tmp18 = !tmpResult12.isSentryInteractionSpan(activeSpan);
            }
            if (activeSpan) {
              if (tmp18) {
                const debug7 = _mod693.debug;
                const warn2 = debug7.warn;
                const _HermesInternal8 = HermesInternal;
                const tmpResult13 = _mod693;
                warn2(
                  "[" +
                    UserInteraction +
                    "] Did not create " +
                    op +
                    " transaction because active transaction " +
                    tmpResult13.spanToJSON(activeSpan).description +
                    " exists on the scope.",
                );
              }
            }
            const _HermesInternal5 = HermesInternal;
            const combined = "" + currentReactNativeTracingIntegration.state.currentRoute + "." + elementId;
            if (activeSpan) {
              const tmpResult14 = _mod693;
              if (tmpResult14.spanToJSON(activeSpan).description === combined) {
                const tmpResult15 = _mod693;
                if (tmpResult15.spanToJSON(activeSpan).op === op) {
                  const debug5 = _mod693.debug;
                  const warn = debug5.warn;
                  const _HermesInternal6 = HermesInternal;
                  const tmpResult16 = _mod693;
                  warn(
                    "[" +
                      UserInteraction +
                      "] Did not create " +
                      op +
                      " transaction because it the same transaction " +
                      tmpResult16.spanToJSON(activeSpan).description +
                      " already exists on the scope.",
                  );
                }
              }
            }
            const tmpResult17 = _mod693;
            const currentScope = tmpResult17.getCurrentScope();
            const obj2 = { name: combined, op, scope: currentScope };
            const tmpResult18 = DEFAULT_NAVIGATION_SPAN_NAME;
            const result = tmpResult18.clearActiveSpanFromScope(currentScope);
            const obj3 = {
              idleTimeout: currentReactNativeTracingIntegration.options.idleTimeoutMs,
              finalTimeout: currentReactNativeTracingIntegration.options.finalTimeoutMs,
            };
            const tmpResult19 = DEFAULT_NAVIGATION_SPAN_NAME;
            const startIdleSpanResult = tmpResult19.startIdleSpan(obj2, obj3);
            const setAttribute = startIdleSpanResult.setAttribute;
            const attr = setAttribute(
              _mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
              SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION,
            );
            const tmpResult20 = _mod1037;
            const result1 = tmpResult20.onlySampleIfChildSpans(client, startIdleSpanResult);
            const debug6 = _mod693.debug;
            const _HermesInternal7 = HermesInternal;
            debug6.log(
              "[" + UserInteraction + "] User Interaction Tracing Created " + op + " transaction " + combined + ".",
            );
            return startIdleSpanResult;
          } else {
            const debug4 = tmpResult11.debug;
            const _HermesInternal4 = HermesInternal;
            debug4.log(
              "[" + UserInteraction + "] User Interaction Tracing can not create transaction without a current route.",
            );
          }
        } else {
          const debug3 = _mod693.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log(
            "[" + UserInteraction + "] User Interaction Tracing can not create transaction with undefined elementId.",
          );
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
  }
};
