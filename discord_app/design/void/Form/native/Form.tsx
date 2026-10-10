// discord_app/design/void/Form/native/Form.tsx
import c from "../../../../../_runtime/00576_c.js";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
let context = noop.createContext({ isForm: false });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/Form.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Form(arg0) {
      const cResult = c.c(21);
      ({
        style,
        children,
        keyboardShouldPersistTaps,
        alwaysBounceVertical,
        contentContainerStyle,
        onScroll,
        scrollsToTop,
        onLayout,
        ref,
      } = arg0);
      let str = "never";
      if (undefined !== keyboardShouldPersistTaps) {
        str = keyboardShouldPersistTaps;
      }
      const tmp5 = closure_6();
      context = noop.useContext(RedesignCompat.RedesignCompatContext);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isForm: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      let redesign = context;
      if (context) {
        redesign = tmp5.redesign;
      }
      if (cResult[1] === style) {
        if (cResult[2] === tmp5.form) {
          if (cResult[3] === redesign) {
            let tmp8 = cResult[4];
          }
          const sum = 38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom;
          if (cResult[5] !== sum) {
            const obj3 = { paddingBottom: sum };
            cResult[5] = sum;
            cResult[6] = obj3;
            let tmp10 = obj3;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] === contentContainerStyle) {
            if (cResult[8] === tmp10) {
              let tmp11 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { top: 0 };
              cResult[10] = obj4;
              let tmp12 = obj4;
            } else {
              tmp12 = cResult[10];
            }
            if (cResult[11] === tmp4) {
              if (cResult[12] === children) {
                if (cResult[13] === str) {
                  if (cResult[14] === onLayout) {
                    if (cResult[15] === onScroll) {
                      if (cResult[16] === ref) {
                        if (cResult[17] === scrollsToTop) {
                          if (cResult[18] === tmp8) {
                            if (cResult[19] === tmp11) {
                              let tmp13 = cResult[20];
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
            const obj5 = { value: first, children: null };
            const obj6 = {
              ref,
              onLayout,
              scrollsToTop,
              style: tmp8,
              contentContainerStyle: tmp11,
              contentInset: tmp12,
              automaticallyAdjustContentInsets: false,
              keyboardShouldPersistTaps: str,
              alwaysBounceVertical: tmp4,
              onScroll,
              children,
            };
            obj5.children = (
              <ScrollView
                ref={ref}
                onLayout={onLayout}
                scrollsToTop={scrollsToTop}
                style={tmp8}
                contentContainerStyle={tmp11}
                contentInset={tmp12}
                automaticallyAdjustContentInsets={false}
                keyboardShouldPersistTaps={str}
                alwaysBounceVertical={tmp4}
                onScroll={onScroll}
              >
                {children}
              </ScrollView>
            );
            const tmp17 = <context.Provider value={first}>{null}</context.Provider>;
            cResult[11] = tmp4;
            cResult[12] = children;
            cResult[13] = str;
            cResult[14] = onLayout;
            cResult[15] = onScroll;
            cResult[16] = ref;
            cResult[17] = scrollsToTop;
            cResult[18] = tmp8;
            cResult[19] = tmp11;
            cResult[20] = tmp17;
            tmp13 = tmp17;
          }
          const items = [tmp10, contentContainerStyle];
          cResult[7] = contentContainerStyle;
          cResult[8] = tmp10;
          cResult[9] = items;
          tmp11 = items;
        }
      }
      const items1 = [tmp5.form, style, redesign];
      cResult[1] = style;
      cResult[2] = tmp5.form;
      cResult[3] = redesign;
      cResult[4] = items1;
      tmp8 = items1;
    }
  : function Form(keyboardShouldPersistTaps) {
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
      const obj = { value: { isForm: true }, children: null };
      const obj2 = {
        ref,
        onLayout,
        scrollsToTop,
        style: null,
        contentContainerStyle: null,
        contentInset: null,
        automaticallyAdjustContentInsets: false,
        keyboardShouldPersistTaps: null,
        alwaysBounceVertical: null,
        onScroll: null,
        children: null,
      };
      const items = [tmp.form, style];
      if (redesign) {
        redesign = tmp.redesign;
      }
      items[2] = redesign;
      obj2.style = items;
      const items1 = [
        { paddingBottom: 38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom },
        contentContainerStyle,
      ];
      obj2.contentContainerStyle = items1;
      obj2.contentInset = { top: 0 };
      obj2.keyboardShouldPersistTaps = str;
      obj2.alwaysBounceVertical = flag;
      obj2.onScroll = onScroll;
      obj2.children = children;
      obj.children = (
        <ScrollView
          ref={ref}
          onLayout={onLayout}
          scrollsToTop={scrollsToTop}
          style={null}
          contentContainerStyle={null}
          contentInset={null}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps={null}
          alwaysBounceVertical={null}
          onScroll={null}
        >
          {null}
        </ScrollView>
      );
      return <context.Provider value={{ isForm: true }}>{null}</context.Provider>;
    };
export const FormContext = context;
