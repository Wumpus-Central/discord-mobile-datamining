// === Module 19024: WaterwheelsDiscoverNavigation ===

// Module 19024 (WaterwheelsDiscoverNavigation)
import transitionToGuild from "transitionToGuild" /* 7231 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10215 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 19025 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5339 */;

require = fn;
const Constants = fn(1072);
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
  if (obj.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation)) {
    transitionToGuild.transitionToGuild(hasOwnProperty);
    const tmpResult = transitionToGuild;
  }
  obj = WaterwheelsDiscoverExperiment;
}
export function leaveWaterwheelsDiscover() {
  if (SelectedGuildStore.getGuildId() === hasOwnProperty) {
    transitionToGuild.transitionToGuild(React4);
  }
}