// === Module 16159: ShowAllVoiceChannelsButton ===

// Module 16159 (ShowAllVoiceChannelsButton)
import Fragment from "Fragment" /* 21 */;
import VoiceCategoryActionCreators from "VoiceCategoryActionCreators" /* 16160 */;
import react from "react" /* 19 */;
import ChannelListVoiceCategoryStore from "ChannelListVoiceCategoryStore" /* 7057 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let flag, guildId, num, scrollToTopResult, tmp3, tmp4, voiceCategoryExpandResult;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let section;
  let stateFromStores;
  let tmp6;
  let obj = guildId(section[4]);
  const cResult = obj.c(14);
  guildId = guildId.guildId;
  section = guildId.section;
  const listRef = guildId.listRef;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(section[5]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === guildId) {
      if (cResult[5] === listRef) {
        let tmp8;
        let tmp9;
        let tmp11;
        if (cResult[6] === section) {
          tmp8 = cResult[7];
        }
        if (cResult[8] !== stateFromStores) {
          let stringResult;
          const intl = tmp(tmp2[8]).intl;
          const string = intl.string;
          const t = tmp(tmp2[8]).t;
          if (stateFromStores) {
            stringResult = string(t["/eB9Bg"]);
          } else {
            stringResult = string(t.Q2gPWl);
          }
          cResult[8] = stateFromStores;
          cResult[9] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = jsx(guildId(section[9]).VoiceNormalIcon, { size: "sm" });
          cResult[10] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] === tmp8) {
          let tmp14;
          if (cResult[12] === tmp9) {
            tmp14 = cResult[13];
          }
          return tmp14;
        }
        const tmp16 = jsx(guildId(section[10]).Button, { text: tmp9, icon: tmp11, onPress: tmp8, variant: "secondary", size: "sm" });
        cResult[11] = tmp8;
        cResult[12] = tmp9;
        cResult[13] = tmp16;
        tmp14 = tmp16;
      }
    }
  }
  class C {
    constructor() {
      obj = closure_0(closure_1[6]);
      if (closure_3) {
        tmp6 = guildId;
        voiceCategoryExpandResult = obj.voiceCategoryExpand(guildId);
        tmp8 = globalThis;
        _setTimeout = setTimeout;
        num = 0;
        timerId = setTimeout(() => {
          let obj2;
          let round;
          const current = ref.current;
          if (current != null) {
            const _Math = Math;
            const scrollToLocation = current.scrollToLocation;
            const obj = { animated: false, section, item: 0, paddingStart: round(0.3 * obj2.getWindowDimensions().height) };
            round = Math.round;
            obj2 = guildId(section[7]);
            scrollToLocation(obj);
          }
        }, 0);
      } else {
        tmp = guildId;
        result = obj.voiceCategoryCollapse(guildId);
        tmp3 = listRef;
        current = listRef.current;
        tmp4 = null;
        if (current != null) {
          flag = false;
          scrollToTopResult = current.scrollToTop(false);
        }
      }
      return;
    }
  }
  cResult[3] = stateFromStores;
  cResult[4] = guildId;
  cResult[5] = listRef;
  cResult[6] = section;
  cResult[7] = C;
  tmp8 = C;
}) : ((guildId) => {
  let stringResult;
  guildId = guildId.guildId;
  const section = guildId.section;
  const listRef = guildId.listRef;
  let stateFromStores;
  let obj = guildId(section[5]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guildId));
  const items1 = [stateFromStores, guildId, section, listRef];
  const callback = listRef.useCallback(() => {
    let ref;
    let obj = VoiceCategoryActionCreators;
    if (stateFromStores) {
      obj.voiceCategoryExpand(guildId);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj2;
        let round;
        const current = ref.current;
        if (current != null) {
          const _Math = Math;
          const scrollToLocation = current.scrollToLocation;
          const obj = { animated: false, section, item: 0, paddingStart: round(0.3 * obj2.getWindowDimensions().height) };
          round = Math.round;
          obj2 = guildId(section[7]);
          scrollToLocation(obj);
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
  const Button = guildId(section[10]).Button;
  const intl = guildId(section[8]).intl;
  const string = intl.string;
  const t = guildId(section[8]).t;
  const tmp = guildId;
  const tmp2 = section;
  if (stateFromStores) {
    stringResult = string(t["/eB9Bg"]);
  } else {
    stringResult = string(t.Q2gPWl);
  }
  return <Button text={stringResult} icon={jsx(tmp(tmp2[9]).VoiceNormalIcon, { size: "sm" })} onPress={callback} variant="secondary" size="sm" />;
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default memoResult;