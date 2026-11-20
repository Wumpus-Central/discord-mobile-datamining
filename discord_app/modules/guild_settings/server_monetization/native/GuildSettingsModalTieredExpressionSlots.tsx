// === Module 19668: GuildSettingsModalTieredExpressionSlots ===

// Module 19668 (GuildSettingsModalTieredExpressionSlots)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(1071).AppliedGuildBoostsRequiredForBoostedGuildTier;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/native/GuildSettingsModalTieredExpressionSlots.tsx");

export default function GuildSettingsModalTieredExpressionSlots(tiers) {
  tiers = tiers.tiers;
  ({ guildTier: importDefault, hasIcons } = tiers);
  if (hasIcons === undefined) {
    hasIcons = true;
  }
  ({ renderUnlockedSubLabel: closure_3, renderSlot: closure_4 } = tiers);
  return closure_4(tiers(hasIcons[3]).Stack, {
    spacing: require("native").space.PX_16,
    children: tiers.map((item, index) => {
      tiers = item;
      ({ tier, IconComponent } = item);
      ({ title, numSlots } = item);
      closure_1 = require("apply").sumBy(tiers.slice(0, index), "numSlots");
      const obj2 = { hasIcons, children: null };
      let tmp5Result;
      if (null != IconComponent) {
        let str = "premium-nitro-pink-text";
        if (tmp) {
          str = "icon-muted";
        }
        const obj3 = { color: str };
        tmp5Result = closure_1_4(IconComponent, obj3);
      }
      const obj4 = { icon: tmp5Result, label: title, subLabel: null, trailing: null };
      if (closure_1 < tier) {
        const intl = tmp4(hasIcons[8]).intl;
        const obj5 = { required: dependencyMap[tier], decorator: "" };
        let formatResult = intl.format(tmp4(hasIcons[8]).t.t2Wbo1, obj5);
      } else if (dependencyMap != null) {
        formatResult = dependencyMap(item);
      }
      obj4.subLabel = formatResult;
      let tmp5Result2;
      if (closure_1 < tier) {
        tmp5Result2 = closure_1_4(tmp4(hasIcons[9]).LockIcon, { color: "icon-muted" });
      }
      obj4.trailing = tmp5Result2;
      items = [closure_1_4(tiers(hasIcons[7]).TableRow, obj4), ];
      const obj = require("apply");
      items[1] = Array.from({ length: numSlots }).map((item, index) => closure_2_4(closure_0, closure_1 + index));
      obj2.children = items;
      return closure_1_5(tiers(hasIcons[6]).TableRowGroup, obj2, tier);
    })
  });
};