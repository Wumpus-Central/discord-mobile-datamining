// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const Constants = fn(1074);
({ GuildSettingsSections: metroRequire, PlatformTypes } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let items = [,];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
const createStyles = fn(4639);
let obj2 = {
  screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  screenContent: null,
  platformIcon: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.screenContent = { paddingTop: nativeDefault.space.PX_16 };
obj2.platformIcon = { width: 24, height: 24 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx",
);

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let found;
  const token = require("useToken").useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_11();
  _require = tmp5;
  const obj = require("useToken");
  const tmp3 = importDefault;
  importDefault = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  items = [GuildSettingsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj3 = require("initialize");
  const items1 = [found];
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
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => GuildSettingsStore.getProps().integrations,
  );
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let obj5 = require("initialize");
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp15Result2 = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(id).length > 0;
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
      if (!tmp15Result2) {
        let tmp13Result = null;
      }
      tmp11 = tmp13Result;
    }
    let obj6 = { style: tmp5.screenContainer, contentContainerStyle: null, children: null };
    const items3 = [tmp5.screenContent, contentContainerStyle.contentContainerStyle];
    obj6.contentContainerStyle = items3;
    let obj7 = { style: null, spacing: null, children: null };
    const obj8 = { paddingHorizontal: token };
    obj7.style = obj8;
    obj7.spacing = tmp3(tmp2[7]).space.PX_24;
    let tmp15Result = canManageWebhooks;
    if (canManageWebhooks) {
      const obj9 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      let intl = tmp(tmp2[17]).intl;
      obj9.label = intl.string(tmp(tmp2[17]).t.jp25Id);
      const intl2 = tmp(tmp2[17]).intl;
      obj9.subLabel = intl2.string(tmp(tmp2[17]).t.mKIOkI);
      obj9.icon = closure_7(tmp(tmp2[18]).WebhookIcon, {});
      obj9.onPress = function onPress() {
        return closure_1.push(constants.WEBHOOKS);
      };
      tmp15Result = closure_7(tmp(tmp2[16]).TableRow, obj9);
    }
    const items4 = [tmp15Result, , ,];
    if (canManageWebhooks) {
      const obj10 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl3 = tmp(tmp2[17]).intl;
      obj10.label = intl3.string(tmp(tmp2[17]).t.OrV60r);
      const intl4 = tmp(tmp2[17]).intl;
      obj10.subLabel = intl4.string(tmp(tmp2[17]).t.rQREJl);
      obj10.icon = closure_7(tmp(tmp2[19]).ChannelsFollowedIcon, {});
      obj10.onPress = function onPress() {
        return closure_1.push(constants.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = closure_7(tmp(tmp2[16]).TableRow, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp15Result2) {
      const obj11 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl5 = tmp(tmp2[17]).intl;
      obj11.label = intl5.string(tmp(tmp2[17]).t.tqtDXC);
      const intl6 = tmp(tmp2[17]).intl;
      obj11.subLabel = intl6.string(tmp(tmp2[17]).t.v8819e);
      obj11.icon = closure_7(tmp(tmp2[20]).RefreshIcon, {});
      obj11.onPress = function onPress() {
        return closure_1.push(constants.LOBBIES_LINKED);
      };
      tmp15Result2 = closure_7(tmp(tmp2[16]).TableRow, obj11);
    }
    items4[2] = tmp15Result2;
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
            const obj5 = platformType(stateFromStores[22]);
            let icon = value.icon;
            const obj7 = {
              source: obj5.makeSource(
                platformType(stateFromStores[23]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG,
              ),
              style: platformType.platformIcon,
            };
            icon = closure_1_7(closure_3, obj7);
            obj3.icon = icon;
            obj3.onPress = function onPress() {
              return closure_1.push(constants.INTEGRATION_PLATFORM, { platformType });
            };
            closure_1_7(platformType(stateFromStores[16]).TableRow, obj3, item);
            const obj6 = platformType(stateFromStores[23]);
          }
          const obj2 = closure_1(stateFromStores[21]);
        } else {
          return null;
        }
      });
    }
    const obj12 = { children: null };
    const obj13 = { hasIcons: true, children: null };
    items4[3] = canManageGuild;
    obj13.children = items4;
    obj7.children = closure_8(tmp(tmp2[15]).TableRowGroup, obj13);
    obj6.children = closure_7(tmp(tmp2[14]).Stack, obj7);
    const items5 = [closure_7(tmp(tmp2[13]).Form, obj6), closure_7(tmp(tmp2[24]).NavScrim, {})];
    obj12.children = items5;
    tmp13Result = closure_8(closure_9, obj12);
  }
  return tmp11;
}
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
