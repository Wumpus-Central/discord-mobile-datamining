// discord_common/js/packages/flash-list/index.js
import c from "../../../../_runtime/00576_c.js";
import PlatformUtils2 from "../../../../discord_app/utils/PlatformUtils.tsx";
import BottomSheetModal from "../../../../_runtime/06306_BottomSheetModal.js";
import _modDef6530 from "../../../../_runtime/metro/06530__.js";
import _mod6531 from "../../../../_runtime/metro/06531__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop_mod from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport_mod from "../../../../discord_app/modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
let closure_5 = ["preventNativeModalDismiss", "ref"];
let closure_6 = ["preventNativeModalDismiss", "refreshControl", "ref"];
let closure_7 = ["preventNativeModalDismiss", "refreshControl", "ref"];
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1382);
let obj2;
if (PlatformUtils.isAndroid()) {
  obj2 = { disabled: true };
}
noop = function noop() {};
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useModalDismissGuardRefreshControl(arg0, arg1) {
      const cResult = c.c(1);
      let tmp4 = arg1;
      if (null == arg1) {
        tmp4 = arg1;
        if (true === arg0) {
          tmp4 = arg1;
          if (tmpResult.isIOS()) {
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
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
  : function useModalDismissGuardRefreshControl(arg0, arg1) {
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
              obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
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
let closure_15 = ReanimatedRexport.createAnimatedComponent(fn(6531).FlashList);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (ref) => {
      const cResult = c.c(6);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
        cResult[0] = ref.ref;
        cResult[1] = tmp8;
        cResult[2] = ref.ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        if (cResult[4] === tmp5) {
          let tmp9 = cResult[5];
        }
        return tmp9;
      }
      obj2 = { maintainVisibleContentPosition: obj2, ref: tmp5 };
      const merged = Object.assign(tmp4);
      const tmp11 = jsx(_mod6531.FlashList, { maintainVisibleContentPosition: obj2, ref: tmp5 });
      cResult[3] = tmp4;
      cResult[4] = tmp5;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    }
  : (ref) => {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const merged1 = Object.assign(merged);
      return jsx(_mod6531.FlashList, { maintainVisibleContentPosition: obj2, ref: ref.ref });
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (ref) => {
      const cResult = c.c(6);
      if (cResult[0] !== ref) {
        const tmp6 = _objectWithoutProperties(ref.ref, closure_4);
        cResult[0] = ref.ref;
        cResult[1] = tmp6;
        cResult[2] = ref.ref;
        let tmp3 = ref;
        let tmp2 = tmp6;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      if (cResult[3] === tmp2) {
        if (cResult[4] === tmp3) {
          let tmp7 = cResult[5];
        }
        return tmp7;
      }
      obj2 = { maintainVisibleContentPosition: obj2, ref: tmp3 };
      const merged = Object.assign(tmp2);
      const tmp9 = <closure_15 maintainVisibleContentPosition={obj2} ref={tmp3} />;
      cResult[3] = tmp2;
      cResult[4] = tmp3;
      cResult[5] = tmp9;
      tmp7 = tmp9;
    }
  : (ref) => {
      const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
      return <closure_15 maintainVisibleContentPosition={obj2} ref={ref.ref} />;
    };
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_16 = ReanimatedRexport.createAnimatedComponent(fn(6531).FlashList);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      if (cResult[0] !== arg0) {
        ({ preventNativeModalDismiss, ref } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        if (cResult[4] === tmp5) {
          let tmp9 = cResult[5];
        }
        return tmp9;
      }
      obj2 = { ref: tmp5, maintainVisibleContentPosition: obj2, masonry: true };
      const merged = Object.assign(tmp4);
      const tmp11 = jsx(_mod6531.FlashList, { ref: tmp5, maintainVisibleContentPosition: obj2, masonry: true });
      cResult[3] = tmp4;
      cResult[4] = tmp5;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    }
  : (ref) => {
      const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, ref: 0 }));
      const merged1 = Object.assign(merged);
      return jsx(_mod6531.FlashList, { ref: ref.ref, maintainVisibleContentPosition: obj2, masonry: true });
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_6);
        cResult[0] = arg0;
        cResult[1] = preventNativeModalDismiss;
        cResult[2] = tmp9;
        cResult[3] = ref;
        cResult[4] = refreshControl;
        let tmp6 = refreshControl;
        let tmp5 = ref;
        let tmp4 = tmp9;
        let tmp3 = preventNativeModalDismiss;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const tmp10 = closure_14(tmp3, tmp6);
      if (cResult[5] === tmp10) {
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            let tmp11 = cResult[8];
          }
          return tmp11;
        }
      }
      obj2 = { ref: tmp5, maintainVisibleContentPosition: obj2 };
      const merged = Object.assign(tmp4);
      obj2.refreshControl = tmp10;
      const tmp14 = jsx(_modDef6530, { ref: tmp5, maintainVisibleContentPosition: obj2 });
      cResult[5] = tmp10;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
  : (arg0) => {
      ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
      const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
      const obj = { ref, maintainVisibleContentPosition: obj2 };
      const tmp2 = closure_14(preventNativeModalDismiss, refreshControl);
      const merged1 = Object.assign(merged);
      obj.refreshControl = tmp2;
      return jsx(_modDef6530, { ref, maintainVisibleContentPosition: obj2 });
    };
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10085 in require("../../../../_runtime/metro/06531__.js")) {
  arg5[key10085] = require("../../../../_runtime/metro/06531__.js")[key10085];
  continue;
}
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_7);
        cResult[0] = arg0;
        cResult[1] = preventNativeModalDismiss;
        cResult[2] = tmp10;
        cResult[3] = ref;
        cResult[4] = refreshControl;
        let tmp7 = refreshControl;
        let tmp6 = ref;
        let tmp5 = tmp10;
        let tmp4 = preventNativeModalDismiss;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const tmp11 = closure_14(tmp4, tmp7);
      if (cResult[5] === tmp11) {
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp6) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      obj2 = {
        ref: tmp6,
        maintainVisibleContentPosition: obj2,
        masonry: true,
        renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
      };
      const merged = Object.assign(tmp5);
      obj2.refreshControl = tmp11;
      const tmp14 = (
        <closure_16
          ref={tmp6}
          maintainVisibleContentPosition={obj2}
          masonry
          renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
        />
      );
      cResult[5] = tmp11;
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
  : (arg0) => {
      ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
      const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
      const obj = {
        ref,
        maintainVisibleContentPosition: obj2,
        masonry: true,
        renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
      };
      const merged1 = Object.assign(merged);
      obj.refreshControl = closure_14(preventNativeModalDismiss, refreshControl);
      return (
        <closure_16
          ref={ref}
          maintainVisibleContentPosition={obj2}
          masonry
          renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
        />
      );
    };

export const defaultMVCPConfig = obj2;
export const FlashList = tmp2;
export const AnimatedFlashList = tmp3;
export const MasonryFlashList = tmp4;
export const BottomSheetFlashList = tmp5;
export const BottomSheetMasonryFlashList = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_7);
        cResult[0] = arg0;
        cResult[1] = preventNativeModalDismiss;
        cResult[2] = tmp10;
        cResult[3] = ref;
        cResult[4] = refreshControl;
        let tmp7 = refreshControl;
        let tmp6 = ref;
        let tmp5 = tmp10;
        let tmp4 = preventNativeModalDismiss;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const tmp11 = closure_14(tmp4, tmp7);
      if (cResult[5] === tmp11) {
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp6) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      obj2 = {
        ref: tmp6,
        maintainVisibleContentPosition: obj2,
        masonry: true,
        renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
      };
      const merged = Object.assign(tmp5);
      obj2.refreshControl = tmp11;
      const tmp14 = (
        <closure_16
          ref={tmp6}
          maintainVisibleContentPosition={obj2}
          masonry
          renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
        />
      );
      cResult[5] = tmp11;
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
  : (arg0) => {
      ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
      const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
      const obj = {
        ref,
        maintainVisibleContentPosition: obj2,
        masonry: true,
        renderScrollComponent: BottomSheetModal.BottomSheetScrollView,
      };
      const merged1 = Object.assign(merged);
      obj.refreshControl = closure_14(preventNativeModalDismiss, refreshControl);
      return (
        <closure_16
          ref={ref}
          maintainVisibleContentPosition={obj2}
          masonry
          renderScrollComponent={BottomSheetModal.BottomSheetScrollView}
        />
      );
    };
