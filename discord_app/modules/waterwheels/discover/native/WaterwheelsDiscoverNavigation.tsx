// discord_app/modules/waterwheels/discover/native/WaterwheelsDiscoverNavigation.tsx
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import WaterwheelsDiscoverExperiment from "../../WaterwheelsDiscoverExperiment.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "../../../guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

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
