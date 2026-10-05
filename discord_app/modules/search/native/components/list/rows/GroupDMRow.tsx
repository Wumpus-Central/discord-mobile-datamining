// discord_app/modules/search/native/components/list/rows/GroupDMRow.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import native from "../../../../../../design/void/native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import GroupDMAvatarDefault from "../../../../../group_dm/native/GroupDMAvatar.tsx";
import useRecipientsLabel from "../../../../../main_tabs_v2/useRecipientsLabel.tsx";
import SearchListRow2 from "../SearchListRow.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let channel;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let accessibilityActions;
      let onAccessibilityAction;
      let onPress;
      let trailing;
      const obj = react2;
      const cResult = obj.c(16);
      channel = channel.channel;
      ({ trailing, onPress } = channel);
      ({ onAccessibilityAction, accessibilityActions } = channel);
      const tmp5 = useChannelNameDefault(channel);
      if (cResult[0] === channel.id) {
        let tmp6;
        let tmp7;
        let tmp12;
        if (cResult[1] === onPress) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== channel) {
          GroupDMAvatarDefault;
          const tmp10 = <tmp4Result size={native.AvatarSizes.LARGE_48} channel={channel} />;
          cResult[3] = channel;
          cResult[4] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[4];
        }
        const tmpResult = useRecipientsLabel;
        const recipientsLabel = tmpResult.useRecipientsLabel(channel);
        if (cResult[5] !== recipientsLabel) {
          let tmp14;
          if (null != recipientsLabel) {
            tmp14 = jsx(Text_Text.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              lineClamp: 1,
              children: recipientsLabel,
            });
          }
          cResult[5] = recipientsLabel;
          cResult[6] = tmp14;
          tmp12 = tmp14;
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
                      let tmp17;
                      if (cResult[14] === trailing) {
                        tmp17 = cResult[15];
                      }
                      return tmp17;
                    }
                  }
                }
              }
            }
          }
        }
        const tmp19 = jsx(SearchListRow2.SearchListRow, {
          label: str,
          icon: tmp7,
          onPress: tmp6,
          accessibilityLabel: str2,
          subLabel: tmp12,
          trailing,
          accessibilityActions,
          onAccessibilityAction,
        });
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
      }
      const fn = function n() {
        onPress(channel.id);
      };
      cResult[0] = channel.id;
      cResult[1] = onPress;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (channel) => {
      let accessibilityActions;
      let onAccessibilityAction;
      let trailing;
      channel = channel.channel;
      const onPress = channel.onPress;
      ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
      let str = useChannelNameDefault(channel);
      const items = [channel.id, onPress];
      const callback = react.useCallback(() => {
        onPress(channel.id);
      }, items);
      GroupDMAvatarDefault;
      const tmp6 = <tmp4 size={native.AvatarSizes.LARGE_48} channel={channel} />;
      const obj2 = useRecipientsLabel;
      const recipientsLabel = obj2.useRecipientsLabel(channel);
      let tmp3Result;
      if (null != recipientsLabel) {
        tmp3Result = jsx(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: recipientsLabel,
        });
      }
      let str2 = str;
      const SearchListRow = SearchListRow2.SearchListRow;
      if (str == null) {
        str2 = "";
      }
      if (str == null) {
        str = "";
      }
      return (
        <SearchListRow
          label={str2}
          icon={tmp6}
          onPress={callback}
          accessibilityLabel={str}
          subLabel={tmp3Result}
          trailing={trailing}
          accessibilityActions={accessibilityActions}
          onAccessibilityAction={onAccessibilityAction}
        />
      );
    };
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default tmp2;
