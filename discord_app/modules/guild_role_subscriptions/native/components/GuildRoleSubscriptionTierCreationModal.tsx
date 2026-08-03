import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import usePriceTiers from "usePriceTiers";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { jsx } from "jsxProd";

let c9;
let metroImportAll;
const require = arg1;
({ GuildRoleSubscriptionsTierScenes: metroImportAll, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c9 } = MAX_SUBSCRIPTION_TIERS);
const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx");

export default function GuildRoleSubscriptionTierCreationModal(guildId) {
  let c6;
  let dependencyMap;
  let error;
  let importAll;
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
          return { value: "HermesInternal", done: null };
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
              let closure_0 = tmp4;
              const obj1 = { guildId: null, editStateId: null, groupListingId: null, onBeforeDispatchNewListing: null };
              obj1[0] = outer1_0;
              obj1[1] = outer1_4;
              obj1[2] = c1;
              obj1[3] = function onBeforeDispatchNewListing(id) {
                return callback(id.id);
              };
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_6(obj1);
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
              outer1_7.resetImperatively();
              v0();
              callback();
            }
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          v0 = tmp;
          throw tmp16;
        }
      }
    });
    const _handleCreate = tmp;
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
  let obj = importAll(14263);
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
      guildId(outer1_3[7]).presentError(anyErrorMessage);
      const obj2 = guildId(outer1_3[7]);
    }
  }, items);
  const memo = React.useMemo(() => {
    const items = [, , , , ];
    ({ DETAILS: arr[0], CHANNEL_BENEFITS: arr[1], INTANGIBLE_BENEFITS: arr[2], DESIGN: arr[3], CONFIRMATION: arr[4] } = _handleCreate);
    return items;
  }, []);
  obj = { guildId, editStateId: first, groupListingId, children: null };
  obj = { guildId, children: null };
  obj[1] = jsx(groupListingId(16605), {
    guildId,
    modalKey: closure_9,
    onDone: function handleCreate() {
      const self = this;
      const apply = _handleCreate.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    steps: memo
  });
  obj[3] = jsx(guildId(16587).RoleSubscriptionSettingsDisabledContextProvider, { guildId, children: null });
  return jsx(guildId(16604).EditStateContextProvider, { guildId, children: null });
};