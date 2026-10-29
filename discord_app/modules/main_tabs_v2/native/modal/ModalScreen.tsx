// discord_app/modules/main_tabs_v2/native/modal/ModalScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = ["impressionName", "impressionProperties"];
let closure_4 = ["impressionName", "impressionProperties"];
get_ActivityIndicator = fn(17);
({ View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const NOOP = fn(1084).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Modal(route) {
      const cResult = modal(576).c(41);
      const params = route.route.params;
      modal = params.modal;
      const presentation = params.presentation;
      const obj = modal(576);
      const tmp = modal;
      if (cResult[0] !== modal.props) {
        let props = modal.props;
        if (props == null) {
          props = {};
        }
        cResult[0] = modal.props;
        cResult[1] = props;
        let tmp5 = props;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        ({ impressionName, impressionProperties } = tmp5);
        const tmp12 = _objectWithoutProperties(tmp5, closure_3);
        cResult[2] = tmp5;
        cResult[3] = impressionName;
        cResult[4] = impressionProperties;
        cResult[5] = tmp12;
        let tmp8 = impressionProperties;
        let tmp7 = impressionName;
      } else {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          closure_1(6731).pop();
        };
        cResult[6] = fn;
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp8) {
          let tmp14 = cResult[9];
        }
        useTrackImpressionDefault(tmp14);
        let callbacks = modal.callbacks;
        let onExited;
        if (callbacks != null) {
          onExited = callbacks.onExited;
        }
        importDefault = noop.useRef(onExited);
        const callbacks2 = modal.callbacks;
        let onExited1;
        if (callbacks2 != null) {
          onExited1 = callbacks2.onExited;
        }
        if (cResult[10] !== onExited1) {
          const callbacks3 = modal.callbacks;
          let onExited2;
          if (callbacks3 != null) {
            onExited2 = callbacks3.onExited;
          }
          class R {
            constructor() {
              callbacks = modal.callbacks;
              onExited = undefined;
              tmp = closure_1;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              tmp.current = onExited;
              return;
            }
          }
          cResult[10] = onExited2;
          cResult[11] = R;
          let tmp20 = R;
        } else {
          tmp20 = cResult[11];
        }
        const effect = noop.useEffect(tmp20);
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          const items = [];
          class R {
            constructor() {
              callbacks = modal.callbacks;
              onExited = undefined;
              tmp = closure_1;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              tmp.current = onExited;
              return;
            }
          }
          cResult[13] = items;
          let tmp24 = items;
        } else {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          tmp24 = cResult[13];
        }
        const effect1 = noop.useEffect(L, tmp24);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          const items1 = [];
          class R {
            constructor() {
              callbacks = modal.callbacks;
              onExited = undefined;
              tmp = closure_1;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              tmp.current = onExited;
              return;
            }
          }
          cResult[15] = tmp28;
          let tmp27 = tmp28;
          const tmp26 = items1;
        } else {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          tmp27 = cResult[15];
        }
        const layoutEffect = noop.useLayoutEffect(tmp27, tmp26);
        ({ left, right } = useSafeAreaInsetsDefault());
        const tmp31 = useIsWindowLargeDefault();
        if (cResult[16] === tmp31) {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          if (cResult[19] === tmp32) {
            class L {
              constructor() {
                return () => {
                  const current = ref.current;
                  let currentResult;
                  if (current != null) {
                    currentResult = current();
                  }
                  return currentResult;
                };
              }
            }
            if (cResult[22] === tmp34) {
              class L {
                constructor() {
                  return () => {
                    const current = ref.current;
                    let currentResult;
                    if (current != null) {
                      currentResult = current();
                    }
                    return currentResult;
                  };
                }
              }
            }
            class R {
              constructor() {
                callbacks = modal.callbacks;
                onExited = undefined;
                tmp = closure_1;
                if (callbacks != null) {
                  onExited = callbacks.onExited;
                }
                tmp.current = onExited;
                return;
              }
            }
            cResult[22] = tmp34;
            cResult[23] = left;
            cResult[24] = right;
            cResult[25] = tmp4;
            cResult[26] = undefined;
          }
          class R {
            constructor() {
              callbacks = modal.callbacks;
              onExited = undefined;
              tmp = closure_1;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              tmp.current = onExited;
              return;
            }
          }
          cResult[19] = tmp32;
          cResult[20] = modal.key;
          cResult[21] = tmp32;
        }
        let isIpadOSResult = tmp31;
        if (tmp31) {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          isIpadOSResult = obj5.isIpadOS();
        }
        if (isIpadOSResult) {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
          isIpadOSResult = "modal" === presentation;
        }
        cResult[16] = tmp31;
        cResult[17] = presentation;
        cResult[18] = isIpadOSResult;
        const tmp30 = useSafeAreaInsetsDefault();
      }
      const obj2 = { type: tmp(1272).ImpressionTypes.MODAL, name: tmp7, properties: tmp8 };
      cResult[7] = tmp7;
      cResult[8] = tmp8;
      cResult[9] = obj2;
      tmp14 = obj2;
      tmp4 = closure_12();
    }
  : function Modal(route) {
      const params = route.route.params;
      const modal = params.modal;
      importDefault = undefined;
      let props = modal.props;
      if (props == null) {
        props = {};
      }
      ({ impressionName, impressionProperties } = props);
      const tmp = closure_12();
      const callback = noop.useCallback(() => {
        closure_1(6731).pop();
      }, []);
      const obj = { type: null, name: null, properties: null };
      const tmp2 = _objectWithoutProperties(props, closure_4);
      obj.type = modal(1272).ImpressionTypes.MODAL;
      obj.name = impressionName;
      obj.properties = impressionProperties;
      useTrackImpressionDefault(obj);
      let callbacks = modal.callbacks;
      let onExited;
      if (callbacks != null) {
        onExited = callbacks.onExited;
      }
      importDefault = noop.useRef(onExited);
      const effect = noop.useEffect(() => {
        const callbacks = modal.callbacks;
        let onExited;
        if (callbacks != null) {
          onExited = callbacks.onExited;
        }
        closure_1.current = onExited;
      });
      const effect1 = noop.useEffect(
        () => () => {
          const current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        },
        [],
      );
      const layoutEffect = noop.useLayoutEffect(() => modal(7642).trackAppUIViewed("ModalScreen"), []);
      ({ left, right } = useSafeAreaInsetsDefault());
      let isIpadOSResult = tmp4(7098)();
      if (isIpadOSResult) {
        isIpadOSResult = tmp7(4962).isIpadOS();
        const tmp7Result = tmp7(4962);
      }
      if (isIpadOSResult) {
        isIpadOSResult = "modal" === params.presentation;
      }
      if (!isIpadOSResult) {
        isIpadOSResult = tmp7(18845).shouldExcludeSafeAreaForModalKey(modal.key);
        const tmp7Result3 = tmp7(18845);
      }
      const items = [absoluteFillObject.absoluteFillObject];
      let tmp17;
      if (!isIpadOSResult) {
        const items1 = [tmp.containerWithPadding];
        const obj3 = { paddingLeft: left, paddingRight: right };
        items1[1] = obj3;
        tmp17 = items1;
      }
      const obj4 = { style: items, onAccessibilityEscape: null, children: null };
      items[1] = tmp17;
      if (modal.closable) {
        let pop = tmp4(6731).pop;
      } else {
        pop = NOOP;
      }
      obj4.onAccessibilityEscape = pop;
      const obj5 = {};
      const merged = Object.assign(tmp2);
      obj5.style = undefined;
      obj5.transitionState = null;
      obj5.onClose = callback;
      const items2 = [<modal.modal />];
      const tmp13 = useSafeAreaInsetsDefault();
      const tmp7Result4 = modal(1381);
      items2[1] = modal(1381).isIOS() && closure_10(modal(11997).PortalKeyboardRenderer, { portal: false });
      obj4.children = closure_11(modal(16326).SafeAreaProvider, { children: items2 });
      return closure_10(closure_7, obj4);
    };
