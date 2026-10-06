// === Module 14742: FamilyCenterLinkRow ===

// Module 14742 (FamilyCenterLinkRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14743 */;
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 14744 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actions;
  let items;
  let otherUser;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(9);
  ({ otherUser, actions } = arg0);
  const tmp3 = closure_7();
  if (cResult[0] !== otherUser) {
    const obj2 = { otherUser, status: UserLinkStatus.PENDING };
    const tmp8 = hasOwnProperty(FamilyCenterRequestorDetailsDefault, obj2);
    cResult[0] = otherUser;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === actions) {
    let tmp9;
    if (cResult[3] === tmp3.actionContainer) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === otherUser.id) {
      if (cResult[6] === tmp4) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { userId: otherUser.id, children: items };
    items = [tmp4, tmp9];
    const tmp14 = metroRequire(FamilyCenterLinkWrapperDefault, obj3);
    cResult[5] = otherUser.id;
    cResult[6] = tmp4;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj4 = { style: tmp3.actionContainer, children: actions };
  const tmp10 = hasOwnProperty(View, obj4);
  cResult[2] = actions;
  cResult[3] = tmp3.actionContainer;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((otherUser) => {
  let items;
  otherUser = otherUser.otherUser;
  const actions = otherUser.actions;
  const obj = { userId: otherUser.id, children: items };
  items = [, ];
  const obj2 = { otherUser, status: UserLinkStatus.PENDING };
  const tmp = closure_7();
  const tmp2 = FamilyCenterLinkWrapperDefault;
  items[0] = hasOwnProperty(FamilyCenterRequestorDetailsDefault, obj2);
  const obj3 = { style: tmp.actionContainer, children: actions };
  items[1] = hasOwnProperty(View, obj3);
  return metroRequire(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default tmp4;