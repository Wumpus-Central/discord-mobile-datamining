// === Module 17434: GuildSettingsRoleEditConnectionConfiguration ===

// Module 17434 (GuildSettingsRoleEditConnectionConfiguration)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import TableRow from "TableRow" /* 5917 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import useGetOrFetchApplicationBatched from "useGetOrFetchApplicationBatched" /* 11058 */;
import RoleConnectionRequirementUtils from "RoleConnectionRequirementUtils" /* 17435 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Header(arg0) {
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  const tmp2 = useThemeDefault();
  let application1;
  if (integration != null) {
    application1 = integration.application;
  }
  let tmp5;
  if (null == application1) {
    tmp5 = applicationId;
  }
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched.useGetOrFetchApplicationBatched(tmp5);
  let application2;
  if (integration != null) {
    application2 = integration.application;
  }
  if (null != application2) {
    const obj2 = { size: native.AvatarSizes.XSMALL, user: null, guildId: "Array" };
    let bot;
    if (integration != null) {
      const application = integration.application;
      if (application != null) {
        bot = application.bot;
      }
    }
    obj2.user = bot;
    let tmp8Result = closure_1_12(native.Avatar, obj2);
    let name = integration.application.name;
  } else if (null != applicationId) {
    if (undefined === getOrFetchApplicationBatched) {
      return null;
    } else {
      let bot1;
      if (getOrFetchApplicationBatched != null) {
        bot1 = getOrFetchApplicationBatched.bot;
      }
      let tmp11;
      if (null != bot1) {
        const obj3 = { size: native.AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: "Array" };
        tmp11 = closure_1_12(native.Avatar, obj3);
      }
      let name1;
      if (getOrFetchApplicationBatched != null) {
        name1 = getOrFetchApplicationBatched.name;
      }
      name = name1;
      tmp8Result = tmp11;
    }
  } else if (null != platform) {
    const tmp3Result = AvatarUtils;
    const icon = platform.icon;
    const obj4 = { source: tmp3Result.makeSource(shared.isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG), disableColor: true };
    tmp8Result = closure_1_12(native.Icon, obj4);
    const tmp3Result2 = shared;
  }
  const obj5 = { icon: tmp8Result, label: null, trailing: null };
  const intl = util.intl;
  let name2;
  if (platform != null) {
    name2 = platform.name;
  }
  if (name2 == null) {
    name2 = name;
  }
  obj5.label = intl.format(util.t.Nj0a3j, { platformName: name2 });
  const obj6 = { "aria-label": null, onPress: null, disabled: null, children: null };
  const intl2 = util.intl;
  obj6["aria-label"] = intl2.string(util.t.N86XcP);
  obj6.onPress = onRemove;
  obj6.disabled = locked;
  obj6.children = closure_1_12(XSmallIcon.XSmallIcon, {});
  obj5.trailing = closure_1_12(Pressables.PressableOpacity, obj6);
  return closure_1_12(TableRow.TableRow, obj5);
}
function BooleanConfigRule(metadataField) {
  metadataField = metadataField.metadataField;
  const existingPendingConfiguration = metadataField.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, applicationId: noop, operator } = metadataField);
  operator = undefined;
  ({ fieldText, locked } = metadataField);
  if (operator == null) {
    operator = constants.EQUAL;
  }
  let obj = { label: fieldText, value: null, disabled: null, onValueChange: null };
  value = undefined;
  if (existingPendingConfiguration != null) {
    value = existingPendingConfiguration.configuration.value;
  }
  obj.value = "1" === value;
  obj.disabled = locked;
  obj.onValueChange = function onValueChange(arg0) {
    let tmp = null;
    if (arg0) {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      if (type == null) {
        type = closure_2_10;
      }
      const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator, value: "1" };
      tmp = obj;
    }
    let num;
    if (existingPendingConfiguration != null) {
      num = existingPendingConfiguration.index;
    }
    if (num == null) {
      num = -1;
    }
    _slicedToArray(tmp, num);
  };
  return closure_12(metadataField(6621).TableSwitchRow, obj, metadataField);
}
function NumericalConfigRule(existingPendingConfiguration) {
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, locked, applicationId: noop } = existingPendingConfiguration);
  c7 = undefined;
  let str1;
  value = undefined;
  closure_10 = undefined;
  closure_11 = undefined;
  closure_13 = undefined;
  function onInputValueChange(TableSwitchRow) {
    closure_10(TableSwitchRow);
    let isFiniteResult = null != existingPendingConfiguration;
    if (isFiniteResult) {
      isFiniteResult = "" !== TableSwitchRow;
    }
    if (isFiniteResult) {
      const _Number = Number;
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(Number(TableSwitchRow));
    }
    if (isFiniteResult) {
      let type;
      if (dependencyMap != null) {
        type = dependencyMap.type;
      }
      if (type == null) {
        type = closure_2_10;
      }
      const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator, value: RoleConnectionRequirementUtils.storedValueFor(TableSwitchRow, operator) };
      _slicedToArray(obj, num);
    }
  }
  let map = closure_15();
  let num;
  if (existingPendingConfiguration != null) {
    num = existingPendingConfiguration.index;
  }
  if (num == null) {
    num = -1;
  }
  const realizedOperatorForResult = metadataField(17435).realizedOperatorFor(existingPendingConfiguration.operator);
  c7 = realizedOperatorForResult;
  value = undefined;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value = iter.value;
    }
  }
  let obj = metadataField(17435);
  const tmpResult = metadataField(17435);
  str1 = metadataField(17435).displayedValueFor(value, realizedOperatorForResult).toString();
  let mapped = noop;
  [value] = noop.useState(str1);
  closure_10 = tmp9;
  let tmp10 = null != value;
  if (tmp10) {
    tmp10 = "" !== value;
  }
  if (tmp10) {
    tmp10 = value !== str1;
  }
  if (tmp10) {
    tmp9(str1);
  }
  let configuration;
  if (existingPendingConfiguration != null) {
    configuration = existingPendingConfiguration.configuration;
  }
  let tmp14 = locked;
  if (!locked) {
    tmp14 = !tmp13;
  }
  closure_11 = tmp14;
  if (undefined !== fieldTextHook) {
    closure_13 = metadataField(1364).isIOS() ? map.numericalInputContainerIOSInline : map.numericalInputContainerAndroidInline;
    const intl = metadataField(1115).intl;
    let obj2 = {
      metadataHook() {
          const obj = { style: null, children: null };
          const items = [closure_13, map.numericalInputContainerBase];
          obj.style = items;
          const items1 = [map.numericalInput, ];
          let numericalInputDisabled = closure_11;
          if (closure_11) {
            numericalInputDisabled = map.numericalInputDisabled;
          }
          items1[1] = numericalInputDisabled;
          obj.children = closure_2_12(native.TextInput, { keyboardType: "number-pad", style: items1, editable: !closure_11, value, onChangeText: onInputValueChange, hitSlop: 8 }, metadataField);
          return closure_2_12(View, obj, "_numericalInputContainer");
        }
    };
    const obj3 = { style: map.metadataRow, children: null };
    const tmpResult2 = metadataField(1364);
    fieldTextHook = mapped.Children;
    map = fieldTextHook.map;
    mapped = map(intl.format(fieldTextHook, obj2), (children, arg1) => {
      let tmp = children;
      if (typeof children === "string") {
        const obj = { variant: "text-md/semibold", style: map.metadataRowText, children };
        const _HermesInternal = HermesInternal;
        tmp = closure_2_12(Text_Text.Text, obj, "t-" + arg1);
      }
      return tmp;
    });
    obj3.children = mapped;
    onInputValueChange(map, obj3);
    const formatResult = intl.format(fieldTextHook, obj2);
  } else {
    let tmp21Result;
    if (undefined !== fieldText) {
      const obj4 = { style: map.appNumericalInputContainer, children: null };
      let items = [map.appNumericalInput, ];
      let numericalInputDisabled = tmp14;
      if (tmp14) {
        numericalInputDisabled = map.numericalInputDisabled;
      }
      const obj5 = { children: null };
      const obj6 = { keyboardType: "number-pad", style: null, editable: null, value: null, onChangeText: null };
      items[1] = numericalInputDisabled;
      obj6.style = items;
      obj6.editable = !tmp14;
      obj6.value = value;
      obj6.onChangeText = onInputValueChange;
      obj5.children = onInputValueChange(metadataField(1177).TextInput, obj6, metadataField);
      let items1 = [onInputValueChange(map, obj5, "_numericalInputContainer"), ];
      const obj7 = { variant: "text-md/semibold", style: map.appNumericalInputText, children: fieldText };
      items1[1] = onInputValueChange(metadataField(4832).Text, obj7);
      obj4.children = items1;
      tmp21Result = closure_13(tmp22, obj4);
    }
    const obj8 = {
      label: tmp21Result,
      value: tmp13,
      disabled: locked,
      onValueChange(arg0) {
          let tmp = first;
          if ("" === first) {
            tmp = str1;
          }
          closure_10(tmp);
          let tmp3 = null;
          if (arg0) {
            let type;
            if (dependencyMap != null) {
              type = dependencyMap.type;
            }
            if (type == null) {
              type = closure_2_10;
            }
            const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator, value: RoleConnectionRequirementUtils.storedValueFor(tmp, operator) };
            tmp3 = obj;
          }
          num = undefined;
          if (existingPendingConfiguration != null) {
            num = existingPendingConfiguration.index;
          }
          if (num == null) {
            num = -1;
          }
          _slicedToArray(tmp3, num);
        }
    };
    return onInputValueChange(metadataField(6621).TableSwitchRow, obj8, metadataField);
  }
  const str = metadataField(17435).displayedValueFor(value, realizedOperatorForResult);
}
function BlueskyMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.BLUESKY);
  const obj2 = { children: null };
  const items = [closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked }), , ];
  const obj3 = { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[1] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["/w/EYk"], metadataField: React5.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked });
  const obj4 = { fieldTextHook: util.t["/w/EYk"], metadataField: React5.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["5I4mVS"], metadataField: React5.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function SteamMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.STEAM);
  const obj2 = { children: null };
  const items = [closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked }), , , ];
  const obj3 = { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[1] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t.zVJxqj, metadataField: React5.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked });
  const obj4 = { fieldTextHook: util.t.zVJxqj, metadataField: React5.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["ZCNdD/"], metadataField: React5.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked });
  const obj5 = { fieldTextHook: util.t["ZCNdD/"], metadataField: React5.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked };
  items[3] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["MCHnK+"], metadataField: React5.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_TF2), platform: value, onConfigurationChange, locked });
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function TwitterMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.TWITTER);
  const obj2 = { children: null };
  const items = [closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked }), , , ];
  const obj3 = { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[1] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["/w/EYk"], metadataField: React5.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked });
  const obj4 = { fieldTextHook: util.t["/w/EYk"], metadataField: React5.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["+NFH7k"], metadataField: React5.TWITTER_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  const obj6 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = util.intl;
  obj6.fieldText = intl.string(util.t.E2iT8K);
  obj6.metadataField = React5.TWITTER_VERIFIED;
  obj6.existingPendingConfiguration = configMetadataMap.get(React5.TWITTER_VERIFIED);
  obj6.platform = value;
  obj6.onConfigurationChange = onConfigurationChange;
  obj6.locked = locked;
  items[3] = closure_1_12(BooleanConfigRule, obj6);
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function RedditMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.REDDIT);
  const obj2 = { children: null };
  const items = [closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked }), , , ];
  const obj3 = { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[1] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t.TLgZhv, metadataField: React5.REDDIT_TOTAL_KARMA, existingPendingConfiguration: configMetadataMap.get(React5.REDDIT_TOTAL_KARMA), platform: value, onConfigurationChange, locked });
  const obj5 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = util.intl;
  obj5.fieldText = intl.string(util.t["0cKdka"]);
  obj5.metadataField = React5.REDDIT_MOD;
  obj5.existingPendingConfiguration = configMetadataMap.get(React5.REDDIT_MOD);
  obj5.platform = value;
  obj5.onConfigurationChange = onConfigurationChange;
  obj5.locked = locked;
  items[2] = closure_1_12(BooleanConfigRule, obj5);
  const obj6 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl2 = util.intl;
  obj6.fieldText = intl2.string(util.t.kCAN58);
  obj6.metadataField = React5.REDDIT_GOLD;
  obj6.existingPendingConfiguration = configMetadataMap.get(React5.REDDIT_GOLD);
  obj6.platform = value;
  obj6.onConfigurationChange = onConfigurationChange;
  obj6.locked = locked;
  items[3] = closure_1_12(BooleanConfigRule, obj6);
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function PaypalMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.PAYPAL);
  const obj2 = { children: null };
  const items = [closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked }), ];
  const obj4 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = util.intl;
  obj4.fieldText = intl.string(util.t["0JyE8I"]);
  obj4.metadataField = React5.PAYPAL_VERIFIED;
  obj4.existingPendingConfiguration = configMetadataMap.get(React5.PAYPAL_VERIFIED);
  obj4.platform = value;
  obj4.onConfigurationChange = onConfigurationChange;
  obj4.locked = locked;
  items[1] = closure_1_12(BooleanConfigRule, obj4);
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function EbayMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.EBAY);
  const obj2 = { children: null };
  const items = [closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked }), , , , ];
  const obj3 = { fieldTextHook: util.t["REyUZ/"], metadataField: React5.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[1] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t.oTFOe5, metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked });
  const obj4 = { fieldTextHook: util.t.oTFOe5, metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked };
  items[2] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["v5a2+Q"], metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked });
  const obj5 = { fieldTextHook: util.t["v5a2+Q"], metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t.yYbR2r, metadataField: React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked, operator: constants.LESS_THAN });
  const obj7 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = util.intl;
  obj7.fieldText = intl.string(util.t["39wASN"]);
  obj7.metadataField = React5.EBAY_TOP_RATED_SELLER;
  obj7.existingPendingConfiguration = configMetadataMap.get(React5.EBAY_TOP_RATED_SELLER);
  obj7.platform = value;
  obj7.onConfigurationChange = onConfigurationChange;
  obj7.locked = locked;
  items[4] = closure_1_12(BooleanConfigRule, obj7);
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function TikTokMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  value = PlatformsDefault.get(PlatformTypes.TIKTOK);
  const obj2 = { children: null };
  const obj3 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = util.intl;
  obj3.fieldText = intl.string(util.t.E2iT8K);
  obj3.metadataField = React5.TIKTOK_VERIFIED;
  obj3.existingPendingConfiguration = configMetadataMap.get(React5.TIKTOK_VERIFIED);
  obj3.platform = value;
  obj3.onConfigurationChange = onConfigurationChange;
  obj3.locked = locked;
  const items = [closure_1_12(BooleanConfigRule, obj3), , , ];
  items[1] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t["/w/EYk"], metadataField: React5.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked });
  const obj4 = { fieldTextHook: util.t["/w/EYk"], metadataField: React5.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t.JHEsYw, metadataField: React5.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked });
  const obj5 = { fieldTextHook: util.t.JHEsYw, metadataField: React5.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = closure_1_12(NumericalConfigRule, { fieldTextHook: util.t.tEFCYA, metadataField: React5.TIKTOK_LIKES_COUNT, existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_LIKES_COUNT), platform: value, onConfigurationChange, locked });
  obj2.children = items;
  return map1(closure_1_14, obj2);
}
function ApplicationMetadataRules(arg0) {
  ({ configMetadataMap: require, onConfigurationChange: importDefault, locked: dependencyMap, integration } = arg0);
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        type = type.type;
        if (constants2.INTEGER_LESS_THAN_EQUAL !== type) {
          if (constants2.DATETIME_LESS_THAN_EQUAL !== type) {
            if (constants2.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (constants2.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (constants2.INTEGER_EQUAL !== type) {
                  if (constants2.BOOLEAN_EQUAL !== type) {
                    if (constants2.INTEGER_NOT_EQUAL !== type) {
                      if (constants2.BOOLEAN_NOT_EQUAL !== type) {
                        return null;
                      }
                    }
                    let LESS_THAN = constants.NOT_EQUAL;
                  }
                }
                LESS_THAN = constants.EQUAL;
              }
            }
            LESS_THAN = constants.GREATER_THAN;
          }
          const type2 = type.type;
          if (constants2.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (constants2.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (constants2.INTEGER_EQUAL !== type2) {
                if (constants2.INTEGER_NOT_EQUAL !== type2) {
                  if (constants2.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (constants2.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      const obj = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null, operator: null, applicationId: null };
                      ({ description: obj.fieldText, key: obj.metadataField } = type);
                      obj.existingPendingConfiguration = require.get(type.key);
                      obj.onConfigurationChange = onConfigurationChange;
                      obj.locked = locked;
                      obj.operator = LESS_THAN;
                      const application = integration.application;
                      let id;
                      if (application != null) {
                        id = application.id;
                      }
                      obj.applicationId = id;
                      return closure_2_12(BooleanConfigRule, obj, type.key);
                    }
                  }
                }
              }
            }
          }
          const obj3 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null, operator: null, applicationId: null };
          ({ description: obj2.fieldText, key: obj2.metadataField } = type);
          obj3.existingPendingConfiguration = require.get(type.key);
          obj3.onConfigurationChange = onConfigurationChange;
          obj3.locked = locked;
          obj3.operator = LESS_THAN;
          const application2 = integration.application;
          let id1;
          if (application2 != null) {
            id1 = application2.id;
          }
          obj3.applicationId = id1;
          return closure_2_12(NumericalConfigRule, obj3, type.key);
        }
        LESS_THAN = constants.LESS_THAN;
      });
    }
  }
  return mapped;
}
const View = fn(17).View;
const PlatformTypes = fn(1074).PlatformTypes;
const Constants = fn(5720);
({ MetadataFields: closure_7, OperatorTypes: closure_8, MetadataItemTypes: closure_9, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: c10, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { numericalInputContainerIOSInline: { marginTop: -2 }, numericalInputContainerAndroidInline: null, numericalInputContainerBase: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm }, numericalInput: null, appNumericalInput: null, appNumericalInputContainer: null, appNumericalInputText: null, numericalInputDisabled: null, metadataRow: null, metadataRowText: null };
let obj3 = { transform: null };
let items = [{ translateY: 10 }];
obj3.transform = items;
obj2.numericalInputContainerAndroidInline = obj3;
let size = { width: 54, height: 32, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 4, paddingVertical: 0, marginTop: -4 };
obj2.numericalInput = size;
const size1 = { width: 54, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 0, marginRight: 8 };
obj2.appNumericalInput = size1;
obj2.appNumericalInputContainer = { flexDirection: "row", alignItems: "center" };
obj2.appNumericalInputText = { flexShrink: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm };
obj2.numericalInputDisabled = { color: nativeDefault.colors.TEXT_MUTED };
obj2.metadataRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
obj2.metadataRowText = { lineHeight: 32 };
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx");

export default function GuildSettingsRoleEditConnectionConfiguration(configurationItems) {
  configurationItems = configurationItems.configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  let applicationId;
  let index;
  let map;
  if (configurationItems.length < 1) {
    return null;
  } else {
    applicationId = configurationItems[0].configuration.applicationId;
    if (null != applicationId) {
      if (!tmp68) {
        let found;
        if (integrations != null) {
          found = integrations.find((application) => {
            application = application.application;
            let id;
            if (application != null) {
              id = application.id;
            }
            return id === applicationId;
          });
        }
      }
    }
    if (null != applicationId) {
      if (!tmp68) {
        if (null == tmp) {
          return null;
        }
      }
    }
    if (configurationItems[0].configuration.connectionType === closure_1_11) {
      const obj2 = { hasIcons: true, children: null };
      const obj3 = {
        platform: null,
        integration: "a",
        applicationId,
        onRemove() {
              return onConfigurationChange(null, configurationItems[0].index);
            },
        locked
      };
      obj2.children = closure_1_12(Header, obj3);
      return closure_1_12(TableRowGroup.TableRowGroup, obj2);
    } else {
      try {
        value = PlatformsDefault.get(configurationItems[0].configuration.connectionType);
        const _Map = Map;
        map = new Map();
        const item = configurationItems.forEach((configuration) => {
          if (null != configuration.configuration.connectionMetadataField) {
            const result = map.set(configuration.configuration.connectionMetadataField, configuration);
          } else {
            if (tmp) {
              closure_3 = configuration;
            }
            tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
          }
        });
        const obj4 = { configMetadataMap: map, onConfigurationChange, locked };
        let type;
        if (value != null) {
          type = value.type;
        }
        if (PlatformTypes.STEAM === type) {
          const obj5 = {};
          const merged = Object.assign(obj4);
          let tmp21 = closure_1_12(SteamMetadataRules, obj5);
          let tmp22 = closure_1_12;
        } else if (PlatformTypes.TWITTER === type) {
          const obj6 = {};
          const merged1 = Object.assign(obj4);
          tmp21 = closure_1_12(TwitterMetadataRules, obj6);
          tmp22 = closure_1_12;
        } else if (PlatformTypes.REDDIT === type) {
          const obj7 = {};
          const merged2 = Object.assign(obj4);
          tmp21 = closure_1_12(RedditMetadataRules, obj7);
          tmp22 = closure_1_12;
        } else if (PlatformTypes.BLUESKY === type) {
          const obj8 = {};
          const merged3 = Object.assign(obj4);
          tmp21 = closure_1_12(BlueskyMetadataRules, obj8);
          tmp22 = closure_1_12;
        } else if (PlatformTypes.PAYPAL === type) {
          const obj9 = {};
          const merged4 = Object.assign(obj4);
          tmp21 = closure_1_12(PaypalMetadataRules, obj9);
          tmp22 = closure_1_12;
        } else if (PlatformTypes.EBAY === type) {
          const obj10 = {};
          const merged5 = Object.assign(obj4);
          tmp21 = closure_1_12(EbayMetadataRules, obj10);
          tmp22 = closure_1_12;
        } else if (PlatformTypes.TIKTOK === type) {
          const obj11 = {};
          const merged6 = Object.assign(obj4);
          tmp21 = closure_1_12(TikTokMetadataRules, obj11);
          tmp22 = closure_1_12;
        } else {
          const obj12 = {};
          const merged7 = Object.assign(obj4);
          obj12.integration = tmp;
          tmp21 = closure_1_12(ApplicationMetadataRules, obj12);
          tmp22 = closure_1_12;
        }
        const obj13 = { hasIcons: true, children: null };
        const obj14 = {
          platform: value,
          integration: tmp,
          onRemove() {
                  return onConfigurationChange(null, index.index);
                },
          locked
        };
        const items = [tmp22(Header, obj14), tmp21];
        obj13.children = items;
        return map1(TableRowGroup.TableRowGroup, obj13);
      } catch (err) {
      }
    }
  }
};