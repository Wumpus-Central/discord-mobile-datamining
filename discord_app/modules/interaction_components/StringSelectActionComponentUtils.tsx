// === Module 8827: StringSelectActionComponentUtils ===

// Module 8827 (StringSelectActionComponentUtils)
import Server from "Server" /* 2121 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8821 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === Server.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((item) => item.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
}