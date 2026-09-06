// === Module 14941: UserSettingsAuthedApp ===

// Module 14941 (UserSettingsAuthedApp)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Link from "Link" /* 1484 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4515 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7170 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8370 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9515 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12597 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
function WarningLabel(children) {
  const tmp = closure_19();
  let obj = { style: tmp.warningContainer, children: null };
  obj = { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp.warningIcon };
  const items = [closure_1_17(CircleInformationIcon.CircleInformationIcon, obj), closure_1_17(Text_Text.Text, { color: "text-default", variant: "text-sm/medium", children: children.text })];
  obj.children = items;
  return collapsedCategories(hasOwnProperty, obj);
}
function AuthorizedAppTwoWay(application) {
  let navigation;
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  obj = { text: null };
  const callback = noop.useCallback(() => {
    const CommonActions = Link.CommonActions;
    navigation.dispatch(CommonActions.navigate(constants.CONNECTIONS));
  }, items);
  const intl = navigation(1114).intl;
  obj = { applicationName: application.application.name, onConnectionPress: callback };
  obj.text = intl.format(navigation(1114).t.jUhnwb, obj);
  return closure_17(WarningLabel, obj);
}
function ParentApp(application) {
  let obj = { text: null };
  const intl = util.intl;
  obj = { applicationName: application.application.name };
  obj.text = intl.format(util.t.j4B7EW, obj);
  return closure_1_17(WarningLabel, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: closure_12, AnalyticsSections: map1, AnalyticsPages: closure_14 } = Constants);
let closure_15 = fn(10916).ChannelDetailsNavigatorScreens;
let closure_16 = fn(11382).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" }, warningContainer: null, warningIcon: null };
createStyles = { marginTop: nativeDefault.space.PX_12, display: "flex", flexDirection: "row" };
createStyles.warningContainer = createStyles;
let size = { width: 16, height: 16, marginRight: 8, color: nativeDefault.colors.TEXT_MUTED };
createStyles.warningIcon = size;
let closure_19 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  oauth2Token = oauth2Token.oauth2Token;
  let id = oauth2Token;
  let stateFromStores;
  const tmp = closure_19();
  let application = oauth2Token.application;
  let stringResult = stateFromStores;
  let tmp19Result3 = application(stateFromStores[21])(application);
  let obj = id(stateFromStores[22]);
  const items = [AuthorizedAppsStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthorizedAppsStore.getNewestTokenForApplication(application.id));
  let obj1 = id(stateFromStores[22]);
  const items1 = [LocaleStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => locale.locale);
  let obj2 = id(stateFromStores[16]);
  const navigation = obj2.useNavigation();
  let obj3 = id(stateFromStores[22]);
  const items2 = [RelationshipStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    id = undefined;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    return RelationshipStore.isBlocked(id);
  });
  let obj4 = id(stateFromStores[23]);
  let shouldWarnAuthorizedAppTwoWay = obj4.useShouldWarnAuthorizedAppTwoWay(application.id);
  let obj5 = application(stateFromStores[24]);
  obj = { id: application.id, icon: application.icon };
  const items3 = [stateFromStores, navigation];
  const applicationIconSource = obj5.getApplicationIconSource(obj);
  const effect = navigation.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = navigation.useCallback(() => {
    let obj = {
      application,
      scopes: id.scopes,
      onDelete() {
        application = id.application;
        let obj = application(stateFromStores[19]);
        obj.delete(id.id);
        const selfEmbeddedActivities = stateFromStores3.getSelfEmbeddedActivities();
        value = selfEmbeddedActivities.get(application.id);
        let _location;
        if (value != null) {
          _location = value.location;
        }
        obj = { location: _location, applicationId: application.id };
        application(stateFromStores[20]).leaveActivity(obj);
      }
    };
    obj.openAlert("confirm-delete-authed-app", closure_2_17(UserSettingsAuthedAppDeleteWarningModalDefault, obj));
  }, items4);
  closure_4 = navigation.useCallback((userId) => {
    application(stateFromStores[27]);
    const obj = { userId, impressionName: id(stateFromStores[30]).ImpressionNames.BLOCK_USER_CONFIRMATION };
    obj.openLazy(id(stateFromStores[29])(stateFromStores[28], stateFromStores.paths), closure_1_16, obj, "stack");
  }, []);
  closure_5 = navigation.useCallback((id) => {
    application(stateFromStores[31]);
    const obj = { location: constants.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(id, obj);
    const result = application(stateFromStores[32]).showUnblockSuccessToast(id);
  }, []);
  let obj7 = id(stateFromStores[22]);
  const items5 = [ChannelStore];
  const stateFromStores3 = obj7.useStateFromStores(items5, () => {
    const bot = application.bot;
    id = undefined;
    if (bot != null) {
      id = bot.id;
    }
    return ChannelStore.getDMFromUserId(id);
  });
  let obj8 = id(stateFromStores[22]);
  const items6 = [UserGuildSettingsStore];
  const items7 = [stateFromStores3];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items6, () => {
    if (null == stateFromStores3) {
      let obj = { appDMChannelMuteConfig: null, muted: false };
    } else {
      obj = { appDMChannelMuteConfig: UserGuildSettingsStore.getChannelMuteConfig(null, tmp), muted: UserGuildSettingsStore.isChannelMuted(null, tmp) };
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  obj = { contentContainerStyle: tmp.container, children: null };
  const description = application.description;
  let obj10 = application(stateFromStores[39]);
  obj1 = { style: null, children: null };
  const items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  obj1.style = items8;
  const date = new Date(obj10.extractTimestamp(oauth2Token.id));
  const tmp16 = closure_4;
  obj2 = { iconSource: applicationIconSource, iconBorderRadius: null, iconSize: 64 };
  const toLocaleDateStringResult = new Date(obj10.extractTimestamp(oauth2Token.id)).toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  obj2.iconBorderRadius = application(stateFromStores[13]).radii.md;
  const items9 = [closure_17(application(stateFromStores[40]), obj2), , ];
  obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = id(stateFromStores[18]).intl;
  obj3.children = intl.format(id(stateFromStores[18]).t.yOApCK, { date: toLocaleDateStringResult });
  items9[1] = closure_17(id(stateFromStores[15]).Text, obj3);
  let tmp19Result = null;
  if (undefined !== description) {
    tmp19Result = null;
    if ("" !== description) {
      obj4 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default", children: tmp4(stringResult[41]).parseBioReactWithCachedAST(description) };
      tmp19Result = tmp19(tmp4(stringResult[15]).Text, obj4);
      const tmp4Result = tmp4(stringResult[41]);
    }
  }
  items9[2] = tmp19Result;
  obj1.children = items9;
  const items10 = [closure_18(closure_5, obj1), , , , , , ];
  tmp19Result = null;
  if (null != stateFromStores3) {
    obj5 = { style: tmp.section, children: null };
    let end_time;
    if (appDMChannelMuteConfig != null) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    let formatResult;
    if (null != end_time) {
      const intl2 = tmp4(stringResult[18]).intl;
      const obj6 = { endTime: null };
      const _Date = Date;
      const date1 = new Date(appDMChannelMuteConfig.end_time);
      obj6.endTime = date1.toLocaleString(tmp4(stringResult[18]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      formatResult = intl2.format(tmp4(stringResult[18]).t.j7h4AJ, obj6);
    }
    obj7 = { title: "Notifications", hasIcons: false, children: null };
    obj8 = {
      label: "Mute DMs",
      subLabel: formatResult,
      value: stateFromStoresObject.muted,
      onValueChange: function handleMuteChannelChange(arg0) {
          if (null != stateFromStores3) {
            if (arg0) {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  let obj = { channelId: tmp, applicationId: application.id, initialRouteName: constants2.MUTE, source: "authorized-apps-settings" };
                  rootNavigationRef.navigate("sidebar", obj);
                }
              }
            } else {
              obj = NotificationSettingsModalActionCreatorsDefault;
              const result = obj.updateAppDMOverrideSettings(null, tmp, application.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
            }
          }
        }
    };
    obj7.children = tmp19(tmp4(stringResult[43]).TableSwitchRow, obj8);
    obj5.children = tmp19(tmp4(stringResult[42]).TableRowGroup, obj7);
    tmp19Result = tmp19(tmp18, obj5);
  }
  items10[1] = tmp19Result;
  const obj9 = { style: tmp.section, children: null };
  function handleClickPermissions() {
    let obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(constants.AUTHORIZED_APP_PERMISSIONS);
    let obj1 = UserSettingsUtils;
    obj = { destinationPane: constants.AUTHORIZED_APP_PERMISSIONS, source: null, applicationId: application.id };
    obj = { page: constants2.USER_SETTINGS };
    obj.source = obj;
    const result = obj1.trackUserSettingsPaneViewed(obj);
    obj1 = { oauth2Token: id };
    navigation.navigate(constants.AUTHORIZED_APP_PERMISSIONS, obj1);
  }
  obj10 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp4(stringResult[18]).intl;
  obj10.title = intl3.string(id(stringResult[18]).t["8pMev2"]);
  const obj11 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp4(stringResult[18]).intl;
  obj11.label = intl4.string(id(stringResult[18]).t.xrmhRX);
  obj11.onPress = handleClickPermissions;
  const items11 = [closure_17(id(stringResult[44]).TableRow, obj11), , ];
  let tmp19Result1 = null != application.terms_of_service_url;
  if (tmp19Result1) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        const obj = { href: tmp.terms_of_service_url, shouldConfirm: true };
        obj.handleClick(obj);
      }
    }
    const obj12 = { label: null, onPress: null, arrow: true };
    const intl5 = tmp4(stringResult[18]).intl;
    obj12.label = intl5.string(tmp4(stringResult[18]).t["lx+Gec"]);
    obj12.onPress = handleClickToS;
    tmp19Result1 = tmp19(tmp4(stringResult[44]).TableRow, obj12);
  }
  items11[1] = tmp19Result1;
  let tmp19Result2 = null != application.privacy_policy_url;
  if (tmp19Result2) {
    function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        const obj = { href: tmp.privacy_policy_url, shouldConfirm: true };
        obj.handleClick(obj);
      }
    }
    const obj13 = { label: null, onPress: null, arrow: true };
    const intl6 = tmp4(stringResult[18]).intl;
    obj13.label = intl6.string(tmp4(stringResult[18]).t.okSwq9);
    obj13.onPress = handleClickPrivacyPolicy;
    tmp19Result2 = tmp19(tmp4(stringResult[44]).TableRow, obj13);
  }
  items11[2] = tmp19Result2;
  obj10.children = items11;
  obj9.children = closure_18(id(stringResult[42]).TableRowGroup, obj10);
  items10[2] = closure_17(closure_5, obj9);
  const obj14 = { style: tmp.section, children: null };
  const obj15 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp4(stringResult[18]).intl;
  obj15.title = intl7.string(id(stringResult[18]).t.gAHBA7);
  const obj16 = { label: null, variant: "danger", onPress: null, arrow: true };
  const intl8 = tmp4(stringResult[18]).intl;
  obj16.label = intl8.string(id(stringResult[18]).t.xUqheM);
  obj16.onPress = callback;
  obj15.children = closure_17(id(stringResult[44]).TableRow, obj16);
  obj14.children = closure_17(id(stringResult[42]).TableRowGroup, obj15);
  items10[3] = closure_17(closure_5, obj14);
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
      const obj17 = { application };
      shouldWarnAuthorizedAppTwoWay = tmp19(AuthorizedAppTwoWay, obj17);
    }
    items10[5] = shouldWarnAuthorizedAppTwoWay;
    if (tmp19Result3) {
      const obj18 = { application };
      tmp19Result3 = tmp19(ParentApp, obj18);
    }
    items10[6] = tmp19Result3;
    obj.children = items10;
    return tmp15(tmp16, obj);
  } else {
    const obj19 = { title: null, hasIcons: false, children: null };
    const intl9 = tmp4(stringResult[18]).intl;
    obj19.title = intl9.string(tmp4(stringResult[18]).t["8msQQO"]);
    if (stateFromStores2) {
      const obj20 = { label: null, onPress: null, arrow: true };
      const intl11 = tmp4(stringResult[18]).intl;
      stringResult = intl11.string(tmp4(stringResult[18]).t.XyHpKH);
      obj20.label = stringResult;
      obj20.onPress = function onPress() {
        return hasOwnProperty(id);
      };
      let obj21 = obj20;
    } else {
      obj21 = { label: null, variant: "danger", onPress: null, arrow: true };
      const intl10 = tmp4(stringResult[18]).intl;
      obj21.label = intl10.string(tmp4(stringResult[18]).t.l4Emac);
      obj21.onPress = function onPress() {
        return React4(id);
      };
    }
    obj19.children = tmp19(tmp4(stringResult[44]).TableRow, obj21);
    tmp19(tmp4(stringResult[42]).TableRowGroup, obj19);
  }
};
export const handleDeleteApp = function handleDeleteApp(application) {
  application = application.application;
  let obj = AuthorizedAppsActionCreatorsDefault;
  obj.delete(application.id);
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  value = selfEmbeddedActivities.get(application.id);
  let _location;
  if (value != null) {
    _location = value.location;
  }
  obj = { location: _location, applicationId: application.id };
  EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj);
};