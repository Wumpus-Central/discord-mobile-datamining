// discord_app/modules/hub/HubProgressActionCreators.tsx
import Constants from "../../Constants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import HubProgressBarConstants from "HubProgressBarConstants.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const f100877 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = FlagUtils;
      hubProgress.hubProgress = tmp2Result.addFlag(hubProgress.hubProgress, item10008);
      flag = true;
    }
    continue;
  }
  return flag;
};
const HUB_PROGRESS_STEP_ORDER = HubProgressBarConstants.HUB_PROGRESS_STEP_ORDER;
const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, INVITE_USER) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [INVITE_USER];
      const obj = items(2033);
      const result = obj.updateUserGuildSettings(
        guildId,
        f100877,
        items(2033).UserSettingsDelay.INFREQUENT_USER_ACTION,
      );
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(
    id,
    f100877,
    require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
