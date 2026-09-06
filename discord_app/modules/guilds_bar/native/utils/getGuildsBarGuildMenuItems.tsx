// discord_app/modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../stores/GuildStore.tsx";
import closure_5 from "../../../../stores/UserGuildSettingsStore.tsx";
import { AnalyticsSections } from "../../../../Constants.tsx";
import { getMuteTimeOptions } from "../../../notifications/NotificationUtils.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(arg0) {
  const _require = arg0;
  let obj = getMuteTimeOptions;
  let result = obj.shouldShowUseNewNotificationSystem("GuildPopoutMenu");
  obj = {
    IconComponent: require("../../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx")
      .EnvelopeIcon,
    label: null,
    action: null,
  };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx").t.e6RscS);
  obj[2] = function action() {
    return closure_1_3(function* () {
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
              closure_0 = tmp4;
              c1 = 1;
              paths = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(paths[8])(paths[7], paths.paths);
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
            arg1.default(items, closure_1_6.GUILD_LIST);
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
  obj = {
    IconComponent: require("../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx").BellIcon,
    label: null,
    action: null,
  };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(require("../../../../intl/index.native.tsx").t.HcoRu0);
  obj[2] = function action() {
    closure_1_1(closure_1_2[10]).open(closure_0);
  };
  items[1] = obj;
  obj1 = {
    IconComponent: require("../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx")
      .SettingsIcon,
    label: null,
    action: null,
  };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj1[1] = intl3.string(require("../../../../intl/index.native.tsx").t.PdRCRg);
  obj1[2] = function action() {
    const guild = closure_1_4.getGuild(closure_0);
    if (null != guild) {
      closure_1_1(closure_1_2[12])(guild);
    }
  };
  items[2] = obj1;
  if (result) {
    const splice = items.splice;
    const obj2 = { iconSource: null, label: null, action: null };
    if (isMutedResult) {
      obj2[0] = tmp5(12378);
      const intl5 = tmp(1114).intl;
      obj2[1] = intl5.string(tmp(1114).t.De0BTC);
      obj2[2] = function action() {
        if (null != callback) {
          const result = closure_1_1(closure_1_2[10]).updateGuildNotificationSettings(
            tmp,
            { muted: false },
            callback(closure_1_2[17]).NotificationLabels.Unmuted,
          );
          const obj = closure_1_1(closure_1_2[10]);
        }
      };
      splice(1, 0, obj2);
    } else {
      obj2[0] = tmp5(12377);
      const intl4 = tmp(1114).intl;
      obj2[1] = intl4.string(tmp(1114).t.vRzp7P);
      obj2[2] = function action() {
        let obj = closure_1_1(closure_1_2[14]);
        obj = { guildId: callback };
        obj.openLazy(callback(closure_1_2[8])(closure_1_2[15], closure_1_2.paths), "muteSettings" + callback, obj);
      };
      splice(1, 0, obj2);
    }
  }
  return items;
}
