// discord_app/modules/application_commands/native/ApplicationCommandDiscovery.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Server from "../../../flow/Server.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import ApplicationCommandTypes from "../ApplicationCommandTypes.tsx";
import ApplicationCommandQueryTypes from "../ApplicationCommandQueryTypes.tsx";
import _modDef9870 from "../../../../_runtime/metro/09870__.js";
import ApplicationSectionHeader from "ApplicationSectionHeader.tsx";
import ApplicationCommandDiscoveryManager from "../ApplicationCommandDiscoveryManager.tsx";
import ApplicationCommandsCategoriesDefault from "ApplicationCommandsCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ApplicationSectionHeaderDefault = ApplicationSectionHeader;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, SectionList: closure_7 } = get_ActivityIndicator);
const ApplicationCommandConstants = fn(5298);
({ BuiltInSectionId: closure_8, DISCOVERY_COMMANDS_QUERY_LIMIT: closure_9 } = ApplicationCommandConstants);
const ITEM_HEIGHT = fn(11870).ITEM_HEIGHT;
const AUTOCOMPLETE_ROW_HEIGHT = fn(9715).AUTOCOMPLETE_ROW_HEIGHT;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, SectionListElementType: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  discoveryWrapper: { flex: 1 },
  noCommandsImage: { height: 50, width: 50, marginBottom: 16 },
  noCommandsContainer: { padding: 0, height: 100 },
  commandsList: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND },
};
let closure_17 = createStyles.createStyles(obj2);
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
  const bound = Math.max(useFontScale.useFontScale() * c11, c11);
  ref = ref.useRef(null);
  let tmp4 = bound(ref.useState(0), 2);
  const selectedIndex = tmp4[0];
  closure_7 = tmp6;
  ref = ref.useRef(false);
  const commandDiscoveryManager = ApplicationCommandDiscoveryManager.useCommandDiscoveryManager(
    (initialSectionId) => initialSectionId.initialSectionId,
  );
  let obj5 = { context: { channel, type: "channel" }, filters: null, options: null, allowFetch: true };
  const obj6 = { commandTypes: null, builtIns: null, applicationCommands: null };
  let items = [Server.ApplicationCommandType.CHAT];
  obj6.commandTypes = items;
  const BuiltInCommandFilter = ApplicationCommandQueryTypes.BuiltInCommandFilter;
  obj6.builtIns = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  obj6.applicationCommands = !canOnlyUseTextCommands;
  obj5.filters = obj6;
  obj5.options = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
  const discovery = channel(8711).useDiscovery(obj5);
  const sectionDescriptors = discovery.sectionDescriptors;
  ({ activeSections: c11, commandsByActiveSection } = discovery);
  ({ hasMoreAfter: c13, filteredSectionId } = discovery);
  ({ scrollDown: c15, filterSection } = discovery);
  const items1 = [filterSection, commandDiscoveryManager, tmp4[1], sectionDescriptors];
  const effect = obj2.useEffect(() => {
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
  const effect1 = obj2.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["2wfLMm"]));
    AppAnalyticsUtils.trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const result = closure_1_0(dependencyMap[12]).updateInitialSectionId(undefined);
    };
  }, []);
  const items2 = [commandsByActiveSection, onHeightChange, bound];
  const effect2 = obj2.useEffect(() => {
    if (onHeightChange != null) {
      closure_0 = bound;
      let num2 = 0;
      if (0 !== commandsByActiveSection.length) {
        num2 = commandsByActiveSection.reduce((acc, data) => {
          if (0 === data.data.length) {
            let sum = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + 160;
          } else {
            sum =
              acc +
              (ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT +
                (closure_0 + sectionDescriptors) * data.data.length);
          }
          return sum;
        }, 0);
      }
      tmp(num2);
    }
  }, items2);
  const items3 = [sectionDescriptors, filterSection, filteredSectionId];
  onPressSection = obj2.useCallback((arg0) => {
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
  const callback1 = obj2.useCallback(() => {
    closure_8.current = true;
    AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_BROWSER_SCROLLED);
  }, []);
  const callback2 = obj2.useCallback((nativeEvent) => {
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
  const callback3 = obj2.useCallback(() => {
    closure_8.current = false;
  }, []);
  const memo = obj2.useMemo(() => {
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
  closure_19 = obj2.useMemo(
    () =>
      _modDef12.throttle((arg0) => {
        let num = 0;
        if (0 < memo.length) {
          let num2 = 0;
          let num3 = 0;
          if (0 === memo[0]) {
            const sum = num3 + 1;
            const sum1 = num2 + 1;
            num = sum;
            while (sum1 < memo.length) {
              num2 = sum1;
              num3 = sum;
              if (0 === memo[sum1]) {
                continue;
              } else {
                num2 = sum1;
                num3 = sum;
                num = sum;
                if (arg0 < memo[sum1]) {
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
      }, 100),
    items5,
  );
  const items6 = [bound];
  const items7 = [channel.guild_id, onPressSection, sectionDescriptors, selectedIndex];
  const callback4 = obj2.useCallback((arg0, index) => {
    if (null == arg0) {
      const obj2 = { length: 0, offset: 0, index };
      return obj2;
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
        if (constants3.ROW === ROW) {
          let num4 = bound;
        } else if (tmp29.HEADER === ROW) {
          num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
        } else {
          let FOOTER = constants3.FOOTER;
          num4 = 0;
        }
        let obj = {
          length: num4,
          offset: num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + num2 * bound,
          index,
        };
        return obj;
      }
    }
  }, items6);
  const obj8 = { style: null, children: null };
  const items8 = [tmp.discoveryWrapper, channel.style];
  obj8.style = items8;
  const obj9 = {
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
    stickySectionHeadersEnabled: true,
  };
  let obj10 = null;
  const memo1 = obj2.useMemo(
    () =>
      closure_2_14(ApplicationCommandsCategoriesDefault, {
        onPressSection,
        sections: sectionDescriptors,
        selectedIndex,
        guildId: channel.guild_id,
      }),
    items7,
  );
  if (discovery.loading) {
    obj10 = { minIndexForVisible: 1 };
  }
  obj9.maintainVisibleContentPosition = obj10;
  obj9.renderItem = function renderItem(item) {
    item = item.item;
    const section = item.section;
    let found;
    if (item.inputType === ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER) {
      return filteredSectionId(onHeightChange(11874), {});
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
        guildId: found.guild_id,
      };
      return filteredSectionId(onHeightChange(11875), obj);
    }
  };
  obj9.renderSectionHeader = function renderSectionHeader(section) {
    section = section.section;
    const children = [
      closure_2_14(
        ApplicationSectionHeaderDefault,
        { section: section.section, guildId: channel.guild_id },
        section.section.id,
      ),
    ];
    let tmp3Result = 0 === section.data.length;
    if (tmp3Result) {
      const obj3 = {
        lightSource: _modDef9870,
        darkSource: _modDef9870,
        body: null,
        containerStyle: null,
        imageStyle: null,
      };
      const intl = util.intl;
      const obj5 = { applicationName: section.section.name };
      obj3.body = intl.format(util.t.WoQXT6, obj5);
      ({ noCommandsContainer: obj2.containerStyle, noCommandsImage: obj2.imageStyle } = closure_3);
      tmp3Result = closure_2_14(native.ThemedEmptyState, obj3);
    }
    children[1] = tmp3Result;
    return value2(__initData, { children });
  };
  obj9.getItemLayout = callback4;
  const items9 = [filteredSectionId(closure_7, obj9), memo1];
  obj8.children = items9;
  return filterSection(selectedIndex, obj8);
}
