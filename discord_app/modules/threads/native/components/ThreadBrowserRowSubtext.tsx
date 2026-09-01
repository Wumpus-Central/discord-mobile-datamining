// === Module 16287: MessageContent ===

// Module 16287 (MessageContent)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4474 */;
import useNullableMessageAuthorDefault from "useNullableMessageAuthor" /* 4746 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 4957 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_6 from "trackCommunicationDisabled" /* 1992 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "updateState" /* 6151 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function MessageContent(arg0) {
  ({ thread, message } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  closure_5 = undefined;
  let obj = message(6156);
  items = [message.author.id];
  const subscribeGuildMembers = obj.useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  obj1 = message(589);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let author = closure_1_7.getUser(message.author.id);
    if (author == null) {
      author = message.author;
    }
    return author;
  });
  const tmp = callback3();
  const items2 = [closure_5];
  importDefault = message(589).useStateFromStores(items2, () => roleStyle.roleStyle);
  const obj3 = message(589);
  ({ nick: c2, colorString: c3, colorStrings: c4 } = useNullableMessageAuthorDefault(message));
  let tmp4 = useNullableMessageAuthorDefault(message);
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(message.id);
  const obj4 = DISCORD_EPOCHDefault;
  const timestampString = message(7525).getTimestampString(extractTimestampResult);
  const obj5 = message(7525);
  const timestampAccessibilityLabel = message(7525).getTimestampAccessibilityLabel(extractTimestampResult);
  closure_5 = useHasEnhancedRoleColorsDefault(thread.guild_id, stateFromStores.id);
  obj = { user: stateFromStores, timestamp: timestampString, accessibilityLabel: timestampAccessibilityLabel, children: null };
  obj = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = message(1236).intl;
  obj1 = {
    usernameHook(arg0, arg1) {
      let str = c2;
      if (c2 == null) {
        str = "";
      }
      const obj = { nickname: str, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
      let tmp4 = null;
      if ("username" === closure_1) {
        tmp4 = c3;
      }
      obj[1] = tmp4;
      obj[2] = c3;
      let tmp6 = null;
      if (closure_5) {
        tmp6 = c4;
      }
      obj[3] = tmp6;
      obj[4] = "dot" === closure_1 && null != c3;
      return closure_1_9(closure_1_17, obj, arg1);
    },
    messageTextHook(arg0, arg1) {
      return closure_1_9(message(_undefined[21]).LegacyText, { children: callback(_undefined[22])(message, { formatInline: true, allowGameMentions: true }).content }, arg1);
    }
  };
  obj[6] = intl.format(message(1236).t.M79KAH, obj1);
  obj[3] = callback(message(4474).Text, obj);
  return callback(SubstringRow, obj);
}
function SubstringRow(arg0) {
  ({ timestamp, accessibilityLabel } = arg0);
  ({ user, children } = arg0);
  const tmp = callback3();
  if (null == user) {
    let obj = { style: null, children: null };
    obj[0] = tmp.row;
    obj = { style: null, accessibilityLabel: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj[0] = tmp.timestamp;
    obj[1] = accessibilityLabel;
    obj[4] = ` ${timestamp}`;
    obj[1] = callback(Text.Text, obj);
    let tmp6 = callback(View, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.row;
    items = [children, , ];
    obj1 = { style: null };
    obj1[0] = tmp.dividerDot;
    items[1] = callback(View, obj1);
    const obj2 = { style: null, accessibilityLabel: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj2[0] = tmp.timestamp;
    obj2[1] = accessibilityLabel;
    const _HermesInternal = HermesInternal;
    obj2[4] = "" + timestamp;
    items[2] = callback(Text.Text, obj2);
    obj[1] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
}
function Username(usernameColor) {
  usernameColor = usernameColor.usernameColor;
  ({ roleColors, shouldShowRoleDot } = usernameColor);
  closure_1 = undefined;
  ({ nickname, roleColor } = usernameColor);
  const tmp = callback3();
  closure_1 = tmp;
  items = [usernameColor, tmp];
  const memo = importAllResult.useMemo(() => {
    if (null != usernameColor) {
      items = [user.username, ];
      const obj = { color: null };
      obj[0] = tmp;
      items[1] = obj;
      let username = items;
    } else {
      username = user.username;
    }
    return username;
  }, items);
  let obj = usernameColor(7870);
  const processColorStringsArray = obj.useProcessColorStringsArray(roleColors);
  let tmp5 = !shouldShowRoleDot;
  if (!shouldShowRoleDot) {
    tmp5 = processColorStringsArray.length > 1;
  }
  if (shouldShowRoleDot) {
    obj = { color: null, colors: null, size: "small" };
    obj[0] = roleColor;
    obj[1] = roleColors;
    shouldShowRoleDot = callback(tmp3(1297).RoleDot, obj);
  }
  const items1 = [shouldShowRoleDot, ];
  let tmp10;
  if (tmp5) {
    tmp10 = processColorStringsArray;
  }
  obj = { children: null };
  items1[1] = callback(usernameColor(4474).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp10, style: memo, children: nickname });
  obj[0] = items1;
  return closure_10(closure_11, obj);
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let items = [, ];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = require("ME").MessageTypes);
let obj = { row: { flexDirection: "row" }, subtextContent: { lineHeight: 18, flexShrink: 1 }, timestamp: { lineHeight: 18 }, username: null, dividerDot: null };
obj = { fontSize: 14, lineHeight: 18, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.TEXT_SUBTLE };
obj[3] = obj;
createCacheKey = { width: 4, height: 4, marginHorizontal: 4, borderRadius: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, alignSelf: "center" };
obj[4] = createCacheKey;
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo((thread) => {
  thread = thread.thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let stateFromStores;
  let stateFromStores1;
  importAllResult = undefined;
  let colorString;
  let colorStrings;
  closure_6 = undefined;
  closure_7 = undefined;
  let obj = thread(stateFromStores1[11]);
  items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => ref.getUser(thread.ownerId));
  obj1 = thread(stateFromStores1[11]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => member.getMember(thread.guild_id, thread.ownerId));
  const tmp = callback3();
  const items2 = [colorStrings];
  importAllResult = thread(stateFromStores1[11]).useStateFromStores(items2, () => colorStrings.roleStyle);
  colorString = undefined;
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
  closure_7 = importAllResult.useRef(thread);
  const effect = importAllResult.useEffect(() => {
    closure_7.current = thread;
  });
  const items3 = [stateFromStores1, stateFromStores];
  const effect1 = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const current = ref.current;
      items = [current.ownerId];
      const membersById = stateFromStores(stateFromStores1[14]).requestMembersById(current.guild_id, items);
      const obj = stateFromStores(stateFromStores1[14]);
    }
  }, items3);
  obj = { user: stateFromStores, timestamp: thread.timestamp, accessibilityLabel, children: null };
  obj = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, accessibilityLabel, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = tmp2(tmp3[16]).intl;
  obj1 = {
    usernameHook(arg0, arg1) {
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.nick;
      }
      if (str == null) {
        let obj = stateFromStores(stateFromStores1[17]);
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
      obj[1] = tmp7;
      obj[2] = colorString;
      let tmp9 = null;
      if (closure_6) {
        tmp9 = colorStrings;
      }
      obj[3] = tmp9;
      obj[4] = "dot" === closure_3 && null != colorString;
      return closure_1_9(closure_1_17, obj, arg1);
    }
  };
  obj[7] = intl.format(thread(stateFromStores1[16]).t.imPXd5, obj1);
  obj[3] = callback(thread(stateFromStores1[15]).Text, obj);
  return callback(SubstringRow, obj);
});
const result = require("set").fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = function ThreadSubtext(thread) {
  thread = thread.thread;
  let id;
  id = thread.id;
  let obj = id(589);
  items = [closure_8];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getMostRecentMessage(id), items1);
  const lastMessageTimestamp = id(7525).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        obj = { thread: null, message: null };
        obj[0] = thread;
        obj[1] = stateFromStores;
        return callback(MessageContent, obj);
      }
    }
  }
  let tmpResult = tmp(7525);
  const timestampString = tmpResult.getTimestampString(lastMessageTimestamp);
  tmpResult = tmp(7525);
  obj = { thread, timestamp: timestampString, accessibilityLabel: tmpResult.getTimestampAccessibilityLabel(lastMessageTimestamp) };
  return callback(closure_14, obj);
};