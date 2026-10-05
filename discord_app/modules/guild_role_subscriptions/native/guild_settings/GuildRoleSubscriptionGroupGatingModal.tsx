// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import GuildRoleSubscriptionsConstants from "../../GuildRoleSubscriptionsConstants.tsx";
import FormGuildGatingModeSelectorDefault from "../components/FormGuildGatingModeSelector.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "../components/GuildRoleSubscriptionTierEditStep.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import RoleTierEditStore from "../RoleTierEditStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(8);
      [tmp5, tmp6] = RoleTierEditStore.useGroupIsFullGateState();
      _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.N38nNP);
        const intl2 = intl3.intl;
        const stringResult1 = intl2.string(intl3.t.csJWVI);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp7 = stringResult;
        tmp8 = stringResult1;
      } else {
        [tmp7, tmp8] = cResult;
      }
      if (cResult[2] === tmp5) {
        let tmp11;
        if (cResult[3] === tmp6) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === arg0) {
          let tmp14;
          if (cResult[6] === tmp11) {
            tmp14 = cResult[7];
          }
          return tmp14;
        }
        GuildRoleSubscriptionTierEditStepDefault;
        const merged = Object.assign(arg0);
        const tmp22 = (
          <tmp17 title={tmp7} description={tmp8} canProceedToNextStep nextStep={constants.GROUP}>
            {tmp11}
          </tmp17>
        );
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
    }
  : (arg0) => {
      let tmp2;
      let tmp3;
      [tmp2, tmp3] = RoleTierEditStore.useGroupIsFullGateState();
      _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
      GuildRoleSubscriptionTierEditStepDefault;
      const intl = intl3.intl;
      const intl2 = intl3.intl;
      const merged = Object.assign(arg0);
      return (
        <tmp4
          title={intl.string(intl3.t.N38nNP)}
          description={intl2.string(intl3.t.csJWVI)}
          canProceedToNextStep
          nextStep={constants.GROUP}
        >
          {jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp2, onChange: tmp3 })}
        </tmp4>
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx",
);

export default tmp3;
