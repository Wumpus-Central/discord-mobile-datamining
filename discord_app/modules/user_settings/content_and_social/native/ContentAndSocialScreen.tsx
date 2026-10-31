// === Module 17896: ContentAndSocialScreen ===

// Module 17896 (ContentAndSocialScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import Text_Text from "Text/Text" /* 5624 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14236 */;
import SettingLayoutDefault from "SettingLayout" /* 16575 */;
import TinyBroncoSettingsNoticesLazy from "TinyBroncoSettingsNoticesLazy" /* 16706 */;
import SafetyGuildSettingGuildSelect from "SafetyGuildSettingGuildSelect" /* 17897 */;
import useAuthorizedSlayerApplicationsDefault from "useAuthorizedSlayerApplications" /* 17903 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MobileUserSettings = fn(8432).MobileUserSettings;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { loadingIndicator: { marginTop: nativeDefault.space.PX_32 }, emptyContainer: null };
let obj3 = { marginTop: nativeDefault.space.PX_32 };
obj2.emptyContainer = { flex: 1, gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default function ContentAndSocialSettings(route) {
  route = route.route;
  const memo = noop.useMemo(() => {
    const items = [, ];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = MobileUserSettings);
    return items;
  }, []);
  const defaultIndex = _slicedToArray(noop.useState(() => {
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
  let items = [defaultIndex, memo];
  const node = noop.useMemo(() => SettingBuilders.createSegmentedControl({ defaultIndex, settings: memo }), items);
  return closure_9(memo(defaultIndex[17]), { node });
};
export function DiscordPermissionsPage() {
  allServersOptionSelected = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[13]).useAllServersOptionSelected();
  let obj = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[13]);
  const sensitiveContentFilterHelpArticle = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[14]).useSensitiveContentFilterHelpArticle();
  let obj2 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[14]);
  tinyBroncoMessageRequestsNoticeVariant = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[11]).useTinyBroncoMessageRequestsNoticeVariant();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle, tinyBroncoMessageRequestsNoticeVariant];
  const memo = noop.useMemo(() => {
    const obj = { settings: null, subLabel: null };
    const items = [MobileUserSettings.SENSITIVE_CONTENT_FILTERS];
    obj.settings = items;
    const intl = util.intl;
    const obj2 = { learnMoreLink: HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle) };
    obj.subLabel = intl.format(util.t.dliU4j, obj2);
    const items1 = [obj, , , ];
    const obj4 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.DIRECT_MESSAGE_SPAM_FILTER];
    obj4.settings = items2;
    const intl2 = util.intl;
    const obj5 = { appealLink: null };
    obj5.appealLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SAFE_DIRECT_MESSAGING);
    obj4.subLabel = intl2.format(util.t.RvjRRI, obj5);
    items1[1] = obj4;
    const obj7 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj7.label = intl3.string(util.t.MDqARb);
    const items3 = [MobileUserSettings.DIRECT_MESSAGE_SAFETY_ALERTS];
    obj7.settings = items3;
    const intl4 = util.intl;
    const obj8 = { learnMoreLink: null };
    obj8.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
    obj7.subLabel = intl4.format(util.t.lunaRv, obj8);
    items1[2] = obj7;
    const obj10 = { label: null, settings: null, subLabel: null };
    const intl5 = util.intl;
    obj10.label = intl5.string(util.t.wCFGLE);
    const items4 = [MobileUserSettings.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
    obj10.settings = items4;
    const intl6 = util.intl;
    obj10.subLabel = intl6.string(util.t.R9fXyS);
    items1[3] = obj10;
    const items5 = [...items1];
    const items6 = [, , ];
    ({ SAFETY_GUILD_SETTING_GUILD_SELECT: arr7[0], SAFETY_GUILD_SETTING_DIRECT_MESSAGES: arr7[1], SAFETY_GUILD_SETTING_MESSAGE_REQUESTS: arr7[2] } = MobileUserSettings);
    const obj11 = { label: null, settings: null };
    const intl7 = util.intl;
    obj11.label = intl7.string(util.t["6x5uWQ"]);
    const items7 = [MobileUserSettings.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
    obj11.settings = items7;
    const items8 = [obj11, , , , , , , , , , ];
    const obj12 = { settings: null };
    const items9 = [MobileUserSettings.ACTIVITY_PRIVACY_DEFAULT_SHARING];
    obj12.settings = items9;
    items8[1] = obj12;
    const obj13 = { settings: null };
    const items10 = [MobileUserSettings.NOTIFY_FRIENDS_ON_COME_ONLINE];
    obj13.settings = items10;
    items8[2] = obj13;
    const obj14 = { settings: null };
    const items11 = [MobileUserSettings.NOTIFY_SERVER_MEMBERS_ON_GO_LIVE];
    obj14.settings = items11;
    items8[3] = obj14;
    const obj15 = { label: null, settings: null, subLabel: null };
    const intl8 = util.intl;
    obj15.label = intl8.string(util.t.MeYuqs);
    let tmp9 = items6;
    if (!allServersOptionSelected) {
      const items12 = [];
      HermesBuiltin.arraySpread(SafetyGuildSettingGuildSelect.GUILD_SPECIFIC_SETTINGS, HermesBuiltin.arraySpread(items6, 0));
      tmp9 = items12;
      const arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
    }
    obj15.settings = tmp9;
    let tmp15;
    if (allServersOptionSelected) {
      if (tmp8) {
        tmp15 = React7(TinyBroncoSettingsNoticesLazy.MessageRequestsNotice, {});
      }
    }
    obj15.subLabel = tmp15;
    items8[4] = obj15;
    const obj16 = { label: null, settings: null };
    const intl9 = util.intl;
    obj16.label = intl9.string(util.t.XlGG9c);
    const items13 = [, , ];
    ({ SAFETY_SEND_FRIEND_REQUESTS_EVERYONE: arr14[0], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr14[1], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS: arr14[2] } = MobileUserSettings);
    obj16.settings = items13;
    items8[5] = obj16;
    const obj17 = { settings: null };
    const items14 = [MobileUserSettings.FRIEND_REQUEST_NOTES];
    obj17.settings = items14;
    items8[6] = obj17;
    const obj18 = { label: null, settings: null, subLabel: null };
    const intl10 = util.intl;
    obj18.label = intl10.string(util.t["3wRort"]);
    const items15 = [, ];
    ({ ACCOUNT_BLOCKED_USERS_V2: arr16[0], ACCOUNT_IGNORED_USERS: arr16[1] } = MobileUserSettings);
    obj18.settings = items15;
    const intl11 = util.intl;
    const obj19 = { helpArticle: null };
    tmp8 = null != tinyBroncoMessageRequestsNoticeVariant;
    obj19.helpArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE);
    obj18.subLabel = intl11.format(util.t["0aNQo9"], obj19);
    items8[7] = obj18;
    const obj20 = { label: null, settings: null, subLabel: null };
    const intl12 = util.intl;
    obj20.label = intl12.string(util.t.bGSsnc);
    const items16 = [, , ];
    ({ SYNC_CONTACTS: arr17[0], SYNC_CONTACTS_NAME: arr17[1], STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION: arr17[2] } = MobileUserSettings);
    obj20.settings = items16;
    const intl13 = util.intl;
    const tmp4Result = HelpdeskUtilsDefault;
    obj20.subLabel = intl13.format(util.t["TWz/S+"], { onClick: ContactSyncUtils.handleOpenLearnMoreLink });
    items8[8] = obj20;
    const obj22 = { label: null, settings: null };
    const intl14 = util.intl;
    obj22.label = intl14.string(util.t["aBZ/oQ"]);
    const items17 = [, ];
    ({ DISCOVERY_BY_PHONE: arr18[0], DISCOVERY_BY_EMAIL: arr18[1] } = MobileUserSettings);
    obj22.settings = items17;
    items8[9] = obj22;
    const obj23 = { label: null, settings: null };
    const intl15 = util.intl;
    obj23.label = intl15.string(util.t["+KNdnt"]);
    const items18 = [MobileUserSettings.IOS_CONVERSATION_SUGGESTIONS];
    obj23.settings = items18;
    items8[10] = obj23;
    HermesBuiltin.arraySpread(items8, tmp6);
    return items5;
  }, items);
  let items1 = [memo];
  let obj4 = { children: null };
  const memo1 = noop.useMemo(() => SettingBuilders.createList({ sections: memo }), items1);
  let obj5 = { screen: null };
  let obj3 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[11]);
  obj5.screen = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[16]).SettingsScreen.CONTENT_AND_SOCIAL;
  let items2 = [closure_9(sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[16]), obj5), closure_9(sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[17]), { node: memo1 })];
  obj4.children = items2;
  return closure_11(closure_10, obj4);
}
export function ConnectedGamesPage() {
  const tmp = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  if (showLoadingIndicator) {
    let obj2 = { style: tmp.loadingIndicator };
    let tmp7 = React7(hasOwnProperty, obj2);
  } else if (0 === slayerSdkApplications.length) {
    let obj3 = { style: tmp.emptyContainer, children: null };
    let obj4 = { variant: "text-md/semibold", color: "text-strong", children: null };
    let intl = util.intl;
    obj4.children = intl.string(util.t["+0U77d"]);
    let items = [React7(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = util.intl;
    let obj6 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    obj5.children = intl2.format(util.t.V8wClM, obj6);
    items[1] = React7(Text_Text.Text, obj5);
    obj3.children = items;
    tmp7 = closure_1_11(timestampProducer, obj3);
    const tmp2Result = HelpdeskUtilsDefault;
  } else {
    let obj = { node: tmp5 };
    tmp7 = React7(SettingLayoutDefault, obj);
  }
  return tmp7;
}