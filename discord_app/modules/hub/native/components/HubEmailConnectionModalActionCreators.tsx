// === Module 12743: HubEmailConnectionModalActionCreators ===

// Module 12743 (HubEmailConnectionModalActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default {
  open(merged, arg1) {
    closure_0 = arg1;
    ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
      closure_1 = tmp5;
      await tmp2(paths[3])(paths[2], paths.paths);
      closure_128_0 = arg1.default;
      if (null != closure_129_0) {
        closure_128_0.modalConfig = { animation: closure_129_0 };
      }
      return closure_128_0;
    }), merged, HUB_EMAIL_CONNECTION_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  }
};