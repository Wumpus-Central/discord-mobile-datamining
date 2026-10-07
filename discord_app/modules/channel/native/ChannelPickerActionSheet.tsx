// === Module 12118: ChannelPickerActionSheet ===

// Module 12118 (ChannelPickerActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import useChannelName from "useChannelName" /* 5049 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import TableRowIcon from "TableRowIcon" /* 6006 */;
import TableRadioRow from "TableRadioRow" /* 6078 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channels) => {
  _require = channels;
  const cResult = require("c").c(33);
  const bottom = guild(channels[6])().bottom;
  ({ header, guild } = channels);
  channels = channels.channels;
  const onSelect = channels.onSelect;
  const selectedChannel = channels.selectedChannel;
  if (null == header) {
    if (null == channels.noChannelOptionLabel) {
      if (cResult[8] !== bottom) {
        let obj2 = { paddingBottom: bottom };
        cResult[8] = bottom;
        cResult[9] = obj2;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[9];
      }
      let str2;
      if (selectedChannel != null) {
        str2 = selectedChannel.id;
      }
      if (str2 == null) {
        str2 = "";
      }
      if (header != null) {
        const title = header.title;
      }
      if (cResult[10] === channels) {
        if (cResult[11] === onSelect) {
          if (cResult[12] === channels) {
            let tmp17 = cResult[13];
          }
          if (cResult[14] !== undefined) {
            let items;
            if (undefined == null) {
              items = [];
            }
            cResult[14] = undefined;
            cResult[15] = items;
            let tmp18 = items;
          } else {
            tmp18 = cResult[15];
          }
          if (cResult[16] === channels) {
            if (cResult[17] === guild) {
              if (cResult[21] === str2) {
                if (cResult[22] === title) {
                  if (cResult[23] === tmp17) {
                    if (cResult[24] === tmp18) {
                      if (cResult[25] === tmp19) {
                        let tmp23 = cResult[26];
                      }
                      if (cResult[27] === tmp16) {
                        if (cResult[28] === tmp23) {
                          let tmp26 = cResult[29];
                        }
                        if (cResult[30] === undefined) {
                          if (cResult[31] === tmp26) {
                            let tmp29 = cResult[32];
                          }
                          return tmp29;
                        }
                        let obj3 = { scrollable: true, header: undefined, children: tmp26 };
                        const tmp31 = closure_5(tmp(tmp2[17]).ActionSheet, obj3);
                        cResult[30] = undefined;
                        cResult[31] = tmp26;
                        cResult[32] = tmp31;
                        tmp29 = tmp31;
                      }
                      let obj4 = { contentContainerStyle: tmp16, children: tmp23 };
                      const tmp28 = closure_5(tmp(tmp2[16]).BottomSheetScrollView, obj4);
                      cResult[27] = tmp16;
                      cResult[28] = tmp23;
                      cResult[29] = tmp28;
                      tmp26 = tmp28;
                    }
                  }
                }
              }
              const obj5 = { defaultValue: str2, accessibilityLabel: title, onChange: tmp17, hasIcons: true, children: null };
              const items1 = [tmp18, cResult[18]];
              obj5.children = items1;
              const tmp25 = closure_6(tmp(tmp2[15]).TableRadioGroup, obj5);
              cResult[21] = str2;
              cResult[22] = title;
              cResult[23] = tmp17;
              cResult[24] = tmp18;
              cResult[25] = cResult[18];
              cResult[26] = tmp25;
              tmp23 = tmp25;
            }
          }
          if (cResult[19] !== guild) {
            class V {
              constructor(arg0) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[13]);
                channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
                tmp4 = jsx;
                obj1 = { value: channels.id, label: null, icon: null };
                obj3 = closure_0(closure_2[14]);
                obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
                tmp4Result = null;
                if (null != channelIconWithGuild) {
                  obj5 = { source: null };
                  obj5.source = channelIconWithGuild;
                  tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
                }
                obj1.icon = tmp4Result;
                return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
              }
            }
            cResult[19] = guild;
            cResult[20] = V;
          } else {
            class V {
              constructor(arg0) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[13]);
                channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
                tmp4 = jsx;
                obj1 = { value: channels.id, label: null, icon: null };
                obj3 = closure_0(closure_2[14]);
                obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
                tmp4Result = null;
                if (null != channelIconWithGuild) {
                  obj5 = { source: null };
                  obj5.source = channelIconWithGuild;
                  tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
                }
                obj1.icon = tmp4Result;
                return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
              }
            }
          }
          const mapped = channels.map(V);
          cResult[16] = channels;
          cResult[17] = guild;
          cResult[18] = mapped;
        }
      }
      const fn = function _(arg0) {
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
          onSelect(found);
        }
      };
      cResult[10] = channels;
      cResult[11] = onSelect;
      cResult[12] = channels;
      cResult[13] = fn;
      tmp17 = fn;
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
          tmp4 = jsx;
          obj1 = { value: channels.id, label: null, icon: null };
          obj3 = closure_0(closure_2[14]);
          obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
          tmp4Result = null;
          if (null != channelIconWithGuild) {
            obj5 = { source: null };
            obj5.source = channelIconWithGuild;
            tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
          }
          obj1.icon = tmp4Result;
          return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
        }
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
            tmp4 = jsx;
            obj1 = { value: channels.id, label: null, icon: null };
            obj3 = closure_0(closure_2[14]);
            obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
            tmp4Result = null;
            if (null != channelIconWithGuild) {
              obj5 = { source: null };
              obj5.source = channelIconWithGuild;
              tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
            }
            obj1.icon = tmp4Result;
            return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
          }
        }
        const obj6 = { source: guild(tmp2[11]) };
        const tmp12 = closure_5(tmp(tmp2[10]).TableRowIcon, obj6);
        cResult[5] = tmp12;
        const tmp11 = tmp12;
      } else {
        class V {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
            tmp4 = jsx;
            obj1 = { value: channels.id, label: null, icon: null };
            obj3 = closure_0(closure_2[14]);
            obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
            tmp4Result = null;
            if (null != channelIconWithGuild) {
              obj5 = { source: null };
              obj5.source = channelIconWithGuild;
              tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
            }
            obj1.icon = tmp4Result;
            return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
          }
        }
      }
      if (cResult[6] !== channels.noChannelOptionLabel) {
        class V {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
            tmp4 = jsx;
            obj1 = { value: channels.id, label: null, icon: null };
            obj3 = closure_0(closure_2[14]);
            obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
            tmp4Result = null;
            if (null != channelIconWithGuild) {
              obj5 = { source: null };
              obj5.source = channelIconWithGuild;
              tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
            }
            obj1.icon = tmp4Result;
            return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
          }
        }
        const obj7 = { value: "", label: channels.noChannelOptionLabel, icon: tmp11 };
        const tmp14 = closure_5(tmp(tmp2[12]).TableRadioRow, obj7);
        cResult[6] = channels.noChannelOptionLabel;
        cResult[7] = tmp14;
      } else {
        class V {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
            tmp4 = jsx;
            obj1 = { value: channels.id, label: null, icon: null };
            obj3 = closure_0(closure_2[14]);
            obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
            tmp4Result = null;
            if (null != channelIconWithGuild) {
              obj5 = { source: null };
              obj5.source = channelIconWithGuild;
              tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
            }
            obj1.icon = tmp4Result;
            return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
          }
        }
      }
    }
  } else {
    class V {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[13]);
        channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
        tmp4 = jsx;
        obj1 = { value: channels.id, label: null, icon: null };
        obj3 = closure_0(closure_2[14]);
        obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
        tmp4Result = null;
        if (null != channelIconWithGuild) {
          obj5 = { source: null };
          obj5.source = channelIconWithGuild;
          tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
        }
        obj1.icon = tmp4Result;
        return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
      }
    }
    const onClose = header.onClose;
    if (null == onClose) {
      class V {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
          tmp4 = jsx;
          obj1 = { value: channels.id, label: null, icon: null };
          obj3 = closure_0(closure_2[14]);
          obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
          tmp4Result = null;
          if (null != channelIconWithGuild) {
            obj5 = { source: null };
            obj5.source = channelIconWithGuild;
            tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
          }
          obj1.icon = tmp4Result;
          return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
        }
      }
      const obj8 = { title: tmp5, trailing: undefined };
      const tmp10 = closure_5(tmp(tmp2[9]).BottomSheetTitleHeader, obj8);
      cResult[2] = undefined;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          channelIconWithGuild = obj.getChannelIconWithGuild(channels, guild);
          tmp4 = jsx;
          obj1 = { value: channels.id, label: null, icon: null };
          obj3 = closure_0(closure_2[14]);
          obj1.label = obj3.computeChannelName(channels, closure_4, closure_3);
          tmp4Result = null;
          if (null != channelIconWithGuild) {
            obj5 = { source: null };
            obj5.source = channelIconWithGuild;
            tmp4Result = tmp4(tmp(tmp2[10]).TableRowIcon, obj5);
          }
          obj1.icon = tmp4Result;
          return tmp4(closure_0(closure_2[12]).TableRadioRow, obj1, channels.id);
        }
      }
    }
  }
  let obj = require("c");
}) : ((noChannelOptionLabel) => {
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
            }
      };
      tmp4 = closure_5(require("ActionSheetCloseButton").ActionSheetCloseButton, obj);
    }
    let obj2 = { title: header.title, trailing: tmp4 };
    tmp3 = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj2);
  }
  let items;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    let obj3 = { value: "", label: noChannelOptionLabel.noChannelOptionLabel, icon: null };
    let obj4 = { source: require("module_12119") };
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
    })
  ];
  obj7.children = items1;
  obj6.children = closure_6(require("TableRadioGroup").TableRadioGroup, obj7);
  obj5.children = closure_5(require("BottomSheetModal").BottomSheetScrollView, obj6);
  return closure_5(require("ActionSheet").ActionSheet, obj5);
});