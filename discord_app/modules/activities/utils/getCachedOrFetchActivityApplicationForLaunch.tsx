// === Module 9537: getCachedOrFetchActivityApplicationForLaunch ===

// Module 9537 (getCachedOrFetchActivityApplicationForLaunch)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
let closure_7 = async function _getCachedOrFetchActivityApplicationForLaunch() {
  closure_3 = tmp3;
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  application = application.getApplication(closure_0);
  if (isUsableApplicationRecord(application)) {
    return application;
  }
  channel = channel.getChannel(closure_1);
  if (channel != null) {
    const guild_id = channel.guild_id;
  }
  let obj2 = { guildId: guild_id };
  await EmbeddedActivitiesActionCreators.fetchShelf(obj2);
  closure_130_1 = value;
  const activityConfigs = closure_130_1.activityConfigs;
  const applications = closure_130_1.applications;
  closure_130_4 = closure_131_1(closure_131_2[5])({ applicationId: closure_130_0, activityConfigs, applications });
  if (closure_130_4 != null) {
    const application1 = closure_130_4.application;
  }
  if (closure_131_8(application1)) {
    if (closure_130_4 != null) {
      const application2 = closure_130_4.application;
    }
    return application2;
  }
  obj2 = closure_131_0(closure_131_2[6]);
  await obj2.fetchApplication(closure_130_0);
  closure_130_5 = value;
  return closure_131_5.createFromServer(closure_130_5);
};
function isUsableApplicationRecord(embeddedActivityConfig) {
  return null != embeddedActivityConfig && null != embeddedActivityConfig.embeddedActivityConfig;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx");

export default function getCachedOrFetchActivityApplicationForLaunch() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};