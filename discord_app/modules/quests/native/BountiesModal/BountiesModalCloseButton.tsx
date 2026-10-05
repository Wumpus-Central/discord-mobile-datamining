// discord_app/modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon2 from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let onPress;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles(() => {
  const obj = { closeButton: size };
  size = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    width: nativeDefault.space.PX_32,
    height: nativeDefault.space.PX_32,
  };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(5);
      onPress = onPress.onPress;
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.cpT0Cq);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const XSmallIcon = XSmallIcon2.XSmallIcon;
        const tmp10 = <XSmallIcon size="sm" color={nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT} />;
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === onPress) {
        let tmp11;
        if (cResult[3] === tmp4.closeButton) {
          tmp11 = cResult[4];
        }
        return tmp11;
      }
      const tmp12 = jsx(Pressables.PressableOpacity, {
        accessibilityLabel: first,
        accessibilityRole: "button",
        hitSlop: 12,
        onPress,
        style: tmp4.closeButton,
        children: tmp7,
      });
      cResult[2] = onPress;
      cResult[3] = tmp4.closeButton;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : (onPress) => {
      onPress = onPress.onPress;
      const tmp = closure_4();
      const PressableOpacity = Pressables.PressableOpacity;
      const intl = intl2.intl;
      ({ size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
      const XSmallIcon = XSmallIcon2.XSmallIcon;
      return (
        <PressableOpacity
          accessibilityLabel={intl.string(intl2.t.cpT0Cq)}
          accessibilityRole="button"
          hitSlop={12}
          onPress={onPress}
          style={tmp.closeButton}
        >
          {null}
        </PressableOpacity>
      );
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default tmp3;
