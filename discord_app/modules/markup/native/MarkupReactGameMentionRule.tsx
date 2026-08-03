import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { icon: null, chip: null, chipText: null };
createCacheKey = { width: 16, height: 16, borderRadius: require("Themes").radii.xs, marginRight: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.xs, paddingHorizontal: 2 };
let obj1 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.xs, paddingHorizontal: 2 };
createCacheKey[2] = { color: require("Themes").unsafe_rawColors.BRAND_500 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: require("Themes").unsafe_rawColors.BRAND_500 };
const result = require("createCacheKey").fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default function MarkupGameMention(arg0) {
  let c1;
  let gameName;
  let icon;
  let node;
  let state;
  ({ node, state } = arg0);
  let importDefault;
  const tmp = createCacheKey();
  ({ gameId: c1, gameName, icon } = node);
  const intl = state(1236).intl;
  const stringResult = intl.string(state(1236).t["11pdXZ"]);
  let tmp5 = null != gameName;
  if (tmp5) {
    tmp5 = "" !== gameName;
  }
  let tmp6 = stringResult;
  if (tmp5) {
    tmp6 = gameName;
  }
  if (tmp5) {
    let obj = { size: "sm", style: null };
    obj[1] = tmp.icon;
    let tmp11 = null != icon;
    if (tmp11) {
      tmp11 = "" !== icon;
    }
    let tmp9Result = callback(tmp2(7738).UnknownGameIcon, obj);
    if (tmp11) {
      obj = { style: null, source: null };
      obj[0] = tmp.icon;
      const obj1 = { uri: null };
      obj1[0] = icon;
      obj[1] = obj1;
      tmp9Result = tmp9(importDefault(5207), obj);
    }
    let str3 = "button";
    if (state.noStyleAndInteraction) {
      str3 = "text";
    }
    const obj2 = { accessibilityRole: null, style: null, color: null, onPress: null, children: null };
    obj2[0] = str3;
    obj2[1] = tmp.chip;
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    obj2[2] = textColor;
    let fn;
    if (!state.noStyleAndInteraction) {
      fn = () => {
        let obj = _undefined(outer1_2[8]);
        obj = { gameId: _undefined, gameProfileModalChecks: obj, source: state(outer1_2[9]).GameProfileSources.GameMention, sourceUserId: state.authorId };
        obj = { shouldOpenGameProfile: true, gameId: _undefined };
        obj.openGameProfileModal(obj);
      };
    }
    obj2[3] = fn;
    const items = [tmp9Result, ];
    const obj3 = { variant: "text-sm/medium", style: null, children: null };
    obj3[1] = tmp.chipText;
    obj3[2] = tmp6;
    items[1] = callback(tmp2(4251).Text, obj3);
    obj2[4] = items;
    return closure_3(tmp2(4246).MarkupText, obj2, state.key);
  } else {
    let textColor1;
    if (state != null) {
      textColor1 = state.textColor;
    }
    obj = { color: null, children: null };
    obj[0] = textColor1;
    const items1 = ["@", stringResult];
    obj[1] = items1;
    return closure_3(tmp2(4246).MarkupText, obj, state.key);
  }
};