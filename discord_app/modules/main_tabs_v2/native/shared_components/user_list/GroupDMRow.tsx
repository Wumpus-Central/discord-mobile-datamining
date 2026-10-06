// === Module 10660: GroupDMRow ===

// Module 10660 (GroupDMRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 5997 */;
import TableRow2 from "TableRow" /* 6000 */;
import UserRowConstants from "UserRowConstants" /* 10605 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10661 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10662 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let closure_3 = ["channel", "mode", "selected", "disabled", "onPress"];
const UserRowModes = UserRowConstants.UserRowModes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let NONE;
  let disabled;
  let mode;
  let onPress;
  let selected;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(26);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    let closure_0 = channel;
    ({ mode, selected, disabled, onPress } = channel);
    let closure_1 = onPress;
    const tmp11 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = onPress;
    cResult[3] = tmp11;
    cResult[4] = mode;
    cResult[5] = selected;
    cResult[6] = disabled;
    tmp8 = disabled;
    tmp7 = selected;
    NONE = mode;
    tmp6 = tmp11;
  } else {
    closure_0 = cResult[1];
    closure_1 = cResult[2];
    tmp6 = cResult[3];
    NONE = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
  }
  if (undefined === NONE) {
    NONE = UserRowModes.NONE;
  }
  const tmp16 = useChannelNameDefault(tmp4);
  if (cResult[7] === tmp4) {
    let tmp17;
    let tmp18;
    let tmp23;
    if (cResult[8] === onPress) {
      tmp17 = cResult[9];
    }
    if (cResult[10] !== tmp4) {
      GroupDMAvatarDefault;
      const tmp21 = <tmp15Result size={native.AvatarSizes.REFRESH_MEDIUM_32} channel={tmp4} />;
      cResult[10] = tmp4;
      cResult[11] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[11];
    }
    const tmpResult = useRecipientsLabel;
    const recipientsLabel = tmpResult.useRecipientsLabel(tmp4);
    if (cResult[12] !== recipientsLabel) {
      let tmp25;
      if (null != recipientsLabel) {
        tmp25 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
      }
      cResult[12] = recipientsLabel;
      cResult[13] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[13];
    }
    let str = tmp16;
    if (tmp16 == null) {
      str = "";
    }
    if (cResult[14] === (undefined !== tmp8 && tmp8)) {
      if (cResult[15] === tmp17) {
        if (cResult[16] === tmp18) {
          if (cResult[17] === tmp6) {
            if (cResult[18] === tmp23) {
              let tmp28;
              let tmp33;
              if (cResult[19] === str) {
                tmp28 = cResult[20];
              }
              if (NONE === UserRowModes.TOGGLE) {
                if (cResult[21] === (undefined !== tmp7 && tmp7)) {
                  let tmp39;
                  if (cResult[22] === tmp28) {
                    tmp39 = cResult[23];
                  }
                  tmp33 = tmp39;
                }
                const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
                const merged = Object.assign(tmp28);
                const tmp44 = <TableCheckboxRow checked={undefined !== tmp7 && tmp7} />;
                cResult[21] = undefined !== tmp7 && tmp7;
                cResult[22] = tmp28;
                cResult[23] = tmp44;
                tmp39 = tmp44;
              } else if (cResult[24] !== tmp28) {
                const TableRow = TableRow2.TableRow;
                const merged1 = Object.assign(tmp28);
                const tmp38 = <TableRow />;
                cResult[24] = tmp28;
                cResult[25] = tmp38;
                tmp33 = tmp38;
              } else {
                tmp33 = cResult[25];
              }
              return tmp33;
            }
          }
        }
      }
    }
    const obj6 = { disabled: undefined !== tmp8 && tmp8, subLabel: tmp23, icon: tmp18, onPress: tmp17, label: str, labelLineClamp: 1, height: "100%" };
    const merged2 = Object.assign(tmp6);
    cResult[14] = undefined !== tmp8 && tmp8;
    cResult[15] = tmp17;
    cResult[16] = tmp18;
    cResult[17] = tmp6;
    cResult[18] = tmp23;
    cResult[19] = str;
    cResult[20] = obj6;
    tmp28 = obj6;
  }
  const fn = function _() {
    if (closure_1 != null) {
      tmp(closure_0);
    }
  };
  cResult[7] = tmp4;
  cResult[8] = onPress;
  cResult[9] = fn;
  tmp17 = fn;
}) : ((channel) => {
  let tmp5Result;
  let tmp5Result2;
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
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items);
  GroupDMAvatarDefault;
  const tmp8 = <tmp6 size={native.AvatarSizes.REFRESH_MEDIUM_32} channel={channel} />;
  const obj2 = useRecipientsLabel;
  const recipientsLabel = obj2.useRecipientsLabel(channel);
  const obj3 = { disabled: flag2, subLabel: tmp5Result, icon: tmp8, onPress: callback, label: str, labelLineClamp: 1, height: "100%" };
  const merged1 = Object.assign(merged);
  tmp5Result = undefined;
  if (null != recipientsLabel) {
    tmp5Result = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  if (str == null) {
    str = "";
  }
  if (NONE === UserRowModes.TOGGLE) {
    const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
    const merged2 = Object.assign(obj3);
    tmp5Result2 = <TableCheckboxRow checked={flag} />;
  } else {
    const TableRow = TableRow2.TableRow;
    const merged3 = Object.assign(obj3);
    tmp5Result2 = <TableRow />;
  }
  return tmp5Result2;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default tmp2;