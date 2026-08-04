// discord_app/modules/premium/powerups/native/GuildPowerupsPerksSection.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null };
obj = { flexDirection: "column", gap: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  let listings;
  let require;
  ({ guildId: require, listings } = arg0);
  let obj = { children: null };
  obj = { title: null, description: null };
  const tmp = callback3();
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(importDefault(2257).TV3Vm8);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(importDefault(2257).STx9hp);
  const items = [callback(importDefault(11657), obj), ];
  obj = {
    style: tmp.container,
    children: listings.map((type) => {
      type = type.type;
      if ("singlePerk" === type) {
        let obj = { guildId: null, powerup: null, badge: null };
        obj[0] = closure_0;
        ({ powerup: obj3[1], badge: obj3[2] } = type);
        return outer1_4(outer1_1(outer1_2[7]), obj, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        obj = { guildId: null, listing: null };
        obj[0] = closure_0;
        obj[1] = type;
        const _HermesInternal2 = HermesInternal;
        return outer1_4(outer1_1(outer1_2[8]), obj, "" + type.group + "-" + arg1);
      } else if ("gameServer" === type) {
        obj = { guildId: null };
        obj[0] = closure_0;
        const _HermesInternal = HermesInternal;
        return outer1_4(outer1_1(outer1_2[9]), obj, "game-server-" + arg1);
      } else {
        return null;
      }
    })
  };
  items[1] = callback(View, obj);
  obj[0] = items;
  return callback2(closure_5, obj);
};