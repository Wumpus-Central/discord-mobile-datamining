// === Module 11819: BadgeUnreadStateExperiment ===

// Module 11819 (BadgeUnreadStateExperiment)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ApexExperiment = fn(1452);
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-10-badges-unread-state", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  const _location = location.location;
  const hasUnread = location.hasUnread;
  items = [_location(hasUnread[2]).ApexExperimentStore];
  const items1 = [hasUnread, _location];
  let stateFromStores = _location(hasUnread[3]).useStateFromStores(items, () => {
    let enabled = hasUnread;
    if (hasUnread) {
      const obj = { location: _location };
      enabled = config.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const first = tmp2[0];
  let tmp4 = stateFromStores;
  if (stateFromStores) {
    tmp4 = !first;
  }
  if (tmp4) {
    tmp2[1](true);
  }
  if (!stateFromStores) {
    stateFromStores = first;
  }
  return stateFromStores;
}