// === Module 19974: GuildRoleSubscriptionTierConfirmationModal ===

// Module 19974 (GuildRoleSubscriptionTierConfirmationModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import FormStylesDefault from "FormStyles" /* 19943 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import EditStateContextProvider from "EditStateContextProvider" /* 19953 */;
import GuildRoleSubscriptionListingPreview from "GuildRoleSubscriptionListingPreview" /* 19975 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { coverPhoto: null };
let size = { height: 114, width: "100%", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.coverPhoto = size;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  onDone = onDone.onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(onDone, Object.assign({ onDone: 0, isForGroupSetupModal: 0 }));
  const tmp2 = closure_10();
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
    let obj3 = { style: tmp5.container, children: null };
    let tmp13Result = null != first;
    if (tmp13Result) {
      let obj4 = { children: null };
      const obj5 = { title: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(util.t["3S8gA7"]);
      const items1 = [React6(TableRowGroup.TableRowGroupTitle, obj5), ];
      const obj6 = { style: tmp2.coverPhoto, resizeMode: "cover", source: first };
      items1[1] = React6(FastImageDefault, obj6);
      obj4.children = items1;
      tmp13Result = React7(View, obj4);
    }
    const items2 = [tmp13Result, ];
    const obj7 = { children: null };
    const obj8 = { title: null };
    const intl4 = util.intl;
    obj8.title = intl4.string(util.t["74JctW"]);
    const items3 = [React6(TableRowGroup.TableRowGroupTitle, obj8), ];
    const obj9 = { variant: "text-md/medium", color: "interactive-text-active", children: _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 1)[0] };
    items3[1] = React6(Text_Text.Text, obj9);
    obj7.children = items3;
    items2[1] = React7(View, obj7);
    obj3.children = items2;
    flag = React7(View, obj3);
  }
  const items4 = [flag, React6(GuildRoleSubscriptionListingPreview.GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj2.children = items4;
  return React7(GuildRoleSubscriptionTierEditStepDefault, obj2);
};