// === Module 9152: GappedList ===

// Module 9152 (GappedList)
import closure_2 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = function GappedList(gap) {
  let num = gap.gap;
  if (num === undefined) {
    num = 4;
  }
  const renderGap = gap.renderGap;
  let found;
  let Children = found.Children;
  found = Children.toArray(gap.children).filter((arg0) => null != arg0);
  const toArrayResult = Children.toArray(gap.children);
  Children = found.Children;
  return callback(closure_4, {
    children: Children.map(found, (arg0, arg1) => {
      const items = [arg0, ];
      if (arg1 === found.length - 1) {
        let obj = { children: null };
        items[1] = tmp3;
        obj[0] = items;
        return tmp(tmp2, obj);
      } else if (null != renderGap) {
        let tmp4Result = tmp4();
      } else {
        obj = { size: null };
        obj[0] = num;
        tmp4Result = closure_1_3(num(renderGap[2]).Spacer, obj);
      }
    })
  });
};