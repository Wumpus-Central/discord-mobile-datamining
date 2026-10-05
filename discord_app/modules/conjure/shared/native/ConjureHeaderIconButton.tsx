// discord_app/modules/conjure/shared/native/ConjureHeaderIconButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({
  button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
});
const androidRippleConfig = { borderless: true, radius: 20 };
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let IconComponent;
        let accessibilityActions;
        let accessibilityLabel;
        let accessibilityState;
        let disabled;
        let onAccessibilityAction;
        let onPress;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(12);
        ({
          IconComponent,
          onPress,
          accessibilityLabel,
          accessibilityActions,
          onAccessibilityAction,
          accessibilityState,
          disabled,
        } = arg0);
        const tmp4 = closure_3();
        if (cResult[0] !== IconComponent) {
          const tmp7 = <IconComponent />;
          cResult[0] = IconComponent;
          cResult[1] = tmp7;
          tmp5 = tmp7;
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
                        let tmp8;
                        if (cResult[10] === tmp5) {
                          tmp8 = cResult[11];
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
      }
    : (arg0, ref) => {
        let IconComponent;
        let accessibilityActions;
        let accessibilityLabel;
        let accessibilityState;
        let disabled;
        let onAccessibilityAction;
        let onPress;
        ({
          IconComponent,
          onPress,
          accessibilityLabel,
          accessibilityActions,
          onAccessibilityAction,
          accessibilityState,
          disabled,
        } = arg0);
        const PressableOpacity = Pressables.PressableOpacity;
        return (
          <PressableOpacity
            ref={ref}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
            accessibilityActions={accessibilityActions}
            onAccessibilityAction={onAccessibilityAction}
            accessibilityState={accessibilityState}
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.6}
            androidRippleConfig={androidRippleConfig}
            style={closure_3().button}
          >
            {null}
          </PressableOpacity>
        );
      },
);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureHeaderIconButton.tsx");

export default forwardRefResult;
