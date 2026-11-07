// discord_app/design/components/Navigator/native/NavigatorGradientContext.native.tsx
import _mod7071 from "../../../../../_runtime/metro/07071__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorGradientContext.native.tsx");

export const NavigatorGradientContext = context;
export function NavigatorGradientProvider(children) {
  const color = children.color;
  const headerHeight = _mod7071.useHeaderHeight();
  items = [color, headerHeight];
  return (
    <context.Provider value={noop.useMemo(() => ({ color, headerHeight }), items)}>
      {children.children}
    </context.Provider>
  );
}
