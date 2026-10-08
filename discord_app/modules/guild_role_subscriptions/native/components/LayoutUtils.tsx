// discord_app/modules/guild_role_subscriptions/native/components/LayoutUtils.tsx
import native from "../../../../design/void/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = ReactCompilerGating.isReactCompilerEnabled()
  ? function GappedList(arg0) {
      const cResult = renderGap(num2[3]).c(7);
      ({ children, gap, renderGap } = arg0);
      let num = 4;
      num2 = 4;
      if (undefined !== gap) {
        num2 = gap;
      }
      if (cResult[0] === children) {
        if (cResult[1] === num2) {
          if (cResult[2] === renderGap) {
            if (cResult[5] !== cResult[3]) {
              let obj2 = { children: tmp2 };
              const tmp9 = closure_3(closure_4, obj2);
              cResult[5] = tmp2;
              cResult[6] = tmp9;
              let tmp6 = tmp9;
            } else {
              tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _(arg0) {
          return null != arg0;
        };
        cResult[num] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[4];
      }
      const Children = found.Children;
      let obj = renderGap(num2[3]);
      found = Children.toArray(children).filter(tmp3);
      const Children1 = found.Children;
      const mapped = Children1.map(found, (arg0, arg1) => {
        const items = [arg0];
        if (arg1 === found.length - 1) {
          const obj2 = { children: null };
          items[1] = tmp3;
          obj2.children = items;
          return tmp(tmp2, obj2);
        } else if (null != renderGap) {
          let tmp4Result = tmp4();
        } else {
          const obj = { size: num2 };
          tmp4Result = React3(native.Spacer, obj);
        }
      });
      cResult[0] = children;
      cResult[1] = num2;
      cResult[2] = renderGap;
      num = 3;
      cResult[3] = mapped;
      const toArrayResult = Children.toArray(children);
    }
  : function GappedList(gap) {
      let num = gap.gap;
      if (num === undefined) {
        num = 4;
      }
      const renderGap = gap.renderGap;
      let found;
      const Children = found.Children;
      found = Children.toArray(gap.children).filter((item) => null != item);
      let obj = { children: null };
      const Children1 = found.Children;
      obj.children = Children1.map(found, (arg0, arg1) => {
        const items = [arg0];
        if (arg1 === found.length - 1) {
          const obj2 = { children: null };
          items[1] = tmp3;
          obj2.children = items;
          return tmp(tmp2, obj2);
        } else if (null != renderGap) {
          let tmp4Result = tmp4();
        } else {
          const obj = { size: num };
          tmp4Result = React3(native.Spacer, obj);
        }
      });
      return closure_3(closure_4, obj);
    };
