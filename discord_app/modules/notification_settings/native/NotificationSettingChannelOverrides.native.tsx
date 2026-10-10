// === Module 18557: NotificationSettingChannelOverrides ===

// Module 18557 (NotificationSettingChannelOverrides)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4828 */;
import useChannelName from "useChannelName" /* 5421 */;
import fuzzysearchDefault from "fuzzysearch" /* 6094 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6801 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6800 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const isGuildReadableType = fn(2069).isGuildReadableType;
const Constants = fn(1085);
({ ChannelTypes: c10, NotificationSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5092);
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
              class Q {
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
              class F {
                constructor() {
                  if (null != closure_3) {
                    str = "";
                    if ("" !== tmp) {
                      tmp14 = channels;
                      length = channels.length;
                      num = 0;
                      if (length > 0) {
                        tmp7 = closure_0;
                        tmp8 = closure_2;
                        intl2 = closure_0(closure_2[18]).intl;
                        tmp9 = closure_0;
                        tmp10 = closure_2;
                        obj = { count: null };
                        obj.count = length;
                        formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                      } else {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        intl = closure_0(closure_2[18]).intl;
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                      }
                      tmp11 = closure_0;
                      tmp12 = closure_2;
                      AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                      announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
                    }
                  }
                  return;
                }
              }
              if (cResult[24] === channels.length) {
                if (cResult[25] === insets) {
                  if (cResult[26] === tmp19) {
                    if (cResult[27] === tmp20) {
                      if (cResult[28] === tmp21) {
                        if (cResult[29] === sections) {
                          if (cResult[31] === tmp4.container) {
                            if (cResult[32] === tmp23) {
                              if (cResult[33] === tmp24) {
                                let tmp31 = cResult[34];
                              }
                              return tmp31;
                            }
                          }
                          class Q {
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
                          class F {
                            constructor() {
                              if (null != closure_3) {
                                str = "";
                                if ("" !== tmp) {
                                  tmp14 = channels;
                                  length = channels.length;
                                  num = 0;
                                  if (length > 0) {
                                    tmp7 = closure_0;
                                    tmp8 = closure_2;
                                    intl2 = closure_0(closure_2[18]).intl;
                                    tmp9 = closure_0;
                                    tmp10 = closure_2;
                                    obj = { count: null };
                                    obj.count = length;
                                    formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                                  } else {
                                    tmp2 = closure_0;
                                    tmp3 = closure_2;
                                    intl = closure_0(closure_2[18]).intl;
                                    tmp4 = closure_0;
                                    tmp5 = closure_2;
                                    formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                                  }
                                  tmp11 = closure_0;
                                  tmp12 = closure_2;
                                  AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                                  announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
                                }
                              }
                              return;
                            }
                          }
                          const items2 = [tmp23, cResult[30]];
                          tmp34[1] = items2;
                          const tmp35 = closure_13(View, tmp34);
                          cResult[31] = tmp4.container;
                          cResult[32] = tmp23;
                          cResult[33] = cResult[30];
                          cResult[34] = tmp35;
                          tmp31 = tmp35;
                        }
                      }
                    }
                  }
                }
              }
              if (0 === channels.length) {
                let obj2 = { Illustration: tmp(stringResult[27]).NoResults, title: null, body: null };
                class Q {
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
                class F {
                  constructor() {
                    if (null != closure_3) {
                      str = "";
                      if ("" !== tmp) {
                        tmp14 = channels;
                        length = channels.length;
                        num = 0;
                        if (length > 0) {
                          tmp7 = closure_0;
                          tmp8 = closure_2;
                          intl2 = closure_0(closure_2[18]).intl;
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          obj = { count: null };
                          obj.count = length;
                          formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                        } else {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          intl = closure_0(closure_2[18]).intl;
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                        }
                        tmp11 = closure_0;
                        tmp12 = closure_2;
                        AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                        announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
                      }
                    }
                    return;
                  }
                }
                obj2.title = tmp29(tmp(stringResult[18]).t.wM7uRI);
                let intl = tmp(stringResult[18]).intl;
                stringResult = intl.string(tmp(stringResult[18]).t.f5cMAg);
                obj2.body = stringResult;
                let tmp26 = closure_12(tmp(stringResult[26]).EmptyState, obj2);
              } else {
                const obj4 = { sections, renderItem: tmp20, itemSize: null, insetEnd: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true };
                class Q {
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
                class F {
                  constructor() {
                    if (null != closure_3) {
                      str = "";
                      if ("" !== tmp) {
                        tmp14 = channels;
                        length = channels.length;
                        num = 0;
                        if (length > 0) {
                          tmp7 = closure_0;
                          tmp8 = closure_2;
                          intl2 = closure_0(closure_2[18]).intl;
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          obj = { count: null };
                          obj.count = length;
                          formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                        } else {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          intl = closure_0(closure_2[18]).intl;
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                        }
                        tmp11 = closure_0;
                        tmp12 = closure_2;
                        AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                        announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
                      }
                    }
                    return;
                  }
                }
                obj4.placeholderConfig = tmp21;
                tmp26 = closure_12(tmp9(stringResult[28]), obj4);
              }
              channels = channels.length;
              cResult[24] = channels;
              cResult[25] = insets;
              cResult[26] = tmp19;
              cResult[27] = tmp20;
              cResult[28] = tmp21;
              cResult[29] = sections;
              cResult[30] = tmp26;
            }
            class Q {
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
            class F {
              constructor() {
                if (null != closure_3) {
                  str = "";
                  if ("" !== tmp) {
                    tmp14 = channels;
                    length = channels.length;
                    num = 0;
                    if (length > 0) {
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      intl2 = closure_0(closure_2[18]).intl;
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      obj = { count: null };
                      obj.count = length;
                      formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                    } else {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      intl = closure_0(closure_2[18]).intl;
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                    }
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                    announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
                  }
                }
                return;
              }
            }
            cResult[18] = channels;
            cResult[19] = navigation;
            cResult[20] = Q;
            tmp20 = Q;
          }
          const items3 = [channels, ];
          class F {
            constructor() {
              if (null != closure_3) {
                str = "";
                if ("" !== tmp) {
                  tmp14 = channels;
                  length = channels.length;
                  num = 0;
                  if (length > 0) {
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    intl2 = closure_0(closure_2[18]).intl;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    obj = { count: null };
                    obj.count = length;
                    formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    intl = closure_0(closure_2[18]).intl;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                  }
                  tmp11 = closure_0;
                  tmp12 = closure_2;
                  AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                  announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
                }
              }
              return;
            }
          }
          cResult[15] = channels;
          cResult[16] = first1;
          cResult[17] = items3;
          tmp17 = items3;
        }
        class F {
          constructor() {
            if (null != closure_3) {
              str = "";
              if ("" !== tmp) {
                tmp14 = channels;
                length = channels.length;
                num = 0;
                if (length > 0) {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  intl2 = closure_0(closure_2[18]).intl;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  obj = { count: null };
                  obj.count = length;
                  formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[18]).t.ZGVL3g, obj);
                } else {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  intl = closure_0(closure_2[18]).intl;
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  formatToPlainStringResult = intl.string(closure_0(closure_2[18]).t.f5cMAg);
                }
                tmp11 = closure_0;
                tmp12 = closure_2;
                AccessibilityAnnouncer = closure_0(closure_2[19]).AccessibilityAnnouncer;
                announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
              }
            }
            return;
          }
        }
        cResult[12] = channels.length;
        cResult[13] = first1;
        cResult[14] = F;
        tmp16 = F;
      }
      const obj5 = { channels: null, sections: null };
      cResult[9] = cResult[5];
      cResult[10] = tmp14;
      cResult[11] = obj5;
      tmp15 = obj5;
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
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildCategoryStore.getCategories(_require));
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
  obj3.children = closure_12(require("SearchField").SearchField, obj4);
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