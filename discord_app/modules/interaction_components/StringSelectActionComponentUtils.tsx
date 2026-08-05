// discord_app/modules/interaction_components/StringSelectActionComponentUtils.tsx
import getInteractionComponentStates from "getInteractionComponentStates";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === require("../../flow/Server.tsx") /* PermissionOverwriteType */.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((arg0) => arg0.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};