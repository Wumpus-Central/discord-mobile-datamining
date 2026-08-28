// discord_app/modules/application_commands/native/ApplicationCommandsCategories.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../user_settings/ThemeStore.tsx";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import ICON_SIZE from "ApplicationCommandsCategoriesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: c9 } = ICON_SIZE);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { container: null, categoryImage: null, fadedItem: null, activeItem: null, item: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: ThemesDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" };
obj[0] = obj;
createCacheKey = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj[1] = createCacheKey;
obj[2] = { opacity: 0.5 };
obj[3] = { opacity: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[4] = { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = importAllResult.memo((section) => {
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: closure_3 } = section);
  let stateFromStores;
  const tmp = callback2();
  let obj = section(589);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => {
    if (null != closure_3) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return closure_1_8.getMember(tmp, tmp2.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = importAllResult.useMemo(() => section(closure_1_2[9]).getApplicationCommandsIconSource(section, stateFromStores), items1);
  let tmp6 = null != memo;
  if (tmp6) {
    obj = { style: null, source: null };
    obj[0] = tmp.categoryImage;
    obj[1] = memo;
    tmp6 = callback(preloadDefault, obj);
  }
  obj = {
    onPress() {
      return callback(closure_2);
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1236).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1236).t;
  if (active) {
    obj1 = { applicationName: null };
    obj1[0] = section.name;
    let formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj1);
  } else {
    const obj2 = { applicationName: null };
    obj2[0] = section.name;
    formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj2);
  }
  obj[2] = formatToPlainStringResult;
  const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  obj[3] = callback(stateFromStores, { style: items2, children: tmp6 });
  return callback(section(5033).PressableOpacity, obj, section.name);
});
let obj2 = { opacity: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let result = require("set").fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default function ApplicationCommandsCategories(onPressSection) {
  onPressSection = onPressSection.onPressSection;
  const selectedIndex = onPressSection.selectedIndex;
  const guildId = onPressSection.guildId;
  importAllResult = undefined;
  closure_4 = undefined;
  let absoluteFill;
  let ref;
  let callback;
  ({ style, sections } = onPressSection);
  let obj = onPressSection(guildId[13]);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "ApplicationCommandsCategories" }).enabled;
  importAllResult = importAllResult.useRef(null);
  closure_4 = importAllResult.useRef(null);
  absoluteFill = importAllResult.useRef(null);
  ref = importAllResult.useRef(null);
  const items = [selectedIndex];
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          if (null != ref3.current) {
            const result = selectedIndex * closure_1_9;
            if (tmp8) {
              const current = tmp3.current;
              const obj = { offset: null };
              obj[0] = result;
              current.scrollToOffset(obj);
            }
            tmp8 = result > tmp2.current || result < tmp.current;
          }
        }
      }
    }
  }, items);
  const items1 = [onPressSection];
  callback = importAllResult.useCallback((arg0) => {
    onPressSection(arg0);
    const result = onPressSection(guildId[14]).triggerHapticFeedback(selectedIndex(guildId[15]).IMPACT_LIGHT);
  }, items1);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_3.current = contentOffset.x;
    closure_4.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_3.current = 0;
    closure_4.current = layout.width;
    closure_5.current = layout.width;
  }, []);
  const items2 = [selectedIndex, callback, guildId];
  const callback3 = importAllResult.useCallback((arg0, index) => ({ length: closure_9, offset: closure_9 * index, index }), []);
  obj = { style: items3, children: null };
  items3 = [callback2().container, style];
  let tmp14Result = !enabled;
  const callback4 = importAllResult.useCallback((index) => {
    index = index.index;
    return closure_1_10(closure_1_13, { active: index === selectedIndex, section: index.item, index, handlePressCategory: callback, guildId });
  }, items2);
  if (!enabled) {
    const tmp14 = callback;
    const tmp16 = selectedIndex(tmp3[16]);
    let str = "light";
    if (tmp2Result.isThemeDark(callback.theme)) {
      str = "dark";
    }
    obj = { blurTheme: null, style: null };
    obj[0] = str;
    obj[1] = absoluteFill.absoluteFill;
    tmp14Result = tmp14(tmp16, obj);
    tmp2Result = onPressSection(tmp3[17]);
  }
  const items4 = [
    tmp14Result,
    callback(ref, {
      ref,
      getItemLayout: callback3,
      data: sections,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor(id) {
        return id.id;
      },
      renderItem: callback4,
      showsHorizontalScrollIndicator: false,
      onScroll: callback1,
      onLayout: callback2
    })
  ];
  obj[1] = items4;
  return closure_11(closure_4, obj);
};