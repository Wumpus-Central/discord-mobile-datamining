// === Module 7164: useInputRevealButton ===

// Module 7164 (useInputRevealButton)
import EyeSlashIcon from "EyeSlashIcon" /* 7165 */;
import EyeIcon2 from "EyeIcon" /* 7167 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputRevealButton.native.tsx");

export function useInputRevealButtonConfig(merged, state) {
  const revealable = merged.revealable;
  const secureTextEntry = merged.secureTextEntry;
  const disabled = merged.disabled;
  const isRevealed = state.isRevealed;
  if (tmp) {
    if (tmp2) {
      if (isRevealed) {
        let EyeIcon = EyeSlashIcon.EyeSlashIcon;
        let tmp8 = require;
      } else {
        EyeIcon = EyeIcon2.EyeIcon;
        tmp8 = require;
      }
      const obj = { content: <EyeIcon size="xs" color="input-icon-default" accessible={false} />, pressableProps: null };
      const obj2 = { onPress: tmp4, disabled: tmp3, accessibilityState: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: null };
      const obj3 = { disabled: tmp3 };
      obj2.accessibilityState = obj3;
      const intl = tmp8(1113).intl;
      const string = intl.string;
      const t = tmp8(1113).t;
      if (isRevealed) {
        let stringResult = string(t.Nusip4);
      } else {
        stringResult = string(t.nFzpM5);
      }
      obj2.accessibilityLabel = stringResult;
      obj2.hitSlop = { top: 8, bottom: 8 };
      obj.pressableProps = obj2;
      return obj;
    }
  }
  return null;
}