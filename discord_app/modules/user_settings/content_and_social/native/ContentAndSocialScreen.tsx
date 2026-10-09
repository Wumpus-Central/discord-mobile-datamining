// === Module 16188: ContentAndSocialScreen ===

// Module 16188 (ContentAndSocialScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import Text_Text from "Text/Text" /* 5087 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6993 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12358 */;
import SettingLayoutDefault from "SettingLayout" /* 14883 */;
import SettingsScreenNotices from "SettingsScreenNotices" /* 15010 */;
import TinyBroncoSettingsNoticesLazy from "TinyBroncoSettingsNoticesLazy" /* 15012 */;
import SafetyGuildSettingGuildSelect from "SafetyGuildSettingGuildSelect" /* 16189 */;
import useUserSafetySettingsSelectedGuildId from "useUserSafetySettingsSelectedGuildId" /* 16194 */;
import useAuthorizedSlayerApplicationsDefault from "useAuthorizedSlayerApplications" /* 16195 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const SettingsScreenNoticesDefault = SettingsScreenNotices;

require = fn;
function getContentCategory(TIGGER_PAWTECT_LEARN_MORE) {
  const obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.SENSITIVE_CONTENT_FILTERS];
  obj.settings = items;
  const intl = util.intl;
  const obj2 = { learnMoreLink: HelpdeskUtilsDefault.getArticleURL(TIGGER_PAWTECT_LEARN_MORE) };
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
  return items1;
}
function getSocialPermissions(allServersSelected) {
  allServersSelected = allServersSelected.allServersSelected;
  const items = [, , ];
  ({ SAFETY_GUILD_SETTING_GUILD_SELECT: arr[0], SAFETY_GUILD_SETTING_DIRECT_MESSAGES: arr[1], SAFETY_GUILD_SETTING_MESSAGE_REQUESTS: arr[2] } = MobileUserSettings);
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["6x5uWQ"]);
  const items1 = [MobileUserSettings.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
  obj.settings = items1;
  const items2 = [obj, , , , , , , , , , ];
  const obj2 = { settings: null };
  const items3 = [MobileUserSettings.ACTIVITY_PRIVACY_DEFAULT_SHARING];
  obj2.settings = items3;
  items2[1] = obj2;
  const obj3 = { settings: null };
  const items4 = [MobileUserSettings.NOTIFY_FRIENDS_ON_COME_ONLINE];
  obj3.settings = items4;
  items2[2] = obj3;
  const obj4 = { settings: null };
  const items5 = [MobileUserSettings.NOTIFY_SERVER_MEMBERS_ON_GO_LIVE];
  obj4.settings = items5;
  items2[3] = obj4;
  const obj5 = { label: null, settings: null, subLabel: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.MeYuqs);
  let tmp4 = items;
  if (!allServersSelected) {
    const items6 = [];
    HermesBuiltin.arraySpread(SafetyGuildSettingGuildSelect.GUILD_SPECIFIC_SETTINGS, HermesBuiltin.arraySpread(items, 0));
    tmp4 = items6;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
  }
  obj5.settings = tmp4;
  let tmp10;
  if (allServersSelected) {
    if (allServersSelected.showMessageRequestsNotice) {
      tmp10 = options(TinyBroncoSettingsNoticesLazy.MessageRequestsNotice, {});
    }
  }
  obj5.subLabel = tmp10;
  items2[4] = obj5;
  const obj6 = { label: null, settings: null };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t.XlGG9c);
  const items7 = [, , ];
  ({ SAFETY_SEND_FRIEND_REQUESTS_EVERYONE: arr8[0], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr8[1], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS: arr8[2] } = MobileUserSettings);
  obj6.settings = items7;
  items2[5] = obj6;
  const obj7 = { settings: null };
  const items8 = [MobileUserSettings.FRIEND_REQUEST_NOTES];
  obj7.settings = items8;
  items2[6] = obj7;
  const obj8 = { label: null, settings: null, subLabel: null };
  const intl4 = util.intl;
  obj8.label = intl4.string(util.t["3wRort"]);
  const items9 = [, ];
  ({ ACCOUNT_BLOCKED_USERS_V2: arr10[0], ACCOUNT_IGNORED_USERS: arr10[1] } = MobileUserSettings);
  obj8.settings = items9;
  const intl5 = util.intl;
  const obj9 = { helpArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE) };
  obj8.subLabel = intl5.format(util.t["0aNQo9"], obj9);
  items2[7] = obj8;
  const obj11 = { label: null, settings: null, subLabel: null };
  const intl6 = util.intl;
  obj11.label = intl6.string(util.t.bGSsnc);
  const items10 = [, , ];
  ({ SYNC_CONTACTS: arr11[0], SYNC_CONTACTS_NAME: arr11[1], STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION: arr11[2] } = MobileUserSettings);
  obj11.settings = items10;
  const intl7 = util.intl;
  obj11.subLabel = intl7.format(util.t["TWz/S+"], { onClick: ContactSyncUtils.handleOpenLearnMoreLink });
  items2[8] = obj11;
  const obj13 = { label: null, settings: null };
  const intl8 = util.intl;
  obj13.label = intl8.string(util.t["aBZ/oQ"]);
  const items11 = [, ];
  ({ DISCOVERY_BY_PHONE: arr12[0], DISCOVERY_BY_EMAIL: arr12[1] } = MobileUserSettings);
  obj13.settings = items11;
  items2[9] = obj13;
  const obj14 = { label: null, settings: null };
  const intl9 = util.intl;
  obj14.label = intl9.string(util.t["+KNdnt"]);
  const items12 = [MobileUserSettings.IOS_CONVERSATION_SUGGESTIONS];
  obj14.settings = items12;
  items2[10] = obj14;
  return items2;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MobileUserSettings = fn(7974).MobileUserSettings;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { loadingIndicator: { marginTop: nativeDefault.space.PX_32 }, emptyContainer: null };
let obj3 = { marginTop: nativeDefault.space.PX_32 };
obj2.emptyContainer = { flex: 1, gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function DiscordPermissionsPage() {
  const cResult = c.c(9);
  const allServersOptionSelected = useUserSafetySettingsSelectedGuildId.useAllServersOptionSelected();
  const sensitiveContentFilterHelpArticle = SensitiveMediaGoreRedactionSettingsUtils.useSensitiveContentFilterHelpArticle();
  const tinyBroncoMessageRequestsNoticeVariant = TinyBroncoSettingsNoticesLazy.useTinyBroncoMessageRequestsNoticeVariant();
  if (cResult[0] === allServersOptionSelected) {
    if (cResult[1] === sensitiveContentFilterHelpArticle) {
      if (cResult[2] === tinyBroncoMessageRequestsNoticeVariant) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        const obj5 = { sections: tmp7 };
        const list = SettingBuilders.createList(obj5);
        cResult[4] = tmp7;
        cResult[5] = list;
        let tmp8 = list;
        const tmpResult = SettingBuilders;
      } else {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { screen: SettingsScreenNotices.SettingsScreen.CONTENT_AND_SOCIAL };
        const tmp15 = options(SettingsScreenNoticesDefault, obj6);
        cResult[6] = tmp15;
        let tmp11 = tmp15;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp8) {
        const obj7 = { children: null };
        const items = [tmp11, ];
        const obj8 = { node: tmp8 };
        items[1] = options(SettingLayoutDefault, obj8);
        obj7.children = items;
        const tmp21 = closure_1_11(collapsed, obj7);
        cResult[7] = tmp8;
        cResult[8] = tmp21;
        let tmp16 = tmp21;
      } else {
        tmp16 = cResult[8];
      }
      return tmp16;
    }
  }
  const items1 = [...getContentCategory(sensitiveContentFilterHelpArticle), ...getSocialPermissions(obj9)];
  cResult[0] = allServersOptionSelected;
  cResult[1] = sensitiveContentFilterHelpArticle;
  cResult[2] = tinyBroncoMessageRequestsNoticeVariant;
  cResult[3] = items1;
  tmp7 = items1;
  obj9 = { allServersSelected: allServersOptionSelected, showMessageRequestsNotice: null != tinyBroncoMessageRequestsNoticeVariant };
}) : (function DiscordPermissionsPage() {
  allServersOptionSelected = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[15]).useAllServersOptionSelected();
  const obj = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[15]);
  const sensitiveContentFilterHelpArticle = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[16]).useSensitiveContentFilterHelpArticle();
  const obj2 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[16]);
  tinyBroncoMessageRequestsNoticeVariant = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[11]).useTinyBroncoMessageRequestsNoticeVariant();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle, tinyBroncoMessageRequestsNoticeVariant];
  const memo = noop.useMemo(() => {
    const items = [...getContentCategory(sensitiveContentFilterHelpArticle), ...getSocialPermissions(obj)];
    return items;
  }, items);
  const items1 = [memo];
  const obj4 = { children: null };
  const memo1 = noop.useMemo(() => SettingBuilders.createList({ sections: memo }), items1);
  const obj5 = { screen: null };
  const obj3 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[11]);
  obj5.screen = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[18]).SettingsScreen.CONTENT_AND_SOCIAL;
  const items2 = [closure_9(sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[18]), obj5), closure_9(sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[19]), { node: memo1 })];
  obj4.children = items2;
  return closure_11(closure_10, obj4);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedGamesPage() {
  const cResult = c.c(9);
  let loadingIndicator = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: null };
    const obj3 = { settings: null, subLabel: null };
    const items = [MobileUserSettings.ALLOW_GAME_FRIEND_DMS];
    obj3.settings = items;
    const intl = util.intl;
    const obj4 = { helpdeskArticle: null };
    const tmpResult = SettingBuilders;
    obj4.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_GAME_FRIENDS);
    obj3.subLabel = intl.format(util.t.oZsHTD, obj4);
    const items1 = [obj3, ];
    const obj5 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.IN_GAME_DMS];
    obj5.settings = items2;
    const intl2 = util.intl;
    obj5.subLabel = intl2.string(util.t["4NN4+/"]);
    items1[1] = obj5;
    obj2.sections = items1;
    const list = tmpResult.createList(obj2);
    cResult[0] = list;
    let first = list;
    const tmp4Result = HelpdeskUtilsDefault;
  } else {
    first = cResult[0];
  }
  if (showLoadingIndicator) {
    if (cResult[1] !== loadingIndicator.loadingIndicator) {
      const obj6 = { style: loadingIndicator.loadingIndicator };
      const tmp28 = options(hasOwnProperty, obj6);
      loadingIndicator = loadingIndicator.loadingIndicator;
      cResult[1] = loadingIndicator;
      cResult[2] = tmp28;
    }
  } else if (0 === slayerSdkApplications.length) {
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-md/semibold", color: "text-strong", children: null };
      const intl3 = util.intl;
      obj7.children = intl3.string(util.t["+0U77d"]);
      const tmp15 = options(Text_Text.Text, obj7);
      cResult[3] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[3];
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = util.intl;
      const obj9 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
      obj8.children = intl4.format(util.t.V8wClM, obj9);
      const tmp19 = options(Text_Text.Text, obj8);
      cResult[4] = tmp19;
      let tmp16 = tmp19;
      const tmp4Result2 = HelpdeskUtilsDefault;
    } else {
      tmp16 = cResult[4];
    }
    if (cResult[5] === loadingIndicator.emptyContainer) {
    }
    const obj10 = { style: loadingIndicator.emptyContainer, children: null };
    const items3 = [tmp13, tmp16];
    obj10.children = items3;
    const tmp23 = closure_1_11(timestampProducer, obj10);
    cResult[5] = loadingIndicator.emptyContainer;
    cResult[6] = tmp16;
    cResult[7] = tmp23;
  } else {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = { node: first };
      const tmp12 = options(SettingLayoutDefault, obj11);
      cResult[8] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[8];
    }
    return tmp10;
  }
  const tmp5 = useAuthorizedSlayerApplicationsDefault();
}) : (function ConnectedGamesPage() {
  const tmp = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  if (showLoadingIndicator) {
    let obj2 = { style: tmp.loadingIndicator };
    let tmp7 = options(hasOwnProperty, obj2);
  } else if (0 === slayerSdkApplications.length) {
    let obj3 = { style: tmp.emptyContainer, children: null };
    let obj4 = { variant: "text-md/semibold", color: "text-strong", children: null };
    let intl = util.intl;
    obj4.children = intl.string(util.t["+0U77d"]);
    let items = [options(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = util.intl;
    let obj6 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    obj5.children = intl2.format(util.t.V8wClM, obj6);
    items[1] = options(Text_Text.Text, obj5);
    obj3.children = items;
    tmp7 = closure_1_11(timestampProducer, obj3);
    const tmp2Result = HelpdeskUtilsDefault;
  } else {
    let obj = { node: tmp5 };
    tmp7 = options(SettingLayoutDefault, obj);
  }
  return tmp7;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContentAndSocialSettings(route) {
  const cResult = route(576).c(7);
  route = route.route;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [, ];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = MobileUserSettings);
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let tab;
  if (route != null) {
    let params = route.params;
    if (params != null) {
      tab = params.tab;
    }
  }
  if (cResult[1] !== tab) {
    let tab1;
    if (route != null) {
      const params2 = route.params;
      if (params2 != null) {
        tab1 = params2.tab;
      }
    }
    const fn = function c() {
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
    };
    cResult[1] = tab1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const first1 = _slicedToArray(noop.useState(tmp7), 1)[0];
  if (cResult[3] !== first1) {
    const obj2 = { defaultIndex: first1, settings: first };
    const segmentedControl = route(10629).createSegmentedControl(obj2);
    cResult[3] = first1;
    cResult[4] = segmentedControl;
    let tmp10 = segmentedControl;
    const tmpResult = route(10629);
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp10) {
    const obj3 = { node: tmp10 };
    const tmp15 = closure_9(SettingLayoutDefault, obj3);
    cResult[5] = tmp10;
    cResult[6] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[6];
  }
  return tmp12;
}) : (function ContentAndSocialSettings(route) {
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
  return closure_9(memo(defaultIndex[19]), { node });
});
export const DiscordPermissionsPage = tmp4;
export const ConnectedGamesPage = tmp5;