// discord_app/modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const GameIconDefault = GameIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 },
  overflowContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.xs,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: { display: "flex", flexDirection: "row" },
  modeMuted: { opacity: 0.3 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelItemEmbeddedActivities(arg0) {
      const cResult = c.c(20);
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
            if (cResult[2] === muted) {
              let tmp19 = cResult[3];
            }
            return tmp19;
          }
        }
        const obj2 = { game: embeddedApps[0].application, size, style: muted };
        const tmp22 = React4(GameIconDefault, obj2);
        cResult[0] = embeddedApps[0].application;
        cResult[1] = size;
        cResult[2] = muted;
        cResult[3] = tmp22;
        tmp19 = tmp22;
      } else {
        const application = embeddedApps[0].application;
        overflowContainer = embeddedApps[1].application;
        const diff = embeddedApps.length - 1;
        const tmp25 = GameIcon.GameIconImageSize[size];
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { marginRight: 4 };
          cResult[4] = obj3;
          let tmp5 = obj3;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === application) {
          if (cResult[6] === size) {
            let tmp6 = cResult[7];
          }
          if (cResult[8] === embeddedApps.length) {
            if (cResult[9] === diff) {
              if (cResult[10] === tmp25) {
                if (cResult[11] === overflowContainer) {
                  if (cResult[12] === size) {
                    if (cResult[13] === tmp4.overflow) {
                      if (cResult[14] === tmp4.overflowContainer) {
                        if (cResult[16] === tmp4.container) {
                          if (cResult[17] === tmp6) {
                            if (cResult[18] === tmp10) {
                              let tmp15 = cResult[19];
                            }
                            return tmp15;
                          }
                        }
                        const obj4 = { style: tmp4.container, children: null };
                        const items = [tmp6, cResult[15]];
                        obj4.children = items;
                        const tmp18 = hasOwnProperty(View, obj4);
                        cResult[16] = tmp4.container;
                        cResult[17] = tmp6;
                        cResult[18] = cResult[15];
                        cResult[19] = tmp18;
                        tmp15 = tmp18;
                      }
                    }
                  }
                }
              }
            }
          }
          if (2 === embeddedApps.length) {
            const obj5 = { game: overflowContainer, size };
            let tmp13 = React4(GameIconDefault, obj5);
          } else {
            const obj6 = { style: null, children: null };
            const items1 = [tmp4.overflowContainer];
            const obj7 = { height: tmp25, minWidth: tmp25 };
            items1[1] = obj7;
            obj6.style = items1;
            const obj8 = { style: tmp4.overflow, variant: "text-xs/bold", children: null };
            const _HermesInternal = HermesInternal;
            obj8.children = "+" + diff;
            obj6.children = React4(Text_Text.Text, obj8);
            tmp13 = React4(View, obj6);
          }
          cResult[8] = embeddedApps.length;
          cResult[9] = diff;
          cResult[10] = tmp25;
          cResult[11] = overflowContainer;
          cResult[12] = size;
          ({ overflow: tmp3[13], overflowContainer } = tmp4);
          cResult[14] = overflowContainer;
          cResult[15] = tmp13;
        }
        const obj9 = { game: application, size, style: tmp5 };
        const tmp9 = React4(GameIconDefault, obj9);
        cResult[5] = application;
        cResult[6] = size;
        cResult[7] = tmp9;
        tmp6 = tmp9;
      }
    }
  : function ChannelItemEmbeddedActivities(muted) {
      ({ embeddedApps, size } = muted);
      if (size === undefined) {
        size = GameIcon.GameIconSizes.SIZE_24;
      }
      let modeMuted = muted.muted;
      const tmp3 = closure_6();
      if (embeddedApps.length <= 0) {
        return null;
      } else if (1 === embeddedApps.length) {
        const obj2 = { game: embeddedApps[0].application, size, style: null };
        if (modeMuted) {
          modeMuted = tmp3.modeMuted;
        }
        obj2.style = modeMuted;
        return React4(GameIconDefault, obj2);
      } else {
        const diff = embeddedApps.length - 1;
        const tmp13 = GameIcon.GameIconImageSize[size];
        const obj3 = { style: tmp3.container, children: null };
        const obj4 = { game: embeddedApps[0].application, size, style: { marginRight: 4 } };
        const items = [React4(GameIconDefault, obj4)];
        if (2 === embeddedApps.length) {
          const obj = { game: embeddedApps[1].application, size };
          let tmp16Result = React4(GameIconDefault, obj);
        } else {
          const obj5 = { style: null, children: null };
          const items1 = [tmp3.overflowContainer];
          const obj6 = { height: tmp13, minWidth: tmp13 };
          items1[1] = obj6;
          obj5.style = items1;
          const obj7 = { style: tmp3.overflow, variant: "text-xs/bold", children: null };
          const _HermesInternal = HermesInternal;
          obj7.children = "+" + diff;
          obj5.children = React4(Text_Text.Text, obj7);
          tmp16Result = React4(View, obj5);
        }
        items[1] = tmp16Result;
        obj3.children = items;
        return hasOwnProperty(View, obj3);
      }
    };
