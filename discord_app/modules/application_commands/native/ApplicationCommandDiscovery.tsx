// === Module 12125: ApplicationCommandDiscovery ===

// Module 12125 (ApplicationCommandDiscovery)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Server from "Server" /* 1997 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import useFontScale from "useFontScale" /* 5382 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 9192 */;
import _modDef9746 from "module_9746" /* 9746 */;
import ApplicationSectionHeader from "ApplicationSectionHeader" /* 12127 */;
import ApplicationCommandDiscoveryManager from "ApplicationCommandDiscoveryManager" /* 12128 */;
import ApplicationCommandsCategoriesDefault from "ApplicationCommandsCategories" /* 12131 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ApplicationSectionHeaderDefault = ApplicationSectionHeader;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, SectionList: closure_7 } = get_ActivityIndicator);
const ApplicationCommandConstants = fn(5399);
({ BuiltInSectionId: closure_8, DISCOVERY_COMMANDS_QUERY_LIMIT: closure_9 } = ApplicationCommandConstants);
const ITEM_HEIGHT = fn(12126).ITEM_HEIGHT;
const AUTOCOMPLETE_ROW_HEIGHT = fn(9668).AUTOCOMPLETE_ROW_HEIGHT;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, SectionListElementType: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { discoveryWrapper: { flex: 1 }, noCommandsImage: { height: 50, width: 50, marginBottom: 16 }, noCommandsContainer: { padding: 0, height: 100 }, commandsList: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND } };
let closure_17 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationCommandDiscovery(onHeightChange) {
  const cResult = onPressSlashItem(576).c(78);
  ({ style, onPressSlashItem } = onHeightChange);
  onHeightChange = onHeightChange.onHeightChange;
  const channel = onHeightChange.channel;
  const canOnlyUseTextCommands = onHeightChange.canOnlyUseTextCommands;
  let tmp4 = sum();
  dependencyMap = tmp4;
  let obj = onPressSlashItem(576);
  const bound = Math.max(onPressSlashItem(5382).useFontScale() * commandsByActiveSection, commandsByActiveSection);
  ref = ref.useRef(null);
  let obj2 = onPressSlashItem(5382);
  [r10036, tmp8] = bound(ref.useState(0), 2);
  ref = ref.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(initialSectionId) {
      return initialSectionId.initialSectionId;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let tmp7 = bound(ref.useState(0), 2);
  const commandDiscoveryManager = onPressSlashItem(12128).useCommandDiscoveryManager(first);
  if (cResult[1] !== channel) {
    const obj4 = { channel, type: "channel" };
    cResult[1] = channel;
    cResult[2] = obj4;
    let tmp11 = obj4;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [onPressSlashItem(1997).ApplicationCommandType.CHAT];
    cResult[3] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[3];
  }
  const BuiltInCommandFilter = onPressSlashItem(9192).BuiltInCommandFilter;
  let tmp13 = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  if (cResult[4] === tmp13) {
    if (cResult[5] === tmp14) {
      let tmp15 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let obj5 = { placeholderCount: 3, limit: sectionDescriptors, includeFrecency: true };
      cResult[7] = obj5;
      let tmp16 = obj5;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === tmp11) {
      if (cResult[9] === tmp15) {
        let tmp18 = cResult[10];
      }
      const discovery = channel(9759).useDiscovery(tmp18);
      sectionDescriptors = discovery.sectionDescriptors;
      const activeSections = discovery.activeSections;
      commandsByActiveSection = discovery.commandsByActiveSection;
      const hasMoreAfter = discovery.hasMoreAfter;
      ({ loading, filteredSectionId } = discovery);
      const scrollDown = discovery.scrollDown;
      const filterSection = discovery.filterSection;
      if (cResult[11] === filterSection) {
        if (cResult[12] === commandDiscoveryManager) {
          if (cResult[13] === sectionDescriptors) {
            let tmp21 = cResult[14];
            let tmp22 = cResult[15];
          }
          const effect = obj3.useEffect(tmp22, tmp21);
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function j() {
              const AccessibilityAnnouncer = onPressSlashItem(4788).AccessibilityAnnouncer;
              const intl = onPressSlashItem(1126).intl;
              AccessibilityAnnouncer.announce(intl.string(onPressSlashItem(1126).t["2wfLMm"]));
              onPressSlashItem(5105).trackWithMetadata(hasMoreAfter.APPLICATION_COMMAND_BROWSER_OPENED);
              return () => {
                const result = onPressSlashItem(dependencyMap[14]).updateInitialSectionId(undefined);
              };
            };
            const items1 = [];
            cResult[16] = fn2;
            cResult[17] = items1;
            let tmp25 = items1;
            let tmp24 = fn2;
          } else {
            tmp24 = cResult[16];
            tmp25 = cResult[17];
          }
          const effect1 = obj3.useEffect(tmp24, tmp25);
          if (cResult[18] === commandsByActiveSection) {
            if (cResult[19] === onHeightChange) {
              if (cResult[20] === bound) {
                let tmp27 = cResult[21];
                let tmp28 = cResult[22];
              }
              const effect2 = obj3.useEffect(tmp27, tmp28);
              if (cResult[23] === filterSection) {
                if (cResult[24] === filteredSectionId) {
                  const _Symbol3 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    function re() {
                      closure_7.current = true;
                      AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_BROWSER_SCROLLED);
                    }
                    cResult[27] = re;
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    function le(nativeEvent) {
                      nativeEvent = nativeEvent.nativeEvent;
                      const targetContentOffset = nativeEvent.targetContentOffset;
                      let y;
                      if (targetContentOffset != null) {
                        y = targetContentOffset.y;
                      }
                      if (nativeEvent.contentOffset.y === y) {
                        closure_7.current = false;
                      }
                    }
                    cResult[28] = le;
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    function se(arg0) {
                      closure_7.current = false;
                    }
                    cResult[29] = se;
                  }
                  sum = 0;
                  if (cResult[30] === commandsByActiveSection) {
                    if (cResult[31] === bound) {
                      if (cResult[32] === sectionDescriptors) {
                        if (cResult[33] === sum) {
                          let items2 = cResult[34];
                          sum = cResult[35];
                        }
                        if (cResult[36] !== tmp35) {
                          const throttleResult = onHeightChange(12).throttle((arg0) => {
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
                          let tmp40 = throttleResult;
                          const obj10 = onHeightChange(12);
                        } else {
                          tmp40 = cResult[37];
                        }
                        closure_19 = tmp40;
                        if (cResult[38] === activeSections) {
                          if (cResult[39] === commandsByActiveSection) {
                            if (cResult[40] === hasMoreAfter) {
                              if (cResult[41] === bound) {
                                if (cResult[42] === scrollDown) {
                                  if (cResult[45] !== bound) {
                                    class Se {
                                      constructor(arg0, arg1) {
                                        if (null == onHeightChange) {
                                          obj1 = { length: 0, offset: 0, index: null };
                                          obj1.index = arg1;
                                          return obj1;
                                        } else {
                                          num = 0;
                                          num2 = 0;
                                          num3 = 0;
                                          tmp36 = SectionListElementType;
                                          tmp37 = SectionListElementType;
                                          ROW = SectionListElementType.ROW;
                                          tmp38 = onHeightChange;
                                          iter = onHeightChange[Symbol.iterator]();
                                          num5 = 1;
                                          tmp = onHeightChange;
                                          nextResult = iter.next();
                                          tmp3 = iter;
                                          while (iter !== undefined) {
                                            tmp4 = nextResult;
                                            tmp5 = num;
                                            tmp6 = num2;
                                            tmp7 = num3;
                                            if (num + num2 + nextResult.data.length + num3 + 1 >= arg1) {
                                              tmp12 = num;
                                              tmp13 = num2;
                                              tmp14 = num3;
                                              if (arg1 === num + num2 + num3) {
                                                tmp24 = SectionListElementType;
                                                tmp25 = SectionListElementType;
                                                ROW = SectionListElementType.HEADER;
                                              } else {
                                                tmp39 = num;
                                                tmp40 = num2;
                                                tmp41 = nextResult;
                                                tmp42 = num3;
                                                if (arg1 === num + num2 + tmp4.data.length + num3 + 1) {
                                                  tmp20 = num;
                                                  num = num + 1;
                                                  tmp21 = num2;
                                                  num2 = num2 + nextResult.data.length;
                                                  tmp22 = SectionListElementType;
                                                  tmp23 = SectionListElementType;
                                                  ROW = SectionListElementType.FOOTER;
                                                } else {
                                                  tmp15 = num2;
                                                  tmp16 = num;
                                                  sum = num + 1;
                                                  num = sum;
                                                  num2 = num2 + (arg1 - sum - num2 - num3);
                                                  tmp18 = SectionListElementType;
                                                  tmp19 = SectionListElementType;
                                                  ROW = SectionListElementType.ROW;
                                                }
                                              }
                                              tmp26 = iter;
                                              iter.return();
                                              break;
                                            } else {
                                              tmp8 = num;
                                              num = num + 1;
                                              tmp9 = num2;
                                              tmp10 = nextResult;
                                              num2 = num2 + tmp4.data.length;
                                              tmp11 = num3;
                                              num3 = num3 + 1;
                                              continue;
                                            }
                                            tmp27 = ROW;
                                            tmp28 = SectionListElementType;
                                            if (SectionListElementType.ROW === ROW) {
                                              num4 = closure_4;
                                            } else {
                                              tmp30 = tmp28;
                                              if (tmp29.HEADER === ROW) {
                                                tmp31 = closure_0;
                                                tmp32 = closure_3;
                                                num4 = closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT;
                                              } else {
                                                FOOTER = tmp28.FOOTER;
                                                num4 = 0;
                                              }
                                            }
                                            obj = { length: null, offset: null, index: null };
                                            obj.length = num4;
                                            tmp33 = closure_0;
                                            tmp34 = closure_3;
                                            tmp35 = closure_4;
                                            obj.offset = num * closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + num2 * closure_4;
                                            obj.index = arg1;
                                            return obj;
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    cResult[45] = bound;
                                    cResult[46] = Se;
                                  } else {
                                    class Se {
                                      constructor(arg0, arg1) {
                                        if (null == onHeightChange) {
                                          obj1 = { length: 0, offset: 0, index: null };
                                          obj1.index = arg1;
                                          return obj1;
                                        } else {
                                          num = 0;
                                          num2 = 0;
                                          num3 = 0;
                                          tmp36 = SectionListElementType;
                                          tmp37 = SectionListElementType;
                                          ROW = SectionListElementType.ROW;
                                          tmp38 = onHeightChange;
                                          iter = onHeightChange[Symbol.iterator]();
                                          num5 = 1;
                                          tmp = onHeightChange;
                                          nextResult = iter.next();
                                          tmp3 = iter;
                                          while (iter !== undefined) {
                                            tmp4 = nextResult;
                                            tmp5 = num;
                                            tmp6 = num2;
                                            tmp7 = num3;
                                            if (num + num2 + nextResult.data.length + num3 + 1 >= arg1) {
                                              tmp12 = num;
                                              tmp13 = num2;
                                              tmp14 = num3;
                                              if (arg1 === num + num2 + num3) {
                                                tmp24 = SectionListElementType;
                                                tmp25 = SectionListElementType;
                                                ROW = SectionListElementType.HEADER;
                                              } else {
                                                tmp39 = num;
                                                tmp40 = num2;
                                                tmp41 = nextResult;
                                                tmp42 = num3;
                                                if (arg1 === num + num2 + tmp4.data.length + num3 + 1) {
                                                  tmp20 = num;
                                                  num = num + 1;
                                                  tmp21 = num2;
                                                  num2 = num2 + nextResult.data.length;
                                                  tmp22 = SectionListElementType;
                                                  tmp23 = SectionListElementType;
                                                  ROW = SectionListElementType.FOOTER;
                                                } else {
                                                  tmp15 = num2;
                                                  tmp16 = num;
                                                  sum = num + 1;
                                                  num = sum;
                                                  num2 = num2 + (arg1 - sum - num2 - num3);
                                                  tmp18 = SectionListElementType;
                                                  tmp19 = SectionListElementType;
                                                  ROW = SectionListElementType.ROW;
                                                }
                                              }
                                              tmp26 = iter;
                                              iter.return();
                                              break;
                                            } else {
                                              tmp8 = num;
                                              num = num + 1;
                                              tmp9 = num2;
                                              tmp10 = nextResult;
                                              num2 = num2 + tmp4.data.length;
                                              tmp11 = num3;
                                              num3 = num3 + 1;
                                              continue;
                                            }
                                            tmp27 = ROW;
                                            tmp28 = SectionListElementType;
                                            if (SectionListElementType.ROW === ROW) {
                                              num4 = closure_4;
                                            } else {
                                              tmp30 = tmp28;
                                              if (tmp29.HEADER === ROW) {
                                                tmp31 = closure_0;
                                                tmp32 = closure_3;
                                                num4 = closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT;
                                              } else {
                                                FOOTER = tmp28.FOOTER;
                                                num4 = 0;
                                              }
                                            }
                                            obj = { length: null, offset: null, index: null };
                                            obj.length = num4;
                                            tmp33 = closure_0;
                                            tmp34 = closure_3;
                                            tmp35 = closure_4;
                                            obj.offset = num * closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + num2 * closure_4;
                                            obj.index = arg1;
                                            return obj;
                                          }
                                        }
                                        return;
                                      }
                                    }
                                  }
                                  if (cResult[47] === channel.guild_id) {
                                    class Se {
                                      constructor(arg0, arg1) {
                                        if (null == onHeightChange) {
                                          obj1 = { length: 0, offset: 0, index: null };
                                          obj1.index = arg1;
                                          return obj1;
                                        } else {
                                          num = 0;
                                          num2 = 0;
                                          num3 = 0;
                                          tmp36 = SectionListElementType;
                                          tmp37 = SectionListElementType;
                                          ROW = SectionListElementType.ROW;
                                          tmp38 = onHeightChange;
                                          iter = onHeightChange[Symbol.iterator]();
                                          num5 = 1;
                                          tmp = onHeightChange;
                                          nextResult = iter.next();
                                          tmp3 = iter;
                                          while (iter !== undefined) {
                                            tmp4 = nextResult;
                                            tmp5 = num;
                                            tmp6 = num2;
                                            tmp7 = num3;
                                            if (num + num2 + nextResult.data.length + num3 + 1 >= arg1) {
                                              tmp12 = num;
                                              tmp13 = num2;
                                              tmp14 = num3;
                                              if (arg1 === num + num2 + num3) {
                                                tmp24 = SectionListElementType;
                                                tmp25 = SectionListElementType;
                                                ROW = SectionListElementType.HEADER;
                                              } else {
                                                tmp39 = num;
                                                tmp40 = num2;
                                                tmp41 = nextResult;
                                                tmp42 = num3;
                                                if (arg1 === num + num2 + tmp4.data.length + num3 + 1) {
                                                  tmp20 = num;
                                                  num = num + 1;
                                                  tmp21 = num2;
                                                  num2 = num2 + nextResult.data.length;
                                                  tmp22 = SectionListElementType;
                                                  tmp23 = SectionListElementType;
                                                  ROW = SectionListElementType.FOOTER;
                                                } else {
                                                  tmp15 = num2;
                                                  tmp16 = num;
                                                  sum = num + 1;
                                                  num = sum;
                                                  num2 = num2 + (arg1 - sum - num2 - num3);
                                                  tmp18 = SectionListElementType;
                                                  tmp19 = SectionListElementType;
                                                  ROW = SectionListElementType.ROW;
                                                }
                                              }
                                              tmp26 = iter;
                                              iter.return();
                                              break;
                                            } else {
                                              tmp8 = num;
                                              num = num + 1;
                                              tmp9 = num2;
                                              tmp10 = nextResult;
                                              num2 = num2 + tmp4.data.length;
                                              tmp11 = num3;
                                              num3 = num3 + 1;
                                              continue;
                                            }
                                            tmp27 = ROW;
                                            tmp28 = SectionListElementType;
                                            if (SectionListElementType.ROW === ROW) {
                                              num4 = closure_4;
                                            } else {
                                              tmp30 = tmp28;
                                              if (tmp29.HEADER === ROW) {
                                                tmp31 = closure_0;
                                                tmp32 = closure_3;
                                                num4 = closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT;
                                              } else {
                                                FOOTER = tmp28.FOOTER;
                                                num4 = 0;
                                              }
                                            }
                                            obj = { length: null, offset: null, index: null };
                                            obj.length = num4;
                                            tmp33 = closure_0;
                                            tmp34 = closure_3;
                                            tmp35 = closure_4;
                                            obj.offset = num * closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + num2 * closure_4;
                                            obj.index = arg1;
                                            return obj;
                                          }
                                        }
                                        return;
                                      }
                                    }
                                  }
                                  function renderSectionHeader(section) {
                                    section = section.section;
                                    const children = [state(ApplicationSectionHeaderDefault, { section: section.section, guildId: channel.guild_id }, section.section.id), ];
                                    let tmp3Result = 0 === section.data.length;
                                    if (tmp3Result) {
                                      const obj3 = { lightSource: _modDef9746, darkSource: _modDef9746, body: null, containerStyle: null, imageStyle: null };
                                      const intl = util.intl;
                                      const obj5 = { applicationName: section.section.name };
                                      obj3.body = intl.format(util.t.WoQXT6, obj5);
                                      ({ noCommandsContainer: obj2.containerStyle, noCommandsImage: obj2.imageStyle } = closure_3);
                                      tmp3Result = state(native.ThemedEmptyState, obj3);
                                    }
                                    children[1] = tmp3Result;
                                    return value2(closure_2_15, { children });
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
                          nativeEvent = nativeEvent.nativeEvent;
                          ({ layoutMeasurement, contentSize, contentInset } = nativeEvent);
                          const y = nativeEvent.contentOffset.y;
                          closure_19(y);
                          const current = ref.current;
                          let tmp2 = !current;
                          if (!current) {
                            tmp2 = activeSections.length > 0;
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
                                const obj = { sectionIndex: activeSections.length - 1, itemIndex: null, viewPosition: 1, animated: false };
                                const _Math = Math;
                                obj.itemIndex = Math.max(commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1, 0);
                                current3.scrollToLocation(obj);
                              }
                            }
                          }
                          let tmp7 = hasMoreAfter;
                          if (hasMoreAfter) {
                            tmp7 = y + layoutMeasurement.height >= contentSize.height - 3 * bound;
                          }
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
                            if (null != closure_8) {
                              tmp2 = filterSection;
                              tmp3 = filterSection(tmp);
                              tmp4 = sectionDescriptors;
                              findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
                              num = -1;
                              num2 = 0;
                              tmp6 = closure_6;
                              if (-1 !== findIndexResult) {
                                num2 = findIndexResult;
                              }
                              tmp6Result = tmp6(num2);
                            }
                            return;
                          }
                        }
                      }
                    }
                  }
                  items2 = [];
                  for (const item10189 of sectionDescriptors) {
                    class Se {
                      constructor(arg0, arg1) {
                        if (null == arg0) {
                          obj1 = { length: 0, offset: 0, index: null };
                          obj1.index = arg1;
                          return obj1;
                        } else {
                          num = 0;
                          num2 = 0;
                          num3 = 0;
                          tmp36 = SectionListElementType;
                          tmp37 = SectionListElementType;
                          ROW = SectionListElementType.ROW;
                          tmp38 = arg0;
                          iter = arg0[Symbol.iterator]();
                          num5 = 1;
                          tmp = arg0;
                          nextResult = iter.next();
                          tmp3 = iter;
                          while (iter !== undefined) {
                            tmp4 = nextResult;
                            tmp5 = num;
                            tmp6 = num2;
                            tmp7 = num3;
                            if (num + num2 + nextResult.data.length + num3 + 1 >= arg1) {
                              tmp12 = num;
                              tmp13 = num2;
                              tmp14 = num3;
                              if (arg1 === num + num2 + num3) {
                                tmp24 = SectionListElementType;
                                tmp25 = SectionListElementType;
                                ROW = SectionListElementType.HEADER;
                              } else {
                                tmp39 = num;
                                tmp40 = num2;
                                tmp41 = nextResult;
                                tmp42 = num3;
                                if (arg1 === num + num2 + tmp4.data.length + num3 + 1) {
                                  tmp20 = num;
                                  num = num + 1;
                                  tmp21 = num2;
                                  num2 = num2 + nextResult.data.length;
                                  tmp22 = SectionListElementType;
                                  tmp23 = SectionListElementType;
                                  ROW = SectionListElementType.FOOTER;
                                } else {
                                  tmp15 = num2;
                                  tmp16 = num;
                                  sum = num + 1;
                                  num = sum;
                                  num2 = num2 + (arg1 - sum - num2 - num3);
                                  tmp18 = SectionListElementType;
                                  tmp19 = SectionListElementType;
                                  ROW = SectionListElementType.ROW;
                                }
                              }
                              tmp26 = iter;
                              iter.return();
                              break;
                            } else {
                              tmp8 = num;
                              num = num + 1;
                              tmp9 = num2;
                              tmp10 = nextResult;
                              num2 = num2 + tmp4.data.length;
                              tmp11 = num3;
                              num3 = num3 + 1;
                              continue;
                            }
                            tmp27 = ROW;
                            tmp28 = SectionListElementType;
                            if (SectionListElementType.ROW === ROW) {
                              num4 = closure_4;
                            } else {
                              tmp30 = tmp28;
                              if (tmp29.HEADER === ROW) {
                                tmp31 = closure_0;
                                tmp32 = closure_3;
                                num4 = closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT;
                              } else {
                                FOOTER = tmp28.FOOTER;
                                num4 = 0;
                              }
                            }
                            obj = { length: null, offset: null, index: null };
                            obj.length = num4;
                            tmp33 = closure_0;
                            tmp34 = closure_3;
                            tmp35 = closure_4;
                            obj.offset = num * closure_0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + num2 * closure_4;
                            obj.index = arg1;
                            return obj;
                          }
                        }
                        return;
                      }
                    }
                    continue;
                  }
                  cResult[30] = commandsByActiveSection;
                  class X {
                    constructor() {
                      if (null != closure_8) {
                        tmp2 = filterSection;
                        tmp3 = filterSection(tmp);
                        tmp4 = sectionDescriptors;
                        findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
                        num = -1;
                        num2 = 0;
                        tmp6 = closure_6;
                        if (-1 !== findIndexResult) {
                          num2 = findIndexResult;
                        }
                        tmp6Result = tmp6(num2);
                      }
                      return;
                    }
                  }
                  cResult[32] = sectionDescriptors;
                  cResult[33] = sum;
                  cResult[34] = items2;
                  cResult[35] = sum;
                }
              }
              const fn4 = function q(arg0) {
                if (sectionDescriptors[arg0].id !== filteredSectionId) {
                  if (tmp.id !== constants.FRECENCY) {
                    filterSection(tmp.id);
                    tmp8(arg0);
                  }
                  const result = ApplicationCommandDiscoveryManager.updateInitialSectionId(undefined);
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
              closure_0 = bound;
              let num2 = 0;
              if (0 !== commandsByActiveSection.length) {
                num2 = commandsByActiveSection.reduce((acc, data) => {
                  if (0 === data.data.length) {
                    let sum = require("ApplicationSectionHeader").APPLICATION_SECTION_HEADER_HEIGHT + 160;
                  } else {
                    sum = acc + (require("ApplicationSectionHeader").APPLICATION_SECTION_HEADER_HEIGHT + (closure_0 + sectionDescriptors) * data.data.length);
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
              if (null != closure_8) {
                tmp2 = filterSection;
                tmp3 = filterSection(tmp);
                tmp4 = sectionDescriptors;
                findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
                num = -1;
                num2 = 0;
                tmp6 = closure_6;
                if (-1 !== findIndexResult) {
                  num2 = findIndexResult;
                }
                tmp6Result = tmp6(num2);
              }
              return;
            }
          }
          cResult[22] = items3;
          tmp28 = items3;
          tmp27 = fn3;
        }
      }
      class X {
        constructor() {
          if (null != closure_8) {
            tmp2 = filterSection;
            tmp3 = filterSection(tmp);
            tmp4 = sectionDescriptors;
            findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
            num = -1;
            num2 = 0;
            tmp6 = closure_6;
            if (-1 !== findIndexResult) {
              num2 = findIndexResult;
            }
            tmp6Result = tmp6(num2);
          }
          return;
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
      const obj9 = channel(9759);
    }
    const obj6 = { context: tmp11, filters: tmp15, options: tmp16, allowFetch: true };
    cResult[8] = tmp11;
    cResult[9] = tmp15;
    cResult[10] = obj6;
    tmp18 = obj6;
  }
  const obj7 = { commandTypes: tmp12, builtIns: tmp13, applicationCommands: !canOnlyUseTextCommands };
  cResult[4] = tmp13;
  cResult[5] = !canOnlyUseTextCommands;
  cResult[6] = obj7;
  tmp15 = obj7;
  let tmpResult = onPressSlashItem(12128);
}) : (function ApplicationCommandDiscovery(channel) {
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
  const commandDiscoveryManager = ApplicationCommandDiscoveryManager.useCommandDiscoveryManager((initialSectionId) => initialSectionId.initialSectionId);
  let obj5 = { context: { channel, type: "channel" }, filters: null, options: null, allowFetch: true };
  const obj6 = { commandTypes: null, builtIns: null, applicationCommands: null };
  let items = [Server.ApplicationCommandType.CHAT];
  obj6.commandTypes = items;
  const BuiltInCommandFilter = ApplicationCommandQueryTypes.BuiltInCommandFilter;
  obj6.builtIns = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  obj6.applicationCommands = !canOnlyUseTextCommands;
  obj5.filters = obj6;
  obj5.options = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
  const discovery = channel(9759).useDiscovery(obj5);
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
    const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
    const intl = require("util").intl;
    AccessibilityAnnouncer.announce(intl.string(require("util").t["2wfLMm"]));
    require("AppAnalyticsUtils").trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const result = closure_1_0(dependencyMap[14]).updateInitialSectionId(undefined);
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
            let sum = require("ApplicationSectionHeader").APPLICATION_SECTION_HEADER_HEIGHT + 160;
          } else {
            sum = acc + (require("ApplicationSectionHeader").APPLICATION_SECTION_HEADER_HEIGHT + (closure_0 + sectionDescriptors) * data.data.length);
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
  const callback3 = obj2.useCallback((arg0) => {
    closure_8.current = false;
  }, []);
  const memo = obj2.useMemo(() => {
    c0 = 0;
    const items = [];
    for (const item10008 of sectionDescriptors) {
      let tmp = (function _loop2(item10008) {
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
  closure_19 = obj2.useMemo(() => _modDef12.throttle((arg0) => {
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
  }, 100), items5);
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
        let obj = { length: num4, offset: num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + num2 * bound, index };
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
    stickySectionHeadersEnabled: true
  };
  let obj10 = null;
  const memo1 = obj2.useMemo(() => state(ApplicationCommandsCategoriesDefault, { onPressSection, sections: sectionDescriptors, selectedIndex, guildId: channel.guild_id }), items7);
  if (discovery.loading) {
    obj10 = { minIndexForVisible: 1 };
  }
  obj9.maintainVisibleContentPosition = obj10;
  obj9.renderItem = function renderItem(item) {
    item = item.item;
    const section = item.section;
    let found;
    if (item.inputType === require("ApplicationCommandTypes").ApplicationCommandInputType.PLACEHOLDER) {
      return filteredSectionId(onHeightChange(12129), {});
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
        guildId: found.guild_id
      };
      return filteredSectionId(onHeightChange(12130), obj);
    }
  };
  obj9.renderSectionHeader = function renderSectionHeader(section) {
    section = section.section;
    const children = [state(ApplicationSectionHeaderDefault, { section: section.section, guildId: channel.guild_id }, section.section.id), ];
    let tmp3Result = 0 === section.data.length;
    if (tmp3Result) {
      const obj3 = { lightSource: _modDef9746, darkSource: _modDef9746, body: null, containerStyle: null, imageStyle: null };
      const intl = util.intl;
      const obj5 = { applicationName: section.section.name };
      obj3.body = intl.format(util.t.WoQXT6, obj5);
      ({ noCommandsContainer: obj2.containerStyle, noCommandsImage: obj2.imageStyle } = closure_3);
      tmp3Result = state(native.ThemedEmptyState, obj3);
    }
    children[1] = tmp3Result;
    return value2(closure_2_15, { children });
  };
  obj9.getItemLayout = callback4;
  const items9 = [filteredSectionId(closure_7, obj9), memo1];
  obj8.children = items9;
  return filterSection(selectedIndex, obj8);
});