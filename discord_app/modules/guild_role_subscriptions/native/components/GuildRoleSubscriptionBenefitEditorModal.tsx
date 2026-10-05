// === Module 17948: GuildRoleSubscriptionBenefitEditorModal ===

// Module 17948 (GuildRoleSubscriptionBenefitEditorModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import TrashIcon2 from "TrashIcon" /* 4847 */;
import useChannelName from "useChannelName" /* 5043 */;
import Pressables from "Pressables" /* 5909 */;
import FormStylesDefault from "FormStyles" /* 13710 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 17947 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15023 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles from "TextStyles" /* 5915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, dependencyMap, onDelete;

let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ GuildRoleSubscriptionBenefitTypes: c10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: unpackModuleId, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = GuildRoleSubscriptionsConstants);
const Fonts = Constants.Fonts;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: { flexGrow: 1 }, deleteButton: { flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: "center" }, deleteIcon: { width: 20, height: 20 }, deleteLabel: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginStart: 8, lineHeight: 20 };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.unsafe_rawColors.RED_400, 16));
let closure_15 = createStyles(obj);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((onDelete) => {
  let items;
  const obj = react2;
  const cResult = obj.c(13);
  onDelete = onDelete.onDelete;
  const tmp4 = closure_15();
  const tmp6 = FormStylesDefault();
  if (cResult[0] === tmp6.textInput) {
    let tmp7;
    let tmp8;
    let tmp12;
    let tmp14;
    if (cResult[1] === tmp4.deleteButton) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp4.deleteIcon) {
      const obj2 = { style: tmp4.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" };
      const TrashIcon = TrashIcon2.TrashIcon;
      const tmp10 = map1(TrashIcon, obj2);
      cResult[3] = tmp4.deleteIcon;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    const deleteLabel = tmp4.deleteLabel;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl10.intl;
      const stringResult = intl.string(intl10.t.p4Bh7f);
      cResult[5] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.deleteLabel) {
      const obj3 = { style: deleteLabel, children: tmp12 };
      const tmp16 = map1(native.LegacyText, obj3);
      cResult[6] = tmp4.deleteLabel;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === onDelete) {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp8) {
          let tmp17;
          if (cResult[11] === tmp14) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
    }
    const obj4 = { style: tmp7, accessibilityRole: "button", onPress: onDelete, children: items };
    items = [tmp8, tmp14];
    const tmp19 = authStore2(Pressables.PressableOpacity, obj4);
    cResult[8] = onDelete;
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = tmp14;
    cResult[12] = tmp19;
    tmp17 = tmp19;
  }
  const items1 = [tmp6.textInput, tmp4.deleteButton];
  cResult[0] = tmp6.textInput;
  cResult[1] = tmp4.deleteButton;
  cResult[2] = items1;
  tmp7 = items1;
}) : ((onDelete) => {
  let intl;
  let items;
  let items1;
  onDelete = onDelete.onDelete;
  const tmp = closure_15();
  const obj = { style: items, accessibilityRole: "button", onPress: onDelete, children: items1 };
  items = [FormStylesDefault().textInput, tmp.deleteButton];
  FormStylesDefault();
  const PressableOpacity = Pressables.PressableOpacity;
  const obj2 = { style: tmp.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" };
  const TrashIcon = TrashIcon2.TrashIcon;
  items1 = [map1(TrashIcon, obj2), ];
  const obj3 = { style: tmp.deleteLabel, children: intl.string(intl10.t.p4Bh7f) };
  const LegacyText = native.LegacyText;
  intl = intl10.intl;
  items1[1] = map1(LegacyText, obj3);
  return authStore2(PressableOpacity, obj);
});
const forwardRefResult = react.forwardRef((benefitType) => {
  let closure_4;
  let closure_6;
  let closure_9;
  let first1;
  let first2;
  let first3;
  let first4;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp11;
  let tmp20;
  let tmp25;
  let tmp26;
  let value;
  _require = benefitType;
  let obj = function _handleSave() {
    let emoji_name;
    let name;
    let ref_id;
    obj = _asyncToGenerator(async () => {
      let tmp15;
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
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              if (null != first1) {
                c3 = 1;
                const obj4 = { name, emoji_id: tmp26, emoji_name, description: tmp15, ref_type: benefitType.benefitType, ref_id };
                tmp15 = undefined;
                if ("" !== first3) {
                  tmp15 = first3;
                }
                c1 = 2;
                c4 = 1;
                const obj5 = { value: benefitType.onSave(obj4), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0.onClose();
            c3 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp19) {
          closure_2 = tmp19;
          if (0 === c3) {
            c4 = 3;
            throw tmp19;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleDelete() {
    obj = _asyncToGenerator(async () => {
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
          if (0 === c1) {
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
              onDelete = onDelete.onDelete;
              let onDeleteResult;
              if (onDelete != null) {
                onDeleteResult = onDelete();
              }
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onDeleteResult, done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0.onClose();
              c3 = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          closure_2 = tmp10;
          if (0 === c3) {
            c4 = 3;
            throw tmp10;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_15();
  const tmp3 = dependencyMap;
  const tmp4 = value(13710)();
  const tmp5 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState(), 2);
  value = tmp5[0];
  dependencyMap = tmp6;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  [first3, tmp11] = GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState();
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] = GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
  let num;
  const bottom = value(1618)().bottom;
  if (first1 != null) {
    num = first1.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp14 = num > 0;
  if (!tmp14) {
    let num2;
    if (first2 != null) {
      num2 = first2.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp14 = num2 > 0;
  }
  if (tmp14) {
    let tmp16;
    let tmp15 = obj;
    if (benefitType.benefitType === obj.CHANNEL) {
      tmp16 = null != first4;
    } else {
      let num3;
      if (value != null) {
        num3 = value.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp16 = num3 > 0;
    }
    tmp14 = tmp16;
  }
  if (benefitType.benefitType === obj.CHANNEL) {
    const intl2 = require("intl").intl;
    stringResult = intl2.string(require("intl").t.Odqwp9);
    tmp20 = _require;
  } else {
    const intl = require("intl").intl;
    stringResult = intl.string(require("intl").t["0rVUnI"]);
    tmp20 = _require;
  }
  if (benefitType.benefitType === obj.CHANNEL) {
    const intl4 = tmp20(1126).intl;
    stringResult1 = intl4.string(tmp20(1126).t.GK18KJ);
  } else {
    const intl3 = tmp20(1126).intl;
    stringResult1 = intl3.string(tmp20(1126).t["kV54/Y"]);
  }
  if (benefitType.benefitType === obj.CHANNEL) {
    const intl6 = tmp20(1126).intl;
    stringResult2 = intl6.string(tmp20(1126).t["DDUpp+"]);
  } else {
    const intl5 = tmp20(1126).intl;
    stringResult2 = intl5.string(tmp20(1126).t.NNqncc);
  }
  if (benefitType.benefitType === obj.CHANNEL) {
    obj = {
      channelId: first4,
      guildId: benefitType.guildId,
      onChange: function handleChannelSelected(id) {
          closure_9(id.id);
          obj = useChannelName;
          closure_2(obj.computeChannelName(id, UserStore, RelationshipStore));
        }
    };
    tmp25 = closure_13(tmp2(17949), obj);
    tmp26 = closure_13;
  } else {
    let obj2 = { style: tmp4.textInput, showTopContainer: false, multiline: false, maxLength, value, placeholder: intl9.string(tmp20(1126).t["kV54/Y"]), onChange: tmp5[1], autoFocus: true, clearButtonVisibility: tmp20(1188).ClearButtonVisibility.WITH_CONTENT };
    const FormInput = tmp20(8895).FormInput;
    intl9 = tmp20(1126).intl;
    tmp25 = closure_13(FormInput, obj2);
    tmp26 = closure_13;
  }
  let obj3 = { style: tmp.container, children: items };
  let obj4 = {
    title: stringResult,
    onClose: benefitType.onClose,
    canSave: tmp14,
    onSave: function handleSave() {
      return obj(...arguments);
    },
    listingId: benefitType.listingId
  };
  items = [tmp26(tmp2(17951), obj4), ];
  let obj5 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: items1, children: items2 };
  items1 = [tmp.scrollContainer, ];
  const obj6 = { paddingBottom: bottom + 32 + 16 };
  items1[1] = obj6;
  items2 = [, , , , , , ];
  const obj7 = { style: tmp4.header, children: stringResult1 };
  items2[0] = tmp26(value(9477), obj7);
  items2[1] = tmp25;
  const obj8 = { style: tmp4.header, children: intl7.string(tmp20(1126).t.sMOuuS) };
  const tmp2Result = value(9477);
  intl7 = tmp20(1126).intl;
  items2[2] = tmp26(tmp2Result, obj8);
  const obj9 = {
    emoji: { emojiId: first1, emojiName: first2 },
    guildId: benefitType.guildId,
    onChange: function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    }
  };
  items2[3] = tmp26(value(17952), obj9);
  const obj10 = { style: tmp4.header, children: intl8.string(tmp20(1126).t["74JctW"]) };
  const tmp2Result2 = value(9477);
  intl8 = tmp20(1126).intl;
  items2[4] = tmp26(tmp2Result2, obj10);
  const obj11 = { style: tmp4.textInput, showTopContainer: false, multiline: true, maxLength: obj, numberOfLines: 3, value: first3, onChange: tmp11, placeholder: stringResult2 };
  items2[5] = tmp26(tmp20(8895).FormInput, obj11);
  let tmp26Result = null;
  const tmp28 = first2;
  const tmp29 = closure_6;
  if (null != benefitType.onDelete) {
    const obj12 = {
      onDelete: function handleDelete() {
          return obj(...arguments);
        }
    };
    tmp26Result = tmp26(closure_16, obj12);
  }
  items2[6] = tmp26Result;
  items[1] = closure_14(tmp29, obj5);
  return closure_14(tmp28, obj3);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default forwardRefResult;