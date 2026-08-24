// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import stylesDefault from "FormStyles.tsx";
import HeaderDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../RoleTierEditStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 }, coverPhoto: null };
createCacheKey = { height: 114, width: "100%", borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  onDone = onDone.onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(onDone, Object.create(null));
  importDefault = undefined;
  const tmp2 = callback4();
  const tmp5 = stylesDefault();
  let obj = onDone(16962);
  const editStateContext = obj.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  [tmp9, tmp10] = callback2(React.useState(false), 2);
  importDefault = tmp10;
  const first = callback2(closure_7.useGroupCoverState(), 1)[0];
  const items = [tmp10, onDone];
  callback = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            v0(true);
            v0 = 2;
            c4 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          v0(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v0(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c3 = 0;
          v0(false);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp22;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items);
  obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null, onProceed: null, submitting: null };
  const tmp8 = callback2(React.useState(false), 2);
  const intl = onDone(1236).intl;
  obj[0] = intl.string(onDone(1236).t.T0lZnZ);
  const intl2 = onDone(1236).intl;
  obj[1] = intl2.string(onDone(1236).t.ltfNIq);
  obj[2] = !tmp9;
  obj[4] = callback;
  obj[5] = tmp9;
  const merged1 = Object.assign(merged);
  if (flag) {
    let tmp13Result = null != first;
    if (tmp13Result) {
      obj = { children: null };
      obj1 = { style: null, children: null };
      obj1[0] = tmp5.header;
      let tmp3Result = tmp3(8913);
      const intl3 = tmp6(1236).intl;
      obj1[1] = intl3.string(tmp6(1236).t["3S8gA7"]);
      const items1 = [callback3(tmp3Result, obj1), ];
      const obj2 = { style: null, children: null };
      obj2[0] = tmp2.coverPhotoContainer;
      const obj3 = { style: null, resizeMode: "cover", source: null };
      obj3[0] = tmp2.coverPhoto;
      obj3[2] = first;
      obj2[1] = callback3(tmp3(5449), obj3);
      items1[1] = callback3(View, obj2);
      obj[0] = items1;
      tmp13Result = tmp13(tmp16, obj);
    }
    const obj4 = { children: null };
    const items2 = [tmp13Result, , ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp5.header;
    tmp3Result = tmp3(8913);
    const intl4 = tmp6(1236).intl;
    obj5[1] = intl4.string(tmp6(1236).t["74JctW"]);
    items2[1] = callback3(tmp3Result, obj5);
    const obj6 = { style: null, variant: "text-md/medium", color: "interactive-text-active", children: null };
    obj6[0] = tmp2.description;
    obj6[3] = callback2(closure_7.useGroupDescriptionState(), 1)[0];
    items2[2] = callback3(tmp6(4734).Text, obj6);
    obj4[0] = items2;
    flag = tmp13(tmp16, obj4);
  }
  const items3 = [flag, callback3(onDone(16986).GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj.children = items3;
  return closure_10(HeaderDefault, obj);
};