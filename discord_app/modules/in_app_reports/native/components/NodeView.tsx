// === Module 8319: NodeView ===

// Module 8319 (NodeView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1096 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4818 */;
import Text_Text from "Text/Text" /* 4892 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import CustomMarkupAll from "CustomMarkup" /* 5791 */;
import useInitialValueDefault from "useInitialValue" /* 5991 */;
import MenuTypes from "MenuTypes" /* 8313 */;
import InAppReportsConstants from "InAppReportsConstants" /* 8318 */;
import MenuConstants from "MenuConstants" /* 8320 */;
import ArrowDefault from "Arrow" /* 8321 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation, onSelectChild;

let c9;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function NullComponent() {
  return null;
}
let closure_4 = ["child", "nodeMap"];
({ View: metroImportAll, ScrollView: c9 } = react_native);
const REMEDIATION_ELEMENT_TYPES = MenuConstants.REMEDIATION_ELEMENT_TYPES;
const IN_APP_REPORTS_NODE = InAppReportsConstants.IN_APP_REPORTS_NODE;
({ AnalyticEvents: closure_15, ChannelTypes: closure_16 } = Constants);
const Permissions = Constants2.Permissions;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: { flex: 1, alignSelf: "stretch", marginTop: 24 }, childrenContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerContainer: { alignSelf: "stretch", marginBottom: 24, paddingHorizontal: 16 }, header: { marginBottom: 8, textAlign: "center" }, subheader: { lineHeight: 20, marginBottom: 8, textAlign: "center" }, description: { lineHeight: 16, marginBottom: 8, textAlign: "center" }, infoBox: obj3, infoBoxText: { flex: 1, marginStart: 8 }, childButton: obj4, childContainer: obj5, childContent: { flex: 1 }, childButtonText: { lineHeight: 20 }, debugText: { marginTop: 4, lineHeight: 16 } };
obj2 = { flex: 1, alignSelf: "stretch", justifyContent: "flex-start", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginTop: 30 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "stretch", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BLUE_345, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.unsafe_rawColors.BLUE_345, borderWidth: 1, padding: 8, flexDirection: "row", marginBottom: 16, marginHorizontal: 16 };
obj4 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
obj5 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: nativeDefault.radii.xs };
let closure_20 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let description;
  let first;
  let header;
  let headerRef;
  let items;
  let node;
  let subheader;
  let obj = react2;
  const cResult = obj.c(17);
  ({ node, headerRef } = arg0);
  ({ header, subheader, description } = node);
  const tmp4 = closure_20();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = CustomMarkupAll;
      return obj.getParser();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (cResult[1] === header) {
    if (cResult[2] === headerRef) {
      let tmp7;
      if (cResult[3] === tmp4.header) {
        tmp7 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === tmp4.subheader) {
          let tmp10;
          if (cResult[7] === subheader) {
            tmp10 = cResult[8];
          }
          if (cResult[9] === description) {
            let tmp14;
            if (cResult[10] === tmp4.description) {
              tmp14 = cResult[11];
            }
            if (cResult[12] === tmp4.headerContainer) {
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp10) {
                  let tmp18;
                  if (cResult[15] === tmp14) {
                    tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
            }
            const obj2 = { style: tmp4.headerContainer, children: items };
            items = [tmp7, tmp10, tmp14];
            const tmp21 = closure_19(metroImportAll, obj2);
            cResult[12] = tmp4.headerContainer;
            cResult[13] = tmp7;
            cResult[14] = tmp10;
            cResult[15] = tmp14;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
          let tmp16 = null;
          if (null != description) {
            tmp16 = null;
            if (description.length > 0) {
              const obj3 = { style: tmp4.description, variant: "text-xs/medium", color: "text-default", children: description };
              tmp16 = authStore4(Text_Text.Text, obj3);
            }
          }
          cResult[9] = description;
          cResult[10] = tmp4.description;
          cResult[11] = tmp16;
          tmp14 = tmp16;
        }
      }
      let tmp12 = null;
      if (null != subheader) {
        tmp12 = null;
        if (subheader.length > 0) {
          const obj4 = { style: tmp4.subheader, variant: "text-md/medium", color: "text-default", children: tmp6(subheader) };
          const Text = Text_Text.Text;
          tmp12 = authStore4(Text, obj4);
        }
      }
      cResult[5] = tmp6;
      cResult[6] = tmp4.subheader;
      cResult[7] = subheader;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
  }
  let tmp8 = null != header && "" !== header;
  if (tmp8) {
    const obj5 = { ref: headerRef, style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: header };
    tmp8 = authStore4(Text_Text.Text, obj5);
  }
  cResult[1] = header;
  cResult[2] = headerRef;
  cResult[3] = tmp4.header;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((node) => {
  let description;
  let header;
  let items;
  let subheader;
  ({ header, subheader, description } = node.node);
  const headerRef = node.headerRef;
  const tmp = closure_20();
  let obj = { style: tmp.headerContainer, children: items };
  let tmp6 = null != header;
  const tmp3 = useInitialValueDefault(() => {
    const obj = CustomMarkupAll;
    return obj.getParser();
  });
  if (tmp6) {
    tmp6 = "" !== header;
  }
  if (tmp6) {
    const obj2 = { ref: headerRef, style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: header };
    tmp6 = authStore4(Text_Text.Text, obj2);
  }
  items = [tmp6, , ];
  let tmp9 = null;
  if (null != subheader) {
    tmp9 = null;
    if (subheader.length > 0) {
      const obj3 = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: tmp3(subheader) };
      const Text = Text_Text.Text;
      tmp9 = authStore4(Text, obj3);
    }
  }
  items[1] = tmp9;
  let tmp12 = null;
  if (null != description) {
    tmp12 = null;
    if (description.length > 0) {
      const obj4 = { style: tmp.description, variant: "text-xs/medium", color: "text-default", children: description };
      tmp12 = authStore4(Text_Text.Text, obj4);
    }
  }
  items[2] = tmp12;
  return closure_19(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((node) => {
  let first;
  let items;
  let obj = react2;
  const cResult = obj.c(22);
  const info = node.node.info;
  const tmp4 = closure_20();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = CustomMarkupAll;
      return obj.getParser();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (null == info) {
    return null;
  } else {
    let tmp7;
    let tmp9;
    const infoBox = tmp4.infoBox;
    if (cResult[1] !== tmp4.infoBox.backgroundColor) {
      const tmpResult = ColorUtils;
      const hexWithOpacityResult = tmpResult.hexWithOpacity(tmp4.infoBox.backgroundColor, 0.1);
      cResult[1] = tmp4.infoBox.backgroundColor;
      cResult[2] = hexWithOpacityResult;
      tmp7 = hexWithOpacityResult;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp7) {
      const obj2 = { backgroundColor: tmp7 };
      cResult[3] = tmp7;
      cResult[4] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.infoBox) {
      let tmp10;
      let tmp11;
      if (cResult[6] === tmp9) {
        tmp10 = cResult[7];
      }
      if (cResult[8] !== tmp4.infoBox.backgroundColor) {
        const obj3 = { size: "md", color: tmp4.infoBox.backgroundColor };
        const tmp13 = authStore4(CircleInformationIcon.CircleInformationIcon, obj3);
        cResult[8] = tmp4.infoBox.backgroundColor;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[9];
      }
      if (cResult[10] === info) {
        let tmp15;
        let tmp17;
        if (cResult[11] === tmp6) {
          tmp15 = cResult[12];
        }
        if (cResult[13] !== tmp15) {
          const obj4 = { variant: "text-sm/normal", color: "interactive-text-active", includeFontPadding: true, children: tmp15 };
          const tmp19 = authStore4(Text_Text.Text, obj4);
          cResult[13] = tmp15;
          cResult[14] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp4.infoBoxText) {
          let tmp20;
          if (cResult[16] === tmp17) {
            tmp20 = cResult[17];
          }
          if (cResult[18] === tmp20) {
            if (cResult[19] === tmp10) {
              let tmp24;
              if (cResult[20] === tmp11) {
                tmp24 = cResult[21];
              }
              return tmp24;
            }
          }
          const obj5 = { style: tmp10, children: items };
          items = [tmp11, tmp20];
          const tmp27 = closure_19(metroImportAll, obj5);
          cResult[18] = tmp20;
          cResult[19] = tmp10;
          cResult[20] = tmp11;
          cResult[21] = tmp27;
          tmp24 = tmp27;
        }
        const obj6 = { style: tmp14, children: tmp17 };
        const tmp23 = authStore4(metroImportAll, obj6);
        cResult[15] = tmp4.infoBoxText;
        cResult[16] = tmp17;
        cResult[17] = tmp23;
        tmp20 = tmp23;
      }
      const tmp6Result = tmp6(info);
      cResult[10] = info;
      cResult[11] = tmp6;
      cResult[12] = tmp6Result;
      tmp15 = tmp6Result;
    }
    const items1 = [infoBox, tmp9];
    cResult[5] = tmp4.infoBox;
    cResult[6] = tmp9;
    cResult[7] = items1;
    tmp10 = items1;
  }
}) : ((node) => {
  let Text;
  let items;
  let items1;
  let obj3;
  let obj6;
  const info = node.node.info;
  const tmp = closure_20();
  let tmp4 = null;
  if (null != info) {
    let obj = { style: items, children: items1 };
    items = [tmp.infoBox, ];
    const obj2 = { backgroundColor: obj3.hexWithOpacity(tmp.infoBox.backgroundColor, 0.1) };
    items[1] = obj2;
    obj3 = ColorUtils;
    const obj4 = { size: "md", color: tmp.infoBox.backgroundColor };
    items1 = [authStore4(CircleInformationIcon.CircleInformationIcon, obj4), ];
    const obj5 = { style: tmp.infoBoxText, children: authStore4(Text, obj6) };
    obj6 = { variant: "text-sm/normal", color: "interactive-text-active", includeFontPadding: true, children: tmp3(info) };
    Text = Text_Text.Text;
    items1[1] = authStore4(metroImportAll, obj5);
    tmp4 = closure_19(metroImportAll, obj);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((child) => {
  let closure_0;
  let items1;
  let items2;
  let tmp5;
  const obj = require("react");
  const cResult = obj.c(28);
  if (cResult[0] !== child) {
    child = child.child;
    _require = child;
    const nodeMap = child.nodeMap;
    const tmp9 = _objectWithoutProperties(child, closure_4);
    let closure_1 = tmp9;
    cResult[0] = child;
    cResult[1] = child;
    cResult[2] = nodeMap;
    cResult[3] = tmp9;
    tmp5 = nodeMap;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    closure_1 = cResult[3];
  }
  const tmp10 = closure_20();
  const first = _slicedToArray(tmp4, 2)[0];
  _slicedToArray(tmp4, 2);
  if (cResult[4] === tmp4) {
    let tmp15;
    let tmp20;
    let tmp19;
    let report_type;
    if (cResult[5] === tmp6) {
      tmp15 = cResult[6];
    }
    const first1 = _slicedToArray(react.useState(tmp15), 1)[0];
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [DevSettingsStore];
      class B {
        constructor() {
          return DevSettingsStore.get("iar_show_report_sub_type_labels");
        }
      }
      cResult[7] = items;
      cResult[8] = B;
      tmp20 = B;
      tmp19 = items;
    } else {
      tmp19 = cResult[7];
      tmp20 = cResult[8];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(tmp19, tmp20);
    if (tmp5[tmp14] != null) {
      report_type = tmp23.report_type;
    }
    if (cResult[9] === first) {
      let tmp25;
      if (cResult[10] === tmp10.childButtonText) {
        tmp25 = cResult[11];
      }
      if (cResult[12] === stateFromStores) {
        if (cResult[13] === tmp10.debugText) {
          let tmp28;
          if (cResult[14] === report_type) {
            tmp28 = cResult[15];
          }
          if (cResult[16] === tmp10.childContent) {
            if (cResult[17] === tmp25) {
              let tmp30;
              if (cResult[18] === tmp28) {
                tmp30 = cResult[19];
              }
              const _Symbol2 = Symbol;
              class B {
                constructor() {
                  return DevSettingsStore.get("iar_show_report_sub_type_labels");
                }
              }
              if (cResult[21] === tmp10.childContainer) {
                let tmp35;
                if (cResult[22] === tmp30) {
                  tmp35 = cResult[23];
                }
                if (cResult[24] === first1) {
                  if (cResult[25] === tmp10.childButton) {
                    let tmp39;
                    if (cResult[26] === tmp35) {
                      tmp39 = cResult[27];
                    }
                    return tmp39;
                  }
                }
                class B {
                  constructor() {
                    return DevSettingsStore.get("iar_show_report_sub_type_labels");
                  }
                }
                tmp41[0] = tmp10.childButton;
                tmp41[2] = first1;
                tmp41[3] = tmp35;
                const tmp42 = closure_18(require("Pressables").PressableHighlight, tmp41);
                cResult[24] = first1;
                cResult[25] = tmp10.childButton;
                cResult[26] = tmp35;
                cResult[27] = tmp42;
                tmp39 = tmp42;
              }
              const obj2 = { style: tmp10.childContainer, children: items1 };
              items1 = [tmp30, tmp34];
              const tmp38 = closure_19(closure_8, obj2);
              cResult[21] = tmp10.childContainer;
              cResult[22] = tmp30;
              cResult[23] = tmp38;
              tmp35 = tmp38;
            }
          }
          class B {
            constructor() {
              return DevSettingsStore.get("iar_show_report_sub_type_labels");
            }
          }
          const obj3 = { style: tmp10.childContent, children: items2 };
          items2 = [tmp25, tmp28];
          const tmp32 = closure_19(closure_8, obj3);
          cResult[16] = tmp10.childContent;
          cResult[17] = tmp25;
          cResult[18] = tmp28;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        }
      }
      class B {
        constructor() {
          return DevSettingsStore.get("iar_show_report_sub_type_labels");
        }
      }
      cResult[12] = stateFromStores;
      cResult[13] = tmp10.debugText;
      cResult[14] = report_type;
      cResult[15] = stateFromStores && null != report_type;
      tmp28 = tmp29;
    }
    const obj4 = { style: tmp10.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: first };
    const tmp27 = closure_18(require("Text/Text").Text, obj4);
    cResult[9] = first;
    cResult[10] = tmp10.childButtonText;
    cResult[11] = tmp27;
    tmp25 = tmp27;
  }
  const fn = function _() {
    return () => closure_1_1.onPress(closure_1_0);
  };
  cResult[4] = tmp4;
  cResult[5] = tmp6;
  cResult[6] = fn;
  tmp15 = fn;
}) : ((child) => {
  let closure_1;
  let items1;
  let items2;
  let obj3;
  let report_type;
  let tmp3;
  let tmp4;
  child = child.child;
  const nodeMap = child.nodeMap;
  importDefault = Object.assign(child, Object.assign({ child: 0, nodeMap: 0 }));
  const tmp = closure_20();
  [tmp3, tmp4] = child;
  _slicedToArray(child, 2);
  const first = _slicedToArray(react.useState(() => () => closure_1_1.onPress(child)), 1)[0];
  const items = [DevSettingsStore];
  const obj = child(504);
  let stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("iar_show_report_sub_type_labels"));
  if (nodeMap[tmp4] != null) {
    report_type = tmp9.report_type;
  }
  const obj2 = { style: tmp.childButton, accessibilityRole: "button", onPress: first, children: closure_19(closure_8, obj3) };
  obj3 = { style: tmp.childContainer, children: items2 };
  const obj4 = { style: tmp.childContent, children: items1 };
  const PressableHighlight = tmp6(5916).PressableHighlight;
  items1 = [, ];
  const obj5 = { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp3 };
  items1[0] = closure_18(child(4892).Text, obj5);
  if (stateFromStores) {
    stateFromStores = null != report_type;
  }
  if (stateFromStores) {
    const obj6 = { style: tmp.debugText, variant: "text-xs/normal", color: "text-muted", children: report_type };
    stateFromStores = closure_18(tmp6(4892).Text, obj6);
  }
  items1[1] = stateFromStores;
  items2 = [closure_19(closure_8, obj4), closure_18(ArrowDefault, {})];
  return closure_18(PressableHighlight, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSelectChild) => {
  let obj = onSelectChild(576);
  const cResult = obj.c(10);
  onSelectChild = onSelectChild.onSelectChild;
  const nodeMap = onSelectChild.nodeMap;
  const children = onSelectChild.node.children;
  const tmp2 = closure_20();
  if (null != children) {
    if (0 !== children.length) {
      let tmp3;
      if (cResult[0] === children) {
        if (cResult[1] === nodeMap) {
          if (cResult[2] === onSelectChild) {
            tmp3 = cResult[3];
          }
          if (cResult[7] === tmp2.childrenContainer) {
            let tmp6;
            if (cResult[8] === tmp3) {
              tmp6 = cResult[9];
            }
            return tmp6;
          }
          const obj2 = { style: tmp10, children: tmp3 };
          const tmp9 = closure_18(closure_8, obj2);
          cResult[7] = tmp2.childrenContainer;
          cResult[8] = tmp3;
          cResult[9] = tmp9;
          tmp6 = tmp9;
        }
      }
      if (cResult[4] === nodeMap) {
        let tmp4;
        if (cResult[5] === onSelectChild) {
          tmp4 = cResult[6];
        }
        const mapped = children.map(tmp4);
        cResult[0] = children;
        cResult[1] = nodeMap;
        cResult[2] = onSelectChild;
        cResult[3] = mapped;
        tmp3 = mapped;
      }
      const fn = function f(child) {
        const tmp = _slicedToArray(child, 2);
        const obj = { child, nodeMap, onPress: onSelectChild };
        return authStore4(closure_23, obj, "" + tmp[0] + "+" + tmp[1]);
      };
      cResult[4] = nodeMap;
      cResult[5] = onSelectChild;
      cResult[6] = fn;
      tmp4 = fn;
    }
  }
  return null;
}) : ((node) => {
  let nodeMap;
  let onPress;
  let require;
  let tmp;
  const children = node.node.children;
  ({ onSelectChild: require, nodeMap: importDefault } = node);
  let tmp2 = null;
  if (null != children) {
    tmp2 = null;
    if (0 !== children.length) {
      let obj = {
        style: tmp.childrenContainer,
        children: children.map((child) => {
              const tmp = _slicedToArray(child, 2);
              const obj = { child, nodeMap: importDefault, onPress: require };
              return authStore4(closure_23, obj, "" + tmp[0] + "+" + tmp[1]);
            })
      };
      tmp2 = closure_18(closure_8, obj);
    }
  }
  return tmp2;
});
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/NodeView.tsx");

export default function NodeView(node) {
  let callback1;
  let elements14;
  let elements21;
  let elements6;
  let history;
  let items10;
  let items8;
  let onNavigate;
  let ref;
  let reportId;
  let reportSubType;
  let tmp14;
  _require = node;
  let tmp = callback1();
  let tmp2 = _require;
  let tmp3 = ref;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("useIsScreenReaderEnabled");
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  ref = history.useRef(null);
  closure_4 = history.useRef(false);
  let items = [navigation, isScreenReaderEnabled];
  const effect = history.useEffect(() => {
    let closure_1;
    let ref2;
    if (isScreenReaderEnabled) {
      function focusHeader() {
        if (!ref2.current) {
          tmp.current = true;
          const obj2 = { ref, delay: 300 };
          const obj = node(ref[26]);
          const result = obj.setAccessibilityFocus(obj2);
        }
      }
      let closure_0 = navigation.addListener("transitionEnd", (data) => {
        data = data.data;
        let closing;
        if (data != null) {
          closing = data.closing;
        }
        if (true !== closing) {
          if (!ref2.current) {
            ref2.current = true;
            const obj2 = { ref, delay: 300 };
            const obj = node(ref[26]);
            const result = obj.setAccessibilityFocus(obj2);
          }
        }
      });
      const _setTimeout = setTimeout;
      navigation = setTimeout(focusHeader, 500);
      return () => {
        closure_0();
        clearTimeout(closure_1);
      };
    }
  }, items);
  node = node.node;
  const reportType = node.reportType;
  ({ reportSubType, history } = node);
  const nodeMap = node.nodeMap;
  const closeModal = node.closeModal;
  const onSubmit = node.onSubmit;
  ({ reportId, onNavigate } = node);
  let items1 = [reportType];
  const addOnCloseCallback = node.addOnCloseCallback;
  const memo = history.useMemo(() => {
    let channel_id;
    if ("message" === reportType.name) {
      channel_id = reportType.record.channel_id;
    }
    return channel_id;
  }, items1);
  const elements1 = node.elements;
  const checkbox = "checkbox";
  const found = elements1.find((type) => type.type === skip_str);
  const elements2 = node.elements;
  const text_line_resource = "text_line_resource";
  const found1 = elements2.find((type) => type.type === skip_str);
  const elements3 = node.elements;
  const text_str = "text";
  const found2 = elements3.find((type) => type.type === skip_str);
  const REPORT_TO_MOD = require("ReportMenuType").ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(reportType.name);
  [tmp14, REMEDIATION_ELEMENT_TYPES] = node(history.useState(false), 2);
  const tmp13 = node(history.useState(false), 2);
  const tmp15 = node(history.useState(false), 2);
  const first = tmp15[0];
  let closure_15 = tmp15[1];
  const tmp17 = node(history.useState(() => ({})), 2);
  const first1 = tmp17[0];
  let closure_17 = tmp17[1];
  const tmp19 = node(history.useState(false), 2);
  let closure_18 = tmp19[1];
  const items2 = [node, found, first1];
  const first2 = tmp19[0];
  const callback = history.useCallback((destination) => {
    let tmp2;
    const obj = { nodeRef: node.id, destination, multiSelect: tmp2 };
    tmp2 = undefined;
    if (null != found) {
      tmp2 = { name: tmp.name, state: first1 };
      const obj2 = { name: tmp.name, state: first1 };
    }
    return obj;
  }, items2);
  const items3 = [found];
  const effect1 = history.useEffect(() => {
    if (null != found) {
      const data = found.data;
      if (null != data) {
        function _loop(arg0, arg1) {
          closure_0 = arg0;
          let closure_1 = arg1;
          if (true === closure_0) {
            closure_17((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = closure_1;
              return obj;
            });
          }
        }
        const tmp2 = data[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let tmp7 = node(tmp4, 4);
          let closure_0 = tmp7[3];
          let _loopResult = _loop(tmp7[0], tmp7[1]);
          continue;
        }
      }
    }
  }, items3);
  const items4 = [navigation, node];
  const effect2 = history.useEffect(() => navigation.addListener("beforeRemove", () => {
    onNavigate = onNavigate.onNavigate;
    if (onNavigate != null) {
      onNavigate("..");
    }
  }), items4);
  const items5 = [node.is_auto_submit, first, onSubmit, node.id];
  const effect3 = history.useEffect(() => {
    let items;
    const is_auto_submit = node.is_auto_submit && !first;
    if (is_auto_submit) {
      closure_15(true);
      const obj = { nodeRef: node.id, destination: items };
      items = ["", node.id];
      onSubmit(obj);
    }
  }, items5);
  const items6 = [node, nodeMap, navigation, history, onNavigate, closeModal, reportType, callback];
  callback1 = history.useCallback((arg0) => {
    let items1;
    const tmp3 = nodeMap[_slicedToArray(undefined, arg0, 2)[1]];
    if (null == tmp3) {
      closeModal();
    } else {
      const elements = tmp3.elements;
      const skip_str = "skip";
      if (null != elements.find((type) => type.type === skip_str)) {
        const button = tmp3.button;
        let type;
        if (button != null) {
          type = button.type;
        }
        if ("next" === type) {
          const items = ["", tmp3.button.target];
          return callback1(items);
        }
      }
      if (reportType.name === MenuTypes.ReportNames.MESSAGE) {
        const id = reportType.record.id;
        const obj2 = { message_id: id, content_type: reportType.name, report_sub_type: tmp3.report_type, current_node: node.id, next_node: tmp3.id };
        const obj = AppAnalyticsUtilsDefault;
        obj.trackWithMetadata(closure_15.IAR_NAVIGATE, obj2);
      }
      const obj3 = { node: tmp3, history: items1 };
      items1 = [];
      items1[HermesBuiltin.arraySpread(items1, history, 0)] = tmp2;
      navigation.push(IN_APP_REPORTS_NODE, obj3);
      if (onNavigate != null) {
        tmp17(tmp3.key);
      }
    }
  }, items6);
  const items7 = [node, history, navigation];
  const effect4 = history.useEffect(() => {
    const button = node.button;
    let type;
    if (button != null) {
      type = button.type;
    }
    let tmp3 = "done" === type;
    if (!tmp3) {
      const button2 = node.button;
      let type1;
      if (button2 != null) {
        type1 = button2.type;
      }
      tmp3 = "cancel" === type1;
    }
    if (!tmp3) {
      tmp3 = 0 === history.length;
    }
    if (tmp3) {
      const obj = { headerLeft: NullComponent };
      navigation.setOptions(obj);
    }
  }, items7);
  const callback2 = history.useCallback((getChannelId) => {
    const channel = onNavigate.getChannel(getChannelId.getChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      let result = channel.type !== first1.DM && channel.type !== tmp3.GROUP_DM;
      if (result) {
        const obj = { channelId: channel.id };
        result = found.canWithPartialContext(closure_17.MANAGE_MESSAGES, obj);
      }
      tmp2 = result;
    }
    return tmp2;
  }, []);
  let obj3 = require("IarSettingsUpsellsConfigRegistry");
  const iarReportSettingsUpsells = obj3.useIarReportSettingsUpsells(reportSubType);
  const elements4 = node.elements;
  const ignore_users = "ignore_users";
  let tmp29 = null != elements4.find((type) => type.type === skip_str);
  if (tmp29) {
    let tmp30 = "message" === reportType.name;
    if (!tmp30) {
      tmp30 = "first_dm" === reportType.name;
    }
    if (!tmp30) {
      tmp30 = "user" === reportType.name;
    }
    if (!tmp30) {
      tmp30 = "report_to_mod_message" === reportType.name;
    }
    tmp29 = tmp30;
  }
  const tmp2Result = tmp2(tmp3[31]);
  let userIsTeen = tmp2Result.useUserIsTeen();
  const tmp2Result2 = tmp2(tmp3[32]);
  const activeLinkUsers = tmp2Result2.useActiveLinkUsers();
  if (userIsTeen) {
    userIsTeen = activeLinkUsers.length > 0;
  }
  if (userIsTeen) {
    const elements5 = node.elements;
    const share_with_parents = "share_with_parents";
    userIsTeen = null != elements5.find((type) => type.type === skip_str);
  }
  const rect = { style: tmp.container, bottom: true, top: true, children: items10 };
  let obj4 = { style: tmp.scrollView, children: items8 };
  const SafeAreaPaddingView = tmp2(tmp3[33]).SafeAreaPaddingView;
  const obj5 = { element: elements6.find((type) => type.type === skip_str) };
  elements6 = node.elements;
  const success_str = "success";
  const tmp36 = navigation(tmp3[34]);
  items8 = [closure_18(tmp36, obj5), closure_18(closure_21, { node, headerRef: ref }), closure_18(closure_22, { node }), , , , , , , , , , , , , , , ];
  let tmp34Result = null;
  const tmp33 = closeModal;
  if (null != found1) {
    const obj6 = { element: found1 };
    tmp34Result = tmp34(tmp35(tmp3[35]), obj6);
  }
  items8[3] = tmp34Result;
  let tmp34Result15 = null != found2;
  if (tmp34Result15) {
    const obj7 = { element: found2 };
    tmp34Result15 = tmp34(tmp35(tmp3[36]), obj7);
  }
  items8[4] = tmp34Result15;
  const elements7 = node.elements;
  const message_preview = "message_preview";
  let tmp34Result16 = null;
  if (null != elements7.find((type) => type.type === skip_str)) {
    if ("message" !== reportType.name) {
      if ("first_dm" !== reportType.name) {
        tmp34Result16 = null;
      }
    }
    const obj8 = { message: reportType.record };
    tmp34Result16 = tmp34(tmp35(tmp3[37]), obj8);
  }
  items8[5] = tmp34Result16;
  const elements8 = node.elements;
  const user_preview = "user_preview";
  let tmp34Result17 = null;
  if (null != elements8.find((type) => type.type === skip_str)) {
    tmp34Result17 = null;
    if ("user" === reportType.name) {
      const obj9 = { user: reportType.record };
      tmp34Result17 = tmp34(tmp35(tmp3[38]), obj9);
    }
  }
  items8[6] = tmp34Result17;
  const elements9 = node.elements;
  const widget_preview = "widget_preview";
  let tmp34Result18 = null;
  if (null != elements9.find((type) => type.type === skip_str)) {
    tmp34Result18 = null;
    if ("widget" === reportType.name) {
      const obj10 = { widget: null, userId: null };
      ({ widget: obj13.widget, user_id: obj13.userId } = reportType);
      tmp34Result18 = tmp34(tmp35(tmp3[39]), obj10);
    }
  }
  items8[7] = tmp34Result18;
  const elements10 = node.elements;
  const channel_preview = "channel_preview";
  let tmp34Result19 = null;
  if (null != elements10.find((type) => type.type === skip_str)) {
    tmp34Result19 = null;
    if ("stage_channel" === reportType.name) {
      const obj11 = { stageInstance: reportType.record };
      tmp34Result19 = tmp34(tmp35(tmp3[40]), obj11);
    }
  }
  items8[8] = tmp34Result19;
  const elements11 = node.elements;
  const guild_preview = "guild_preview";
  let tmp34Result20 = null;
  if (null != elements11.find((type) => type.type === skip_str)) {
    tmp34Result20 = null;
    if ("guild" === reportType.name) {
      const obj12 = { guild: reportType.record };
      tmp34Result20 = tmp34(tmp35(tmp3[41]), obj12);
    }
  }
  items8[9] = tmp34Result20;
  const elements12 = node.elements;
  const guild_scheduled_event_preview = "guild_scheduled_event_preview";
  let tmp34Result21 = null;
  if (null != elements12.find((type) => type.type === skip_str)) {
    tmp34Result21 = null;
    if ("guild_scheduled_event" === reportType.name) {
      const obj14 = { event: reportType.record };
      tmp34Result21 = tmp34(tmp35(tmp3[42]), obj14);
    }
  }
  items8[10] = tmp34Result21;
  const elements13 = node.elements;
  const guild_discovery_preview = "guild_discovery_preview";
  let tmp34Result22 = null;
  if (null != elements13.find((type) => type.type === skip_str)) {
    tmp34Result22 = null;
    if ("guild_discovery" === reportType.name) {
      const obj15 = { guild: reportType.record };
      tmp34Result22 = tmp34(tmp35(tmp3[43]), obj15);
    }
  }
  items8[11] = tmp34Result22;
  const obj16 = { element: elements14.find((type) => type.type === skip_str), menuName: reportType.name, history };
  elements14 = node.elements;
  const breadcrumbs = "breadcrumbs";
  const tmp35Result = navigation(tmp3[44]);
  items8[12] = closure_18(tmp35Result, obj16);
  let elements = node.elements;
  let someResult = elements.some((type) => REMEDIATION_ELEMENT_TYPES.includes(type.type));
  if (someResult) {
    let tmp34Result23 = tmp29;
    const tmp35Result7 = navigation(tmp3[45]);
    if (tmp29) {
      let author;
      const tmp35Result8 = navigation(tmp3[46]);
      if ("user" === reportType.name) {
        author = reportType.record;
      } else {
        author = reportType.record.author;
      }
      const obj17 = { user: author, channelId: memo, reportId };
      tmp34Result23 = tmp34(tmp35Result8, obj17);
    }
    const items9 = [tmp34Result23, , , , , ];
    if (userIsTeen) {
      const obj18 = { parents: activeLinkUsers };
      userIsTeen = tmp34(tmp35(tmp3[47]), obj18);
    }
    items9[1] = userIsTeen;
    const elements15 = node.elements;
    const block_users = "block_users";
    let tmp34Result24 = null != elements15.find((type) => type.type === skip_str);
    if (tmp34Result24) {
      tmp34Result24 = "message" === reportType.name || "first_dm" === reportType.name || "user" === reportType.name || "report_to_mod_message" === reportType.name;
      const tmp52 = "message" === reportType.name || "first_dm" === reportType.name || "user" === reportType.name || "report_to_mod_message" === reportType.name;
    }
    if (tmp34Result24) {
      let author2;
      const tmp35Result9 = navigation(tmp3[48]);
      if ("user" === reportType.name) {
        author2 = reportType.record;
      } else {
        author2 = reportType.record.author;
      }
      const obj19 = { user: author2, channelId: memo, reportId };
      tmp34Result24 = tmp34(tmp35Result9, obj19);
    }
    items9[2] = tmp34Result24;
    let tmp34Result25 = !tmp29;
    if (tmp34Result25) {
      const elements16 = node.elements;
      const mute_users = "mute_users";
      tmp34Result25 = null != elements16.find((type) => type.type === skip_str);
    }
    if (tmp34Result25) {
      tmp34Result25 = "message" === reportType.name || "first_dm" === reportType.name || "user" === reportType.name || "report_to_mod_message" === reportType.name;
      const tmp55 = "message" === reportType.name || "first_dm" === reportType.name || "user" === reportType.name || "report_to_mod_message" === reportType.name;
    }
    if (tmp34Result25) {
      let author3;
      const tmp35Result10 = navigation(tmp3[49]);
      if ("user" === reportType.name) {
        author3 = reportType.record;
      } else {
        author3 = reportType.record.author;
      }
      const obj20 = { user: author3, channelId: memo, reportId };
      tmp34Result25 = tmp34(tmp35Result10, obj20);
    }
    items9[3] = tmp34Result25;
    const elements17 = node.elements;
    const delete_message = "delete_message";
    let callback2Result = null != elements17.find((type) => type.type === skip_str);
    if (callback2Result) {
      callback2Result = "message" === reportType.name || "report_to_mod_message" === reportType.name;
      const tmp58 = "message" === reportType.name || "report_to_mod_message" === reportType.name;
    }
    if (callback2Result) {
      callback2Result = callback2(reportType.record);
    }
    if (callback2Result) {
      const obj21 = { message: reportType.record, reportId };
      callback2Result = tmp34(tmp35(tmp3[50]), obj21);
    }
    items9[4] = callback2Result;
    const elements18 = node.elements;
    const leave_guild = "leave_guild";
    let tmp34Result26 = null != elements18.find((type) => type.type === skip_str) && "guild" === reportType.name;
    if (tmp34Result26) {
      const obj22 = { guild: reportType.record, reportId, addCallback: addOnCloseCallback };
      tmp34Result26 = tmp34(tmp35(tmp3[51]), obj22);
    }
    const obj23 = { children: items9 };
    items9[5] = tmp34Result26;
    someResult = tmp32(tmp35Result7, obj23);
  }
  items8[13] = someResult;
  const elements19 = node.elements;
  const settings_upsells = "settings_upsells";
  let tmp34Result27 = null != elements19.find((type) => type.type === skip_str);
  if (tmp34Result27) {
    tmp34Result27 = "message" === reportType.name || "report_to_mod_message" === reportType.name;
    const tmp61 = "message" === reportType.name || "report_to_mod_message" === reportType.name;
  }
  if (tmp34Result27) {
    tmp34Result27 = null != iarReportSettingsUpsells;
  }
  if (tmp34Result27) {
    const obj24 = { settingsUpsells: iarReportSettingsUpsells, channelId: reportType.record.channel_id, reportId, reportType, reportSubType };
    tmp34Result27 = tmp34(tmp35(tmp3[52]), obj24);
  }
  items8[14] = tmp34Result27;
  const obj25 = {
    element: found,
    state: first1,
    onPress(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(first1);
      const tmp = arg0;
      if (arg0 in first1) {
        delete obj[tmp];
      } else {
        obj[arg0] = arg1;
      }
      closure_17(obj);
    }
  };
  items8[15] = closure_18(navigation(tmp3[53]), obj25);
  items8[16] = closure_18(closure_24, { node, onSelectChild: callback1, nodeMap });
  const elements20 = node.elements;
  let external_link = "external_link";
  let tmp34Result28 = null;
  if (null != elements20.find((type) => type.type === skip_str)) {
    const obj26 = { elements: elements21.filter((type) => type.type === external_link) };
    elements21 = node.elements;
    external_link = "external_link";
    const tmp35Result11 = navigation(tmp3[54]);
    tmp34Result28 = tmp34(tmp35Result11, obj26);
  }
  items8[17] = tmp34Result28;
  items10 = [callback(tmp33, obj4), ];
  const obj27 = {
    isModeratorReport: hasItem,
    disabled: tmp14,
    button: node.button,
    hasError: first2,
    onPress(type) {
      type = type.type;
      if ("done" !== type) {
        if ("cancel" !== type) {
          if ("next" === type) {
            const items = ["", type.target];
            callback1(items);
          } else if ("submit" === type) {
            closure_13(true);
            const items1 = [""];
            items1[1] = items1.successNodeId;
            const promise = onSubmit(callback(items1));
            const nextPromise = promise.then(() => {
              closure_18(false);
              callback1(items1);
            });
            const catchPromise = nextPromise.catch(() => {
              closure_1_18(true);
            });
            catchPromise.finally(() => {
              closure_1_13(false);
            });
          }
        }
      }
      callback1(["", -1]);
    }
  };
  const tmp35Result12 = navigation(tmp3[55]);
  if (!tmp14) {
    let should_submit_data;
    if (found != null) {
      should_submit_data = found.should_submit_data;
    }
    let tmp66 = true === should_submit_data;
    if (tmp66) {
      const _Object = Object;
      tmp66 = 0 === Object.keys(first1).length;
    }
  }
  items10[1] = closure_18(tmp35Result12, obj27);
  return callback(SafeAreaPaddingView, rect);
};