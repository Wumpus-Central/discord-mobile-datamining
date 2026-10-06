// discord_app/modules/application_commands/native/ApplicationCommandDiscovery.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Server from "../../../flow/Server.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import ApplicationCommandQueryTypes from "../ApplicationCommandQueryTypes.tsx";
import ApplicationCommandsConstants from "ApplicationCommandsConstants.tsx";
import AssetRegistryDefault from "../../../../_runtime/10160_AssetRegistry.js";
import ApplicationCommandsCategoriesConstants from "ApplicationCommandsCategoriesConstants.tsx";
import ApplicationSectionHeader from "ApplicationSectionHeader.tsx";
import ApplicationCommandDiscoveryManager from "../ApplicationCommandDiscoveryManager.tsx";
import ApplicationCommandsCategoriesDefault from "ApplicationCommandsCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ApplicationCommandConstants from "../ApplicationCommandConstants.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ApplicationSectionHeaderDefault = ApplicationSectionHeader;
let dependencyMap;

let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: metroRequire, SectionList: metroImportDefault } = react_native);
({ BuiltInSectionId: metroImportAll, DISCOVERY_COMMANDS_QUERY_LIMIT: c9 } = ApplicationCommandConstants);
const ITEM_HEIGHT = ApplicationCommandsCategoriesConstants.ITEM_HEIGHT;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ AnalyticEvents: closure_12, SectionListElementType: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let obj = {
  discoveryWrapper: { flex: 1 },
  noCommandsImage: { height: 50, width: 50, marginBottom: 16 },
  noCommandsContainer: { padding: 0, height: 100 },
  commandsList: obj2,
};
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
let closure_17 = createStyles.createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onHeightChange) => {
      let closure_18;
      let closure_3;
      let closure_6;
      let commandsByActiveSection;
      let filteredSectionId;
      let first;
      let loading;
      let onPressSlashItem;
      let ref;
      let sectionDescriptors;
      let style;
      let sum;
      let tmp11;
      let tmp12;
      let tmp35;
      let tmp8;
      let tmp2 = dependencyMap;
      let obj = onPressSlashItem(576);
      const cResult = obj.c(78);
      ({ style, onPressSlashItem } = onHeightChange);
      onHeightChange = onHeightChange.onHeightChange;
      const channel = onHeightChange.channel;
      const canOnlyUseTextCommands = onHeightChange.canOnlyUseTextCommands;
      let tmp4 = sum();
      dependencyMap = tmp4;
      const obj2 = onPressSlashItem(5609);
      const bound = Math.max(obj2.useFontScale() * commandsByActiveSection, commandsByActiveSection);
      let obj3 = ref;
      ref = ref.useRef(null);
      let tmp7 = bound(ref.useState(0), 2);
      [r10036, tmp8] = tmp7;
      ref = ref.useRef(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(initialSectionId) {
          return initialSectionId.initialSectionId;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      let tmpResult = onPressSlashItem(12055);
      const commandDiscoveryManager = tmpResult.useCommandDiscoveryManager(first);
      if (cResult[1] !== channel) {
        const obj4 = { channel, type: "channel" };
        let num = 1;
        cResult[1] = channel;
        cResult[2] = obj4;
        tmp11 = obj4;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [onPressSlashItem(1985).ApplicationCommandType.CHAT];
        let num2 = 3;
        cResult[3] = items;
        tmp12 = items;
      } else {
        tmp12 = cResult[3];
      }
      const BuiltInCommandFilter = onPressSlashItem(8833).BuiltInCommandFilter;
      let tmp13 = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
      let tmp14 = !canOnlyUseTextCommands;
      if (cResult[4] === tmp13) {
        let tmp15;
        let tmp16;
        if (cResult[5] === tmp14) {
          tmp15 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = { placeholderCount: 3, limit: sectionDescriptors, includeFrecency: true };
          let num3 = 7;
          cResult[7] = obj5;
          tmp16 = obj5;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp11) {
          let tmp18;
          if (cResult[9] === tmp15) {
            tmp18 = cResult[10];
          }
          const obj9 = channel(8968);
          const discovery = obj9.useDiscovery(tmp18);
          sectionDescriptors = discovery.sectionDescriptors;
          const activeSections = discovery.activeSections;
          commandsByActiveSection = discovery.commandsByActiveSection;
          const hasMoreAfter = discovery.hasMoreAfter;
          ({ loading, filteredSectionId } = discovery);
          const scrollDown = discovery.scrollDown;
          const filterSection = discovery.filterSection;
          if (cResult[11] === filterSection) {
            if (cResult[12] === commandDiscoveryManager) {
              let tmp21;
              let tmp22;
              let tmp25;
              let tmp24;
              if (cResult[13] === sectionDescriptors) {
                tmp21 = cResult[14];
                tmp22 = cResult[15];
              }
              const effect = obj3.useEffect(tmp22, tmp21);
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function j() {
                  const AccessibilityAnnouncer = onPressSlashItem(closure_3[18]).AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = onPressSlashItem(closure_3[19]).intl;
                  announce(intl.string(onPressSlashItem(closure_3[19]).t["2wfLMm"]));
                  let obj = onPressSlashItem(closure_3[20]);
                  obj.trackWithMetadata(hasMoreAfter.APPLICATION_COMMAND_BROWSER_OPENED);
                  return () => {
                    const obj = onPressSlashItem(closure_1_3[14]);
                    const result = obj.updateInitialSectionId(undefined);
                  };
                };
                const items1 = [];
                cResult[16] = fn2;
                cResult[17] = items1;
                tmp25 = items1;
                tmp24 = fn2;
              } else {
                tmp24 = cResult[16];
                tmp25 = cResult[17];
              }
              const effect1 = obj3.useEffect(tmp24, tmp25);
              if (cResult[18] === commandsByActiveSection) {
                if (cResult[19] === onHeightChange) {
                  let tmp27;
                  let tmp28;
                  if (cResult[20] === bound) {
                    tmp27 = cResult[21];
                    tmp28 = cResult[22];
                  }
                  const effect2 = obj3.useEffect(tmp27, tmp28);
                  if (cResult[23] === filterSection) {
                    if (cResult[24] === filteredSectionId) {
                      let items2;
                      const _Symbol3 = Symbol;
                      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                        function re() {
                          ref.current = true;
                          const obj = AppAnalyticsUtils;
                          obj.trackWithMetadata(hasMoreAfter.APPLICATION_COMMAND_BROWSER_SCROLLED);
                        }
                        cResult[27] = re;
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                        function le(nativeEvent) {
                          nativeEvent = nativeEvent.nativeEvent;
                          const targetContentOffset = nativeEvent.targetContentOffset;
                          let y1;
                          const y = nativeEvent.contentOffset.y;
                          if (targetContentOffset != null) {
                            y1 = targetContentOffset.y;
                          }
                          if (y === y1) {
                            ref.current = false;
                          }
                        }
                        cResult[28] = le;
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                        function se(arg0) {
                          ref.current = false;
                        }
                        cResult[29] = se;
                      }
                      sum = 0;
                      if (cResult[30] === commandsByActiveSection) {
                        if (cResult[31] === bound) {
                          if (cResult[32] === sectionDescriptors) {
                            let tmp40;
                            if (cResult[33] === sum) {
                              items2 = cResult[34];
                              sum = cResult[35];
                            }
                            if (cResult[36] !== tmp35) {
                              let tmp41 = onHeightChange;
                              let tmp42 = dependencyMap;
                              const obj10 = onHeightChange(12);
                              const throttleResult = obj10.throttle((arg0) => {
                                let num = 0;
                                if (0 < tmp35.length) {
                                  let num2 = 0;
                                  let num3 = 0;
                                  if (0 === tmp35[0]) {
                                    sum = num3 + 1;
                                    const sum1 = num2 + 1;
                                    num = sum;
                                    while (sum1 < tmp35.length) {
                                      num2 = sum1;
                                      num3 = sum;
                                      if (0 === tmp35[sum1]) {
                                        continue;
                                      } else {
                                        num2 = sum1;
                                        num3 = sum;
                                        num = sum;
                                        if (arg0 < tmp35[sum1]) {
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
                                tmp8(num);
                              }, 100);
                              cResult[36] = tmp35;
                              cResult[37] = throttleResult;
                              tmp40 = throttleResult;
                            } else {
                              tmp40 = cResult[37];
                            }
                            let closure_19 = tmp40;
                            if (cResult[38] === activeSections) {
                              if (cResult[39] === commandsByActiveSection) {
                                if (cResult[40] === hasMoreAfter) {
                                  if (cResult[41] === bound) {
                                    if (cResult[42] === scrollDown) {
                                      if (cResult[45] !== bound) {
                                        class Se {
                                          constructor(arg0, index) {
                                            if (null == arg0) {
                                              return { length: 0, offset: 0, index };
                                            } else {
                                              let num = 0;
                                              let num2 = 0;
                                              let num3 = 0;
                                              let ROW = map1.ROW;
                                              const iter = arg0[Symbol.iterator]();
                                              const nextResult = iter.next();
                                              while (iter !== undefined) {
                                                let num4;
                                                let tmp4 = nextResult;
                                                if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
                                                  if (index === num + num2 + num3) {
                                                    ROW = map1.HEADER;
                                                  } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
                                                    num = num + 1;
                                                    num2 = num2 + nextResult.data.length;
                                                    ROW = map1.FOOTER;
                                                  } else {
                                                    sum = num + 1;
                                                    num = sum;
                                                    num2 = num2 + (index - sum - num2 - num3);
                                                    ROW = map1.ROW;
                                                  }
                                                  iter.return();
                                                  break;
                                                } else {
                                                  num = num + 1;
                                                  num2 = num2 + tmp4.data.length;
                                                  num3 = num3 + 1;
                                                  continue;
                                                }
                                                if (map1.ROW === ROW) {
                                                  num4 = bound;
                                                } else if (tmp29.HEADER === ROW) {
                                                  num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
                                                } else {
                                                  let FOOTER = map1.FOOTER;
                                                  num4 = 0;
                                                }
                                                let obj = {
                                                  length: num4,
                                                  offset:
                                                    num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT +
                                                    num2 * bound,
                                                  index,
                                                };
                                                return obj;
                                              }
                                            }
                                          }
                                        }
                                        cResult[45] = bound;
                                        cResult[46] = Se;
                                      } else {
                                        class Se {
                                          constructor(arg0, index) {
                                            if (null == arg0) {
                                              return { length: 0, offset: 0, index };
                                            } else {
                                              let num = 0;
                                              let num2 = 0;
                                              let num3 = 0;
                                              let ROW = map1.ROW;
                                              const iter = arg0[Symbol.iterator]();
                                              const nextResult = iter.next();
                                              while (iter !== undefined) {
                                                let num4;
                                                let tmp4 = nextResult;
                                                if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
                                                  if (index === num + num2 + num3) {
                                                    ROW = map1.HEADER;
                                                  } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
                                                    num = num + 1;
                                                    num2 = num2 + nextResult.data.length;
                                                    ROW = map1.FOOTER;
                                                  } else {
                                                    sum = num + 1;
                                                    num = sum;
                                                    num2 = num2 + (index - sum - num2 - num3);
                                                    ROW = map1.ROW;
                                                  }
                                                  iter.return();
                                                  break;
                                                } else {
                                                  num = num + 1;
                                                  num2 = num2 + tmp4.data.length;
                                                  num3 = num3 + 1;
                                                  continue;
                                                }
                                                if (map1.ROW === ROW) {
                                                  num4 = bound;
                                                } else if (tmp29.HEADER === ROW) {
                                                  num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
                                                } else {
                                                  let FOOTER = map1.FOOTER;
                                                  num4 = 0;
                                                }
                                                let obj = {
                                                  length: num4,
                                                  offset:
                                                    num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT +
                                                    num2 * bound,
                                                  index,
                                                };
                                                return obj;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (cResult[47] === channel.guild_id) {
                                        class Se {
                                          constructor(arg0, index) {
                                            if (null == arg0) {
                                              return { length: 0, offset: 0, index };
                                            } else {
                                              let num = 0;
                                              let num2 = 0;
                                              let num3 = 0;
                                              let ROW = map1.ROW;
                                              const iter = arg0[Symbol.iterator]();
                                              const nextResult = iter.next();
                                              while (iter !== undefined) {
                                                let num4;
                                                let tmp4 = nextResult;
                                                if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
                                                  if (index === num + num2 + num3) {
                                                    ROW = map1.HEADER;
                                                  } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
                                                    num = num + 1;
                                                    num2 = num2 + nextResult.data.length;
                                                    ROW = map1.FOOTER;
                                                  } else {
                                                    sum = num + 1;
                                                    num = sum;
                                                    num2 = num2 + (index - sum - num2 - num3);
                                                    ROW = map1.ROW;
                                                  }
                                                  iter.return();
                                                  break;
                                                } else {
                                                  num = num + 1;
                                                  num2 = num2 + tmp4.data.length;
                                                  num3 = num3 + 1;
                                                  continue;
                                                }
                                                if (map1.ROW === ROW) {
                                                  num4 = bound;
                                                } else if (tmp29.HEADER === ROW) {
                                                  num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
                                                } else {
                                                  let FOOTER = map1.FOOTER;
                                                  num4 = 0;
                                                }
                                                let obj = {
                                                  length: num4,
                                                  offset:
                                                    num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT +
                                                    num2 * bound,
                                                  index,
                                                };
                                                return obj;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      function renderSectionHeader(section) {
                                        let intl;
                                        let obj5;
                                        section = section.section;
                                        const children = [,];
                                        const obj = { section: section.section, guildId: channel.guild_id };
                                        children[0] = authStore2(
                                          ApplicationSectionHeaderDefault,
                                          obj,
                                          section.section.id,
                                        );
                                        let tmp3Result = 0 === section.data.length;
                                        if (tmp3Result) {
                                          const obj3 = {
                                            lightSource: AssetRegistryDefault,
                                            darkSource: AssetRegistryDefault,
                                            body: intl.format(intl2.t.WoQXT6, obj5),
                                            containerStyle: null,
                                            imageStyle: null,
                                          };
                                          const ThemedEmptyState = native.ThemedEmptyState;
                                          intl = intl2.intl;
                                          obj5 = { applicationName: section.section.name };
                                          ({
                                            noCommandsContainer: obj2.containerStyle,
                                            noCommandsImage: obj2.imageStyle,
                                          } = closure_3);
                                          tmp3Result = authStore2(ThemedEmptyState, obj3);
                                        }
                                        children[1] = tmp3Result;
                                        return authStore3(closure_15, { children });
                                      }
                                      cResult[47] = channel.guild_id;
                                      cResult[48] = tmp4.noCommandsContainer;
                                      cResult[49] = tmp4.noCommandsImage;
                                      cResult[50] = renderSectionHeader;
                                    }
                                  }
                                }
                              }
                            }
                            function onScroll(nativeEvent) {
                              let contentInset;
                              let contentSize;
                              let layoutMeasurement;
                              nativeEvent = nativeEvent.nativeEvent;
                              ({ layoutMeasurement, contentSize, contentInset } = nativeEvent);
                              const y = nativeEvent.contentOffset.y;
                              closure_19(y);
                              const tmp2 = !ref.current && activeSections.length > 0;
                              if (tmp2) {
                                if (y < contentInset.top) {
                                  const current = ref.current;
                                  if (current != null) {
                                    current.scrollToLocation({
                                      sectionIndex: 0,
                                      itemIndex: 0,
                                      viewPosition: 0,
                                      animated: false,
                                    });
                                  }
                                } else if (y > contentSize.height - layoutMeasurement.height - contentInset.bottom) {
                                  const current2 = ref.current;
                                  if (current2 != null) {
                                    const _Math = Math;
                                    const scrollToLocation = current2.scrollToLocation;
                                    const obj = {
                                      sectionIndex: activeSections.length - 1,
                                      itemIndex: Math.max(
                                        commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1,
                                        0,
                                      ),
                                      viewPosition: 1,
                                      animated: false,
                                    };
                                    scrollToLocation(obj);
                                  }
                                }
                              }
                              const tmp7 =
                                hasMoreAfter && y + layoutMeasurement.height >= contentSize.height - 3 * bound;
                              if (tmp7) {
                                scrollDown();
                              }
                            }
                            cResult[38] = activeSections;
                            cResult[39] = commandsByActiveSection;
                            cResult[40] = hasMoreAfter;
                            cResult[41] = bound;
                            cResult[42] = scrollDown;
                            cResult[43] = tmp40;
                            class X {
                              constructor() {
                                if (null != commandDiscoveryManager) {
                                  filterSection(tmp);
                                  const findIndexResult = sectionDescriptors.findIndex(
                                    (id) => id.id === commandDiscoveryManager,
                                  );
                                  let num2 = 0;
                                  if (-1 !== findIndexResult) {
                                    num2 = findIndexResult;
                                  }
                                  tmp8(num2);
                                }
                              }
                            }
                          }
                        }
                      }
                      items2 = [];
                      for (const item10189 of sectionDescriptors) {
                        class Se {
                          constructor(arg0, index) {
                            if (null == arg0) {
                              return { length: 0, offset: 0, index };
                            } else {
                              let num = 0;
                              let num2 = 0;
                              let num3 = 0;
                              let ROW = map1.ROW;
                              const iter = arg0[Symbol.iterator]();
                              const nextResult = iter.next();
                              while (iter !== undefined) {
                                let num4;
                                let tmp4 = nextResult;
                                if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
                                  if (index === num + num2 + num3) {
                                    ROW = map1.HEADER;
                                  } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
                                    num = num + 1;
                                    num2 = num2 + nextResult.data.length;
                                    ROW = map1.FOOTER;
                                  } else {
                                    sum = num + 1;
                                    num = sum;
                                    num2 = num2 + (index - sum - num2 - num3);
                                    ROW = map1.ROW;
                                  }
                                  iter.return();
                                  break;
                                } else {
                                  num = num + 1;
                                  num2 = num2 + tmp4.data.length;
                                  num3 = num3 + 1;
                                  continue;
                                }
                                if (map1.ROW === ROW) {
                                  num4 = bound;
                                } else if (tmp29.HEADER === ROW) {
                                  num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
                                } else {
                                  let FOOTER = map1.FOOTER;
                                  num4 = 0;
                                }
                                let obj = {
                                  length: num4,
                                  offset:
                                    num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + num2 * bound,
                                  index,
                                };
                                return obj;
                              }
                            }
                          }
                        }
                        continue;
                      }
                      cResult[30] = commandsByActiveSection;
                      class X {
                        constructor() {
                          if (null != commandDiscoveryManager) {
                            filterSection(tmp);
                            const findIndexResult = sectionDescriptors.findIndex(
                              (id) => id.id === commandDiscoveryManager,
                            );
                            let num2 = 0;
                            if (-1 !== findIndexResult) {
                              num2 = findIndexResult;
                            }
                            tmp8(num2);
                          }
                        }
                      }
                      cResult[32] = sectionDescriptors;
                      cResult[33] = sum;
                      cResult[34] = items2;
                      let tmp39 = sum;
                      cResult[35] = sum;
                      tmp35 = items2;
                    }
                  }
                  const fn4 = function q(arg0) {
                    let tmp8;
                    if (sectionDescriptors[arg0].id !== filteredSectionId) {
                      if (sectionDescriptors[arg0].id !== metroImportAll.FRECENCY) {
                        filterSection(sectionDescriptors[arg0].id);
                        tmp8(arg0);
                      }
                      const obj = ApplicationCommandDiscoveryManager;
                      const result = obj.updateInitialSectionId(undefined);
                    }
                    filterSection(null);
                    tmp8 = tmp8(0);
                  };
                  cResult[23] = filterSection;
                  cResult[24] = filteredSectionId;
                  cResult[25] = sectionDescriptors;
                  cResult[26] = fn4;
                }
              }
              const fn3 = function z() {
                if (onHeightChange != null) {
                  let closure_0 = bound;
                  let num2 = 0;
                  if (0 !== commandsByActiveSection.length) {
                    num2 = commandsByActiveSection.reduce((acc, data) => {
                      let sum;
                      if (0 === data.data.length) {
                        sum = closure_2_0(closure_2_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + 160;
                      } else {
                        sum =
                          acc +
                          (closure_2_0(closure_2_3[8]).APPLICATION_SECTION_HEADER_HEIGHT +
                            (closure_0 + sectionDescriptors) * data.data.length);
                      }
                      return sum;
                    }, 0);
                  }
                  tmp(num2);
                }
              };
              const items3 = [commandsByActiveSection, onHeightChange, bound];
              cResult[18] = commandsByActiveSection;
              cResult[19] = onHeightChange;
              cResult[20] = bound;
              cResult[21] = fn3;
              class X {
                constructor() {
                  if (null != commandDiscoveryManager) {
                    filterSection(tmp);
                    const findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
                    let num2 = 0;
                    if (-1 !== findIndexResult) {
                      num2 = findIndexResult;
                    }
                    tmp8(num2);
                  }
                }
              }
              cResult[22] = items3;
              tmp28 = items3;
              tmp27 = fn3;
            }
          }
          class X {
            constructor() {
              if (null != commandDiscoveryManager) {
                filterSection(tmp);
                const findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
                let num2 = 0;
                if (-1 !== findIndexResult) {
                  num2 = findIndexResult;
                }
                tmp8(num2);
              }
            }
          }
          const items4 = [filterSection, commandDiscoveryManager, tmp8, sectionDescriptors];
          cResult[11] = filterSection;
          cResult[12] = commandDiscoveryManager;
          cResult[13] = sectionDescriptors;
          cResult[14] = items4;
          cResult[15] = X;
          tmp22 = X;
          tmp21 = items4;
        }
        const obj6 = { context: tmp11, filters: tmp15, options: tmp16, allowFetch: true };
        let num4 = 8;
        cResult[8] = tmp11;
        cResult[9] = tmp15;
        cResult[10] = obj6;
        tmp18 = obj6;
      }
      const obj7 = { commandTypes: tmp12, builtIns: tmp13, applicationCommands: tmp14 };
      cResult[4] = tmp13;
      cResult[5] = tmp14;
      cResult[6] = obj7;
      tmp15 = obj7;
    }
  : function ApplicationCommandDiscovery(channel) {
      let BuiltInCommandFilter;
      let _undefined;
      let _undefined2;
      let c11;
      let c13;
      let c15;
      let closure_3;
      let commandsByActiveSection;
      let filterSection;
      let filteredSectionId;
      let items;
      let items8;
      let items9;
      let obj5;
      let obj6;
      let obj9;
      let onHeightChange;
      let require;
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
      const style = channel.style;
      let tmp = onPressSection();
      dependencyMap = tmp;
      let obj = useFontScale;
      const bound = Math.max(obj.useFontScale() * c11, c11);
      const obj2 = ref;
      ref = ref.useRef(null);
      let tmp4 = bound(ref.useState(0), 2);
      const selectedIndex = tmp4[0];
      let tmp6 = tmp4[1];
      let closure_7 = tmp6;
      ref = ref.useRef(false);
      let obj3 = ApplicationCommandDiscoveryManager;
      const commandDiscoveryManager = obj3.useCommandDiscoveryManager(
        (initialSectionId) => initialSectionId.initialSectionId,
      );
      let tmp8 = channel(8968);
      const obj4 = { context: { channel, type: "channel" }, filters: obj5, options: obj6, allowFetch: true };
      obj5 = {
        commandTypes: items,
        builtIns: canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW,
        applicationCommands: !canOnlyUseTextCommands,
      };
      const useDiscovery = tmp8.useDiscovery;
      items = [Server.ApplicationCommandType.CHAT];
      BuiltInCommandFilter = ApplicationCommandQueryTypes.BuiltInCommandFilter;
      obj6 = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
      const discovery = useDiscovery(obj4);
      const sectionDescriptors = discovery.sectionDescriptors;
      ({ activeSections: c11, commandsByActiveSection } = discovery);
      ({ hasMoreAfter: c13, filteredSectionId } = discovery);
      ({ scrollDown: c15, filterSection } = discovery);
      const items1 = [filterSection, commandDiscoveryManager, tmp6, sectionDescriptors];
      const loading = discovery.loading;
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
        const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = require("intl").intl;
        announce(intl.string(require("intl").t["2wfLMm"]));
        let obj = require("AppAnalyticsUtils");
        obj.trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
        return () => {
          const obj = closure_1_0(closure_1_3[14]);
          const result = obj.updateInitialSectionId(undefined);
        };
      }, []);
      const items2 = [commandsByActiveSection, onHeightChange, bound];
      const effect2 = obj2.useEffect(() => {
        if (onHeightChange != null) {
          let closure_0 = bound;
          let num2 = 0;
          if (0 !== commandsByActiveSection.length) {
            num2 = commandsByActiveSection.reduce((acc, data) => {
              let sum;
              if (0 === data.data.length) {
                sum = closure_2_0(closure_2_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + 160;
              } else {
                sum =
                  acc +
                  (closure_2_0(closure_2_3[8]).APPLICATION_SECTION_HEADER_HEIGHT +
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
          if (sectionDescriptors[arg0].id !== metroImportAll.FRECENCY) {
            filterSection(sectionDescriptors[arg0].id);
            closure_7(arg0);
          }
          const obj = ApplicationCommandDiscoveryManager;
          const result = obj.updateInitialSectionId(undefined);
        }
        filterSection(null);
        closure_7(0);
      }, items3);
      const callback1 = obj2.useCallback(() => {
        ref.current = true;
        const obj = AppAnalyticsUtils;
        obj.trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_SCROLLED);
      }, []);
      const callback2 = obj2.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const targetContentOffset = nativeEvent.targetContentOffset;
        let y1;
        const y = nativeEvent.contentOffset.y;
        if (targetContentOffset != null) {
          y1 = targetContentOffset.y;
        }
        if (y === y1) {
          ref.current = false;
        }
      }, []);
      const items4 = [sectionDescriptors, commandsByActiveSection, bound];
      const callback3 = obj2.useCallback((arg0) => {
        ref.current = false;
      }, []);
      const memo = obj2.useMemo(() => {
        function _loop2(item10008) {
          let closure_0 = item10008;
          const findIndexResult = commandsByActiveSection.findIndex((section) => section.section.id === id.id);
          if (findIndexResult >= 0) {
            const result = commandsByActiveSection[findIndexResult].data.length * bound;
            const sum = result + ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + c0;
            items.push(sum);
            c0 = sum;
          } else {
            items.push(c0);
          }
        }
        let c0 = 0;
        const items = [];
        for (const item10008 of sectionDescriptors) {
          let tmp = _loop2(item10008);
          continue;
        }
        return items;
      }, items4);
      const items5 = [memo];
      let closure_19 = obj2.useMemo(() => {
        const obj = _modDef12;
        return obj.throttle((arg0) => {
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
        }, 100);
      }, items5);
      const items6 = [bound];
      const items7 = [channel.guild_id, onPressSection, sectionDescriptors, selectedIndex];
      const callback4 = obj2.useCallback((arg0, index) => {
        if (null == arg0) {
          return { length: 0, offset: 0, index };
        } else {
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let ROW = map1.ROW;
          const iter = arg0[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let num4;
            let tmp4 = nextResult;
            if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
              if (index === num + num2 + num3) {
                ROW = map1.HEADER;
              } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
                num = num + 1;
                num2 = num2 + nextResult.data.length;
                ROW = map1.FOOTER;
              } else {
                let sum = num + 1;
                num = sum;
                num2 = num2 + (index - sum - num2 - num3);
                ROW = map1.ROW;
              }
              iter.return();
              break;
            } else {
              num = num + 1;
              num2 = num2 + tmp4.data.length;
              num3 = num3 + 1;
              continue;
            }
            if (map1.ROW === ROW) {
              num4 = bound;
            } else if (tmp29.HEADER === ROW) {
              num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
            } else {
              let FOOTER = map1.FOOTER;
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
      const obj7 = { style: items8, children: items9 };
      items8 = [tmp.discoveryWrapper, style];
      const obj8 = {
        ref,
        sections: commandsByActiveSection,
        style: tmp.commandsList,
        onScrollBeginDrag: callback1,
        onScrollEndDrag: callback2,
        onMomentumScrollEnd: callback3,
        onScroll(nativeEvent) {
          let contentInset;
          let contentSize;
          let layoutMeasurement;
          nativeEvent = nativeEvent.nativeEvent;
          ({ layoutMeasurement, contentSize, contentInset } = nativeEvent);
          const y = nativeEvent.contentOffset.y;
          closure_19(y);
          const tmp2 = !ref.current && _undefined.length > 0;
          if (tmp2) {
            if (y < contentInset.top) {
              const current = ref.current;
              if (current != null) {
                current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, viewPosition: 0, animated: false });
              }
            } else if (y > contentSize.height - layoutMeasurement.height - contentInset.bottom) {
              const current2 = ref.current;
              if (current2 != null) {
                const _Math = Math;
                const scrollToLocation = current2.scrollToLocation;
                const obj = {
                  sectionIndex: _undefined.length - 1,
                  itemIndex: Math.max(commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1, 0),
                  viewPosition: 1,
                  animated: false,
                };
                scrollToLocation(obj);
              }
            }
          }
          const tmp7 = c13 && y + layoutMeasurement.height >= contentSize.height - 3 * bound;
          if (tmp7) {
            _undefined2();
          }
        },
        scrollEventThrottle: 16,
        keyExtractor(id) {
          return id.id;
        },
        maintainVisibleContentPosition: obj9,
        renderItem(item) {
          item = item.item;
          const section = item.section;
          let found;
          if (item.inputType === require("ApplicationCommandTypes").ApplicationCommandInputType.PLACEHOLDER) {
            return filteredSectionId(onHeightChange(closure_3[25]), {});
          } else {
            found = sectionDescriptors.find((id) => id.id === item.applicationId);
            const obj = {
              command: item,
              onPress() {
                let tmpResult;
                if (_require != null) {
                  tmpResult = tmp(item, found, section.section);
                }
                return tmpResult;
              },
              section: found,
              showIcon: item.applicationId !== section.section.id,
              guildId: found.guild_id,
            };
            return filteredSectionId(onHeightChange(closure_3[26]), obj);
          }
        },
        renderSectionHeader(section) {
          let intl;
          let obj5;
          section = section.section;
          const children = [,];
          const obj = { section: section.section, guildId: channel.guild_id };
          children[0] = authStore2(ApplicationSectionHeaderDefault, obj, section.section.id);
          let tmp3Result = 0 === section.data.length;
          if (tmp3Result) {
            const obj3 = {
              lightSource: AssetRegistryDefault,
              darkSource: AssetRegistryDefault,
              body: intl.format(intl2.t.WoQXT6, obj5),
              containerStyle: null,
              imageStyle: null,
            };
            const ThemedEmptyState = native.ThemedEmptyState;
            intl = intl2.intl;
            obj5 = { applicationName: section.section.name };
            ({ noCommandsContainer: obj2.containerStyle, noCommandsImage: obj2.imageStyle } = closure_3);
            tmp3Result = authStore2(ThemedEmptyState, obj3);
          }
          children[1] = tmp3Result;
          return authStore3(closure_15, { children });
        },
        getItemLayout: callback4,
        stickySectionHeadersEnabled: true,
      };
      obj9 = null;
      const memo1 = obj2.useMemo(() => {
        const obj = { onPressSection, sections: sectionDescriptors, selectedIndex, guildId: channel.guild_id };
        return authStore2(ApplicationCommandsCategoriesDefault, obj);
      }, items7);
      let tmp20 = filterSection;
      let tmp21 = selectedIndex;
      const tmp22 = filteredSectionId;
      const tmp23 = closure_7;
      if (loading) {
        obj9 = { minIndexForVisible: 1 };
      }
      items9 = [tmp22(tmp23, obj8), memo1];
      return tmp20(tmp21, obj7);
    };
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default tmp6;
