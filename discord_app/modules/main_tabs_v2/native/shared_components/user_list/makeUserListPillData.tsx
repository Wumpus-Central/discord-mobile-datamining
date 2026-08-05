// discord_app/modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx
import "noop";
import { jsx } from "jsxProd";
import { Button } from "../../../../../design/void/native.tsx";
import { nameFromUser } from "../../../../../utils/UserUtils.tsx";

const require = arg1;
const result = require("nameFromUser").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: null, icon: null };
  obj[1] = nameFromUser.getName(id);
  obj = { user: id, guildId: "Array", size: 8 };
  obj[2] = Button /* Button */.AvatarSizes.XXSMALL;
  obj[2] = jsx(Button /* Button */.Avatar, { user: id, guildId: "Array", size: 8 });
  return obj;
};