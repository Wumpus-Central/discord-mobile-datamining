// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import TrashIcon from "../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildRoleSubscriptionsConstants = fn(16562);
({
  GuildRoleSubscriptionBenefitTypes: c10,
  MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: closure_11,
  MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12,
} = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  scrollContainer: { flexGrow: 1 },
  deleteButton: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};
obj2.deleteButton = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DeleteButton(onDelete) {
      const cResult = c.c(7);
      onDelete = onDelete.onDelete;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.p4Bh7f);
        const obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT };
        const tmp10 = map1(TrashIcon.TrashIcon, obj2);
        cResult[0] = stringResult;
        cResult[1] = tmp10;
        tmp5 = stringResult;
        tmp6 = tmp10;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== onDelete) {
        const obj3 = { variant: "critical-secondary", text: tmp5, icon: tmp6, onPress: onDelete };
        const tmp13 = map1(components_Button_Button.Button, obj3);
        cResult[2] = onDelete;
        cResult[3] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === tmp4.deleteButton) {
        if (cResult[5] === tmp11) {
          let tmp14 = cResult[6];
        }
        return tmp14;
      }
      const tmp15 = map1(hasOwnProperty, { style: tmp4.deleteButton, children: tmp11 });
      cResult[4] = tmp4.deleteButton;
      cResult[5] = tmp11;
      cResult[6] = tmp15;
      tmp14 = tmp15;
    }
  : function DeleteButton(onDelete) {
      const obj = { style: closure_15().deleteButton, children: null };
      const obj2 = { variant: "critical-secondary", text: null, icon: null, onPress: null };
      const intl = util.intl;
      obj2.text = intl.string(util.t.p4Bh7f);
      obj2.icon = map1(TrashIcon.TrashIcon, {
        size: "sm",
        color: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT,
      });
      obj2.onPress = onDelete.onDelete;
      obj.children = map1(components_Button_Button.Button, obj2);
      return map1(hasOwnProperty, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx",
);

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
  const tmp5 = value(15145)();
  [value] = GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState();
  dependencyMap = tmp7;
  [first1, _slicedToArray] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState();
  [first2, closure_6] = GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState();
  const tmp10 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState(), 2);
  const first3 = tmp10[0];
  [first4, GuildRoleSubscriptionBenefitEditorModalStateStore] =
    GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState();
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
      const intl2 = merged(1128).intl;
      let stringResult = intl2.string(merged(1128).t.Odqwp9);
      let tmp21 = merged;
    } else {
      const intl = merged(1128).intl;
      stringResult = intl.string(merged(1128).t["0rVUnI"]);
      tmp21 = merged;
    }
    if (merged.benefitType === constants.CHANNEL) {
      const intl4 = tmp21(1128).intl;
      let stringResult1 = intl4.string(tmp21(1128).t.GK18KJ);
    } else {
      const intl3 = tmp21(1128).intl;
      stringResult1 = intl3.string(tmp21(1128).t["kV54/Y"]);
    }
    if (merged.benefitType === constants.CHANNEL) {
      const intl6 = tmp21(1128).intl;
      let stringResult2 = intl6.string(tmp21(1128).t["DDUpp+"]);
    } else {
      const intl5 = tmp21(1128).intl;
      stringResult2 = intl5.string(tmp21(1128).t.NNqncc);
    }
    if (merged.benefitType === constants.CHANNEL) {
      let obj2 = {
        channelId: first4,
        guildId: merged.guildId,
        onChange: function handleChannelSelected(id) {
          closure_9(id.id);
          closure_2(useChannelName.computeChannelName(id, UserStore, RelationshipStore));
        },
      };
      let tmp27 = closure_13(tmp3(19310), obj2);
      let tmp28 = closure_13;
    } else {
      let obj = {
        containerStyle: tmp5.inputContainer,
        accessibilityLabel: stringResult1,
        maxLength: maxLength2,
        value,
        placeholder: null,
        onChange: null,
        returnKeyType: "done",
        autoFocus: true,
        clearable: true,
      };
      const intl7 = tmp21(1128).intl;
      obj.placeholder = intl7.string(tmp21(1128).t["kV54/Y"]);
      obj.onChange = tmp7;
      tmp27 = closure_13(tmp21(7008).TextInput, obj);
      tmp28 = closure_13;
    }
    let obj3 = { style: tmp2.container, children: null };
    let obj4 = {
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
      listingId: merged.listingId,
    };
    const items = [tmp28(tmp3(19312), obj4)];
    let obj5 = {
      keyboardShouldPersistTaps: "handled",
      showsVerticalScrollIndicator: false,
      alwaysBounceVertical: false,
      contentContainerStyle: null,
      children: null,
    };
    const items1 = [tmp2.scrollContainer];
    const obj6 = { paddingBottom: value(1633)().bottom + 32 + 16 };
    items1[1] = obj6;
    obj5.contentContainerStyle = items1;
    const obj7 = { style: tmp5.header, children: stringResult1 };
    const items2 = [tmp28(tmp3(9044), obj7), tmp27, , , , ,];
    const obj8 = { style: tmp5.header, children: null };
    const intl8 = tmp21(1128).intl;
    obj8.children = intl8.string(tmp21(1128).t.sMOuuS);
    items2[2] = tmp28(tmp3(9044), obj8);
    const obj9 = { emoji: null, guildId: null, onChange: null };
    const obj10 = { emojiId: first1, emojiName: first2 };
    obj9.emoji = obj10;
    obj9.guildId = merged.guildId;
    obj9.onChange = function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    };
    items2[3] = tmp28(tmp3(19313), obj9);
    const obj11 = { style: tmp5.header, children: null };
    const tmp31 = first2;
    const tmp32 = closure_6;
    const tmp3Result = tmp3(9044);
    const intl9 = tmp21(1128).intl;
    obj11.children = intl9.string(tmp21(1128).t["74JctW"]);
    items2[4] = tmp28(tmp3(9044), obj11);
    const obj12 = {
      containerStyle: tmp5.inputContainer,
      accessibilityLabel: null,
      maxLength: null,
      value: null,
      onChange: null,
      placeholder: null,
    };
    const intl10 = tmp21(1128).intl;
    obj12.accessibilityLabel = intl10.string(tmp21(1128).t["74JctW"]);
    obj12.maxLength = maxLength;
    obj12.value = first3;
    obj12.onChange = tmp10[1];
    obj12.placeholder = stringResult2;
    items2[5] = tmp28(tmp21(7180).TextArea, obj12);
    let tmp28Result = null;
    if (null != merged.onDelete) {
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
        },
      };
      tmp28Result = tmp28(closure_16, obj13);
    }
    items2[6] = tmp28Result;
    obj5.children = items2;
    items[1] = closure_14(tmp32, obj5);
    obj3.children = items;
    return closure_14(tmp31, obj3);
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
}
