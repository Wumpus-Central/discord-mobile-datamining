// discord_app/modules/soundboard/native/SoundboardSoundPickerList.tsx
import importAllResult from "registerAsset";
import { View } from "GuildIconSizes";
import mergeGuildAvatar from "mergeGuildAvatar";
import SOUND_BUTTON_HEIGHT from "SOUND_BUTTON_HEIGHT";
import jsxProd from "ClockIcon";
import createCacheKey from "createCacheKey";
import { renderDefaultEmpty } from "../../../lib/native/FastList.tsx";
import { SoundButtonOverlay } from "../SoundboardTypes.tsx";

let SOUND_BUTTON_HEIGHT;
let SOUND_ROW_HORIZONTAL_PADDING;
let SOUND_ROW_SPACING;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function getSectionLabel(category) {
  const type = category.category.categoryInfo.type;
  if (SoundButtonOverlay.SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
  } else if (tmp(4819).SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.Rtvk9X);
  } else if (tmp(4819).SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t.y3LQCG);
  } else if (tmp(4819).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t["+cGVV6"]);
  } else if (tmp(4819).SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  }
}
function SoundPickerButtonRow(section) {
  section = section.section;
  const channel = section.channel;
  let dependencyMap;
  let c3;
  const tmp = callback2();
  dependencyMap = tmp;
  let obj = section(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => channel(_undefined[11]).canUseSoundboardEverywhere(currentUser.getCurrentUser()));
  if (null == section) {
    return null;
  } else {
    let result = !stateFromStores;
    if (!stateFromStores) {
      result = tmp2(8746).isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
      const tmp2Result = tmp2(8746);
    }
    c3 = result;
    obj = { style: null, children: null };
    const items1 = [tmp.row];
    obj[0] = items1;
    if (result) {
      result = callback(tmp2(8769).PremiumUpsellGradientBackground, {});
    }
    const items2 = [
      result,
      section.soundsByRow[section.row].map((type) => {
          type = type.type;
          if (section(_undefined[7]).SoundboardSoundItemType.SOUND === type) {
            const sound = type.sound;
            const obj = { sound: null, channel: null, style: null, isSectionLocked: null };
            obj[0] = sound;
            obj[1] = channel;
            let soundButtonNotFirst = null;
            if (arg1 > 0) {
              soundButtonNotFirst = _undefined.soundButtonNotFirst;
            }
            obj[2] = soundButtonNotFirst;
            obj[3] = c3;
            const _HermesInternal = HermesInternal;
            return outer1_7(tmp(tmp2[14]).SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
          } else if (tmp(tmp2[7]).SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            const error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        })
    ];
    obj[1] = items2;
    return closure_8(View, obj);
  }
}
let c3 = importAllResult;
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: closure_6, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SOUND_BUTTON_HEIGHT);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let sum = SOUND_BUTTON_HEIGHT + 8;
let c9 = sum;
let obj = { row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionHeader: null, sectionIcon: null, soundButtonNotFirst: null };
obj = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
obj[1] = obj;
obj[2] = { height: 16, width: 16, borderRadius: 8, marginRight: 4 };
obj[3] = { marginLeft: SOUND_ROW_SPACING };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function SoundboardSoundPickerListComponent(channel) {
  let View;
  let categories;
  let closure_3;
  let dependencyMap;
  let importDefault;
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: closure_3, shouldShowPremiumUpsell: View, categories } = channel);
  let mergeGuildAvatar;
  let c6;
  let callback;
  let closure_8;
  let closure_9;
  let callback2;
  function getSectionPosition(arg0) {
    const diff = arg0 - 1;
    let result = !closure_10;
    if (!closure_10) {
      result = null != _undefined[diff];
    }
    if (result) {
      result = channel(outer1_2[12]).isSoundboardSectionNitroLocked(channel.guild_id, _undefined[diff].category.categoryInfo);
      const obj = channel(outer1_2[12]);
    }
    let result1 = !tmp2;
    if (!closure_10) {
      result1 = null != _undefined[arg0];
    }
    if (result1) {
      result1 = channel(outer1_2[12]).isSoundboardSectionNitroLocked(channel.guild_id, _undefined[arg0].category.categoryInfo);
      const obj2 = channel(outer1_2[12]);
    }
    const sum = arg0 + 1;
    let result2 = !tmp2;
    if (!closure_10) {
      result2 = null != _undefined[sum];
    }
    if (result2) {
      result2 = channel(outer1_2[12]).isSoundboardSectionNitroLocked(channel.guild_id, _undefined[sum].category.categoryInfo);
      const obj3 = channel(outer1_2[12]);
    }
    if (!result1) {
      if (result2) {
        if (!result) {
          let START = channel(outer1_2[22]).PremiumUpsellSectionDividerPosition.START;
        }
        return START;
      }
    }
    let END = null;
    if (result1) {
      END = null;
      if (!result2) {
        END = channel(outer1_2[22]).PremiumUpsellSectionDividerPosition.END;
      }
    }
    START = END;
  }
  mergeGuildAvatar = callback2();
  let obj = channel(4783);
  const fontScale = obj.useFontScale();
  let tmp3 = (function getFastListSectionsFromCategories(categories, c6, fontScale) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = callback;
      let tmp3 = dependencyMap;
      let arr2 = callback(8815)(nextResult.items, c6);
      let tmp4 = closure_9;
      let obj = { category: null, height: null, soundsByRow: null };
      obj[0] = nextResult;
      obj[1] = arr2.length * closure_9 + (18 * fontScale + 8);
      obj[2] = arr2;
      let arr = items.push(obj);
      continue;
    }
    return items;
  })(categories, c6, fontScale);
  c6 = tmp3;
  let items = [tmp3];
  callback = importAllResult.useMemo(() => _undefined.map((height) => height.height), items);
  const items1 = [tmp3, channel];
  callback = importAllResult.useCallback((arg0, row) => lib(outer1_12, { row, section: _undefined[arg0], channel }), items1);
  let tmp2 = (function calculateRowsPerSection(categories, c6) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    while (iter !== undefined) {
      let _Math = Math;
      let arr = items.push(Math.ceil(iter.next().items.length / c6));
      continue;
    }
    return items;
  })(categories, c6);
  closure_8 = channel(12).debounce((arg0) => {
    const rounded = Math.round(arg0);
    let num = 0;
    if (0 < lib.length) {
      let first = lib[0];
      let num3 = 0;
      let num4 = 0;
      num = 0;
      if (rounded >= first) {
        const sum = num4 + 1;
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
      let sum = result + tmp3[0];
      let num3 = 0;
      let num4 = 0;
      arr = tmp3;
      num = 0;
      if (rounded >= sum) {
        const sum1 = num4 + 1;
        const sum2 = num3 + 1;
        arr = lib;
        num = sum1;
        while (sum2 < lib.length) {
          sum = sum + tmp7[sum2];
          num3 = sum2;
          num4 = sum1;
          arr = tmp7;
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
      result1 = null != _undefined[bound];
    }
    if (result1) {
      result1 = channel(outer1_2[12]).isSoundboardSectionNitroLocked(channel.guild_id, _undefined[bound].category.categoryInfo);
      const obj = channel(outer1_2[12]);
    }
    const result2 = closure_4.set(result1);
  });
  let obj3 = channel(12);
  const items2 = [mergeGuildAvatar];
  callback2 = channel(589).useStateFromStores(items2, () => callback(4007).canUseSoundboardEverywhere(currentUser.getCurrentUser()));
  obj = {
    onLayout(nativeEvent) {
      return callback4(0, nativeEvent.nativeEvent.layout.height);
    },
    sections: tmp2,
    sectionSize(arg0) {
      if (null == _undefined[arg0]) {
        let num2 = 0;
      } else {
        num2 = 42;
      }
      return num2;
    },
    itemSize(arg0) {
      let num = 0;
      if (null != _undefined[arg0]) {
        num = closure_9;
      }
      return num;
    },
    sectionFooterSize(arg0) {
      let num = 0;
      if (null != getSectionPosition(arg0)) {
        num = channel(outer1_2[22]).PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + channel(outer1_2[22]).PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
      }
      return num;
    },
    ref: channel.listRef,
    renderItem: callback,
    renderSection(arg0) {
      let result = !closure_10;
      if (!closure_10) {
        result = null != tmp[arg0];
      }
      if (result) {
        let obj = channel(outer1_2[12]);
        result = obj.isSoundboardSectionNitroLocked(channel.guild_id, tmp[arg0].category.categoryInfo);
      }
      obj = { style: currentUser.sectionHeader, children: null };
      if (result) {
        result = tmp8(channel(outer1_2[13]).PremiumUpsellGradientBackground, {});
      }
      const items = [result, , ];
      const type = tmp2.category.categoryInfo.type;
      if (channel(outer1_2[7]).SoundboardSoundGridSectionType.GUILD === type) {
        obj = { size: null, guild: null, style: null };
        obj[0] = channel(outer1_2[17]).GuildIconSizes.XXSMALL_12;
        obj[1] = tmp2.category.categoryInfo.guild;
        obj[2] = tmp11.sectionIcon;
        let tmp8Result = tmp8(outer1_1(outer1_2[17]), obj);
        const tmp29 = outer1_1(outer1_2[17]);
      } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.DEFAULTS === type) {
        const obj1 = { source: null, style: null };
        obj1[0] = outer1_1(outer1_2[19]);
        obj1[1] = tmp11.sectionIcon;
        tmp8Result = tmp8(channel(outer1_2[18]).Icon, obj1);
      } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj2 = { source: null, style: null };
        obj2[0] = outer1_1(outer1_2[20]);
        obj2[1] = tmp11.sectionIcon;
        tmp8Result = tmp8(channel(outer1_2[18]).Icon, obj2);
      } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const obj3 = { style: null };
        obj3[0] = tmp11.sectionIcon;
        tmp8Result = tmp8(channel(outer1_2[21]).ClockIcon, obj3);
      } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.SEARCH === type) {
        tmp8Result = null;
      }
      const obj4 = { children: null };
      items[1] = tmp8Result;
      const obj5 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: null };
      obj5[3] = getSectionPosition(_undefined[arg0]);
      items[2] = closure_7(channel(outer1_2[24]).Text, obj5);
      obj[1] = items;
      obj4[0] = closure_8(outer1_4, obj);
      return closure_7(outer1_4, obj4, _undefined[arg0].category.key);
    },
    renderSectionFooter(arg0) {
      const tmp = getSectionPosition(arg0);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: null };
        obj[0] = tmp;
        tmp2 = lib(outer1_1(outer1_2[22]), obj);
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
          const result = obj.set(y);
        }
        if (dependencyMap != null) {
          dependencyMap(nativeEvent);
        }
        obj = closure_1;
      }
    },
    keyboardShouldPersistTaps: "handled",
    optimizeListItemRender: true,
    inActionSheet: true
  };
  return callback(renderDefaultEmpty, obj);
});
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;