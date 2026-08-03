// === Module 9529: NsfwGateGuild ===

// Module 9529 (NsfwGateGuild)
import noop from "noop";
import get_ActivityIndicator from "set";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import mergeGuildAvatar from "mergeGuildAvatar";
import { NsfwGateSource } from "NsfwGateSource";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let unpackModuleId;
const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ AnalyticEvents: c9, HelpdeskArticles: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, header: null, description: null, image: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: 8 };
createCacheKey[2] = { textAlign: "center", marginBottom: 16 };
createCacheKey[3] = { marginBottom: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = createCacheKey();
  const intl = guildId(1236).intl;
  const intl2 = guildId(1236).intl;
  const stringResult = intl.string(guildId(1236).t.vAymlG);
  const intl3 = guildId(1236).intl;
  let obj = { helpURL: null };
  let obj1 = currentUser(1945);
  obj[0] = obj1.getArticleURL(constants.NSFW_GUILD_GUIDELINES);
  const stringResult1 = intl2.string(guildId(1236).t.Crj6eC);
  currentUser = currentUser.getCurrentUser();
  const items = [guildId, currentUser];
  const effect = React.useEffect(() => {
    let obj = currentUser(outer1_2[11]);
    obj = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
    let id;
    if (currentUser != null) {
      id = tmp3.id;
    }
    obj[1] = id;
    let id1;
    if (currentUser != null) {
      id1 = tmp3.id;
    }
    obj[2] = outer1_6.isMember(guildId, id1);
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = tmp3.nsfwAllowed;
    }
    if (nsfwAllowed) {
      nsfwAllowed = guildId(outer1_2[12]).getViewNsfwGuildsOrDefault();
      const obj3 = guildId(outer1_2[12]);
    }
    obj[3] = nsfwAllowed;
    obj[4] = outer1_8.MODAL;
    obj.track(outer1_9.GUILD_NSFW_GATE_VIEWED, obj);
  }, items);
  obj = { style: tmp.container, children: null };
  const items1 = [callback(currentUser(9400), {}), , , , , ];
  obj = { source: currentUser(9531), style: tmp.image };
  items1[1] = callback(closure_5, obj);
  obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = callback(guildId(4251).Text, obj1);
  items1[3] = callback(guildId(4251).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 });
  const formatResult = intl3.format(guildId(1236).t.Z12LNW, obj);
  const obj2 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 };
  items1[4] = callback(guildId(4251).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: intl3.format(guildId(1236).t.Z12LNW, obj) });
  const obj4 = { onPress: guildId.onClose, size: "md", text: null };
  const intl4 = guildId(1236).intl;
  obj4[2] = intl4.string(guildId(1236).t.gRqiWV);
  items1[5] = callback(guildId(4666).Button, obj4);
  obj[1] = items1;
  return callback2(closure_4, obj);
};