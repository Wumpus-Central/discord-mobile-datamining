// discord_app/modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx
import isConjureApplicationDefault from "../shared/isConjureApplication.tsx";
import conjurePreviewSurface from "../preview/conjurePreviewSurface.tsx";
import ConjureBuilderPreviewStore from "../preview/ConjureBuilderPreviewStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  let result = conjurePreviewSurface.isConjurePreviewSurface(surface.surface);
  if (result) {
    result = isConjureApplicationDefault(surface.applicationId);
  }
  if (result) {
    result = ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  }
  return result;
}
