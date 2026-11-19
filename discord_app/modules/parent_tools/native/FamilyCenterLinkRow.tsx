// discord_app/modules/parent_tools/native/FamilyCenterLinkRow.tsx
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper.tsx";
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4792);
let closure_5 = createStyles.createStyles({
  actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(otherUser) {
  otherUser = otherUser.otherUser;
  ({ status, actions } = otherUser);
  const obj = { userId: otherUser.id, children: null };
  const tmp = closure_5();
  items = [
    React3(FamilyCenterRequestorDetailsDefault, { otherUser, status }),
    React3(View, { style: tmp.actionContainer, children: actions }),
  ];
  obj.children = items;
  return React4(FamilyCenterLinkWrapperDefault, obj);
}
