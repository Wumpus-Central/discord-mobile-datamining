// === Module 9630: TooltipStore ===

// Module 9630 (TooltipStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const StorageKeys = Constants.StorageKeys;
new Set();
const set = new Set();
new Set();
const Store = get_initializedDefault.Store;
class TooltipStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.canShowTooltip = function canShowTooltip(arg0) {
      const hasItem = set.has(arg0) && !set2.has(arg0);
      return hasItem;
    };
    applyArgumentsResult.hasShownTooltip = function hasShownTooltip(arg0) {
      return set.has(arg0);
    };
    return applyArgumentsResult;
  }
  initialize() {
    const Storage = Storage2.Storage;
    let items = Storage.get(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, []);
    if (items == null) {
      items = [];
    }
    let closure_4 = Set(...items);
  }
}
const prototype = TooltipStore.prototype;
TooltipStore.displayName = "TooltipStore";
const obj = {
  TOOLTIP_ACKNOWLEDGE: function handleTooltipAcknowledge(tooltip) {
    if (set != null) {
      set.add(tooltip.tooltip);
    }
    const Storage = Storage2.Storage;
    const result = Storage.set(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, Array(set));
  },
  TOOLTIP_SHOW_ATTEMPT: function hasAttemptedToShowTooltip(arg0) {
    let ignoreMaxShownLimit;
    let tooltip;
    ({ tooltip, ignoreMaxShownLimit } = arg0);
    if (!set.has(tooltip)) {
      if (!set.has(tooltip)) {
        if (!ignoreMaxShownLimit) {
          ignoreMaxShownLimit = set.size < 1;
        }
        if (ignoreMaxShownLimit) {
          set.add(tooltip);
        }
      }
    }
    return false;
  }
};
const tooltipStore = new TooltipStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/tooltip/TooltipStore.tsx");

export default tooltipStore;