// === Module 9953: LayoutUtils ===

// Module 9953 (LayoutUtils)
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let found;
  let gap;
  let num;
  let renderGap;
  let tmp3;
  let obj = renderGap(num[3]);
  const cResult = obj.c(7);
  ({ children, gap, renderGap } = arg0);
  num = 4;
  if (undefined !== gap) {
    num = gap;
  }
  if (cResult[0] === children) {
    if (cResult[1] === num) {
      let tmp2;
      let tmp6;
      if (cResult[2] === renderGap) {
        tmp2 = cResult[3];
      }
      if (cResult[5] !== tmp2) {
        const obj2 = { children: tmp2 };
        const tmp9 = closure_3(closure_4, obj2);
        cResult[5] = tmp2;
        cResult[6] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[6];
      }
      return tmp6;
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _(arg0) {
      return null != arg0;
    };
    cResult[4] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[4];
  }
  const Children = found.Children;
  const toArrayResult = Children.toArray(children);
  found = toArrayResult.filter(tmp3);
  const Children1 = found.Children;
  const mapped = Children1.map(found, (arg0, arg1) => {
    const children = [arg0, ];
    let tmp3 = arg1 !== found.length - 1;
    if (tmp3) {
      let tmp4Result;
      if (null != renderGap) {
        tmp4Result = tmp4();
      } else {
        const obj = { size: num };
        tmp4Result = _false(native.Spacer, obj);
      }
      tmp3 = tmp4Result;
    }
    children[1] = tmp3;
    return hasOwnProperty(React3, { children });
  });
  cResult[0] = children;
  cResult[1] = num;
  cResult[2] = renderGap;
  cResult[3] = mapped;
  tmp2 = mapped;
}) : ((gap) => {
  let Children1;
  let num = gap.gap;
  let children = gap.children;
  if (num === undefined) {
    num = 4;
  }
  const renderGap = gap.renderGap;
  let found;
  const Children = found.Children;
  const toArrayResult = Children.toArray(children);
  found = toArrayResult.filter((item) => null != item);
  let obj = {
    children: Children1.map(found, (arg0, arg1) => {
      const children = [arg0, ];
      let tmp3 = arg1 !== found.length - 1;
      if (tmp3) {
        let tmp4Result;
        if (null != renderGap) {
          tmp4Result = tmp4();
        } else {
          const obj = { size: num };
          tmp4Result = _false(native.Spacer, obj);
        }
        tmp3 = tmp4Result;
      }
      children[1] = tmp3;
      return hasOwnProperty(React3, { children });
    })
  };
  Children1 = found.Children;
  return closure_3(closure_4, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = tmp3;