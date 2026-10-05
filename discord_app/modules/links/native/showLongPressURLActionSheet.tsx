// discord_app/modules/links/native/showLongPressURLActionSheet.tsx
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import handleContentLinkingDefault from "handleContentLinking.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/links/native/showLongPressURLActionSheet.tsx");

export default function showLongPressURLActionSheet(urlString) {
  let channelId;
  let closure_3;
  let disableHapticFeedback;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let messageId;
  let obj9;
  const str = urlString.urlString;
  ({ guildId: importDefault, channelId } = urlString);
  ({ messageId: closure_3, disableHapticFeedback } = urlString);
  if (disableHapticFeedback === undefined) {
    disableHapticFeedback = false;
  }
  let match;
  if (!disableHapticFeedback) {
    let obj = str(channelId[0]);
    const result = obj.triggerHapticFeedback(str(channelId[0]).HapticFeedbackTypes.IMPACT_LIGHT);
  }
  const items = [];
  match = str.match(/^(tel|sms|mailto):([^?;]+)/);
  if (null != match) {
    let ZYLVKo;
    const push2 = items.push;
    const intl7 = str(channelId[1]).intl;
    const string = intl7.string;
    if ("mailto" === match[1]) {
      ZYLVKo = tmp15(tmp16[1]).t.ZYLVKo;
    } else {
      ZYLVKo = tmp15(tmp16[1]).t["3zozoR"];
    }
    let obj2 = {
      label: string(ZYLVKo),
      onPress() {
        const obj = ToastUtils;
        obj.presentLinkCopied();
        const obj2 = ClipboardUtils;
        obj2.copy(match[2]);
      },
    };
    push2(obj2);
    if ("tel" === match[1]) {
      const push = items.push;
      const obj3 = {
        label: intl.string(str(channelId[1]).t["+wbjMW"]),
        onPress() {
          const obj = LinkingDefault;
          obj.openURL(str.replace("tel:", "sms:"));
        },
      };
      intl = tmp15(tmp16[1]).intl;
      push(obj3);
    }
  }
  const obj4 = {
    label: intl2.string(str(channelId[1]).t.wuRE8M),
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(str);
    },
  };
  intl2 = str(channelId[1]).intl;
  const items1 = [obj4, ,];
  const obj5 = {
    label: intl3.string(str(channelId[1]).t.WqhZss),
    onPress() {
      const obj = ToastUtils;
      obj.presentLinkCopied();
      const obj2 = ClipboardUtils;
      obj2.copy(str);
    },
  };
  intl3 = str(channelId[1]).intl;
  items1[1] = obj5;
  const obj6 = {
    label: intl4.string(str(channelId[1]).t.Ej3B3Y),
    onPress() {
      const obj = showShareActionSheet;
      const obj2 = { url: str };
      obj.showShareActionSheet(obj2, "Share Link");
    },
  };
  const arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 2);
  intl4 = str(channelId[1]).intl;
  items1[arraySpreadResult] = obj6;
  if (null != channelId) {
    const unshift = items1.unshift;
    const obj7 = {
      label: intl5.string(str(channelId[1]).t.aW2YlJ),
      onPress() {
        const obj = {
          guildId: importDefault,
          channelId,
          messageId,
          navigationSettings: { navigationReplace: true, safe: true },
        };
        handleContentLinkingDefault(obj);
      },
    };
    intl5 = tmp9(tmp10[1]).intl;
    unshift(obj7);
  }
  const obj8 = { key: "LongPressUrl", header: obj9, options: items1, hasIcons: false };
  obj9 = { title: intl6.string(str(channelId[1]).t["5oIOLX"]), subtitle: str };
  const showSimpleActionSheet = str(channelId[7]).showSimpleActionSheet;
  str(channelId[7]);
  intl6 = tmp9(tmp10[1]).intl;
  const result1 = showSimpleActionSheet(obj8);
}
