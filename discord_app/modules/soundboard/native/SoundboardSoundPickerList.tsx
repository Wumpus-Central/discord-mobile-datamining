// === Module 16289: getSectionLabel ===

// Module 16289 (getSectionLabel)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import SoundButtonOverlay from "SoundButtonOverlay" /* 6824 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import renderDefaultEmptyDefault from "renderDefaultEmpty" /* 8124 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 9372 */;
import registerAssetDefault from "registerAsset" /* 10221 */;
import registerAssetDefault2 from "registerAsset" /* 16296 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import SOUND_BUTTON_HEIGHT from "SOUND_BUTTON_HEIGHT" /* 16284 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function getSectionLabel(category) {
  const type = category.category.categoryInfo.type;
  if (SoundButtonOverlay.SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Rtvk9X);
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.y3LQCG);
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+cGVV6"]);
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  }
}
function SoundPickerButtonRow(section) {
  section = section.section;
  const channel = section.channel;
  c3 = undefined;
  const tmp = callback2();
  dependencyMap = tmp;
  let obj = section(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => channel(soundButtonNotFirst[11]).canUseSoundboardEverywhere(currentUser.getCurrentUser()));
  if (null == section) {
    return null;
  } else {
    let result = !stateFromStores;
    if (!stateFromStores) {
      result = tmp2(9350).isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
      const tmp2Result = tmp2(9350);
    }
    c3 = result;
    obj = { style: null, children: null };
    const items1 = [tmp.row];
    obj[0] = items1;
    if (result) {
      result = callback(tmp2(9373).PremiumUpsellGradientBackground, {});
    }
    const items2 = [
      result,
      section.soundsByRow[section.row].map((item, index) => {
          const type = item.type;
          if (section(soundButtonNotFirst[7]).SoundboardSoundItemType.SOUND === type) {
            const sound = item.sound;
            const obj = { sound: null, channel: null, style: null, isSectionLocked: null };
            obj[0] = sound;
            obj[1] = channel;
            soundButtonNotFirst = null;
            if (index > 0) {
              soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
            }
            obj[2] = soundButtonNotFirst;
            obj[3] = c3;
            const _HermesInternal = HermesInternal;
            return closure_1_7(section(tmp2[14]).SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
          } else if (section(tmp2[7]).SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        })
    ];
    obj[1] = items2;
    return callback(View, obj);
  }
}
let c3 = importAllResult;
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: closure_6, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SOUND_BUTTON_HEIGHT);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let sum = SOUND_BUTTON_HEIGHT + 8;
let c9 = sum;
let obj = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
obj[1] = obj;
obj[2] = { height: 16, width: 16, borderRadius: 8, marginRight: 4 };
obj[3] = { marginLeft: SOUND_ROW_SPACING };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function SoundboardSoundPickerListComponent(channel) {
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: closure_3, shouldShowPremiumUpsell: View, categories } = channel);
  closure_6 = undefined;
  let callback2;
  function getSectionPosition(closure_6) {
    const diff = closure_6 - 1;
    let result = !closure_10;
    if (!closure_10) {
      result = null != closure_6[diff];
    }
    if (result) {
      result = channel(dependencyMap[12]).isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
      const obj = channel(dependencyMap[12]);
    }
    let result1 = !closure_10;
    if (!closure_10) {
      result1 = null != closure_6[closure_6];
    }
    if (result1) {
      result1 = channel(dependencyMap[12]).isSoundboardSectionNitroLocked(channel.guild_id, closure_6[closure_6].category.categoryInfo);
      const obj2 = channel(dependencyMap[12]);
    }
    sum = closure_6 + 1;
    let result2 = !closure_10;
    if (!closure_10) {
      result2 = null != closure_6[sum];
    }
    if (result2) {
      result2 = channel(dependencyMap[12]).isSoundboardSectionNitroLocked(channel.guild_id, closure_6[sum].category.categoryInfo);
      const obj3 = channel(dependencyMap[12]);
    }
    if (!result1) {
      if (result2) {
        if (!result) {
          let START = channel(dependencyMap[22]).PremiumUpsellSectionDividerPosition.START;
        }
        return START;
      }
    }
    let END = null;
    if (result1) {
      END = null;
      if (!result2) {
        END = channel(dependencyMap[22]).PremiumUpsellSectionDividerPosition.END;
      }
    }
    START = END;
  }
  closure_5 = callback2();
  let obj = channel(4751);
  const fontScale = obj.useFontScale();
  const tmp3 = (function getFastListSectionsFromCategories(categories, closure_6, fontScale) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr2 = callback(9420)(nextResult.items, closure_6);
      let obj = { category: null, height: null, soundsByRow: null };
      obj[0] = nextResult;
      obj[1] = arr2.length * closure_9 + (18 * fontScale + 8);
      obj[2] = arr2;
      let arr = items.push(obj);
      continue;
    }
    return items;
  })(categories, closure_6, fontScale);
  closure_6 = tmp3;
  let items = [tmp3];
  importAllResult.useMemo(() => closure_6.map((item, index) => item.height), items);
  const items1 = [tmp3, channel];
  const callback = importAllResult.useCallback((arg0, row) => lib(SoundPickerButtonRow, { row, section: closure_6[arg0], channel }), items1);
  let tmp2 = (function calculateRowsPerSection(categories, closure_6) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    while (iter !== undefined) {
      let _Math = Math;
      let arr = items.push(Math.ceil(iter.next().items.length / closure_6));
      continue;
    }
    return items;
  })(categories, closure_6);
  closure_8 = channel(12).debounce((arg0) => {
    const rounded = Math.round(arg0);
    let num = 0;
    if (0 < lib.length) {
      let first = lib[0];
      let num3 = 0;
      let num4 = 0;
      num = 0;
      if (rounded >= first) {
        sum = num4 + 1;
        const sum1 = num3 + 1;
        num = sum;
        while (sum1 < lib.length) {
          first = first + lib[sum1];
          num3 = sum1;
          num4 = sum;
          num = sum;
          if (rounded < first) {
            break;
          }
        }
      }
    }
    callback2(num);
  });
  let obj2 = channel(12);
  closure_9 = channel(12).debounce((arg0, arg1) => {
    const result = -arg1 / 2;
    const rounded = Math.round(arg0);
    let arr = lib;
    let num = 0;
    if (0 < lib.length) {
      sum = result + lib[0];
      let num3 = 0;
      let num4 = 0;
      arr = lib;
      num = 0;
      if (rounded >= sum) {
        const sum1 = num4 + 1;
        const sum2 = num3 + 1;
        arr = lib;
        num = sum1;
        while (sum2 < lib.length) {
          sum = sum + lib[sum2];
          num3 = sum2;
          num4 = sum1;
          arr = lib;
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
      result1 = channel(dependencyMap[12]).isSoundboardSectionNitroLocked(channel.guild_id, closure_6[bound].category.categoryInfo);
      const obj = channel(dependencyMap[12]);
    }
    const result2 = closure_4.set(result1);
  });
  let obj3 = channel(12);
  const items2 = [closure_5];
  callback2 = channel(589).useStateFromStores(items2, () => callback(4039).canUseSoundboardEverywhere(currentUser.getCurrentUser()));
  obj = {
    onLayout(nativeEvent) {
      return callback4(0, nativeEvent.nativeEvent.layout.height);
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
        num = closure_9;
      }
      return num;
    },
    sectionFooterSize(closure_6) {
      let num = 0;
      if (null != getSectionPosition(closure_6)) {
        num = channel(dependencyMap[22]).PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + channel(dependencyMap[22]).PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
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
        let obj = channel(dependencyMap[12]);
        result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
      }
      obj = { style: currentUser.sectionHeader, children: null };
      if (result) {
        result = callback(channel(dependencyMap[13]).PremiumUpsellGradientBackground, {});
      }
      const items = [result, , ];
      const type = tmp2.category.categoryInfo.type;
      if (channel(dependencyMap[7]).SoundboardSoundGridSectionType.GUILD === type) {
        obj = { size: null, guild: null, style: null };
        obj[0] = channel(dependencyMap[17]).GuildIconSizes.XXSMALL_12;
        obj[1] = tmp2.category.categoryInfo.guild;
        obj[2] = currentUser.sectionIcon;
        let tmp8Result = callback(GuildIconSizesDefault, obj);
      } else if (channel(dependencyMap[7]).SoundboardSoundGridSectionType.DEFAULTS === type) {
        obj1 = { source: null, style: null };
        obj1[0] = registerAssetDefault2;
        obj1[1] = currentUser.sectionIcon;
        tmp8Result = callback(channel(dependencyMap[18]).Icon, obj1);
      } else if (channel(dependencyMap[7]).SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj2 = { source: null, style: null };
        obj2[0] = registerAssetDefault;
        obj2[1] = currentUser.sectionIcon;
        tmp8Result = callback(channel(dependencyMap[18]).Icon, obj2);
      } else if (channel(dependencyMap[7]).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const obj3 = { style: null };
        obj3[0] = currentUser.sectionIcon;
        tmp8Result = callback(channel(dependencyMap[21]).ClockIcon, obj3);
      } else if (channel(dependencyMap[7]).SoundboardSoundGridSectionType.SEARCH === type) {
        tmp8Result = null;
      }
      const obj4 = { children: null };
      items[1] = tmp8Result;
      items[2] = callback(channel(dependencyMap[24]).Text, { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionPosition(closure_6[arg0]) });
      obj[1] = items;
      obj4[0] = callback2(View, obj);
      return callback(View, obj4, closure_6[arg0].category.key);
    },
    renderSectionFooter(closure_6) {
      const tmp = getSectionPosition(closure_6);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: null };
        obj[0] = tmp;
        tmp2 = lib(PremiumUpsellSectionDividerDefault, obj);
      }
      return tmp2;
    },
    insetEnd: num,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const y = nativeEvent.contentOffset.y;
      callback3(y);
      callback4(y, nativeEvent.layoutMeasurement.height);
      if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y < nativeEvent.contentSize.height - 20) {
        if (null != closure_1) {
          const result = closure_1.set(y);
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
  return callback(renderDefaultEmptyDefault, obj);
});
let result = require("obj132").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;