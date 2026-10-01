// discord_app/modules/media/native/openPlaintextFilePreview.tsx
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(11291, dependencyMap.paths),
    merged,
    PlaintextFilePreview,
  );
};
