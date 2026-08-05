// discord_app/modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [createGuildRecordFromRust];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => {
    const guild = outer1_4.getGuild(callback);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      guildSupportsTagsResult = callback(stateFromStores[3]).guildSupportsTags(guild);
      const obj = callback(stateFromStores[3]);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return React.useMemo(() => {
    if ("guildTagsBadgePacks" === lib.group) {
      let obj = { title: null, description: null, image: null, disabledReason: null, badge: "T", forceStaticImages: "T" };
      const intl = callback(stateFromStores[4]).intl;
      obj[0] = intl.string(lib(stateFromStores[5]).KC9HRW);
      const intl2 = callback(stateFromStores[4]).intl;
      obj[1] = intl2.string(lib(stateFromStores[5]).GJiSmP);
      obj = { staticUrl: null, animatedUrl: null };
      obj[0] = lib(stateFromStores[6]);
      obj[1] = lib(stateFromStores[7]);
      obj[2] = obj;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = callback(stateFromStores[4]).intl;
        stringResult = intl3.string(lib(stateFromStores[5]).lvk1Gc);
      }
      obj[3] = stringResult;
      return obj;
    } else {
      obj = callback(stateFromStores[8]);
      obj.assertNever(tmp.group);
    }
  }, items1);
};