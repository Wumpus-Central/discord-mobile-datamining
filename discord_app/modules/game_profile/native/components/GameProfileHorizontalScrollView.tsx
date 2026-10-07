// discord_app/modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx
import c from "../../../../../_runtime/00576_c.js";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(7);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { disallowInterruption: true };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const nativeGesture = LegacyBaseButton.useNativeGesture(first);
        if (cResult[1] === arg0) {
          if (cResult[2] === ref) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] === nativeGesture) {
            if (cResult[5] === tmp6) {
              let tmp9 = cResult[6];
            }
            return tmp9;
          }
          const obj3 = { gesture: nativeGesture, children: tmp6 };
          const tmp11 = jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp6 });
          cResult[4] = nativeGesture;
          cResult[5] = tmp6;
          cResult[6] = tmp11;
          tmp9 = tmp11;
        }
        const obj4 = { ref };
        const merged = Object.assign(arg0);
        obj4.horizontal = true;
        obj4.nestedScrollEnabled = true;
        const tmp8 = <ScrollView ref={ref} />;
        cResult[1] = arg0;
        cResult[2] = ref;
        cResult[3] = tmp8;
        tmp6 = tmp8;
        const tmpResult = LegacyBaseButton;
      }
    : (arg0, ref) => {
        const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
        const obj2 = { gesture: nativeGesture, children: null };
        const obj3 = { ref };
        const merged = Object.assign(arg0);
        obj3.horizontal = true;
        obj3.nestedScrollEnabled = true;
        obj2.children = <ScrollView ref={ref} />;
        return jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: null });
      },
);
