// === Module 7187: Form/Form ===

// Module 7187 (Form/Form)
import c from "c" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5554 */;
import RedesignCompat from "RedesignCompat" /* 6937 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4945);
let closure_6 = createStyles.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = noop.createContext({ isForm: false });
const value = { isForm: true };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/Form.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Form(arg0) {
  const cResult = c.c(20);
  ({ style, children, keyboardShouldPersistTaps, alwaysBounceVertical, contentContainerStyle, onScroll, scrollsToTop, onLayout, ref } = arg0);
  let str = "never";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const tmp5 = closure_6();
  const tmp6 = noop.useContext(RedesignCompat.RedesignCompatContext) && tmp5.redesign;
  if (cResult[0] === style) {
    if (cResult[1] === tmp5.form) {
      if (cResult[2] === tmp6) {
        let tmp7 = cResult[3];
      }
      const sum = 38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom;
      if (cResult[4] !== sum) {
        const obj2 = { paddingBottom: sum };
        cResult[4] = sum;
        cResult[5] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === contentContainerStyle) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { top: 0 };
          cResult[9] = obj3;
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === tmp4) {
          if (cResult[11] === children) {
            if (cResult[12] === str) {
              if (cResult[13] === onLayout) {
                if (cResult[14] === onScroll) {
                  if (cResult[15] === ref) {
                    if (cResult[16] === scrollsToTop) {
                      if (cResult[17] === tmp7) {
                        if (cResult[18] === tmp10) {
                          let tmp13 = cResult[19];
                        }
                        return tmp13;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj4 = { value, children: null };
        const obj5 = { ref, onLayout, scrollsToTop, style: tmp7, contentContainerStyle: tmp10, contentInset: tmp12, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: str, alwaysBounceVertical: tmp4, onScroll, children };
        obj4.children = <ScrollView ref={ref} onLayout={onLayout} scrollsToTop={scrollsToTop} style={tmp7} contentContainerStyle={tmp10} contentInset={tmp12} automaticallyAdjustContentInsets={false} keyboardShouldPersistTaps={str} alwaysBounceVertical={tmp4} onScroll={onScroll}>{children}</ScrollView>;
        const tmp18 = <context.Provider value={value}>{null}</context.Provider>;
        cResult[10] = tmp4;
        cResult[11] = children;
        cResult[12] = str;
        cResult[13] = onLayout;
        cResult[14] = onScroll;
        cResult[15] = ref;
        cResult[16] = scrollsToTop;
        cResult[17] = tmp7;
        cResult[18] = tmp10;
        cResult[19] = tmp18;
        tmp13 = tmp18;
      }
      const items = [tmp9, contentContainerStyle];
      cResult[6] = contentContainerStyle;
      cResult[7] = tmp9;
      cResult[8] = items;
      tmp10 = items;
    }
  }
  const items1 = [tmp5.form, style, tmp6];
  cResult[0] = style;
  cResult[1] = tmp5.form;
  cResult[2] = tmp6;
  cResult[3] = items1;
  tmp7 = items1;
}) : (function Form(keyboardShouldPersistTaps) {
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout, ref } = keyboardShouldPersistTaps);
  const tmp = closure_6();
  let redesign = noop.useContext(RedesignCompat.RedesignCompatContext);
  const obj = { value, children: null };
  const obj2 = { ref, onLayout, scrollsToTop, style: null, contentContainerStyle: null, contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: null, alwaysBounceVertical: null, onScroll: null, children: null };
  const items = [tmp.form, style, ];
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  obj2.style = items;
  const items1 = [{ paddingBottom: 38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom }, contentContainerStyle];
  obj2.contentContainerStyle = items1;
  obj2.contentInset = { top: 0 };
  obj2.keyboardShouldPersistTaps = str;
  obj2.alwaysBounceVertical = flag;
  obj2.onScroll = onScroll;
  obj2.children = children;
  obj.children = <ScrollView ref={ref} onLayout={onLayout} scrollsToTop={scrollsToTop} style={null} contentContainerStyle={null} contentInset={null} automaticallyAdjustContentInsets={false} keyboardShouldPersistTaps={null} alwaysBounceVertical={null} onScroll={null}>{null}</ScrollView>;
  return <context.Provider value={value}>{null}</context.Provider>;
});
export const FormContext = context;