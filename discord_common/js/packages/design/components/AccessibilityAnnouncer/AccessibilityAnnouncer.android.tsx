// === Module 1351: AccessibilityAnnouncer ===

// Module 1351 (AccessibilityAnnouncer)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1352 */;

const AccessibilityInfo = get_ActivityIndicator.AccessibilityInfo;
let result = obj132.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = updateAccessibilityAnnouncerLiveRegionMessage.updateAccessibilityAnnouncerLiveRegionMessage(intl);
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};