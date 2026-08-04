// discord_app/modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx
import markGuildsAsRead from "markGuildsAsRead";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { AnalyticsSections } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx");

export const getGuildFolderMenuItems = function getGuildFolderMenuItems(guildFolderMenuItems) {
  const _require = guildFolderMenuItems;
  let obj = { IconComponent: _require(9271).EnvelopeIcon, label: null, action: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t.e6RscS);
  obj[2] = function action() {
    return outer1_2(function*() {
      if (guildFolderById === 2) {
        guildFolderById = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          guildFolderById = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              guildFolderById = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guildFolderById = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              guildFolderById = tmp2;
              guildFolderById = undefined;
              guildFolderById = guildFolderById.getGuildFolderById(outer1_0);
              if (null != guildFolderById) {
                c2 = 1;
                guildFolderById = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_0(outer1_1[6])(outer1_1[5], outer1_1.paths);
                return obj1;
              } else {
                guildFolderById = 3;
              }
            }
          } else if (arg0 === 1) {
            guildFolderById = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            arg1.default(guildFolderById.guildIds, outer1_4.GUILD_LIST);
          }
          guildFolderById = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp14) {
          guildFolderById = tmp;
          throw tmp14;
        }
      }
    })();
  };
  const items = [obj, ];
  obj = { IconComponent: _require(9020).SettingsIcon, label: null, action: null };
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_require(1236).t.Dx7im5);
  obj[2] = function action() {
    return outer1_2(function*() {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              paths = 1;
              c2 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(paths[6])(paths[8], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const result = arg1.showGuildsBarFolderModal(closure_0);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  };
  items[1] = obj;
  return items;
};