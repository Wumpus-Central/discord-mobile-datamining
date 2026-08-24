// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx
import set from "../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import updateAccessibilityAnnouncerLiveRegionMessage from "AccessibilityAnnouncerLiveRegion.native.tsx";

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