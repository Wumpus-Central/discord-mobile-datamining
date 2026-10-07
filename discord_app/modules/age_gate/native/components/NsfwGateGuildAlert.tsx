// === Module 9436: NsfwGateGuildAlert ===

// Module 9436 (NsfwGateGuildAlert)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6727 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const NsfwGateSource = fn(6726).NsfwGateSource;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, HelpdeskArticles: closure_8 } = Constants);
const jsx = fn(21).jsx;
let c10 = "nsfw-guild-alert";
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
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
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
    const items = [guildId, first];
    cResult[1] = guildId;
    cResult[2] = E;
    cResult[3] = items;
    let tmp8 = items;
  } else {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
    tmp8 = cResult[3];
  }
  const effect = noop.useEffect(E, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
    const stringResult = obj2.string(tmp(1126).t.JqfHGt);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.EdXn1A);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    let tmp11 = stringResult1;
    const tmp10 = stringResult;
  } else {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
    let obj3 = { text: null, onPress: null };
    const intl2 = tmp(1126).intl;
    obj3.text = intl2.string(tmp(1126).t.wi6hPV);
    obj3.onPress = function onPress() {
      const obj = first(4571);
      return obj.openURL(first(2115).getArticleURL(constants.NSFW_GUILD_GUIDELINES));
    };
    const tmp15 = jsx(tmp(5720).AlertActionButton, { text: null, onPress: null }, "help-center");
    cResult[6] = tmp15;
    const tmp14 = tmp15;
  } else {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
    const obj4 = { title: tmp10, content: tmp11, actions: null };
    const items1 = [tmp14, ];
    const obj5 = { variant: "secondary", text: null };
    const intl3 = tmp(1126).intl;
    obj5.text = intl3.string(tmp(1126).t.WAI6xu);
    items1[1] = jsx(tmp(5720).AlertActionButton, { variant: "secondary", text: null }, "dismiss");
    obj4.actions = items1;
    const tmp17 = jsx(tmp(5720).AlertModal, { title: tmp10, content: tmp11, actions: null });
    cResult[7] = tmp17;
    const tmp16 = tmp17;
  } else {
    class E {
      constructor() {
        tmp = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp3 = closure_1;
        id = undefined;
        tmp2 = guildId;
        if (closure_1 != null) {
          id = tmp3.id;
        }
        obj1.user_id = id;
        id1 = undefined;
        tmp5 = closure_4;
        if (tmp3 != null) {
          id1 = tmp3.id;
        }
        obj1.is_member = closure_4.isMember(tmp2, id1);
        nsfwAllowed = undefined;
        if (tmp3 != null) {
          nsfwAllowed = tmp3.nsfwAllowed;
        }
        if (nsfwAllowed) {
          tmp8 = closure_0;
          obj3 = closure_0(tmp[9]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        obj1.source = NsfwGateSource.MODAL;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
        return;
      }
    }
  }
  return tmp16;
}) : ((guildId) => {
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
    const obj = currentUser(4571);
    return obj.openURL(currentUser(2115).getArticleURL(constants.NSFW_GUILD_GUIDELINES));
  };
  const items1 = [jsx(guildId(5720).AlertActionButton, { text: null, onPress: null }, "help-center"), ];
  let obj3 = { variant: "secondary", text: null };
  const intl4 = guildId(1126).intl;
  obj3.text = intl4.string(guildId(1126).t.WAI6xu);
  items1[1] = jsx(guildId(5720).AlertActionButton, { variant: "secondary", text: null }, "dismiss");
  obj.actions = items1;
  return jsx(guildId(5720).AlertModal, { title: null, content: null, actions: null });
});
let closure_11 = tmp3;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildAlert.tsx");

export default tmp3;
export const NSFW_GUILD_ALERT_KEY = "nsfw-guild-alert";
export const showNsfwGateGuildAlert = function showNsfwGateGuildAlert(id, onCloseCallback) {
  useAlertStore.openAlert(c10, <closure_11 guildId={id} />, onCloseCallback);
};