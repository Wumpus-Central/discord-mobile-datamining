// === Module 15199: UserSettingsAuthedApp ===

// Module 15199 (UserSettingsAuthedApp)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Link from "Link" /* 1504 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6679 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6683 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6803 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6808 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6859 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8490 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10812 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12336 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6796 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import LocaleStore from "LocaleStore" /* 2129 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ UserSettingsSections: closure_12, AnalyticsSections: map1, AnalyticsPages: closure_14 } = Constants);
let closure_15 = fn(9629).ChannelDetailsNavigatorScreens;
let closure_16 = fn(10414).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" }, warningContainer: { marginTop: nativeDefault.space.PX_12, display: "flex", flexDirection: "row" }, warningIcon: null };
let size = { width: 16, height: 16, marginRight: 8, color: nativeDefault.colors.TEXT_MUTED };
obj2.warningIcon = size;
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function WarningLabel(text) {
  const cResult = c.c(8);
  text = text.text;
  const tmp4 = closure_19();
  if (cResult[0] !== tmp4.warningIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp4.warningIcon };
    const tmp8 = constants(CircleInformationIcon.CircleInformationIcon, obj2);
    cResult[0] = tmp4.warningIcon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== text) {
    const obj3 = { color: "text-default", variant: "text-sm/medium", children: text };
    const tmp11 = constants(Text_Text.Text, obj3);
    cResult[2] = text;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.warningContainer) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp9) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.warningContainer, children: null };
  const items = [tmp5, tmp9];
  obj4.children = items;
  const tmp13 = collapsedCategories(hasOwnProperty, obj4);
  cResult[4] = tmp4.warningContainer;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function WarningLabel(children) {
  const tmp = closure_19();
  const obj = { style: tmp.warningContainer, children: null };
  const items = [constants(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp.warningIcon }), constants(Text_Text.Text, { color: "text-default", variant: "text-sm/medium", children: children.text })];
  obj.children = items;
  return collapsedCategories(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AuthorizedAppTwoWay(application) {
  const cResult = navigation(576).c(7);
  application = application.application;
  const obj = navigation(576);
  navigation = navigation(1503).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      const CommonActions = Link.CommonActions;
      navigation.dispatch(CommonActions.navigate(constants.CONNECTIONS));
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === application.name) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] !== tmp6) {
      const obj3 = { text: tmp6 };
      const tmp11 = closure_17(closure_20, obj3);
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[6];
    }
    return tmp8;
  }
  const intl = tmp(1126).intl;
  const formatResult = intl.format(navigation(1126).t.jUhnwb, { applicationName: application.name, onConnectionPress: tmp5 });
  cResult[2] = application.name;
  cResult[3] = tmp5;
  cResult[4] = formatResult;
  tmp6 = formatResult;
  const obj2 = navigation(1503);
  const obj4 = { applicationName: application.name, onConnectionPress: tmp5 };
}) : (function AuthorizedAppTwoWay(application) {
  let navigation;
  navigation = navigation(1503).useNavigation();
  const items = [navigation];
  const obj2 = { text: null };
  const callback = noop.useCallback(() => {
    const CommonActions = Link.CommonActions;
    navigation.dispatch(CommonActions.navigate(constants.CONNECTIONS));
  }, items);
  const intl = navigation(1126).intl;
  obj2.text = intl.format(navigation(1126).t.jUhnwb, { applicationName: application.application.name, onConnectionPress: callback });
  return closure_17(closure_20, obj2);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ParentApp(application) {
  const cResult = c.c(4);
  application = application.application;
  if (cResult[0] !== application.name) {
    const intl = util.intl;
    const obj2 = { applicationName: application.name };
    const formatResult = intl.format(util.t.j4B7EW, obj2);
    cResult[0] = application.name;
    cResult[1] = formatResult;
    let tmp4 = formatResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj3 = { text: tmp4 };
    const tmp9 = constants(closure_20, obj3);
    cResult[2] = tmp4;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function ParentApp(application) {
  const obj = { text: null };
  const intl = util.intl;
  obj.text = intl.format(util.t.j4B7EW, { applicationName: application.application.name });
  return constants(closure_20, obj);
});
function handleDeleteApp(application) {
  application = application.application;
  AuthorizedAppsActionCreatorsDefault.delete(application.id);
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  value = selfEmbeddedActivities.get(application.id);
  let _location;
  if (value != null) {
    _location = value.location;
  }
  const result = leaveEmbeddedActivity.leaveEmbeddedActivity({ location: _location, applicationId: application.id });
}
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  oauth2Token = oauth2Token.oauth2Token;
  let id = oauth2Token;
  let stateFromStores;
  let tmp = closure_19();
  let application = oauth2Token.application;
  let stringResult = stateFromStores;
  let tmp19Result9 = application(stateFromStores[23])(application);
  const items = [AuthorizedAppsStore];
  stateFromStores = id(stateFromStores[24]).useStateFromStores(items, () => AuthorizedAppsStore.getNewestTokenForApplication(application.id));
  let obj = id(stateFromStores[24]);
  const items1 = [LocaleStore];
  const stateFromStores1 = id(stateFromStores[24]).useStateFromStores(items1, () => locale.locale);
  let obj2 = id(stateFromStores[24]);
  const navigation = id(stateFromStores[18]).useNavigation();
  let obj3 = id(stateFromStores[18]);
  const items2 = [RelationshipStore];
  const stateFromStores2 = id(stateFromStores[24]).useStateFromStores(items2, () => {
    id = undefined;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    return RelationshipStore.isBlocked(id);
  });
  const obj4 = id(stateFromStores[24]);
  let shouldWarnAuthorizedAppTwoWay = id(stateFromStores[25]).useShouldWarnAuthorizedAppTwoWay(application.id);
  const obj5 = id(stateFromStores[25]);
  const items3 = [stateFromStores, navigation];
  const applicationIconSource = application(stateFromStores[26]).getApplicationIconSource({ id: application.id, icon: application.icon });
  const effect = navigation.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = navigation.useCallback(() => {
    useAlertStore.openAlert("confirm-delete-authed-app", constants(UserSettingsAuthedAppDeleteWarningModalDefault, {
      application,
      scopes: id.scopes,
      onDelete() {
        application = closure_1_0.application;
        application(stateFromStores[21]).delete(closure_1_0.id);
        const selfEmbeddedActivities = stateFromStores3.getSelfEmbeddedActivities();
        value = selfEmbeddedActivities.get(application.id);
        const obj = application(stateFromStores[21]);
        let _location;
        if (value != null) {
          _location = value.location;
        }
        const result = id(stateFromStores[22]).leaveEmbeddedActivity({ location: _location, applicationId: application.id });
      }
    }));
  }, items4);
  closure_4 = navigation.useCallback((userId) => {
    const obj = application(stateFromStores[29]);
    const tmp = id(stateFromStores[31])(stateFromStores[30], stateFromStores.paths);
    obj.openLazy(tmp, closure_1_16, { userId, impressionName: id(stateFromStores[32]).ImpressionNames.BLOCK_USER_CONFIRMATION }, "stack");
  }, []);
  closure_5 = navigation.useCallback((id) => {
    application(stateFromStores[33]).unblockUser(id, { location: constants.SETTINGS_AUTHORIZED_APP });
    const obj = application(stateFromStores[33]);
    const obj2 = { location: constants.SETTINGS_AUTHORIZED_APP };
    const result = application(stateFromStores[34]).showUnblockSuccessToast(id);
  }, []);
  const obj6 = application(stateFromStores[26]);
  const obj7 = { id: application.id, icon: application.icon };
  const items5 = [ChannelStore];
  const stateFromStores3 = id(stateFromStores[24]).useStateFromStores(items5, () => {
    const bot = application.bot;
    id = undefined;
    if (bot != null) {
      id = bot.id;
    }
    return ChannelStore.getDMFromUserId(id);
  });
  const obj8 = id(stateFromStores[24]);
  const items6 = [UserGuildSettingsStore];
  const items7 = [stateFromStores3];
  const stateFromStoresObject = id(stateFromStores[24]).useStateFromStoresObject(items6, () => {
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
  const obj9 = id(stateFromStores[24]);
  const tmp16 = closure_4;
  const obj11 = application(stateFromStores[41]);
  const obj12 = { style: null, children: null };
  const items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  obj12.style = items8;
  const date = new Date(application(stateFromStores[41]).extractTimestamp(oauth2Token.id));
  const obj13 = { iconSource: applicationIconSource, iconBorderRadius: null, iconSize: 64 };
  const toLocaleDateStringResult = new Date(application(stateFromStores[41]).extractTimestamp(oauth2Token.id)).toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  obj13.iconBorderRadius = application(stateFromStores[13]).radii.md;
  const items9 = [closure_17(application(stateFromStores[42]), obj13), , ];
  const obj14 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = id(stateFromStores[20]).intl;
  obj14.children = intl.format(id(stateFromStores[20]).t.yOApCK, { date: toLocaleDateStringResult });
  items9[1] = closure_17(id(stateFromStores[17]).Text, obj14);
  let tmp19Result = null;
  if (undefined !== description) {
    tmp19Result = null;
    if ("" !== description) {
      const obj15 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default", children: tmp4(stringResult[43]).parseBioReactWithCachedAST(description) };
      tmp19Result = closure_17(tmp4(stringResult[17]).Text, obj15);
      const tmp4Result = tmp4(stringResult[43]);
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
      const intl2 = tmp4(stringResult[20]).intl;
      const obj17 = { endTime: null };
      const _Date = Date;
      const date1 = new Date(appDMChannelMuteConfig.end_time);
      obj17.endTime = date1.toLocaleString(tmp4(stringResult[20]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      formatResult = intl2.format(tmp4(stringResult[20]).t.j7h4AJ, obj17);
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
    obj18.children = closure_17(tmp4(stringResult[45]).TableSwitchRow, obj19);
    obj16.children = closure_17(tmp4(stringResult[44]).TableRowGroup, obj18);
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
  const intl3 = tmp4(stringResult[20]).intl;
  obj21.title = intl3.string(id(stringResult[20]).t["8pMev2"]);
  const obj22 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp4(stringResult[20]).intl;
  obj22.label = intl4.string(id(stringResult[20]).t.xrmhRX);
  obj22.onPress = handleClickPermissions;
  const items11 = [closure_17(id(stringResult[46]).TableRow, obj22), , ];
  let tmp19Result7 = null != application.terms_of_service_url;
  if (tmp19Result7) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        const obj2 = { href: tmp.terms_of_service_url, shouldConfirm: true };
        MaskedLinkUtils.handleClick(obj2);
      }
    }
    const obj23 = { label: null, onPress: null, arrow: true };
    const intl5 = tmp4(stringResult[20]).intl;
    obj23.label = intl5.string(tmp4(stringResult[20]).t["lx+Gec"]);
    obj23.onPress = handleClickToS;
    tmp19Result7 = closure_17(tmp4(stringResult[46]).TableRow, obj23);
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
    const intl6 = tmp4(stringResult[20]).intl;
    obj24.label = intl6.string(tmp4(stringResult[20]).t.okSwq9);
    obj24.onPress = handleClickPrivacyPolicy;
    tmp19Result8 = closure_17(tmp4(stringResult[46]).TableRow, obj24);
  }
  items11[2] = tmp19Result8;
  obj21.children = items11;
  obj20.children = closure_18(id(stringResult[44]).TableRowGroup, obj21);
  items10[2] = closure_17(closure_5, obj20);
  const obj25 = { style: tmp.section, children: null };
  const obj26 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp4(stringResult[20]).intl;
  obj26.title = intl7.string(id(stringResult[20]).t.gAHBA7);
  const obj27 = { label: null, variant: "danger", onPress: null, arrow: true };
  const intl8 = tmp4(stringResult[20]).intl;
  obj27.label = intl8.string(id(stringResult[20]).t.xUqheM);
  obj27.onPress = callback;
  obj26.children = closure_17(id(stringResult[46]).TableRow, obj27);
  obj25.children = closure_17(id(stringResult[44]).TableRowGroup, obj26);
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
      shouldWarnAuthorizedAppTwoWay = closure_17(closure_21, obj28);
    }
    items10[5] = shouldWarnAuthorizedAppTwoWay;
    if (tmp19Result9) {
      const obj29 = { application };
      tmp19Result9 = closure_17(closure_22, obj29);
    }
    items10[6] = tmp19Result9;
    obj10.children = items10;
    return closure_18(tmp16, obj10);
  } else {
    const obj30 = { title: null, hasIcons: false, children: null };
    const intl9 = tmp4(stringResult[20]).intl;
    obj30.title = intl9.string(tmp4(stringResult[20]).t["8msQQO"]);
    if (stateFromStores2) {
      const obj31 = { label: null, onPress: null, arrow: true };
      const intl11 = tmp4(stringResult[20]).intl;
      stringResult = intl11.string(tmp4(stringResult[20]).t.XyHpKH);
      obj31.label = stringResult;
      obj31.onPress = function onPress() {
        return hasOwnProperty(id);
      };
      let obj32 = obj31;
    } else {
      obj32 = { label: null, variant: "danger", onPress: null, arrow: true };
      const intl10 = tmp4(stringResult[20]).intl;
      obj32.label = intl10.string(tmp4(stringResult[20]).t.l4Emac);
      obj32.onPress = function onPress() {
        return React4(id);
      };
    }
    obj30.children = closure_17(tmp4(stringResult[46]).TableRow, obj32);
    closure_17(tmp4(stringResult[44]).TableRowGroup, obj30);
  }
  const tmp20 = application(stateFromStores[42]);
};
export { handleDeleteApp };