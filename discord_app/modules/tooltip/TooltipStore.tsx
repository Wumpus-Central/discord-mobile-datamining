// === Module 10821: set ===

// Module 10821 (set)
import { StorageKeys } from "ME";
import { Store } from "initialize";
import set from "initialize";

let set = new Set();
const set1 = new Set();
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
  const Storage = require(595) /* Storage */.Storage;
  let items = Storage.get(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, []);
  if (items == null) {
    items = [];
  }
  let closure_4 = Set(...items);
};
TooltipStore.displayName = "TooltipStore";
const tooltipStore = new TooltipStore(require("dispatcher"), {
  TOOLTIP_ACKNOWLEDGE: function handleTooltipAcknowledge(tooltip) {
    if (set1 != null) {
      set1.add(tooltip.tooltip);
    }
    const Storage = require(595) /* Storage */.Storage;
    const result = Storage.set(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, Array(set1));
  },
  TOOLTIP_SHOW_ATTEMPT: function hasAttemptedToShowTooltip(arg0) {
    let ignoreMaxShownLimit;
    let tooltip;
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