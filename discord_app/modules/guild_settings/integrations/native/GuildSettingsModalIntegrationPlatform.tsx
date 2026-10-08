// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import shared from "../../../../design/shared.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import IntegrationTypes from "../../../../../discord_common/js/shared/shared-constants/IntegrationTypes.tsx";
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1085);
({
  GuildSettingsSections: metroRequire,
  HelpdeskArticles: closure_7,
  PlatformTypes: closure_8,
  UserSettingsSections: closure_9,
} = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  form: { paddingTop: nativeDefault.space.PX_16 },
  trailingWrapper: { flexDirection: "row", alignItems: "center" },
  platformIcon: { width: 24, height: 24 },
};
let closure_13 = createStyles.createStyles(obj2);
const Component = noop.Component;
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
        const setState = tmp.setState;
        if (integration.enabled) {
          setState({ enabled: false });
          let obj3 = {
            title: null,
            body: null,
            confirmText: null,
            cancelText: null,
            onConfirm: null,
            onCancel: null,
            confirmColor: null,
            isDismissable: false,
          };
          const intl = applyArgumentsResult(1126).intl;
          obj3.title = intl.string(applyArgumentsResult(1126).t.emx3lN);
          if ("youtube" === integration.type) {
            const intl3 = applyArgumentsResult(1126).intl;
            let stringResult = intl3.string(applyArgumentsResult(1126).t.anKQWU);
          } else {
            const intl2 = applyArgumentsResult(1126).intl;
            stringResult = intl2.string(applyArgumentsResult(1126).t["BW/xtn"]);
          }
          obj3.body = stringResult;
          const intl4 = applyArgumentsResult(1126).intl;
          obj3.confirmText = intl4.string(applyArgumentsResult(1126).t.R9GHya);
          const intl5 = applyArgumentsResult(1126).intl;
          obj3.cancelText = intl5.string(applyArgumentsResult(1126).t["ETE/oC"]);
          obj3.onConfirm = function onConfirm() {
            return GuildSettingsActionCreatorsDefault.disableIntegration(guild.id, integration.id);
          };
          obj3.onCancel = function onCancel() {
            return guild.setState({ enabled: true });
          };
          obj3.confirmColor = common_AlertDefault.Colors.RED;
          obj3 = actions_AlertActionCreatorsDefault.show(obj3);
        } else {
          setState({ enabled: true });
          GuildSettingsActionCreatorsDefault.enableIntegration(guild.id, integration.type, integration.id);
        }
      }
      tmp = guild;
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
        const obj = { enabled: integration.enabled };
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
  const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS =
    GuildSettingsModalIntegrations.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
  if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
    const type = integration.type;
    if (IntegrationTypes.IntegrationTypes.YOUTUBE === type) {
      const account = integration.account;
      let name;
      if (account != null) {
        name = account.name;
      }
      let combined = name;
    } else if (IntegrationTypes.IntegrationTypes.TWITCH === type) {
      const _HermesInternal = HermesInternal;
      combined = "twitch.tv/" + integration.name;
    }
    value = PlatformsDefault.get(integration.type);
    if (null == value) {
      let str1;
      if (integration.user != null) {
        str1 = str2.toString();
      }
      const obj2 = {
        label: str1,
        subLabel: combined,
        trailing: null,
        arrow: null,
        icon: null,
        disabled: null,
        onPress: null,
      };
      const obj3 = { style: styles.trailingWrapper, children: null };
      let syncing = integration.syncing;
      if (syncing) {
        syncing = collapsed(React3, { animating: true, size: "small" });
      }
      obj3.children = syncing;
      obj2.trailing = collapsed(React4, obj3);
      obj2.arrow = integration.enabled && !integration.syncing;
      obj2.icon = null;
      let enabled = integration.enabled;
      let syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      const obj4 = { hasIcons: true, children: null };
      obj2.disabled = syncing2;
      obj2.onPress = function onPress() {
        let enabled = integration.enabled;
        if (enabled) {
          enabled = importDefault(tmp);
        }
        return enabled;
      };
      const items = [collapsed(TableRow.TableRow, obj2)];
      const obj5 = { value: null, disabled: null, onValueChange: null, label: null };
      const _Boolean = Boolean;
      obj5.value = Boolean(self.state.enabled);
      obj5.disabled = true === integration.syncing;
      obj5.onValueChange = self.handleToggleEnabled;
      const intl = util.intl;
      obj5.label = intl.string(util.t.vQC6vR);
      items[1] = collapsed(TableSwitchRow.TableSwitchRow, obj5);
      obj4.children = items;
      return closure_1_11(TableRowGroup.TableRowGroup, obj4);
    } else {
      const tmp8Result = FastImageDefault;
      const tmpResult = AvatarUtils;
      const tmpResult2 = shared;
      const icon = { source: null, style: null };
      icon.source = tmpResult.makeSource(shared.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
      icon.style = styles.platformIcon;
      collapsed(tmp8Result, icon);
      const tmp14 = shared.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG;
    }
  } else {
    return null;
  }
};
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsModalIntegrationPlatform(closeGuildSettings) {
      const cResult = platformType(576).c(50);
      ({ contentContainerStyle, platformType } = closeGuildSettings);
      closeGuildSettings = closeGuildSettings.closeGuildSettings;
      let obj = platformType(576);
      const token = platformType(4778).useToken(closeGuildSettings(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp6 = closure_13();
      dependencyMap = tmp6;
      let obj2 = platformType(4778);
      const navigation = platformType(1502).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [hasChanges];
        const fn = function i() {
          return {
            guild: hasChanges.getGuild(),
            submitting: hasChanges.isSubmitting(),
            hasChanges: hasChanges.hasChanges(),
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const obj3 = platformType(1502);
      const stateFromStoresObject = platformType(504).useStateFromStoresObject(tmp7, tmp8);
      const submitting = stateFromStoresObject.submitting;
      hasChanges = stateFromStoresObject.hasChanges;
      guild = stateFromStoresObject.guild;
      const tmp11 = closeGuildSettings(4991)();
      constants2 = tmp11;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [hasChanges];
        class A {
          constructor() {
            return hasChanges.getProps().integrations;
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        let tmp13 = A;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      const tmpResult = platformType(504);
      const stateFromStores = platformType(504).useStateFromStores(tmp12, tmp13);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === closeGuildSettings) {
          if (cResult[6] === contentContainerStyle) {
            if (cResult[7] === guild) {
              if (cResult[8] === hasChanges) {
                if (cResult[9] === navigation) {
                  if (cResult[10] === platformType) {
                    if (cResult[11] === tmp6) {
                      if (cResult[12] === submitting) {
                        if (cResult[13] === token) {
                          if (cResult[14] === tmp11) {
                            class A {
                              constructor() {
                                return hasChanges.getProps().integrations;
                              }
                            }
                          }
                          const _Symbol = Symbol;
                          class A {
                            constructor() {
                              return hasChanges.getProps().integrations;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmpResult2 = platformType(504);
      if (stateFromStores != null) {
        const found = stateFromStores.filter((type) => type.type === platformType);
      }
      let tmp24;
      let tmp25;
      let tmp26;
      let PX_24;
      let tmp28;
      let tmp29 = null;
      let tmp30;
      let Form;
      let Stack;
      if (null != guild) {
        function onSave() {
          if (null != guild) {
            const obj2 = { features: guild.features };
            GuildSettingsActionCreatorsDefault.saveGuild(guild.id, obj2);
          }
        }
        class A {
          constructor() {
            return hasChanges.getProps().integrations;
          }
        }
        const obj4 = { headerLeft: undefined, title: null, headerRight: null };
        value = tmp4(5759).get(platformType);
        let name;
        if (value != null) {
          name = value.name;
        }
        obj4.title = name;
        obj4.headerRight = function headerRight() {
          if (submitting) {
            let tmp2 = collapsed(NavigatorHeader.HeaderSubmittingIndicator, {});
          } else {
            tmp2 = null;
            if (hasChanges) {
              const obj = { text: null, onPress: null };
              const intl = util.intl;
              obj.text = intl.string(util.t["R3BPH+"]);
              obj.onPress = onSave;
              tmp2 = collapsed(HeaderActionButton.HeaderActionButton, obj);
            }
          }
          return tmp2;
        };
        navigation.setOptions(obj4);
        if (cResult[24] !== navigation) {
          function handleViewIntegration(integrationId) {
            navigation.push(constants.INTEGRATION_SETTINGS, { integrationId });
          }
          cResult[24] = navigation;
          class A {
            constructor() {
              return hasChanges.getProps().integrations;
            }
          }
          cResult[25] = handleViewIntegration;
          let tmp37 = handleViewIntegration;
        } else {
          tmp37 = cResult[25];
        }
        closure_9 = tmp37;
        if (cResult[26] !== closeGuildSettings) {
          function onConectTap() {
            closeGuildSettings();
            openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS, isRootScreen: true });
          }
          cResult[26] = closeGuildSettings;
          class A {
            constructor() {
              return hasChanges.getProps().integrations;
            }
          }
          cResult[27] = onConectTap;
          let tmp38 = onConectTap;
        } else {
          tmp38 = cResult[27];
        }
        if (onSave.YOUTUBE === platformType) {
          if (cResult[28] !== tmp38) {
            const intl2 = tmp(1126).intl;
            const obj5 = { connectAction: null, helpdeskArticle: null };
            class A {
              constructor() {
                return hasChanges.getProps().integrations;
              }
            }
            obj5.helpdeskArticle = tmp4(2127).getArticleURL(constants2.YOUTUBE_INTEGRATION);
            const formatResult = intl2.format(tmp(1126).t["4OSAQ9"], obj5);
            cResult[28] = tmp38;
            cResult[29] = formatResult;
            const tmp4Result3 = tmp4(2127);
          }
        } else {
          let tmp43;
          if (tmp39.TWITCH === platformType) {
            if (cResult[30] !== tmp38) {
              let intl = tmp(1126).intl;
              const obj6 = { connectAction: null, helpdeskArticle: null };
              class A {
                constructor() {
                  return hasChanges.getProps().integrations;
                }
              }
              obj6.helpdeskArticle = tmp4(2127).getArticleURL(constants2.TWITCH_INTEGRATION);
              const formatResult1 = intl.format(tmp(1126).t.ro1jEN, obj6);
              cResult[30] = tmp38;
              cResult[31] = formatResult1;
              let tmp40 = formatResult1;
              const tmp4Result4 = tmp4(2127);
            } else {
              tmp40 = cResult[31];
            }
            tmp43 = tmp40;
          }
          class A {
            constructor() {
              return hasChanges.getProps().integrations;
            }
          }
          if (cResult[32] !== token) {
            const obj7 = { paddingHorizontal: token };
            class A {
              constructor() {
                return hasChanges.getProps().integrations;
              }
            }
            cResult[33] = obj7;
            let tmp49 = obj7;
          } else {
            tmp49 = cResult[33];
          }
          let mapped;
          if (found != null) {
            mapped = found.map((integration, index) => {
              closure_0 = index;
              return closure_1_10(
                IntegrationItem,
                {
                  guild,
                  theme,
                  integration,
                  styles,
                  onPress() {
                    return closure_9(closure_0);
                  },
                },
                integration.id,
              );
            });
          }
          tmp26 = mapped;
          tmp24 = contentContainerStyle;
          tmp25 = tmp48;
          PX_24 = tmp4(587).space.PX_24;
          tmp28 = tmp49;
          tmp29 = forResult;
          tmp30 = tmp43;
          Form = tmp(8555).Form;
          Stack = tmp(5373).Stack;
        }
        const tmp4Result = tmp4(5759);
      }
      cResult[4] = stateFromStores;
      cResult[5] = closeGuildSettings;
      cResult[6] = contentContainerStyle;
      cResult[7] = guild;
      cResult[8] = hasChanges;
      cResult[9] = navigation;
      cResult[10] = platformType;
      cResult[11] = tmp6;
      cResult[12] = submitting;
      cResult[13] = token;
      cResult[14] = tmp11;
      cResult[15] = Stack;
      cResult[16] = Form;
      cResult[17] = tmp30;
      cResult[18] = tmp29;
      cResult[19] = tmp28;
      cResult[20] = PX_24;
      cResult[21] = tmp26;
      cResult[22] = tmp25;
      cResult[23] = tmp24;
    }
  : function GuildSettingsModalIntegrationPlatform(platformType) {
      platformType = platformType.platformType;
      const closeGuildSettings = platformType.closeGuildSettings;
      c5 = undefined;
      guild = undefined;
      function onSave() {
        if (null != guild) {
          const obj2 = { features: guild.features };
          GuildSettingsActionCreatorsDefault.saveGuild(guild.id, obj2);
        }
      }
      const token = platformType(4778).useToken(closeGuildSettings(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp5 = closure_13();
      dependencyMap = tmp5;
      let obj = platformType(4778);
      const navigation = platformType(1502).useNavigation();
      let obj2 = platformType(1502);
      const items = [c5];
      const stateFromStoresObject = platformType(504).useStateFromStoresObject(items, () => ({
        guild: _undefined.getGuild(),
        submitting: _undefined.isSubmitting(),
        hasChanges: _undefined.hasChanges(),
      }));
      const submitting = stateFromStoresObject.submitting;
      ({ hasChanges: c5, guild } = stateFromStoresObject);
      constants2 = closeGuildSettings(4991)();
      const obj4 = platformType(504);
      const items1 = [c5];
      const stateFromStores = platformType(504).useStateFromStores(items1, () => _undefined.getProps().integrations);
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
        const obj3 = { headerLeft: fn, title: null, headerRight: null };
        value = tmp3(5759).get(platformType);
        let name;
        if (value != null) {
          name = value.name;
        }
        function onConectTap() {
          closeGuildSettings();
          openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS, isRootScreen: true });
        }
        obj3.title = name;
        obj3.headerRight = function headerRight() {
          if (submitting) {
            let tmp2 = collapsed(NavigatorHeader.HeaderSubmittingIndicator, {});
          } else {
            tmp2 = null;
            if (c5) {
              const obj = { text: null, onPress: null };
              const intl = util.intl;
              obj.text = intl.string(util.t["R3BPH+"]);
              obj.onPress = onSave;
              tmp2 = collapsed(HeaderActionButton.HeaderActionButton, obj);
            }
          }
          return tmp2;
        };
        navigation.setOptions(obj3);
        if (onSave.YOUTUBE === platformType) {
          let intl = tmp(1126).intl;
          const obj6 = {
            connectAction: onConectTap,
            helpdeskArticle: tmp3(2127).getArticleURL(constants2.YOUTUBE_INTEGRATION),
          };
          let formatResult = intl.format(tmp(1126).t["4OSAQ9"], obj6);
          const tmp3Result3 = tmp3(2127);
        } else if (tmp10.TWITCH === platformType) {
          const intl2 = tmp(1126).intl;
          const obj7 = {
            connectAction: onConectTap,
            helpdeskArticle: tmp3(2127).getArticleURL(constants2.TWITCH_INTEGRATION),
          };
          formatResult = intl2.format(tmp(1126).t.ro1jEN, obj7);
          const tmp3Result4 = tmp3(2127);
        }
        const obj8 = { style: tmp5.form, contentContainerStyle: platformType.contentContainerStyle, children: null };
        const obj9 = { style: null, spacing: null, children: null };
        const obj10 = { paddingHorizontal: token };
        obj9.style = obj10;
        obj9.spacing = tmp3(587).space.PX_24;
        let mapped;
        if (found != null) {
          mapped = found.map((integration, index) => {
            const integrationId = index;
            return closure_1_10(
              IntegrationItem,
              {
                guild,
                theme,
                integration,
                styles,
                onPress() {
                  navigation.push(constants.INTEGRATION_SETTINGS, { integrationId });
                },
              },
              integration.id,
            );
          });
        }
        const obj11 = { children: null };
        const items2 = [mapped];
        const obj12 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
        items2[1] = closure_10(tmp(5086).Text, obj12);
        obj9.children = items2;
        obj8.children = closure_11(tmp(5373).Stack, obj9);
        const items3 = [closure_10(tmp(8555).Form, obj8), closure_10(tmp(6719).NavScrim, {})];
        obj11.children = items3;
        return closure_11(closure_12, obj11);
      }
      const obj5 = platformType(504);
    };
