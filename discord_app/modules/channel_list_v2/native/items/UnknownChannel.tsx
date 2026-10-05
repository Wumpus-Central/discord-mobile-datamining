// discord_app/modules/channel_list_v2/native/items/UnknownChannel.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import RedesignChannelListConstants from "../RedesignChannelListConstants.tsx";
import ChannelItemDefault from "../../../guild_sidebar/native/ChannelItem.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let obj2;
function handlePress() {
  let intl;
  const obj = {
    key: "UNKNOWN_CHANNEL_UPDATE_DISCORD",
    content: intl.string(intl2.t["/ZjyYE"]),
    IconComponent: CircleInformationIcon.CircleInformationIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open(obj);
}
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let tmp10;
        let tmp7;
        let tmp8;
        let obj = channel(576);
        const cResult = obj.c(13);
        channel = channel.channel;
        const selected = channel.selected;
        const tmp4 = closure_6();
        const tmp6 = useChannelNameDefault(channel);
        if (cResult[0] !== channel.id) {
          const fn = function t() {
            const obj = openChannelLongPressActionSheet;
            const result = obj.openChannelLongPressActionSheet(channel.id);
          };
          cResult[0] = channel.id;
          cResult[1] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[1];
        }
        const container = tmp4.container;
        if (cResult[2] !== tmp6) {
          const intl = tmp(1126).intl;
          const obj2 = { channelName: tmp6 };
          const formatToPlainStringResult = intl.formatToPlainString(channel(1126).t.yjQ9P8, obj2);
          cResult[2] = tmp6;
          cResult[3] = formatToPlainStringResult;
          tmp8 = formatToPlainStringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== selected) {
          const obj3 = { selected };
          cResult[4] = selected;
          cResult[5] = obj3;
          tmp10 = obj3;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === channel) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === selected) {
              if (cResult[9] === tmp4.container) {
                if (cResult[10] === tmp8) {
                  let tmp11;
                  if (cResult[11] === tmp10) {
                    tmp11 = cResult[12];
                  }
                  return tmp11;
                }
              }
            }
          }
        }
        const tmp12 = jsx(ChannelItemDefault, {
          onPress: handlePress,
          onLongPress: tmp7,
          style: container,
          accessible: true,
          accessibilityLabel: tmp8,
          accessibilityState: tmp10,
          channel,
          selected,
          resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS,
        });
        cResult[6] = channel;
        cResult[7] = tmp7;
        cResult[8] = selected;
        cResult[9] = tmp4.container;
        cResult[10] = tmp8;
        cResult[11] = tmp10;
        cResult[12] = tmp12;
        tmp11 = tmp12;
      }
    : (channel) => {
        channel = channel.channel;
        const selected = channel.selected;
        const items = [channel.id];
        const tmp = closure_6();
        const tmp2 = useChannelNameDefault(channel);
        const callback = react.useCallback(() => {
          const obj = openChannelLongPressActionSheet;
          const result = obj.openChannelLongPressActionSheet(channel.id);
        }, items);
        ChannelItemDefault;
        const intl = channel(1126).intl;
        return (
          <tmp4
            onPress={handlePress}
            onLongPress={callback}
            style={tmp.container}
            accessible
            accessibilityLabel={intl.formatToPlainString(channel(1126).t.yjQ9P8, { channelName: tmp2 })}
            accessibilityState={{ selected }}
            channel={channel}
            selected={selected}
            resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS}
          />
        );
      },
);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
