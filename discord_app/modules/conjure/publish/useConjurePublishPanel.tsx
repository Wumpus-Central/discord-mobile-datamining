// discord_app/modules/conjure/publish/useConjurePublishPanel.tsx
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const isProjectOwner = fn(6771).isProjectOwner;
let items = [fn(6772).ConjureSupportedSurface.BOT, _modDef3830.UnoAgo];
let items1 = [items, , ,];
let items2 = [fn(6772).ConjureSupportedSurface.ACTIVITY, _modDef3830["I88/iG"]];
items1[1] = items2;
const items3 = [fn(6772).ConjureSupportedSurface.PROFILE_WIDGET, _modDef3830.gXY1x1];
items1[2] = items3;
const items4 = [fn(6772).ConjureSupportedSurface.AUTOMOD, _modDef3830.Q9ruoM];
items1[3] = items4;
let obj2 = { initial: _modDef3830.NUZBwo, notPublished: _modDef3830.Gdz7pg, published: _modDef3830["6E9W4F"] };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishPanel.tsx");

export default function useConjurePublishPanel(id, guildId) {
  _require = id;
  obj2 = async function _save() {
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
              if (null == result1) {
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
                  const obj6 = { value: tmp3(tmp28[12]).updateProjectSettings(user.id, obj5), done: false };
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
  const tmp3 = require("useConjureLiveParts")(id.id, guildId.guildId);
  const result = require("conjurePublishPopoutMode").conjurePublishPopoutMode(guildId.status);
  let tmp11 = tmp10;
  if ("initial" === result) {
    tmp11 = trimmed(id);
  }
  _slicedToArray = tmp11;
  items = tmp10 ? id.preview_supported_surfaces : id.supported_surfaces;
  if (items == null) {
    items = [];
  }
  trimmed = str.trim();
  let result1 = null;
  if (tmp11) {
    result1 = tmp8(tmp2[10]).conjureProjectNameError(trimmed);
    const tmp8Result = tmp8(tmp2[10]);
  }
  const status = guildId.status;
  let previewAppChannels;
  if (status != null) {
    previewAppChannels = status.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  const status2 = guildId.status;
  let publishedAt;
  if (status2 != null) {
    publishedAt = status2.publishedAt;
  }
  let relative = null;
  if (null != publishedAt) {
    relative = tmp8(tmp2[11]).formatAuthoredAt(publishedAt).relative;
    const tmp8Result2 = tmp8(tmp2[11]);
  }
  obj2 = {
    mode: result,
    initial: tmp10,
    editable: tmp11,
    identity: tmp4,
    name: str,
    setName: tmp5[1],
    nameError: result1,
    displayName: null,
    description: null,
    initialChannelNames: null,
    channels: null,
    components: null,
    devicePermissions: null,
    sharing: null,
    statusText: null,
    lastPublishedText: null,
    ctaText: null,
    ctaVariant: null,
    saving: null,
    save: null,
  };
  if ("initial" === result) {
    liveName = id.name;
  }
  obj2.displayName = liveName;
  if ("initial" === result) {
    liveDescription = tmp4.description;
  }
  obj2.description = liveDescription;
  let tmp17 = previewAppChannels;
  if (0 === previewAppChannels.length) {
    tmp17 = previewAppChannels;
    if (items.includes(tmp8(tmp2[4]).ConjureSupportedSurface.APP_CHANNEL)) {
      let intl = tmp8(tmp2[13]).intl;
      items1 = [intl.string(tmp(tmp2[5]).xI4N6Q)];
      tmp17 = items1;
    }
  }
  obj2.initialChannelNames = tmp17;
  obj2.channels = channels;
  const found = result1.filter((item) => {
    [tmp] = item;
    return items.includes(tmp);
  });
  obj2.components = found.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = id(first[13]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
  if ("initial" !== result) {
    items2 = [];
  }
  obj2.devicePermissions = items2;
  if (null != guild) {
    let obj3 = { guild, caption: null };
    let formatToPlainStringResult = null;
    if (null != memberCount) {
      const intl3 = tmp8(tmp2[13]).intl;
      let obj4 = { count: memberCount };
      formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[5]).ZpZxK9, obj4);
    }
    obj3.caption = formatToPlainStringResult;
    let tmp18 = obj3;
  } else {
    tmp18 = null;
    if ("user" === id.install_scope) {
      let obj5 = { guild: null, caption: null };
      const intl2 = tmp8(tmp2[13]).intl;
      obj5.caption = intl2.string(tmp(tmp2[5]).RUhWLH);
      tmp18 = obj5;
    }
  }
  obj2.sharing = tmp18;
  const intl4 = tmp8(tmp2[13]).intl;
  obj2.statusText = intl4.string(obj2[result]);
  let formatToPlainStringResult1 = null;
  if (null != relative) {
    const intl5 = tmp8(tmp2[13]).intl;
    let obj6 = { time: relative };
    formatToPlainStringResult1 = intl5.formatToPlainString(tmp(tmp2[5])["/6YRCf"], obj6);
  }
  obj2.lastPublishedText = formatToPlainStringResult1;
  if ("initial" === result) {
    let label = guildId.label;
  } else {
    const intl6 = tmp8(tmp2[13]).intl;
    label = intl6.string(tmp(tmp2[5]).KHg4Dk);
  }
  obj2.ctaText = label;
  let str3 = "primary";
  if ("published" === result) {
    str3 = "secondary";
  }
  obj2.ctaVariant = str3;
  obj2.saving = saving;
  obj2.save = function save() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj2;
}
export const CONJURE_PUBLISH_COMPONENTS = items1;
export const CONJURE_PUBLISH_PERMISSION_LABELS = {
  screen_capture: _modDef3830["8/7kE7"],
  connect_user_to_voice: _modDef3830.uvDWXa,
};
