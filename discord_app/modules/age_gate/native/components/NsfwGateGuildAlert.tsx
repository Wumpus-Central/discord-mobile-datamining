// === Module 9621: NsfwGateGuildAlert ===

// Module 9621 (NsfwGateGuildAlert)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6916 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const NsfwGateSource = fn(6915).NsfwGateSource;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, HelpdeskArticles: closure_8 } = Constants);
const jsx = fn(21).jsx;
let c10 = "nsfw-guild-alert";
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateGuildAlert(guildId) {
  const cResult = guildId(576).c(8);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[0] = currentUser;
    let first = currentUser;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function w() {
      const obj2 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
      let id;
      if (first != null) {
        id = first.id;
      }
      obj2.user_id = id;
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      obj2.is_member = GuildMemberStore.isMember(guildId, id1);
      let nsfwAllowed;
      if (first != null) {
        nsfwAllowed = first.nsfwAllowed;
      }
      if (nsfwAllowed) {
        nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
      }
      obj2.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
      obj2.source = NsfwGateSource.MODAL;
      AnalyticsUtilsDefault.track(constants.GUILD_NSFW_GATE_VIEWED, obj2);
    };
    const items = [guildId, first];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.JqfHGt);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.EdXn1A);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    let tmp11 = stringResult1;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { text: null, onPress: null };
    const intl3 = tmp(1126).intl;
    obj2.text = intl3.string(tmp(1126).t.wi6hPV);
    obj2.onPress = function onPress() {
      const obj = first(4806);
      return obj.openURL(first(2128).getArticleURL(constants.NSFW_GUILD_GUIDELINES));
    };
    const tmp16 = jsx(tmp(5305).AlertActionButton, { text: null, onPress: null }, "help-center");
    cResult[6] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { title: tmp10, content: tmp11, actions: null };
    const items1 = [tmp14, ];
    const obj4 = { variant: "secondary", text: null };
    const intl4 = tmp(1126).intl;
    obj4.text = intl4.string(tmp(1126).t.WAI6xu);
    items1[1] = jsx(tmp(5305).AlertActionButton, { variant: "secondary", text: null }, "dismiss");
    obj3.actions = items1;
    const tmp19 = jsx(tmp(5305).AlertModal, { title: tmp10, content: tmp11, actions: null });
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  return tmp17;
}) : (function NsfwGateGuildAlert(guildId) {
  guildId = guildId.guildId;
  const currentUser = UserStore.getCurrentUser();
  const items = [guildId, currentUser];
  const effect = noop.useEffect(() => {
    const obj2 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj2.user_id = id;
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    obj2.is_member = GuildMemberStore.isMember(guildId, id1);
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed) {
      nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
    }
    obj2.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
    obj2.source = NsfwGateSource.MODAL;
    AnalyticsUtilsDefault.track(constants.GUILD_NSFW_GATE_VIEWED, obj2);
  }, items);
  let obj = { title: null, content: null, actions: null };
  const intl = guildId(1126).intl;
  obj.title = intl.string(guildId(1126).t.JqfHGt);
  const intl2 = guildId(1126).intl;
  obj.content = intl2.string(guildId(1126).t.EdXn1A);
  let obj2 = { text: null, onPress: null };
  const intl3 = guildId(1126).intl;
  obj2.text = intl3.string(guildId(1126).t.wi6hPV);
  obj2.onPress = function onPress() {
    const obj = currentUser(4806);
    return obj.openURL(currentUser(2128).getArticleURL(constants.NSFW_GUILD_GUIDELINES));
  };
  const items1 = [jsx(guildId(5305).AlertActionButton, { text: null, onPress: null }, "help-center"), ];
  let obj3 = { variant: "secondary", text: null };
  const intl4 = guildId(1126).intl;
  obj3.text = intl4.string(guildId(1126).t.WAI6xu);
  items1[1] = jsx(guildId(5305).AlertActionButton, { variant: "secondary", text: null }, "dismiss");
  obj.actions = items1;
  return jsx(guildId(5305).AlertModal, { title: null, content: null, actions: null });
});
let closure_11 = tmp3;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildAlert.tsx");

export default tmp3;
export const NSFW_GUILD_ALERT_KEY = "nsfw-guild-alert";
export const showNsfwGateGuildAlert = function showNsfwGateGuildAlert(id, onCloseCallback) {
  useAlertStore.openAlert(c10, <closure_11 guildId={id} />, onCloseCallback);
};