// discord_app/modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx
import c from "../../../../../_runtime/00576_c.js";
import LegacyBaseButton from "../../../../../_runtime/06333_LegacyBaseButton.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileHorizontalScrollView(ref) {
      const cResult = c.c(10);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
        cResult[0] = ref.ref;
        cResult[1] = tmp8;
        cResult[2] = ref.ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { disallowInterruption: true };
        cResult[3] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      const nativeGesture = LegacyBaseButton.useNativeGesture(tmp9);
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp5) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === nativeGesture) {
          if (cResult[8] === tmp11) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
        const obj3 = { gesture: nativeGesture, children: tmp11 };
        const tmp16 = jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp11 });
        cResult[7] = nativeGesture;
        cResult[8] = tmp11;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      const obj4 = { ref: tmp5 };
      const merged = Object.assign(tmp4);
      obj4.horizontal = true;
      obj4.nestedScrollEnabled = true;
      const tmp13 = <ScrollView ref={tmp5} />;
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = tmp13;
      tmp11 = tmp13;
      const tmpResult = LegacyBaseButton;
    }
  : function GameProfileHorizontalScrollView(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
      const obj2 = { gesture: nativeGesture, children: null };
      const obj3 = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj3.horizontal = true;
      obj3.nestedScrollEnabled = true;
      obj2.children = <ScrollView ref={ref.ref} />;
      return jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: null });
    };
