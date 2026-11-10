// === Module 11633: badgeUnlockArt ===

// Module 11633 (badgeUnlockArt)
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 11619 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/badgeUnlockArt.tsx");

export function getBadgeUnlockArt(badge, displayTier, arg2) {
  const obj = { artUrl: null, rasterUrl: null, animatedUrl: null };
  if (arg2) {
    let prop;
    if (displayTier != null) {
      prop = displayTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url;
      if (displayTier != null) {
        simple_icon_url = displayTier.simple_icon_url;
      }
      prop = simple_icon_url;
    }
    obj.artUrl = prop;
    let prop1;
    if (displayTier != null) {
      prop1 = displayTier.simple_icon_raster_url;
    }
    obj.rasterUrl = prop1;
    let prop2;
    if (displayTier != null) {
      prop2 = displayTier.complex_icon_animated_url;
    }
    obj.animatedUrl = prop2;
    let tmp6 = obj;
  } else {
    obj.artUrl = BadgeDetailsUtils.getBadgeArtUrls(badge, displayTier, true).imageUrl;
    let prop3;
    if (displayTier != null) {
      prop3 = displayTier.simple_icon_raster_url;
    }
    if (prop3 == null) {
      prop3 = badge.simple_icon_raster_url;
    }
    obj.rasterUrl = prop3;
    obj.animatedUrl = BadgeDetailsUtils.getBadgeArtUrls(badge, displayTier, false).animatedUrl;
    tmp6 = obj;
    const tmp2Result = BadgeDetailsUtils;
  }
  return tmp6;
}