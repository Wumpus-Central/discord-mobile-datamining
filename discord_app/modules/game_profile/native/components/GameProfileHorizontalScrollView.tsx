// === Module 9386: GameProfileHorizontalScrollView ===

// Module 9386 (GameProfileHorizontalScrollView)
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default function GameProfileHorizontalScrollView(ref) {
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