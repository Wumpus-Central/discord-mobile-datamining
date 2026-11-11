// === Module 11560: useVerifyMentionResults ===

// Module 11560 (useVerifyMentionResults)
import useGuildMemberVerificationDefault from "useGuildMemberVerification" /* 11561 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/useVerifyMentionResults.tsx");

export default function useVerifyMentionResults(arg0, arg1) {
  closure_0 = arg1;
  const tmp = useGuildMemberVerificationDefault(arg0);
  closure_1 = tmp;
  items = [arg1, tmp];
  const effect = noop.useEffect(() => {
    if (null == closure_0) {
      closure_1.cancel();
    } else {
      closure_1(tmp);
    }
  }, items);
};