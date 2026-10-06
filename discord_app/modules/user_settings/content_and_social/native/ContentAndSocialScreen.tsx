// === Module 15813: ContentAndSocialScreen ===

// Module 15813 (ContentAndSocialScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import Text_Text from "Text/Text" /* 4892 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6814 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12344 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import SettingsScreenNotices from "SettingsScreenNotices" /* 14637 */;
import TinyBroncoSettingsNoticesLazy from "TinyBroncoSettingsNoticesLazy" /* 14639 */;
import SafetyGuildSettingGuildSelect from "SafetyGuildSettingGuildSelect" /* 15814 */;
import useUserSafetySettingsSelectedGuildId from "useUserSafetySettingsSelectedGuildId" /* 15819 */;
import useAuthorizedSlayerApplicationsDefault from "useAuthorizedSlayerApplications" /* 15820 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SettingsScreenNoticesDefault = SettingsScreenNotices;
let route;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function getContentCategory(TIGGER_PAWTECT_LEARN_MORE) {
  let RvjRRI;
  let dliU4j;
  let format;
  let format2;
  let format3;
  let intl3;
  let intl5;
  let intl6;
  let items;
  let items2;
  let items3;
  let items4;
  let lunaRv;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  const obj = { settings: items, subLabel: format(dliU4j, obj2) };
  items = [MobileUserSettings.SENSITIVE_CONTENT_FILTERS];
  const intl = intl10.intl;
  format = intl.format;
  obj2 = { learnMoreLink: obj3.getArticleURL(TIGGER_PAWTECT_LEARN_MORE) };
  dliU4j = intl10.t.dliU4j;
  const items1 = [obj, , , ];
  obj3 = HelpdeskUtilsDefault;
  const obj4 = { settings: items2, subLabel: format2(RvjRRI, obj5) };
  items2 = [MobileUserSettings.DIRECT_MESSAGE_SPAM_FILTER];
  const intl2 = intl10.intl;
  format2 = intl2.format;
  obj5 = { appealLink: obj6.getArticleURL(HelpdeskArticles.SAFE_DIRECT_MESSAGING) };
  RvjRRI = intl10.t.RvjRRI;
  items1[1] = obj4;
  obj6 = HelpdeskUtilsDefault;
  const obj7 = { label: intl3.string(intl10.t.MDqARb), settings: items3, subLabel: format3(lunaRv, obj8) };
  intl3 = intl10.intl;
  items3 = [MobileUserSettings.DIRECT_MESSAGE_SAFETY_ALERTS];
  const intl4 = intl10.intl;
  format3 = intl4.format;
  obj8 = { learnMoreLink: obj9.getArticleURL(HelpdeskArticles.SAFETY_ALERTS) };
  lunaRv = intl10.t.lunaRv;
  items1[2] = obj7;
  obj9 = HelpdeskUtilsDefault;
  const obj10 = { label: intl5.string(intl10.t.wCFGLE), settings: items4, subLabel: intl6.string(intl10.t.R9fXyS) };
  intl5 = intl10.intl;
  items4 = [MobileUserSettings.ANDROID_VIEW_NSFW_DM_COMMANDS_V2];
  intl6 = intl10.intl;
  items1[3] = obj10;
  return items1;
}
function getSocialPermissions(allServersSelected) {
  let format;
  let format2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl8;
  let intl9;
  let items1;
  let items10;
  let items11;
  let items12;
  let items3;
  let items4;
  let items5;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj12;
  let obj9;
  let prop;
  let tmp11;
  let tmp5;
  let v0aNQo9;
  allServersSelected = allServersSelected.allServersSelected;
  const items = [, , ];
  ({ SAFETY_GUILD_SETTING_GUILD_SELECT: arr[0], SAFETY_GUILD_SETTING_DIRECT_MESSAGES: arr[1], SAFETY_GUILD_SETTING_MESSAGE_REQUESTS: arr[2] } = MobileUserSettings);
  const showMessageRequestsNotice = allServersSelected.showMessageRequestsNotice;
  const obj = { label: intl.string(intl10.t["6x5uWQ"]), settings: items1 };
  intl = intl10.intl;
  items1 = [MobileUserSettings.ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY];
  const items2 = [obj, , , , , , , , , , ];
  const obj2 = { settings: items3 };
  items3 = [MobileUserSettings.ACTIVITY_PRIVACY_DEFAULT_SHARING];
  items2[1] = obj2;
  const obj3 = { settings: items4 };
  items4 = [MobileUserSettings.NOTIFY_FRIENDS_ON_COME_ONLINE];
  items2[2] = obj3;
  const obj4 = { settings: items5 };
  items5 = [MobileUserSettings.NOTIFY_SERVER_MEMBERS_ON_GO_LIVE];
  items2[3] = obj4;
  const obj5 = { label: intl2.string(intl10.t.MeYuqs), settings: tmp5, subLabel: tmp11 };
  intl2 = intl10.intl;
  tmp5 = items;
  if (!allServersSelected) {
    const items6 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items6, items, 0);
    HermesBuiltin.arraySpread(items6, SafetyGuildSettingGuildSelect.GUILD_SPECIFIC_SETTINGS, arraySpreadResult);
    tmp5 = items6;
  }
  tmp11 = undefined;
  if (allServersSelected) {
    if (showMessageRequestsNotice) {
      tmp11 = React4(TinyBroncoSettingsNoticesLazy.MessageRequestsNotice, {});
    }
  }
  items2[4] = obj5;
  const obj6 = { label: intl3.string(intl10.t.XlGG9c), settings: items7 };
  intl3 = intl10.intl;
  items7 = [, , ];
  ({ SAFETY_SEND_FRIEND_REQUESTS_EVERYONE: arr8[0], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr8[1], SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS: arr8[2] } = MobileUserSettings);
  items2[5] = obj6;
  const obj7 = { settings: items8 };
  items8 = [MobileUserSettings.FRIEND_REQUEST_NOTES];
  items2[6] = obj7;
  const obj8 = { label: intl4.string(intl10.t["3wRort"]), settings: items9, subLabel: format(v0aNQo9, obj9) };
  intl4 = intl10.intl;
  items9 = [, ];
  ({ ACCOUNT_BLOCKED_USERS_V2: arr10[0], ACCOUNT_IGNORED_USERS: arr10[1] } = MobileUserSettings);
  const intl5 = intl10.intl;
  format = intl5.format;
  obj9 = { helpArticle: obj10.getArticleURL(HelpdeskArticles.STEALTH_REMEDIATION_FEATURE_GUIDE) };
  v0aNQo9 = intl10.t["0aNQo9"];
  items2[7] = obj8;
  obj10 = HelpdeskUtilsDefault;
  const obj11 = { label: intl6.string(intl10.t.bGSsnc), settings: items10, subLabel: format2(prop, obj12) };
  intl6 = intl10.intl;
  items10 = [, , ];
  ({ SYNC_CONTACTS: arr11[0], SYNC_CONTACTS_NAME: arr11[1], STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION: arr11[2] } = MobileUserSettings);
  const intl7 = intl10.intl;
  format2 = intl7.format;
  obj12 = { onClick: ContactSyncUtils.handleOpenLearnMoreLink };
  prop = intl10.t["TWz/S+"];
  items2[8] = obj11;
  const obj13 = { label: intl8.string(intl10.t["aBZ/oQ"]), settings: items11 };
  intl8 = intl10.intl;
  items11 = [, ];
  ({ DISCOVERY_BY_PHONE: arr12[0], DISCOVERY_BY_EMAIL: arr12[1] } = MobileUserSettings);
  items2[9] = obj13;
  const obj14 = { label: intl9.string(intl10.t["+KNdnt"]), settings: items12 };
  intl9 = intl10.intl;
  items12 = [MobileUserSettings.IOS_CONVERSATION_SUGGESTIONS];
  items2[10] = obj14;
  return items2;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingIndicator: obj2, emptyContainer: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let obj9;
  const obj = react2;
  const cResult = obj.c(9);
  const obj2 = useUserSafetySettingsSelectedGuildId;
  const allServersOptionSelected = obj2.useAllServersOptionSelected();
  const obj3 = SensitiveMediaGoreRedactionSettingsUtils;
  const sensitiveContentFilterHelpArticle = obj3.useSensitiveContentFilterHelpArticle();
  const obj4 = TinyBroncoSettingsNoticesLazy;
  const tinyBroncoMessageRequestsNoticeVariant = obj4.useTinyBroncoMessageRequestsNoticeVariant();
  if (cResult[0] === allServersOptionSelected) {
    if (cResult[1] === sensitiveContentFilterHelpArticle) {
      let tmp7;
      let tmp8;
      let tmp11;
      let tmp16;
      if (cResult[2] === tinyBroncoMessageRequestsNoticeVariant) {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        const obj5 = { sections: tmp7 };
        const tmpResult = SettingBuilders;
        const list = tmpResult.createList(obj5);
        cResult[4] = tmp7;
        cResult[5] = list;
        tmp8 = list;
      } else {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { screen: SettingsScreenNotices.SettingsScreen.CONTENT_AND_SOCIAL };
        const tmp14 = SettingsScreenNoticesDefault;
        const tmp15 = React4(tmp14, obj6);
        cResult[6] = tmp15;
        tmp11 = tmp15;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp8) {
        const obj7 = { children: items };
        items = [tmp11, ];
        const obj8 = { node: tmp8 };
        items[1] = React4(SettingLayoutDefault, obj8);
        const tmp21 = unpackModuleId(authStore, obj7);
        cResult[7] = tmp8;
        cResult[8] = tmp21;
        tmp16 = tmp21;
      } else {
        tmp16 = cResult[8];
      }
      return tmp16;
    }
  }
  const items1 = [...getContentCategory(sensitiveContentFilterHelpArticle), ...getSocialPermissions(obj9)];
  obj9 = { allServersSelected: allServersOptionSelected, showMessageRequestsNotice: null != tinyBroncoMessageRequestsNoticeVariant };
  cResult[0] = allServersOptionSelected;
  cResult[1] = sensitiveContentFilterHelpArticle;
  cResult[2] = tinyBroncoMessageRequestsNoticeVariant;
  cResult[3] = items1;
  tmp7 = items1;
}) : (() => {
  let allServersOptionSelected;
  let items2;
  let tinyBroncoMessageRequestsNoticeVariant;
  let obj = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[15]);
  allServersOptionSelected = obj.useAllServersOptionSelected();
  let obj2 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[16]);
  const sensitiveContentFilterHelpArticle = obj2.useSensitiveContentFilterHelpArticle();
  const obj3 = allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[11]);
  tinyBroncoMessageRequestsNoticeVariant = obj3.useTinyBroncoMessageRequestsNoticeVariant();
  let items = [allServersOptionSelected, sensitiveContentFilterHelpArticle, tinyBroncoMessageRequestsNoticeVariant];
  const memo = react.useMemo(() => {
    const items = [...getContentCategory(sensitiveContentFilterHelpArticle), ...getSocialPermissions(obj)];
    return items;
  }, items);
  const items1 = [memo];
  const obj4 = { children: items2 };
  const memo1 = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: memo };
    return obj.createList(obj2);
  }, items1);
  const obj5 = { screen: allServersOptionSelected(tinyBroncoMessageRequestsNoticeVariant[18]).SettingsScreen.CONTENT_AND_SOCIAL };
  const tmp6 = sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[18]);
  items2 = [closure_9(tmp6, obj5), closure_9(sensitiveContentFilterHelpArticle(tinyBroncoMessageRequestsNoticeVariant[19]), { node: memo1 })];
  return closure_11(closure_10, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let V8wClM;
  let first;
  let format;
  let format2;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let oZsHTD;
  let obj4;
  let obj9;
  let showLoadingIndicator;
  let slayerSdkApplications;
  let tmp12;
  let tmp5Result;
  let tmp5Result2;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  useAuthorizedSlayerApplicationsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: items1 };
    const obj3 = { settings: items, subLabel: format(oZsHTD, obj4) };
    items = [MobileUserSettings.ALLOW_GAME_FRIEND_DMS];
    const createList = SettingBuilders.createList;
    SettingBuilders;
    const intl = intl10.intl;
    format = intl.format;
    obj4 = { helpdeskArticle: tmp5Result.getArticleURL(HelpdeskArticles.SLAYER_GAME_FRIENDS) };
    oZsHTD = intl10.t.oZsHTD;
    items1 = [obj3, ];
    tmp5Result = HelpdeskUtilsDefault;
    const obj5 = { settings: items2, subLabel: intl2.string(intl10.t["4NN4+/"]) };
    items2 = [MobileUserSettings.IN_GAME_DMS];
    intl2 = intl10.intl;
    items1[1] = obj5;
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (showLoadingIndicator) {
    let tmp26;
    if (cResult[1] !== tmp4.loadingIndicator) {
      const obj6 = { style: tmp4.loadingIndicator };
      const tmp29 = React4(hasOwnProperty, obj6);
      cResult[1] = tmp4.loadingIndicator;
      cResult[2] = tmp29;
      tmp26 = tmp29;
    } else {
      tmp26 = cResult[2];
    }
    tmp12 = tmp26;
  } else if (0 === slayerSdkApplications.length) {
    let tmp15;
    let tmp18;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-md/semibold", color: "text-strong", children: intl3.string(intl10.t["+0U77d"]) };
      const Text = Text_Text.Text;
      intl3 = intl10.intl;
      const tmp17 = React4(Text, obj7);
      cResult[3] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[3];
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { variant: "text-sm/normal", color: "text-muted", children: format2(V8wClM, obj9) };
      const Text2 = Text_Text.Text;
      const intl4 = intl10.intl;
      format2 = intl4.format;
      obj9 = { helpdeskArticle: tmp5Result2.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
      V8wClM = intl10.t.V8wClM;
      tmp5Result2 = HelpdeskUtilsDefault;
      const tmp21 = React4(Text2, obj8);
      cResult[4] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[4];
    }
    if (cResult[5] === tmp4.emptyContainer) {
      let tmp22;
      if (cResult[6] === tmp18) {
        tmp22 = cResult[7];
      }
      tmp12 = tmp22;
    }
    const obj10 = { style: tmp4.emptyContainer, children: items3 };
    items3 = [tmp15, tmp18];
    const tmp25 = unpackModuleId(metroRequire, obj10);
    cResult[5] = tmp4.emptyContainer;
    cResult[6] = tmp18;
    cResult[7] = tmp25;
    tmp22 = tmp25;
  } else {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = { node: first };
      const tmp14 = React4(SettingLayoutDefault, obj11);
      cResult[8] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
  }
  return tmp12;
}) : (() => {
  let V8wClM;
  let constants2;
  let format;
  let intl;
  let items;
  let obj6;
  let showLoadingIndicator;
  let slayerSdkApplications;
  let tmp2Result;
  let tmp7;
  const tmp = closure_12();
  ({ showLoadingIndicator, slayerSdkApplications } = useAuthorizedSlayerApplicationsDefault());
  useAuthorizedSlayerApplicationsDefault();
  if (showLoadingIndicator) {
    let obj2 = { style: tmp.loadingIndicator };
    tmp7 = React4(hasOwnProperty, obj2);
  } else if (0 === slayerSdkApplications.length) {
    let obj3 = { style: tmp.emptyContainer, children: items };
    let obj4 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(intl10.t["+0U77d"]) };
    const Text = Text_Text.Text;
    intl = intl10.intl;
    items = [React4(Text, obj4), ];
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: format(V8wClM, obj6) };
    const Text2 = Text_Text.Text;
    let intl2 = intl10.intl;
    format = intl2.format;
    obj6 = { helpdeskArticle: tmp2Result.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    V8wClM = intl10.t.V8wClM;
    tmp2Result = HelpdeskUtilsDefault;
    items[1] = React4(Text2, obj5);
    tmp7 = unpackModuleId(metroRequire, obj3);
  } else {
    let obj = { node: tmp5 };
    tmp7 = React4(SettingLayoutDefault, obj);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let first;
  let tmp11;
  let tmp13;
  let tmp8;
  const obj = route(576);
  const cResult = obj.c(7);
  const tmp = route;
  route = route.route;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [, ];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = MobileUserSettings);
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let tab;
  const tmp6 = cResult[1];
  if (route != null) {
    let params = route.params;
    if (params != null) {
      tab = params.tab;
    }
  }
  if (tmp6 !== tab) {
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
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const first1 = _slicedToArray(react.useState(tmp8), 1)[0];
  if (cResult[3] !== first1) {
    const obj2 = { defaultIndex: first1, settings: first };
    const tmpResult = tmp(11142);
    const segmentedControl = tmpResult.createSegmentedControl(obj2);
    cResult[3] = first1;
    cResult[4] = segmentedControl;
    tmp11 = segmentedControl;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    const obj3 = { node: tmp11 };
    const tmp16 = closure_9(SettingLayoutDefault, obj3);
    cResult[5] = tmp11;
    cResult[6] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[6];
  }
  return tmp13;
}) : ((route) => {
  const f121716 = () => {
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
  route = route.route;
  const memo = react.useMemo(() => {
    const items = [, ];
    ({ CONTENT_AND_SOCIAL_DISCORD: arr[0], CONNECTED_GAMES: arr[1] } = MobileUserSettings);
    return items;
  }, []);
  const defaultIndex = _slicedToArray(react.useState(f121716), 2)[0];
  let items = [defaultIndex, memo];
  _slicedToArray(react.useState(f121716), 2);
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { defaultIndex, settings: memo };
    return obj.createSegmentedControl(obj2);
  }, items);
  return closure_9(memo(defaultIndex[19]), { node });
});
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/ContentAndSocialScreen.tsx");

export default tmp7;
export const DiscordPermissionsPage = tmp5;
export const ConnectedGamesPage = tmp6;