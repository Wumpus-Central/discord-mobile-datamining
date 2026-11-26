// === Module 12066: showLongPressURLActionSheet ===

// Module 12066 (showLongPressURLActionSheet)
import LinkingDefault from "Linking" /* 5722 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
import showShareActionSheet from "showShareActionSheet" /* 8690 */;
import handleContentLinkingDefault from "handleContentLinking" /* 12067 */;
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
  closure_5 = undefined;
  if (!disableHapticFeedback) {
    const result = str(channelId[0]).triggerHapticFeedback(str(channelId[0]).HapticFeedbackTypes.IMPACT_LIGHT);
    let obj = str(channelId[0]);
  }
  items = [];
  match = str.match(/^(tel|sms|mailto):([^?;]+)/);
  if (null != match) {
    const intl7 = str(channelId[1]).intl;
    if ("mailto" === match[1]) {
      let ZYLVKo = tmp21(tmp22[1]).t.ZYLVKo;
    } else {
      ZYLVKo = tmp21(tmp22[1]).t["3zozoR"];
    }
    let obj2 = {
      label: intl7.string(ZYLVKo),
      onPress() {
          ToastUtils.presentLinkCopied();
          ClipboardUtils.copy(match[2]);
        }
    };
    items.push(obj2);
    if ("tel" === match[1]) {
      const obj3 = { label: null, onPress: null };
      const intl = tmp21(tmp22[1]).intl;
      obj3.label = intl.string(tmp21(tmp22[1]).t["+wbjMW"]);
      obj3.onPress = function onPress() {
        LinkingDefault.openURL(str.replace("tel:", "sms:"));
      };
      items.push(obj3);
    }
  }
  const rootNavigationRef = str(channelId[5]).getRootNavigationRef();
  let rootState;
  if (rootNavigationRef != null) {
    rootState = rootNavigationRef.getRootState();
  }
  let coerceMainRouteResult;
  if (null != rootState) {
    coerceMainRouteResult = tmp8(tmp9[6]).coerceMainRoute(rootState.routes[rootState.index]);
    const tmp8Result = tmp8(tmp9[6]);
  }
  let found;
  if (coerceMainRouteResult != null) {
    state = coerceMainRouteResult.state;
    if (state != null) {
      const routes1 = state.routes;
      const mapped = routes1.map(tmp8(tmp9[6]).coerceTabsRoute);
      found = mapped.find((item) => null != item);
    }
  }
  let state1;
  if (found != null) {
    state1 = found.state;
  }
  let tmp14;
  if (state1 != null) {
    ({ index, routes } = state1);
    if (index == null) {
      index = 0;
    }
    tmp14 = routes[index];
  }
  let name;
  if (tmp14 != null) {
    name = tmp14.name;
  }
  let tmp16 = "notifications" === name;
  if (!tmp16) {
    let name1;
    if (tmp14 != null) {
      name1 = tmp14.name;
    }
    tmp16 = "icymi" === name1;
  }
  closure_5 = tmp16;
  const obj5 = { label: null, onPress: null };
  const intl2 = tmp8(tmp9[1]).intl;
  obj5.label = intl2.string(str(channelId[1]).t.wuRE8M);
  obj5.onPress = function onPress() {
    LinkingDefault.openURL(str, undefined, true, { navigationReplace: !closure_5 });
    const obj2 = { navigationReplace: !closure_5 };
    const tmp2 = !closure_5;
  };
  const items1 = [obj5, , ];
  const obj6 = { label: null, onPress: null };
  const intl3 = tmp8(tmp9[1]).intl;
  obj6.label = intl3.string(str(channelId[1]).t.WqhZss);
  obj6.onPress = function onPress() {
    ToastUtils.presentLinkCopied();
    ClipboardUtils.copy(str);
  };
  items1[1] = obj6;
  const obj7 = { label: null, onPress: null };
  const obj4 = str(channelId[5]);
  const intl4 = tmp8(tmp9[1]).intl;
  obj7.label = intl4.string(str(channelId[1]).t.Ej3B3Y);
  obj7.onPress = function onPress() {
    showShareActionSheet.showShareActionSheet({ url: str }, "Share Link");
  };
  items1[HermesBuiltin.arraySpread(items, 2)] = obj7;
  if (null != channelId) {
    const obj8 = { label: null, onPress: null };
    const intl5 = tmp8(tmp9[1]).intl;
    obj8.label = intl5.string(tmp8(tmp9[1]).t.aW2YlJ);
    obj8.onPress = function onPress() {
      const obj = { guildId, channelId, messageId, navigationSettings: { navigationReplace: !closure_5, safe: true } };
      handleContentLinkingDefault(obj);
    };
    items1.unshift(obj8);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items, 2);
  const obj9 = { key: "LongPressUrl", header: null, options: null, hasIcons: false };
  const obj10 = { title: null, subtitle: null };
  const intl6 = tmp8(tmp9[1]).intl;
  obj10.title = intl6.string(str(channelId[1]).t["5oIOLX"]);
  obj10.subtitle = str;
  obj9.header = obj10;
  obj9.options = items1;
  const result1 = str(channelId[9]).showSimpleActionSheet(obj9);
};