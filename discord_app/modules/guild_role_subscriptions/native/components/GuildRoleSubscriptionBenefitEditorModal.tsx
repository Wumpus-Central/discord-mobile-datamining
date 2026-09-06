// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import TrashIcon from "../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import FormStylesDefault from "FormStyles.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
function DeleteButton(onDelete) {
  const tmp = closure_15();
  let obj = { style: null, accessibilityRole: "button", onPress: onDelete.onDelete, children: null };
  const items = [FormStylesDefault().textInput, tmp.deleteButton];
  obj.style = items;
  obj = { style: tmp.deleteIcon, color: nativeDefault.unsafe_rawColors.RED_400, size: "custom" };
  const items1 = [map1(TrashIcon.TrashIcon, obj)];
  obj = { style: tmp.deleteLabel, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.p4Bh7f);
  items1[1] = map1(native.LegacyText, obj);
  obj.children = items1;
  return closure_1_14(Pressables.PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildRoleSubscriptionsConstants = fn(15205);
({
  GuildRoleSubscriptionBenefitTypes: c10,
  MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: closure_11,
  MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12,
} = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let obj = { container: null, scrollContainer: null, deleteButton: null, deleteIcon: null, deleteLabel: null };
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};
obj.container = obj;
obj.scrollContainer = { flexGrow: 1 };
obj.deleteButton = { flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: "center" };
obj.deleteIcon = { width: 20, height: 20 };
const createStyles = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_SEMIBOLD, nativeDefault.unsafe_rawColors.RED_400, 16));
createStyles.marginStart = 8;
createStyles.lineHeight = 20;
obj.deleteLabel = createStyles;
let closure_15 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx",
);

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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp3;
            if (null != first1) {
              c3 = 1;
              const obj1 = { name, emoji_id: tmp30, emoji_name, description: null, ref_type: null, ref_id: null };
              let tmp18;
              if ("" !== first3) {
                tmp18 = first3;
              }
              obj1.description = tmp18;
              obj1.ref_type = benefitType.benefitType;
              obj1.ref_id = ref_id;
              c1 = 2;
              c4 = 1;
              const obj2 = { value: benefitType.onSave(obj1), done: false };
              return obj2;
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
          obj = { value, done: true };
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
  const tmp4 = value(13898)();
  const tmp5 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useNameState(), 2);
  value = tmp5[0];
  dependencyMap = tmp6;
  const tmp7 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiIdState(), 2);
  const first1 = tmp7[0];
  _slicedToArray = tmp7[1];
  const tmp8 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useEmojiNameState(), 2);
  const first2 = tmp8[0];
  closure_6 = tmp8[1];
  const tmp9 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useDescriptionState(), 2);
  const first3 = tmp9[0];
  const tmp11 = _slicedToArray(GuildRoleSubscriptionBenefitEditorModalStateStore.useRefIdState(), 2);
  const first4 = tmp11[0];
  GuildRoleSubscriptionBenefitEditorModalStateStore = tmp11[1];
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
      const intl4 = tmp20(1114).intl;
      let stringResult1 = intl4.string(tmp20(1114).t.GK18KJ);
    } else {
      const intl3 = tmp20(1114).intl;
      stringResult1 = intl3.string(tmp20(1114).t["kV54/Y"]);
    }
    if (benefitType.benefitType === constants.CHANNEL) {
      const intl6 = tmp20(1114).intl;
      let stringResult2 = intl6.string(tmp20(1114).t["DDUpp+"]);
    } else {
      const intl5 = tmp20(1114).intl;
      stringResult2 = intl5.string(tmp20(1114).t.NNqncc);
    }
    if (benefitType.benefitType === constants.CHANNEL) {
      let obj = {
        channelId: first4,
        guildId: benefitType.guildId,
        onChange: function handleChannelSelected(id) {
          closure_9(id.id);
          closure_2(useChannelName.computeChannelName(id, UserStore, RelationshipStore));
        },
      };
      let tmp25 = closure_13(tmp2(17754), obj);
      let tmp26 = closure_13;
    } else {
      obj = {
        style: tmp4.textInput,
        showTopContainer: false,
        multiline: false,
        maxLength: maxLength2,
        value,
        placeholder: null,
        onChange: null,
        autoFocus: true,
        clearButtonVisibility: null,
      };
      const intl9 = tmp20(1114).intl;
      obj.placeholder = intl9.string(tmp20(1114).t["kV54/Y"]);
      obj.onChange = tmp6;
      obj.clearButtonVisibility = tmp20(1178).ClearButtonVisibility.WITH_CONTENT;
      tmp25 = closure_13(tmp20(8593).FormInput, obj);
      tmp26 = closure_13;
    }
    obj = { style: tmp.container, children: null };
    let obj1 = {
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
      listingId: benefitType.listingId,
    };
    const items = [tmp26(tmp2(17756), obj1)];
    let obj2 = {
      keyboardShouldPersistTaps: "handled",
      showsVerticalScrollIndicator: false,
      alwaysBounceVertical: false,
      contentContainerStyle: null,
      children: null,
    };
    const items1 = [tmp.scrollContainer];
    const obj3 = { paddingBottom: value(1611)().bottom + 32 + 16 };
    items1[1] = obj3;
    obj2.contentContainerStyle = items1;
    const obj4 = { style: tmp4.header, children: stringResult1 };
    const items2 = [tmp26(tmp2(9816), obj4), tmp25, , , , ,];
    const obj5 = { style: tmp4.header, children: null };
    let tmp2Result = tmp2(9816);
    const intl7 = tmp20(1114).intl;
    obj5.children = intl7.string(tmp20(1114).t.sMOuuS);
    items2[2] = tmp26(tmp2Result, obj5);
    const obj6 = { emoji: null, guildId: null, onChange: null };
    const obj7 = { emojiId: first1, emojiName: first2 };
    obj6.emoji = obj7;
    obj6.guildId = benefitType.guildId;
    obj6.onChange = function handleSetEmoji(emojiId) {
      closure_4(emojiId.emojiId);
      closure_6(emojiId.emojiName);
    };
    items2[3] = tmp26(tmp2(17757), obj6);
    const obj8 = { style: tmp4.header, children: null };
    tmp2Result = tmp2(9816);
    const intl8 = tmp20(1114).intl;
    obj8.children = intl8.string(tmp20(1114).t["74JctW"]);
    items2[4] = tmp26(tmp2Result, obj8);
    const obj9 = {
      style: tmp4.textInput,
      showTopContainer: false,
      multiline: true,
      maxLength,
      numberOfLines: 3,
      value: first3,
      onChange: tmp9[1],
      placeholder: stringResult2,
    };
    items2[5] = tmp26(tmp20(8593).FormInput, obj9);
    let tmp26Result = null;
    if (null != benefitType.onDelete) {
      const obj10 = {
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
      tmp26Result = tmp26(DeleteButton, obj10);
    }
    items2[6] = tmp26Result;
    obj2.children = items2;
    items[1] = closure_14(closure_6, obj2);
    obj.children = items;
    return closure_14(first2, obj);
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
