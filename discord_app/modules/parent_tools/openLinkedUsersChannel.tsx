// === Module 10550: openLinkedUsersChannel ===

// Module 10550 (openLinkedUsersChannel)
import transitionToChannel from "transitionToChannel" /* 5751 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4858 */;

require = fn;
let closure_5 = async function _openLinkedUsersChannel(arg0) {
  closure_3 = tmp4;
  closure_131_0 = closure_2;
  if (length.length > 1) {
    const tmp11 = (function getGroupDMWithRecipients(items) {
      const set = new Set(items);
      sortedPrivateChannels = sortedPrivateChannels.getSortedPrivateChannels();
      const found = sortedPrivateChannels.find((isGroupDM) => {
        let isGroupDMResult = isGroupDM.isGroupDM();
        if (isGroupDMResult) {
          isGroupDMResult = isGroupDM.recipients.length === set.size;
        }
        if (isGroupDMResult) {
          const recipients = isGroupDM.recipients;
          isGroupDMResult = recipients.every((item) => set.has(item));
        }
        return isGroupDMResult;
      });
      let id;
      if (found != null) {
        id = found.id;
      }
      return id;
    })(length);
    if (null != tmp11) {
      onBeforeTransition();
      transitionToChannel.transitionToChannel(tmp11, { navigationReplace: true });
      c6 = 3;
      return { value: undefined, done: true };
    }
  }
  await ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: length, onBeforeTransition });
  if (1 === tmp7) {
    c5 = 0;
    closure_131_0();
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c5 = 0;
  }
  return value;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/openLinkedUsersChannel.tsx");

export default function openLinkedUsersChannel() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};