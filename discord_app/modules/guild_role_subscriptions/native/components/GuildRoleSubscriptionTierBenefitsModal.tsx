// === Module 17984: GuildRoleSubscriptionTierBenefitsModal ===

// Module 17984 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9455 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15060 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 15061 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 17963 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17972 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17974 */;
import AssetRegistryDefault from "AssetRegistry" /* 17985 */;
import EmojiAliasDefault from "EmojiAlias" /* 17986 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 17991 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 17992 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15038 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, dependencyMap, emoji, importAll, importDefault, onChangeTrialInterval;

let c10;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp10;
let unpackModuleId;
const AllChannelsSwitchDefault = tmp10(18002);
function Content(arg0) {
  let closure_2;
  let closure_3;
  let closure_8;
  let onlyChannels;
  let onlyIntangible;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp34Result;
  let first1;
  AllChannelAccessOptions = undefined;
  let first2;
  let closure_10;
  let first3;
  closure_12 = undefined;
  let closure_13;
  let roleSubscriptionSettingsDisabled;
  closure_16 = undefined;
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === c10.CHANNEL) {
      closure_8((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
        return items;
      });
    } else {
      closure_10((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    let stringResult;
    type = type.type;
    const obj = { style: closure_1(closure_3[18])().header, children: stringResult };
    const tmp4 = closure_1(closure_3[23]);
    if (closure_16.CHANNEL === type) {
      const intl2 = closure_0(closure_3[15]).intl;
      stringResult = intl2.string(closure_0(closure_3[15]).t.LtfhAj);
    } else if (closure_16.INTANGIBLE === type) {
      const intl = closure_0(closure_3[15]).intl;
      stringResult = intl.string(closure_0(closure_3[15]).t["8oxWpO"]);
    } else if (closure_16.EMOJI === type) {
      const intl3 = closure_0(closure_3[15]).intl;
      stringResult = intl3.string(closure_0(closure_3[15]).t.XBkDoA);
    }
    return closure_12(tmp4, obj);
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = addBenefit();
  _require = tmp;
  let tmp2 = true === onlyIntangible;
  importDefault = tmp2;
  importAll = tmp3;
  let tmp4 = tmp2 || tmp3;
  dependencyMap = tmp4;
  let tmp6 = dependencyMap;
  let obj = require("EditStateContextProvider");
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  const guildId = editStateContext.guildId;
  let obj2 = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj2.useSubscriptionListing(editStateId);
  let role_id;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  const isFullServerGating = useRoleSubscriptionFormatDefault(guildId).isFullServerGating;
  const first = editStateId(first2(), 1)[0];
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp12 = editStateId(obj3.useChannelBenefits(editStateId), 2);
  first1 = tmp12[0];
  AllChannelAccessOptions = tmp12[1];
  let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp14 = editStateId(obj4.useIntangibleBenefits(editStateId), 2);
  first2 = tmp14[0];
  closure_10 = tmp14[1];
  let obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp16 = editStateId(obj5.useTierEmojiIds(editStateId, guildId), 2);
  first3 = tmp16[0];
  closure_12 = tmp16[1];
  const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp19, tmp20] = editStateId(obj6.useTrialInterval(editStateId), 2);
  editStateId(obj6.useTrialInterval(editStateId), 2);
  const obj7 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp22, tmp23] = editStateId(obj7.useTrialLimit(editStateId), 2);
  editStateId(obj7.useTrialLimit(editStateId), 2);
  const obj8 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp24 = editStateId(obj8.useChannelAccessFormat(editStateId, guildId), 2);
  const first4 = tmp24[0];
  closure_13 = tmp27;
  const tmp26 = tmp24[1];
  const tmp5Result = require("RoleSubscriptionSettingsDisabledContext");
  roleSubscriptionSettingsDisabled = tmp5Result.useRoleSubscriptionSettingsDisabled();
  const tmp29 = useRoleSubscriptionEmojisDefault(guildId);
  closure_16 = tmp29;
  let items = [first3, tmp29, tmp2, first4 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, first1, first2];
  let tmp31 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = closure_1;
    const found = closure_16.filter((id) => set.has(id.id));
    if (!closure_1) {
      tmp2 = closure_13;
    }
    const items = [];
    if (!tmp2) {
      const obj = { type: closure_16.CHANNEL, data: first1 };
      items.push(obj);
    }
    if (!closure_2) {
      const obj2 = { type: closure_16.INTANGIBLE, data: first2 };
      items.push(obj2);
    }
    if (!closure_3) {
      const obj3 = { type: closure_16.EMOJI, data: found };
      items.push(obj3);
    }
    return items;
  }, items);
  if (!tmp2) {
    tmp31 = null;
    if (true !== onlyChannels) {
      const obj9 = { interval: tmp19, onChangeTrialInterval: tmp20, trialActiveUserLimit: tmp22, onChangeTrialActiveUserLimit: tmp23 };
      tmp31 = closure_12(closure_21, obj9);
    }
  }
  const obj10 = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
      let obj3;
      let obj4;
      let obj5;
      let tmp3Result;
      item = item.item;
      const index = item.index;
      let items = [item.item, , ];
      let itemFirst = 0 === index;
      const diff = item.section.data.length - 1;
      if (itemFirst) {
        itemFirst = tmp2.itemFirst;
      }
      let itemLast = index === diff;
      items[1] = itemFirst;
      if (itemLast) {
        itemLast = tmp2.itemLast;
      }
      items[2] = itemLast;
      if ("roles" in item) {
        const items1 = [items, ];
        const disabled2 = roleSubscriptionSettingsDisabled && tmp2.disabled;
        let obj2 = { style: items1, children: closure_12(closure_1_20, obj3) };
        items1[1] = disabled2;
        obj3 = { emoji: item };
        tmp3Result = closure_12(first1, obj2);
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        const tmp6 = closure_1(closure_3[14]);
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp2.disabled;
        }
        let obj = {
          style: items2,
          accessibilityRole: "button",
          accessibilityState: obj4,
          onPress() {
              closure_0 = item;
              closure_1 = index;
              const obj = closure_1_2(closure_1_3[31]);
              const obj2 = {
                guildId,
                benefit: item,
                onDelete() {
                  ref_type = closure_1;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arr) => arr.filter((item, index) => index !== closure_1_0));
                  } else {
                    closure_2_10((arr) => arr.filter((item, index) => index !== closure_1_0));
                  }
                },
                onSave(ref_type) {
                  closure_0 = ref_type;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arg0) => {
                      const items = [...arg0, closure_0];
                      return items;
                    });
                  } else {
                    closure_2_10((arg0) => {
                      const items = [...arg0, closure_0];
                      return items;
                    });
                  }
                },
                listingId: editStateId
              };
              obj.showEditBenefitModal(obj2);
            },
          disabled: roleSubscriptionSettingsDisabled,
          children: closure_12(closure_0(closure_3[32]).GuildRoleSubscriptionBenefitPreview, obj5)
        };
        items2[1] = disabled;
        obj4 = { disabled: roleSubscriptionSettingsDisabled };
        obj5 = { guildId, benefit: item };
        tmp3Result = closure_12(tmp6, obj);
      }
      return tmp3Result;
    },
    keyExtractor: require("GuildRoleSubscriptionTypeUtils").getBenefitKey,
    ListHeaderComponent: tmp34Result,
    renderSectionHeader(section) {
      const obj = { type: section.section.type };
      return closure_12(GuildRoleSubscriptionTierBenefitsModalHeader, obj);
    },
    stickySectionHeadersEnabled: false,
    renderSectionFooter(section) {
      let stringResult;
      const type = section.section.type;
      if (constants.CHANNEL === type) {
        const intl2 = closure_0(closure_3[15]).intl;
        stringResult = intl2.string(closure_0(closure_3[15]).t.WEg7PK);
      } else if (constants.INTANGIBLE === type) {
        const intl = closure_0(closure_3[15]).intl;
        stringResult = intl.string(closure_0(closure_3[15]).t.VinNZr);
      } else if (constants.EMOJI === type) {
        const intl3 = closure_0(closure_3[15]).intl;
        stringResult = intl3.string(closure_0(closure_3[15]).t["0t1aNC"]);
      }
      let obj = {
        label: stringResult,
        onPress() {
          if (type === constants.EMOJI) {
            const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds: first3, onSave, listingId: editStateId };
            const obj3 = GuildRoleSubscriptionsModalActionCreatorsAll;
            obj3.showEditEmojisModal(obj2);
          } else {
            let INTANGIBLE;
            if (tmp === tmp2.CHANNEL) {
              INTANGIBLE = constants.CHANNEL;
            } else {
              INTANGIBLE = constants.INTANGIBLE;
            }
            const obj4 = { guildId, type: INTANGIBLE, onSave: addBenefit, listingId: editStateId };
            const obj = GuildRoleSubscriptionsModalActionCreatorsAll;
            const result = obj.showCreateBenefitModal(obj4);
          }
        },
        disabled: roleSubscriptionSettingsDisabled
      };
      return onSave(GuildRoleSubscriptionTierBenefitsModalHeader, obj);
    },
    ItemSeparatorComponent,
    SectionSeparatorComponent,
    ListFooterComponent: tmp31
  };
  tmp34Result = null;
  const tmp35 = role_id;
  if (!tmp2) {
    if (isFullServerGating) {
      const obj11 = { style: tmp.allChannelsSwitch, channelAccessFormat: first4, setChannelAccessFormat: tmp26, disabled: roleSubscriptionSettingsDisabled };
      tmp34Result = tmp34(AllChannelsSwitchDefault, obj11);
    } else {
      tmp34Result = null;
    }
  }
  return closure_12(tmp35, obj10);
}
({ SectionList: metroRequire, View: metroImportDefault } = react_native);
let AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
const useGroupIsFullGateState = RoleTierEditStore.useGroupIsFullGateState;
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: unpackModuleId } = GuildRoleSubscriptionsConstants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listContainer: { paddingBottom: 16 }, card: obj2, item: obj3, itemFirst: obj4, itemLast: obj5, itemSeparatorContainer: obj6, itemSeparator: obj7, listFooterText: { marginHorizontal: 16 }, listFooterSubtitle: { marginTop: 8 }, listFooterSectionDescription: { marginBottom: 16 }, listFooterContainer: { marginVertical: 24 }, disabledSection: { opacity: 0.5 }, allChannelsSwitch: { marginHorizontal: 16, marginTop: 24 }, addBenefitLabel: { marginStart: 16 }, separator: { height: 8 }, emojiImage: { width: 24, height: 24, marginRight: 16 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
obj4 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj5 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
obj7 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
let closure_15 = createStyles(obj);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let items;
  let label;
  let onPress;
  const obj = react2;
  const cResult = obj.c(15);
  ({ label, onPress, disabled } = arg0);
  const tmp5 = closure_15();
  if (cResult[0] === tmp5.card) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[1] === (undefined !== disabled && disabled && tmp5.disabled)) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== (undefined !== disabled && disabled)) {
      const obj2 = { disabled: undefined !== disabled && disabled };
      cResult[3] = undefined !== disabled && disabled;
      cResult[4] = obj2;
      tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { source: AssetRegistryDefault };
      const tmp13 = FastImageDefault;
      const tmp14 = closure_12(tmp13, obj3);
      cResult[5] = tmp14;
      tmp10 = tmp14;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === label) {
      let tmp15;
      if (cResult[7] === tmp5.addBenefitLabel) {
        tmp15 = cResult[8];
      }
      if (cResult[9] === (undefined !== disabled && disabled)) {
        if (cResult[10] === onPress) {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp8) {
              let tmp18;
              if (cResult[13] === tmp15) {
                tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
        }
      }
      const obj4 = { style: tmp7, accessibilityRole: "button", accessibilityState: tmp8, onPress, disabled: undefined !== disabled && disabled, children: items };
      items = [tmp10, tmp15];
      const tmp21 = map1(TouchableHitBoxDefault, obj4);
      cResult[9] = undefined !== disabled && disabled;
      cResult[10] = onPress;
      cResult[11] = tmp7;
      cResult[12] = tmp8;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
    const obj5 = { style: tmp5.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
    const tmp17 = closure_12(Text_Text.Text, obj5);
    cResult[6] = label;
    cResult[7] = tmp5.addBenefitLabel;
    cResult[8] = tmp17;
    tmp15 = tmp17;
  }
  const items1 = [tmp5.card, undefined !== disabled && disabled && tmp5.disabled];
  cResult[0] = tmp5.card;
  cResult[1] = undefined !== disabled && disabled && tmp5.disabled;
  cResult[2] = items1;
  tmp7 = items1;
}) : ((disabled) => {
  let items1;
  let label;
  let onPress;
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  const items = [tmp.card, ];
  disabled = flag;
  const tmp5 = TouchableHitBoxDefault;
  if (flag) {
    disabled = tmp.disabled;
  }
  const obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: items1 };
  items[1] = disabled;
  const obj2 = { source: AssetRegistryDefault };
  const tmp3Result = FastImageDefault;
  items1 = [closure_12(tmp3Result, obj2), ];
  const obj3 = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = closure_12(Text_Text.Text, obj3);
  return map1(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const SectionSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = closure_12(metroImportDefault, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: closure_15().separator };
  return closure_12(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.itemSeparator) {
    const obj2 = { style: tmp2.itemSeparator };
    const tmp6 = closure_12(metroImportDefault, obj2);
    cResult[0] = tmp2.itemSeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.itemSeparatorContainer) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { style: tmp2.itemSeparatorContainer, children: tmp3 };
  const tmp8 = closure_12(metroImportDefault, obj3);
  cResult[2] = tmp2.itemSeparatorContainer;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (() => {
  let obj2;
  const tmp = closure_15();
  const obj = { style: tmp.itemSeparatorContainer, children: closure_12(metroImportDefault, obj2) };
  obj2 = { style: tmp.itemSeparator };
  return closure_12(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let items;
  const obj = react2;
  const cResult = obj.c(13);
  emoji = emoji.emoji;
  const tmp3 = closure_15();
  if (cResult[0] === emoji.animated) {
    let tmp5;
    let tmp7;
    if (cResult[1] === emoji.id) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { uri: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp3.emojiImage) {
      let tmp8;
      let tmp12;
      if (cResult[6] === tmp7) {
        tmp8 = cResult[7];
      }
      if (cResult[8] !== emoji.name) {
        const obj4 = { name: emoji.name };
        const tmp15 = closure_12(EmojiAliasDefault, obj4);
        cResult[8] = emoji.name;
        cResult[9] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp8) {
        let tmp16;
        if (cResult[11] === tmp12) {
          tmp16 = cResult[12];
        }
        return tmp16;
      }
      const obj5 = { children: items };
      items = [tmp8, tmp12];
      const tmp19 = map1(authStore2, obj5);
      cResult[10] = tmp8;
      cResult[11] = tmp12;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
    const obj6 = { style: tmp4, source: tmp7 };
    const tmp11 = closure_12(FastImageDefault, obj6);
    cResult[5] = tmp3.emojiImage;
    cResult[6] = tmp7;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const obj2 = AvatarUtilsDefault;
  const obj7 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const emojiURL = obj2.getEmojiURL(obj7);
  cResult[0] = emoji.animated;
  cResult[1] = emoji.id;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
}) : ((emoji) => {
  let items;
  let obj3;
  let obj4;
  let obj5;
  emoji = emoji.emoji;
  const obj = { children: items };
  const obj2 = { style: closure_15().emojiImage, source: obj3 };
  obj3 = { uri: obj4.getEmojiURL(obj5) };
  const tmp2 = FastImageDefault;
  obj4 = AvatarUtilsDefault;
  obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
  items = [closure_12(tmp2, obj2), ];
  const obj6 = { name: emoji.name };
  items[1] = closure_12(EmojiAliasDefault, obj6);
  return map1(authStore2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChangeTrialInterval) => {
  let items;
  let items1;
  let onChangeTrialActiveUserLimit;
  let options;
  let trialActiveUserLimit;
  const obj = onChangeTrialInterval(576);
  const cResult = obj.c(54);
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  ({ trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const interval = onChangeTrialInterval.interval;
  const tmp4 = closure_15();
  const tmp6 = options(13728)();
  const tmp7 = options(15065)(interval);
  options = tmp7.options;
  const selectedOption = tmp7.selectedOption;
  if (cResult[0] === onChangeTrialInterval) {
    let tmp8;
    let tmp13;
    if (cResult[1] === options) {
      tmp8 = cResult[2];
    }
    const tmpResult = onChangeTrialInterval(17967);
    const roleSubscriptionSettingsDisabled = tmpResult.useRoleSubscriptionSettingsDisabled();
    const _Symbol = Symbol;
    const listFooterContainer = tmp4.listFooterContainer;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(onChangeTrialInterval(1126).t["+hTmdb"]);
      cResult[3] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === tmp8) {
      if (cResult[5] === null != selectedOption) {
        let tmp15;
        let disabledSection;
        if (cResult[6] === roleSubscriptionSettingsDisabled) {
          tmp15 = cResult[7];
        }
        if (null == selectedOption) {
          disabledSection = tmp4.disabledSection;
        }
        if (cResult[8] === tmp4.listFooterSubtitle) {
          let tmp18;
          let tmp19;
          let tmp21;
          let tmp24;
          let tmp26;
          if (cResult[9] === tmp4.listFooterText) {
            tmp18 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(onChangeTrialInterval(1126).t.urVijS);
            cResult[11] = stringResult1;
            tmp19 = stringResult1;
          } else {
            tmp19 = cResult[11];
          }
          if (cResult[12] !== tmp18) {
            const obj2 = { style: tmp18, variant: "text-sm/medium", color: "text-default", children: tmp19 };
            const tmp23 = closure_12(onChangeTrialInterval(4892).Text, obj2);
            cResult[12] = tmp18;
            cResult[13] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[13];
          }
          const _Symbol3 = Symbol;
          const header = tmp6.header;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(onChangeTrialInterval(1126).t.m1KuWd);
            cResult[14] = stringResult2;
            tmp24 = stringResult2;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] !== tmp6.header) {
            const obj3 = { style: header, children: tmp24 };
            const tmp28 = closure_12(options(9490), obj3);
            cResult[15] = tmp6.header;
            cResult[16] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[16];
          }
          if (cResult[17] === tmp4.listFooterSectionDescription) {
            let tmp29;
            let tmp30;
            let tmp32;
            if (cResult[18] === tmp4.listFooterText) {
              tmp29 = cResult[19];
            }
            const _Symbol4 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult3 = intl4.string(onChangeTrialInterval(1126).t.NB9NLF);
              cResult[20] = stringResult3;
              tmp30 = stringResult3;
            } else {
              tmp30 = cResult[20];
            }
            if (cResult[21] !== tmp29) {
              const obj4 = { style: tmp29, variant: "text-sm/medium", color: "text-default", children: tmp30 };
              const tmp34 = closure_12(onChangeTrialInterval(4892).Text, obj4);
              cResult[21] = tmp29;
              cResult[22] = tmp34;
              tmp32 = tmp34;
            } else {
              tmp32 = cResult[22];
            }
            let tmp35 = !tmp10;
            let tmp36 = tmp35;
            if (null != selectedOption) {
              tmp36 = roleSubscriptionSettingsDisabled;
            }
            if (cResult[23] === onChangeTrialInterval) {
              if (cResult[24] === selectedOption) {
                if (cResult[25] === tmp36) {
                  let tmp37;
                  let tmp40;
                  let tmp42;
                  if (cResult[26] === options) {
                    tmp37 = cResult[27];
                  }
                  const _Symbol5 = Symbol;
                  const header2 = tmp6.header;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(1126).intl;
                    const stringResult4 = intl5.string(onChangeTrialInterval(1126).t["/JD9oe"]);
                    cResult[28] = stringResult4;
                    tmp40 = stringResult4;
                  } else {
                    tmp40 = cResult[28];
                  }
                  if (cResult[29] !== tmp6.header) {
                    const obj5 = { style: header2, children: tmp40 };
                    const tmp44 = closure_12(options(9490), obj5);
                    cResult[29] = tmp6.header;
                    cResult[30] = tmp44;
                    tmp42 = tmp44;
                  } else {
                    tmp42 = cResult[30];
                  }
                  if (cResult[31] === tmp4.listFooterSectionDescription) {
                    let tmp45;
                    let tmp46;
                    let tmp48;
                    if (cResult[32] === tmp4.listFooterText) {
                      tmp45 = cResult[33];
                    }
                    const _Symbol6 = Symbol;
                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1126).intl;
                      const stringResult5 = intl6.string(onChangeTrialInterval(1126).t.Cg5eBm);
                      cResult[34] = stringResult5;
                      tmp46 = stringResult5;
                    } else {
                      tmp46 = cResult[34];
                    }
                    if (cResult[35] !== tmp45) {
                      const obj6 = { style: tmp45, variant: "text-sm/medium", color: "text-default", children: tmp46 };
                      const tmp50 = closure_12(onChangeTrialInterval(4892).Text, obj6);
                      cResult[35] = tmp45;
                      cResult[36] = tmp50;
                      tmp48 = tmp50;
                    } else {
                      tmp48 = cResult[36];
                    }
                    if (null != selectedOption) {
                      tmp35 = roleSubscriptionSettingsDisabled;
                    }
                    if (cResult[37] === onChangeTrialActiveUserLimit) {
                      if (cResult[38] === tmp35) {
                        let tmp51;
                        if (cResult[39] === trialActiveUserLimit) {
                          tmp51 = cResult[40];
                        }
                        if (cResult[41] === tmp26) {
                          if (cResult[42] === tmp32) {
                            if (cResult[43] === tmp37) {
                              if (cResult[44] === tmp42) {
                                if (cResult[45] === tmp48) {
                                  if (cResult[46] === tmp51) {
                                    if (cResult[47] === disabledSection) {
                                      let tmp54;
                                      if (cResult[48] === tmp21) {
                                        tmp54 = cResult[49];
                                      }
                                      if (cResult[50] === tmp4.listFooterContainer) {
                                        if (cResult[51] === tmp54) {
                                          let tmp58;
                                          if (cResult[52] === tmp15) {
                                            tmp58 = cResult[53];
                                          }
                                          return tmp58;
                                        }
                                      }
                                      const obj7 = { style: listFooterContainer, children: items };
                                      items = [tmp15, tmp54];
                                      const tmp61 = closure_13(closure_7, obj7);
                                      cResult[50] = tmp4.listFooterContainer;
                                      cResult[51] = tmp54;
                                      cResult[52] = tmp15;
                                      cResult[53] = tmp61;
                                      tmp58 = tmp61;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj8 = { style: disabledSection, children: items1 };
                        items1 = [tmp21, tmp26, tmp32, tmp37, tmp42, tmp48, tmp51];
                        const tmp57 = closure_13(closure_7, obj8);
                        cResult[41] = tmp26;
                        cResult[42] = tmp32;
                        cResult[43] = tmp37;
                        cResult[44] = tmp42;
                        cResult[45] = tmp48;
                        cResult[46] = tmp51;
                        cResult[47] = disabledSection;
                        cResult[48] = tmp21;
                        cResult[49] = tmp57;
                        tmp54 = tmp57;
                      }
                    }
                    const obj9 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp35 };
                    const tmp53 = closure_12(options(17988), obj9);
                    cResult[37] = onChangeTrialActiveUserLimit;
                    cResult[38] = tmp35;
                    cResult[39] = trialActiveUserLimit;
                    cResult[40] = tmp53;
                    tmp51 = tmp53;
                  }
                  const items2 = [, ];
                  ({ listFooterSectionDescription: arr3[0], listFooterText: arr3[1] } = tmp4);
                  cResult[31] = tmp4.listFooterSectionDescription;
                  cResult[32] = tmp4.listFooterText;
                  cResult[33] = items2;
                  tmp45 = items2;
                }
              }
            }
            const obj10 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp36 };
            const tmp39 = closure_12(options(17987), obj10);
            cResult[23] = onChangeTrialInterval;
            cResult[24] = selectedOption;
            cResult[25] = tmp36;
            cResult[26] = options;
            cResult[27] = tmp39;
            tmp37 = tmp39;
          }
          const items3 = [, ];
          ({ listFooterSectionDescription: arr2[0], listFooterText: arr2[1] } = tmp4);
          cResult[17] = tmp4.listFooterSectionDescription;
          cResult[18] = tmp4.listFooterText;
          cResult[19] = items3;
          tmp29 = items3;
        }
        const items4 = [, ];
        ({ listFooterText: arr[0], listFooterSubtitle: arr[1] } = tmp4);
        cResult[8] = tmp4.listFooterSubtitle;
        cResult[9] = tmp4.listFooterText;
        cResult[10] = items4;
        tmp18 = items4;
      }
    }
    const obj11 = { label: tmp13, value: null != selectedOption, onValueChange: tmp8, disabled: roleSubscriptionSettingsDisabled };
    const tmp17 = closure_12(onChangeTrialInterval(8924).FormSwitchRow, obj11);
    cResult[4] = tmp8;
    cResult[5] = null != selectedOption;
    cResult[6] = roleSubscriptionSettingsDisabled;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  }
  const fn = function i(arg0) {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  };
  cResult[0] = onChangeTrialInterval;
  cResult[1] = options;
  cResult[2] = fn;
  tmp8 = fn;
}) : ((onChangeTrialInterval) => {
  let disabledSection;
  let interval;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let onChangeTrialActiveUserLimit;
  let tmp16;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = closure_15();
  const tmp4 = options(13728)();
  const tmp5 = options(15065)(interval);
  options = tmp5.options;
  const selectedOption = tmp5.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = react.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  const obj = onChangeTrialInterval(17967);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const obj2 = { style: tmp.listFooterContainer, children: items1 };
  const obj3 = { label: intl.string(onChangeTrialInterval(1126).t["+hTmdb"]), value: null != selectedOption, onValueChange: callback, disabled: roleSubscriptionSettingsDisabled };
  const FormSwitchRow = onChangeTrialInterval(8924).FormSwitchRow;
  intl = onChangeTrialInterval(1126).intl;
  items1 = [closure_12(FormSwitchRow, obj3), ];
  if (null == selectedOption) {
    disabledSection = tmp.disabledSection;
  }
  const obj4 = { style: disabledSection, children: items3 };
  const obj5 = { style: items2, variant: "text-sm/medium", color: "text-default", children: intl2.string(onChangeTrialInterval(1126).t.urVijS) };
  items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  const Text = tmp8(4892).Text;
  intl2 = tmp8(1126).intl;
  items3 = [closure_12(Text, obj5), , , , , , ];
  const obj6 = { style: tmp4.header, children: intl3.string(onChangeTrialInterval(1126).t.m1KuWd) };
  const tmp2Result = options(9490);
  intl3 = tmp8(1126).intl;
  items3[1] = closure_12(tmp2Result, obj6);
  const obj7 = { style: items4, variant: "text-sm/medium", color: "text-default", children: intl4.string(onChangeTrialInterval(1126).t.NB9NLF) };
  items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  const Text2 = tmp8(4892).Text;
  intl4 = tmp8(1126).intl;
  items3[2] = closure_12(Text2, obj7);
  let tmp15 = !tmp7;
  const obj8 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp16 };
  tmp16 = tmp15;
  const tmp2Result4 = options(17987);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  items3[3] = closure_12(tmp2Result4, obj8);
  const obj9 = { style: tmp4.header, children: intl5.string(onChangeTrialInterval(1126).t["/JD9oe"]) };
  const tmp2Result5 = options(9490);
  intl5 = tmp8(1126).intl;
  items3[4] = closure_12(tmp2Result5, obj9);
  const obj10 = { style: items5, variant: "text-sm/medium", color: "text-default", children: intl6.string(onChangeTrialInterval(1126).t.Cg5eBm) };
  items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  const Text3 = tmp8(4892).Text;
  intl6 = tmp8(1126).intl;
  items3[5] = closure_12(Text3, obj10);
  const obj11 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp15 };
  const tmp2Result6 = options(17988);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  items3[6] = closure_12(tmp2Result6, obj11);
  items1[1] = closure_13(closure_7, obj4);
  return closure_13(closure_7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onlyChannels;
  let onlyIntangible;
  const obj = react2;
  const cResult = obj.c(3);
  ({ onlyChannels, onlyIntangible } = arg0);
  if (cResult[0] === onlyChannels) {
    let tmp2;
    if (cResult[1] === onlyIntangible) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = closure_12(Content, { onlyChannels, onlyIntangible });
  cResult[0] = onlyChannels;
  cResult[1] = onlyIntangible;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((onlyChannels) => {
  const obj = { onlyChannels: onlyChannels.onlyChannels, onlyIntangible: onlyChannels.onlyIntangible };
  return closure_12(Content, obj);
});
let closure_23 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t["0eV/GY"]);
    const intl2 = intl7.intl;
    const stringResult1 = intl2.string(intl7.t.iMSIWp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = closure_12(closure_23, { onlyChannels: true });
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: tmp8 };
    const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
    const merged = Object.assign(arg0);
    const tmp20 = closure_12(tmp15, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : ((arg0) => {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl7.t["0eV/GY"]), description: intl2.string(intl7.t.iMSIWp), canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: closure_12(closure_23, { onlyChannels: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  const merged = Object.assign(arg0);
  return closure_12(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t["+h9nJG"]);
    const intl2 = intl7.intl;
    const stringResult1 = intl2.string(intl7.t.oGS4tC);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = closure_12(closure_23, { onlyIntangible: true });
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: tmp8 };
    const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
    const merged = Object.assign(arg0);
    const tmp20 = closure_12(tmp15, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : ((arg0) => {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl7.t["+h9nJG"]), description: intl2.string(intl7.t.oGS4tC), canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: closure_12(closure_23, { onlyIntangible: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  const merged = Object.assign(arg0);
  return closure_12(tmp, obj);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export const GuildRoleSubscriptionTierBenefitsTab = tmp6;
export const GuildRoleSubscriptionTierChannelBenefitsModal = tmp7;
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = tmp8;