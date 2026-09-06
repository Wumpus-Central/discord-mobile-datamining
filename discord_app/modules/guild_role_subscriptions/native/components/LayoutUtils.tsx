// === Module 10346: LayoutUtils ===

// Module 10346 (LayoutUtils)
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = function GappedList(gap) {
  let num = gap.gap;
  if (num === undefined) {
    num = 4;
  }
  const renderGap = gap.renderGap;
  let found;
  let Children = found.Children;
  found = Children.toArray(gap.children).filter((item) => null != item);
  let obj = { children: null };
  Children = found.Children;
  obj.children = Children.map(found, (arg0, arg1) => {
    const items = [arg0, ];
    if (arg1 === found.length - 1) {
      let obj = { children: null };
      items[1] = tmp3;
      obj.children = items;
      return tmp(tmp2, obj);
    } else if (null != renderGap) {
      let tmp4Result = tmp4();
    } else {
      obj = { size: num };
      tmp4Result = React3(native.Spacer, obj);
    }
  });
  return closure_3(closure_4, obj);
};