// discord_app/modules/guild_settings/native/MembersPruneActionSheet.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import CACHE_TTL_MS from "../../guild_mod_dash_member_safety/PrunePreviewStore.tsx";
import closure_8 from "../../../stores/GuildStore.tsx";
import closure_9 from "../../../stores/PermissionStore.tsx";
import closure_10 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function MembersPruneActionSheetContent(guild) {
  guild = guild.guild;
  let id;
  let first;
  let callback;
  let num;
  id = guild.id;
  let tmp = callback(num.useState(7), 2);
  first = tmp[0];
  callback = tmp[1];
  const tmp3 = callback2(guild.id, first, []);
  num = tmp3.count;
  const items = [guild.id, first];
  const effect = num.useEffect(() => {
    function handlePruneUpdate(guildId) {
      if (guildId.guildId === handlePruneUpdate.id) {
        if (guildId.prune.isPreview) {
          const _Number = Number;
          closure_1_6(
            guildId.guildId,
            guildId.prune.days,
            guildId.prune.includeRoles,
            Number(guildId.prune.pruneCount),
            guildId.prune.isFinished,
          );
        }
      }
    }
    const subscription = id(first[7]).subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    return () => {
      id(first[7]).unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    };
  }, items);
  const items1 = [guild.id, first, num];
  const effect1 = num.useEffect(() => {
    if (null == num) {
      id(first[8]).updateEstimateV2(guild.id, first);
      const obj = id(first[8]);
    }
  }, items1);
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = guild(first[11]).intl;
  obj[0] = intl.string(guild(first[11]).t.zbyz7p);
  obj[0] = callback3(guild(first[10]).BottomSheetTitleHeader, obj);
  obj = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl2 = guild(first[11]).intl;
  obj[0] = intl2.string(guild(first[11]).t.YccTvK);
  obj[1] = first;
  obj[2] = function onChange(arg0) {
    let tmp = first !== arg0;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      callback(arg0);
    }
  };
  obj1 = { value: 7, label: null };
  const intl3 = guild(first[11]).intl;
  obj1[1] = intl3.formatToPlainString(guild(first[11]).t.FM1dHS, { days: 7 });
  const items2 = [callback3(guild(first[13]).TableRadioRow, obj1)];
  let obj2 = { value: 30, label: null };
  const intl4 = guild(first[11]).intl;
  obj2[1] = intl4.formatToPlainString(guild(first[11]).t.FM1dHS, { days: 30 });
  items2[1] = callback3(guild(first[13]).TableRadioRow, obj2);
  obj[4] = items2;
  const items3 = [callback4(guild(first[12]).TableRadioGroup, obj), ,];
  const intl5 = guild(first[11]).intl;
  const t = guild(first[11]).t;
  if (num == null) {
    num = -1;
  }
  items3[1] = callback3(guild(first[14]).Text, {
    variant: "text-sm/medium",
    children: intl5.format(tmp3.isLoading ? t["98cHOp"] : t.f13az9, { members: num, days: first }),
  });
  const obj4 = {
    variant: "destructive",
    onPress() {
      let tmp2 = null != id;
      if (tmp2) {
        tmp2 = null != first;
      }
      if (tmp2) {
        id(first[8]).prune(id, first);
        const obj = id(first[8]);
        id(first[16]).hideActionSheet();
        closure_1_7();
        const obj2 = id(first[16]);
      }
    },
    text: null,
  };
  const intl6 = tmp7(tmp8[11]).intl;
  obj4[2] = intl6.string(guild(first[11]).t["2mIlKQ"]);
  items3[2] = callback3(guild(first[15]).Button, obj4);
  obj[1] = items3;
  return callback4(guild(first[9]).ActionSheet, obj);
}
({ usePrunePreview: c5, setPrunePreview: closure_6, clearAllPrunePreviews: error } = CACHE_TTL_MS);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default function MembersPruneActionSheet(guild) {
  guild = guild.guild;
  let stateFromStores;
  let obj = guild(504);
  const items = [closure_8, closure_9, closure_10];
  const items1 = [guild];
  stateFromStores = obj.useStateFromStores(
    items,
    () => {
      guild = closure_1_8.getGuild(guild.id);
      return guild(closure_1_2[18]).canPruneGuildMembers(guild, closure_1_10.getCurrentUser(), closure_1_9);
    },
    items1,
  );
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      stateFromStores(closure_1_2[16]).hideActionSheet();
      const obj = stateFromStores(closure_1_2[16]);
    }
  }, items2);
  let tmp3 = null;
  if (stateFromStores) {
    obj = { guild: null };
    obj[0] = guild;
    tmp3 = callback3(MembersPruneActionSheetContent, obj);
  }
  return tmp3;
}
