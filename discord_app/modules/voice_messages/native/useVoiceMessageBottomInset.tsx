// discord_app/modules/voice_messages/native/useVoiceMessageBottomInset.tsx
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useKeyboardAnimatedValueDefault from "../../keyboard/native/useKeyboardAnimatedValue.tsx";
import VoicePanelSheetMorph from "../../voice_panel/native/dock/VoicePanelSheetMorph.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_4 = {
  code: "(function useVoiceMessageBottomInsetTsx1(){let[animatedInsetsBottom,animatedDockHeight]=this.__closure;return Math.max(animatedInsetsBottom.get(),animatedDockHeight.get());})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageBottomInset.tsx");

export default function useVoiceMessageBottomInset() {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({
    includeCustomKeyboardHeight: true,
    includeKeyboardHeight: true,
  }).insets;
  const tmp = useKeyboardAnimatedValueDefault(insets.bottom);
  const channelDockHeight = require("VoicePanelDockLayout").useChannelDockHeight();
  _require = channelDockHeight;
  const obj = require("VoicePanelDockLayout");
  const sharedValue = require("../../../../_runtime/metro/01655__.js").useSharedValue(channelDockHeight);
  items = [sharedValue, channelDockHeight];
  const effect = noop.useEffect(() => {
    const result = _undefined2.set(spring_spring.withSpring(c0, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
  }, items);
  const obj2 = require("../../../../_runtime/metro/01655__.js");
  const items1 = [closure_4, tmp, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp5, tmp6, tmp7] = items1;
  function useVoiceMessageBottomInsetTsx1() {
    value = _undefined.get();
    return Math.max(value, _undefined2.get());
  }
  const items2 = [tmp6, tmp7];
  useVoiceMessageBottomInsetTsx1.__closure = items2;
  useVoiceMessageBottomInsetTsx1.__workletHash = 9835465598919;
  useVoiceMessageBottomInsetTsx1.__initData = tmp5;
  const obj3 = require("../../../../_runtime/metro/01655__.js");
  return {
    bottomInset: require("../../../../_runtime/metro/01655__.js").useDerivedValue(useVoiceMessageBottomInsetTsx1),
    targetBottomInset: Math.max(insets.bottom, channelDockHeight),
  };
}
