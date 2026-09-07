// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11164 from "../../../../../../_runtime/metro/11164__.js";
import _modDef11165 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11166 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11167 from "../../../../../../_runtime/metro/11167__.js";
import _modDef11168 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11169 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11170 from "../../../../../../_runtime/metro/11170__.js";
import _modDef11171 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11172 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11173 from "../../../../../../_runtime/metro/11173__.js";
import _modDef11174 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11175 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11176 from "../../../../../../_runtime/metro/11176__.js";
import _modDef11177 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11178 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11179 from "../../../../../../_runtime/metro/11179__.js";
import _modDef11180 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11181 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11182 from "../../../../../../_runtime/metro/11182__.js";
import _modDef11183 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11184 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11185 from "../../../../../../_runtime/metro/11185__.js";
import _modDef11186 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11187 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11164, medium: _modDef11165, large: _modDef11166 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11167, medium: _modDef11168, large: _modDef11169 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11170, medium: _modDef11171, large: _modDef11172 };
const obj1 = { small: _modDef11170, medium: _modDef11171, large: _modDef11172 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11173, medium: _modDef11174, large: _modDef11175 };
const obj2 = { small: _modDef11173, medium: _modDef11174, large: _modDef11175 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11176, medium: _modDef11177, large: _modDef11178 };
const obj3 = { small: _modDef11176, medium: _modDef11177, large: _modDef11178 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11179, medium: _modDef11180, large: _modDef11181 };
const obj4 = { small: _modDef11179, medium: _modDef11180, large: _modDef11181 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11182, medium: _modDef11183, large: _modDef11184 };
const obj5 = { small: _modDef11182, medium: _modDef11183, large: _modDef11184 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11185, medium: _modDef11186, large: _modDef11187 };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx",
);

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
};
export const getMobileTenureBadgeImages = function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
};
