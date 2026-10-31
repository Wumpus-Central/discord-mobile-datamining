// _runtime/metro/05381__.js
import noop from "00019__.js";

const use = noop.use;
const context = noop.createContext(null);

export const InterceptingDetectorMode = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  ANIMATED: 1,
  [1]: "ANIMATED",
  REANIMATED: 2,
  [2]: "REANIMATED",
};
export const InterceptingDetectorContext = context;
export function useInterceptingDetectorContext() {
  return use(context);
}
