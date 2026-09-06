// === Module 7903: useHandleJoinThreadVoice ===

// Module 7903 (useHandleJoinThreadVoice)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useHandleJoinThreadVoice.tsx");

export default function useHandleJoinThreadVoice(arg0) {
  closure_0 = arg0;
  return asyncGeneratorStep(async () => {
    guildId = guildId.getGuildId();
    closure_128_0 = guildId;
    if (null != guildId) {
      if (obj8.shouldShowMembershipVerificationGate(guildId)) {
        c2 = 1;
        c3 = 1;
        return { value: guildId(c2[4])(c2[3], c2.paths), done: false };
      }
      obj8 = guildId(c2[2]);
    }
    await tmp2(c2[5]).unarchiveThreadIfNecessary(guildId.id);
    if (2 === tmp5) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        return { value, done: true };
      } else if (!JoinedThreadsStore.hasJoined(closure_129_0.id)) {
        c2 = 3;
        c3 = 1;
        tmp2(c2[5]);
        return { value: tmp2(c2[5]).joinThread(closure_129_0, "Join Voice"), done: false };
      }
    } else if (3 === tmp5) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        return { value, done: true };
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 3;
      return { value, done: true };
    } else {
      value.openGuildVoiceModal(closure_129_0, "Thread Header");
      c3 = 3;
      return { value: "HermesInternal", done: null };
    }
    await guildId(c2[4])(c2[6], c2.paths);
    return value.openMemberVerificationModal(closure_128_0);
  });
};