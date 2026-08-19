// discord_app/modules/changelog/utils/isChangelogChannel.tsx
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import { SYSTEM_UPDATES_USER_ID } from "../ChangelogConstants.tsx";

const result = require("obj132").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};