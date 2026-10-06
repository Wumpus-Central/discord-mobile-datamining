// discord_app/modules/age_gate/native/components/NsfwGateGuild.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import BackgroundImageDefault from "../../../auth/native/components/atoms/BackgroundImage.tsx";
import Constants2 from "Constants.tsx";
import AgeRestrictedContentSettingsUtils from "../../../user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/06729_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault, tmp2, tmp3, tmp6, trackResult;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: c9, HelpdeskArticles: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = {
  container: obj2,
  header: { textAlign: "center", marginBottom: 8 },
  description: { textAlign: "center", marginBottom: 16 },
  image: { marginBottom: 16 },
};
obj2 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_13 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let guildId;
      let items1;
      let obj3;
      let onClose;
      let tmp13;
      let tmp17;
      let tmp19;
      let tmp29;
      let tmp32;
      let tmp7;
      let tmp9;
      let user;
      let obj = guildId(576);
      const cResult = obj.c(25);
      ({ onClose, guildId } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = guildId(1126).intl;
        const stringResult = intl.string(guildId(1126).t.vAymlG);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = guildId(1126).intl;
        const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
        cResult[1] = stringResult1;
        tmp7 = stringResult1;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = guildId(1126).intl;
        const format = intl3.format;
        let obj2 = { helpURL: obj3.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
        const Z12LNW = guildId(1126).t.Z12LNW;
        obj3 = HelpdeskUtilsDefault;
        const formatResult = format(Z12LNW, obj2);
        cResult[2] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const currentUser = UserStore.getCurrentUser();
        cResult[3] = currentUser;
        tmp13 = currentUser;
      } else {
        tmp13 = cResult[3];
      }
      importDefault = tmp13;
      if (cResult[4] !== guildId) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const items = [guildId, tmp13];
        cResult[4] = guildId;
        cResult[5] = U;
        cResult[6] = items;
        tmp17 = items;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        tmp17 = cResult[6];
      }
      const effect = react.useEffect(U, tmp17);
      const container = tmp4.container;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const tmp21 = closure_11(BackgroundImageDefault, {});
        cResult[7] = tmp21;
        tmp19 = tmp21;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
      }
      if (cResult[8] !== tmp4.image) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const obj4 = { source: AssetRegistryDefault, style: tmp4.image };
        cResult[8] = tmp4.image;
        cResult[9] = closure_11(closure_5, obj4);
        const tmp25 = closure_11(closure_5, obj4);
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
      }
      if (cResult[10] !== tmp4.header) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const obj5 = {
          style: tmp4.header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        cResult[10] = tmp4.header;
        cResult[11] = closure_11(guildId(4892).Text, obj5);
        const tmp27 = closure_11(guildId(4892).Text, obj5);
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
      }
      if (cResult[12] !== tmp4.description) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const obj6 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp7 };
        const obj7 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp9 };
        const tmp30 = closure_11(guildId(4892).Text, obj6);
        const tmp31 = closure_11(guildId(4892).Text, obj7);
        cResult[12] = tmp4.description;
        cResult[13] = tmp30;
        cResult[14] = tmp31;
        tmp29 = tmp31;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        tmp29 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const stringResult2 = obj8.string(guildId(1126).t.gRqiWV);
        cResult[15] = stringResult2;
        tmp32 = stringResult2;
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
      }
      if (cResult[16] !== onClose) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
        const obj9 = { onPress: onClose, size: "md", text: tmp32 };
        cResult[16] = onClose;
        cResult[17] = closure_11(guildId(5601).Button, obj9);
        const tmp35 = closure_11(guildId(5601).Button, obj9);
      } else {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
      }
      if (cResult[18] === tmp4.container) {
        class U {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[13]);
            obj = {
              guild_id: guildId,
              user_id: null,
              is_member: null,
              is_user_opted_in_to_age_restricted_servers: null,
              source: null,
            };
            tmp4 = closure_1;
            id = undefined;
            track = tmp2.track;
            GUILD_NSFW_GATE_VIEWED = AnalyticEvents.GUILD_NSFW_GATE_VIEWED;
            tmp3 = guildId;
            if (closure_1 != null) {
              id = tmp4.id;
            }
            obj.user_id = id;
            id1 = undefined;
            tmp6 = closure_6;
            isMember = closure_6.isMember;
            if (tmp4 != null) {
              id1 = tmp4.id;
            }
            obj.is_member = isMember(tmp3, id1);
            nsfwAllowed = undefined;
            if (tmp4 != null) {
              nsfwAllowed = tmp4.nsfwAllowed;
            }
            if (nsfwAllowed) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp[14]);
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
            obj.source = NsfwGateSource.MODAL;
            trackResult = track(GUILD_NSFW_GATE_VIEWED, obj);
            return;
          }
        }
      }
      const obj10 = { style: container, children: items1 };
      items1 = [tmp19, tmp22, tmp26, tmp28, tmp29, tmp34];
      cResult[18] = tmp4.container;
      cResult[19] = tmp26;
      cResult[20] = tmp28;
      cResult[21] = tmp29;
      cResult[22] = tmp34;
      cResult[23] = tmp22;
      cResult[24] = closure_12(closure_4, obj10);
      closure_12(closure_4, obj10);
    }
  : (guildId) => {
      let intl4;
      let items1;
      let obj2;
      guildId = guildId.guildId;
      let currentUser;
      const onClose = guildId.onClose;
      const tmp = closure_13();
      const intl = guildId(1126).intl;
      const stringResult = intl.string(guildId(1126).t.vAymlG);
      const intl2 = guildId(1126).intl;
      const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
      const intl3 = guildId(1126).intl;
      const format = intl3.format;
      let obj = { helpURL: obj2.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
      const Z12LNW = guildId(1126).t.Z12LNW;
      obj2 = currentUser(2115);
      const formatResult = format(Z12LNW, obj);
      currentUser = UserStore.getCurrentUser();
      const items = [guildId, currentUser];
      const effect = react.useEffect(() => {
        let id;
        let id1;
        let isMember;
        let nsfwAllowed;
        const obj = {
          guild_id: guildId,
          user_id: id,
          is_member: isMember(guildId, id1),
          is_user_opted_in_to_age_restricted_servers: nsfwAllowed,
          source: NsfwGateSource.MODAL,
        };
        id = undefined;
        const track = AnalyticsUtilsDefault.track;
        const GUILD_NSFW_GATE_VIEWED = constants.GUILD_NSFW_GATE_VIEWED;
        AnalyticsUtilsDefault;
        if (currentUser != null) {
          id = currentUser.id;
        }
        id1 = undefined;
        isMember = GuildMemberStore.isMember;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        nsfwAllowed = undefined;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        if (nsfwAllowed) {
          const obj2 = AgeRestrictedContentSettingsUtils;
          nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
        }
        track(GUILD_NSFW_GATE_VIEWED, obj);
      }, items);
      const obj3 = { style: tmp.container, children: items1 };
      items1 = [closure_11(currentUser(6470), {}), , , , ,];
      const obj4 = { source: currentUser(6729), style: tmp.image };
      items1[1] = closure_11(closure_5, obj4);
      const obj5 = {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: stringResult,
      };
      items1[2] = closure_11(guildId(4892).Text, obj5);
      const obj6 = {
        style: tmp.description,
        variant: "text-md/normal",
        color: "text-default",
        children: stringResult1,
      };
      items1[3] = closure_11(guildId(4892).Text, obj6);
      const obj7 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: formatResult };
      items1[4] = closure_11(guildId(4892).Text, obj7);
      const obj8 = { onPress: onClose, size: "md", text: intl4.string(guildId(1126).t.gRqiWV) };
      const Button = guildId(5601).Button;
      intl4 = guildId(1126).intl;
      items1[5] = closure_11(Button, obj8);
      return closure_12(closure_4, obj3);
    };
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default tmp5;
