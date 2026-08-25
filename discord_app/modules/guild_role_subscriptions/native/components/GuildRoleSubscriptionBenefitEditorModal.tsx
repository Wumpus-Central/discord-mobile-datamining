// === Module 17099: DeleteButton ===

// Module 17099 (DeleteButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import TrashIcon from "TrashIcon" /* 4338 */;
import PressableBase from "PressableBase" /* 4949 */;
import stylesDefault from "styles" /* 13451 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "markAllUserIdListsStale" /* 4034 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import closure_9 from "resetImperatively" /* 17098 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14649 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult from "createTextStyle" /* 5342 */;

require = arg1;
function DeleteButton(onDelete) {
  const tmp = callback4();
  let obj = { style: items, accessibilityRole: "button", onPress: onDelete.onDelete, children: null };
  items = [stylesDefault().textInput, tmp.deleteButton];
  obj = { style: tmp.deleteIcon, color: ThemesDefault.unsafe_rawColors.RED_400, size: "custom" };
  const items1 = [callback2(TrashIcon.TrashIcon, obj), ];
  obj = { style: tmp.deleteLabel, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.p4Bh7f);
  items1[1] = callback2(Button.LegacyText, obj);
  obj[3] = items1;
  return callback3(PressableBase.PressableOpacity, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ GuildRoleSubscriptionBenefitTypes: c10, MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH: unpackModuleId, MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH: closure_12 } = MAX_SUBSCRIPTION_TIERS);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { container: null, scrollContainer: null, deleteButton: null, deleteIcon: null, deleteLabel: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" };
obj[0] = obj;
obj[1] = { flexGrow: 1 };
obj[2] = { flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: "center" };
obj[3] = { width: 20, height: 20 };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_SEMIBOLD, ThemesDefault.unsafe_rawColors.RED_400, 16));
createCacheKey.marginStart = 8;
createCacheKey.lineHeight = 20;
obj[4] = createCacheKey;
let closure_15 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((benefitType) => {
  const _require = benefitType;
  function _handleSave() {
    const self = this;
    const tmp = first1(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (null != c3) {
                c3 = 1;
                obj1 = { name: null, emoji_id: null, emoji_name: null, description: null, ref_type: null, ref_id: null };
                obj1[0] = c1;
                obj1[1] = tmp31;
                obj1[2] = closure_1_5;
                let tmp18;
                if ("" !== closure_1_7) {
                  tmp18 = closure_1_7;
                }
                obj1[3] = tmp18;
                obj1[4] = closure_1_0.benefitType;
                obj1[5] = closure_1_8;
                c1 = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_0.onSave(obj1);
                return obj2;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0.onClose();
              c3 = 0;
            }
            c3 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    });
    closure_10 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _handleDelete() {
    const self = this;
    const tmp = first1(function*() {
      closure_0 = tmp3;
      c3 = 1;
      const onDelete = closure_1_0.onDelete;
      if (onDelete != null) {
        const onDeleteResult = onDelete();
      }
      yield onDeleteResult;
      if (1 === tmp7) {
        c3 = 0;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_0.onClose();
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    });
    closure_11 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  const tmp4 = first(13451)();
  const tmp5 = callback(closure_9.useNameState(), 2);
  first = tmp5[0];
  dependencyMap = tmp6;
  const tmp7 = callback(closure_9.useEmojiIdState(), 2);
  const first1 = tmp7[0];
  callback = tmp7[1];
  const tmp8 = callback(closure_9.useEmojiNameState(), 2);
  const first2 = tmp8[0];
  closure_6 = tmp8[1];
  const tmp9 = callback(closure_9.useDescriptionState(), 2);
  const first3 = tmp9[0];
  const tmp11 = callback(closure_9.useRefIdState(), 2);
  const first4 = tmp11[0];
  closure_9 = tmp11[1];
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
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl2 = _require(1236).intl;
      let stringResult = intl2.string(_require(1236).t.Odqwp9);
      let tmp20 = _require;
    } else {
      const intl = _require(1236).intl;
      stringResult = intl.string(_require(1236).t["0rVUnI"]);
      tmp20 = _require;
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl4 = tmp20(1236).intl;
      let stringResult1 = intl4.string(tmp20(1236).t.GK18KJ);
    } else {
      const intl3 = tmp20(1236).intl;
      stringResult1 = intl3.string(tmp20(1236).t["kV54/Y"]);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      const intl6 = tmp20(1236).intl;
      let stringResult2 = intl6.string(tmp20(1236).t["DDUpp+"]);
    } else {
      const intl5 = tmp20(1236).intl;
      stringResult2 = intl5.string(tmp20(1236).t.NNqncc);
    }
    if (benefitType.benefitType === _handleSave.CHANNEL) {
      let obj = { channelId: null, guildId: null, onChange: null };
      obj[0] = first4;
      obj[1] = benefitType.guildId;
      obj[2] = function handleChannelSelected(id) {
        callback3(id.id);
        dependencyMap(benefitType(4574).computeChannelName(id, first4, first3));
      };
      let tmp25 = callback2(tmp2(17100), obj);
      let tmp26 = callback2;
    } else {
      obj = { style: null, showTopContainer: false, multiline: false, maxLength: null, value: null, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null };
      obj[0] = tmp4.textInput;
      obj[3] = closure_12;
      obj[4] = first;
      const intl9 = tmp20(1236).intl;
      obj[5] = intl9.string(tmp20(1236).t["kV54/Y"]);
      obj[6] = tmp6;
      obj[8] = tmp20(1297).ClearButtonVisibility.WITH_CONTENT;
      tmp25 = callback2(tmp20(8118).FormInput, obj);
      tmp26 = callback2;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { title: null, onClose: null, canSave: null, onSave: null, listingId: null };
    obj1[0] = stringResult;
    obj1[1] = benefitType.onClose;
    obj1[2] = tmp13;
    obj1[3] = function handleSave() {
      const self = this;
      const apply = _handleSave.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj1[4] = benefitType.listingId;
    const items = [tmp26(tmp2(17102), obj1), ];
    let obj2 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    const items1 = [tmp.scrollContainer, ];
    const obj3 = { paddingBottom: null };
    obj3[0] = first(1629)().bottom + 32 + 16;
    items1[1] = obj3;
    obj2[3] = items1;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp4.header;
    obj4[1] = stringResult1;
    const items2 = [tmp26(tmp2(9207), obj4), tmp25, , , , , ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp4.header;
    let tmp2Result = tmp2(9207);
    const intl7 = tmp20(1236).intl;
    obj5[1] = intl7.string(tmp20(1236).t.sMOuuS);
    items2[2] = tmp26(tmp2Result, obj5);
    const obj6 = { emoji: null, guildId: null, onChange: null };
    const obj7 = { emojiId: null, emojiName: null };
    obj7[0] = first1;
    obj7[1] = first2;
    obj6[0] = obj7;
    obj6[1] = benefitType.guildId;
    obj6[2] = function handleSetEmoji(emojiId) {
      callback(emojiId.emojiId);
      callback2(emojiId.emojiName);
    };
    items2[3] = tmp26(tmp2(17103), obj6);
    const obj8 = { style: null, children: null };
    obj8[0] = tmp4.header;
    tmp2Result = tmp2(9207);
    const intl8 = tmp20(1236).intl;
    obj8[1] = intl8.string(tmp20(1236).t["74JctW"]);
    items2[4] = tmp26(tmp2Result, obj8);
    const obj9 = { style: null, showTopContainer: false, multiline: true, maxLength: null, numberOfLines: 3, value: null, onChange: null, placeholder: null };
    obj9[0] = tmp4.textInput;
    obj9[3] = _handleDelete;
    obj9[5] = first3;
    obj9[6] = tmp9[1];
    obj9[7] = stringResult2;
    items2[5] = tmp26(tmp20(8118).FormInput, obj9);
    let tmp26Result = null;
    if (null != benefitType.onDelete) {
      const obj10 = { onDelete: null };
      obj10[0] = function handleDelete() {
        const self = this;
        const apply = _handleDelete.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      tmp26Result = tmp26(DeleteButton, obj10);
    }
    items2[6] = tmp26Result;
    obj2[4] = items2;
    items[1] = closure_14(closure_6, obj2);
    obj[1] = items;
    return closure_14(first2, obj);
  } else if (benefitType.benefitType === _handleSave.CHANNEL) {
    let tmp15 = null != first4;
  } else {
    let num3;
    if (first != null) {
      num3 = first.length;
    }
    if (num3 == null) {
      num3 = 0;
    }
    tmp15 = num3 > 0;
  }
});
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx");

export default forwardRefResult;