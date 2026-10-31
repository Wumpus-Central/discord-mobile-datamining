// === Module 19964: GuildRoleSubscriptionBenefitEditorModal ===

// Module 19964 (GuildRoleSubscriptionBenefitEditorModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import useChannelName from "useChannelName" /* 5652 */;
import TrashIcon from "TrashIcon" /* 5738 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 19963 */;

require = fn;
function DeleteButton(onDelete) {
  const obj = { variant: "critical-secondary", text: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.p4Bh7f);
  obj.icon = map1(TrashIcon.TrashIcon, { size: "sm", color: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT });
  obj.onPress = onDelete.onDelete;
  return map1(components_Button_Button.Button, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildRoleSubscriptionsConstants = fn(17183);
({ GuildRoleSubscriptionBenefitTypes: c10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: closure_11, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }, scrollContainer: { flexGrow: 1 } };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default function GuildRoleSubscriptionBenefitEditorModal(arg0) {
  const merged = Object.assign(arg0, Object.assign({ ref: 0 }));
  value = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  first2 = undefined;
  closure_6 = undefined;
  first4 = undefined;
  GuildRoleSubscriptionBenefitEditorModalStateStore = undefined;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
              obj4.ref_type = merged.benefitType;
              obj4.ref_id = ref_id;
              c1 = 2;
              c4 = 1;
              const obj5 = { value: merged.onSave(obj4), done: false };
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
  const tmp2 = closure_15();
  [value] = GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState();
  dependencyMap = tmp7;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  const tmp10 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState(), 2);
  const first3 = tmp10[0];
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] = GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
  let num;
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
  if (!tmp14) {
    if (merged.benefitType === constants.CHANNEL) {
      const intl2 = merged(1113).intl;
      let stringResult = intl2.string(merged(1113).t.Odqwp9);
      let tmp21 = merged;
    } else {
      const intl = merged(1113).intl;
      stringResult = intl.string(merged(1113).t["0rVUnI"]);
      tmp21 = merged;
    }
    if (merged.benefitType === constants.CHANNEL) {
      const intl4 = tmp21(1113).intl;
      let stringResult1 = intl4.string(tmp21(1113).t.GK18KJ);
    } else {
      const intl3 = tmp21(1113).intl;
      stringResult1 = intl3.string(tmp21(1113).t["kV54/Y"]);
    }
    if (merged.benefitType === constants.CHANNEL) {
      const intl6 = tmp21(1113).intl;
      let stringResult2 = intl6.string(tmp21(1113).t["DDUpp+"]);
    } else {
      const intl5 = tmp21(1113).intl;
      stringResult2 = intl5.string(tmp21(1113).t.NNqncc);
    }
    if (merged.benefitType === constants.CHANNEL) {
      let obj2 = { title: stringResult1, hasIcons: true, children: null };
      let obj3 = {
        channelId: first4,
        guildId: merged.guildId,
        onChange: function handleChannelSelected(id) {
              closure_9(id.id);
              closure_2(useChannelName.computeChannelName(id, UserStore, RelationshipStore));
            }
      };
      obj2.children = closure_13(tmp3(19965), obj3);
      let tmp27 = closure_13(tmp21(7060).TableRowGroup, obj2);
      let tmp28 = closure_13;
    } else {
      let obj = { label: stringResult1, maxLength: maxLength2, value, placeholder: null, onChange: null, returnKeyType: "done", autoFocus: true, clearable: true };
      const intl7 = tmp21(1113).intl;
      obj.placeholder = intl7.string(tmp21(1113).t["kV54/Y"]);
      obj.onChange = tmp7;
      tmp27 = closure_13(tmp21(7082).TextInput, obj);
      tmp28 = closure_13;
    }
    let obj4 = { style: tmp2.container, children: null };
    let obj5 = {
      title: stringResult,
      onClose: merged.onClose,
      canSave: tmp14,
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
      listingId: merged.listingId
    };
    const items = [tmp28(tmp3(19967), obj5), ];
    const obj6 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    const items1 = [tmp2.scrollContainer, tmp5.container, ];
    const obj7 = { paddingBottom: null };
    const sum = value(1625)().bottom + tmp3(575).space.PX_32;
    obj7.paddingBottom = sum + tmp3(575).space.PX_16;
    items1[2] = obj7;
    obj6.contentContainerStyle = items1;
    const items2 = [tmp27, , , ];
    const obj8 = { title: null, hasIcons: true, children: null };
    const intl8 = tmp21(1113).intl;
    obj8.title = intl8.string(tmp21(1113).t.sMOuuS);
    const obj9 = { emoji: null, guildId: null, onChange: null };
    const obj10 = { emojiId: first1, emojiName: first2 };
    obj9.emoji = obj10;
    obj9.guildId = merged.guildId;
    obj9.onChange = function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    };
    obj8.children = tmp28(tmp3(19968), obj9);
    items2[1] = tmp28(tmp21(7060).TableRowGroup, obj8);
    const obj11 = { label: null, maxLength: null, value: null, onChange: null, placeholder: null };
    const intl9 = tmp21(1113).intl;
    obj11.label = intl9.string(tmp21(1113).t["74JctW"]);
    obj11.maxLength = maxLength;
    obj11.value = first3;
    obj11.onChange = tmp10[1];
    obj11.placeholder = stringResult2;
    items2[2] = tmp28(tmp21(7253).TextArea, obj11);
    let tmp28Result = null;
    if (null != merged.onDelete) {
      const obj12 = {
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
      tmp28Result = tmp28(DeleteButton, obj12);
    }
    items2[3] = tmp28Result;
    obj6.children = items2;
    items[1] = closure_14(closure_6, obj6);
    obj4.children = items;
    return closure_14(first2, obj4);
  } else if (merged.benefitType === constants.CHANNEL) {
    let tmp16 = null != first4;
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
  tmp5 = value(19943)();
};