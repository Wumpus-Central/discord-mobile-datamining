// === Module 16693: GuildRoleSubscriptionTierConfirmationModal ===

// Module 16693 (GuildRoleSubscriptionTierConfirmationModal)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import usePriceTiers from "usePriceTiers";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 }, coverPhoto: null };
createCacheKey = { height: 114, width: "100%", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  let editStateId;
  let guildId;
  let tmp10;
  let tmp9;
  onDone = onDone.onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(onDone, Object.create(null));
  let importDefault;
  const tmp2 = createCacheKey();
  const tmp5 = importDefault(13119)();
  let obj = onDone(16670);
  const editStateContext = obj.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  [tmp9, tmp10] = callback2(React.useState(false), 2);
  importDefault = tmp10;
  const first = callback2(usePriceTiers.useGroupCoverState(), 1)[0];
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp3;
            let c3 = 1;
            v0(true);
            v0 = 2;
            c4 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0();
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
          return { value: "HermesInternal", done: null };
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
      let obj1 = { style: null, children: null };
      obj1[0] = tmp5.header;
      let tmp3Result = tmp3(8652);
      const intl3 = tmp6(1236).intl;
      obj1[1] = intl3.string(tmp6(1236).t["3S8gA7"]);
      const items1 = [callback3(tmp3Result, obj1), ];
      const obj2 = { style: null, children: null };
      obj2[0] = tmp2.coverPhotoContainer;
      const obj3 = { style: null, resizeMode: "cover", source: null };
      obj3[0] = tmp2.coverPhoto;
      obj3[2] = first;
      obj2[1] = callback3(tmp3(5207), obj3);
      items1[1] = callback3(View, obj2);
      obj[0] = items1;
      tmp13Result = tmp13(tmp16, obj);
    }
    const obj4 = { children: null };
    const items2 = [tmp13Result, , ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp5.header;
    tmp3Result = tmp3(8652);
    const intl4 = tmp6(1236).intl;
    obj5[1] = intl4.string(tmp6(1236).t["74JctW"]);
    items2[1] = callback3(tmp3Result, obj5);
    const obj6 = { style: null, variant: "text-md/medium", color: "interactive-text-active", children: null };
    obj6[0] = tmp2.description;
    obj6[3] = callback2(usePriceTiers.useGroupDescriptionState(), 1)[0];
    items2[2] = callback3(tmp6(4251).Text, obj6);
    obj4[0] = items2;
    flag = tmp13(tmp16, obj4);
  }
  const items3 = [flag, callback3(onDone(16694).GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj.children = items3;
  return closure_10(importDefault(16662), obj);
};