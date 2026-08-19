// === Module 8333: getInitialStringSelectOptions ===

// Module 8333 (getInitialStringSelectOptions)
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import getInteractionComponentStates from "getInteractionComponentStates" /* 8327 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === PermissionOverwriteType.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((item, index) => item.default);
    mapped = found.map((item, index) => item.value);
  }
  return mapped;
};