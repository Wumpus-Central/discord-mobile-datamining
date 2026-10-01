// discord_app/modules/age_gate/native/components/NsfwGateGuildAlert.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AgeRestrictedContentSettingsUtils from "../../../user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
class NsfwGateGuildAlert {
  constructor(arg0) {
    guildId = global.guildId;
    closure_1 = undefined;
    currentUser = closure_5.getCurrentUser();
    closure_1 = currentUser;
    items = [,];
    items[0] = guildId;
    items[1] = currentUser;
    effect = closure_3.useEffect(() => {
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
    obj = { title: null, content: null, actions: null };
    intl = guildId(closure_2[9]).intl;
    obj.title = intl.string(guildId(closure_2[9]).t.JqfHGt);
    intl2 = guildId(closure_2[9]).intl;
    obj.content = intl2.string(guildId(closure_2[9]).t.EdXn1A);
    obj1 = { text: null, onPress: null };
    intl3 = guildId(closure_2[9]).intl;
    obj1.text = intl3.string(guildId(closure_2[9]).t.wi6hPV);
    obj1.onPress = function onPress() {
      const obj = currentUser(4554);
      return obj.openURL(currentUser(2110).getArticleURL(constants.NSFW_GUILD_GUIDELINES));
    };
    items1 = [,];
    items1[0] = jsx(guildId(closure_2[8]).AlertActionButton, obj1, "help-center");
    obj4 = { variant: "secondary", text: null };
    intl4 = guildId(closure_2[9]).intl;
    obj4.text = intl4.string(guildId(closure_2[9]).t.WAI6xu);
    items1[1] = jsx(guildId(closure_2[8]).AlertActionButton, obj4, "dismiss");
    obj.actions = items1;
    return jsx(guildId(closure_2[8]).AlertModal, obj);
  }
}
const NsfwGateSource = fn(9426).NsfwGateSource;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, HelpdeskArticles: closure_8 } = Constants);
const jsx = fn(21).jsx;
let c10 = "nsfw-guild-alert";
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildAlert.tsx");

export default NsfwGateGuildAlert;
export const NSFW_GUILD_ALERT_KEY = "nsfw-guild-alert";
export const showNsfwGateGuildAlert = function showNsfwGateGuildAlert(id, onCloseCallback) {
  useAlertStore.openAlert(c10, <NsfwGateGuildAlert guildId={id} />, onCloseCallback);
};
