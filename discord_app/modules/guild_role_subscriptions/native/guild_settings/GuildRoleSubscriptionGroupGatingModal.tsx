// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import FormGuildGatingModeSelectorDefault from "../components/FormGuildGatingModeSelector.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "../components/GuildRoleSubscriptionTierEditStep.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

require = fn;
const constants = fn(15413).GuildRoleSubscriptionsTierScenes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionGroupGatingModal(arg0) {
      const cResult = c.c(8);
      [tmp5, tmp6] = RoleTierEditStore.useGroupIsFullGateState();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.N38nNP);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.csJWVI);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp7 = stringResult;
        tmp8 = stringResult1;
      } else {
        [tmp7, tmp8] = cResult;
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp6) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === arg0) {
          if (cResult[6] === tmp11) {
            let tmp14 = cResult[7];
          }
          return tmp14;
        }
        const obj2 = { title: tmp7, description: tmp8, canProceedToNextStep: true, nextStep: constants.GROUP };
        const merged = Object.assign(arg0);
        obj2.children = tmp11;
        const tmp22 = jsx(GuildRoleSubscriptionTierEditStepDefault, {
          title: tmp7,
          description: tmp8,
          canProceedToNextStep: true,
          nextStep: constants.GROUP,
        });
        cResult[5] = arg0;
        cResult[6] = tmp11;
        cResult[7] = tmp22;
        tmp14 = tmp22;
      }
      const tmp12 = jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp5, onChange: tmp6 });
      cResult[2] = tmp5;
      cResult[3] = tmp6;
      cResult[4] = tmp12;
      tmp11 = tmp12;
      const tmp4 = _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
    }
  : function GuildRoleSubscriptionGroupGatingModal(arg0) {
      [tmp2, tmp3] = RoleTierEditStore.useGroupIsFullGateState();
      const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
      const tmp = _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
      const intl = util.intl;
      obj.title = intl.string(util.t.N38nNP);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.csJWVI);
      obj.nextStep = constants.GROUP;
      const merged = Object.assign(arg0);
      obj.children = jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp2, onChange: tmp3 });
      return jsx(GuildRoleSubscriptionTierEditStepDefault, {
        title: null,
        description: null,
        canProceedToNextStep: true,
        nextStep: null,
      });
    };
