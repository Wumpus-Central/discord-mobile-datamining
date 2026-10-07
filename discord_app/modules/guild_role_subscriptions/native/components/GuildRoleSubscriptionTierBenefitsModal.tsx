// === Module 17984: GuildRoleSubscriptionTierBenefitsModal ===

// Module 17984 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9455 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15060 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 17963 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17974 */;
import _modDef17985 from "module_17985" /* 17985 */;
import EmojiAliasDefault from "EmojiAlias" /* 17986 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 17991 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 17992 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const AllChannelsSwitchDefault = tmp10(18002);
require = fn;
function Content(arg0) {
  dependencyMap = undefined;
  let editStateId;
  let guildId;
  let role_id;
  let data;
  AllChannelAccessOptions = undefined;
  let first1;
  closure_10 = undefined;
  let first2;
  closure_12 = undefined;
  closure_13 = undefined;
  let roleSubscriptionSettingsDisabled;
  closure_16 = undefined;
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === constants.CHANNEL) {
      closure_8((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    } else {
      closure_10((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    type = type.type;
    const obj = { style: closure_1(13728)().header, children: null };
    const tmp2 = closure_1(13728)();
    if (closure_16.CHANNEL === type) {
      const intl2 = closure_0(1126).intl;
      let stringResult = intl2.string(closure_0(1126).t.LtfhAj);
    } else if (closure_16.INTANGIBLE === type) {
      const intl = closure_0(1126).intl;
      stringResult = intl.string(closure_0(1126).t["8oxWpO"]);
    } else if (closure_16.EMOJI === type) {
      const intl3 = closure_0(1126).intl;
      stringResult = intl3.string(closure_0(1126).t.XBkDoA);
    }
    obj.children = stringResult;
    return closure_12(closure_1(9490), obj);
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = addBenefit();
  _require = tmp;
  importDefault = tmp2;
  importAll = tmp3;
  let tmp4 = tmp2;
  if (true !== onlyIntangible) {
    tmp4 = tmp3;
  }
  dependencyMap = tmp4;
  const editStateContext = require("EditStateContextProvider").useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  let obj = require("EditStateContextProvider");
  const subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  let obj2 = require("GuildRoleSubscriptionsHooks");
  const tmp11 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(editStateId), 2);
  data = tmp11[0];
  AllChannelAccessOptions = tmp11[1];
  const tmp13 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(editStateId), 2);
  first1 = tmp13[0];
  closure_10 = tmp13[1];
  const tmp15 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp15[0];
  closure_12 = tmp15[1];
  [tmp18, tmp19] = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialInterval(editStateId), 2);
  const tmp17 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialInterval(editStateId), 2);
  [tmp21, tmp22] = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialLimit(editStateId), 2);
  const tmp20 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialLimit(editStateId), 2);
  const tmp23 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp23[0];
  closure_13 = tmp25;
  roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  const tmp27 = useRoleSubscriptionEmojisDefault(guildId);
  closure_16 = tmp27;
  let items = [first2, tmp27, true === onlyIntangible, first3 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, data, first1];
  let tmp29 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = closure_1;
    const found = closure_16.filter((id) => set.has(id.id));
    if (!closure_1) {
      tmp2 = closure_13;
    }
    const items = [];
    if (!tmp2) {
      const obj = { type: closure_16.CHANNEL, data };
      items.push(obj);
    }
    if (!closure_2) {
      const obj2 = { type: closure_16.INTANGIBLE, data: first1 };
      items.push(obj2);
    }
    if (!closure_3) {
      const obj3 = { type: closure_16.EMOJI, data: found };
      items.push(obj3);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp29 = null;
    if (!tmp3) {
      const obj9 = { interval: tmp18, onChangeTrialInterval: tmp19, trialActiveUserLimit: tmp21, onChangeTrialActiveUserLimit: tmp22 };
      tmp29 = closure_12(closure_21, obj9);
    }
  }
  const obj10 = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
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
        let disabled2 = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled2 = tmp2.disabled;
        }
        const obj2 = { style: null, children: null };
        items1[1] = disabled2;
        obj2.style = items1;
        const obj3 = { emoji: item };
        obj2.children = closure_12(closure_1_20, obj3);
        let tmp3Result = closure_12(first, obj2);
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp2.disabled;
        }
        const obj = { style: null, accessibilityRole: "button", accessibilityState: null, onPress: null, disabled: null, children: null };
        items2[1] = disabled;
        obj.style = items2;
        const obj4 = { disabled: roleSubscriptionSettingsDisabled };
        obj.accessibilityState = obj4;
        obj.onPress = function onPress() {
          let ref_type = item;
          closure_1 = index;
          closure_1_2(dependencyMap[31]).showEditBenefitModal({
            guildId,
            benefit: item,
            onDelete() {
              ref_type = closure_1;
              if (ref_type.ref_type === constants.CHANNEL) {
                closure_2_8((arr) => arr.filter(/* F155820 */ function() { ... }));
              } else {
                closure_2_10((arr) => arr.filter(/* F155821 */ function() { ... }));
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
          });
        };
        obj.disabled = roleSubscriptionSettingsDisabled;
        const obj5 = { guildId, benefit: item };
        obj.children = closure_12(closure_0(18001).GuildRoleSubscriptionBenefitPreview, obj5);
        tmp3Result = closure_12(closure_1(9455), obj);
        const tmp6 = closure_1(9455);
      }
      return tmp3Result;
    },
    keyExtractor: require("GuildRoleSubscriptionTypeUtils").getBenefitKey,
    ListHeaderComponent: null,
    renderSectionHeader: null,
    stickySectionHeadersEnabled: false,
    renderSectionFooter: null,
    ItemSeparatorComponent: null,
    SectionSeparatorComponent: null,
    ListFooterComponent: null
  };
  let tmp32Result = null;
  if (true !== onlyIntangible) {
    if (useRoleSubscriptionFormatDefault(guildId).isFullServerGating) {
      const obj11 = { style: tmp.allChannelsSwitch, channelAccessFormat: first3, setChannelAccessFormat: tmp23[1], disabled: roleSubscriptionSettingsDisabled };
      tmp32Result = tmp32(AllChannelsSwitchDefault, obj11);
    } else {
      tmp32Result = null;
    }
  }
  obj10.ListHeaderComponent = tmp32Result;
  obj10.renderSectionHeader = function renderSectionHeader(section) {
    return __initData(GuildRoleSubscriptionTierBenefitsModalHeader, { type: section.section.type });
  };
  obj10.renderSectionFooter = function renderSectionFooter(section) {
    const type = section.section.type;
    if (constants.CHANNEL === type) {
      const intl2 = closure_0(1126).intl;
      let stringResult = intl2.string(closure_0(1126).t.WEg7PK);
    } else if (constants.INTANGIBLE === type) {
      const intl = closure_0(1126).intl;
      stringResult = intl.string(closure_0(1126).t.VinNZr);
    } else if (constants.EMOJI === type) {
      const intl3 = closure_0(1126).intl;
      stringResult = intl3.string(closure_0(1126).t["0t1aNC"]);
    }
    return onSave(GuildRoleSubscriptionTierBenefitsModalHeader, {
      label: stringResult,
      onPress() {
        if (type === constants.EMOJI) {
          const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds: first2, onSave, listingId: editStateId };
          GuildRoleSubscriptionsModalActionCreatorsAll.showEditEmojisModal(obj2);
        } else {
          if (tmp === tmp2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          const obj4 = { guildId, type: INTANGIBLE, onSave: addBenefit, listingId: editStateId };
          const result = GuildRoleSubscriptionsModalActionCreatorsAll.showCreateBenefitModal(obj4);
        }
      },
      disabled: roleSubscriptionSettingsDisabled
    });
  };
  obj10.ItemSeparatorComponent = ItemSeparatorComponent;
  obj10.SectionSeparatorComponent = SectionSeparatorComponent;
  obj10.ListFooterComponent = tmp29;
  return closure_12(role_id, obj10);
}
get_ActivityIndicator = fn(17);
({ SectionList: metroRequire, View: closure_7 } = get_ActivityIndicator);
let AllChannelAccessOptions = fn(15061).AllChannelAccessOptions;
const useGroupIsFullGateState = fn(17972).useGroupIsFullGateState;
const GuildRoleSubscriptionsConstants = fn(15038);
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: closure_11 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { listContainer: { paddingBottom: 16 }, card: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 }, item: null, itemFirst: null, itemLast: null, itemSeparatorContainer: null, itemSeparator: null, listFooterText: null, listFooterSubtitle: null, listFooterSectionDescription: null, listFooterContainer: null, disabledSection: null, allChannelsSwitch: null, addBenefitLabel: null, separator: null, emojiImage: null, disabled: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
obj2.item = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
obj2.itemFirst = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let obj5 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj2.itemLast = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
let obj6 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj2.itemSeparatorContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
obj2.itemSeparator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
obj2.listFooterText = { marginHorizontal: 16 };
obj2.listFooterSubtitle = { marginTop: 8 };
obj2.listFooterSectionDescription = { marginBottom: 16 };
obj2.listFooterContainer = { marginVertical: 24 };
obj2.disabledSection = { opacity: 0.5 };
obj2.allChannelsSwitch = { marginHorizontal: 16, marginTop: 24 };
obj2.addBenefitLabel = { marginStart: 16 };
obj2.separator = { height: 8 };
obj2.emojiImage = { width: 24, height: 24, marginRight: 16 };
obj2.disabled = { opacity: 0.5 };
let closure_15 = createStyles.createStyles(obj2);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ label, onPress, disabled } = arg0);
  const tmp5 = closure_15();
  let disabled2 = tmp4;
  if (undefined !== disabled && disabled) {
    disabled2 = tmp5.disabled;
  }
  if (cResult[0] === tmp5.card) {
    if (cResult[1] === disabled2) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { disabled: tmp4 };
      cResult[3] = tmp4;
      cResult[4] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { source: _modDef17985 };
      const tmp13 = __initData(FastImageDefault, obj3);
      cResult[5] = tmp13;
      let tmp9 = tmp13;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === label) {
      if (cResult[7] === tmp5.addBenefitLabel) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === onPress) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp14) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
        }
      }
      const obj4 = { style: tmp6, accessibilityRole: "button", accessibilityState: tmp7, onPress, disabled: tmp4, children: null };
      const items = [tmp9, tmp14];
      obj4.children = items;
      const tmp20 = __initData2(TouchableHitBoxDefault, obj4);
      cResult[9] = tmp4;
      cResult[10] = onPress;
      cResult[11] = tmp6;
      cResult[12] = tmp7;
      cResult[13] = tmp14;
      cResult[14] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { style: tmp5.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
    const tmp16 = __initData(Text_Text.Text, obj5);
    cResult[6] = label;
    cResult[7] = tmp5.addBenefitLabel;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const items1 = [tmp5.card, disabled2];
  cResult[0] = tmp5.card;
  cResult[1] = disabled2;
  cResult[2] = items1;
  tmp6 = items1;
}) : ((disabled) => {
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  const items = [tmp.card, ];
  disabled = flag;
  if (flag) {
    disabled = tmp.disabled;
  }
  const obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: null };
  items[1] = disabled;
  const obj2 = { source: null };
  const tmp5 = TouchableHitBoxDefault;
  obj2.source = _modDef17985;
  const items1 = [__initData(FastImageDefault, obj2), __initData(Text_Text.Text, { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label })];
  obj.children = items1;
  return __initData2(tmp5, obj);
});
ReactCompilerGating = fn(558);
const SectionSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = __initData(React5, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => __initData(React5, { style: closure_15().separator }));
ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.itemSeparator) {
    const obj2 = { style: tmp2.itemSeparator };
    const tmp6 = __initData(React5, obj2);
    cResult[0] = tmp2.itemSeparator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.itemSeparatorContainer) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = __initData(React5, { style: tmp2.itemSeparatorContainer, children: tmp3 });
  cResult[2] = tmp2.itemSeparatorContainer;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  const obj3 = { style: tmp2.itemSeparatorContainer, children: tmp3 };
}) : (() => {
  const tmp = closure_15();
  const obj = { style: tmp.itemSeparatorContainer, children: __initData(React5, { style: tmp.itemSeparator }) };
  return __initData(React5, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const cResult = c.c(13);
  emoji = emoji.emoji;
  const tmp3 = closure_15();
  if (cResult[0] === emoji.animated) {
    if (cResult[1] === emoji.id) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { uri: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj3;
      let tmp7 = obj3;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp3.emojiImage) {
      if (cResult[6] === tmp7) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] !== emoji.name) {
        const obj4 = { name: emoji.name };
        const tmp15 = __initData(EmojiAliasDefault, obj4);
        cResult[8] = emoji.name;
        cResult[9] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp8) {
        if (cResult[11] === tmp12) {
          let tmp16 = cResult[12];
        }
        return tmp16;
      }
      const obj5 = { children: null };
      const items = [tmp8, tmp12];
      obj5.children = items;
      const tmp19 = __initData2(state, obj5);
      cResult[10] = tmp8;
      cResult[11] = tmp12;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
    const obj6 = { style: tmp4, source: tmp7 };
    const tmp11 = __initData(FastImageDefault, obj6);
    cResult[5] = tmp3.emojiImage;
    cResult[6] = tmp7;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const emojiURL = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  cResult[0] = emoji.animated;
  cResult[1] = emoji.id;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
  const obj7 = { id: emoji.id, animated: emoji.animated, size: 48 };
}) : ((emoji) => {
  emoji = emoji.emoji;
  const obj = { children: null };
  const obj2 = { style: closure_15().emojiImage, source: null };
  const obj3 = { uri: null };
  const tmp = closure_15();
  const tmp2 = FastImageDefault;
  obj3.uri = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj2.source = obj3;
  const items = [__initData(tmp2, obj2), __initData(EmojiAliasDefault, { name: emoji.name })];
  obj.children = items;
  return __initData2(state, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChangeTrialInterval) => {
  const cResult = onChangeTrialInterval(576).c(54);
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  ({ trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp4 = closure_15();
  const tmp6 = options(13728)();
  const tmp7 = options(15065)(onChangeTrialInterval.interval);
  options = tmp7.options;
  const selectedOption = tmp7.selectedOption;
  if (cResult[0] === onChangeTrialInterval) {
    if (cResult[1] === options) {
      let tmp8 = cResult[2];
    }
    const roleSubscriptionSettingsDisabled = tmp(17967).useRoleSubscriptionSettingsDisabled();
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["+hTmdb"]);
      cResult[3] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === tmp8) {
      if (cResult[5] === tmp10) {
        if (cResult[6] === roleSubscriptionSettingsDisabled) {
          let tmp15 = cResult[7];
        }
        if (!tmp10) {
          const disabledSection = tmp4.disabledSection;
        }
        if (cResult[8] === tmp4.listFooterSubtitle) {
          if (cResult[9] === tmp4.listFooterText) {
            let tmp18 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.urVijS);
            cResult[11] = stringResult1;
            let tmp19 = stringResult1;
          } else {
            tmp19 = cResult[11];
          }
          if (cResult[12] !== tmp18) {
            const obj2 = { style: tmp18, variant: "text-sm/medium", color: "text-default", children: tmp19 };
            const tmp23 = closure_12(tmp(4892).Text, obj2);
            cResult[12] = tmp18;
            cResult[13] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[13];
          }
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t.m1KuWd);
            cResult[14] = stringResult2;
            let tmp24 = stringResult2;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] !== tmp6.header) {
            const obj3 = { style: tmp6.header, children: tmp24 };
            const tmp28 = closure_12(tmp5(9490), obj3);
            cResult[15] = tmp6.header;
            cResult[16] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[16];
          }
          if (cResult[17] === tmp4.listFooterSectionDescription) {
            if (cResult[18] === tmp4.listFooterText) {
              let tmp29 = cResult[19];
            }
            const _Symbol4 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult3 = intl4.string(tmp(1126).t.NB9NLF);
              cResult[20] = stringResult3;
              let tmp30 = stringResult3;
            } else {
              tmp30 = cResult[20];
            }
            if (cResult[21] !== tmp29) {
              const obj4 = { style: tmp29, variant: "text-sm/medium", color: "text-default", children: tmp30 };
              const tmp34 = closure_12(tmp(4892).Text, obj4);
              cResult[21] = tmp29;
              cResult[22] = tmp34;
              let tmp32 = tmp34;
            } else {
              tmp32 = cResult[22];
            }
            let tmp35 = !tmp10;
            let tmp36 = tmp35;
            if (tmp10) {
              tmp36 = roleSubscriptionSettingsDisabled;
            }
            if (cResult[23] === onChangeTrialInterval) {
              if (cResult[24] === selectedOption) {
                if (cResult[25] === tmp36) {
                  if (cResult[26] === options) {
                    let tmp37 = cResult[27];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(1126).intl;
                    const stringResult4 = intl5.string(tmp(1126).t["/JD9oe"]);
                    cResult[28] = stringResult4;
                    let tmp40 = stringResult4;
                  } else {
                    tmp40 = cResult[28];
                  }
                  if (cResult[29] !== tmp6.header) {
                    const obj5 = { style: tmp6.header, children: tmp40 };
                    const tmp44 = closure_12(tmp5(9490), obj5);
                    cResult[29] = tmp6.header;
                    cResult[30] = tmp44;
                    let tmp42 = tmp44;
                  } else {
                    tmp42 = cResult[30];
                  }
                  if (cResult[31] === tmp4.listFooterSectionDescription) {
                    if (cResult[32] === tmp4.listFooterText) {
                      let tmp45 = cResult[33];
                    }
                    const _Symbol6 = Symbol;
                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1126).intl;
                      const stringResult5 = intl6.string(tmp(1126).t.Cg5eBm);
                      cResult[34] = stringResult5;
                      let tmp46 = stringResult5;
                    } else {
                      tmp46 = cResult[34];
                    }
                    if (cResult[35] !== tmp45) {
                      const obj6 = { style: tmp45, variant: "text-sm/medium", color: "text-default", children: tmp46 };
                      const tmp50 = closure_12(tmp(4892).Text, obj6);
                      cResult[35] = tmp45;
                      cResult[36] = tmp50;
                      let tmp48 = tmp50;
                    } else {
                      tmp48 = cResult[36];
                    }
                    if (tmp10) {
                      tmp35 = roleSubscriptionSettingsDisabled;
                    }
                    if (cResult[37] === onChangeTrialActiveUserLimit) {
                      if (cResult[38] === tmp35) {
                        if (cResult[39] === trialActiveUserLimit) {
                          let tmp51 = cResult[40];
                        }
                        if (cResult[41] === tmp26) {
                          if (cResult[42] === tmp32) {
                            if (cResult[43] === tmp37) {
                              if (cResult[44] === tmp42) {
                                if (cResult[45] === tmp48) {
                                  if (cResult[46] === tmp51) {
                                    if (cResult[47] === disabledSection) {
                                      if (cResult[48] === tmp21) {
                                        let tmp54 = cResult[49];
                                      }
                                      if (cResult[50] === tmp4.listFooterContainer) {
                                        if (cResult[51] === tmp54) {
                                          if (cResult[52] === tmp15) {
                                            let tmp58 = cResult[53];
                                          }
                                          return tmp58;
                                        }
                                      }
                                      const obj7 = { style: tmp4.listFooterContainer, children: null };
                                      const items = [tmp15, tmp54];
                                      obj7.children = items;
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
                        const obj8 = { style: disabledSection, children: null };
                        const items1 = [tmp21, tmp26, tmp32, tmp37, tmp42, tmp48, tmp51];
                        obj8.children = items1;
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
                    const tmp53 = closure_12(tmp5(17988), obj9);
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
            const tmp39 = closure_12(tmp5(17987), obj10);
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
    const tmp17 = closure_12(tmp(8924).FormSwitchRow, obj11);
    cResult[4] = tmp8;
    cResult[5] = null != selectedOption;
    cResult[6] = roleSubscriptionSettingsDisabled;
    cResult[7] = tmp17;
    tmp15 = tmp17;
    const tmpResult = tmp(17967);
  }
  const fn = function i(arg0) {
    const iter = options.find((isDefault) => isDefault.isDefault);
    value = null;
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
  const obj = onChangeTrialInterval(576);
}) : ((onChangeTrialInterval) => {
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  options = undefined;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = closure_15();
  const tmp4 = options(13728)();
  const tmp5 = options(15065)(interval);
  options = tmp5.options;
  const selectedOption = tmp5.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = noop.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  const roleSubscriptionSettingsDisabled = onChangeTrialInterval(17967).useRoleSubscriptionSettingsDisabled();
  const obj2 = { style: tmp.listFooterContainer, children: null };
  const obj3 = { label: null, value: null, onValueChange: null, disabled: null };
  const intl = onChangeTrialInterval(1126).intl;
  obj3.label = intl.string(onChangeTrialInterval(1126).t["+hTmdb"]);
  obj3.value = null != selectedOption;
  obj3.onValueChange = callback;
  obj3.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [closure_12(onChangeTrialInterval(8924).FormSwitchRow, obj3), ];
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  const obj4 = { style: disabledSection, children: null };
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  obj5.style = items2;
  const intl2 = tmp8(1126).intl;
  obj5.children = intl2.string(onChangeTrialInterval(1126).t.urVijS);
  const items3 = [closure_12(onChangeTrialInterval(4892).Text, obj5), , , , , , ];
  const obj6 = { style: tmp4.header, children: null };
  const obj = onChangeTrialInterval(17967);
  const intl3 = tmp8(1126).intl;
  obj6.children = intl3.string(onChangeTrialInterval(1126).t.m1KuWd);
  items3[1] = closure_12(options(9490), obj6);
  const obj7 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  obj7.style = items4;
  const intl4 = tmp8(1126).intl;
  obj7.children = intl4.string(onChangeTrialInterval(1126).t.NB9NLF);
  items3[2] = closure_12(onChangeTrialInterval(4892).Text, obj7);
  const obj8 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: null };
  let tmp15 = !tmp7;
  let tmp16 = tmp15;
  const tmp2Result = options(9490);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  obj8.disabled = tmp16;
  items3[3] = closure_12(options(17987), obj8);
  const obj9 = { style: tmp4.header, children: null };
  const tmp2Result4 = options(17987);
  const intl5 = tmp8(1126).intl;
  obj9.children = intl5.string(onChangeTrialInterval(1126).t["/JD9oe"]);
  items3[4] = closure_12(options(9490), obj9);
  const obj10 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  obj10.style = items5;
  const intl6 = tmp8(1126).intl;
  obj10.children = intl6.string(onChangeTrialInterval(1126).t.Cg5eBm);
  items3[5] = closure_12(onChangeTrialInterval(4892).Text, obj10);
  const obj11 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: null };
  const tmp2Result5 = options(9490);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj11.disabled = tmp15;
  items3[6] = closure_12(options(17988), obj11);
  obj4.children = items3;
  items1[1] = closure_13(closure_7, obj4);
  obj2.children = items1;
  return closure_13(closure_7, obj2);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ onlyChannels, onlyIntangible } = arg0);
  if (cResult[0] === onlyChannels) {
    if (cResult[1] === onlyIntangible) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = __initData(Content, { onlyChannels, onlyIntangible });
  cResult[0] = onlyChannels;
  cResult[1] = onlyIntangible;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((onlyChannels) => __initData(Content, { onlyChannels: onlyChannels.onlyChannels, onlyIntangible: onlyChannels.onlyIntangible }));
let closure_23 = tmp5;
fn(558);
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["0eV/GY"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.iMSIWp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = __initData(closure_23, { onlyChannels: true });
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: constants2.INTANGIBLE_BENEFITS };
    const merged = Object.assign(arg0);
    obj2.scrollable = false;
    obj2.children = tmp8;
    const tmp20 = __initData(GuildRoleSubscriptionTierEditStepDefault, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    let tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : ((arg0) => {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0eV/GY"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.iMSIWp);
  obj.nextStep = constants2.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = __initData(closure_23, { onlyChannels: true });
  return __initData(GuildRoleSubscriptionTierEditStepDefault, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export const GuildRoleSubscriptionTierBenefitsTab = tmp5;
export const GuildRoleSubscriptionTierChannelBenefitsModal = tmp6;
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["+h9nJG"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.oGS4tC);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = __initData(closure_23, { onlyIntangible: true });
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: constants2.DESIGN };
    const merged = Object.assign(arg0);
    obj2.scrollable = false;
    obj2.children = tmp8;
    const tmp20 = __initData(GuildRoleSubscriptionTierEditStepDefault, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    let tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : ((arg0) => {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["+h9nJG"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.oGS4tC);
  obj.nextStep = constants2.DESIGN;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = __initData(closure_23, { onlyIntangible: true });
  return __initData(GuildRoleSubscriptionTierEditStepDefault, obj);
});