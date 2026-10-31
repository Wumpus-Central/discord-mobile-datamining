// discord_app/modules/guild_role_subscriptions/native/components/LayoutUtils.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const jsxProd = fn(21);
({ Fragment: closure_1, jsxs: c2, jsx: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export function SeparatedList(separator) {
  separator = separator.separator;
  const Children = separator.Children;
  const found = Children.toArray(separator.children).filter((item) => null != item);
  const obj = { children: null };
  const Children1 = separator.Children;
  obj.children = Children1.map(found, (arg0, arg1) => {
    const children = [arg0];
    let tmp3 = arg1 !== found.length - 1;
    if (tmp3) {
      tmp3 = separator;
    }
    children[1] = tmp3;
    return React2(framebus, { children });
  });
  return closure_3(found, obj);
}
