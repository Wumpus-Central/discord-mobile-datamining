// === Module 12402: ThrottledButton ===

// Module 12402 (ThrottledButton)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default function ThrottledButton(throttleMs) {
  let num = throttleMs.throttleMs;
  ({ onPress, onPressIn, onPressOut } = throttleMs);
  if (num === undefined) {
    num = 500;
  }
  const merged = Object.assign(throttleMs, Object.create(null));
  onPressOut = undefined;
  if (num === undefined) {
    num = 500;
  }
  dependencyMap = React.useRef(null);
  const effect = React.useEffect(() => () => clearTimeout(ref.current), []);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onPress = (arg0) => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = null === closure_1_1.current;
    }
    if (tmp2) {
      callback(arg0);
      const _setTimeout = setTimeout;
      closure_1_1.current = setTimeout(() => {
        closure_1.current = null;
      }, callback);
    }
  };
  onPressOut = onPressIn;
  obj.onPressIn = (arg0) => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = null === closure_1_1.current;
    }
    if (tmp2) {
      callback(arg0);
      const _setTimeout = setTimeout;
      closure_1_1.current = setTimeout(() => {
        closure_1.current = null;
      }, callback);
    }
  };
  obj.onPressOut = (arg0) => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = null === closure_1_1.current;
    }
    if (tmp2) {
      callback(arg0);
      const _setTimeout = setTimeout;
      closure_1_1.current = setTimeout(() => {
        closure_1.current = null;
      }, callback);
    }
  };
  return jsx(onPressOut(4745).Button, {});
};
export const useThrottledActionHandler = function useThrottledActionHandler() {
  closure_1 = React.useRef(null);
  const effect = React.useEffect(() => () => clearTimeout(ref.current), []);
  return (arg0) => {
    closure_0 = arg0;
    return (arg0) => {
      let tmp2 = null != callback;
      if (tmp2) {
        tmp2 = null === closure_1_1.current;
      }
      if (tmp2) {
        callback(arg0);
        const _setTimeout = setTimeout;
        closure_1_1.current = setTimeout(() => {
          closure_1.current = null;
        }, callback);
      }
    };
  };
};