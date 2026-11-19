// discord_app/modules/conjure/share/useConjureFirstShareReview.tsx
import _modDef4089 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

const require = fn;
let items = [fn(6501).ConjureSupportedSurface.BOT, _modDef4089.UnoAgo];
let items1 = [items, , , , ,];
let items2 = [fn(6501).ConjureSupportedSurface.ACTIVITY, _modDef4089["I88/iG"]];
items1[1] = items2;
let items3 = [fn(6501).ConjureSupportedSurface.VOICE_CHANNEL, _modDef4089.skjf5I];
items1[2] = items3;
let items4 = [fn(6501).ConjureSupportedSurface.PROFILE_WIDGET, _modDef4089.gXY1x1];
items1[3] = items4;
let items5 = [fn(6501).ConjureSupportedSurface.AUTOMOD, _modDef4089.Q9ruoM];
items1[4] = items5;
const items6 = [fn(6501).ConjureSupportedSurface.OVERLAY, _modDef4089.KR5R34];
items1[5] = items6;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/useConjureFirstShareReview.tsx");

export default function useConjureFirstShareReview(id) {
  _require = id;
  items1 = async function _save() {
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
        return { value: "HermesInternal", done: "+60" };
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
              if (null == ConjurePublishStatusStore) {
                _slicedToArray(true);
                c3 = 1;
                let tmp18 = isConjureManagedCopy;
                if (!isConjureManagedCopy) {
                  let tmp16 = name === user.name;
                  if (tmp16) {
                    tmp16 = !importDefault.changed;
                  }
                  tmp18 = tmp16;
                }
                if (!tmp18) {
                  const obj5 = {};
                  const merged = Object.assign(importDefault.changes);
                  obj5.name = name;
                  c1 = 2;
                  c4 = 1;
                  const obj6 = { value: tmp3(tmp29[12]).updateProjectSettings(user.id, obj5), done: false };
                  return obj6;
                }
              }
            }
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_4(false);
          throw tmp29;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_4(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        closure_128_4(false);
        c4 = 3;
        return { value: true, done: true };
      } catch (tmp29) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp29;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp3 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp3;
  isConjureManagedCopy = require("useConjureManagedCopy").useIsConjureManagedCopy(id.id);
  let obj = require("useConjureManagedCopy");
  const tmp = importDefault;
  const tmp6 = require("useConjurePreviewDevicePermissions")(id.id);
  items = [ConjurePublishStatusStore];
  items1 = [id.id];
  let stateFromStores = require("initialize").useStateFromStores(
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
  const tmp7 = _slicedToArray(trimmed.useState(id.name), 2);
  [saving, _slicedToArray] = trimmed.useState(false);
  let prop = id.preview_supported_surfaces;
  if (prop == null) {
    prop = [];
  }
  const items2 = [...prop];
  let supported_surfaces = id.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  HermesBuiltin.arraySpread(supported_surfaces, tmp10);
  const obj2 = require("initialize");
  const items3 = [...new Set(items2)];
  trimmed = str.trim();
  const set = new Set(items2);
  const result = require("conjureProjectNameError").conjureProjectNameError(trimmed);
  ConjurePublishStatusStore = result;
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  if (stateFromStores.length > 1) {
    let found = items3;
    if (stateFromStores.length > 0) {
      found = items3;
      if ("user" === id.install_scope) {
        found = items3.filter((item) => item !== id(isConjureManagedCopy[4]).ConjureSupportedSurface.ACTIVITY);
      }
    }
    let obj3 = {
      projectId: id.id,
      managedCopy: isConjureManagedCopy,
      identity: tmp3,
      name: str,
      setName: tmp7[1],
      nameError: result,
      channelNames: stateFromStores,
      components: null,
      devicePermissions: null,
      saving: null,
      save: null,
    };
    closure_129_0 = found;
    const found1 = items1.filter((item) => {
      [tmp] = item;
      return id.includes(tmp);
    });
    let found2 = found1;
    if (0 === found1.length) {
      found2 = found1;
      if (found.includes(tmp4(tmp2[4]).ConjureSupportedSurface.APPLICATION_COMMANDS)) {
        found2 = items1.filter((item) => {
          [tmp] = item;
          return tmp === id(isConjureManagedCopy[4]).ConjureSupportedSurface.BOT;
        });
      }
    }
    obj3.components = found2.map((item) => {
      [tmp, tmp2] = item;
      const obj = { surface: tmp, label: null };
      const intl = id(isConjureManagedCopy[6]).intl;
      obj.label = intl.string(tmp2);
      return obj;
    });
    obj3.devicePermissions = tmp6;
    obj3.saving = saving;
    obj3.save = function save() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return obj3;
  } else {
    if (1 !== stateFromStores.length) {
      if (!items3.includes(tmp4(tmp2[4]).ConjureSupportedSurface.APP_CHANNEL)) {
        let items4 = [];
      }
    }
    let intl = tmp4(tmp2[6]).intl;
    const items5 = [intl.string(tmp(tmp2[5]).xI4N6Q)];
    items4 = items5;
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
        return tmp === id(isConjureManagedCopy[4]).ConjureSupportedSurface.BOT;
      });
    }
  }
  return found1.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = id(isConjureManagedCopy[6]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
}
export const CONJURE_REVIEW_PERMISSION_LABELS = {
  screen_capture: _modDef4089["8/7kE7"],
  connect_user_to_voice: _modDef4089.uvDWXa,
};
