import tokensToAppTokensMap from "tokensToAppTokensMap";
import get_ActivityIndicator from "Link";
import participantFromServer from "participantFromServer";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import _getSystemLocale from "_getSystemLocale";
import ME from "ME";
import { ChannelDetailsNavigatorScreens as closure_15 } from "ChannelDetailsNavigatorScreens";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_16 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import jsxProd from "useIsSocialLayerParentApplication";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_12;
let closure_14;
let closure_17;
let closure_18;
let map1;
const require = arg1;
function WarningLabel(children) {
  const tmp = createCacheKey();
  let obj = { style: tmp.warningContainer, children: null };
  obj = { size: "xs", color: null, style: null };
  obj[1] = importDefault(712).colors.TEXT_MUTED;
  obj[2] = tmp.warningIcon;
  const items = [callback(require(4241) /* CircleInformationIcon */.CircleInformationIcon, obj), callback(require(4281) /* Text */.Text, { color: "text-default", variant: "text-sm/medium", children: children.text })];
  obj[1] = items;
  return callback2(closure_5, obj);
}
function AuthorizedAppTwoWay(application) {
  let navigation;
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  obj = { text: null };
  const callback = React.useCallback(() => {
    const CommonActions = navigation(outer1_2[17]).CommonActions;
    navigation.dispatch(CommonActions.navigate({ name: outer1_12.CONNECTIONS }));
  }, items);
  const intl = navigation(1236).intl;
  obj = { applicationName: application.application.name, onConnectionPress: callback };
  obj[0] = intl.format(navigation(1236).t.jUhnwb, obj);
  return callback(WarningLabel, obj);
}
function ParentApp(application) {
  let obj = { text: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { applicationName: application.application.name };
  obj[0] = intl.format(require(1236) /* getSystemLocale */.t.j4B7EW, obj);
  return callback(WarningLabel, obj);
}
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ UserSettingsSections: closure_12, AnalyticsSections: map1, AnalyticsPages: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" }, warningContainer: null, warningIcon: null };
createCacheKey = { marginTop: require("Themes").space.PX_12, display: "flex", flexDirection: "row" };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { width: 16, height: 16, marginRight: 8, color: require("Themes").colors.TEXT_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 16, height: 16, marginRight: 8, color: require("Themes").colors.TEXT_MUTED };
let result = require("participantFromServer").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  oauth2Token = oauth2Token.oauth2Token;
  let id = oauth2Token;
  let application;
  let stateFromStores;
  let navigation;
  let closure_4;
  let closure_5;
  let stateFromStores3;
  const tmp = createCacheKey();
  application = oauth2Token.application;
  let stringResult = stateFromStores;
  let tmp19Result3 = application(stateFromStores[21])(application);
  let obj = id(stateFromStores[22]);
  const items = [recomputeFromAppTokens];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getNewestTokenForApplication(application.id));
  let obj1 = id(stateFromStores[22]);
  const items1 = [_getSystemLocale];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => locale.locale);
  let obj2 = id(stateFromStores[16]);
  navigation = obj2.useNavigation();
  let obj3 = id(stateFromStores[22]);
  const items2 = [upsertRelationship];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let id;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    return outer1_9.isBlocked(id);
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
    let obj = id(stateFromStores[25]);
    obj = {
      application,
      scopes: id.scopes,
      onDelete() {
        const application = closure_0.application;
        let obj = outer1_1(outer1_2[19]);
        obj.delete(closure_0.id);
        const selfEmbeddedActivities = outer1_6.getSelfEmbeddedActivities();
        const value = selfEmbeddedActivities.get(application.id);
        let _location;
        if (value != null) {
          _location = value.location;
        }
        obj = { location: _location, applicationId: application.id };
        outer1_1(outer1_2[20]).leaveActivity(obj);
      }
    };
    obj.openAlert("confirm-delete-authed-app", outer1_17(application(stateFromStores[26]), obj));
  }, items4);
  closure_4 = navigation.useCallback((userId) => {
    let obj = application(stateFromStores[27]);
    obj = { userId, impressionName: id(stateFromStores[30]).ImpressionNames.BLOCK_USER_CONFIRMATION };
    obj.openLazy(id(stateFromStores[29])(stateFromStores[28], stateFromStores.paths), closure_16, obj, "stack");
  }, []);
  closure_5 = navigation.useCallback((tokensToAppTokensMap) => {
    let obj = application(stateFromStores[31]);
    obj = { location: constants.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(tokensToAppTokensMap, obj);
    const result = application(stateFromStores[32]).showUnblockSuccessToast(tokensToAppTokensMap);
  }, []);
  let obj7 = id(stateFromStores[22]);
  const items5 = [ensureGuildLoaded];
  stateFromStores3 = obj7.useStateFromStores(items5, () => {
    const bot = application.bot;
    let id;
    if (bot != null) {
      id = bot.id;
    }
    return outer1_8.getDMFromUserId(id);
  });
  let obj8 = id(stateFromStores[22]);
  const items6 = [updateUserGuildSettingsInternal];
  const items7 = [stateFromStores3];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items6, () => {
    if (null == stateFromStores3) {
      let obj = { appDMChannelMuteConfig: null, muted: false };
    } else {
      obj = { appDMChannelMuteConfig: null, muted: null };
      obj[0] = outer1_10.getChannelMuteConfig(null, tmp);
      obj[1] = outer1_10.isChannelMuted(null, tmp);
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  obj = { contentContainerStyle: tmp.container, children: null };
  const description = application.description;
  let obj10 = application(stateFromStores[39]);
  obj1 = { style: items8, children: null };
  items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  const date = new Date(obj10.extractTimestamp(oauth2Token.id));
  const tmp16 = closure_4;
  obj2 = { iconSource: applicationIconSource, iconBorderRadius: null, iconSize: 64 };
  const toLocaleDateStringResult = new Date(obj10.extractTimestamp(oauth2Token.id)).toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  obj2[1] = application(stateFromStores[13]).radii.md;
  const items9 = [callback(application(stateFromStores[40]), obj2), , ];
  obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = id(stateFromStores[18]).intl;
  obj3[2] = intl.format(id(stateFromStores[18]).t.yOApCK, { date: toLocaleDateStringResult });
  items9[1] = callback(id(stateFromStores[15]).Text, obj3);
  let tmp19Result = null;
  if (undefined !== description) {
    tmp19Result = null;
    if ("" !== description) {
      obj4 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
      obj4[0] = tmp.appAboutDescription;
      obj4[3] = tmp4(stringResult[41]).parseBioReactWithCachedAST(description);
      tmp19Result = tmp19(tmp4(stringResult[15]).Text, obj4);
      const tmp4Result = tmp4(stringResult[41]);
    }
  }
  items9[2] = tmp19Result;
  obj1[1] = items9;
  const items10 = [closure_18(closure_5, obj1), , , , , , ];
  tmp19Result = null;
  if (null != stateFromStores3) {
    obj5 = { style: null, children: null };
    obj5[0] = tmp.section;
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
      obj6[0] = date1.toLocaleString(tmp4(stringResult[18]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      formatResult = intl2.format(tmp4(stringResult[18]).t.j7h4AJ, obj6);
    }
    obj7 = { title: "Notifications", hasIcons: false, children: null };
    obj8 = { label: "Mute DMs", subLabel: null, value: null, onValueChange: null };
    obj8[1] = formatResult;
    obj8[2] = stateFromStoresObject.muted;
    obj8[3] = function handleMuteChannelChange(arg0) {
      if (null != stateFromStores3) {
        if (arg0) {
          const rootNavigationRef = id(stateFromStores[36]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              let obj = { channelId: null, applicationId: null, initialRouteName: null, source: "authorized-apps-settings" };
              obj[0] = tmp;
              obj[1] = application.id;
              obj[2] = outer1_15.MUTE;
              rootNavigationRef.navigate("sidebar", obj);
            }
          }
        } else {
          obj = application(stateFromStores[37]);
          const result = obj.updateAppDMOverrideSettings(null, tmp, application.id, { muted: false }, id(stateFromStores[38]).NotificationLabels.Unmuted);
        }
      }
    };
    obj7[2] = tmp19(tmp4(stringResult[43]).TableSwitchRow, obj8);
    obj5[1] = tmp19(tmp4(stringResult[42]).TableRowGroup, obj7);
    tmp19Result = tmp19(tmp18, obj5);
  }
  items10[1] = tmp19Result;
  const obj9 = { style: tmp.section, children: null };
  function handleClickPermissions() {
    let obj = application(stateFromStores[33]);
    obj.setSection(outer1_12.AUTHORIZED_APP_PERMISSIONS);
    let obj1 = id(stateFromStores[34]);
    obj = { destinationPane: outer1_12.AUTHORIZED_APP_PERMISSIONS, source: obj, applicationId: application.id };
    obj = { page: outer1_14.USER_SETTINGS };
    const result = obj1.trackUserSettingsPaneViewed(obj);
    obj1 = { oauth2Token: id };
    navigation.navigate(outer1_12.AUTHORIZED_APP_PERMISSIONS, obj1);
  }
  obj10 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp4(stringResult[18]).intl;
  obj10[0] = intl3.string(id(stringResult[18]).t["8pMev2"]);
  const obj11 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp4(stringResult[18]).intl;
  obj11[0] = intl4.string(id(stringResult[18]).t.xrmhRX);
  obj11[1] = handleClickPermissions;
  const items11 = [callback(id(stringResult[44]).TableRow, obj11), , ];
  let tmp19Result1 = null != application.terms_of_service_url;
  if (tmp19Result1) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        let obj = id(stateFromStores[35]);
        obj = { href: null, shouldConfirm: true };
        obj[0] = tmp.terms_of_service_url;
        obj.handleClick(obj);
      }
    }
    const obj12 = { label: null, onPress: null, arrow: true };
    const intl5 = tmp4(stringResult[18]).intl;
    obj12[0] = intl5.string(tmp4(stringResult[18]).t["lx+Gec"]);
    obj12[1] = handleClickToS;
    tmp19Result1 = tmp19(tmp4(stringResult[44]).TableRow, obj12);
  }
  items11[1] = tmp19Result1;
  let tmp19Result2 = null != application.privacy_policy_url;
  if (tmp19Result2) {
    function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        let obj = id(stateFromStores[35]);
        obj = { href: null, shouldConfirm: true };
        obj[0] = tmp.privacy_policy_url;
        obj.handleClick(obj);
      }
    }
    const obj13 = { label: null, onPress: null, arrow: true };
    const intl6 = tmp4(stringResult[18]).intl;
    obj13[0] = intl6.string(tmp4(stringResult[18]).t.okSwq9);
    obj13[1] = handleClickPrivacyPolicy;
    tmp19Result2 = tmp19(tmp4(stringResult[44]).TableRow, obj13);
  }
  items11[2] = tmp19Result2;
  obj10[2] = items11;
  obj9[1] = closure_18(id(stringResult[42]).TableRowGroup, obj10);
  items10[2] = callback(closure_5, obj9);
  const obj14 = { style: tmp.section, children: null };
  const obj15 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp4(stringResult[18]).intl;
  obj15[0] = intl7.string(id(stringResult[18]).t.gAHBA7);
  const obj16 = { label: null, variant: "danger", onPress: null, arrow: true };
  const intl8 = tmp4(stringResult[18]).intl;
  obj16[0] = intl8.string(id(stringResult[18]).t.xUqheM);
  obj16[2] = callback;
  obj15[2] = callback(id(stringResult[44]).TableRow, obj16);
  obj14[1] = callback(id(stringResult[42]).TableRowGroup, obj15);
  items10[3] = callback(closure_5, obj14);
  id = undefined;
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
      const obj17 = { application: null };
      obj17[0] = application;
      shouldWarnAuthorizedAppTwoWay = tmp19(AuthorizedAppTwoWay, obj17);
    }
    items10[5] = shouldWarnAuthorizedAppTwoWay;
    if (tmp19Result3) {
      const obj18 = { application: null };
      obj18[0] = application;
      tmp19Result3 = tmp19(ParentApp, obj18);
    }
    items10[6] = tmp19Result3;
    obj[1] = items10;
    return tmp15(tmp16, obj);
  } else {
    const obj19 = { title: null, hasIcons: false, children: null };
    const intl9 = tmp4(stringResult[18]).intl;
    obj19[0] = intl9.string(tmp4(stringResult[18]).t["8msQQO"]);
    if (stateFromStores2) {
      const obj20 = { label: null, onPress: null, arrow: true };
      const intl11 = tmp4(stringResult[18]).intl;
      stringResult = intl11.string(tmp4(stringResult[18]).t.XyHpKH);
      obj20[0] = stringResult;
      obj20[1] = function onPress() {
        return callback2(id);
      };
      let obj21 = obj20;
    } else {
      obj21 = { label: null, variant: "danger", onPress: null, arrow: true };
      const intl10 = tmp4(stringResult[18]).intl;
      obj21[0] = intl10.string(tmp4(stringResult[18]).t.l4Emac);
      obj21[2] = function onPress() {
        return callback(id);
      };
    }
    obj19[2] = tmp19(tmp4(stringResult[44]).TableRow, obj21);
    tmp19(tmp4(stringResult[42]).TableRowGroup, obj19);
  }
};
export const handleDeleteApp = function handleDeleteApp(application) {
  application = application.application;
  let obj = importDefault(5618);
  obj.delete(application.id);
  selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
  const value = selfEmbeddedActivities.get(application.id);
  let _location;
  if (value != null) {
    _location = value.location;
  }
  obj = { location: _location, applicationId: application.id };
  importDefault(10538).leaveActivity(obj);
};