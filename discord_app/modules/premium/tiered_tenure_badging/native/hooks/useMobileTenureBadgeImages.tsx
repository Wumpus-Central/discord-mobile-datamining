// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef13965 from "../../../../../../_runtime/metro/13965__.js";
import _modDef13966 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef13967 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef13968 from "../../../../../../_runtime/metro/13968__.js";
import _modDef13969 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef13970 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef13971 from "../../../../../../_runtime/metro/13971__.js";
import _modDef13972 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef13973 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef13974 from "../../../../../../_runtime/metro/13974__.js";
import _modDef13975 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef13976 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef13977 from "../../../../../../_runtime/metro/13977__.js";
import _modDef13978 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef13979 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef13980 from "../../../../../../_runtime/metro/13980__.js";
import _modDef13981 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef13982 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef13983 from "../../../../../../_runtime/metro/13983__.js";
import _modDef13984 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef13985 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef13986 from "../../../../../../_runtime/metro/13986__.js";
import _modDef13987 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef13988 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13965, medium: _modDef13966, large: _modDef13967 };
const obj2 = { small: _modDef13965, medium: _modDef13966, large: _modDef13967 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13968, medium: _modDef13969, large: _modDef13970 };
const obj3 = { small: _modDef13968, medium: _modDef13969, large: _modDef13970 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13971, medium: _modDef13972, large: _modDef13973 };
const obj4 = { small: _modDef13971, medium: _modDef13972, large: _modDef13973 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13974, medium: _modDef13975, large: _modDef13976 };
const obj5 = { small: _modDef13974, medium: _modDef13975, large: _modDef13976 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13977, medium: _modDef13978, large: _modDef13979 };
const obj6 = { small: _modDef13977, medium: _modDef13978, large: _modDef13979 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13980, medium: _modDef13981, large: _modDef13982 };
const obj7 = { small: _modDef13980, medium: _modDef13981, large: _modDef13982 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13983, medium: _modDef13984, large: _modDef13985 };
const obj8 = { small: _modDef13983, medium: _modDef13984, large: _modDef13985 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13986, medium: _modDef13987, large: _modDef13988 };
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
