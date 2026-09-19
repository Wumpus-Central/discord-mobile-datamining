// discord_app/modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx
import LegacyBaseButton from "../../../../../_runtime/06892_LegacyBaseButton.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default noop.forwardRef((arg0, ref) => {
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: null };
  const obj3 = { ref };
  const merged = Object.assign(arg0);
  obj3.horizontal = true;
  obj3.nestedScrollEnabled = true;
  obj2.children = <ScrollView ref={ref} />;
  return jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: null });
});
