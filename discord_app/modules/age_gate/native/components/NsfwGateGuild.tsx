// === Module 6914: NsfwGateGuild ===

// Module 6914 (NsfwGateGuild)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import FastImageDefault from "FastImage" /* 6156 */;
import BackgroundImageDefault from "BackgroundImage" /* 6656 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6916 */;
import _modDef6918 from "module_6918" /* 6918 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const NsfwGateSource = fn(6915).NsfwGateSource;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 16 }, image: { marginBottom: 16 } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateGuild(arg0) {
  const cResult = guildId(576).c(25);
  ({ onClose, guildId } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = guildId(1126).intl;
    const stringResult = intl.string(guildId(1126).t.vAymlG);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = guildId(1126).intl;
    const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
    cResult[1] = stringResult1;
    let tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = guildId(1126).intl;
    let obj2 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    const formatResult = intl3.format(guildId(1126).t.Z12LNW, obj2);
    cResult[2] = formatResult;
    let tmp9 = formatResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
    let tmp13 = currentUser;
  } else {
    tmp13 = cResult[3];
  }
  importDefault = tmp13;
  if (cResult[4] !== guildId) {
    const fn = function w() {
      const obj2 = { guild_id: guildId, user_id: null, is_member: null, is_user_opted_in_to_age_restricted_servers: null, source: null };
      let id;
      if (user != null) {
        id = user.id;
      }
      obj2.user_id = id;
      let id1;
      if (user != null) {
        id1 = user.id;
      }
      obj2.is_member = GuildMemberStore.isMember(guildId, id1);
      let nsfwAllowed;
      if (user != null) {
        nsfwAllowed = user.nsfwAllowed;
      }
      if (nsfwAllowed) {
        nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
      }
      obj2.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
      obj2.source = NsfwGateSource.MODAL;
      AnalyticsUtilsDefault.track(constants.GUILD_NSFW_GATE_VIEWED, obj2);
    };
    const items = [guildId, tmp13];
    cResult[4] = guildId;
    cResult[5] = fn;
    cResult[6] = items;
    let tmp17 = items;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const effect = noop.useEffect(tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = closure_10(BackgroundImageDefault, {});
    cResult[7] = tmp22;
    let tmp19 = tmp22;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] !== tmp4.image) {
    const obj4 = { source: _modDef6918, style: tmp4.image };
    const tmp27 = closure_10(FastImageDefault, obj4);
    cResult[8] = tmp4.image;
    cResult[9] = tmp27;
    let tmp23 = tmp27;
  } else {
    tmp23 = cResult[9];
  }
  if (cResult[10] !== tmp4.header) {
    const obj5 = { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp30 = closure_10(guildId(5088).Heading, obj5);
    cResult[10] = tmp4.header;
    cResult[11] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[11];
  }
  if (cResult[12] !== tmp4.description) {
    const obj6 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp7 };
    const tmp34 = closure_10(guildId(5088).Text, obj6);
    const obj7 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp9 };
    const tmp35 = closure_10(guildId(5088).Text, obj7);
    cResult[12] = tmp4.description;
    cResult[13] = tmp34;
    cResult[14] = tmp35;
    let tmp32 = tmp35;
    let tmp31 = tmp34;
  } else {
    tmp31 = cResult[13];
    tmp32 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = guildId(1126).intl;
    const stringResult2 = intl4.string(guildId(1126).t.gRqiWV);
    cResult[15] = stringResult2;
    let tmp36 = stringResult2;
  } else {
    tmp36 = cResult[15];
  }
  if (cResult[16] !== onClose) {
    const obj8 = { onPress: onClose, size: "md", text: tmp36 };
    const tmp40 = closure_10(guildId(5379).Button, obj8);
    cResult[16] = onClose;
    cResult[17] = tmp40;
    let tmp38 = tmp40;
  } else {
    tmp38 = cResult[17];
  }
  if (cResult[18] === tmp4.container) {
    if (cResult[19] === tmp28) {
      if (cResult[20] === tmp31) {
        if (cResult[21] === tmp32) {
          if (cResult[22] === tmp38) {
            if (cResult[23] === tmp23) {
              let tmp41 = cResult[24];
            }
            return tmp41;
          }
        }
      }
    }
  }
  const obj9 = { style: tmp4.container, children: null };
  const items1 = [tmp19, tmp23, tmp28, tmp31, tmp32, tmp38];
  obj9.children = items1;
  const tmp42 = closure_11(View, obj9);
  cResult[18] = tmp4.container;
  cResult[19] = tmp28;
  cResult[20] = tmp31;
  cResult[21] = tmp32;
  cResult[22] = tmp38;
  cResult[23] = tmp23;
  cResult[24] = tmp42;
  tmp41 = tmp42;
  let obj = guildId(576);
}) : (function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  let currentUser;
  const tmp = closure_12();
  const intl = guildId(1126).intl;
  const intl2 = guildId(1126).intl;
  const stringResult = intl.string(guildId(1126).t.vAymlG);
  const intl3 = guildId(1126).intl;
  let obj = { helpURL: null };
  const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
  obj.helpURL = currentUser(2128).getArticleURL(constants2.NSFW_GUILD_GUIDELINES);
  let obj2 = currentUser(2128);
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
  const items1 = [closure_10(currentUser(6656), {}), , , , , ];
  const obj4 = { source: null, style: null };
  const formatResult = intl3.format(guildId(1126).t.Z12LNW, obj);
  obj4.source = currentUser(6918);
  obj4.style = tmp.image;
  items1[1] = closure_10(currentUser(6156), obj4);
  items1[2] = closure_10(guildId(5088).Heading, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult });
  items1[3] = closure_10(guildId(5088).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 });
  items1[4] = closure_10(guildId(5088).Text, { style: tmp.description, variant: "text-md/normal", color: "text-default", children: formatResult });
  const obj8 = { onPress: guildId.onClose, size: "md", text: null };
  const intl4 = guildId(1126).intl;
  obj8.text = intl4.string(guildId(1126).t.gRqiWV);
  items1[5] = closure_10(guildId(5379).Button, obj8);
  obj3.children = items1;
  return closure_11(View, obj3);
});