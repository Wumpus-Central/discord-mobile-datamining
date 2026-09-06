// discord_app/modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx
import native from "../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx",
);

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: UserUtilsDefault.getName(id), icon: null };
  obj = { user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL };
  obj.icon = jsx(native.Avatar, { user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL });
  return obj;
}
