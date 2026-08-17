// discord_app/modules/parent_tools/native/FamilyCenterLinkRow.tsx
import noopAll from "noop" /* 19 */;
import FamilyCenterLinkRowWrapperDefault from "FamilyCenterLinkRowWrapper" /* 14276 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14277 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserLinkStatus } from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id, children: null };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(FamilyCenterRequestorDetailsDefault, obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(FamilyCenterLinkRowWrapperDefault, obj);
};