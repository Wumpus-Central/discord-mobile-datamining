import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "TableSwitchRow";
import { PlatformTypes } from "ME";
import OperatorTypes from "OperatorTypes";
import jsxProd from "getPlatformUserUrl";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_14;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function Header(arg0) {
  let applicationId;
  let integration;
  let locked;
  let onRemove;
  let platform;
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  let obj = require(10162) /* request */;
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
    obj = { size: null, user: null, guildId: "Array" };
    obj[0] = tmp3(1297).AvatarSizes.XSMALL;
    let bot;
    if (integration != null) {
      application = integration.application;
      if (application != null) {
        bot = application.bot;
      }
    }
    obj[1] = bot;
    let tmp8Result = callback2(tmp3(1297).Avatar, obj);
    let name = integration.application.name;
    const tmp14 = callback2;
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
        obj = { size: null, user: null, guildId: "Array" };
        obj[0] = tmp3(1297).AvatarSizes.XSMALL;
        obj[1] = getOrFetchApplicationBatched.bot;
        tmp11 = callback2(tmp3(1297).Avatar, obj);
      }
      name = undefined;
      if (getOrFetchApplicationBatched != null) {
        name = getOrFetchApplicationBatched.name;
      }
      tmp8Result = tmp11;
    }
  } else if (null != platform) {
    let tmp3Result = tmp3(1416);
    tmp3Result = tmp3(4101);
    const icon = platform.icon;
    const obj1 = { source: null, disableColor: true };
    obj1[0] = tmp3Result.makeSource(tmp3Result.isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG);
    tmp8Result = callback2(tmp3(1297).Icon, obj1);
    const tmp8 = callback2;
  }
  const obj2 = { icon: tmp8Result, label: null, trailing: null };
  const intl = tmp3(1236).intl;
  let name1;
  if (platform != null) {
    name1 = platform.name;
  }
  if (name1 == null) {
    name1 = name;
  }
  obj2[1] = intl.format(require(1236) /* getSystemLocale */.t.Nj0a3j, { platformName: name1 });
  const obj3 = { "aria-label": null, onPress: null, disabled: null, children: null };
  const intl2 = tmp3(1236).intl;
  obj3[0] = intl2.string(require(1236) /* getSystemLocale */.t.N86XcP);
  obj3[1] = onRemove;
  obj3[2] = locked;
  obj3[3] = callback2(require(5241) /* XSmallIcon */.XSmallIcon, {});
  obj2[2] = callback2(require(4783) /* PressableBase */.PressableOpacity, obj3);
  return callback2(require(5286) /* TableRowInner */.TableRow, obj2);
}
function BooleanConfigRule(metadataField) {
  let _slicedToArray;
  let set;
  let dependencyMap;
  let fieldText;
  let locked;
  let operator;
  metadataField = metadataField.metadataField;
  const existingPendingConfiguration = metadataField.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, applicationId: set, operator } = metadataField);
  operator = undefined;
  ({ fieldText, locked } = metadataField);
  if (operator == null) {
    operator = constants.EQUAL;
  }
  let obj = { label: fieldText, value: null, disabled: null, onValueChange: null };
  let value;
  if (existingPendingConfiguration != null) {
    value = existingPendingConfiguration.configuration.value;
  }
  obj[1] = "1" === value;
  obj[2] = locked;
  obj[3] = function onValueChange(arg0) {
    let tmp = null;
    if (arg0) {
      let type;
      if (type != null) {
        type = type.type;
      }
      if (type == null) {
        type = outer1_10;
      }
      const obj = { connectionType: null, applicationId: null, connectionMetadataField: null, operator: null, value: "1" };
      obj[0] = type;
      obj[1] = set;
      obj[2] = metadataField;
      obj[3] = operator;
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
  return closure_12(metadataField(5621).TableSwitchRow, obj, metadataField);
}
function NumericalConfigRule(existingPendingConfiguration) {
  let _slicedToArray;
  let set;
  let dependencyMap;
  let fieldText;
  let fieldTextHook;
  let locked;
  let metadataField;
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, locked, applicationId: set } = existingPendingConfiguration);
  let map;
  let num;
  let c7;
  let str;
  let first;
  let c10;
  let c11;
  let closure_13;
  function onInputValueChange(TableSwitchRow, arg1, metadataField) {
    _undefined(TableSwitchRow);
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
      if (closure_2 != null) {
        type = closure_2.type;
      }
      if (type == null) {
        type = _undefined;
      }
      const obj = { connectionType: null, applicationId: null, connectionMetadataField: null, operator: null, value: null };
      obj[0] = type;
      obj[1] = set;
      obj[2] = metadataField;
      obj[3] = c7;
      obj[4] = metadataField(outer1_2[18]).storedValueFor(TableSwitchRow, c7);
      _slicedToArray(obj, num);
      const obj2 = metadataField(outer1_2[18]);
      const tmp4 = _slicedToArray;
    }
  }
  map = createCacheKey();
  num = undefined;
  if (existingPendingConfiguration != null) {
    num = existingPendingConfiguration.index;
  }
  if (num == null) {
    num = -1;
  }
  let obj = metadataField(16566);
  const realizedOperatorForResult = obj.realizedOperatorFor(existingPendingConfiguration.operator);
  c7 = realizedOperatorForResult;
  let value;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value = iter.value;
    }
  }
  let tmpResult = tmp(16566);
  str = tmpResult.displayedValueFor(value, realizedOperatorForResult);
  str = str.toString();
  let mapped = React;
  const tmp7 = callback(React.useState(str), 2);
  first = tmp7[0];
  c10 = tmp9;
  let tmp10 = null != value;
  if (tmp10) {
    tmp10 = "" !== first;
  }
  if (tmp10) {
    tmp10 = first !== str;
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
  c11 = tmp14;
  if (undefined !== fieldTextHook) {
    tmpResult = tmp(500);
    closure_13 = tmpResult.isIOS() ? map.numericalInputContainerIOSInline : map.numericalInputContainerAndroidInline;
    const intl = tmp(1236).intl;
    obj = { metadataHook: null };
    obj[0] = function metadataHook() {
      let obj = { style: items, children: null };
      items = [closure_13, map.numericalInputContainerBase];
      const items1 = [map.numericalInput, ];
      let numericalInputDisabled = c11;
      if (c11) {
        numericalInputDisabled = map.numericalInputDisabled;
      }
      obj = { keyboardType: "number-pad", style: items1, editable: !c11, value: first, onChangeText: onInputValueChange, hitSlop: 8 };
      items1[1] = numericalInputDisabled;
      obj[1] = onInputValueChange(metadataField(outer1_2[10]).TextInput, obj, metadataField);
      return onInputValueChange(map, obj, "_numericalInputContainer");
    };
    obj = { style: null, children: null };
    obj[0] = map.metadataRow;
    fieldTextHook = mapped.Children;
    map = fieldTextHook.map;
    mapped = map(intl.format(fieldTextHook, obj), (arg0, arg1) => {
      let tmp = arg0;
      if (typeof arg0 !== "ge") {
        const obj = { variant: "text-md/semibold", style: null, children: null };
        obj[1] = map.metadataRowText;
        obj[2] = arg0;
        const _HermesInternal = HermesInternal;
        tmp = onInputValueChange(metadataField(outer1_2[20]).Text, obj, "t-" + arg1);
      }
      return tmp;
    });
    obj[1] = mapped;
    onInputValueChange(map, obj);
    const formatResult = intl.format(fieldTextHook, obj);
  } else {
    let tmp21Result;
    if (undefined !== fieldText) {
      const obj1 = { style: null, children: null };
      obj1[0] = map.appNumericalInputContainer;
      let items = [map.appNumericalInput, ];
      let numericalInputDisabled = tmp14;
      if (tmp14) {
        numericalInputDisabled = map.numericalInputDisabled;
      }
      let obj2 = { children: null };
      const obj3 = { keyboardType: "number-pad", style: null, editable: null, value: null, onChangeText: null };
      items[1] = numericalInputDisabled;
      obj3[1] = items;
      obj3[2] = !tmp14;
      obj3[3] = first;
      obj3[4] = onInputValueChange;
      obj2[0] = onInputValueChange(tmp(1297).TextInput, obj3, metadataField);
      let items1 = [onInputValueChange(map, obj2, "_numericalInputContainer"), ];
      const obj4 = { variant: "text-md/semibold", style: null, children: null };
      obj4[1] = map.appNumericalInputText;
      obj4[2] = fieldText;
      items1[1] = onInputValueChange(tmp(4251).Text, obj4);
      obj1[1] = items1;
      tmp21Result = closure_13(tmp22, obj1);
      const tmp21 = closure_13;
    }
    const obj5 = { label: null, value: null, disabled: null, onValueChange: null };
    obj5[0] = tmp21Result;
    obj5[1] = tmp13;
    obj5[2] = locked;
    obj5[3] = function onValueChange(arg0) {
      let tmp = first;
      if ("" === first) {
        tmp = str;
      }
      _undefined(tmp);
      let tmp3 = null;
      if (arg0) {
        let type;
        if (closure_2 != null) {
          type = closure_2.type;
        }
        if (type == null) {
          type = _undefined;
        }
        const obj = { connectionType: null, applicationId: null, connectionMetadataField: null, operator: null, value: null };
        obj[0] = type;
        obj[1] = set;
        obj[2] = metadataField;
        obj[3] = c7;
        obj[4] = metadataField(outer1_2[18]).storedValueFor(tmp, c7);
        tmp3 = obj;
        const obj2 = metadataField(outer1_2[18]);
      }
      let num;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      _slicedToArray(tmp3, num);
    };
    return onInputValueChange(tmp(5621).TableSwitchRow, obj5, metadataField);
  }
}
function BlueskyMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.BLUESKY);
  obj = { children: null };
  obj = { fieldTextHook: require(1236) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked }), ];
  const obj1 = { fieldTextHook: require(1236) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["5I4mVS"], metadataField: closure_7.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  obj[0] = items;
  return callback3(closure_14, obj);
}
function SteamMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.STEAM);
  obj = { children: null };
  obj = { fieldTextHook: require(1236) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t.zVJxqj, metadataField: closure_7.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: require(1236) /* getSystemLocale */.t.zVJxqj, metadataField: closure_7.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["ZCNdD/"], metadataField: closure_7.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: require(1236) /* getSystemLocale */.t["ZCNdD/"], metadataField: closure_7.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["MCHnK+"], metadataField: closure_7.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_TF2), platform: value, onConfigurationChange, locked });
  obj[0] = items;
  return callback3(closure_14, obj);
}
function TwitterMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.TWITTER);
  obj = { children: null };
  obj = { fieldTextHook: require(1236) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: require(1236) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["+NFH7k"], metadataField: closure_7.TWITTER_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  const obj3 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl.string(require(1236) /* getSystemLocale */.t.E2iT8K);
  obj3[1] = closure_7.TWITTER_VERIFIED;
  obj3[2] = configMetadataMap.get(closure_7.TWITTER_VERIFIED);
  obj3[3] = value;
  obj3[4] = onConfigurationChange;
  obj3[5] = locked;
  items[3] = callback2(BooleanConfigRule, obj3);
  obj[0] = items;
  return callback3(closure_14, obj);
}
function RedditMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.REDDIT);
  obj = { children: null };
  obj = { fieldTextHook: require(1236) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t.TLgZhv, metadataField: closure_7.REDDIT_TOTAL_KARMA, existingPendingConfiguration: configMetadataMap.get(closure_7.REDDIT_TOTAL_KARMA), platform: value, onConfigurationChange, locked }), , ];
  const obj2 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl.string(require(1236) /* getSystemLocale */.t["0cKdka"]);
  obj2[1] = closure_7.REDDIT_MOD;
  obj2[2] = configMetadataMap.get(closure_7.REDDIT_MOD);
  obj2[3] = value;
  obj2[4] = onConfigurationChange;
  obj2[5] = locked;
  items[2] = callback2(BooleanConfigRule, obj2);
  const obj3 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl2.string(require(1236) /* getSystemLocale */.t.kCAN58);
  obj3[1] = closure_7.REDDIT_GOLD;
  obj3[2] = configMetadataMap.get(closure_7.REDDIT_GOLD);
  obj3[3] = value;
  obj3[4] = onConfigurationChange;
  obj3[5] = locked;
  items[3] = callback2(BooleanConfigRule, obj3);
  obj[0] = items;
  return callback3(closure_14, obj);
}
function PaypalMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.PAYPAL);
  obj = { children: null };
  obj = { fieldTextHook: require(1236) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), ];
  const obj1 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl.string(require(1236) /* getSystemLocale */.t["0JyE8I"]);
  obj1[1] = closure_7.PAYPAL_VERIFIED;
  obj1[2] = configMetadataMap.get(closure_7.PAYPAL_VERIFIED);
  obj1[3] = value;
  obj1[4] = onConfigurationChange;
  obj1[5] = locked;
  items[1] = callback2(BooleanConfigRule, obj1);
  obj[0] = items;
  return callback3(closure_14, obj);
}
function EbayMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.EBAY);
  obj = { children: null };
  obj = { fieldTextHook: require(1236) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t.oTFOe5, metadataField: closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked }), , , ];
  const obj1 = { fieldTextHook: require(1236) /* getSystemLocale */.t.oTFOe5, metadataField: closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["v5a2+Q"], metadataField: closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: require(1236) /* getSystemLocale */.t["v5a2+Q"], metadataField: closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t.yYbR2r, metadataField: closure_7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked, operator: constants.LESS_THAN });
  const obj4 = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl.string(require(1236) /* getSystemLocale */.t["39wASN"]);
  obj4[1] = closure_7.EBAY_TOP_RATED_SELLER;
  obj4[2] = configMetadataMap.get(closure_7.EBAY_TOP_RATED_SELLER);
  obj4[3] = value;
  obj4[4] = onConfigurationChange;
  obj4[5] = locked;
  items[4] = callback2(BooleanConfigRule, obj4);
  obj[0] = items;
  return callback3(closure_14, obj);
}
function TikTokMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4937);
  const value = obj.get(PlatformTypes.TIKTOK);
  obj = { children: null };
  obj = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.E2iT8K);
  obj[1] = closure_7.TIKTOK_VERIFIED;
  obj[2] = configMetadataMap.get(closure_7.TIKTOK_VERIFIED);
  obj[3] = value;
  obj[4] = onConfigurationChange;
  obj[5] = locked;
  const items = [callback2(BooleanConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: require(1236) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t.JHEsYw, metadataField: closure_7.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: require(1236) /* getSystemLocale */.t.JHEsYw, metadataField: closure_7.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: require(1236) /* getSystemLocale */.t.tEFCYA, metadataField: closure_7.TIKTOK_LIKES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_LIKES_COUNT), platform: value, onConfigurationChange, locked });
  obj[0] = items;
  return callback3(closure_14, obj);
}
function ApplicationMetadataRules(arg0) {
  let dependencyMap;
  let importDefault;
  let integration;
  let require;
  ({ configMetadataMap: require, onConfigurationChange: importDefault, locked: dependencyMap, integration } = arg0);
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        type = type.type;
        if (outer1_9.INTEGER_LESS_THAN_EQUAL !== type) {
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
                    let LESS_THAN = outer1_8.NOT_EQUAL;
                  }
                }
                LESS_THAN = outer1_8.EQUAL;
              }
            }
            LESS_THAN = outer1_8.GREATER_THAN;
          }
          const type2 = type.type;
          if (tmp.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (tmp.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (tmp.INTEGER_EQUAL !== type2) {
                if (tmp.INTEGER_NOT_EQUAL !== type2) {
                  if (tmp.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (tmp.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      let obj = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null, operator: null, applicationId: null };
                      ({ description: obj[0], key: obj[1] } = type);
                      obj[2] = store.get(type.key);
                      obj[4] = closure_1;
                      obj[5] = closure_2;
                      obj[6] = LESS_THAN;
                      const application = integration.application;
                      let id;
                      if (application != null) {
                        id = application.id;
                      }
                      obj[7] = id;
                      return outer1_12(outer1_17, obj, type.key);
                    }
                  }
                }
              }
            }
          }
          obj = { fieldText: null, metadataField: null, existingPendingConfiguration: null, platform: null, onConfigurationChange: null, locked: null, operator: null, applicationId: null };
          ({ description: obj2[0], key: obj2[1] } = type);
          obj[2] = store.get(type.key);
          obj[4] = closure_1;
          obj[5] = closure_2;
          obj[6] = LESS_THAN;
          const application2 = integration.application;
          let id1;
          if (application2 != null) {
            id1 = application2.id;
          }
          obj[7] = id1;
          return outer1_12(outer1_18, obj, type.key);
        }
        LESS_THAN = outer1_8.LESS_THAN;
      });
    }
  }
  return mapped;
}
({ MetadataFields: error, OperatorTypes: metroImportAll, MetadataItemTypes: c9, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: c10, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: unpackModuleId } = OperatorTypes);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { numericalInputContainerIOSInline: { marginTop: -2 }, numericalInputContainerAndroidInline: { transform: items }, numericalInputContainerBase: null, numericalInput: null, appNumericalInput: null, appNumericalInputContainer: null, appNumericalInputText: null, numericalInputDisabled: null, metadataRow: null, metadataRowText: null };
items = [{ translateY: 10 }];
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.sm };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: 54, height: 32, borderRadius: require("Themes").radii.xs, paddingHorizontal: 4, paddingVertical: 0, marginTop: -4 };
let obj1 = { width: 54, height: 32, borderRadius: require("Themes").radii.xs, paddingHorizontal: 4, paddingVertical: 0, marginTop: -4 };
createCacheKey[4] = { width: 54, height: 32, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs, paddingHorizontal: 8, paddingVertical: 0, marginRight: 8 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center" };
createCacheKey[6] = { flexShrink: 1 };
let obj2 = { width: 54, height: 32, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs, paddingHorizontal: 8, paddingVertical: 0, marginRight: 8 };
createCacheKey[7] = { color: require("Themes").colors.TEXT_MUTED };
createCacheKey[8] = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
createCacheKey[9] = { lineHeight: 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { color: require("Themes").colors.TEXT_MUTED };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx");

export default function GuildSettingsRoleEditConnectionConfiguration(configurationItems) {
  let integrations;
  let locked;
  configurationItems = configurationItems.configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  let applicationId;
  let c3;
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
    if (configurationItems[0].configuration.connectionType === closure_11) {
      let obj = { hasIcons: true, children: null };
      obj = { platform: null, integration: "a", applicationId: 1802240002, onRemove: 21168131, locked: -268434591 };
      obj[2] = applicationId;
      obj[3] = function onRemove() {
        return onConfigurationChange(null, configurationItems[0].index);
      };
      obj[4] = locked;
      obj[1] = callback2(Header, obj);
      return callback2(configurationItems(applicationId[22]).TableRowGroup, obj);
    } else {
      try {
        obj = onConfigurationChange(applicationId[21]);
        const value = obj.get(configurationItems[0].configuration.connectionType);
        const _Map = Map;
        map = new Map();
        const item = configurationItems.forEach((configuration) => {
          if (null != configuration.configuration.connectionMetadataField) {
            const result = map.set(configuration.configuration.connectionMetadataField, configuration);
          } else {
            if (tmp) {
              let _slicedToArray = configuration;
            }
            tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
          }
        });
        const obj1 = { configMetadataMap: null, onConfigurationChange: null, locked: null };
        obj1[0] = map;
        obj1[1] = onConfigurationChange;
        obj1[2] = locked;
        let type;
        if (value != null) {
          type = value.type;
        }
        if (PlatformTypes.STEAM === type) {
          const obj2 = {};
          const merged = Object.assign(obj1);
          let tmp21 = callback2(SteamMetadataRules, obj2);
          let tmp22 = callback2;
        } else if (tmp15.TWITTER === type) {
          const obj3 = {};
          const merged1 = Object.assign(obj1);
          tmp21 = callback2(TwitterMetadataRules, obj3);
          tmp22 = callback2;
        } else if (tmp15.REDDIT === type) {
          const obj4 = {};
          const merged2 = Object.assign(obj1);
          tmp21 = callback2(RedditMetadataRules, obj4);
          tmp22 = callback2;
        } else if (tmp15.BLUESKY === type) {
          const obj5 = {};
          const merged3 = Object.assign(obj1);
          tmp21 = callback2(BlueskyMetadataRules, obj5);
          tmp22 = callback2;
        } else if (tmp15.PAYPAL === type) {
          const obj6 = {};
          const merged4 = Object.assign(obj1);
          tmp21 = callback2(PaypalMetadataRules, obj6);
          tmp22 = callback2;
        } else if (tmp15.EBAY === type) {
          const obj7 = {};
          const merged5 = Object.assign(obj1);
          tmp21 = callback2(EbayMetadataRules, obj7);
          tmp22 = callback2;
        } else if (tmp15.TIKTOK === type) {
          const obj8 = {};
          const merged6 = Object.assign(obj1);
          tmp21 = callback2(TikTokMetadataRules, obj8);
          tmp22 = callback2;
        } else {
          const obj9 = {};
          const merged7 = Object.assign(obj1);
          obj9.integration = tmp;
          tmp21 = callback2(ApplicationMetadataRules, obj9);
          tmp22 = callback2;
        }
        const obj10 = { hasIcons: true, children: null };
        const obj11 = { platform: null, integration: null, onRemove: null, locked: null };
        obj11[0] = value;
        obj11[1] = tmp;
        obj11[2] = function onRemove() {
          return onConfigurationChange(null, _undefined.index);
        };
        obj11[3] = locked;
        const items = [tmp22(Header, obj11), tmp21];
        obj10[1] = items;
        return callback3(configurationItems(applicationId[22]).TableRowGroup, obj10);
      } catch (err) {
      }
    }
  }
};