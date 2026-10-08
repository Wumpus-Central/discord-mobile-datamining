// === Module 11910: AppLauncherUserListActionSheet ===

// Module 11910 (AppLauncherUserListActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import TableRow from "TableRow" /* 6184 */;
import noop from "module_19" /* 19 */;

require = fn;
const DEFAULT_CONTENT_PADDING = fn(1501).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const AppLauncherUserListActionSheet = "AppLauncherUserListActionSheet";
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } });
fn(558);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyStateWithSnowflakeQuery(arg0) {
  const cResult = onPressRow(576).c(8);
  ({ query, onPressRow } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== query) {
    const items = [query];
    cResult[0] = query;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== onPressRow) {
    const fn = function o(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    };
    cResult[2] = onPressRow;
    cResult[3] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4.emptyState) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        let tmp7 = cResult[7];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(onPressRow(11870).AppLauncherList, { contentContainerStyle: tmp4.emptyState, data: tmp5, renderItem: tmp6, keyboardShouldPersistTaps: "always", keyboardDismissMode: "on-drag" });
  cResult[4] = tmp4.emptyState;
  cResult[5] = tmp5;
  cResult[6] = tmp6;
  cResult[7] = tmp8;
  tmp7 = tmp8;
  const obj = onPressRow(576);
  const obj2 = { contentContainerStyle: tmp4.emptyState, data: tmp5, renderItem: tmp6, keyboardShouldPersistTaps: "always", keyboardDismissMode: "on-drag" };
}) : (function EmptyStateWithSnowflakeQuery(onPressRow) {
  onPressRow = onPressRow.onPressRow;
  const obj = {
    contentContainerStyle: closure_6().emptyState,
    data: null,
    renderItem(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  };
  const items = [onPressRow.query];
  obj.data = items;
  return jsx(onPressRow(11870).AppLauncherList, {
    contentContainerStyle: closure_6().emptyState,
    data: null,
    renderItem(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherUserListActionSheet(onUserPress) {
  const cResult = onUserPress(576).c(18);
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  ({ channel, option } = onUserPress);
  ({ guild_id, id } = channel);
  if (cResult[0] !== onActionSheetDismiss) {
    const fn = function n() {
      ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherUserListActionSheet);
      onActionSheetDismiss();
    };
    cResult[0] = onActionSheetDismiss;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  if (cResult[2] === tmp3) {
    if (cResult[3] === onUserPress) {
      let tmp4 = cResult[4];
    }
    closure_3 = tmp4;
    if (cResult[5] !== tmp4) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      cResult[5] = tmp4;
      cResult[6] = U;
    } else {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      cResult[7] = tmp8;
    } else {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
    }
    if (cResult[8] === channel) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
    }
    if (channel.isPrivate()) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      let obj2 = { channelId: id, disableStickySections: true, hideTitle: true, headerShown: false, inActionSheet: true, onUserPress: tmp4, opensUserProfileOnUserPress: false };
      let tmp9Result = <tmp10 channelId={id} disableStickySections hideTitle headerShown={false} inActionSheet onUserPress={tmp4} opensUserProfileOnUserPress={false} />;
    } else {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              return closure_3({ user });
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(tmp(tmp2[8]).EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      tmp11[0] = id;
      tmp11[1] = guild_id;
      tmp11[3] = U;
      tmp11[6] = tmp4;
      tmp9Result = jsx(tmp10(11338), tmp11);
    }
    cResult[8] = channel;
    cResult[9] = id;
    cResult[10] = guild_id;
    class P {
      constructor(arg0) {
        obj = { user: onUserPress.user };
        tmp = onUserPress(obj);
        tmp2 = closure_2();
        return;
      }
    }
    cResult[11] = tmp4;
    cResult[12] = U;
    cResult[13] = tmp9Result;
  }
  class P {
    constructor(arg0) {
      obj = { user: onUserPress.user };
      tmp = onUserPress(obj);
      tmp2 = closure_2();
      return;
    }
  }
  cResult[2] = tmp3;
  cResult[3] = onUserPress;
  cResult[4] = P;
  tmp4 = P;
  const obj = onUserPress(576);
}) : (function AppLauncherUserListActionSheet(onUserPress) {
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  const channel = onUserPress.channel;
  let callback1;
  const id = channel.id;
  const items = [onActionSheetDismiss];
  const callback = callback1.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherUserListActionSheet);
    onActionSheetDismiss();
  }, items);
  const items1 = [callback, onUserPress];
  callback1 = callback1.useCallback((user) => {
    onUserPress({ user: user.user });
    callback();
  }, items1);
  const items2 = [callback1];
  const callback2 = callback1.useCallback((query) => {
    const user = query;
    if (obj.isSnowflake(query)) {
      const obj2 = {
        query,
        onPressRow() {
            return callback1({ user });
          }
      };
      let tmp3Result = <closure_1_7 query={query} onPressRow={function onPressRow() {
        return callback1({ user });
      }} />;
    } else {
      const obj3 = { style: { paddingTop: 80 }, lightSource: onActionSheetDismiss(callback[9]), darkSource: onActionSheetDismiss(callback[9]), title: null, body: null };
      const intl = onUserPress(callback[10]).intl;
      obj3.title = intl.string(onUserPress(callback[10]).t.vYocDz);
      const intl2 = onUserPress(callback[10]).intl;
      obj3.body = intl2.string(onUserPress(callback[10]).t.V6nAfF);
      tmp3Result = jsx(onUserPress(callback[8]).EmptyState, { style: { paddingTop: 80 }, lightSource: onActionSheetDismiss(callback[9]), darkSource: onActionSheetDismiss(callback[9]), title: null, body: null });
    }
    return tmp3Result;
  }, items2);
  const obj = { onDismiss: onActionSheetDismiss, option: onUserPress.option, contentContainerStyles: { paddingHorizontal: 0 }, children: null };
  if (channel.isPrivate()) {
    let obj2 = { channelId: id, disableStickySections: true, hideTitle: true, headerShown: false, inActionSheet: true, onUserPress: callback1, opensUserProfileOnUserPress: false };
    let tmp4Result = jsx(tmp6(tmp5[11]), { channelId: id, disableStickySections: true, hideTitle: true, headerShown: false, inActionSheet: true, onUserPress: callback1, opensUserProfileOnUserPress: false });
  } else {
    let obj3 = { channelId: id, guildId: channel.guild_id, searchable: true, searchableEmptyState: callback2, headerShown: false, opensUserProfileOnUserPress: false, onUserPress: callback1, inActionSheet: true, disableThemedGradient: true };
    tmp4Result = jsx(tmp6(tmp5[12]), { channelId: id, guildId: channel.guild_id, searchable: true, searchableEmptyState: callback2, headerShown: false, opensUserProfileOnUserPress: false, onUserPress: callback1, inActionSheet: true, disableThemedGradient: true });
  }
  obj.children = tmp4Result;
  return jsx(onUserPress(callback[13]).AppLauncherCommandOptionActionSheet, { onDismiss: onActionSheetDismiss, option: onUserPress.option, contentContainerStyles: { paddingHorizontal: 0 }, children: null });
});
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";