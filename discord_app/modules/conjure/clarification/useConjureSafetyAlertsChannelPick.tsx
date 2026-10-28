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
const Permissions = fn(1084).Permissions;
const permission = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureSafetyAlertsChannel(arg0, arg1, input) {
      _require = arg0;
      closure_1 = arg1;
      importAll = input;
      const cResult = require("c").c(16);
      let tmp4 = null != arg1;
      if (tmp4) {
        tmp4 = "channel" === input.input;
      }
      if (tmp4) {
        tmp4 = "safety_alerts_channel" === input.default;
      }
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === tmp4) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === arg1) {
            let tmp10 = cResult[7];
            let tmp11 = cResult[8];
          }
          const effect = stateFromStores.useEffect(tmp10, tmp11);
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [GuildChannelStore, GuildMemberStore, GuildStore];
            class A {
              constructor() {
                if (closure_3) {
                  tmp = closure_1;
                  tmp2 = null;
                  if (null != closure_1) {
                    tmp16 = closure_7;
                    guild = closure_7.getGuild(tmp);
                    prop = undefined;
                    if (guild != null) {
                      prop = guild.safetyAlertsChannelId;
                    }
                    safetyAlertsChannelId = prop;
                    tmp4 = closure_5;
                    channels = closure_5.getChannels(tmp);
                    if (null != prop) {
                      if (null != channels) {
                        tmp18 = closure_0;
                        tmp19 = closure_3;
                        obj4 = closure_0(closure_3[12]);
                        tmp20 = closure_2;
                        result = obj4.conjureSettingChannels(channels, closure_2.channel_filter);
                        found = result.find((id) => id.id === prop);
                        if (null == found) {
                          return null;
                        } else {
                          tmp22 = closure_4;
                          if (null != closure_4) {
                            tmp6 = closure_6;
                            if (closure_6.isMember(tmp, tmp22)) {
                              tmp13 = closure_2;
                              obj2 = closure_2(tmp19[13]);
                              obj1 = { permission: null, user: null, context: null };
                              tmp14 = closure_9;
                              obj1.permission = closure_9;
                              obj1.user = tmp22;
                              obj1.context = found;
                              tmp15 = null;
                              if (obj2.can(obj1)) {
                                tmp15 = found;
                              }
                              return tmp15;
                            }
                          }
                          tmp7 = found.permissionOverwrites[tmp];
                          deny = undefined;
                          if (tmp7 != null) {
                            deny = tmp7.deny;
                          }
                          if (deny == null) {
                            tmp9 = closure_2;
                            deny = closure_2(tmp19[6]).EMPTY_FLAG;
                          }
                          tmp10 = closure_2;
                          obj = closure_2(tmp19[6]);
                          tmp11 = closure_9;
                          tmp12 = null;
                          if (!obj.hasAny(deny, closure_9)) {
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
              }
            }
            cResult[9] = items1;
            let tmp14 = items1;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] === stateFromStores) {
            if (cResult[11] === arg1) {
              if (cResult[12] === input.channel_filter) {
                if (cResult[13] === tmp4) {
                  let tmp18 = cResult[14];
                  let tmp19 = cResult[15];
                }
                return tmp(504).useStateFromStores(tmp14, tmp18, tmp19);
              }
            }
          }
          class A {
            constructor() {
              if (closure_3) {
                tmp = closure_1;
                tmp2 = null;
                if (null != closure_1) {
                  tmp16 = closure_7;
                  guild = closure_7.getGuild(tmp);
                  prop = undefined;
                  if (guild != null) {
                    prop = guild.safetyAlertsChannelId;
                  }
                  safetyAlertsChannelId = prop;
                  tmp4 = closure_5;
                  channels = closure_5.getChannels(tmp);
                  if (null != prop) {
                    if (null != channels) {
                      tmp18 = closure_0;
                      tmp19 = closure_3;
                      obj4 = closure_0(closure_3[12]);
                      tmp20 = closure_2;
                      result = obj4.conjureSettingChannels(channels, closure_2.channel_filter);
                      found = result.find((id) => id.id === prop);
                      if (null == found) {
                        return null;
                      } else {
                        tmp22 = closure_4;
                        if (null != closure_4) {
                          tmp6 = closure_6;
                          if (closure_6.isMember(tmp, tmp22)) {
                            tmp13 = closure_2;
                            obj2 = closure_2(tmp19[13]);
                            obj1 = { permission: null, user: null, context: null };
                            tmp14 = closure_9;
                            obj1.permission = closure_9;
                            obj1.user = tmp22;
                            obj1.context = found;
                            tmp15 = null;
                            if (obj2.can(obj1)) {
                              tmp15 = found;
                            }
                            return tmp15;
                          }
                        }
                        tmp7 = found.permissionOverwrites[tmp];
                        deny = undefined;
                        if (tmp7 != null) {
                          deny = tmp7.deny;
                        }
                        if (deny == null) {
                          tmp9 = closure_2;
                          deny = closure_2(tmp19[6]).EMPTY_FLAG;
                        }
                        tmp10 = closure_2;
                        obj = closure_2(tmp19[6]);
                        tmp11 = closure_9;
                        tmp12 = null;
                        if (!obj.hasAny(deny, closure_9)) {
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
            }
          }
          const items2 = [arg1, stateFromStores, tmp4, input.channel_filter];
          cResult[10] = stateFromStores;
          cResult[11] = arg1;
          cResult[12] = input.channel_filter;
          cResult[13] = tmp4;
          cResult[14] = A;
          cResult[15] = items2;
          tmp19 = items2;
          tmp18 = A;
        }
        const fn2 = function j() {
          let isMemberResult = null == closure_1;
          if (!isMemberResult) {
            isMemberResult = null == stateFromStores;
          }
          if (!isMemberResult) {
            isMemberResult = GuildMemberStore.isMember(closure_1, stateFromStores);
          }
          if (!isMemberResult) {
            const items = [stateFromStores];
            const membersById = GuildActionCreatorsDefault.requestMembersById(closure_1, items);
          }
        };
        const items3 = [, stateFromStores];
        cResult[5] = stateFromStores;
        cResult[6] = arg1;
        cResult[7] = fn2;
        cResult[8] = items3;
        tmp11 = items3;
        tmp10 = fn2;
        const tmpResult = tmp(504);
      }
      const fn = function _() {
        let project = null;
        if (closure_3) {
          project = ConjureProjectStore.getProject(closure_0);
        }
        let result = null;
        if (null != project) {
          result = conjureAppInServer.conjurePreviewBotUserId(project);
        }
        return result;
      };
      const items4 = [arg0, tmp4];
      cResult[1] = arg0;
      cResult[2] = tmp4;
      cResult[3] = fn;
      cResult[4] = items4;
      tmp8 = items4;
      tmp7 = fn;
      let obj = require("c");
    }
  : function useConjureSafetyAlertsChannel(arg0, arg1, input) {
      _require = arg0;
      closure_1 = arg1;
      let tmp = null != arg1;
      if (tmp) {
        tmp = "channel" === input.input;
      }
      if (tmp) {
        tmp = "safety_alerts_channel" === input.default;
      }
      dependencyMap = tmp;
      let items = [ConjureProjectStore];
      const items1 = [arg0, tmp];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          let project = null;
          if (closure_3) {
            project = ConjureProjectStore.getProject(closure_0);
          }
          let result = null;
          if (null != project) {
            result = conjureAppInServer.conjurePreviewBotUserId(project);
          }
          return result;
        },
        items1,
      );
      const items2 = [arg1, stateFromStores];
      const effect = stateFromStores.useEffect(() => {
        let isMemberResult = null == closure_1;
        if (!isMemberResult) {
          isMemberResult = null == stateFromStores;
        }
        if (!isMemberResult) {
          isMemberResult = GuildMemberStore.isMember(closure_1, stateFromStores);
        }
        if (!isMemberResult) {
          const items = [stateFromStores];
          const membersById = GuildActionCreatorsDefault.requestMembersById(closure_1, items);
        }
      }, items2);
      let obj = require("initialize");
      const items3 = [GuildChannelStore, GuildMemberStore, GuildStore];
      const items4 = [arg1, stateFromStores, tmp, input.channel_filter];
      return require("initialize").useStateFromStores(
        items3,
        () => {
          if (closure_3) {
            if (null != closure_1) {
              guild = GuildStore.getGuild(closure_1);
              let prop;
              if (guild != null) {
                prop = guild.safetyAlertsChannelId;
              }
              const channels = GuildChannelStore.getChannels(closure_1);
              if (null != prop) {
                if (null != channels) {
                  const result = ConjureUtils.conjureSettingChannels(channels, input.channel_filter);
                  const found = result.find((id) => id.id === prop);
                  if (null == found) {
                    return null;
                  } else {
                    if (null != stateFromStores) {
                      if (GuildMemberStore.isMember(closure_1, stateFromStores)) {
                        const obj3 = { permission, user: stateFromStores, context: found };
                        let tmp15 = null;
                        if (obj2.can(obj3)) {
                          tmp15 = found;
                        }
                        return tmp15;
                      }
                    }
                    let deny;
                    if (found.permissionOverwrites[closure_1] != null) {
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
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/useConjureSafetyAlertsChannelPick.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureSafetyAlertsChannelPick(guildId) {
      const cResult = guildId(onChange[8]).c(7);
      guildId = guildId.guildId;
      value = guildId.value;
      importDefault = value;
      const disabled = guildId.disabled;
      onChange = guildId.onChange;
      let tmp2 = closure_10(guildId.projectId, guildId, guildId.question);
      noop = tmp2;
      noop.useRef(null);
      noop.useRef(false);
      if (cResult[0] === tmp2) {
        if (cResult[1] === disabled) {
          if (cResult[2] === guildId) {
            if (cResult[3] === onChange) {
              if (cResult[4] === value) {
                let tmp3 = cResult[5];
                let tmp4 = cResult[6];
              }
              const effect = noop.useEffect(tmp3, tmp4);
            }
          }
        }
      }
      const fn = function t() {
        let tmp2 = ref2.current || disabled;
        if (!tmp2) {
          tmp2 = null == guildId;
        }
        if (!tmp2) {
          if (null != ref.current) {
            if (1 === value.length) {
              if (value[0].id === ref.current) {
                if (null == id) {
                  ref2.current = true;
                  onChange([], guildId);
                }
              }
            }
            ref2.current = true;
          } else if (value.length > 0) {
            ref2.current = true;
          } else if (null != id) {
            ref.current = id.id;
            onChange(ConjureClarification.clarificationChannelEntities(id, []), guildId);
          }
        }
      };
      const items = [tmp2, disabled, guildId, onChange, value];
      cResult[0] = tmp2;
      cResult[1] = disabled;
      cResult[2] = guildId;
      cResult[3] = onChange;
      cResult[4] = value;
      cResult[5] = fn;
      cResult[6] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : function useConjureSafetyAlertsChannelPick(guildId) {
      guildId = guildId.guildId;
      value = guildId.value;
      importDefault = value;
      const disabled = guildId.disabled;
      const onChange = guildId.onChange;
      const tmp = closure_10(guildId.projectId, guildId, guildId.question);
      noop = tmp;
      noop.useRef(null);
      noop.useRef(false);
      const items = [tmp, disabled, guildId, onChange, value];
      const effect = noop.useEffect(() => {
        let tmp2 = ref2.current || disabled;
        if (!tmp2) {
          tmp2 = null == guildId;
        }
        if (!tmp2) {
          if (null != ref.current) {
            if (1 === value.length) {
              if (value[0].id === ref.current) {
                if (null == id) {
                  ref2.current = true;
                  onChange([], guildId);
                }
              }
            }
            ref2.current = true;
          } else if (value.length > 0) {
            ref2.current = true;
          } else if (null != id) {
            ref.current = id.id;
            onChange(ConjureClarification.clarificationChannelEntities(id, []), guildId);
          }
        }
      }, items);
    };
