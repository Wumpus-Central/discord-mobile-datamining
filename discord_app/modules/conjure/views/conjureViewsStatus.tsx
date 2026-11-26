// discord_app/modules/conjure/views/conjureViewsStatus.tsx
import ConjureViewsTypes from "ConjureViewsTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function isViewSurface(str) {
  let hasItem = typeof str === "string";
  if (typeof str === "string") {
    const CONJURE_VIEW_SURFACES = ConjureViewsTypes.CONJURE_VIEW_SURFACES;
    hasItem = CONJURE_VIEW_SURFACES.includes(str);
  }
  return hasItem;
}
const result = size.fileFinishedImporting("modules/conjure/views/conjureViewsStatus.tsx");

export function parseConjureViewsStatus(views) {
  let view_mounts_placed = views;
  if (Array.isArray(views.views)) {
    const _Set = Set;
    set = new Set();
    views = view_mounts_placed.views;
    const flatMapResult = views.flatMap((item) => {
      let tmp = null;
      if (null != item) {
        tmp = null;
        if (typeof item === "object") {
          ({ id, name, suggested_surfaces } = item);
          let tmp2 = null;
          if (typeof id === "string") {
            tmp2 = null;
            if ("" !== id) {
              tmp2 = null;
              if (typeof name === "string") {
                const obj2 = { id, name: null, suggestedSurfaces: null };
                if ("" === name.trim()) {
                  name = id;
                }
                obj2.name = name;
                const _Array = Array;
                if (Array.isArray(suggested_surfaces)) {
                  let found = suggested_surfaces.filter(isViewSurface);
                } else {
                  found = [];
                }
                obj2.suggestedSurfaces = found;
              }
            }
          }
          tmp = tmp2;
        }
      }
      if (null != tmp) {
        if (!set.has(tmp.id)) {
          set.add(tmp.id);
          items = [tmp];
        }
        return items;
      }
      items = [];
    });
    let _Array = Array;
    if (Array.isArray(view_mounts_placed.missing_views)) {
      const missing_views = view_mounts_placed.missing_views;
      let found = missing_views.filter((item) => typeof item === "string");
    } else {
      found = [];
    }
    if (0 === flatMapResult.length) {
      if (0 === found.length) {
        return null;
      }
    }
    let obj = { views: flatMapResult, mounts: null, placed: null, missingViews: null };
    let fn = view_mounts_placed.view_mounts;
    if (null == fn) {
      fn = {};
    }
    const activity = fn.activity;
    let tmp8 = null;
    if (typeof activity === "string") {
      tmp8 = null;
      if ("" !== activity) {
        tmp8 = activity;
      }
    }
    let obj2 = { activity: tmp8, voiceChannel: null, appChannels: null };
    const voice_channel = fn.voice_channel;
    let tmp9 = null;
    if (typeof voice_channel === "string") {
      tmp9 = null;
      if ("" !== voice_channel) {
        tmp9 = voice_channel;
      }
    }
    obj2.voiceChannel = tmp9;
    const _Array2 = Array;
    if (Array.isArray(fn.app_channels)) {
      const app_channels = fn.app_channels;
      fn = (item) => {
        items = null;
        if (null != item) {
          items = null;
          if (typeof item === "object") {
            ({ id, name, view } = item);
            let tmp = null;
            if (typeof id === "string") {
              tmp = null;
              if (typeof name === "string") {
                tmp = null;
                if (typeof view === "string") {
                  const obj = { id, name, view };
                  tmp = obj;
                }
              }
            }
            items = tmp;
          }
        }
        if (items == null) {
          items = [];
        }
        return items;
      };
      let flatMapResult1 = app_channels.flatMap(fn);
    } else {
      flatMapResult1 = [];
    }
    obj2.appChannels = flatMapResult1;
    obj.mounts = obj2;
    view_mounts_placed = view_mounts_placed.view_mounts_placed;
    obj.placed = true === view_mounts_placed;
    obj.missingViews = found;
  } else {
    return null;
  }
}
export function sameConjureViewsStatus(views1, views) {
  let missingViews1 = views;
  if (null != views1) {
    if (null != views) {
      let everyResult = views1.placed === views.placed;
      if (everyResult) {
        const missingViews = views1.missingViews;
        missingViews1 = views.missingViews;
        everyResult =
          missingViews.length === missingViews1.length &&
          missingViews.every((item, index) => item === suggestedSurfaces1[index]);
        const tmp =
          missingViews.length === missingViews1.length &&
          missingViews.every((item, index) => item === suggestedSurfaces1[index]);
      }
      if (everyResult) {
        everyResult = views1.views.length === views.views.length;
      }
      if (everyResult) {
        views = views1.views;
        everyResult = views.every((id, index) => {
          let tmp2 = id.id === missingViews1.views[index].id && id.name === missingViews1.views[index].name;
          if (tmp2) {
            const suggestedSurfaces = id.suggestedSurfaces;
            const suggestedSurfaces1 = missingViews1.views[index].suggestedSurfaces;
            tmp2 =
              suggestedSurfaces.length === suggestedSurfaces1.length &&
              suggestedSurfaces.every((item, index) => item === suggestedSurfaces1[index]);
            const tmp3 =
              suggestedSurfaces.length === suggestedSurfaces1.length &&
              suggestedSurfaces.every((item, index) => item === suggestedSurfaces1[index]);
          }
          return tmp2;
        });
      }
      if (everyResult) {
        everyResult = views1.mounts.activity === views.mounts.activity;
      }
      if (everyResult) {
        everyResult = views1.mounts.voiceChannel === views.mounts.voiceChannel;
      }
      if (everyResult) {
        everyResult = views1.mounts.appChannels.length === views.mounts.appChannels.length;
      }
      if (everyResult) {
        const appChannels = views1.mounts.appChannels;
        everyResult = appChannels.every(
          (id, index) =>
            id.id === missingViews1.mounts.appChannels[index].id &&
            id.name === missingViews1.mounts.appChannels[index].name &&
            id.view === missingViews1.mounts.appChannels[index].view,
        );
      }
    }
    return everyResult;
  }
  everyResult = views1 === views;
}
