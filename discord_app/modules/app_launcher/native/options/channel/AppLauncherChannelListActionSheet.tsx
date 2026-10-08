// discord_app/modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import AutocompleteUtilsDefault from "../../../../../utils/AutocompleteUtils.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import TextIcon3 from "../../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const AppLauncherChannelListActionSheet = "AppLauncherChannelListActionSheet";
const createStyles = fn(5090);
let obj2 = { channelIconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelIcon(arg0) {
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
          const tmp15 = timestampProducer(AppLauncherOptionIconDefault, obj2);
          cResult[5] = tmp4.channelIconWrapper;
          cResult[6] = tmp9;
          cResult[7] = num;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
        const obj3 = { size: str, color: "interactive-text-default" };
        const tmp11 = timestampProducer(TextIcon, obj3);
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
    }
  : function ChannelIcon(wrapperSize) {
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
      obj.icon = timestampProducer(TextIcon, { size, color: "interactive-text-default" });
      obj.wrapperStyle = tmp.channelIconWrapper;
      obj.wrapperSize = num;
      return timestampProducer(AppLauncherOptionIconDefault, obj);
    };
let closure_10 = tmp3;
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelListItem(totalCount) {
      const cResult = c.c(11);
      ({ channel, index, onPress } = totalCount);
      const tmp4 = useChannelNameDefault(channel);
      if (cResult[0] !== tmp4) {
        const obj2 = {
          lineClamp: 1,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: tmp4,
        };
        const tmp7 = timestampProducer(Text_Text.Text, obj2);
        cResult[0] = tmp4;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== channel) {
        const obj3 = { channel };
        const tmp11 = timestampProducer(closure_10, obj3);
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
      const tmp15 = timestampProducer(
        TableRow.TableRow,
        { onPress, label: tmp5, icon: tmp8, start: 0 === index, end: index === totalCount.totalCount - 1 },
        channel.id,
      );
      cResult[4] = channel.id;
      cResult[5] = onPress;
      cResult[6] = tmp5;
      cResult[7] = tmp8;
      cResult[8] = 0 === index;
      cResult[9] = index === totalCount.totalCount - 1;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
  : function ChannelListItem(arg0) {
      ({ channel, index } = arg0);
      ({ totalCount, onPress } = arg0);
      const tmp = useChannelNameDefault(channel);
      return timestampProducer(
        TableRow.TableRow,
        {
          onPress,
          label: timestampProducer(Text_Text.Text, {
            lineClamp: 1,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: useChannelNameDefault(channel),
          }),
          icon: timestampProducer(closure_10, { channel }),
          start: 0 === index,
          end: index === totalCount - 1,
        },
        channel.id,
      );
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherChannelListActionSheet(onChannelPress) {
      const cResult = onChannelPress(channel[7]).c(24);
      onChannelPress = onChannelPress.onChannelPress;
      const onActionSheetDismiss = onChannelPress.onActionSheetDismiss;
      channel = onChannelPress.channel;
      const option = onChannelPress.option;
      const tmp5 = option(query.useState(""), 2);
      query = tmp5[0];
      closure_5 = tmp5[1];
      const ref = query.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        let first1 = items;
      } else {
        first1 = cResult[0];
      }
      const tmp4Result = option(query.useState(first1), 2);
      const first2 = tmp4Result[0];
      closure_8 = tmp4Result[1];
      if (cResult[1] === channel) {
        if (cResult[2] === option) {
          if (cResult[3] === query) {
            let tmp11 = cResult[4];
            let tmp12 = cResult[5];
          }
          const effect = obj2.useEffect(tmp11, tmp12);
          if (cResult[6] !== onActionSheetDismiss) {
            function hideActionSheet() {
              ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherChannelListActionSheet);
              onActionSheetDismiss();
            }
            cResult[6] = onActionSheetDismiss;
            cResult[7] = hideActionSheet;
            let tmp14 = hideActionSheet;
          } else {
            tmp14 = cResult[7];
          }
          closure_9 = tmp14;
          if (cResult[8] === tmp14) {
            if (cResult[9] === onChannelPress) {
              let tmp15 = cResult[10];
            }
            closure_10 = tmp15;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              function handleQueryUpdate(str) {
                closure_5(str.toLowerCase());
                const current = ref.current;
                if (current != null) {
                  current.scrollToOffset({ offset: 0, animated: false });
                }
              }
              cResult[11] = handleQueryUpdate;
              let tmp16 = handleQueryUpdate;
            } else {
              tmp16 = cResult[11];
            }
            if (cResult[12] === first2.length) {
              if (cResult[13] === tmp15) {
                let tmp17 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = { onChange: tmp16 };
                cResult[15] = ref(tmp(tmp2[13]).AppLauncherListSearchBar, obj3);
                class Item {
                  constructor(arg0) {
                    item = onChannelPress.item;
                    obj = {
                      channel: item,
                      index: onChannelPress.index,
                      totalCount: closure_7.length,
                      onPress() {
                        return closure_10({ channel: item });
                      },
                    };
                    return closure_6(closure_1_11, obj);
                  }
                }
                const tmp20 = ref(tmp(tmp2[13]).AppLauncherListSearchBar, obj3);
              }
              class Item {
                constructor(arg0) {
                  item = onChannelPress.item;
                  obj = {
                    channel: item,
                    index: onChannelPress.index,
                    totalCount: closure_7.length,
                    onPress() {
                      return closure_10({ channel: item });
                    },
                  };
                  return closure_6(closure_1_11, obj);
                }
              }
              let obj4 = tmp(tmp2[13]);
              if (0 === tmp10) {
                obj4 = {};
                let tmp22Result = tmp22(obj4.AppLauncherListEmptyState, obj4);
              } else {
                const obj5 = { ref, data: first2, renderItem: tmp17 };
                tmp22Result = tmp22(obj4.AppLauncherList, obj5);
              }
              cResult[16] = tmp17;
              cResult[17] = first2;
              cResult[18] = 0 === tmp10;
              cResult[19] = tmp22Result;
            }
            class Item {
              constructor(arg0) {
                item = onChannelPress.item;
                obj = {
                  channel: item,
                  index: onChannelPress.index,
                  totalCount: closure_7.length,
                  onPress() {
                    return closure_10({ channel: item });
                  },
                };
                return closure_6(closure_1_11, obj);
              }
            }
            cResult[12] = first2.length;
            cResult[13] = tmp15;
            cResult[14] = Item;
            tmp17 = Item;
          }
          function handleChannelPress(channel) {
            onChannelPress({ channel: channel.channel });
            closure_9();
          }
          cResult[8] = tmp14;
          cResult[9] = onChannelPress;
          cResult[10] = handleChannelPress;
          tmp15 = handleChannelPress;
        }
      }
      const fn = function y() {
        closure_8(
          AutocompleteUtilsDefault.queryApplicationCommandChannelResults({
            query,
            channel,
            channelTypes: option.channelTypes,
            limit: null,
            allowSnowflake: true,
          }).channels,
        );
      };
      const items1 = [query, channel, option];
      cResult[1] = channel;
      cResult[2] = option;
      cResult[3] = query;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp12 = items1;
      tmp11 = fn;
    }
  : function AppLauncherChannelListActionSheet(channel) {
      ({ onChannelPress: require, onActionSheetDismiss } = channel);
      channel = channel.channel;
      const option = channel.option;
      let query;
      const tmp = option(query.useState(""), 2);
      query = tmp[0];
      closure_5 = tmp[1];
      const ref = query.useRef(null);
      const tmp4 = option(query.useState([]), 2);
      const first1 = tmp4[0];
      closure_8 = tmp4[1];
      const items = [query, channel, option];
      const effect = query.useEffect(() => {
        closure_8(
          AutocompleteUtilsDefault.queryApplicationCommandChannelResults({
            query,
            channel,
            channelTypes: option.channelTypes,
            limit: null,
            allowSnowflake: true,
          }).channels,
        );
      }, items);
      const obj = { onDismiss: onActionSheetDismiss, option, children: null };
      const items1 = [
        ref(require("AppLauncherList").AppLauncherListSearchBar, {
          onChange: function handleQueryUpdate(str) {
            closure_5(str.toLowerCase());
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          },
        }),
      ];
      if (0 === first1.length) {
        let tmp9Result = tmp9(require("AppLauncherList").AppLauncherListEmptyState, {});
      } else {
        const obj3 = {
          ref,
          data: first1,
          renderItem: function Item(index) {
            const item = index.item;
            return ref(closure_1_11, {
              channel: item,
              index: index.index,
              totalCount: first1.length,
              onPress() {
                require({ channel: item });
                closure_1_1(channel[12]).hideActionSheet(closure_1_8);
                onActionSheetDismiss();
              },
            });
          },
        };
        tmp9Result = tmp9(require("AppLauncherList").AppLauncherList, obj3);
      }
      items1[1] = tmp9Result;
      obj.children = items1;
      return first1(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj);
    };
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export const ChannelIcon = tmp3;
