// === Module 8514: EditGuildEventStepContainer ===

// Module 8514 (EditGuildEventStepContainer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6656 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" }, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.buttonContainer = rect;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditGuildEventsStepContainer(arg0) {
  const cResult = c.c(23);
  ({ children, action, ref } = arg0);
  const tmp2 = closure_9();
  const tmp3 = _slicedToArray(noop.useState(32), 2);
  closure_0 = tmp3[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      closure_0(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const sum = tmp3[0] + insets.bottom;
  if (cResult[1] !== sum) {
    const obj2 = { marginBottom: sum };
    cResult[1] = sum;
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp2.flex) {
    if (cResult[4] === tmp6) {
      let tmp7 = cResult[5];
    }
    if (cResult[6] === children) {
      if (cResult[7] === ref) {
        if (cResult[8] === tmp2.scroller) {
          if (cResult[9] === tmp7) {
            let tmp8 = cResult[10];
          }
          if (cResult[11] !== insets.bottom) {
            const obj3 = { paddingBottom: insets.bottom };
            cResult[11] = insets.bottom;
            cResult[12] = obj3;
            let tmp12 = obj3;
          } else {
            tmp12 = cResult[12];
          }
          if (cResult[13] === tmp2.buttonContainer) {
            if (cResult[14] === tmp12) {
              let tmp13 = cResult[15];
            }
            if (cResult[16] === action) {
              if (cResult[17] === tmp13) {
                let tmp14 = cResult[18];
              }
              if (cResult[19] === tmp2.container) {
                if (cResult[20] === tmp8) {
                  if (cResult[21] === tmp14) {
                    let tmp18 = cResult[22];
                  }
                  return tmp18;
                }
              }
              const obj4 = { style: tmp2.container, children: null };
              const items = [tmp8, tmp14];
              obj4.children = items;
              const tmp21 = closure_1_8(hasOwnProperty, obj4);
              cResult[19] = tmp2.container;
              cResult[20] = tmp8;
              cResult[21] = tmp14;
              cResult[22] = tmp21;
              tmp18 = tmp21;
            }
            const obj5 = { style: tmp13, onLayout: first, children: action };
            const tmp17 = React5(hasOwnProperty, obj5);
            cResult[16] = action;
            cResult[17] = tmp13;
            cResult[18] = tmp17;
            tmp14 = tmp17;
          }
          const items1 = [tmp2.buttonContainer, tmp12];
          cResult[13] = tmp2.buttonContainer;
          cResult[14] = tmp12;
          cResult[15] = items1;
          tmp13 = items1;
        }
      }
    }
    const obj6 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: tmp7, contentContainerStyle: tmp2.scroller, children };
    const tmp11 = React5(timestampProducer, obj6);
    cResult[6] = children;
    cResult[7] = ref;
    cResult[8] = tmp2.scroller;
    cResult[9] = tmp7;
    cResult[10] = tmp11;
    tmp8 = tmp11;
  }
  const items2 = [tmp2.flex, tmp6];
  cResult[3] = tmp2.flex;
  cResult[4] = tmp6;
  cResult[5] = items2;
  tmp7 = items2;
}) : (function EditGuildEventsStepContainer(arg0) {
  ({ children, action, ref } = arg0);
  const tmp = closure_9();
  const tmp2 = _slicedToArray(noop.useState(32), 2);
  closure_0 = tmp2[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj = { style: tmp.container, children: null };
  const obj2 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: null, contentContainerStyle: tmp.scroller, children };
  const items = [tmp.flex, { marginBottom: tmp2[0] + insets.bottom }];
  obj2.style = items;
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [React5(timestampProducer, obj2), ];
  const obj3 = { style: null, onLayout: callback, children: action };
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  obj3.style = items2;
  items1[1] = React5(hasOwnProperty, obj3);
  obj.children = items1;
  return closure_1_8(hasOwnProperty, obj);
});