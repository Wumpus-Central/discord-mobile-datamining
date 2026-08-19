// === Module 9638: makeUserListPillData ===

// Module 9638 (makeUserListPillData)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  { id: id.id, text: nameFromUserDefault.getName(id), icon: null };
  const obj = { user: id, guildId: "Array", size: Button.AvatarSizes.XXSMALL };
  obj[2] = jsx(Button.Avatar, { user: id, guildId: "Array", size: Button.AvatarSizes.XXSMALL });
  return obj;
};