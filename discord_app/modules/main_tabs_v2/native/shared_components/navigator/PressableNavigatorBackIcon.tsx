// === Module 7865: PressableNavigatorBackIcon ===

// Module 7865 (PressableNavigatorBackIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles(() => {
  let obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  const rect = { position: "absolute", minWidth: native.BADGE_SIZE, height: native.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  obj.maskWrapper = rect;
  obj = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.maskStroke = obj;
  obj.actionButtonPressable = { padding: 8, zIndex: 100, borderRadius: 20 };
  obj = { tintColor: nativeDefault.colors.ICON_SUBTLE };
  obj.actionButtonIcon = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = noop.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0 }));
  let stateFromStores;
  const tmp2 = closure_11();
  let obj = navigation(stateFromStores[9]);
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    totalMentionCount = totalMentionCount.getTotalMentionCount();
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      channel = channel.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
    }
    obj = totalMentionCount;
  });
  let obj1 = noop;
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    if (stateFromStores >= 10) {
      if (tmp < 100) {
        let obj = { minWidth: native.BADGE_SIZE + 8 };
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  let obj2 = navigation(stateFromStores[10]);
  let backgroundColor = obj2.useGradientValue(navigation(stateFromStores[10]).GradientPercentage.START);
  if (null == backgroundColor) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = obj1.useCallback(() => {
    if (null == onPress) {
      if (navigation != null) {
        obj.goBack();
      }
      obj = navigation;
    } else {
      tmp();
    }
  }, items2);
  obj = { ref };
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = "button";
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[13]).intl;
    obj = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[13]).t.vxFYaM, obj);
  } else {
    const intl = tmp3(tmp4[13]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[13]).t["13/7kX"]);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.onPress = callback;
  obj.style = tmp2.actionButtonPressable;
  obj1 = { source: tmp9(tmp4[14]), style: { tintColor: tmp2.actionButtonIcon.tintColor } };
  const items3 = [closure_9(closure_5, obj1), ];
  let tmp8Result = null;
  if (stateFromStores > 0) {
    obj2 = { style: tmp2.maskWrapper, children: null };
    const obj3 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    obj2.children = tmp8(tmp9(tmp4[15]), obj3);
    tmp8Result = tmp8(tmp14, obj2);
  }
  const obj4 = { children: null };
  items3[1] = tmp8Result;
  obj.children = closure_10(closure_4, { children: items3 });
  obj4.children = closure_9(navigation(stateFromStores[12]).PressableOpacity, obj);
  return closure_9(onPress(stateFromStores[11]), obj4);
});