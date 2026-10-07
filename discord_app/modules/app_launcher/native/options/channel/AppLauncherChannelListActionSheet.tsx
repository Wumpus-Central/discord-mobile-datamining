// === Module 11831: AppLauncherChannelListActionSheet ===

// Module 11831 (AppLauncherChannelListActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5628 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import TextIcon3 from "TextIcon" /* 5871 */;
import TableRow from "TableRow" /* 6000 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11820 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let AppLauncherChannelListActionSheet = "AppLauncherChannelListActionSheet";
const createStyles = fn(4896);
let obj2 = { channelIconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
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
  const TextIcon = TextIcon3.TextIcon;
  if (null == channel) {
    if (cResult[2] === TextIcon) {
      if (cResult[3] === str) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === tmp4.channelIconWrapper) {
        if (cResult[6] === tmp9) {
          if (cResult[7] === num) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      const obj2 = { icon: tmp9, wrapperStyle: tmp4.channelIconWrapper, wrapperSize: num };
      const tmp15 = ref(AppLauncherOptionIconDefault, obj2);
      cResult[5] = tmp4.channelIconWrapper;
      cResult[6] = tmp9;
      cResult[7] = num;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj3 = { size: str, color: "interactive-text-default" };
    const tmp11 = ref(TextIcon, obj3);
    cResult[2] = TextIcon;
    cResult[3] = str;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else if (cResult[0] !== channel) {
    guild = GuildStore.getGuild(channel.getGuildId());
    let TextIcon2 = utils_ChannelUtils.getChannelIconComponentWithGuild(channel, guild);
    if (TextIcon2 == null) {
      TextIcon2 = TextIcon3.TextIcon;
    }
    cResult[0] = channel;
    cResult[1] = TextIcon2;
    const tmpResult = utils_ChannelUtils;
  }
}) : ((wrapperSize) => {
  ({ channel, size } = wrapperSize);
  if (size === undefined) {
    size = "sm";
  }
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  let TextIcon = TextIcon3.TextIcon;
  if (null != channel) {
    guild = GuildStore.getGuild(channel.getGuildId());
    let TextIcon2 = utils_ChannelUtils.getChannelIconComponentWithGuild(channel, guild);
    if (TextIcon2 == null) {
      TextIcon2 = TextIcon3.TextIcon;
    }
    TextIcon = TextIcon2;
    const tmp2Result = utils_ChannelUtils;
  }
  const obj = { icon: null, wrapperStyle: null, wrapperSize: null };
  const tmp = closure_9();
  obj.icon = ref(TextIcon, { size, color: "interactive-text-default" });
  obj.wrapperStyle = tmp.channelIconWrapper;
  obj.wrapperSize = num;
  return ref(AppLauncherOptionIconDefault, obj);
});
let closure_10 = tmp3;
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((totalCount) => {
  const cResult = c.c(11);
  ({ channel, index, onPress } = totalCount);
  const tmp4 = useChannelNameDefault(channel);
  if (cResult[0] !== tmp4) {
    const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp4 };
    const tmp7 = ref(Text_Text.Text, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== channel) {
    const obj3 = { channel };
    const tmp11 = ref(closure_10, obj3);
    cResult[2] = channel;
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === channel.id) {
    if (cResult[5] === onPress) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === tmp12) {
            if (cResult[9] === tmp13) {
              let tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
      }
    }
  }
  const tmp15 = ref(TableRow.TableRow, { onPress, label: tmp5, icon: tmp8, start: 0 === index, end: index === totalCount.totalCount - 1 }, channel.id);
  cResult[4] = channel.id;
  cResult[5] = onPress;
  cResult[6] = tmp5;
  cResult[7] = tmp8;
  cResult[8] = 0 === index;
  cResult[9] = index === totalCount.totalCount - 1;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : ((arg0) => {
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  const tmp = useChannelNameDefault(channel);
  return ref(TableRow.TableRow, { onPress, label: ref(Text_Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: useChannelNameDefault(channel) }), icon: ref(closure_10, { channel }), start: 0 === index, end: index === totalCount - 1 }, channel.id);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onChannelPress) => {
  const cResult = onChannelPress(channel[7]).c(24);
  onChannelPress = onChannelPress.onChannelPress;
  const onActionSheetDismiss = onChannelPress.onActionSheetDismiss;
  channel = onChannelPress.channel;
  const option = onChannelPress.option;
  const tmp3 = option(query.useState(""), 2);
  query = tmp3[0];
  GuildStore = tmp3[1];
  query.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  const tmp2Result = option(query.useState(first1), 2);
  const first2 = tmp2Result[0];
  AppLauncherChannelListActionSheet = tmp2Result[1];
  if (cResult[1] === channel) {
    if (cResult[2] === option) {
      if (cResult[3] === query) {
        let tmp8 = cResult[4];
        let tmp9 = cResult[5];
      }
      const effect = obj2.useEffect(tmp8, tmp9);
      if (cResult[6] !== onActionSheetDismiss) {
        const fn = function b() {
          ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherChannelListActionSheet);
          onActionSheetDismiss();
        };
        cResult[6] = onActionSheetDismiss;
        cResult[7] = fn;
        class O {
          constructor(arg0) {
            obj = { channel: onChannelPress.channel };
            tmp = onChannelPress(obj);
            tmp2 = closure_9();
            return;
          }
        }
      }
      closure_9 = tmp11;
      if (cResult[8] === tmp11) {
        if (cResult[9] === onChannelPress) {
          let tmp12 = cResult[10];
        }
        closure_10 = tmp12;
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor(arg0) {
              tmp = closure_5(onChannelPress.toLowerCase());
              current = closure_6.current;
              if (current != null) {
                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
              }
              return;
            }
          }
          cResult[11] = W;
        } else {
          class W {
            constructor(arg0) {
              tmp = closure_5(onChannelPress.toLowerCase());
              current = closure_6.current;
              if (current != null) {
                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
              }
              return;
            }
          }
        }
        class O {
          constructor(arg0) {
            obj = { channel: onChannelPress.channel };
            tmp = onChannelPress(obj);
            tmp2 = closure_9();
            return;
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
                          return closure_10({ channel: item });
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
        constructor(arg0) {
          obj = { channel: onChannelPress.channel };
          tmp = onChannelPress(obj);
          tmp2 = closure_9();
          return;
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
      obj = closure_1(closure_2[11]);
      obj1 = { query: closure_4, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
      tmp = closure_8(obj.queryApplicationCommandChannelResults(obj1).channels);
      return;
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
  const obj = onChannelPress(channel[7]);
}) : ((channel) => {
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  query = undefined;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  closure_5 = tmp[1];
  ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  const items = [query, channel, option];
  const effect = query.useEffect(() => {
    closure_8(AutocompleteUtilsDefault.queryApplicationCommandChannelResults({ query, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true }).channels);
  }, items);
  const obj = { onDismiss: onActionSheetDismiss, option, children: null };
  const items1 = [
    ref(require("AppLauncherList").AppLauncherListSearchBar, {
      onChange(str) {
        closure_5(str.toLowerCase());
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    }),

  ];
  if (0 === first1.length) {
    let tmp9Result = tmp9(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    const obj3 = {
      ref,
      data: first1,
      renderItem(index) {
          const item = index.item;
          return ref(closure_1_11, {
            channel: item,
            index: index.index,
            totalCount: first1.length,
            onPress() {
              require({ channel: item });
              closure_1_1(channel[12]).hideActionSheet(closure_1_8);
              onActionSheetDismiss();
            }
          });
        }
    };
    tmp9Result = tmp9(require("AppLauncherList").AppLauncherList, obj3);
  }
  items1[1] = tmp9Result;
  obj.children = items1;
  return first1(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj);
});
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export const ChannelIcon = tmp3;