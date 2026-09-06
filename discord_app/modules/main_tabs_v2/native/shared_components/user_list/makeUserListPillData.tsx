// === Module 10863: makeUserListPillData ===

// Module 10863 (makeUserListPillData)
import native from "native" /* 1178 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: UserUtilsDefault.getName(id), icon: null };
  obj = { user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL };
  obj.icon = jsx(native.Avatar, { user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL });
  return obj;
};