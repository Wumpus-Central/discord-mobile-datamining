// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion.native.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const AccessibilityInfo = _mod17.AccessibilityInfo;
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx",
);

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
  },
};
