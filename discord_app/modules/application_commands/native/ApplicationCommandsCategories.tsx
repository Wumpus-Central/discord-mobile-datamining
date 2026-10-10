// === Module 12112: ApplicationCommandsCategories ===

// Module 12112 (ApplicationCommandsCategories)
import nativeDefault from "native" /* 587 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import FastImageDefault from "FastImage" /* 6156 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11927 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, FlatList: hasOwnProperty } = get_ActivityIndicator);
const ApplicationCommandsCategoriesConstants = fn(12107);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: closure_7 } = ApplicationCommandsCategoriesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { container: { backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" }, categoryImage: null, fadedItem: { opacity: 0.5 }, activeItem: null, item: null };
let size = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj.categoryImage = size;
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" };
obj.activeItem = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.item = { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CategoryItem(section) {
  const cResult = section(index[8]).c(27);
  section = section.section;
  handlePressCategory = section.handlePressCategory;
  ({ active, index } = section);
  const guildId = section.guildId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === section.botId) {
      let tmp7 = cResult[3];
    }
    const stateFromStores = tmp(index[9]).useStateFromStores(first, tmp7);
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === section) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] === tmp9) {
        if (cResult[10] === handlePressCategory) {
          if (cResult[13] === active) {
            if (cResult[14] === section.name) {
              const tmp21 = active ? tmp4.activeItem : tmp4.fadedItem;
              class R {
                constructor() {
                  return handlePressCategory(index);
                }
              }
              const items1 = [tmp4.item, tmp21];
              cResult[16] = tmp4.item;
              cResult[17] = tmp21;
              cResult[18] = items1;
            }
          }
          class R {
            constructor() {
              return handlePressCategory(index);
            }
          }
          const formatToPlainString = tmp18.formatToPlainString;
          let name = tmp(index[12]).t;
          if (active) {
            { applicationName: null }.applicationName = section.name;
            class R {
              constructor() {
                return handlePressCategory(index);
              }
            }
            const obj2 = { applicationName: null };
          } else {
            { applicationName: null }.applicationName = section.name;
            class R {
              constructor() {
                return handlePressCategory(index);
              }
            }
            const obj3 = { applicationName: null };
          }
          cResult[13] = active;
          name = section.name;
          cResult[14] = name;
          cResult[15] = tmp19;
        }
        class R {
          constructor() {
            return handlePressCategory(index);
          }
        }
        cResult[10] = handlePressCategory;
        cResult[11] = index;
        cResult[12] = R;
      }
      let tmp12 = null != tmp9;
      if (tmp12) {
        class R {
          constructor() {
            return handlePressCategory(index);
          }
        }
        tmp15[0] = tmp4.categoryImage;
        tmp15[1] = tmp9;
        tmp12 = jsx(handlePressCategory(index[11]), tmp15);
      }
      cResult[7] = tmp9;
      cResult[8] = tmp4.categoryImage;
      cResult[9] = tmp12;
    }
    const tmpResult = tmp(index[9]);
    const applicationCommandsIconSource = tmp(index[10]).getApplicationCommandsIconSource(section, stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = section;
    cResult[6] = applicationCommandsIconSource;
    tmp9 = applicationCommandsIconSource;
    const tmpResult2 = tmp(index[10]);
  }
  const fn = function l() {
    if (null != guildId) {
      let botId;
      if (section != null) {
        botId = section.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  };
  cResult[1] = guildId;
  cResult[2] = section.botId;
  cResult[3] = fn;
  tmp7 = fn;
  const obj = section(index[8]);
}) : (function CategoryItem(section) {
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: noop } = section);
  const tmp = closure_9();
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
  const intl = tmp2(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1126).t;
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
  return jsx(section(6184).PressableOpacity, {
    onPress() {
      return importDefault(dependencyMap);
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  }, section.name);
}));
ReactCompilerGating = fn(558);
let obj4 = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationCommandsCategories(selectedIndex) {
  const cResult = onPressSection(guildId[8]).c(22);
  ({ style, sections, onPressSection } = selectedIndex);
  selectedIndex = selectedIndex.selectedIndex;
  guildId = selectedIndex.guildId;
  closure_9();
  noop = noop.useRef(null);
  noop.useRef(null);
  noop.useRef(null);
  noop.useRef(null);
  if (cResult[0] !== selectedIndex) {
    const fn = function c() {
      if (null != ref.current) {
        if (null != ref2.current) {
          if (null != ref.current) {
            if (null != ref3.current) {
              const result = selectedIndex * handlePressCategory;
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
    };
    const items = [selectedIndex];
    cResult[0] = selectedIndex;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] !== onPressSection) {
    const fn2 = function u(arg0) {
      onPressSection(arg0);
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    };
    cResult[3] = onPressSection;
    cResult[4] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  handlePressCategory = tmp7;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function x(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      closure_3.current = contentOffset.x;
      closure_4.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
    };
    cResult[5] = fn3;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        layout = selectedIndex.nativeEvent.layout;
        closure_3.current = 0;
        closure_4.current = layout.width;
        closure_5.current = layout.width;
        return;
      }
    }
    cResult[6] = M;
  } else {
    class M {
      constructor(arg0) {
        layout = selectedIndex.nativeEvent.layout;
        closure_3.current = 0;
        closure_4.current = layout.width;
        closure_5.current = layout.width;
        return;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        layout = selectedIndex.nativeEvent.layout;
        closure_3.current = 0;
        closure_4.current = layout.width;
        closure_5.current = layout.width;
        return;
      }
    }
    cResult[7] = tmp11;
  } else {
    class M {
      constructor(arg0) {
        layout = selectedIndex.nativeEvent.layout;
        closure_3.current = 0;
        closure_4.current = layout.width;
        closure_5.current = layout.width;
        return;
      }
    }
  }
  if (cResult[8] === guildId) {
    class M {
      constructor(arg0) {
        layout = selectedIndex.nativeEvent.layout;
        closure_3.current = 0;
        closure_4.current = layout.width;
        closure_5.current = layout.width;
        return;
      }
    }
  }
  class N {
    constructor(arg0) {
      index = selectedIndex.index;
      obj = { active: index === selectedIndex, section: selectedIndex.item, index, handlePressCategory: closure_7, guildId };
      return jsx(closure_10, obj);
    }
  }
  cResult[8] = guildId;
  cResult[9] = tmp7;
  cResult[10] = selectedIndex;
  cResult[11] = N;
  let obj = onPressSection(guildId[8]);
}) : (function ApplicationCommandsCategories(onPressSection) {
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
            const result = selectedIndex * handlePressCategory;
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
  handlePressCategory = noop.useCallback((arg0) => {
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
  const tmp = closure_9();
  obj.children = <ref3 ref={ref} getItemLayout={callback3} data={sections} keyboardShouldPersistTaps="always" horizontal keyExtractor={function keyExtractor(id) {
    return id.id;
  }} renderItem={noop.useCallback((section) => {
    const index = section.index;
    return <closure_10 active={index === selectedIndex} section={section.item} index={index} handlePressCategory={handlePressCategory} guildId={guildId} />;
  }, items2)} showsHorizontalScrollIndicator={false} onScroll={callback1} onLayout={callback2} />;
  return <ref2 style={null}>{null}</ref2>;
});