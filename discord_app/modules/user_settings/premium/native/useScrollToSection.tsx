// === Module 12873: useScrollToSection ===

// Module 12873 (useScrollToSection)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default function useScrollToSection(arg0, arg1) {
  const React = arg0;
  closure_1 = arg1;
  closure_2 = React.useRef(false);
  const items = [arg1, arg0];
  return {
    createSectionLayoutHandler: React.useCallback((arg0) => {
      closure_0 = arg0;
      return (nativeEvent) => {
        let current = ref !== closure_1_1;
        if (!current) {
          current = closure_1_2.current;
        }
        if (!current) {
          closure_1_2.current = true;
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