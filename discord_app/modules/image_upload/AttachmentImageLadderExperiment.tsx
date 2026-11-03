// === Module 1447: AttachmentImageLadderExperiment ===

// Module 1447 (AttachmentImageLadderExperiment)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1448 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

function parseTreatmentConfig(arg0) {
  const parsed = JSON.parse(arg0);
  let maxUpscale = parsed.maxUpscale;
  if (maxUpscale == null) {
    maxUpscale = obj.maxUpscale;
  }
  let isFiniteResult = typeof maxUpscale === "number";
  if (typeof maxUpscale === "number") {
    const _Number2 = Number;
    isFiniteResult = Number.isFinite(maxUpscale);
  }
  if (isFiniteResult) {
    isFiniteResult = maxUpscale >= 1;
  }
  if (isFiniteResult) {
    isFiniteResult = maxUpscale <= 1.5;
  }
  _modDef38(isFiniteResult, "maxUpscale must be a number in [1, %s]", 1.5);
  let minSnapDownDpr = parsed.minSnapDownDpr;
  if (minSnapDownDpr == null) {
    minSnapDownDpr = obj.minSnapDownDpr;
  }
  let isFiniteResult1 = typeof minSnapDownDpr === "number";
  if (typeof minSnapDownDpr === "number") {
    const _Number3 = Number;
    isFiniteResult1 = Number.isFinite(minSnapDownDpr);
  }
  if (isFiniteResult1) {
    isFiniteResult1 = minSnapDownDpr >= 1;
  }
  if (isFiniteResult1) {
    isFiniteResult1 = minSnapDownDpr <= 4;
  }
  _modDef38(isFiniteResult1, "minSnapDownDpr must be a number in [1, %s]", 4);
  let ladder = parsed.ladder;
  if (ladder == null) {
    ladder = obj.ladder;
  }
  const tmp4Result = _modDef38;
  let isArray = Array.isArray(ladder);
  if (isArray) {
    isArray = ladder.length > 0;
  }
  if (isArray) {
    isArray = ladder.length <= 32;
  }
  _modDef38(isArray, "ladder must be a non-empty array of at most %s rungs", 32);
  const iter = ladder[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp20 = nextResult;
    let _Number = Number;
    let tmp25 = _modDef38;
    let isIntegerResult = Number.isInteger(nextResult);
    if (isIntegerResult) {
      isIntegerResult = tmp20 >= 16;
    }
    if (isIntegerResult) {
      isIntegerResult = tmp20 <= closure_2;
    }
    let str = "ladder rungs must be integers in [%s, %s]";
    let tmp25Result = tmp25(isIntegerResult, "ladder rungs must be integers in [%s, %s]", 16, closure_2);
    continue;
  }
  obj = { enabled: true, ladder: null, maxUpscale, minSnapDownDpr };
  items = [...tmp17];
  obj.ladder = items.sort((arg0, arg1) => arg0 - arg1);
  return obj;
}
let closure_2 = Constants.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const defaultConfig = { enabled: false, ladder: AttachmentImageLadder.ATTACHMENT_LADDER, maxUpscale: AttachmentImageLadder.ATTACHMENT_LADDER_MAX_UPSCALE, minSnapDownDpr: 2 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig, variations: { 0: defaultConfig, 1: parseTreatmentConfig } });
const result = size.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export { parseTreatmentConfig };
export function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
}