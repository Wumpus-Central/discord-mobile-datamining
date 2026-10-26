// discord_app/modules/conjure/tips/native/ConjureBotPermissionsTip.tsx
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import ConjureTipHintDefault from "ConjureTipHint.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BotPermissionsHint(projectId) {
      const cResult = require("c").c(5);
      projectId = projectId.projectId;
      context = noop.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
      if (cResult[0] === context) {
        if (cResult[1] === projectId) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp5) {
          const obj2 = { icon: tmp(tmp2[9]).ShieldIcon, children: tmp5 };
          const tmp11 = jsx(projectId(tmp2[8]), { icon: tmp(tmp2[9]).ShieldIcon, children: tmp5 });
          cResult[3] = tmp5;
          cResult[4] = tmp11;
          let tmp7 = tmp11;
          const tmp10 = projectId(tmp2[8]);
        } else {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const intl = tmp(tmp2[6]).intl;
      let obj3 = { onReview: null };
      _require = asyncGeneratorStep(async () => {
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
            return { value: "IconComponent", done: null };
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
              } else if (null != context) {
                c1 = 1;
                v3 = 1;
                const obj5 = {
                  value: v3(closure_1_2[5]).requestConjureInstallConsent(projectId, tmp5.guildId),
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
            return { value: "IconComponent", done: null };
          } catch (tmp10) {
            v3 = tmp;
            throw tmp10;
          }
        }
      });
      obj3.onReview = function onReview() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      const formatResult = intl.format(projectId(context[7])["0S9HY8"], obj3);
      cResult[0] = context;
      cResult[1] = projectId;
      cResult[2] = formatResult;
      tmp5 = formatResult;
      let obj = require("c");
    }
  : function BotPermissionsHint(projectId) {
      projectId = projectId.projectId;
      dependencyMap = noop.useContext(projectId(11765).ConjurePublishActionContext);
      let obj = { icon: projectId(10954).ShieldIcon, children: null };
      const intl = projectId(1128).intl;
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
            return { value: "IconComponent", done: null };
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
                  value: v3(closure_1_2[5]).requestConjureInstallConsent(projectId, tmp5.guildId),
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
            return { value: "IconComponent", done: null };
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
      obj.children = intl.format(_modDef3830["0S9HY8"], obj2);
      return jsx(ConjureTipHintDefault, { icon: projectId(10954).ShieldIcon, children: null });
    };
let obj2 = {};
const merged = Object.assign(fn(12330).CONJURE_BOT_PERMISSIONS_TIP_BASE);
obj2.render = function render(arg0, context) {
  return <closure_6 projectId={context.context.projectId} />;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureBotPermissionsTip.tsx");

export const CONJURE_BOT_PERMISSIONS_TIP = obj2;
