import DoorExitIcon from "DoorExitIcon";
import initialize from "initialize";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticsSections } from "ME";

const require = arg1;
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(guildId) {
  let closure_0 = guildId;
  if (lurking.isLurking(guildId)) {
    let obj = { IconComponent: null, label: null, variant: "destructive", action: null };
    obj[0] = tmp(10832).DoorExitIcon;
    const intl6 = tmp(1236).intl;
    obj[1] = intl6.string(tmp(1236).t["2vl7qn"]);
    obj[3] = function action() {
      const result = guildId(outer1_2[7]).trackLongPressLeaveClicked(guildId);
      const obj = guildId(outer1_2[7]);
      guildId(outer1_2[8]).stopLurkingForGuild(guildId);
    };
    let items = [obj];
    return items;
  } else {
    let result = tmp(10463).shouldShowUseNewNotificationSystem("GuildPopoutMenu");
    obj = { IconComponent: null, label: null, action: null };
    const tmpResult = tmp(10463);
    obj[0] = tmp(9443).EnvelopeIcon;
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.e6RscS);
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
                obj1[0] = outer1_0(paths[12])(paths[11], paths.paths);
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
              arg1.default(items, outer1_7.GUILD_LIST);
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
    const items1 = [obj, , ];
    let obj1 = { IconComponent: null, label: null, action: null };
    obj1[0] = tmp(10382).BellIcon;
    const intl2 = tmp(1236).intl;
    obj1[1] = intl2.string(tmp(1236).t.HcoRu0);
    obj1[2] = function action() {
      outer1_1(outer1_2[14]).open(closure_0);
    };
    items1[1] = obj1;
    const obj2 = { IconComponent: null, label: null, action: null };
    obj2[0] = tmp(5910).SettingsIcon;
    const intl3 = tmp(1236).intl;
    obj2[1] = intl3.string(tmp(1236).t.PdRCRg);
    obj2[2] = function action() {
      const guild = outer1_5.getGuild(closure_0);
      if (null != guild) {
        outer1_1(outer1_2[16])(guild);
      }
    };
    items1[2] = obj2;
    if (result) {
      const splice = items1.splice;
      const obj3 = { iconSource: null, label: null, action: null };
      if (isMutedResult) {
        obj3[0] = tmp6(11601);
        const intl5 = tmp(1236).intl;
        obj3[1] = intl5.string(tmp(1236).t.De0BTC);
        obj3[2] = function action() {
          if (null != guildId) {
            const result = outer1_1(outer1_2[14]).updateGuildNotificationSettings(tmp, { muted: false }, guildId(outer1_2[21]).NotificationLabels.Unmuted);
            const obj = outer1_1(outer1_2[14]);
          }
        };
        splice(1, 0, obj3);
      } else {
        obj3[0] = tmp6(11600);
        const intl4 = tmp(1236).intl;
        obj3[1] = intl4.string(tmp(1236).t.vRzp7P);
        obj3[2] = function action() {
          let obj = outer1_1(outer1_2[18]);
          obj = { guildId };
          obj.openLazy(guildId(outer1_2[12])(outer1_2[19], outer1_2.paths), "muteSettings" + guildId, obj);
        };
        splice(1, 0, obj3);
      }
    }
    return items1;
  }
};