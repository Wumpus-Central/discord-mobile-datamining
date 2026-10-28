// discord_app/modules/conjure/publish/useConjurePublishPanel.tsx
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import ChannelPermissionsUtils from "../../channel_permissions/ChannelPermissionsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(6808).isProjectOwner;
const Constants = fn(1084);
({ ChannelTypes: closure_9, Permissions: c10 } = Constants);
let items = [fn(6809).ConjureSupportedSurface.BOT, _modDef3863.UnoAgo];
let items1 = [items, , ,];
let items2 = [fn(6809).ConjureSupportedSurface.ACTIVITY, _modDef3863["I88/iG"]];
items1[1] = items2;
let items3 = [fn(6809).ConjureSupportedSurface.PROFILE_WIDGET, _modDef3863.gXY1x1];
items1[2] = items3;
let items4 = [fn(6809).ConjureSupportedSurface.AUTOMOD, _modDef3863.Q9ruoM];
items1[3] = items4;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishPanel.tsx");

export default function useConjurePublishPanel(id, guildId) {
  _require = id;
  closure_9 = async function _save() {
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
              if (null == PermissionStore) {
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
                  const obj6 = { value: tmp3(tmp28[17]).updateProjectSettings(user.id, obj5), done: false };
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
  let items4 = require("useConjurePreviewDevicePermissions")(id.id);
  const tmp6 = _slicedToArray(items.useState(id.name), 2);
  [saving, closure_3] = items.useState(false);
  let tmp9 = null == guildId.status;
  if (!tmp9) {
    tmp9 = !require("ConjurePublishTypes").isConjureLive(guildId.status.publishState);
    const obj2 = require("ConjurePublishTypes");
  }
  let tmp11 = tmp9;
  if (tmp9) {
    tmp11 = guild_id(id);
  }
  _slicedToArray = tmp11;
  items = tmp9 ? id.preview_supported_surfaces : id.supported_surfaces;
  if (items == null) {
    items = [];
  }
  const trimmed = str.trim();
  let result = null;
  if (tmp11) {
    result = require("conjureProjectNameError").conjureProjectNameError(trimmed);
    let obj3 = require("conjureProjectNameError");
  }
  PermissionStore = result;
  const status = guildId.status;
  let previewAppChannels;
  if (status != null) {
    previewAppChannels = status.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  let arr4 = previewAppChannels;
  if (0 === previewAppChannels.length) {
    arr4 = previewAppChannels;
    if (items.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
      let intl = tmp16(tmp2[14]).intl;
      items1 = [intl.string(tmp(tmp2[8]).xI4N6Q)];
      arr4 = items1;
    }
    tmp16 = _require;
  }
  const tmp3 = require("useConjureLiveParts")(id.id, guildId.guildId);
  let tmp20 = null;
  [tmp18, tmp19] = items.useState(false);
  if (tmp11) {
    tmp20 = null;
    if (arr4.length > 0) {
      tmp20 = null;
      if ("user" !== id.install_scope) {
        tmp20 = null;
        if (id.guild_id === guildId.guildId) {
          guild_id = id.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          tmp20 = guild_id;
        }
      }
    }
  }
  guild_id = tmp20;
  const tmp5Result = _slicedToArray(items.useState(false), 2);
  const items2 = [trimmed, PermissionStore];
  const items3 = [tmp20];
  let obj5 = {
    initial: tmp9,
    editable: tmp11,
    identity: tmp4,
    name: tmp6[0],
    setName: tmp6[1],
    nameError: result,
    displayName: null,
    description: null,
    initialChannelNames: null,
    channels: null,
    appChannelsPrivate: null,
    components: null,
    devicePermissions: null,
    note: null,
    sharing: null,
    saving: null,
    save: null,
  };
  const stateFromStores = require("initialize").useStateFromStores(
    items2,
    () => {
      guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
      }
      if (canResult) {
        const obj = ChannelPermissionsUtils;
        canResult = obj.canCreatePrivateChannel(
          constants.GUILD_APP,
          PermissionStore.can(constants2.VIEW_CHANNEL, guild),
          PermissionStore.can(constants2.CONNECT, guild),
        );
        const canResult1 = PermissionStore.can(constants2.VIEW_CHANNEL, guild);
      }
      return canResult;
    },
    items3,
  );
  if (tmp9) {
    liveName = id.name;
  }
  obj5.displayName = liveName;
  if (tmp9) {
    liveDescription = tmp4.description;
  }
  obj5.description = liveDescription;
  obj5.initialChannelNames = arr4;
  obj5.channels = channels;
  let tmp24 = null;
  if (stateFromStores) {
    let obj6 = { isPrivate: tmp18, setPrivate: tmp19 };
    tmp24 = obj6;
  }
  obj5.appChannelsPrivate = tmp24;
  const found = items1.filter((item) => {
    [tmp] = item;
    return items.includes(tmp);
  });
  obj5.components = found.map((item) => {
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: null };
    const intl = id(first[14]).intl;
    obj.label = intl.string(tmp2);
    return obj;
  });
  if (!tmp9) {
    items4 = [];
  }
  obj5.devicePermissions = items4;
  if (tmp9) {
    if ("user" !== id.install_scope) {
      if (items.includes(tmp22(tmp2[7]).ConjureSupportedSurface.AUTOMOD)) {
        const intl3 = tmp22(tmp2[14]).intl;
        const intl4 = tmp22(tmp2[14]).intl;
        const _HermesInternal = HermesInternal;
        let combined = "" + intl3.string(tmp(tmp2[8])["+VqXVO"]) + " " + intl4.string(tmp(tmp2[8]).bljqPk);
        const stringResult = intl3.string(tmp(tmp2[8])["+VqXVO"]);
      }
      obj5.note = combined;
      if (null != guild) {
        const obj7 = { guild, caption: null };
        let formatToPlainStringResult = null;
        if (null != memberCount) {
          const intl6 = tmp22(tmp2[14]).intl;
          const obj8 = { count: memberCount };
          formatToPlainStringResult = intl6.formatToPlainString(tmp(tmp2[8]).ZpZxK9, obj8);
        }
        obj7.caption = formatToPlainStringResult;
        let tmp28 = obj7;
      } else {
        tmp28 = null;
        if ("user" === id.install_scope) {
          const obj9 = { guild: null, caption: null };
          const intl5 = tmp22(tmp2[14]).intl;
          obj9.caption = intl5.string(tmp(tmp2[8]).RUhWLH);
          tmp28 = obj9;
        }
      }
      obj5.sharing = tmp28;
      obj5.saving = saving;
      obj5.save = function save() {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      return obj5;
    }
  }
  const intl2 = tmp22(tmp2[14]).intl;
  combined = intl2.string(tmp(tmp2[8])["+VqXVO"]);
}
export const CONJURE_PUBLISH_COMPONENTS = items1;
export const CONJURE_PUBLISH_PERMISSION_LABELS = {
  screen_capture: _modDef3863["8/7kE7"],
  connect_user_to_voice: _modDef3863.uvDWXa,
};
