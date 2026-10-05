// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import SoundboardIcon from "../../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import VoicePanelStyles from "VoicePanelStyles.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import useSoundboardConfig from "../../hooks/useSoundboardConfig.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const useSoundboardConfigDefault = useSoundboardConfig;

let closure_4;
let hasOwnProperty;
let size;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  circle: size,
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
};
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
let closure_6 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (props) => {
      let color;
      let disabled;
      let disabledAccessibilityHint;
      let handlePress;
      let intl;
      let items;
      let items1;
      let obj6;
      let visible;
      const obj = react2;
      const cResult = obj.c(9);
      props = props.props;
      const wrapperSpecs = props.wrapperSpecs;
      const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
      const tmp5 = closure_6();
      const obj2 = VoicePanelStyles;
      const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
      const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
      const tmp7 = useSoundboardConfigDefault;
      ({ handlePress, disabled, disabledAccessibilityHint, visible } = tmp7(
        channelId,
        useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS,
      ));
      tmp7(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS);
      if (disabled) {
        color = nativeDefault.colors.ICON_MUTED;
      } else {
        color = voicePanelButtonStyles.iconFill.color;
      }
      if (cResult[0] === disabled) {
        if (cResult[1] === disabledAccessibilityHint) {
          if (cResult[2] === backgroundColor) {
            if (cResult[3] === handlePress) {
              if (cResult[4] === color) {
                if (cResult[5] === props) {
                  if (cResult[6] === tmp5) {
                    let tmp9;
                    if (cResult[7] === visible) {
                      tmp9 = cResult[8];
                    }
                    return tmp9;
                  }
                }
              }
            }
          }
        }
      }
      let tmp10 = null;
      if (visible) {
        const element = {
          onPress: handlePress,
          disabled,
          props,
          accessibilityLabel: intl.string(intl2.t["6EJvHt"]),
          accessibilityHint: disabledAccessibilityHint,
          children: items1,
        };
        const tmp4Result = VoicePanelAnimatedButtonWrapperDefault;
        intl = intl2.intl;
        const obj3 = { style: items };
        items = [tmp5.circle];
        const obj4 = { backgroundColor };
        items[1] = obj4;
        items1 = [React3(NativeViewDefault, obj3)];
        const obj5 = { style: tmp5.iconContainer, children: React3(SoundboardIcon.SoundboardIcon, obj6) };
        obj6 = { color };
        const tmp4Result2 = NativeViewDefault;
        items1[1] = React3(tmp4Result2, obj5);
        tmp10 = hasOwnProperty(tmp4Result, element);
      }
      cResult[0] = disabled;
      cResult[1] = disabledAccessibilityHint;
      cResult[2] = backgroundColor;
      cResult[3] = handlePress;
      cResult[4] = color;
      cResult[5] = props;
      cResult[6] = tmp5;
      cResult[7] = visible;
      cResult[8] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let color;
      let disabled;
      let disabledAccessibilityHint;
      let handlePress;
      let intl;
      let items;
      let items1;
      let obj5;
      let props;
      let visible;
      let wrapperSpecs;
      ({ props, wrapperSpecs } = arg0);
      const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
      const tmp3 = closure_6();
      const obj = VoicePanelStyles;
      const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
      const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
      const tmp6 = useSoundboardConfigDefault;
      ({ disabled, handlePress, disabledAccessibilityHint, visible } = tmp6(
        channelId,
        useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS,
      ));
      tmp6(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS);
      if (disabled) {
        color = nativeDefault.colors.ICON_MUTED;
      } else {
        color = voicePanelButtonStyles.iconFill.color;
      }
      let tmp8 = null;
      if (visible) {
        const element = {
          onPress: handlePress,
          disabled,
          props,
          accessibilityLabel: intl.string(intl2.t["6EJvHt"]),
          accessibilityHint: disabledAccessibilityHint,
          children: items1,
        };
        const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
        intl = intl2.intl;
        const obj2 = { style: items };
        items = [tmp3.circle];
        const obj3 = { backgroundColor };
        items[1] = obj3;
        items1 = [React3(NativeViewDefault, obj2)];
        const obj4 = { style: tmp3.iconContainer, children: React3(SoundboardIcon.SoundboardIcon, obj5) };
        obj5 = { color };
        const tmpResult2 = NativeViewDefault;
        items1[1] = React3(tmpResult2, obj4);
        tmp8 = hasOwnProperty(tmpResult, element);
      }
      return tmp8;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default tmp3;
