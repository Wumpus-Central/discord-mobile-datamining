// === Module 17959: GuildRoleSubscriptionTierConfirmationModal ===

// Module 17959 (GuildRoleSubscriptionTierConfirmationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import FormHeaderDefault from "FormHeader" /* 9477 */;
import FormStylesDefault from "FormStyles" /* 13710 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17928 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17944 */;
import GuildRoleSubscriptionListingPreview from "GuildRoleSubscriptionListingPreview" /* 17960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17926 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let c4, closure_2;

let c10;
let c9;
let metroImportAll;
let size;
const View = react_native.View;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 }, coverPhoto: size };
size = { height: 114, width: "100%", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_11 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  let editStateId;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj6;
  let tmp10;
  let tmp9;
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
  [tmp9, tmp10] = _slicedToArray(react.useState(false), 2);
  let c1 = tmp10;
  const tmp8 = _slicedToArray(react.useState(false), 2);
  const first = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 1)[0];
  const first1 = _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 1)[0];
  const items = [tmp10, onDone];
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            v1(true);
            v1 = 2;
            c4 = 1;
            const obj4 = { value: onDone(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c4 = 3;
          throw tmp19;
        } else {
          v1 = 1;
        }
      }
    }
  }), items);
  let obj2 = { title: intl.string(intl5.t.T0lZnZ), description: intl2.string(intl5.t.ltfNIq), canProceedToNextStep: !tmp9, nextStep: null, onProceed: callback, submitting: tmp9, children: items3 };
  const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  const merged1 = Object.assign(merged);
  if (flag) {
    let tmp14Result = null != first;
    if (tmp14Result) {
      let obj3 = { children: items1 };
      let obj4 = { style: tmp5.header, children: intl3.string(intl5.t["3S8gA7"]) };
      const tmp3Result = FormHeaderDefault;
      intl3 = intl5.intl;
      items1 = [metroImportAll(tmp3Result, obj4), ];
      const obj5 = { style: tmp2.coverPhotoContainer, children: metroImportAll(FastImageDefault, obj6) };
      obj6 = { style: tmp2.coverPhoto, resizeMode: "cover", source: first };
      items1[1] = metroImportAll(View, obj5);
      tmp14Result = authStore(React4, obj3);
    }
    const obj7 = { children: items2 };
    items2 = [tmp14Result, , ];
    const obj8 = { style: tmp5.header, children: intl4.string(intl5.t["74JctW"]) };
    const tmp3Result2 = FormHeaderDefault;
    intl4 = intl5.intl;
    items2[1] = metroImportAll(tmp3Result2, obj8);
    const obj9 = { style: tmp2.description, variant: "text-md/medium", color: "interactive-text-active", children: first1 };
    items2[2] = metroImportAll(Text_Text.Text, obj9);
    flag = authStore(React4, obj7);
  }
  items3 = [flag, metroImportAll(GuildRoleSubscriptionListingPreview.GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  return authStore(tmp15, obj2);
};