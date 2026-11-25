// === Module 19915: GuildSettingsModalIntegrations ===

// Module 19915 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 575 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8531 */;
import openGuildSettingsRemoveAppAlertDefault from "openGuildSettingsRemoveAppAlert" /* 19918 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8532 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1071);
({ GuildSettingsSections: hasOwnProperty, Permissions: closure_6, PlatformTypes } = Constants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
const createStyles = fn(5012);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, screenContent: null, platformIcon: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.screenContent = { paddingTop: nativeDefault.space.PX_16 };
obj2.platformIcon = { width: 24, height: 24 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  closure_3 = undefined;
  let found;
  closure_5 = undefined;
  let found2;
  const token = require("useToken").useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = closure_11();
  _require = tmp2;
  const obj = require("useToken");
  importDefault = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  items = [found];
  stateFromStores = require("initialize").useStateFromStores(items, () => found.getGuild(), []);
  let obj3 = require("initialize");
  const items1 = [closure_3];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    if (null == stateFromStores) {
      let guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  closure_3 = require("useTheme")();
  let obj4 = require("initialize");
  const items2 = [found];
  let stateFromStores1 = require("initialize").useStateFromStores(items2, () => found.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  const items3 = [];
  if (canManageGuild) {
    if (stateFromStores1 == null) {
      stateFromStores1 = [];
    }
    const iter = stateFromStores1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ id, application } = nextResult);
      let tmp10 = "discord" === nextResult.type;
      if (tmp10) {
        tmp10 = null != application;
      }
      if (tmp10) {
        let obj6 = { integrationId: id, application };
        let arr = items3.push(obj6);
      }
      continue;
    }
  }
  let id1;
  let obj5 = require("initialize");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  closure_5 = require("useConjureServerApplicationIds")(id1, items3.map((application) => application.application.id));
  const found1 = items3.filter((application) => closure_5.includes(application.application.id));
  found2 = items3.filter((application) => !closure_5.includes(application.application.id));
  const tmp17 = require("useConjureServerApplicationIds");
  const items4 = [closure_3];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items4, () => {
    if (null == stateFromStores) {
      items = [];
    } else {
      found = found2.filter((application) => {
        application = application.application;
        let canManageUserResult = null == application.bot;
        if (!canManageUserResult) {
          canManageUserResult = closure_3.canManageUser(found2.MANAGE_GUILD, application.bot.id, stateFromStores);
        }
        return canManageUserResult;
      });
      items = found.map((application) => application.application.id);
    }
    return items;
  });
  let obj7 = require("initialize");
  let id2;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  let tmp28Result4 = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(id2).length > 0;
  if (canManageGuild) {
    let num;
    if (found != null) {
      num = found.length;
    }
    if (num == null) {
      num = 0;
    }
    canManageGuild = num > 0;
  }
  let tmp23 = canManageWebhooks;
  if (!canManageWebhooks) {
    tmp23 = tmp28Result4;
  }
  if (!tmp23) {
    tmp23 = canManageGuild;
  }
  let tmp24 = null;
  if (null != stateFromStores) {
    if (tmp23) {
      const obj9 = { style: tmp2.screenContainer, contentContainerStyle: null, children: null };
      const items5 = [tmp2.screenContent, contentContainerStyle.contentContainerStyle];
      obj9.contentContainerStyle = items5;
      const obj10 = { style: null, spacing: null, children: null };
      const obj11 = { paddingHorizontal: token };
      obj10.style = obj11;
      obj10.spacing = tmp15(tmp16[6]).space.PX_24;
      let tmp26Result = null;
      if (tmp23) {
        let tmp28Result = canManageWebhooks;
        if (canManageWebhooks) {
          const obj12 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          let intl = tmp19(tmp16[17]).intl;
          obj12.label = intl.string(tmp19(tmp16[17]).t.jp25Id);
          const intl2 = tmp19(tmp16[17]).intl;
          obj12.subLabel = intl2.string(tmp19(tmp16[17]).t.mKIOkI);
          obj12.icon = closure_7(tmp19(tmp16[18]).WebhookIcon, {});
          obj12.onPress = function onPress() {
            return closure_1.push(constants.WEBHOOKS);
          };
          tmp28Result = closure_7(tmp19(tmp16[16]).TableRow, obj12);
        }
        const items6 = [tmp28Result, , , ];
        if (canManageWebhooks) {
          const obj13 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl3 = tmp19(tmp16[17]).intl;
          obj13.label = intl3.string(tmp19(tmp16[17]).t.OrV60r);
          const intl4 = tmp19(tmp16[17]).intl;
          obj13.subLabel = intl4.string(tmp19(tmp16[17]).t.rQREJl);
          obj13.icon = closure_7(tmp19(tmp16[19]).ChannelsFollowedIcon, {});
          obj13.onPress = function onPress() {
            return closure_1.push(constants.CHANNELS_FOLLOWED);
          };
          canManageWebhooks = closure_7(tmp19(tmp16[16]).TableRow, obj13);
        }
        items6[1] = canManageWebhooks;
        if (tmp28Result4) {
          const obj14 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl5 = tmp19(tmp16[17]).intl;
          obj14.label = intl5.string(tmp19(tmp16[17]).t.tqtDXC);
          const intl6 = tmp19(tmp16[17]).intl;
          obj14.subLabel = intl6.string(tmp19(tmp16[17]).t.v8819e);
          obj14.icon = closure_7(tmp19(tmp16[20]).RefreshIcon, {});
          obj14.onPress = function onPress() {
            return closure_1.push(constants.LOBBIES_LINKED);
          };
          tmp28Result4 = closure_7(tmp19(tmp16[16]).TableRow, obj14);
        }
        items6[2] = tmp28Result4;
        if (canManageGuild) {
          canManageGuild = items.map((item) => {
            const platformType = item;
            let someResult;
            if (found != null) {
              someResult = found.some((type) => type.type === closure_0);
            }
            if (someResult) {
              value = closure_1(stateFromStores[21]).get(item);
              if (null == value) {
                return null;
              } else {
                const obj3 = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
                const intl = platformType(stateFromStores[17]).intl;
                const obj4 = { platformName: value.name };
                obj3.subLabel = intl.formatToPlainString(platformType(stateFromStores[17]).t.VXU4EU, obj4);
                const tmp2Result = closure_1(stateFromStores[22]);
                const obj5 = platformType(stateFromStores[23]);
                let icon = value.icon;
                const obj7 = { source: obj5.makeSource(platformType(stateFromStores[24]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                icon = closure_1_7(tmp2Result, obj7);
                obj3.icon = icon;
                obj3.onPress = function onPress() {
                  return closure_1.push(constants.INTEGRATION_PLATFORM, { platformType });
                };
                closure_1_7(platformType(stateFromStores[16]).TableRow, obj3, item);
                const obj6 = platformType(stateFromStores[24]);
              }
              const obj2 = closure_1(stateFromStores[21]);
            } else {
              return null;
            }
          });
        }
        const obj15 = { hasIcons: true, children: null };
        items6[3] = canManageGuild;
        obj15.children = items6;
        tmp26Result = closure_8(tmp19(tmp16[15]).TableRowGroup, obj15);
      }
      const items7 = [tmp26Result, , ];
      let tmp28Result5 = null;
      if (found2.length > 0) {
        const obj16 = { title: null, apps: null, removableApplicationIds: null, onRemove: null };
        const intl7 = tmp19(tmp16[17]).intl;
        obj16.title = intl7.string(tmp19(tmp16[17]).t.pUBKht);
        obj16.apps = found2;
        obj16.removableApplicationIds = stateFromStoresArray;
        obj16.onRemove = function onRemove(app) {
          return openGuildSettingsRemoveAppAlertDefault({ guildId: stateFromStores.id, app });
        };
        tmp28Result5 = closure_7(tmp15(tmp16[25]), obj16);
        const tmp15Result = tmp15(tmp16[25]);
      }
      items7[1] = tmp28Result5;
      let tmp28Result6 = null;
      if (found1.length > 0) {
        const obj17 = {
          guildId: stateFromStores.id,
          apps: found1,
          onRemoveIntegration(arg0) {
                  return GuildSettingsActionCreatorsDefault.disableIntegration(stateFromStores.id, arg0);
                }
        };
        tmp28Result6 = closure_7(tmp15(tmp16[27]), obj17);
      }
      const obj18 = { children: null };
      items7[2] = tmp28Result6;
      obj10.children = items7;
      obj9.children = closure_8(tmp19(tmp16[14]).Stack, obj10);
      const items8 = [closure_7(tmp19(tmp16[13]).Form, obj9), closure_7(tmp19(tmp16[29]).NavScrim, {})];
      obj18.children = items8;
      let tmp26Result2 = closure_8(closure_9, obj18);
    } else {
      tmp26Result2 = null;
    }
    tmp24 = tmp26Result2;
  }
  return tmp24;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;