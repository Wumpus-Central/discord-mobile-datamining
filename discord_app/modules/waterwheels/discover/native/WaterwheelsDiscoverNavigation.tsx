// === Module 17876: WaterwheelsDiscoverNavigation ===

// Module 17876 (WaterwheelsDiscoverNavigation)
import transitionToGuild from "transitionToGuild" /* 6743 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9939 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17877 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4856 */;

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