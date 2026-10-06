// === Module 17264: SoundboardSoundPickerList ===

// Module 17264 (SoundboardSoundPickerList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import Text_Text from "Text/Text" /* 4892 */;
import SoundboardTypes from "SoundboardTypes" /* 5812 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import FastListDefault from "FastList" /* 6576 */;
import TrophyIcon from "TrophyIcon" /* 8397 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9657 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9921 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9922 */;
import chunkDefault from "chunk" /* 9964 */;
import AssetRegistryDefault from "AssetRegistry" /* 10129 */;
import SoundButton2 from "SoundButton" /* 17265 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17273 */;
import react from "react" /* 19 */;
import UserStore_mod from "UserStore" /* 1377 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 17258 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const PremiumUpsellSectionDividerDefault = PremiumUpsellSectionDivider;

let SOUND_BUTTON_HEIGHT;
let SOUND_ROW_HORIZONTAL_PADDING;
let SOUND_ROW_SPACING;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function calculateRowsPerSection(categories, fastListSectionsFromCategories) {
  const items = [];
  const iter = categories[Symbol.iterator]();
  while (iter !== undefined) {
    let _Math = Math;
    let arr = items.push(Math.ceil(iter.next().items.length / fastListSectionsFromCategories));
    continue;
  }
  return items;
}
function getSectionLabel(category) {
  const type = category.category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl4 = intl5.intl;
    return intl4.string(intl5.t.Rtvk9X);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = intl5.intl;
    return intl3.string(intl5.t.y3LQCG);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t["+cGVV6"]);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
    const intl = intl5.intl;
    const obj = { guildName: category.category.categoryInfo.guild.name };
    return intl.formatToPlainString(intl5.t.GXs41w, obj);
  }
}
function getFastListSectionsFromCategories(categories, fastListSectionsFromCategories, fontScale) {
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr2 = chunkDefault(nextResult.items, fastListSectionsFromCategories);
    let obj = { category: nextResult, height: arr2.length * c9 + (18 * fontScale + 8), soundsByRow: arr2 };
    let arr = items.push(obj);
    continue;
  }
  return items;
}
let View = react_native.View;
let UserStore = UserStore_mod;
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: metroRequire, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SoundboardStyleConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let sum = SOUND_BUTTON_HEIGHT + 8;
let c9 = sum;
let obj = { row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionHeader: obj2, sectionIcon: { height: 16, width: 16, borderRadius: 8, marginRight: 4 }, soundButtonNotFirst: { marginLeft: SOUND_ROW_SPACING } };
obj2 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((row) => {
  let isSectionLocked;
  let items2;
  let section;
  let tmp5;
  let tmp6;
  let obj = row(section[11]);
  const cResult = obj.c(29);
  row = row.row;
  const sectionIndex = row.sectionIndex;
  section = row.section;
  const channel = row.channel;
  const tmp4 = closure_10();
  let soundButtonNotFirst = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isSectionLocked];
    const fn = function c() {
      const obj = sectionIndex(section[12]);
      return obj.canUseSoundboardEverywhere(isSectionLocked.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = row(section[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (null == section) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
      if (cResult[3] === channel) {
        let tmp9;
        let tmp11;
        let tmp12;
        let tmp15;
        if (cResult[4] === section.category) {
          tmp9 = cResult[5];
        }
        isSectionLocked = tmp9;
        if (cResult[6] !== tmp4.row) {
          const items1 = [tmp4.row];
          cResult[6] = tmp4.row;
          cResult[7] = items1;
          tmp11 = items1;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] !== tmp9) {
          const tmp13 = tmp9 && closure_7(tmp(tmp2[15]).PremiumUpsellGradientBackground, {});
          cResult[8] = tmp9;
          cResult[9] = tmp13;
          tmp12 = tmp13;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === channel) {
          if (cResult[11] === tmp9) {
            if (cResult[12] === row) {
              if (cResult[13] === section.category) {
                if (cResult[14] === sectionIndex) {
                  if (cResult[15] === tmp4.soundButtonNotFirst) {
                    if (cResult[16] === section.soundsByRow[row]) {
                      tmp15 = cResult[17];
                    }
                    if (cResult[25] === tmp11) {
                      if (cResult[26] === tmp12) {
                        let tmp18;
                        if (cResult[27] === tmp15) {
                          tmp18 = cResult[28];
                        }
                        return tmp18;
                      }
                    }
                    let obj2 = { style: tmp11, children: items2 };
                    items2 = [tmp12, tmp15];
                    const tmp21 = closure_8(soundButtonNotFirst, obj2);
                    cResult[25] = tmp11;
                    cResult[26] = tmp12;
                    cResult[27] = tmp15;
                    cResult[28] = tmp21;
                    tmp18 = tmp21;
                  }
                }
              }
            }
          }
        }
        if (cResult[18] === channel) {
          if (cResult[19] === tmp9) {
            if (cResult[20] === row) {
              if (cResult[21] === section.category) {
                if (cResult[22] === sectionIndex) {
                  let tmp16;
                  if (cResult[23] === tmp4.soundButtonNotFirst) {
                    tmp16 = cResult[24];
                  }
                  const mapped = arr3.map(tmp16);
                  cResult[10] = channel;
                  cResult[11] = tmp9;
                  cResult[12] = row;
                  cResult[13] = section.category;
                  cResult[14] = sectionIndex;
                  cResult[15] = tmp4.soundButtonNotFirst;
                  cResult[16] = section.soundsByRow[row];
                  cResult[17] = mapped;
                  tmp15 = mapped;
                }
              }
            }
          }
        }
        const fn2 = function _(type, arg1) {
          let obj2;
          type = type.type;
          if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
            const sound = type.sound;
            const obj = { sound, channel, soundGridLocation: obj2, style: soundButtonNotFirst, isSectionLocked };
            soundButtonNotFirst = null;
            obj2 = { section: sectionIndex, item: row };
            const SoundButton = SoundButton2.SoundButton;
            if (arg1 > 0) {
              soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
            }
            const _HermesInternal = HermesInternal;
            return metroImportDefault(SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
          } else if (SoundboardTypes.SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        };
        cResult[18] = channel;
        cResult[19] = tmp9;
        cResult[20] = row;
        cResult[21] = section.category;
        cResult[22] = sectionIndex;
        cResult[23] = tmp4.soundButtonNotFirst;
        cResult[24] = fn2;
        tmp16 = fn2;
      }
    }
    let result = !stateFromStores;
    if (result) {
      const tmpResult2 = row(section[14]);
      result = tmpResult2.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    cResult[2] = stateFromStores;
    cResult[3] = channel;
    cResult[4] = section.category;
    cResult[5] = result;
    tmp9 = result;
  }
}) : ((row) => {
  let isSectionLocked;
  let items1;
  let items2;
  let section;
  row = row.row;
  ({ sectionIndex: importDefault, section } = row);
  const channel = row.channel;
  let c5;
  const tmp = closure_10();
  let soundButtonNotFirst = tmp;
  let obj = row(section[13]);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = require("PremiumUtils");
    return obj.canUseSoundboardEverywhere(isSectionLocked.getCurrentUser());
  });
  if (null == section) {
    return null;
  } else {
    let result = !stateFromStores;
    if (result) {
      const tmp2Result = row(section[14]);
      result = tmp2Result.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    c5 = result;
    let obj2 = { style: items1, children: items2 };
    items1 = [tmp.row];
    const tmp7 = soundButtonNotFirst;
    if (result) {
      result = closure_7(tmp2(section[15]).PremiumUpsellGradientBackground, {});
    }
    items2 = [result, ];
    const arr4 = section.soundsByRow[row];
    items2[1] = arr4.map(function(type, index) {
      let obj2;
      type = type.type;
      if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
        const sound = type.sound;
        const obj = { sound, channel, soundGridLocation: obj2, style: soundButtonNotFirst, isSectionLocked };
        soundButtonNotFirst = null;
        obj2 = { section: importDefault, item: row };
        const SoundButton = SoundButton2.SoundButton;
        if (index > 0) {
          soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
        }
        const _HermesInternal = HermesInternal;
        return metroImportDefault(SoundButton, obj, "" + importDefault.category.key + "-" + sound.soundId);
      } else if (SoundboardTypes.SoundboardSoundItemType.ADD_SOUND === type) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("ADD_SOUND Not implemented");
        throw error;
      }
    });
    return closure_8(tmp7, obj2);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let categories;
  let closure_11;
  let closure_13;
  let closure_7;
  let closure_8;
  let closure_9;
  let currentUser;
  let debounceResult;
  let insetBottom;
  let listRef;
  let setCategoryIndex;
  let tmp15;
  let tmp6;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(44);
  channel = channel.channel;
  ({ insetBottom, listRef, scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex } = channel);
  ({ shouldShowPremiumUpsell: View, categories } = channel);
  let num = 0;
  if (undefined !== insetBottom) {
    num = insetBottom;
  }
  const tmp4 = debounceResult();
  UserStore = tmp4;
  const tmpResult = tmp(5609);
  const fontScale = tmpResult.useFontScale();
  if (cResult[0] !== categories) {
    const tmp9 = calculateRowsPerSection(categories, closure_6);
    cResult[0] = categories;
    let num2 = 1;
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === categories) {
    let tmp10;
    if (cResult[3] === fontScale) {
      tmp10 = cResult[4];
    }
    closure_6 = tmp10;
    if (cResult[5] !== tmp10) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(height) {
            return height.height;
          }
        }
        let num3 = 7;
        cResult[7] = G;
      } else {
        class G {
          constructor(height) {
            return height.height;
          }
        }
      }
      class O {
        constructor(sectionIndex, row) {
          const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
          return metroImportDefault(closure_14, obj);
        }
      }
      let num4 = 5;
      cResult[5] = tmp10;
      cResult[6] = tmp15;
    } else {
      class G {
        constructor(height) {
          return height.height;
        }
      }
    }
    tmp15 = tmp12;
    if (cResult[8] === channel) {
      class G {
        constructor(height) {
          return height.height;
        }
      }
      if (cResult[11] !== tmp12) {
        class C {
          constructor(arg0, arg1) {
            const rounded = Math.round(arg0);
            let num = 0;
            if (0 < tmp15.length) {
              sum = arg1 + tmp2[0];
              let num3 = 0;
              let num4 = 0;
              num = 0;
              if (rounded >= sum) {
                const sum1 = num4 + 1;
                const sum2 = num3 + 1;
                num = sum1;
                while (sum2 < tmp15.length) {
                  sum = sum + tmp15[sum2];
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
        cResult[12] = C;
        class O {
          constructor(sectionIndex, row) {
            const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
            return metroImportDefault(closure_14, obj);
          }
        }
      } else {
        class C {
          constructor(arg0, arg1) {
            const rounded = Math.round(arg0);
            let num = 0;
            if (0 < tmp15.length) {
              sum = arg1 + tmp2[0];
              let num3 = 0;
              let num4 = 0;
              num = 0;
              if (rounded >= sum) {
                const sum1 = num4 + 1;
                const sum2 = num3 + 1;
                num = sum1;
                while (sum2 < tmp15.length) {
                  sum = sum + tmp15[sum2];
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
      if (cResult[13] === tmp17) {
        let tmp23;
        let tmp22;
        class C {
          constructor(arg0, arg1) {
            const rounded = Math.round(arg0);
            let num = 0;
            if (0 < tmp15.length) {
              sum = arg1 + tmp2[0];
              let num3 = 0;
              let num4 = 0;
              num = 0;
              if (rounded >= sum) {
                const sum1 = num4 + 1;
                const sum2 = num3 + 1;
                num = sum1;
                while (sum2 < tmp15.length) {
                  sum = sum + tmp15[sum2];
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
        const tmpResult4 = tmp(12);
        debounceResult = tmpResult4.debounce((arg0, arg1) => {
          View = View.set;
          const bound = Math.min(tmp17(arg0, -arg1 / 2), tmp15.length - 1);
          let result = !closure_11 && null != closure_6[bound];
          if (result) {
            const obj = PremiumFeatureUpsellUtils;
            result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[bound].category.categoryInfo);
          }
          const result1 = View(result);
        });
        class O {
          constructor(sectionIndex, row) {
            const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
            return metroImportDefault(closure_14, obj);
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0, arg1) {
              const rounded = Math.round(arg0);
              let num = 0;
              if (0 < tmp15.length) {
                sum = arg1 + tmp2[0];
                let num3 = 0;
                let num4 = 0;
                num = 0;
                if (rounded >= sum) {
                  const sum1 = num4 + 1;
                  const sum2 = num3 + 1;
                  num = sum1;
                  while (sum2 < tmp15.length) {
                    sum = sum + tmp15[sum2];
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
          let items = [UserStore];
          const fn = function x() {
            const obj = PremiumUtilsDefault;
            return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
          };
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
          cResult[17] = fn;
          tmp23 = fn;
          tmp22 = items;
        } else {
          class C {
            constructor(arg0, arg1) {
              const rounded = Math.round(arg0);
              let num = 0;
              if (0 < tmp15.length) {
                sum = arg1 + tmp2[0];
                let num3 = 0;
                let num4 = 0;
                num = 0;
                if (rounded >= sum) {
                  const sum1 = num4 + 1;
                  const sum2 = num3 + 1;
                  num = sum1;
                  while (sum2 < tmp15.length) {
                    sum = sum + tmp15[sum2];
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
          tmp23 = cResult[17];
        }
        const tmpResult5 = tmp(504);
        calculateRowsPerSection = tmpResult5.useStateFromStores(tmp22, tmp23);
        if (cResult[18] !== tmp4.sectionIcon) {
          class V {
            constructor(category) {
              const type = category.category.categoryInfo.type;
              if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
                const obj2 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: category.category.categoryInfo.guild, style: currentUser.sectionIcon };
                const tmp16 = GuildIconDefault;
                return metroImportDefault(tmp16, obj2);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
                const obj3 = { source: AssetRegistryDefault2, style: currentUser.sectionIcon };
                const Icon2 = native.Icon;
                return metroImportDefault(Icon2, obj3);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
                const obj4 = { source: AssetRegistryDefault, style: currentUser.sectionIcon };
                const Icon = native.Icon;
                return metroImportDefault(Icon, obj4);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
                const obj5 = { style: currentUser.sectionIcon };
                return metroImportDefault(ClockIcon.ClockIcon, obj5);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
                return null;
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
                const obj = { style: currentUser.sectionIcon };
                return metroImportDefault(TrophyIcon.TrophyIcon, obj);
              }
            }
          }
          cResult[18] = tmp4.sectionIcon;
          cResult[19] = V;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class V {
            constructor(category) {
              const type = category.category.categoryInfo.type;
              if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
                const obj2 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: category.category.categoryInfo.guild, style: currentUser.sectionIcon };
                const tmp16 = GuildIconDefault;
                return metroImportDefault(tmp16, obj2);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
                const obj3 = { source: AssetRegistryDefault2, style: currentUser.sectionIcon };
                const Icon2 = native.Icon;
                return metroImportDefault(Icon2, obj3);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
                const obj4 = { source: AssetRegistryDefault, style: currentUser.sectionIcon };
                const Icon = native.Icon;
                return metroImportDefault(Icon, obj4);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
                const obj5 = { style: currentUser.sectionIcon };
                return metroImportDefault(ClockIcon.ClockIcon, obj5);
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
                return null;
              } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
                const obj = { style: currentUser.sectionIcon };
                return metroImportDefault(TrophyIcon.TrophyIcon, obj);
              }
            }
          }
        }
        getSectionLabel = tmp24;
        if (cResult[20] !== tmp10) {
          class Q {
            constructor(arg0) {
              let num2;
              const tmp = closure_6[arg0];
              if (null == tmp) {
                num2 = 0;
              } else {
                num2 = 42;
              }
              return num2;
            }
          }
          cResult[20] = tmp10;
          cResult[21] = Q;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class Q {
            constructor(arg0) {
              let num2;
              const tmp = closure_6[arg0];
              if (null == tmp) {
                num2 = 0;
              } else {
                num2 = 42;
              }
              return num2;
            }
          }
        }
        if (cResult[22] !== tmp10) {
          class Q {
            constructor(arg0) {
              let num2;
              const tmp = closure_6[arg0];
              if (null == tmp) {
                num2 = 0;
              } else {
                num2 = 42;
              }
              return num2;
            }
          }
          cResult[22] = tmp10;
          cResult[23] = tmp27;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class Q {
            constructor(arg0) {
              let num2;
              const tmp = closure_6[arg0];
              if (null == tmp) {
                num2 = 0;
              } else {
                num2 = 42;
              }
              return num2;
            }
          }
        }
        function isSectionLocked(arg0) {
          let result = !closure_11 && null != closure_6[arg0];
          if (result) {
            const obj = PremiumFeatureUpsellUtils;
            result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
          }
          return result;
        }
        if (cResult[24] !== isSectionLocked) {
          class Y {
            constructor(arg0) {
              const diff = arg0 - 1;
              let result = !closure_11 && null != closure_6[diff];
              if (result) {
                const obj = PremiumFeatureUpsellUtils;
                result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
              }
              let result1 = !closure_11 && null != closure_6[arg0];
              if (result1) {
                const obj2 = PremiumFeatureUpsellUtils;
                result1 = obj2.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
              }
              sum = arg0 + 1;
              let result2 = !closure_11 && null != closure_6[sum];
              if (result2) {
                const obj3 = PremiumFeatureUpsellUtils;
                result2 = obj3.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[sum].category.categoryInfo);
              }
              if (!result1) {
                if (result2) {
                  let START;
                  if (!result) {
                    START = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START;
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
          }
          cResult[24] = isSectionLocked;
          cResult[25] = Y;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class Y {
            constructor(arg0) {
              const diff = arg0 - 1;
              let result = !closure_11 && null != closure_6[diff];
              if (result) {
                const obj = PremiumFeatureUpsellUtils;
                result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
              }
              let result1 = !closure_11 && null != closure_6[arg0];
              if (result1) {
                const obj2 = PremiumFeatureUpsellUtils;
                result1 = obj2.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
              }
              sum = arg0 + 1;
              let result2 = !closure_11 && null != closure_6[sum];
              if (result2) {
                const obj3 = PremiumFeatureUpsellUtils;
                result2 = obj3.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[sum].category.categoryInfo);
              }
              if (!result1) {
                if (result2) {
                  let START;
                  if (!result) {
                    START = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START;
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
          }
        }
        getFastListSectionsFromCategories = tmp28;
        if (cResult[26] !== tmp28) {
          class Z {
            constructor(arg0) {
              let num = 0;
              if (null != closure_13(arg0)) {
                num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
              }
              return num;
            }
          }
          cResult[26] = tmp28;
          cResult[27] = Z;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class Z {
            constructor(arg0) {
              let num = 0;
              if (null != closure_13(arg0)) {
                num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
              }
              return num;
            }
          }
        }
        if (cResult[28] !== tmp28) {
          class J {
            constructor(arg0) {
              const tmp = closure_13(arg0);
              let tmp2 = null;
              if (null != tmp) {
                const obj = { position: tmp };
                tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
              }
              return tmp2;
            }
          }
          cResult[28] = tmp28;
          cResult[29] = J;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class J {
            constructor(arg0) {
              const tmp = closure_13(arg0);
              let tmp2 = null;
              if (null != tmp) {
                const obj = { position: tmp };
                tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
              }
              return tmp2;
            }
          }
        }
        if (cResult[30] !== debounceResult) {
          class J {
            constructor(arg0) {
              const tmp = closure_13(arg0);
              let tmp2 = null;
              if (null != tmp) {
                const obj = { position: tmp };
                tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
              }
              return tmp2;
            }
          }
          cResult[30] = debounceResult;
          cResult[31] = tmp32;
          class O {
            constructor(sectionIndex, row) {
              const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
              return metroImportDefault(closure_14, obj);
            }
          }
        } else {
          class J {
            constructor(arg0) {
              const tmp = closure_13(arg0);
              let tmp2 = null;
              if (null != tmp) {
                const obj = { position: tmp };
                tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
              }
              return tmp2;
            }
          }
        }
        function handleScroll(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const y = nativeEvent.contentOffset.y;
          tmp18(y);
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
          let items;
          let result = !closure_11 && null != closure_6[arg0];
          if (result) {
            const obj = PremiumFeatureUpsellUtils;
            result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
          }
          const obj2 = { style: currentUser.sectionHeader, children: items };
          if (result) {
            result = metroImportDefault(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
          }
          const obj3 = { children: metroImportAll(View, obj2) };
          items = [result, tmp24(closure_6[arg0]), ];
          const obj4 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionLabel(closure_6[arg0]) };
          const Text = Text_Text.Text;
          items[2] = metroImportDefault(Text, obj4);
          return metroImportDefault(View, obj3, closure_6[arg0].category.key);
        }
        if (cResult[32] === tmp26) {
          class J {
            constructor(arg0) {
              const tmp = closure_13(arg0);
              let tmp2 = null;
              if (null != tmp) {
                const obj = { position: tmp };
                tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
              }
              return tmp2;
            }
          }
        }
        let obj2 = { onLayout: tmp31, sections: tmp6, sectionSize: tmp25, itemSize: tmp26, sectionFooterSize: tmp29, ref: listRef, renderItem: O, renderSection: renderSectionHeader, renderSectionFooter: tmp30, insetEnd: num, onScroll: handleScroll, keyboardShouldPersistTaps: "handled", optimizeListItemRender: true, inActionSheet: true };
        cResult[32] = tmp26;
        cResult[33] = tmp29;
        cResult[34] = tmp25;
        cResult[35] = handleScroll;
        cResult[36] = num;
        cResult[37] = listRef;
        cResult[38] = O;
        cResult[39] = tmp30;
        cResult[40] = renderSectionHeader;
        cResult[41] = tmp6;
        cResult[42] = tmp31;
        cResult[43] = tmp15(FastListDefault, obj2);
        const tmp36 = tmp15(FastListDefault, obj2);
      }
      tmp(12);
      class O {
        constructor(sectionIndex, row) {
          const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
          return metroImportDefault(closure_14, obj);
        }
      }
      cResult[13] = tmp17;
      cResult[14] = setCategoryIndex;
      cResult[15] = tmp20;
    }
    class O {
      constructor(sectionIndex, row) {
        const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
        return metroImportDefault(closure_14, obj);
      }
    }
    cResult[8] = channel;
    cResult[9] = tmp10;
    cResult[10] = O;
  }
  const tmp11 = getFastListSectionsFromCategories(categories, closure_6, fontScale);
  cResult[2] = categories;
  cResult[3] = fontScale;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((channel) => {
  let categories;
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: react, shouldShowPremiumUpsell: View, categories } = channel);
  let closure_6;
  closure_10 = undefined;
  function getSectionPosition(categories) {
    const diff = categories - 1;
    let result = !closure_10 && null != closure_6[diff];
    if (result) {
      const obj = PremiumFeatureUpsellUtils;
      result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
    }
    let result1 = !closure_10 && null != closure_6[categories];
    if (result1) {
      const obj2 = PremiumFeatureUpsellUtils;
      result1 = obj2.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[categories].category.categoryInfo);
    }
    sum = categories + 1;
    let result2 = !closure_10 && null != closure_6[sum];
    if (result2) {
      const obj3 = PremiumFeatureUpsellUtils;
      result2 = obj3.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[sum].category.categoryInfo);
    }
    if (!result1) {
      if (result2) {
        let START;
        if (!result) {
          START = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START;
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
  const listRef = channel.listRef;
  const currentUser = closure_10();
  let obj = channel(5609);
  const fontScale = obj.useFontScale();
  let tmp2 = getSectionPosition(categories, closure_6);
  const tmp3 = getFastListSectionsFromCategories(categories, closure_6, fontScale);
  closure_6 = tmp3;
  let items = [tmp3];
  let closure_7 = react.useMemo(() => closure_6.map((height) => height.height), items);
  const items1 = [tmp3, channel];
  const callback = react.useCallback((sectionIndex, row) => {
    const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
    return metroImportDefault(closure_14, obj);
  }, items1);
  let obj2 = channel(12);
  let closure_8 = obj2.debounce((arg0) => {
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
    react(num);
  });
  let obj3 = channel(12);
  let closure_9 = obj3.debounce((arg0, arg1) => {
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
    View = View.set;
    const bound = Math.min(num, arr.length - 1);
    let result1 = !closure_10 && null != closure_6[bound];
    if (result1) {
      const obj = PremiumFeatureUpsellUtils;
      result1 = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[bound].category.categoryInfo);
    }
    const result2 = View(result1);
  });
  let obj4 = channel(504);
  const items2 = [currentUser];
  closure_10 = obj4.useStateFromStores(items2, () => {
    const obj = PremiumUtilsDefault;
    return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
  });
  let obj5 = {
    onLayout(nativeEvent) {
      return closure_9(0, nativeEvent.nativeEvent.layout.height);
    },
    sections: tmp2,
    sectionSize(arg0) {
      let num2;
      const tmp = closure_6[arg0];
      if (null == tmp) {
        num2 = 0;
      } else {
        num2 = 42;
      }
      return num2;
    },
    itemSize(arg0) {
      let num = 0;
      if (null != closure_6[arg0]) {
        num = c9;
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
    ref: listRef,
    renderItem: callback,
    renderSection(arg0) {
      let items;
      let tmp8Result;
      let result = !closure_10 && null != closure_6[arg0];
      if (result) {
        const obj = PremiumFeatureUpsellUtils;
        result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
      }
      const obj2 = { style: currentUser.sectionHeader, children: items };
      if (result) {
        result = metroImportDefault(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
      }
      items = [result, , ];
      const type = tmp2.category.categoryInfo.type;
      if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
        const obj3 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: closure_6[arg0].category.categoryInfo.guild, style: currentUser.sectionIcon };
        const tmp27 = GuildIconDefault;
        tmp8Result = metroImportDefault(tmp27, obj3);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
        const obj4 = { source: AssetRegistryDefault2, style: currentUser.sectionIcon };
        const Icon2 = native.Icon;
        tmp8Result = metroImportDefault(Icon2, obj4);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj5 = { source: AssetRegistryDefault, style: currentUser.sectionIcon };
        const Icon = native.Icon;
        tmp8Result = metroImportDefault(Icon, obj5);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const obj6 = { style: currentUser.sectionIcon };
        tmp8Result = metroImportDefault(ClockIcon.ClockIcon, obj6);
      } else {
        tmp8Result = null;
        if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH !== type) {
          if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
            const obj7 = { style: currentUser.sectionIcon };
            tmp8Result = metroImportDefault(TrophyIcon.TrophyIcon, obj7);
          }
        }
      }
      items[1] = tmp8Result;
      const obj8 = { children: metroImportAll(View, obj2) };
      const obj9 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionLabel(closure_6[arg0]) };
      const Text = Text_Text.Text;
      items[2] = metroImportDefault(Text, obj9);
      return metroImportDefault(View, obj8, closure_6[arg0].category.key);
    },
    renderSectionFooter(categories) {
      const tmp = getSectionPosition(categories);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: tmp };
        tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
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
  };
  return closure_7(FastListDefault, obj5);
}));
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;