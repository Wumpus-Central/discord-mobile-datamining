// === Module 8973: GameProfileSkeleton ===

// Module 8973 (GameProfileSkeleton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4458 */;
import GameProfileSkeletonPulse from "GameProfileSkeletonPulse" /* 8974 */;
import noop from "module_19" /* 19 */;

require = fn;
class GameProfileSkeletonPlaceholder {
  constructor(arg0) {
    obj = { style: null };
    items = [, ];
    items[0] = closure_5().placeholder;
    items[1] = global.style;
    obj.style = items;
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj2 = { placeholder: { backgroundColor: nativeDefault.colors.ICON_MUTED }, button: null, buttonSm: null, buttonMd: null };
const obj3 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.button = { borderRadius: nativeDefault.radii.sm };
let size = { width: 92, height: nativeDefault.space.PX_32, flexShrink: 0 };
obj2.buttonSm = size;
const size1 = { width: "100%", height: nativeDefault.space.PX_40 };
obj2.buttonMd = size1;
const hasOwnProperty = createStyles.createStyles(obj2);
let closure_6 = { sm: "buttonSm", md: "buttonMd" };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeleton.tsx");

export default GameProfileSkeletonPlaceholder;
export const SKELETON_CARD_ANIMATION_DELAY_MS = 150;
export const GameProfileSkeletonContainer = function GameProfileSkeletonContainer(animationDelayMs) {
  let num = animationDelayMs.animationDelayMs;
  if (num === undefined) {
    num = 0;
  }
  ({ children, style } = animationDelayMs);
  const skeletonPulseStyle = GameProfileSkeletonPulse.useSkeletonPulseStyle(num);
  const obj2 = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
  const items = [style, skeletonPulseStyle];
  obj2.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children });
};
export const GameProfileSkeletonButton = function GameProfileSkeletonButton(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const tmp = closure_5();
  const obj = { style: null };
  const items = [tmp.button, tmp[closure_6[str]], size.style];
  obj.style = items;
  return <GameProfileSkeletonPlaceholder style={null} />;
};