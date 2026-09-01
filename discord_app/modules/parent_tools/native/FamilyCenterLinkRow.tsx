// discord_app/modules/parent_tools/native/FamilyCenterLinkRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import FamilyCenterLinkRowWrapperDefault from "FamilyCenterLinkWrapper.tsx";
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserLinkStatus } from "../FamilyCenterConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({
  actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" },
});
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id, children: null };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(FamilyCenterRequestorDetailsDefault, obj)];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(FamilyCenterLinkRowWrapperDefault, obj);
}
