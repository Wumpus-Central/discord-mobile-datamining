// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: rect };
obj2 = {
  flex: 1,
  paddingHorizontal: 0,
  paddingVertical: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "column",
  height: "100%",
};
createStyles = createStyles.createStyles;
rect = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingHorizontal: 16,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_9 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let action;
        let children;
        let closure_0;
        let first;
        let first1;
        let items;
        let tmp7;
        let obj = react2;
        const cResult = obj.c(23);
        ({ children, action } = arg0);
        const tmp2 = closure_9();
        [first, closure_0] = react.useState(32);
        const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function f(nativeEvent) {
            closure_0(nativeEvent.nativeEvent.layout.height);
          };
          cResult[0] = fn;
          first1 = fn;
        } else {
          first1 = cResult[0];
        }
        const sum = first + insets.bottom;
        if (cResult[1] !== sum) {
          const obj2 = { marginBottom: sum };
          cResult[1] = sum;
          cResult[2] = obj2;
          tmp7 = obj2;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === tmp2.flex) {
          let tmp8;
          if (cResult[4] === tmp7) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === children) {
            if (cResult[7] === ref) {
              if (cResult[8] === tmp2.scroller) {
                let tmp10;
                let tmp14;
                if (cResult[9] === tmp8) {
                  tmp10 = cResult[10];
                }
                if (cResult[11] !== insets.bottom) {
                  const obj3 = { paddingBottom: insets.bottom };
                  cResult[11] = insets.bottom;
                  cResult[12] = obj3;
                  tmp14 = obj3;
                } else {
                  tmp14 = cResult[12];
                }
                if (cResult[13] === tmp2.buttonContainer) {
                  let tmp15;
                  if (cResult[14] === tmp14) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === action) {
                    let tmp16;
                    if (cResult[17] === tmp15) {
                      tmp16 = cResult[18];
                    }
                    if (cResult[19] === tmp2.container) {
                      if (cResult[20] === tmp10) {
                        let tmp20;
                        if (cResult[21] === tmp16) {
                          tmp20 = cResult[22];
                        }
                        return tmp20;
                      }
                    }
                    const obj4 = { style: tmp2.container, children: items };
                    items = [tmp10, tmp16];
                    const tmp23 = metroImportAll(hasOwnProperty, obj4);
                    cResult[19] = tmp2.container;
                    cResult[20] = tmp10;
                    cResult[21] = tmp16;
                    cResult[22] = tmp23;
                    tmp20 = tmp23;
                  }
                  const obj5 = { style: tmp15, onLayout: first1, children: action };
                  const tmp19 = metroImportDefault(hasOwnProperty, obj5);
                  cResult[16] = action;
                  cResult[17] = tmp15;
                  cResult[18] = tmp19;
                  tmp16 = tmp19;
                }
                const items1 = [tmp2.buttonContainer, tmp14];
                cResult[13] = tmp2.buttonContainer;
                cResult[14] = tmp14;
                cResult[15] = items1;
                tmp15 = items1;
              }
            }
          }
          const obj6 = {
            ref,
            automaticallyAdjustContentInsets: false,
            keyboardShouldPersistTaps: "handled",
            style: tmp8,
            contentContainerStyle: tmp2.scroller,
            children,
          };
          const tmp13 = metroImportDefault(metroRequire, obj6);
          cResult[6] = children;
          cResult[7] = ref;
          cResult[8] = tmp2.scroller;
          cResult[9] = tmp8;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
        const items2 = [tmp2.flex, tmp7];
        cResult[3] = tmp2.flex;
        cResult[4] = tmp7;
        cResult[5] = items2;
        tmp8 = items2;
      }
    : (arg0, ref) => {
        let action;
        let children;
        let closure_0;
        let first;
        let items;
        let items1;
        let items2;
        closure_0 = undefined;
        ({ children, action } = arg0);
        let tmp = closure_9();
        [first, closure_0] = react.useState(32);
        const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
        let obj = { style: tmp.container, children: items1 };
        let obj2 = {
          ref,
          automaticallyAdjustContentInsets: false,
          keyboardShouldPersistTaps: "handled",
          style: items,
          contentContainerStyle: tmp.scroller,
          children,
        };
        items = [tmp.flex, { marginBottom: first + insets.bottom }];
        const callback = react.useCallback((nativeEvent) => {
          closure_0(nativeEvent.nativeEvent.layout.height);
        }, []);
        items1 = [metroImportDefault(metroRequire, obj2)];
        let obj3 = { style: items2, onLayout: callback, children: action };
        items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
        items1[1] = metroImportDefault(hasOwnProperty, obj3);
        return metroImportAll(hasOwnProperty, obj);
      },
);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx",
);

export default forwardRefResult;
