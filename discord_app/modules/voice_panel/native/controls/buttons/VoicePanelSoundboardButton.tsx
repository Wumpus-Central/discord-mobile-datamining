// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import SoundboardIcon from "../../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import VoicePanelStyles from "VoicePanelStyles.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import useSoundboardConfig from "../../hooks/useSoundboardConfig.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj2.circle = size;
obj2.iconContainer = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SoundboardButton(props) {
      const cResult = c.c(9);
      props = props.props;
      const tmp5 = closure_6();
      const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(props.wrapperSpecs);
      const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
      ({ handlePress, disabled, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(
        noop.useContext(VoicePanelStateContextDefault).channelId,
        useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS,
      ));
      if (disabled) {
        let color = nativeDefault.colors.ICON_MUTED;
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
                    if (cResult[7] === visible) {
                      let tmp9 = cResult[8];
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
          accessibilityLabel: null,
          accessibilityHint: null,
          children: null,
        };
        const intl = util.intl;
        element.accessibilityLabel = intl.string(util.t["6EJvHt"]);
        element.accessibilityHint = disabledAccessibilityHint;
        const obj3 = { style: null };
        const items = [tmp5.circle];
        const obj4 = { backgroundColor };
        items[1] = obj4;
        obj3.style = items;
        const items1 = [React4(NativeViewDefault, obj3)];
        const obj5 = { style: tmp5.iconContainer, children: null };
        const tmp4Result = VoicePanelAnimatedButtonWrapperDefault;
        const obj6 = { color };
        obj5.children = React4(SoundboardIcon.SoundboardIcon, obj6);
        items1[1] = React4(NativeViewDefault, obj5);
        element.children = items1;
        tmp10 = hasOwnProperty(tmp4Result, element);
        const tmp4Result2 = NativeViewDefault;
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
      const tmp7Result = useSoundboardConfigDefault(
        noop.useContext(VoicePanelStateContextDefault).channelId,
        useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS,
      );
    }
  : function SoundboardButton(arg0) {
      ({ props, wrapperSpecs } = arg0);
      const tmp3 = closure_6();
      const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
      ({ disabled, handlePress, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(
        noop.useContext(VoicePanelStateContextDefault).channelId,
        useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS,
      ));
      if (disabled) {
        let color = nativeDefault.colors.ICON_MUTED;
      } else {
        color = voicePanelButtonStyles.iconFill.color;
      }
      let tmp8 = null;
      if (visible) {
        const element = {
          onPress: handlePress,
          disabled,
          props,
          accessibilityLabel: null,
          accessibilityHint: null,
          children: null,
        };
        const intl = util.intl;
        element.accessibilityLabel = intl.string(util.t["6EJvHt"]);
        element.accessibilityHint = disabledAccessibilityHint;
        const obj2 = { style: null };
        const items = [tmp3.circle];
        const obj3 = { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor };
        items[1] = obj3;
        obj2.style = items;
        const items1 = [React4(NativeViewDefault, obj2)];
        const obj4 = { style: tmp3.iconContainer, children: null };
        const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
        const obj5 = { color };
        obj4.children = React4(SoundboardIcon.SoundboardIcon, obj5);
        items1[1] = React4(NativeViewDefault, obj4);
        element.children = items1;
        tmp8 = hasOwnProperty(tmpResult, element);
        const tmpResult2 = NativeViewDefault;
      }
      return tmp8;
    };
