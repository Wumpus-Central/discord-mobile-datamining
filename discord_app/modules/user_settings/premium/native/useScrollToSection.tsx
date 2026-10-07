// === Module 13248: useScrollToSection ===

// Module 13248 (useScrollToSection)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const cResult = c.c(5);
  closure_2 = noop.useRef(false);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] !== tmp2) {
      const obj2 = { createSectionLayoutHandler: tmp2 };
      cResult[3] = tmp2;
      cResult[4] = obj2;
      let tmp3 = obj2;
    } else {
      tmp3 = cResult[4];
    }
    return tmp3;
  }
  const fn = function c(arg0) {
    return (nativeEvent) => {
      let current = ref !== closure_1;
      if (!current) {
        current = ref2.current;
      }
      if (!current) {
        ref2.current = true;
        const current2 = ref.current;
        if (current2 != null) {
          const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
          current2.scrollTo(obj);
        }
      }
    };
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = noop.useRef(false);
  let obj = { createSectionLayoutHandler: null };
  const items = [arg1, arg0];
  obj.createSectionLayoutHandler = noop.useCallback((arg0) => (nativeEvent) => {
    let current = ref !== closure_1;
    if (!current) {
      current = ref2.current;
    }
    if (!current) {
      ref2.current = true;
      const current2 = ref.current;
      if (current2 != null) {
        const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
        current2.scrollTo(obj);
      }
    }
  }, items);
  return obj;
});