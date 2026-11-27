// === Module 18042: WaterwheelsDiscoverNavigation ===

// Module 18042 (WaterwheelsDiscoverNavigation)
import transitionToGuild from "transitionToGuild" /* 8601 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 8922 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 18043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;

require = fn;
const Constants = fn(1071);
({ ME: closure_4, WATERWHEELS: hasOwnProperty } = Constants);
const WaterwheelsDiscoverNavigation = "WaterwheelsDiscoverNavigation";
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverNavigation.tsx");

export function selectWaterwheelsDiscoverFromGuildsBar() {
  let flag = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation);
  if (flag) {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(hasOwnProperty);
    flag = true;
  }
  return flag;
}
export function selectWaterwheelsDiscover() {
  let flag = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation);
  if (flag) {
    transitionToGuild.transitionToGuild(hasOwnProperty);
    flag = true;
    const tmpResult = transitionToGuild;
  }
  return flag;
}
export function leaveWaterwheelsDiscover() {
  if (SelectedGuildStore.getGuildId() === hasOwnProperty) {
    transitionToGuild.transitionToGuild(React4);
  }
}