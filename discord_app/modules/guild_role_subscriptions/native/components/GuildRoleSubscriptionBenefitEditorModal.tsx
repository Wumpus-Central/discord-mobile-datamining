// === Module 17948: GuildRoleSubscriptionBenefitEditorModal ===

// Module 17948 (GuildRoleSubscriptionBenefitEditorModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import TrashIcon from "TrashIcon" /* 4847 */;
import useChannelName from "useChannelName" /* 5043 */;
import Pressables from "Pressables" /* 5909 */;
import FormStylesDefault from "FormStyles" /* 13710 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 17947 */;
import TextStyles from "TextStyles" /* 5915 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildRoleSubscriptionsConstants = fn(15023);
({ GuildRoleSubscriptionBenefitTypes: c10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: closure_11, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }, scrollContainer: { flexGrow: 1 }, deleteButton: { flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: "center" }, deleteIcon: { width: 20, height: 20 }, deleteLabel: null };
let obj4 = {};
const merged = Object.assign(TextStyles(fn(1085).Fonts.PRIMARY_SEMIBOLD, nativeDefault.unsafe_rawColors.RED_400, 16));
obj4.marginStart = 8;
obj4.lineHeight = 20;
obj.deleteLabel = obj4;
let closure_15 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((onDelete) => {
  const cResult = c.c(13);
  onDelete = onDelete.onDelete;
  const tmp4 = closure_15();
  const tmp6 = FormStylesDefault();
  if (cResult[0] === tmp6.textInput) {
    if (cResult[1] === tmp4.deleteButton) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp4.deleteIcon) {
      const obj2 = { style: tmp4.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" };
      const tmp10 = __initData2(TrashIcon.TrashIcon, obj2);
      cResult[3] = tmp4.deleteIcon;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.p4Bh7f);
      cResult[5] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.deleteLabel) {
      const obj3 = { style: tmp4.deleteLabel, children: tmp12 };
      const tmp16 = __initData2(native.LegacyText, obj3);
      cResult[6] = tmp4.deleteLabel;
      cResult[7] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === onDelete) {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp8) {
          if (cResult[11] === tmp14) {
            let tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
    }
    const obj4 = { style: tmp7, accessibilityRole: "button", onPress: onDelete, children: null };
    const items = [tmp8, tmp14];
    obj4.children = items;
    const tmp19 = state(Pressables.PressableOpacity, obj4);
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
  const tmp = closure_15();
  const obj = { style: null, accessibilityRole: "button", onPress: onDelete.onDelete, children: null };
  const items = [FormStylesDefault().textInput, tmp.deleteButton];
  obj.style = items;
  const tmp2 = FormStylesDefault();
  const items1 = [__initData2(TrashIcon.TrashIcon, { style: tmp.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" }), ];
  const obj3 = { style: tmp.deleteLabel, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.p4Bh7f);
  items1[1] = __initData2(native.LegacyText, obj3);
  obj.children = items1;
  return state(Pressables.PressableOpacity, obj);
});
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default noop.forwardRef((benefitType) => {
  _require = benefitType;
  constants = async function _handleSave() {
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
        return { value: "IconComponent", done: null };
      }
    } else {
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
            closure_0 = tmp3;
            if (null != first1) {
              c3 = 1;
              const obj4 = { name, emoji_id: tmp30, emoji_name, description: null, ref_type: null, ref_id: null };
              let tmp18;
              if ("" !== first3) {
                tmp18 = first3;
              }
              obj4.description = tmp18;
              obj4.ref_type = benefitType.benefitType;
              obj4.ref_id = ref_id;
              c1 = 2;
              c4 = 1;
              const obj5 = { value: benefitType.onSave(obj4), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0.onClose();
            c3 = 0;
          }
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp22) {
        closure_2 = tmp22;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp22;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  maxLength = async function _handleDelete() {
    closure_0 = tmp3;
    onDelete = onDelete.onDelete;
    if (onDelete != null) {
      const onDeleteResult = onDelete();
    }
    await onDeleteResult;
    if (1 === tmp7) {
      c3 = 0;
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_128_0.onClose();
      c3 = 0;
    }
    return value;
  };
  const tmp = closure_15();
  const tmp4 = value(13710)();
  [value] = GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState();
  dependencyMap = tmp6;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  const tmp9 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState(), 2);
  const first3 = tmp9[0];
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] = GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
  let num;
  if (first1 != null) {
    num = first1.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp13 = num > 0;
  if (!tmp13) {
    let num2;
    if (first2 != null) {
      num2 = first2.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp13 = num2 > 0;
  }
  if (!tmp13) {
    if (benefitType.benefitType === constants.CHANNEL) {
      const intl2 = require("util").intl;
      let stringResult = intl2.string(require("util").t.Odqwp9);
      let tmp20 = _require;
    } else {
      const intl = require("util").intl;
      stringResult = intl.string(require("util").t["0rVUnI"]);
      tmp20 = _require;
    }
    if (benefitType.benefitType === constants.CHANNEL) {
      const intl4 = tmp20(1126).intl;
      let stringResult1 = intl4.string(tmp20(1126).t.GK18KJ);
    } else {
      const intl3 = tmp20(1126).intl;
      stringResult1 = intl3.string(tmp20(1126).t["kV54/Y"]);
    }
    if (benefitType.benefitType === constants.CHANNEL) {
      const intl6 = tmp20(1126).intl;
      let stringResult2 = intl6.string(tmp20(1126).t["DDUpp+"]);
    } else {
      const intl5 = tmp20(1126).intl;
      stringResult2 = intl5.string(tmp20(1126).t.NNqncc);
    }
    if (benefitType.benefitType === constants.CHANNEL) {
      let obj = {
        channelId: first4,
        guildId: benefitType.guildId,
        onChange: function handleChannelSelected(id) {
              closure_9(id.id);
              closure_2(useChannelName.computeChannelName(id, UserStore, RelationshipStore));
            }
      };
      let tmp25 = closure_13(tmp2(17949), obj);
      let tmp26 = closure_13;
    } else {
      let obj2 = { style: tmp4.textInput, showTopContainer: false, multiline: false, maxLength: maxLength2, value, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null };
      const intl9 = tmp20(1126).intl;
      obj2.placeholder = intl9.string(tmp20(1126).t["kV54/Y"]);
      obj2.onChange = tmp6;
      obj2.clearButtonVisibility = tmp20(1188).ClearButtonVisibility.WITH_CONTENT;
      tmp25 = closure_13(tmp20(8895).FormInput, obj2);
      tmp26 = closure_13;
    }
    let obj3 = { style: tmp.container, children: null };
    let obj4 = {
      title: stringResult,
      onClose: benefitType.onClose,
      canSave: tmp13,
      onSave: function handleSave() {
          const self = this;
          const apply = closure_10.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      listingId: benefitType.listingId
    };
    const items = [tmp26(tmp2(17951), obj4), ];
    let obj5 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    const items1 = [tmp.scrollContainer, ];
    const obj6 = { paddingBottom: value(1618)().bottom + 32 + 16 };
    items1[1] = obj6;
    obj5.contentContainerStyle = items1;
    const obj7 = { style: tmp4.header, children: stringResult1 };
    const items2 = [tmp26(tmp2(9477), obj7), tmp25, , , , , ];
    const obj8 = { style: tmp4.header, children: null };
    const intl7 = tmp20(1126).intl;
    obj8.children = intl7.string(tmp20(1126).t.sMOuuS);
    items2[2] = tmp26(tmp2(9477), obj8);
    const obj9 = { emoji: null, guildId: null, onChange: null };
    const obj10 = { emojiId: first1, emojiName: first2 };
    obj9.emoji = obj10;
    obj9.guildId = benefitType.guildId;
    obj9.onChange = function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    };
    items2[3] = tmp26(tmp2(17952), obj9);
    const obj11 = { style: tmp4.header, children: null };
    const tmp28 = first2;
    const tmp29 = closure_6;
    const tmp2Result = tmp2(9477);
    const intl8 = tmp20(1126).intl;
    obj11.children = intl8.string(tmp20(1126).t["74JctW"]);
    items2[4] = tmp26(tmp2(9477), obj11);
    const obj12 = { style: tmp4.textInput, showTopContainer: false, multiline: true, maxLength, numberOfLines: 3, value: first3, onChange: tmp9[1], placeholder: stringResult2 };
    items2[5] = tmp26(tmp20(8895).FormInput, obj12);
    let tmp26Result = null;
    if (null != benefitType.onDelete) {
      const obj13 = {
        onDelete: function handleDelete() {
              const self = this;
              const apply = closure_11.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
      };
      tmp26Result = tmp26(closure_16, obj13);
    }
    items2[6] = tmp26Result;
    obj5.children = items2;
    items[1] = closure_14(tmp29, obj5);
    obj3.children = items;
    return closure_14(tmp28, obj3);
  } else if (benefitType.benefitType === constants.CHANNEL) {
    let tmp15 = null != first4;
  } else {
    let num3;
    if (value != null) {
      num3 = value.length;
    }
    if (num3 == null) {
      num3 = 0;
    }
    tmp15 = num3 > 0;
  }
});