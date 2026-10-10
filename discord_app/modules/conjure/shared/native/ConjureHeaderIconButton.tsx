// discord_app/modules/conjure/shared/native/ConjureHeaderIconButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_3 = createStyles.createStyles({
  button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
});
const androidRippleConfig = { borderless: true, radius: 20 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureHeaderIconButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureHeaderIconButton(arg0) {
      const cResult = c.c(12);
      ({
        IconComponent,
        onPress,
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        ref,
      } = arg0);
      const tmp4 = closure_3();
      if (cResult[0] !== IconComponent) {
        const tmp7 = <IconComponent />;
        cResult[0] = IconComponent;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === accessibilityActions) {
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === accessibilityState) {
            if (cResult[5] === disabled) {
              if (cResult[6] === onAccessibilityAction) {
                if (cResult[7] === onPress) {
                  if (cResult[8] === ref) {
                    if (cResult[9] === tmp4.button) {
                      if (cResult[10] === tmp5) {
                        let tmp8 = cResult[11];
                      }
                      return tmp8;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp9 = jsx(Pressables.PressableOpacity, {
        ref,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        onPress,
        activeOpacity: 0.6,
        androidRippleConfig,
        style: tmp4.button,
        children: tmp5,
      });
      cResult[2] = accessibilityActions;
      cResult[3] = accessibilityLabel;
      cResult[4] = accessibilityState;
      cResult[5] = disabled;
      cResult[6] = onAccessibilityAction;
      cResult[7] = onPress;
      cResult[8] = ref;
      cResult[9] = tmp4.button;
      cResult[10] = tmp5;
      cResult[11] = tmp9;
      tmp8 = tmp9;
      const obj2 = {
        ref,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        onPress,
        activeOpacity: 0.6,
        androidRippleConfig,
        style: tmp4.button,
        children: tmp5,
      };
    }
  : function ConjureHeaderIconButton(arg0) {
      ({
        IconComponent,
        onPress,
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        ref,
      } = arg0);
      const tmp = closure_3();
      return jsx(Pressables.PressableOpacity, {
        ref,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        onPress,
        activeOpacity: 0.6,
        androidRippleConfig,
        style: closure_3().button,
        children: <IconComponent />,
      });
    };
