// discord_app/modules/application_commands/native/ApplicationCommandsCategories.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import application_commands_ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import ApplicationCommandsCategoriesConstants from "ApplicationCommandsCategoriesConstants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let handlePressCategory;

let ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let obj2;
let obj3;
let size;
let react = react_mod;
({ View: closure_4, FlatList: hasOwnProperty } = react_native);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: metroImportDefault } = ApplicationCommandsCategoriesConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  categoryImage: size,
  fadedItem: { opacity: 0.5 },
  activeItem: obj3,
  item: {
    marginVertical: NODE_MARGIN,
    marginHorizontal: NODE_MARGIN,
    height: NODE_SIZE,
    width: NODE_SIZE,
    borderRadius: NODE_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
};
obj2 = {
  backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND,
  borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 8,
  paddingVertical: 4,
  flexDirection: "row",
  alignItems: "center",
};
createStyles = createStyles.createStyles;
size = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (section) => {
        let active;
        let first;
        let index;
        const tmp = section;
        const obj = section(index[8]);
        const cResult = obj.c(27);
        section = section.section;
        handlePressCategory = section.handlePressCategory;
        ({ active, index } = section);
        const guildId = section.guildId;
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildMemberStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === guildId) {
          let tmp7;
          if (cResult[2] === section.botId) {
            tmp7 = cResult[3];
          }
          const tmpResult = tmp(index[9]);
          const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
          if (cResult[4] === stateFromStores) {
            let tmp9;
            if (cResult[5] === section) {
              tmp9 = cResult[6];
            }
            if (cResult[7] === tmp9) {
              if (cResult[10] === handlePressCategory) {
                if (cResult[13] === active) {
                  const tmp20 = active ? tmp4.activeItem : tmp4.fadedItem;
                  class R {
                    constructor() {
                      return handlePressCategory(index);
                    }
                  }
                  const items1 = [tmp4.item, tmp20];
                  cResult[16] = tmp4.item;
                  cResult[17] = tmp20;
                  cResult[18] = items1;
                }
                class R {
                  constructor() {
                    return handlePressCategory(index);
                  }
                }
                const formatToPlainString = tmp18.formatToPlainString;
                const t = tmp(index[12]).t;
                if (active) {
                  class R {
                    constructor() {
                      return handlePressCategory(index);
                    }
                  }
                } else {
                  class R {
                    constructor() {
                      return handlePressCategory(index);
                    }
                  }
                }
                cResult[13] = active;
                cResult[14] = section.name;
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
          const tmpResult2 = tmp(index[10]);
          const applicationCommandsIconSource = tmpResult2.getApplicationCommandsIconSource(section, stateFromStores);
          cResult[4] = stateFromStores;
          cResult[5] = section;
          cResult[6] = applicationCommandsIconSource;
          tmp9 = applicationCommandsIconSource;
        }
        const fn = function o() {
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
      }
    : (section) => {
        let active;
        let formatToPlainStringResult;
        section = section.section;
        ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: react } = section);
        const tmp = closure_9();
        let obj = section(504);
        const items = [GuildMemberStore];
        const stateFromStores = obj.useStateFromStores(items, () => {
          if (null != react) {
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
        const memo = react.useMemo(() => {
          const obj = application_commands_ApplicationCommandUtils;
          return obj.getApplicationCommandsIconSource(section, stateFromStores);
        }, items1);
        null != memo && jsx(FastImageDefault, { style: tmp.categoryImage, source: memo });
        const PressableOpacity = tmp2(5916).PressableOpacity;
        const intl = tmp2(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = tmp2(1126).t;
        if (active) {
          const obj4 = { applicationName: section.name };
          formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj4);
        } else {
          const obj5 = { applicationName: section.name };
          formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj5);
        }
        const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
        return (
          <PressableOpacity
            key={section.name}
            onPress={function onPress() {
              return importDefault(dependencyMap);
            }}
            accessibilityRole="button"
            accessibilityLabel={formatToPlainStringResult}
          >
            {null}
          </PressableOpacity>
        );
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedIndex) => {
      let guildId;
      let onPressSection;
      let sections;
      let style;
      let tmp10;
      let tmp18;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = onPressSection(guildId[8]);
      const cResult = obj.c(22);
      ({ style, sections, onPressSection } = selectedIndex);
      selectedIndex = selectedIndex.selectedIndex;
      guildId = selectedIndex.guildId;
      const tmp2 = closure_9();
      const obj2 = react;
      react = react.useRef(null);
      const ref2 = react.useRef(null);
      const ref3 = react.useRef(null);
      const ref = react.useRef(null);
      if (cResult[0] !== selectedIndex) {
        const fn = function c() {
          if (null != ref.current) {
            if (null != ref2.current) {
              if (null != ref.current) {
                if (null != ref3.current) {
                  const result = selectedIndex * metroImportDefault;
                  const tmp8 = result > tmp2.current || result < tmp.current;
                  if (tmp8) {
                    const current = tmp3.current;
                    const obj = { offset: result };
                    current.scrollToOffset(obj);
                  }
                }
              }
            }
          }
        };
        const items = [selectedIndex];
        cResult[0] = selectedIndex;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = obj2.useEffect(tmp4, tmp5);
      if (cResult[3] !== onPressSection) {
        const fn2 = function u(arg0) {
          onPressSection(arg0);
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        };
        cResult[3] = onPressSection;
        cResult[4] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[4];
      }
      handlePressCategory = tmp7;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function x(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const contentOffset = nativeEvent.contentOffset;
          ref.current = contentOffset.x;
          ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
        };
        cResult[5] = fn3;
        tmp8 = fn3;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function w(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          ref.current = 0;
          ref2.current = layout.width;
          ref3.current = layout.width;
        };
        cResult[6] = fn4;
        tmp9 = fn4;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn5 = function k(arg0, index) {
          return { length: handlePressCategory, offset: handlePressCategory * index, index };
        };
        cResult[7] = fn5;
        tmp10 = fn5;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === guildId) {
        if (cResult[9] === tmp7) {
          let tmp11;
          if (cResult[10] === selectedIndex) {
            tmp11 = cResult[11];
          }
          if (cResult[12] === style) {
            let tmp12;
            if (cResult[13] === tmp2.container) {
              tmp12 = cResult[14];
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class G {
                constructor(id) {
                  return id.id;
                }
              }
              cResult[15] = G;
            } else {
              class G {
                constructor(id) {
                  return id.id;
                }
              }
            }
            if (cResult[16] === tmp11) {
              class G {
                constructor(id) {
                  return id.id;
                }
              }
              if (cResult[19] === tmp14) {
                class G {
                  constructor(id) {
                    return id.id;
                  }
                }
                return tmp18;
              }
              const tmp21 = <ref2 style={tmp12}>{tmp14}</ref2>;
              cResult[19] = tmp14;
              cResult[20] = tmp12;
              cResult[21] = tmp21;
              tmp18 = tmp21;
            }
            const tmp17 = (
              <ref3
                ref={ref}
                getItemLayout={tmp10}
                data={sections}
                keyboardShouldPersistTaps="always"
                horizontal
                keyExtractor={G}
                renderItem={tmp11}
                showsHorizontalScrollIndicator={false}
                onScroll={tmp8}
                onLayout={tmp9}
              />
            );
            cResult[16] = tmp11;
            cResult[17] = sections;
            cResult[18] = tmp17;
          }
          const items1 = [tmp2.container, style];
          cResult[12] = style;
          cResult[13] = tmp2.container;
          cResult[14] = items1;
          tmp12 = items1;
        }
      }
      class N {
        constructor(section) {
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
        }
      }
      cResult[8] = guildId;
      cResult[9] = tmp7;
      cResult[10] = selectedIndex;
      cResult[11] = N;
      tmp11 = N;
    }
  : (onPressSection) => {
      let sections;
      let style;
      onPressSection = onPressSection.onPressSection;
      const selectedIndex = onPressSection.selectedIndex;
      const guildId = onPressSection.guildId;
      react = undefined;
      ({ style, sections } = onPressSection);
      const tmp = closure_9();
      react = react.useRef(null);
      const ref2 = react.useRef(null);
      const ref3 = react.useRef(null);
      const ref = react.useRef(null);
      const items = [selectedIndex];
      const effect = react.useEffect(() => {
        if (null != ref.current) {
          if (null != ref2.current) {
            if (null != ref.current) {
              if (null != ref3.current) {
                const result = selectedIndex * metroImportDefault;
                const tmp8 = result > tmp2.current || result < tmp.current;
                if (tmp8) {
                  const current = tmp3.current;
                  const obj = { offset: result };
                  current.scrollToOffset(obj);
                }
              }
            }
          }
        }
      }, items);
      const items1 = [onPressSection];
      handlePressCategory = react.useCallback((arg0) => {
        onPressSection(arg0);
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }, items1);
      const callback1 = react.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }, []);
      const callback2 = react.useCallback((nativeEvent) => {
        const layout = nativeEvent.nativeEvent.layout;
        ref.current = 0;
        ref2.current = layout.width;
        ref3.current = layout.width;
      }, []);
      const items2 = [selectedIndex, handlePressCategory, guildId];
      const callback3 = react.useCallback((arg0, index) => ({ length: callback, offset: callback * index, index }), []);
      const items3 = [tmp.container, style];
      ({
        ref,
        getItemLayout: callback3,
        data: sections,
        keyboardShouldPersistTaps: "always",
        horizontal: true,
        keyExtractor(id) {
          return id.id;
        },
        renderItem: react.useCallback((section) => {
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
      });
      return <ref2 style={items3}>{null}</ref2>;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default tmp6;
