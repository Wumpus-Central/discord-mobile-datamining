// discord_app/modules/soundboard/native/SoundboardSoundPickerList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SoundboardTypes from "../SoundboardTypes.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import FastListDefault from "../../../lib/native/FastList.tsx";
import TrophyIcon from "../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import PremiumFeatureUpsellUtils from "../../premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx";
import PremiumUpsellSectionDivider from "../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import PremiumUpsellGradientBackground from "../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import chunkDefault from "../../../../_runtime/10344_chunk.js";
import _modDef10391 from "../../../../_runtime/metro/10391__.js";
import SoundButton from "SoundButton.tsx";
import _modDef17077 from "../../../../_runtime/metro/17077__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const GuildIconDefault = GuildIcon;
const PremiumUpsellSectionDividerDefault = PremiumUpsellSectionDivider;

require = fn;
function getSectionLabel(category) {
  const type = category.category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
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
    const obj = { guildName: category.category.categoryInfo.guild.name };
    return intl.formatToPlainString(util.t.GXs41w, obj);
  }
}
function SoundPickerButtonRow(row) {
  row = row.row;
  ({ sectionIndex: importDefault, section } = row);
  const channel = row.channel;
  c5 = undefined;
  const tmp = closure_10();
  let soundButtonNotFirst = tmp;
  let obj = row(section[10]);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () =>
    section(section[11]).canUseSoundboardEverywhere(isSectionLocked.getCurrentUser()),
  );
  if (null == section) {
    return null;
  } else {
    let result = !stateFromStores;
    if (!stateFromStores) {
      result = tmp2(section[12]).isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
      const tmp2Result = tmp2(section[12]);
    }
    c5 = result;
    obj = { style: null, children: null };
    const items1 = [tmp.row];
    obj.style = items1;
    if (result) {
      result = closure_7(tmp2(section[13]).PremiumUpsellGradientBackground, {});
    }
    const items2 = [
      result,
      section.soundsByRow[row].map((type, index) => {
        type = type.type;
        if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
          const sound = type.sound;
          let obj = { sound, channel, soundGridLocation: null, style: null, isSectionLocked: null };
          obj = { section, item: row };
          obj.soundGridLocation = obj;
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
      }),
    ];
    obj.children = items2;
    return closure_8(soundButtonNotFirst, obj);
  }
}
const View = fn(17).View;
const SoundboardStyleConstants = fn(17062);
({
  SOUND_ROW_HORIZONTAL_PADDING,
  SOUNDS_PER_ROW: metroRequire,
  SOUND_BUTTON_HEIGHT,
  SOUND_ROW_SPACING,
} = SoundboardStyleConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let sum = SOUND_BUTTON_HEIGHT + 8;
const createStyles = fn(4560);
let obj = {
  row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING },
  sectionHeader: null,
  sectionIcon: null,
  soundButtonNotFirst: null,
};
obj = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingTop: 16,
  paddingBottom: 8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING,
};
obj.sectionHeader = obj;
obj.sectionIcon = { height: 16, width: 16, borderRadius: 8, marginRight: 4 };
obj.soundButtonNotFirst = { marginLeft: SOUND_ROW_SPACING };
let closure_10 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = noop.memo(function SoundboardSoundPickerListComponent(channel) {
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({
    scrollPosition: importDefault,
    onScroll: dependencyMap,
    setCategoryIndex: noop,
    shouldShowPremiumUpsell: View,
    categories,
  } = channel);
  closure_6 = undefined;
  closure_10 = undefined;
  function getSectionPosition(arg0) {
    const diff = arg0 - 1;
    let result = !closure_10;
    if (!closure_10) {
      result = null != closure_6[diff];
    }
    if (result) {
      result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(
        channel.guild_id,
        closure_6[diff].category.categoryInfo,
      );
    }
    let result1 = !closure_10;
    if (!closure_10) {
      result1 = null != closure_6[arg0];
    }
    if (result1) {
      result1 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(
        channel.guild_id,
        closure_6[arg0].category.categoryInfo,
      );
    }
    sum = arg0 + 1;
    let result2 = !closure_10;
    if (!closure_10) {
      result2 = null != closure_6[sum];
    }
    if (result2) {
      result2 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(
        channel.guild_id,
        closure_6[sum].category.categoryInfo,
      );
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
  let obj = channel(4982);
  const fontScale = obj.useFontScale();
  const tmp3 = (function getFastListSectionsFromCategories(categories, arg1, fontScale) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr2 = chunkDefault(nextResult.items, arg1);
      let obj = { category: nextResult, height: arr2.length * closure_9 + (18 * fontScale + 8), soundsByRow: arr2 };
      let arr = items.push(obj);
      continue;
    }
    return items;
  })(categories, closure_6, fontScale);
  closure_6 = tmp3;
  let items = [tmp3];
  closure_7 = noop.useMemo(() => closure_6.map((height) => height.height), items);
  const items1 = [tmp3, channel];
  const callback = noop.useCallback(
    (sectionIndex, row) =>
      React5(SoundPickerButtonRow, { row, sectionIndex, section: closure_6[sectionIndex], channel }),
    items1,
  );
  let tmp2 = (function calculateRowsPerSection(categories, arg1) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    while (iter !== undefined) {
      let _Math = Math;
      let arr = items.push(Math.ceil(iter.next().items.length / arg1));
      continue;
    }
    return items;
  })(categories, closure_6);
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
      result1 = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(
        channel.guild_id,
        closure_6[bound].category.categoryInfo,
      );
    }
    const result2 = View.set(result1);
  });
  let obj3 = channel(12);
  const items2 = [currentUser];
  closure_10 = channel(504).useStateFromStores(items2, () =>
    PremiumUtilsDefault.canUseSoundboardEverywhere(currentUser.getCurrentUser()),
  );
  obj = {
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
    sectionFooterSize(arg0) {
      let num = 0;
      if (null != getSectionPosition(arg0)) {
        num =
          PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT +
          PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
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
        let obj = PremiumFeatureUpsellUtils;
        result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
      }
      obj = { style: currentUser.sectionHeader, children: null };
      if (result) {
        result = React5(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
      }
      const items = [result, ,];
      const type = tmp2.category.categoryInfo.type;
      if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
        obj = {
          size: GuildIcon.GuildIconSizes.XXSMALL_12,
          guild: tmp2.category.categoryInfo.guild,
          style: currentUser.sectionIcon,
        };
        let tmp8Result = React5(GuildIconDefault, obj);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
        const obj1 = { source: _modDef17077, style: currentUser.sectionIcon };
        tmp8Result = React5(native.Icon, obj1);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj2 = { source: _modDef10391, style: currentUser.sectionIcon };
        tmp8Result = React5(native.Icon, obj2);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const obj3 = { style: currentUser.sectionIcon };
        tmp8Result = React5(ClockIcon.ClockIcon, obj3);
      } else {
        tmp8Result = null;
        if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH !== type) {
          if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
            const obj4 = { style: currentUser.sectionIcon };
            tmp8Result = React5(TrophyIcon.TrophyIcon, obj4);
          }
        }
      }
      const obj5 = { children: null };
      items[1] = tmp8Result;
      items[2] = React5(Text_Text.Text, {
        accessibilityRole: "header",
        lineClamp: 1,
        variant: "heading-sm/semibold",
        children: getSectionLabel(closure_6[arg0]),
      });
      obj.children = items;
      obj5.children = React6(View, obj);
      return React5(View, obj5, closure_6[arg0].category.key);
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
    inActionSheet: true,
  };
  return closure_7(FastListDefault, obj);
});
