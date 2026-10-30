// === Module 16779: useRefetchWhenSelectedTeenMissing ===

// Module 16779 (useRefetchWhenSelectedTeenMissing)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;

const require = fn;
const logger = new fn(4).Logger("useRefetchWhenSelectedTeenMissing");
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefetchWhenSelectedTeenMissing.tsx");

export default function useRefetchWhenSelectedTeenMissing() {
  const items = [FamilyCenterStore];
  const stateFromStoresObject = isInitialized(hasActiveLinks[4]).useStateFromStoresObject(items, () => ({ isInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading(), selectedTeenId: FamilyCenterStore.getSelectedTeenId() }));
  isInitialized = stateFromStoresObject.isInitialized;
  const selectedTeenId = stateFromStoresObject.selectedTeenId;
  const obj = isInitialized(hasActiveLinks[4]);
  hasActiveLinks = isInitialized(hasActiveLinks[5]).useHasActiveLinks();
  noop.useRef(false);
  const items1 = [isInitialized, stateFromStoresObject.isLoading, selectedTeenId, hasActiveLinks];
  const effect = noop.useEffect(() => {
    closure_0 = function _refetch() {
      const self = this;
      const tmp = closure_3(function*() {
        yield tmp3(tmp17[6]).initialPageLoad({ showLoading: false });
        if (1 === tmp7) {
          c3 = 0;
          closure_128_0 = tmp17;
          logger.error("Failed to refetch Family Center for a missing selected teen", closure_128_0);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    if (hasActiveLinks) {
      let current = !isInitialized;
      if (isInitialized) {
        current = FamilyCenterStore.isLoading();
      }
      if (!current) {
        current = null != selectedTeenId;
      }
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        (function refetch() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    } else {
      ref.current = false;
    }
  }, items1);
};