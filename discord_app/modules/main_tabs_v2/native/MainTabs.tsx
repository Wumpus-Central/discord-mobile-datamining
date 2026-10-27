// discord_app/modules/main_tabs_v2/native/MainTabs.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useActiveTheme from "../../client_themes/native/useActiveTheme.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import MainTabsNavigatorPanelDefault from "panels/MainTabsNavigatorPanel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4972);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, top) => {
  const obj = {
    container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight },
    content: { flex: 1 },
    duoContainer: null,
    duoContent: null,
    duoBorderClip: null,
    duoBorder: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight };
  obj.duoContainer = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    paddingTop: nativeDefault.space.PX_32,
  };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: nativeDefault.space.PX_32 };
  obj.duoContent = { borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" };
  const obj5 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj5.top = top;
  obj5.left = undefined;
  obj5.width = nativeDefault.radii.md;
  obj5.overflow = "hidden";
  obj.duoBorderClip = obj5;
  const obj6 = {};
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj6.top = -top;
  obj6.borderTopRightRadius = nativeDefault.radii.md;
  obj6.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj6.borderRightWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj6.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj.duoBorder = obj6;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MainTabs() {
        const cResult = c.c(31);
        const tmp5 = useColorThemeBackgroundDefault();
        const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
        ({ left, right } = useSafeAreaInsetsDefault());
        const tmp7 = useSafeAreaInsetsDefault();
        const tmp8 = closure_7(
          left,
          right,
          useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH),
        );
        if (cResult[0] !== (left > 0 || right > 0)) {
          const tmp11 = DeviceUtils.isDuo() && tmp9;
          cResult[0] = tmp9;
          cResult[1] = tmp11;
          let tmp10 = tmp11;
          const tmpResult = DeviceUtils;
        } else {
          tmp10 = cResult[1];
        }
        let duoContainer = tmp10;
        if (tmp10) {
          duoContainer = tmp8.duoContainer;
        }
        if (cResult[2] === tmp8.container) {
          if (cResult[3] === duoContainer) {
            let tmp12 = cResult[4];
          }
          if (cResult[5] === tmp10) {
            if (cResult[6] === tmp9) {
              let tmp13 = cResult[7];
            }
            let duoContent = tmp10;
            if (tmp10) {
              duoContent = tmp8.duoContent;
            }
            if (cResult[8] === tmp8.content) {
              if (cResult[9] === duoContent) {
                let tmp16 = cResult[10];
              }
              if (cResult[11] !== isCustomThemeActive) {
                const obj4 = { absolute: true, mix: isCustomThemeActive };
                const tmp19 = hasOwnProperty(ThemedGradientDefault, obj4);
                cResult[11] = isCustomThemeActive;
                cResult[12] = tmp19;
                let tmp17 = tmp19;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] !== !tmp10) {
                const obj5 = { showHeaderGradient: tmp20 };
                const tmp23 = hasOwnProperty(MainTabsNavigatorPanelDefault, obj5);
                cResult[13] = tmp20;
                cResult[14] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] === tmp10) {
                if (cResult[16] === tmp8.duoBorder) {
                  if (cResult[17] === tmp8.duoBorderClip) {
                    let tmp24 = cResult[18];
                  }
                  if (cResult[19] === tmp16) {
                    if (cResult[20] === tmp17) {
                      if (cResult[21] === tmp21) {
                        if (cResult[22] === tmp24) {
                          let tmp28 = cResult[23];
                        }
                        if (cResult[24] === tmp5) {
                          if (cResult[25] === tmp28) {
                            if (cResult[26] === tmp13) {
                              let tmp32 = cResult[27];
                            }
                            if (cResult[28] === tmp32) {
                              if (cResult[29] === tmp12) {
                                let tmp35 = cResult[30];
                              }
                              return tmp35;
                            }
                            const obj6 = { style: tmp12, children: tmp32 };
                            const tmp38 = hasOwnProperty(React4, obj6);
                            cResult[28] = tmp32;
                            cResult[29] = tmp12;
                            cResult[30] = tmp38;
                            tmp35 = tmp38;
                          }
                        }
                        const obj7 = { gradient: tmp5, children: null };
                        const items = [tmp13, tmp28];
                        obj7.children = items;
                        const tmp34 = timestampProducer(native.ThemeContextProvider, obj7);
                        cResult[24] = tmp5;
                        cResult[25] = tmp28;
                        cResult[26] = tmp13;
                        cResult[27] = tmp34;
                        tmp32 = tmp34;
                      }
                    }
                  }
                  const obj8 = { style: tmp16, children: null };
                  const items1 = [tmp17, tmp21, tmp24];
                  obj8.children = items1;
                  const tmp31 = timestampProducer(React4, obj8);
                  cResult[19] = tmp16;
                  cResult[20] = tmp17;
                  cResult[21] = tmp21;
                  cResult[22] = tmp24;
                  cResult[23] = tmp31;
                  tmp28 = tmp31;
                }
              }
              let tmp25 = null;
              if (tmp10) {
                const obj9 = { style: tmp8.duoBorderClip, pointerEvents: "none", children: null };
                const obj10 = { style: tmp8.duoBorder };
                obj9.children = hasOwnProperty(React4, obj10);
                tmp25 = hasOwnProperty(React4, obj9);
              }
              cResult[15] = tmp10;
              cResult[16] = tmp8.duoBorder;
              cResult[17] = tmp8.duoBorderClip;
              cResult[18] = tmp25;
              tmp24 = tmp25;
            }
            const items2 = [tmp8.content, duoContent];
            cResult[8] = tmp8.content;
            cResult[9] = duoContent;
            cResult[10] = items2;
            tmp16 = items2;
          }
          let tmp14 = null;
          if (tmp9) {
            tmp14 = null;
            if (!tmp10) {
              tmp14 = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
            }
          }
          cResult[5] = tmp10;
          cResult[6] = tmp9;
          cResult[7] = tmp14;
          tmp13 = tmp14;
        }
        const items3 = [tmp8.container, duoContainer];
        cResult[2] = tmp8.container;
        cResult[3] = duoContainer;
        cResult[4] = items3;
        tmp12 = items3;
      }
    : function MainTabs() {
        const tmp3 = useColorThemeBackgroundDefault();
        const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
        ({ left, right } = useSafeAreaInsetsDefault());
        const tmp6 = useSafeAreaInsetsDefault();
        const tmp7 = closure_7(
          left,
          right,
          useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH),
        );
        const tmp9 = DeviceUtils.isDuo() && (left > 0 || right > 0);
        const items = [tmp7.container];
        let duoContainer = tmp9;
        if (tmp9) {
          duoContainer = tmp7.duoContainer;
        }
        const obj3 = { style: items, children: null };
        items[1] = duoContainer;
        const obj4 = { gradient: tmp3, children: null };
        let tmp10Result = null;
        if (left > 0 || right > 0) {
          tmp10Result = null;
          if (!tmp9) {
            tmp10Result = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
          }
        }
        const items1 = [tmp10Result];
        const items2 = [tmp7.content];
        let duoContent = tmp9;
        if (tmp9) {
          duoContent = tmp7.duoContent;
        }
        const obj5 = { style: items2, children: null };
        items2[1] = duoContent;
        const items3 = [
          hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }),
          hasOwnProperty(MainTabsNavigatorPanelDefault, { showHeaderGradient: !tmp9 }),
        ];
        let tmp10Result2 = null;
        if (tmp9) {
          const obj7 = { style: tmp7.duoBorderClip, pointerEvents: "none", children: null };
          const obj8 = { style: tmp7.duoBorder };
          obj7.children = hasOwnProperty(React4, obj8);
          tmp10Result2 = hasOwnProperty(React4, obj7);
        }
        items3[2] = tmp10Result2;
        obj5.children = items3;
        items1[1] = timestampProducer(React4, obj5);
        obj4.children = items1;
        obj3.children = timestampProducer(native.ThemeContextProvider, obj4);
        return hasOwnProperty(React4, obj3);
      },
);
