// === Module 7476: subscribeGuildMembers ===

// Module 7476 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import noop from "module_19" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6754 */;

const require = fn;
let c5 = false;
const size = fn(2);
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export function useSubscribeGuildMembers(memo, AddMembersActionSheet) {
  closure_0 = memo;
  closure_1 = AddMembersActionSheet;
  const items = [memo, AddMembersActionSheet];
  const effect = noop.useEffect(() => {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c5;
      if (!c5) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c5 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1243).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1243);
      }
      closure_0(7445).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7445);
    });
    return () => {
      const item = reason(12).forEach(guild_id, (userIds, guildId) => closure_1_0(closure_1_2[4]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
}
export function useEnsureHydratedGuildUsers(guild_id, items1) {
  closure_0 = guild_id;
  const items = [guild_id, items1];
  const memo = noop.useMemo(() => {
    if (0 === items1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  items1 = [guild_id, ];
  items1[1] = items1;
  const effect = noop.useEffect(() => {
    const item = items1.forEach((item) => GuildMemberRequesterStore.requestMember(guild_id, item));
  }, items1);
  closure_129_0 = memo;
  closure_129_1 = "useEnsureHydratedGuildUsers";
  const items2 = [memo, "useEnsureHydratedGuildUsers"];
  const effect1 = noop.useEffect(() => {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c5;
      if (!c5) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c5 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1243).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1243);
      }
      closure_0(7445).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7445);
    });
    return () => {
      const item = reason(12).forEach(guild_id, (userIds, guildId) => closure_1_0(closure_1_2[4]).unsubscribeMembers(guildId, userIds));
    };
  }, items2);
}