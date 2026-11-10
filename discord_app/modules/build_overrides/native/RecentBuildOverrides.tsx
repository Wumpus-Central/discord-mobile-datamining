// === Module 13447: RecentBuildOverrides ===

// Module 13447 (RecentBuildOverrides)
import Storage3 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

const recentDeviceBuildOverrides = "recentDeviceBuildOverrides";
let result = size.fileFinishedImporting("modules/build_overrides/native/RecentBuildOverrides.tsx");

export function getRecentDeviceBuildOverrides() {
  const Storage = Storage3.Storage;
  items = Storage.get(recentDeviceBuildOverrides);
  if (!Array.isArray(items)) {
    items = [];
  }
  return items;
}
export function recordDeviceBuildOverride(arg0) {
  const id = arg0;
  const Storage = Storage3.Storage;
  let items1 = Storage.get(recentDeviceBuildOverrides);
  if (!Array.isArray(items1)) {
    items1 = [];
  }
  const Storage2 = Storage3.Storage;
  items = [arg0, ...items1.filter((id) => id.id !== id.id || id.type !== tmp.type)];
  const result = Storage2.set(recentDeviceBuildOverrides, items.slice(0, 5));
}