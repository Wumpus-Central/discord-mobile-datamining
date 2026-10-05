// discord_common/js/packages/flash-list/index.js
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import BottomSheetModal from "../../../../_runtime/06112_BottomSheetModal.js";
import BottomSheetFlashListDefault from "../../../../_runtime/06336_BottomSheetFlashList.js";
import _mod6337 from "../../../../_runtime/metro/06337__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import PlatformUtils from "../../../../discord_app/utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import ReanimatedRexport_mod from "../../../../discord_app/modules/reanimated/ReanimatedRexport.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj;

let closure_3 = ["preventNativeModalDismiss"];
let closure_4 = ["preventNativeModalDismiss", "refreshControl"];
let closure_5 = ["preventNativeModalDismiss", "refreshControl"];
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
let defaultMVCPConfig;
if (PlatformUtils.isAndroid()) {
  defaultMVCPConfig = { disabled: true };
}
function noop() {}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      obj = react2;
      const cResult = obj.c(1);
      let tmp4 = arg1;
      if (null == arg1) {
        tmp4 = arg1;
        if (true === arg0) {
          tmp4 = arg1;
          const tmpResult = PlatformUtils;
          if (tmpResult.isIOS()) {
            let first;
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp11 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
              cResult[0] = tmp11;
              first = tmp11;
            } else {
              first = cResult[0];
            }
            tmp4 = first;
          }
        }
      }
      return tmp4;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      return react.useMemo(() => {
        let tmp2 = closure_1;
        if (null == closure_1) {
          tmp2 = closure_1;
          if (true === closure_0) {
            tmp2 = closure_1;
            obj = PlatformUtils;
            if (obj.isIOS()) {
              tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
            }
          }
        }
        return tmp2;
      }, items);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = react2;
        const cResult = maintainVisibleContentPosition.c(3);
        if (cResult[0] === arg0) {
          let tmp4;
          if (cResult[1] === ref) {
            tmp4 = cResult[2];
          }
          return tmp4;
        }
        const FlashList = _mod6337.FlashList;
        const merged = Object.assign(arg0);
        const tmp6 = <FlashList maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
        cResult[0] = arg0;
        cResult[1] = ref;
        cResult[2] = tmp6;
        tmp4 = tmp6;
      }
    : (arg0, ref) => {
        let maintainVisibleContentPosition;
        maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
        const FlashList = _mod6337.FlashList;
        const merged = Object.assign(arg0);
        return <FlashList maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
      },
);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_13 = ReanimatedRexport.createAnimatedComponent(_mod6337.FlashList);
const forwardRef2 = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef3 = react.forwardRef;
const forwardRef2Result = forwardRef2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = react2;
        const cResult = maintainVisibleContentPosition.c(3);
        if (cResult[0] === arg0) {
          let tmp2;
          if (cResult[1] === ref) {
            tmp2 = cResult[2];
          }
          return tmp2;
        }
        const merged = Object.assign(arg0);
        const tmp4 = <closure_13 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
        cResult[0] = arg0;
        cResult[1] = ref;
        cResult[2] = tmp4;
        tmp2 = tmp4;
      }
    : (arg0, ref) => {
        let maintainVisibleContentPosition;
        maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
        const merged = Object.assign(arg0);
        return <closure_13 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef3Result = forwardRef3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (preventNativeModalDismiss, ref) => {
        let tmp4;
        const maintainVisibleContentPosition = react2;
        const cResult = maintainVisibleContentPosition.c(5);
        if (cResult[0] !== preventNativeModalDismiss) {
          preventNativeModalDismiss = preventNativeModalDismiss.preventNativeModalDismiss;
          const tmp7 = _objectWithoutProperties(preventNativeModalDismiss, closure_3);
          cResult[0] = preventNativeModalDismiss;
          cResult[1] = tmp7;
          tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] === tmp4) {
          let tmp8;
          if (cResult[3] === ref) {
            tmp8 = cResult[4];
          }
          return tmp8;
        }
        const FlashList = _mod6337.FlashList;
        const merged = Object.assign(tmp4);
        const tmp10 = <FlashList ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry />;
        cResult[2] = tmp4;
        cResult[3] = ref;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      }
    : (arg0, ref) => {
        let maintainVisibleContentPosition;
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0 }));
        maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
        const FlashList = _mod6337.FlashList;
        const merged1 = Object.assign(merged);
        return <FlashList ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry />;
      },
);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_14 = ReanimatedRexport.createAnimatedComponent(_mod6337.FlashList);
const forwardRef4 = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef5 = react.forwardRef;
const forwardRef4Result = forwardRef4(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let preventNativeModalDismiss;
        let refreshControl;
        let tmp3;
        let tmp4;
        let tmp5;
        const maintainVisibleContentPosition = react2;
        const cResult = maintainVisibleContentPosition.c(8);
        if (cResult[0] !== arg0) {
          ({ preventNativeModalDismiss, refreshControl } = arg0);
          const tmp8 = _objectWithoutProperties(arg0, closure_4);
          cResult[0] = arg0;
          cResult[1] = preventNativeModalDismiss;
          cResult[2] = tmp8;
          cResult[3] = refreshControl;
          tmp5 = refreshControl;
          tmp4 = tmp8;
          tmp3 = preventNativeModalDismiss;
        } else {
          tmp3 = cResult[1];
          tmp4 = cResult[2];
          tmp5 = cResult[3];
        }
        const tmp9 = closure_12(tmp3, tmp5);
        if (cResult[4] === tmp9) {
          if (cResult[5] === tmp4) {
            let tmp10;
            if (cResult[6] === ref) {
              tmp10 = cResult[7];
            }
            return tmp10;
          }
        }
        BottomSheetFlashListDefault;
        const merged = Object.assign(tmp4);
        const tmp13 = (
          <tmp11 ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} refreshControl={tmp9} />
        );
        cResult[4] = tmp9;
        cResult[5] = tmp4;
        cResult[6] = ref;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
    : (arg0, ref) => {
        let maintainVisibleContentPosition;
        let preventNativeModalDismiss;
        let refreshControl;
        let tmp2;
        ({ preventNativeModalDismiss, refreshControl } = arg0);
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
        maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, refreshControl: tmp2 };
        tmp2 = closure_12(preventNativeModalDismiss, refreshControl);
        BottomSheetFlashListDefault;
        const merged1 = Object.assign(merged);
        return <tmp3 ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} refreshControl={tmp2} />;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef5Result = forwardRef5(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let preventNativeModalDismiss;
        let refreshControl;
        let tmp4;
        let tmp5;
        let tmp6;
        const maintainVisibleContentPosition = react2;
        const cResult = maintainVisibleContentPosition.c(8);
        if (cResult[0] !== arg0) {
          ({ preventNativeModalDismiss, refreshControl } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_5);
          cResult[0] = arg0;
          cResult[1] = preventNativeModalDismiss;
          cResult[2] = tmp9;
          cResult[3] = refreshControl;
          tmp6 = refreshControl;
          tmp5 = tmp9;
          tmp4 = preventNativeModalDismiss;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const tmp10 = closure_12(tmp4, tmp6);
        if (cResult[4] === tmp10) {
          if (cResult[5] === tmp5) {
            let tmp11;
            if (cResult[6] === ref) {
              tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
        const merged = Object.assign(tmp5);
        const tmp13 = (
          <closure_14
            ref={ref}
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            masonry
            renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
            refreshControl={tmp10}
          />
        );
        cResult[4] = tmp10;
        cResult[5] = tmp5;
        cResult[6] = ref;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
    : (arg0, ref) => {
        let maintainVisibleContentPosition;
        let preventNativeModalDismiss;
        let refreshControl;
        let tmp2;
        ({ preventNativeModalDismiss, refreshControl } = arg0);
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
        maintainVisibleContentPosition = {
          ref,
          maintainVisibleContentPosition,
          masonry: true,
          renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
          refreshControl: tmp2,
        };
        tmp2 = closure_12(preventNativeModalDismiss, refreshControl);
        const merged1 = Object.assign(merged);
        return (
          <closure_14
            ref={ref}
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            masonry
            renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
            refreshControl={tmp2}
          />
        );
      },
);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10093 in _mod6337) {
  exports[key10093] = _mod6337[key10093];
  continue;
}
const FlashList_export = forwardRefResult;

export { defaultMVCPConfig };
export { FlashList_export as FlashList };
export const AnimatedFlashList = forwardRef2Result;
export const MasonryFlashList = forwardRef3Result;
export const BottomSheetFlashList = forwardRef4Result;
export const BottomSheetMasonryFlashList = forwardRef5Result;
