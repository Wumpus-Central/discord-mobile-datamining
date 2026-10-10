// === Module 12554: ChannelNavbar ===

// Module 12554 (ChannelNavbar)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4938 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import useChannelName from "useChannelName" /* 5421 */;
import Pressables from "Pressables" /* 6184 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8158 */;
import isStreamingDefault from "isStreaming" /* 8384 */;
import ActivityStatusDefault from "ActivityStatus" /* 10234 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5757 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import TextStyles from "TextStyles" /* 5906 */;

require = fn;
const View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(2069).THREAD_CHANNEL_TYPES;
const Constants = fn(1085);
({ ChannelTypes: closure_12, Fonts } = Constants);
const StaticChannelRoute = fn(2072).StaticChannelRoute;
const DismissibleContentConstants = fn(2062);
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = DismissibleContentConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5092);
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" }, navbarTitlePrimaryText: null, navbarTitleSecondaryText: null, channelIcon: null, channelIconColor: null, homeIcon: null, premiumIcon: null, status: null, channelTextContainer: null, channelNameContainer: null, channelName: null, flexRow: null };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.flexShrink = 1;
obj.navbarTitlePrimaryText = obj3;
obj.navbarTitleSecondaryText = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj.channelIcon = { height: 18, width: 18, marginRight: 8 };
let obj4 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj.channelIconColor = { color: nativeDefault.colors.CHANNEL_ICON };
let size = { height: 20, width: 20, tintColor: nativeDefault.colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
obj.homeIcon = size;
obj.premiumIcon = { marginRight: 4 };
obj.status = { marginLeft: 1, marginTop: 4 };
obj.channelTextContainer = { flex: 1, flexGrow: 1 };
obj.channelNameContainer = { flexGrow: 1 };
obj.channelName = { textAlign: "left" };
obj.flexRow = { flexDirection: "row", alignItems: "center" };
let closure_18 = createStyles.createStyles(obj);
fn(558);
let obj5 = { color: nativeDefault.colors.CHANNEL_ICON };
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelTitleWithoutRoute(arg0) {
  const cResult = channelId(576).c(39);
  ({ onPressTitle, channelId } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    class C {
      constructor() {
        return closure_1_5.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = C;
    let tmp9 = C;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp8, tmp9);
  if (cResult[5] !== stateFromStores1) {
    const string = channelId(1126).intl.string;
    const t = channelId(1126).t;
    class C {
      constructor() {
        return closure_1_5.isConnected();
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = tmp12;
  } else {
    if (cResult[7] !== stateFromStores) {
      let channelIcon = null;
      if (null != stateFromStores) {
        channelIcon = channelId(8158).getChannelIcon(stateFromStores);
        const tmpResult5 = channelId(8158);
      }
      class C {
        constructor() {
          return closure_1_5.isConnected();
        }
      }
      cResult[8] = channelIcon;
      let tmp14 = channelIcon;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] !== stateFromStores) {
      if (null != stateFromStores) {
        channelId(5421);
        class C {
          constructor() {
            return closure_1_5.isConnected();
          }
        }
      }
      class C {
        constructor() {
          return closure_1_5.isConnected();
        }
      }
      cResult[10] = null;
      let tmp16 = tmp17;
    } else {
      tmp16 = cResult[10];
    }
    class C {
      constructor() {
        return closure_1_5.isConnected();
      }
    }
    let isDMResult;
    if (stateFromStores != null) {
      isDMResult = stateFromStores.isDM();
    }
    if (isDMResult) {
      if (cResult[11] !== stateFromStores) {
        const recipientId = stateFromStores.getRecipientId();
        cResult[11] = stateFromStores;
        class C {
          constructor() {
            return closure_1_5.isConnected();
          }
        }
        cResult[12] = recipientId;
        let tmp28 = recipientId;
      } else {
        tmp28 = cResult[12];
      }
      if (cResult[13] !== stateFromStores) {
        const isSystemDMResult = stateFromStores.isSystemDM();
        cResult[13] = stateFromStores;
        class C {
          constructor() {
            return closure_1_5.isConnected();
          }
        }
        cResult[14] = isSystemDMResult;
        let tmp30 = isSystemDMResult;
      } else {
        tmp30 = cResult[14];
      }
      if (cResult[15] === tmp4.navbarTitlePrimaryText) {
        if (cResult[16] === tmp28) {
          let tmp32 = cResult[17];
        }
        if (cResult[18] === tmp30) {
          if (cResult[19] === tmp4.status) {
            if (cResult[20] === tmp28) {
              let tmp35 = cResult[21];
            }
            if (cResult[22] === stateFromStores.guild_id) {
              if (cResult[23] === tmp28) {
                let tmp37 = cResult[24];
              }
              if (cResult[25] === tmp14) {
                if (cResult[26] === tmp32) {
                  if (cResult[27] === tmp37) {
                    if (cResult[28] === tmp35) {
                      let tmp40 = cResult[29];
                    }
                    if (cResult[30] === onPressTitle) {
                      if (cResult[31] === tmp40) {
                        let tmp43 = cResult[32];
                      }
                      return tmp43;
                    }
                    class C {
                      constructor() {
                        return closure_1_5.isConnected();
                      }
                    }
                    const obj2 = { onPressTitle, children: tmp40 };
                    const tmp45 = closure_16(closure_19, obj2);
                    cResult[30] = onPressTitle;
                    cResult[31] = tmp40;
                    cResult[32] = tmp45;
                    tmp43 = tmp45;
                  }
                }
              }
              class C {
                constructor() {
                  return closure_1_5.isConnected();
                }
              }
              const obj3 = { title: tmp32, icon: tmp14, titleSuffix: tmp35, subTitle: tmp37 };
              const tmp42 = closure_16(closure_20, obj3);
              cResult[25] = tmp14;
              cResult[26] = tmp32;
              cResult[27] = tmp37;
              cResult[28] = tmp35;
              cResult[29] = tmp42;
              tmp40 = tmp42;
            }
            class C {
              constructor() {
                return closure_1_5.isConnected();
              }
            }
            const obj4 = { userId: tmp28, guildId: stateFromStores.guild_id };
            const tmp39 = closure_16(ActivityStatusDefault, obj4);
            cResult[22] = stateFromStores.guild_id;
            cResult[23] = tmp28;
            cResult[24] = tmp39;
            tmp37 = tmp39;
          }
        }
        class C {
          constructor() {
            return closure_1_5.isConnected();
          }
        }
        cResult[18] = tmp30;
        cResult[19] = tmp4.status;
        cResult[20] = tmp28;
        cResult[21] = null;
        tmp35 = tmp36;
      }
      class C {
        constructor() {
          return closure_1_5.isConnected();
        }
      }
      const obj5 = { userId: tmp28, style: tmp4.navbarTitlePrimaryText };
      const tmp34 = closure_16(closure_22, obj5);
      cResult[15] = tmp4.navbarTitlePrimaryText;
      cResult[16] = tmp28;
      cResult[17] = tmp34;
      tmp32 = tmp34;
    } else {
      if (tmp16 == null) {
        tmp16 = cResult[6];
      }
      if (cResult[33] === tmp14) {
        if (cResult[34] === tmp16) {
          let tmp22 = cResult[35];
        }
        if (cResult[36] === onPressTitle) {
          if (cResult[37] === tmp22) {
            let tmp25 = cResult[38];
          }
          return tmp25;
        }
        class C {
          constructor() {
            return closure_1_5.isConnected();
          }
        }
        const obj6 = { onPressTitle, children: tmp22 };
        const tmp27 = closure_16(closure_19, obj6);
        cResult[36] = onPressTitle;
        cResult[37] = tmp22;
        cResult[38] = tmp27;
        tmp25 = tmp27;
      }
      class C {
        constructor() {
          return closure_1_5.isConnected();
        }
      }
      const obj7 = { title: tmp16, icon: tmp14 };
      const tmp24 = closure_16(closure_20, obj7);
      cResult[33] = tmp14;
      cResult[34] = tmp16;
      cResult[35] = tmp24;
      tmp22 = tmp24;
    }
  }
  const tmpResult4 = channelId(504);
}) : (function ChannelTitleWithoutRoute(arg0) {
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = closure_18();
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => connected.isConnected());
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (stateFromStores1) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    channelIcon = utils_ChannelUtils.getChannelIcon(stateFromStores);
    const tmp2Result = utils_ChannelUtils;
  }
  let channelName = null;
  if (null != stateFromStores) {
    channelName = useChannelName.computeChannelName(stateFromStores, UserStore, RelationshipStore);
    const tmp2Result2 = useChannelName;
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    const recipientId = stateFromStores.getRecipientId();
    const obj2 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
    let tmp16Result = null;
    const isSystemDMResult = stateFromStores.isSystemDM();
    if (!isSystemDMResult) {
      const obj4 = { userId: recipientId, style: tmp.status };
      tmp16Result = closure_16(closure_23, obj4);
    }
    const obj5 = { userId: recipientId, guildId: stateFromStores.guild_id };
    const obj6 = { onPressTitle, children: null };
    const obj7 = { title: closure_16(closure_22, obj2), icon: channelIcon, titleSuffix: tmp16Result, subTitle: closure_16(ActivityStatusDefault, obj5) };
    obj6.children = closure_16(closure_20, obj7);
    return closure_16(closure_19, obj6);
  } else {
    const obj8 = { onPressTitle, children: null };
    if (channelName == null) {
      channelName = stringResult;
    }
    const obj9 = { title: channelName, icon: channelIcon };
    obj8.children = closure_16(closure_20, obj9);
    return closure_16(closure_19, obj8);
  }
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ children, onPressTitle, style } = arg0);
  const tmp4 = closure_18();
  if (null == onPressTitle) {
    if (cResult[0] === style) {
      if (cResult[1] === tmp4.navbarTitleContainer) {
        let tmp11 = cResult[2];
      }
      if (cResult[3] === children) {
      }
      const obj2 = { style: tmp11, children };
      const tmp15 = value3(View, obj2);
      cResult[3] = children;
      cResult[4] = tmp11;
      cResult[5] = tmp15;
    }
    const items = [tmp4.navbarTitleContainer, style];
    cResult[0] = style;
    cResult[1] = tmp4.navbarTitleContainer;
    cResult[2] = items;
    tmp11 = items;
  } else {
    if (cResult[6] === style) {
      if (cResult[7] === tmp4.navbarTitleContainer) {
        let tmp5 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return null;
        };
        cResult[9] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[9];
      }
      if (cResult[10] === children) {
        if (cResult[11] === onPressTitle) {
          if (cResult[12] === tmp5) {
            let tmp8 = cResult[13];
          }
          return tmp8;
        }
      }
      const obj3 = { style: tmp5, accessibilityRole: "header", onPress: onPressTitle, onAccessibilityTap: tmp7, children };
      const tmp10 = value3(Pressables.PressableOpacity, obj3);
      cResult[10] = children;
      cResult[11] = onPressTitle;
      cResult[12] = tmp5;
      cResult[13] = tmp10;
      tmp8 = tmp10;
    }
    const items1 = [tmp4.navbarTitleContainer, style];
    cResult[6] = style;
    cResult[7] = tmp4.navbarTitleContainer;
    cResult[8] = items1;
    tmp5 = items1;
  }
}) : ((arg0) => {
  ({ children, onPressTitle, style } = arg0);
  const tmp = closure_18();
  if (null == onPressTitle) {
    const obj2 = { style: null, children: null };
    const items = [tmp.navbarTitleContainer, style];
    obj2.style = items;
    obj2.children = children;
    let tmp5 = value3(View, obj2);
  } else {
    const obj = { style: null, accessibilityRole: "header", onPress: null, onAccessibilityTap: null, children: null };
    const items1 = [tmp.navbarTitleContainer, style];
    obj.style = items1;
    obj.onPress = onPressTitle;
    obj.onAccessibilityTap = function onAccessibilityTap() {
      return null;
    };
    obj.children = children;
    tmp5 = value3(Pressables.PressableOpacity, obj);
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelTitleContent(arg0) {
  const cResult = c.c(21);
  ({ title, icon: channelIconColor, titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp4 = closure_18();
  if (null == channelIconColor) {
    if (cResult[4] === accessibleTitle) {
      if (cResult[5] === tmp4.channelName) {
        if (cResult[6] === tmp4.channelNameContainer) {
          if (cResult[7] === title) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === tmp10) {
            if (cResult[10] === tmp4.flexRow) {
              if (cResult[11] === titleSuffix) {
                let tmp15 = cResult[12];
              }
              if (cResult[13] === tmp4.channelTextContainer) {
                if (cResult[14] === subTitle) {
                  if (cResult[15] === tmp15) {
                    let tmp19 = cResult[16];
                  }
                  if (cResult[17] === null) {
                    if (cResult[18] === tmp4.flexRow) {
                      if (cResult[19] === tmp19) {
                        let tmp23 = cResult[20];
                      }
                      return tmp23;
                    }
                  }
                  const obj2 = { style: tmp4.flexRow, children: null };
                  const items = [null, tmp19];
                  obj2.children = items;
                  const tmp26 = constants(View, obj2);
                  cResult[17] = null;
                  cResult[18] = tmp4.flexRow;
                  cResult[19] = tmp19;
                  cResult[20] = tmp26;
                  tmp23 = tmp26;
                }
              }
              const obj3 = { style: tmp4.channelTextContainer, children: null };
              const items1 = [tmp15, subTitle];
              obj3.children = items1;
              const tmp22 = constants(View, obj3);
              cResult[13] = tmp4.channelTextContainer;
              cResult[14] = subTitle;
              cResult[15] = tmp15;
              cResult[16] = tmp22;
              tmp19 = tmp22;
            }
          }
          const obj4 = { style: tmp4.flexRow, children: null };
          const items2 = [tmp10, titleSuffix];
          obj4.children = items2;
          const tmp18 = constants(View, obj4);
          cResult[9] = tmp10;
          cResult[10] = tmp4.flexRow;
          cResult[11] = titleSuffix;
          cResult[12] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
    let tmp12 = title;
    if (!noop.isValidElement(title)) {
      const obj5 = { style: tmp4.channelNameContainer, children: null };
      const obj6 = { style: tmp4.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
      obj5.children = value3(Text_Text.Text, obj6);
      tmp12 = value3(View, obj5);
    }
    cResult[4] = accessibleTitle;
    cResult[5] = tmp4.channelName;
    cResult[6] = tmp4.channelNameContainer;
    cResult[7] = title;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  } else {
    if (cResult[0] === channelIconColor) {
      if (cResult[1] === tmp4.channelIcon) {
      }
    }
    let tmp7 = channelIconColor;
    if (!noop.isValidElement(channelIconColor)) {
      const obj7 = { size: native.Icon.Sizes.CUSTOM, source: channelIconColor, style: tmp4.channelIcon, color: tmp4.channelIconColor.color };
      tmp7 = value3(native.Icon, obj7);
    }
    cResult[0] = channelIconColor;
    ({ channelIcon: tmp3[1], channelIconColor } = tmp4);
    cResult[2] = channelIconColor;
    cResult[3] = tmp7;
  }
}) : (function ChannelTitleContent(arg0) {
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = closure_18();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!noop.isValidElement(icon)) {
      const obj = { size: native.Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      tmp4 = value3(native.Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!noop.isValidElement(title)) {
    const obj2 = { style: tmp.channelNameContainer, children: null };
    const obj3 = { style: tmp.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    obj2.children = value3(Text_Text.Text, obj3);
    tmp8 = value3(View, obj2);
  }
  const obj4 = { style: tmp.flexRow, children: null };
  const items = [tmp2, ];
  const obj5 = { style: tmp.channelTextContainer, children: null };
  const obj6 = { style: tmp.flexRow, children: null };
  const items1 = [tmp8, titleSuffix];
  obj6.children = items1;
  const items2 = [constants(View, obj6), subTitle];
  obj5.children = items2;
  items[1] = constants(View, obj5);
  obj4.children = items;
  return constants(View, obj4);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ParentChannelSubTitle(parentChannel) {
  const cResult = c.c(8);
  parentChannel = parentChannel.parentChannel;
  const tmp4 = closure_18();
  if (cResult[0] !== parentChannel) {
    const intl = util.intl;
    const obj2 = { channelName: useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore) };
    const formatToPlainStringResult = intl.formatToPlainString(util.t.BjYvHO, obj2);
    cResult[0] = parentChannel;
    cResult[1] = formatToPlainStringResult;
    let tmp5 = formatToPlainStringResult;
    const tmpResult = useChannelName;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== parentChannel) {
    const tmpResult2 = useChannelName;
    const channelName = tmpResult2.computeChannelName(parentChannel, UserStore, RelationshipStore, true);
    cResult[2] = parentChannel;
    cResult[3] = channelName;
    let tmp9 = channelName;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.navbarTitleSecondaryText) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp9) {
        let tmp15 = cResult[7];
      }
      return tmp15;
    }
  }
  const tmp16 = value3(Text_Text.Text, { lineClamp: 1, style: tmp4.navbarTitleSecondaryText, accessibilityLabel: tmp5, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: tmp9 });
  cResult[4] = tmp4.navbarTitleSecondaryText;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : (function ParentChannelSubTitle(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const obj = { lineClamp: 1, style: closure_18().navbarTitleSecondaryText, accessibilityLabel: null, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  const obj2 = { channelName: null };
  const tmp = closure_18();
  obj2.channelName = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore);
  obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj2);
  obj.children = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore, true);
  return value3(Text_Text.Text, obj);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function DMChannelName(userId) {
  const cResult = userId(576).c(10);
  userId = userId.userId;
  const style = userId.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function t() {
      let str = RelationshipStore.getNickname(userId);
      if (str == null) {
        str = UserUtilsDefault.getName(tmp);
      }
      if (str == null) {
        str = "";
      }
      return str;
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    const intl = tmp(1126).intl;
    const obj2 = { channelName: stateFromStores };
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.fYqXVY, obj2);
    cResult[4] = stateFromStores;
    cResult[5] = formatToPlainStringResult;
    let tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === style) {
      if (cResult[8] === tmp10) {
        let tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const tmp13 = closure_16(userId(1200).LegacyText, { numberOfLines: 1, style, accessibilityLabel: tmp10, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: stateFromStores });
  cResult[6] = stateFromStores;
  cResult[7] = style;
  cResult[8] = tmp10;
  cResult[9] = tmp13;
  tmp12 = tmp13;
  const tmpResult = userId(504);
}) : (function DMChannelName(style) {
  const userId = style.userId;
  const items = [UserStore, RelationshipStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => {
    let str = RelationshipStore.getNickname(userId);
    if (str == null) {
      str = UserUtilsDefault.getName(tmp);
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  const obj2 = { numberOfLines: 1, style: style.style, accessibilityLabel: null, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: null };
  const intl = userId(1126).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(userId(1126).t.fYqXVY, { channelName: stateFromStores });
  obj2.children = stateFromStores;
  return closure_16(userId(1200).LegacyText, obj2);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedStatus(arg0) {
  const cResult = userId(576).c(9);
  ({ style, userId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function t() {
      const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: isStreamingDefault(PresenceStore.getActivities(userId)) };
      return obj;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = userId(576);
  const stateFromStoresObject = userId(504).useStateFromStoresObject(first, tmp6);
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  if (cResult[3] === isMobileOnline) {
    if (cResult[4] === isVROnline) {
      if (cResult[5] === status) {
        if (cResult[6] === streaming) {
          if (cResult[7] === style) {
            let tmp8 = cResult[8];
          }
          return tmp8;
        }
      }
    }
  }
  const tmpResult = userId(504);
  const tmp9 = closure_16(userId(1200).Status, { isMobileOnline, isVROnline, status, streaming, size: userId(1200).StatusSizes.SMALL, style });
  cResult[3] = isMobileOnline;
  cResult[4] = isVROnline;
  cResult[5] = status;
  cResult[6] = streaming;
  cResult[7] = style;
  cResult[8] = tmp9;
  tmp8 = tmp9;
  const obj2 = { isMobileOnline, isVROnline, status, streaming, size: userId(1200).StatusSizes.SMALL, style };
}) : (function ConnectedStatus(style) {
  const userId = style.userId;
  const items = [PresenceStore];
  const stateFromStoresObject = userId(504).useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: isStreamingDefault(PresenceStore.getActivities(userId)) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  let obj = userId(504);
  return closure_16(userId(1200).Status, { isMobileOnline, isVROnline, status, streaming, size: userId(1200).StatusSizes.SMALL, style: style.style });
});
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelTitle(threadDraft) {
  const cResult = channelId(stateFromStores1[17]).c(115);
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatewayConnectionStore];
    const fn = function c() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = channelId(stateFromStores1[17]);
  const stateFromStores = channelId(stateFromStores1[18]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    class L {
      constructor() {
        tmp = channelId;
        channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (tmp !== StaticChannelRoute.MEMBER_SAFETY) {
            tmp3 = closure_7;
            channel = closure_7.getChannel(tmp);
          }
        }
        return channel;
      }
    }
    cResult[3] = channelId;
    cResult[4] = L;
  } else {
    class L {
      constructor() {
        tmp = channelId;
        channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (tmp !== StaticChannelRoute.MEMBER_SAFETY) {
            tmp3 = closure_7;
            channel = closure_7.getChannel(tmp);
          }
        }
        return channel;
      }
    }
  }
  const tmpResult = channelId(stateFromStores1[18]);
  stateFromStores1 = channelId(stateFromStores1[18]).useStateFromStores(tmp9, L);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        tmp = channelId;
        channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (tmp !== StaticChannelRoute.MEMBER_SAFETY) {
            tmp3 = closure_7;
            channel = closure_7.getChannel(tmp);
          }
        }
        return channel;
      }
    }
    const items2 = [GuildStore];
    cResult[5] = items2;
    const tmp13 = items2;
  } else {
    class L {
      constructor() {
        tmp = channelId;
        channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (tmp !== StaticChannelRoute.MEMBER_SAFETY) {
            tmp3 = closure_7;
            channel = closure_7.getChannel(tmp);
          }
        }
        return channel;
      }
    }
  }
  if (cResult[6] !== stateFromStores1) {
    class F {
      constructor() {
        obj = closure_2;
        guildId = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          guildId = obj.getGuildId();
        }
        return closure_8.getGuild(guildId);
      }
    }
    cResult[6] = stateFromStores1;
    cResult[7] = F;
  } else {
    class F {
      constructor() {
        obj = closure_2;
        guildId = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          guildId = obj.getGuildId();
        }
        return closure_8.getGuild(guildId);
      }
    }
  }
  const tmpResult5 = channelId(stateFromStores1[18]);
  const stateFromStores2 = channelId(stateFromStores1[18]).useStateFromStores(tmp13, F);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        obj = closure_2;
        guildId = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          guildId = obj.getGuildId();
        }
        return closure_8.getGuild(guildId);
      }
    }
    const items3 = [ChannelStore];
    cResult[8] = items3;
    const tmp16 = items3;
  } else {
    class F {
      constructor() {
        obj = closure_2;
        guildId = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          guildId = obj.getGuildId();
        }
        return closure_8.getGuild(guildId);
      }
    }
  }
  if (cResult[9] === stateFromStores1) {
    class F {
      constructor() {
        obj = closure_2;
        guildId = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          guildId = obj.getGuildId();
        }
        return closure_8.getGuild(guildId);
      }
    }
    const stateFromStores3 = channelId(tmp2[18]).useStateFromStores(tmp16, U, items4);
    const tmpResult7 = channelId(tmp2[18]);
    const selectedSpecialNavigationPath = channelId(tmp2[23]).useSelectedSpecialNavigationPath();
    if (cResult[13] !== stateFromStores) {
      class F {
        constructor() {
          obj = closure_2;
          guildId = undefined;
          tmp = closure_8;
          if (closure_2 != null) {
            guildId = obj.getGuildId();
          }
          return closure_8.getGuild(guildId);
        }
      }
      if (stateFromStores) {
        class F {
          constructor() {
            obj = closure_2;
            guildId = undefined;
            tmp = closure_8;
            if (closure_2 != null) {
              guildId = obj.getGuildId();
            }
            return closure_8.getGuild(guildId);
          }
        }
        const stringResult = obj7.string(channelId(tmp2[19]).t);
      } else {
        class F {
          constructor() {
            obj = closure_2;
            guildId = undefined;
            tmp = closure_8;
            if (closure_2 != null) {
              guildId = obj.getGuildId();
            }
            return closure_8.getGuild(guildId);
          }
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = stringResult;
    } else {
      class F {
        constructor() {
          obj = closure_2;
          guildId = undefined;
          tmp = closure_8;
          if (closure_2 != null) {
            guildId = obj.getGuildId();
          }
          return closure_8.getGuild(guildId);
        }
      }
      if (selectedSpecialNavigationPath === channelId(tmp2[23]).SpecialNavigationPath.FRIENDS) {
        class F {
          constructor() {
            obj = closure_2;
            guildId = undefined;
            tmp = closure_8;
            if (closure_2 != null) {
              guildId = obj.getGuildId();
            }
            return closure_8.getGuild(guildId);
          }
        }
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              obj = closure_2;
              guildId = undefined;
              tmp = closure_8;
              if (closure_2 != null) {
                guildId = obj.getGuildId();
              }
              return closure_8.getGuild(guildId);
            }
          }
          const obj2 = { title: null };
          const intl = channelId(tmp2[19]).intl;
          obj2.title = intl.string(channelId(tmp2[19]).t.TdEu5X);
          const tmp24 = closure_16(closure_20, obj2);
          cResult[15] = tmp24;
          const tmp22 = tmp24;
        } else {
          class F {
            constructor() {
              obj = closure_2;
              guildId = undefined;
              tmp = closure_8;
              if (closure_2 != null) {
                guildId = obj.getGuildId();
              }
              return closure_8.getGuild(guildId);
            }
          }
        }
        if (cResult[16] !== style) {
          class F {
            constructor() {
              obj = closure_2;
              guildId = undefined;
              tmp = closure_8;
              if (closure_2 != null) {
                guildId = obj.getGuildId();
              }
              return closure_8.getGuild(guildId);
            }
          }
          const obj3 = { style, children: tmp22 };
          const tmp27 = closure_16(closure_19, obj3);
          cResult[16] = style;
          cResult[17] = tmp27;
          const tmp25 = tmp27;
        } else {
          class F {
            constructor() {
              obj = closure_2;
              guildId = undefined;
              tmp = closure_8;
              if (closure_2 != null) {
                guildId = obj.getGuildId();
              }
              return closure_8.getGuild(guildId);
            }
          }
        }
        return tmp25;
      } else {
        class F {
          constructor() {
            obj = closure_2;
            guildId = undefined;
            tmp = closure_8;
            if (closure_2 != null) {
              guildId = obj.getGuildId();
            }
            return closure_8.getGuild(guildId);
          }
        }
      }
    }
    const tmpResult8 = channelId(tmp2[23]);
  }
  class U {
    constructor() {
      tmp = threadDraft;
      if (null != threadDraft) {
        if (null != tmp.parentChannelId) {
          tmp6 = closure_7;
          channel = closure_7.getChannel(tmp.parentChannelId);
        }
        return channel;
      }
      tmp2 = closure_2;
      channel = null;
      if (null != closure_2) {
        channel = null;
        if (null != tmp2.parent_id) {
          tmp4 = THREAD_CHANNEL_TYPES;
          channel = null;
          if (THREAD_CHANNEL_TYPES.has(tmp2.type)) {
            tmp5 = closure_7;
            channel = closure_7.getChannel(tmp2.parent_id);
          }
        }
      }
      return;
    }
  }
  items4 = [stateFromStores1, threadDraft];
  cResult[9] = stateFromStores1;
  cResult[10] = threadDraft;
  cResult[11] = U;
  cResult[12] = items4;
  const tmpResult6 = channelId(stateFromStores1[18]);
}) : (function ChannelTitle(threadDraft) {
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let stateFromStores1;
  const tmp = closure_18();
  const items = [GatewayConnectionStore];
  const stateFromStores = channelId(stateFromStores1[18]).useStateFromStores(items, () => connected.isConnected());
  const obj = channelId(stateFromStores1[18]);
  const items1 = [ChannelStore];
  stateFromStores1 = channelId(stateFromStores1[18]).useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== StaticChannelRoute.GUILD_HOME) {
      channel = null;
      if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
        channel = ChannelStore.getChannel(channelId);
      }
    }
    return channel;
  });
  const obj2 = channelId(stateFromStores1[18]);
  const items2 = [GuildStore];
  const stateFromStores2 = channelId(stateFromStores1[18]).useStateFromStores(items2, () => {
    let guildId;
    if (stateFromStores1 != null) {
      guildId = stateFromStores1.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  });
  const obj4 = channelId(stateFromStores1[18]);
  const items3 = [ChannelStore];
  const items4 = [stateFromStores1, threadDraft];
  const stateFromStores3 = channelId(stateFromStores1[18]).useStateFromStores(items3, () => {
    if (null != threadDraft) {
      if (null != threadDraft.parentChannelId) {
        let channel = ChannelStore.getChannel(threadDraft.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != stateFromStores1.parent_id) {
        channel = null;
        if (THREAD_CHANNEL_TYPES.has(stateFromStores1.type)) {
          channel = ChannelStore.getChannel(stateFromStores1.parent_id);
        }
      }
    }
  }, items4);
  const obj5 = channelId(stateFromStores1[18]);
  const selectedSpecialNavigationPath = channelId(stateFromStores1[23]).useSelectedSpecialNavigationPath();
  const obj6 = channelId(stateFromStores1[23]);
  const intl = channelId(stateFromStores1[19]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores1[19]).t;
  if (stateFromStores) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === channelId(stateFromStores1[23]).SpecialNavigationPath.FRIENDS) {
    const obj3 = { style, children: null };
    const obj7 = { title: null };
    const intl9 = channelId(tmp3[19]).intl;
    obj7.title = intl9.string(channelId(tmp3[19]).t.TdEu5X);
    obj3.children = closure_16(closure_20, obj7);
    return closure_16(closure_19, obj3);
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    const obj8 = { size: channelId(tmp3[25]).Icon.Sizes.CUSTOM, source: tmp8(tmp3[26]), style: tmp.homeIcon };
    const obj9 = { onPressTitle, style, children: null };
    const obj10 = { title: null, icon: null };
    const intl8 = channelId(tmp3[19]).intl;
    obj10.title = intl8.string(channelId(tmp3[19]).t.Ym2Ri6);
    obj10.icon = closure_16(channelId(tmp3[25]).Icon, obj8);
    obj9.children = closure_16(closure_20, obj10);
    return closure_16(closure_19, obj9);
  } else if (channelId === tmp62.MEMBER_SAFETY) {
    const obj11 = { size: channelId(tmp3[25]).Icon.Sizes.CUSTOM, source: tmp8(tmp3[27]), style: tmp.homeIcon };
    const obj12 = { onPressTitle, style, children: null };
    const obj13 = { title: null, icon: null };
    const intl7 = channelId(tmp3[19]).intl;
    obj13.title = intl7.string(channelId(tmp3[19]).t["9Oq93m"]);
    obj13.icon = closure_16(channelId(tmp3[25]).Icon, obj11);
    obj12.children = closure_16(closure_20, obj13);
    return closure_16(closure_19, obj12);
  } else if (tmp9) {
    const obj14 = { source: tmp8(tmp3[29]), style: tmp.premiumIcon };
    const obj15 = { style, children: null };
    const obj16 = { title: null, icon: null };
    const tmp8Result = tmp8(tmp3[28]);
    const intl6 = channelId(tmp3[19]).intl;
    obj16.title = intl6.string(channelId(tmp3[19]).t["KzCF/6"]);
    obj16.icon = closure_16(tmp8(tmp3[28]), obj14);
    obj15.children = closure_16(closure_20, obj16);
    return closure_16(closure_19, obj15);
  } else {
    if (null != threadDraft) {
      let isForumLikeChannelResult;
      if (stateFromStores1 != null) {
        isForumLikeChannelResult = stateFromStores1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        if (null != threadDraft.name) {
          if (threadDraft.name.length > 0) {
            let name = threadDraft.name;
          }
          const threadChannelIcon = channelId(tmp3[20]).getThreadChannelIcon(threadDraft.isPrivate ? constants.PRIVATE_THREAD : constants.PUBLIC_THREAD);
          const intl3 = channelId(tmp3[19]).intl;
          const obj17 = { channelName: name };
          const obj18 = { style, children: null };
          const obj19 = { title: name, accessibleTitle: intl3.formatToPlainString(channelId(tmp3[19]).t["OkzL+Q"], obj17), icon: threadChannelIcon, subTitle: null };
          let tmp15Result = null != stateFromStores3;
          if (tmp15Result) {
            const obj20 = { parentChannel: stateFromStores3 };
            tmp15Result = closure_16(closure_21, obj20);
          }
          obj19.subTitle = tmp15Result;
          obj18.children = closure_16(closure_20, obj19);
          return closure_16(closure_19, obj18);
        }
        const intl2 = channelId(tmp3[19]).intl;
        name = intl2.string(channelId(tmp3[19]).t["4WNcpu"]);
      }
    }
    if (tmp2Result4.shouldNSFWGateGuild(threadDraft.guildId)) {
      const obj21 = { style, children: null };
      const obj22 = { title: null };
      const intl5 = channelId(tmp3[19]).intl;
      obj22.title = intl5.string(channelId(tmp3[19]).t.HbPHt1);
      obj21.children = closure_16(closure_20, obj22);
      return closure_16(closure_19, obj21);
    } else if (null == stateFromStores1) {
      const obj23 = { style, children: null };
      const obj24 = { title: stringResult };
      obj23.children = closure_16(closure_20, obj24);
      return closure_16(closure_19, obj23);
    } else {
      const channelName = channelId(tmp3[21]).computeChannelName(stateFromStores1, UserStore, RelationshipStore);
      const tmp2Result5 = channelId(tmp3[21]);
      const channelIconWithGuild = channelId(tmp3[20]).getChannelIconWithGuild(stateFromStores1, stateFromStores2);
      if (stateFromStores1.isDM()) {
        const recipientId = stateFromStores1.getRecipientId();
        const obj25 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
        let tmp31Result = null;
        const isSystemDMResult = stateFromStores1.isSystemDM();
        if (!isSystemDMResult) {
          const obj26 = { userId: recipientId, style: tmp.status };
          tmp31Result = closure_16(closure_23, obj26);
        }
        const obj27 = { userId: recipientId, guildId: null };
        let guild_id;
        const tmp33 = closure_16(closure_22, obj25);
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        obj27.guildId = guild_id;
        const obj28 = { onPressTitle, style, children: null };
        const obj29 = { title: tmp33, icon: channelIconWithGuild, titleSuffix: tmp31Result, subTitle: closure_16(tmp8(tmp3[22]), obj27) };
        obj28.children = closure_16(closure_20, obj29);
        return closure_16(closure_19, obj28);
      } else {
        const intl4 = channelId(tmp3[19]).intl;
        const formatToPlainString = intl4.formatToPlainString;
        const t2 = channelId(tmp3[19]).t;
        if (isThreadResult) {
          const obj30 = { channelName };
          const obj31 = { onPressTitle, style, children: null };
          const obj32 = { title: channelName, accessibleTitle: formatToPlainString(t2["OkzL+Q"], obj30), icon: channelIconWithGuild, subTitle: null };
          let tmp24Result = null != stateFromStores3;
          if (tmp24Result) {
            const obj33 = { parentChannel: stateFromStores3 };
            tmp24Result = closure_16(closure_21, obj33);
          }
          obj32.subTitle = tmp24Result;
          obj31.children = closure_16(closure_20, obj32);
          return closure_16(closure_19, obj31);
        } else {
          const obj34 = { channelName };
          const obj35 = { onPressTitle, style, children: null };
          const obj36 = { title: channelName, accessibleTitle: formatToPlainString(t2.UbNmGc, obj34), icon: channelIconWithGuild };
          obj35.children = closure_16(closure_20, obj36);
          return closure_16(closure_19, obj35);
        }
        isThreadResult = stateFromStores1.isThread();
      }
      const tmp2Result6 = channelId(tmp3[20]);
    }
    tmp2Result4 = channelId(tmp3[30]);
  }
  tmp9 = threadDraft(stateFromStores1[24])();
}));
size = fn(2);
let result = size.fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = tmp7;
export const ChannelTitle = memoResult;
export const ChannelButtons = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelButtons(arg0) {
  const cResult = c.c(5);
  ({ buttons, style } = arg0);
  if (cResult[0] !== buttons) {
    let mapped;
    if (buttons != null) {
      mapped = buttons.map((onPress, index) => {
        onPress = onPress.onPress;
        const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
        ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
        let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
        if (hasActivitiesPrivateChannelTooltip) {
          onPress = (arg0) => {
            if (null != fn) {
              tmp(arg0);
            }
            const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: constants.AUTO });
          };
        }
        obj.onPress = onPress;
        obj.onLongPress = onLongPress;
        obj.disabled = disabled;
        obj.style = style;
        obj.children = children;
        const children1 = [closure_16(closure_1(8673), obj), ];
        let tmp3Result = null;
        if (hasActivitiesPrivateChannelTooltip) {
          const obj2 = { contentTypes: null, groupName: null, children: null };
          const items1 = [onPress(2049).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
          obj2.contentTypes = items1;
          obj2.groupName = constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
          obj2.children = function children(markAsDismissed) {
            markAsDismissed = markAsDismissed.markAsDismissed;
            let tmp2 = null;
            if (markAsDismissed.visibleContent === markAsDismissed(dependencyMap[37]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
              const obj = {
                onClosePress() {
                    return markAsDismissed(constants.UNKNOWN);
                  }
              };
              tmp2 = closure_16(closure_1(dependencyMap[39]), obj);
            }
            return tmp2;
          };
          tmp3Result = closure_16(closure_1(10012), obj2);
          const tmp4Result = closure_1(10012);
        }
        children1[1] = tmp3Result;
        return closure_17(closure_4, { children: children1 }, index);
      });
    }
    cResult[0] = buttons;
    cResult[1] = mapped;
    let tmp2 = mapped;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === tmp2) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  const tmp6 = value3(View, { style, children: tmp2 });
  cResult[2] = style;
  cResult[3] = tmp2;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function ChannelButtons(buttons) {
  buttons = buttons.buttons;
  let obj = { style: buttons.style, children: null };
  let mapped;
  if (buttons != null) {
    mapped = buttons.map((onPress, index) => {
      onPress = onPress.onPress;
      const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
      ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
      let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
      if (hasActivitiesPrivateChannelTooltip) {
        onPress = (arg0) => {
          if (null != fn) {
            tmp(arg0);
          }
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: constants.AUTO });
        };
      }
      obj.onPress = onPress;
      obj.onLongPress = onLongPress;
      obj.disabled = disabled;
      obj.style = style;
      obj.children = children;
      const children1 = [closure_16(closure_1(8673), obj), ];
      let tmp3Result = null;
      if (hasActivitiesPrivateChannelTooltip) {
        const obj2 = { contentTypes: null, groupName: null, children: null };
        const items1 = [onPress(2049).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
        obj2.contentTypes = items1;
        obj2.groupName = constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
        obj2.children = function children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp2 = null;
          if (markAsDismissed.visibleContent === markAsDismissed(dependencyMap[37]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
            const obj = {
              onClosePress() {
                  return markAsDismissed(constants.UNKNOWN);
                }
            };
            tmp2 = closure_16(closure_1(dependencyMap[39]), obj);
          }
          return tmp2;
        };
        tmp3Result = closure_16(closure_1(10012), obj2);
        const tmp4Result = closure_1(10012);
      }
      children1[1] = tmp3Result;
      return closure_17(closure_4, { children: children1 }, index);
    });
  }
  obj.children = mapped;
  return value3(View, obj);
});