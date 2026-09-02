// === Module 7619: PressableNavigatorBackIcon ===

// Module 7619 (PressableNavigatorBackIcon)
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1386 */;
import closure_7 from "updateGuildUnreadSentinel" /* 7390 */;
import closure_8 from "handleConnectionOpen" /* 1980 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  obj = { position: "absolute", minWidth: Button.BADGE_SIZE, height: Button.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.PANEL_BG };
  obj[1] = obj;
  obj[2] = { padding: 8, zIndex: 100, borderRadius: 20 };
  obj[3] = { tintColor: ThemesDefault.colors.ICON_SUBTLE };
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  const merged = Object.assign(navigation, Object.create(null));
  let stateFromStores;
  const tmp2 = callback();
  let obj = navigation(stateFromStores[9]);
  const items = [closure_7, closure_8, closure_6];
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
  obj1 = importAllResult;
  const items1 = [stateFromStores];
  const memo = importAllResult.useMemo(() => {
    if (stateFromStores >= 10) {
      if (tmp < 100) {
        let obj = { minWidth: null };
        obj[0] = navigation(stateFromStores[7]).BADGE_SIZE + 8;
      } else {
        obj = { minWidth: null };
        obj[0] = navigation(stateFromStores[7]).BADGE_SIZE + 12;
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
  callback = obj1.useCallback(() => {
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
    obj = { mentionCount: null };
    obj[0] = stateFromStores;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[13]).t.vxFYaM, obj);
  } else {
    const intl = tmp3(tmp4[13]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[13]).t["13/7kX"]);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.onPress = callback;
  obj.style = tmp2.actionButtonPressable;
  obj1 = { source: tmp9(tmp4[14]), style: obj2 };
  obj2 = { tintColor: tmp2.actionButtonIcon.tintColor };
  const items3 = [closure_9(closure_5, obj1), ];
  let tmp8Result = null;
  if (stateFromStores > 0) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp2.maskWrapper;
    const obj4 = { value: null, maxValue: 99, backgroundColor: null, unread: false, style: null };
    obj4[0] = stateFromStores;
    obj4[2] = backgroundColor;
    obj4[4] = memo;
    obj3[1] = tmp8(tmp9(tmp4[15]), obj4);
    tmp8Result = tmp8(tmp14, obj3);
  }
  const obj5 = { children: null };
  items3[1] = tmp8Result;
  obj.children = closure_10(closure_4, { children: items3 });
  obj5[0] = closure_9(navigation(stateFromStores[12]).PressableOpacity, obj);
  return closure_9(onPress(stateFromStores[11]), obj5);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = forwardRefResult;