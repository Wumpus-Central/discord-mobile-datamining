// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ApplicationSubscriptionsActionCreatorsAll from "../../../premium_apps/ApplicationSubscriptionsActionCreators.tsx";
import WebhooksActionCreatorsDefault from "../../../../actions/WebhooksActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationSubscriptionsStore from "../../../premium_apps/ApplicationSubscriptionsStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
let useGuildIndexState = fn(10048).useGuildIndexState;
const FetchState = fn(19996).FetchState;
const Constants = fn(1071);
({ AnalyticEvents: closure_11, GuildSettingsSections: closure_12, Permissions: map1, PlatformTypes } = Constants);
let closure_14 = fn(19997).INTEGRATIONS_SEARCH_MIN_APPS;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let items = [,];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
const createStyles = fn(5043);
let obj2 = {
  screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  screenContent: null,
  platformIcon: null,
  emptyStateText: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.screenContent = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.platformIcon = { width: 24, height: 24 };
obj2.emptyStateText = { textAlign: "center" };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx",
);

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  canManageGuild = undefined;
  useGuildIndexState = undefined;
  let id2;
  closure_8 = undefined;
  const tmp = closure_19();
  _require = tmp;
  importDefault = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  items = [GuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj2 = require("initialize");
  const items1 = [PermissionStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    if (null == stateFromStores) {
      let guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  _slicedToArray = require("useTheme")();
  let obj3 = require("initialize");
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => GuildSettingsStore.getProps().integrations,
  );
  let found;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  const items3 = [];
  if (canManageGuild) {
    let items4 = stateFromStores1;
    if (stateFromStores1 == null) {
      items4 = [];
    }
    const iter = items4[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ id, application } = nextResult);
      let tmp10 = "discord" === nextResult.type;
      let tmp9 = nextResult;
      if (tmp10) {
        tmp10 = null != application;
      }
      if (tmp10) {
        let obj5 = { integrationId: id, application, integration: null };
        obj5.integration = tmp9;
        let arr = items3.push(obj5);
      }
      continue;
    }
  }
  const tmp17 = canManageGuild;
  let id1;
  let obj4 = require("initialize");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  useGuildIndexState = require("useConjureServerApplicationIds")(
    id1,
    items3.map((application) => application.application.id),
  );
  const tmp18 = require("useConjureServerApplicationIds");
  let arr7 = items3;
  if (items3.length > closure_14) {
    arr7 = tmp16(tmp17[15])(items3, tmp21);
  }
  const found1 = arr7.filter((application) => closure_6.includes(application.application.id));
  const found2 = arr7.filter((application) => !closure_6.includes(application.application.id));
  id2 = undefined;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  const result = useGuildIndexState(id2, true).result;
  if (result != null) {
    const sections = result.sections;
  }
  const tmp24 = require("useManageableAppWebhooks")(id2);
  closure_8 = tmp24;
  const items5 = [tmp24];
  const memo = obj6.useMemo(() => new Set(closure_8.map((application_id) => application_id.application_id)), items5);
  const items6 = [id2, canManageGuild];
  const effect = obj6.useEffect(() => {
    if (tmp2) {
      const forGuild = WebhooksActionCreatorsDefault.fetchForGuild(id2);
      if (ApplicationSubscriptionsStore.getEntitlementsForGuildFetchState(id2) === FetchState.NOT_FETCHED) {
        const entitlementsForGuild = ApplicationSubscriptionsActionCreatorsAll.fetchEntitlementsForGuild(id2);
      }
    }
    tmp2 = null != id2 && canManageGuild;
  }, items6);
  const tmp20 = _slicedToArray(found.useState(""), 2);
  let id3;
  if (stateFromStores != null) {
    id3 = stateFromStores.id;
  }
  let tmp36Result6 = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(id3).length > 0;
  let mapped = canManageGuild;
  if (canManageGuild) {
    let num;
    if (found != null) {
      num = found.length;
    }
    if (num == null) {
      num = 0;
    }
    mapped = num > 0;
  }
  let tmp31 = canManageWebhooks;
  if (!canManageWebhooks) {
    tmp31 = tmp36Result6;
  }
  if (!tmp31) {
    tmp31 = mapped;
  }
  let tmp32 = null;
  if (null != stateFromStores) {
    if (tmp31) {
      const obj8 = { style: tmp.screenContainer, contentContainerStyle: null, children: null };
      const items7 = [tmp.screenContent, contentContainerStyle.contentContainerStyle];
      obj8.contentContainerStyle = items7;
      const obj9 = { spacing: tmp16(tmp17[10]).space.PX_24, children: null };
      let tmp34Result = null;
      if (tmp31) {
        let tmp36Result = canManageWebhooks;
        if (canManageWebhooks) {
          const obj10 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          let intl = tmp27(tmp17[25]).intl;
          obj10.label = intl.string(tmp27(tmp17[25]).t.jp25Id);
          const intl2 = tmp27(tmp17[25]).intl;
          obj10.subLabel = intl2.string(tmp27(tmp17[25]).t.mKIOkI);
          obj10.icon = closure_15(tmp27(tmp17[26]).WebhookIcon, {});
          obj10.onPress = function onPress() {
            return closure_1.push(constants2.WEBHOOKS);
          };
          tmp36Result = closure_15(tmp27(tmp17[24]).TableRow, obj10);
        }
        const items8 = [tmp36Result, , ,];
        if (canManageWebhooks) {
          const obj11 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl3 = tmp27(tmp17[25]).intl;
          obj11.label = intl3.string(tmp27(tmp17[25]).t.OrV60r);
          const intl4 = tmp27(tmp17[25]).intl;
          obj11.subLabel = intl4.string(tmp27(tmp17[25]).t.rQREJl);
          obj11.icon = closure_15(tmp27(tmp17[27]).ChannelsFollowedIcon, {});
          obj11.onPress = function onPress() {
            return closure_1.push(constants2.CHANNELS_FOLLOWED);
          };
          canManageWebhooks = closure_15(tmp27(tmp17[24]).TableRow, obj11);
        }
        items8[1] = canManageWebhooks;
        if (tmp36Result6) {
          const obj12 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl5 = tmp27(tmp17[25]).intl;
          obj12.label = intl5.string(tmp27(tmp17[25]).t.tqtDXC);
          const intl6 = tmp27(tmp17[25]).intl;
          obj12.subLabel = intl6.string(tmp27(tmp17[25]).t.v8819e);
          obj12.icon = closure_15(tmp27(tmp17[28]).RefreshIcon, {});
          obj12.onPress = function onPress() {
            return closure_1.push(constants2.LOBBIES_LINKED);
          };
          tmp36Result6 = closure_15(tmp27(tmp17[24]).TableRow, obj12);
        }
        items8[2] = tmp36Result6;
        if (mapped) {
          mapped = items.map((item) => {
            const platformType = item;
            let someResult;
            if (found != null) {
              someResult = found.some((type) => type.type === closure_0);
            }
            if (someResult) {
              value = closure_1(canManageGuild[29]).get(item);
              if (null == value) {
                return null;
              } else {
                const obj3 = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
                const intl = platformType(canManageGuild[25]).intl;
                const obj4 = { platformName: value.name };
                obj3.subLabel = intl.formatToPlainString(platformType(canManageGuild[25]).t.VXU4EU, obj4);
                const tmp2Result = closure_1(canManageGuild[30]);
                const obj5 = platformType(canManageGuild[31]);
                let icon = value.icon;
                const obj7 = {
                  source: obj5.makeSource(
                    platformType(canManageGuild[32]).isThemeDark(closure_4) ? icon.darkPNG : icon.lightPNG,
                  ),
                  style: platformType.platformIcon,
                };
                icon = closure_1_15(tmp2Result, obj7);
                obj3.icon = icon;
                obj3.onPress = function onPress() {
                  return closure_1.push(constants2.INTEGRATION_PLATFORM, { platformType });
                };
                closure_1_15(platformType(canManageGuild[24]).TableRow, obj3, item);
                const obj6 = platformType(canManageGuild[32]);
              }
              const obj2 = closure_1(canManageGuild[29]);
            } else {
              return null;
            }
          });
        }
        const obj13 = { hasIcons: true, children: null };
        items8[3] = mapped;
        obj13.children = items8;
        tmp34Result = closure_16(tmp27(tmp17[23]).TableRowGroup, obj13);
      }
      const items9 = [tmp34Result, , , , ,];
      let tmp36Result7 = null;
      if (tmp22) {
        const obj14 = { size: "md", placeholder: null, accessibilityLabel: null, onChange: null };
        const intl7 = tmp27(tmp17[25]).intl;
        obj14.placeholder = intl7.string(tmp27(tmp17[25]).t["5prvKe"]);
        const intl8 = tmp27(tmp17[25]).intl;
        obj14.accessibilityLabel = intl8.string(tmp27(tmp17[25]).t["5prvKe"]);
        obj14.onChange = tmp20[1];
        tmp36Result7 = closure_15(tmp27(tmp17[33]).SearchBar, obj14);
      }
      items9[1] = tmp36Result7;
      let tmp34Result3 = null;
      if (canManageGuild) {
        tmp34Result3 = null;
        if (null != stateFromStores1) {
          tmp34Result3 = null;
          if (0 === items3.length) {
            const obj15 = { spacing: tmp16(tmp17[10]).space.PX_8, children: null };
            const obj16 = { title: null };
            const intl11 = tmp27(tmp17[25]).intl;
            obj16.title = intl11.string(tmp27(tmp17[25]).t.pUBKht);
            const items10 = [closure_15(tmp27(tmp17[23]).TableRowGroupTitle, obj16)];
            const obj17 = { children: null };
            const obj18 = { align: "center", spacing: tmp16(tmp17[10]).space.PX_16, children: null };
            const items11 = [closure_15(tmp27(tmp17[35]).AppMagnifierSpotIllustration, { height: 100 })];
            const obj19 = { variant: "heading-lg/semibold", style: tmp.emptyStateText, children: null };
            const intl12 = tmp27(tmp17[25]).intl;
            obj19.children = intl12.string(tmp27(tmp17[25]).t.nQQeFM);
            items11[1] = closure_15(tmp27(tmp17[36]).Text, obj19);
            obj18.children = items11;
            obj17.children = closure_16(tmp27(tmp17[22]).Stack, obj18);
            items10[1] = closure_15(tmp27(tmp17[34]).Card, obj17);
            obj15.children = items10;
            tmp34Result3 = closure_16(tmp27(tmp17[22]).Stack, obj15);
          }
        }
      }
      items9[2] = tmp34Result3;
      let tmp36Result8 = null;
      if (tmp22) {
        tmp36Result8 = null;
        if (0 === arr7.length) {
          const obj20 = { text: null };
          const intl9 = tmp27(tmp17[25]).intl;
          obj20.text = intl9.string(tmp27(tmp17[25]).t.EVWFNr);
          tmp36Result8 = closure_15(tmp16(tmp17[37]), obj20);
          const tmp16Result = tmp16(tmp17[37]);
        }
      }
      function openApp(application) {
        application = application.application;
        closure_1.push(constants2.INTEGRATION_APPLICATION, { applicationId: application.id });
        const obj3 = { application_id: application.id, guild_id: null, is_admin: null };
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        obj3.guild_id = id;
        let canResult;
        if (null != stateFromStores) {
          canResult = PermissionStore.can(constants3.ADMINISTRATOR, stateFromStores);
        }
        obj3.is_admin = canResult;
        AnalyticsUtilsDefault.track(constants.APP_MANAGE_CTA_CLICKED, obj3);
        const obj = { applicationId: application.id };
      }
      items9[3] = tmp36Result8;
      let tmp36Result9 = null;
      if (found2.length > 0) {
        const obj21 = {
          guildId: stateFromStores.id,
          title: null,
          apps: null,
          commandSections: null,
          webhookApplicationIds: null,
          onPress: null,
        };
        const intl10 = tmp27(tmp17[25]).intl;
        obj21.title = intl10.string(tmp27(tmp17[25]).t.pUBKht);
        obj21.apps = found2;
        obj21.commandSections = sections;
        obj21.webhookApplicationIds = memo;
        obj21.onPress = openApp;
        tmp36Result9 = closure_15(tmp16(tmp17[38]), obj21);
        const tmp16Result2 = tmp16(tmp17[38]);
      }
      items9[4] = tmp36Result9;
      let tmp36Result10 = null;
      if (found1.length > 0) {
        const obj22 = {
          guildId: stateFromStores.id,
          apps: found1,
          commandSections: sections,
          webhookApplicationIds: memo,
          onPress: openApp,
        };
        tmp36Result10 = closure_15(tmp16(tmp17[39]), obj22);
      }
      const obj23 = { children: null };
      items9[5] = tmp36Result10;
      obj9.children = items9;
      obj8.children = closure_16(tmp27(tmp17[22]).Stack, obj9);
      const items12 = [closure_15(tmp27(tmp17[21]).Form, obj8), closure_15(tmp27(tmp17[40]).NavScrim, {})];
      obj23.children = items12;
      let tmp34Result4 = closure_16(closure_17, obj23);
    } else {
      tmp34Result4 = null;
    }
    tmp32 = tmp34Result4;
  }
  return tmp32;
}
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
