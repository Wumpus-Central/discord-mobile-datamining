// === Module 15457: ? ===

// Module 15457
import importAllResult from "noop" /* 19 */;
import handleChange from "handleChange" /* 5280 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const section = guildId.section;
  const listRef = guildId.listRef;
  let stateFromStores;
  let obj = guildId(section[3]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.isVoiceCategoryCollapsed(guildId));
  const items1 = [stateFromStores, guildId, section, listRef];
  const callback = listRef.useCallback(() => {
    let obj = guildId(section[4]);
    if (stateFromStores) {
      obj.voiceCategoryExpand(guildId);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { animated: false, section: null, item: 0, paddingStart: null };
          obj[1] = closure_1;
          const _Math = Math;
          obj[3] = Math.round(0.3 * guildId(section[5]).getWindowDimensions().height);
          current.scrollToLocation(obj);
          const obj2 = guildId(section[5]);
        }
      }, 0);
    } else {
      const result = obj.voiceCategoryCollapse(guildId);
      let current = listRef.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const intl = guildId(section[7]).intl;
  const string = intl.string;
  const t = guildId(section[7]).t;
  if (stateFromStores) {
    let stringResult = string(t["/eB9Bg"]);
  } else {
    stringResult = string(t.Q2gPWl);
  }
  obj = { text: stringResult, icon: jsx(guildId(section[8]).VoiceNormalIcon, { size: "sm" }), onPress: callback, variant: "secondary", size: "sm" };
  return jsx(guildId(section[6]).Button, { text: stringResult, icon: jsx(guildId(section[8]).VoiceNormalIcon, { size: "sm" }), onPress: callback, variant: "secondary", size: "sm" });
});
let result = require("obj132").fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default memoResult;