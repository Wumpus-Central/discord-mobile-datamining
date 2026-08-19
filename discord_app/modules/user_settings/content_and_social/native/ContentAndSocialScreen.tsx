// === Module 15009: ContentAndSocialSettings ===

// Module 15009 (ContentAndSocialSettings)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import Text from "Text" /* 4734 */;
import _modDef13991 from "module_13991" /* 13991 */;
import useAuthorizedSlayerApplicationsDefault from "useAuthorizedSlayerApplications" /* 15014 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8198 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { marginTop: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default function ContentAndSocialSettings(route) {
  route = route.route;
  const memo = React.useMemo(() => {
    const items = [, ];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = closure_7);
    return items;
  }, []);
  const first = callback(React.useState(() => {
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
  }), 2)[0];
  let items = [first, memo];
  const node = React.useMemo(() => {
    route(first[14]);
    const obj = { defaultIndex: first, settings: memo };
    return obj.createSegmentedControl(obj);
  }, items);
  return callback2(memo(first[16]), { node });
};
export const DiscordPermissionsPage = function DiscordPermissionsPage() {
  let obj = allServersOptionSelected(memo[12]);
  allServersOptionSelected = obj.useAllServersOptionSelected();
  const sensitiveContentFilterHelpArticle = allServersOptionSelected(memo[13]).useSensitiveContentFilterHelpArticle();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle];
  memo = React.useMemo(() => {
    const items = [MobileUserSettings.SENSITIVE_CONTENT_FILTERS];
    const intl = allServersOptionSelected(memo[8]).intl;
    let obj = { learnMoreLink: null };
    let obj2 = sensitiveContentFilterHelpArticle(memo[9]);
    obj[0] = obj2.getArticleURL(sensitiveContentFilterHelpArticle);
    obj[1] = intl.format(allServersOptionSelected(memo[8]).t.dliU4j, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2, subLabel: null };
    items2 = [MobileUserSettings.DIRECT_MESSAGE_SPAM_FILTER];
    const intl2 = allServersOptionSelected(memo[8]).intl;
    obj1 = { appealLink: null };
    let obj5 = sensitiveContentFilterHelpArticle(memo[9]);
    obj1[0] = obj5.getArticleURL(HelpdeskArticles.SAFE_DIRECT_MESSAGING);
    obj[1] = intl2.format(allServersOptionSelected(memo[8]).t.RvjRRI, obj1);
    items1[1] = obj;
    obj2 = { label: null, settings: null, subLabel: null };
    const intl3 = allServersOptionSelected(memo[8]).intl;
    obj2[0] = intl3.string(allServersOptionSelected(memo[8]).t.MDqARb);
    const items3 = [MobileUserSettings.DIRECT_MESSAGE_SAFETY_ALERTS];
    obj2[1] = items3;
    const intl4 = allServersOptionSelected(memo[8]).intl;
    const obj3 = { learnMoreLink: null };
    let obj8 = sensitiveContentFilterHelpArticle(memo[9]);
    obj3[0] = obj8.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
    obj2[2] = intl4.format(allServersOptionSelected(memo[8]).t.lunaRv, obj3);
    items1[2] = obj2;
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl5 = allServersOptionSelected(memo[8]).intl;
    obj4[0] = intl5.string(allServersOptionSelected(memo[8]).t.wCFGLE);
    const items4 = [MobileUserSettings.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
    obj4[1] = items4;
    const intl6 = allServersOptionSelected(memo[8]).intl;
    obj4[2] = intl6.string(allServersOptionSelected(memo[8]).t.R9fXyS);
    items1[3] = obj4;
    const items5 = [...items1];
    const items6 = [, , ];
    ({ SAFETY_GUILD_SETTING_GUILD_SELECT: arr7[0], SAFETY_GUILD_SETTING_DIRECT_MESSAGES: arr7[1], SAFETY_GUILD_SETTING_MESSAGE_REQUESTS: arr7[2] } = MobileUserSettings);
    obj5 = { label: null, settings: null };
    const intl7 = allServersOptionSelected(memo[8]).intl;
    obj5[0] = intl7.string(allServersOptionSelected(memo[8]).t["6x5uWQ"]);
    const items7 = [MobileUserSettings.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
    obj5[1] = items7;
    const items8 = [obj5, , , , , , , , , ];
    const items9 = [MobileUserSettings.ACTIVITY_PRIVACY_DEFAULT_SHARING];
    items8[1] = { settings: items9 };
    const items10 = [MobileUserSettings.NOTIFY_FRIENDS_ON_COME_ONLINE];
    items8[2] = { settings: items10 };
    const obj6 = { label: null, settings: null };
    const intl8 = allServersOptionSelected(memo[8]).intl;
    obj6[0] = intl8.string(allServersOptionSelected(memo[8]).t.MeYuqs);
    let tmp7 = items6;
    if (!allServersOptionSelected) {
      const items11 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(allServersOptionSelected(memo[10]).GUILD_SPECIFIC_SETTINGS, arraySpreadResult);
      tmp7 = items11;
    }
    obj6[1] = tmp7;
    items8[3] = obj6;
    const obj7 = { label: null, settings: null };
    const intl9 = allServersOptionSelected(memo[8]).intl;
    obj7[0] = intl9.string(allServersOptionSelected(memo[8]).t.XlGG9c);
    const items12 = [, , ];
    ({ SAFETY_SEND_FRIEND_REQUESTS_EVERYONE: arr13[0], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr13[1], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS: arr13[2] } = MobileUserSettings);
    obj7[1] = items12;
    items8[4] = obj7;
    const items13 = [MobileUserSettings.FRIEND_REQUEST_NOTES];
    items8[5] = { settings: items13 };
    obj8 = { label: null, settings: null, subLabel: null };
    const intl10 = allServersOptionSelected(memo[8]).intl;
    obj8[0] = intl10.string(allServersOptionSelected(memo[8]).t["3wRort"]);
    const items14 = [, ];
    ({ ACCOUNT_BLOCKED_USERS_V2: arr15[0], ACCOUNT_IGNORED_USERS: arr15[1] } = MobileUserSettings);
    obj8[1] = items14;
    const intl11 = allServersOptionSelected(memo[8]).intl;
    const obj9 = { helpArticle: sensitiveContentFilterHelpArticle(memo[9]).getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE) };
    obj8[2] = intl11.format(allServersOptionSelected(memo[8]).t["0aNQo9"], obj9);
    items8[6] = obj8;
    const obj10 = { label: null, settings: null, subLabel: null };
    const intl12 = allServersOptionSelected(memo[8]).intl;
    obj10[0] = intl12.string(allServersOptionSelected(memo[8]).t.bGSsnc);
    const items15 = [, , ];
    ({ SYNC_CONTACTS: arr16[0], SYNC_CONTACTS_NAME: arr16[1], STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION: arr16[2] } = MobileUserSettings);
    obj10[1] = items15;
    const intl13 = allServersOptionSelected(memo[8]).intl;
    const tmp4Result = sensitiveContentFilterHelpArticle(memo[9]);
    obj10[2] = intl13.format(allServersOptionSelected(memo[8]).t["TWz/S+"], { onClick: allServersOptionSelected(memo[11]).handleOpenLearnMoreLink });
    items8[7] = obj10;
    const obj12 = { label: null, settings: null };
    const intl14 = allServersOptionSelected(memo[8]).intl;
    obj12[0] = intl14.string(allServersOptionSelected(memo[8]).t["aBZ/oQ"]);
    const items16 = [, ];
    ({ DISCOVERY_BY_PHONE: arr17[0], DISCOVERY_BY_EMAIL: arr17[1] } = MobileUserSettings);
    obj12[1] = items16;
    items8[8] = obj12;
    const obj13 = { label: null, settings: null };
    const intl15 = allServersOptionSelected(memo[8]).intl;
    obj13[0] = intl15.string(allServersOptionSelected(memo[8]).t["+KNdnt"]);
    const items17 = [MobileUserSettings.IOS_CONVERSATION_SUGGESTIONS];
    obj13[1] = items17;
    items8[9] = obj13;
    HermesBuiltin.arraySpread(items8, tmp6);
    return items5;
  }, items);
  let items1 = [memo];
  const memo1 = React.useMemo(() => {
    allServersOptionSelected(memo[14]);
    const obj = { sections: memo };
    return obj.createList(obj);
  }, items1);
  obj = { screen: null };
  let obj2 = allServersOptionSelected(memo[13]);
  obj[0] = allServersOptionSelected(memo[15]).SettingsScreen.CONTENT_AND_SOCIAL;
  let items2 = [callback2(sensitiveContentFilterHelpArticle(memo[15]), obj), callback2(sensitiveContentFilterHelpArticle(memo[16]), { node: memo1 })];
  obj[0] = items2;
  return callback3(closure_10, obj);
};
export const ConnectedGamesPage = function ConnectedGamesPage() {
  const tmp = callback4();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  if (showLoadingIndicator) {
    let obj = { style: null };
    obj[0] = tmp.loadingIndicator;
    let tmp7 = callback2(closure_5, obj);
  } else if (0 === slayerSdkApplications.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.emptyContainer;
    obj1 = { variant: "text-md/semibold", color: "text-strong", children: null };
    let intl = getSystemLocale.intl;
    obj1[2] = intl.string(getSystemLocale.t["+0U77d"]);
    let items = [callback2(Text.Text, obj1), ];
    let obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = getSystemLocale.intl;
    const obj3 = { helpdeskArticle: null };
    obj3[0] = combinedDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    obj2[2] = intl2.format(getSystemLocale.t.V8wClM, obj3);
    items[1] = callback2(Text.Text, obj2);
    obj[1] = items;
    tmp7 = callback3(closure_6, obj);
    const tmp2Result = combinedDefault;
  } else {
    obj = { node: null };
    obj[0] = tmp5;
    tmp7 = callback2(_modDef13991, obj);
  }
  return tmp7;
};