// === Module 16160: ChannelItemEmbeddedActivities ===

// Module 16160 (ChannelItemEmbeddedActivities)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import GameIcon from "GameIcon" /* 6667 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GameIconDefault = GameIcon;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 }, overflowContainer: obj2, container: { display: "flex", flexDirection: "row" }, modeMuted: { opacity: 0.3 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Text;
  let embeddedApps;
  let items;
  let items1;
  let muted;
  let obj8;
  const obj = react2;
  const cResult = obj.c(20);
  ({ embeddedApps, size, muted } = arg0);
  if (undefined === size) {
    size = GameIcon.GameIconSizes.SIZE_24;
  }
  const tmp4 = closure_6();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    if (muted) {
      muted = tmp4.modeMuted;
    }
    if (cResult[0] === embeddedApps[0].application) {
      if (cResult[1] === size) {
        let tmp18;
        if (cResult[2] === muted) {
          tmp18 = cResult[3];
        }
        return tmp18;
      }
    }
    const obj2 = { game: embeddedApps[0].application, size, style: muted };
    const tmp21 = React3(GameIconDefault, obj2);
    cResult[0] = embeddedApps[0].application;
    cResult[1] = size;
    cResult[2] = muted;
    cResult[3] = tmp21;
    tmp18 = tmp21;
  } else {
    let tmp5;
    const application = embeddedApps[0].application;
    const application2 = embeddedApps[1].application;
    const diff = embeddedApps.length - 1;
    const tmp24 = GameIcon.GameIconImageSize[size];
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { marginRight: 4 };
      cResult[4] = obj3;
      tmp5 = obj3;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === application) {
      let tmp6;
      let tmp13;
      if (cResult[6] === size) {
        tmp6 = cResult[7];
      }
      if (cResult[8] === embeddedApps.length) {
        if (cResult[9] === diff) {
          if (cResult[10] === tmp24) {
            if (cResult[11] === application2) {
              if (cResult[12] === size) {
                if (cResult[13] === tmp4.overflow) {
                  let tmp10;
                  if (cResult[14] === tmp4.overflowContainer) {
                    tmp10 = cResult[15];
                  }
                  if (cResult[16] === tmp4.container) {
                    if (cResult[17] === tmp6) {
                      let tmp14;
                      if (cResult[18] === tmp10) {
                        tmp14 = cResult[19];
                      }
                      return tmp14;
                    }
                  }
                  const obj4 = { style: tmp4.container, children: items };
                  items = [tmp6, tmp10];
                  const tmp17 = hasOwnProperty(View, obj4);
                  cResult[16] = tmp4.container;
                  cResult[17] = tmp6;
                  cResult[18] = tmp10;
                  cResult[19] = tmp17;
                  tmp14 = tmp17;
                }
              }
            }
          }
        }
      }
      if (2 === embeddedApps.length) {
        const obj5 = { game: application2, size };
        tmp13 = React3(GameIconDefault, obj5);
      } else {
        const obj6 = { style: items1, children: React3(Text, obj8) };
        items1 = [tmp4.overflowContainer, ];
        const obj7 = { height: tmp24, minWidth: tmp24 };
        items1[1] = obj7;
        const _HermesInternal = HermesInternal;
        obj8 = { style: tmp4.overflow, variant: "text-xs/bold", children: "+" + diff };
        Text = Text_Text.Text;
        tmp13 = React3(View, obj6);
      }
      cResult[8] = embeddedApps.length;
      cResult[9] = diff;
      cResult[10] = tmp24;
      cResult[11] = application2;
      cResult[12] = size;
      cResult[13] = tmp4.overflow;
      cResult[14] = tmp4.overflowContainer;
      cResult[15] = tmp13;
      tmp10 = tmp13;
    }
    const obj9 = { game: application, size, style: tmp5 };
    const tmp9 = React3(GameIconDefault, obj9);
    cResult[5] = application;
    cResult[6] = size;
    cResult[7] = tmp9;
    tmp6 = tmp9;
  }
}) : ((muted) => {
  let Text;
  let embeddedApps;
  let items;
  let items1;
  let obj7;
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = GameIcon.GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = closure_6();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    const obj2 = { game: embeddedApps[0].application, size, style: modeMuted };
    const tmp8 = GameIconDefault;
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    return React3(tmp8, obj2);
  } else {
    let tmp16Result;
    const application = embeddedApps[0].application;
    const application2 = embeddedApps[1].application;
    const diff = embeddedApps.length - 1;
    const tmp13 = GameIcon.GameIconImageSize[size];
    const obj3 = { style: tmp3.container, children: items };
    const obj4 = { game: application, size, style: { marginRight: 4 } };
    items = [React3(GameIconDefault, obj4), ];
    if (2 === embeddedApps.length) {
      const obj = { game: application2, size };
      tmp16Result = React3(GameIconDefault, obj);
    } else {
      const obj5 = { style: items1, children: React3(Text, obj7) };
      items1 = [tmp3.overflowContainer, ];
      const obj6 = { height: tmp13, minWidth: tmp13 };
      items1[1] = obj6;
      const _HermesInternal = HermesInternal;
      obj7 = { style: tmp3.overflow, variant: "text-xs/bold", children: "+" + diff };
      Text = Text_Text.Text;
      tmp16Result = React3(View, obj5);
    }
    items[1] = tmp16Result;
    return hasOwnProperty(View, obj3);
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default tmp4;