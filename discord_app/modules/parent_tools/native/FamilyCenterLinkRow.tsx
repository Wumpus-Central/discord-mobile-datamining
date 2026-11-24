// === Module 16256: FamilyCenterLinkRow ===

// Module 16256 (FamilyCenterLinkRow)
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 16257 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 16258 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4917);
let closure_5 = createStyles.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(otherUser) {
  otherUser = otherUser.otherUser;
  ({ status, actions } = otherUser);
  const obj = { userId: otherUser.id, children: null };
  const tmp = closure_5();
  items = [React3(FamilyCenterRequestorDetailsDefault, { otherUser, status }), React3(View, { style: tmp.actionContainer, children: actions })];
  obj.children = items;
  return React4(FamilyCenterLinkWrapperDefault, obj);
};