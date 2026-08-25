// === Module 9285: ThrottledButton ===

// Module 9285 (ThrottledButton)
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

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
  onPressOut = num;
  dependencyMap = undefined;
  dependencyMap = React.useRef(null);
  const effect = React.useEffect(() => () => clearTimeout(ref.current), []);
  const obj = {};
  const merged1 = Object.assign(merged);
  onPressOut = onPress;
  obj.onPress = (arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null === closure_1_1.current;
    }
    if (tmp2) {
      closure_0(arg0);
      const _setTimeout = setTimeout;
      closure_1_1.current = setTimeout(() => {
        closure_1.current = null;
      }, closure_0);
    }
  };
  onPressOut = onPressIn;
  obj.onPressIn = (arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null === closure_1_1.current;
    }
    if (tmp2) {
      closure_0(arg0);
      const _setTimeout = setTimeout;
      closure_1_1.current = setTimeout(() => {
        closure_1.current = null;
      }, closure_0);
    }
  };
  obj.onPressOut = (arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null === closure_1_1.current;
    }
    if (tmp2) {
      closure_0(arg0);
      const _setTimeout = setTimeout;
      closure_1_1.current = setTimeout(() => {
        closure_1.current = null;
      }, closure_0);
    }
  };
  return jsx(onPressOut(4815).Button, {});
};
export const useThrottledActionHandler = function useThrottledActionHandler() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 500;
  }
  closure_1 = undefined;
  closure_1 = React.useRef(null);
  const effect = React.useEffect(() => () => clearTimeout(ref.current), []);
  return (arg0) => {
    closure_0 = arg0;
    return (arg0) => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = null === closure_1_1.current;
      }
      if (tmp2) {
        closure_0(arg0);
        const _setTimeout = setTimeout;
        closure_1_1.current = setTimeout(() => {
          closure_1.current = null;
        }, closure_0);
      }
    };
  };
};