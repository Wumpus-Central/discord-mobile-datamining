// discord_app/modules/conjure/chat/conjureCardOverrides.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/chat/conjureCardOverrides.tsx");

export function conjureCardExpanded(c15, render_id, set) {
  value = c15.get(render_id);
  if (value == null) {
    value = !set;
  }
  return value;
}
export function toggleConjureCard(get, arg1, arg2) {
  const map = new Map(get);
  value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = map.set(arg1, !value);
  return map;
}
