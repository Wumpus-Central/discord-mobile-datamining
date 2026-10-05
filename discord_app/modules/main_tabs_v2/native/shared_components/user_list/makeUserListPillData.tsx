// discord_app/modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import native from "../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx",
);

export default function makeUserListPillData(id) {
  let obj2;
  const obj = { id: id.id, text: obj2.getName(id), icon: null };
  obj2 = UserUtilsDefault;
  ({ user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL });
  const Avatar = native.Avatar;
  return obj;
}
