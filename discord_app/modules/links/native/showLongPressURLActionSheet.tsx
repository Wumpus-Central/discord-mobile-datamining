// === Module 11584: showLongPressURLActionSheet ===

// Module 11584 (showLongPressURLActionSheet)
import LinkingDefault from "Linking" /* 4255 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import handleContentLinkingDefault from "handleContentLinking" /* 11585 */;
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
    let obj = str(channelId[0]);
    const result = obj.triggerHapticFeedback(str(channelId[0]).HapticFeedbackTypes.IMPACT_LIGHT);
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
    obj = {
      label: intl7.string(ZYLVKo),
      onPress() {
          ToastUtils.presentLinkCopied();
          ClipboardUtils.copy(match[2]);
        }
    };
    items.push(obj);
    if ("tel" === match[1]) {
      obj = { label: null, onPress: null };
      const intl = tmp13(tmp14[1]).intl;
      obj.label = intl.string(tmp13(tmp14[1]).t["+wbjMW"]);
      obj.onPress = function onPress() {
        LinkingDefault.openURL(str.replace("tel:", "sms:"));
      };
      items.push(obj);
    }
  }
  const obj1 = { label: null, onPress: null };
  const intl2 = str(channelId[1]).intl;
  obj1.label = intl2.string(str(channelId[1]).t.wuRE8M);
  obj1.onPress = function onPress() {
    LinkingDefault.openURL(str);
  };
  const items1 = [obj1, , ];
  const obj2 = { label: null, onPress: null };
  const intl3 = str(channelId[1]).intl;
  obj2.label = intl3.string(str(channelId[1]).t.WqhZss);
  obj2.onPress = function onPress() {
    ToastUtils.presentLinkCopied();
    ClipboardUtils.copy(str);
  };
  items1[1] = obj2;
  const obj3 = { label: null, onPress: null };
  const intl4 = str(channelId[1]).intl;
  obj3.label = intl4.string(str(channelId[1]).t.Ej3B3Y);
  obj3.onPress = function onPress() {
    const obj = { url: str };
    obj.showShareActionSheet(obj, "Share Link");
  };
  items1[HermesBuiltin.arraySpread(items, 2)] = obj3;
  if (null != channelId) {
    const obj4 = { label: null, onPress: null };
    const intl5 = tmp8(tmp9[1]).intl;
    obj4.label = intl5.string(tmp8(tmp9[1]).t.aW2YlJ);
    obj4.onPress = function onPress() {
      handleContentLinkingDefault({ guildId, channelId, messageId, navigationSettings: { navigationReplace: true, safe: true } });
    };
    items1.unshift(obj4);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items, 2);
  const obj5 = { key: "LongPressUrl", header: null, options: null, hasIcons: false };
  const obj6 = { title: null, subtitle: null };
  const intl6 = tmp8(tmp9[1]).intl;
  obj6.title = intl6.string(str(channelId[1]).t["5oIOLX"]);
  obj6.subtitle = str;
  obj5.header = obj6;
  obj5.options = items1;
  const result1 = str(channelId[7]).showSimpleActionSheet(obj5);
};