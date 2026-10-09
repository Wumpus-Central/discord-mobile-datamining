// discord_app/modules/build_overrides/native/BuildOverrideModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import build_overrides_BuildOverrideUtils from "BuildOverrideUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../BuildOverrideStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: 16,
  },
  content: { marginTop: 160, flex: 1, alignItems: "center" },
  imageWrapper: null,
  text: null,
  buildOverrideName: null,
  buildOverrideExpiration: null,
  buildOverrideInvalid: null,
  buttonWrapper: null,
  actionButton: null,
};
let size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
};
obj2.imageWrapper = size;
obj2.text = { lineHeight: 24, textAlign: "center" };
obj2.buildOverrideName = { marginTop: 8 };
obj2.buildOverrideExpiration = { lineHeight: 24 };
obj2.buildOverrideInvalid = { marginTop: 8 };
obj2.buttonWrapper = { alignSelf: "stretch" };
obj2.actionButton = { marginBottom: 8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  height: "100%",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: 16,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BuildOverrideModal(overrideUrl) {
      let onPress = dependencyMap;
      const cResult = str(576).c(51);
      overrideUrl = overrideUrl.overrideUrl;
      str = "";
      if (undefined !== overrideUrl) {
        str = overrideUrl;
      }
      const tmp3 = closure_8();
      const obj = str(576);
      const tmp5 = stateFromStores(4992)();
      if (tmpResult.isThemeDark(tmp5)) {
        let tmp4Result = tmp4(14020);
      } else {
        tmp4Result = tmp4(14021);
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BuildOverrideStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== str) {
        const fn = function v() {
          return BuildOverrideStore.getBuildOverride(str);
        };
        const items1 = [str];
        cResult[1] = str;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      tmpResult = str(4930);
      stateFromStores = str(504).useStateFromStores(first, tmp9, tmp10);
      const override = stateFromStores.override;
      if (override != null) {
        const targetBuildOverride = override.targetBuildOverride;
        if (targetBuildOverride != null) {
          const tmp11 = targetBuildOverride[tmp(undefined, 11300).DEVICE_FIELD];
          if (tmp11 != null) {
            let actionButton = tmp11.id;
          }
        }
      }
      let expiresAt;
      if (override != null) {
        expiresAt = override.expiresAt;
      }
      if (cResult[4] === expiresAt) {
        if (cResult[5] === actionButton) {
          if (cResult[6] === tmp4Result) {
            if (cResult[7] === tmp3.buildOverrideExpiration) {
              if (cResult[8] === tmp3.buildOverrideInvalid) {
                if (cResult[9] === tmp3.buildOverrideName) {
                  if (cResult[10] === tmp3.container) {
                    if (cResult[11] === tmp3.content) {
                      if (cResult[12] === tmp3.imageWrapper) {
                        if (cResult[13] === tmp3.text) {
                          let tmp13 = cResult[14];
                          let tmp14 = cResult[15];
                          let flag = cResult[16];
                          let tmp15 = cResult[17];
                          let tmp16 = cResult[18];
                          let tmp17 = cResult[19];
                          let tmp18 = cResult[20];
                          let tmp19 = cResult[21];
                          let flag2 = cResult[22];
                        }
                        if (cResult[31] === tmp13) {
                          if (cResult[32] === tmp16) {
                            if (cResult[33] === tmp17) {
                              if (cResult[34] === tmp18) {
                                if (cResult[35] === tmp19) {
                                  let tmp39 = cResult[36];
                                }
                                if (cResult[37] === stateFromStores.validatedURL) {
                                  if (cResult[38] === actionButton) {
                                    if (cResult[39] === tmp3.actionButton) {
                                      if (cResult[41] === tmp3.buttonWrapper) {
                                        if (cResult[42] === tmp42) {
                                          let tmp50 = cResult[43];
                                        }
                                        if (cResult[44] === tmp14) {
                                          if (cResult[45] === flag) {
                                            if (cResult[46] === tmp15) {
                                              if (cResult[47] === tmp39) {
                                                if (cResult[48] === tmp50) {
                                                  if (cResult[49] === flag2) {
                                                    let tmp54 = cResult[50];
                                                  }
                                                  return tmp54;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const rect = { top: flag2, bottom: flag, style: tmp15, children: null };
                                        const items2 = [tmp39, tmp50];
                                        rect.children = items2;
                                        const tmp56 = closure_7(tmp14, rect);
                                        cResult[44] = tmp14;
                                        cResult[45] = flag;
                                        cResult[46] = tmp15;
                                        cResult[47] = tmp39;
                                        cResult[48] = tmp50;
                                        cResult[49] = flag2;
                                        cResult[50] = tmp56;
                                        tmp54 = tmp56;
                                      }
                                      const obj2 = { style: tmp3.buttonWrapper, children: cResult[40] };
                                      const tmp53 = closure_5(View, obj2);
                                      cResult[41] = tmp3.buttonWrapper;
                                      cResult[42] = cResult[40];
                                      cResult[43] = tmp53;
                                      tmp50 = tmp53;
                                    }
                                  }
                                }
                                if (null != actionButton) {
                                  const obj3 = { children: null };
                                  const obj4 = { style: tmp3.actionButton, children: null };
                                  const obj6 = { text: null, grow: true, onPress: null };
                                  const intl5 = tmp(1126).intl;
                                  obj6.text = intl5.string(tmp(1126).t.v0MBqF);
                                  obj6.onPress = function onPress() {
                                    str = stateFromStores.validatedURL;
                                    if (str == null) {
                                      str = "";
                                    }
                                    const result = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink(str);
                                  };
                                  obj4.children = closure_5(tmp(5376).Button, obj6);
                                  const items3 = [closure_5(View, obj4)];
                                  const obj7 = { text: null, variant: "secondary", grow: true, onPress: null };
                                  const intl6 = tmp(1126).intl;
                                  obj7.text = intl6.string(tmp(1126).t.b5KKph);
                                  onPress = function onPress() {
                                    return stateFromStores(5941).pop();
                                  };
                                  obj7.onPress = onPress;
                                  items3[1] = closure_5(tmp(5376).Button, obj7);
                                  obj3.children = items3;
                                  let tmp44 = closure_7(closure_6, obj3);
                                } else {
                                  const obj8 = { text: null, grow: true, onPress: null };
                                  const intl4 = tmp(1126).intl;
                                  obj8.text = intl4.string(tmp(1126).t.WRkdCQ);
                                  obj8.onPress = function onPress() {
                                    return stateFromStores(5941).pop();
                                  };
                                  tmp44 = closure_5(tmp(5376).Button, obj8);
                                }
                                stateFromStores = stateFromStores.validatedURL;
                                cResult[37] = stateFromStores;
                                cResult[38] = actionButton;
                                actionButton = tmp3.actionButton;
                                cResult[39] = actionButton;
                                cResult[40] = tmp44;
                              }
                            }
                          }
                        }
                        const obj9 = { style: tmp16, children: null };
                        const items4 = [tmp17, tmp18, tmp19];
                        obj9.children = items4;
                        const tmp41 = closure_7(tmp13, obj9);
                        cResult[31] = tmp13;
                        cResult[32] = tmp16;
                        cResult[33] = tmp17;
                        cResult[34] = tmp18;
                        cResult[35] = tmp19;
                        cResult[36] = tmp41;
                        tmp39 = tmp41;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmpResult2 = str(504);
      const tmp4Result2 = stateFromStores(4661);
      let expiresAt1;
      if (override != null) {
        expiresAt1 = override.expiresAt;
      }
      const obj5 = stateFromStores(4661)();
      const durationResult = tmp4Result2.duration(stateFromStores(4661)().diff(expiresAt1));
      const SafeAreaPaddingView = tmp(6810).SafeAreaPaddingView;
      const container = tmp3.container;
      const content = tmp3.content;
      if (cResult[23] !== tmp4Result) {
        const obj10 = { source: tmp4Result };
        const tmp25 = closure_5(tmp4(6163), obj10);
        cResult[23] = tmp4Result;
        cResult[24] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[24];
      }
      if (cResult[25] === tmp3.imageWrapper) {
        if (cResult[26] === tmp23) {
          let tmp26 = cResult[27];
        }
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["6ILkNN"]);
          cResult[28] = stringResult;
          let tmp28 = stringResult;
        } else {
          tmp28 = cResult[28];
        }
        if (cResult[29] !== tmp3.text) {
          const obj11 = { style: tmp3.text, variant: "text-md/medium", children: tmp28 };
          const tmp32 = closure_5(tmp(5087).Text, obj11);
          cResult[29] = tmp3.text;
          cResult[30] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[30];
        }
        if (null != actionButton) {
          const obj12 = { children: null };
          const obj13 = {
            style: tmp3.buildOverrideName,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: actionButton,
          };
          const items5 = [closure_5(tmp(5087).Text, obj13)];
          const obj14 = {
            style: tmp3.buildOverrideExpiration,
            variant: "text-md/medium",
            color: "text-default",
            children: null,
          };
          const intl3 = tmp(1126).intl;
          const obj15 = { expirationDuration: humanizeResult };
          obj14.children = intl3.format(tmp(1126).t.lOsPpu, obj15);
          items5[1] = closure_5(tmp(5087).Text, obj14);
          obj12.children = items5;
          let tmp34 = closure_7(closure_6, obj12);
        } else {
          const obj16 = {
            style: tmp3.buildOverrideInvalid,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = tmp(1126).intl;
          obj16.children = intl2.string(tmp(1126).t["cz+sue"]);
          tmp34 = closure_5(tmp(5087).Text, obj16);
        }
        let expiresAt2;
        if (override != null) {
          expiresAt2 = override.expiresAt;
        }
        cResult[4] = expiresAt2;
        cResult[5] = actionButton;
        cResult[6] = tmp4Result;
        cResult[7] = tmp3.buildOverrideExpiration;
        cResult[8] = tmp3.buildOverrideInvalid;
        cResult[9] = tmp3.buildOverrideName;
        cResult[10] = tmp3.container;
        cResult[11] = tmp3.content;
        cResult[12] = tmp3.imageWrapper;
        cResult[13] = tmp3.text;
        cResult[14] = View;
        cResult[15] = SafeAreaPaddingView;
        cResult[16] = true;
        cResult[17] = container;
        cResult[18] = content;
        cResult[19] = tmp26;
        cResult[20] = tmp30;
        cResult[21] = tmp34;
        cResult[22] = true;
        flag2 = true;
        tmp19 = tmp34;
        tmp18 = tmp30;
        tmp17 = tmp26;
        tmp16 = content;
        tmp15 = container;
        flag = true;
        tmp14 = SafeAreaPaddingView;
        tmp13 = View;
      }
      const tmp27 = closure_5(View, { style: tmp3.imageWrapper, children: tmp23 });
      cResult[25] = tmp3.imageWrapper;
      cResult[26] = tmp23;
      cResult[27] = tmp27;
      tmp26 = tmp27;
      humanizeResult = tmp4Result2.duration(stateFromStores(4661)().diff(expiresAt1)).humanize();
      const obj17 = { style: tmp3.imageWrapper, children: tmp23 };
    }
  : function BuildOverrideModal(overrideUrl) {
      let str = overrideUrl.overrideUrl;
      if (str === undefined) {
        str = "";
      }
      let stateFromStores;
      const tmp = closure_8();
      const tmp4 = stateFromStores(4992)();
      if (obj.isThemeDark(tmp4)) {
        let tmp2Result = tmp2(14020);
      } else {
        tmp2Result = tmp2(14021);
      }
      obj = str(4930);
      const items = [BuildOverrideStore];
      const items1 = [str];
      stateFromStores = str(504).useStateFromStores(items, () => BuildOverrideStore.getBuildOverride(str), items1);
      const override = stateFromStores.override;
      let id;
      if (override != null) {
        const targetBuildOverride = override.targetBuildOverride;
        if (targetBuildOverride != null) {
          const tmp9 = targetBuildOverride[tmp5(undefined, 11300).DEVICE_FIELD];
          if (tmp9 != null) {
            id = tmp9.id;
          }
        }
      }
      const tmp5Result = str(504);
      const tmp2Result2 = stateFromStores(4661);
      let expiresAt;
      if (override != null) {
        expiresAt = override.expiresAt;
      }
      const obj4 = stateFromStores(4661)();
      const durationResult = tmp2Result2.duration(stateFromStores(4661)().diff(expiresAt));
      const rect = { top: true, bottom: true, style: tmp.container, children: null };
      const obj2 = { style: tmp.content, children: null };
      const humanizeResult = tmp2Result2.duration(stateFromStores(4661)().diff(expiresAt)).humanize();
      const items2 = [
        closure_5(View, {
          style: tmp.imageWrapper,
          children: closure_5(stateFromStores(6163), { source: tmp2Result }),
        }),
        ,
      ];
      const obj5 = { style: tmp.text, variant: "text-md/medium", children: null };
      const intl = tmp5(1126).intl;
      obj5.children = intl.string(str(1126).t["6ILkNN"]);
      items2[1] = closure_5(str(5087).Text, obj5);
      if (null != id) {
        const obj6 = { children: null };
        const obj7 = {
          style: tmp.buildOverrideName,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: id,
        };
        const items3 = [closure_5(tmp5(5087).Text, obj7)];
        const obj8 = {
          style: tmp.buildOverrideExpiration,
          variant: "text-md/medium",
          color: "text-default",
          children: null,
        };
        const intl3 = tmp5(1126).intl;
        const obj9 = { expirationDuration: humanizeResult };
        obj8.children = intl3.format(tmp5(1126).t.lOsPpu, obj9);
        items3[1] = closure_5(tmp5(5087).Text, obj8);
        obj6.children = items3;
        let tmp14Result = closure_7(closure_6, obj6);
      } else {
        const obj10 = {
          style: tmp.buildOverrideInvalid,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl2 = tmp5(1126).intl;
        obj10.children = intl2.string(tmp5(1126).t["cz+sue"]);
        tmp14Result = closure_5(tmp5(5087).Text, obj10);
      }
      items2[2] = tmp14Result;
      obj2.children = items2;
      const items4 = [closure_7(View, obj2)];
      const obj11 = { style: tmp.buttonWrapper, children: null };
      if (null != id) {
        const obj12 = { children: null };
        const obj13 = { style: tmp.actionButton, children: null };
        const obj14 = { text: null, grow: true, onPress: null };
        const intl5 = tmp5(1126).intl;
        obj14.text = intl5.string(tmp5(1126).t.v0MBqF);
        obj14.onPress = function onPress() {
          str = stateFromStores.validatedURL;
          if (str == null) {
            str = "";
          }
          const result = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink(str);
        };
        obj13.children = closure_5(tmp5(5376).Button, obj14);
        const items5 = [closure_5(View, obj13)];
        const obj15 = { text: null, variant: "secondary", grow: true, onPress: null };
        const intl6 = tmp5(1126).intl;
        obj15.text = intl6.string(tmp5(1126).t.b5KKph);
        obj15.onPress = function onPress() {
          return stateFromStores(5941).pop();
        };
        items5[1] = closure_5(tmp5(5376).Button, obj15);
        obj12.children = items5;
        let tmp12Result2 = closure_7(closure_6, obj12);
      } else {
        const obj16 = { text: null, grow: true, onPress: null };
        const intl4 = tmp5(1126).intl;
        obj16.text = intl4.string(tmp5(1126).t.WRkdCQ);
        obj16.onPress = function onPress() {
          return stateFromStores(5941).pop();
        };
        tmp12Result2 = closure_5(tmp5(5376).Button, obj16);
      }
      obj11.children = tmp12Result2;
      items4[1] = closure_5(View, obj11);
      rect.children = items4;
      return closure_7(str(6810).SafeAreaPaddingView, rect);
    };
