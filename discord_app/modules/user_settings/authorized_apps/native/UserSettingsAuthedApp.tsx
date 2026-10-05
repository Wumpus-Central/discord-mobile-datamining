// === Module 14749: UserSettingsAuthedApp ===

// Module 14749 (UserSettingsAuthedApp)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl12 from "intl" /* 1126 */;
import Link from "Link" /* 1491 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4812 */;
import Text_Text from "Text/Text" /* 4886 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6665 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8047 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8991 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 9816 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10653 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12262 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6602 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let navigation, text;

let closure_12;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let size;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ UserSettingsSections: closure_12, AnalyticsSections: map1, AnalyticsPages: closure_14 } = Constants);
let closure_15 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let closure_16 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" }, warningContainer: obj2, warningIcon: size };
obj2 = { marginTop: nativeDefault.space.PX_12, display: "flex", flexDirection: "row" };
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, marginRight: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  let items;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  text = text.text;
  const tmp4 = closure_19();
  if (cResult[0] !== tmp4.warningIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp4.warningIcon };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    const tmp8 = closure_17(CircleInformationIcon, obj2);
    cResult[0] = tmp4.warningIcon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== text) {
    const obj3 = { color: "text-default", variant: "text-sm/medium", children: text };
    const tmp11 = closure_17(Text_Text.Text, obj3);
    cResult[2] = text;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.warningContainer) {
    if (cResult[5] === tmp5) {
      let tmp12;
      if (cResult[6] === tmp9) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.warningContainer, children: items };
  items = [tmp5, tmp9];
  const tmp13 = authStore4(hasOwnProperty, obj4);
  cResult[4] = tmp4.warningContainer;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((text) => {
  let items;
  text = text.text;
  const tmp = closure_19();
  const obj = { style: tmp.warningContainer, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp.warningIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [closure_17(CircleInformationIcon, obj2), closure_17(Text_Text.Text, { color: "text-default", variant: "text-sm/medium", children: text })];
  return authStore4(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  let tmp5;
  const obj = navigation(576);
  const cResult = obj.c(7);
  application = application.application;
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      const dispatch = navigation.dispatch;
      const CommonActions = Link.CommonActions;
      dispatch(CommonActions.navigate(constants.CONNECTIONS));
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === application.name) {
    let tmp6;
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== tmp6) {
      const obj3 = { text: tmp6 };
      const tmp11 = closure_17(closure_20, obj3);
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[6];
    }
    return tmp8;
  }
  const intl = tmp(1126).intl;
  const obj4 = { applicationName: application.name, onConnectionPress: tmp5 };
  const formatResult = intl.format(navigation(1126).t.jUhnwb, obj4);
  cResult[2] = application.name;
  cResult[3] = tmp5;
  cResult[4] = formatResult;
  tmp6 = formatResult;
}) : ((application) => {
  let intl;
  let obj3;
  navigation = undefined;
  application = application.application;
  const obj = navigation(1490);
  navigation = obj.useNavigation();
  const items = [navigation];
  const obj2 = { text: intl.format(navigation(1126).t.jUhnwb, obj3) };
  const callback = react.useCallback(() => {
    const dispatch = navigation.dispatch;
    const CommonActions = Link.CommonActions;
    dispatch(CommonActions.navigate(constants.CONNECTIONS));
  }, items);
  intl = navigation(1126).intl;
  obj3 = { applicationName: application.name, onConnectionPress: callback };
  return closure_17(closure_20, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  application = application.application;
  if (cResult[0] !== application.name) {
    const intl = intl12.intl;
    const obj2 = { applicationName: application.name };
    const formatResult = intl.format(intl12.t.j4B7EW, obj2);
    cResult[0] = application.name;
    cResult[1] = formatResult;
    tmp4 = formatResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj3 = { text: tmp4 };
    const tmp9 = closure_17(closure_20, obj3);
    cResult[2] = tmp4;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : ((application) => {
  let intl;
  let obj2;
  application = application.application;
  const obj = { text: intl.format(intl12.t.j4B7EW, obj2) };
  intl = intl12.intl;
  obj2 = { applicationName: application.name };
  return closure_17(closure_20, obj);
});
function handleDeleteApp(application) {
  application = application.application;
  const id = application.id;
  const obj = AuthorizedAppsActionCreatorsDefault;
  obj.delete(id);
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  const value = selfEmbeddedActivities.get(application.id);
  let _location;
  const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
  EmbeddedActivitiesNativeManagerDefault;
  if (value != null) {
    _location = value.location;
  }
  const obj2 = { location: _location, applicationId: application.id };
  leaveActivity(obj2);
}
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  let TableRow4;
  let TableRow5;
  let TableRowGroup;
  let TableRowGroup2;
  let TableRowGroup3;
  let date1;
  let intl;
  let intl10;
  let intl11;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items8;
  let items9;
  let locale;
  let obj18;
  let obj19;
  let obj21;
  let obj26;
  let obj27;
  let obj30;
  let tmp4Result;
  oauth2Token = oauth2Token.oauth2Token;
  let stateFromStores;
  const tmp = closure_19();
  let application = oauth2Token.application;
  let tmp2 = stateFromStores;
  let tmp19Result10 = application(stateFromStores[23])(application);
  let obj = oauth2Token(stateFromStores[24]);
  const items = [AuthorizedAppsStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthorizedAppsStore.getNewestTokenForApplication(application.id));
  let obj2 = oauth2Token(stateFromStores[24]);
  const items1 = [LocaleStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  let obj3 = oauth2Token(stateFromStores[18]);
  navigation = obj3.useNavigation();
  let obj4 = oauth2Token(stateFromStores[24]);
  const items2 = [RelationshipStore];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let id;
    const isBlocked = RelationshipStore.isBlocked;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    return isBlocked(id);
  });
  let obj5 = oauth2Token(stateFromStores[25]);
  let shouldWarnAuthorizedAppTwoWay = obj5.useShouldWarnAuthorizedAppTwoWay(application.id);
  const items3 = [, ];
  const obj7 = { id: application.id, icon: application.icon };
  items3[0] = stateFromStores;
  items3[1] = navigation;
  const obj6 = application(stateFromStores[26]);
  const applicationIconSource = obj6.getApplicationIconSource(obj7);
  const effect = navigation.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = navigation.useCallback(() => {
    let obj = useAlertStore;
    let obj2 = {
      application,
      scopes: oauth2Token.scopes,
      onDelete() {
        application = oauth2Token.application;
        const id = oauth2Token.id;
        const obj = application(stateFromStores[21]);
        obj.delete(id);
        const selfEmbeddedActivities = stateFromStores3.getSelfEmbeddedActivities();
        const value = selfEmbeddedActivities.get(application.id);
        let _location;
        const leaveActivity = application(stateFromStores[22]).leaveActivity;
        application(stateFromStores[22]);
        if (value != null) {
          _location = value.location;
        }
        const obj2 = { location: _location, applicationId: application.id };
        leaveActivity(obj2);
      }
    };
    obj.openAlert("confirm-delete-authed-app", closure_17(UserSettingsAuthedAppDeleteWarningModalDefault, obj2));
  }, items4);
  let closure_4 = navigation.useCallback((userId) => {
    const openLazy = application(stateFromStores[29]).openLazy;
    application(stateFromStores[29]);
    const tmp2 = oauth2Token(stateFromStores[31])(stateFromStores[30], stateFromStores.paths);
    const obj = { userId, impressionName: oauth2Token(stateFromStores[32]).ImpressionNames.BLOCK_USER_CONFIRMATION };
    openLazy(tmp2, closure_1_16, obj, "stack");
  }, []);
  let closure_5 = navigation.useCallback((senderId) => {
    const obj = application(stateFromStores[33]);
    const obj2 = { location: constants.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(senderId, obj2);
    const obj3 = application(stateFromStores[34]);
    const result = obj3.showUnblockSuccessToast(senderId);
  }, []);
  const items5 = [ChannelStore];
  const obj8 = oauth2Token(stateFromStores[24]);
  const stateFromStores3 = obj8.useStateFromStores(items5, () => {
    const bot = application.bot;
    let id;
    const getDMFromUserId = ChannelStore.getDMFromUserId;
    if (bot != null) {
      id = bot.id;
    }
    return getDMFromUserId(id);
  });
  const items6 = [UserGuildSettingsStore];
  const items7 = [stateFromStores3];
  const obj9 = oauth2Token(stateFromStores[24]);
  const stateFromStoresObject = obj9.useStateFromStoresObject(items6, () => {
    let obj;
    if (null == stateFromStores3) {
      obj = { appDMChannelMuteConfig: null, muted: false };
    } else {
      obj = { appDMChannelMuteConfig: UserGuildSettingsStore.getChannelMuteConfig(null, stateFromStores3), muted: UserGuildSettingsStore.isChannelMuted(null, stateFromStores3) };
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  const description = application.description;
  const muted = stateFromStoresObject.muted;
  let tmp16 = closure_4;
  const obj10 = { contentContainerStyle: tmp.container, children: items10 };
  const obj12 = { style: items8, children: items9 };
  items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  const obj11 = application(stateFromStores[41]);
  const date = new Date(obj11.extractTimestamp(oauth2Token.id));
  const obj13 = { iconSource: applicationIconSource, iconBorderRadius: application(stateFromStores[13]).radii.md, iconSize: 64 };
  const toLocaleDateStringResult = date.toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  const tmp20 = application(stateFromStores[42]);
  items9 = [closure_17(tmp20, obj13), , ];
  const obj14 = { variant: "text-sm/normal", color: "text-muted", children: intl.format(oauth2Token(stateFromStores[20]).t.yOApCK, { date: toLocaleDateStringResult }) };
  const Text = oauth2Token(stateFromStores[17]).Text;
  intl = oauth2Token(stateFromStores[20]).intl;
  items9[1] = closure_17(Text, obj14);
  let tmp19Result = null;
  if (undefined !== description) {
    tmp19Result = null;
    if ("" !== description) {
      const obj15 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default", children: tmp4Result.parseBioReactWithCachedAST(description) };
      const Text2 = tmp4(tmp2[17]).Text;
      tmp4Result = oauth2Token(tmp2[43]);
      tmp19Result = closure_17(Text2, obj15);
    }
  }
  items9[2] = tmp19Result;
  items10 = [closure_18(closure_5, obj12), , , , , , ];
  let tmp19Result6 = null;
  if (null != stateFromStores3) {
    const obj16 = { style: tmp.section, children: closure_17(TableRowGroup, obj18) };
    TableRowGroup = tmp4(tmp2[44]).TableRowGroup;
    let end_time;
    const TableSwitchRow = tmp4(tmp2[45]).TableSwitchRow;
    if (appDMChannelMuteConfig != null) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    let formatResult;
    if (null != end_time) {
      const intl2 = tmp4(tmp2[20]).intl;
      const format = intl2.format;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj17 = { endTime: date1.toLocaleString(oauth2Token(tmp2[20]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
      const j7h4AJ = tmp4(tmp2[20]).t.j7h4AJ;
      date1 = new Date(appDMChannelMuteConfig.end_time);
      formatResult = format(j7h4AJ, obj17);
    }
    obj18 = { title: "Notifications", hasIcons: false, children: closure_17(TableSwitchRow, obj19) };
    obj19 = {
      label: "Mute DMs",
      subLabel: formatResult,
      value: muted,
      onValueChange: function handleMuteChannelChange(arg0) {
          if (null != stateFromStores3) {
            const tmp16 = arg0;
            if (tmp16) {
              const obj2 = RootNavigationRef;
              const rootNavigationRef = obj2.getRootNavigationRef();
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
    tmp19Result6 = closure_17(tmp18, obj16);
  }
  items10[1] = tmp19Result6;
  function handleClickPermissions() {
    let obj4;
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(constants.AUTHORIZED_APP_PERMISSIONS);
    const obj3 = { destinationPane: constants.AUTHORIZED_APP_PERMISSIONS, source: obj4, applicationId: application.id };
    obj4 = { page: constants2.USER_SETTINGS };
    const obj2 = UserSettingsUtils;
    const result = obj2.trackUserSettingsPaneViewed(obj3);
    const obj5 = { oauth2Token };
    navigation.navigate(constants.AUTHORIZED_APP_PERMISSIONS, obj5);
  }
  const obj20 = { style: tmp.section, children: closure_18(TableRowGroup2, obj21) };
  obj21 = { title: intl3.string(oauth2Token(tmp2[20]).t["8pMev2"]), hasIcons: false, children: items11 };
  TableRowGroup2 = tmp4(tmp2[44]).TableRowGroup;
  intl3 = tmp4(tmp2[20]).intl;
  const obj22 = { label: intl4.string(oauth2Token(tmp2[20]).t.xrmhRX), onPress: handleClickPermissions, arrow: true };
  const TableRow = tmp4(tmp2[46]).TableRow;
  intl4 = tmp4(tmp2[20]).intl;
  items11 = [closure_17(TableRow, obj22), , ];
  let tmp19Result7 = null != application.terms_of_service_url;
  if (tmp19Result7) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        const obj2 = { href: tmp.terms_of_service_url, shouldConfirm: true };
        const obj = MaskedLinkUtils;
        obj.handleClick(obj2);
      }
    }
    const obj23 = { label: intl5.string(oauth2Token(tmp2[20]).t["lx+Gec"]), onPress: handleClickToS, arrow: true };
    const TableRow2 = tmp4(tmp2[46]).TableRow;
    intl5 = tmp4(tmp2[20]).intl;
    tmp19Result7 = closure_17(TableRow2, obj23);
  }
  items11[1] = tmp19Result7;
  let tmp19Result8 = null != application.privacy_policy_url;
  if (tmp19Result8) {
    function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        const obj2 = { href: tmp.privacy_policy_url, shouldConfirm: true };
        const obj = MaskedLinkUtils;
        obj.handleClick(obj2);
      }
    }
    const obj24 = { label: intl6.string(oauth2Token(tmp2[20]).t.okSwq9), onPress: handleClickPrivacyPolicy, arrow: true };
    const TableRow3 = tmp4(tmp2[46]).TableRow;
    intl6 = tmp4(tmp2[20]).intl;
    tmp19Result8 = closure_17(TableRow3, obj24);
  }
  items11[2] = tmp19Result8;
  items10[2] = closure_17(closure_5, obj20);
  const obj25 = { style: tmp.section, children: closure_17(TableRowGroup3, obj26) };
  obj26 = { title: intl7.string(oauth2Token(tmp2[20]).t.gAHBA7), hasIcons: false, children: closure_17(TableRow4, obj27) };
  TableRowGroup3 = tmp4(tmp2[44]).TableRowGroup;
  intl7 = tmp4(tmp2[20]).intl;
  obj27 = { label: intl8.string(oauth2Token(tmp2[20]).t.xUqheM), variant: "danger", onPress: callback, arrow: true };
  TableRow4 = tmp4(tmp2[46]).TableRow;
  intl8 = tmp4(tmp2[20]).intl;
  items10[3] = closure_17(closure_5, obj25);
  let id;
  if (application != null) {
    let bot = application.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  let tmp19Result9;
  if (null != id) {
    const obj28 = { title: intl9.string(oauth2Token(tmp2[20]).t["8msQQO"]), hasIcons: false, children: closure_17(TableRow5, obj30) };
    const TableRowGroup4 = tmp4(tmp2[44]).TableRowGroup;
    intl9 = tmp4(tmp2[20]).intl;
    TableRow5 = tmp4(tmp2[46]).TableRow;
    if (stateFromStores2) {
      const obj29 = {
        label: intl11.string(oauth2Token(tmp2[20]).t.XyHpKH),
        onPress() {
              return closure_5(id);
            },
        arrow: true
      };
      intl11 = tmp4(tmp2[20]).intl;
      obj30 = obj29;
    } else {
      obj30 = {
        label: intl10.string(oauth2Token(tmp2[20]).t.l4Emac),
        variant: "danger",
        onPress() {
              return closure_4(id);
            },
        arrow: true
      };
      intl10 = tmp4(tmp2[20]).intl;
    }
    tmp19Result9 = closure_17(TableRowGroup4, obj28);
  }
  items10[4] = tmp19Result9;
  if (shouldWarnAuthorizedAppTwoWay) {
    const obj31 = { application };
    shouldWarnAuthorizedAppTwoWay = closure_17(closure_21, obj31);
  }
  items10[5] = shouldWarnAuthorizedAppTwoWay;
  if (tmp19Result10) {
    const obj32 = { application };
    tmp19Result10 = closure_17(closure_22, obj32);
  }
  items10[6] = tmp19Result10;
  return closure_18(tmp16, obj10);
};
export { handleDeleteApp };