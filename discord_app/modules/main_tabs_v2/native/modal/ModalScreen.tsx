// discord_app/modules/main_tabs_v2/native/modal/ModalScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let closure_3 = ["impressionName", "impressionProperties"];
let closure_4 = ["impressionName", "impressionProperties"];
({ View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { containerWithPadding: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_12 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let closure_1;
      let impressionName;
      let impressionProperties;
      let left;
      let modal;
      let right;
      let tmp5;
      let tmp7;
      let tmp8;
      let obj = modal(576);
      const cResult = obj.c(35);
      const tmp = modal;
      modal = route.route.params.modal;
      const tmp4 = closure_12();
      if (cResult[0] !== modal.props) {
        let props = modal.props;
        if (props == null) {
          props = {};
        }
        cResult[0] = modal.props;
        cResult[1] = props;
        tmp5 = props;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        ({ impressionName, impressionProperties } = tmp5);
        cResult[2] = tmp5;
        cResult[3] = impressionName;
        cResult[4] = impressionProperties;
        cResult[5] = _objectWithoutProperties(tmp5, closure_3);
        tmp8 = impressionProperties;
        tmp7 = impressionName;
        const tmp12 = _objectWithoutProperties(tmp5, closure_3);
      } else {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          const arr = closure_1(dependencyMap[9]);
          arr.pop();
        };
        cResult[6] = fn;
      }
      if (cResult[7] === tmp7) {
        let tmp14;
        let tmp21;
        let tmp25;
        let tmp28;
        let tmp27;
        if (cResult[8] === tmp8) {
          tmp14 = cResult[9];
        }
        useTrackImpressionDefault(tmp14);
        let callbacks = modal.callbacks;
        let onExited;
        const useRef = react.useRef;
        if (callbacks != null) {
          onExited = callbacks.onExited;
        }
        importDefault = useRef(onExited);
        const callbacks2 = modal.callbacks;
        let onExited1;
        const tmp19 = cResult[10];
        if (callbacks2 != null) {
          onExited1 = callbacks2.onExited;
        }
        if (tmp19 !== onExited1) {
          const callbacks3 = modal.callbacks;
          let onExited2;
          if (callbacks3 != null) {
            onExited2 = callbacks3.onExited;
          }
          class M {
            constructor() {
              const callbacks = modal.callbacks;
              let onExited;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              closure_1.current = onExited;
            }
          }
          cResult[10] = onExited2;
          cResult[11] = M;
          tmp21 = M;
        } else {
          tmp21 = cResult[11];
        }
        const effect = react.useEffect(tmp21);
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
              const callbacks = modal.callbacks;
              let onExited;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              closure_1.current = onExited;
            }
          }
          cResult[13] = items;
          tmp25 = items;
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
          tmp25 = cResult[13];
        }
        const effect1 = react.useEffect(R, tmp25);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              const obj = modal(dependencyMap[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          const items1 = [];
          class M {
            constructor() {
              const callbacks = modal.callbacks;
              let onExited;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              closure_1.current = onExited;
            }
          }
          cResult[15] = C;
          tmp28 = C;
          tmp27 = items1;
        } else {
          class C {
            constructor() {
              const obj = modal(dependencyMap[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          tmp28 = cResult[15];
        }
        const layoutEffect = react.useLayoutEffect(tmp28, tmp27);
        ({ left, right } = useSafeAreaInsetsDefault());
        useSafeAreaInsetsDefault();
        if (cResult[16] !== modal.key) {
          class C {
            constructor() {
              const obj = modal(dependencyMap[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          const result = obj5.shouldExcludeSafeAreaForModalKey(modal.key);
          class M {
            constructor() {
              const callbacks = modal.callbacks;
              let onExited;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              closure_1.current = onExited;
            }
          }
          cResult[17] = result;
        } else {
          class C {
            constructor() {
              const obj = modal(dependencyMap[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
        }
        if (cResult[18] === tmp31) {
          class C {
            constructor() {
              const obj = modal(dependencyMap[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
        }
        let tmp34;
        if (!tmp31) {
          class C {
            constructor() {
              const obj = modal(dependencyMap[12]);
              return obj.trackAppUIViewed("ModalScreen");
            }
          }
          tmp35[0] = tmp4.containerWithPadding;
          const obj2 = { paddingLeft: null, paddingRight: right };
          class M {
            constructor() {
              const callbacks = modal.callbacks;
              let onExited;
              if (callbacks != null) {
                onExited = callbacks.onExited;
              }
              closure_1.current = onExited;
            }
          }
          tmp35[1] = obj2;
          tmp34 = tmp35;
        }
        cResult[18] = tmp31;
        cResult[19] = left;
        cResult[20] = right;
        cResult[21] = tmp4;
        cResult[22] = tmp34;
      }
      const obj3 = { type: tmp(1260).ImpressionTypes.MODAL, name: tmp7, properties: tmp8 };
      cResult[7] = tmp7;
      cResult[8] = tmp8;
      cResult[9] = obj3;
      tmp14 = obj3;
    }
  : (route) => {
      let closure_1;
      let impressionName;
      let impressionProperties;
      let items2;
      let left;
      let pop;
      let right;
      const modal = route.route.params.modal;
      importDefault = undefined;
      let props = modal.props;
      const tmp = closure_12();
      if (props == null) {
        props = {};
      }
      ({ impressionName, impressionProperties } = props);
      const tmp2 = _objectWithoutProperties(props, closure_4);
      const callback = react.useCallback(() => {
        const arr = closure_1(dependencyMap[9]);
        arr.pop();
      }, []);
      let obj = { type: modal(1260).ImpressionTypes.MODAL, name: impressionName, properties: impressionProperties };
      const tmp6 = useTrackImpressionDefault;
      tmp6(obj);
      let callbacks = modal.callbacks;
      let onExited;
      const useRef = react.useRef;
      if (callbacks != null) {
        onExited = callbacks.onExited;
      }
      importDefault = useRef(onExited);
      const effect = react.useEffect(() => {
        const callbacks = modal.callbacks;
        let onExited;
        if (callbacks != null) {
          onExited = callbacks.onExited;
        }
        closure_1.current = onExited;
      });
      const effect1 = react.useEffect(() => {
        let ref;
        return () => {
          const current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        };
      }, []);
      const layoutEffect = react.useLayoutEffect(() => {
        const obj = modal(dependencyMap[12]);
        return obj.trackAppUIViewed("ModalScreen");
      }, []);
      ({ left, right } = useSafeAreaInsetsDefault());
      useSafeAreaInsetsDefault();
      const items = [absoluteFillObject.absoluteFillObject];
      let tmp16;
      const tmp7Result = modal(17052);
      if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
        const items1 = [tmp.containerWithPadding];
        const obj3 = { paddingLeft: left, paddingRight: right };
        items1[1] = obj3;
        tmp16 = items1;
      }
      const obj4 = { style: items, onAccessibilityEscape: pop, children: items2 };
      items[1] = tmp16;
      if (modal.closable) {
        pop = tmp4(5093).pop;
      } else {
        pop = NOOP;
      }
      const createElement = react.createElement;
      const modal2 = modal.modal;
      const merged = Object.assign(tmp2);
      items2 = [<modal2 style={undefined} transitionState={null} onClose={callback} />];
      const tmp7Result2 = modal(1369);
      items2[1] = tmp7Result2.isIOS() && closure_10(tmp7(16605).PortalKeyboardRenderer, { portal: false });
      const isIOSResult = tmp7Result2.isIOS() && closure_10(tmp7(16605).PortalKeyboardRenderer, { portal: false });
      return closure_11(closure_7, obj4);
    };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default tmp4;
