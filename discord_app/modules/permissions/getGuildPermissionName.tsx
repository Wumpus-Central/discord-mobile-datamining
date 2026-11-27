// === Module 18800: getGuildPermissionName ===

// Module 18800 (getGuildPermissionName)
import permissions from "permissions" /* 7741 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/permissions/getGuildPermissionName.tsx");

export default function getGuildPermissionName(item, arg1) {
  let title;
  if (arg1 != null) {
    const tmp2 = arg1[item.toString(item)];
    if (tmp2 != null) {
      title = tmp2.title;
    }
  }
  if (title == null) {
    title = permissions.getPermissionName(item);
  }
  return title;
};