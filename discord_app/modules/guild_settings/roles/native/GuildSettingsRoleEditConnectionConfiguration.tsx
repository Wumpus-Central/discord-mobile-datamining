// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useGetOrFetchApplicationBatched from "../../../applications/useGetOrFetchApplicationBatched.tsx";
import RoleConnectionRequirementUtils from "../../../connections/RoleConnectionRequirementUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Header(arg0) {
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  let obj = useGetOrFetchApplicationBatched;
  let application;
  if (integration != null) {
    application = integration.application;
  }
  let tmp5;
  if (null == application) {
    tmp5 = applicationId;
  }
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(tmp5);
  let application1;
  if (integration != null) {
    application1 = integration.application;
  }
  if (null != application1) {
    obj = { size: tmp3(1178).AvatarSizes.XSMALL, user: null, guildId: "Array" };
    let bot;
    if (integration != null) {
      application = integration.application;
      if (application != null) {
        bot = application.bot;
      }
    }
    obj.user = bot;
    let tmp8Result = closure_1_12(tmp3(1178).Avatar, obj);
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
        obj = { size: tmp3(1178).AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: "Array" };
        tmp11 = closure_1_12(tmp3(1178).Avatar, obj);
      }
      name = undefined;
      if (getOrFetchApplicationBatched != null) {
        name = getOrFetchApplicationBatched.name;
      }
      tmp8Result = tmp11;
    }
  } else if (null != platform) {
    tmp3(1396);
    const tmp3Result = tmp3(4411);
    const icon = platform.icon;
    const obj1 = {
      source: tmp3Result.makeSource(tmp3Result.isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG),
      disableColor: true,
    };
    tmp8Result = closure_1_12(tmp3(1178).Icon, obj1);
  }
  const obj2 = { icon: tmp8Result, label: null, trailing: null };
  const intl = tmp3(1114).intl;
  let name1;
  if (platform != null) {
    name1 = platform.name;
  }
  if (name1 == null) {
    name1 = name;
  }
  obj2.label = intl.format(util.t.Nj0a3j, { platformName: name1 });
  const obj3 = { "aria-label": null, onPress: null, disabled: null, children: null };
  const intl2 = tmp3(1114).intl;
  obj3["aria-label"] = intl2.string(util.t.N86XcP);
  obj3.onPress = onRemove;
  obj3.disabled = locked;
  obj3.children = closure_1_12(XSmallIcon.XSmallIcon, {});
  obj2.trailing = closure_1_12(Pressables.PressableOpacity, obj3);
  return closure_1_12(TableRow.TableRow, obj2);
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
  return closure_12(metadataField(7201).TableSwitchRow, obj, metadataField);
}
function NumericalConfigRule(existingPendingConfiguration) {
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  ({
    platform: dependencyMap,
    onConfigurationChange: _slicedToArray,
    locked,
    applicationId: noop,
  } = existingPendingConfiguration);
  c7 = undefined;
  let str;
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
      const obj = {
        connectionType: type,
        applicationId,
        connectionMetadataField: metadataField,
        operator,
        value: RoleConnectionRequirementUtils.storedValueFor(TableSwitchRow, operator),
      };
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
  let obj = metadataField(17637);
  const realizedOperatorForResult = obj.realizedOperatorFor(existingPendingConfiguration.operator);
  c7 = realizedOperatorForResult;
  value = undefined;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value = iter.value;
    }
  }
  let tmpResult = tmp(17637);
  str = tmpResult.displayedValueFor(value, realizedOperatorForResult);
  str = str.toString();
  let mapped = noop;
  const tmp7 = _slicedToArray(noop.useState(str), 2);
  value = tmp7[0];
  closure_10 = tmp9;
  let tmp10 = null != value;
  if (tmp10) {
    tmp10 = "" !== value;
  }
  if (tmp10) {
    tmp10 = value !== str;
  }
  if (tmp10) {
    tmp9(str);
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
    tmpResult = tmp(1115);
    closure_13 = tmpResult.isIOS() ? map.numericalInputContainerIOSInline : map.numericalInputContainerAndroidInline;
    const intl = tmp(1114).intl;
    obj = {
      metadataHook() {
        let obj = { style: null, children: null };
        const items = [closure_13, map.numericalInputContainerBase];
        obj.style = items;
        const items1 = [map.numericalInput];
        let numericalInputDisabled = closure_11;
        if (closure_11) {
          numericalInputDisabled = map.numericalInputDisabled;
        }
        obj = {
          keyboardType: "number-pad",
          style: items1,
          editable: !closure_11,
          value,
          onChangeText: onInputValueChange,
          hitSlop: 8,
        };
        items1[1] = numericalInputDisabled;
        obj.children = closure_2_12(native.TextInput, obj, metadataField);
        return closure_2_12(View, obj, "_numericalInputContainer");
      },
    };
    obj = { style: map.metadataRow, children: null };
    fieldTextHook = mapped.Children;
    map = fieldTextHook.map;
    mapped = map(intl.format(fieldTextHook, obj), (children, arg1) => {
      let tmp = children;
      if (typeof children === "string") {
        const obj = { variant: "text-md/semibold", style: map.metadataRowText, children };
        const _HermesInternal = HermesInternal;
        tmp = closure_2_12(Text_Text.Text, obj, "t-" + arg1);
      }
      return tmp;
    });
    obj.children = mapped;
    onInputValueChange(map, obj);
    const formatResult = intl.format(fieldTextHook, obj);
  } else {
    let tmp21Result;
    if (undefined !== fieldText) {
      const obj1 = { style: map.appNumericalInputContainer, children: null };
      let items = [map.appNumericalInput];
      let numericalInputDisabled = tmp14;
      if (tmp14) {
        numericalInputDisabled = map.numericalInputDisabled;
      }
      let obj2 = { children: null };
      const obj3 = { keyboardType: "number-pad", style: null, editable: null, value: null, onChangeText: null };
      items[1] = numericalInputDisabled;
      obj3.style = items;
      obj3.editable = !tmp14;
      obj3.value = value;
      obj3.onChangeText = onInputValueChange;
      obj2.children = onInputValueChange(tmp(1178).TextInput, obj3, metadataField);
      let items1 = [onInputValueChange(map, obj2, "_numericalInputContainer")];
      const obj4 = { variant: "text-md/semibold", style: map.appNumericalInputText, children: fieldText };
      items1[1] = onInputValueChange(tmp(4556).Text, obj4);
      obj1.children = items1;
      tmp21Result = closure_13(tmp22, obj1);
    }
    const obj5 = {
      label: tmp21Result,
      value: tmp13,
      disabled: locked,
      onValueChange(arg0) {
        let tmp = first;
        if ("" === first) {
          tmp = str;
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
          const obj = {
            connectionType: type,
            applicationId,
            connectionMetadataField: metadataField,
            operator,
            value: RoleConnectionRequirementUtils.storedValueFor(tmp, operator),
          };
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
      },
    };
    return onInputValueChange(tmp(7201).TableSwitchRow, obj5, metadataField);
  }
}
function BlueskyMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.BLUESKY);
  obj = { children: null };
  obj = {
    fieldTextHook: util.t["REyUZ/"],
    metadataField: React5.CREATED_AT,
    existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  const items = [
    closure_1_12(NumericalConfigRule, obj),
    closure_1_12(NumericalConfigRule, {
      fieldTextHook: util.t["/w/EYk"],
      metadataField: React5.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT),
      platform: value,
      onConfigurationChange,
      locked,
    }),
  ];
  const obj1 = {
    fieldTextHook: util.t["/w/EYk"],
    metadataField: React5.BLUESKY_FOLLOWERS_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[2] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t["5I4mVS"],
    metadataField: React5.BLUESKY_STATUSES_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_STATUSES_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  });
  obj.children = items;
  return map1(closure_1_14, obj);
}
function SteamMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.STEAM);
  obj = { children: null };
  obj = {
    fieldTextHook: util.t["REyUZ/"],
    metadataField: React5.CREATED_AT,
    existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  const items = [
    closure_1_12(NumericalConfigRule, obj),
    closure_1_12(NumericalConfigRule, {
      fieldTextHook: util.t.zVJxqj,
      metadataField: React5.STEAM_GAME_COUNT,
      existingPendingConfiguration: configMetadataMap.get(React5.STEAM_GAME_COUNT),
      platform: value,
      onConfigurationChange,
      locked,
    }),
    ,
  ];
  const obj1 = {
    fieldTextHook: util.t.zVJxqj,
    metadataField: React5.STEAM_GAME_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.STEAM_GAME_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[2] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t["ZCNdD/"],
    metadataField: React5.STEAM_ITEM_COUNT_DOTA2,
    existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2),
    platform: value,
    onConfigurationChange,
    locked,
  });
  const obj2 = {
    fieldTextHook: util.t["ZCNdD/"],
    metadataField: React5.STEAM_ITEM_COUNT_DOTA2,
    existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[3] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t["MCHnK+"],
    metadataField: React5.STEAM_ITEM_COUNT_TF2,
    existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_TF2),
    platform: value,
    onConfigurationChange,
    locked,
  });
  obj.children = items;
  return map1(closure_1_14, obj);
}
function TwitterMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.TWITTER);
  obj = { children: null };
  obj = {
    fieldTextHook: util.t["REyUZ/"],
    metadataField: React5.CREATED_AT,
    existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  const items = [
    closure_1_12(NumericalConfigRule, obj),
    closure_1_12(NumericalConfigRule, {
      fieldTextHook: util.t["/w/EYk"],
      metadataField: React5.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT),
      platform: value,
      onConfigurationChange,
      locked,
    }),
    ,
  ];
  const obj1 = {
    fieldTextHook: util.t["/w/EYk"],
    metadataField: React5.TWITTER_FOLLOWERS_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[2] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t["+NFH7k"],
    metadataField: React5.TWITTER_STATUSES_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_STATUSES_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  });
  const obj3 = {
    fieldText: null,
    metadataField: null,
    existingPendingConfiguration: null,
    platform: null,
    onConfigurationChange: null,
    locked: null,
  };
  const intl = util.intl;
  obj3.fieldText = intl.string(util.t.E2iT8K);
  obj3.metadataField = React5.TWITTER_VERIFIED;
  obj3.existingPendingConfiguration = configMetadataMap.get(React5.TWITTER_VERIFIED);
  obj3.platform = value;
  obj3.onConfigurationChange = onConfigurationChange;
  obj3.locked = locked;
  items[3] = closure_1_12(BooleanConfigRule, obj3);
  obj.children = items;
  return map1(closure_1_14, obj);
}
function RedditMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.REDDIT);
  obj = { children: null };
  obj = {
    fieldTextHook: util.t["REyUZ/"],
    metadataField: React5.CREATED_AT,
    existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  const items = [
    closure_1_12(NumericalConfigRule, obj),
    closure_1_12(NumericalConfigRule, {
      fieldTextHook: util.t.TLgZhv,
      metadataField: React5.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: configMetadataMap.get(React5.REDDIT_TOTAL_KARMA),
      platform: value,
      onConfigurationChange,
      locked,
    }),
    ,
  ];
  const obj2 = {
    fieldText: null,
    metadataField: null,
    existingPendingConfiguration: null,
    platform: null,
    onConfigurationChange: null,
    locked: null,
  };
  const intl = util.intl;
  obj2.fieldText = intl.string(util.t["0cKdka"]);
  obj2.metadataField = React5.REDDIT_MOD;
  obj2.existingPendingConfiguration = configMetadataMap.get(React5.REDDIT_MOD);
  obj2.platform = value;
  obj2.onConfigurationChange = onConfigurationChange;
  obj2.locked = locked;
  items[2] = closure_1_12(BooleanConfigRule, obj2);
  const obj3 = {
    fieldText: null,
    metadataField: null,
    existingPendingConfiguration: null,
    platform: null,
    onConfigurationChange: null,
    locked: null,
  };
  const intl2 = util.intl;
  obj3.fieldText = intl2.string(util.t.kCAN58);
  obj3.metadataField = React5.REDDIT_GOLD;
  obj3.existingPendingConfiguration = configMetadataMap.get(React5.REDDIT_GOLD);
  obj3.platform = value;
  obj3.onConfigurationChange = onConfigurationChange;
  obj3.locked = locked;
  items[3] = closure_1_12(BooleanConfigRule, obj3);
  obj.children = items;
  return map1(closure_1_14, obj);
}
function PaypalMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.PAYPAL);
  obj = { children: null };
  obj = {
    fieldTextHook: util.t["REyUZ/"],
    metadataField: React5.CREATED_AT,
    existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  const items = [closure_1_12(NumericalConfigRule, obj)];
  const obj1 = {
    fieldText: null,
    metadataField: null,
    existingPendingConfiguration: null,
    platform: null,
    onConfigurationChange: null,
    locked: null,
  };
  const intl = util.intl;
  obj1.fieldText = intl.string(util.t["0JyE8I"]);
  obj1.metadataField = React5.PAYPAL_VERIFIED;
  obj1.existingPendingConfiguration = configMetadataMap.get(React5.PAYPAL_VERIFIED);
  obj1.platform = value;
  obj1.onConfigurationChange = onConfigurationChange;
  obj1.locked = locked;
  items[1] = closure_1_12(BooleanConfigRule, obj1);
  obj.children = items;
  return map1(closure_1_14, obj);
}
function EbayMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.EBAY);
  obj = { children: null };
  obj = {
    fieldTextHook: util.t["REyUZ/"],
    metadataField: React5.CREATED_AT,
    existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  const items = [
    closure_1_12(NumericalConfigRule, obj),
    closure_1_12(NumericalConfigRule, {
      fieldTextHook: util.t.oTFOe5,
      metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: value,
      onConfigurationChange,
      locked,
    }),
    ,
    ,
  ];
  const obj1 = {
    fieldTextHook: util.t.oTFOe5,
    metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
    existingPendingConfiguration: configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[2] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t["v5a2+Q"],
    metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  });
  const obj2 = {
    fieldTextHook: util.t["v5a2+Q"],
    metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[3] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t.yYbR2r,
    metadataField: React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
    operator: constants.LESS_THAN,
  });
  const obj4 = {
    fieldText: null,
    metadataField: null,
    existingPendingConfiguration: null,
    platform: null,
    onConfigurationChange: null,
    locked: null,
  };
  const intl = util.intl;
  obj4.fieldText = intl.string(util.t["39wASN"]);
  obj4.metadataField = React5.EBAY_TOP_RATED_SELLER;
  obj4.existingPendingConfiguration = configMetadataMap.get(React5.EBAY_TOP_RATED_SELLER);
  obj4.platform = value;
  obj4.onConfigurationChange = onConfigurationChange;
  obj4.locked = locked;
  items[4] = closure_1_12(BooleanConfigRule, obj4);
  obj.children = items;
  return map1(closure_1_14, obj);
}
function TikTokMetadataRules(arg0) {
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = PlatformsDefault;
  value = obj.get(PlatformTypes.TIKTOK);
  obj = { children: null };
  obj = {
    fieldText: null,
    metadataField: null,
    existingPendingConfiguration: null,
    platform: null,
    onConfigurationChange: null,
    locked: null,
  };
  const intl = util.intl;
  obj.fieldText = intl.string(util.t.E2iT8K);
  obj.metadataField = React5.TIKTOK_VERIFIED;
  obj.existingPendingConfiguration = configMetadataMap.get(React5.TIKTOK_VERIFIED);
  obj.platform = value;
  obj.onConfigurationChange = onConfigurationChange;
  obj.locked = locked;
  const items = [
    closure_1_12(BooleanConfigRule, obj),
    closure_1_12(NumericalConfigRule, {
      fieldTextHook: util.t["/w/EYk"],
      metadataField: React5.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT),
      platform: value,
      onConfigurationChange,
      locked,
    }),
    ,
  ];
  const obj1 = {
    fieldTextHook: util.t["/w/EYk"],
    metadataField: React5.TIKTOK_FOLLOWER_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[2] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t.JHEsYw,
    metadataField: React5.TIKTOK_FOLLOWING_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  });
  const obj2 = {
    fieldTextHook: util.t.JHEsYw,
    metadataField: React5.TIKTOK_FOLLOWING_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  };
  items[3] = closure_1_12(NumericalConfigRule, {
    fieldTextHook: util.t.tEFCYA,
    metadataField: React5.TIKTOK_LIKES_COUNT,
    existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_LIKES_COUNT),
    platform: value,
    onConfigurationChange,
    locked,
  });
  obj.children = items;
  return map1(closure_1_14, obj);
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
          if (tmp.DATETIME_LESS_THAN_EQUAL !== type) {
            if (tmp.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (tmp.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (tmp.INTEGER_EQUAL !== type) {
                  if (tmp.BOOLEAN_EQUAL !== type) {
                    if (tmp.INTEGER_NOT_EQUAL !== type) {
                      if (tmp.BOOLEAN_NOT_EQUAL !== type) {
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
          if (tmp.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (tmp.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (tmp.INTEGER_EQUAL !== type2) {
                if (tmp.INTEGER_NOT_EQUAL !== type2) {
                  if (tmp.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (tmp.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      let obj = {
                        fieldText: null,
                        metadataField: null,
                        existingPendingConfiguration: null,
                        platform: null,
                        onConfigurationChange: null,
                        locked: null,
                        operator: null,
                        applicationId: null,
                      };
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
          obj = {
            fieldText: null,
            metadataField: null,
            existingPendingConfiguration: null,
            platform: null,
            onConfigurationChange: null,
            locked: null,
            operator: null,
            applicationId: null,
          };
          ({ description: obj2.fieldText, key: obj2.metadataField } = type);
          obj.existingPendingConfiguration = require.get(type.key);
          obj.onConfigurationChange = onConfigurationChange;
          obj.locked = locked;
          obj.operator = LESS_THAN;
          const application2 = integration.application;
          let id1;
          if (application2 != null) {
            id1 = application2.id;
          }
          obj.applicationId = id1;
          return closure_2_12(NumericalConfigRule, obj, type.key);
        }
        LESS_THAN = constants.LESS_THAN;
      });
    }
  }
  return mapped;
}
const View = fn(17).View;
const PlatformTypes = fn(1074).PlatformTypes;
const Constants = fn(5408);
({
  MetadataFields: closure_7,
  OperatorTypes: closure_8,
  MetadataItemTypes: closure_9,
  GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: c10,
  GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  numericalInputContainerIOSInline: { marginTop: -2 },
  numericalInputContainerAndroidInline: null,
  numericalInputContainerBase: null,
  numericalInput: null,
  appNumericalInput: null,
  appNumericalInputContainer: null,
  appNumericalInputText: null,
  numericalInputDisabled: null,
  metadataRow: null,
  metadataRowText: null,
};
createStyles = { transform: null };
let items = [{ translateY: 10 }];
createStyles.transform = items;
createStyles.numericalInputContainerAndroidInline = createStyles;
createStyles.numericalInputContainerBase = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
};
let size = {
  width: 54,
  height: 32,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 4,
  paddingVertical: 0,
  marginTop: -4,
};
createStyles.numericalInput = size;
const size1 = {
  width: 54,
  height: 32,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 8,
  paddingVertical: 0,
  marginRight: 8,
};
createStyles.appNumericalInput = size1;
createStyles.appNumericalInputContainer = { flexDirection: "row", alignItems: "center" };
createStyles.appNumericalInputText = { flexShrink: 1 };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm };
createStyles.numericalInputDisabled = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.metadataRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
createStyles.metadataRowText = { lineHeight: 32 };
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx",
);

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
      let obj = { hasIcons: true, children: null };
      obj = {
        platform: null,
        integration: "a",
        applicationId,
        onRemove() {
          return onConfigurationChange(null, configurationItems[0].index);
        },
        locked,
      };
      obj.children = closure_1_12(Header, obj);
      return closure_1_12(TableRowGroup.TableRowGroup, obj);
    } else {
      try {
        obj = PlatformsDefault;
        value = obj.get(configurationItems[0].configuration.connectionType);
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
        const obj1 = { configMetadataMap: map, onConfigurationChange, locked };
        let type;
        if (value != null) {
          type = value.type;
        }
        if (PlatformTypes.STEAM === type) {
          const obj2 = {};
          const merged = Object.assign(obj1);
          let tmp21 = closure_1_12(SteamMetadataRules, obj2);
          let tmp22 = closure_1_12;
        } else if (tmp15.TWITTER === type) {
          const obj3 = {};
          const merged1 = Object.assign(obj1);
          tmp21 = closure_1_12(TwitterMetadataRules, obj3);
          tmp22 = closure_1_12;
        } else if (tmp15.REDDIT === type) {
          const obj4 = {};
          const merged2 = Object.assign(obj1);
          tmp21 = closure_1_12(RedditMetadataRules, obj4);
          tmp22 = closure_1_12;
        } else if (tmp15.BLUESKY === type) {
          const obj5 = {};
          const merged3 = Object.assign(obj1);
          tmp21 = closure_1_12(BlueskyMetadataRules, obj5);
          tmp22 = closure_1_12;
        } else if (tmp15.PAYPAL === type) {
          const obj6 = {};
          const merged4 = Object.assign(obj1);
          tmp21 = closure_1_12(PaypalMetadataRules, obj6);
          tmp22 = closure_1_12;
        } else if (tmp15.EBAY === type) {
          const obj7 = {};
          const merged5 = Object.assign(obj1);
          tmp21 = closure_1_12(EbayMetadataRules, obj7);
          tmp22 = closure_1_12;
        } else if (tmp15.TIKTOK === type) {
          const obj8 = {};
          const merged6 = Object.assign(obj1);
          tmp21 = closure_1_12(TikTokMetadataRules, obj8);
          tmp22 = closure_1_12;
        } else {
          const obj9 = {};
          const merged7 = Object.assign(obj1);
          obj9.integration = tmp;
          tmp21 = closure_1_12(ApplicationMetadataRules, obj9);
          tmp22 = closure_1_12;
        }
        const obj10 = { hasIcons: true, children: null };
        const obj11 = {
          platform: value,
          integration: tmp,
          onRemove() {
            return onConfigurationChange(null, index.index);
          },
          locked,
        };
        const items = [tmp22(Header, obj11), tmp21];
        obj10.children = items;
        return map1(TableRowGroup.TableRowGroup, obj10);
      } catch (err) {}
    }
  }
}
