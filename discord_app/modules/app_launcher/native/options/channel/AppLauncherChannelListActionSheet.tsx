// === Module 11831: AppLauncherChannelListActionSheet ===

// Module 11831 (AppLauncherChannelListActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5628 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import TextIcon3 from "TextIcon" /* 5871 */;
import TableRow2 from "TableRow" /* 6000 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11820 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let length, onChannelPress, query, ref;

let metroImportDefault;
let metroRequire;
let obj2;
let GuildStore = GuildStore_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let AppLauncherChannelListActionSheet = "AppLauncherChannelListActionSheet";
let obj = { channelIconWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let wrapperSize;
  const obj = react2;
  const cResult = obj.c(9);
  ({ channel, size, wrapperSize } = arg0);
  let str = "sm";
  if (undefined !== size) {
    str = size;
  }
  let num = 32;
  if (undefined !== wrapperSize) {
    num = wrapperSize;
  }
  const tmp4 = closure_9();
  let TextIcon = TextIcon3.TextIcon;
  if (null != channel) {
    let tmp5;
    if (cResult[0] !== channel) {
      const guild = GuildStore.getGuild(channel.getGuildId());
      const tmpResult = utils_ChannelUtils;
      let TextIcon2 = tmpResult.getChannelIconComponentWithGuild(channel, guild);
      if (TextIcon2 == null) {
        TextIcon2 = TextIcon3.TextIcon;
      }
      cResult[0] = channel;
      cResult[1] = TextIcon2;
      tmp5 = TextIcon2;
    } else {
      tmp5 = cResult[1];
    }
    TextIcon = tmp5;
  }
  if (cResult[2] === TextIcon) {
    let tmp8;
    if (cResult[3] === str) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.channelIconWrapper) {
      if (cResult[6] === tmp8) {
        let tmp10;
        if (cResult[7] === num) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
    const obj2 = { icon: tmp8, wrapperStyle: tmp4.channelIconWrapper, wrapperSize: num };
    const tmp13 = metroRequire(AppLauncherOptionIconDefault, obj2);
    cResult[5] = tmp4.channelIconWrapper;
    cResult[6] = tmp8;
    cResult[7] = num;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const tmp9 = metroRequire(TextIcon, { size: str, color: "interactive-text-default" });
  cResult[2] = TextIcon;
  cResult[3] = str;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((wrapperSize) => {
  let channel;
  ({ channel, size } = wrapperSize);
  if (size === undefined) {
    size = "sm";
  }
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  const tmp = closure_9();
  let TextIcon = TextIcon3.TextIcon;
  if (null != channel) {
    const guild = GuildStore.getGuild(channel.getGuildId());
    const tmp2Result = utils_ChannelUtils;
    let TextIcon2 = tmp2Result.getChannelIconComponentWithGuild(channel, guild);
    if (TextIcon2 == null) {
      TextIcon2 = TextIcon3.TextIcon;
    }
    TextIcon = TextIcon2;
  }
  const obj = { icon: metroRequire(TextIcon, { size, color: "interactive-text-default" }), wrapperStyle: tmp.channelIconWrapper, wrapperSize: num };
  const tmp6 = AppLauncherOptionIconDefault;
  return metroRequire(tmp6, obj);
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChannelPress) => {
  let channel;
  let closure_5;
  let closure_8;
  let first1;
  let obj = onChannelPress(channel[7]);
  const cResult = obj.c(24);
  onChannelPress = onChannelPress.onChannelPress;
  const onActionSheetDismiss = onChannelPress.onActionSheetDismiss;
  channel = onChannelPress.channel;
  const option = onChannelPress.option;
  let obj2 = query;
  const tmp3 = option(query.useState(""), 2);
  query = tmp3[0];
  GuildStore = tmp3[1];
  ref = query.useRef(null);
  const tmp2 = option;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  const tmp2Result = tmp2(obj2.useState(first1), 2);
  const first2 = tmp2Result[0];
  AppLauncherChannelListActionSheet = tmp2Result[1];
  if (cResult[1] === channel) {
    if (cResult[2] === option) {
      let tmp8;
      let tmp9;
      if (cResult[3] === query) {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const effect = obj2.useEffect(tmp8, tmp9);
      if (cResult[6] !== onActionSheetDismiss) {
        const fn = function b() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(AppLauncherChannelListActionSheet);
          onActionSheetDismiss();
        };
        cResult[6] = onActionSheetDismiss;
        cResult[7] = fn;
        class O {
          constructor(channel) {
            const obj = { channel: channel.channel };
            onChannelPress(obj);
            closure_9();
          }
        }
      }
      closure_9 = tmp11;
      if (cResult[8] === tmp11) {
        let tmp12;
        if (cResult[9] === onChannelPress) {
          tmp12 = cResult[10];
        }
        closure_10 = tmp12;
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor(str) {
              closure_5(str.toLowerCase());
              const current = ref.current;
              if (current != null) {
                current.scrollToOffset({ offset: 0, animated: false });
              }
            }
          }
          cResult[11] = W;
        } else {
          class W {
            constructor(str) {
              closure_5(str.toLowerCase());
              const current = ref.current;
              if (current != null) {
                current.scrollToOffset({ offset: 0, animated: false });
              }
            }
          }
        }
        class O {
          constructor(channel) {
            const obj = { channel: channel.channel };
            onChannelPress(obj);
            closure_9();
          }
        }
        class N {
          constructor(arg0) {
            item = onChannelPress.item;
            obj = {
              channel: item,
              index: onChannelPress.index,
              totalCount: closure_7.length,
              onPress() {
                          const obj = { channel: item };
                          return closure_10(obj);
                        }
            };
            return closure_6(closure_1_11, obj);
          }
        }
        cResult[12] = first2.length;
        cResult[13] = tmp12;
        cResult[14] = N;
      }
      class O {
        constructor(channel) {
          const obj = { channel: channel.channel };
          onChannelPress(obj);
          closure_9();
        }
      }
      cResult[8] = tmp11;
      cResult[9] = onChannelPress;
      cResult[10] = O;
      tmp12 = O;
    }
  }
  class I {
    constructor() {
      const obj = AutocompleteUtilsDefault;
      const obj2 = { query, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
      closure_8(obj.queryApplicationCommandChannelResults(obj2).channels);
    }
  }
  const items1 = [query, channel, option];
  cResult[1] = channel;
  cResult[2] = option;
  cResult[3] = query;
  cResult[4] = I;
  cResult[5] = items1;
  tmp9 = items1;
  tmp8 = I;
}) : ((channel) => {
  let items1;
  let onActionSheetDismiss;
  let tmp9Result;
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  query = undefined;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  let closure_5 = tmp[1];
  ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const items = [query, channel, option];
  length = first1.length;
  const effect = query.useEffect(() => {
    const obj = AutocompleteUtilsDefault;
    const obj2 = { query, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
    closure_8(obj.queryApplicationCommandChannelResults(obj2).channels);
  }, items);
  let obj = { onDismiss: onActionSheetDismiss, option, children: items1 };
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  let obj2 = {
    onChange(str) {
      closure_5(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items1 = [ref(require("AppLauncherList").AppLauncherListSearchBar, obj2), ];
  const tmp6 = first1;
  if (0 === length) {
    tmp9Result = tmp9(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    const obj3 = {
      ref,
      data: first1,
      renderItem(index) {
          const item = index.item;
          let obj = {
            channel: item,
            index: index.index,
            totalCount: first1.length,
            onPress() {
              const obj = { channel: item };
              require(obj);
              const obj2 = closure_1_1(channel[12]);
              obj2.hideActionSheet(closure_1_8);
              onActionSheetDismiss();
            }
          };
          return ref(closure_1_11, obj);
        }
    };
    tmp9Result = tmp9(require("AppLauncherList").AppLauncherList, obj3);
  }
  items1[1] = tmp9Result;
  return tmp6(AppLauncherCommandOptionActionSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((totalCount) => {
  let channel;
  let index;
  let onPress;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(11);
  ({ channel, index, onPress } = totalCount);
  totalCount = totalCount.totalCount;
  const tmp4 = useChannelNameDefault(channel);
  if (cResult[0] !== tmp4) {
    const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp4 };
    const tmp7 = metroRequire(Text_Text.Text, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== channel) {
    const obj3 = { channel };
    const tmp11 = metroRequire(closure_10, obj3);
    cResult[2] = channel;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === channel.id) {
    if (cResult[5] === onPress) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === 0 === index) {
            let tmp14;
            if (cResult[9] === index === totalCount - 1) {
              tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
      }
    }
  }
  const tmp15 = metroRequire(TableRow2.TableRow, { onPress, label: tmp5, icon: tmp8, start: 0 === index, end: index === totalCount - 1 }, channel.id);
  cResult[4] = channel.id;
  cResult[5] = onPress;
  cResult[6] = tmp5;
  cResult[7] = tmp8;
  cResult[8] = 0 === index;
  cResult[9] = index === totalCount - 1;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : ((arg0) => {
  let channel;
  let index;
  let onPress;
  let tmp;
  let totalCount;
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  const obj = { onPress, label: metroRequire(Text_Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp }), icon: metroRequire(closure_10, { channel }), start: 0 === index, end: index === totalCount - 1 };
  tmp = useChannelNameDefault(channel);
  const TableRow = TableRow2.TableRow;
  return metroRequire(TableRow, obj, channel.id);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default tmp4;
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export const ChannelIcon = tmp3;