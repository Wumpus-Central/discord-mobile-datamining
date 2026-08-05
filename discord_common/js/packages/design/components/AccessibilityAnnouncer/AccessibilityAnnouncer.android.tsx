// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx
import { AccessibilityInfo } from "get ActivityIndicator";

let result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = require("AccessibilityAnnouncerLiveRegion.native.tsx") /* updateAccessibilityAnnouncerLiveRegionMessage */.updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = require("AccessibilityAnnouncerLiveRegion.native.tsx") /* updateAccessibilityAnnouncerLiveRegionMessage */;
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};