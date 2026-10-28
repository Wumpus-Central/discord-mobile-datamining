// === Module 19659: NotificationSettingChannelOverrides ===

// Module 19659 (NotificationSettingChannelOverrides)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5013 */;
import useChannelName from "useChannelName" /* 5640 */;
import fuzzysearchDefault from "fuzzysearch" /* 6863 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7244 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7243 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const isGuildReadableType = fn(4860).isGuildReadableType;
const Constants = fn(1084);
({ ChannelTypes: c10, NotificationSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5004);
let obj = { container: { marginHorizontal: nativeDefault.space.PX_8, flex: 1 }, searchContainer: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_8, flex: 1 };
obj.searchContainer = { paddingVertical: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingChannelOverrides(guildId) {
  let stringResult = stateFromStores;
  const cResult = guildId(stateFromStores[12]).c(35);
  guildId = guildId.guildId;
  const navigation = guildId.navigation;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildCategoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      return GuildCategoryStore.getCategories(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = guildId(stateFromStores[12]);
  stateFromStores = guildId(stringResult[13]).useStateFromStores(first, tmp7);
  const insets = navigation(stringResult[14])().insets;
  let obj3 = channels;
  const tmpResult = guildId(stringResult[13]);
  first1 = first1(channels.useState(""), 2)[0];
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === first1) {
      if (cResult[7] !== cResult[5].length) {
        const items1 = [arr2.length];
        cResult[7] = arr2.length;
        cResult[8] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === cResult[5]) {
        if (cResult[10] === tmp14) {
          let tmp15 = cResult[11];
        }
        channels = tmp15.channels;
        const sections = tmp15.sections;
        if (cResult[12] === channels.length) {
          if (cResult[13] === first1) {
            let tmp16 = cResult[14];
          }
          if (cResult[15] === channels) {
            if (cResult[16] === first1) {
              let tmp17 = cResult[17];
            }
            const effect = obj3.useEffect(tmp16, tmp17);
            const tmp19 = tmp9(stringResult[20])();
            if (cResult[18] === channels) {
              if (cResult[19] === navigation) {
                let tmp20 = cResult[20];
              }
              const tmp21 = tmp9(stringResult[24])();
              const _Symbol = Symbol;
              class B {
                constructor(arg0, arg1) {
                  tmp = channels[arg1];
                  closure_0 = tmp;
                  obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                  obj1 = { IconComponent: null };
                  obj3 = guildId(closure_2[23]);
                  obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                  obj.icon = closure_1_12(guildId(closure_2[22]).TableRowIcon, obj1);
                  obj.start = 0 === arg1;
                  obj.end = arg1 === channels.length - 1;
                  obj4 = guildId(closure_2[16]);
                  obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                  obj.onPress = function onPress() {
                    navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
                  };
                  return closure_1_12(guildId(closure_2[21]).TableRow, obj);
                }
              }
              if (cResult[22] !== tmp4.searchContainer) {
                let obj2 = { style: tmp4.searchContainer, children: null };
                class B {
                  constructor(arg0, arg1) {
                    tmp = channels[arg1];
                    closure_0 = tmp;
                    obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                    obj1 = { IconComponent: null };
                    obj3 = guildId(closure_2[23]);
                    obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                    obj.icon = closure_1_12(guildId(closure_2[22]).TableRowIcon, obj1);
                    obj.start = 0 === arg1;
                    obj.end = arg1 === channels.length - 1;
                    obj4 = guildId(closure_2[16]);
                    obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                    obj.onPress = function onPress() {
                      navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
                    };
                    return closure_1_12(guildId(closure_2[21]).TableRow, obj);
                  }
                }
                const tmp26 = closure_12(View, obj2);
                cResult[22] = tmp4.searchContainer;
                cResult[23] = tmp26;
                let tmp23 = tmp26;
              } else {
                tmp23 = cResult[23];
              }
              if (cResult[24] === channels.length) {
                if (cResult[25] === insets) {
                  if (cResult[26] === tmp19) {
                    if (cResult[27] === tmp20) {
                      if (cResult[28] === tmp21) {
                        if (cResult[29] === sections) {
                          if (cResult[31] === tmp4.container) {
                            if (cResult[32] === tmp23) {
                              if (cResult[33] === tmp27) {
                                let tmp32 = cResult[34];
                              }
                              return tmp32;
                            }
                          }
                          class B {
                            constructor(arg0, arg1) {
                              tmp = channels[arg1];
                              closure_0 = tmp;
                              obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                              obj1 = { IconComponent: null };
                              obj3 = guildId(closure_2[23]);
                              obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                              obj.icon = closure_1_12(guildId(closure_2[22]).TableRowIcon, obj1);
                              obj.start = 0 === arg1;
                              obj.end = arg1 === channels.length - 1;
                              obj4 = guildId(closure_2[16]);
                              obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                              obj.onPress = function onPress() {
                                navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
                              };
                              return closure_1_12(guildId(closure_2[21]).TableRow, obj);
                            }
                          }
                          tmp35[0] = tmp4.container;
                          const items2 = [tmp23, cResult[30]];
                          tmp35[1] = items2;
                          const tmp36 = closure_13(View, tmp35);
                          cResult[31] = tmp4.container;
                          cResult[32] = tmp23;
                          cResult[33] = cResult[30];
                          cResult[34] = tmp36;
                          tmp32 = tmp36;
                        }
                      }
                    }
                  }
                }
              }
              if (0 === channels.length) {
                const obj4 = { Illustration: tmp(stringResult[27]).NoResults, title: null, body: null };
                class B {
                  constructor(arg0, arg1) {
                    tmp = channels[arg1];
                    closure_0 = tmp;
                    obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                    obj1 = { IconComponent: null };
                    obj3 = guildId(closure_2[23]);
                    obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                    obj.icon = closure_1_12(guildId(closure_2[22]).TableRowIcon, obj1);
                    obj.start = 0 === arg1;
                    obj.end = arg1 === channels.length - 1;
                    obj4 = guildId(closure_2[16]);
                    obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                    obj.onPress = function onPress() {
                      navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
                    };
                    return closure_1_12(guildId(closure_2[21]).TableRow, obj);
                  }
                }
                obj4.title = obj8.string(tmp(stringResult[18]).t.wM7uRI);
                let intl = tmp(stringResult[18]).intl;
                stringResult = intl.string(tmp(stringResult[18]).t.f5cMAg);
                obj4.body = stringResult;
                let tmp29 = closure_12(tmp(stringResult[26]).EmptyState, obj4);
              } else {
                const obj5 = { sections, renderItem: tmp20, itemSize: null, insetEnd: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true };
                class B {
                  constructor(arg0, arg1) {
                    tmp = channels[arg1];
                    closure_0 = tmp;
                    obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                    obj1 = { IconComponent: null };
                    obj3 = guildId(closure_2[23]);
                    obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                    obj.icon = closure_1_12(guildId(closure_2[22]).TableRowIcon, obj1);
                    obj.start = 0 === arg1;
                    obj.end = arg1 === channels.length - 1;
                    obj4 = guildId(closure_2[16]);
                    obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                    obj.onPress = function onPress() {
                      navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
                    };
                    return closure_1_12(guildId(closure_2[21]).TableRow, obj);
                  }
                }
                obj5.insetEnd = insets.bottom;
                obj5.placeholderConfig = tmp21;
                tmp29 = closure_12(tmp9(stringResult[28]), obj5);
              }
              channels = channels.length;
              cResult[24] = channels;
              cResult[25] = insets;
              cResult[26] = tmp19;
              cResult[27] = tmp20;
              cResult[28] = tmp21;
              cResult[29] = sections;
              cResult[30] = tmp29;
            }
            class B {
              constructor(arg0, arg1) {
                tmp = channels[arg1];
                closure_0 = tmp;
                obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                obj1 = { IconComponent: null };
                obj3 = guildId(closure_2[23]);
                obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                obj.icon = closure_1_12(guildId(closure_2[22]).TableRowIcon, obj1);
                obj.start = 0 === arg1;
                obj.end = arg1 === channels.length - 1;
                obj4 = guildId(closure_2[16]);
                obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                obj.onPress = function onPress() {
                  navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
                };
                return closure_1_12(guildId(closure_2[21]).TableRow, obj);
              }
            }
            cResult[18] = channels;
            cResult[19] = navigation;
            cResult[20] = B;
            tmp20 = B;
          }
          const items3 = [channels, ];
          cResult[15] = channels;
          cResult[16] = first1;
          cResult[17] = items3;
          tmp17 = items3;
        }
        const fn2 = function x() {
          if (null != first1) {
            if ("" !== tmp) {
              if (channels.length > 0) {
                const intl2 = util.intl;
                const obj = { count: length };
                let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
              } else {
                const intl = util.intl;
                formatToPlainStringResult = intl.string(util.t.f5cMAg);
              }
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(formatToPlainStringResult);
            }
          }
        };
        cResult[12] = channels.length;
        cResult[13] = first1;
        cResult[14] = fn2;
        tmp16 = fn2;
      }
      const obj6 = { channels: null, sections: tmp14 };
      cResult[9] = cResult[5];
      cResult[10] = tmp14;
      cResult[11] = obj6;
      tmp15 = obj6;
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(arg0) {
        return guildId.channel;
      }
    }
    cResult[6] = L;
  } else {
    class L {
      constructor(arg0) {
        return guildId.channel;
      }
    }
  }
  const tmp10 = first1(channels.useState(""), 2);
  const mapped = navigation(stringResult[15])(stateFromStores._categories, stateFromStores, (channel) => {
    channel = channel.channel;
    let tmp = isGuildReadableType(channel.type);
    if (!tmp) {
      let tmp3 = channel.type === constants.GUILD_CATEGORY;
      if (tmp3) {
        tmp3 = null != stateFromStores[channel.id];
      }
      if (tmp3) {
        tmp3 = stateFromStores[channel.id].length > 0;
      }
      tmp = tmp3;
    }
    if (tmp) {
      if ("" !== first1) {
        if (null != first1) {
          const formatted = useChannelName.computeChannelName(channel, UserStore, RelationshipStore).toLowerCase();
          const str3 = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
          return fuzzysearchDefault(first1.toLowerCase(), formatted);
        }
      }
      return tmp;
    } else {
      return false;
    }
  }).map(L);
  cResult[3] = stateFromStores;
  cResult[4] = first1;
  cResult[5] = mapped;
  const arr3 = navigation(stringResult[15])(stateFromStores._categories, stateFromStores, (channel) => {
    channel = channel.channel;
    let tmp = isGuildReadableType(channel.type);
    if (!tmp) {
      let tmp3 = channel.type === constants.GUILD_CATEGORY;
      if (tmp3) {
        tmp3 = null != stateFromStores[channel.id];
      }
      if (tmp3) {
        tmp3 = stateFromStores[channel.id].length > 0;
      }
      tmp = tmp3;
    }
    if (tmp) {
      if ("" !== first1) {
        if (null != first1) {
          const formatted = useChannelName.computeChannelName(channel, UserStore, RelationshipStore).toLowerCase();
          const str3 = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
          return fuzzysearchDefault(first1.toLowerCase(), formatted);
        }
      }
      return tmp;
    } else {
      return false;
    }
  });
}) : (function NotificationSettingChannelOverrides(arg0) {
  ({ guildId: require, navigation } = arg0);
  let stateFromStores;
  let first;
  let channels;
  let tmp = closure_14();
  let items = [GuildCategoryStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildCategoryStore.getCategories(require));
  const tmp6 = first(channels.useState(""), 2);
  first = tmp6[0];
  const items1 = [stateFromStores, first];
  const memo = channels.useMemo(() => {
    const mapped = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = isGuildReadableType(channel.type);
      if (!tmp) {
        let tmp3 = channel.type === constants.GUILD_CATEGORY;
        if (tmp3) {
          tmp3 = null != dependencyMap[channel.id];
        }
        if (tmp3) {
          tmp3 = dependencyMap[channel.id].length > 0;
        }
        tmp = tmp3;
      }
      if (tmp) {
        if ("" !== first) {
          if (null != first) {
            const obj = require("useChannelName");
            const formatted = require("useChannelName").computeChannelName(channel, UserStore, RelationshipStore).toLowerCase();
            const str3 = require("useChannelName").computeChannelName(channel, UserStore, RelationshipStore);
            return navigation(stateFromStores[17])(first.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    }).map((channel) => channel.channel);
    let obj = { channels: mapped, sections: null };
    const items = [mapped.length];
    obj.sections = items;
    return obj;
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== tmp) {
        if (channels.length > 0) {
          const intl2 = util.intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
        } else {
          const intl = util.intl;
          formatToPlainStringResult = intl.string(util.t.f5cMAg);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  let obj = require("initialize");
  const callback = channels.useCallback((arg0, arg1) => {
    const id = tmp;
    const obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
    const obj2 = { IconComponent: require("utils/ChannelUtils").getChannelIconComponent(channels[arg1]) };
    obj.icon = closure_1_12(require("TableRowIcon").TableRowIcon, obj2);
    obj.start = 0 === arg1;
    obj.end = arg1 === channels.length - 1;
    const obj3 = require("utils/ChannelUtils");
    obj.label = require("useChannelName").computeChannelName(channels[arg1], UserStore, RelationshipStore);
    obj.onPress = function onPress() {
      navigation.push(constants2.CHANNEL_OVERRIDE, { channelId: id.id });
    };
    return closure_1_12(require("TableRow").TableRow, obj);
  }, items3);
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { style: tmp.searchContainer, children: null };
  const tmp10 = navigation(stateFromStores[20])();
  const obj4 = { placeholder: null, onChange: null };
  let intl = require("util").intl;
  obj4.placeholder = intl.string(require("util").t["5h0QOP"]);
  obj4.onChange = tmp6[1];
  obj3.children = closure_12(require("Search/SearchBar").SearchBar, obj4);
  const items4 = [closure_12(View, obj3), ];
  if (0 === channels.length) {
    const obj5 = { Illustration: require("generated/NoResults").NoResults, title: null, body: null };
    let intl2 = require("util").intl;
    obj5.title = intl2.string(require("util").t.wM7uRI);
    const intl3 = require("util").intl;
    obj5.body = intl3.string(require("util").t.f5cMAg);
    let tmp15Result = closure_12(require("native").EmptyState, obj5);
  } else {
    const obj6 = { sections: memo.sections, renderItem: callback, itemSize: tmp10, insetEnd: navigation(stateFromStores[14])().insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp12, wrapChildren: true };
    tmp15Result = closure_12(navigation(tmp3[28]), obj6);
  }
  items4[1] = tmp15Result;
  obj2.children = items4;
  return closure_13(View, obj2);
}));