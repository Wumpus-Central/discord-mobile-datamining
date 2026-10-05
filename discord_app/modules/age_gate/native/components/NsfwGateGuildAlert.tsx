// discord_app/modules/age_gate/native/components/NsfwGateGuildAlert.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AgeRestrictedContentSettingsUtils from "../../../user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import Constants2 from "Constants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guildId;

let metroImportAll;
let metroImportDefault;
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: metroImportDefault, HelpdeskArticles: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let c10 = "nsfw-guild-alert";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let obj2;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp8;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(8);
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const currentUser = UserStore.getCurrentUser();
        cResult[0] = currentUser;
        first = currentUser;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
        const items = [guildId, first];
        cResult[1] = guildId;
        cResult[2] = E;
        cResult[3] = items;
        tmp8 = items;
      } else {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
        tmp8 = cResult[3];
      }
      const effect = react.useEffect(E, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
        const stringResult = obj2.string(tmp(1126).t.JqfHGt);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(tmp(1126).t.EdXn1A);
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        tmp11 = stringResult1;
        tmp10 = stringResult;
      } else {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
        tmp11 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
        const AlertActionButton = tmp(5713).AlertActionButton;
        const intl2 = tmp(1126).intl;
        const tmp15 = (
          <AlertActionButton
            key="help-center"
            text={intl2.string(tmp(1126).t.wi6hPV)}
            onPress={function onPress() {
              const openURL = first(dependencyMap[12]).openURL;
              first(dependencyMap[12]);
              const obj = first(dependencyMap[13]);
              return openURL(obj.getArticleURL(constants.NSFW_GUILD_GUIDELINES));
            }}
          />
        );
        cResult[6] = tmp15;
        tmp14 = tmp15;
      } else {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
        const items1 = [tmp14];
        const AlertModal = tmp(5713).AlertModal;
        const AlertActionButton2 = tmp(5713).AlertActionButton;
        const intl3 = tmp(1126).intl;
        items1[1] = <AlertActionButton2 key="dismiss" variant="secondary" text={intl3.string(tmp(1126).t.WAI6xu)} />;
        const tmp17 = <AlertModal title={tmp10} content={tmp11} actions={items1} />;
        cResult[7] = tmp17;
        tmp16 = tmp17;
      } else {
        class E {
          constructor() {
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
            const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
            AnalyticsUtilsDefault;
            if (first != null) {
              id = first.id;
            }
            id1 = undefined;
            isMember = GuildMemberStore.isMember;
            if (first != null) {
              id1 = first.id;
            }
            nsfwAllowed = undefined;
            if (first != null) {
              nsfwAllowed = first.nsfwAllowed;
            }
            if (nsfwAllowed) {
              const obj2 = AgeRestrictedContentSettingsUtils;
              nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
            }
            track(GUILD_NSFW_GATE_VIEWED, obj);
          }
        }
      }
      return tmp16;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const currentUser = UserStore.getCurrentUser();
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
        const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
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
      const AlertModal = guildId(5713).AlertModal;
      const intl = guildId(1126).intl;
      const intl2 = guildId(1126).intl;
      const AlertActionButton = guildId(5713).AlertActionButton;
      const intl3 = guildId(1126).intl;
      const items1 = [
        <AlertActionButton
          key="help-center"
          text={intl3.string(guildId(1126).t.wi6hPV)}
          onPress={function onPress() {
            const openURL = currentUser(dependencyMap[12]).openURL;
            currentUser(dependencyMap[12]);
            const obj = currentUser(dependencyMap[13]);
            return openURL(obj.getArticleURL(constants.NSFW_GUILD_GUIDELINES));
          }}
        />,
      ];
      const AlertActionButton2 = guildId(5713).AlertActionButton;
      const intl4 = guildId(1126).intl;
      items1[1] = <AlertActionButton2 key="dismiss" variant="secondary" text={intl4.string(guildId(1126).t.WAI6xu)} />;
      return (
        <AlertModal
          title={intl.string(guildId(1126).t.JqfHGt)}
          content={intl2.string(guildId(1126).t.EdXn1A)}
          actions={items1}
        />
      );
    };
let closure_11 = tmp3;
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildAlert.tsx");

export default tmp3;
export const NSFW_GUILD_ALERT_KEY = "nsfw-guild-alert";
export const showNsfwGateGuildAlert = function showNsfwGateGuildAlert(id, onCloseCallback) {
  const obj = useAlertStore;
  obj.openAlert(c10, <closure_11 guildId={id} />, onCloseCallback);
};
