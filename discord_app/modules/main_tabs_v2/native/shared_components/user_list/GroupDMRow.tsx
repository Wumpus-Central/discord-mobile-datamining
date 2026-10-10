// === Module 10278: GroupDMRow ===

// Module 10278 (GroupDMRow)
import c from "c" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10279 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const native = TableCheckboxRow(1200);
const Text_Text = TableCheckboxRow(5088);
const TableCheckboxRow2 = TableCheckboxRow(6176);
const TableRow = TableCheckboxRow(6179);
const useRecipientsLabel = TableCheckboxRow(10280);
require = fn;
let closure_3 = ["channel", "mode", "selected", "disabled", "onPress"];
const UserRowModes = fn(10216).UserRowModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMRow(channel) {
  let TableCheckboxRow = require;
  let tmp = dependencyMap;
  const cResult = c.c(26);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    closure_0 = channel;
    ({ mode, selected, disabled, onPress } = channel);
    closure_1 = onPress;
    const tmp10 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = onPress;
    cResult[3] = tmp10;
    cResult[4] = mode;
    cResult[5] = selected;
    cResult[6] = disabled;
    let NONE = mode;
    let tmp5 = tmp10;
  } else {
    closure_0 = cResult[1];
    closure_1 = cResult[2];
    tmp5 = cResult[3];
    NONE = cResult[4];
  }
  if (undefined === NONE) {
    NONE = UserRowModes.NONE;
  }
  const tmp15 = useChannelNameDefault(tmp3);
  if (cResult[7] === tmp3) {
    if (cResult[8] === onPress) {
      let tmp16 = cResult[9];
    }
    if (cResult[10] !== tmp3) {
      const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel: tmp3 };
      const tmp20 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel: tmp3 });
      cResult[10] = tmp3;
      cResult[11] = tmp20;
      let tmp17 = tmp20;
      const tmp14Result = GroupDMAvatarDefault;
    } else {
      tmp17 = cResult[11];
    }
    const recipientsLabel = useRecipientsLabel.useRecipientsLabel(tmp3);
    if (cResult[12] !== recipientsLabel) {
      let tmp24;
      if (null != recipientsLabel) {
        const obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
        tmp24 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
      }
      cResult[12] = recipientsLabel;
      cResult[13] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[13];
    }
    let str = tmp15;
    if (tmp15 == null) {
      str = "";
    }
    if (cResult[14] === tmp13) {
      if (cResult[15] === tmp16) {
        if (cResult[16] === tmp17) {
          if (cResult[17] === tmp5) {
            if (cResult[18] === tmp22) {
              if (cResult[19] === str) {
                let tmp27 = cResult[20];
              }
              if (NONE === UserRowModes.TOGGLE) {
                if (cResult[21] === tmp12) {
                }
                TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
                const obj4 = {};
                const merged = Object.assign(tmp27);
                obj4.checked = tmp12;
                tmp = <TableCheckboxRow />;
                cResult[21] = tmp12;
                cResult[22] = tmp27;
                cResult[23] = tmp;
              } else {
                if (cResult[24] !== tmp27) {
                  const obj5 = {};
                  const merged1 = Object.assign(tmp27);
                  const tmp37 = jsx(TableRow.TableRow, {});
                  cResult[24] = tmp27;
                  cResult[25] = tmp37;
                  let tmp32 = tmp37;
                } else {
                  tmp32 = cResult[25];
                }
                return tmp32;
              }
            }
          }
        }
      }
    }
    const obj6 = {};
    const merged2 = Object.assign(tmp5);
    obj6.disabled = tmp13;
    obj6.subLabel = tmp22;
    obj6.icon = tmp17;
    obj6.onPress = tmp16;
    obj6.label = str;
    obj6.labelLineClamp = 1;
    obj6.height = "100%";
    cResult[14] = tmp13;
    cResult[15] = tmp16;
    cResult[16] = tmp17;
    cResult[17] = tmp5;
    cResult[18] = tmp22;
    cResult[19] = str;
    cResult[20] = obj6;
    tmp27 = obj6;
    const TableCheckboxRowResult = useRecipientsLabel;
  }
  const fn = function x() {
    if (closure_1 != null) {
      tmp(closure_0);
    }
  };
  cResult[7] = tmp3;
  cResult[8] = onPress;
  cResult[9] = fn;
  tmp16 = fn;
}) : (function GroupDMRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    NONE = UserRowModes.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = channel.onPress;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0 }));
  let str = useChannelNameDefault(channel);
  const items = [channel, onPress];
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items);
  const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp8 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel });
  const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.disabled = flag2;
  let tmp5Result;
  if (null != recipientsLabel) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp5Result = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  obj3.subLabel = tmp5Result;
  obj3.icon = tmp8;
  obj3.onPress = callback;
  if (str == null) {
    str = "";
  }
  obj3.label = str;
  obj3.labelLineClamp = 1;
  obj3.height = "100%";
  if (NONE === UserRowModes.TOGGLE) {
    const obj5 = {};
    const merged2 = Object.assign(obj3);
    obj5.checked = flag;
    let tmp5Result2 = jsx(TableCheckboxRow2.TableCheckboxRow, {});
  } else {
    const obj6 = {};
    const merged3 = Object.assign(obj3);
    tmp5Result2 = jsx(TableRow.TableRow, {});
  }
  return tmp5Result2;
});