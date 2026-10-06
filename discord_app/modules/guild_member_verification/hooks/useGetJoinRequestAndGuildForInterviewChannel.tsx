// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import GuildJoinRequestActionCreatorsDefault from "../GuildJoinRequestActionCreators.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildJoinRequestStore from "../GuildJoinRequestStore.tsx";
import UserGuildJoinRequestStore from "../UserGuildJoinRequestStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let cleanupPromise, flag, tmp3, tmp4, tmp6, tmp7;

let _slicedToArray = _slicedToArray_mod;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let closure_2;
      let closure_3;
      let first;
      let guild;
      let items2;
      let joinRequest;
      let require;
      let tmp11;
      let tmp20;
      let tmp5;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(17);
      [tmp5, require] = joinRequest.useState(false);
      _slicedToArray(joinRequest.useState(false), 2);
      [first, dependencyMap] = joinRequest.useState(false);
      if (cResult[0] !== id) {
        const obj3 = first(11);
        const castResult = obj3.cast(id);
        cResult[0] = id;
        cResult[1] = castResult;
        tmp8 = castResult;
      } else {
        tmp8 = cResult[1];
      }
      _slicedToArray = tmp8;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildJoinRequestStore, UserGuildJoinRequestStore, guild, PermissionStore];
        cResult[2] = items;
        tmp11 = items;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== tmp8) {
        class J {
          constructor() {
            request = closure_7.getRequest(closure_3);
            if (null == request) {
              return { joinRequest: null, isModmin: false, guild: null };
            } else {
              tmp2 = closure_5;
              guild = closure_5.getGuild(request.guildId);
              if (guild == null) {
                tmp4 = closure_8;
                guild = closure_8.getJoinRequestGuild(request.guildId);
              }
              obj = { joinRequest: null, isModmin: null, guild: null };
              obj.joinRequest = request;
              canResult = null != guild;
              if (canResult) {
                tmp6 = closure_6;
                tmp7 = Permissions;
                canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
              }
              obj.isModmin = canResult;
              obj.guild = guild;
              return obj;
            }
          }
        }
        cResult[3] = tmp8;
        cResult[4] = J;
      } else {
        class J {
          constructor() {
            request = closure_7.getRequest(closure_3);
            if (null == request) {
              return { joinRequest: null, isModmin: false, guild: null };
            } else {
              tmp2 = closure_5;
              guild = closure_5.getGuild(request.guildId);
              if (guild == null) {
                tmp4 = closure_8;
                guild = closure_8.getJoinRequestGuild(request.guildId);
              }
              obj = { joinRequest: null, isModmin: null, guild: null };
              obj.joinRequest = request;
              canResult = null != guild;
              if (canResult) {
                tmp6 = closure_6;
                tmp7 = Permissions;
                canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
              }
              obj.isModmin = canResult;
              obj.guild = guild;
              return obj;
            }
          }
        }
      }
      const tmpResult = get_initialized;
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp11, J);
      joinRequest = stateFromStoresObject.joinRequest;
      guild = stateFromStoresObject.guild;
      if (cResult[5] === first) {
        class J {
          constructor() {
            request = closure_7.getRequest(closure_3);
            if (null == request) {
              return { joinRequest: null, isModmin: false, guild: null };
            } else {
              tmp2 = closure_5;
              guild = closure_5.getGuild(request.guildId);
              if (guild == null) {
                tmp4 = closure_8;
                guild = closure_8.getJoinRequestGuild(request.guildId);
              }
              obj = { joinRequest: null, isModmin: null, guild: null };
              obj.joinRequest = request;
              canResult = null != guild;
              if (canResult) {
                tmp6 = closure_6;
                tmp7 = Permissions;
                canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
              }
              obj.isModmin = canResult;
              obj.guild = guild;
              return obj;
            }
          }
        }
        const effect = obj2.useEffect(F, items2);
        if (cResult[9] === tmp8) {
          class J {
            constructor() {
              request = closure_7.getRequest(closure_3);
              if (null == request) {
                return { joinRequest: null, isModmin: false, guild: null };
              } else {
                tmp2 = closure_5;
                guild = closure_5.getGuild(request.guildId);
                if (guild == null) {
                  tmp4 = closure_8;
                  guild = closure_8.getJoinRequestGuild(request.guildId);
                }
                obj = { joinRequest: null, isModmin: null, guild: null };
                obj.joinRequest = request;
                canResult = null != guild;
                if (canResult) {
                  tmp6 = closure_6;
                  tmp7 = Permissions;
                  canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
                }
                obj.isModmin = canResult;
                obj.guild = guild;
                return obj;
              }
            }
          }
          const effect1 = obj2.useEffect(C, tmp20);
          if (cResult[13] === guild) {
            class J {
              constructor() {
                request = closure_7.getRequest(closure_3);
                if (null == request) {
                  return { joinRequest: null, isModmin: false, guild: null };
                } else {
                  tmp2 = closure_5;
                  guild = closure_5.getGuild(request.guildId);
                  if (guild == null) {
                    tmp4 = closure_8;
                    guild = closure_8.getJoinRequestGuild(request.guildId);
                  }
                  obj = { joinRequest: null, isModmin: null, guild: null };
                  obj.joinRequest = request;
                  canResult = null != guild;
                  if (canResult) {
                    tmp6 = closure_6;
                    tmp7 = Permissions;
                    canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
                  }
                  obj.isModmin = canResult;
                  obj.guild = guild;
                  return obj;
                }
              }
            }
          }
          class C {
            constructor() {
              if (null == joinRequest) {
                tmp = closure_0;
                flag = true;
                tmp2 = closure_0(true);
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[11]);
                tmp5 = closure_3;
                joinRequestForInterview = obj.fetchJoinRequestForInterview(closure_3);
                cleanupPromise = joinRequestForInterview.finally(() => {
                  /* body not rendered: F142590 */
                });
              }
              return;
            }
          }
          tmp23[0] = tmp5;
          tmp23[1] = joinRequest;
          tmp23[2] = guild;
          cResult[13] = guild;
          cResult[14] = joinRequest;
          cResult[15] = tmp5;
          cResult[16] = tmp23;
        }
        class C {
          constructor() {
            if (null == joinRequest) {
              tmp = closure_0;
              flag = true;
              tmp2 = closure_0(true);
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[11]);
              tmp5 = closure_3;
              joinRequestForInterview = obj.fetchJoinRequestForInterview(closure_3);
              cleanupPromise = joinRequestForInterview.finally(() => {
                /* body not rendered: F142590 */
              });
            }
            return;
          }
        }
        const items1 = [joinRequest, tmp8];
        cResult[9] = tmp8;
        cResult[10] = joinRequest;
        cResult[11] = C;
        cResult[12] = items1;
        tmp20 = items1;
      }
      class F {
        constructor() {
          tmp = null != guild || closure_1;
          if (!tmp) {
            tmp2 = closure_2;
            flag = true;
            tmp3 = closure_2(true);
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = closure_1(closure_2[11]);
            requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
          }
          return;
        }
      }
      items2 = [guild, first];
      cResult[5] = first;
      cResult[6] = guild;
      cResult[7] = F;
      cResult[8] = items2;
    }
  : (id) => {
      let closure_2;
      let first;
      let joinRequest;
      let joinRequestGuild;
      let require;
      let tmp2;
      let tmp = _slicedToArray(joinRequest.useState(false), 2);
      [tmp2, require] = tmp;
      [first, dependencyMap] = joinRequest.useState(false);
      let obj = first(11);
      const castResult = obj.cast(id);
      _slicedToArray = castResult;
      const items = [GuildJoinRequestStore, UserGuildJoinRequestStore, joinRequestGuild, PermissionStore];
      const obj2 = get_initialized;
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        let canResult;
        const request = GuildJoinRequestStore.getRequest(_slicedToArray);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          let guild = GuildStore.getGuild(request.guildId);
          if (guild == null) {
            guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
          }
          const obj = { joinRequest: request, isModmin: canResult, guild };
          canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
          return obj;
        }
      });
      joinRequest = stateFromStoresObject.joinRequest;
      joinRequestGuild = stateFromStoresObject.guild;
      const items1 = [joinRequestGuild, first];
      const effect = joinRequest.useEffect(() => {
        const tmp = null != joinRequestGuild || first;
        if (!tmp) {
          closure_2(true);
          const obj = GuildJoinRequestActionCreatorsDefault;
          const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
        }
      }, items1);
      const items2 = [joinRequest, castResult];
      const effect1 = joinRequest.useEffect(() => {
        if (null == joinRequest) {
          _require(true);
          const obj = GuildJoinRequestActionCreatorsDefault;
          const joinRequestForInterview = obj.fetchJoinRequestForInterview(_slicedToArray);
          joinRequestForInterview.finally(() => {
            closure_1_0(false);
          });
        }
      }, items2);
      return { loading, joinRequest, joinRequestGuild };
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx",
);

export default tmp2;
