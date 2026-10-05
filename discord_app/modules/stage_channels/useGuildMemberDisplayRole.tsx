// discord_app/modules/stage_channels/useGuildMemberDisplayRole.tsx
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function getHighestHoistedRole(arg0, arg1) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildStore, GuildMemberStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != arg0) {
    if (null != arg1) {
      const guild = obj.getGuild(arg0);
      if (null == guild) {
        return null;
      } else {
        const member = obj2.getMember(guild.id, arg1);
        let highestHoistedRole = null;
        if (null != member) {
          const obj3 = PermissionUtilsAll;
          highestHoistedRole = obj3.getHighestHoistedRole(guild, member);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        let tmp8;
        if (cResult[2] === arg1) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      const fn = function u() {
        const items = [GuildStore, GuildMemberStore];
        return getHighestHoistedRole(closure_0, closure_1, items);
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      let items = [GuildStore, GuildMemberStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const items = [GuildStore, GuildMemberStore];
          return getHighestHoistedRole(closure_0, closure_1, items);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default tmp2;
export { getHighestHoistedRole };
