// discord_app/modules/conjure/settings/ConjureRoleIds.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first1, roleIds) {
  const set = new Set(first1);
  return set.size === roleIds.length && roleIds.every((item) => set.has(item));
};
