// === Module 11957: GuildDirectoryEditDescriptionModal ===

// Module 11957 (GuildDirectoryEditDescriptionModal)
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 11956 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11958 */;
import GuildDirectoryEditDescriptionTemplateDefault from "GuildDirectoryEditDescriptionTemplate" /* 11959 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, entry;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function headerTitle() {
  return null;
}
function render() {
  const obj = {};
  const merged = Object.assign(closure_0);
  return metroImportDefault(closure_10, obj);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { safeArea: obj2, container: { flex: 1 }, title: { marginBottom: 8, textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 } };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let container;
  let header;
  let items;
  let safeArea;
  let title;
  let obj = entry(576);
  const cResult = obj.c(22);
  entry = entry.entry;
  const tmp4 = closure_9();
  if (cResult[0] === entry.channelId) {
    let tmp5;
    let tmp6;
    if (cResult[1] === entry.guildId) {
      tmp5 = cResult[2];
    }
    ({ safeArea, container, header, title } = tmp4);
    if (cResult[3] !== entry.name) {
      const intl = tmp(1126).intl;
      let obj2 = { guildName: entry.name };
      const formatResult = intl.format(entry(1126).t.w9tsNk, obj2);
      cResult[3] = entry.name;
      cResult[4] = formatResult;
      tmp6 = formatResult;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.title) {
      let tmp8;
      if (cResult[6] === tmp6) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === tmp4.header) {
        let tmp11;
        let tmp16;
        if (cResult[9] === tmp8) {
          tmp11 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(entry(1126).t["R3BPH+"]);
          cResult[11] = stringResult;
          tmp16 = stringResult;
        } else {
          tmp16 = cResult[11];
        }
        if (cResult[12] === entry) {
          let tmp18;
          if (cResult[13] === tmp5) {
            tmp18 = cResult[14];
          }
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp18) {
              let tmp22;
              if (cResult[17] === tmp11) {
                tmp22 = cResult[18];
              }
              if (cResult[19] === tmp4.safeArea) {
                let tmp26;
                if (cResult[20] === tmp22) {
                  tmp26 = cResult[21];
                }
                return tmp26;
              }
              let obj3 = { top: true, style: safeArea, children: tmp22 };
              const tmp28 = closure_7(entry(6626).SafeAreaPaddingView, obj3);
              cResult[19] = tmp4.safeArea;
              cResult[20] = tmp22;
              cResult[21] = tmp28;
              tmp26 = tmp28;
            }
          }
          let obj4 = { style: container, keyboardShouldPersistTaps: "handled", children: items };
          items = [tmp11, tmp18];
          const tmp25 = closure_8(closure_6, obj4);
          cResult[15] = tmp4.container;
          cResult[16] = tmp18;
          cResult[17] = tmp11;
          cResult[18] = tmp25;
          tmp22 = tmp25;
        }
        let obj5 = { onSubmit: tmp5, buttonLabel: tmp16, entry, directoryChannelId: entry.channelId };
        const tmp21 = closure_7(GuildDirectoryEditDescriptionTemplateDefault, obj5);
        cResult[12] = entry;
        cResult[13] = tmp5;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
      let obj6 = { style: header, children: tmp8 };
      const tmp14 = closure_7(closure_5, obj6);
      cResult[8] = tmp4.header;
      cResult[9] = tmp8;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    const obj7 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp6 };
    const tmp10 = closure_7(entry(4892).Text, obj7);
    cResult[5] = tmp4.title;
    cResult[6] = tmp6;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp3;
            const obj3 = GuildDirectoryActionCreatorsAll;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.updateDirectoryEntry(closure_0.channelId, closure_0.guildId, closure_0, closure_1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj = GuildDirectoryEditDescriptionModalActionCreatorsDefault;
          obj.close();
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c4 = 3;
        throw tmp14;
      }
    }
  });
  function onSubmit() {
    return closure_0(...arguments);
  }
  cResult[0] = entry.channelId;
  cResult[1] = entry.guildId;
  cResult[2] = onSubmit;
  tmp5 = onSubmit;
}) : ((entry) => {
  let Text;
  let intl;
  let intl2;
  let items;
  let obj2;
  let obj4;
  let obj5;
  entry = entry.entry;
  let obj = function _onSubmit2() {
    obj = _asyncToGenerator(async (arg0, arg1) => {
      let closure_2;
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj3 = tmp3(c3[8]);
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.updateDirectoryEntry(entry.channelId, entry.guildId, closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = closure_1(c3[9]);
            obj.close();
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_9();
  obj = { top: true, style: tmp.safeArea, children: closure_8(closure_6, obj2) };
  obj2 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: items };
  let obj3 = { style: tmp.header, children: closure_7(Text, obj4) };
  const SafeAreaPaddingView = entry(6626).SafeAreaPaddingView;
  obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.format(entry(1126).t.w9tsNk, obj5) };
  Text = entry(4892).Text;
  intl = entry(1126).intl;
  obj5 = { guildName: entry.name };
  items = [closure_7(closure_5, obj3), ];
  let obj6 = {
    onSubmit(arg0, arg1) {
      return obj(...arguments);
    },
    buttonLabel: intl2.string(entry(1126).t["R3BPH+"]),
    entry,
    directoryChannelId: entry.channelId
  };
  const tmp2 = obj(11959);
  intl2 = entry(1126).intl;
  items[1] = closure_7(tmp2, obj6);
  return closure_7(SafeAreaPaddingView, obj);
});
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryEditDescriptionModal(arg0) {
  let closure_0;
  let tmp4;
  let tmp7;
  let tmpResult;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] !== arg0) {
    _require = arg0;
    const obj2 = {};
    const obj3 = { fullscreen: true, headerLeft: tmpResult.getHeaderCloseButton(GuildDirectoryEditDescriptionModalActionCreatorsDefault.close), headerTitle, render };
    obj2[EDIT_DESCRIPTION] = obj3;
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
    tmpResult = require("NavigatorHeader");
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj4 = { screens: tmp4, initialRouteName: EDIT_DESCRIPTION };
    const tmp10 = closure_7(require("Navigator").Navigator, obj4);
    cResult[2] = tmp4;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function GuildDirectoryEditDescriptionModal(arg0) {
  let closure_0;
  let obj2;
  let obj4;
  let obj = { screens: obj2, initialRouteName: EDIT_DESCRIPTION };
  _require = arg0;
  obj2 = {};
  const obj3 = { fullscreen: true, headerLeft: obj4.getHeaderCloseButton(GuildDirectoryEditDescriptionModalActionCreatorsDefault.close), headerTitle, render };
  const Navigator = require("Navigator").Navigator;
  obj2[EDIT_DESCRIPTION] = obj3;
  obj4 = require("NavigatorHeader");
  return closure_7(Navigator, obj);
});
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default tmp5;