// === Module 11416: conjurePreviewFrameSurfaces ===

// Module 11416 (conjurePreviewFrameSurfaces)
import ConjureTypes from "ConjureTypes" /* 6946 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8610 */;
import size from "module_2" /* 2 */;

const items = [{ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.APP_CHANNEL }, , ];
const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.APP_CHANNEL };
items[1] = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL };
const obj2 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, declaredBy: ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL };
items[2] = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, declaredBy: ConjureTypes.ConjureSupportedSurface.ACTIVITY };
let mapped = items.map((type) => type.type);
const items1 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL];
const items2 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewFrameSurfaces.tsx");

export const CONJURE_PREVIEW_FRAME_SURFACE_TYPES = mapped;
export const CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES = items1;
export const previewFrameLaunchType = function previewFrameLaunchType(APP_CHANNEL) {
  if (APP_CHANNEL === EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  return APP_CHANNEL;
};
export const isConjurePreviewFrameSurfaceType = function isConjurePreviewFrameSurfaceType(arg0) {
  return mapped.includes(arg0);
};
export const declaresPreviewFrame = function declaresPreviewFrame(previewSupportedSurfaces) {
  return items.some((declaredBy) => previewSupportedSurfaces.includes(declaredBy.declaredBy));
};
export const previewFrameSurfaceOptions = function previewFrameSurfaceOptions(previewSupportedSurfaces) {
  const found = items.filter((item) => {
    let hasItem;
    if (previewSupportedSurfaces != null) {
      hasItem = previewSupportedSurfaces.includes(tmp);
    }
    return true === hasItem;
  });
  mapped = found.map((type) => type.type);
  if (mapped.length <= 0) {
    mapped = items2;
  }
  return mapped;
};
export const resolvePreviewFrameSurface = function resolvePreviewFrameSurface(arg0, cResult) {
  let tmp = arg0;
  if (null == arg0) {
    let APP_CHANNEL = cResult[0];
    if (APP_CHANNEL == null) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    tmp = APP_CHANNEL;
  }
  return tmp;
};