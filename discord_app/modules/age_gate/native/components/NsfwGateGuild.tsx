// discord_app/modules/age_gate/native/components/NsfwGateGuild.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import BackgroundImageDefault from "../../../auth/native/components/atoms/BackgroundImage.tsx";
import AgeRestrictedContentSettingsUtils from "../../../user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import _modDef17452 from "../../../../../_runtime/metro/17452__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const NsfwGateSource = fn(9423).NsfwGateSource;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, HelpdeskArticles: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
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
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = guildId(576).c(25);
      ({ onClose, guildId } = arg0);
      const tmp4 = closure_13();
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
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const items = [guildId, tmp13];
        cResult[4] = guildId;
        cResult[5] = U;
        cResult[6] = items;
        let tmp17 = items;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        tmp17 = cResult[6];
      }
      const effect = noop.useEffect(U, tmp17);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const tmp21 = closure_11(BackgroundImageDefault, {});
        cResult[7] = tmp21;
        const tmp19 = tmp21;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[8] !== tmp4.image) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const obj4 = { source: _modDef17452, style: tmp4.image };
        const tmp25 = closure_11(closure_5, obj4);
        cResult[8] = tmp4.image;
        cResult[9] = tmp25;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[10] !== tmp4.header) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const obj5 = {
          style: tmp4.header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        const tmp27 = closure_11(guildId(4886).Text, obj5);
        cResult[10] = tmp4.header;
        cResult[11] = tmp27;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[12] !== tmp4.description) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const obj6 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp7 };
        const tmp30 = closure_11(guildId(4886).Text, obj6);
        const obj7 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp9 };
        const tmp31 = closure_11(guildId(4886).Text, obj7);
        cResult[12] = tmp4.description;
        cResult[13] = tmp30;
        cResult[14] = tmp31;
        let tmp29 = tmp31;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        tmp29 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const stringResult2 = obj8.string(guildId(1126).t.gRqiWV);
        cResult[15] = stringResult2;
        const tmp32 = stringResult2;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[16] !== onClose) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
        const obj9 = { onPress: onClose, size: "md", text: tmp32 };
        const tmp35 = closure_11(guildId(5594).Button, obj9);
        cResult[16] = onClose;
        cResult[17] = tmp35;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[18] === tmp4.container) {
        class U {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp3 = closure_1;
            id = undefined;
            tmp2 = guildId;
            if (closure_1 != null) {
              id = tmp3.id;
            }
            obj1.user_id = id;
            id1 = undefined;
            tmp5 = closure_6;
            if (tmp3 != null) {
              id1 = tmp3.id;
            }
            obj1.is_member = closure_6.isMember(tmp2, id1);
            nsfwAllowed = undefined;
            if (tmp3 != null) {
              nsfwAllowed = tmp3.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp8 = closure_0;
              obj3 = closure_0(tmp[14]);
              nsfwAllowed = obj3.getViewNsfwGuildsOrDefault();
            }
            obj1.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj1.source = NsfwGateSource.MODAL;
            trackResult = obj.track(AnalyticEvents.GUILD_NSFW_GATE_VIEWED, obj1);
            return;
          }
        }
      }
      const obj10 = { style: tmp4.container, children: null };
      const items1 = [tmp19, tmp22, tmp26, tmp28, tmp29, tmp34];
      obj10.children = items1;
      let obj = guildId(576);
      cResult[18] = tmp4.container;
      cResult[19] = tmp26;
      cResult[20] = tmp28;
      cResult[21] = tmp29;
      cResult[22] = tmp34;
      cResult[23] = tmp22;
      cResult[24] = closure_12(closure_4, obj10);
      const tmp36 = closure_12(closure_4, obj10);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      let currentUser;
      const tmp = closure_13();
      const intl = guildId(1126).intl;
      const intl2 = guildId(1126).intl;
      const stringResult = intl.string(guildId(1126).t.vAymlG);
      const intl3 = guildId(1126).intl;
      let obj = { helpURL: null };
      const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
      obj.helpURL = currentUser(2115).getArticleURL(constants2.NSFW_GUILD_GUIDELINES);
      let obj2 = currentUser(2115);
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
      const items1 = [closure_11(currentUser(6463), {}), , , , ,];
      const formatResult = intl3.format(guildId(1126).t.Z12LNW, obj);
      items1[1] = closure_11(closure_5, { source: currentUser(17452), style: tmp.image });
      items1[2] = closure_11(guildId(4886).Text, {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: stringResult,
      });
      items1[3] = closure_11(guildId(4886).Text, {
        style: tmp.description,
        variant: "text-md/normal",
        color: "text-default",
        children: stringResult1,
      });
      items1[4] = closure_11(guildId(4886).Text, {
        style: tmp.description,
        variant: "text-md/normal",
        color: "text-default",
        children: formatResult,
      });
      const obj8 = { onPress: guildId.onClose, size: "md", text: null };
      const intl4 = guildId(1126).intl;
      obj8.text = intl4.string(guildId(1126).t.gRqiWV);
      items1[5] = closure_11(guildId(5594).Button, obj8);
      obj3.children = items1;
      return closure_12(closure_4, obj3);
    };
