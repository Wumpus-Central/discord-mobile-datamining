// discord_app/modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import ContactSyncUtils from "../../../contact_sync/native/ContactSyncUtils.tsx";
import useAuthorizedSlayerApplicationsDefault from "../../authorized_apps/useAuthorizedSlayerApplications.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MobileUserSettings = fn(7975).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { loadingIndicator: null, emptyContainer: null };
createStyles = { marginTop: nativeDefault.space.PX_32 };
createStyles.loadingIndicator = createStyles;
createStyles.emptyContainer = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_24,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default function ContentAndSocialSettings(route) {
  route = route.route;
  const memo = noop.useMemo(() => {
    const items = [,];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = MobileUserSettings);
    return items;
  }, []);
  const defaultIndex = _slicedToArray(
    noop.useState(() => {
      let tab;
      if (route != null) {
        const params = route.params;
        if (params != null) {
          tab = params.tab;
        }
      }
      let num = 0;
      if (tab === MobileUserSettings.CONNECTED_GAMES) {
        num = 1;
      }
      return num;
    }),
    2,
  )[0];
  let items = [defaultIndex, memo];
  const node = noop.useMemo(() => {
    const obj = { defaultIndex, settings: memo };
    return obj.createSegmentedControl(obj);
  }, items);
  return closure_9(memo(defaultIndex[16]), { node });
}
export const DiscordPermissionsPage = function DiscordPermissionsPage() {
  let obj = allServersOptionSelected(memo[12]);
  allServersOptionSelected = obj.useAllServersOptionSelected();
  const sensitiveContentFilterHelpArticle = allServersOptionSelected(memo[13]).useSensitiveContentFilterHelpArticle();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle];
  memo = noop.useMemo(() => {
    let obj = { settings: null, subLabel: null };
    const items = [MobileUserSettings.SENSITIVE_CONTENT_FILTERS];
    obj.settings = items;
    const intl = util.intl;
    obj = { learnMoreLink: null };
    let obj2 = HelpdeskUtilsDefault;
    obj.learnMoreLink = obj2.getArticleURL(sensitiveContentFilterHelpArticle);
    obj.subLabel = intl.format(util.t.dliU4j, obj);
    const items1 = [obj, , ,];
    obj = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.DIRECT_MESSAGE_SPAM_FILTER];
    obj.settings = items2;
    const intl2 = util.intl;
    const obj1 = { appealLink: null };
    let obj5 = HelpdeskUtilsDefault;
    obj1.appealLink = obj5.getArticleURL(HelpdeskArticles.SAFE_DIRECT_MESSAGING);
    obj.subLabel = intl2.format(util.t.RvjRRI, obj1);
    items1[1] = obj;
    obj2 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.MDqARb);
    const items3 = [MobileUserSettings.DIRECT_MESSAGE_SAFETY_ALERTS];
    obj2.settings = items3;
    const intl4 = util.intl;
    const obj3 = { learnMoreLink: null };
    let obj8 = HelpdeskUtilsDefault;
    obj3.learnMoreLink = obj8.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
    obj2.subLabel = intl4.format(util.t.lunaRv, obj3);
    items1[2] = obj2;
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl5 = util.intl;
    obj4.label = intl5.string(util.t.wCFGLE);
    const items4 = [MobileUserSettings.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
    obj4.settings = items4;
    const intl6 = util.intl;
    obj4.subLabel = intl6.string(util.t.R9fXyS);
    items1[3] = obj4;
    const items5 = [...items1];
    const items6 = [, ,];
    ({
      SAFETY_GUILD_SETTING_GUILD_SELECT: arr7[0],
      SAFETY_GUILD_SETTING_DIRECT_MESSAGES: arr7[1],
      SAFETY_GUILD_SETTING_MESSAGE_REQUESTS: arr7[2],
    } = MobileUserSettings);
    obj5 = { label: null, settings: null };
    const intl7 = util.intl;
    obj5.label = intl7.string(util.t["6x5uWQ"]);
    const items7 = [MobileUserSettings.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
    obj5.settings = items7;
    const items8 = [obj5, , , , , , , , ,];
    const obj6 = { settings: null };
    const items9 = [MobileUserSettings.ACTIVITY_PRIVACY_DEFAULT_SHARING];
    obj6.settings = items9;
    items8[1] = obj6;
    const obj7 = { settings: null };
    const items10 = [MobileUserSettings.NOTIFY_FRIENDS_ON_COME_ONLINE];
    obj7.settings = items10;
    items8[2] = obj7;
    obj8 = { label: null, settings: null };
    const intl8 = util.intl;
    obj8.label = intl8.string(util.t.MeYuqs);
    let tmp7 = items6;
    if (!allServersOptionSelected) {
      const items11 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(tmp2(15868).GUILD_SPECIFIC_SETTINGS, arraySpreadResult);
      tmp7 = items11;
    }
    obj8.settings = tmp7;
    items8[3] = obj8;
    const obj9 = { label: null, settings: null };
    const intl9 = tmp2(1114).intl;
    obj9.label = intl9.string(util.t.XlGG9c);
    const items12 = [, ,];
    ({
      SAFETY_SEND_FRIEND_REQUESTS_EVERYONE: arr13[0],
      SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr13[1],
      SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS: arr13[2],
    } = MobileUserSettings);
    obj9.settings = items12;
    items8[4] = obj9;
    const obj10 = { settings: null };
    const items13 = [MobileUserSettings.FRIEND_REQUEST_NOTES];
    obj10.settings = items13;
    items8[5] = obj10;
    const obj11 = { label: null, settings: null, subLabel: null };
    const intl10 = tmp2(1114).intl;
    obj11.label = intl10.string(util.t["3wRort"]);
    const items14 = [,];
    ({ ACCOUNT_BLOCKED_USERS_V2: arr15[0], ACCOUNT_IGNORED_USERS: arr15[1] } = MobileUserSettings);
    obj11.settings = items14;
    const intl11 = tmp2(1114).intl;
    const obj12 = {
      helpArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE),
    };
    obj11.subLabel = intl11.format(util.t["0aNQo9"], obj12);
    items8[6] = obj11;
    const obj13 = { label: null, settings: null, subLabel: null };
    const intl12 = tmp2(1114).intl;
    obj13.label = intl12.string(util.t.bGSsnc);
    const items15 = [, ,];
    ({
      SYNC_CONTACTS: arr16[0],
      SYNC_CONTACTS_NAME: arr16[1],
      STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION: arr16[2],
    } = MobileUserSettings);
    obj13.settings = items15;
    const intl13 = tmp2(1114).intl;
    const tmp4Result = HelpdeskUtilsDefault;
    obj13.subLabel = intl13.format(util.t["TWz/S+"], { onClick: ContactSyncUtils.handleOpenLearnMoreLink });
    items8[7] = obj13;
    const obj15 = { label: null, settings: null };
    const intl14 = tmp2(1114).intl;
    obj15.label = intl14.string(util.t["aBZ/oQ"]);
    const items16 = [,];
    ({ DISCOVERY_BY_PHONE: arr17[0], DISCOVERY_BY_EMAIL: arr17[1] } = MobileUserSettings);
    obj15.settings = items16;
    items8[8] = obj15;
    const obj16 = { label: null, settings: null };
    const intl15 = tmp2(1114).intl;
    obj16.label = intl15.string(util.t["+KNdnt"]);
    const items17 = [MobileUserSettings.IOS_CONVERSATION_SUGGESTIONS];
    obj16.settings = items17;
    items8[9] = obj16;
    HermesBuiltin.arraySpread(items8, tmp6);
    return items5;
  }, items);
  let items1 = [memo];
  obj = { children: null };
  const memo1 = noop.useMemo(() => {
    const obj = { sections: memo };
    return obj.createList(obj);
  }, items1);
  obj = { screen: null };
  let obj2 = allServersOptionSelected(memo[13]);
  obj.screen = allServersOptionSelected(memo[15]).SettingsScreen.CONTENT_AND_SOCIAL;
  let items2 = [
    closure_9(sensitiveContentFilterHelpArticle(memo[15]), obj),
    closure_9(sensitiveContentFilterHelpArticle(memo[16]), { node: memo1 }),
  ];
  obj.children = items2;
  return closure_11(closure_10, obj);
};
export const ConnectedGamesPage = function ConnectedGamesPage() {
  const tmp = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  if (showLoadingIndicator) {
    let obj = { style: tmp.loadingIndicator };
    let tmp7 = React7(hasOwnProperty, obj);
  } else if (0 === slayerSdkApplications.length) {
    obj = { style: tmp.emptyContainer, children: null };
    let obj1 = { variant: "text-md/semibold", color: "text-strong", children: null };
    let intl = util.intl;
    obj1.children = intl.string(util.t["+0U77d"]);
    let items = [React7(Text_Text.Text, obj1)];
    let obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = util.intl;
    const obj3 = { helpdeskArticle: tmp2(2024).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    obj2.children = intl2.format(util.t.V8wClM, obj3);
    items[1] = React7(Text_Text.Text, obj2);
    obj.children = items;
    tmp7 = closure_1_11(timestampProducer, obj);
    const tmp2Result = tmp2(2024);
  } else {
    obj = { node: tmp5 };
    tmp7 = React7(tmp2(14689), obj);
  }
  return tmp7;
};
