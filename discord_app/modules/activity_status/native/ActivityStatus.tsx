// discord_app/modules/activity_status/native/ActivityStatus.tsx
import ApplicationStreamActivityStatusDefault from "ApplicationStreamActivityStatus.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import isGameActivityDefault from "../../activities/utils/isGameActivity.tsx";
import PresenceActivityStatusDefault from "PresenceActivityStatus.tsx";
import VoiceActivityStatusDefault from "VoiceActivityStatus.tsx";
import ActivityEmojiDefault from "ActivityEmoji.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const DOT_UNICODE = fn(10206).DOT_UNICODE;
const ActivityTypes = fn(1085).ActivityTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let closure_13 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4 },
  icon: { marginTop: 1 },
  emoji: { marginRight: 0 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityStatus(userId) {
      const cResult = userId(textStyle[10]).c(47);
      userId = userId.userId;
      ({ guildId, iconStyle } = userId);
      textStyle = userId.textStyle;
      ({ emojiSize, maxFontSizeMultiplier } = userId);
      ({ animate, hideEmoji } = userId);
      PresenceStore = undefined === animate || animate;
      closure_6 = undefined !== hideEmoji && hideEmoji;
      const tmp4 = hideIcon();
      closure_7 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [closure_7];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function f() {
          return UserStore.getUser(userId);
        };
        cResult[1] = userId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = userId(textStyle[10]);
      const stateFromStores = userId(textStyle[11]).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [PresenceStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
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
      let tmp14 = iconStyle(textStyle[12])(userId);
      constants = tmp14;
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
          let tmp17 = null;
          if (null != undefined) {
            class G {
              constructor() {
                return closure_5.getActivities(userId);
              }
            }
            if (tmp18 != null) {
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
            tmp17 = tmp21;
          }
          cResult[9] = stateFromStores1;
          cResult[10] = tmp17;
        } else {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        }
        if (tmp15 != null) {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
        }
        const gameMentionsAsPlainText = tmp(tmp2[14]).useGameMentionsAsPlainText(tmp23);
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              return closure_5.getActivities(userId);
            }
          }
          let items2 = [closure_6];
          cResult[11] = items2;
          const tmp25 = items2;
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
        tmp21 = tmp15;
        const tmpResult5 = tmp(tmp2[14]);
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
          if (tmp15 != null) {
            class G {
              constructor() {
                return closure_5.getActivities(userId);
              }
            }
          }
          const hideText = tmp31;
          if (cResult[14] === stateFromStores1) {
            class G {
              constructor() {
                return closure_5.getActivities(userId);
              }
            }
          }
          function renderActivity() {
            if (null != constants) {
              let found;
              if (stateFromStores1 != null) {
                found = stateFromStores1.find(isGameActivityDefault);
              }
              const obj2 = {
                game: found,
                iconStyle: null,
                textStyle: null,
                maxFontSizeMultiplier: null,
                hideIcon: null,
                hideText: null,
              };
              const items = [closure_7.icon, iconStyle];
              obj2.iconStyle = items;
              obj2.textStyle = textStyle;
              obj2.maxFontSizeMultiplier = maxFontSizeMultiplier;
              obj2.hideIcon = hideIcon;
              obj2.hideText = hideText;
              return collapsed(ApplicationStreamActivityStatusDefault, obj2);
            } else {
              let found1;
              if (stateFromStores1 != null) {
                found1 = stateFromStores1.find((type) => {
                  type = type.type;
                  return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
                });
              }
              if (null != found1) {
                const obj3 = {
                  activity: found1,
                  iconStyle: null,
                  textStyle: null,
                  maxFontSizeMultiplier: null,
                  hideIcon: null,
                  hideText: null,
                };
                const items1 = [closure_7.icon, iconStyle];
                obj3.iconStyle = items1;
                obj3.textStyle = textStyle;
                obj3.maxFontSizeMultiplier = maxFontSizeMultiplier;
                obj3.hideIcon = hideIcon;
                obj3.hideText = hideText;
                let tmp3 = collapsed(PresenceActivityStatusDefault, obj3);
              } else {
                tmp3 = null;
                if (null != voiceChannel) {
                  const obj = {
                    channel: tmp2,
                    iconStyle: null,
                    textStyle: null,
                    maxFontSizeMultiplier: null,
                    hideIcon: null,
                    hideText: null,
                  };
                  const items2 = [closure_7.icon, iconStyle];
                  obj.iconStyle = items2;
                  obj.textStyle = textStyle;
                  obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
                  obj.hideIcon = hideIcon;
                  obj.hideText = hideText;
                  tmp3 = collapsed(VoiceActivityStatusDefault, obj);
                }
              }
              return tmp3;
            }
          }
          cResult[14] = stateFromStores1;
          cResult[15] = true === tmp28;
          cResult[16] = null != undefined;
          cResult[17] = iconStyle;
          cResult[18] = maxFontSizeMultiplier;
          cResult[19] = tmp14;
          cResult[20] = tmp4.icon;
          cResult[21] = textStyle;
          cResult[22] = voiceChannel;
          cResult[23] = renderActivity;
        }
        tmpResult6 = tmp(tmp2[11]);
      }
      obj2 = { userId, guildId };
      cResult[6] = guildId;
      cResult[7] = userId;
      cResult[8] = obj2;
      const tmpResult4 = userId(textStyle[11]);
    }
  : function ActivityStatus(guildId) {
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
      const tmp = closure_13();
      const items = [UserStore];
      const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
      const obj = userId(504);
      const tmp2 = userId;
      const items1 = [PresenceStore];
      const stateFromStores1 = userId(504).useStateFromStores(items1, () => PresenceStore.getActivities(userId));
      const obj2 = userId(504);
      const voiceChannel = stateFromStores1(10208)({ userId, guildId: guildId.guildId }).voiceChannel;
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
      const tmp6 = stateFromStores1(10207)(userId);
      state = undefined;
      if (memo != null) {
        state = memo.state;
      }
      const gameMentionsAsPlainText = userId(10209).useGameMentionsAsPlainText(state);
      const obj3 = userId(10209);
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
            found = stateFromStores1.find(tmp5(10215));
          }
          const obj4 = {
            game: found,
            iconStyle: null,
            textStyle: null,
            maxFontSizeMultiplier: null,
            hideIcon: null,
            hideText: null,
          };
          const items4 = [tmp.icon, iconStyle];
          obj4.iconStyle = items4;
          obj4.textStyle = textStyle;
          obj4.maxFontSizeMultiplier = maxFontSizeMultiplier;
          obj4.hideIcon = tmp12;
          obj4.hideText = tmp13;
          let tmp18Result = closure_10(tmp5(10210), obj4);
          const tmp5Result = tmp5(10210);
        } else {
          let found1;
          if (stateFromStores1 != null) {
            found1 = stateFromStores1.find((type) => {
              type = type.type;
              return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
            });
          }
          if (null != found1) {
            const obj5 = {
              activity: found1,
              iconStyle: null,
              textStyle: null,
              maxFontSizeMultiplier: null,
              hideIcon: null,
              hideText: null,
            };
            const items5 = [tmp.icon, iconStyle];
            obj5.iconStyle = items5;
            obj5.textStyle = textStyle;
            obj5.maxFontSizeMultiplier = maxFontSizeMultiplier;
            obj5.hideIcon = tmp12;
            obj5.hideText = tmp13;
            tmp18Result = closure_10(tmp5(10216), obj5);
          } else {
            tmp18Result = null;
            if (null != voiceChannel) {
              const obj6 = {
                channel: voiceChannel,
                iconStyle: null,
                textStyle: null,
                maxFontSizeMultiplier: null,
                hideIcon: null,
                hideText: null,
              };
              const items6 = [tmp.icon, iconStyle];
              obj6.iconStyle = items6;
              obj6.textStyle = textStyle;
              obj6.maxFontSizeMultiplier = maxFontSizeMultiplier;
              obj6.hideIcon = tmp12;
              obj6.hideText = tmp13;
              tmp18Result = closure_10(tmp5(10225), obj6);
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
              tmp25 = closure_10(tmp5(10227), obj7);
            }
            const items7 = [tmp25];
            let tmp27 = null != memo.state;
            if (tmp27) {
              const obj8 = {
                variant: "text-xs/normal",
                style: textStyle,
                maxFontSizeMultiplier,
                children: gameMentionsAsPlainText,
              };
              tmp27 = closure_10(tmp5(10214), obj8);
            }
            const obj9 = { children: null };
            items7[1] = tmp27;
            obj9.children = items7;
            tmp23Result = closure_12(closure_11, obj9);
          }
          tmp21 = tmp23Result;
        }
        const obj10 = { style: tmp.container, children: null };
        const items8 = [tmp18Result, ,];
        let tmp31 = null != tmp18Result;
        if (tmp31) {
          tmp31 = null != tmp21;
        }
        if (tmp31) {
          const obj11 = {
            variant: "text-xs/normal",
            style: textStyle,
            maxFontSizeMultiplier,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            children: DOT_UNICODE,
          };
          tmp31 = closure_10(tmp5(10214), obj11);
        }
        items8[1] = tmp31;
        items8[2] = tmp21;
        obj10.children = items8;
        return closure_12(View, obj10);
      }
      tmp2Result = tmp2(504);
    };
