// === Module 7381: NsfwGateGuild ===

// Module 7381 (NsfwGateGuild)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7383 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const View = fn(17).View;
const NsfwGateSource = fn(7382).NsfwGateSource;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 16 }, image: { marginBottom: 16 } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = closure_12();
  const intl = guildId(1114).intl;
  const intl2 = guildId(1114).intl;
  const stringResult = intl.string(guildId(1114).t.vAymlG);
  const intl3 = guildId(1114).intl;
  let obj = { helpURL: null };
  const stringResult1 = intl2.string(guildId(1114).t.Crj6eC);
  obj.helpURL = currentUser(2062).getArticleURL(constants2.NSFW_GUILD_GUIDELINES);
  let obj2 = currentUser(2062);
  currentUser = UserStore.getCurrentUser();
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
  let obj3 = { style: tmp.container, children: null };
  const items1 = [closure_10(currentUser(7136), {}), , , , , ];
  const obj4 = { source: null, style: null };
  const formatResult = intl3.format(guildId(1114).t.Z12LNW, obj);
  obj4.source = currentUser(7385);
  obj4.style = tmp.image;
  items1[1] = closure_10(currentUser(5712), obj4);
  items1[2] = closure_10(guildId(5619).Heading, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult });
  items1[3] = closure_10(guildId(5619).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 });
  items1[4] = closure_10(guildId(5619).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: formatResult });
  const obj8 = { onPress: guildId.onClose, size: "md", text: null };
  const intl4 = guildId(1114).intl;
  obj8.text = intl4.string(guildId(1114).t.gRqiWV);
  items1[5] = closure_10(guildId(5629).Button, obj8);
  obj3.children = items1;
  return closure_11(View, obj3);
};