// discord_app/modules/conjure/publish/conjurePublishReview.tsx
import _modDef4091 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4091.UnoAgo];
let items1 = [items, , , , ,];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4091["I88/iG"]];
items1[1] = items2;
let items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4091.skjf5I];
items1[2] = items3;
let items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4091.gXY1x1];
items1[3] = items4;
const items5 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4091.Q9ruoM];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4091.KR5R34];
items1[5] = items6;
const items7 = [
  ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL,
  ...items1.map((item) => {
    [tmp] = item;
    return tmp;
  }),
];
let set = new Set(items7);
const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishReview.tsx");

export const CONJURE_REVIEW_COMPONENTS = items1;
export function conjureReviewComponents(arr) {
  _require = arr;
  const found = items1.filter((item) => {
    [tmp] = item;
    return set.includes(tmp);
  });
  let found1 = found;
  if (0 === found.length) {
    found1 = found;
    if (arr.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found1 = items1.filter((item) => {
        [tmp] = item;
        return tmp === set(items2[0]).ConjureSupportedSurface.BOT;
      });
    }
  }
  return found1.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = set(items2[2]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
}
export const CONJURE_REVIEW_PERMISSION_LABELS = {
  screen_capture: _modDef4091["8/7kE7"],
  connect_user_to_voice: _modDef4091.uvDWXa,
};
export function conjureAddedSurfaces(supported_surfaces) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  set = new Set(supported_surfaces);
  let prop = supported_surfaces.preview_supported_surfaces;
  if (prop == null) {
    prop = [];
  }
  return prop.filter((item) => {
    let hasItem = set.has(item);
    if (hasItem) {
      hasItem = !set.has(item);
    }
    return hasItem;
  });
}
export function conjurePublishReviewReason(project, publishStatus) {
  let tmp = null;
  if (null != publishStatus) {
    tmp = null;
    if (true !== publishStatus.safetyHold) {
      let str = "first_publish";
      if (obj.isConjureLive(publishStatus.publishState)) {
        let supported_surfaces = project.supported_surfaces;
        if (supported_surfaces == null) {
          supported_surfaces = [];
        }
        set = new Set(supported_surfaces);
        let prop = project.preview_supported_surfaces;
        if (prop == null) {
          prop = [];
        }
        if (
          prop.filter((item) => {
            let hasItem = set.has(item);
            if (hasItem) {
              hasItem = !set.has(item);
            }
            return hasItem;
          }).length > 0
        ) {
          let tmp9 = "adds_surfaces";
        } else {
          let newAppChannels = publishStatus.newAppChannels;
          if (newAppChannels == null) {
            newAppChannels = [];
          }
          tmp9 = null;
        }
        str = tmp9;
      }
      tmp = str;
      obj = set(12190);
    }
  }
  return tmp;
}
export function conjurePublishIncludes(preview_supported_surfaces, stateFromStores, result1) {
  _require = result1;
  let prop = preview_supported_surfaces.preview_supported_surfaces;
  if (prop == null) {
    prop = [];
  }
  items = [...prop];
  let supported_surfaces = preview_supported_surfaces.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  HermesBuiltin.arraySpread(supported_surfaces, tmp);
  items1 = [...new Set(items)];
  if ("adds_surfaces" === result1) {
    let supported_surfaces1 = preview_supported_surfaces.supported_surfaces;
    if (supported_surfaces1 == null) {
      supported_surfaces1 = [];
    }
    const set1 = new Set(supported_surfaces1);
    closure_129_0 = set1;
    let prop1 = preview_supported_surfaces.preview_supported_surfaces;
    if (prop1 == null) {
      prop1 = [];
    }
    let found = prop1.filter((item) => {
      let hasItem = set.has(item);
      if (hasItem) {
        hasItem = !set.has(item);
      }
      return hasItem;
    });
  } else {
    found = [];
  }
  if ("adds_surfaces" === result1) {
    let newAppChannels;
    if (stateFromStores != null) {
      newAppChannels = stateFromStores.newAppChannels;
    }
    if (newAppChannels == null) {
      newAppChannels = [];
    }
    let items2 = newAppChannels;
  } else {
    items2 = [];
  }
  items1 = tmp10;
  const ConjureSupportedSurface = require("ConjureProjectTypes").ConjureSupportedSurface;
  if ("user" === preview_supported_surfaces.install_scope) {
    let APP_CHANNEL = ConjureSupportedSurface.ACTIVITY;
    let tmp13 = tmp12;
    let tmp14 = tmp11;
    let tmp15 = tmp12;
    let tmp16 = tmp11;
  } else {
    APP_CHANNEL = ConjureSupportedSurface.APP_CHANNEL;
    tmp13 = tmp12;
    tmp14 = tmp11;
    tmp15 = tmp12;
    tmp16 = tmp11;
  }
  let previewAppChannels;
  if (stateFromStores != null) {
    previewAppChannels = stateFromStores.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  if (previewAppChannels.length > 0) {
    let mapped = previewAppChannels.map((item) => {
      if (closure_3) {
        let hasItem = found.includes(APP_CHANNEL);
      } else {
        hasItem = items2.includes(item);
      }
      const obj = { key: "channel:" + item, icon: "app_channel", label: "#" + item, isNew: hasItem, creates: null };
      let tmp6 = !closure_3;
      if (!closure_3) {
        tmp6 = "first_publish" === closure_0 || hasItem;
        const tmp8 = "first_publish" === closure_0 || hasItem;
      }
      obj.creates = tmp6;
      return obj;
    });
  } else if (items1.includes(tmp16(tmp15[0]).ConjureSupportedSurface.APP_CHANNEL)) {
    let obj = { key: "channel", icon: "app_channel", label: null, isNew: null, creates: null };
    let intl = tmp16(tmp15[2]).intl;
    obj.label = intl.string(found(tmp15[1]).xI4N6Q);
    obj.isNew = found.includes(APP_CHANNEL);
    let tmp18 = !tmp10;
    if (!tmp10) {
      tmp18 = "first_publish" === result1 || found.includes(APP_CHANNEL);
      const tmp19 = "first_publish" === result1 || found.includes(APP_CHANNEL);
    }
    obj.creates = tmp18;
    const items3 = [obj];
    mapped = items3;
  } else {
    mapped = [];
  }
  let found1 = items1;
  if (mapped.length > 0) {
    found1 = items1;
    if (tmp10) {
      found1 = items1.filter((item) => item !== set(items2[0]).ConjureSupportedSurface.ACTIVITY);
    }
  }
  closure_130_0 = found1;
  const found2 = items1.filter((item) => {
    [tmp] = item;
    return set.includes(tmp);
  });
  let found3 = found2;
  if (0 === found2.length) {
    found3 = found2;
    if (found1.includes(tmp14(tmp13[0]).ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found3 = items1.filter((item) => {
        [tmp] = item;
        return tmp === set(items2[0]).ConjureSupportedSurface.BOT;
      });
    }
  }
  const mapped1 = found3.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = set(items2[2]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
  const mapped2 = mapped1.map((label) => {
    const surface = label.surface;
    return {
      key: "surface:" + surface,
      icon: surface,
      label: label.label,
      isNew: found.includes(surface),
      creates: false,
    };
  });
  const items4 = [...mapped2];
  return items4;
}
