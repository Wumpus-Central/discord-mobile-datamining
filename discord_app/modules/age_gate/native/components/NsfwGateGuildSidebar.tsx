// === Module 16536: NsfwGateGuildSidebar ===

// Module 16536 (NsfwGateGuildSidebar)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 9534 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const NsfwGateSource = fn(10537).NsfwGateSource;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, HelpdeskArticles: c10, Fonts: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG }, emptyStateContainer: { flex: 1 }, emptyStateImageContainer: { marginBottom: 16 } };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default function NsfwGateGuildSidebar(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = closure_14();
  const items = [GuildStore];
  const stateFromStores = guildId(currentUser[10]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
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
    const items3 = [closure_12(stateFromStores(tmp3[13]), obj3), ];
    const obj4 = { imageStyle: tmp.emptyStateImageContainer, titleStyle: stateFromStores(tmp3[15])(constants3.DISPLAY_EXTRABOLD, undefined, 16), containerStyle: tmp.emptyStateContainer, source: stateFromStores(tmp3[16]), title: null, body: null };
    const intl = tmp2(tmp3[17]).intl;
    obj4.title = intl.string(tmp2(tmp3[17]).t.bAVpRR);
    const intl2 = tmp2(tmp3[17]).intl;
    const obj5 = { helpURL: stateFromStores(tmp3[18]).getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    obj4.body = intl2.format(tmp2(tmp3[17]).t.NQuXf0, obj5);
    items3[1] = closure_12(tmp2(tmp3[14]).RefreshEmptyState, obj4);
    obj2.children = items3;
    tmp7 = closure_13(View, obj2);
    const obj6 = stateFromStores(tmp3[18]);
  }
  return tmp7;
};