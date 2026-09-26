// === Module 1433: AttachmentImageLadderExperiment ===

// Module 1433 (AttachmentImageLadderExperiment)
import AttachmentImageLadder from "AttachmentImageLadder" /* 1434 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { enabled: false, maxUpscale: AttachmentImageLadder.ATTACHMENT_LADDER_MAX_UPSCALE, minSnapDownDpr: 2 };
const obj2 = { name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 0: obj, 1: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.enabled = true;
obj3[1] = obj4;
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};