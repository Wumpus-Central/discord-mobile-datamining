// discord_app/modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import _modDef12377 from "../../../../../_runtime/metro/12377__.js";
import _modDef12378 from "../../../../../_runtime/metro/12378__.js";
import openGuildActionSheetDefault from "../../../guild_action_sheet/native/openGuildActionSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(guildId) {
  _require = guildId;
  let obj = require("notifications/NotificationUtils");
  let result = obj.shouldShowUseNewNotificationSystem("GuildPopoutMenu");
  obj = { IconComponent: require("EnvelopeIcon").EnvelopeIcon, label: null, action: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.e6RscS);
  obj.action = function action() {
    return (async () => {
      if (paths === 2) {
        paths = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          paths = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              paths = 3;
              throw value;
            } else if (arg0 === 2) {
              paths = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 1;
              paths = 1;
              const obj1 = { value: tmp4(paths[8])(paths[7], paths.paths), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            paths = 3;
            throw value;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const items = [closure_128_0];
            value.default(items, constants.GUILD_LIST);
            paths = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          paths = tmp;
          throw tmp11;
        }
      }
    })();
  };
  let items = [obj, ,];
  obj = { IconComponent: require("BellIcon").BellIcon, label: null, action: null };
  const intl2 = require("util").intl;
  obj.label = intl2.string(require("util").t.HcoRu0);
  obj.action = function action() {
    NotificationSettingsModalActionCreatorsDefault.open(closure_0);
  };
  items[1] = obj;
  let obj1 = { IconComponent: require("SettingsIcon").SettingsIcon, label: null, action: null };
  const intl3 = require("util").intl;
  obj1.label = intl3.string(require("util").t.PdRCRg);
  obj1.action = function action() {
    const guild = GuildStore.getGuild(closure_0);
    if (null != guild) {
      openGuildActionSheetDefault(guild);
    }
  };
  items[2] = obj1;
  if (result) {
    const splice = items.splice;
    const obj2 = { iconSource: null, label: null, action: null };
    if (isMutedResult) {
      obj2.iconSource = _modDef12378;
      const intl5 = tmp(1114).intl;
      obj2.label = intl5.string(tmp(1114).t.De0BTC);
      obj2.action = function action() {
        if (null != closure_0) {
          const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
            tmp,
            { muted: false },
            NotificationSettingsUtils.NotificationLabels.Unmuted,
          );
        }
      };
      splice(1, 0, obj2);
    } else {
      obj2.iconSource = _modDef12377;
      const intl4 = tmp(1114).intl;
      obj2.label = intl4.string(tmp(1114).t.vRzp7P);
      obj2.action = function action() {
        const obj = { guildId };
        obj.openLazy(asyncRequireImpl(10144, dependencyMap.paths), "muteSettings" + guildId, obj);
      };
      splice(1, 0, obj2);
    }
  }
  return items;
}
