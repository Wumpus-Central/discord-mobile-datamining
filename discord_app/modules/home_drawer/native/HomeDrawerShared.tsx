// === Module 16246: HomeDrawerShared ===

// Module 16246 (HomeDrawerShared)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsxs: c3, jsx: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }, titleContainer: { flex: 1, flexDirection: "column", justifyContent: "center", gap: 2 }, rightContainer: { overflow: "hidden" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let right;
  let subtitle;
  let title;
  const obj = react2;
  const cResult = obj.c(11);
  ({ title, subtitle, right } = arg0);
  const tmp2 = closure_5();
  if (cResult[0] === tmp2.titleContainer) {
    if (cResult[1] === subtitle) {
      let tmp3;
      if (cResult[2] === title) {
        tmp3 = cResult[3];
      }
      if (cResult[4] === right) {
        let tmp5;
        if (cResult[5] === tmp2.rightContainer) {
          tmp5 = cResult[6];
        }
        if (cResult[7] === tmp2.container) {
          if (cResult[8] === tmp3) {
            let tmp9;
            if (cResult[9] === tmp5) {
              tmp9 = cResult[10];
            }
            return tmp9;
          }
        }
        const obj2 = { style: tmp2.container, children: items };
        items = [tmp3, tmp5];
        const tmp12 = _false(View, obj2);
        cResult[7] = tmp2.container;
        cResult[8] = tmp3;
        cResult[9] = tmp5;
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
      let tmp6 = null;
      if (null != right) {
        const obj3 = { style: tmp2.rightContainer, children: right };
        tmp6 = React3(View, obj3);
      }
      cResult[4] = right;
      cResult[5] = tmp2.rightContainer;
      cResult[6] = tmp6;
      tmp5 = tmp6;
    }
  }
  const obj4 = { style: tmp2.titleContainer, children: items1 };
  items1 = [title, subtitle];
  const tmp4 = _false(View, obj4);
  cResult[0] = tmp2.titleContainer;
  cResult[1] = subtitle;
  cResult[2] = title;
  cResult[3] = tmp4;
  tmp3 = tmp4;
}) : ((right) => {
  let items;
  let items1;
  let subtitle;
  let title;
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = closure_5();
  const obj2 = { style: tmp.titleContainer, children: items };
  items = [title, subtitle];
  const obj = { style: tmp.container, children: items1 };
  items1 = [_false(View, obj2), ];
  let tmp4 = null;
  if (null != right) {
    const obj3 = { style: tmp.rightContainer, children: right };
    tmp4 = React3(View, obj3);
  }
  items1[1] = tmp4;
  return _false(View, obj);
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = tmp4;