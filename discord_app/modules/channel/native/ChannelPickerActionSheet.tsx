// === Module 12103: ChannelPickerActionSheet ===

// Module 12103 (ChannelPickerActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useChannelName from "useChannelName" /* 5043 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import TableRowIcon2 from "TableRowIcon" /* 5999 */;
import TableRadioRow2 from "TableRadioRow" /* 6071 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, noChannelOptionLabel;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channels) => {
  let guild;
  let header;
  let items1;
  let onClose;
  let title;
  let title2;
  let tmp21;
  _require = channels;
  let obj = require("react");
  const cResult = obj.c(33);
  const bottom = guild(channels[6])().bottom;
  ({ header, guild } = channels);
  channels = channels.channels;
  const onSelect = channels.onSelect;
  const selectedChannel = channels.selectedChannel;
  if (null != header) {
    ({ title, onClose } = header);
    let tmp6;
    if (null != onClose) {
      let tmp7;
      if (cResult[0] !== onClose) {
        let obj2 = {
          onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  onClose();
                }
        };
        const tmp9 = closure_5(require("ActionSheetCloseButton").ActionSheetCloseButton, obj2);
        cResult[0] = onClose;
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      tmp6 = tmp7;
    }
    let obj3 = { title, trailing: tmp6 };
    const tmp12 = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
    cResult[2] = tmp6;
    cResult[3] = title;
    cResult[4] = tmp12;
  }
  if (null != channels.noChannelOptionLabel) {
    let tmp15;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { source: guild(tmp2[11]) };
      const TableRowIcon = tmp(tmp2[10]).TableRowIcon;
      const tmp17 = closure_5(TableRowIcon, obj4);
      cResult[5] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== channels.noChannelOptionLabel) {
      const obj5 = { value: "", label: channels.noChannelOptionLabel, icon: tmp15 };
      const tmp20 = closure_5(require("TableRadioRow").TableRadioRow, obj5);
      cResult[6] = channels.noChannelOptionLabel;
      cResult[7] = tmp20;
    }
  }
  if (cResult[8] !== bottom) {
    const obj6 = { paddingBottom: bottom };
    cResult[8] = bottom;
    cResult[9] = obj6;
    tmp21 = obj6;
  } else {
    tmp21 = cResult[9];
  }
  let str2;
  if (selectedChannel != null) {
    str2 = selectedChannel.id;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (header != null) {
    title2 = header.title;
  }
  if (cResult[10] === channels) {
    if (cResult[11] === onSelect) {
      let tmp22;
      let tmp23;
      if (cResult[12] === channels) {
        tmp22 = cResult[13];
      }
      if (cResult[14] !== tmp13) {
        let items = tmp13;
        if (tmp13 == null) {
          items = [];
        }
        cResult[14] = tmp13;
        cResult[15] = items;
        tmp23 = items;
      } else {
        tmp23 = cResult[15];
      }
      if (cResult[16] === channels) {
        let tmp24;
        if (cResult[17] === guild) {
          tmp24 = cResult[18];
        }
        if (cResult[21] === str2) {
          if (cResult[22] === title2) {
            if (cResult[23] === tmp22) {
              if (cResult[24] === tmp23) {
                let tmp27;
                if (cResult[25] === tmp24) {
                  tmp27 = cResult[26];
                }
                if (cResult[27] === tmp21) {
                  let tmp30;
                  if (cResult[28] === tmp27) {
                    tmp30 = cResult[29];
                  }
                  if (cResult[30] === tmp5) {
                    let tmp33;
                    if (cResult[31] === tmp30) {
                      tmp33 = cResult[32];
                    }
                    return tmp33;
                  }
                  const obj7 = { scrollable: true, header: tmp5, children: tmp30 };
                  const tmp35 = closure_5(require("ActionSheet").ActionSheet, obj7);
                  cResult[30] = tmp5;
                  cResult[31] = tmp30;
                  cResult[32] = tmp35;
                  tmp33 = tmp35;
                }
                const obj8 = { contentContainerStyle: tmp21, children: tmp27 };
                const tmp32 = closure_5(require("BottomSheetModal").BottomSheetScrollView, obj8);
                cResult[27] = tmp21;
                cResult[28] = tmp27;
                cResult[29] = tmp32;
                tmp30 = tmp32;
              }
            }
          }
        }
        const obj9 = { defaultValue: str2, accessibilityLabel: title2, onChange: tmp22, hasIcons: true, children: items1 };
        items1 = [tmp23, tmp24];
        const tmp29 = closure_6(require("TableRadioGroup").TableRadioGroup, obj9);
        cResult[21] = str2;
        cResult[22] = title2;
        cResult[23] = tmp22;
        cResult[24] = tmp23;
        cResult[25] = tmp24;
        cResult[26] = tmp29;
        tmp27 = tmp29;
      }
      if (cResult[19] !== guild) {
        class V {
          constructor(id) {
            let obj3;
            let tmp4Result;
            const obj = utils_ChannelUtils;
            const channelIconWithGuild = obj.getChannelIconWithGuild(id, guild);
            const obj2 = { value: id.id, label: obj3.computeChannelName(id, UserStore, RelationshipStore), icon: tmp4Result };
            const TableRadioRow = TableRadioRow2.TableRadioRow;
            tmp4Result = null;
            obj3 = useChannelName;
            if (null != channelIconWithGuild) {
              const obj4 = { source: channelIconWithGuild };
              tmp4Result = hasOwnProperty(TableRowIcon2.TableRowIcon, obj4);
            }
            return hasOwnProperty(TableRadioRow, obj2, id.id);
          }
        }
        cResult[19] = guild;
        cResult[20] = V;
      } else {
        class V {
          constructor(id) {
            let obj3;
            let tmp4Result;
            const obj = utils_ChannelUtils;
            const channelIconWithGuild = obj.getChannelIconWithGuild(id, guild);
            const obj2 = { value: id.id, label: obj3.computeChannelName(id, UserStore, RelationshipStore), icon: tmp4Result };
            const TableRadioRow = TableRadioRow2.TableRadioRow;
            tmp4Result = null;
            obj3 = useChannelName;
            if (null != channelIconWithGuild) {
              const obj4 = { source: channelIconWithGuild };
              tmp4Result = hasOwnProperty(TableRowIcon2.TableRowIcon, obj4);
            }
            return hasOwnProperty(TableRadioRow, obj2, id.id);
          }
        }
      }
      const mapped = channels.map(V);
      cResult[16] = channels;
      cResult[17] = guild;
      cResult[18] = mapped;
      tmp24 = mapped;
    }
  }
  const fn = function _(arg0) {
    channels = arg0;
    if ("" === arg0) {
      const obj = channels;
      if (null != channels.noChannelOptionLabel) {
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        obj.onSelect(null);
      }
    }
    const found = channels.find((id) => id.id === closure_0);
    if (null != found) {
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      onSelect(found);
    }
  };
  cResult[10] = channels;
  cResult[11] = onSelect;
  cResult[12] = channels;
  cResult[13] = fn;
  tmp22 = fn;
}) : ((noChannelOptionLabel) => {
  let BottomSheetScrollView;
  let TableRadioGroup;
  let TableRowIcon;
  let channels;
  let header;
  let items1;
  let obj4;
  let obj6;
  let obj7;
  let selectedChannel;
  let title1;
  _require = noChannelOptionLabel;
  ({ header, guild: importDefault, channels } = noChannelOptionLabel);
  ({ onSelect: RelationshipStore, selectedChannel } = noChannelOptionLabel);
  let tmp3;
  const bottom = require("useSafeAreaInsets")().bottom;
  if (null != header) {
    const onClose = header.onClose;
    let tmp4;
    const title = header.title;
    if (null != onClose) {
      let obj = {
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              onClose();
            }
      };
      tmp4 = closure_5(require("ActionSheetCloseButton").ActionSheetCloseButton, obj);
    }
    let obj2 = { title, trailing: tmp4 };
    tmp3 = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj2);
  }
  let items;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    let obj3 = { value: "", label: noChannelOptionLabel.noChannelOptionLabel, icon: closure_5(TableRowIcon, obj4) };
    let TableRadioRow = require("TableRadioRow").TableRadioRow;
    obj4 = { source: require("AssetRegistry") };
    TableRowIcon = require("TableRowIcon").TableRowIcon;
    items = closure_5(TableRadioRow, obj3);
  }
  const obj5 = { scrollable: true, header: tmp3, children: closure_5(BottomSheetScrollView, obj6) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj6 = { contentContainerStyle: { paddingBottom: bottom }, children: closure_6(TableRadioGroup, obj7) };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  let str;
  TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  if (selectedChannel != null) {
    str = selectedChannel.id;
  }
  if (str == null) {
    str = "";
  }
  obj7 = {
    defaultValue: str,
    accessibilityLabel: title1,
    onChange(arg0) {
      noChannelOptionLabel = arg0;
      if ("" === arg0) {
        const obj = noChannelOptionLabel;
        if (null != noChannelOptionLabel.noChannelOptionLabel) {
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          obj.onSelect(null);
        }
      }
      const found = channels.find((id) => id.id === closure_0);
      if (null != found) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
        RelationshipStore(found);
      }
    },
    hasIcons: true,
    children: items1
  };
  title1 = undefined;
  if (header != null) {
    title1 = header.title;
  }
  if (items == null) {
    items = [];
  }
  items1 = [
    items,
    channels.map((id) => {
      let obj3;
      let tmp4Result;
      const obj = utils_ChannelUtils;
      const channelIconWithGuild = obj.getChannelIconWithGuild(id, importDefault);
      const obj2 = { value: id.id, label: obj3.computeChannelName(id, UserStore, RelationshipStore), icon: tmp4Result };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      tmp4Result = null;
      obj3 = useChannelName;
      if (null != channelIconWithGuild) {
        const obj4 = { source: channelIconWithGuild };
        tmp4Result = hasOwnProperty(TableRowIcon2.TableRowIcon, obj4);
      }
      return hasOwnProperty(TableRadioRow, obj2, id.id);
    })
  ];
  return closure_5(ActionSheet, obj5);
});
const result = size.fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default tmp4;