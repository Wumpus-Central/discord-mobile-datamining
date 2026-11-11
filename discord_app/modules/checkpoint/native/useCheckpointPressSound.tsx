// === Module 14432: useCheckpointPressSound ===

// Module 14432 (useCheckpointPressSound)
import useCheckpointSoundDefault from "useCheckpointSound" /* 14399 */;
import noop from "module_19" /* 19 */;

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
    }
  };
};