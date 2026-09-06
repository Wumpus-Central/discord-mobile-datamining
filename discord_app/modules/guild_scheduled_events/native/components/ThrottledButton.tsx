// === Module 9777: ThrottledButton ===

// Module 9777 (ThrottledButton)
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default function ThrottledButton(throttleMs) {
  let num = throttleMs.throttleMs;
  ({ onPress, onPressIn, onPressOut } = throttleMs);
  if (num === undefined) {
    num = 500;
  }
  const merged = Object.assign(throttleMs, Object.assign({ onPress: 0, onPressIn: 0, onPressOut: 0, throttleMs: 0 }));
  onPressOut = undefined;
  if (num === undefined) {
    num = 500;
  }
  closure_1 = noop.useRef(null);
  const effect = noop.useEffect(() => () => clearTimeout(ref.current), []);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onPress = (arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null === ref.current;
    }
    if (tmp2) {
      closure_0(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        ref.current = null;
      }, num);
    }
  };
  onPressOut = onPressIn;
  obj.onPressIn = (arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null === ref.current;
    }
    if (tmp2) {
      closure_0(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        ref.current = null;
      }, num);
    }
  };
  obj.onPressOut = (arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null === ref.current;
    }
    if (tmp2) {
      closure_0(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        ref.current = null;
      }, num);
    }
  };
  return jsx(components_Button_Button.Button, {});
};
export const useThrottledActionHandler = function useThrottledActionHandler() {
  closure_1 = noop.useRef(null);
  const effect = noop.useEffect(() => () => clearTimeout(ref.current), []);
  return (arg0) => {
    closure_0 = arg0;
    return (arg0) => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = null === ref.current;
      }
      if (tmp2) {
        closure_0(arg0);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          ref.current = null;
        }, num);
      }
    };
  };
};