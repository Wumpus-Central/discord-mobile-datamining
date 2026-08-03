import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
function getHighestHoistedRole(arg0, arg1) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [createGuildRecordFromRust, trackCommunicationDisabled];
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
          highestHoistedRole = importAll(3888).getHighestHoistedRole(guild, member);
          const obj3 = importAll(3888);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const result = require("applyOverwrites").fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default function useGuildMemberDisplayRole(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [createGuildRecordFromRust, trackCommunicationDisabled];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    const items = [outer1_4, outer1_3];
    return outer1_5(closure_0, closure_1, items);
  }, items1);
};
export { getHighestHoistedRole };