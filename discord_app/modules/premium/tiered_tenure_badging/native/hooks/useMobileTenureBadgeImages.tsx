// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef13963 from "../../../../../../_runtime/metro/13963__.js";
import _modDef13964 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef13965 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef13966 from "../../../../../../_runtime/metro/13966__.js";
import _modDef13967 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef13968 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef13969 from "../../../../../../_runtime/metro/13969__.js";
import _modDef13970 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef13971 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef13972 from "../../../../../../_runtime/metro/13972__.js";
import _modDef13973 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef13974 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef13975 from "../../../../../../_runtime/metro/13975__.js";
import _modDef13976 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef13977 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef13978 from "../../../../../../_runtime/metro/13978__.js";
import _modDef13979 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef13980 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef13981 from "../../../../../../_runtime/metro/13981__.js";
import _modDef13982 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef13983 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef13984 from "../../../../../../_runtime/metro/13984__.js";
import _modDef13985 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef13986 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13963, medium: _modDef13964, large: _modDef13965 };
const obj2 = { small: _modDef13963, medium: _modDef13964, large: _modDef13965 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13966, medium: _modDef13967, large: _modDef13968 };
const obj3 = { small: _modDef13966, medium: _modDef13967, large: _modDef13968 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13969, medium: _modDef13970, large: _modDef13971 };
const obj4 = { small: _modDef13969, medium: _modDef13970, large: _modDef13971 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13972, medium: _modDef13973, large: _modDef13974 };
const obj5 = { small: _modDef13972, medium: _modDef13973, large: _modDef13974 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13975, medium: _modDef13976, large: _modDef13977 };
const obj6 = { small: _modDef13975, medium: _modDef13976, large: _modDef13977 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13978, medium: _modDef13979, large: _modDef13980 };
const obj7 = { small: _modDef13978, medium: _modDef13979, large: _modDef13980 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13981, medium: _modDef13982, large: _modDef13983 };
const obj8 = { small: _modDef13981, medium: _modDef13982, large: _modDef13983 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13984, medium: _modDef13985, large: _modDef13986 };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx",
);

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}
