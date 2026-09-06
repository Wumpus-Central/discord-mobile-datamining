// === Module 10295: NsfwGateGuild ===

// Module 10295 (NsfwGateGuild)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 9296 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const NsfwGateSource = fn(10296).NsfwGateSource;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, HelpdeskArticles: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, description: null, image: null };
createStyles = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.header = { textAlign: "center", marginBottom: 8 };
createStyles.description = { textAlign: "center", marginBottom: 16 };
createStyles.image = { marginBottom: 16 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = closure_13();
  const intl = guildId(1114).intl;
  const intl2 = guildId(1114).intl;
  const stringResult = intl.string(guildId(1114).t.vAymlG);
  const intl3 = guildId(1114).intl;
  let obj = { helpURL: null };
  let obj1 = currentUser(2024);
  obj.helpURL = obj1.getArticleURL(constants2.NSFW_GUILD_GUIDELINES);
  const stringResult1 = intl2.string(guildId(1114).t.Crj6eC);
  currentUser = UserStore.getCurrentUser();
  const items = [guildId, currentUser];
  const effect = noop.useEffect(() => {
    const obj = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj.user_id = id;
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    obj.is_member = GuildMemberStore.isMember(guildId, id1);
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed) {
      nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
    }
    obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
    obj.source = NsfwGateSource.MODAL;
    obj.track(constants.GUILD_NSFW_GATE_VIEWED, obj);
  }, items);
  obj = { style: tmp.container, children: null };
  const items1 = [closure_11(currentUser(6975), {}), , , , , ];
  obj = { source: currentUser(10297), style: tmp.image };
  items1[1] = closure_11(closure_5, obj);
  obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = closure_11(guildId(4556).Text, obj1);
  items1[3] = closure_11(guildId(4556).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 });
  const formatResult = intl3.format(guildId(1114).t.Z12LNW, obj);
  const obj2 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 };
  items1[4] = closure_11(guildId(4556).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: intl3.format(guildId(1114).t.Z12LNW, obj) });
  const obj4 = { onPress: guildId.onClose, size: "md", text: null };
  const intl4 = guildId(1114).intl;
  obj4.text = intl4.string(guildId(1114).t.gRqiWV);
  items1[5] = closure_11(guildId(4975).Button, obj4);
  obj.children = items1;
  return closure_12(closure_4, obj);
};