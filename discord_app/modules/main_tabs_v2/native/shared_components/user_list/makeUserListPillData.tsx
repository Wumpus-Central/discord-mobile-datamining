// === Module 11125: makeUserListPillData ===

// Module 11125 (makeUserListPillData)
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  const obj = { id: id.id, text: UserUtilsDefault.getName(id), icon: null };
  const obj3 = { user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL };
  obj.icon = jsx(native.Avatar, { user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL });
  return obj;
};