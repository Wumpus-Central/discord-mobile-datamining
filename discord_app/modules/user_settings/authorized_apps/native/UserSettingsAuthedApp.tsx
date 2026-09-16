// === Module 15057: UserSettingsAuthedApp ===

// Module 15057 (UserSettingsAuthedApp)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Link from "Link" /* 1485 */;
import RootNavigationRef from "RootNavigationRef" /* 4496 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4592 */;
import Text_Text from "Text/Text" /* 4634 */;
import useAlertStore from "useAlertStore" /* 4984 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7100 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7105 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7224 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7229 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7280 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8500 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9658 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12740 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7217 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4819 */;
import LocaleStore from "LocaleStore" /* 2026 */;

require = fn;
function WarningLabel(children) {
  const tmp = closure_19();
  const obj = { style: tmp.warningContainer, children: null };
  const items = [closure_1_17(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp.warningIcon }), closure_1_17(Text_Text.Text, { color: "text-default", variant: "text-sm/medium", children: children.text })];
  obj.children = items;
  return collapsedCategories(hasOwnProperty, obj);
}
function AuthorizedAppTwoWay(application) {
  let navigation;
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const obj2 = { text: null };
  const callback = noop.useCallback(() => {
    const CommonActions = Link.CommonActions;
    navigation.dispatch(CommonActions.navigate(constants.CONNECTIONS));
  }, items);
  const intl = navigation(1115).intl;
  obj2.text = intl.format(navigation(1115).t.jUhnwb, { applicationName: application.application.name, onConnectionPress: callback });
  return closure_17(WarningLabel, obj2);
}
function ParentApp(application) {
  const obj = { text: null };
  const intl = util.intl;
  obj.text = intl.format(util.t.j4B7EW, { applicationName: application.application.name });
  return closure_1_17(WarningLabel, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: closure_12, AnalyticsSections: map1, AnalyticsPages: closure_14 } = Constants);
let closure_15 = fn(11065).ChannelDetailsNavigatorScreens;
let closure_16 = fn(11528).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" }, warningContainer: { marginTop: nativeDefault.space.PX_12, display: "flex", flexDirection: "row" }, warningIcon: null };
let size = { width: 16, height: 16, marginRight: 8, color: nativeDefault.colors.TEXT_MUTED };
obj2.warningIcon = size;
let closure_19 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  oauth2Token = oauth2Token.oauth2Token;
  let id = oauth2Token;
  let stateFromStores;
  let tmp = closure_19();
  let application = oauth2Token.application;
  let stringResult = stateFromStores;
  let tmp19Result9 = application(stateFromStores[21])(application);
  const items = [AuthorizedAppsStore];
  stateFromStores = id(stateFromStores[22]).useStateFromStores(items, () => AuthorizedAppsStore.getNewestTokenForApplication(application.id));
  let obj = id(stateFromStores[22]);
  const items1 = [LocaleStore];
  const stateFromStores1 = id(stateFromStores[22]).useStateFromStores(items1, () => locale.locale);
  let obj2 = id(stateFromStores[22]);
  const navigation = id(stateFromStores[16]).useNavigation();
  let obj3 = id(stateFromStores[16]);
  const items2 = [RelationshipStore];
  const stateFromStores2 = id(stateFromStores[22]).useStateFromStores(items2, () => {
    id = undefined;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    return RelationshipStore.isBlocked(id);
  });
  const obj4 = id(stateFromStores[22]);
  let shouldWarnAuthorizedAppTwoWay = id(stateFromStores[23]).useShouldWarnAuthorizedAppTwoWay(application.id);
  const obj5 = id(stateFromStores[23]);
  const items3 = [stateFromStores, navigation];
  const applicationIconSource = application(stateFromStores[24]).getApplicationIconSource({ id: application.id, icon: application.icon });
  const effect = navigation.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = navigation.useCallback(() => {
    useAlertStore.openAlert("confirm-delete-authed-app", closure_2_17(UserSettingsAuthedAppDeleteWarningModalDefault, {
      application,
      scopes: id.scopes,
      onDelete() {
        application = id.application;
        application(stateFromStores[19]).delete(id.id);
        const selfEmbeddedActivities = stateFromStores3.getSelfEmbeddedActivities();
        value = selfEmbeddedActivities.get(application.id);
        const obj = application(stateFromStores[19]);
        let _location;
        if (value != null) {
          _location = value.location;
        }
        application(stateFromStores[20]).leaveActivity({ location: _location, applicationId: application.id });
      }
    }));
  }, items4);
  closure_4 = navigation.useCallback((userId) => {
    const obj = application(stateFromStores[27]);
    const tmp = id(stateFromStores[29])(stateFromStores[28], stateFromStores.paths);
    obj.openLazy(tmp, closure_1_16, { userId, impressionName: id(stateFromStores[30]).ImpressionNames.BLOCK_USER_CONFIRMATION }, "stack");
  }, []);
  closure_5 = navigation.useCallback((id) => {
    application(stateFromStores[31]).unblockUser(id, { location: constants.SETTINGS_AUTHORIZED_APP });
    const obj = application(stateFromStores[31]);
    const obj2 = { location: constants.SETTINGS_AUTHORIZED_APP };
    const result = application(stateFromStores[32]).showUnblockSuccessToast(id);
  }, []);
  const obj6 = application(stateFromStores[24]);
  const obj7 = { id: application.id, icon: application.icon };
  const items5 = [ChannelStore];
  const stateFromStores3 = id(stateFromStores[22]).useStateFromStores(items5, () => {
    const bot = application.bot;
    id = undefined;
    if (bot != null) {
      id = bot.id;
    }
    return ChannelStore.getDMFromUserId(id);
  });
  const obj8 = id(stateFromStores[22]);
  const items6 = [UserGuildSettingsStore];
  const items7 = [stateFromStores3];
  const stateFromStoresObject = id(stateFromStores[22]).useStateFromStoresObject(items6, () => {
    if (null == stateFromStores3) {
      let obj = { appDMChannelMuteConfig: null, muted: false };
    } else {
      obj = { appDMChannelMuteConfig: UserGuildSettingsStore.getChannelMuteConfig(null, stateFromStores3), muted: UserGuildSettingsStore.isChannelMuted(null, stateFromStores3) };
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  const obj10 = { contentContainerStyle: tmp.container, children: null };
  const description = application.description;
  const obj9 = id(stateFromStores[22]);
  const tmp16 = closure_4;
  const obj11 = application(stateFromStores[39]);
  const obj12 = { style: null, children: null };
  const items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  obj12.style = items8;
  const date = new Date(application(stateFromStores[39]).extractTimestamp(oauth2Token.id));
  const obj13 = { iconSource: applicationIconSource, iconBorderRadius: null, iconSize: 64 };
  const toLocaleDateStringResult = new Date(application(stateFromStores[39]).extractTimestamp(oauth2Token.id)).toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  obj13.iconBorderRadius = application(stateFromStores[13]).radii.md;
  const items9 = [closure_17(application(stateFromStores[40]), obj13), , ];
  const obj14 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = id(stateFromStores[18]).intl;
  obj14.children = intl.format(id(stateFromStores[18]).t.yOApCK, { date: toLocaleDateStringResult });
  items9[1] = closure_17(id(stateFromStores[15]).Text, obj14);
  let tmp19Result = null;
  if (undefined !== description) {
    tmp19Result = null;
    if ("" !== description) {
      const obj15 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default", children: tmp4(stringResult[41]).parseBioReactWithCachedAST(description) };
      tmp19Result = closure_17(tmp4(stringResult[15]).Text, obj15);
      const tmp4Result = tmp4(stringResult[41]);
    }
  }
  items9[2] = tmp19Result;
  obj12.children = items9;
  const items10 = [closure_18(closure_5, obj12), , , , , , ];
  let tmp19Result6 = null;
  if (null != stateFromStores3) {
    const obj16 = { style: tmp.section, children: null };
    let end_time;
    if (appDMChannelMuteConfig != null) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    let formatResult;
    if (null != end_time) {
      const intl2 = tmp4(stringResult[18]).intl;
      const obj17 = { endTime: null };
      const _Date = Date;
      const date1 = new Date(appDMChannelMuteConfig.end_time);
      obj17.endTime = date1.toLocaleString(tmp4(stringResult[18]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      formatResult = intl2.format(tmp4(stringResult[18]).t.j7h4AJ, obj17);
    }
    const obj18 = { title: "Notifications", hasIcons: false, children: null };
    const obj19 = {
      label: "Mute DMs",
      subLabel: formatResult,
      value: stateFromStoresObject.muted,
      onValueChange: function handleMuteChannelChange(arg0) {
          if (null != stateFromStores3) {
            if (arg0) {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const obj3 = { channelId: stateFromStores3, applicationId: application.id, initialRouteName: constants2.MUTE, source: "authorized-apps-settings" };
                  rootNavigationRef.navigate("sidebar", obj3);
                }
              }
            } else {
              const obj = NotificationSettingsModalActionCreatorsDefault;
              const result = obj.updateAppDMOverrideSettings(null, stateFromStores3, application.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
            }
          }
        }
    };
    obj18.children = closure_17(tmp4(stringResult[43]).TableSwitchRow, obj19);
    obj16.children = closure_17(tmp4(stringResult[42]).TableRowGroup, obj18);
    tmp19Result6 = closure_17(tmp18, obj16);
  }
  items10[1] = tmp19Result6;
  const obj20 = { style: tmp.section, children: null };
  function handleClickPermissions() {
    UserSettingsModalActionCreatorsDefault.setSection(constants.AUTHORIZED_APP_PERMISSIONS);
    const obj3 = { destinationPane: constants.AUTHORIZED_APP_PERMISSIONS, source: { page: constants2.USER_SETTINGS }, applicationId: application.id };
    const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
    navigation.navigate(constants.AUTHORIZED_APP_PERMISSIONS, { oauth2Token: id });
  }
  const obj21 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp4(stringResult[18]).intl;
  obj21.title = intl3.string(id(stringResult[18]).t["8pMev2"]);
  const obj22 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp4(stringResult[18]).intl;
  obj22.label = intl4.string(id(stringResult[18]).t.xrmhRX);
  obj22.onPress = handleClickPermissions;
  const items11 = [closure_17(id(stringResult[44]).TableRow, obj22), , ];
  let tmp19Result7 = null != application.terms_of_service_url;
  if (tmp19Result7) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        const obj2 = { href: tmp.terms_of_service_url, shouldConfirm: true };
        MaskedLinkUtils.handleClick(obj2);
      }
    }
    const obj23 = { label: null, onPress: null, arrow: true };
    const intl5 = tmp4(stringResult[18]).intl;
    obj23.label = intl5.string(tmp4(stringResult[18]).t["lx+Gec"]);
    obj23.onPress = handleClickToS;
    tmp19Result7 = closure_17(tmp4(stringResult[44]).TableRow, obj23);
  }
  items11[1] = tmp19Result7;
  let tmp19Result8 = null != application.privacy_policy_url;
  if (tmp19Result8) {
    function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        const obj2 = { href: tmp.privacy_policy_url, shouldConfirm: true };
        MaskedLinkUtils.handleClick(obj2);
      }
    }
    const obj24 = { label: null, onPress: null, arrow: true };
    const intl6 = tmp4(stringResult[18]).intl;
    obj24.label = intl6.string(tmp4(stringResult[18]).t.okSwq9);
    obj24.onPress = handleClickPrivacyPolicy;
    tmp19Result8 = closure_17(tmp4(stringResult[44]).TableRow, obj24);
  }
  items11[2] = tmp19Result8;
  obj21.children = items11;
  obj20.children = closure_18(id(stringResult[42]).TableRowGroup, obj21);
  items10[2] = closure_17(closure_5, obj20);
  const obj25 = { style: tmp.section, children: null };
  const obj26 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp4(stringResult[18]).intl;
  obj26.title = intl7.string(id(stringResult[18]).t.gAHBA7);
  const obj27 = { label: null, variant: "danger", onPress: null, arrow: true };
  const intl8 = tmp4(stringResult[18]).intl;
  obj27.label = intl8.string(id(stringResult[18]).t.xUqheM);
  obj27.onPress = callback;
  obj26.children = closure_17(id(stringResult[44]).TableRow, obj27);
  obj25.children = closure_17(id(stringResult[42]).TableRowGroup, obj26);
  items10[3] = closure_17(closure_5, obj25);
  id = undefined;
  if (application != null) {
    let bot = application.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  if (null == id) {
    items10[4] = undefined;
    if (shouldWarnAuthorizedAppTwoWay) {
      const obj28 = { application };
      shouldWarnAuthorizedAppTwoWay = closure_17(AuthorizedAppTwoWay, obj28);
    }
    items10[5] = shouldWarnAuthorizedAppTwoWay;
    if (tmp19Result9) {
      const obj29 = { application };
      tmp19Result9 = closure_17(ParentApp, obj29);
    }
    items10[6] = tmp19Result9;
    obj10.children = items10;
    return closure_18(tmp16, obj10);
  } else {
    const obj30 = { title: null, hasIcons: false, children: null };
    const intl9 = tmp4(stringResult[18]).intl;
    obj30.title = intl9.string(tmp4(stringResult[18]).t["8msQQO"]);
    if (stateFromStores2) {
      const obj31 = { label: null, onPress: null, arrow: true };
      const intl11 = tmp4(stringResult[18]).intl;
      stringResult = intl11.string(tmp4(stringResult[18]).t.XyHpKH);
      obj31.label = stringResult;
      obj31.onPress = function onPress() {
        return hasOwnProperty(id);
      };
      let obj32 = obj31;
    } else {
      obj32 = { label: null, variant: "danger", onPress: null, arrow: true };
      const intl10 = tmp4(stringResult[18]).intl;
      obj32.label = intl10.string(tmp4(stringResult[18]).t.l4Emac);
      obj32.onPress = function onPress() {
        return React4(id);
      };
    }
    obj30.children = closure_17(tmp4(stringResult[44]).TableRow, obj32);
    closure_17(tmp4(stringResult[42]).TableRowGroup, obj30);
  }
  const tmp20 = application(stateFromStores[40]);
};
export const handleDeleteApp = function handleDeleteApp(application) {
  application = application.application;
  AuthorizedAppsActionCreatorsDefault.delete(application.id);
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  value = selfEmbeddedActivities.get(application.id);
  let _location;
  if (value != null) {
    _location = value.location;
  }
  EmbeddedActivitiesNativeManagerDefault.leaveActivity({ location: _location, applicationId: application.id });
};