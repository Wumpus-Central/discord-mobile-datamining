// discord_app/modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import Button from "../../../../../design/void/native.tsx";
import nameFromUserDefault from "../../../../../utils/UserUtils.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: nameFromUserDefault.getName(id), icon: null };
  obj = { user: id, guildId: "Array", size: Button.AvatarSizes.XXSMALL };
  obj[2] = jsx(Button.Avatar, { user: id, guildId: "Array", size: Button.AvatarSizes.XXSMALL });
  return obj;
};