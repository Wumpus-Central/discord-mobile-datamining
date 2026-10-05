// discord_app/modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import intl5 from "../../../intl/index.native.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import IconButton2 from "../../../design/components/Button/native/IconButton.native.tsx";
import AssetRegistryDefault from "../../../../_runtime/07578_AssetRegistry.js";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import ScheduledMessagesUtils from "ScheduledMessagesUtils.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let scheduledMessage;

let closure_3 = ["ref"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scheduledMessage) => {
      let first;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp6;
      let tmp7;
      let tmp9;
      let tmp = scheduledMessage;
      let obj = scheduledMessage(576);
      const cResult = obj.c(22);
      scheduledMessage = scheduledMessage.scheduledMessage;
      const isPendingRemoval = scheduledMessage.isPendingRemoval;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.JLba51);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== scheduledMessage) {
        const obj2 = {
          label: first,
          IconComponent: tmp(4841).SendMessageIcon,
          action() {
            const obj = ScheduledMessagesUtils;
            return obj.sendScheduledMessageNow(scheduledMessage.scheduledMessageId);
          },
        };
        cResult[1] = scheduledMessage;
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.ZXE1s4);
        cResult[3] = stringResult1;
        tmp7 = stringResult1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== scheduledMessage) {
        const obj3 = {
          label: tmp7,
          IconComponent: tmp(10058).PencilIcon,
          action() {
            const obj = ScheduledMessagesUtils;
            return obj.openScheduledMessageEditContentModal(scheduledMessage);
          },
        };
        cResult[4] = scheduledMessage;
        cResult[5] = obj3;
        tmp9 = obj3;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.SBcdAN);
        cResult[6] = stringResult2;
        tmp10 = stringResult2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== scheduledMessage) {
        const obj4 = {
          label: tmp10,
          IconComponent: tmp(4849).ClockIcon,
          action() {
            const obj = ScheduledMessagesUtils;
            return obj.openRescheduleMessageActionSheet(
              scheduledMessage.scheduledMessageId,
              scheduledMessage.sendAtTimestamp,
              scheduledMessage.createArgs.channelId,
            );
          },
        };
        cResult[7] = scheduledMessage;
        cResult[8] = obj4;
        tmp12 = obj4;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult3 = intl4.string(tmp(1126).t.O3sL8F);
        cResult[9] = stringResult3;
        tmp13 = stringResult3;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] !== scheduledMessage) {
        const obj5 = {
          label: tmp13,
          IconComponent: tmp(4797).CircleXIcon,
          action() {
            const obj = ScheduledMessagesUtils;
            return obj.cancelScheduledMessage(scheduledMessage.scheduledMessageId);
          },
          variant: "destructive",
        };
        cResult[10] = scheduledMessage;
        cResult[11] = obj5;
        tmp15 = obj5;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp6) {
        if (cResult[13] === tmp9) {
          if (cResult[14] === tmp12) {
            let tmp16;
            let tmp17;
            if (cResult[15] === tmp15) {
              tmp16 = cResult[16];
            }
            if (cResult[17] !== isPendingRemoval) {
              const fn = function _(ref) {
                const tmp = _objectWithoutProperties(ref.ref, closure_3);
                const IconButton = IconButton2.IconButton;
                const merged = Object.assign(tmp);
                const intl = intl5.intl;
                return (
                  <IconButton
                    ref={ref.ref}
                    variant="secondary"
                    accessibilityLabel={intl.string(intl5.t.sHmiIC)}
                    size="sm"
                    disabled={isPendingRemoval}
                    icon={AssetRegistryDefault}
                  />
                );
              };
              cResult[17] = isPendingRemoval;
              cResult[18] = fn;
              tmp17 = fn;
            } else {
              tmp17 = cResult[18];
            }
            if (cResult[19] === tmp16) {
              let tmp18;
              if (cResult[20] === tmp17) {
                tmp18 = cResult[21];
              }
              return tmp18;
            }
            const tmp20 = jsx(tmp(7579).ContextMenu, {
              items: tmp16,
              keyboardShouldPersistTaps: "handled",
              triggerOnTap: true,
              children: tmp17,
            });
            cResult[19] = tmp16;
            cResult[20] = tmp17;
            cResult[21] = tmp20;
            tmp18 = tmp20;
          }
        }
      }
      const items = [tmp6, tmp9, tmp12, tmp15];
      cResult[12] = tmp6;
      cResult[13] = tmp9;
      cResult[14] = tmp12;
      cResult[15] = tmp15;
      cResult[16] = items;
      tmp16 = items;
    }
  : (arg0) => {
      let disabled;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      ({ scheduledMessage: require, isPendingRemoval: importDefault } = arg0);
      let obj = {
        label: intl.string(intl5.t.JLba51),
        IconComponent: SendMessageIcon.SendMessageIcon,
        action() {
          const obj = ScheduledMessagesUtils;
          return obj.sendScheduledMessageNow(require.scheduledMessageId);
        },
      };
      intl = intl5.intl;
      const items = [obj, , ,];
      const obj2 = {
        label: intl2.string(intl5.t.ZXE1s4),
        IconComponent: PencilIcon.PencilIcon,
        action() {
          const obj = ScheduledMessagesUtils;
          return obj.openScheduledMessageEditContentModal(require);
        },
      };
      intl2 = intl5.intl;
      items[1] = obj2;
      const obj3 = {
        label: intl3.string(intl5.t.SBcdAN),
        IconComponent: ClockIcon.ClockIcon,
        action() {
          const obj = ScheduledMessagesUtils;
          return obj.openRescheduleMessageActionSheet(
            require.scheduledMessageId,
            require.sendAtTimestamp,
            require.createArgs.channelId,
          );
        },
      };
      intl3 = intl5.intl;
      items[2] = obj3;
      const obj4 = {
        label: intl4.string(intl5.t.O3sL8F),
        IconComponent: CircleXIcon.CircleXIcon,
        action() {
          const obj = ScheduledMessagesUtils;
          return obj.cancelScheduledMessage(require.scheduledMessageId);
        },
        variant: "destructive",
      };
      intl4 = intl5.intl;
      items[3] = obj4;
      return jsx(ContextMenu.ContextMenu, {
        items,
        keyboardShouldPersistTaps: "handled",
        triggerOnTap: true,
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const IconButton = IconButton2.IconButton;
          const merged1 = Object.assign(merged);
          const intl = intl5.intl;
          return (
            <IconButton
              ref={ref.ref}
              variant="secondary"
              accessibilityLabel={intl.string(intl5.t.sHmiIC)}
              size="sm"
              disabled={importDefault}
              icon={AssetRegistryDefault}
            />
          );
        },
      });
    };
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx");

export default tmp2;
