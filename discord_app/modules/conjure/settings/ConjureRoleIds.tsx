// === Module 16616: ConjureRoleIds ===

// Module 16616 (ConjureRoleIds)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first1, roleIds) {
  set = first1;
  if (!(first1 instanceof Set)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(first1);
  }
  const tmp3 = set.size === roleIds.length && roleIds.every((item) => set.has(item));
  return tmp3;
};