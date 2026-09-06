// discord_app/modules/changelog/utils/isChangelogChannel.tsx
import ChannelStore from "../../../stores/ChannelStore.tsx";

const SYSTEM_UPDATES_USER_ID = fn(2010).SYSTEM_UPDATES_USER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
}
