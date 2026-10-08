// discord_app/modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import _modDef17313 from "../../../_runtime/metro/17313__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function f() {
          return GuildMemberStore.getMemberIds(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
      if (cResult[4] === stateFromStoresArray) {
        if (cResult[5] === arg1) {
          const tmp13 = _slicedToArray(cResult[6], 2);
          first1 = tmp13[0];
          _slicedToArray = tmp15;
          if (cResult[9] === arg0) {
            if (cResult[10] === tmp15) {
              let tmp16 = cResult[11];
              let tmp17 = cResult[12];
            }
            const effect = noop.useEffect(tmp16, tmp17);
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [UserStore];
              cResult[13] = items2;
            }
            if (cResult[14] !== first1) {
              const fn3 = function p() {
                const mapped = first1.map(UserStore.getUser);
                return mapped.filter(GlobalUtils.isNotNullish);
              };
              const items3 = [first1];
              cResult[14] = first1;
              cResult[15] = fn3;
              class S {
                constructor() {
                  tmp2 = closure_3.length > 0;
                  tmp = closure_3;
                  if (tmp2) {
                    tmp3 = closure_0;
                    tmp4 = null;
                    tmp2 = null != closure_0;
                  }
                  if (tmp2) {
                    tmp5 = closure_1;
                    tmp6 = closure_2;
                    obj = closure_1(closure_2[9]);
                    tmp7 = closure_0;
                    flag = false;
                    membersById = obj.requestMembersById(closure_0, tmp, false);
                  }
                  return;
                }
              }
            }
            tmp(tmp2[7]);
            class S {
              constructor() {
                tmp2 = closure_3.length > 0;
                tmp = closure_3;
                if (tmp2) {
                  tmp3 = closure_0;
                  tmp4 = null;
                  tmp2 = null != closure_0;
                }
                if (tmp2) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj = closure_1(closure_2[9]);
                  tmp7 = closure_0;
                  flag = false;
                  membersById = obj.requestMembersById(closure_0, tmp, false);
                }
                return;
              }
            }
          }
          class S {
            constructor() {
              tmp2 = closure_3.length > 0;
              tmp = closure_3;
              if (tmp2) {
                tmp3 = closure_0;
                tmp4 = null;
                tmp2 = null != closure_0;
              }
              if (tmp2) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[9]);
                tmp7 = closure_0;
                flag = false;
                membersById = obj.requestMembersById(closure_0, tmp, false);
              }
              return;
            }
          }
          const items4 = [tmp13[1], arg0];
          cResult[9] = arg0;
          cResult[10] = tmp13[1];
          cResult[11] = S;
          cResult[12] = items4;
          tmp17 = items4;
          tmp16 = S;
        }
      }
      if (cResult[7] !== stateFromStoresArray) {
        const fn2 = function y(arg0) {
          return stateFromStoresArray.includes(arg0);
        };
        cResult[7] = stateFromStoresArray;
        cResult[8] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[8];
      }
      const tmpResult = require("initialize");
      if (null == arg1) {
        let items5 = [];
      } else {
        const _Object = Object;
        const values = Object.values(arg1);
        const found = values.filter(
          (type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER,
        );
        items5 = found.map((id) => id.id);
      }
      const tmp10 = stateFromStoresArray(first1[8]);
      cResult[4] = stateFromStoresArray;
      cResult[5] = arg1;
      cResult[6] = stateFromStoresArray(first1[8])(items5, tmp9);
      const tmp10Result = stateFromStoresArray(first1[8])(items5, tmp9);
    }
  : function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      let items = [GuildMemberStore];
      const items1 = [arg0];
      stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items,
        () => GuildMemberStore.getMemberIds(closure_0),
        items1,
      );
      const items2 = [arg1, stateFromStoresArray];
      let tmp2 = first(
        noop.useMemo(() => {
          if (null == closure_1) {
            let items = [];
          } else {
            const _Object = Object;
            const values = Object.values(tmp2);
            const found = values.filter(
              (type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER,
            );
            items = found.map((id) => id.id);
          }
          return _modDef17313(items, (arg0) => stateFromStoresArray.includes(arg0));
        }, items2),
        2,
      );
      first = tmp2[0];
      noop = tmp4;
      const items3 = [tmp2[1], arg0];
      const effect = noop.useEffect(() => {
        let tmp2 = length.length > 0;
        if (tmp2) {
          tmp2 = null != closure_0;
        }
        if (tmp2) {
          const membersById = GuildActionCreatorsDefault.requestMembersById(closure_0, length, false);
        }
      }, items3);
      let obj = require("initialize");
      const items4 = [UserStore];
      const items5 = [first];
      return require("initialize").useStateFromStoresArray(
        items4,
        () => {
          const mapped = first.map(UserStore.getUser);
          return mapped.filter(GlobalUtils.isNotNullish);
        },
        items5,
      );
    };
