// === Module 7557: useHandleJoinThreadVoice ===

// Module 7557 (useHandleJoinThreadVoice)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import size from "module_2" /* 2 */;

let c2;

const result = size.fileFinishedImporting("modules/threads/native/useHandleJoinThreadVoice.tsx");

export default function useHandleJoinThreadVoice(arg0) {
  let closure_0 = arg0;
  return _asyncToGenerator(async () => {
    let closure_1;
    let guildId = tmp4;
    guildId = guildId.getGuildId();
    if (null != guildId) {
      const obj9 = guildId(c2[2]);
      if (obj9.shouldShowMembershipVerificationGate(guildId)) {
        c2 = 1;
        let c3 = 1;
        const obj5 = { value: guildId(c2[4])(c2[3], c2.paths), done: false };
        return obj5;
      }
    }
    const obj10 = tmp(c2[5]);
    await obj10.unarchiveThreadIfNecessary(guildId.id);
    if (2 === c2) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else if (!JoinedThreadsStore.hasJoined(closure_129_0.id)) {
        const obj3 = tmp(c2[5]);
        c2 = 3;
        c3 = 1;
        const obj12 = { value: obj3.joinThread(closure_129_0, "Join Voice"), done: false };
        return obj12;
      }
    } else if (3 === c2) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj13 = { value, done: true };
        return obj13;
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 3;
      const obj = { value, done: true };
      return obj;
    } else {
      value.openGuildVoiceModal(closure_129_0, "Thread Header");
      c3 = 3;
      return { value: "IconComponent", done: null };
    }
    await guildId(c2[4])(c2[6], c2.paths);
    return value.openMemberVerificationModal(guildId);
  });
};