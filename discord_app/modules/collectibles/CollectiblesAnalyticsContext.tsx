// discord_app/modules/collectibles/CollectiblesAnalyticsContext.tsx
import c from "../../../_runtime/00576_c.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(null);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useCollectiblesAnalyticsContext() {
  return noop.useContext(context);
}
ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export { useCollectiblesAnalyticsContext };
export const CollectiblesAnalyticsProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblesAnalyticsProvider(arg0) {
      const cResult = c.c(6);
      ({ newValue, children } = arg0);
      if (typeof useCollectiblesAnalyticsContext === "function") {
        context = noop.useContext(context);
        if (cResult[0] === newValue) {
          if (cResult[1] === context) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === children) {
            if (cResult[4] === tmp5) {
              let tmp12 = cResult[5];
            }
            return tmp12;
          }
          const obj2 = { value: tmp5, children };
          const tmp14 = <tmp3.Provider value={tmp5}>{children}</tmp3.Provider>;
          cResult[3] = children;
          cResult[4] = tmp5;
          cResult[5] = tmp14;
          tmp12 = tmp14;
        }
        const obj3 = {};
        const merged = Object.assign(context);
        const merged1 = Object.assign(newValue);
        cResult[0] = newValue;
        cResult[1] = context;
        cResult[2] = obj3;
        tmp5 = obj3;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function CollectiblesAnalyticsProvider(newValue) {
      newValue = newValue.newValue;
      context = undefined;
      if (typeof useCollectiblesAnalyticsContext === "function") {
        context = noop.useContext(context);
        const items = [context, newValue];
        const obj = {
          value: noop.useMemo(() => {
            const merged = Object.assign(context);
            const merged1 = Object.assign(newValue);
            return {};
          }, items),
          children: tmp,
        };
        return (
          <context.Provider
            value={noop.useMemo(() => {
              const merged = Object.assign(context);
              const merged1 = Object.assign(newValue);
              return {};
            }, items)}
          >
            {tmp}
          </context.Provider>
        );
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
