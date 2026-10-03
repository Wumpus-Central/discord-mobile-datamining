// === Module 17211: SoundboardSoundPickerList ===

// Module 17211 (SoundboardSoundPickerList)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import ClockIcon from "ClockIcon" /* 4849 */;
import Text_Text from "Text/Text" /* 4886 */;
import SoundboardTypes from "SoundboardTypes" /* 5805 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import FastListDefault from "FastList" /* 6569 */;
import TrophyIcon from "TrophyIcon" /* 8364 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9644 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9908 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9909 */;
import chunkDefault from "chunk" /* 9951 */;
import _modDef10116 from "module_10116" /* 10116 */;
import SoundButton from "SoundButton" /* 17212 */;
import _modDef17220 from "module_17220" /* 17220 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const GuildIconDefault = GuildIcon;
const PremiumUpsellSectionDividerDefault = PremiumUpsellSectionDivider;

require = fn;
function calculateRowsPerSection(categories, arr) {
  const items = [];
  const iter = categories[Symbol.iterator]();
  while (iter !== undefined) {
    let _Math = Math;
    arr = items.push(Math.ceil(iter.next().items.length / arr));
    continue;
  }
  return items;
}
function getSectionLabel(arr) {
  const type = arr.category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    return arr.category.categoryInfo.guild.name;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl4 = util.intl;
    return intl4.string(util.t.Rtvk9X);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = util.intl;
    return intl3.string(util.t.y3LQCG);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = util.intl;
    return intl2.string(util.t["+cGVV6"]);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
    const intl = util.intl;
    const obj = { guildName: arr.category.categoryInfo.guild.name };
    return intl.formatToPlainString(util.t.GXs41w, obj);
  }
}
function getFastListSectionsFromCategories(categories, arr, fontScale) {
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr2 = chunkDefault(nextResult.items, arr);
    let obj = { category: nextResult, height: arr2.length * sum + (18 * fontScale + 8), soundsByRow: arr2 };
    arr = items.push(obj);
    continue;
  }
  return items;
}
const View = fn(17).View;
const SoundboardStyleConstants = fn(17205);
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: metroRequire, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SoundboardStyleConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let sum = SOUND_BUTTON_HEIGHT + 8;
const createStyles = fn(4890);
let obj = { row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionHeader: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionIcon: { height: 16, width: 16, borderRadius: 8, marginRight: 4 }, soundButtonNotFirst: { marginLeft: SOUND_ROW_SPACING } };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((row) => {
  const cResult = row(category[11]).c(29);
  row = row.row;
  const sectionIndex = row.sectionIndex;
  category = row.section;
  const channel = row.channel;
  let soundButtonNotFirst = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isSectionLocked];
    const fn = function c() {
      return sectionIndex(category[12]).canUseSoundboardEverywhere(isSectionLocked.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = row(category[11]);
  const stateFromStores = row(category[13]).useStateFromStores(tmp4, tmp5);
  if (null == category) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
      if (cResult[3] === channel) {
        if (cResult[4] === category.category) {
          let tmp8 = cResult[5];
        }
        isSectionLocked = tmp8;
        if (cResult[6] !== soundButtonNotFirst.row) {
          const items1 = [soundButtonNotFirst.row];
          cResult[6] = soundButtonNotFirst.row;
          cResult[7] = items1;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== tmp8) {
          let tmp12 = tmp8;
          if (tmp8) {
            tmp12 = closure_7(tmp(tmp2[15]).PremiumUpsellGradientBackground, {});
          }
          cResult[8] = tmp8;
          cResult[9] = tmp12;
          let tmp11 = tmp12;
        } else {
          tmp11 = cResult[9];
        }
        if (cResult[10] === channel) {
          if (cResult[11] === tmp8) {
            if (cResult[12] === row) {
              if (cResult[13] === category.category) {
                if (cResult[14] === sectionIndex) {
                  if (cResult[15] === soundButtonNotFirst.soundButtonNotFirst) {
                    if (cResult[16] === arr3) {
                      if (cResult[25] === tmp10) {
                        if (cResult[26] === tmp11) {
                          if (cResult[27] === tmp14) {
                            let tmp18 = cResult[28];
                          }
                          return tmp18;
                        }
                      }
                      let obj2 = { style: tmp10, children: null };
                      const items2 = [tmp11, cResult[17]];
                      obj2.children = items2;
                      const tmp21 = closure_8(soundButtonNotFirst, obj2);
                      cResult[25] = tmp10;
                      cResult[26] = tmp11;
                      cResult[27] = cResult[17];
                      cResult[28] = tmp21;
                      tmp18 = tmp21;
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[18] === channel) {
          if (cResult[19] === tmp8) {
            if (cResult[20] === row) {
              if (cResult[21] === category.category) {
                if (cResult[22] === sectionIndex) {
                  if (cResult[23] === soundButtonNotFirst.soundButtonNotFirst) {
                    let tmp15 = cResult[24];
                  }
                  const mapped = arr3.map(tmp15);
                  cResult[10] = channel;
                  cResult[11] = tmp8;
                  cResult[12] = row;
                  category = category.category;
                  cResult[13] = category;
                  cResult[14] = sectionIndex;
                  soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
                  cResult[15] = soundButtonNotFirst;
                  cResult[16] = arr3;
                  cResult[17] = mapped;
                }
              }
            }
          }
        }
        const fn2 = function _(type, arg1) {
          type = type.type;
          if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
            const sound = type.sound;
            const obj = { sound, channel, soundGridLocation: null, style: null, isSectionLocked: null };
            const obj2 = { section: sectionIndex, item: row };
            obj.soundGridLocation = obj2;
            soundButtonNotFirst = null;
            if (arg1 > 0) {
              soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
            }
            obj.style = soundButtonNotFirst;
            obj.isSectionLocked = isSectionLocked;
            const _HermesInternal = HermesInternal;
            return React5(SoundButton.SoundButton, obj, "" + category.category.key + "-" + sound.soundId);
          } else if (SoundboardTypes.SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            const error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        };
        cResult[18] = channel;
        cResult[19] = tmp8;
        cResult[20] = row;
        cResult[21] = category.category;
        cResult[22] = sectionIndex;
        cResult[23] = soundButtonNotFirst.soundButtonNotFirst;
        cResult[24] = fn2;
        tmp15 = fn2;
      }
    }
    let result = !stateFromStores;
    if (!stateFromStores) {
      result = tmp(tmp2[14]).isSoundboardSectionNitroLocked(channel.guild_id, category.category.categoryInfo);
      const tmpResult2 = tmp(tmp2[14]);
    }
    cResult[2] = stateFromStores;
    cResult[3] = channel;
    cResult[4] = category.category;
    cResult[5] = result;
    tmp8 = result;
  }
  const tmpResult = row(category[13]);
}) : ((row) => {
  row = row.row;
  ({ sectionIndex: importDefault, section } = row);
  const channel = row.channel;
  c5 = undefined;
  const tmp = closure_10();
  let soundButtonNotFirst = tmp;
  const items = [c5];
  const stateFromStores = row(section[13]).useStateFromStores(items, () => section(section[12]).canUseSoundboardEverywhere(isSectionLocked.getCurrentUser()));
  if (null == section) {
    return null;
  } else {
    let result = !stateFromStores;
    if (!stateFromStores) {
      result = tmp2(section[14]).isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
      const tmp2Result = tmp2(section[14]);
    }
    c5 = result;
    let obj2 = { style: null, children: null };
    const items1 = [tmp.row];
    obj2.style = items1;
    if (result) {
      result = closure_7(tmp2(section[15]).PremiumUpsellGradientBackground, {});
    }
    const items2 = [
      result,
      section.soundsByRow[row].map((type, index) => {
          type = type.type;
          if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
            const sound = type.sound;
            const obj = { sound, channel, soundGridLocation: null, style: null, isSectionLocked: null };
            const obj2 = { section, item: row };
            obj.soundGridLocation = obj2;
            soundButtonNotFirst = null;
            if (index > 0) {
              soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
            }
            obj.style = soundButtonNotFirst;
            obj.isSectionLocked = isSectionLocked;
            const _HermesInternal = HermesInternal;
            return React5(SoundButton.SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
          } else if (SoundboardTypes.SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            const error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        })
    ];
    obj2.children = items2;
    return closure_8(soundButtonNotFirst, obj2);
  }
  let obj = row(section[13]);
});
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(44);
  channel = channel.channel;
  ({ insetBottom, listRef, scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex } = channel);
  ({ shouldShowPremiumUpsell: View, categories } = channel);
  let obj = channel(576);
  const currentUser = closure_10();
  const tmp5 = closure_10();
  const fontScale = channel(5602).useFontScale();
  if (cResult[0] !== categories) {
    const tmp10 = calculateRowsPerSection(categories, arr);
    cResult[0] = categories;
    cResult[1] = tmp10;
  }
  if (cResult[2] === categories) {
    if (cResult[3] === fontScale) {
      arr = cResult[4];
    }
    if (cResult[5] !== arr) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(arg0) {
            return channel.height;
          }
        }
        cResult[7] = G;
      } else {
        class G {
          constructor(arg0) {
            return channel.height;
          }
        }
      }
      const mapped = arr.map(G);
      cResult[5] = arr;
      cResult[6] = mapped;
    } else {
      class G {
        constructor(arg0) {
          return channel.height;
        }
      }
      if (cResult[8] === channel) {
        class G {
          constructor(arg0) {
            return channel.height;
          }
        }
        if (cResult[11] !== tmp12) {
          class C {
            constructor(arg0, arg1) {
              rounded = Math.round(channel);
              num = 0;
              if (0 < closure_7.length) {
                tmp3 = arg1;
                sum = arg1 + tmp2[0];
                num2 = 1;
                num3 = 0;
                num4 = 0;
                num = 0;
                if (rounded >= sum) {
                  sum1 = num4 + 1;
                  sum2 = num3 + 1;
                  tmp7 = sum;
                  num = sum1;
                  while (sum2 < closure_7.length) {
                    sum = sum + closure_7[sum2];
                    num3 = sum2;
                    num4 = sum1;
                    num = sum1;
                    if (rounded < sum) {
                      break;
                    }
                  }
                }
              }
              return num;
            }
          }
          cResult[11] = tmp12;
          class O {
            constructor(arg0, arg1) {
              obj = { row: arg1, sectionIndex: channel, section: closure_6[channel], channel };
              return jsx(f76594, obj);
            }
          }
          cResult[12] = C;
        } else {
          class C {
            constructor(arg0, arg1) {
              rounded = Math.round(channel);
              num = 0;
              if (0 < closure_7.length) {
                tmp3 = arg1;
                sum = arg1 + tmp2[0];
                num2 = 1;
                num3 = 0;
                num4 = 0;
                num = 0;
                if (rounded >= sum) {
                  sum1 = num4 + 1;
                  sum2 = num3 + 1;
                  tmp7 = sum;
                  num = sum1;
                  while (sum2 < closure_7.length) {
                    sum = sum + closure_7[sum2];
                    num3 = sum2;
                    num4 = sum1;
                    num = sum1;
                    if (rounded < sum) {
                      break;
                    }
                  }
                }
              }
              return num;
            }
          }
        }
        C = tmp18;
        class O {
          constructor(arg0, arg1) {
            obj = { row: arg1, sectionIndex: channel, section: closure_6[channel], channel };
            return jsx(f76594, obj);
          }
        }
        const debounceResult = tmp(12).debounce((arg0) => {
          setCategoryIndex(C(arg0, 0));
        });
        cResult[13] = tmp18;
        cResult[14] = setCategoryIndex;
        cResult[15] = debounceResult;
        const tmpResult2 = tmp(12);
      }
      class O {
        constructor(arg0, arg1) {
          obj = { row: arg1, sectionIndex: channel, section: closure_6[channel], channel };
          return jsx(f76594, obj);
        }
      }
      cResult[8] = channel;
      cResult[9] = arr;
      cResult[10] = O;
    }
  }
  const tmp11 = getFastListSectionsFromCategories(categories, arr, fontScale);
  cResult[2] = categories;
  cResult[3] = fontScale;
  cResult[4] = tmp11;
  arr = tmp11;
  const tmpResult = channel(5602);
}) : ((channel) => {
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: noop, shouldShowPremiumUpsell: View, categories } = channel);
  closure_6 = undefined;
  closure_10 = undefined;
  function getSectionPosition(categories) {
    const diff = categories - 1;
    let result = !closure_10;
    if (!closure_10) {
      result = null != closure_6[diff];
    }
    if (result) {
      result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
    }
    let result1 = !closure_10;
    if (!closure_10) {
      result1 = null != closure_6[categories];
    }
    if (result1) {
      result1 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[categories].category.categoryInfo);
    }
    sum = categories + 1;
    let result2 = !closure_10;
    if (!closure_10) {
      result2 = null != closure_6[sum];
    }
    if (result2) {
      result2 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[sum].category.categoryInfo);
    }
    if (!result1) {
      if (result2) {
        if (!result) {
          let START = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START;
        }
        return START;
      }
    }
    let END = null;
    if (result1) {
      END = null;
      if (!result2) {
        END = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.END;
      }
    }
    START = END;
  }
  const currentUser = closure_10();
  const fontScale = channel(5602).useFontScale();
  let obj = channel(5602);
  const tmp3 = getFastListSectionsFromCategories(categories, closure_6, fontScale);
  closure_6 = tmp3;
  let items = [tmp3];
  closure_7 = noop.useMemo(() => closure_6.map((height) => height.height), items);
  const items1 = [tmp3, channel];
  const callback = noop.useCallback((sectionIndex, row) => React5(closure_14, { row, sectionIndex, section: closure_6[sectionIndex], channel }), items1);
  let tmp2 = getSectionPosition(categories, closure_6);
  closure_8 = channel(12).debounce((arg0) => {
    const rounded = Math.round(arg0);
    let num = 0;
    if (0 < closure_7.length) {
      let first = closure_7[0];
      let num3 = 0;
      let num4 = 0;
      num = 0;
      if (rounded >= first) {
        sum = num4 + 1;
        const sum1 = num3 + 1;
        num = sum;
        while (sum1 < closure_7.length) {
          first = first + closure_7[sum1];
          num3 = sum1;
          num4 = sum;
          num = sum;
          if (rounded < first) {
            break;
          }
        }
      }
    }
    noop(num);
  });
  let obj2 = channel(12);
  closure_9 = channel(12).debounce((arg0, arg1) => {
    const result = -arg1 / 2;
    const rounded = Math.round(arg0);
    let arr = closure_7;
    let num = 0;
    if (0 < closure_7.length) {
      sum = result + closure_7[0];
      let num3 = 0;
      let num4 = 0;
      arr = closure_7;
      num = 0;
      if (rounded >= sum) {
        const sum1 = num4 + 1;
        const sum2 = num3 + 1;
        arr = closure_7;
        num = sum1;
        while (sum2 < closure_7.length) {
          sum = sum + closure_7[sum2];
          num3 = sum2;
          num4 = sum1;
          arr = closure_7;
          num = sum1;
          if (rounded < sum) {
            break;
          }
        }
      }
    }
    const bound = Math.min(num, arr.length - 1);
    let result1 = !closure_10;
    if (!closure_10) {
      result1 = null != closure_6[bound];
    }
    if (result1) {
      result1 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[bound].category.categoryInfo);
    }
    const result2 = View.set(result1);
  });
  let obj3 = channel(12);
  const items2 = [currentUser];
  closure_10 = channel(504).useStateFromStores(items2, () => PremiumUtilsDefault.canUseSoundboardEverywhere(currentUser.getCurrentUser()));
  return closure_7(FastListDefault, {
    onLayout(nativeEvent) {
      return closure_9(0, nativeEvent.nativeEvent.layout.height);
    },
    sections: tmp2,
    sectionSize(arg0) {
      if (null == tmp) {
        let num2 = 0;
      } else {
        num2 = 42;
      }
      return num2;
    },
    itemSize(arg0) {
      let num = 0;
      if (null != closure_6[arg0]) {
        num = sum;
      }
      return num;
    },
    sectionFooterSize(categories) {
      let num = 0;
      if (null != getSectionPosition(categories)) {
        num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
      }
      return num;
    },
    ref: channel.listRef,
    renderItem: callback,
    renderSection(arg0) {
      let result = !closure_10;
      if (!closure_10) {
        result = null != closure_6[arg0];
      }
      if (result) {
        result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
      }
      const obj2 = { style: currentUser.sectionHeader, children: null };
      if (result) {
        result = React5(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
      }
      const items = [result, , ];
      const type = tmp2.category.categoryInfo.type;
      if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
        const obj3 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: tmp2.category.categoryInfo.guild, style: currentUser.sectionIcon };
        let tmp8Result = React5(GuildIconDefault, obj3);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
        const obj4 = { source: _modDef17220, style: currentUser.sectionIcon };
        tmp8Result = React5(native.Icon, obj4);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj5 = { source: _modDef10116, style: currentUser.sectionIcon };
        tmp8Result = React5(native.Icon, obj5);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const obj6 = { style: currentUser.sectionIcon };
        tmp8Result = React5(ClockIcon.ClockIcon, obj6);
      } else {
        tmp8Result = null;
        if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH !== type) {
          if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
            const obj7 = { style: currentUser.sectionIcon };
            tmp8Result = React5(TrophyIcon.TrophyIcon, obj7);
          }
        }
      }
      const obj8 = { children: null };
      items[1] = tmp8Result;
      items[2] = React5(Text_Text.Text, { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionLabel(closure_6[arg0]) });
      obj2.children = items;
      obj8.children = closure_2_8(View, obj2);
      return React5(View, obj8, closure_6[arg0].category.key);
    },
    renderSectionFooter(categories) {
      const tmp = getSectionPosition(categories);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: tmp };
        tmp2 = React5(PremiumUpsellSectionDividerDefault, obj);
      }
      return tmp2;
    },
    insetEnd: num,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const y = nativeEvent.contentOffset.y;
      closure_8(y);
      closure_9(y, nativeEvent.layoutMeasurement.height);
      if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y < nativeEvent.contentSize.height - 20) {
        if (null != importDefault) {
          const result = importDefault.set(y);
        }
        if (dependencyMap != null) {
          dependencyMap(nativeEvent);
        }
      }
    },
    keyboardShouldPersistTaps: "handled",
    optimizeListItemRender: true,
    inActionSheet: true
  });
}));