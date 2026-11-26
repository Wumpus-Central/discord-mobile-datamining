// discord_app/modules/checkpoint/native/components/CheckpointErrorModal.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import useCheckpointMusicDefault from "../useCheckpointMusic.tsx";
import CheckpointMessageModalDefault from "CheckpointMessageModal.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointErrorModal.tsx");

export default function CheckpointErrorModal() {
  useCheckpointMusicDefault();
  const obj = { message: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.fEptJP);
  return jsx(CheckpointMessageModalDefault, { message: null });
}
