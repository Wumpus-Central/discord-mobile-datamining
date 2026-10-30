// discord_app/modules/conjure/preview/conjurePreviewFrameSurfaces.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  {
    type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
    declaredBy: ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL,
  },
  ,
];
const obj = {
  type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
  declaredBy: ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL,
};
items[1] = {
  type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL,
  declaredBy: ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL,
};
const obj2 = {
  type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL,
  declaredBy: ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL,
};
items[2] = {
  type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN,
  declaredBy: ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY,
};
const items1 = [
  EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
  EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL,
];
const items2 = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewFrameSurfaces.tsx");

export const CONJURE_PREVIEW_LAUNCH_SURFACE_TYPES = items1;
export function previewFrameLaunchType(APP_CHANNEL) {
  if (APP_CHANNEL === EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN) {
    APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  }
  return APP_CHANNEL;
}
export function declaresPreviewFrame(previewSupportedSurfaces) {
  return items.some((declaredBy) => previewSupportedSurfaces.includes(declaredBy.declaredBy));
}
export function previewFrameSurfaceOptions(previewSupportedSurfaces) {
  const found = items.filter((item) => {
    let hasItem;
    if (previewSupportedSurfaces != null) {
      hasItem = previewSupportedSurfaces.includes(tmp);
    }
    return true === hasItem;
  });
  let mapped = found.map((type) => type.type);
  if (mapped.length <= 0) {
    mapped = items2;
  }
  return mapped;
}
export function resolvePreviewFrameSurface(first1, memo) {
  let tmp = first1;
  if (null == first1) {
    let APP_CHANNEL = memo[0];
    if (APP_CHANNEL == null) {
      APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    }
    tmp = APP_CHANNEL;
  }
  return tmp;
}
