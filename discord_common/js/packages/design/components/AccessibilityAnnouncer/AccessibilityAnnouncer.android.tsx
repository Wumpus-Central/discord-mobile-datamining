// === Module 1350: AccessibilityAnnouncer ===

// Module 1350 (AccessibilityAnnouncer)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1351 */;

const AccessibilityInfo = get_ActivityIndicator.AccessibilityInfo;
let result = set.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = updateAccessibilityAnnouncerLiveRegionMessage.updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = updateAccessibilityAnnouncerLiveRegionMessage;
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};