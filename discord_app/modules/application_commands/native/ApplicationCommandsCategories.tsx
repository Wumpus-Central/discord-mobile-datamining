// === Module 13947: ApplicationCommandsCategories ===

// Module 13947 (ApplicationCommandsCategories)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5261 */;
import FastImageDefault from "FastImage" /* 5717 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 13778 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;

require = fn;
const View = fn(17).View;
const ApplicationCommandsCategoriesConstants = fn(13944);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: metroRequire } = ApplicationCommandsCategoriesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj = { container: { backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" }, categoryImage: null, fadedItem: { opacity: 0.5 }, activeItem: null, item: null };
let size = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj.categoryImage = size;
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" };
obj.activeItem = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.item = { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = noop.memo(function CategoryItem(section) {
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: noop } = section);
  const tmp = closure_8();
  const items = [GuildMemberStore];
  const stateFromStores = section(504).useStateFromStores(items, () => {
    if (null != noop) {
      let botId;
      if (section != null) {
        botId = section.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = noop.useMemo(() => application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section, stateFromStores), items1);
  let tmp6 = null != memo;
  if (tmp6) {
    const obj2 = { style: tmp.categoryImage, source: memo };
    tmp6 = jsx(FastImageDefault, { style: tmp.categoryImage, source: memo });
  }
  const obj3 = {
    onPress() {
      return importDefault(dependencyMap);
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1113).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1113).t;
  if (active) {
    const obj4 = { applicationName: section.name };
    let formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj4);
  } else {
    const obj5 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj5);
  }
  obj3.accessibilityLabel = formatToPlainStringResult;
  const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  obj3.children = <stateFromStores style={items2}>{tmp6}</stateFromStores>;
  return jsx(section(6980).PressableOpacity, {
    onPress() {
      return importDefault(dependencyMap);
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  });
});
size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default function ApplicationCommandsCategories(onPressSection) {
  onPressSection = onPressSection.onPressSection;
  const selectedIndex = onPressSection.selectedIndex;
  const guildId = onPressSection.guildId;
  noop = undefined;
  ({ style, sections } = onPressSection);
  noop = noop.useRef(null);
  const ref2 = noop.useRef(null);
  noop.useRef(null);
  const ref = noop.useRef(null);
  const items = [selectedIndex];
  const effect = noop.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          if (null != ref3.current) {
            const result = selectedIndex * timestampProducer;
            if (tmp8) {
              const current = tmp3.current;
              const obj = { offset: result };
              current.scrollToOffset(obj);
            }
            tmp8 = result > tmp2.current || result < tmp.current;
          }
        }
      }
    }
  }, items);
  const items1 = [onPressSection];
  const handlePressCategory = noop.useCallback((arg0) => {
    onPressSection(arg0);
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items1);
  const callback1 = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_3.current = contentOffset.x;
    closure_4.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const items2 = [selectedIndex, handlePressCategory, guildId];
  const callback2 = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_3.current = 0;
    closure_4.current = layout.width;
    closure_5.current = layout.width;
  }, []);
  let obj = { style: null, children: null };
  const items3 = [closure_8().container, style];
  obj.style = items3;
  const callback3 = noop.useCallback((section) => {
    const index = section.index;
    return <closure_9 active={index === selectedIndex} section={section.item} index={index} handlePressCategory={handlePressCategory} guildId={guildId} />;
  }, items2);
  obj.children = handlePressCategory(onPressSection(guildId[14]).FlashList, {
    ref,
    data: sections,
    extraData: selectedIndex,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback3,
    showsHorizontalScrollIndicator: false,
    onScroll: callback1,
    onLayout: callback2
  });
  return handlePressCategory(ref2, obj);
};