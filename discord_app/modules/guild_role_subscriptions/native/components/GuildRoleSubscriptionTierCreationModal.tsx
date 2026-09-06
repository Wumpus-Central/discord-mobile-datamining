// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx
import util from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

require = fn;
const GuildRoleSubscriptionsConstants = fn(15205);
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: closure_9 } =
  GuildRoleSubscriptionsConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx",
);

export default function GuildRoleSubscriptionTierCreationModal(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  ({ onClose: importAll, onAfterTierCreation: dependencyMap } = guildId);
  _slicedToArray = undefined;
  noop = undefined;
  error = undefined;
  closure_8 = async function _handleCreate() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp4;
            const obj1 = {
              guildId,
              editStateId,
              groupListingId,
              onBeforeDispatchNewListing(id) {
                return closure_1_5(id.id);
              },
            };
            c1 = 1;
            c2 = 1;
            const obj2 = { value: noop(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            error.resetImperatively();
            closure_128_2();
            closure_128_3();
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c2 = tmp;
        throw tmp16;
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(guildId.editStateId), 2);
  const editStateId = tmp[0];
  _slicedToArray = tmp[1];
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const createOrUpdateListingFromEditState = obj.useCreateOrUpdateListingFromEditState();
  ({ handleCreateOrUpdateFromEditState: c6, error } = createOrUpdateListingFromEditState);
  let items = [error];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = util.intl;
        anyErrorMessage = intl.string(util.t.R0RpRX);
      }
      ToastUtils.presentError(anyErrorMessage);
    }
  }, items);
  const memo = noop.useMemo(() => {
    const items = [, , , ,];
    ({
      DETAILS: arr[0],
      CHANNEL_BENEFITS: arr[1],
      INTANGIBLE_BENEFITS: arr[2],
      DESIGN: arr[3],
      CONFIRMATION: arr[4],
    } = closure_8);
    return items;
  }, []);
  obj = { guildId, editStateId, groupListingId, children: null };
  obj = {
    guildId,
    children: jsx(groupListingId(17742), {
      guildId,
      modalKey,
      onDone: function handleCreate() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      steps: memo,
    }),
  };
  obj.children = jsx(guildId(17724).RoleSubscriptionSettingsDisabledContextProvider, {
    guildId,
    children: jsx(groupListingId(17742), {
      guildId,
      modalKey,
      onDone: function handleCreate() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      steps: memo,
    }),
  });
  return jsx(guildId(17741).EditStateContextProvider, {
    guildId,
    children: jsx(groupListingId(17742), {
      guildId,
      modalKey,
      onDone: function handleCreate() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      steps: memo,
    }),
  });
}
