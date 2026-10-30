// discord_app/modules/conjure/clarification/useConjureSafetyAlertsChannelPick.tsx
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import conjureAppInServer from "../projects/conjureAppInServer.tsx";
import ConjureClarification from "ConjureClarification.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import BigFlagUtils from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

require = fn;
const Permissions = fn(1072).Permissions;
let closure_9 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/useConjureSafetyAlertsChannelPick.tsx");

export default function useConjureSafetyAlertsChannelPick(disabled) {
  ({ projectId, guildId } = disabled);
  ({ question, value } = disabled);
  importDefault = value;
  disabled = disabled.disabled;
  const onChange = disabled.onChange;
  let stateFromStores1;
  let ref;
  let ref2;
  closure_129_0 = projectId;
  closure_129_1 = guildId;
  closure_129_2 = question;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  let tmp = null != guildId;
  if (tmp) {
    tmp = "channel" === question.input;
  }
  if (tmp) {
    tmp = "safety_alerts_channel" === question.default;
  }
  closure_129_3 = tmp;
  let items = [ConjureProjectStore];
  const items1 = [projectId, tmp];
  const stateFromStores = guildId(onChange[7]).useStateFromStores(
    items,
    () => {
      let project = null;
      if (onChange) {
        project = ConjureProjectStore.getProject(guildId);
      }
      let result = null;
      if (null != project) {
        result = conjureAppInServer.conjurePreviewBotUserId(project);
      }
      return result;
    },
    items1,
  );
  closure_129_4 = stateFromStores;
  const items2 = [guildId, stateFromStores];
  const effect = stateFromStores1.useEffect(() => {
    let isMemberResult = null == value;
    if (!isMemberResult) {
      isMemberResult = null == stateFromStores1;
    }
    if (!isMemberResult) {
      isMemberResult = GuildMemberStore.isMember(value, stateFromStores1);
    }
    if (!isMemberResult) {
      const items = [stateFromStores1];
      const membersById = GuildActionCreatorsDefault.requestMembersById(value, items);
    }
  }, items2);
  let obj = guildId(onChange[7]);
  const items3 = [ref, ref2, GuildStore];
  const items4 = [guildId, stateFromStores, tmp, question.channel_filter];
  stateFromStores1 = guildId(onChange[7]).useStateFromStores(
    items3,
    () => {
      if (onChange) {
        if (null != value) {
          const guild = GuildStore.getGuild(value);
          let prop;
          if (guild != null) {
            prop = guild.safetyAlertsChannelId;
          }
          const channels = GuildChannelStore.getChannels(value);
          if (null != prop) {
            if (null != channels) {
              const result = ConjureUtils.conjureSettingChannels(channels, disabled.channel_filter);
              const found = result.find((id) => id.id === prop);
              if (null == found) {
                return null;
              } else {
                if (null != stateFromStores1) {
                  if (GuildMemberStore.isMember(value, stateFromStores1)) {
                    const obj3 = { permission, user: stateFromStores1, context: found };
                    let tmp15 = null;
                    if (obj2.can(obj3)) {
                      tmp15 = found;
                    }
                    return tmp15;
                  }
                }
                let deny;
                if (found.permissionOverwrites[value] != null) {
                  deny = tmp7.deny;
                }
                if (deny == null) {
                  deny = BigFlagUtils.EMPTY_FLAG;
                }
                let tmp12 = null;
                if (!obj.hasAny(deny, permission)) {
                  tmp12 = found;
                }
                return tmp12;
              }
            }
          }
          return null;
        }
      }
      return null;
    },
    items4,
  );
  ref = stateFromStores1.useRef(null);
  ref2 = stateFromStores1.useRef(false);
  const items5 = [stateFromStores1, disabled, guildId, onChange, value];
  const effect1 = stateFromStores1.useEffect(() => {
    let tmp2 = ref2.current || disabled;
    if (!tmp2) {
      tmp2 = null == guildId;
    }
    if (!tmp2) {
      if (null != ref.current) {
        if (1 === value.length) {
          if (value[0].id === ref.current) {
            if (null == stateFromStores1) {
              ref2.current = true;
              onChange([], guildId);
            }
          }
        }
        ref2.current = true;
      } else if (value.length > 0) {
        ref2.current = true;
      } else if (null != stateFromStores1) {
        ref.current = stateFromStores1.id;
        onChange(ConjureClarification.clarificationChannelEntities(stateFromStores1, []), guildId);
      }
    }
  }, items5);
}
