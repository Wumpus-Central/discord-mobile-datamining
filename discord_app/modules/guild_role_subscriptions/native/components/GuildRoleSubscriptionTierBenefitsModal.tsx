// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import useRoleSubscriptionFormatDefault from "../../useRoleSubscriptionFormat.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import _modDef17745 from "../../../../../_runtime/metro/17745__.js";
import EmojiAliasDefault from "EmojiAlias.tsx";
import useRoleSubscriptionEmojisDefault from "../../useRoleSubscriptionEmojis.tsx";
import GuildRoleSubscriptionsModalActionCreatorsAll from "../../GuildRoleSubscriptionsModalActionCreators.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const AllChannelsSwitchDefault = tmp10(17761);
require = fn;
function AddBenefitButton(disabled) {
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
  let obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: null };
  items[1] = disabled;
  obj = { source: null };
  const tmp5 = TouchableHitBoxDefault;
  obj.source = _modDef17745;
  const items1 = [closure_1_12(FastImageDefault, obj), ];
  obj = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = closure_1_12(Text_Text.Text, obj);
  obj.children = items1;
  return map1(tmp5, obj);
}
function Separator() {
  return closure_1_12(React5, { style: closure_15().separator });
}
function ItemSeparator() {
  const tmp = closure_15();
  let obj = { style: tmp.itemSeparatorContainer, children: null };
  obj = { style: tmp.itemSeparator };
  obj.children = closure_1_12(React5, obj);
  return closure_1_12(React5, obj);
}
function EmojiRowLabel(emoji) {
  emoji = emoji.emoji;
  let obj = { children: null };
  obj = { style: closure_15().emojiImage, source: null };
  obj = { uri: null };
  const tmp = closure_15();
  const tmp2 = FastImageDefault;
  obj.uri = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj.source = obj;
  const items = [closure_1_12(tmp2, obj), closure_1_12(EmojiAliasDefault, { name: emoji.name })];
  obj.children = items;
  return map1(closure_1_14, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = closure_15();
  const tmp4 = options(13898)();
  const tmp5 = options(15232)(interval);
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
  let obj = onChangeTrialInterval(17724);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp.listFooterContainer, children: null };
  obj = { label: null, value: null, onValueChange: null, disabled: null };
  const intl = onChangeTrialInterval(1114).intl;
  obj.label = intl.string(onChangeTrialInterval(1114).t["+hTmdb"]);
  obj.value = null != selectedOption;
  obj.onValueChange = callback;
  obj.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [closure_12(onChangeTrialInterval(8593).FormSwitchRow, obj), ];
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  const obj1 = { style: disabledSection, children: null };
  const obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  obj2.style = items2;
  const intl2 = tmp8(1114).intl;
  obj2.children = intl2.string(onChangeTrialInterval(1114).t.urVijS);
  const items3 = [closure_12(onChangeTrialInterval(4556).Text, obj2), , , , , , ];
  const obj3 = { style: tmp4.header, children: null };
  let tmp2Result = tmp2(9816);
  const intl3 = tmp8(1114).intl;
  obj3.children = intl3.string(onChangeTrialInterval(1114).t.m1KuWd);
  items3[1] = closure_12(tmp2Result, obj3);
  const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  obj4.style = items4;
  const intl4 = tmp8(1114).intl;
  obj4.children = intl4.string(onChangeTrialInterval(1114).t.NB9NLF);
  items3[2] = closure_12(onChangeTrialInterval(4556).Text, obj4);
  const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: null };
  let tmp15 = !tmp7;
  let tmp16 = tmp15;
  tmp2Result = tmp2(17747);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  obj5.disabled = tmp16;
  items3[3] = closure_12(tmp2Result, obj5);
  const obj6 = { style: tmp4.header, children: null };
  const intl5 = tmp8(1114).intl;
  obj6.children = intl5.string(onChangeTrialInterval(1114).t["/JD9oe"]);
  items3[4] = closure_12(options(9816), obj6);
  const obj7 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  obj7.style = items5;
  const intl6 = tmp8(1114).intl;
  obj7.children = intl6.string(onChangeTrialInterval(1114).t.Cg5eBm);
  items3[5] = closure_12(onChangeTrialInterval(4556).Text, obj7);
  const obj8 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: null };
  const tmp2Result1 = options(9816);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj8.disabled = tmp15;
  items3[6] = closure_12(options(17748), obj8);
  obj1.children = items3;
  items1[1] = closure_13(closure_7, obj1);
  obj.children = items1;
  return closure_13(closure_7, obj);
}
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
    const obj = { style: closure_1(13898)().header, children: null };
    const tmp2 = closure_1(13898)();
    if (closure_16.CHANNEL === type) {
      const intl2 = closure_0(1114).intl;
      let stringResult = intl2.string(closure_0(1114).t.LtfhAj);
    } else if (closure_16.INTANGIBLE === type) {
      const intl = closure_0(1114).intl;
      stringResult = intl.string(closure_0(1114).t["8oxWpO"]);
    } else if (closure_16.EMOJI === type) {
      const intl3 = closure_0(1114).intl;
      stringResult = intl3.string(closure_0(1114).t.XBkDoA);
    }
    obj.children = stringResult;
    return closure_12(closure_1(9816), obj);
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
  let obj = require("EditStateContextProvider");
  const editStateContext = obj.useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  let obj1 = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj1.useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
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
      let obj = { type: closure_16.CHANNEL, data };
      items.push(obj);
    }
    if (!closure_2) {
      obj = { type: closure_16.INTANGIBLE, data: first1 };
      items.push(obj);
    }
    if (!closure_3) {
      obj = { type: closure_16.EMOJI, data: found };
      items.push(obj);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp29 = null;
    if (!tmp3) {
      obj = { interval: tmp18, onChangeTrialInterval: tmp19, trialActiveUserLimit: tmp21, onChangeTrialActiveUserLimit: tmp22 };
      tmp29 = closure_12(ListFooterSection, obj);
    }
  }
  obj = {
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
        let obj = { style: null, children: null };
        items1[1] = disabled2;
        obj.style = items1;
        obj = { emoji: item };
        obj.children = closure_12(EmojiRowLabel, obj);
        let tmp3Result = closure_12(first, obj);
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp2.disabled;
        }
        obj = { style: null, accessibilityRole: "button", accessibilityState: null, onPress: null, disabled: null, children: null };
        items2[1] = disabled;
        obj.style = items2;
        const obj1 = { disabled: roleSubscriptionSettingsDisabled };
        obj.accessibilityState = obj1;
        obj.onPress = function onPress() {
          let ref_type = item;
          closure_1 = index;
          closure_1_2(dependencyMap[29]);
          const obj = {
            guildId,
            benefit: item,
            onDelete() {
              ref_type = closure_1;
              if (ref_type.ref_type === constants.CHANNEL) {
                closure_2_8((arr) => arr.filter(/* F125834 */ function() { ... }));
              } else {
                closure_2_10((arr) => arr.filter(/* F125835 */ function() { ... }));
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
          obj.showEditBenefitModal(obj);
        };
        obj.disabled = roleSubscriptionSettingsDisabled;
        const obj2 = { guildId, benefit: item };
        obj.children = closure_12(closure_0(17760).GuildRoleSubscriptionBenefitPreview, obj2);
        tmp3Result = closure_12(closure_1(9050), obj);
        const tmp6 = closure_1(9050);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(15231).getBenefitKey,
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
      obj1 = { style: tmp.allChannelsSwitch, channelAccessFormat: first3, setChannelAccessFormat: tmp23[1], disabled: roleSubscriptionSettingsDisabled };
      tmp32Result = tmp32(AllChannelsSwitchDefault, obj1);
    } else {
      tmp32Result = null;
    }
  }
  obj.ListHeaderComponent = tmp32Result;
  obj.renderSectionHeader = function renderSectionHeader(section) {
    return closure_2_12(GuildRoleSubscriptionTierBenefitsModalHeader, { type: section.section.type });
  };
  obj.renderSectionFooter = function renderSectionFooter(section) {
    const type = section.section.type;
    if (constants.CHANNEL === type) {
      const intl2 = closure_0(1114).intl;
      let stringResult = intl2.string(closure_0(1114).t.WEg7PK);
    } else if (constants.INTANGIBLE === type) {
      const intl = closure_0(1114).intl;
      stringResult = intl.string(closure_0(1114).t.VinNZr);
    } else if (constants.EMOJI === type) {
      const intl3 = closure_0(1114).intl;
      stringResult = intl3.string(closure_0(1114).t["0t1aNC"]);
    }
    return onSave(GuildRoleSubscriptionTierBenefitsModalHeader, {
      label: stringResult,
      onPress() {
        if (type === constants.EMOJI) {
          let obj = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds: first2, onSave, listingId: editStateId };
          GuildRoleSubscriptionsModalActionCreatorsAll.showEditEmojisModal(obj);
        } else {
          if (tmp === tmp2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          obj = { guildId, type: INTANGIBLE, onSave: addBenefit, listingId: editStateId };
          const result = obj.showCreateBenefitModal(obj);
        }
      },
      disabled: roleSubscriptionSettingsDisabled
    });
  };
  obj.ItemSeparatorComponent = ItemSeparator;
  obj.SectionSeparatorComponent = Separator;
  obj.ListFooterComponent = tmp29;
  return closure_12(role_id, obj);
}
class GuildRoleSubscriptionTierBenefitsTab {
  constructor(arg0) {
    obj = { onlyChannels: global.onlyChannels, onlyIntangible: global.onlyIntangible };
    return jsx(Content, obj);
  }
}
get_ActivityIndicator = fn(17);
({ SectionList: metroRequire, View: closure_7 } = get_ActivityIndicator);
let AllChannelAccessOptions = fn(15228).AllChannelAccessOptions;
const useGroupIsFullGateState = fn(17729).useGroupIsFullGateState;
const GuildRoleSubscriptionsConstants = fn(15205);
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: closure_11 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { listContainer: { paddingBottom: 16 }, card: null, item: null, itemFirst: null, itemLast: null, itemSeparatorContainer: null, itemSeparator: null, listFooterText: null, listFooterSubtitle: null, listFooterSectionDescription: null, listFooterContainer: null, disabledSection: null, allChannelsSwitch: null, addBenefitLabel: null, separator: null, emojiImage: null, disabled: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
createStyles.card = createStyles;
createStyles.item = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
createStyles.itemFirst = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let obj2 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles.itemLast = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
let obj3 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
createStyles.itemSeparatorContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
createStyles.itemSeparator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
createStyles.listFooterText = { marginHorizontal: 16 };
createStyles.listFooterSubtitle = { marginTop: 8 };
createStyles.listFooterSectionDescription = { marginBottom: 16 };
createStyles.listFooterContainer = { marginVertical: 24 };
createStyles.disabledSection = { opacity: 0.5 };
createStyles.allChannelsSwitch = { marginHorizontal: 16, marginTop: 24 };
createStyles.addBenefitLabel = { marginStart: 16 };
createStyles.separator = { height: 8 };
createStyles.emojiImage = { width: 24, height: 24, marginRight: 16 };
createStyles.disabled = { opacity: 0.5 };
let closure_15 = createStyles.createStyles(createStyles);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export const GuildRoleSubscriptionTierChannelBenefitsModal = function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0eV/GY"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.iMSIWp);
  obj.nextStep = constants2.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = closure_1_12(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true });
  return closure_1_12(GuildRoleSubscriptionTierEditStepDefault, obj);
};
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["+h9nJG"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.oGS4tC);
  obj.nextStep = constants2.DESIGN;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = closure_1_12(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true });
  return closure_1_12(GuildRoleSubscriptionTierEditStepDefault, obj);
};