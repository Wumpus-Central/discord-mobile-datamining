// discord_app/modules/forums/native/ForumDisplaySettingsActionSheet.tsx
import Tracking from "../tracking/Tracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const ForumChannelStore = fn(11693);
({ useForumChannelStoreApi: metroRequire, useForumChannelStore: closure_7 } = ForumChannelStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumDisplaySettingsActionSheet(channelId) {
      const cResult = channelId(sortOrder[10]).c(40);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first1];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function b() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = channelId(sortOrder[10]);
      const stateFromStores = channelId(sortOrder[11]).useStateFromStores(first, tmp6);
      const tmp7 = first2(channelId);
      sortOrder = tmp7.sortOrder;
      const layoutType = tmp7.layoutType;
      const tagSetting = tmp7.tagSetting;
      const tmp8 = closure_6();
      noop = tmp8;
      const tmp9 = layoutType(noop.useState(sortOrder), 2);
      first1 = tmp9[0];
      closure_6 = tmp9[1];
      const tmp11 = layoutType(noop.useState(layoutType), 2);
      first2 = tmp11[0];
      closure_8 = tmp11[1];
      const tmp13 = layoutType(noop.useState(tagSetting), 2);
      const first3 = tmp13[0];
      closure_10 = tmp13[1];
      const tmpResult = channelId(sortOrder[11]);
      const ref = noop.useRef(null);
      const ref1 = noop.useRef(null);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        function handleSortOrderChange(arg0) {
          closure_6(arg0);
        }
        cResult[3] = handleSortOrderChange;
        let tmp18 = handleSortOrderChange;
      } else {
        tmp18 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        function handleLayoutTypeChange(arg0) {
          closure_8(arg0);
        }
        cResult[4] = handleLayoutTypeChange;
        let tmp19 = handleLayoutTypeChange;
      } else {
        tmp19 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        function handleTagSettingChange(arg0) {
          closure_10(arg0);
        }
        cResult[5] = handleTagSettingChange;
        let tmp20 = handleTagSettingChange;
      } else {
        tmp20 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === channelId) {
          if (cResult[8] === layoutType) {
            if (cResult[9] === first2) {
              if (cResult[10] === first1) {
                if (cResult[11] === first3) {
                  if (cResult[12] === sortOrder) {
                    if (cResult[13] === tmp8) {
                      let tmp21 = cResult[14];
                    }
                    const unmountEffect = tmp(tmp2[13]).useUnmountEffect(tmp21);
                    if (cResult[15] !== stateFromStores) {
                      class Y {
                        constructor() {
                          obj = closure_1;
                          if (null != closure_1) {
                            tmp = closure_11;
                            current = closure_11.current;
                            if (current != null) {
                              setValueResult = current.setValue(obj.getDefaultSortOrder());
                            }
                            tmp3 = closure_12;
                            current2 = closure_12.current;
                            if (current2 != null) {
                              setValueResult1 = current2.setValue(obj.getDefaultLayout());
                            }
                            tmp5 = closure_13;
                            current3 = closure_13.current;
                            if (current3 != null) {
                              setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                            }
                          }
                          return;
                        }
                      }
                      cResult[15] = stateFromStores;
                      cResult[16] = Y;
                    } else {
                      class Y {
                        constructor() {
                          obj = closure_1;
                          if (null != closure_1) {
                            tmp = closure_11;
                            current = closure_11.current;
                            if (current != null) {
                              setValueResult = current.setValue(obj.getDefaultSortOrder());
                            }
                            tmp3 = closure_12;
                            current2 = closure_12.current;
                            if (current2 != null) {
                              setValueResult1 = current2.setValue(obj.getDefaultLayout());
                            }
                            tmp5 = closure_13;
                            current3 = closure_13.current;
                            if (current3 != null) {
                              setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                            }
                          }
                          return;
                        }
                      }
                    }
                    if (null == stateFromStores) {
                      class Y {
                        constructor() {
                          obj = closure_1;
                          if (null != closure_1) {
                            tmp = closure_11;
                            current = closure_11.current;
                            if (current != null) {
                              setValueResult = current.setValue(obj.getDefaultSortOrder());
                            }
                            tmp3 = closure_12;
                            current2 = closure_12.current;
                            if (current2 != null) {
                              setValueResult1 = current2.setValue(obj.getDefaultLayout());
                            }
                            tmp5 = closure_13;
                            current3 = closure_13.current;
                            if (current3 != null) {
                              setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                            }
                          }
                          return;
                        }
                      }
                    } else {
                      class Y {
                        constructor() {
                          obj = closure_1;
                          if (null != closure_1) {
                            tmp = closure_11;
                            current = closure_11.current;
                            if (current != null) {
                              setValueResult = current.setValue(obj.getDefaultSortOrder());
                            }
                            tmp3 = closure_12;
                            current2 = closure_12.current;
                            if (current2 != null) {
                              setValueResult1 = current2.setValue(obj.getDefaultLayout());
                            }
                            tmp5 = closure_13;
                            current3 = closure_13.current;
                            if (current3 != null) {
                              setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                            }
                          }
                          return;
                        }
                      }
                      if (tmp24) {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                      }
                      const _Symbol = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                        const stringResult = obj5.string(tmp(tmp2[5]).t.xyYt8A);
                        cResult[17] = stringResult;
                        const tmp25 = stringResult;
                      } else {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                        const stringResult1 = obj6.string(tmp(tmp2[5]).t.yBZMsQ);
                        cResult[18] = stringResult1;
                        const tmp27 = stringResult1;
                      } else {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                      }
                      if (cResult[19] !== Y) {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                        const obj2 = { title: tmp25, leading: null };
                        let obj3 = { onPress: Y, label: tmp27 };
                        obj2.leading = closure_8(tmp(tmp2[15]).ActionSheetHeaderPressableText, obj3);
                        const tmp30 = closure_8(tmp(tmp2[14]).BottomSheetTitleHeader, obj2);
                        cResult[19] = Y;
                        cResult[20] = tmp30;
                      } else {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                        const stringResult2 = obj9.string(tmp(tmp2[5]).t.f8wNDl);
                        const intl = tmp(tmp2[5]).intl;
                        const stringResult3 = intl.string(tmp(tmp2[5]).t.f8wNDl);
                        const obj4 = { label: null, value: null };
                        const intl2 = tmp(tmp2[5]).intl;
                        obj4.label = intl2.string(tmp(tmp2[5]).t.jOPmcI);
                        obj4.value = tmp(tmp2[6]).ThreadSortOrder.LATEST_ACTIVITY;
                        const items1 = [obj4];
                        const obj7 = { label: null, value: null };
                        const intl3 = tmp(tmp2[5]).intl;
                        obj7.label = intl3.string(tmp(tmp2[5]).t.UIltXd);
                        obj7.value = tmp(tmp2[6]).ThreadSortOrder.CREATION_DATE;
                        items1[1] = obj7;
                        const mapped = items1.map((label) => {
                          value = label.value;
                          return closure_8(
                            channelId(sortOrder[16]).TableRadioRow,
                            { label: label.label, value },
                            value,
                          );
                        });
                        cResult[21] = stringResult2;
                        cResult[22] = stringResult3;
                        cResult[23] = mapped;
                        let tmp33 = mapped;
                        let tmp32 = stringResult3;
                        const tmp31 = stringResult2;
                      } else {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                        tmp32 = cResult[22];
                        tmp33 = cResult[23];
                      }
                      if (cResult[24] === sortOrder) {
                        class Y {
                          constructor() {
                            obj = closure_1;
                            if (null != closure_1) {
                              tmp = closure_11;
                              current = closure_11.current;
                              if (current != null) {
                                setValueResult = current.setValue(obj.getDefaultSortOrder());
                              }
                              tmp3 = closure_12;
                              current2 = closure_12.current;
                              if (current2 != null) {
                                setValueResult1 = current2.setValue(obj.getDefaultLayout());
                              }
                              tmp5 = closure_13;
                              current3 = closure_13.current;
                              if (current3 != null) {
                                setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                              }
                            }
                            return;
                          }
                        }
                        if (cResult[27] === stateFromStores) {
                          class Y {
                            constructor() {
                              obj = closure_1;
                              if (null != closure_1) {
                                tmp = closure_11;
                                current = closure_11.current;
                                if (current != null) {
                                  setValueResult = current.setValue(obj.getDefaultSortOrder());
                                }
                                tmp3 = closure_12;
                                current2 = closure_12.current;
                                if (current2 != null) {
                                  setValueResult1 = current2.setValue(obj.getDefaultLayout());
                                }
                                tmp5 = closure_13;
                                current3 = closure_13.current;
                                if (current3 != null) {
                                  setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                                }
                              }
                              return;
                            }
                          }
                          if (cResult[30] === tmp24) {
                            class Y {
                              constructor() {
                                obj = closure_1;
                                if (null != closure_1) {
                                  tmp = closure_11;
                                  current = closure_11.current;
                                  if (current != null) {
                                    setValueResult = current.setValue(obj.getDefaultSortOrder());
                                  }
                                  tmp3 = closure_12;
                                  current2 = closure_12.current;
                                  if (current2 != null) {
                                    setValueResult1 = current2.setValue(obj.getDefaultLayout());
                                  }
                                  tmp5 = closure_13;
                                  current3 = closure_13.current;
                                  if (current3 != null) {
                                    setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                                  }
                                }
                                return;
                              }
                            }
                            if (cResult[33] === tmp37) {
                              class Y {
                                constructor() {
                                  obj = closure_1;
                                  if (null != closure_1) {
                                    tmp = closure_11;
                                    current = closure_11.current;
                                    if (current != null) {
                                      setValueResult = current.setValue(obj.getDefaultSortOrder());
                                    }
                                    tmp3 = closure_12;
                                    current2 = closure_12.current;
                                    if (current2 != null) {
                                      setValueResult1 = current2.setValue(obj.getDefaultLayout());
                                    }
                                    tmp5 = closure_13;
                                    current3 = closure_13.current;
                                    if (current3 != null) {
                                      setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                                    }
                                  }
                                  return;
                                }
                              }
                            }
                            const obj8 = { children: null };
                            const obj10 = {
                              direction: "vertical",
                              spacing: stateFromStores(tmp2[20]).space.PX_16,
                              children: null,
                            };
                            const items2 = [tmp37, tmp40, tmp42];
                            obj10.children = items2;
                            obj8.children = first3(tmp(tmp2[19]).Stack, obj10);
                            const tmp48 = closure_8(tmp(tmp2[18]).BottomSheetScrollView, obj8);
                            cResult[33] = tmp37;
                            cResult[34] = tmp40;
                            cResult[35] = tmp42;
                            cResult[36] = tmp48;
                          }
                          let tmp43 = null;
                          if (tmp24) {
                            class Y {
                              constructor() {
                                obj = closure_1;
                                if (null != closure_1) {
                                  tmp = closure_11;
                                  current = closure_11.current;
                                  if (current != null) {
                                    setValueResult = current.setValue(obj.getDefaultSortOrder());
                                  }
                                  tmp3 = closure_12;
                                  current2 = closure_12.current;
                                  if (current2 != null) {
                                    setValueResult1 = current2.setValue(obj.getDefaultLayout());
                                  }
                                  tmp5 = closure_13;
                                  current3 = closure_13.current;
                                  if (current3 != null) {
                                    setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                                  }
                                }
                                return;
                              }
                            }
                            const obj11 = {
                              groupRef: ref2,
                              hasIcons: false,
                              defaultValue: tagSetting,
                              onChange: tmp20,
                              title: null,
                              accessibilityLabel: null,
                              children: null,
                            };
                            const intl8 = tmp(tmp2[5]).intl;
                            obj11.title = intl8.string(tmp(tmp2[5]).t.Paxaug);
                            const intl9 = tmp(tmp2[5]).intl;
                            obj11.accessibilityLabel = intl9.string(tmp(tmp2[5]).t.f8wNDl);
                            const obj12 = { label: null, value: null };
                            const intl10 = tmp(tmp2[5]).intl;
                            obj12.label = intl10.string(tmp(tmp2[5]).t.rQ0ctQ);
                            obj12.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_SOME;
                            const items3 = [obj12];
                            const obj13 = { label: null, value: null };
                            const intl11 = tmp(tmp2[5]).intl;
                            obj13.label = intl11.string(tmp(tmp2[5]).t.FCXUu0);
                            obj13.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_ALL;
                            items3[1] = obj13;
                            obj11.children = items3.map((label) => {
                              value = label.value;
                              return closure_8(
                                channelId(sortOrder[16]).TableRadioRow,
                                { label: label.label, value },
                                value,
                              );
                            });
                            tmp43 = closure_8(tmp(tmp2[17]).TableRadioGroup, obj11);
                          }
                          cResult[30] = tmp24;
                          cResult[31] = tagSetting;
                          cResult[32] = tmp43;
                        }
                        let tmp41 = null;
                        if (stateFromStores.isForumChannel()) {
                          class Y {
                            constructor() {
                              obj = closure_1;
                              if (null != closure_1) {
                                tmp = closure_11;
                                current = closure_11.current;
                                if (current != null) {
                                  setValueResult = current.setValue(obj.getDefaultSortOrder());
                                }
                                tmp3 = closure_12;
                                current2 = closure_12.current;
                                if (current2 != null) {
                                  setValueResult1 = current2.setValue(obj.getDefaultLayout());
                                }
                                tmp5 = closure_13;
                                current3 = closure_13.current;
                                if (current3 != null) {
                                  setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                                }
                              }
                              return;
                            }
                          }
                          if (!stateFromStores.isGameInvitesChannel()) {
                            class Y {
                              constructor() {
                                obj = closure_1;
                                if (null != closure_1) {
                                  tmp = closure_11;
                                  current = closure_11.current;
                                  if (current != null) {
                                    setValueResult = current.setValue(obj.getDefaultSortOrder());
                                  }
                                  tmp3 = closure_12;
                                  current2 = closure_12.current;
                                  if (current2 != null) {
                                    setValueResult1 = current2.setValue(obj.getDefaultLayout());
                                  }
                                  tmp5 = closure_13;
                                  current3 = closure_13.current;
                                  if (current3 != null) {
                                    setValueResult2 = current3.setValue(obj.getDefaultTagSetting());
                                  }
                                }
                                return;
                              }
                            }
                            const obj14 = {
                              groupRef: ref1,
                              hasIcons: false,
                              defaultValue: layoutType,
                              onChange: tmp19,
                              title: null,
                              accessibilityLabel: null,
                              children: null,
                            };
                            const intl4 = tmp(tmp2[5]).intl;
                            obj14.title = intl4.string(tmp(tmp2[5]).t.mFMDSq);
                            const intl5 = tmp(tmp2[5]).intl;
                            obj14.accessibilityLabel = intl5.string(tmp(tmp2[5]).t.h850Ss);
                            const obj15 = { label: null, value: null };
                            const intl6 = tmp(tmp2[5]).intl;
                            obj15.label = intl6.string(tmp(tmp2[5]).t["NJFr+g"]);
                            obj15.value = tmp(tmp2[7]).ForumLayout.LIST;
                            const items4 = [obj15];
                            const obj16 = { label: null, value: null };
                            const intl7 = tmp(tmp2[5]).intl;
                            obj16.label = intl7.string(tmp(tmp2[5]).t.wKeggb);
                            obj16.value = tmp(tmp2[7]).ForumLayout.GRID;
                            items4[1] = obj16;
                            obj14.children = items4.map((label) => {
                              value = label.value;
                              return closure_8(
                                channelId(sortOrder[16]).TableRadioRow,
                                { label: label.label, value },
                                value,
                              );
                            });
                            tmp41 = closure_8(tmp(tmp2[17]).TableRadioGroup, obj14);
                          }
                        }
                        cResult[27] = stateFromStores;
                        cResult[28] = layoutType;
                        cResult[29] = tmp41;
                      }
                      const obj17 = {
                        groupRef: ref,
                        hasIcons: false,
                        defaultValue: sortOrder,
                        onChange: tmp18,
                        title: tmp31,
                        accessibilityLabel: tmp32,
                        children: tmp33,
                      };
                      const tmp39 = closure_8(tmp(tmp2[17]).TableRadioGroup, obj17);
                      cResult[24] = sortOrder;
                      cResult[25] = tmp33;
                      cResult[26] = tmp39;
                    }
                    const tmpResult2 = tmp(tmp2[13]);
                  }
                }
              }
            }
          }
        }
      }
      class X {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            tmp16 = sortOrder;
            tmp17 = closure_5;
            if (sortOrder !== closure_5) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              obj1 = { guildId: null, channelId: null, sortOrder: null };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
              obj1.sortOrder = tmp17;
              result = obj.trackForumSortOrderUpdated(obj1);
            }
            tmp5 = layoutType;
            tmp6 = closure_7;
            if (layoutType !== closure_7) {
              tmp7 = closure_0;
              tmp8 = closure_2;
              obj3 = closure_0(closure_2[12]);
              obj8 = { guildId: null, channelId: null, forumLayout: null };
              ({ guild_id: obj4.guildId, id: obj4.channelId } = tmp);
              obj8.forumLayout = tmp6;
              result1 = obj3.trackForumLayoutUpdated(obj8);
            }
            tmp10 = closure_4;
            state = closure_4.getState();
            tmp11 = channelId;
            setLayoutTypeResult = state.setLayoutType(channelId, tmp6);
            state1 = closure_4.getState();
            setSortOrderResult = state1.setSortOrder(channelId, tmp17);
            state2 = closure_4.getState();
            tmp14 = closure_9;
            setTagSettingResult = state2.setTagSetting(channelId, closure_9);
          }
          return;
        }
      }
      cResult[6] = stateFromStores;
      cResult[7] = channelId;
      cResult[8] = layoutType;
      cResult[9] = first2;
      cResult[10] = first1;
      cResult[11] = first3;
      cResult[12] = sortOrder;
      cResult[13] = tmp8;
      cResult[14] = X;
      tmp21 = X;
      ref2 = noop.useRef(null);
    }
  : function ForumDisplaySettingsActionSheet(channelId) {
      channelId = channelId.channelId;
      let sortOrder;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      c10 = undefined;
      const items = [c5];
      const stateFromStores = channelId(sortOrder[11]).useStateFromStores(items, () =>
        ChannelStore.getChannel(channelId),
      );
      const tmp3 = c7(channelId);
      sortOrder = tmp3.sortOrder;
      const layoutType = tmp3.layoutType;
      const tagSetting = tmp3.tagSetting;
      noop = c6();
      let obj = channelId(sortOrder[11]);
      [c5, c6] = layoutType(noop.useState(sortOrder), 2);
      const tmp4 = layoutType(noop.useState(sortOrder), 2);
      [c7, c8] = layoutType(noop.useState(layoutType), 2);
      const tmp5 = layoutType(noop.useState(layoutType), 2);
      [c9, c10] = layoutType(noop.useState(tagSetting), 2);
      const ref = noop.useRef(null);
      const ref1 = noop.useRef(null);
      const ref2 = noop.useRef(null);
      const tmp6 = layoutType(noop.useState(tagSetting), 2);
      const unmountEffect = channelId(sortOrder[13]).useUnmountEffect(() => {
        if (null != stateFromStores) {
          if (sortOrder !== sortOrder) {
            const obj5 = { guildId: null, channelId: null, sortOrder: null };
            ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
            obj5.sortOrder = sortOrder;
            const result = Tracking.trackForumSortOrderUpdated(obj5);
          }
          if (layoutType !== forumLayout) {
            const obj6 = { guildId: null, channelId: null, forumLayout: null };
            ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
            obj6.forumLayout = forumLayout;
            const result1 = Tracking.trackForumLayoutUpdated(obj6);
          }
          state = closure_4.getState();
          state.setLayoutType(channelId, forumLayout);
          const state1 = closure_4.getState();
          state1.setSortOrder(channelId, sortOrder);
          const state2 = closure_4.getState();
          state2.setTagSetting(channelId, c9);
        }
      });
      [][0] = stateFromStores;
      if (null == stateFromStores) {
        return null;
      } else {
        let tmp12 = null != stateFromStores.availableTags;
        if (tmp12) {
          tmp12 = stateFromStores.availableTags.length > 0;
        }
        const obj2 = { scrollable: true, header: null, children: null };
        const obj4 = { title: null, leading: null };
        const intl = tmp(tmp2[5]).intl;
        obj4.title = intl.string(tmp(tmp2[5]).t.xyYt8A);
        let obj5 = { onPress: tmp11, label: null };
        const intl2 = tmp(tmp2[5]).intl;
        obj5.label = intl2.string(tmp(tmp2[5]).t.yBZMsQ);
        obj4.leading = c8(tmp(tmp2[15]).ActionSheetHeaderPressableText, obj5);
        obj2.header = c8(tmp(tmp2[14]).BottomSheetTitleHeader, obj4);
        let obj6 = { direction: "vertical", spacing: stateFromStores(tmp2[20]).space.PX_16, children: null };
        const obj7 = {
          groupRef: ref,
          hasIcons: false,
          defaultValue: sortOrder,
          onChange: function handleSortOrderChange(arg0) {
            _undefined(arg0);
          },
          title: null,
          accessibilityLabel: null,
          children: null,
        };
        const intl3 = tmp(tmp2[5]).intl;
        obj7.title = intl3.string(tmp(tmp2[5]).t.f8wNDl);
        const intl4 = tmp(tmp2[5]).intl;
        obj7.accessibilityLabel = intl4.string(tmp(tmp2[5]).t.f8wNDl);
        const obj8 = { label: null, value: null };
        const intl5 = tmp(tmp2[5]).intl;
        obj8.label = intl5.string(tmp(tmp2[5]).t.jOPmcI);
        obj8.value = tmp(tmp2[6]).ThreadSortOrder.LATEST_ACTIVITY;
        const items1 = [obj8];
        const obj9 = { label: null, value: null };
        const intl6 = tmp(tmp2[5]).intl;
        obj9.label = intl6.string(tmp(tmp2[5]).t.UIltXd);
        obj9.value = tmp(tmp2[6]).ThreadSortOrder.CREATION_DATE;
        items1[1] = obj9;
        obj7.children = items1.map((label) => {
          value = label.value;
          return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
        });
        const items2 = [c8(tmp(tmp2[17]).TableRadioGroup, obj7), ,];
        let tmp13Result = null;
        if (stateFromStores.isForumChannel()) {
          tmp13Result = null;
          if (!stateFromStores.isGameInvitesChannel()) {
            const obj10 = {
              groupRef: ref1,
              hasIcons: false,
              defaultValue: layoutType,
              onChange: function handleLayoutTypeChange(arg0) {
                _undefined2(arg0);
              },
              title: null,
              accessibilityLabel: null,
              children: null,
            };
            const intl7 = tmp(tmp2[5]).intl;
            obj10.title = intl7.string(tmp(tmp2[5]).t.mFMDSq);
            const intl8 = tmp(tmp2[5]).intl;
            obj10.accessibilityLabel = intl8.string(tmp(tmp2[5]).t.h850Ss);
            const obj11 = { label: null, value: null };
            const intl9 = tmp(tmp2[5]).intl;
            obj11.label = intl9.string(tmp(tmp2[5]).t["NJFr+g"]);
            obj11.value = tmp(tmp2[7]).ForumLayout.LIST;
            const items3 = [obj11];
            const obj12 = { label: null, value: null };
            const intl10 = tmp(tmp2[5]).intl;
            obj12.label = intl10.string(tmp(tmp2[5]).t.wKeggb);
            obj12.value = tmp(tmp2[7]).ForumLayout.GRID;
            items3[1] = obj12;
            obj10.children = items3.map((label) => {
              value = label.value;
              return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
            });
            tmp13Result = tmp13(tmp(tmp2[17]).TableRadioGroup, obj10);
          }
        }
        items2[1] = tmp13Result;
        let tmp13Result2 = null;
        if (tmp12) {
          const obj13 = {
            groupRef: ref2,
            hasIcons: false,
            defaultValue: tagSetting,
            onChange: function handleTagSettingChange(arg0) {
              _undefined3(arg0);
            },
            title: null,
            accessibilityLabel: null,
            children: null,
          };
          const intl11 = tmp(tmp2[5]).intl;
          obj13.title = intl11.string(tmp(tmp2[5]).t.Paxaug);
          const intl12 = tmp(tmp2[5]).intl;
          obj13.accessibilityLabel = intl12.string(tmp(tmp2[5]).t.f8wNDl);
          const obj14 = { label: null, value: null };
          const intl13 = tmp(tmp2[5]).intl;
          obj14.label = intl13.string(tmp(tmp2[5]).t.rQ0ctQ);
          obj14.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_SOME;
          const items4 = [obj14];
          const obj15 = { label: null, value: null };
          const intl14 = tmp(tmp2[5]).intl;
          obj15.label = intl14.string(tmp(tmp2[5]).t.FCXUu0);
          obj15.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_ALL;
          items4[1] = obj15;
          obj13.children = items4.map((label) => {
            value = label.value;
            return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
          });
          tmp13Result2 = tmp13(tmp(tmp2[17]).TableRadioGroup, obj13);
        }
        const obj16 = { children: null };
        items2[2] = tmp13Result2;
        obj6.children = items2;
        obj16.children = c9(tmp(tmp2[19]).Stack, obj6);
        obj2.children = c8(tmp(tmp2[18]).BottomSheetScrollView, obj16);
        return c8(tmp(tmp2[21]).ActionSheet, obj2);
      }
      let obj3 = channelId(sortOrder[13]);
    };
