// discord_app/modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("nameFromUser").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: null, icon: null };
  obj[1] = require("../../../../../utils/UserUtils.tsx").getName(id);
  obj = { user: id, guildId: "Array", size: 8 };
  obj[2] = require("../../../../../design/void/native.tsx") /* Button */.AvatarSizes.XXSMALL;
  obj[2] = jsx(require("../../../../../design/void/native.tsx") /* Button */.Avatar, { user: id, guildId: "Array", size: 8 });
  return obj;
};