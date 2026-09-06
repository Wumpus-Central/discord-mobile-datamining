// discord_app/modules/parent_tools/native/FamilyCenterLinkRow.tsx
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper.tsx";
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const UserLinkStatus = fn(7538).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id, children: null };
  const tmp = closure_6();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [React4(FamilyCenterRequestorDetailsDefault, obj)];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = React4(View, obj);
  obj.children = items;
  return hasOwnProperty(FamilyCenterLinkWrapperDefault, obj);
}
