// === Module 16843: rows/GroupDMRow ===

// Module 16843 (rows/GroupDMRow)
import c from "c" /* 576 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10661 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10662 */;
import SearchListRow from "SearchListRow" /* 16828 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(16);
  channel = channel.channel;
  ({ trailing, onPress } = channel);
  ({ onAccessibilityAction, accessibilityActions } = channel);
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] === channel.id) {
    if (cResult[1] === onPress) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== channel) {
      const obj2 = { size: native.AvatarSizes.LARGE_48, channel };
      const tmp10 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.LARGE_48, channel });
      cResult[3] = channel;
      cResult[4] = tmp10;
      let tmp7 = tmp10;
      const tmp4Result = GroupDMAvatarDefault;
    } else {
      tmp7 = cResult[4];
    }
    const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
    if (cResult[5] !== recipientsLabel) {
      let tmp14;
      if (null != recipientsLabel) {
        const obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
        tmp14 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
      }
      cResult[5] = recipientsLabel;
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    let str = tmp5;
    if (tmp5 == null) {
      str = "";
    }
    let str2 = tmp5;
    if (tmp5 == null) {
      str2 = "";
    }
    if (cResult[7] === accessibilityActions) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === onAccessibilityAction) {
            if (cResult[11] === tmp12) {
              if (cResult[12] === str) {
                if (cResult[13] === str2) {
                  if (cResult[14] === trailing) {
                    let tmp17 = cResult[15];
                  }
                  return tmp17;
                }
              }
            }
          }
        }
      }
    }
    const obj4 = { label: str, icon: tmp7, onPress: tmp6, accessibilityLabel: str2, subLabel: tmp12, trailing, accessibilityActions, onAccessibilityAction };
    const tmp19 = jsx(SearchListRow.SearchListRow, { label: str, icon: tmp7, onPress: tmp6, accessibilityLabel: str2, subLabel: tmp12, trailing, accessibilityActions, onAccessibilityAction });
    cResult[7] = accessibilityActions;
    cResult[8] = tmp6;
    cResult[9] = tmp7;
    cResult[10] = onAccessibilityAction;
    cResult[11] = tmp12;
    cResult[12] = str;
    cResult[13] = str2;
    cResult[14] = trailing;
    cResult[15] = tmp19;
    tmp17 = tmp19;
    const tmpResult = useRecipientsLabel;
  }
  const fn = function n() {
    onPress(channel.id);
  };
  cResult[0] = channel.id;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = useChannelNameDefault(channel);
  const items = [channel.id, onPress];
  const callback = noop.useCallback(() => {
    onPress(channel.id);
  }, items);
  const obj = { size: native.AvatarSizes.LARGE_48, channel };
  const tmp6 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.LARGE_48, channel });
  const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    const obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp3Result = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  let str2 = str;
  if (str == null) {
    str2 = "";
  }
  const obj4 = { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (str == null) {
    str = "";
  }
  obj4.accessibilityLabel = str;
  obj4.subLabel = tmp3Result;
  obj4.trailing = trailing;
  obj4.accessibilityActions = accessibilityActions;
  obj4.onAccessibilityAction = onAccessibilityAction;
  return jsx(SearchListRow.SearchListRow, { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null });
});