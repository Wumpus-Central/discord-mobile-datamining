// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useStateFromSharedValue from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_3 = createStyles.createStyles((arg0) => {
  const obj = {
    iconBg: { backgroundColor: "transparent" },
    iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE },
    iconBgVoiceMuted: null,
    iconFill: null,
    iconFillMuted: null,
    iconFillRed: null,
    iconFillSelected: null,
    iconBadgeIndicator: null,
  };
  const obj2 = { backgroundColor: nativeDefault.colors.WHITE };
  obj.iconBgVoiceMuted = {
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED,
    backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED,
  };
  const colors = nativeDefault.colors;
  obj.iconFill = { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG };
  const obj3 = {
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED,
    backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED,
  };
  obj.iconFillMuted = { color: nativeDefault.colors.ICON_MUTED };
  const obj4 = { color: nativeDefault.colors.ICON_MUTED };
  obj.iconFillRed = { color: nativeDefault.unsafe_rawColors.RED_400 };
  const obj5 = { color: nativeDefault.unsafe_rawColors.RED_400 };
  obj.iconFillSelected = { color: nativeDefault.colors.BLACK };
  const colors2 = nativeDefault.colors;
  obj.iconBadgeIndicator = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoicePanelButtonStyles(arg0) {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(drawerMode) {
          return drawerMode.drawerMode;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(useStateFromSharedValue.useDerivedStateFromSharedValue(arg0, first));
    }
  : function useVoicePanelButtonStyles(arg0) {
      return closure_3(
        useStateFromSharedValue.useDerivedStateFromSharedValue(arg0, (drawerMode) => drawerMode.drawerMode),
      );
    };
