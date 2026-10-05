// discord_app/modules/threads/native/components/ThreadBrowserRowSubtext.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useMessageAuthorDefault from "../../../messages/useMessageAuthor.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import useHasEnhancedRoleColorsDefault from "../../../premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import renderMessageMarkupDefault from "../../../messages/renderMessageMarkup.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildMemberStore_mod from "../../../../stores/GuildMemberStore.tsx";
import UserStore_mod from "../../../../stores/UserStore.tsx";
import ThreadMessageStore from "../../ThreadMessageStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault;

let c10;
let c9;
let obj2;
let size;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
let GuildMemberStore = GuildMemberStore_mod;
let UserStore = UserStore_mod;
const MessageTypes = Constants.MessageTypes;
const Fonts = Constants2.Fonts;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let items = [,];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = MessageTypes);
let createStyles = createStyles_mod;
let obj = {
  row: { flexDirection: "row" },
  subtextContent: { lineHeight: 18, flexShrink: 1 },
  timestamp: { lineHeight: 18 },
  username: obj2,
  dividerDot: size,
};
obj2 = { fontSize: 14, lineHeight: 18, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
size = {
  width: 4,
  height: 4,
  marginHorizontal: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  alignSelf: "center",
};
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (thread) => {
      let first;
      let id;
      let tmp15;
      let tmp17;
      let tmp6;
      let tmp7;
      const obj = id(576);
      const cResult = obj.c(15);
      thread = thread.thread;
      id = thread.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [ThreadMessageStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function o() {
          return ThreadMessageStore.getMostRecentMessage(id);
        };
        const items1 = [id];
        cResult[1] = id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = id(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmpResult4 = id(7409);
      const lastMessageTimestamp = tmpResult4.useLastMessageTimestamp(thread);
      if (null != stateFromStores) {
        if (!items.includes(stateFromStores.type)) {
          if (!thread.isArchivedThread()) {
            if (cResult[12] === stateFromStores) {
              let tmp11;
              if (cResult[13] === thread) {
                tmp11 = cResult[14];
              }
              return tmp11;
            }
            const obj2 = { thread, message: stateFromStores };
            const tmp14 = closure_9(closure_15, obj2);
            cResult[12] = stateFromStores;
            cResult[13] = thread;
            cResult[14] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      if (cResult[4] !== lastMessageTimestamp) {
        const tmpResult5 = id(7409);
        const timestampString = tmpResult5.getTimestampString(lastMessageTimestamp);
        cResult[4] = lastMessageTimestamp;
        cResult[5] = timestampString;
        tmp15 = timestampString;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== lastMessageTimestamp) {
        const tmpResult6 = id(7409);
        const timestampAccessibilityLabel = tmpResult6.getTimestampAccessibilityLabel(lastMessageTimestamp);
        cResult[6] = lastMessageTimestamp;
        cResult[7] = timestampAccessibilityLabel;
        tmp17 = timestampAccessibilityLabel;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === thread) {
        if (cResult[9] === tmp15) {
          let tmp19;
          if (cResult[10] === tmp17) {
            tmp19 = cResult[11];
          }
          return tmp19;
        }
      }
      const tmp20 = closure_9(closure_14, { thread, timestamp: tmp15, accessibilityLabel: tmp17 });
      cResult[8] = thread;
      cResult[9] = tmp15;
      cResult[10] = tmp17;
      cResult[11] = tmp20;
      tmp19 = tmp20;
    }
  : (thread) => {
      thread = thread.thread;
      const id = thread.id;
      items = [ThreadMessageStore];
      const items1 = [id];
      const obj = id(504);
      const stateFromStores = obj.useStateFromStores(items, () => ThreadMessageStore.getMostRecentMessage(id), items1);
      const obj2 = id(7409);
      const lastMessageTimestamp = obj2.useLastMessageTimestamp(thread);
      if (null != stateFromStores) {
        if (!items.includes(stateFromStores.type)) {
          if (!thread.isArchivedThread()) {
            const obj3 = { thread, message: stateFromStores };
            return closure_9(closure_15, obj3);
          }
        }
      }
      const tmpResult = id(7409);
      const timestampString = tmpResult.getTimestampString(lastMessageTimestamp);
      const tmpResult2 = id(7409);
      const obj4 = {
        thread,
        timestamp: timestampString,
        accessibilityLabel: tmpResult2.getTimestampAccessibilityLabel(lastMessageTimestamp),
      };
      return closure_9(closure_14, obj4);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (thread) => {
        let accessibilityLabel;
        let closure_6;
        let colorStrings;
        let first;
        let ref;
        let stateFromStores1;
        let timestamp;
        let tmp7;
        let tmp9;
        let obj = thread(stateFromStores1[12]);
        const cResult = obj.c(31);
        thread = thread.thread;
        ({ timestamp, accessibilityLabel } = thread);
        closure_13();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          items = [UserStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== thread.ownerId) {
          const fn = function c() {
            return UserStore.getUser(thread.ownerId);
          };
          cResult[1] = thread.ownerId;
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const tmpResult = thread(stateFromStores1[13]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let tmp10 = GuildMemberStore;
          const items1 = [GuildMemberStore];
          cResult[3] = items1;
          tmp9 = items1;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === thread.guild_id) {
          let tmp11;
          let tmp14;
          let tmp13;
          let tmp24;
          if (cResult[5] === thread.ownerId) {
            tmp11 = cResult[6];
          }
          const tmpResult3 = thread(stateFromStores1[13]);
          stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [colorStrings];
            class R {
              constructor() {
                return colorStrings.roleStyle;
              }
            }
            cResult[7] = items2;
            cResult[8] = R;
            tmp14 = R;
            tmp13 = items2;
          } else {
            tmp13 = cResult[7];
            tmp14 = cResult[8];
          }
          const tmpResult4 = thread(stateFromStores1[13]);
          const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
          let colorString;
          if (stateFromStores1 != null) {
            colorString = stateFromStores1.colorString;
          }
          if (colorString == null) {
            colorString = null;
          }
          colorStrings = undefined;
          if (stateFromStores1 != null) {
            colorStrings = stateFromStores1.colorStrings;
          }
          if (colorStrings == null) {
            colorStrings = null;
          }
          let id;
          const guild_id = thread.guild_id;
          const tmp21 = stateFromStores(stateFromStores1[15]);
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          const tmp21Result = tmp21(guild_id, id);
          GuildMemberStore = tmp21Result;
          class C {
            constructor() {
              return GuildMemberStore.getMember(thread.guild_id, thread.ownerId);
            }
          }
          UserStore = stateFromStores2.useRef(thread);
          if (cResult[9] !== thread) {
            const fn2 = function k() {
              ref.current = thread;
            };
            cResult[9] = thread;
            class R {
              constructor() {
                return colorStrings.roleStyle;
              }
            }
            cResult[10] = fn2;
            tmp24 = fn2;
          } else {
            tmp24 = cResult[10];
          }
          const effect = obj5.useEffect(tmp24);
          if (cResult[11] === stateFromStores1) {
            let tmp26;
            let tmp27;
            if (cResult[12] === stateFromStores) {
              tmp26 = cResult[13];
              tmp27 = cResult[14];
            }
            const effect1 = obj5.useEffect(tmp26, tmp27);
            if (cResult[15] === tmp21Result) {
              if (stateFromStores1 != null) {
                const nick = stateFromStores1.nick;
              }
              class R {
                constructor() {
                  return colorStrings.roleStyle;
                }
              }
            }
            class R {
              constructor() {
                return colorStrings.roleStyle;
              }
            }
            let obj2 = {
              usernameHook(arg0, arg1) {
                let tmp10;
                let tmp7;
                let tmp9;
                let str;
                if (stateFromStores1 != null) {
                  str = stateFromStores1.nick;
                }
                if (str == null) {
                  const obj = UserUtilsDefault;
                  str = obj.getName(stateFromStores);
                }
                if (str == null) {
                  str = "";
                }
                const obj2 = {
                  nickname: str,
                  usernameColor: tmp7,
                  roleColor: colorString,
                  roleColors: tmp9,
                  shouldShowRoleDot: tmp10,
                };
                tmp7 = null;
                if ("username" === stateFromStores2) {
                  tmp7 = colorString;
                }
                tmp9 = null;
                if (closure_6) {
                  tmp9 = colorStrings;
                }
                tmp10 = "dot" === stateFromStores2 && null != colorString;
                return React4(closure_17, obj2, arg1);
              },
            };
            cResult[15] = tmp21Result;
            let nick1;
            const formatResult = obj6.format(thread(stateFromStores1[17]).t.imPXd5, obj2);
            if (stateFromStores1 != null) {
              nick1 = stateFromStores1.nick;
            }
            cResult[16] = nick1;
            cResult[17] = colorString;
            cResult[18] = colorStrings;
            cResult[19] = stateFromStores2;
            cResult[20] = stateFromStores;
            cResult[21] = formatResult;
          }
          class E {
            constructor() {
              if (null == stateFromStores) {
                const current = ref.current;
                items = [current.ownerId];
                const obj = GuildActionCreatorsDefault;
                const membersById = obj.requestMembersById(current.guild_id, items);
              }
            }
          }
          const items3 = [stateFromStores1, stateFromStores];
          cResult[11] = stateFromStores1;
          cResult[12] = stateFromStores;
          cResult[13] = E;
          cResult[14] = items3;
          tmp27 = items3;
          tmp26 = E;
        }
        class C {
          constructor() {
            return GuildMemberStore.getMember(thread.guild_id, thread.ownerId);
          }
        }
        cResult[4] = thread.guild_id;
        cResult[5] = thread.ownerId;
        cResult[6] = C;
        tmp11 = C;
      }
    : (thread) => {
        let Text;
        let closure_3;
        let intl;
        let obj5;
        let obj6;
        thread = thread.thread;
        const accessibilityLabel = thread.accessibilityLabel;
        let stateFromStores1;
        let colorStrings;
        let closure_6;
        let ref;
        const timestamp = thread.timestamp;
        const tmp = closure_13();
        let obj = thread(stateFromStores1[13]);
        items = [ref];
        const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
        let obj2 = thread(stateFromStores1[13]);
        const items1 = [closure_6];
        stateFromStores1 = obj2.useStateFromStores(items1, () =>
          GuildMemberStore.getMember(thread.guild_id, thread.ownerId),
        );
        const items2 = [colorStrings];
        const obj3 = thread(stateFromStores1[13]);
        react = obj3.useStateFromStores(items2, () => colorStrings.roleStyle);
        let colorString;
        if (stateFromStores1 != null) {
          colorString = stateFromStores1.colorString;
        }
        if (colorString == null) {
          colorString = null;
        }
        colorStrings = undefined;
        if (stateFromStores1 != null) {
          colorStrings = stateFromStores1.colorStrings;
        }
        if (colorStrings == null) {
          colorStrings = null;
        }
        let id;
        const guild_id = thread.guild_id;
        const tmp8 = stateFromStores(stateFromStores1[15]);
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        closure_6 = tmp8(guild_id, id);
        ref = react.useRef(thread);
        const effect = react.useEffect(() => {
          ref.current = thread;
        });
        const items3 = [stateFromStores1, stateFromStores];
        const effect1 = react.useEffect(() => {
          if (null == stateFromStores) {
            const current = ref.current;
            items = [current.ownerId];
            const obj = GuildActionCreatorsDefault;
            const membersById = obj.requestMembersById(current.guild_id, items);
          }
        }, items3);
        const obj4 = { user: stateFromStores, timestamp, accessibilityLabel, children: closure_9(Text, obj5) };
        obj5 = {
          lineClamp: 1,
          ellipsizeMode: "tail",
          lineBreakMode: "tail",
          style: tmp.subtextContent,
          accessibilityLabel,
          variant: "text-sm/medium",
          color: "text-default",
          children: intl.format(thread(stateFromStores1[17]).t.imPXd5, obj6),
        };
        Text = tmp2(tmp3[19]).Text;
        intl = tmp2(tmp3[17]).intl;
        obj6 = {
          usernameHook(arg0, arg1) {
            let tmp10;
            let tmp7;
            let tmp9;
            let str;
            if (stateFromStores1 != null) {
              str = stateFromStores1.nick;
            }
            if (str == null) {
              const obj = UserUtilsDefault;
              str = obj.getName(stateFromStores);
            }
            if (str == null) {
              str = "";
            }
            const obj2 = {
              nickname: str,
              usernameColor: tmp7,
              roleColor: colorString,
              roleColors: tmp9,
              shouldShowRoleDot: tmp10,
            };
            tmp7 = null;
            if ("username" === closure_3) {
              tmp7 = colorString;
            }
            tmp9 = null;
            if (closure_6) {
              tmp9 = colorStrings;
            }
            tmp10 = "dot" === closure_3 && null != colorString;
            return React4(closure_17, obj2, arg1);
          },
        };
        return closure_9(closure_16, obj4);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let message;
      let nick;
      let roleStyle;
      let thread;
      let tmp5;
      let obj = message(nick[12]);
      const cResult = obj.c(28);
      ({ thread, message } = arg0);
      let tmp4 = closure_13();
      if (cResult[0] !== message.author.id) {
        items = [message.author.id];
        cResult[0] = message.author.id;
        cResult[1] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        let tmp6;
        let tmp9;
        let tmp11;
        let tmp14;
        let tmp13;
        let tmp20;
        let tmp19;
        if (cResult[3] === thread.guild_id) {
          tmp6 = cResult[4];
        }
        let str = "ThreadBrowserRowSubtext";
        const tmpResult = message(nick[20]);
        const subscribeGuildMembers = tmpResult.useSubscribeGuildMembers(tmp6, "ThreadBrowserRowSubtext");
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore];
          cResult[5] = items1;
          tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== message.author) {
          const fn = function c() {
            let author = UserStore.getUser(message.author.id);
            if (author == null) {
              author = message.author;
            }
            return author;
          };
          cResult[6] = message.author;
          cResult[7] = fn;
          tmp11 = fn;
        } else {
          tmp11 = cResult[7];
        }
        const tmpResult5 = message(nick[13]);
        const stateFromStores = tmpResult5.useStateFromStores(tmp9, tmp11);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [roleStyle];
          const fn2 = function f() {
            return roleStyle.roleStyle;
          };
          cResult[8] = items2;
          cResult[9] = fn2;
          tmp14 = fn2;
          tmp13 = items2;
        } else {
          tmp13 = cResult[8];
          tmp14 = cResult[9];
        }
        const tmpResult6 = message(nick[13]);
        const stateFromStores1 = tmpResult6.useStateFromStores(tmp13, tmp14);
        const tmp18 = stateFromStores1(nick[21])(message);
        nick = tmp18.nick;
        const colorString = tmp18.colorString;
        const colorStrings = tmp18.colorStrings;
        if (cResult[10] !== message.id) {
          const tmp17Result = stateFromStores1(nick[22]);
          const extractTimestampResult = tmp17Result.extractTimestamp(message.id);
          const tmpResult7 = message(nick[14]);
          const timestampString = tmpResult7.getTimestampString(extractTimestampResult);
          const tmpResult8 = message(nick[14]);
          const timestampAccessibilityLabel = tmpResult8.getTimestampAccessibilityLabel(extractTimestampResult);
          cResult[10] = message.id;
          cResult[11] = timestampAccessibilityLabel;
          cResult[12] = timestampString;
          tmp20 = timestampString;
          tmp19 = timestampAccessibilityLabel;
        } else {
          tmp19 = cResult[11];
          tmp20 = cResult[12];
        }
        const tmp24 = stateFromStores1(nick[15])(thread.guild_id, stateFromStores.id);
        roleStyle = tmp24;
        if (cResult[13] === tmp24) {
          if (cResult[14] === colorString) {
            if (cResult[15] === colorStrings) {
              if (cResult[16] === message) {
                if (cResult[17] === nick) {
                  let tmp26;
                  if (cResult[18] === stateFromStores1) {
                    tmp26 = cResult[19];
                  }
                  if (cResult[20] === tmp4.subtextContent) {
                    let tmp28;
                    if (cResult[21] === tmp26) {
                      tmp28 = cResult[22];
                    }
                    if (cResult[23] === tmp28) {
                      if (cResult[24] === tmp20) {
                        if (cResult[25] === tmp19) {
                          let tmp31;
                          if (cResult[26] === stateFromStores) {
                            tmp31 = cResult[27];
                          }
                          return tmp31;
                        }
                      }
                    }
                    const obj2 = {
                      user: stateFromStores,
                      timestamp: tmp20,
                      accessibilityLabel: tmp19,
                      children: tmp28,
                    };
                    const tmp34 = closure_9(closure_16, obj2);
                    cResult[23] = tmp28;
                    cResult[24] = tmp20;
                    cResult[25] = tmp19;
                    cResult[26] = stateFromStores;
                    cResult[27] = tmp34;
                    tmp31 = tmp34;
                  }
                  const obj3 = {
                    lineClamp: 1,
                    ellipsizeMode: "tail",
                    lineBreakMode: "tail",
                    style: tmp25,
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: tmp26,
                  };
                  const tmp30 = closure_9(message(nick[19]).Text, obj3);
                  cResult[20] = tmp4.subtextContent;
                  cResult[21] = tmp26;
                  cResult[22] = tmp30;
                  tmp28 = tmp30;
                }
              }
            }
          }
        }
        const intl = message(tmp2[17]).intl;
        const obj4 = {
          usernameHook(arg0, arg1) {
            let tmp4;
            let tmp6;
            let tmp7;
            let str = nick;
            if (nick == null) {
              str = "";
            }
            const obj = {
              nickname: str,
              usernameColor: tmp4,
              roleColor: colorString,
              roleColors: tmp6,
              shouldShowRoleDot: tmp7,
            };
            tmp4 = null;
            if ("username" === stateFromStores1) {
              tmp4 = colorString;
            }
            tmp6 = null;
            if (roleStyle) {
              tmp6 = colorStrings;
            }
            tmp7 = "dot" === stateFromStores1 && null != colorString;
            return React4(closure_17, obj, arg1);
          },
          messageTextHook(arg0, arg1) {
            const obj = {
              children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content,
            };
            const LegacyText = native.LegacyText;
            return React4(LegacyText, obj, arg1);
          },
        };
        const formatResult = intl.format(message(nick[17]).t.M79KAH, obj4);
        cResult[13] = tmp24;
        cResult[14] = colorString;
        cResult[15] = colorStrings;
        cResult[16] = message;
        cResult[17] = nick;
        cResult[18] = stateFromStores1;
        cResult[19] = formatResult;
        tmp26 = formatResult;
      }
      const obj5 = {};
      obj5[thread.guild_id] = tmp5;
      cResult[2] = tmp5;
      cResult[3] = thread.guild_id;
      cResult[4] = obj5;
      tmp6 = obj5;
    }
  : (arg0) => {
      let Text;
      let c2;
      let c3;
      let c4;
      let closure_1;
      let intl;
      let message;
      let obj8;
      let obj9;
      let roleColor;
      let thread;
      ({ thread, message } = arg0);
      dependencyMap = undefined;
      c3 = undefined;
      c4 = undefined;
      let roleStyle;
      const tmp = closure_13();
      let obj = message(6814);
      items = [message.author.id];
      const subscribeGuildMembers = obj.useSubscribeGuildMembers(
        { [thread.guild_id]: items },
        "ThreadBrowserRowSubtext",
      );
      const items1 = [UserStore];
      const obj2 = message(504);
      const stateFromStores = obj2.useStateFromStores(items1, () => {
        let author = UserStore.getUser(message.author.id);
        if (author == null) {
          author = message.author;
        }
        return author;
      });
      const items2 = [roleStyle];
      const obj3 = message(504);
      importDefault = obj3.useStateFromStores(items2, () => roleStyle.roleStyle);
      let tmp4 = useMessageAuthorDefault(message);
      ({ nick: c2, colorString: c3, colorStrings: c4 } = tmp4);
      const obj4 = SnowflakeUtilsDefault;
      const extractTimestampResult = obj4.extractTimestamp(message.id);
      const obj5 = message(7409);
      const timestampString = obj5.getTimestampString(extractTimestampResult);
      const obj6 = message(7409);
      const timestampAccessibilityLabel = obj6.getTimestampAccessibilityLabel(extractTimestampResult);
      roleStyle = useHasEnhancedRoleColorsDefault(thread.guild_id, stateFromStores.id);
      const obj7 = {
        user: stateFromStores,
        timestamp: timestampString,
        accessibilityLabel: timestampAccessibilityLabel,
        children: closure_9(Text, obj8),
      };
      obj8 = {
        lineClamp: 1,
        ellipsizeMode: "tail",
        lineBreakMode: "tail",
        style: tmp.subtextContent,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl.format(message(1126).t.M79KAH, obj9),
      };
      Text = message(4886).Text;
      intl = message(1126).intl;
      obj9 = {
        usernameHook(arg0, arg1) {
          let tmp4;
          let tmp6;
          let tmp7;
          let str = c2;
          if (c2 == null) {
            str = "";
          }
          const obj = { nickname: str, usernameColor: tmp4, roleColor, roleColors: tmp6, shouldShowRoleDot: tmp7 };
          tmp4 = null;
          if ("username" === closure_1) {
            tmp4 = roleColor;
          }
          tmp6 = null;
          if (roleStyle) {
            tmp6 = c4;
          }
          tmp7 = "dot" === closure_1 && null != roleColor;
          return React4(closure_17, obj, arg1);
        },
        messageTextHook(arg0, arg1) {
          const obj = {
            children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content,
          };
          const LegacyText = native.LegacyText;
          return React4(LegacyText, obj, arg1);
        },
      };
      return closure_9(closure_16, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let accessibilityLabel;
      let children;
      let timestamp;
      const obj = react2;
      const cResult = obj.c(18);
      ({ children, timestamp, accessibilityLabel } = user);
      user = user.user;
      const tmp4 = closure_13();
      if (null == user) {
        const text = ` ${timestamp}`;
        if (cResult[0] === accessibilityLabel) {
          if (cResult[1] === tmp4.timestamp) {
            let tmp19;
            if (cResult[2] === ` ${timestamp}`) {
              tmp19 = cResult[3];
            }
            if (cResult[4] === tmp4.row) {
              let tmp22;
              if (cResult[5] === tmp19) {
                tmp22 = cResult[6];
              }
              return tmp22;
            }
            const obj2 = { style: tmp4.row, children: tmp19 };
            const tmp25 = React4(View, obj2);
            cResult[4] = tmp4.row;
            cResult[5] = tmp19;
            cResult[6] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj3 = {
          style: tmp4.timestamp,
          accessibilityLabel,
          variant: "text-sm/medium",
          color: "text-muted",
          children: text,
        };
        const tmp21 = React4(Text_Text.Text, obj3);
        cResult[0] = accessibilityLabel;
        cResult[1] = tmp4.timestamp;
        cResult[2] = text;
        cResult[3] = tmp21;
        tmp19 = tmp21;
      } else {
        let tmp5;
        if (cResult[7] !== tmp4.dividerDot) {
          const obj4 = { style: tmp4.dividerDot };
          const tmp8 = React4(View, obj4);
          cResult[7] = tmp4.dividerDot;
          cResult[8] = tmp8;
          tmp5 = tmp8;
        } else {
          tmp5 = cResult[8];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + timestamp;
        if (cResult[9] === accessibilityLabel) {
          if (cResult[10] === tmp4.timestamp) {
            let tmp11;
            if (cResult[11] === combined) {
              tmp11 = cResult[12];
            }
            if (cResult[13] === children) {
              if (cResult[14] === tmp4.row) {
                if (cResult[15] === tmp5) {
                  let tmp14;
                  if (cResult[16] === tmp11) {
                    tmp14 = cResult[17];
                  }
                  return tmp14;
                }
              }
            }
            const obj5 = { style: tmp4.row, children: items };
            items = [children, tmp5, tmp11];
            const tmp17 = authStore(View, obj5);
            cResult[13] = children;
            cResult[14] = tmp4.row;
            cResult[15] = tmp5;
            cResult[16] = tmp11;
            cResult[17] = tmp17;
            tmp14 = tmp17;
          }
        }
        const obj6 = {
          style: tmp4.timestamp,
          accessibilityLabel,
          variant: "text-sm/medium",
          color: "text-muted",
          children: combined,
        };
        const tmp13 = React4(Text_Text.Text, obj6);
        cResult[9] = accessibilityLabel;
        cResult[10] = tmp4.timestamp;
        cResult[11] = combined;
        cResult[12] = tmp13;
        tmp11 = tmp13;
      }
    }
  : (arg0) => {
      let accessibilityLabel;
      let children;
      let obj2;
      let timestamp;
      let tmp6;
      let user;
      ({ timestamp, accessibilityLabel } = arg0);
      ({ user, children } = arg0);
      const tmp = closure_13();
      if (null == user) {
        const obj = { style: tmp.row, children: React4(Text_Text.Text, obj2) };
        obj2 = {
          style: tmp.timestamp,
          accessibilityLabel,
          variant: "text-sm/medium",
          color: "text-muted",
          children: ` ${timestamp}`,
        };
        tmp6 = React4(View, obj);
      } else {
        const obj3 = { style: tmp.row, children: items };
        items = [children, ,];
        const obj4 = { style: tmp.dividerDot };
        items[1] = React4(View, obj4);
        const _HermesInternal = HermesInternal;
        const obj5 = {
          style: tmp.timestamp,
          accessibilityLabel,
          variant: "text-sm/medium",
          color: "text-muted",
          children: "" + timestamp,
        };
        const Text = Text_Text.Text;
        items[2] = React4(Text, obj5);
        tmp6 = authStore(View, obj3);
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items1;
      let nickname;
      let roleColor;
      let roleColors;
      let shouldShowRoleDot;
      let username;
      let usernameColor;
      const obj = react2;
      const cResult = obj.c(16);
      ({ nickname, usernameColor, roleColor, roleColors, shouldShowRoleDot } = arg0);
      const tmp4 = closure_13();
      if (null != usernameColor) {
        let tmp5;
        if (cResult[0] !== usernameColor) {
          const obj2 = { color: usernameColor };
          cResult[0] = usernameColor;
          cResult[1] = obj2;
          tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.username) {
          let tmp6;
          if (cResult[3] === tmp5) {
            tmp6 = cResult[4];
          }
          username = tmp6;
        }
        items = [tmp4.username, tmp5];
        cResult[2] = tmp4.username;
        cResult[3] = tmp5;
        cResult[4] = items;
        tmp6 = items;
      } else {
        username = tmp4.username;
      }
      const tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
      const processColorStringsArray = tmpResult.useProcessColorStringsArray(roleColors);
      const tmp7 = !shouldShowRoleDot && processColorStringsArray.length > 1;
      if (cResult[5] === roleColor) {
        if (cResult[6] === roleColors) {
          let tmp8;
          if (cResult[7] === shouldShowRoleDot) {
            tmp8 = cResult[8];
          }
          let tmp11;
          if (tmp7) {
            tmp11 = processColorStringsArray;
          }
          if (cResult[9] === nickname) {
            if (cResult[10] === username) {
              let tmp12;
              if (cResult[11] === tmp11) {
                tmp12 = cResult[12];
              }
              if (cResult[13] === tmp8) {
                let tmp15;
                if (cResult[14] === tmp12) {
                  tmp15 = cResult[15];
                }
                return tmp15;
              }
              const obj3 = { children: items1 };
              items1 = [tmp8, tmp12];
              const tmp18 = authStore(unpackModuleId, obj3);
              cResult[13] = tmp8;
              cResult[14] = tmp12;
              cResult[15] = tmp18;
              tmp15 = tmp18;
            }
          }
          const obj4 = {
            variant: "text-sm/semibold",
            color: "mobile-text-heading-primary",
            gradientColors: tmp11,
            style: username,
            children: nickname,
          };
          const tmp14 = React4(Text_Text.Text, obj4);
          cResult[9] = nickname;
          cResult[10] = username;
          cResult[11] = tmp11;
          cResult[12] = tmp14;
          tmp12 = tmp14;
        }
      }
      let tmp9 = shouldShowRoleDot;
      if (tmp9) {
        const obj5 = { color: roleColor, colors: roleColors, size: "small" };
        tmp9 = React4(native.RoleDot, obj5);
      }
      cResult[5] = roleColor;
      cResult[6] = roleColors;
      cResult[7] = shouldShowRoleDot;
      cResult[8] = tmp9;
      tmp8 = tmp9;
    }
  : (usernameColor) => {
      let nickname;
      let roleColor;
      let roleColors;
      let shouldShowRoleDot;
      usernameColor = usernameColor.usernameColor;
      ({ roleColors, shouldShowRoleDot } = usernameColor);
      ({ nickname, roleColor } = usernameColor);
      const tmp = closure_13();
      let closure_1 = tmp;
      items = [usernameColor, tmp];
      const memo = react.useMemo(() => {
        let username;
        if (null != usernameColor) {
          items = [user.username];
          const obj = { color: tmp };
          items[1] = obj;
          username = items;
        } else {
          username = user.username;
        }
        return username;
      }, items);
      let obj = enhanced_role_colors_EnhancedRoleColorUtils;
      const processColorStringsArray = obj.useProcessColorStringsArray(roleColors);
      const tmp5 = !shouldShowRoleDot && processColorStringsArray.length > 1;
      if (shouldShowRoleDot) {
        const obj2 = { color: roleColor, colors: roleColors, size: "small" };
        shouldShowRoleDot = React4(native.RoleDot, obj2);
      }
      const items1 = [shouldShowRoleDot];
      let tmp10;
      const Text = Text_Text.Text;
      if (tmp5) {
        tmp10 = processColorStringsArray;
      }
      const obj3 = { children: items1 };
      items1[1] = React4(Text, {
        variant: "text-sm/semibold",
        color: "mobile-text-heading-primary",
        gradientColors: tmp10,
        style: memo,
        children: nickname,
      });
      return authStore(unpackModuleId, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = tmp5;
