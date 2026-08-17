// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx
import ThemesDefault from "Themes" /* 712 */;
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5097 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleFormInit" /* 8875 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

let require = arg1;
({ ActivityIndicator: c3, Image: c4, View: c5 } = get_ActivityIndicator);
({ GuildSettingsSections: error, HelpdeskArticles: closure_8, PlatformTypes: c9, UserSettingsSections: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { form: null, trailingWrapper: null, platformIcon: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { width: 24, height: 24 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const Component = importAllResult.Component;
class IntegrationItem extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { enabled: applyArgumentsResult.props.integration.enabled };
    applyArgumentsResult.handleToggleEnabled = function handleToggleEnabled() {
      const props = guild.props;
      guild = props.guild;
      const integration = props.integration;
      if (!integration.syncing) {
        const setState = guild.setState;
        if (integration.enabled) {
          setState({ enabled: false });
          let showResult = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, confirmColor: null };
          const intl = applyArgumentsResult(closure_1_2[15]).intl;
          showResult[0] = intl.string(applyArgumentsResult(closure_1_2[15]).t.emx3lN);
          if ("youtube" === integration.type) {
            const intl3 = tmp9(closure_1_2[15]).intl;
            let stringResult = intl3.string(tmp9(closure_1_2[15]).t.anKQWU);
          } else {
            const intl2 = tmp9(closure_1_2[15]).intl;
            stringResult = intl2.string(tmp9(closure_1_2[15]).t["BW/xtn"]);
          }
          showResult[1] = stringResult;
          const intl4 = tmp9(closure_1_2[15]).intl;
          showResult[2] = intl4.string(applyArgumentsResult(closure_1_2[15]).t.R9GHya);
          const intl5 = tmp9(closure_1_2[15]).intl;
          showResult[3] = intl5.string(applyArgumentsResult(closure_1_2[15]).t["ETE/oC"]);
          showResult[4] = function onConfirm() {
            return closure_2_1(closure_2_2[16]).disableIntegration(guild.id, integration.id);
          };
          showResult[5] = function onCancel() {
            return guild.setState({ enabled: true });
          };
          showResult[6] = closure_1_1(closure_1_2[18]).Colors.RED;
          showResult = closure_1_1(closure_1_2[17]).show(showResult);
          const obj2 = closure_1_1(closure_1_2[17]);
        } else {
          setState({ enabled: true });
          showResult = closure_1_1(closure_1_2[16]);
          showResult.enableIntegration(guild.id, integration.type, integration.id);
        }
      }
    };
    return applyArgumentsResult;
  }
}
IntegrationItem["getDerivedStateFromProps"] = function getDerivedStateFromProps(integration, enabled) {
  integration = integration.integration;
  enabled = enabled.enabled;
  let tmp = null;
  if (enabled) {
    tmp = null;
    if (false === integration.syncing) {
      tmp = null;
      if (integration.enabled !== enabled) {
        const obj = { enabled: null };
        obj[0] = integration.enabled;
        tmp = obj;
      }
    }
  }
  return tmp;
};
IntegrationItem.prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  const integration = props.integration;
  ({ onPress: importDefault, styles } = props);
  const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = integration(16781).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
  if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
    const type = integration.type;
    if (tmp(16821).IntegrationTypes.YOUTUBE === type) {
      const account = integration.account;
      let name;
      if (account != null) {
        name = account.name;
      }
      let combined = name;
    } else if (tmp(16821).IntegrationTypes.TWITCH === type) {
      const _HermesInternal = HermesInternal;
      let str = "twitch.tv/";
      combined = "twitch.tv/" + integration.name;
    }
    let obj = getPlatformUserUrlDefault;
    const value = obj.get(integration.type);
    if (null == value) {
      str = undefined;
      if (integration.user != null) {
        str = str2.toString();
      }
      obj = { label: null, subLabel: null, trailing: null, arrow: null, icon: null, disabled: null, onPress: null };
      obj[0] = str;
      obj[1] = combined;
      obj = { style: null, children: null };
      obj[0] = styles.trailingWrapper;
      let syncing = integration.syncing;
      if (syncing) {
        syncing = tmp17(closure_3, { animating: true, size: "small" });
      }
      obj[1] = syncing;
      obj[2] = closure_11(closure_5, obj);
      obj[3] = integration.enabled && !integration.syncing;
      obj[4] = null;
      let enabled = integration.enabled;
      let syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      obj1 = { hasIcons: true, children: null };
      obj[5] = syncing2;
      obj[6] = function onPress() {
        let enabled = integration.enabled;
        if (enabled) {
          enabled = callback(tmp);
        }
        return enabled;
      };
      const items = [closure_11(tmp(6291).TableRow, obj), ];
      const obj2 = { value: null, disabled: null, onValueChange: null, label: null };
      const _Boolean = Boolean;
      obj2[0] = Boolean(self.state.enabled);
      obj2[1] = true === integration.syncing;
      obj2[2] = self.handleToggleEnabled;
      const intl = tmp(1236).intl;
      obj2[3] = intl.string(tmp(1236).t.vQC6vR);
      items[1] = closure_11(tmp(7178).TableSwitchRow, obj2);
      obj1[1] = items;
      return closure_12(tmp(6286).TableRowGroup, obj1);
    } else {
      let tmpResult = tmp(1435);
      tmpResult = tmp(1363);
      let icon = value.icon;
      icon = { source: null, style: null };
      icon[0] = tmpResult.makeSource(tmpResult.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
      icon[1] = styles.platformIcon;
      closure_11(closure_4, icon);
      const tmp12 = closure_11;
      const tmp13 = closure_4;
      const tmp14 = tmpResult.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
    }
  } else {
    return null;
  }
};
const result = require("set").fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx");

export default function GuildSettingsModalIntegrationPlatform(platformType) {
  platformType = platformType.platformType;
  const closeGuildSettings = platformType.closeGuildSettings;
  dependencyMap = undefined;
  let navigation;
  let submitting;
  c5 = undefined;
  guild = undefined;
  closure_7 = undefined;
  function onSave() {
    if (null != guild) {
      let obj = closeGuildSettings(8874);
      obj = { features: null };
      obj[0] = tmp.features;
      obj.saveGuild(tmp.id, obj);
    }
  }
  let obj = platformType(4097);
  const token = obj.useToken(closeGuildSettings(712).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = callback();
  dependencyMap = tmp5;
  obj1 = platformType(1500);
  navigation = obj1.useNavigation();
  let obj3 = platformType(589);
  const items = [guild];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ guild: guild.getGuild(), submitting: guild.isSubmitting(), hasChanges: guild.hasChanges() }));
  submitting = stateFromStoresObject.submitting;
  ({ hasChanges: c5, guild } = stateFromStoresObject);
  closure_7 = closeGuildSettings(4310)();
  let obj4 = platformType(589);
  const items1 = [guild];
  const stateFromStores = obj4.useStateFromStores(items1, () => guild.getProps().integrations);
  if (stateFromStores != null) {
    const found = stateFromStores.filter((type) => type.type === platformType);
  }
  if (null == guild) {
    return null;
  } else {
    let fn;
    if (submitting) {
      fn = () => null;
    }
    obj = { headerLeft: null, title: null, headerRight: null };
    obj[0] = fn;
    let tmp3Result = tmp3(5097);
    const value = tmp3Result.get(platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    function onConectTap() {
      closeGuildSettings();
      let obj = platformType(7360);
      obj = { screen: closure_1_10.CONNECTIONS, isRootScreen: true };
      obj.openUserSettings(obj);
    }
    obj[1] = name;
    obj[2] = function headerRight() {
      if (submitting) {
        let tmp2 = closure_1_11(platformType(6314).HeaderSubmittingIndicator, {});
      } else {
        tmp2 = null;
        if (c5) {
          const obj = { text: null, onPress: null };
          const intl = platformType(1236).intl;
          obj[0] = intl.string(platformType(1236).t["R3BPH+"]);
          obj[1] = onSave;
          tmp2 = closure_1_11(platformType(5432).HeaderActionButton, obj);
        }
      }
      return tmp2;
    };
    navigation.setOptions(obj);
    if (constants.YOUTUBE === platformType) {
      let intl = tmp(1236).intl;
      obj = { connectAction: null, helpdeskArticle: null };
      obj[0] = onConectTap;
      tmp3Result = tmp3(1993);
      obj[1] = tmp3Result.getArticleURL(onSave.YOUTUBE_INTEGRATION);
      let formatResult = intl.format(tmp(1236).t["4OSAQ9"], obj);
    } else if (tmp10.TWITCH === platformType) {
      const intl2 = tmp(1236).intl;
      obj1 = { connectAction: null, helpdeskArticle: null };
      obj1[0] = onConectTap;
      obj1[1] = tmp3(1993).getArticleURL(onSave.TWITCH_INTEGRATION);
      formatResult = intl2.format(tmp(1236).t.ro1jEN, obj1);
      const tmp3Result1 = tmp3(1993);
    }
    const obj2 = { style: null, contentContainerStyle: null, children: null };
    obj2[0] = tmp5.form;
    obj2[1] = platformType.contentContainerStyle;
    obj3 = { style: null, spacing: null, children: null };
    obj4 = { paddingHorizontal: null };
    obj4[0] = token;
    obj3[0] = obj4;
    obj3[1] = tmp3(712).space.PX_24;
    let mapped;
    if (found != null) {
      mapped = found.map((id) => {
        closure_0 = arg1;
        return closure_1_11(closure_1_15, {
          guild,
          theme: closure_7,
          integration: id,
          styles: closure_2,
          onPress() {
            closure_1_3.push(constants.INTEGRATION_SETTINGS, { integrationId: closure_0 });
          }
        }, id.id);
      });
    }
    const obj5 = { children: null };
    const items2 = [mapped, ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj6[2] = formatResult;
    items2[1] = closure_11(tmp(4734).Text, obj6);
    obj3[2] = items2;
    obj2[2] = closure_12(tmp(4733).Stack, obj3);
    const items3 = [closure_11(tmp(8083).Form, obj2), closure_11(tmp(6550).NavScrim, {})];
    obj5[0] = items3;
    return closure_12(closure_13, obj5);
  }
};