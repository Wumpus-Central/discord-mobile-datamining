// === Module 16446: getGuildsBarGuildMenuItems ===

// Module 16446 (getGuildsBarGuildMenuItems)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7228 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7233 */;
import _modDef12529 from "module_12529" /* 12529 */;
import _modDef12530 from "module_12530" /* 12530 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 14021 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 1980 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4821 */;

const require = globalThis.__r;

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(guildId) {
  _require = guildId;
  let result = require("notifications/NotificationUtils").shouldShowUseNewNotificationSystem("GuildPopoutMenu");
  let obj2 = { IconComponent: null, label: null, action: null };
  let obj = require("notifications/NotificationUtils");
  obj2.IconComponent = require("EnvelopeIcon").EnvelopeIcon;
  const intl = require("util").intl;
  obj2.label = intl.string(require("util").t.e6RscS);
  obj2.action = function action() {
    return (async () => {
      if (paths === 2) {
        paths = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              paths = 1;
              const obj4 = { value: tmp4(paths[8])(paths[7], paths.paths), done: false };
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          paths = tmp;
          throw tmp11;
        }
      }
    })();
  };
  let items = [obj2, , ];
  let obj3 = { IconComponent: require("BellIcon").BellIcon, label: null, action: null };
  const intl2 = require("util").intl;
  obj3.label = intl2.string(require("util").t.HcoRu0);
  obj3.action = function action() {
    NotificationSettingsModalActionCreatorsDefault.open(closure_0);
  };
  items[1] = obj3;
  let obj4 = { IconComponent: require("SettingsIcon").SettingsIcon, label: null, action: null };
  const intl3 = require("util").intl;
  obj4.label = intl3.string(require("util").t.PdRCRg);
  obj4.action = function action() {
    const guild = GuildStore.getGuild(closure_0);
    if (null != guild) {
      openGuildActionSheetDefault(guild);
    }
  };
  items[2] = obj4;
  if (result) {
    const splice = items.splice;
    const obj5 = { iconSource: null, label: null, action: null };
    if (isMutedResult) {
      obj5.iconSource = _modDef12530;
      const intl5 = tmp(1115).intl;
      obj5.label = intl5.string(tmp(1115).t.De0BTC);
      obj5.action = function action() {
        if (null != closure_0) {
          const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(tmp, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
        }
      };
      splice(1, 0, obj5);
    } else {
      obj5.iconSource = _modDef12529;
      const intl4 = tmp(1115).intl;
      obj5.label = intl4.string(tmp(1115).t.vRzp7P);
      obj5.action = function action() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequireImpl(10290, dependencyMap.paths), "muteSettings" + guildId, { guildId });
      };
      splice(1, 0, obj5);
    }
  }
  return items;
};