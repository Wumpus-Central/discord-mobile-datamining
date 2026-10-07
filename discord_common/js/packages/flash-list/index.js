// discord_common/js/packages/flash-list/index.js
import c from "../../../../_runtime/00576_c.js";
import PlatformUtils2 from "../../../../discord_app/utils/PlatformUtils.tsx";
import BottomSheetModal from "../../../../_runtime/06119_BottomSheetModal.js";
import _modDef6343 from "../../../../_runtime/metro/06343__.js";
import _mod6344 from "../../../../_runtime/metro/06344__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop_mod from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport_mod from "../../../../discord_app/modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["preventNativeModalDismiss"];
let closure_4 = ["preventNativeModalDismiss", "refreshControl"];
let closure_5 = ["preventNativeModalDismiss", "refreshControl"];
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1369);
let defaultMVCPConfig;
if (PlatformUtils.isAndroid()) {
  defaultMVCPConfig = { disabled: true };
}
noop = function noop() {};
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const cResult = c.c(1);
      let tmp4 = arg1;
      if (null == arg1) {
        tmp4 = arg1;
        if (true === arg0) {
          tmp4 = arg1;
          if (tmpResult.isIOS()) {
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
              const tmp11 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
              cResult[0] = tmp11;
              let first = tmp11;
            } else {
              first = cResult[0];
            }
          }
          tmpResult = PlatformUtils2;
        }
      }
      return tmp4;
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
      return noop.useMemo(() => {
        let tmp2 = closure_1;
        if (null == closure_1) {
          tmp2 = closure_1;
          if (true === closure_0) {
            tmp2 = closure_1;
            if (obj.isIOS()) {
              const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
              tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
            }
            obj = PlatformUtils2;
          }
        }
        return tmp2;
      }, items);
    };
fn(558);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_13 = ReanimatedRexport.createAnimatedComponent(fn(6344).FlashList);
ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = c;
        const cResult = maintainVisibleContentPosition.c(3);
        if (cResult[0] === arg0) {
          if (cResult[1] === ref) {
            let tmp4 = cResult[2];
          }
          return tmp4;
        }
        const merged = Object.assign(arg0);
        const tmp6 = jsx(_mod6344.FlashList, { maintainVisibleContentPosition, ref });
        cResult[0] = arg0;
        cResult[1] = ref;
        cResult[2] = tmp6;
        tmp4 = tmp6;
        const obj2 = { maintainVisibleContentPosition, ref };
      }
    : (arg0, ref) => {
        maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
        const merged = Object.assign(arg0);
        return jsx(_mod6344.FlashList, { maintainVisibleContentPosition, ref });
      },
);
ReactCompilerGating = fn(558);
const forwardRefResult1 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = c;
        const cResult = maintainVisibleContentPosition.c(3);
        if (cResult[0] === arg0) {
          if (cResult[1] === ref) {
            let tmp2 = cResult[2];
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
        maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
        const merged = Object.assign(arg0);
        return <closure_13 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
      },
);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_14 = ReanimatedRexport.createAnimatedComponent(fn(6344).FlashList);
ReactCompilerGating = fn(558);
const forwardRefResult2 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (preventNativeModalDismiss, ref) => {
        const maintainVisibleContentPosition = c;
        const cResult = maintainVisibleContentPosition.c(5);
        if (cResult[0] !== preventNativeModalDismiss) {
          preventNativeModalDismiss = preventNativeModalDismiss.preventNativeModalDismiss;
          const tmp7 = _objectWithoutProperties(preventNativeModalDismiss, closure_3);
          cResult[0] = preventNativeModalDismiss;
          cResult[1] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] === tmp4) {
          if (cResult[3] === ref) {
            let tmp8 = cResult[4];
          }
          return tmp8;
        }
        const merged = Object.assign(tmp4);
        const tmp10 = jsx(_mod6344.FlashList, { ref, maintainVisibleContentPosition, masonry: true });
        cResult[2] = tmp4;
        cResult[3] = ref;
        cResult[4] = tmp10;
        tmp8 = tmp10;
        const obj2 = { ref, maintainVisibleContentPosition, masonry: true };
      }
    : (arg0, ref) => {
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0 }));
        maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
        const merged1 = Object.assign(merged);
        return jsx(_mod6344.FlashList, { ref, maintainVisibleContentPosition, masonry: true });
      },
);
ReactCompilerGating = fn(558);
const forwardRefResult3 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = c;
        const cResult = maintainVisibleContentPosition.c(8);
        if (cResult[0] !== arg0) {
          ({ preventNativeModalDismiss, refreshControl } = arg0);
          const tmp8 = _objectWithoutProperties(arg0, closure_4);
          cResult[0] = arg0;
          cResult[1] = preventNativeModalDismiss;
          cResult[2] = tmp8;
          cResult[3] = refreshControl;
          let tmp5 = refreshControl;
          let tmp4 = tmp8;
          let tmp3 = preventNativeModalDismiss;
        } else {
          tmp3 = cResult[1];
          tmp4 = cResult[2];
          tmp5 = cResult[3];
        }
        const tmp9 = closure_12(tmp3, tmp5);
        if (cResult[4] === tmp9) {
          if (cResult[5] === tmp4) {
            if (cResult[6] === ref) {
              let tmp10 = cResult[7];
            }
            return tmp10;
          }
        }
        const obj2 = { ref, maintainVisibleContentPosition };
        const merged = Object.assign(tmp4);
        obj2.refreshControl = tmp9;
        const tmp13 = jsx(_modDef6343, { ref, maintainVisibleContentPosition });
        cResult[4] = tmp9;
        cResult[5] = tmp4;
        cResult[6] = ref;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
    : (arg0, ref) => {
        ({ preventNativeModalDismiss, refreshControl } = arg0);
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
        maintainVisibleContentPosition = { ref, maintainVisibleContentPosition };
        const tmp2 = closure_12(preventNativeModalDismiss, refreshControl);
        const merged1 = Object.assign(merged);
        maintainVisibleContentPosition.refreshControl = tmp2;
        return jsx(_modDef6343, { ref, maintainVisibleContentPosition });
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10093 in require("../../../../_runtime/metro/06344__.js")) {
  arg5[key10093] = require("../../../../_runtime/metro/06344__.js")[key10093];
  continue;
}
const forwardRefResult4 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = c;
        const cResult = maintainVisibleContentPosition.c(8);
        if (cResult[0] !== arg0) {
          ({ preventNativeModalDismiss, refreshControl } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_5);
          cResult[0] = arg0;
          cResult[1] = preventNativeModalDismiss;
          cResult[2] = tmp9;
          cResult[3] = refreshControl;
          let tmp6 = refreshControl;
          let tmp5 = tmp9;
          let tmp4 = preventNativeModalDismiss;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const tmp10 = closure_12(tmp4, tmp6);
        if (cResult[4] === tmp10) {
          if (cResult[5] === tmp5) {
            if (cResult[6] === ref) {
              let tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
        const obj2 = {
          ref,
          maintainVisibleContentPosition,
          masonry: true,
          renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
        };
        const merged = Object.assign(tmp5);
        obj2.refreshControl = tmp10;
        const tmp13 = (
          <closure_14
            ref={ref}
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            masonry
            renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
          />
        );
        cResult[4] = tmp10;
        cResult[5] = tmp5;
        cResult[6] = ref;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
    : (arg0, ref) => {
        ({ preventNativeModalDismiss, refreshControl } = arg0);
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
        maintainVisibleContentPosition = {
          ref,
          maintainVisibleContentPosition,
          masonry: true,
          renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
        };
        const merged1 = Object.assign(merged);
        maintainVisibleContentPosition.refreshControl = closure_12(preventNativeModalDismiss, refreshControl);
        return (
          <closure_14
            ref={ref}
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            masonry
            renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
          />
        );
      },
);

export { defaultMVCPConfig };
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const maintainVisibleContentPosition = c;
        const cResult = maintainVisibleContentPosition.c(8);
        if (cResult[0] !== arg0) {
          ({ preventNativeModalDismiss, refreshControl } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_5);
          cResult[0] = arg0;
          cResult[1] = preventNativeModalDismiss;
          cResult[2] = tmp9;
          cResult[3] = refreshControl;
          let tmp6 = refreshControl;
          let tmp5 = tmp9;
          let tmp4 = preventNativeModalDismiss;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const tmp10 = closure_12(tmp4, tmp6);
        if (cResult[4] === tmp10) {
          if (cResult[5] === tmp5) {
            if (cResult[6] === ref) {
              let tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
        const obj2 = {
          ref,
          maintainVisibleContentPosition,
          masonry: true,
          renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
        };
        const merged = Object.assign(tmp5);
        obj2.refreshControl = tmp10;
        const tmp13 = (
          <closure_14
            ref={ref}
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            masonry
            renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
          />
        );
        cResult[4] = tmp10;
        cResult[5] = tmp5;
        cResult[6] = ref;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
    : (arg0, ref) => {
        ({ preventNativeModalDismiss, refreshControl } = arg0);
        const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
        maintainVisibleContentPosition = {
          ref,
          maintainVisibleContentPosition,
          masonry: true,
          renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
        };
        const merged1 = Object.assign(merged);
        maintainVisibleContentPosition.refreshControl = closure_12(preventNativeModalDismiss, refreshControl);
        return (
          <closure_14
            ref={ref}
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            masonry
            renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
          />
        );
      },
);
