// discord_app/modules/conjure/settings/ConjureRoleIds.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first1, roleIds) {
  let set = first1;
  if (!(first1 instanceof Set)) {
    const _Set = Set;
    set = new Set(first1);
  }
  return set.size === roleIds.length && roleIds.every((item) => set.has(item));
};
