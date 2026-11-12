// discord_app/modules/checkpoint/native/useCheckpointPressSound.tsx
import useCheckpointSoundDefault from "useCheckpointSound.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    },
  };
}
