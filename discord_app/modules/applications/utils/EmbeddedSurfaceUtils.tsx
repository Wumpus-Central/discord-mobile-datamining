// discord_app/modules/applications/utils/EmbeddedSurfaceUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/applications/utils/EmbeddedSurfaceUtils.tsx");

export const isEmbeddedApplication = function isEmbeddedApplication(application) {
  if (null == application) {
    let items = [];
  } else if ("embeddedSurfaces" in application) {
    let embeddedSurfaces = application.embeddedSurfaces;
    if (embeddedSurfaces == null) {
      embeddedSurfaces = [];
    }
    items = embeddedSurfaces;
  } else if ("embedded_surfaces" in application) {
    let embedded_surfaces = application.embedded_surfaces;
    if (embedded_surfaces == null) {
      embedded_surfaces = [];
    }
    items = embedded_surfaces;
  } else {
    items = [];
  }
  return items.length > 0;
};
export const supportsEmbeddedSurface = function supportsEmbeddedSurface(embeddedSurfaces, MAIN) {
  if (null == embeddedSurfaces) {
    let items = [];
  } else if ("embeddedSurfaces" in embeddedSurfaces) {
    embeddedSurfaces = embeddedSurfaces.embeddedSurfaces;
    if (embeddedSurfaces == null) {
      embeddedSurfaces = [];
    }
    items = embeddedSurfaces;
  } else if ("embedded_surfaces" in embeddedSurfaces) {
    let embedded_surfaces = embeddedSurfaces.embedded_surfaces;
    if (embedded_surfaces == null) {
      embedded_surfaces = [];
    }
    items = embedded_surfaces;
  } else {
    items = [];
  }
  return items.includes(MAIN);
};
