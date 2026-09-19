// === Module 16620: GuildsBarFolderMenuItems ===

// Module 16620 (GuildsBarFolderMenuItems)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SortedGuildStore from "SortedGuildStore" /* 5650 */;

const require = globalThis.__r;

const require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx");

export const getGuildFolderMenuItems = function getGuildFolderMenuItems(id) {
  _require = id;
  let obj = { IconComponent: require("EnvelopeIcon").EnvelopeIcon, label: null, action: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.e6RscS);
  obj.action = function action() {
    return (async () => {
      if (guildFolderById === 2) {
        guildFolderById = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          guildFolderById = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              guildFolderById = 3;
              throw value;
            } else if (arg0 === 2) {
              guildFolderById = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              guildFolderById = guildFolderById.getGuildFolderById(id);
              closure_128_0 = guildFolderById;
              if (null != guildFolderById) {
                c2 = 1;
                guildFolderById = 1;
                const obj4 = { value: tmp2(tmp3[6])(tmp3[5], tmp3.paths), done: false };
                return obj4;
              } else {
                guildFolderById = 3;
              }
            }
          } else if (arg0 === 1) {
            guildFolderById = 3;
            throw value;
          } else if (arg0 !== 2) {
            value.default(closure_128_0.guildIds, constants.GUILD_LIST);
          }
          guildFolderById = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp14) {
          guildFolderById = tmp;
          throw tmp14;
        }
      }
    })();
  };
  const items = [obj, ];
  let obj2 = { IconComponent: require("SettingsIcon").SettingsIcon, label: null, action: null };
  const intl2 = require("util").intl;
  obj2.label = intl2.string(require("util").t.Dx7im5);
  obj2.action = function action() {
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              paths = 1;
              c2 = 1;
              const obj4 = { value: tmp4(paths[6])(paths[8], paths.paths), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const result = value.showGuildsBarFolderModal(closure_128_0);
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
  items[1] = obj2;
  return items;
};