// discord_app/modules/permissions/getGuildPermissionName.tsx
import permissions from "../oauth2/permissions.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
