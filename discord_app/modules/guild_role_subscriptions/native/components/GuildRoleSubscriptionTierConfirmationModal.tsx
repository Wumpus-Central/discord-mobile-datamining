// === Module 17588: GuildRoleSubscriptionTierConfirmationModal ===

// Module 17588 (GuildRoleSubscriptionTierConfirmationModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import FormHeaderDefault from "FormHeader" /* 9271 */;
import FormStylesDefault from "FormStyles" /* 13443 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17557 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17565 */;
import GuildRoleSubscriptionListingPreview from "GuildRoleSubscriptionListingPreview" /* 17589 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17553 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 }, coverPhoto: null };
let size = { height: 114, width: "100%", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.coverPhoto = size;
let closure_11 = createStyles.createStyles(obj2);
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
  const editStateContext = EditStateContextProvider.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  [tmp9, tmp10] = noop.useState(false);
  c1 = tmp10;
  const first = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 1)[0];
  const items = [tmp10, onDone];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            v2(true);
            v2 = 2;
            c4 = 1;
            const obj4 = { value: onDone(), done: false };
            return obj4;
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
          const obj = { value, done: true };
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
  let obj2 = { title: null, description: null, canProceedToNextStep: null, nextStep: null, onProceed: null, submitting: null };
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj2.title = intl.string(util.t.T0lZnZ);
  const intl2 = util.intl;
  obj2.description = intl2.string(util.t.ltfNIq);
  obj2.canProceedToNextStep = !tmp9;
  obj2.onProceed = callback;
  obj2.submitting = tmp9;
  const merged1 = Object.assign(merged);
  if (flag) {
    let tmp13Result = null != first;
    if (tmp13Result) {
      let obj3 = { children: null };
      let obj4 = { style: tmp5.header, children: null };
      const intl3 = util.intl;
      obj4.children = intl3.string(util.t["3S8gA7"]);
      const items1 = [React6(FormHeaderDefault, obj4), ];
      const obj5 = { style: tmp2.coverPhotoContainer, children: null };
      const obj6 = { style: tmp2.coverPhoto, resizeMode: "cover", source: first };
      obj5.children = React6(FastImageDefault, obj6);
      items1[1] = React6(View, obj5);
      obj3.children = items1;
      tmp13Result = closure_1_10(React7, obj3);
      const tmp3Result = FormHeaderDefault;
    }
    const obj7 = { children: null };
    const items2 = [tmp13Result, , ];
    const obj8 = { style: tmp5.header, children: null };
    const intl4 = util.intl;
    obj8.children = intl4.string(util.t["74JctW"]);
    items2[1] = React6(FormHeaderDefault, obj8);
    const obj9 = { style: tmp2.description, variant: "text-md/medium", color: "interactive-text-active", children: _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 1)[0] };
    items2[2] = React6(Text_Text.Text, obj9);
    obj7.children = items2;
    flag = closure_1_10(React7, obj7);
    const tmp3Result2 = FormHeaderDefault;
  }
  const items3 = [flag, React6(GuildRoleSubscriptionListingPreview.GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj2.children = items3;
  return closure_1_10(GuildRoleSubscriptionTierEditStepDefault, obj2);
};