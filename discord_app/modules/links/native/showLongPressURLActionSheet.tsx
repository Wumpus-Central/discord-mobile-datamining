// === Module 11839: showLongPressURLActionSheet ===

// Module 11839 (showLongPressURLActionSheet)
import LinkingDefault from "Linking" /* 4452 */;
import ToastUtils from "ToastUtils" /* 4454 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import showShareActionSheet from "showShareActionSheet" /* 8636 */;
import handleContentLinkingDefault from "handleContentLinking" /* 11840 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/links/native/showLongPressURLActionSheet.tsx");

export default function showLongPressURLActionSheet(urlString) {
  const str = urlString.urlString;
  ({ guildId: importDefault, channelId } = urlString);
  ({ messageId: closure_3, disableHapticFeedback } = urlString);
  if (disableHapticFeedback === undefined) {
    disableHapticFeedback = false;
  }
  let match;
  if (!disableHapticFeedback) {
    const result = str(channelId[0]).triggerHapticFeedback(str(channelId[0]).HapticFeedbackTypes.IMPACT_LIGHT);
    let obj = str(channelId[0]);
  }
  const items = [];
  match = str.match(/^(tel|sms|mailto):([^?;]+)/);
  if (null != match) {
    const intl7 = str(channelId[1]).intl;
    if ("mailto" === match[1]) {
      let ZYLVKo = tmp13(tmp14[1]).t.ZYLVKo;
    } else {
      ZYLVKo = tmp13(tmp14[1]).t["3zozoR"];
    }
    const obj2 = {
      label: intl7.string(ZYLVKo),
      onPress() {
          ToastUtils.presentLinkCopied();
          ClipboardUtils.copy(match[2]);
        }
    };
    items.push(obj2);
    if ("tel" === match[1]) {
      const obj3 = { label: null, onPress: null };
      const intl = tmp13(tmp14[1]).intl;
      obj3.label = intl.string(tmp13(tmp14[1]).t["+wbjMW"]);
      obj3.onPress = function onPress() {
        LinkingDefault.openURL(str.replace("tel:", "sms:"));
      };
      items.push(obj3);
    }
  }
  const obj4 = { label: null, onPress: null };
  const intl2 = str(channelId[1]).intl;
  obj4.label = intl2.string(str(channelId[1]).t.wuRE8M);
  obj4.onPress = function onPress() {
    LinkingDefault.openURL(str);
  };
  const items1 = [obj4, , ];
  const obj5 = { label: null, onPress: null };
  const intl3 = str(channelId[1]).intl;
  obj5.label = intl3.string(str(channelId[1]).t.WqhZss);
  obj5.onPress = function onPress() {
    ToastUtils.presentLinkCopied();
    ClipboardUtils.copy(str);
  };
  items1[1] = obj5;
  const obj6 = { label: null, onPress: null };
  const intl4 = str(channelId[1]).intl;
  obj6.label = intl4.string(str(channelId[1]).t.Ej3B3Y);
  obj6.onPress = function onPress() {
    showShareActionSheet.showShareActionSheet({ url: str }, "Share Link");
  };
  items1[HermesBuiltin.arraySpread(items, 2)] = obj6;
  if (null != channelId) {
    const obj7 = { label: null, onPress: null };
    const intl5 = tmp8(tmp9[1]).intl;
    obj7.label = intl5.string(tmp8(tmp9[1]).t.aW2YlJ);
    obj7.onPress = function onPress() {
      handleContentLinkingDefault({ guildId, channelId, messageId, navigationSettings: { navigationReplace: true, safe: true } });
    };
    items1.unshift(obj7);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items, 2);
  const obj8 = { key: "LongPressUrl", header: null, options: null, hasIcons: false };
  const obj9 = { title: null, subtitle: null };
  const intl6 = tmp8(tmp9[1]).intl;
  obj9.title = intl6.string(str(channelId[1]).t["5oIOLX"]);
  obj9.subtitle = str;
  obj8.header = obj9;
  obj8.options = items1;
  const result1 = str(channelId[7]).showSimpleActionSheet(obj8);
};