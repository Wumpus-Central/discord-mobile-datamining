// discord_app/modules/guild_member/useGuildMemberVerification.tsx
import apply from "../../../_runtime/00012_apply.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/useGuildMemberVerification.tsx");

export default function useGuildMemberVerification(arg0) {
  closure_0 = arg0;
  items = [arg0];
  const memo = noop.useMemo(() => {
    c1 = null;
    closure_2 = apply.debounce((arg0) => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = arg0.length > 0;
      }
      if (tmp2) {
        closure_0(memo[2]).verifyGuildMembers(closure_0, arg0);
        const obj = closure_0(memo[2]);
      }
    }, 500);
    function verifier(join) {
      const joined = join.join(",");
      if (joined !== c1) {
        c1 = joined;
        closure_2(join);
      }
    }
    verifier.cancel = () => {
      c1 = null;
      closure_2.cancel();
    };
    return verifier;
  }, items);
  const items1 = [memo];
  const effect = noop.useEffect(() => () => memo.cancel(), items1);
  return memo;
}
