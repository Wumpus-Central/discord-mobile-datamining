// discord_app/modules/conjure/settings/ConjureRoleIds.tsx
import size from "../../../../_runtime/metro/00002__.js";

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
