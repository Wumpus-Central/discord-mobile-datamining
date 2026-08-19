// discord_app/modules/age_gate/native/components/NsfwGateGuild.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { NsfwGateSource } from "Constants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ AnalyticEvents: c9, HelpdeskArticles: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: 8 };
createCacheKey[2] = { textAlign: "center", marginBottom: 16 };
createCacheKey[3] = { marginBottom: 16 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = callback3();
  const intl = guildId(1236).intl;
  const intl2 = guildId(1236).intl;
  const stringResult = intl.string(guildId(1236).t.vAymlG);
  const intl3 = guildId(1236).intl;
  let obj = { helpURL: null };
  obj1 = currentUser(1993);
  obj[0] = obj1.getArticleURL(constants.NSFW_GUILD_GUIDELINES);
  const stringResult1 = intl2.string(guildId(1236).t.Crj6eC);
  currentUser = currentUser.getCurrentUser();
  const items = [guildId, currentUser];
  const effect = React.useEffect(() => {
    currentUser(dependencyMap[11]);
    const obj = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj[1] = id;
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    obj[2] = closure_1_6.isMember(guildId, id1);
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed) {
      nsfwAllowed = guildId(dependencyMap[12]).getViewNsfwGuildsOrDefault();
      const obj3 = guildId(dependencyMap[12]);
    }
    obj[3] = nsfwAllowed;
    obj[4] = NsfwGateSource.MODAL;
    obj.track(closure_1_9.GUILD_NSFW_GATE_VIEWED, obj);
  }, items);
  const items1 = [callback(currentUser(8612), {}), , , , , ];
  obj = { source: currentUser(9349), style: tmp.image };
  items1[1] = callback(closure_5, obj);
  obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = callback(guildId(4734).Text, obj1);
  items1[3] = callback(guildId(4734).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 });
  const formatResult = intl3.format(guildId(1236).t.Z12LNW, obj);
  items1[4] = callback(guildId(4734).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: intl3.format(guildId(1236).t.Z12LNW, obj) });
  const obj4 = { onPress: guildId.onClose, size: "md", text: null };
  const intl4 = guildId(1236).intl;
  obj4[2] = intl4.string(guildId(1236).t.gRqiWV);
  items1[5] = callback(guildId(4745).Button, obj4);
  obj[1] = items1;
  return callback2(closure_4, obj);
};