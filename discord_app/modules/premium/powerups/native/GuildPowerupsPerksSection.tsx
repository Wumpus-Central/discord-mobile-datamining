// === Module 12243: GuildPowerupsPerksSection ===

// Module 12243 (GuildPowerupsPerksSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader" /* 12226 */;
import GuildPowerupsSinglePerkCardDefault from "GuildPowerupsSinglePerkCard" /* 12244 */;
import GuildPowerupsMultiPerkCardDefault from "GuildPowerupsMultiPerkCard" /* 12246 */;
import GuildPowerupsGameServerCardDefault from "GuildPowerupsGameServerCard" /* 12248 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = { flexDirection: "column", gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let intl;
  let intl2;
  let items;
  let tmp12;
  let obj = guildId(576);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  const listings = guildId.listings;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: intl.string(_modDef2553.TV3Vm8), description: intl2.string(_modDef2553.STx9hp) };
    const tmp8 = GuildPowerupsSectionHeaderDefault;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    const tmp9 = closure_4(tmp8, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp11;
    if (cResult[2] === listings) {
      tmp11 = cResult[3];
    }
    if (cResult[6] === tmp4.container) {
      let tmp14;
      if (cResult[7] === tmp11) {
        tmp14 = cResult[8];
      }
      return tmp14;
    }
    const obj3 = { children: items };
    items = [first, ];
    const obj4 = { style: tmp10, children: tmp11 };
    items[1] = closure_4(View, obj4);
    const tmp19 = closure_6(closure_5, obj3);
    cResult[6] = tmp4.container;
    cResult[7] = tmp11;
    cResult[8] = tmp19;
    tmp14 = tmp19;
  }
  if (cResult[4] !== guildId) {
    const fn = function v(type, arg1) {
      type = type.type;
      if ("singlePerk" === type) {
        const obj2 = { guildId, powerup: null, badge: null };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return React3(GuildPowerupsSinglePerkCardDefault, obj2, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guildId, listing: type };
        const tmp11 = GuildPowerupsMultiPerkCardDefault;
        return React3(tmp11, obj5, "" + type.group + "-" + arg1);
      } else if ("gameServer" === type) {
        const _HermesInternal = HermesInternal;
        const obj = { guildId };
        const tmp5 = GuildPowerupsGameServerCardDefault;
        return React3(tmp5, obj, "game-server-" + arg1);
      } else {
        return null;
      }
    };
    cResult[4] = guildId;
    cResult[5] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[5];
  }
  const mapped = listings.map(tmp12);
  cResult[1] = guildId;
  cResult[2] = listings;
  cResult[3] = mapped;
  tmp11 = mapped;
}) : ((arg0) => {
  let guildId;
  let intl;
  let intl2;
  let items;
  let listings;
  ({ guildId: require, listings } = arg0);
  let obj = { children: items };
  const tmp = closure_7();
  let obj2 = { title: intl.string(_modDef2553.TV3Vm8), description: intl2.string(_modDef2553.STx9hp) };
  const tmp2 = GuildPowerupsSectionHeaderDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  items = [closure_4(tmp2, obj2), ];
  const obj3 = {
    style: tmp.container,
    children: listings.map((type, index) => {
      type = type.type;
      if ("singlePerk" === type) {
        const obj2 = { guildId: require, powerup: null, badge: null };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return React3(GuildPowerupsSinglePerkCardDefault, obj2, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guildId: require, listing: type };
        const tmp11 = GuildPowerupsMultiPerkCardDefault;
        return React3(tmp11, obj5, "" + type.group + "-" + index);
      } else if ("gameServer" === type) {
        const _HermesInternal = HermesInternal;
        const obj = { guildId: require };
        const tmp5 = GuildPowerupsGameServerCardDefault;
        return React3(tmp5, obj, "game-server-" + index);
      } else {
        return null;
      }
    })
  };
  items[1] = closure_4(View, obj3);
  return closure_6(closure_5, obj);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default tmp3;