// discord_app/modules/image_upload/AttachmentImageLadderExperiment.tsx
import ApexExperiment from "ApexExperiment";

let obj = { enabled: false, maxUpscale: require("items").ATTACHMENT_LADDER_MAX_UPSCALE, minSnapDownDpr: 2 };
obj = { name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig: obj, variations: null };
obj = { 0: obj, 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.enabled = true;
obj[1] = obj1;
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};