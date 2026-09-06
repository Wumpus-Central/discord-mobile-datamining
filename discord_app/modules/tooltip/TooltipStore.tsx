// discord_app/modules/tooltip/TooltipStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
});
let result = size.fileFinishedImporting("modules/tooltip/TooltipStore.tsx");

export default tooltipStore;
