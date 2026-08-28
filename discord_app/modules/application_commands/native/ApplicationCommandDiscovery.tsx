// discord_app/modules/application_commands/native/ApplicationCommandDiscovery.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PermissionOverwriteType from "../../../flow/Server.tsx";
import getFontScale from "../../screen/native/useFontScale.tsx";
import ScoreMethod from "../ApplicationCommandQueryTypes.tsx";
import useCommandDiscoveryManager from "../ApplicationCommandDiscoveryManager.tsx";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import TRUE_OPTION_NAME from "../ApplicationCommandConstants.tsx";
import { ITEM_HEIGHT } from "ApplicationCommandsCategoriesConstants.tsx";
import { AUTOCOMPLETE_ROW_HEIGHT } from "ApplicationCommandsConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ View: closure_6, SectionList: error } = get_ActivityIndicator);
({ BuiltInSectionId: closure_8, DISCOVERY_COMMANDS_QUERY_LIMIT: c9 } = TRUE_OPTION_NAME);
({ AnalyticEvents: closure_12, SectionListElementType: map1 } = ME);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { discoveryWrapper: { flex: 1 }, noCommandsImage: { height: 50, width: 50, marginBottom: 16 }, noCommandsContainer: { padding: 0, height: 100 }, commandsList: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createCacheKey[3] = createCacheKey;
let closure_17 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default function ApplicationCommandDiscovery(channel) {
  ({ onPressSlashItem: require, onHeightChange } = channel);
  channel = channel.channel;
  const canOnlyUseTextCommands = channel.canOnlyUseTextCommands;
  dependencyMap = undefined;
  let bound;
  let ref;
  let first;
  closure_7 = undefined;
  closure_8 = undefined;
  let commandDiscoveryManager;
  let sectionDescriptors;
  c11 = undefined;
  commandsByActiveSection = undefined;
  c13 = undefined;
  filteredSectionId = undefined;
  c15 = undefined;
  filterSection = undefined;
  let callback;
  let memo;
  closure_19 = undefined;
  let tmp = callback();
  dependencyMap = tmp;
  let obj = getFontScale;
  bound = Math.max(obj.useFontScale() * c11, c11);
  obj1 = ref;
  ref = ref.useRef(null);
  let tmp4 = bound(ref.useState(0), 2);
  first = tmp4[0];
  closure_7 = tmp6;
  closure_8 = ref.useRef(false);
  let obj2 = useCommandDiscoveryManager;
  commandDiscoveryManager = obj2.useCommandDiscoveryManager((initialSectionId) => initialSectionId.initialSectionId);
  let obj3 = channel(8389);
  obj = { context: { channel, type: "channel" }, filters: null, options: null, allowFetch: true };
  obj = { commandTypes: null, builtIns: null, applicationCommands: null };
  let items = [PermissionOverwriteType.ApplicationCommandType.CHAT];
  obj[0] = items;
  const BuiltInCommandFilter = ScoreMethod.BuiltInCommandFilter;
  obj[1] = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  obj[2] = !canOnlyUseTextCommands;
  obj[1] = obj;
  obj1 = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
  obj[2] = obj1;
  const discovery = obj3.useDiscovery(obj);
  sectionDescriptors = discovery.sectionDescriptors;
  ({ activeSections: c11, commandsByActiveSection } = discovery);
  ({ hasMoreAfter: c13, filteredSectionId } = discovery);
  ({ scrollDown: c15, filterSection } = discovery);
  const items1 = [filterSection, commandDiscoveryManager, tmp4[1], sectionDescriptors];
  const effect = obj1.useEffect(() => {
    if (null != commandDiscoveryManager) {
      filterSection(tmp);
      const findIndexResult = sectionDescriptors.findIndex((id) => id.id === closure_9);
      let num2 = 0;
      if (-1 !== findIndexResult) {
        num2 = findIndexResult;
      }
      closure_7(num2);
      const tmp6 = closure_7;
    }
  }, items1);
  const effect1 = obj1.useEffect(() => {
    const AccessibilityAnnouncer = callback(1351).AccessibilityAnnouncer;
    const intl = callback(1236).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(1236).t["2wfLMm"]));
    callback(4666).trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const result = callback(table[12]).updateInitialSectionId(undefined);
    };
  }, []);
  const items2 = [commandsByActiveSection, onHeightChange, bound];
  const effect2 = obj1.useEffect(() => {
    if (onHeightChange != null) {
      closure_0 = bound;
      let num2 = 0;
      if (0 !== commandsByActiveSection.length) {
        num2 = arr.reduce((arg0, data) => {
          if (0 === data.data.length) {
            let sum = callback(closure_1_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + 160;
          } else {
            sum = arg0 + (callback(closure_1_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + (callback + closure_1_10) * data.data.length);
          }
          return sum;
        }, 0);
      }
      tmp(num2);
      arr = commandsByActiveSection;
    }
  }, items2);
  const items3 = [sectionDescriptors, filterSection, filteredSectionId];
  callback = obj1.useCallback((arg0) => {
    if (sectionDescriptors[arg0].id !== filteredSectionId) {
      if (tmp.id !== ref.FRECENCY) {
        filterSection(tmp.id);
        callback2(arg0);
      }
      const result = closure_1_0(11902).updateInitialSectionId(undefined);
    }
    filterSection(null);
    callback2(0);
  }, items3);
  const callback1 = obj1.useCallback(() => {
    closure_8.current = true;
    closure_1_0(4666).trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_SCROLLED);
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
  memo = obj1.useMemo(() => {
    c0 = 0;
    const items = [];
    for (const item10008 of sectionDescriptors) {
      let tmp = (function _loop(item10008) {
        closure_0 = item10008;
        const findIndexResult = closure_1_12.findIndex((section) => section.section.id === item10008.id);
        if (findIndexResult >= 0) {
          const result = closure_1_12[findIndexResult].data.length * closure_1_4;
          const sum = result + closure_2_0(table[8]).APPLICATION_SECTION_HEADER_HEIGHT + closure_0;
          items.push(sum);
          closure_0 = sum;
        } else {
          items.push(closure_0);
        }
      })(item10008);
      continue;
    }
    return items;
  }, items4);
  const items5 = [memo];
  closure_19 = obj1.useMemo(() => onHeightChange(12).throttle((arg0) => {
    let num = 0;
    if (0 < closure_18.length) {
      let num2 = 0;
      let num3 = 0;
      if (0 === tmp[0]) {
        const sum = num3 + 1;
        const sum1 = num2 + 1;
        num = sum;
        while (sum1 < closure_18.length) {
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
    callback(num);
  }, 100), items5);
  const items6 = [bound];
  const items7 = [channel.guild_id, callback, sectionDescriptors, first];
  const callback4 = obj1.useCallback((arg0, arg1) => {
    if (null == arg0) {
      let obj = { length: 0, offset: 0, index: null };
      obj[2] = arg1;
      return obj;
    } else {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let ROW = _undefined2.ROW;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = num;
        let tmp6 = num2;
        let tmp7 = num3;
        if (num + num2 + nextResult.data.length + num3 + 1 >= arg1) {
          let tmp12 = num;
          let tmp13 = num2;
          let tmp14 = num3;
          if (arg1 === num + num2 + num3) {
            let tmp24 = _undefined2;
            let tmp25 = _undefined2;
            ROW = _undefined2.HEADER;
          } else {
            let tmp39 = num;
            let tmp40 = num2;
            let tmp41 = nextResult;
            let tmp42 = num3;
            if (arg1 === num + num2 + tmp4.data.length + num3 + 1) {
              let tmp20 = num;
              num = num + 1;
              let tmp21 = num2;
              num2 = num2 + nextResult.data.length;
              let tmp22 = _undefined2;
              let tmp23 = _undefined2;
              ROW = _undefined2.FOOTER;
            } else {
              let tmp15 = num2;
              let tmp16 = num;
              let sum = num + 1;
              num = sum;
              num2 = num2 + (arg1 - sum - num2 - num3);
              let tmp18 = _undefined2;
              let tmp19 = _undefined2;
              ROW = _undefined2.ROW;
            }
          }
          let tmp26 = iter;
          iter.return();
          break;
        } else {
          let tmp8 = num;
          num = num + 1;
          let tmp9 = num2;
          let tmp10 = nextResult;
          num2 = num2 + tmp4.data.length;
          let tmp11 = num3;
          num3 = num3 + 1;
          continue;
        }
        let tmp27 = ROW;
        let tmp28 = _undefined2;
        if (_undefined2.ROW === ROW) {
          let num4 = bound;
        } else {
          let tmp30 = tmp28;
          if (tmp29.HEADER === ROW) {
            let tmp31 = closure_1_0;
            let tmp32 = dependencyMap;
            num4 = closure_1_0(11901).APPLICATION_SECTION_HEADER_HEIGHT;
          } else {
            let FOOTER = tmp28.FOOTER;
            num4 = 0;
          }
        }
        obj = { length: null, offset: null, index: null };
        obj[0] = num4;
        let tmp33 = closure_1_0;
        let tmp34 = dependencyMap;
        let tmp35 = bound;
        obj[1] = num * closure_1_0(11901).APPLICATION_SECTION_HEADER_HEIGHT + num2 * bound;
        obj[2] = arg1;
        return obj;
      }
    }
  }, items6);
  obj2 = { style: items8, children: null };
  items8 = [tmp.discoveryWrapper, channel.style];
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
      callback3(y);
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
            const obj = { sectionIndex: null, itemIndex: null, viewPosition: 1, animated: false };
            obj[0] = _undefined.length - 1;
            const _Math = Math;
            obj[1] = Math.max(commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1, 0);
            current3.scrollToLocation(obj);
          }
        }
      }
      let tmp7 = c13;
      if (c13) {
        tmp7 = y + layoutMeasurement.height >= contentSize.height - 3 * bound;
      }
      if (tmp7) {
        _undefined3();
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
  const memo1 = obj1.useMemo(() => filteredSectionId(onHeightChange(11903), { onPressSection: callback, sections: sectionDescriptors, selectedIndex: first, guildId: channel.guild_id }), items7);
  if (discovery.loading) {
    obj4 = { minIndexForVisible: 1 };
  }
  obj3[9] = obj4;
  obj3[10] = function renderItem(item) {
    item = item.item;
    const section = item.section;
    let found;
    if (item.inputType === closure_1_0(7215).ApplicationCommandInputType.PLACEHOLDER) {
      return filteredSectionId(onHeightChange(11904), {});
    } else {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
      const obj = { command: null, onPress: null, section: null, showIcon: null, guildId: null };
      obj[0] = item;
      obj[1] = function onPress() {
        let tmpResult;
        if (item != null) {
          tmpResult = tmp(item, found, section.section);
        }
        return tmpResult;
      };
      obj[2] = found;
      obj[3] = item.applicationId !== section.section.id;
      obj[4] = found.guild_id;
      return filteredSectionId(onHeightChange(11905), obj);
    }
  };
  obj3[11] = function renderSectionHeader(section) {
    section = section.section;
    let obj = { section: section.section, guildId: channel.guild_id };
    const children = [filteredSectionId(onHeightChange(11901), obj, section.section.id), ];
    let tmp3Result = 0 === section.data.length;
    if (tmp3Result) {
      obj = { lightSource: null, darkSource: null, body: null, containerStyle: null, imageStyle: null };
      obj[0] = tmp4(10347);
      obj[1] = tmp4(10347);
      const intl = closure_1_0(1236).intl;
      obj = { applicationName: null };
      obj[0] = section.section.name;
      obj[2] = intl.format(closure_1_0(1236).t.WoQXT6, obj);
      ({ noCommandsContainer: obj2[3], noCommandsImage: obj2[4] } = dependencyMap);
      tmp3Result = filteredSectionId(closure_1_0(1297).ThemedEmptyState, obj);
    }
    children[1] = tmp3Result;
    return filterSection(c15, { children });
  };
  obj3[12] = callback4;
  const items9 = [filteredSectionId(closure_7, obj3), memo1];
  obj2[1] = items9;
  return filterSection(first, obj2);
};