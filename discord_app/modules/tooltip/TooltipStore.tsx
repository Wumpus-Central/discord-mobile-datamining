// === Module 9693: TooltipStore ===

// Module 9693 (TooltipStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const StorageKeys = Constants.StorageKeys;
new Set();
const set = new Set();
const Store = initializeDefault.Store;
class TooltipStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.canShowTooltip = function canShowTooltip(arg0) {
      let hasItem = set.has(arg0);
      if (hasItem) {
        hasItem = !set2.has(arg0);
      }
      return hasItem;
    };
    applyArgumentsResult.hasShownTooltip = function hasShownTooltip(arg0) {
      return set.has(arg0);
    };
    return applyArgumentsResult;
  }
}
TooltipStore.prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  let items = Storage.get(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, []);
  if (items == null) {
    items = [];
  }
  closure_4 = Set(...items);
};
TooltipStore.displayName = "TooltipStore";
const tooltipStore = new TooltipStore(DispatcherDefault, {
  TOOLTIP_ACKNOWLEDGE: function handleTooltipAcknowledge(tooltip) {
    if (set != null) {
      set.add(tooltip.tooltip);
    }
    const Storage = Storage2.Storage;
    const result = Storage.set(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, Array(set));
  },
  TOOLTIP_SHOW_ATTEMPT: function hasAttemptedToShowTooltip(arg0) {
    ({ tooltip, ignoreMaxShownLimit } = arg0);
    if (!set.has(tooltip)) {
      if (!set.has(tooltip)) {
        if (!ignoreMaxShownLimit) {
          ignoreMaxShownLimit = obj.size < 1;
        }
        if (ignoreMaxShownLimit) {
          obj.add(tooltip);
        }
      }
    }
    return false;
  }
});
let result = size.fileFinishedImporting("modules/tooltip/TooltipStore.tsx");

export default tooltipStore;