// === Module 10609: ActivityStatus ===

// Module 10609 (ActivityStatus)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import ActivityStatusConstants from "ActivityStatusConstants" /* 10610 */;
import ApplicationStreamActivityStatusDefault from "ApplicationStreamActivityStatus" /* 10614 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10618 */;
import isGameActivityDefault from "isGameActivity" /* 10619 */;
import PresenceActivityStatusDefault from "PresenceActivityStatus" /* 10620 */;
import VoiceActivityStatusDefault from "VoiceActivityStatus" /* 10627 */;
import ActivityEmojiDefault from "ActivityEmoji" /* 10629 */;
import react from "react" /* 19 */;
import PresenceStore_mod from "PresenceStore" /* 4930 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore_mod from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let arr3, arr5, constants, hideText, obj1, tmp10, tmp11, tmp12, tmp15, tmp17, tmp18, tmp19, tmp20, tmp21, tmp23, tmp24, tmp27, tmp29, tmp30, tmp31, tmp33, tmp34, tmp5, tmp7, tmp8, type, userId;

let c10;
let closure_12;
let unpackModuleId;
const View = react_native.View;
let PresenceStore = PresenceStore_mod;
let UserStore = UserStore_mod;
const DOT_UNICODE = ActivityStatusConstants.DOT_UNICODE;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let hideIcon = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let animate;
  let closure_7;
  let emojiSize;
  let first;
  let guildId;
  let hideEmoji;
  let iconStyle;
  let maxFontSizeMultiplier;
  let obj2;
  let textStyle;
  let tmp9;
  let tmp2 = textStyle;
  let obj = userId(textStyle[10]);
  const cResult = obj.c(47);
  userId = userId.userId;
  ({ guildId, iconStyle } = userId);
  textStyle = userId.textStyle;
  ({ emojiSize, maxFontSizeMultiplier } = userId);
  ({ animate, hideEmoji } = userId);
  let num = 14;
  if (undefined !== emojiSize) {
    num = emojiSize;
  }
  PresenceStore = undefined === animate || animate;
  let closure_6 = undefined !== hideEmoji && hideEmoji;
  const tmp4 = hideIcon();
  UserStore = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = UserStore;
    let items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class T {
      constructor() {
        return closure_7.getUser(userId);
      }
    }
    cResult[1] = userId;
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        return closure_7.getUser(userId);
      }
    }
  }
  const tmpResult = userId(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, T);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return closure_7.getUser(userId);
      }
    }
    let items1 = [PresenceStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class T {
      constructor() {
        return closure_7.getUser(userId);
      }
    }
  }
  if (cResult[4] !== userId) {
    class G {
      constructor() {
        return closure_5.getActivities(userId);
      }
    }
    cResult[4] = userId;
    cResult[5] = G;
  } else {
    class G {
      constructor() {
        return closure_5.getActivities(userId);
      }
    }
  }
  const tmpResult4 = userId(tmp2[11]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, G);
  const tmp13 = iconStyle(tmp2[12])(userId);
  constants = tmp13;
  if (cResult[6] === guildId) {
    let tmp14;
    let tmp25;
    class G {
      constructor() {
        return closure_5.getActivities(userId);
      }
    }
    const voiceChannel = iconStyle(tmp2[13])(obj2).voiceChannel;
    if (cResult[9] !== stateFromStores1) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
      if (stateFromStores1 != null) {
        class G {
          constructor() {
            return closure_5.getActivities(userId);
          }
        }
      }
      let tmp16 = null;
      if (null != undefined) {
        class G {
          constructor() {
            return closure_5.getActivities(userId);
          }
        }
        if (tmp17 != null) {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        }
        if (undefined == null) {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        }
        if ("" !== undefined) {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        }
        if (null != null) {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        } else {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        }
        tmp16 = tmp20;
      }
      cResult[9] = stateFromStores1;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    } else {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    let closure_11 = tmp14;
    const useGameMentionsAsPlainText = tmp(tmp2[14]).useGameMentionsAsPlainText;
    userId(tmp2[14]);
    if (tmp14 != null) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    const gameMentionsAsPlainText = useGameMentionsAsPlainText(tmp23);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
      let items2 = [closure_6];
      cResult[11] = items2;
      tmp25 = items2;
    } else {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    if (cResult[12] !== userId) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
      cResult[12] = userId;
      cResult[13] = tmp27;
    } else {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    const tmpResult6 = userId(tmp2[11]);
    if (tmpResult6.useStateFromStores(tmp25, tmp27)) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    } else {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
      if (stateFromStores != null) {
        class G {
          constructor() {
            return closure_5.getActivities(userId);
          }
        }
      }
      hideIcon = tmp29;
      if (tmp14 != null) {
        class G {
          constructor() {
            return closure_5.getActivities(userId);
          }
        }
      }
      hideText = tmp31;
      if (cResult[14] === stateFromStores1) {
        class G {
          constructor() {
            return closure_5.getActivities(userId);
          }
        }
      }
      class L {
        constructor() {
          if (null != closure_9) {
            tmp23 = closure_1;
            tmp24 = closure_2;
            tmp22 = jsx;
            arr3 = closure_8;
            found = undefined;
            tmp25 = closure_1(closure_2[15]);
            if (closure_8 != null) {
              tmp27 = closure_1;
              tmp28 = closure_2;
              found = arr3.find(closure_1(closure_2[16]));
            }
            obj1 = { game: null, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
            obj1.game = found;
            tmp29 = closure_7;
            items = [, ];
            items[0] = closure_7.icon;
            tmp30 = iconStyle;
            items[1] = iconStyle;
            obj1.iconStyle = items;
            tmp31 = textStyle;
            obj1.textStyle = textStyle;
            tmp32 = maxFontSizeMultiplier;
            obj1.maxFontSizeMultiplier = maxFontSizeMultiplier;
            tmp33 = closure_13;
            obj1.hideIcon = closure_13;
            tmp34 = closure_14;
            obj1.hideText = closure_14;
            return tmp22(tmp25, obj1);
          } else {
            arr5 = closure_8;
            found1 = undefined;
            if (closure_8 != null) {
              found1 = arr5.find(() => { /* body not rendered: F140584 */ });
            }
            if (null != found1) {
              tmp13 = jsx;
              tmp14 = closure_1;
              tmp15 = closure_2;
              obj4 = { activity: null, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
              obj4.activity = found1;
              tmp16 = closure_7;
              items1 = [, ];
              items1[0] = closure_7.icon;
              tmp17 = iconStyle;
              items1[1] = iconStyle;
              obj4.iconStyle = items1;
              tmp18 = textStyle;
              obj4.textStyle = textStyle;
              tmp19 = maxFontSizeMultiplier;
              obj4.maxFontSizeMultiplier = maxFontSizeMultiplier;
              tmp20 = closure_13;
              obj4.hideIcon = closure_13;
              tmp21 = closure_14;
              obj4.hideText = closure_14;
              tmp3 = jsx(closure_1(closure_2[17]), obj4);
            } else {
              tmp3 = null;
              if (null != voiceChannel) {
                tmp4 = jsx;
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = { channel: null, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
                obj.channel = tmp2;
                tmp7 = closure_7;
                items2 = [, ];
                items2[0] = closure_7.icon;
                tmp8 = iconStyle;
                items2[1] = iconStyle;
                obj.iconStyle = items2;
                tmp9 = textStyle;
                obj.textStyle = textStyle;
                tmp10 = maxFontSizeMultiplier;
                obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
                tmp11 = closure_13;
                obj.hideIcon = closure_13;
                tmp12 = closure_14;
                obj.hideText = closure_14;
                tmp3 = jsx(closure_1(closure_2[18]), obj);
              }
            }
            return tmp3;
          }
        }
      }
      cResult[14] = stateFromStores1;
      cResult[15] = true === tmp28;
      cResult[16] = null != undefined;
      cResult[17] = iconStyle;
      cResult[18] = maxFontSizeMultiplier;
      cResult[19] = tmp13;
      cResult[20] = tmp4.icon;
      cResult[21] = textStyle;
      cResult[22] = voiceChannel;
      cResult[23] = L;
    }
  }
  obj2 = { userId, guildId };
  cResult[6] = guildId;
  cResult[7] = userId;
  cResult[8] = obj2;
}) : ((userId) => {
  let animate;
  let emojiSize;
  let iconStyle;
  let items4;
  let items5;
  let items6;
  let items8;
  let maxFontSizeMultiplier;
  let textStyle;
  userId = userId.userId;
  ({ iconStyle, textStyle, emojiSize } = userId);
  const guildId = userId.guildId;
  if (emojiSize === undefined) {
    emojiSize = 14;
  }
  ({ maxFontSizeMultiplier, animate } = userId);
  if (animate === undefined) {
    animate = true;
  }
  let flag = userId.hideEmoji;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = hideIcon();
  const items = [UserStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [PresenceStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PresenceStore.getActivities(userId));
  const tmp6 = stateFromStores1(10611)(userId);
  const voiceChannel = stateFromStores1(10612)({ userId, guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = react.useMemo(() => {
    let found;
    if (stateFromStores1 != null) {
      found = stateFromStores1.find((type) => type.type === constants.CUSTOM_STATUS);
    }
    if (null == found) {
      return null;
    } else {
      let tmp4;
      let trimmed;
      if (found.state != null) {
        trimmed = str.trim();
      }
      if (trimmed == null) {
        trimmed = null;
      }
      let tmp3 = null;
      if ("" !== trimmed) {
        tmp3 = trimmed;
      }
      if (null != tmp3) {
        tmp4 = found;
      } else {
        tmp4 = null;
      }
      return tmp4;
    }
  }, items2);
  let state;
  const useGameMentionsAsPlainText = userId(10613).useGameMentionsAsPlainText;
  userId(10613);
  const tmp2 = userId;
  if (memo != null) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(state);
  const items3 = [RelationshipStore];
  const tmp2Result = tmp2(504);
  if (tmp2Result.useStateFromStores(items3, () => RelationshipStore.isBlockedOrIgnored(userId))) {
    return null;
  } else {
    let tmp19Result;
    let bot;
    if (stateFromStores != null) {
      bot = stateFromStores.bot;
    }
    let state1;
    if (memo != null) {
      state1 = memo.state;
    }
    if (null != tmp6) {
      let found;
      const tmp5Result = stateFromStores1(10614);
      if (stateFromStores1 != null) {
        found = stateFromStores1.find(tmp5(10619));
      }
      const obj3 = { game: found, iconStyle: items4, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
      items4 = [tmp.icon, iconStyle];
      tmp19Result = closure_10(tmp5Result, obj3);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        const obj4 = { activity: found1, iconStyle: items5, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
        items5 = [tmp.icon, iconStyle];
        tmp19Result = closure_10(tmp5(10620), obj4);
      } else {
        tmp19Result = null;
        if (null != voiceChannel) {
          const obj5 = { channel: voiceChannel, iconStyle: items6, textStyle, maxFontSizeMultiplier, hideIcon: true === bot, hideText: null != state1 };
          items6 = [tmp.icon, iconStyle];
          tmp19Result = closure_10(tmp5(10627), obj5);
        }
      }
    }
    let tmp22 = null;
    if (null != memo) {
      let tmp24Result = null;
      if (null != memo) {
        let tmp26 = null != memo.emoji && !flag;
        if (tmp26) {
          const obj6 = { emoji: memo.emoji, size: emojiSize, animate, style: tmp.emoji };
          tmp26 = closure_10(tmp5(10629), obj6);
        }
        const items7 = [tmp26, ];
        let tmp28 = null != memo.state;
        if (tmp28) {
          const obj7 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, children: gameMentionsAsPlainText };
          tmp28 = closure_10(tmp5(10618), obj7);
        }
        const obj8 = { children: items7 };
        items7[1] = tmp28;
        tmp24Result = closure_12(closure_11, obj8);
      }
      tmp22 = tmp24Result;
    }
    const obj9 = { style: tmp.container, children: items8 };
    items8 = [tmp19Result, , ];
    let tmp32 = null != tmp19Result && null != tmp22;
    if (tmp32) {
      const obj10 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: DOT_UNICODE };
      tmp32 = closure_10(tmp5(10618), obj10);
    }
    items8[1] = tmp32;
    items8[2] = tmp22;
    return closure_12(View, obj9);
  }
});
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default tmp3;