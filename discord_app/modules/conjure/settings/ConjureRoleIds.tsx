// === Module 12277: ConjureRoleIds ===

// Module 12277 (ConjureRoleIds)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export function haveSameRoleIds(first1, roleIds) {
  const set = new Set(first1);
  return set.size === roleIds.length && roleIds.every((item) => set.has(item));
}