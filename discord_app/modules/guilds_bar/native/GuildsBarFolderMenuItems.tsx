// discord_app/modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../stores/SortedGuildStore.tsx";
import { AnalyticsSections } from "../../../Constants.tsx";
import { EnvelopeIcon } from "../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx";
import { SettingsIcon } from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx");

export const getGuildFolderMenuItems = function getGuildFolderMenuItems(guildFolderMenuItems) {
  const _require = guildFolderMenuItems;
  let obj = { IconComponent: _EnvelopeIcon.EnvelopeIcon, label: null, action: null };
  const intl = _getSystemLocale.intl;
  obj[1] = intl.string(_getSystemLocale.t.e6RscS);
  obj[2] = function action() {
    return closure_1_2(function*() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_1 = tmp3;
              guildFolderById = tmp2;
              guildFolderById = undefined;
              guildFolderById = guildFolderById.getGuildFolderById(closure_1_0);
              if (null != guildFolderById) {
                c2 = 1;
                guildFolderById = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_0(closure_1_1[6])(closure_1_1[5], closure_1_1.paths);
                return obj1;
              } else {
                guildFolderById = 3;
              }
            }
          } else if (arg0 === 1) {
            guildFolderById = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            arg1.default(guildFolderById.guildIds, closure_1_4.GUILD_LIST);
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
  obj = { IconComponent: _SettingsIcon.SettingsIcon, label: null, action: null };
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(_getSystemLocale.t.Dx7im5);
  obj[2] = function action() {
    return closure_1_2(function*() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_0 = tmp4;
              paths = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(paths[6])(paths[8], paths.paths);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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