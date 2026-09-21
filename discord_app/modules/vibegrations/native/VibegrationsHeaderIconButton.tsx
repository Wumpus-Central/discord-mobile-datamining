// === Module 16938: VibegrationsHeaderIconButton ===

// Module 16938 (VibegrationsHeaderIconButton)
import Pressables from "Pressables" /* 5339 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_3 = createStyles.createStyles({ button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
const androidRippleConfig = { borderless: true, radius: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsHeaderIconButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ IconComponent, onPress, accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled } = arg0);
  const tmp = closure_3();
  return jsx(Pressables.PressableOpacity, { ref, accessibilityRole: "button", accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled, onPress, activeOpacity: 0.6, androidRippleConfig, style: closure_3().button, children: <IconComponent /> });
});