// discord_app/modules/main_tabs_v2/native/modal/ModalScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = ["impressionName", "impressionProperties"];
let closure_4 = ["impressionName", "impressionProperties"];
get_ActivityIndicator = fn(17);
({ View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      const cResult = modal(576).c(35);
      modal = route.route.params.modal;
      const tmp4 = closure_12();
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
          closure_1(5093).pop();
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
          class M {
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
          cResult[11] = M;
          let tmp20 = M;
        } else {
          tmp20 = cResult[11];
        }
        const effect = noop.useEffect(tmp20);
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
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
          class M {
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
          class R {
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
        const effect1 = noop.useEffect(R, tmp24);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              obj = modal(closure_1_2[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          const items1 = [];
          class M {
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
          cResult[15] = C;
          let tmp27 = C;
          const tmp26 = items1;
        } else {
          class C {
            constructor() {
              obj = modal(closure_1_2[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          tmp27 = cResult[15];
        }
        const layoutEffect = noop.useLayoutEffect(tmp27, tmp26);
        ({ left, right } = useSafeAreaInsetsDefault());
        if (cResult[16] !== modal.key) {
          class C {
            constructor() {
              obj = modal(closure_1_2[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          const result = obj5.shouldExcludeSafeAreaForModalKey(modal.key);
          class M {
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
          cResult[17] = result;
        } else {
          class C {
            constructor() {
              obj = modal(closure_1_2[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
        }
        if (cResult[18] === tmp30) {
          class C {
            constructor() {
              obj = modal(closure_1_2[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
        }
        let tmp33;
        if (!tmp30) {
          class C {
            constructor() {
              obj = modal(closure_1_2[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          tmp34[0] = tmp4.containerWithPadding;
          const obj2 = { paddingLeft: null, paddingRight: null };
          class M {
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
          obj2.paddingRight = right;
          tmp34[1] = obj2;
          tmp33 = tmp34;
        }
        cResult[18] = tmp30;
        cResult[19] = left;
        cResult[20] = right;
        cResult[21] = tmp4;
        cResult[22] = tmp33;
        const tmp29 = useSafeAreaInsetsDefault();
      }
      const obj3 = { type: modal(1260).ImpressionTypes.MODAL, name: tmp7, properties: tmp8 };
      cResult[7] = tmp7;
      cResult[8] = tmp8;
      cResult[9] = obj3;
      tmp14 = obj3;
      const obj = modal(576);
    }
  : (route) => {
      const modal = route.route.params.modal;
      importDefault = undefined;
      let props = modal.props;
      if (props == null) {
        props = {};
      }
      ({ impressionName, impressionProperties } = props);
      const tmp = closure_12();
      const callback = noop.useCallback(() => {
        closure_1(5093).pop();
      }, []);
      const obj = { type: null, name: null, properties: null };
      const tmp2 = _objectWithoutProperties(props, closure_4);
      obj.type = modal(1260).ImpressionTypes.MODAL;
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
      const layoutEffect = noop.useLayoutEffect(() => modal(6984).trackAppUIViewed("ModalScreen"), []);
      ({ left, right } = useSafeAreaInsetsDefault());
      const tmp13 = useSafeAreaInsetsDefault();
      const items = [absoluteFillObject.absoluteFillObject];
      let tmp16;
      if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
        const items1 = [tmp.containerWithPadding];
        const obj3 = { paddingLeft: left, paddingRight: right };
        items1[1] = obj3;
        tmp16 = items1;
      }
      const obj4 = { style: items, onAccessibilityEscape: null, children: null };
      items[1] = tmp16;
      if (modal.closable) {
        let pop = tmp4(5093).pop;
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
      tmp7Result = modal(17028);
      let isIOSResult = modal(1369).isIOS();
      if (isIOSResult) {
        isIOSResult = closure_10(tmp7(16599).PortalKeyboardRenderer, { portal: false });
      }
      items2[1] = isIOSResult;
      obj4.children = items2;
      return closure_11(closure_7, obj4);
    };
