// === Module 1431: AttachmentImageLadderExperiment ===

// Module 1431 (AttachmentImageLadderExperiment)
import AttachmentImageLadder from "AttachmentImageLadder" /* 1432 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { enabled: false, maxUpscale: AttachmentImageLadder.ATTACHMENT_LADDER_MAX_UPSCALE, minSnapDownDpr: 2 };
obj = { name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig: obj, variations: null };
obj = { 0: obj, 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.enabled = true;
obj[1] = obj1;
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};