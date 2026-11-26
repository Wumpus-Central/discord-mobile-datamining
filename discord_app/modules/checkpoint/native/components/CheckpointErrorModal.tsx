// === Module 12931: CheckpointErrorModal ===

// Module 12931 (CheckpointErrorModal)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1112 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12662 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12932 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointErrorModal.tsx");

export default function CheckpointErrorModal() {
  useCheckpointMusicDefault();
  const obj = { message: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.fEptJP);
  return jsx(CheckpointMessageModalDefault, { message: null });
};