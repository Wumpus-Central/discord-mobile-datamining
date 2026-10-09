// === Module 16642: NsfwGateGuildSidebar ===

// Module 16642 (NsfwGateGuildSidebar)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6910 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const NsfwGateSource = fn(6909).NsfwGateSource;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, HelpdeskArticles: c10, Fonts: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG }, emptyStateContainer: { flex: 1 } };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateGuildSidebar(arg0) {
  const cResult = guildId(576).c(24);
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
    const fn = function b() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
    let tmp9 = currentUser;
  } else {
    tmp9 = cResult[3];
  }
  dependencyMap = tmp9;
  if (cResult[4] === guildId) {
    if (cResult[5] === stateFromStores) {
      let tmp12 = cResult[6];
      let tmp13 = cResult[7];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    if (null == stateFromStores) {
      return null;
    } else {
      if (cResult[8] === style) {
        if (cResult[9] === tmp4.container) {
          let tmp17 = cResult[10];
        }
        if (cResult[11] !== stateFromStores) {
          let obj2 = { guild: stateFromStores, showExtraButtons: false };
          const tmp21 = closure_12(stateFromStores(16479), obj2);
          cResult[11] = stateFromStores;
          cResult[12] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = stateFromStores(5903)(constants3.DISPLAY_SEMIBOLD, undefined, 20);
          const tmp27 = stateFromStores(5903)(constants3.PRIMARY_NORMAL, undefined, 14);
          cResult[13] = tmp26;
          cResult[14] = tmp27;
          let tmp23 = tmp27;
          let tmp22 = tmp26;
        } else {
          tmp22 = cResult[13];
          tmp23 = cResult[14];
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = guildId(1126).intl;
          const stringResult = intl.string(guildId(1126).t.bAVpRR);
          const intl2 = guildId(1126).intl;
          let obj3 = { helpURL: stateFromStores(2127).getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
          const formatResult = intl2.format(guildId(1126).t.NQuXf0, obj3);
          cResult[15] = stringResult;
          cResult[16] = formatResult;
          let tmp29 = formatResult;
          let tmp28 = stringResult;
          const obj5 = stateFromStores(2127);
        } else {
          tmp28 = cResult[15];
          tmp29 = cResult[16];
        }
        if (cResult[17] === tmp4.emptyStateContainer) {
          if (cResult[18] === tmp29) {
            let tmp34 = cResult[19];
          }
          if (cResult[20] === tmp34) {
            if (cResult[21] === tmp17) {
              if (cResult[22] === tmp18) {
                let tmp37 = cResult[23];
              }
              return tmp37;
            }
          }
          const obj4 = { style: tmp17, children: null };
          const items1 = [tmp18, tmp34];
          obj4.children = items1;
          const tmp40 = closure_13(View, obj4);
          cResult[20] = tmp34;
          cResult[21] = tmp17;
          cResult[22] = tmp18;
          cResult[23] = tmp40;
          tmp37 = tmp40;
        }
        const obj6 = { titleStyle: tmp22, bodyStyle: tmp23, containerStyle: tmp4.emptyStateContainer, title: tmp28, body: tmp29 };
        const tmp36 = closure_12(guildId(1200).RefreshEmptyState, obj6);
        cResult[17] = tmp4.emptyStateContainer;
        cResult[18] = tmp29;
        cResult[19] = tmp36;
        tmp34 = tmp36;
      }
      const items2 = [tmp4.container, style];
      cResult[8] = style;
      cResult[9] = tmp4.container;
      cResult[10] = items2;
      tmp17 = items2;
    }
  }
  const fn2 = function v() {
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const obj2 = { guild_id: guildId, user_id: user.id, is_member: GuildMemberStore.isMember(guildId, user.id), is_user_opted_in_to_age_restricted_servers: null, source: null };
      let nsfwAllowed = user.nsfwAllowed;
      if (nsfwAllowed) {
        nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
      }
      obj2.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
      obj2.source = NsfwGateSource.GUILD_SIDEBAR;
      AnalyticsUtilsDefault.track(constants.GUILD_NSFW_GATE_VIEWED, obj2);
    }
  };
  const items3 = [guildId, stateFromStores, tmp9];
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items3;
  tmp13 = items3;
  tmp12 = fn2;
  const tmpResult = guildId(504);
}) : (function NsfwGateGuildSidebar(guildId) {
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