// discord_app/design/components/Sheet/native/ActionSheetPresenter.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import useBackPressHandlerDefault from "../../../../modules/routing/native/useBackPressHandler.tsx";
import useTrackImpressionDefault from "../../../../modules/app_analytics/useTrackImpression.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ActionSheetStore from "../../../../modules/action_sheet/native/ActionSheetStore.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let appEntryKey, dependencyMap, sheetKey;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (sheetKey, arg1) => {
        let closure_4;
        let content;
        let first;
        let impressionName;
        let impressionProperties;
        let ref;
        let ref2;
        let tmp5;
        let tmp8;
        let zIndex;
        let obj = sheetKey(576);
        const cResult = obj.c(22);
        sheetKey = sheetKey.sheetKey;
        ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
        [tmp5, importDefault] = react.useState("visible");
        _slicedToArray(react.useState("visible"), 2);
        dependencyMap = react.useRef(NOOP);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p(current) {
            ref.current = current;
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        _slicedToArray = obj2.useRef(NOOP);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function _() {
            ref2.current();
          };
          cResult[1] = fn2;
          tmp8 = fn2;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === impressionName) {
          let tmp9;
          let tmp13;
          let tmp12;
          let tmp16;
          if (cResult[3] === impressionProperties) {
            tmp9 = cResult[4];
          }
          useTrackImpressionDefault(tmp9);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function k() {
              return {
                componentDidEnter() {
                  closure_1_1("visible");
                },
                componentWillLeave(current) {
                  closure_1_1("exiting");
                  ref2.current = current;
                },
                componentDidLeave() {
                  closure_1_1("exited");
                  ref2.current = current;
                },
              };
            };
            const items = [];
            cResult[5] = fn3;
            cResult[6] = items;
            tmp13 = items;
            tmp12 = fn3;
          } else {
            tmp12 = cResult[5];
            tmp13 = cResult[6];
          }
          const imperativeHandle = obj2.useImperativeHandle(arg1, tmp12, tmp13);
          if (cResult[7] !== sheetKey) {
            const fn4 = function z() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(sheetKey);
            };
            cResult[7] = sheetKey;
            cResult[8] = fn4;
            tmp16 = fn4;
          } else {
            tmp16 = cResult[8];
          }
          react = tmp16;
          if (cResult[9] === tmp16) {
            if (cResult[12] !== tmp16) {
              class N {
                constructor() {
                  current = ref.current;
                  if (current != null) {
                    current();
                  }
                  closure_4();
                  return true;
                }
              }
              cResult[12] = tmp16;
              cResult[13] = N;
            } else {
              class N {
                constructor() {
                  current = ref.current;
                  if (current != null) {
                    current();
                  }
                  closure_4();
                  return true;
                }
              }
            }
            useBackPressHandlerDefault(N);
            if (cResult[14] === tmp16) {
              class N {
                constructor() {
                  current = ref.current;
                  if (current != null) {
                    current();
                  }
                  closure_4();
                  return true;
                }
              }
            }
            cResult[14] = tmp16;
            cResult[15] = content;
            cResult[16] = sheetKey;
            cResult[17] = zIndex;
            cResult[18] = jsx(sheetKey(5766).Dialog, {
              dialogKey: sheetKey,
              onDismiss: tmp16,
              zIndex,
              children: content,
            });
            const tmp22 = jsx(sheetKey(5766).Dialog, {
              dialogKey: sheetKey,
              onDismiss: tmp16,
              zIndex,
              children: content,
            });
          }
          const obj4 = { transitionState: tmp5, close: tmp16, onLeave: tmp8, registerDismissHandler: first };
          cResult[9] = tmp16;
          cResult[10] = tmp5;
          cResult[11] = obj4;
        }
        const obj5 = {
          type: sheetKey(1260).ImpressionTypes.HALFSHEET,
          name: impressionName,
          properties: impressionProperties,
        };
        cResult[2] = impressionName;
        cResult[3] = impressionProperties;
        cResult[4] = obj5;
        tmp9 = obj5;
      }
    : (sheetKey, arg1) => {
        let closure_2;
        let content;
        let impressionName;
        let impressionProperties;
        let ref;
        let transitionState;
        let zIndex;
        sheetKey = sheetKey.sheetKey;
        transitionState = undefined;
        dependencyMap = undefined;
        let registerDismissHandler;
        let callback2;
        ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
        [transitionState, dependencyMap] = registerDismissHandler.useState("visible");
        _slicedToArray = registerDismissHandler.useRef(callback2);
        registerDismissHandler = registerDismissHandler.useCallback((current) => {
          ref.current = current;
        }, []);
        const ref2 = registerDismissHandler.useRef(callback2);
        const callback1 = registerDismissHandler.useCallback(() => {
          ref2.current();
        }, []);
        let obj = {
          type: sheetKey(1260).ImpressionTypes.HALFSHEET,
          name: impressionName,
          properties: impressionProperties,
        };
        const tmp5 = transitionState(8422);
        tmp5(obj);
        const imperativeHandle = registerDismissHandler.useImperativeHandle(
          arg1,
          () => ({
            componentDidEnter() {
              closure_1_2("visible");
            },
            componentWillLeave(current) {
              closure_1_2("exiting");
              ref2.current = current;
            },
            componentDidLeave() {
              closure_1_2("exited");
              ref2.current = callback2;
            },
          }),
          [],
        );
        const items = [sheetKey];
        callback2 = registerDismissHandler.useCallback(() => {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(sheetKey);
        }, items);
        const items1 = [transitionState, callback2, callback1, registerDismissHandler];
        const items2 = [callback2];
        const memo = registerDismissHandler.useMemo(
          () => ({ transitionState, close: callback2, onLeave: callback1, registerDismissHandler }),
          items1,
        );
        const callback3 = registerDismissHandler.useCallback(() => {
          const current = ref.current;
          if (current != null) {
            current();
          }
          callback2();
          return true;
        }, items2);
        transitionState(5780)(callback3);
        const Provider = transitionState(6647).Provider;
        return <Provider value={memo}>{null}</Provider>;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (appEntryKey) => {
      let stack;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = appEntryKey(576);
      const cResult = obj.c(12);
      appEntryKey = appEntryKey.appEntryKey;
      if (cResult[0] !== appEntryKey) {
        const fn = function c() {
          return () => {
            const obj = ActionSheetActionCreatorsDefault;
            const result = obj.resetActionSheetsForAppEntryKey(appEntryKey);
          };
        };
        const items = [appEntryKey];
        cResult[0] = appEntryKey;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ActionSheetStore];
        const fn2 = function v() {
          return stack.getStack();
        };
        const items2 = [];
        cResult[3] = items1;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp9 = items2;
        tmp8 = fn2;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const tmpResult = appEntryKey(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp8, tmp9);
      if (cResult[6] === appEntryKey) {
        let tmp11;
        let tmp14;
        if (cResult[7] === stateFromStoresArray) {
          tmp11 = cResult[8];
        }
        if (cResult[10] !== tmp11) {
          const TransitionGroup = tmp(12065).TransitionGroup;
          const tmp17 = (
            <TransitionGroup style={StyleSheet.absoluteFill} component={appEntryKey(5714).TransitionGroupOverlayView}>
              {tmp11}
            </TransitionGroup>
          );
          cResult[10] = tmp11;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
      const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(content) {
            return (
              <closure_1_9
                key={content.key}
                sheetKey={content.key}
                content={content.content}
                impressionName={content.impressionName}
                impressionProperties={content.impressionProperties}
                zIndex={content.zIndex}
              />
            );
          }
        }
        cResult[9] = A;
      } else {
        class A {
          constructor(content) {
            return (
              <closure_1_9
                key={content.key}
                sheetKey={content.key}
                content={content.content}
                impressionName={content.impressionName}
                impressionProperties={content.impressionProperties}
                zIndex={content.zIndex}
              />
            );
          }
        }
      }
      const mapped = found.map(A);
      cResult[6] = appEntryKey;
      cResult[7] = stateFromStoresArray;
      cResult[8] = mapped;
      tmp11 = mapped;
    }
  : (appEntryKey) => {
      let stack;
      appEntryKey = appEntryKey.appEntryKey;
      const items = [appEntryKey];
      const effect = react.useEffect(
        () => () => {
          const obj = ActionSheetActionCreatorsDefault;
          const result = obj.resetActionSheetsForAppEntryKey(appEntryKey);
        },
        items,
      );
      let obj = appEntryKey(504);
      const items1 = [ActionSheetStore];
      const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => stack.getStack(), []);
      const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
      const mapped = found.map((content) => (
        <closure_1_9
          key={content.key}
          sheetKey={content.key}
          content={content.content}
          impressionName={content.impressionName}
          impressionProperties={content.impressionProperties}
          zIndex={content.zIndex}
        />
      ));
      const TransitionGroup = appEntryKey(12065).TransitionGroup;
      return (
        <TransitionGroup style={StyleSheet.absoluteFill} component={appEntryKey(5714).TransitionGroupOverlayView}>
          {mapped}
        </TransitionGroup>
      );
    };
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = tmp3;
