// === Module 16266: getGuildsBarGuildMenuItems ===

// Module 16266 (getGuildsBarGuildMenuItems)
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import AssetRegistryDefault from "AssetRegistry" /* 12029 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12030 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13738 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1;

const AnalyticsSections = Constants.AnalyticsSections;
let result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(guildId) {
  let intl;
  let intl2;
  let intl3;
  _require = guildId;
  const tmp = _require;
  let obj = require("notifications/NotificationUtils");
  let result = obj.shouldShowUseNewNotificationSystem("GuildPopoutMenu");
  let obj2 = {
    IconComponent: require("EnvelopeIcon").EnvelopeIcon,
    label: intl.string(require("intl").t.e6RscS),
    action() {
      return (async () => {
        let closure_0;
        let paths;
        if (paths === 2) {
          paths = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                paths = 1;
                const obj4 = { value: tmp3(paths[8])(paths[7], paths.paths), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              paths = 3;
              throw value;
            } else if (arg0 === 2) {
              paths = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const items = [closure_128_0];
              value.default(items, constants.GUILD_LIST);
              paths = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            paths = 3;
            throw tmp10;
          }
        }
      })();
    }
  };
  const isMutedResult = UserGuildSettingsStore.isMuted(guildId);
  intl = require("intl").intl;
  let items = [obj2, , ];
  let obj3 = {
    IconComponent: require("BellIcon").BellIcon,
    label: intl2.string(require("intl").t.HcoRu0),
    action() {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      obj.open(guildId);
    }
  };
  intl2 = require("intl").intl;
  items[1] = obj3;
  let obj4 = {
    IconComponent: require("SettingsIcon").SettingsIcon,
    label: intl3.string(require("intl").t.PdRCRg),
    action() {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        openGuildActionSheetDefault(guild);
      }
    }
  };
  intl3 = require("intl").intl;
  items[2] = obj4;
  if (result) {
    const splice = items.splice;
    const obj5 = { iconSource: null, label: null, action: null };
    if (isMutedResult) {
      obj5.iconSource = AssetRegistryDefault2;
      const intl5 = tmp(1126).intl;
      obj5.label = intl5.string(tmp(1126).t.De0BTC);
      obj5.action = function action() {
        if (null != guildId) {
          const obj = NotificationSettingsModalActionCreatorsDefault;
          const result = obj.updateGuildNotificationSettings(tmp, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
        }
      };
      splice(1, 0, obj5);
    } else {
      obj5.iconSource = AssetRegistryDefault;
      const intl4 = tmp(1126).intl;
      obj5.label = intl4.string(tmp(1126).t.vRzp7P);
      obj5.action = function action() {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        const obj = { guildId };
        const tmp2 = asyncRequire(11077, dependencyMap.paths);
        openLazy(tmp2, "muteSettings" + guildId, obj);
      };
      splice(1, 0, obj5);
    }
  }
  return items;
};