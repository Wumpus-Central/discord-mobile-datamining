// discord_app/modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThreadConstants from "../../ThreadConstants.tsx";
import ThreadActionCreatorsDefault from "../../ThreadActionCreators.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_3 = ThreadConstants.getThreadNotificationOptions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ThreadNotificationsBottomSheet(channel) {
      const cResult = channel(576).c(8);
      channel = channel.channel;
      const obj = channel(576);
      const threadNotificationSetting = channel(6090).useThreadNotificationSetting(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { title: null };
        const intl = tmp(1126).intl;
        obj3.title = intl.string(tmp(1126).t.h850Ss);
        const tmp7 = jsx(tmp(6835).BottomSheetTitleHeader, { title: null });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function s(flags) {
          return ThreadActionCreatorsDefault.setNotificationSettings(channel, { flags });
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.h850Ss);
        const mapped = closure_3().map((label) => {
          const setting = label.setting;
          return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
        });
        cResult[3] = stringResult;
        cResult[4] = mapped;
        let tmp10 = mapped;
        let tmp9 = stringResult;
        const arr = closure_3();
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      if (cResult[5] === threadNotificationSetting) {
        if (cResult[6] === tmp8) {
          let tmp14 = cResult[7];
        }
        return tmp14;
      }
      const obj2 = channel(6090);
      const tmp15 = jsx(channel(6892).ActionSheet, {
        header: first,
        children: jsx(channel(6267).TableRadioGroup, {
          hasIcons: false,
          value: threadNotificationSetting,
          onChange: tmp8,
          accessibilityLabel: tmp9,
          children: tmp10,
        }),
      });
      cResult[5] = threadNotificationSetting;
      cResult[6] = tmp8;
      cResult[7] = tmp15;
      tmp14 = tmp15;
      const obj4 = {
        header: first,
        children: jsx(channel(6267).TableRadioGroup, {
          hasIcons: false,
          value: threadNotificationSetting,
          onChange: tmp8,
          accessibilityLabel: tmp9,
          children: tmp10,
        }),
      };
    }
  : function ThreadNotificationsBottomSheet(channel) {
      channel = channel.channel;
      const threadNotificationSetting = channel(6090).useThreadNotificationSetting(channel);
      const obj2 = { header: null, children: null };
      const obj3 = { title: null };
      const intl = channel(1126).intl;
      obj3.title = intl.string(channel(1126).t.h850Ss);
      obj2.header = jsx(channel(6835).BottomSheetTitleHeader, { title: null });
      const obj4 = {
        hasIcons: false,
        value: threadNotificationSetting,
        onChange(flags) {
          return ThreadActionCreatorsDefault.setNotificationSettings(channel, { flags });
        },
        accessibilityLabel: null,
        children: null,
      };
      const intl2 = channel(1126).intl;
      obj4.accessibilityLabel = intl2.string(channel(1126).t.h850Ss);
      const obj = channel(6090);
      obj4.children = closure_3().map((label) => {
        const setting = label.setting;
        return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
      });
      obj2.children = jsx(channel(6267).TableRadioGroup, {
        hasIcons: false,
        value: threadNotificationSetting,
        onChange(flags) {
          return ThreadActionCreatorsDefault.setNotificationSettings(channel, { flags });
        },
        accessibilityLabel: null,
        children: null,
      });
      return jsx(channel(6892).ActionSheet, { header: null, children: null });
    };
