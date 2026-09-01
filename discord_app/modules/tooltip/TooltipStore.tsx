// === Module 9663: set ===

// Module 9663 (set)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import set from "set" /* 2 */;

const StorageKeys = ME.StorageKeys;
let set = new Set();
const set1 = new Set();
const Store = initializeDefault.Store;
class TooltipStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.canShowTooltip = function canShowTooltip(closure_0) {
      let hasItem = set.has(closure_0);
      if (hasItem) {
        hasItem = !set2.has(closure_0);
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
const tooltipStore = new TooltipStore(dispatcherDefault, {
  TOOLTIP_ACKNOWLEDGE: function handleTooltipAcknowledge(tooltip) {
    if (set1 != null) {
      set1.add(tooltip.tooltip);
    }
    const Storage = Storage2.Storage;
    const result = Storage.set(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, Array(set1));
  },
  TOOLTIP_SHOW_ATTEMPT: function hasAttemptedToShowTooltip(arg0) {
    ({ tooltip, ignoreMaxShownLimit } = arg0);
    if (!set.has(tooltip)) {
      if (!set1.has(tooltip)) {
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
let result = set.fileFinishedImporting("modules/tooltip/TooltipStore.tsx");

export default tooltipStore;