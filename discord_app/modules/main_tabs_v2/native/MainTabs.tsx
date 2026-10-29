// === Module 17937: MainTabs ===

// Module 17937 (MainTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import native from "native" /* 5071 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5183 */;
import useChatLayoutDefault from "useChatLayout" /* 5190 */;
import useToken from "useToken" /* 5289 */;
import useActiveTheme from "useActiveTheme" /* 9776 */;
import ThemedGradientDefault from "ThemedGradient" /* 10693 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 17938 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, marginTop, top) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, frameContainer: null, frameContent: null, framePanels: null, frameBorderClip: null, frameBorder: null };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: null };
  let num = 0;
  if (marginTop <= 0) {
    num = nativeDefault.space.PX_16;
  }
  obj3.paddingTop = num;
  obj.frameContainer = obj3;
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight };
  obj.frameContent = { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj.framePanels = { marginTop: -marginTop };
  const obj5 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj5.top = top;
  obj5.left = undefined;
  obj5.width = nativeDefault.radii.md;
  obj5.overflow = "hidden";
  obj.frameBorderClip = obj5;
  const obj6 = {};
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj6.top = -top;
  obj6.borderTopRightRadius = nativeDefault.radii.md;
  obj6.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj6.borderRightWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj6.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj.frameBorder = obj6;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MainTabs() {
  const cResult = c.c(35);
  const tmp5 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  ({ left, right, top } = useSafeAreaInsetsDefault());
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const tmp7 = useSafeAreaInsetsDefault();
  const tmp8 = closure_7(left, right, top, useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (isChatLockedOpen) {
    isChatLockedOpen = right > 0;
  }
  let frameContainer = isChatLockedOpen;
  if (isChatLockedOpen) {
    frameContainer = tmp8.frameContainer;
  }
  if (cResult[0] === tmp8.container) {
    if (cResult[1] === frameContainer) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === isChatLockedOpen) {
      if (cResult[4] === tmp9) {
        let tmp11 = cResult[5];
      }
      let frameContent = isChatLockedOpen;
      if (isChatLockedOpen) {
        frameContent = tmp8.frameContent;
      }
      if (cResult[6] === tmp8.content) {
        if (cResult[7] === frameContent) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] !== isCustomThemeActive) {
          const obj4 = { absolute: true, mix: isCustomThemeActive };
          const tmp17 = hasOwnProperty(ThemedGradientDefault, obj4);
          cResult[9] = isCustomThemeActive;
          cResult[10] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        let framePanels = isChatLockedOpen;
        if (isChatLockedOpen) {
          framePanels = tmp8.framePanels;
        }
        if (cResult[11] === tmp8.content) {
          if (cResult[12] === framePanels) {
            let tmp18 = cResult[13];
          }
          if (cResult[14] !== !isChatLockedOpen) {
            const obj5 = { showHeaderGradient: tmp19 };
            const tmp22 = hasOwnProperty(MainTabsNavigatorPanelDefault, obj5);
            cResult[14] = tmp19;
            cResult[15] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[15];
          }
          if (cResult[16] === tmp18) {
            if (cResult[17] === tmp20) {
              let tmp23 = cResult[18];
            }
            if (cResult[19] === isChatLockedOpen) {
              if (cResult[20] === tmp8.frameBorder) {
                if (cResult[21] === tmp8.frameBorderClip) {
                  let tmp27 = cResult[22];
                }
                if (cResult[23] === tmp23) {
                  if (cResult[24] === tmp27) {
                    if (cResult[25] === tmp14) {
                      if (cResult[26] === tmp15) {
                        let tmp31 = cResult[27];
                      }
                      if (cResult[28] === tmp5) {
                        if (cResult[29] === tmp31) {
                          if (cResult[30] === tmp11) {
                            let tmp35 = cResult[31];
                          }
                          if (cResult[32] === tmp10) {
                            if (cResult[33] === tmp35) {
                              let tmp38 = cResult[34];
                            }
                            return tmp38;
                          }
                          const obj6 = { style: tmp10, children: tmp35 };
                          const tmp41 = hasOwnProperty(React4, obj6);
                          cResult[32] = tmp10;
                          cResult[33] = tmp35;
                          cResult[34] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                      const obj7 = { gradient: tmp5, children: null };
                      const items = [tmp11, tmp31];
                      obj7.children = items;
                      const tmp37 = timestampProducer(native.ThemeContextProvider, obj7);
                      cResult[28] = tmp5;
                      cResult[29] = tmp31;
                      cResult[30] = tmp11;
                      cResult[31] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                }
                const obj8 = { style: tmp14, children: null };
                const items1 = [tmp15, tmp23, tmp27];
                obj8.children = items1;
                const tmp34 = timestampProducer(React4, obj8);
                cResult[23] = tmp23;
                cResult[24] = tmp27;
                cResult[25] = tmp14;
                cResult[26] = tmp15;
                cResult[27] = tmp34;
                tmp31 = tmp34;
              }
            }
            let tmp28 = null;
            if (isChatLockedOpen) {
              const obj9 = { style: tmp8.frameBorderClip, pointerEvents: "none", children: null };
              const obj10 = { style: tmp8.frameBorder };
              obj9.children = hasOwnProperty(React4, obj10);
              tmp28 = hasOwnProperty(React4, obj9);
            }
            cResult[19] = isChatLockedOpen;
            cResult[20] = tmp8.frameBorder;
            cResult[21] = tmp8.frameBorderClip;
            cResult[22] = tmp28;
            tmp27 = tmp28;
          }
          const obj11 = { style: tmp18, children: tmp20 };
          const tmp26 = hasOwnProperty(React4, obj11);
          cResult[16] = tmp18;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
        const items2 = [tmp8.content, framePanels];
        cResult[11] = tmp8.content;
        cResult[12] = framePanels;
        cResult[13] = items2;
        tmp18 = items2;
      }
      const items3 = [tmp8.content, frameContent];
      cResult[6] = tmp8.content;
      cResult[7] = frameContent;
      cResult[8] = items3;
      tmp14 = items3;
    }
    let tmp12 = null;
    if (tmp9) {
      tmp12 = null;
      if (!isChatLockedOpen) {
        tmp12 = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
      }
    }
    cResult[3] = isChatLockedOpen;
    cResult[4] = tmp9;
    cResult[5] = tmp12;
    tmp11 = tmp12;
  }
  const items4 = [tmp8.container, frameContainer];
  cResult[0] = tmp8.container;
  cResult[1] = frameContainer;
  cResult[2] = items4;
  tmp10 = items4;
}) : (function MainTabs() {
  const tmp3 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  ({ left, right, top } = useSafeAreaInsetsDefault());
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const tmp6 = useSafeAreaInsetsDefault();
  const tmp7 = closure_7(left, right, top, useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (isChatLockedOpen) {
    isChatLockedOpen = right > 0;
  }
  const items = [tmp7.container, ];
  let frameContainer = isChatLockedOpen;
  if (isChatLockedOpen) {
    frameContainer = tmp7.frameContainer;
  }
  const obj3 = { style: items, children: null };
  items[1] = frameContainer;
  const obj4 = { gradient: tmp3, children: null };
  if (left > 0) {
    let tmp8Result = null;
    if (!isChatLockedOpen) {
      tmp8Result = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
    }
  } else {
    tmp8Result = null;
  }
  const items1 = [tmp8Result, ];
  const items2 = [tmp7.content, ];
  let frameContent = isChatLockedOpen;
  if (isChatLockedOpen) {
    frameContent = tmp7.frameContent;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = frameContent;
  const items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const items4 = [tmp7.content, ];
  let framePanels = isChatLockedOpen;
  if (isChatLockedOpen) {
    framePanels = tmp7.framePanels;
  }
  const obj6 = { style: items4, children: hasOwnProperty(MainTabsNavigatorPanelDefault, { showHeaderGradient: !isChatLockedOpen }) };
  items4[1] = framePanels;
  items3[1] = hasOwnProperty(React4, obj6);
  let tmp8Result2 = null;
  if (isChatLockedOpen) {
    const obj8 = { style: tmp7.frameBorderClip, pointerEvents: "none", children: null };
    const obj9 = { style: tmp7.frameBorder };
    obj8.children = hasOwnProperty(React4, obj9);
    tmp8Result2 = hasOwnProperty(React4, obj8);
  }
  items3[2] = tmp8Result2;
  obj5.children = items3;
  items1[1] = timestampProducer(React4, obj5);
  obj4.children = items1;
  obj3.children = timestampProducer(native.ThemeContextProvider, obj4);
  return hasOwnProperty(React4, obj3);
}));