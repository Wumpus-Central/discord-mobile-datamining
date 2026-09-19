// === Module 17170: ThreadBrowserRowSubtext ===

// Module 17170 (ThreadBrowserRowSubtext)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import Text_Text from "Text/Text" /* 4752 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 4988 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5215 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5732 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 8131 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8218 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import UserStore from "UserStore" /* 1372 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7546 */;

require = fn;
function MessageContent(arg0) {
  ({ thread, message } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let roleStyle;
  const tmp = closure_13();
  items = [message.author.id];
  const subscribeGuildMembers = message(7551).useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  let obj = message(7551);
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
  const timestampString = message(8021).getTimestampString(extractTimestampResult);
  const obj5 = message(8021);
  const timestampAccessibilityLabel = message(8021).getTimestampAccessibilityLabel(extractTimestampResult);
  roleStyle = useHasEnhancedRoleColorsDefault(thread.guild_id, stateFromStores.id);
  const obj7 = { user: stateFromStores, timestamp: timestampString, accessibilityLabel: timestampAccessibilityLabel, children: null };
  const obj8 = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = message(1115).intl;
  obj8.children = intl.format(message(1115).t.M79KAH, {
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
      return React7(Username, obj, arg1);
    },
    messageTextHook(arg0, arg1) {
      return React7(native.LegacyText, { children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content }, arg1);
    }
  });
  obj7.children = closure_9(message(4752).Text, obj8);
  return closure_9(SubstringRow, obj7);
}
function SubstringRow(arg0) {
  ({ timestamp, accessibilityLabel } = arg0);
  ({ user, children } = arg0);
  const tmp = closure_13();
  if (null == user) {
    const obj = { style: tmp.row, children: null };
    const obj2 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: ` ${timestamp}` };
    obj.children = React7(Text_Text.Text, obj2);
    let tmp6 = React7(View, obj);
  } else {
    const obj3 = { style: tmp.row, children: null };
    items = [children, , ];
    const obj4 = { style: tmp.dividerDot };
    items[1] = React7(View, obj4);
    const obj5 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj5.children = "" + timestamp;
    items[2] = React7(Text_Text.Text, obj5);
    obj3.children = items;
    tmp6 = closure_1_10(View, obj3);
  }
  return tmp6;
}
function Username(usernameColor) {
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
    shouldShowRoleDot = React7(native.RoleDot, obj2);
  }
  const items1 = [shouldShowRoleDot, ];
  let tmp10;
  if (tmp5) {
    tmp10 = processColorStringsArray;
  }
  const obj3 = { children: null };
  items1[1] = React7(Text_Text.Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp10, style: memo, children: nickname });
  obj3.children = items1;
  return closure_1_10(closure_1_11, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let items = [, ];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = fn(1074).MessageTypes);
const createStyles = fn(4756);
let obj = { row: { flexDirection: "row" }, subtextContent: { lineHeight: 18, flexShrink: 1 }, timestamp: { lineHeight: 18 }, username: { fontSize: 14, lineHeight: 18, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.TEXT_SUBTLE }, dividerDot: null };
let size = { width: 4, height: 4, marginHorizontal: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignSelf: "center" };
obj.dividerDot = size;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((thread) => {
  thread = thread.thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let stateFromStores1;
  let colorStrings;
  closure_6 = undefined;
  let ref;
  const tmp = closure_13();
  items = [ref];
  const stateFromStores = thread(stateFromStores1[11]).useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
  let obj = thread(stateFromStores1[11]);
  const items1 = [closure_6];
  stateFromStores1 = thread(stateFromStores1[11]).useStateFromStores(items1, () => GuildMemberStore.getMember(thread.guild_id, thread.ownerId));
  let obj2 = thread(stateFromStores1[11]);
  const items2 = [colorStrings];
  noop = thread(stateFromStores1[11]).useStateFromStores(items2, () => colorStrings.roleStyle);
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
  const obj3 = thread(stateFromStores1[11]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_6 = stateFromStores(stateFromStores1[13])(thread.guild_id, id);
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
  const intl = tmp2(tmp3[16]).intl;
  obj5.children = intl.format(thread(stateFromStores1[16]).t.imPXd5, {
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
      return React7(Username, obj2, arg1);
    }
  });
  obj4.children = closure_9(thread(stateFromStores1[15]).Text, obj5);
  return closure_9(SubstringRow, obj4);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = function ThreadSubtext(thread) {
  thread = thread.thread;
  const id = thread.id;
  items = [ThreadMessageStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => ThreadMessageStore.getMostRecentMessage(id), items1);
  const obj = id(504);
  const lastMessageTimestamp = id(8021).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        const obj3 = { thread, message: stateFromStores };
        return closure_9(MessageContent, obj3);
      }
    }
  }
  const obj2 = id(8021);
  const timestampString = id(8021).getTimestampString(lastMessageTimestamp);
  const tmpResult = id(8021);
  const tmpResult2 = id(8021);
  return closure_9(closure_14, { thread, timestamp: timestampString, accessibilityLabel: id(8021).getTimestampAccessibilityLabel(lastMessageTimestamp) });
};