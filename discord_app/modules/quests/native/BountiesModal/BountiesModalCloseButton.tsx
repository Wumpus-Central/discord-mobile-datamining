// === Module 15167: BountiesModalCloseButton ===

// Module 15167 (BountiesModalCloseButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Pressables from "Pressables" /* 5208 */;
import XSmallIcon from "XSmallIcon" /* 5766 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_4 = createStyles.createStyles(() => {
  const obj = { closeButton: null };
  const size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32 };
  obj.closeButton = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  const obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = onPress.onPress;
  obj.style = closure_4().closeButton;
  const tmp = closure_4();
  obj.children = jsx(XSmallIcon.XSmallIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null });
};