// === Module 16259: NsfwGateGuildSidebar ===

// Module 16259 (NsfwGateGuildSidebar)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6727 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const NsfwGateSource = fn(6726).NsfwGateSource;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, HelpdeskArticles: c10, Fonts: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG }, emptyStateContainer: { flex: 1 } };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = guildId(currentUser[11]).c(24);
  ({ style, guildId } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class L {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = L;
  } else {
    class L {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  let obj = guildId(currentUser[11]);
  const stateFromStores = guildId(currentUser[12]).useStateFromStores(first, L);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
  } else {
    class L {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  currentUser = tmp9;
  if (cResult[4] === guildId) {
    class L {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const effect = noop.useEffect(N, items2);
    if (null == stateFromStores) {
      class L {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
    } else {
      class L {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
      const items1 = [tmp4.container, style];
      cResult[8] = style;
      cResult[9] = tmp4.container;
      cResult[10] = items1;
    }
  }
  class N {
    constructor() {
      tmp = closure_2;
      tmp2 = null != closure_2;
      if (tmp2) {
        tmp3 = closure_1;
        tmp2 = null != closure_1;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        obj = closure_1(closure_2[13]);
        tmp6 = AnalyticEvents;
        obj1 = { guild_id: null, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp7 = guildId;
        obj1.guild_id = guildId;
        obj1.user_id = tmp.id;
        tmp8 = closure_5;
        obj1.is_member = closure_5.isMember(guildId, tmp.id);
        nsfwAllowed = tmp.nsfwAllowed;
        if (nsfwAllowed) {
          tmp9 = closure_0;
          obj3 = closure_0(tmp5[14]);
          nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
        }
        obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        tmp10 = NsfwGateSource;
        obj1.source = NsfwGateSource.GUILD_SIDEBAR;
        trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
      }
      return;
    }
  }
  items2 = [guildId, stateFromStores, tmp9];
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = N;
  cResult[7] = items2;
  const tmpResult = guildId(currentUser[12]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = closure_14();
  const items = [GuildStore];
  const stateFromStores = guildId(currentUser[12]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  currentUser = UserStore.getCurrentUser();
  const items1 = [guildId, stateFromStores, currentUser];
  const effect = noop.useEffect(() => {
    let tmp2 = null != currentUser;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const obj2 = { guild_id: guildId, user_id: currentUser.id, is_member: GuildMemberStore.isMember(guildId, currentUser.id), is_user_opted_in_to_age_restricted_servers: null, source: null };
      let nsfwAllowed = currentUser.nsfwAllowed;
      if (nsfwAllowed) {
        nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
      }
      obj2.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
      obj2.source = NsfwGateSource.GUILD_SIDEBAR;
      AnalyticsUtilsDefault.track(constants.GUILD_NSFW_GATE_VIEWED, obj2);
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    let obj2 = { style: null, children: null };
    const items2 = [tmp.container, guildId.style];
    obj2.style = items2;
    let obj3 = { guild: stateFromStores, showExtraButtons: false };
    const items3 = [closure_12(stateFromStores(tmp3[15]), obj3), ];
    const obj4 = { titleStyle: stateFromStores(tmp3[16])(constants3.DISPLAY_SEMIBOLD, undefined, 20), bodyStyle: stateFromStores(tmp3[16])(constants3.PRIMARY_NORMAL, undefined, 14), containerStyle: tmp.emptyStateContainer, title: null, body: null };
    const intl = tmp2(tmp3[17]).intl;
    obj4.title = intl.string(tmp2(tmp3[17]).t.bAVpRR);
    const intl2 = tmp2(tmp3[17]).intl;
    const obj5 = { helpURL: stateFromStores(tmp3[18]).getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    obj4.body = intl2.format(tmp2(tmp3[17]).t.NQuXf0, obj5);
    items3[1] = closure_12(tmp2(tmp3[19]).RefreshEmptyState, obj4);
    obj2.children = items3;
    tmp7 = closure_13(View, obj2);
    const obj6 = stateFromStores(tmp3[18]);
  }
  return tmp7;
});