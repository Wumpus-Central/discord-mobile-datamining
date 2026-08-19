// === Module 16781: PlatformTypes ===

// Module 16781 (PlatformTypes)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleFormInit from "handleFormInit" /* 8875 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ GuildSettingsSections: closure_6, PlatformTypes } = ME);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[2] = { width: 24, height: 24 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  let _require;
  importDefault = undefined;
  let stateFromStores;
  let found;
  let obj = _require(stateFromStores[8]);
  const token = obj.useToken(importDefault(stateFromStores[7]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = callback();
  _require = tmp5;
  obj1 = _require(stateFromStores[9]);
  importDefault = obj1.useNavigation();
  let obj2 = _require(stateFromStores[10]);
  items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => store.getGuild(), []);
  let obj3 = _require(stateFromStores[10]);
  const items1 = [found];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    if (null == stateFromStores) {
      let guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = found.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  closure_3 = importDefault(stateFromStores[11])();
  let obj4 = _require(stateFromStores[10]);
  const items2 = [closure_5];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => store.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((item, index) => closure_10.includes(item.type));
  }
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp15Result = _require(stateFromStores[12]).useChannelsAllowedToUnlink(id).length > 0;
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
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp5.screenContainer;
    const items3 = [tmp5.screenContent, contentContainerStyle.contentContainerStyle];
    obj[1] = items3;
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: null };
    obj1[0] = token;
    obj[0] = obj1;
    obj[1] = importDefault(tmp2[7]).space.PX_24;
    tmp15Result = canManageWebhooks;
    if (canManageWebhooks) {
      obj2 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      let intl = tmp(tmp2[17]).intl;
      obj2[0] = intl.string(tmp(tmp2[17]).t.jp25Id);
      const intl2 = tmp(tmp2[17]).intl;
      obj2[1] = intl2.string(tmp(tmp2[17]).t.mKIOkI);
      obj2[2] = callback(tmp(tmp2[18]).WebhookIcon, {});
      obj2[4] = function onPress() {
        return arr.push(closure_1_6.WEBHOOKS);
      };
      tmp15Result = callback(tmp(tmp2[16]).TableRow, obj2);
    }
    const items4 = [tmp15Result, , , ];
    if (canManageWebhooks) {
      obj3 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl3 = tmp(tmp2[17]).intl;
      obj3[0] = intl3.string(tmp(tmp2[17]).t.OrV60r);
      const intl4 = tmp(tmp2[17]).intl;
      obj3[1] = intl4.string(tmp(tmp2[17]).t.rQREJl);
      obj3[2] = callback(tmp(tmp2[19]).ChannelsFollowedIcon, {});
      obj3[4] = function onPress() {
        return arr.push(closure_1_6.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = callback(tmp(tmp2[16]).TableRow, obj3);
    }
    items4[1] = canManageWebhooks;
    if (tmp15Result) {
      obj4 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl5 = tmp(tmp2[17]).intl;
      obj4[0] = intl5.string(tmp(tmp2[17]).t.tqtDXC);
      const intl6 = tmp(tmp2[17]).intl;
      obj4[1] = intl6.string(tmp(tmp2[17]).t.v8819e);
      obj4[2] = callback(tmp(tmp2[20]).RefreshIcon, {});
      obj4[4] = function onPress() {
        return arr.push(closure_1_6.LOBBIES_LINKED);
      };
      tmp15Result = callback(tmp(tmp2[16]).TableRow, obj4);
    }
    items4[2] = tmp15Result;
    if (canManageGuild) {
      canManageGuild = items.map((item, index) => {
        const lib = item;
        let obj = found;
        let someResult;
        if (found != null) {
          someResult = obj.some((item, index) => item.type === closure_0);
        }
        if (someResult) {
          obj1 = arr(stateFromStores[21]);
          const value = obj1.get(item);
          if (null == value) {
            return null;
          } else {
            obj = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
            obj[0] = value.name;
            const intl = lib(stateFromStores[17]).intl;
            obj = { platformName: null };
            obj[0] = value.name;
            obj[1] = intl.formatToPlainString(lib(stateFromStores[17]).t.VXU4EU, obj);
            const obj5 = lib(stateFromStores[22]);
            let icon = value.icon;
            obj1 = { source: null, style: null };
            obj1[0] = obj5.makeSource(lib(stateFromStores[23]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG);
            obj1[1] = lib.platformIcon;
            icon = closure_1_7(closure_3, obj1);
            obj[2] = icon;
            obj[4] = function onPress() {
              return closure_1_1.push(closure_2_6.INTEGRATION_PLATFORM, { platformType: closure_0 });
            };
            closure_1_7(lib(stateFromStores[16]).TableRow, obj, item);
            const obj6 = lib(stateFromStores[23]);
          }
        } else {
          return null;
        }
      });
    }
    let obj5 = { children: null };
    let obj6 = { hasIcons: true, children: null };
    items4[3] = canManageGuild;
    obj6[1] = items4;
    obj[2] = callback2(tmp(tmp2[15]).TableRowGroup, obj6);
    obj[2] = callback(tmp(tmp2[14]).Stack, obj);
    const items5 = [callback(tmp(tmp2[13]).Form, obj), callback(tmp(tmp2[24]).NavScrim, {})];
    obj5[0] = items5;
    tmp13Result = callback2(closure_9, obj5);
  }
  return tmp11;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;