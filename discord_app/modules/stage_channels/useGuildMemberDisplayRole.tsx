// === Module 5380: getHighestHoistedRole ===

// Module 5380 (getHighestHoistedRole)
import applyOverwritesAll from "applyOverwrites" /* 4125 */;
import closure_3 from "trackCommunicationDisabled" /* 1991 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;

const require = arg1;
function getHighestHoistedRole(arg0, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_4, closure_3];
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
          highestHoistedRole = applyOverwritesAll.getHighestHoistedRole(guild, member);
          const obj3 = applyOverwritesAll;
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const result = require("set").fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default function useGuildMemberDisplayRole(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_4, closure_3];
  const items1 = [arg0, arg1];
  return _require(586).useStateFromStores(items, () => {
    const items = [closure_1_4, closure_1_3];
    return closure_1_5(closure_0, closure_1, items);
  }, items1);
};
export { getHighestHoistedRole };