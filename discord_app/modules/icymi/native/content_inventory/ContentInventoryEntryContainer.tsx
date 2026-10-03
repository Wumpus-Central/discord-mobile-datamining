// === Module 16446: ContentInventoryEntryContainer ===

// Module 16446 (ContentInventoryEntryContainer)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createICYMIStyles = fn(16390);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((marginBottom, arg1) => {
  let num = 0;
  if (!arg1) {
    num = marginBottom.margin;
  }
  const obj = { pressable: { marginTop: num }, container: null, screenshotContainer: null, header: null, headerInfo: null, title: null, subTitleContainer: null };
  const obj2 = { marginHorizontal: marginBottom.margin, paddingBottom: null, paddingTop: null };
  let num2 = 0;
  if (!arg1) {
    num2 = marginBottom.margin;
  }
  obj2.paddingBottom = num2;
  let num3 = 0;
  if (arg1) {
    num3 = marginBottom.margin;
  }
  obj2.paddingTop = num3;
  obj.container = obj2;
  obj.screenshotContainer = { marginBottom: marginBottom.margin };
  obj.header = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: marginBottom.margin };
  obj.headerInfo = { flex: 1 };
  const obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: marginBottom.margin };
  let num4 = 1;
  if (obj4.isAndroid()) {
    num4 = -1;
  }
  obj.title = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginBottom: num4, marginTop: 2 };
  obj4 = PlatformUtils;
  obj.subTitleContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((contentId) => {
  const cResult = contentId(type[8]).c(39);
  contentId = contentId.contentId;
  const userId = contentId.userId;
  ({ children, renderForScreenshot, title, subtitle, type } = contentId);
  ({ highlight, onPress } = contentId);
  const tmp6 = iCYMIStyles(undefined !== renderForScreenshot && renderForScreenshot);
  if (cResult[0] === contentId) {
    if (cResult[1] === onPress) {
      if (cResult[2] === type) {
        if (cResult[3] === userId) {
          let tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[5] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== userId) {
          const fn2 = function x() {
            return UserStore.getUser(userId);
          };
          cResult[6] = userId;
          cResult[7] = fn2;
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[7];
        }
        const stateFromStores = tmp(type[11]).useStateFromStores(tmp9, tmp11);
        if (null == stateFromStores) {
          return null;
        } else {
          let screenshotContainer = tmp4;
          if (tmp4) {
            screenshotContainer = tmp6.screenshotContainer;
          }
          if (cResult[8] === tmp6.container) {
            if (cResult[9] === screenshotContainer) {
              let tmp14 = cResult[10];
            }
            if (cResult[11] !== stateFromStores) {
              let obj2 = { animate: true, size: tmp(type[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
              const tmp17 = closure_6(tmp(type[12]).Avatar, obj2, stateFromStores.id);
              cResult[11] = stateFromStores;
              cResult[12] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[12];
            }
            if (cResult[13] === tmp6.title) {
              if (cResult[14] === title) {
                let tmp18 = cResult[15];
              }
              if (cResult[16] === tmp6.subTitleContainer) {
                if (cResult[17] === subtitle) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] === tmp6.headerInfo) {
                  if (cResult[20] === tmp22) {
                    if (cResult[21] === tmp18) {
                      let tmp26 = cResult[22];
                    }
                    if (cResult[23] === tmp6.header) {
                      if (cResult[24] === tmp26) {
                        if (cResult[25] === tmp15) {
                          let tmp30 = cResult[26];
                        }
                        if (cResult[27] === children) {
                          if (cResult[28] === tmp30) {
                            if (cResult[29] === tmp14) {
                              let tmp34 = cResult[30];
                            }
                            if (cResult[31] === tmp5) {
                              if (cResult[32] === tmp4) {
                                if (cResult[33] === tmp34) {
                                  let tmp38 = cResult[34];
                                }
                                if (cResult[35] === tmp7) {
                                  if (cResult[36] === tmp6.pressable) {
                                    if (cResult[37] === tmp38) {
                                      let tmp41 = cResult[38];
                                    }
                                    return tmp41;
                                  }
                                }
                                let obj3 = { unstable_pressDelay: 130, onPress: tmp7, accessibilityRole: "button", style: tmp6.pressable, children: tmp38 };
                                const tmp43 = closure_6(tmp(type[14]).PressableHighlight, obj3);
                                cResult[35] = tmp7;
                                cResult[36] = tmp6.pressable;
                                cResult[37] = tmp38;
                                cResult[38] = tmp43;
                                tmp41 = tmp43;
                              }
                            }
                            let obj4 = { hideDivider: tmp4, highlight: tmp5, children: tmp34 };
                            const tmp40 = closure_6(tmp(type[13]).SimplePost, obj4);
                            cResult[31] = tmp5;
                            cResult[32] = tmp4;
                            cResult[33] = tmp34;
                            cResult[34] = tmp40;
                            tmp38 = tmp40;
                          }
                        }
                        let obj5 = { style: tmp14, children: null };
                        const items1 = [tmp30, children];
                        obj5.children = items1;
                        const tmp37 = closure_7(View, obj5);
                        cResult[27] = children;
                        cResult[28] = tmp30;
                        cResult[29] = tmp14;
                        cResult[30] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                    let obj6 = { style: tmp6.header, children: null };
                    const items2 = [tmp15, tmp26];
                    obj6.children = items2;
                    const tmp33 = closure_7(View, obj6);
                    cResult[23] = tmp6.header;
                    cResult[24] = tmp26;
                    cResult[25] = tmp15;
                    cResult[26] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                let obj7 = { style: tmp6.headerInfo, children: null };
                const items3 = [tmp18, tmp22];
                obj7.children = items3;
                const tmp29 = closure_7(View, obj7);
                cResult[19] = tmp6.headerInfo;
                cResult[20] = tmp22;
                cResult[21] = tmp18;
                cResult[22] = tmp29;
                tmp26 = tmp29;
              }
              const obj8 = { style: tmp6.subTitleContainer, children: subtitle };
              const tmp25 = closure_6(View, obj8);
              cResult[16] = tmp6.subTitleContainer;
              cResult[17] = subtitle;
              cResult[18] = tmp25;
              tmp22 = tmp25;
            }
            const obj9 = { style: tmp6.title, children: title };
            const tmp21 = closure_6(View, obj9);
            cResult[13] = tmp6.title;
            cResult[14] = title;
            cResult[15] = tmp21;
            tmp18 = tmp21;
          }
          const items4 = [tmp6.container, screenshotContainer];
          cResult[8] = tmp6.container;
          cResult[9] = screenshotContainer;
          cResult[10] = items4;
          tmp14 = items4;
        }
        const tmpResult = tmp(type[11]);
      }
    }
  }
  const fn = function o() {
    if (null != onPress) {
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "press");
      const obj3 = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj3);
      tmp();
    } else {
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "open_profile");
      const obj6 = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "user" } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj6);
      const obj7 = { userId };
      showUserProfileActionSheetDefault(obj7);
    }
  };
  cResult[0] = contentId;
  cResult[1] = onPress;
  cResult[2] = type;
  cResult[3] = userId;
  cResult[4] = fn;
  tmp7 = fn;
  let obj = contentId(type[8]);
}) : ((contentId) => {
  contentId = contentId.contentId;
  const userId = contentId.userId;
  let flag = contentId.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  const type = contentId.type;
  ({ highlight, title, subtitle } = contentId);
  if (highlight === undefined) {
    highlight = false;
  }
  const onPress = contentId.onPress;
  const tmp = iCYMIStyles(flag);
  const items = [contentId, type, userId, onPress];
  const callback = onPress.useCallback(() => {
    if (null != onPress) {
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "press");
      const obj3 = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj3);
      tmp();
    } else {
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "open_profile");
      const obj6 = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "user" } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj6);
      const obj7 = { userId };
      showUserProfileActionSheetDefault(obj7);
    }
  }, items);
  const items1 = [UserStore];
  const stateFromStores = contentId(type[11]).useStateFromStores(items1, () => UserStore.getUser(userId));
  let tmp7Result = null;
  if (null != stateFromStores) {
    let obj2 = { unstable_pressDelay: 130, onPress: callback, accessibilityRole: "button", style: tmp.pressable, children: null };
    let obj3 = { hideDivider: flag, highlight, children: null };
    const items2 = [tmp.container, ];
    let screenshotContainer = flag;
    if (flag) {
      screenshotContainer = tmp.screenshotContainer;
    }
    let obj4 = { style: null, children: null };
    items2[1] = screenshotContainer;
    obj4.style = items2;
    let obj5 = { style: tmp.header, children: null };
    let obj6 = { animate: true, size: tmp3(tmp4[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
    const items3 = [closure_6(tmp3(tmp4[12]).Avatar, obj6, stateFromStores.id), ];
    let obj7 = { style: tmp.headerInfo, children: null };
    const obj8 = { style: tmp.title, children: title };
    const items4 = [closure_6(View, obj8), ];
    const obj9 = { style: tmp.subTitleContainer, children: subtitle };
    items4[1] = closure_6(View, obj9);
    obj7.children = items4;
    items3[1] = closure_7(View, obj7);
    obj5.children = items3;
    const items5 = [closure_7(View, obj5), contentId.children];
    obj4.children = items5;
    obj3.children = closure_7(View, obj4);
    obj2.children = closure_6(tmp3(tmp4[13]).SimplePost, obj3);
    tmp7Result = closure_6(tmp3(tmp4[14]).PressableHighlight, obj2);
  }
  return tmp7Result;
});
export const useStyles = iCYMIStyles;