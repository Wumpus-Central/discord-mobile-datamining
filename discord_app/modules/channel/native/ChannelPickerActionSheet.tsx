// discord_app/modules/channel/native/ChannelPickerActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useChannelName from "../useChannelName.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import TableRowIcon from "../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default function ChannelPickerActionSheet(noChannelOptionLabel) {
  _require = noChannelOptionLabel;
  ({ header, guild: importDefault, channels } = noChannelOptionLabel);
  ({ onSelect: RelationshipStore, selectedChannel } = noChannelOptionLabel);
  let tmp3;
  if (null != header) {
    const onClose = header.onClose;
    let tmp4;
    if (null != onClose) {
      let obj = {
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          onClose();
        },
      };
      tmp4 = closure_5(require("ActionSheetCloseButton").ActionSheetCloseButton, obj);
    }
    obj = { title: header.title, trailing: tmp4 };
    tmp3 = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj);
  }
  let items;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    obj = { value: "", label: noChannelOptionLabel.noChannelOptionLabel, icon: null };
    const obj1 = { source: require("../../../../_runtime/metro/11331__.js") };
    obj.icon = closure_5(require("TableRowIcon").TableRowIcon, obj1);
    items = closure_5(require("TableRadioRow").TableRadioRow, obj);
  }
  let obj2 = { scrollable: true, header: tmp3, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
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
  obj4.accessibilityLabel = title;
  obj4.onChange = function onChange(arg0) {
    noChannelOptionLabel = arg0;
    if ("" === arg0) {
      if (null != noChannelOptionLabel.noChannelOptionLabel) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        obj.onSelect(null);
      }
      obj = noChannelOptionLabel;
    }
    const found = channels.find((id) => id.id === closure_0);
    if (null != found) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      RelationshipStore(found);
    }
  };
  if (items == null) {
    items = [];
  }
  const items1 = [
    items,
    channels.map((id) => {
      let obj = utils_ChannelUtils;
      const channelIconWithGuild = obj.getChannelIconWithGuild(id, importDefault);
      obj = { value: id.id, label: useChannelName.computeChannelName(id, UserStore, RelationshipStore), icon: null };
      let tmp4Result = null;
      if (null != channelIconWithGuild) {
        obj = { source: channelIconWithGuild };
        tmp4Result = tmp4(TableRowIcon.TableRowIcon, obj);
      }
      obj.icon = tmp4Result;
      return hasOwnProperty(TableRadioRow.TableRadioRow, obj, id.id);
    }),
  ];
  obj4.children = items1;
  obj3.children = closure_6(require("TableRadioGroup").TableRadioGroup, obj4);
  obj2.children = closure_5(require("BottomSheetModal").BottomSheetScrollView, obj3);
  return closure_5(require("ActionSheet").ActionSheet, obj2);
}
