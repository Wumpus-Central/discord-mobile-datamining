// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import closure_7 from "../RoleTierEditStore.tsx";
import MAX_SUBSCRIPTION_TIERS from "../../GuildRoleSubscriptionsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c9 } = MAX_SUBSCRIPTION_TIERS);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx");

export default function GuildRoleSubscriptionTierCreationModal(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  ({ onClose: importAll, onAfterTierCreation: dependencyMap } = guildId);
  let first;
  let callback;
  let React;
  error = undefined;
  function _handleCreate() {
    const self = this;
    const tmp = first(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              obj1 = { guildId: null, editStateId: null, groupListingId: null, onBeforeDispatchNewListing: null };
              obj1[0] = closure_1_0;
              obj1[1] = closure_1_4;
              obj1[2] = c1;
              obj1[3] = function onBeforeDispatchNewListing(id) {
                return callback(id.id);
              };
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_6(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (arg1) {
              closure_1_7.resetImperatively();
              v0();
              callback();
            }
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp16) {
          v0 = tmp;
          throw tmp16;
        }
      }
    });
    closure_8 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback(React.useState(guildId.editStateId), 2);
  first = tmp[0];
  callback = tmp[1];
  let obj = getRoleEmojisAll;
  const createOrUpdateListingFromEditState = obj.useCreateOrUpdateListingFromEditState();
  ({ handleCreateOrUpdateFromEditState: c6, error } = createOrUpdateListingFromEditState);
  let items = [error];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = tmp(tmp2[8]).intl;
        anyErrorMessage = intl.string(tmp(tmp2[8]).t.R0RpRX);
      }
      guildId(closure_1_3[7]).presentError(anyErrorMessage);
      const obj2 = guildId(closure_1_3[7]);
    }
  }, items);
  const memo = React.useMemo(() => {
    const items = [, , , , ];
    ({ DETAILS: arr[0], CHANNEL_BENEFITS: arr[1], INTANGIBLE_BENEFITS: arr[2], DESIGN: arr[3], CONFIRMATION: arr[4] } = _handleCreate);
    return items;
  }, []);
  obj = { guildId, editStateId: first, groupListingId, children: null };
  obj = { guildId, children: jsx(groupListingId(17290), obj1) };
  obj[3] = jsx(guildId(17272).RoleSubscriptionSettingsDisabledContextProvider, { guildId, children: jsx(groupListingId(17290), obj1) });
  return jsx(guildId(17289).EditStateContextProvider, { guildId, children: jsx(groupListingId(17290), obj1) });
};