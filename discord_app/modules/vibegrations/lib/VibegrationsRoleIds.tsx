// discord_app/modules/vibegrations/lib/VibegrationsRoleIds.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first2, prop) {
  let set = first2;
  if (!(first2 instanceof Set)) {
    const _Set = Set;
    set = new Set(first2);
  }
  return set.size === prop.length && prop.every((item) => set.has(item));
};
