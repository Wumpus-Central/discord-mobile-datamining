// discord_app/modules/channel/native/ChannelPickerActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useChannelName from "../useChannelName.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import TableRowIcon from "../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

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
    let obj2 = { title: header.title, trailing: tmp4 };
    tmp3 = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj2);
  }
  let items;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    let obj3 = { value: "", label: noChannelOptionLabel.noChannelOptionLabel, icon: null };
    let obj4 = { source: require("../../../../_runtime/metro/11594__.js") };
    obj3.icon = closure_5(require("TableRowIcon").TableRowIcon, obj4);
    items = closure_5(require("TableRadioRow").TableRadioRow, obj3);
  }
  const obj5 = { scrollable: true, header: tmp3, children: null };
  const obj6 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
  let str;
  if (selectedChannel != null) {
    str = selectedChannel.id;
  }
  if (str == null) {
    str = "";
  }
  const obj7 = { defaultValue: str, accessibilityLabel: null, onChange: null, hasIcons: true, children: null };
  let title;
  if (header != null) {
    title = header.title;
  }
  obj7.accessibilityLabel = title;
  obj7.onChange = function onChange(arg0) {
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
      const channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(id, importDefault);
      const obj2 = { value: id.id, label: null, icon: null };
      obj2.label = useChannelName.computeChannelName(id, UserStore, RelationshipStore);
      let tmp4Result = null;
      if (null != channelIconWithGuild) {
        const obj4 = { source: channelIconWithGuild };
        tmp4Result = hasOwnProperty(TableRowIcon.TableRowIcon, obj4);
      }
      obj2.icon = tmp4Result;
      return hasOwnProperty(TableRadioRow.TableRadioRow, obj2, id.id);
    }),
  ];
  obj7.children = items1;
  obj6.children = closure_6(require("TableRadioGroup").TableRadioGroup, obj7);
  obj5.children = closure_5(require("BottomSheetModal").BottomSheetScrollView, obj6);
  return closure_5(require("ActionSheet").ActionSheet, obj5);
}
