// discord_app/modules/home_drawer/native/HomeDrawerShared.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: c3, jsx: closure_4 } = jsxProd);
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({
  container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 },
  titleContainer: { flex: 1, flexDirection: "column", justifyContent: "center", gap: 2 },
  rightContainer: { overflow: "hidden" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = ReactCompilerGating.isReactCompilerEnabled()
  ? function HomeDrawerSharedItem(arg0) {
      const cResult = c.c(11);
      ({ title, subtitle, right } = arg0);
      const tmp2 = closure_5();
      if (cResult[0] === tmp2.titleContainer) {
        if (cResult[1] === subtitle) {
          if (cResult[2] === title) {
            let tmp3 = cResult[3];
          }
          if (cResult[4] === right) {
            if (cResult[5] === tmp2.rightContainer) {
              let tmp5 = cResult[6];
            }
            if (cResult[7] === tmp2.container) {
              if (cResult[8] === tmp3) {
                if (cResult[9] === tmp5) {
                  let tmp9 = cResult[10];
                }
                return tmp9;
              }
            }
            const obj2 = { style: tmp2.container, children: null };
            const items = [tmp3, tmp5];
            obj2.children = items;
            const tmp12 = React3(View, obj2);
            cResult[7] = tmp2.container;
            cResult[8] = tmp3;
            cResult[9] = tmp5;
            cResult[10] = tmp12;
            tmp9 = tmp12;
          }
          let tmp6 = null;
          if (null != right) {
            const obj3 = { style: tmp2.rightContainer, children: right };
            tmp6 = React4(View, obj3);
          }
          cResult[4] = right;
          cResult[5] = tmp2.rightContainer;
          cResult[6] = tmp6;
          tmp5 = tmp6;
        }
      }
      const obj4 = { style: tmp2.titleContainer, children: null };
      const items1 = [title, subtitle];
      obj4.children = items1;
      const tmp4 = React3(View, obj4);
      cResult[0] = tmp2.titleContainer;
      cResult[1] = subtitle;
      cResult[2] = title;
      cResult[3] = tmp4;
      tmp3 = tmp4;
    }
  : function HomeDrawerSharedItem(right) {
      right = right.right;
      ({ title, subtitle } = right);
      const tmp = closure_5();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.titleContainer, children: null };
      const items = [title, subtitle];
      obj2.children = items;
      const items1 = [React3(View, obj2)];
      let tmp4 = null;
      if (null != right) {
        const obj3 = { style: tmp.rightContainer, children: right };
        tmp4 = React4(View, obj3);
      }
      items1[1] = tmp4;
      obj.children = items1;
      return React3(View, obj);
    };
