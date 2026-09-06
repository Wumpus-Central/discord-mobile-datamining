// discord_app/modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default noop.forwardRef((arg0, ref) => {
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  obj = { gesture: nativeGesture, children: null };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj.horizontal = true;
  obj.nestedScrollEnabled = true;
  obj.children = <ScrollView ref={arg1} />;
  return jsx(LegacyBaseButton.GestureDetector, { ref });
});
