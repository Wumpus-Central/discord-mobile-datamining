// discord_app/modules/threads/native/components/ThreadBrowserRowSubtext.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useMessageAuthorDefault from "../../../messages/useMessageAuthor.tsx";
import useHasEnhancedRoleColorsDefault from "../../../premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import renderMessageMarkupDefault from "../../../messages/renderMessageMarkup.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ThreadMessageStore from "../../ThreadMessageStore.tsx";

require = fn;
function MessageContent(arg0) {
  ({ thread, message } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let roleStyle;
  let obj = message(7311);
  items = [message.author.id];
  const subscribeGuildMembers = obj.useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  let obj1 = message(504);
  const items1 = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let author = UserStore.getUser(message.author.id);
    if (author == null) {
      author = message.author;
    }
    return author;
  });
  const tmp = closure_13();
  const items2 = [roleStyle];
  importDefault = message(504).useStateFromStores(items2, () => roleStyle.roleStyle);
  const obj3 = message(504);
  ({ nick: c2, colorString: c3, colorStrings: c4 } = useMessageAuthorDefault(message));
  let tmp4 = useMessageAuthorDefault(message);
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
  const timestampString = message(7781).getTimestampString(extractTimestampResult);
  const obj5 = message(7781);
  const timestampAccessibilityLabel = message(7781).getTimestampAccessibilityLabel(extractTimestampResult);
  roleStyle = useHasEnhancedRoleColorsDefault(thread.guild_id, stateFromStores.id);
  obj = {
    user: stateFromStores,
    timestamp: timestampString,
    accessibilityLabel: timestampAccessibilityLabel,
    children: null,
  };
  obj = {
    lineClamp: 1,
    ellipsizeMode: "tail",
    lineBreakMode: "tail",
    style: tmp.subtextContent,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl = message(1114).intl;
  obj1 = {
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
      return React7(
        native.LegacyText,
        { children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content },
        arg1,
      );
    },
  };
  obj.children = intl.format(message(1114).t.M79KAH, obj1);
  obj.children = closure_9(message(4556).Text, obj);
  return closure_9(SubstringRow, obj);
}
function SubstringRow(arg0) {
  ({ timestamp, accessibilityLabel } = arg0);
  ({ user, children } = arg0);
  const tmp = closure_13();
  if (null == user) {
    let obj = { style: tmp.row, children: null };
    obj = {
      style: tmp.timestamp,
      accessibilityLabel,
      variant: "text-sm/medium",
      color: "text-muted",
      children: ` ${timestamp}`,
    };
    obj.children = React7(Text_Text.Text, obj);
    let tmp6 = React7(View, obj);
  } else {
    obj = { style: tmp.row, children: null };
    items = [children, ,];
    const obj1 = { style: tmp.dividerDot };
    items[1] = React7(View, obj1);
    const obj2 = {
      style: tmp.timestamp,
      accessibilityLabel,
      variant: "text-sm/medium",
      color: "text-muted",
      children: null,
    };
    const _HermesInternal = HermesInternal;
    obj2.children = "" + timestamp;
    items[2] = React7(Text_Text.Text, obj2);
    obj.children = items;
    tmp6 = closure_1_10(View, obj);
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
      items = [user.username];
      const obj = { color: tmp };
      items[1] = obj;
      let username = items;
    } else {
      username = user.username;
    }
    return username;
  }, items);
  let obj = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = obj.useProcessColorStringsArray(roleColors);
  let tmp5 = !shouldShowRoleDot;
  if (!shouldShowRoleDot) {
    tmp5 = processColorStringsArray.length > 1;
  }
  if (shouldShowRoleDot) {
    obj = { color: roleColor, colors: roleColors, size: "small" };
    shouldShowRoleDot = React7(native.RoleDot, obj);
  }
  const items1 = [shouldShowRoleDot];
  let tmp10;
  if (tmp5) {
    tmp10 = processColorStringsArray;
  }
  obj = { children: null };
  items1[1] = React7(Text_Text.Text, {
    variant: "text-sm/semibold",
    color: "mobile-text-heading-primary",
    gradientColors: tmp10,
    style: memo,
    children: nickname,
  });
  obj.children = items1;
  return closure_1_10(closure_1_11, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let items = [,];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = fn(1074).MessageTypes);
const createStyles = fn(4560);
let obj = {
  row: { flexDirection: "row" },
  subtextContent: { lineHeight: 18, flexShrink: 1 },
  timestamp: { lineHeight: 18 },
  username: null,
  dividerDot: null,
};
obj = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.TEXT_SUBTLE,
};
obj.username = obj;
let size = {
  width: 4,
  height: 4,
  marginHorizontal: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  alignSelf: "center",
};
obj.dividerDot = size;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((thread) => {
  thread = thread.thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let stateFromStores1;
  let colorStrings;
  closure_6 = undefined;
  let ref;
  let obj = thread(stateFromStores1[11]);
  items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
  let obj1 = thread(stateFromStores1[11]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => GuildMemberStore.getMember(thread.guild_id, thread.ownerId));
  const tmp = closure_13();
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
  obj = { user: stateFromStores, timestamp: thread.timestamp, accessibilityLabel, children: null };
  obj = {
    lineClamp: 1,
    ellipsizeMode: "tail",
    lineBreakMode: "tail",
    style: tmp.subtextContent,
    accessibilityLabel,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl = tmp2(tmp3[16]).intl;
  obj1 = {
    usernameHook(arg0, arg1) {
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.nick;
      }
      if (str == null) {
        let obj = UserUtilsDefault;
        str = obj.getName(stateFromStores);
      }
      if (str == null) {
        str = "";
      }
      obj = { nickname: str, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
      let tmp7 = null;
      if ("username" === closure_3) {
        tmp7 = colorString;
      }
      obj.usernameColor = tmp7;
      obj.roleColor = colorString;
      let tmp9 = null;
      if (closure_6) {
        tmp9 = colorStrings;
      }
      obj.roleColors = tmp9;
      obj.shouldShowRoleDot = "dot" === closure_3 && null != colorString;
      return React7(Username, obj, arg1);
    },
  };
  obj.children = intl.format(thread(stateFromStores1[16]).t.imPXd5, obj1);
  obj.children = closure_9(thread(stateFromStores1[15]).Text, obj);
  return closure_9(SubstringRow, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = function ThreadSubtext(thread) {
  thread = thread.thread;
  const id = thread.id;
  let obj = id(504);
  items = [ThreadMessageStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => ThreadMessageStore.getMostRecentMessage(id), items1);
  const lastMessageTimestamp = id(7781).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        obj = { thread, message: stateFromStores };
        return closure_9(MessageContent, obj);
      }
    }
  }
  let tmpResult = tmp(7781);
  const timestampString = tmpResult.getTimestampString(lastMessageTimestamp);
  tmpResult = tmp(7781);
  obj = {
    thread,
    timestamp: timestampString,
    accessibilityLabel: tmpResult.getTimestampAccessibilityLabel(lastMessageTimestamp),
  };
  return closure_9(closure_14, obj);
};
