// discord_app/modules/application_commands/native/ApplicationCommandsCategories.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import application_commands_ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, FlatList: hasOwnProperty } = get_ActivityIndicator);
const ApplicationCommandsCategoriesConstants = fn(12395);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: closure_7 } = ApplicationCommandsCategoriesConstants);
const jsx = fn(21).jsx;
fn(4560);
let obj = { container: null, categoryImage: null, fadedItem: null, activeItem: null, item: null };
obj = {
  backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND,
  borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 8,
  paddingVertical: 4,
  flexDirection: "row",
  alignItems: "center",
};
obj.container = obj;
let size = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj.categoryImage = size;
obj.fadedItem = { opacity: 0.5 };
const createStyles = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.activeItem = createStyles;
obj.item = {
  marginVertical: NODE_MARGIN,
  marginHorizontal: NODE_MARGIN,
  height: NODE_SIZE,
  width: NODE_SIZE,
  borderRadius: NODE_SIZE / 2,
  alignItems: "center",
  justifyContent: "center",
};
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo((section) => {
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: noop } = section);
  const tmp = closure_9();
  let obj = section(504);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const memo = noop.useMemo(
    () => application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section, stateFromStores),
    items1,
  );
  let tmp6 = null != memo;
  if (tmp6) {
    obj = { style: tmp.categoryImage, source: memo };
    tmp6 = jsx(FastImageDefault, { style: tmp.categoryImage, source: memo });
  }
  obj = {
    onPress() {
      return importDefault(dependencyMap);
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl = tmp2(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1114).t;
  if (active) {
    const obj1 = { applicationName: section.name };
    let formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj1);
  } else {
    const obj2 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj2);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  obj.children = <stateFromStores style={items2}>{tmp6}</stateFromStores>;
  return jsx(
    section(5123).PressableOpacity,
    {
      onPress() {
        return importDefault(dependencyMap);
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    },
    section.name,
  );
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
  const ref3 = noop.useRef(null);
  const ref = noop.useRef(null);
  const items = [selectedIndex];
  const effect = noop.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          if (null != ref3.current) {
            const result = selectedIndex * React5;
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
  const callback2 = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_3.current = 0;
    closure_4.current = layout.width;
    closure_5.current = layout.width;
  }, []);
  const items2 = [selectedIndex, handlePressCategory, guildId];
  const callback3 = noop.useCallback((arg0, index) => ({ length: callback, offset: callback * index, index }), []);
  let obj = { style: null, children: null };
  const items3 = [closure_9().container, style];
  obj.style = items3;
  obj = {
    ref,
    getItemLayout: callback3,
    data: sections,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: noop.useCallback((section) => {
      const index = section.index;
      return (
        <closure_10
          active={index === selectedIndex}
          section={section.item}
          index={index}
          handlePressCategory={handlePressCategory}
          guildId={guildId}
        />
      );
    }, items2),
    showsHorizontalScrollIndicator: false,
    onScroll: callback1,
    onLayout: callback2,
  };
  obj.children = (
    <ref3
      ref={ref}
      getItemLayout={callback3}
      data={sections}
      keyboardShouldPersistTaps="always"
      horizontal
      keyExtractor={function keyExtractor(id) {
        return id.id;
      }}
      renderItem={noop.useCallback((section) => {
        const index = section.index;
        return (
          <closure_10
            active={index === selectedIndex}
            section={section.item}
            index={index}
            handlePressCategory={handlePressCategory}
            guildId={guildId}
          />
        );
      }, items2)}
      showsHorizontalScrollIndicator={false}
      onScroll={callback1}
      onLayout={callback2}
    />
  );
  return (
    <ref2
      ref={ref}
      getItemLayout={callback3}
      data={sections}
      keyboardShouldPersistTaps="always"
      horizontal
      keyExtractor={function keyExtractor(id) {
        return id.id;
      }}
      renderItem={noop.useCallback((section) => {
        const index = section.index;
        return (
          <closure_10
            active={index === selectedIndex}
            section={section.item}
            index={index}
            handlePressCategory={handlePressCategory}
            guildId={guildId}
          />
        );
      }, items2)}
      showsHorizontalScrollIndicator={false}
      onScroll={callback1}
      onLayout={callback2}
    />
  );
}
