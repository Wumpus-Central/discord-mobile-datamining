// === Module 17420: ThreadBrowserRowSubtext ===

// Module 17420 (ThreadBrowserRowSubtext)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5408 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 5627 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7979 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 8138 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserStore from "UserStore" /* 1390 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7005 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let items = [, ];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = fn(1085).MessageTypes);
const createStyles = fn(5092);
let obj = { row: { flexDirection: "row" }, subtextContent: { lineHeight: 18, flexShrink: 1 }, timestamp: { lineHeight: 18 }, username: { fontSize: 14, lineHeight: 18, fontFamily: fn(1096).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.TEXT_SUBTLE }, dividerDot: null };
let size = { width: 4, height: 4, marginHorizontal: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignSelf: "center" };
obj.dividerDot = size;
let closure_13 = createStyles.createStyles(obj);
fn(558);
let obj3 = { fontSize: 14, lineHeight: 18, fontFamily: fn(1096).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.TEXT_SUBTLE };
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CreatedBy(thread) {
  const cResult = thread(stateFromStores1[12]).c(31);
  thread = thread.thread;
  ({ timestamp, accessibilityLabel } = thread);
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== thread.ownerId) {
    const fn = function c() {
      return UserStore.getUser(thread.ownerId);
    };
    cResult[1] = thread.ownerId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = thread(stateFromStores1[12]);
  const stateFromStores = thread(stateFromStores1[13]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === thread.guild_id) {
    if (cResult[5] === thread.ownerId) {
      let tmp11 = cResult[6];
    }
    stateFromStores1 = tmp(tmp2[13]).useStateFromStores(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [colorStrings];
      class R {
        constructor() {
          return c5.roleStyle;
        }
      }
      cResult[7] = items2;
      cResult[8] = R;
      let tmp14 = R;
      let tmp13 = items2;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    const tmpResult3 = tmp(tmp2[13]);
    const stateFromStores2 = tmp(tmp2[13]).useStateFromStores(tmp13, tmp14);
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
    const tmpResult4 = tmp(tmp2[13]);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const tmp21Result = stateFromStores(tmp2[15])(thread.guild_id, id);
    GuildMemberStore = tmp21Result;
    class C {
      constructor() {
        return closure_6.getMember(thread.guild_id, thread.ownerId);
      }
    }
    UserStore = stateFromStores2.useRef(thread);
    if (cResult[9] !== thread) {
      const fn2 = function k() {
        closure_7.current = thread;
      };
      cResult[9] = thread;
      class R {
        constructor() {
          return c5.roleStyle;
        }
      }
      cResult[10] = fn2;
      let tmp24 = fn2;
    } else {
      tmp24 = cResult[10];
    }
    const effect = obj5.useEffect(tmp24);
    if (cResult[11] === stateFromStores1) {
      if (cResult[12] === stateFromStores) {
        let tmp26 = cResult[13];
        let tmp27 = cResult[14];
      }
      const effect1 = obj5.useEffect(tmp26, tmp27);
      if (cResult[15] === tmp21Result) {
        if (stateFromStores1 != null) {
          const nick = stateFromStores1.nick;
        }
        class R {
          constructor() {
            return c5.roleStyle;
          }
        }
      }
      class R {
        constructor() {
          return c5.roleStyle;
        }
      }
      let obj2 = {
        usernameHook(arg0, arg1) {
              let str;
              if (stateFromStores1 != null) {
                str = stateFromStores1.nick;
              }
              if (str == null) {
                str = UserUtilsDefault.getName(stateFromStores);
              }
              if (str == null) {
                str = "";
              }
              const obj2 = { nickname: str, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
              let tmp7 = null;
              if ("username" === stateFromStores2) {
                tmp7 = colorString;
              }
              obj2.usernameColor = tmp7;
              obj2.roleColor = colorString;
              let tmp9 = null;
              if (closure_6) {
                tmp9 = colorStrings;
              }
              obj2.roleColors = tmp9;
              obj2.shouldShowRoleDot = "dot" === stateFromStores2 && null != colorString;
              return options(closure_17, obj2, arg1);
            }
      };
      const formatResult = obj6.format(tmp(tmp2[17]).t.imPXd5, obj2);
      cResult[15] = tmp21Result;
      let nick1;
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
        if (null == closure_1) {
          tmp2 = closure_7;
          current = closure_7.current;
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[16]);
          items = [];
          items[0] = current.ownerId;
          membersById = obj.requestMembersById(current.guild_id, items);
        } else {
          tmp = closure_2;
        }
        return;
      }
    }
    const items3 = [stateFromStores1, stateFromStores];
    cResult[11] = stateFromStores1;
    cResult[12] = stateFromStores;
    cResult[13] = E;
    cResult[14] = items3;
    tmp27 = items3;
    tmp26 = E;
    const tmp21 = stateFromStores(tmp2[15]);
  }
  class C {
    constructor() {
      return closure_6.getMember(thread.guild_id, thread.ownerId);
    }
  }
  cResult[4] = thread.guild_id;
  cResult[5] = thread.ownerId;
  cResult[6] = C;
  tmp11 = C;
}) : (function CreatedBy(thread) {
  thread = thread.thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let stateFromStores1;
  let colorStrings;
  closure_6 = undefined;
  let ref;
  const tmp = closure_13();
  items = [ref];
  const stateFromStores = thread(stateFromStores1[13]).useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
  let obj = thread(stateFromStores1[13]);
  const items1 = [closure_6];
  stateFromStores1 = thread(stateFromStores1[13]).useStateFromStores(items1, () => GuildMemberStore.getMember(thread.guild_id, thread.ownerId));
  let obj2 = thread(stateFromStores1[13]);
  const items2 = [colorStrings];
  noop = thread(stateFromStores1[13]).useStateFromStores(items2, () => colorStrings.roleStyle);
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
  const obj3 = thread(stateFromStores1[13]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_6 = stateFromStores(stateFromStores1[15])(thread.guild_id, id);
  ref = noop.useRef(thread);
  const effect = noop.useEffect(() => {
    closure_7.current = thread;
  });
  const items3 = [stateFromStores1, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (null == stateFromStores) {
      const current = ref.current;
      items = [current.ownerId];
      const membersById = GuildActionCreatorsDefault.requestMembersById(current.guild_id, items);
    }
  }, items3);
  const obj4 = { user: stateFromStores, timestamp: thread.timestamp, accessibilityLabel, children: null };
  const obj5 = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, accessibilityLabel, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = tmp2(tmp3[17]).intl;
  obj5.children = intl.format(thread(stateFromStores1[17]).t.imPXd5, {
    usernameHook(arg0, arg1) {
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.nick;
      }
      if (str == null) {
        str = UserUtilsDefault.getName(stateFromStores);
      }
      if (str == null) {
        str = "";
      }
      const obj2 = { nickname: str, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
      let tmp7 = null;
      if ("username" === closure_3) {
        tmp7 = colorString;
      }
      obj2.usernameColor = tmp7;
      obj2.roleColor = colorString;
      let tmp9 = null;
      if (closure_6) {
        tmp9 = colorStrings;
      }
      obj2.roleColors = tmp9;
      obj2.shouldShowRoleDot = "dot" === closure_3 && null != colorString;
      return options(closure_17, obj2, arg1);
    }
  });
  obj4.children = closure_9(thread(stateFromStores1[19]).Text, obj5);
  return closure_9(closure_16, obj4);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageContent(arg0) {
  const cResult = message(nick[12]).c(28);
  ({ thread, message } = arg0);
  let tmp4 = closure_13();
  if (cResult[0] !== message.author.id) {
    items = [message.author.id];
    cResult[0] = message.author.id;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === thread.guild_id) {
      let tmp6 = cResult[4];
    }
    const subscribeGuildMembers = message(tmp2[20]).useSubscribeGuildMembers(tmp6, "ThreadBrowserRowSubtext");
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      cResult[5] = items1;
      let tmp9 = items1;
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
      let tmp11 = fn;
    } else {
      tmp11 = cResult[7];
    }
    const tmpResult = message(tmp2[20]);
    const stateFromStores = message(tmp2[13]).useStateFromStores(tmp9, tmp11);
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [roleStyle];
      const fn2 = function f() {
        return roleStyle.roleStyle;
      };
      cResult[8] = items2;
      cResult[9] = fn2;
      let tmp14 = fn2;
      let tmp13 = items2;
    } else {
      tmp13 = cResult[8];
      tmp14 = cResult[9];
    }
    const tmpResult5 = message(tmp2[13]);
    const stateFromStores1 = message(tmp2[13]).useStateFromStores(tmp13, tmp14);
    const tmp18 = stateFromStores1(tmp2[21])(message);
    nick = tmp18.nick;
    const colorString = tmp18.colorString;
    const colorStrings = tmp18.colorStrings;
    if (cResult[10] !== message.id) {
      const extractTimestampResult = tmp17(tmp2[22]).extractTimestamp(message.id);
      const tmp17Result = tmp17(tmp2[22]);
      const timestampString = message(tmp2[14]).getTimestampString(extractTimestampResult);
      const tmpResult7 = message(tmp2[14]);
      const timestampAccessibilityLabel = message(tmp2[14]).getTimestampAccessibilityLabel(extractTimestampResult);
      cResult[10] = message.id;
      cResult[11] = timestampAccessibilityLabel;
      cResult[12] = timestampString;
      let tmp20 = timestampString;
      let tmp19 = timestampAccessibilityLabel;
      const tmpResult8 = message(tmp2[14]);
    } else {
      tmp19 = cResult[11];
      tmp20 = cResult[12];
    }
    const tmp24 = stateFromStores1(tmp2[15])(thread.guild_id, stateFromStores.id);
    roleStyle = tmp24;
    if (cResult[13] === tmp24) {
      if (cResult[14] === colorString) {
        if (cResult[15] === colorStrings) {
          if (cResult[16] === message) {
            if (cResult[17] === nick) {
              if (cResult[18] === stateFromStores1) {
                let tmp26 = cResult[19];
              }
              if (cResult[20] === tmp4.subtextContent) {
                if (cResult[21] === tmp26) {
                  let tmp28 = cResult[22];
                }
                if (cResult[23] === tmp28) {
                  if (cResult[24] === tmp20) {
                    if (cResult[25] === tmp19) {
                      if (cResult[26] === stateFromStores) {
                        let tmp31 = cResult[27];
                      }
                      return tmp31;
                    }
                  }
                }
                const obj2 = { user: stateFromStores, timestamp: tmp20, accessibilityLabel: tmp19, children: tmp28 };
                const tmp34 = closure_9(closure_16, obj2);
                cResult[23] = tmp28;
                cResult[24] = tmp20;
                cResult[25] = tmp19;
                cResult[26] = stateFromStores;
                cResult[27] = tmp34;
                tmp31 = tmp34;
              }
              const obj3 = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp25, variant: "text-sm/medium", color: "text-default", children: tmp26 };
              const tmp30 = closure_9(message(tmp2[19]).Text, obj3);
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
          let str = nick;
          if (nick == null) {
            str = "";
          }
          const obj = { nickname: str, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
          let tmp4 = null;
          if ("username" === stateFromStores1) {
            tmp4 = colorString;
          }
          obj.usernameColor = tmp4;
          obj.roleColor = colorString;
          let tmp6 = null;
          if (closure_5) {
            tmp6 = colorStrings;
          }
          obj.roleColors = tmp6;
          obj.shouldShowRoleDot = "dot" === stateFromStores1 && null != colorString;
          return options(closure_17, obj, arg1);
        },
      messageTextHook(arg0, arg1) {
          return options(native.LegacyText, { children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content }, arg1);
        }
    };
    const formatResult = intl.format(message(tmp2[17]).t.M79KAH, obj4);
    cResult[13] = tmp24;
    cResult[14] = colorString;
    cResult[15] = colorStrings;
    cResult[16] = message;
    cResult[17] = nick;
    cResult[18] = stateFromStores1;
    cResult[19] = formatResult;
    tmp26 = formatResult;
    const tmpResult6 = message(tmp2[13]);
  }
  const obj5 = {};
  obj5[thread.guild_id] = tmp5;
  cResult[2] = tmp5;
  cResult[3] = thread.guild_id;
  cResult[4] = obj5;
  tmp6 = obj5;
  let obj = message(nick[12]);
}) : (function MessageContent(arg0) {
  ({ thread, message } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let roleStyle;
  const tmp = closure_13();
  items = [message.author.id];
  const subscribeGuildMembers = message(7010).useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  let obj = message(7010);
  const items1 = [UserStore];
  const stateFromStores = message(504).useStateFromStores(items1, () => {
    let author = UserStore.getUser(message.author.id);
    if (author == null) {
      author = message.author;
    }
    return author;
  });
  const obj2 = message(504);
  const items2 = [roleStyle];
  importDefault = message(504).useStateFromStores(items2, () => roleStyle.roleStyle);
  const obj3 = message(504);
  ({ nick: c2, colorString: c3, colorStrings: c4 } = useMessageAuthorDefault(message));
  let tmp4 = useMessageAuthorDefault(message);
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
  const timestampString = message(7922).getTimestampString(extractTimestampResult);
  const obj5 = message(7922);
  const timestampAccessibilityLabel = message(7922).getTimestampAccessibilityLabel(extractTimestampResult);
  roleStyle = useHasEnhancedRoleColorsDefault(thread.guild_id, stateFromStores.id);
  const obj7 = { user: stateFromStores, timestamp: timestampString, accessibilityLabel: timestampAccessibilityLabel, children: null };
  const obj8 = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = message(1126).intl;
  obj8.children = intl.format(message(1126).t.M79KAH, {
    usernameHook(arg0, arg1) {
      let str = c2;
      if (c2 == null) {
        str = "";
      }
      const obj = { nickname: str, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
      let tmp4 = null;
      if ("username" === closure_1) {
        tmp4 = roleColor;
      }
      obj.usernameColor = tmp4;
      obj.roleColor = roleColor;
      let tmp6 = null;
      if (closure_5) {
        tmp6 = c4;
      }
      obj.roleColors = tmp6;
      obj.shouldShowRoleDot = "dot" === closure_1 && null != roleColor;
      return options(closure_17, obj, arg1);
    },
    messageTextHook(arg0, arg1) {
      return options(native.LegacyText, { children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content }, arg1);
    }
  });
  obj7.children = closure_9(message(5088).Text, obj8);
  return closure_9(closure_16, obj7);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function SubstringRow(user) {
  const cResult = c.c(18);
  ({ children, timestamp, accessibilityLabel } = user);
  const tmp4 = closure_13();
  if (null == user.user) {
    const text = ` ${timestamp}`;
    if (cResult[0] === accessibilityLabel) {
      if (cResult[1] === tmp4.timestamp) {
        if (cResult[2] === ` ${timestamp}`) {
          let tmp19 = cResult[3];
        }
        if (cResult[4] === tmp4.row) {
          if (cResult[5] === tmp19) {
            let tmp22 = cResult[6];
          }
          return tmp22;
        }
        const obj2 = { style: tmp4.row, children: tmp19 };
        const tmp25 = options(View, obj2);
        cResult[4] = tmp4.row;
        cResult[5] = tmp19;
        cResult[6] = tmp25;
        tmp22 = tmp25;
      }
    }
    const obj3 = { style: tmp4.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: text };
    const tmp21 = options(Text_Text.Text, obj3);
    cResult[0] = accessibilityLabel;
    cResult[1] = tmp4.timestamp;
    cResult[2] = text;
    cResult[3] = tmp21;
    tmp19 = tmp21;
  } else {
    if (cResult[7] !== tmp4.dividerDot) {
      const obj4 = { style: tmp4.dividerDot };
      const tmp8 = options(View, obj4);
      cResult[7] = tmp4.dividerDot;
      cResult[8] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[8];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + timestamp;
    if (cResult[9] === accessibilityLabel) {
      if (cResult[10] === tmp4.timestamp) {
        if (cResult[11] === combined) {
          let tmp11 = cResult[12];
        }
        if (cResult[13] === children) {
          if (cResult[14] === tmp4.row) {
            if (cResult[15] === tmp5) {
              if (cResult[16] === tmp11) {
                let tmp14 = cResult[17];
              }
              return tmp14;
            }
          }
        }
        const obj5 = { style: tmp4.row, children: null };
        items = [children, tmp5, tmp11];
        obj5.children = items;
        const tmp17 = collapsed(View, obj5);
        cResult[13] = children;
        cResult[14] = tmp4.row;
        cResult[15] = tmp5;
        cResult[16] = tmp11;
        cResult[17] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj6 = { style: tmp4.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: combined };
    const tmp13 = options(Text_Text.Text, obj6);
    cResult[9] = accessibilityLabel;
    cResult[10] = tmp4.timestamp;
    cResult[11] = combined;
    cResult[12] = tmp13;
    tmp11 = tmp13;
  }
}) : (function SubstringRow(arg0) {
  ({ timestamp, accessibilityLabel } = arg0);
  ({ user, children } = arg0);
  const tmp = closure_13();
  if (null == user) {
    const obj = { style: tmp.row, children: null };
    const obj2 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: ` ${timestamp}` };
    obj.children = options(Text_Text.Text, obj2);
    let tmp6 = options(View, obj);
  } else {
    const obj3 = { style: tmp.row, children: null };
    items = [children, , ];
    const obj4 = { style: tmp.dividerDot };
    items[1] = options(View, obj4);
    const obj5 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj5.children = "" + timestamp;
    items[2] = options(Text_Text.Text, obj5);
    obj3.children = items;
    tmp6 = collapsed(View, obj3);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function Username(arg0) {
  const cResult = c.c(16);
  ({ nickname, usernameColor, roleColor, roleColors, shouldShowRoleDot } = arg0);
  let username = closure_13();
  if (null != usernameColor) {
    if (cResult[0] !== usernameColor) {
      const obj2 = { color: usernameColor };
      cResult[0] = usernameColor;
      cResult[1] = obj2;
      let tmp4 = obj2;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] === username.username) {
    }
    items = [username.username, tmp4];
    username = username.username;
    cResult[2] = username;
    cResult[3] = tmp4;
    cResult[4] = items;
  } else {
    const username2 = username.username;
    const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(roleColors);
    let tmp7 = !shouldShowRoleDot;
    if (!shouldShowRoleDot) {
      tmp7 = processColorStringsArray.length > 1;
    }
    if (cResult[5] === roleColor) {
      if (cResult[6] === roleColors) {
        if (cResult[7] === shouldShowRoleDot) {
          let tmp8 = cResult[8];
        }
        let tmp11;
        if (tmp7) {
          tmp11 = processColorStringsArray;
        }
        if (cResult[9] === nickname) {
          if (cResult[10] === username2) {
            if (cResult[11] === tmp11) {
              let tmp12 = cResult[12];
            }
            if (cResult[13] === tmp8) {
              if (cResult[14] === tmp12) {
                let tmp15 = cResult[15];
              }
              return tmp15;
            }
            const obj3 = { children: null };
            const items1 = [tmp8, tmp12];
            obj3.children = items1;
            const tmp18 = collapsed(closure_1_11, obj3);
            cResult[13] = tmp8;
            cResult[14] = tmp12;
            cResult[15] = tmp18;
            tmp15 = tmp18;
          }
        }
        const obj4 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp11, style: username2, children: nickname };
        const tmp14 = options(Text_Text.Text, obj4);
        cResult[9] = nickname;
        cResult[10] = username2;
        cResult[11] = tmp11;
        cResult[12] = tmp14;
        tmp12 = tmp14;
      }
    }
    let tmp9 = shouldShowRoleDot;
    if (shouldShowRoleDot) {
      const obj5 = { color: roleColor, colors: roleColors, size: "small" };
      tmp9 = options(native.RoleDot, obj5);
    }
    cResult[5] = roleColor;
    cResult[6] = roleColors;
    cResult[7] = shouldShowRoleDot;
    cResult[8] = tmp9;
    tmp8 = tmp9;
    const tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
  }
}) : (function Username(usernameColor) {
  usernameColor = usernameColor.usernameColor;
  ({ roleColors, shouldShowRoleDot } = usernameColor);
  ({ nickname, roleColor } = usernameColor);
  const tmp = closure_13();
  const user = tmp;
  items = [usernameColor, tmp];
  const memo = noop.useMemo(() => {
    if (null != usernameColor) {
      items = [user.username, ];
      const obj = { color: tmp };
      items[1] = obj;
      let username = items;
    } else {
      username = user.username;
    }
    return username;
  }, items);
  const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(roleColors);
  let tmp5 = !shouldShowRoleDot;
  if (!shouldShowRoleDot) {
    tmp5 = processColorStringsArray.length > 1;
  }
  if (shouldShowRoleDot) {
    const obj2 = { color: roleColor, colors: roleColors, size: "small" };
    shouldShowRoleDot = options(native.RoleDot, obj2);
  }
  const items1 = [shouldShowRoleDot, ];
  let tmp10;
  if (tmp5) {
    tmp10 = processColorStringsArray;
  }
  const obj3 = { children: null };
  items1[1] = options(Text_Text.Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp10, style: memo, children: nickname });
  obj3.children = items1;
  return collapsed(closure_1_11, obj3);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadSubtext(thread) {
  const cResult = id(576).c(15);
  thread = thread.thread;
  id = thread.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [ThreadMessageStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = id(576);
  const stateFromStores = id(504).useStateFromStores(first, tmp6, tmp7);
  const tmpResult = id(504);
  const lastMessageTimestamp = id(7922).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        if (cResult[12] === stateFromStores) {
          if (cResult[13] === thread) {
            let tmp11 = cResult[14];
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
    const timestampString = tmp(7922).getTimestampString(lastMessageTimestamp);
    cResult[4] = lastMessageTimestamp;
    cResult[5] = timestampString;
    let tmp15 = timestampString;
    const tmpResult5 = tmp(7922);
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== lastMessageTimestamp) {
    const timestampAccessibilityLabel = tmp(7922).getTimestampAccessibilityLabel(lastMessageTimestamp);
    cResult[6] = lastMessageTimestamp;
    cResult[7] = timestampAccessibilityLabel;
    let tmp17 = timestampAccessibilityLabel;
    const tmpResult6 = tmp(7922);
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === thread) {
    if (cResult[9] === tmp15) {
      if (cResult[10] === tmp17) {
        let tmp19 = cResult[11];
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
  const tmpResult4 = id(7922);
}) : (function ThreadSubtext(thread) {
  thread = thread.thread;
  const id = thread.id;
  items = [ThreadMessageStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => ThreadMessageStore.getMostRecentMessage(id), items1);
  const obj = id(504);
  const lastMessageTimestamp = id(7922).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        const obj3 = { thread, message: stateFromStores };
        return closure_9(closure_15, obj3);
      }
    }
  }
  const obj2 = id(7922);
  const timestampString = id(7922).getTimestampString(lastMessageTimestamp);
  const tmpResult = id(7922);
  const tmpResult2 = id(7922);
  return closure_9(closure_14, { thread, timestamp: timestampString, accessibilityLabel: id(7922).getTimestampAccessibilityLabel(lastMessageTimestamp) });
});