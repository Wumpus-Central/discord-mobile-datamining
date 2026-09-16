// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../../../stores/GuildReadStateStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let closure_11 = createStyles.createStyles(() => {
  const obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  const rect = {
    position: "absolute",
    minWidth: native.BADGE_SIZE,
    height: native.BADGE_SIZE,
    top: 10,
    left: 8,
    flexShrink: 0,
    flexGrow: 1,
    zIndex: 100,
  };
  obj.maskWrapper = rect;
  obj.maskStroke = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonPressable = { padding: 8, zIndex: 100, borderRadius: 20 };
  const obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonIcon = { tintColor: nativeDefault.colors.ICON_SUBTLE };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx",
);

export const PressableNavigatorBackIcon = noop.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0, badgeCutoutColor: 0 }));
  let stateFromStores;
  const tmp2 = closure_11();
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = navigation(stateFromStores[9]).useStateFromStores(items, () => {
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
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    if (stateFromStores >= 10) {
      if (tmp < 100) {
        const obj2 = { minWidth: native.BADGE_SIZE + 8 };
        let obj = obj2;
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  let obj = navigation(stateFromStores[9]);
  const token = navigation(stateFromStores[10]).useToken(navigation.badgeCutoutColor);
  const obj3 = navigation(stateFromStores[10]);
  let backgroundColor = token;
  if (token == null) {
    backgroundColor = obj4.useGradientValue(navigation(stateFromStores[11]).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = noop.useCallback(() => {
    if (null == onPress) {
      if (navigation != null) {
        navigation.goBack();
      }
    } else {
      tmp();
    }
  }, items2);
  obj4 = navigation(stateFromStores[11]);
  const obj5 = { ref };
  const merged1 = Object.assign(merged);
  obj5.accessibilityRole = "button";
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[14]).intl;
    const obj6 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[14]).t.vxFYaM, obj6);
  } else {
    const intl = tmp3(tmp4[14]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[14]).t["13/7kX"]);
  }
  obj5.accessibilityLabel = formatToPlainStringResult;
  obj5.onPress = callback;
  obj5.style = tmp2.actionButtonPressable;
  const tmp11 = onPress(stateFromStores[12]);
  const items3 = [
    closure_9(closure_5, {
      source: onPress(stateFromStores[15]),
      style: { tintColor: tmp2.actionButtonIcon.tintColor },
    }),
  ];
  let tmp9Result = null;
  if (stateFromStores > 0) {
    const obj8 = { style: tmp2.maskWrapper, children: null };
    const obj9 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    obj8.children = closure_9(tmp10(tmp4[16]), obj9);
    tmp9Result = closure_9(closure_4, obj8);
  }
  const obj10 = { children: null };
  items3[1] = tmp9Result;
  obj5.children = closure_10(closure_4, { children: items3 });
  obj10.children = closure_9(navigation(stateFromStores[13]).PressableOpacity, obj5);
  return closure_9(tmp11, obj10);
});
