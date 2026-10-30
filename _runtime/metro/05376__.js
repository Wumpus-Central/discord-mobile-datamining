// === Module 5376: ? ===

// Module 5376
import noop from "module_19" /* 19 */;

const use = noop.use;
const context = noop.createContext(null);

export const InterceptingDetectorMode = { DEFAULT: 0, [0]: "DEFAULT", ANIMATED: 1, [1]: "ANIMATED", REANIMATED: 2, [2]: "REANIMATED" };
export const InterceptingDetectorContext = context;
export function useInterceptingDetectorContext() {
  return use(context);
}