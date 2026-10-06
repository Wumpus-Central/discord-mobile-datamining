// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import shared from "../../../../design/shared.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import AlertDefault from "../../../../components_native/common/Alert.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow2 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import HeaderActionButton2 from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import IntegrationTypes from "../../../../../discord_common/js/shared/shared-constants/IntegrationTypes.tsx";
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, navigation;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
({ ActivityIndicator: c3, Image: closure_4, View: hasOwnProperty } = react_native);
({
  GuildSettingsSections: metroImportDefault,
  HelpdeskArticles: metroImportAll,
  PlatformTypes: c9,
  UserSettingsSections: c10,
} = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let obj = {
  form: obj2,
  trailingWrapper: { flexDirection: "row", alignItems: "center" },
  platformIcon: { width: 24, height: 24 },
};
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
const Component = react.Component;
class IntegrationItem extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { enabled: applyArgumentsResult.props.integration.enabled };
    applyArgumentsResult.handleToggleEnabled = function handleToggleEnabled() {
      let guild;
      let intl;
      let intl4;
      let intl5;
      let stringResult;
      const props = guild.props;
      const tmp = guild;
      guild = props.guild;
      const integration = props.integration;
      if (!integration.syncing) {
        const setState = tmp.setState;
        if (integration.enabled) {
          setState({ enabled: false });
          const obj2 = {
            title: intl.string(intl6.t.emx3lN),
            body: stringResult,
            confirmText: intl4.string(intl6.t.R9GHya),
            cancelText: intl5.string(intl6.t["ETE/oC"]),
            onConfirm() {
              const obj = GuildSettingsActionCreatorsDefault;
              return obj.disableIntegration(guild.id, integration.id);
            },
            onCancel() {
              return guild.setState({ enabled: true });
            },
            confirmColor: AlertDefault.Colors.RED,
            isDismissable: false,
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl6.intl;
          if ("youtube" === integration.type) {
            const intl3 = intl6.intl;
            stringResult = intl3.string(intl6.t.anKQWU);
          } else {
            const intl2 = intl6.intl;
            stringResult = intl2.string(intl6.t["BW/xtn"]);
          }
          intl4 = intl6.intl;
          intl5 = intl6.intl;
          show(obj2);
        } else {
          setState({ enabled: true });
          let obj = GuildSettingsActionCreatorsDefault;
          obj.enableIntegration(guild.id, integration.type, integration.id);
        }
      }
    };
    return applyArgumentsResult;
  }
  static getDerivedStateFromProps(integration, enabled) {
    integration = integration.integration;
    enabled = enabled.enabled;
    let tmp = null;
    if (enabled) {
      tmp = null;
      if (false === integration.syncing) {
        tmp = null;
        if (integration.enabled !== enabled) {
          tmp = { enabled: integration.enabled };
          const obj = { enabled: integration.enabled };
        }
      }
    }
    return tmp;
  }
  render() {
    let closure_129_1;
    let intl;
    let items;
    let obj4;
    let styles;
    let syncing;
    let syncing2;
    let tmpResult2;
    const self = this;
    const props = this.props;
    const integration = props.integration;
    ({ onPress: closure_129_1, styles } = props);
    const theme = props.theme;
    const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS =
      GuildSettingsModalIntegrations.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
    if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
      let combined;
      const type = integration.type;
      if (IntegrationTypes.IntegrationTypes.YOUTUBE === type) {
        const account = integration.account;
        let name;
        if (account != null) {
          name = account.name;
        }
        combined = name;
      } else if (IntegrationTypes.IntegrationTypes.TWITCH === type) {
        const _HermesInternal = HermesInternal;
        combined = "twitch.tv/" + integration.name;
      }
      const obj = PlatformsDefault;
      const value = obj.get(integration.type);
      let tmp12Result = null;
      if (null != value) {
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const icon = value.icon;
        const obj2 = {
          source: makeSource(tmpResult2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG),
          style: styles.platformIcon,
        };
        tmpResult2 = shared;
        tmp12Result = unpackModuleId(React3, obj2);
      }
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      let str1;
      const TableRow = TableRow2.TableRow;
      if (integration.user != null) {
        str1 = str2.toString();
      }
      const obj3 = {
        label: str1,
        subLabel: combined,
        trailing: unpackModuleId(hasOwnProperty, obj4),
        arrow: integration.enabled && !integration.syncing,
        icon: tmp12Result,
        disabled: syncing2,
        onPress() {
          const enabled = integration.enabled && closure_1_1(tmp);
          return enabled;
        },
      };
      obj4 = { style: styles.trailingWrapper, children: syncing };
      syncing = integration.syncing && unpackModuleId(_false, { animating: true, size: "small" });
      let enabled = integration.enabled;
      syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      const obj5 = { hasIcons: true, children: items };
      items = [unpackModuleId(TableRow, obj3)];
      const _Boolean = Boolean;
      const obj6 = {
        value: Boolean(self.state.enabled),
        disabled: true === integration.syncing,
        onValueChange: self.handleToggleEnabled,
        label: intl.string(intl6.t.vQC6vR),
      };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl6.intl;
      items[1] = unpackModuleId(TableSwitchRow, obj6);
      return closure_12(TableRowGroup, obj5);
    } else {
      return null;
    }
  }
}
const prototype = IntegrationItem.prototype;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (closeGuildSettings) => {
      let contentContainerStyle;
      let found;
      let guild;
      let name;
      let platformType;
      let styles;
      let tmp13;
      let tmp14;
      let tmp19;
      let tmp8;
      let tmp9;
      let obj = platformType(576);
      const cResult = obj.c(50);
      ({ contentContainerStyle, platformType } = closeGuildSettings);
      closeGuildSettings = closeGuildSettings.closeGuildSettings;
      let obj2 = platformType(4586);
      const token = obj2.useToken(closeGuildSettings(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp6 = closure_14();
      dependencyMap = tmp6;
      const obj3 = platformType(1490);
      navigation = obj3.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [guild];
        const fn = function i() {
          const obj = { guild: guild.getGuild(), submitting: guild.isSubmitting(), hasChanges: guild.hasChanges() };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmpResult = platformType(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp8, tmp9);
      const submitting = stateFromStoresObject.submitting;
      const hasChanges = stateFromStoresObject.hasChanges;
      guild = stateFromStoresObject.guild;
      const tmp12 = closeGuildSettings(4797)();
      const theme = tmp12;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [guild];
        class A {
          constructor() {
            return guild.getProps().integrations;
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        tmp14 = A;
        tmp13 = items1;
      } else {
        tmp13 = cResult[2];
        tmp14 = cResult[3];
      }
      const tmpResult2 = platformType(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp13, tmp14);
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
                          if (cResult[14] === tmp12) {
                            class A {
                              constructor() {
                                return guild.getProps().integrations;
                              }
                            }
                          }
                          const _Symbol = Symbol;
                          class A {
                            constructor() {
                              return guild.getProps().integrations;
                            }
                          }
                          return tmp19;
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
      const forResult = Symbol.for("react.early_return_sentinel");
      if (stateFromStores != null) {
        found = stateFromStores.filter((type) => type.type === platformType);
      }
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp30;
      let tmp31;
      let tmp32 = null;
      let tmp33;
      let tmp34;
      let tmp35;
      if (null != guild) {
        let tmp40;
        let tmp44;
        function onSave() {
          if (null != guild) {
            const obj2 = { features: guild.features };
            const obj = GuildSettingsActionCreatorsDefault;
            obj.saveGuild(guild.id, obj2);
          }
        }
        const setOptions = navigation.setOptions;
        class A {
          constructor() {
            return guild.getProps().integrations;
          }
        }
        const obj4 = {
          headerLeft: undefined,
          title: name,
          headerRight() {
            let intl;
            let tmp3;
            if (submitting) {
              tmp3 = unpackModuleId(NavigatorHeader.HeaderSubmittingIndicator, {});
            } else {
              tmp3 = null;
              if (hasChanges) {
                const obj = { text: intl.string(intl6.t["R3BPH+"]), onPress: onSave };
                const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
                intl = intl6.intl;
                tmp3 = unpackModuleId(HeaderActionButton, obj);
              }
            }
            return tmp3;
          },
        };
        const tmp4Result = closeGuildSettings(5449);
        const value = tmp4Result.get(platformType);
        name = undefined;
        if (value != null) {
          name = value.name;
        }
        setOptions(obj4);
        if (cResult[24] !== navigation) {
          class X {
            constructor(integrationId) {
              const obj = { integrationId };
              navigation.push(metroImportDefault.INTEGRATION_SETTINGS, obj);
            }
          }
          cResult[24] = navigation;
          class A {
            constructor() {
              return guild.getProps().integrations;
            }
          }
          cResult[25] = X;
          tmp40 = X;
        } else {
          class X {
            constructor(integrationId) {
              const obj = { integrationId };
              navigation.push(metroImportDefault.INTEGRATION_SETTINGS, obj);
            }
          }
        }
        X = tmp40;
        if (cResult[26] !== closeGuildSettings) {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
          cResult[26] = closeGuildSettings;
          class A {
            constructor() {
              return guild.getProps().integrations;
            }
          }
          cResult[27] = K;
        } else {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
        }
        if (X.YOUTUBE === platformType) {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
          tmp44 = tmp45;
        } else {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
          if (tmp42.TWITCH === platformType) {
            class K {
              constructor() {
                closeGuildSettings();
                const obj = openUserSettings;
                const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
                obj.openUserSettings(obj2);
              }
            }
            tmp44 = tmp43;
          }
        }
        const Form = platformType(8924).Form;
        const form = tmp6.form;
        const Stack = platformType(5600).Stack;
        if (cResult[32] !== token) {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
          tmp47[0] = token;
          class A {
            constructor() {
              return guild.getProps().integrations;
            }
          }
          cResult[33] = tmp47;
        } else {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
        }
        const PX_24 = tmp4(587).space.PX_24;
        if (found != null) {
          class K {
            constructor() {
              closeGuildSettings();
              const obj = openUserSettings;
              const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
              obj.openUserSettings(obj2);
            }
          }
        }
        tmp29 = tmp48;
        tmp27 = contentContainerStyle;
        tmp28 = form;
        tmp30 = PX_24;
        tmp31 = tmp47;
        tmp32 = forResult;
        tmp33 = tmp44;
        tmp34 = Form;
        tmp35 = Stack;
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
      cResult[14] = tmp12;
      cResult[15] = tmp35;
      cResult[16] = tmp34;
      cResult[17] = tmp33;
      cResult[18] = tmp32;
      cResult[19] = tmp31;
      cResult[20] = tmp30;
      cResult[21] = tmp29;
      cResult[22] = tmp28;
      cResult[23] = tmp27;
      tmp19 = tmp32;
    }
  : (platformType) => {
      let Stack;
      let c5;
      let found;
      let guild;
      let items2;
      let items3;
      let name;
      let obj10;
      let obj9;
      let styles;
      let tmp3Result3;
      let tmp3Result4;
      platformType = platformType.platformType;
      const closeGuildSettings = platformType.closeGuildSettings;
      c5 = undefined;
      guild = undefined;
      function onSave() {
        if (null != guild) {
          const obj2 = { features: guild.features };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.saveGuild(guild.id, obj2);
        }
      }
      const contentContainerStyle = platformType.contentContainerStyle;
      let obj = platformType(4586);
      let tmp3 = closeGuildSettings;
      const token = obj.useToken(closeGuildSettings(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp5 = closure_14();
      dependencyMap = tmp5;
      let obj2 = platformType(1490);
      navigation = obj2.useNavigation();
      const items = [guild];
      const obj3 = platformType(504);
      const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
        const obj = { guild: guild.getGuild(), submitting: guild.isSubmitting(), hasChanges: guild.hasChanges() };
        return obj;
      });
      const submitting = stateFromStoresObject.submitting;
      ({ hasChanges: c5, guild } = stateFromStoresObject);
      const theme = closeGuildSettings(4797)();
      const items1 = [guild];
      const obj4 = platformType(504);
      const stateFromStores = obj4.useStateFromStores(items1, () => guild.getProps().integrations);
      if (stateFromStores != null) {
        found = stateFromStores.filter((type) => type.type === platformType);
      }
      if (null == guild) {
        return null;
      } else {
        let formatResult;
        let fn;
        const setOptions = navigation.setOptions;
        if (submitting) {
          fn = () => null;
        }
        const obj5 = {
          headerLeft: fn,
          title: name,
          headerRight() {
            let intl;
            let tmp3;
            if (submitting) {
              tmp3 = unpackModuleId(NavigatorHeader.HeaderSubmittingIndicator, {});
            } else {
              tmp3 = null;
              if (c5) {
                const obj = { text: intl.string(intl6.t["R3BPH+"]), onPress: onSave };
                const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
                intl = intl6.intl;
                tmp3 = unpackModuleId(HeaderActionButton, obj);
              }
            }
            return tmp3;
          },
        };
        const tmp3Result = tmp3(5449);
        const value = tmp3Result.get(platformType);
        name = undefined;
        if (value != null) {
          name = value.name;
        }
        function onConectTap() {
          closeGuildSettings();
          const obj = openUserSettings;
          const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
          obj.openUserSettings(obj2);
        }
        setOptions(obj5);
        if (constants2.YOUTUBE === platformType) {
          let intl = tmp(1126).intl;
          const format = intl.format;
          const obj6 = {
            connectAction: onConectTap,
            helpdeskArticle: tmp3Result3.getArticleURL(onSave.YOUTUBE_INTEGRATION),
          };
          const v4OSAQ9 = tmp(1126).t["4OSAQ9"];
          tmp3Result3 = tmp3(2115);
          formatResult = format(v4OSAQ9, obj6);
        } else if (tmp11.TWITCH === platformType) {
          const intl2 = tmp(1126).intl;
          const format2 = intl2.format;
          const obj7 = {
            connectAction: onConectTap,
            helpdeskArticle: tmp3Result4.getArticleURL(onSave.TWITCH_INTEGRATION),
          };
          const ro1jEN = tmp(1126).t.ro1jEN;
          tmp3Result4 = tmp3(2115);
          formatResult = format2(ro1jEN, obj7);
        }
        const obj8 = { style: tmp5.form, contentContainerStyle, children: closure_12(Stack, obj9) };
        const Form = tmp(8924).Form;
        obj9 = { style: obj10, spacing: tmp3(587).space.PX_24, children: items2 };
        obj10 = { paddingHorizontal: token };
        Stack = tmp(5600).Stack;
        let mapped;
        if (found != null) {
          mapped = found.map((integration, index) => {
            const integrationId = index;
            let obj = {
              guild,
              theme,
              integration,
              styles,
              onPress() {
                const obj = { integrationId };
                navigation.push(metroImportDefault.INTEGRATION_SETTINGS, obj);
              },
            };
            return closure_1_11(IntegrationItem, obj, integration.id);
          });
        }
        items2 = [mapped];
        const obj11 = { children: items3 };
        const obj12 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
        items2[1] = closure_11(platformType(4892).Text, obj12);
        items3 = [closure_11(Form, obj8), closure_11(tmp(6543).NavScrim, {})];
        return closure_12(closure_13, obj11);
      }
    };
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx",
);

export default tmp6;
