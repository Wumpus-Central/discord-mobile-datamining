// discord_app/modules/age_gate/native/components/NsfwGateGuild.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AgeRestrictedContentSettingsUtils from "../../../user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const NsfwGateSource = fn(7388).NsfwGateSource;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  header: { textAlign: "center", marginBottom: 8 },
  description: { textAlign: "center", marginBottom: 16 },
  image: { marginBottom: 16 },
};
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = closure_12();
  const intl = guildId(1113).intl;
  const intl2 = guildId(1113).intl;
  const stringResult = intl.string(guildId(1113).t.vAymlG);
  const intl3 = guildId(1113).intl;
  let obj = { helpURL: null };
  const stringResult1 = intl2.string(guildId(1113).t.Crj6eC);
  obj.helpURL = currentUser(2061).getArticleURL(constants2.NSFW_GUILD_GUIDELINES);
  let obj2 = currentUser(2061);
  currentUser = UserStore.getCurrentUser();
  const items = [guildId, currentUser];
  const effect = noop.useEffect(() => {
    const obj2 = {
      guild_id: guildId,
      user_id: null,
      is_member: null,
      is_user_opted_in_to_age_restricted_servers: null,
      source: null,
    };
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
  const items1 = [closure_10(currentUser(7142), {}), , , , ,];
  const obj4 = { source: null, style: null };
  const formatResult = intl3.format(guildId(1113).t.Z12LNW, obj);
  obj4.source = currentUser(7391);
  obj4.style = tmp.image;
  items1[1] = closure_10(currentUser(5717), obj4);
  items1[2] = closure_10(guildId(5624).Heading, {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: stringResult,
  });
  items1[3] = closure_10(guildId(5624).Text, {
    style: tmp.description,
    variant: "text-md/normal",
    color: "text-default",
    children: stringResult1,
  });
  items1[4] = closure_10(guildId(5624).Text, {
    style: tmp.description,
    variant: "text-md/normal",
    color: "text-default",
    children: formatResult,
  });
  const obj8 = { onPress: guildId.onClose, size: "md", text: null };
  const intl4 = guildId(1113).intl;
  obj8.text = intl4.string(guildId(1113).t.gRqiWV);
  items1[5] = closure_10(guildId(5634).Button, obj8);
  obj3.children = items1;
  return closure_11(View, obj3);
}
