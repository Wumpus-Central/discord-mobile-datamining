// discord_app/modules/conjure/publish/useConjurePublishPanel.tsx
import _modDef3831 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const isProjectOwner = fn(6774).isProjectOwner;
let items = [fn(6775).ConjureSupportedSurface.BOT, _modDef3831.UnoAgo];
let items1 = [items, , ,];
let items2 = [fn(6775).ConjureSupportedSurface.ACTIVITY, _modDef3831["I88/iG"]];
items1[1] = items2;
const items3 = [fn(6775).ConjureSupportedSurface.PROFILE_WIDGET, _modDef3831.gXY1x1];
items1[2] = items3;
const items4 = [fn(6775).ConjureSupportedSurface.AUTOMOD, _modDef3831.Q9ruoM];
items1[3] = items4;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishPanel.tsx");

export default function useConjurePublishPanel(id, guildId) {
  _require = id;
  closure_8 = async function _save() {
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
        return { value: "IconComponent", done: null };
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
              if (null == items1) {
                asyncGeneratorStep(true);
                c3 = 1;
                let tmp17 = _slicedToArray;
                if (_slicedToArray) {
                  let changed = name !== user.name;
                  if (!changed) {
                    changed = importDefault.changed;
                  }
                  tmp17 = changed;
                }
                if (tmp17) {
                  const obj5 = {};
                  const merged = Object.assign(importDefault.changes);
                  obj5.name = name;
                  c1 = 2;
                  c4 = 1;
                  const obj6 = { value: tmp3(tmp28[11]).updateProjectSettings(user.id, obj5), done: false };
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
          throw tmp28;
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
      } catch (tmp28) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp28;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  ({ liveName, liveDescription, guild, memberCount, channels } = require("useConjureLiveParts")(
    id.id,
    guildId.guildId,
  ));
  const tmp4 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp4;
  let items2 = require("useConjurePreviewDevicePermissions")(id.id);
  const tmp5 = _slicedToArray(items.useState(id.name), 2);
  [saving, closure_3] = items.useState(false);
  let tmp8 = null == guildId.status;
  if (!tmp8) {
    tmp8 = !require("ConjurePublishTypes").isConjureLive(guildId.status.publishState);
    let obj = require("ConjurePublishTypes");
  }
  let tmp10 = tmp8;
  if (tmp8) {
    tmp10 = trimmed(id);
  }
  _slicedToArray = tmp10;
  items = tmp8 ? id.preview_supported_surfaces : id.supported_surfaces;
  if (items == null) {
    items = [];
  }
  trimmed = str.trim();
  let result = null;
  if (tmp10) {
    result = require("conjureProjectNameError").conjureProjectNameError(trimmed);
    const obj2 = require("conjureProjectNameError");
  }
  items1 = result;
  const status = guildId.status;
  let previewAppChannels;
  if (status != null) {
    previewAppChannels = status.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  let obj3 = {
    initial: tmp8,
    editable: tmp10,
    identity: tmp4,
    name: tmp5[0],
    setName: tmp5[1],
    nameError: result,
    displayName: null,
    description: null,
    initialChannelNames: null,
    channels: null,
    components: null,
    devicePermissions: null,
    sharing: null,
    saving: null,
    save: null,
  };
  if (tmp8) {
    liveName = id.name;
  }
  obj3.displayName = liveName;
  if (tmp8) {
    liveDescription = tmp4.description;
  }
  obj3.description = liveDescription;
  let tmp15 = previewAppChannels;
  if (0 === previewAppChannels.length) {
    tmp15 = previewAppChannels;
    if (items.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
      let intl = tmp16(tmp2[12]).intl;
      items1 = [intl.string(tmp(tmp2[5]).xI4N6Q)];
      tmp15 = items1;
    }
    tmp16 = _require;
  }
  obj3.initialChannelNames = tmp15;
  obj3.channels = channels;
  const found = items1.filter((item) => {
    [tmp] = item;
    return items.includes(tmp);
  });
  obj3.components = found.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = id(first[12]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
  if (!tmp8) {
    items2 = [];
  }
  obj3.devicePermissions = items2;
  if (null != guild) {
    let obj4 = { guild, caption: null };
    let formatToPlainStringResult = null;
    if (null != memberCount) {
      const intl3 = require("util").intl;
      let obj5 = { count: memberCount };
      formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[5]).ZpZxK9, obj5);
    }
    obj4.caption = formatToPlainStringResult;
    let tmp17 = obj4;
  } else {
    tmp17 = null;
    if ("user" === id.install_scope) {
      let obj6 = { guild: null, caption: null };
      const intl2 = require("util").intl;
      obj6.caption = intl2.string(tmp(tmp2[5]).RUhWLH);
      tmp17 = obj6;
    }
  }
  obj3.sharing = tmp17;
  obj3.saving = saving;
  obj3.save = function save() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj3;
}
export const CONJURE_PUBLISH_COMPONENTS = items1;
export const CONJURE_PUBLISH_PERMISSION_LABELS = {
  screen_capture: _modDef3831["8/7kE7"],
  connect_user_to_voice: _modDef3831.uvDWXa,
};
