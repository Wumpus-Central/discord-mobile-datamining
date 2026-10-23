// === Module 12978: CheckpointSummaryStatsScreen ===

// Module 12978 (CheckpointSummaryStatsScreen)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4915 */;
import FastImageDefault from "FastImage" /* 5667 */;
import GuildIcon from "GuildIcon" /* 6881 */;
import EmojiDefault from "Emoji" /* 7225 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8072 */;
import CheckpointCardColors from "CheckpointCardColors" /* 8622 */;
import CheckpointTextDefault from "CheckpointText" /* 12930 */;
import CheckpointScreen from "CheckpointScreen" /* 12932 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12939 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 12979 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import CheckpointStore from "CheckpointStore" /* 12912 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const sum = fn(6013).CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const createStyles = fn(4969);
let obj2 = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, stats: { alignSelf: "stretch", gap: nativeDefault.space.PX_24 }, row: null, stat: null, statNumber: null, item: null, itemName: null, itemIcon: null, emoji: null, textEmoji: null };
let obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.row = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj2.stat = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.statNumber = { height: 24, justifyContent: "center" };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.item = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.itemName = { flexShrink: 1 };
let size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
obj2.itemIcon = size;
obj2.emoji = { width: 28, height: 28 };
let PlatformUtils = fn(1385);
let num = 24;
if (PlatformUtils.isIOS()) {
  num = 28;
}
let obj7 = { fontSize: num, lineHeight: null, textAlign: "center" };
PlatformUtils = fn(1385);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj7.lineHeight = num2;
obj2.textEmoji = obj7;
let closure_12 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function NumberStat(arg0) {
  const cResult = c.c(18);
  ({ label, value, color } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== color) {
    const obj2 = { color };
    cResult[0] = color;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== value) {
    const toLocaleStringResult = value.toLocaleString(util.intl.currentLocale);
    cResult[2] = value;
    cResult[3] = toLocaleStringResult;
    let tmp6 = toLocaleStringResult;
  } else {
    tmp6 = cResult[3];
  }
  const combined = "" + label + ", " + tmp6;
  if (cResult[4] === label) {
    if (cResult[5] === tmp5) {
      let tmp9 = cResult[6];
    }
    if (cResult[7] === color) {
      if (cResult[8] === value) {
        let tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.statNumber) {
        if (cResult[11] === tmp11) {
          let tmp15 = cResult[12];
        }
        if (cResult[13] === tmp4.stat) {
          if (cResult[14] === combined) {
            if (cResult[15] === tmp9) {
              if (cResult[16] === tmp15) {
                let tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
        }
        const obj3 = { style: tmp4.stat, accessible: true, accessibilityLabel: combined, children: null };
        const items = [tmp9, tmp15];
        obj3.children = items;
        const tmp22 = React6(View, obj3);
        cResult[13] = tmp4.stat;
        cResult[14] = combined;
        cResult[15] = tmp9;
        cResult[16] = tmp15;
        cResult[17] = tmp22;
        tmp19 = tmp22;
      }
      const obj4 = { style: tmp4.statNumber, children: tmp11 };
      const tmp18 = closure_1_8(View, obj4);
      cResult[10] = tmp4.statNumber;
      cResult[11] = tmp11;
      cResult[12] = tmp18;
      tmp15 = tmp18;
    }
    const obj5 = { value, color, size: 32 };
    const tmp14 = closure_1_8(CheckpointStatNumberDefault, obj5);
    cResult[7] = color;
    cResult[8] = value;
    cResult[9] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = closure_1_8(CheckpointTextDefault, { variant: "text-md/medium", style: tmp5, children: label });
  cResult[4] = label;
  cResult[5] = tmp5;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : (function NumberStat(arg0) {
  ({ label, value, color } = arg0);
  const tmp = closure_12();
  const items = [color];
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: null, children: null };
  const memo = noop.useMemo(() => ({ color }), items);
  obj.accessibilityLabel = "" + label + ", " + value.toLocaleString(util.intl.currentLocale);
  const items1 = [closure_1_8(CheckpointTextDefault, { variant: "text-md/medium", style: memo, children: label }), closure_1_8(View, { style: tmp.statNumber, children: closure_1_8(CheckpointStatNumberDefault, { value, color, size: 32 }) })];
  obj.children = items1;
  return React6(View, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemStat(arg0) {
  const cResult = c.c(23);
  ({ label, name, icon, color } = arg0);
  const tmp3 = closure_12();
  if (cResult[0] !== color) {
    const obj2 = { color };
    cResult[0] = color;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const combined = "" + label + ", " + name;
  if (cResult[2] === label) {
    if (cResult[3] === tmp4) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === icon) {
      if (cResult[6] === tmp3.itemIcon) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === tmp3.itemName) {
        if (cResult[9] === tmp4) {
          let tmp12 = cResult[10];
        }
        if (cResult[11] === name) {
          if (cResult[12] === tmp12) {
            let tmp13 = cResult[13];
          }
          if (cResult[14] === tmp3.item) {
            if (cResult[15] === tmp8) {
              if (cResult[16] === tmp13) {
                let tmp17 = cResult[17];
              }
              if (cResult[18] === tmp3.stat) {
                if (cResult[19] === combined) {
                  if (cResult[20] === tmp6) {
                    if (cResult[21] === tmp17) {
                      let tmp21 = cResult[22];
                    }
                    return tmp21;
                  }
                }
              }
              const obj3 = { style: tmp3.stat, accessible: true, accessibilityLabel: combined, children: null };
              const items = [tmp6, tmp17];
              obj3.children = items;
              const tmp24 = React6(View, obj3);
              cResult[18] = tmp3.stat;
              cResult[19] = combined;
              cResult[20] = tmp6;
              cResult[21] = tmp17;
              cResult[22] = tmp24;
              tmp21 = tmp24;
            }
          }
          const obj4 = { style: tmp3.item, children: null };
          const items1 = [tmp8, tmp13];
          obj4.children = items1;
          const tmp20 = React6(View, obj4);
          cResult[14] = tmp3.item;
          cResult[15] = tmp8;
          cResult[16] = tmp13;
          cResult[17] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { variant: "text-md/bold", style: tmp12, children: name };
        const tmp16 = closure_1_8(CheckpointTextDefault, obj5);
        cResult[11] = name;
        cResult[12] = tmp12;
        cResult[13] = tmp16;
        tmp13 = tmp16;
      }
      const items2 = [tmp3.itemName, tmp4];
      cResult[8] = tmp3.itemName;
      cResult[9] = tmp4;
      cResult[10] = items2;
      tmp12 = items2;
    }
    const obj6 = { style: tmp3.itemIcon, children: icon };
    const tmp11 = closure_1_8(View, obj6);
    cResult[5] = icon;
    cResult[6] = tmp3.itemIcon;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = closure_1_8(CheckpointTextDefault, { variant: "text-md/medium", style: tmp4, children: label });
  cResult[2] = label;
  cResult[3] = tmp4;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function ItemStat(children) {
  ({ label, name, color } = children);
  const tmp = closure_12();
  const items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + name, children: null };
  const items1 = [closure_1_8(CheckpointTextDefault, { variant: "text-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.item, children: null };
  const items2 = [closure_1_8(View, { style: tmp.itemIcon, children: children.icon }), ];
  const obj4 = { variant: "text-md/bold", style: null, children: name };
  const items3 = [tmp.itemName, memo];
  obj4.style = items3;
  items2[1] = closure_1_8(CheckpointTextDefault, obj4);
  obj2.children = items2;
  items1[1] = React6(View, obj2);
  obj.children = items1;
  return React6(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointSummaryStatsScreen() {
  const cResult = c.c(108);
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
      return { character: CheckpointStore.character, stats: CheckpointStore.stats };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp5, tmp6);
  ({ character, stats } = stateFromStoresObject);
  if (stats != null) {
    const voice = stats.voice;
  }
  if (stats != null) {
    const messages = stats.messages;
  }
  if (stats != null) {
    const guilds = stats.guilds;
    if (guilds != null) {
      const first = guilds.guilds[0];
    }
  }
  let emojis;
  if (stats != null) {
    emojis = stats.emojis;
  }
  let games;
  if (stats != null) {
    games = stats.games;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = M;
    let tmp13 = M;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores = initialize.useStateFromStores(tmp12, tmp13);
  if (cResult[4] !== character) {
    const cardColors = CheckpointCardColors.getCardColors(character);
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[5] = cardColors;
    let tmp16 = cardColors;
    const tmpResult5 = CheckpointCardColors;
  } else {
    tmp16 = cResult[5];
  }
  const primaryBackgroundColor = tmp16.primaryBackgroundColor;
  const tmpResult4 = initialize;
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight();
  const tmpResult6 = CheckpointScreen;
  [tmp20, require] = noop.useState(null);
  if (null != tmp20) {
    const diff = checkpointScreenContentHeight - closure_11 - PX_16 - tmp20;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    }
    cResult[6] = handleStatsLayout;
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
  }
  let first1;
  if (emojis != null) {
    first1 = emojis.emojis[0];
  }
  if (games != null) {
    const first2 = games.games[0];
    if (first2 != null) {
      const game = first2.game;
    }
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[10] !== game) {
      let applicationIconURL;
      if (null != game) {
        const obj2 = { id: null, icon: null, fallbackAvatar: false };
        class M {
          constructor() {
            return closure_1_6.useReducedMotion;
          }
        }
        obj2.icon = game.iconHash;
        applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj2);
      }
      class M {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[11] = applicationIconURL;
    }
    if (cResult[12] !== primaryBackgroundColor) {
      { size: "md", color: null }.color = primaryBackgroundColor;
      class M {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[12] = primaryBackgroundColor;
      cResult[13] = tmp37;
      const obj3 = { size: "md", color: null };
    }
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    const obj4 = { character, maxHeight: diff };
    const tmp41 = closure_8(CheckpointRecapCardDefault, obj4);
    cResult[14] = diff;
    cResult[15] = character;
    cResult[16] = tmp41;
  }
  let id;
  if (first1 != null) {
    id = first1.id;
  }
  let emojiURL;
  if (null != id) {
    const obj5 = { id: null, animated: null, size: 48 };
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    let tmp31 = !stateFromStores;
    if (!stateFromStores) {
      tmp31 = true === first1.animated;
    }
    obj5.animated = tmp31;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj5);
  }
  cResult[7] = stateFromStores;
  cResult[8] = first1;
  cResult[9] = emojiURL;
  const tmp19 = _slicedToArray(noop.useState(null), 2);
}) : (function CheckpointSummaryStatsScreen() {
  const tmp = closure_12();
  const items = [CheckpointStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ character: CheckpointStore.character, stats: CheckpointStore.stats }));
  ({ character, stats } = stateFromStoresObject);
  let voice;
  if (stats != null) {
    voice = stats.voice;
  }
  let messages;
  if (stats != null) {
    messages = stats.messages;
  }
  let first;
  if (stats != null) {
    const guilds = stats.guilds;
    if (guilds != null) {
      first = guilds.guilds[0];
    }
  }
  let emojis;
  if (stats != null) {
    emojis = stats.emojis;
  }
  let games;
  if (stats != null) {
    games = stats.games;
  }
  const items1 = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp2Result = initialize;
  const primaryBackgroundColor = CheckpointCardColors.getCardColors(character).primaryBackgroundColor;
  const tmp2Result3 = CheckpointCardColors;
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight();
  const tmp2Result4 = CheckpointScreen;
  [tmp13, require] = noop.useState(null);
  let diff;
  if (null != tmp13) {
    diff = checkpointScreenContentHeight - closure_11 - PX_16 - tmp13;
  }
  let first1;
  if (emojis != null) {
    first1 = emojis.emojis[0];
  }
  let game;
  if (games != null) {
    const first2 = games.games[0];
    if (first2 != null) {
      game = first2.game;
    }
  }
  let id;
  if (first1 != null) {
    id = first1.id;
  }
  if (null != id) {
    const obj2 = { id: first1.id, animated: null, size: 48 };
    let tmp23 = !stateFromStores;
    if (!stateFromStores) {
      tmp23 = true === first1.animated;
    }
    obj2.animated = tmp23;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  let applicationIconURL;
  if (null != game) {
    ({ id: obj8.id, iconHash: obj8.icon } = game);
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, fallbackAvatar: false });
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
  }
  let tmp26Result4 = closure_8(UnknownGameIcon.UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const obj4 = { style: tmp.container, children: null };
  const tmp12 = _slicedToArray(noop.useState(null), 2);
  const items2 = [closure_8(CheckpointRecapCardDefault, { character, maxHeight: diff }), ];
  const obj6 = {
    style: tmp.stats,
    onLayout: function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  const obj9 = { style: tmp.row, children: null };
  const obj10 = { label: null, value: null, color: null };
  const intl = util.intl;
  obj10.label = intl.string(_modDef3088.MSrV9z);
  let num;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  obj10.value = Math.round(num);
  obj10.color = primaryBackgroundColor;
  const items3 = [closure_8(closure_13, obj10), ];
  const obj11 = { label: null, value: null, color: null };
  const intl2 = util.intl;
  obj11.label = intl2.string(_modDef3056.wWKySP);
  let num2;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj11.value = Math.round(num2);
  obj11.color = primaryBackgroundColor;
  items3[1] = closure_8(closure_13, obj11);
  obj9.children = items3;
  const items4 = [closure_9(View, obj9), , , ];
  const obj12 = { style: tmp.row, children: null };
  const obj13 = { label: null, value: null, color: null };
  const intl3 = util.intl;
  obj13.label = intl3.string(_modDef3088["f5S+pt"]);
  let num3;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  obj13.value = Math.round(num3);
  obj13.color = primaryBackgroundColor;
  const items5 = [closure_8(closure_13, obj13), ];
  const obj14 = { label: null, name: null, color: null, icon: null };
  const intl4 = util.intl;
  obj14.label = intl4.string(_modDef3056["8XPMJj"]);
  if (null != first) {
    let name = first.guild.name;
  } else {
    const intl5 = util.intl;
    name = intl5.string(_modDef3088.GultYJ);
  }
  obj14.name = name;
  obj14.color = primaryBackgroundColor;
  let tmp26Result = tmp26Result4;
  if (null != first) {
    const obj15 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    tmp26Result = closure_8(GuildIconDefault, obj15);
    const tmp28Result = GuildIconDefault;
  }
  obj14.icon = tmp26Result;
  items5[1] = closure_8(closure_14, obj14);
  obj12.children = items5;
  items4[1] = closure_9(View, obj12);
  const obj16 = { style: tmp.row, children: null };
  const obj17 = { label: null, value: null, color: null };
  const intl6 = util.intl;
  obj17.label = intl6.string(_modDef3088.xVSlv3);
  let num4;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  obj17.value = Math.round(num4);
  obj17.color = primaryBackgroundColor;
  const items6 = [closure_8(closure_13, obj17), ];
  const obj18 = { label: null, name: null, color: null, icon: null };
  const intl7 = util.intl;
  obj18.label = intl7.string(_modDef3056["3sARW7"]);
  if (null == first1) {
    const intl8 = util.intl;
    let stringResult = intl8.string(util.t.PoWNfe);
  } else if (null == first1.id) {
    stringResult = UnicodeEmojisDefault.convertSurrogateToName(first1.name);
    const tmp28Result3 = UnicodeEmojisDefault;
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = ":" + first1.name + ":";
  }
  obj18.name = stringResult;
  obj18.color = primaryBackgroundColor;
  let tmp26Result3 = tmp26Result4;
  if (null != first1) {
    let str2 = "";
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj19 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj22.style, emoji: obj22.fastImageStyle, textEmoji: obj22.textEmojiStyle } = tmp);
    tmp26Result3 = closure_8(EmojiDefault, obj19);
    const tmp28Result4 = EmojiDefault;
  }
  obj18.icon = tmp26Result3;
  items6[1] = closure_8(closure_14, obj18);
  obj16.children = items6;
  items4[2] = closure_9(View, obj16);
  const obj20 = { style: tmp.row, children: null };
  const obj21 = { label: null, value: null, color: null };
  const intl9 = util.intl;
  obj21.label = intl9.string(_modDef3088.y2Y1DD);
  let num5;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  obj21.value = Math.round(num5);
  obj21.color = primaryBackgroundColor;
  const items7 = [closure_8(closure_13, obj21), ];
  const obj23 = { label: null, name: null, color: null, icon: null };
  const intl10 = util.intl;
  obj23.label = intl10.string(_modDef3056.RbT4Zq);
  if (null != game) {
    let name2 = game.name;
  } else {
    const intl11 = util.intl;
    name2 = intl11.string(util.t.PoWNfe);
  }
  obj23.name = name2;
  obj23.color = primaryBackgroundColor;
  if (null != applicationIconURL) {
    const obj24 = { source: null, style: null };
    const obj25 = { uri: applicationIconURL };
    obj24.source = obj25;
    obj24.style = tmp.itemIcon;
    tmp26Result4 = closure_8(FastImageDefault, obj24);
  }
  const obj26 = { children: null };
  obj23.icon = tmp26Result4;
  items7[1] = closure_8(closure_14, obj23);
  obj20.children = items7;
  items4[3] = closure_9(View, obj20);
  obj6.children = items4;
  items2[1] = closure_9(View, obj6);
  obj4.children = items2;
  obj26.children = closure_9(View, obj4);
  return closure_8(CheckpointScreenDefault, obj26);
});