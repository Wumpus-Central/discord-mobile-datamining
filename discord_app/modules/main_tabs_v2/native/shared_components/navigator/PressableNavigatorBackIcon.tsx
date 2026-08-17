// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../../stores/ChannelStore.tsx";
import closure_7 from "../../../../../stores/GuildReadStateStore.tsx";
import closure_8 from "../../../../../stores/SelectedChannelStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  obj = { position: "absolute", minWidth: Button.BADGE_SIZE, height: Button.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.PANEL_BG };
  obj[1] = obj;
  obj1 = { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 };
  obj[2] = obj1;
  const colors = ThemesDefault.colors;
  obj[3] = { tintColor: arg0 ? colors.ICON_SUBTLE : colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  const merged = Object.assign(navigation, Object.create(null));
  let stateFromStores;
  const tmp4 = callback(onPress(stateFromStores[9])("PressableNavigatorBackIcon"));
  let obj = navigation(stateFromStores[10]);
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
  let obj2 = navigation(stateFromStores[11]);
  let backgroundColor = obj2.useGradientValue(navigation(stateFromStores[11]).GradientPercentage.START);
  if (null == backgroundColor) {
    backgroundColor = tmp4.maskStroke.backgroundColor;
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
    const intl2 = tmp5(tmp3[14]).intl;
    obj = { mentionCount: null };
    obj[0] = stateFromStores;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[14]).t.vxFYaM, obj);
  } else {
    const intl = tmp5(tmp3[14]).intl;
    formatToPlainStringResult = intl.string(tmp5(tmp3[14]).t["13/7kX"]);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.onPress = callback;
  obj.style = tmp4.actionButtonPressable;
  obj1 = { source: tmp2(tmp3[15]), style: obj2 };
  obj2 = { tintColor: tmp4.actionButtonIcon.tintColor };
  const items3 = [closure_9(closure_5, obj1), ];
  let tmp9Result = null;
  if (stateFromStores > 0) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp4.maskWrapper;
    const obj4 = { value: null, maxValue: 99, backgroundColor: null, unread: false, style: null };
    obj4[0] = stateFromStores;
    obj4[2] = backgroundColor;
    obj4[4] = memo;
    obj3[1] = tmp9(tmp2(tmp3[16]), obj4);
    tmp9Result = tmp9(tmp14, obj3);
  }
  const obj5 = { children: null };
  items3[1] = tmp9Result;
  obj.children = closure_10(closure_4, { children: items3 });
  obj5[0] = closure_9(navigation(stateFromStores[13]).PressableOpacity, obj);
  return closure_9(onPress(stateFromStores[12]), obj5);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = forwardRefResult;