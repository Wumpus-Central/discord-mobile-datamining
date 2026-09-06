// === Module 12394: ApplicationCommandDiscovery ===

// Module 12394 (ApplicationCommandDiscovery)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Server from "Server" /* 1894 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import useFontScale from "useFontScale" /* 4982 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 9298 */;
import ApplicationSectionHeader from "ApplicationSectionHeader" /* 12396 */;
import ApplicationCommandDiscoveryManager from "ApplicationCommandDiscoveryManager" /* 12397 */;
import ApplicationCommandsCategoriesDefault from "ApplicationCommandsCategories" /* 12398 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ApplicationSectionHeaderDefault = ApplicationSectionHeader;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, SectionList: closure_7 } = get_ActivityIndicator);
const ApplicationCommandConstants = fn(4999);
({ BuiltInSectionId: closure_8, DISCOVERY_COMMANDS_QUERY_LIMIT: closure_9 } = ApplicationCommandConstants);
const ITEM_HEIGHT = fn(12395).ITEM_HEIGHT;
const AUTOCOMPLETE_ROW_HEIGHT = fn(10263).AUTOCOMPLETE_ROW_HEIGHT;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, SectionListElementType: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let createStyles = { discoveryWrapper: { flex: 1 }, noCommandsImage: { height: 50, width: 50, marginBottom: 16 }, noCommandsContainer: { padding: 0, height: 100 }, commandsList: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createStyles.commandsList = createStyles;
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default function ApplicationCommandDiscovery(channel) {
  ({ onPressSlashItem: require, onHeightChange } = channel);
  channel = channel.channel;
  const canOnlyUseTextCommands = channel.canOnlyUseTextCommands;
  let ref;
  c11 = undefined;
  commandsByActiveSection = undefined;
  c13 = undefined;
  filteredSectionId = undefined;
  c15 = undefined;
  filterSection = undefined;
  let onPressSection;
  let tmp = onPressSection();
  dependencyMap = tmp;
  let obj = useFontScale;
  const bound = Math.max(obj.useFontScale() * c11, c11);
  ref = ref.useRef(null);
  let tmp4 = bound(ref.useState(0), 2);
  const selectedIndex = tmp4[0];
  closure_7 = tmp6;
  ref = ref.useRef(false);
  let obj2 = ApplicationCommandDiscoveryManager;
  const commandDiscoveryManager = obj2.useCommandDiscoveryManager((initialSectionId) => initialSectionId.initialSectionId);
  let obj3 = channel(9416);
  obj = { context: { channel, type: "channel" }, filters: null, options: null, allowFetch: true };
  obj = { commandTypes: null, builtIns: null, applicationCommands: null };
  let items = [Server.ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  const BuiltInCommandFilter = ApplicationCommandQueryTypes.BuiltInCommandFilter;
  obj.builtIns = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  obj.applicationCommands = !canOnlyUseTextCommands;
  obj.filters = obj;
  const obj1 = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
  obj.options = obj1;
  const discovery = obj3.useDiscovery(obj);
  const sectionDescriptors = discovery.sectionDescriptors;
  ({ activeSections: c11, commandsByActiveSection } = discovery);
  ({ hasMoreAfter: c13, filteredSectionId } = discovery);
  ({ scrollDown: c15, filterSection } = discovery);
  const items1 = [filterSection, commandDiscoveryManager, tmp4[1], sectionDescriptors];
  const effect = obj1.useEffect(() => {
    if (null != commandDiscoveryManager) {
      filterSection(tmp);
      const findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
      let num2 = 0;
      if (-1 !== findIndexResult) {
        num2 = findIndexResult;
      }
      closure_7(num2);
    }
  }, items1);
  const effect1 = obj1.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["2wfLMm"]));
    AppAnalyticsUtils.trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const result = closure_1_0(dependencyMap[12]).updateInitialSectionId(undefined);
    };
  }, []);
  const items2 = [commandsByActiveSection, onHeightChange, bound];
  const effect2 = obj1.useEffect(() => {
    if (onHeightChange != null) {
      closure_0 = bound;
      let num2 = 0;
      if (0 !== commandsByActiveSection.length) {
        num2 = arr.reduce((acc, data) => {
          if (0 === data.data.length) {
            let sum = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + 160;
          } else {
            sum = acc + (ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + (closure_0 + sectionDescriptors) * data.data.length);
          }
          return sum;
        }, 0);
      }
      tmp(num2);
      arr = commandsByActiveSection;
    }
  }, items2);
  const items3 = [sectionDescriptors, filterSection, filteredSectionId];
  onPressSection = obj1.useCallback((arg0) => {
    if (sectionDescriptors[arg0].id !== filteredSectionId) {
      if (tmp.id !== constants.FRECENCY) {
        filterSection(tmp.id);
        closure_7(arg0);
      }
      const result = ApplicationCommandDiscoveryManager.updateInitialSectionId(undefined);
    }
    filterSection(null);
    closure_7(0);
  }, items3);
  const callback1 = obj1.useCallback(() => {
    closure_8.current = true;
    AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_BROWSER_SCROLLED);
  }, []);
  const callback2 = obj1.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const targetContentOffset = nativeEvent.targetContentOffset;
    let y;
    if (targetContentOffset != null) {
      y = targetContentOffset.y;
    }
    if (nativeEvent.contentOffset.y === y) {
      closure_8.current = false;
    }
  }, []);
  const items4 = [sectionDescriptors, commandsByActiveSection, bound];
  const callback3 = obj1.useCallback(() => {
    closure_8.current = false;
  }, []);
  const memo = obj1.useMemo(() => {
    c0 = 0;
    const items = [];
    for (const item10008 of sectionDescriptors) {
      let tmp = (function _loop(item10008) {
        const findIndexResult = commandsByActiveSection.findIndex((section) => section.section.id === item10008.id);
        if (findIndexResult >= 0) {
          const result = commandsByActiveSection[findIndexResult].data.length * bound;
          const sum = result + ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + c0;
          items.push(sum);
          c0 = sum;
        } else {
          items.push(c0);
        }
      })(item10008);
      continue;
    }
    return items;
  }, items4);
  const items5 = [memo];
  closure_19 = obj1.useMemo(() => _modDef12.throttle((arg0) => {
    let num = 0;
    if (0 < memo.length) {
      let num2 = 0;
      let num3 = 0;
      if (0 === tmp[0]) {
        const sum = num3 + 1;
        const sum1 = num2 + 1;
        num = sum;
        while (sum1 < memo.length) {
          num2 = sum1;
          num3 = sum;
          if (0 === tmp5[sum1]) {
            continue;
          } else {
            num2 = sum1;
            num3 = sum;
            num = sum;
            if (arg0 < tmp5[sum1]) {
              break;
            }
          }
          continue;
        }
      } else {
        num2 = 0;
        num3 = 0;
        num = 0;
      }
    }
    closure_1_7(num);
  }, 100), items5);
  const items6 = [bound];
  const items7 = [channel.guild_id, onPressSection, sectionDescriptors, selectedIndex];
  const callback4 = obj1.useCallback((arg0, index) => {
    if (null == arg0) {
      let obj = { length: 0, offset: 0, index };
      return obj;
    } else {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let ROW = constants3.ROW;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
          if (index === num + num2 + num3) {
            ROW = constants3.HEADER;
          } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
            num = num + 1;
            num2 = num2 + nextResult.data.length;
            ROW = constants3.FOOTER;
          } else {
            let sum = num + 1;
            num = sum;
            num2 = num2 + (index - sum - num2 - num3);
            ROW = constants3.ROW;
          }
          iter.return();
          break;
        } else {
          num = num + 1;
          num2 = num2 + tmp4.data.length;
          num3 = num3 + 1;
          continue;
        }
        let tmp28 = constants3;
        if (constants3.ROW === ROW) {
          let num4 = bound;
        } else if (tmp29.HEADER === ROW) {
          num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
        } else {
          let FOOTER = tmp28.FOOTER;
          num4 = 0;
        }
        obj = { length: num4, offset: null, index: null };
        obj.offset = num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + num2 * bound;
        obj.index = index;
        return obj;
      }
    }
  }, items6);
  obj2 = { style: null, children: null };
  const items8 = [tmp.discoveryWrapper, channel.style];
  obj2.style = items8;
  obj3 = {
    ref,
    sections: commandsByActiveSection,
    style: tmp.commandsList,
    onScrollBeginDrag: callback1,
    onScrollEndDrag: callback2,
    onMomentumScrollEnd: callback3,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      ({ layoutMeasurement, contentSize, contentInset } = nativeEvent);
      const y = nativeEvent.contentOffset.y;
      closure_19(y);
      const current = ref.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = _undefined.length > 0;
      }
      if (tmp2) {
        if (y < contentInset.top) {
          const current2 = ref.current;
          if (current2 != null) {
            current2.scrollToLocation({ sectionIndex: 0, itemIndex: 0, viewPosition: 0, animated: false });
          }
        } else if (y > contentSize.height - layoutMeasurement.height - contentInset.bottom) {
          const current3 = ref.current;
          if (current3 != null) {
            const obj = { sectionIndex: _undefined.length - 1, itemIndex: null, viewPosition: 1, animated: false };
            const _Math = Math;
            obj.itemIndex = Math.max(commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1, 0);
            current3.scrollToLocation(obj);
          }
        }
      }
      let tmp7 = c13;
      if (c13) {
        tmp7 = y + layoutMeasurement.height >= contentSize.height - 3 * bound;
      }
      if (tmp7) {
        _undefined2();
      }
    },
    scrollEventThrottle: 16,
    keyExtractor(id) {
      return id.id;
    },
    maintainVisibleContentPosition: null,
    renderItem: null,
    renderSectionHeader: null,
    getItemLayout: null,
    stickySectionHeadersEnabled: true
  };
  let obj4 = null;
  const memo1 = obj1.useMemo(() => closure_2_14(ApplicationCommandsCategoriesDefault, { onPressSection, sections: sectionDescriptors, selectedIndex, guildId: channel.guild_id }), items7);
  if (discovery.loading) {
    obj4 = { minIndexForVisible: 1 };
  }
  obj3.maintainVisibleContentPosition = obj4;
  obj3.renderItem = function renderItem(item) {
    item = item.item;
    const section = item.section;
    let found;
    if (item.inputType === ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER) {
      return filteredSectionId(onHeightChange(12399), {});
    } else {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
      const obj = {
        command: item,
        onPress() {
            let tmpResult;
            if (require != null) {
              tmpResult = tmp(item, found, section.section);
            }
            return tmpResult;
          },
        section: found,
        showIcon: item.applicationId !== section.section.id,
        guildId: found.guild_id
      };
      return filteredSectionId(onHeightChange(12400), obj);
    }
  };
  obj3.renderSectionHeader = function renderSectionHeader(section) {
    section = section.section;
    let obj = { section: section.section, guildId: channel.guild_id };
    const children = [closure_2_14(ApplicationSectionHeaderDefault, obj, section.section.id), ];
    let tmp3Result = 0 === section.data.length;
    if (tmp3Result) {
      obj = { lightSource: tmp4(10418), darkSource: tmp4(10418), body: null, containerStyle: null, imageStyle: null };
      const intl = util.intl;
      obj = { applicationName: section.section.name };
      obj.body = intl.format(util.t.WoQXT6, obj);
      ({ noCommandsContainer: obj2.containerStyle, noCommandsImage: obj2.imageStyle } = closure_3);
      tmp3Result = closure_2_14(native.ThemedEmptyState, obj);
    }
    children[1] = tmp3Result;
    return value2(__initData, { children });
  };
  obj3.getItemLayout = callback4;
  const items9 = [filteredSectionId(closure_7, obj3), memo1];
  obj2.children = items9;
  return filterSection(selectedIndex, obj2);
};