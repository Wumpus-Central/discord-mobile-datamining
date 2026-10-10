// === Module 17769: SoundboardSoundPickerList ===

// Module 17769 (SoundboardSoundPickerList)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import ClockIcon from "ClockIcon" /* 5051 */;
import Text_Text from "Text/Text" /* 5088 */;
import GuildIcon from "GuildIcon" /* 6158 */;
import FastListDefault from "FastList" /* 6760 */;
import SoundboardTypes from "SoundboardTypes" /* 7048 */;
import TrophyIcon from "TrophyIcon" /* 8925 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9461 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9509 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9510 */;
import chunkDefault from "chunk" /* 9558 */;
import _modDef9762 from "module_9762" /* 9762 */;
import SoundButton from "SoundButton" /* 17770 */;
import _modDef17778 from "module_17778" /* 17778 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

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
function getFastListSectionsFromCategories(categories, fastListSectionsFromCategories, fontScale) {
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr2 = chunkDefault(nextResult.items, fastListSectionsFromCategories);
    let obj = { category: nextResult, height: arr2.length * sum + (18 * fontScale + 8), soundsByRow: arr2 };
    let arr = items.push(obj);
    continue;
  }
  return items;
}
const View = fn(17).View;
const SoundboardStyleConstants = fn(17763);
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: metroRequire, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SoundboardStyleConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let sum = SOUND_BUTTON_HEIGHT + 8;
const createStyles = fn(5092);
let obj = { row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionHeader: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionIcon: { height: 16, width: 16, borderRadius: 8, marginRight: 4 }, soundButtonNotFirst: { marginLeft: SOUND_ROW_SPACING } };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SoundPickerButtonRow(row) {
  const cResult = row(category[11]).c(27);
  row = row.row;
  category = row.section;
  const channel = row.channel;
  const tmp4 = closure_10();
  let soundButtonNotFirst = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isSectionLocked];
    const fn = function c() {
      return soundButtonNotFirst(category[12]).canUseSoundboardEverywhere(isSectionLocked.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = row(category[11]);
  const stateFromStores = row(category[13]).useStateFromStores(tmp5, tmp6);
  if (null == category) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
      if (cResult[3] === channel) {
        if (cResult[4] === category.category) {
          let tmp9 = cResult[5];
        }
        isSectionLocked = tmp9;
        if (cResult[6] !== tmp9) {
          let tmp12 = tmp9;
          if (tmp9) {
            tmp12 = closure_7(tmp(tmp2[15]).PremiumUpsellGradientBackground, {});
          }
          cResult[6] = tmp9;
          cResult[7] = tmp12;
          let tmp11 = tmp12;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === channel) {
          if (cResult[9] === tmp9) {
            if (cResult[10] === row) {
              if (cResult[11] === category.category) {
                if (cResult[12] === soundButtonNotFirst) {
                  if (cResult[13] === tmp4.soundButtonNotFirst) {
                    if (cResult[14] === arr2) {
                      if (cResult[23] === tmp4.row) {
                        if (cResult[24] === tmp11) {
                          if (cResult[25] === tmp14) {
                            let tmp18 = cResult[26];
                          }
                          return tmp18;
                        }
                      }
                      let obj2 = { style: tmp4.row, children: null };
                      const items1 = [tmp11, cResult[15]];
                      obj2.children = items1;
                      const tmp21 = closure_8(soundButtonNotFirst, obj2);
                      cResult[23] = tmp4.row;
                      cResult[24] = tmp11;
                      cResult[25] = cResult[15];
                      cResult[26] = tmp21;
                      tmp18 = tmp21;
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[16] === channel) {
          if (cResult[17] === tmp9) {
            if (cResult[18] === row) {
              if (cResult[19] === category.category) {
                if (cResult[20] === soundButtonNotFirst) {
                  if (cResult[21] === tmp4.soundButtonNotFirst) {
                    let tmp15 = cResult[22];
                  }
                  const mapped = arr2.map(tmp15);
                  cResult[8] = channel;
                  cResult[9] = tmp9;
                  cResult[10] = row;
                  category = category.category;
                  cResult[11] = category;
                  cResult[12] = soundButtonNotFirst;
                  soundButtonNotFirst = tmp4.soundButtonNotFirst;
                  cResult[13] = soundButtonNotFirst;
                  cResult[14] = arr2;
                  cResult[15] = mapped;
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
            const obj2 = { section: soundButtonNotFirst, item: row };
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
        cResult[16] = channel;
        cResult[17] = tmp9;
        cResult[18] = row;
        cResult[19] = category.category;
        cResult[20] = soundButtonNotFirst;
        cResult[21] = tmp4.soundButtonNotFirst;
        cResult[22] = fn2;
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
    tmp9 = result;
  }
  const tmpResult = row(category[13]);
}) : (function SoundPickerButtonRow(row) {
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
    let obj2 = { style: tmp.row, children: null };
    if (result) {
      result = closure_7(tmp2(section[15]).PremiumUpsellGradientBackground, {});
    }
    const items1 = [
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
    obj2.children = items1;
    return closure_8(soundButtonNotFirst, obj2);
  }
  let obj = row(section[13]);
});
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SoundboardSoundPickerListComponent(channel) {
  const cResult = channel(576).c(44);
  channel = channel.channel;
  ({ insetBottom, listRef, scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex } = channel);
  ({ shouldShowPremiumUpsell: View, categories } = channel);
  let num = 0;
  if (undefined !== insetBottom) {
    num = insetBottom;
  }
  const tmp4 = closure_10();
  UserStore = tmp4;
  let obj = channel(576);
  const fontScale = channel(5386).useFontScale();
  if (cResult[0] !== categories) {
    const tmp9 = calculateRowsPerSection(categories, arr);
    cResult[0] = categories;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === categories) {
    if (cResult[3] === fontScale) {
      arr = cResult[4];
    }
    if (cResult[5] !== arr) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function k(height) {
          return height.height;
        };
        cResult[7] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[7];
      }
      const mapped = arr.map(tmp13);
      cResult[5] = arr;
      cResult[6] = mapped;
    } else {
      closure_7 = tmp11;
      if (cResult[8] === channel) {
        if (cResult[9] === arr) {
          let tmp16 = cResult[10];
        }
        if (cResult[11] !== tmp11) {
          function calculateCategory(arg0, arg1) {
            const rounded = Math.round(arg0);
            let num = 0;
            if (0 < closure_7.length) {
              sum = arg1 + tmp2[0];
              let num3 = 0;
              let num4 = 0;
              num = 0;
              if (rounded >= sum) {
                const sum1 = num4 + 1;
                const sum2 = num3 + 1;
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
          cResult[11] = tmp11;
          cResult[12] = calculateCategory;
          let tmp18 = calculateCategory;
        } else {
          tmp18 = cResult[12];
        }
        closure_8 = tmp18;
        if (cResult[13] === tmp18) {
          if (cResult[14] === setCategoryIndex) {
            let tmp19 = cResult[15];
          }
          closure_9 = tmp19;
          const debounceResult = tmp(12).debounce((arg0, arg1) => {
            const bound = Math.min(closure_8(arg0, -arg1 / 2), closure_7.length - 1);
            let result = !closure_11;
            if (!closure_11) {
              result = null != arr[bound];
            }
            if (result) {
              result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, arr[bound].category.categoryInfo);
            }
            const result1 = View.set(result);
          });
          closure_10 = debounceResult;
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [UserStore];
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[16] = items;
            cResult[17] = H;
            let tmp24 = H;
            let tmp23 = items;
          } else {
            tmp23 = cResult[16];
            tmp24 = cResult[17];
          }
          const tmpResult4 = tmp(12);
          calculateRowsPerSection = tmp(504).useStateFromStores(tmp23, tmp24);
          if (cResult[18] !== tmp4.sectionIcon) {
            function getSectionIcon(category) {
              const type = category.category.categoryInfo.type;
              if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
                const obj2 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: category.category.categoryInfo.guild, style: currentUser.sectionIcon };
                return React5(GuildIconDefault, obj2);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
                const obj3 = { source: _modDef17778, style: currentUser.sectionIcon };
                return React5(native.Icon, obj3);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
                const obj4 = { source: _modDef9762, style: currentUser.sectionIcon };
                return React5(native.Icon, obj4);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
                const obj5 = { style: currentUser.sectionIcon };
                return React5(ClockIcon.ClockIcon, obj5);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
                return null;
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
                const obj = { style: currentUser.sectionIcon };
                return React5(TrophyIcon.TrophyIcon, obj);
              }
            }
            cResult[18] = tmp4.sectionIcon;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[19] = getSectionIcon;
            let tmp26 = getSectionIcon;
          } else {
            tmp26 = cResult[19];
          }
          closure_12 = tmp26;
          if (cResult[20] !== arr) {
            function getSectionHeaderSize(arg0) {
              if (null == tmp) {
                let num2 = 0;
              } else {
                num2 = 42;
              }
              return num2;
            }
            cResult[20] = arr;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[21] = getSectionHeaderSize;
            let tmp27 = getSectionHeaderSize;
          } else {
            tmp27 = cResult[21];
          }
          if (cResult[22] !== arr) {
            function getRowHeight(arg0) {
              let num = 0;
              if (null != arr[arg0]) {
                num = sum;
              }
              return num;
            }
            cResult[22] = arr;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[23] = getRowHeight;
            let tmp28 = getRowHeight;
          } else {
            tmp28 = cResult[23];
          }
          function isSectionLocked(arg0) {
            let result = !closure_11;
            if (!closure_11) {
              result = null != arr[arg0];
            }
            if (result) {
              result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, arr[arg0].category.categoryInfo);
            }
            return result;
          }
          if (cResult[24] !== isSectionLocked) {
            function getSectionPosition(arg0) {
              const diff = arg0 - 1;
              let result = !closure_11;
              if (!closure_11) {
                result = null != arr[diff];
              }
              if (result) {
                result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, arr[diff].category.categoryInfo);
              }
              let result1 = !closure_11;
              if (!closure_11) {
                result1 = null != arr[arg0];
              }
              if (result1) {
                result1 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, arr[arg0].category.categoryInfo);
              }
              sum = arg0 + 1;
              let result2 = !closure_11;
              if (!closure_11) {
                result2 = null != arr[sum];
              }
              if (result2) {
                result2 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, arr[sum].category.categoryInfo);
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
            cResult[24] = isSectionLocked;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[25] = getSectionPosition;
            let tmp29 = getSectionPosition;
          } else {
            tmp29 = cResult[25];
          }
          getFastListSectionsFromCategories = tmp29;
          if (cResult[26] !== tmp29) {
            function getSectionFooterSize(arg0) {
              let num = 0;
              if (null != closure_13(arg0)) {
                num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
              }
              return num;
            }
            cResult[26] = tmp29;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[27] = getSectionFooterSize;
            let tmp30 = getSectionFooterSize;
          } else {
            tmp30 = cResult[27];
          }
          if (cResult[28] !== tmp29) {
            function renderSectionFooter(arg0) {
              const tmp = closure_13(arg0);
              let tmp2 = null;
              if (null != tmp) {
                const obj = { position: tmp };
                tmp2 = React5(PremiumUpsellSectionDividerDefault, obj);
              }
              return tmp2;
            }
            cResult[28] = tmp29;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[29] = renderSectionFooter;
            let tmp31 = renderSectionFooter;
          } else {
            tmp31 = cResult[29];
          }
          if (cResult[30] !== debounceResult) {
            function te(nativeEvent) {
              return debounceResult(0, nativeEvent.nativeEvent.layout.height);
            }
            cResult[30] = debounceResult;
            class H {
              constructor() {
                obj = scrollPosition(onScroll[12]);
                return obj.canUseSoundboardEverywhere(closure_5.getCurrentUser());
              }
            }
            cResult[31] = te;
            let tmp32 = te;
          } else {
            tmp32 = cResult[31];
          }
          function handleScroll(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            const y = nativeEvent.contentOffset.y;
            closure_9(y);
            debounceResult(y, nativeEvent.layoutMeasurement.height);
            if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y < nativeEvent.contentSize.height - 20) {
              if (null != importDefault) {
                const result = importDefault.set(y);
              }
              if (dependencyMap != null) {
                dependencyMap(nativeEvent);
              }
            }
          }
          function renderSectionHeader(arg0) {
            let result = !closure_11;
            if (!closure_11) {
              result = null != arr[arg0];
            }
            if (result) {
              result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(channel.guild_id, arr[arg0].category.categoryInfo);
            }
            const obj2 = { style: currentUser.sectionHeader, children: null };
            if (result) {
              result = React5(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
            }
            const obj3 = { children: null };
            const items = [result, closure_12(arr[arg0]), React5(Text_Text.Text, { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionLabel(arr[arg0]) })];
            obj2.children = items;
            obj3.children = closure_2_8(View, obj2);
            return React5(View, obj3, arr[arg0].category.key);
          }
          if (cResult[32] === tmp28) {
            if (cResult[33] === tmp30) {
              if (cResult[34] === tmp27) {
                if (cResult[35] === handleScroll) {
                  if (cResult[36] === num) {
                    if (cResult[37] === listRef) {
                      if (cResult[38] === tmp16) {
                        if (cResult[39] === tmp31) {
                          if (cResult[40] === renderSectionHeader) {
                            if (cResult[41] === tmp6) {
                              if (cResult[42] === tmp32) {
                                let tmp33 = cResult[43];
                              }
                              return tmp33;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let obj2 = { onLayout: tmp32, sections: tmp6, sectionSize: tmp27, itemSize: tmp28, sectionFooterSize: tmp30, ref: listRef, renderItem: tmp16, renderSection: renderSectionHeader, renderSectionFooter: tmp31, insetEnd: num, onScroll: handleScroll, keyboardShouldPersistTaps: "handled", optimizeListItemRender: true, inActionSheet: true };
          const tmp36 = closure_7(FastListDefault, obj2);
          cResult[32] = tmp28;
          cResult[33] = tmp30;
          cResult[34] = tmp27;
          cResult[35] = handleScroll;
          cResult[36] = num;
          cResult[37] = listRef;
          cResult[38] = tmp16;
          cResult[39] = tmp31;
          cResult[40] = renderSectionHeader;
          cResult[41] = tmp6;
          cResult[42] = tmp32;
          cResult[43] = tmp36;
          tmp33 = tmp36;
          const tmpResult5 = tmp(504);
        }
        const debounceResult1 = tmp(12).debounce((arg0) => {
          setCategoryIndex(closure_8(arg0, 0));
        });
        cResult[13] = tmp18;
        cResult[14] = setCategoryIndex;
        cResult[15] = debounceResult1;
        tmp19 = debounceResult1;
        const tmpResult6 = tmp(12);
      }
      cResult[8] = channel;
      cResult[9] = arr;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    }
  }
  const tmp10 = getFastListSectionsFromCategories(categories, arr, fontScale);
  cResult[2] = categories;
  cResult[3] = fontScale;
  cResult[4] = tmp10;
  arr = tmp10;
  const tmpResult = channel(5386);
}) : (function SoundboardSoundPickerListComponent(channel) {
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
  const fontScale = channel(5386).useFontScale();
  let obj = channel(5386);
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
    sectionSize: function getSectionHeaderSize(arg0) {
      if (null == tmp) {
        let num2 = 0;
      } else {
        num2 = 42;
      }
      return num2;
    },
    itemSize: function getRowHeight(arg0) {
      let num = 0;
      if (null != closure_6[arg0]) {
        num = sum;
      }
      return num;
    },
    sectionFooterSize: function getSectionFooterSize(arg0) {
      let num = 0;
      if (null != getSectionPosition(arg0)) {
        num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
      }
      return num;
    },
    ref: channel.listRef,
    renderItem: callback,
    renderSection: function renderSectionHeader(arg0) {
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
        const obj4 = { source: _modDef17778, style: currentUser.sectionIcon };
        tmp8Result = React5(native.Icon, obj4);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj5 = { source: _modDef9762, style: currentUser.sectionIcon };
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
    renderSectionFooter(arg0) {
      const tmp = getSectionPosition(arg0);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: tmp };
        tmp2 = React5(PremiumUpsellSectionDividerDefault, obj);
      }
      return tmp2;
    },
    insetEnd: num,
    onScroll: function handleScroll(nativeEvent) {
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