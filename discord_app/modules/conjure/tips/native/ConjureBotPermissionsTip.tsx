// discord_app/modules/conjure/tips/native/ConjureBotPermissionsTip.tsx
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import ConjureTipHintDefault from "ConjureTipHint.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
function BotPermissionsHint(projectId) {
  projectId = projectId.projectId;
  dependencyMap = noop.useContext(projectId(12400).ConjurePublishActionContext);
  let obj = { icon: projectId(11255).ShieldIcon, children: null };
  const intl = projectId(1114).intl;
  const obj2 = { onReview: null };
  importDefault = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != closure_2) {
            c1 = 1;
            v3 = 1;
            const obj5 = {
              value: v3(closure_1_2[3]).requestConjureInstallConsent(projectId, tmp5.guildId),
              done: false,
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        v3 = tmp;
        throw tmp10;
      }
    }
  });
  obj2.onReview = function onReview() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.children = intl.format(_modDef3865["0S9HY8"], obj2);
  return jsx(ConjureTipHintDefault, { icon: projectId(11255).ShieldIcon, children: null });
}
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(12589).CONJURE_BOT_PERMISSIONS_TIP_BASE);
obj.render = function render(arg0, context) {
  return <BotPermissionsHint projectId={context.context.projectId} />;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureBotPermissionsTip.tsx");

export const CONJURE_BOT_PERMISSIONS_TIP = obj;
