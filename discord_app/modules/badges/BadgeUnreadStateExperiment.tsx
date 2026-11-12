// === Module 11753: BadgeUnreadStateExperiment ===

// Module 11753 (BadgeUnreadStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-10-badges-unread-state", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  const _location = location.location;
  const hasUnread = location.hasUnread;
  items = [_location(hasUnread[0]).ApexExperimentStore];
  const items1 = [hasUnread, _location];
  return _location(hasUnread[1]).useStateFromStores(items, () => {
    let enabled = hasUnread;
    if (hasUnread) {
      const obj = { location: _location };
      enabled = config.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
}