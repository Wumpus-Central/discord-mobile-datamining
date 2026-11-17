// discord_app/modules/conjure/share/useConjureFirstShareReview.tsx
import _modDef4133 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

const require = fn;
let items = [fn(7026).ConjureSupportedSurface.BOT, _modDef4133.UnoAgo];
let items1 = [items, , , , ,];
let items2 = [fn(7026).ConjureSupportedSurface.ACTIVITY, _modDef4133["I88/iG"]];
items1[1] = items2;
let items3 = [fn(7026).ConjureSupportedSurface.VOICE_CHANNEL, _modDef4133.skjf5I];
items1[2] = items3;
let items4 = [fn(7026).ConjureSupportedSurface.PROFILE_WIDGET, _modDef4133.gXY1x1];
items1[3] = items4;
let items5 = [fn(7026).ConjureSupportedSurface.AUTOMOD, _modDef4133.Q9ruoM];
items1[4] = items5;
let items6 = [fn(7026).ConjureSupportedSurface.OVERLAY, _modDef4133.KR5R34];
items1[5] = items6;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/useConjureFirstShareReview.tsx");

export default function useConjureFirstShareReview(id) {
  _require = id;
  closure_6 = async function _save() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (!saving) {
              if (null == noop) {
                asyncGeneratorStep(true);
                c3 = 1;
                let changed = trimmed !== name.name;
                if (!changed) {
                  changed = importDefault.changed;
                }
                if (changed) {
                  const obj5 = {};
                  const merged = Object.assign(importDefault.changes);
                  obj5.name = trimmed;
                  c1 = 2;
                  c4 = 1;
                  const obj6 = { value: tmp3(tmp23[11]).updateProjectSettings(name.id, obj5), done: false };
                  return obj6;
                }
              }
            }
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_3(false);
          throw tmp23;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        closure_128_3(false);
        c4 = 3;
        return { value: true, done: true };
      } catch (tmp23) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp23;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp3 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp3;
  const tmp = importDefault;
  const tmp4 = require("useConjurePreviewDevicePermissions")(id.id);
  items = [closure_6];
  items1 = [id.id];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(id.id);
      let previewAppChannels;
      if (publishStatus != null) {
        previewAppChannels = publishStatus.previewAppChannels;
      }
      return previewAppChannels;
    },
    items1,
  );
  const tmp7 = trimmed(noop.useState(id.name), 2);
  const tmp8 = trimmed(noop.useState(false), 2);
  saving = tmp8[0];
  closure_3 = tmp8[1];
  let obj = require("initialize");
  let prop = id.preview_supported_surfaces;
  [tmp11, tmp12] = trimmed(noop.useState(false), 2);
  if (prop == null) {
    prop = [];
  }
  const items2 = [...prop];
  let supported_surfaces = id.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  HermesBuiltin.arraySpread(supported_surfaces, tmp13);
  const tmp10 = trimmed(noop.useState(false), 2);
  const items3 = [...new Set(items2)];
  trimmed = str.trim();
  const set = new Set(items2);
  const result = require("conjureProjectNameError").conjureProjectNameError(trimmed);
  noop = result;
  let items4 = stateFromStores;
  if (stateFromStores == null) {
    items4 = [];
  }
  if (items4.length > 1) {
    let found = items3;
    if (items4.length > 0) {
      found = items3;
      if ("user" === id.install_scope) {
        found = items3.filter((item) => item !== id(first[4]).ConjureSupportedSurface.ACTIVITY);
      }
    }
    const obj2 = {
      identity: tmp3,
      name: str,
      setName: tmp7[1],
      nameError: result,
      channelNames: items4,
      appChannelsPrivate: null,
      components: null,
      devicePermissions: null,
      saving: null,
      save: null,
    };
    let tmp19 = null;
    if (items4.length > 0) {
      let obj3 = { isPrivate: tmp11, setPrivate: tmp12 };
      tmp19 = obj3;
    }
    obj2.appChannelsPrivate = tmp19;
    closure_129_0 = found;
    const found1 = items1.filter((item) => {
      [tmp] = item;
      return id.includes(tmp);
    });
    let found2 = found1;
    if (0 === found1.length) {
      found2 = found1;
      if (found.includes(tmp5(tmp2[4]).ConjureSupportedSurface.APPLICATION_COMMANDS)) {
        found2 = items1.filter((item) => {
          [tmp] = item;
          return tmp === id(first[4]).ConjureSupportedSurface.BOT;
        });
      }
    }
    obj2.components = found2.map((item) => {
      [tmp, tmp2] = item;
      const obj = { surface: tmp, label: null };
      const intl = id(first[6]).intl;
      obj.label = intl.string(tmp2);
      return obj;
    });
    obj2.devicePermissions = tmp4;
    obj2.saving = saving;
    obj2.save = function save() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return obj2;
  } else {
    if (1 !== items4.length) {
      if (!items3.includes(tmp5(tmp2[4]).ConjureSupportedSurface.APP_CHANNEL)) {
        let items5 = [];
      }
    }
    let intl = tmp5(tmp2[6]).intl;
    const items6 = [intl.string(tmp(tmp2[5]).xI4N6Q)];
    items5 = items6;
  }
}
export const CONJURE_REVIEW_COMPONENTS = items1;
export function conjureReviewComponents(arr) {
  _require = arr;
  const found = items1.filter((item) => {
    [tmp] = item;
    return id.includes(tmp);
  });
  let found1 = found;
  if (0 === found.length) {
    found1 = found;
    if (arr.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found1 = items1.filter((item) => {
        [tmp] = item;
        return tmp === id(first[4]).ConjureSupportedSurface.BOT;
      });
    }
  }
  return found1.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = id(first[6]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
}
export const CONJURE_REVIEW_PERMISSION_LABELS = {
  screen_capture: _modDef4133["8/7kE7"],
  connect_user_to_voice: _modDef4133.uvDWXa,
};
