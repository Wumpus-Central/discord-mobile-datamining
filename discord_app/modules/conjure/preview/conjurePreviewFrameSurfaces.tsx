// discord_app/modules/conjure/preview/conjurePreviewFrameSurfaces.tsx
import ConjureTypes from "../ConjureTypes.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  {
    type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
    declaredBy: ConjureTypes.ConjureSupportedSurface.APP_CHANNEL,
  },
];
const obj = {
  type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
  declaredBy: ConjureTypes.ConjureSupportedSurface.APP_CHANNEL,
};
items[1] = {
  type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL,
  declaredBy: ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL,
};
let mapped = items.map((type) => type.type);
const items1 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewFrameSurfaces.tsx");

export const CONJURE_PREVIEW_FRAME_SURFACE_TYPES = mapped;
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
    mapped = items1;
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
