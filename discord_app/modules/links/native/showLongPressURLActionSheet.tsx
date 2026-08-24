// === Module 10820: showLongPressURLActionSheet ===

// Module 10820 (showLongPressURLActionSheet)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/links/native/showLongPressURLActionSheet.tsx");

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
    } else {
    }
    obj = { label: null, onPress: null };
    obj[0] = intl7.string(_3zozoR);
    obj[1] = function onPress() {
      str(channelId[2]).presentLinkCopied();
      const obj = str(channelId[2]);
      str(channelId[3]).copy(match[2]);
    };
    items.push(obj);
    if ("tel" === match[1]) {
      obj = { label: null, onPress: null };
      const intl = tmp12(tmp13[1]).intl;
      obj[0] = intl.string(tmp12(tmp13[1]).t["+wbjMW"]);
      obj[1] = function onPress() {
        closure_1_1(channelId[4]).openURL(str.replace("tel:", "sms:"));
      };
      items.push(obj);
    }
  }
  obj1 = { label: null, onPress: null };
  const intl2 = str(channelId[1]).intl;
  obj1[0] = intl2.string(str(channelId[1]).t.wuRE8M);
  obj1[1] = function onPress() {
    closure_1_1(channelId[4]).openURL(str);
  };
  const items1 = [obj1, , ];
  const obj2 = { label: null, onPress: null };
  const intl3 = str(channelId[1]).intl;
  obj2[0] = intl3.string(str(channelId[1]).t.WqhZss);
  obj2[1] = function onPress() {
    str(channelId[2]).presentLinkCopied();
    const obj = str(channelId[2]);
    str(channelId[3]).copy(str);
  };
  items1[1] = obj2;
  const obj3 = { label: null, onPress: null };
  const intl4 = str(channelId[1]).intl;
  obj3[0] = intl4.string(str(channelId[1]).t.Ej3B3Y);
  obj3[1] = function onPress() {
    let obj = str(channelId[5]);
    obj = { url: str };
    obj.showShareActionSheet(obj, "Share Link");
  };
  items1[HermesBuiltin.arraySpread(items, 2)] = obj3;
  if (null != channelId) {
    const obj4 = { label: null, onPress: null };
    const intl5 = tmp7(tmp8[1]).intl;
    obj4[0] = intl5.string(tmp7(tmp8[1]).t.aW2YlJ);
    obj4[1] = function onPress() {
      closure_1_1(channelId[6])({ guildId: closure_1, channelId, messageId: closure_3, navigationSettings: { navigationReplace: true, safe: true } });
    };
    items1.unshift(obj4);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items, 2);
  const obj5 = { key: "LongPressUrl", header: null, options: null, hasIcons: false };
  const obj6 = { title: null, subtitle: null };
  const intl6 = tmp7(tmp8[1]).intl;
  obj6[0] = intl6.string(str(channelId[1]).t["5oIOLX"]);
  obj6[1] = str;
  obj5[1] = obj6;
  obj5[2] = items1;
  const result1 = str(channelId[7]).showSimpleActionSheet(obj5);
};