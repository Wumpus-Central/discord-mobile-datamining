// === Module 17901: GuildRoleSubscriptionGroupDetailsModal ===

// Module 17901 (GuildRoleSubscriptionGroupDetailsModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Form from "Form" /* 8895 */;
import FormHeaderDefault from "FormHeader" /* 9477 */;
import FormStylesDefault from "FormStyles" /* 13708 */;
import FormSeparatorDefault from "FormSeparator" /* 15031 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17897 */;
import FormImagePicker from "FormImagePicker" /* 17903 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17906 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17902 */;

require = fn;
const View = fn(17).View;
const GuildRoleSubscriptionsConstants = fn(15019);
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7 } = GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = fn(1085).UPLOAD_BANNER_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles({ coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(32);
  ({ cover, setCover, description, setDescription } = arg0);
  const tmp4 = closure_12();
  const tmp6 = FormStylesDefault();
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["3S8gA7"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp6.header) {
    const obj3 = { style: tmp6.header, children: first };
    const tmp12 = options(FormHeaderDefault, obj3);
    cResult[1] = tmp6.header;
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === cover) {
    if (cResult[4] === roleSubscriptionSettingsDisabled) {
      if (cResult[5] === setCover) {
        if (cResult[6] === tmp4.coverPhoto) {
          let tmp14 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t["0ng4rB"]);
          cResult[8] = stringResult1;
          let tmp16 = stringResult1;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== tmp4.coverDescription) {
          const obj4 = { style: tmp4.coverDescription, variant: "text-sm/medium", color: "text-default", children: tmp16 };
          const tmp20 = options(Text_Text.Text, obj4);
          cResult[9] = tmp4.coverDescription;
          cResult[10] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === tmp4.paddedContainer) {
          if (cResult[12] === tmp14) {
            if (cResult[13] === tmp18) {
              let tmp21 = cResult[14];
            }
            if (cResult[15] !== tmp4.paddedContainer) {
              const obj5 = { style: tmp4.paddedContainer };
              const tmp27 = options(FormSeparatorDefault, obj5);
              cResult[15] = tmp4.paddedContainer;
              cResult[16] = tmp27;
              let tmp25 = tmp27;
            } else {
              tmp25 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult2 = intl3.string(util.t["74JctW"]);
              cResult[17] = stringResult2;
              let tmp28 = stringResult2;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] !== tmp6.header) {
              const obj6 = { style: tmp6.header, children: tmp28 };
              const tmp32 = options(FormHeaderDefault, obj6);
              cResult[18] = tmp6.header;
              cResult[19] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[19];
            }
            const _Symbol3 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = util.intl;
              const stringResult3 = intl4.string(util.t["3YHwoG"]);
              cResult[20] = stringResult3;
              let tmp33 = stringResult3;
            } else {
              tmp33 = cResult[20];
            }
            if (cResult[21] === description) {
              if (cResult[22] === tmp6.textInput) {
                if (cResult[23] === roleSubscriptionSettingsDisabled) {
                  if (cResult[24] === setDescription) {
                    let tmp35 = cResult[25];
                  }
                  if (cResult[26] === tmp25) {
                    if (cResult[27] === tmp30) {
                      if (cResult[28] === tmp35) {
                        if (cResult[29] === tmp10) {
                          if (cResult[30] === tmp21) {
                            let tmp39 = cResult[31];
                          }
                          return tmp39;
                        }
                      }
                    }
                  }
                  const obj7 = { children: null };
                  const items = [tmp10, tmp21, tmp25, tmp30, tmp35];
                  obj7.children = items;
                  const tmp42 = v65535(closure_1_11, obj7);
                  cResult[26] = tmp25;
                  cResult[27] = tmp30;
                  cResult[28] = tmp35;
                  cResult[29] = tmp10;
                  cResult[30] = tmp21;
                  cResult[31] = tmp42;
                  tmp39 = tmp42;
                }
              }
            }
            const obj8 = { style: tmp6.textInput, showTopContainer: false, multiline: true, maxLength, numberOfLines: 3, value: description, placeholder: tmp33, onChange: setDescription, disabled: roleSubscriptionSettingsDisabled };
            const tmp38 = options(Form.FormInput, obj8);
            cResult[21] = description;
            cResult[22] = tmp6.textInput;
            cResult[23] = roleSubscriptionSettingsDisabled;
            cResult[24] = setDescription;
            cResult[25] = tmp38;
            tmp35 = tmp38;
          }
        }
        const obj9 = { style: tmp13, children: null };
        const items1 = [tmp14, tmp18];
        obj9.children = items1;
        const tmp24 = v65535(View, obj9);
        cResult[11] = tmp4.paddedContainer;
        cResult[12] = tmp14;
        cResult[13] = tmp18;
        cResult[14] = tmp24;
        tmp21 = tmp24;
      }
    }
  }
  const tmp15 = options(FormImagePicker.ImagePickerIcon, { style: tmp4.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 });
  cResult[3] = cover;
  cResult[4] = roleSubscriptionSettingsDisabled;
  cResult[5] = setCover;
  cResult[6] = tmp4.coverPhoto;
  cResult[7] = tmp15;
  tmp14 = tmp15;
  const obj10 = { style: tmp4.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
}) : ((arg0) => {
  ({ cover, setCover, description, setDescription } = arg0);
  const tmp = closure_12();
  const tmp2 = FormStylesDefault();
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  const obj2 = { children: null };
  const obj3 = { style: tmp2.header, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3S8gA7"]);
  const items = [options(FormHeaderDefault, obj3), , , , ];
  const obj4 = { style: tmp.paddedContainer, children: null };
  const items1 = [options(FormImagePicker.ImagePickerIcon, { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 }), ];
  const obj6 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t["0ng4rB"]);
  items1[1] = options(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = v65535(View, obj4);
  items[2] = options(FormSeparatorDefault, { style: tmp.paddedContainer });
  const obj8 = { style: tmp2.header, children: null };
  const obj5 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
  const obj7 = { style: tmp.paddedContainer };
  const intl3 = util.intl;
  obj8.children = intl3.string(util.t["74JctW"]);
  items[3] = options(FormHeaderDefault, obj8);
  const obj9 = { style: tmp2.textInput, showTopContainer: false, multiline: true, maxLength, numberOfLines: 3, value: description, placeholder: null, onChange: null, disabled: null };
  const intl4 = util.intl;
  obj9.placeholder = intl4.string(util.t["3YHwoG"]);
  obj9.onChange = setDescription;
  obj9.disabled = roleSubscriptionSettingsDisabled;
  items[4] = options(Form.FormInput, obj9);
  obj2.children = items;
  return v65535(closure_1_11, obj2);
});
let closure_13 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  [tmp5, tmp6] = RoleTierEditStore.useGroupCoverState();
  const tmp4 = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  [arr, tmp8] = RoleTierEditStore.useGroupDescriptionState();
  let tmp9 = arr.length > 0;
  if (tmp9) {
    tmp9 = null != tmp5;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.EPOLQD);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["LeAm+L"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp11 = stringResult;
    tmp12 = stringResult1;
  } else {
    [tmp11, tmp12] = cResult;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === arr) {
      if (cResult[4] === arg0) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === tmp8) {
            let tmp15 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            if (cResult[9] === arg0) {
              if (cResult[10] === tmp15) {
                let tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
          const obj2 = { title: tmp11, description: tmp12, canProceedToNextStep: tmp9, nextStep: constants.DETAILS };
          const merged = Object.assign(arg0);
          obj2.children = tmp15;
          const tmp26 = options(GuildRoleSubscriptionTierEditStepDefault, obj2);
          cResult[8] = tmp9;
          cResult[9] = arg0;
          cResult[10] = tmp15;
          cResult[11] = tmp26;
          tmp18 = tmp26;
        }
      }
    }
  }
  const obj3 = {};
  const merged1 = Object.assign(arg0);
  obj3.cover = tmp5;
  obj3.setCover = tmp6;
  obj3.description = arr;
  obj3.setDescription = tmp8;
  const tmp17 = options(closure_13, obj3);
  cResult[2] = tmp5;
  cResult[3] = arr;
  cResult[4] = arg0;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  cResult[7] = tmp17;
  tmp15 = tmp17;
  const tmp7 = _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 2);
}) : ((arg0) => {
  [tmp2, tmp3] = RoleTierEditStore.useGroupCoverState();
  [first, obj2.setDescription] = RoleTierEditStore.useGroupDescriptionState();
  let tmp5 = first.length > 0;
  if (tmp5) {
    tmp5 = null != tmp2;
  }
  const obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null };
  const tmp = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  const intl = util.intl;
  obj.title = intl.string(util.t.EPOLQD);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["LeAm+L"]);
  obj.canProceedToNextStep = tmp5;
  obj.nextStep = constants.DETAILS;
  const merged = Object.assign(arg0);
  const obj2 = {};
  const merged1 = Object.assign(arg0);
  obj2.cover = tmp2;
  obj2.setCover = tmp3;
  obj2.description = first;
  obj.children = options(closure_13, obj2);
  return options(GuildRoleSubscriptionTierEditStepDefault, obj);
});
export const Content = tmp5;