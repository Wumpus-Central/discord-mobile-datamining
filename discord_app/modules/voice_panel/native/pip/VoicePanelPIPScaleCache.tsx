// === Module 17461: VoicePanelPIPScaleCache ===

// Module 17461 (VoicePanelPIPScaleCache)
import Storage2 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

const VoicePanelPIPScale = "VoicePanelPIPScale";
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPScaleCache.tsx");

export const getVoicePanelPIPScaleCached = function getVoicePanelPIPScaleCached() {
  const Storage = Storage2.Storage;
  let num = Storage.get(VoicePanelPIPScale);
  if (num == null) {
    num = 1;
  }
  let num2 = 1;
  if (Number.isFinite(num)) {
    num2 = 1;
    if (num > 0) {
      num2 = num;
    }
  }
  return num2;
};
export const setVoicePanelPIPScaleCached = function setVoicePanelPIPScaleCached(arg0) {
  const Storage = Storage2.Storage;
  const result = Storage.set(VoicePanelPIPScale, arg0);
};