// discord_app/modules/checkpoint/native/useCheckpointPressSound.tsx
import useCheckpointSoundDefault from "useCheckpointSound.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPressSound.tsx");

export default function useCheckpointPressSound(arg0, arg1) {
  closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  closure_2 = useCheckpointSoundDefault(arg0);
  noop.useRef(false);
  return {
    onPressIn() {
      closure_3.current = true;
      if (!flag) {
        closure_2();
      }
    },
    onPress() {
      if (!ref.current) {
        if (!flag) {
          closure_2();
        }
      }
      ref.current = false;
      closure_0();
    },
  };
}
