// discord_app/modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import n from "../../../../../_runtime/metro/00672__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let obj = { disabled: { opacity: 0.5 }, container: null, blur: null };
obj = { borderRadius: nativeDefault.radii.round, overflow: "hidden" };
obj.container = obj;
const createStyles = { backgroundColor: null, padding: null };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
createStyles.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
createStyles.padding = nativeDefault.space.PX_12;
obj.blur = createStyles;
let closure_4 = createStyles.createStyles(obj);
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = noop.memo((arg0) => {
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const tmp2 = closure_4();
  const items = [tmp2.container, ,];
  let disabled = merged.disabled;
  if (disabled) {
    disabled = tmp2.disabled;
  }
  let obj = { style: items };
  items[1] = disabled;
  items[2] = style;
  const merged1 = Object.assign(merged);
  obj = { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children };
  obj.children = jsx(VisualEffectViewDefault, {
    style: tmp2.blur,
    blurAmount: 0.2,
    blurStyle: "default",
    blurTheme: "dark",
    children,
  });
  return jsx(Pressables.PressableOpacity, {
    style: tmp2.blur,
    blurAmount: 0.2,
    blurStyle: "default",
    blurTheme: "dark",
    children,
  });
});
