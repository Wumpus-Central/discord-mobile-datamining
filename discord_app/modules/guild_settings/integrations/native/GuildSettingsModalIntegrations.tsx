// === Module 17560: GuildSettingsModalIntegrations ===

// Module 17560 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

const require = fn;
const Image = fn(17).Image;
const Constants = fn(1074);
({ GuildSettingsSections: metroRequire, PlatformTypes } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
fn(4560);
let createStyles = { screenContainer: null, screenContent: null, platformIcon: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.screenContainer = createStyles;
createStyles.screenContent = { paddingTop: nativeDefault.space.PX_16 };
createStyles.platformIcon = { width: 24, height: 24 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let found;
  let obj = require("useToken");
  const token = obj.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_11();
  _require = tmp5;
  let obj1 = require("useNavigation");
  importDefault = obj1.useNavigation();
  let obj2 = require("initialize");
  items = [GuildSettingsStore];
  stateFromStores = obj2.useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj3 = require("initialize");
  const items1 = [found];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
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
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildSettingsStore.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp15Result = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(id).length > 0;
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
  let tmp11 = null;
  if (null != stateFromStores) {
    if (!canManageWebhooks) {
      if (!tmp15Result) {
        let tmp13Result = null;
      }
      tmp11 = tmp13Result;
    }
    obj = { style: tmp5.screenContainer, contentContainerStyle: null, children: null };
    const items3 = [tmp5.screenContent, contentContainerStyle.contentContainerStyle];
    obj.contentContainerStyle = items3;
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: token };
    obj.style = obj1;
    obj.spacing = require("native").space.PX_24;
    tmp15Result = canManageWebhooks;
    if (canManageWebhooks) {
      obj2 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      let intl = tmp(tmp2[17]).intl;
      obj2.label = intl.string(tmp(tmp2[17]).t.jp25Id);
      const intl2 = tmp(tmp2[17]).intl;
      obj2.subLabel = intl2.string(tmp(tmp2[17]).t.mKIOkI);
      obj2.icon = tmp15(tmp(tmp2[18]).WebhookIcon, {});
      obj2.onPress = function onPress() {
        return closure_1.push(constants.WEBHOOKS);
      };
      tmp15Result = tmp15(tmp(tmp2[16]).TableRow, obj2);
    }
    const items4 = [tmp15Result, , , ];
    if (canManageWebhooks) {
      obj3 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl3 = tmp(tmp2[17]).intl;
      obj3.label = intl3.string(tmp(tmp2[17]).t.OrV60r);
      const intl4 = tmp(tmp2[17]).intl;
      obj3.subLabel = intl4.string(tmp(tmp2[17]).t.rQREJl);
      obj3.icon = tmp15(tmp(tmp2[19]).ChannelsFollowedIcon, {});
      obj3.onPress = function onPress() {
        return closure_1.push(constants.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = tmp15(tmp(tmp2[16]).TableRow, obj3);
    }
    items4[1] = canManageWebhooks;
    if (tmp15Result) {
      obj4 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl5 = tmp(tmp2[17]).intl;
      obj4.label = intl5.string(tmp(tmp2[17]).t.tqtDXC);
      const intl6 = tmp(tmp2[17]).intl;
      obj4.subLabel = intl6.string(tmp(tmp2[17]).t.v8819e);
      obj4.icon = tmp15(tmp(tmp2[20]).RefreshIcon, {});
      obj4.onPress = function onPress() {
        return closure_1.push(constants.LOBBIES_LINKED);
      };
      tmp15Result = tmp15(tmp(tmp2[16]).TableRow, obj4);
    }
    items4[2] = tmp15Result;
    if (canManageGuild) {
      canManageGuild = items.map((item) => {
        const platformType = item;
        let obj = found;
        let someResult;
        if (found != null) {
          someResult = obj.some((type) => type.type === closure_0);
        }
        if (someResult) {
          let obj1 = closure_1(stateFromStores[21]);
          value = obj1.get(item);
          if (null == value) {
            return null;
          } else {
            obj = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
            const intl = platformType(tmp3[17]).intl;
            obj = { platformName: value.name };
            obj.subLabel = intl.formatToPlainString(platformType(tmp3[17]).t.VXU4EU, obj);
            const obj5 = platformType(tmp3[22]);
            const tmp8 = closure_3;
            let icon = value.icon;
            obj1 = { source: obj5.makeSource(platformType(tmp3[23]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
            icon = tmp6(tmp8, obj1);
            obj.icon = icon;
            obj.onPress = function onPress() {
              return closure_1.push(constants.INTEGRATION_PLATFORM, { platformType });
            };
            closure_1_7(platformType(tmp3[16]).TableRow, obj, item);
            const obj6 = platformType(tmp3[23]);
          }
        } else {
          return null;
        }
      });
    }
    let obj5 = { children: null };
    let obj6 = { hasIcons: true, children: null };
    items4[3] = canManageGuild;
    obj6.children = items4;
    obj.children = closure_8(tmp(tmp2[15]).TableRowGroup, obj6);
    obj.children = closure_7(tmp(tmp2[14]).Stack, obj);
    const items5 = [closure_7(tmp(tmp2[13]).Form, obj), closure_7(tmp(tmp2[24]).NavScrim, {})];
    obj5.children = items5;
    tmp13Result = tmp13(closure_9, obj5);
  }
  return tmp11;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;