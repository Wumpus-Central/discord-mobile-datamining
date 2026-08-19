// === Module 15542: NsfwGateGuildSidebar ===

// Module 15542 (NsfwGateGuildSidebar)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { NsfwGateSource } from "NsfwGateSource" /* 9348 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ AnalyticEvents: c9, HelpdeskArticles: c10, Fonts: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.PANEL_BG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { marginBottom: 16 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default function NsfwGateGuildSidebar(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = callback3();
  let obj = guildId(currentUser[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId));
  currentUser = currentUser.getCurrentUser();
  const items1 = [guildId, stateFromStores, currentUser];
  const effect = React.useEffect(() => {
    let tmp2 = null != currentUser;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      stateFromStores(currentUser[11]);
      const obj = { guild_id: null, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
      obj[0] = guildId;
      obj[1] = currentUser.id;
      obj[2] = closure_1_5.isMember(guildId, currentUser.id);
      let nsfwAllowed = currentUser.nsfwAllowed;
      if (nsfwAllowed) {
        nsfwAllowed = guildId(currentUser[12]).getViewNsfwGuildsOrDefault();
        const obj3 = guildId(currentUser[12]);
      }
      obj[3] = nsfwAllowed;
      obj[4] = NsfwGateSource.GUILD_SIDEBAR;
      obj.track(closure_1_9.GUILD_NSFW_GATE_VIEWED, obj);
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items2 = [tmp.container, guildId.style];
    obj[0] = items2;
    obj = { guild: null, showExtraButtons: false };
    obj[0] = stateFromStores;
    const items3 = [callback(stateFromStores(tmp3[13]), obj), ];
    obj1 = { imageStyle: null, titleStyle: null, containerStyle: null, source: null, title: null, body: null };
    obj1[0] = tmp.emptyStateImageContainer;
    obj1[1] = stateFromStores(tmp3[15])(constants2.DISPLAY_EXTRABOLD, undefined, 16);
    obj1[2] = tmp.emptyStateContainer;
    obj1[3] = stateFromStores(tmp3[16]);
    const intl = tmp2(tmp3[17]).intl;
    obj1[4] = intl.string(tmp2(tmp3[17]).t.bAVpRR);
    const intl2 = tmp2(tmp3[17]).intl;
    const obj2 = { helpURL: null };
    obj2[0] = stateFromStores(tmp3[18]).getArticleURL(constants.NSFW_GUILD_GUIDELINES);
    obj1[5] = intl2.format(tmp2(tmp3[17]).t.NQuXf0, obj2);
    items3[1] = callback(tmp2(tmp3[14]).RefreshEmptyState, obj1);
    obj[1] = items3;
    tmp7 = callback2(View, obj);
    const obj6 = stateFromStores(tmp3[18]);
  }
  return tmp7;
};