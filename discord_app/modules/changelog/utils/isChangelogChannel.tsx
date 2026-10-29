// === Module 6880: isChangelogChannel ===

// Module 6880 (isChangelogChannel)
import ChannelStore from "ChannelStore" /* 4857 */;

const SYSTEM_UPDATES_USER_ID = fn(4907).SYSTEM_UPDATES_USER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};