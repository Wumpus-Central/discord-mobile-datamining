// === Module 6641: Form/Form ===

// Module 6641 (Form/Form)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import RedesignCompat from "RedesignCompat" /* 6080 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
let context = react.createContext({ isForm: false });
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let alwaysBounceVertical;
  let children;
  let contentContainerStyle;
  let first;
  let keyboardShouldPersistTaps;
  let onLayout;
  let onScroll;
  let scrollsToTop;
  let style;
  const obj = react2;
  const cResult = obj.c(21);
  ({ style, children, keyboardShouldPersistTaps, alwaysBounceVertical, contentContainerStyle, onScroll, scrollsToTop, onLayout } = arg0);
  let str = "never";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const tmp5 = closure_6();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  context = react.useContext(RedesignCompat.RedesignCompatContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { isForm: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === style) {
    if (cResult[2] === tmp5.form) {
      let tmp9;
      let tmp11;
      if (cResult[3] === (context && tmp5.redesign)) {
        tmp9 = cResult[4];
      }
      const sum = 38 + insets.bottom;
      if (cResult[5] !== sum) {
        const obj3 = { paddingBottom: sum };
        cResult[5] = sum;
        cResult[6] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === contentContainerStyle) {
        let tmp12;
        if (cResult[8] === tmp11) {
          tmp12 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { top: 0 };
          cResult[10] = obj4;
        }
        if (cResult[11] === (undefined === alwaysBounceVertical || alwaysBounceVertical)) {
          if (cResult[12] === children) {
            if (cResult[13] === str) {
              if (cResult[14] === onLayout) {
                if (cResult[15] === onScroll) {
                  if (cResult[16] === ref) {
                    if (cResult[17] === scrollsToTop) {
                      if (cResult[18] === tmp9) {
                        let tmp15;
                        if (cResult[19] === tmp12) {
                          tmp15 = cResult[20];
                        }
                        return tmp15;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const Provider = context.Provider;
        const tmp19 = <Provider value={first}>{null}</Provider>;
        cResult[11] = undefined === alwaysBounceVertical || alwaysBounceVertical;
        cResult[12] = children;
        cResult[13] = str;
        cResult[14] = onLayout;
        cResult[15] = onScroll;
        cResult[16] = ref;
        cResult[17] = scrollsToTop;
        cResult[18] = tmp9;
        cResult[19] = tmp12;
        cResult[20] = tmp19;
        tmp15 = tmp19;
      }
      const items = [tmp11, contentContainerStyle];
      cResult[7] = contentContainerStyle;
      cResult[8] = tmp11;
      cResult[9] = items;
      tmp12 = items;
    }
  }
  const items1 = [tmp5.form, style, context && tmp5.redesign];
  cResult[1] = style;
  cResult[2] = tmp5.form;
  cResult[3] = context && tmp5.redesign;
  cResult[4] = items1;
  tmp9 = items1;
}) : ((keyboardShouldPersistTaps, ref) => {
  let children;
  let contentContainerStyle;
  let onLayout;
  let onScroll;
  let scrollsToTop;
  let style;
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout } = keyboardShouldPersistTaps);
  const tmp = closure_6();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let redesign = react.useContext(RedesignCompat.RedesignCompatContext);
  const items = [tmp.form, style, ];
  const Provider = context.Provider;
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  const items1 = [, ];
  const obj3 = { paddingBottom: 38 + insets.bottom };
  items1[0] = obj3;
  items1[1] = contentContainerStyle;
  return <Provider value={{ isForm: true }}>{null}</Provider>;
}));
const result = size.fileFinishedImporting("design/void/Form/native/Form.tsx");

export default forwardRefResult;
export const FormContext = context;