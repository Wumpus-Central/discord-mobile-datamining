// === Module 16219: NsfwGateGuildSidebar ===

// Module 16219 (NsfwGateGuildSidebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 8801 */;
import Constants2 from "Constants" /* 9423 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp10, tmp11, tmp3, tmp5, tmp6, tmp8, tmp9, trackResult;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let unpackModuleId;
const View = react_native.View;
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: c9, HelpdeskArticles: c10, Fonts: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { container: obj2, emptyStateContainer: { flex: 1 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
let closure_14 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentUser;
  let first;
  let guildId;
  let items2;
  let style;
  let tmp2 = currentUser;
  let obj = guildId(currentUser[11]);
  const cResult = obj.c(24);
  ({ style, guildId } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
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
  const tmpResult = guildId(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, L);
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
    const effect = react.useEffect(N, items2);
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
        tmp6 = closure_1(closure_2[13]);
        tmp7 = AnalyticEvents;
        obj = { guild_id: null, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
        tmp8 = guildId;
        obj.guild_id = guildId;
        obj.user_id = tmp.id;
        tmp9 = closure_5;
        track = tmp6.track;
        GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
        obj.is_member = closure_5.isMember(guildId, tmp.id);
        nsfwAllowed = tmp.nsfwAllowed;
        if (nsfwAllowed) {
          tmp10 = closure_0;
          obj2 = closure_0(tmp5[14]);
          nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
        }
        obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
        tmp11 = NsfwGateSource;
        obj.source = NsfwGateSource.GUILD_SIDEBAR;
        trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
      }
      return;
    }
  }
  items2 = [guildId, stateFromStores, tmp9];
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = N;
  cResult[7] = items2;
}) : ((guildId) => {
  let NQuXf0;
  let format;
  let intl;
  let items2;
  let items3;
  let obj5;
  let obj6;
  guildId = guildId.guildId;
  let currentUser;
  const style = guildId.style;
  const tmp = closure_14();
  let tmp2 = guildId;
  let obj = guildId(currentUser[12]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  currentUser = UserStore.getCurrentUser();
  const items1 = [guildId, stateFromStores, currentUser];
  const effect = react.useEffect(() => {
    let nsfwAllowed;
    const tmp2 = null != currentUser && null != stateFromStores;
    if (tmp2) {
      const obj = { guild_id: guildId, user_id: currentUser.id, is_member: GuildMemberStore.isMember(guildId, currentUser.id), is_user_opted_in_to_age_restricted_servers: nsfwAllowed, source: NsfwGateSource.GUILD_SIDEBAR };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_NSFW_GATE_VIEWED = constants.GUILD_NSFW_GATE_VIEWED;
      AnalyticsUtilsDefault;
      nsfwAllowed = currentUser.nsfwAllowed;
      if (nsfwAllowed) {
        const obj2 = AgeRestrictedContentSettingsUtils;
        nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
      }
      track(GUILD_NSFW_GATE_VIEWED, obj);
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    let obj2 = { style: items2, children: items3 };
    items2 = [tmp.container, style];
    const obj3 = { guild: stateFromStores, showExtraButtons: false };
    items3 = [closure_12(stateFromStores(currentUser[15]), obj3), ];
    const obj4 = { titleStyle: stateFromStores(currentUser[16])(constants3.DISPLAY_SEMIBOLD, undefined, 20), bodyStyle: stateFromStores(currentUser[16])(constants3.PRIMARY_NORMAL, undefined, 14), containerStyle: tmp.emptyStateContainer, title: intl.string(tmp2(currentUser[17]).t.bAVpRR), body: format(NQuXf0, obj5) };
    const RefreshEmptyState = tmp2(tmp3[19]).RefreshEmptyState;
    intl = tmp2(tmp3[17]).intl;
    const intl2 = tmp2(tmp3[17]).intl;
    format = intl2.format;
    obj5 = { helpURL: obj6.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    NQuXf0 = tmp2(tmp3[17]).t.NQuXf0;
    obj6 = stateFromStores(currentUser[18]);
    items3[1] = closure_12(RefreshEmptyState, obj4);
    tmp7 = closure_13(View, obj2);
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default tmp4;