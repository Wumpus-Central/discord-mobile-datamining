// === Module 12487: useScrollToSection ===

// Module 12487 (useScrollToSection)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default function useScrollToSection(arg0, arg1) {
  const React = arg0;
  let closure_1 = arg1;
  let closure_2 = React.useRef(false);
  const items = [arg1, arg0];
  return {
    createSectionLayoutHandler: React.useCallback((arg0) => {
      let noop = arg0;
      return (nativeEvent) => {
        let current = ref !== outer1_1;
        if (!current) {
          current = outer1_2.current;
        }
        if (!current) {
          outer1_2.current = true;
          const current2 = ref.current;
          if (current2 != null) {
            const obj = { y: null, animated: true };
            obj[0] = nativeEvent.nativeEvent.layout.y;
            current2.scrollTo(obj);
          }
        }
      };
    }, items)
  };
};