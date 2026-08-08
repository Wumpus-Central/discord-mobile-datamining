// discord_app/modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx
import EnvelopeIcon from "EnvelopeIcon";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticsSections } from "ME";
import { BellIcon } from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import { EnvelopeIcon } from "../../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx";
import { SettingsIcon } from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getMuteTimeOptions } from "../../../notifications/NotificationUtils.tsx";

const require = arg1;
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(arg0) {
  const _require = arg0;
  let obj = _getMuteTimeOptions;
  let result = obj.shouldShowUseNewNotificationSystem("GuildPopoutMenu");
  obj = { IconComponent: null, label: null, action: null };
  obj[0] = _EnvelopeIcon.EnvelopeIcon;
  const intl = _getSystemLocale.intl;
  obj[1] = intl.string(_getSystemLocale.t.e6RscS);
  obj[2] = function action() {
    return outer1_3(function*() {
      if (paths === 2) {
        paths = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              paths = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              c1 = 1;
              paths = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(paths[8])(paths[7], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            paths = 3;
            throw arg1;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const items = [closure_0];
            arg1.default(items, outer1_6.GUILD_LIST);
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
  let items = [obj, , ];
  obj = { IconComponent: _BellIcon.BellIcon, label: null, action: null };
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(_getSystemLocale.t.HcoRu0);
  obj[2] = function action() {
    outer1_1(outer1_2[10]).open(closure_0);
  };
  items[1] = obj;
  let obj1 = { IconComponent: _SettingsIcon.SettingsIcon, label: null, action: null };
  const intl3 = _getSystemLocale.intl;
  obj1[1] = intl3.string(_getSystemLocale.t.PdRCRg);
  obj1[2] = function action() {
    const guild = outer1_4.getGuild(closure_0);
    if (null != guild) {
      outer1_1(outer1_2[12])(guild);
    }
  };
  items[2] = obj1;
  if (result) {
    const splice = items.splice;
    const obj2 = { iconSource: null, label: null, action: null };
    if (isMutedResult) {
      obj2[0] = tmp5(11751);
      const intl5 = tmp(1236).intl;
      obj2[1] = intl5.string(tmp(1236).t.De0BTC);
      obj2[2] = function action() {
        if (null != callback) {
          const result = outer1_1(outer1_2[10]).updateGuildNotificationSettings(tmp, { muted: false }, callback(outer1_2[17]).NotificationLabels.Unmuted);
          const obj = outer1_1(outer1_2[10]);
        }
      };
      splice(1, 0, obj2);
    } else {
      obj2[0] = tmp5(11750);
      const intl4 = tmp(1236).intl;
      obj2[1] = intl4.string(tmp(1236).t.vRzp7P);
      obj2[2] = function action() {
        let obj = outer1_1(outer1_2[14]);
        obj = { guildId: callback };
        obj.openLazy(callback(outer1_2[8])(outer1_2[15], outer1_2.paths), "muteSettings" + callback, obj);
      };
      splice(1, 0, obj2);
    }
  }
  return items;
};