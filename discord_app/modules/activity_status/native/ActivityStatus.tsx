// === Module 10622: ActivityStatus ===

// Module 10622 (ActivityStatus)
import ApplicationStreamActivityStatusDefault from "ApplicationStreamActivityStatus" /* 10627 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10631 */;
import isGameActivityDefault from "isGameActivity" /* 10632 */;
import PresenceActivityStatusDefault from "PresenceActivityStatus" /* 10633 */;
import VoiceActivityStatusDefault from "VoiceActivityStatus" /* 10640 */;
import ActivityEmojiDefault from "ActivityEmoji" /* 10642 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;

const require = fn;
const View = fn(17).View;
const DOT_UNICODE = fn(10623).DOT_UNICODE;
const ActivityTypes = fn(1085).ActivityTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let hideIcon = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(textStyle[10]).c(47);
  userId = userId.userId;
  ({ guildId, iconStyle } = userId);
  textStyle = userId.textStyle;
  ({ emojiSize, maxFontSizeMultiplier } = userId);
  ({ animate, hideEmoji } = userId);
  PresenceStore = undefined === animate || animate;
  closure_6 = undefined !== hideEmoji && hideEmoji;
  const tmp4 = hideIcon();
  UserStore = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[0] = items;
    let first = items;
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
  let obj = userId(textStyle[10]);
  const stateFromStores = userId(textStyle[11]).useStateFromStores(first, T);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return closure_7.getUser(userId);
      }
    }
    let items1 = [PresenceStore];
    cResult[3] = items1;
    const tmp9 = items1;
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
  const tmpResult = userId(textStyle[11]);
  const stateFromStores1 = userId(textStyle[11]).useStateFromStores(tmp9, G);
  const tmp13 = iconStyle(textStyle[12])(userId);
  constants = tmp13;
  if (cResult[6] === guildId) {
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
    } else {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    if (tmp14 != null) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    const gameMentionsAsPlainText = tmp(tmp2[14]).useGameMentionsAsPlainText(tmp22);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
      let items2 = [closure_6];
      cResult[11] = items2;
      const tmp24 = items2;
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
      cResult[13] = tmp26;
    } else {
      class G {
        constructor() {
          return closure_5.getActivities(userId);
        }
      }
    }
    tmp20 = tmp14;
    const tmpResult5 = tmp(tmp2[14]);
    if (tmpResult6.useStateFromStores(tmp24, tmp26)) {
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
      hideIcon = tmp28;
      if (tmp14 != null) {
        class G {
          constructor() {
            return closure_5.getActivities(userId);
          }
        }
      }
      hideText = tmp30;
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
              found1 = arr5.find(() => { ... });
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
      cResult[15] = true === tmp27;
      cResult[16] = null != undefined;
      cResult[17] = iconStyle;
      cResult[18] = maxFontSizeMultiplier;
      cResult[19] = tmp13;
      cResult[20] = tmp4.icon;
      cResult[21] = textStyle;
      cResult[22] = voiceChannel;
      cResult[23] = L;
    }
    tmpResult6 = tmp(tmp2[11]);
  }
  obj2 = { userId, guildId };
  cResult[6] = guildId;
  cResult[7] = userId;
  cResult[8] = obj2;
  const tmpResult4 = userId(textStyle[11]);
}) : ((guildId) => {
  const userId = guildId.userId;
  ({ iconStyle, textStyle, emojiSize } = guildId);
  if (emojiSize === undefined) {
    emojiSize = 14;
  }
  ({ maxFontSizeMultiplier, animate } = guildId);
  if (animate === undefined) {
    animate = true;
  }
  let flag = guildId.hideEmoji;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = hideIcon();
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj = userId(504);
  const tmp2 = userId;
  const items1 = [PresenceStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => PresenceStore.getActivities(userId));
  const obj2 = userId(504);
  const voiceChannel = stateFromStores1(10625)({ userId, guildId: guildId.guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = noop.useMemo(() => {
    let found;
    if (stateFromStores1 != null) {
      found = stateFromStores1.find((type) => type.type === constants.CUSTOM_STATUS);
    }
    if (null == found) {
      return null;
    } else {
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
        let tmp4 = found;
      } else {
        tmp4 = null;
      }
      return tmp4;
    }
  }, items2);
  const tmp6 = stateFromStores1(10624)(userId);
  state = undefined;
  if (memo != null) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = userId(10626).useGameMentionsAsPlainText(state);
  const obj3 = userId(10626);
  const items3 = [RelationshipStore];
  if (tmp2Result.useStateFromStores(items3, () => RelationshipStore.isBlockedOrIgnored(userId))) {
    return null;
  } else {
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
      if (stateFromStores1 != null) {
        found = stateFromStores1.find(tmp5(10632));
      }
      const obj4 = { game: found, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
      const items4 = [tmp.icon, iconStyle];
      obj4.iconStyle = items4;
      obj4.textStyle = textStyle;
      obj4.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj4.hideIcon = tmp12;
      obj4.hideText = tmp13;
      let tmp18Result = closure_10(tmp5(10627), obj4);
      const tmp5Result = tmp5(10627);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        const obj5 = { activity: found1, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
        const items5 = [tmp.icon, iconStyle];
        obj5.iconStyle = items5;
        obj5.textStyle = textStyle;
        obj5.maxFontSizeMultiplier = maxFontSizeMultiplier;
        obj5.hideIcon = tmp12;
        obj5.hideText = tmp13;
        tmp18Result = closure_10(tmp5(10633), obj5);
      } else {
        tmp18Result = null;
        if (null != voiceChannel) {
          const obj6 = { channel: voiceChannel, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
          const items6 = [tmp.icon, iconStyle];
          obj6.iconStyle = items6;
          obj6.textStyle = textStyle;
          obj6.maxFontSizeMultiplier = maxFontSizeMultiplier;
          obj6.hideIcon = tmp12;
          obj6.hideText = tmp13;
          tmp18Result = closure_10(tmp5(10640), obj6);
        }
      }
    }
    let tmp21 = null;
    if (null != memo) {
      let tmp23Result = null;
      if (null != memo) {
        let tmp25 = null != memo.emoji;
        if (tmp25) {
          tmp25 = !flag;
        }
        if (tmp25) {
          const obj7 = { emoji: memo.emoji, size: emojiSize, animate, style: tmp.emoji };
          tmp25 = closure_10(tmp5(10642), obj7);
        }
        const items7 = [tmp25, ];
        let tmp27 = null != memo.state;
        if (tmp27) {
          const obj8 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, children: gameMentionsAsPlainText };
          tmp27 = closure_10(tmp5(10631), obj8);
        }
        const obj9 = { children: null };
        items7[1] = tmp27;
        obj9.children = items7;
        tmp23Result = closure_12(closure_11, obj9);
      }
      tmp21 = tmp23Result;
    }
    const obj10 = { style: tmp.container, children: null };
    const items8 = [tmp18Result, , ];
    let tmp31 = null != tmp18Result;
    if (tmp31) {
      tmp31 = null != tmp21;
    }
    if (tmp31) {
      const obj11 = { variant: "text-xs/normal", style: textStyle, maxFontSizeMultiplier, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: DOT_UNICODE };
      tmp31 = closure_10(tmp5(10631), obj11);
    }
    items8[1] = tmp31;
    items8[2] = tmp21;
    obj10.children = items8;
    return closure_12(View, obj10);
  }
  tmp2Result = tmp2(504);
});