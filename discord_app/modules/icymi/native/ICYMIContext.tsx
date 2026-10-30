// discord_app/modules/icymi/native/ICYMIContext.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import size from "../../../../_runtime/metro/00002__.js";

({ useMemo: c2, createContext } = noop);
const jsx = jsxProd.jsx;
const context = createContext({ width: 0, margin: 0, inset: 0 });
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
}
export function ICYMIContextProvider(children) {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  const sum = PX_16 + 38;
  c2 = sum;
  const items = [bound, PX_16, sum];
  return (
    <context.Provider value={React2(() => ({ width: bound, margin: PX_16, inset }), items)}>
      {children.children}
    </context.Provider>
  );
}
