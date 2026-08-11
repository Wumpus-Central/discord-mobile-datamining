// discord_app/modules/channel/native/ChannelPickerActionSheet.tsx
import "noop";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default function ChannelPickerActionSheet(noChannelOptionLabel) {
  let channels;
  let markAllUserIdListsStale;
  let header;
  let importDefault;
  let selectedChannel;
  const _require = noChannelOptionLabel;
  ({ header, guild: importDefault, channels } = noChannelOptionLabel);
  ({ onSelect: markAllUserIdListsStale, selectedChannel } = noChannelOptionLabel);
  let tmp3;
  if (null != header) {
    const onClose = header.onClose;
    let tmp4;
    if (null != onClose) {
      let obj = { onPress: null };
      obj[0] = function onPress() {
        outer1_1(channels[6]).hideActionSheet();
        onClose();
      };
      tmp4 = callback(_require(tmp2[5]).ActionSheetCloseButton, obj);
    }
    obj = { title: null, trailing: null };
    obj[0] = header.title;
    obj[1] = tmp4;
    tmp3 = callback(_require(tmp2[7]).BottomSheetTitleHeader, obj);
  }
  let tmp9;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    obj = { value: "", label: null, icon: null };
    obj[1] = noChannelOptionLabel.noChannelOptionLabel;
    const obj1 = { source: null };
    obj1[0] = importDefault(tmp2[10]);
    obj[2] = callback(_require(tmp2[9]).TableRowIcon, obj1);
    tmp9 = callback(_require(tmp2[8]).TableRadioRow, obj);
  }
  let obj2 = { scrollable: true, header: tmp3, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: importDefault(channels[4])().bottom }, children: null };
  let str;
  if (selectedChannel != null) {
    str = selectedChannel.id;
  }
  if (str == null) {
    str = "";
  }
  const obj4 = { defaultValue: str, accessibilityLabel: null, onChange: null, hasIcons: true, children: null };
  let title;
  if (header != null) {
    title = header.title;
  }
  obj4[1] = title;
  obj4[2] = function onChange(arg0) {
    const noChannelOptionLabel = arg0;
    if ("" === arg0) {
      if (null != noChannelOptionLabel.noChannelOptionLabel) {
        outer1_1(channels[6]).hideActionSheet();
        obj.onSelect(null);
      }
      obj = noChannelOptionLabel;
    }
    const found = channels.find((id) => id.id === closure_0);
    if (null != found) {
      outer1_1(channels[6]).hideActionSheet();
      callback(found);
      const obj2 = outer1_1(channels[6]);
    }
  };
  const items = [
    tmp9,
    channels.map((id) => {
      let obj = noChannelOptionLabel(channels[14]);
      const channelIconWithGuild = obj.getChannelIconWithGuild(id, closure_1);
      obj = { value: id.id, label: null, icon: null };
      obj[1] = noChannelOptionLabel(channels[15]).computeChannelName(id, onClose, outer1_3);
      let tmp4Result = null;
      if (null != channelIconWithGuild) {
        obj = { source: null };
        obj[0] = channelIconWithGuild;
        tmp4Result = tmp4(noChannelOptionLabel(channels[9]).TableRowIcon, obj);
      }
      obj[2] = tmp4Result;
      return outer1_5(noChannelOptionLabel(channels[8]).TableRadioRow, obj, id.id);
    })
  ];
  obj4[4] = items;
  obj3[1] = closure_6(_require(channels[13]).TableRadioGroup, obj4);
  obj2[2] = callback(_require(channels[12]).BottomSheetScrollView, obj3);
  return callback(_require(channels[11]).ActionSheet, obj2);
};