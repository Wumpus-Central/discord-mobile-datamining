// === Module 14742: FamilyCenterLinkRow ===

// Module 14742 (FamilyCenterLinkRow)
import c from "c" /* 576 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14743 */;
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 14744 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserLinkStatus = fn(7062).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ otherUser, actions } = arg0);
  const tmp3 = closure_7();
  if (cResult[0] !== otherUser) {
    const obj2 = { otherUser, status: UserLinkStatus.PENDING };
    const tmp8 = hasOwnProperty(FamilyCenterRequestorDetailsDefault, obj2);
    cResult[0] = otherUser;
    cResult[1] = tmp8;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === actions) {
    if (cResult[3] === tmp3.actionContainer) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === otherUser.id) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { userId: otherUser.id, children: null };
    const items = [tmp4, tmp9];
    obj3.children = items;
    const tmp14 = timestampProducer(FamilyCenterLinkWrapperDefault, obj3);
    cResult[5] = otherUser.id;
    cResult[6] = tmp4;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = hasOwnProperty(View, { style: tmp3.actionContainer, children: actions });
  cResult[2] = actions;
  cResult[3] = tmp3.actionContainer;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj4 = { style: tmp3.actionContainer, children: actions };
}) : ((children) => {
  const otherUser = children.otherUser;
  const obj = { userId: otherUser.id, children: null };
  const tmp = closure_7();
  const items = [hasOwnProperty(FamilyCenterRequestorDetailsDefault, { otherUser, status: UserLinkStatus.PENDING }), hasOwnProperty(View, { style: tmp.actionContainer, children: children.actions })];
  obj.children = items;
  return timestampProducer(FamilyCenterLinkWrapperDefault, obj);
});