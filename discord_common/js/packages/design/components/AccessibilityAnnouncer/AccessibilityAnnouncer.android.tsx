// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion.native.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const AccessibilityInfo = react_native.AccessibilityInfo;
let obj = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const obj = AccessibilityAnnouncerLiveRegion;
      const result = obj.updateAccessibilityAnnouncerLiveRegionMessage(intl);
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  },
};
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx",
);

export const AccessibilityAnnouncer = obj;
