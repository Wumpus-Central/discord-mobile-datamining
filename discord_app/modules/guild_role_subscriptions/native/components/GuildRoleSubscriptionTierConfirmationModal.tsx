// === Module 17764: GuildRoleSubscriptionTierConfirmationModal ===

// Module 17764 (GuildRoleSubscriptionTierConfirmationModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import FormStylesDefault from "FormStyles" /* 13898 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17733 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17741 */;
import GuildRoleSubscriptionListingPreview from "GuildRoleSubscriptionListingPreview" /* 17765 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17729 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
const createStyles = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 }, coverPhoto: null };
let size = { height: 114, width: "100%", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.coverPhoto = size;
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  onDone = onDone.onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(onDone, Object.assign({ onDone: 0, isForGroupSetupModal: 0 }));
  const tmp2 = closure_11();
  const tmp5 = FormStylesDefault();
  let obj = EditStateContextProvider;
  const editStateContext = obj.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  [tmp9, tmp10] = _slicedToArray(noop.useState(false), 2);
  c1 = tmp10;
  const first = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 1)[0];
  const items = [tmp10, onDone];
  const callback = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            v2(true);
            v2 = 2;
            c4 = 1;
            const obj1 = { value: onDone(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp22;
        } else {
          v2 = tmp;
        }
      }
    }
  }), items);
  obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null, onProceed: null, submitting: null };
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj.title = intl.string(util.t.T0lZnZ);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.ltfNIq);
  obj.canProceedToNextStep = !tmp9;
  obj.onProceed = callback;
  obj.submitting = tmp9;
  const merged1 = Object.assign(merged);
  if (flag) {
    let tmp13Result = null != first;
    if (tmp13Result) {
      obj = { children: null };
      let obj1 = { style: tmp5.header, children: null };
      let tmp3Result = tmp3(9816);
      const intl3 = tmp6(1114).intl;
      obj1.children = intl3.string(tmp6(1114).t["3S8gA7"]);
      const items1 = [React6(tmp3Result, obj1), ];
      const obj2 = { style: tmp2.coverPhotoContainer, children: null };
      const obj3 = { style: tmp2.coverPhoto, resizeMode: "cover", source: first };
      obj2.children = React6(tmp3(5587), obj3);
      items1[1] = React6(View, obj2);
      obj.children = items1;
      tmp13Result = tmp13(tmp16, obj);
    }
    const obj4 = { children: null };
    const items2 = [tmp13Result, , ];
    const obj5 = { style: tmp5.header, children: null };
    tmp3Result = tmp3(9816);
    const intl4 = tmp6(1114).intl;
    obj5.children = intl4.string(tmp6(1114).t["74JctW"]);
    items2[1] = React6(tmp3Result, obj5);
    const obj6 = { style: tmp2.description, variant: "text-md/medium", color: "interactive-text-active", children: _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 1)[0] };
    items2[2] = React6(tmp6(4556).Text, obj6);
    obj4.children = items2;
    flag = tmp13(tmp16, obj4);
  }
  const items3 = [flag, React6(GuildRoleSubscriptionListingPreview.GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj.children = items3;
  return closure_1_10(GuildRoleSubscriptionTierEditStepDefault, obj);
};