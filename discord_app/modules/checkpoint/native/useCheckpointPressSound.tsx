// === Module 14428: useCheckpointPressSound ===

// Module 14428 (useCheckpointPressSound)
import useCheckpointSoundDefault from "useCheckpointSound" /* 14395 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPressSound.tsx");

export default function useCheckpointPressSound(source) {
  ({ onPress: importDefault, disabled } = source);
  if (disabled === undefined) {
    disabled = false;
  }
  closure_2 = useCheckpointSoundDefault(source.source);
  noop.useRef(false);
  return {
    onPressIn() {
      closure_3.current = true;
      if (!disabled) {
        closure_2();
      }
    },
    onPressWithSound() {
      if (!ref.current) {
        if (!disabled) {
          closure_2();
        }
      }
      ref.current = false;
      importDefault();
    }
  };
};