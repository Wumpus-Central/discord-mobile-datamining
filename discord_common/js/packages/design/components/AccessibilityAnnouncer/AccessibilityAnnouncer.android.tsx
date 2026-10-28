// === Module 5013: AccessibilityAnnouncer ===

// Module 5013 (AccessibilityAnnouncer)
import _mod17 from "module_17" /* 17 */;
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5014 */;
import size from "module_2" /* 2 */;

const AccessibilityInfo = _mod17.AccessibilityInfo;
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = AccessibilityAnnouncerLiveRegion.updateAccessibilityAnnouncerLiveRegionMessage(intl);
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};