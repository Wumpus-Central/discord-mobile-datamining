// discord_app/modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import openGuildActionSheetDefault from "../../../guild_action_sheet/native/openGuildActionSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const AnalyticsSections = fn(1072).AnalyticsSections;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(arg0) {
  _require = arg0;
  let obj = { IconComponent: require("EnvelopeIcon").EnvelopeIcon, label: null, action: null };
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
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj4 = { value: tmp4(paths[6])(paths[5], paths.paths), done: false };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          paths = tmp;
          throw tmp11;
        }
      }
    })();
  };
  let items = [obj, ,];
  let obj2 = { IconComponent: require("BellIcon").BellIcon, label: null, action: null };
  const intl2 = require("util").intl;
  obj2.label = intl2.string(require("util").t.HcoRu0);
  obj2.action = function action() {
    NotificationSettingsModalActionCreatorsDefault.open(closure_0);
  };
  items[1] = obj2;
  let obj3 = { IconComponent: require("SettingsIcon").SettingsIcon, label: null, action: null };
  const intl3 = require("util").intl;
  obj3.label = intl3.string(require("util").t.PdRCRg);
  obj3.action = function action() {
    const guild = GuildStore.getGuild(closure_0);
    if (null != guild) {
      openGuildActionSheetDefault(guild);
    }
  };
  items[2] = obj3;
  return items;
}
