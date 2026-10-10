// === Module 7729: NodeView ===

// Module 7729 (NodeView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import Text_Text from "Text/Text" /* 5088 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5107 */;
import CustomMarkupAll from "CustomMarkup" /* 5399 */;
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import MenuTypes from "MenuTypes" /* 7722 */;
import ArrowDefault from "Arrow" /* 7731 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5091 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;

require = fn;
function NullComponent() {
  return null;
}
let closure_4 = ["child", "nodeMap"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const REMEDIATION_ELEMENT_TYPES = fn(7730).REMEDIATION_ELEMENT_TYPES;
const IN_APP_REPORTS_NODE = fn(7727).IN_APP_REPORTS_NODE;
const Constants = fn(1085);
({ AnalyticEvents: closure_15, ChannelTypes: closure_16 } = Constants);
const Permissions = fn(1096).Permissions;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, alignSelf: "stretch", justifyContent: "flex-start", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginTop: 30 }, scrollView: { flex: 1, alignSelf: "stretch", marginTop: 24 }, childrenContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerContainer: { alignSelf: "stretch", marginBottom: 24, paddingHorizontal: 16 }, header: { marginBottom: 8, textAlign: "center" }, subheader: { lineHeight: 20, marginBottom: 8, textAlign: "center" }, description: { lineHeight: 16, marginBottom: 8, textAlign: "center" }, infoBox: null, infoBoxText: null, childButton: null, childContainer: null, childContent: null, childButtonText: null, debugText: null };
let obj3 = { flex: 1, alignSelf: "stretch", justifyContent: "flex-start", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginTop: 30 };
obj2.infoBox = { alignSelf: "stretch", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BLUE_345, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.unsafe_rawColors.BLUE_345, borderWidth: 1, padding: 8, flexDirection: "row", marginBottom: 16, marginHorizontal: 16 };
obj2.infoBoxText = { flex: 1, marginStart: 8 };
let obj4 = { alignSelf: "stretch", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BLUE_345, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.unsafe_rawColors.BLUE_345, borderWidth: 1, padding: 8, flexDirection: "row", marginBottom: 16, marginHorizontal: 16 };
obj2.childButton = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
let obj5 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
obj2.childContainer = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: nativeDefault.radii.xs };
obj2.childContent = { flex: 1 };
obj2.childButtonText = { lineHeight: 20 };
obj2.debugText = { marginTop: 4, lineHeight: 16 };
let closure_20 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderView(arg0) {
  const cResult = c.c(17);
  ({ node, headerRef } = arg0);
  ({ header, subheader, description } = node);
  const tmp4 = closure_20();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return CustomMarkupAll.getParser();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (cResult[1] === header) {
    if (cResult[2] === headerRef) {
      if (cResult[3] === tmp4.header) {
        let tmp7 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === tmp4.subheader) {
          if (cResult[7] === subheader) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === description) {
            if (cResult[10] === tmp4.description) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] === tmp4.headerContainer) {
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp10) {
                  if (cResult[15] === tmp14) {
                    let tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
            }
            const obj2 = { style: tmp4.headerContainer, children: null };
            const items = [tmp7, tmp10, tmp14];
            obj2.children = items;
            const tmp21 = closure_1_19(closure_1_8, obj2);
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
              tmp16 = collapsedCategories(Text_Text.Text, obj3);
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
          tmp12 = collapsedCategories(Text_Text.Text, obj4);
        }
      }
      cResult[5] = tmp6;
      cResult[6] = tmp4.subheader;
      cResult[7] = subheader;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
  }
  let tmp8 = null != header;
  if (tmp8) {
    tmp8 = "" !== header;
  }
  if (tmp8) {
    const obj5 = { ref: headerRef, style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: header };
    tmp8 = collapsedCategories(Text_Text.Text, obj5);
  }
  cResult[1] = header;
  cResult[2] = headerRef;
  cResult[3] = tmp4.header;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function HeaderView(node) {
  ({ header, subheader, description } = node.node);
  const tmp = closure_20();
  const obj = { style: tmp.headerContainer, children: null };
  let tmp6 = null != header;
  if (tmp6) {
    tmp6 = "" !== header;
  }
  if (tmp6) {
    const obj2 = { ref: node.headerRef, style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: header };
    tmp6 = collapsedCategories(Text_Text.Text, obj2);
  }
  const items = [tmp6, , ];
  let tmp9 = null;
  if (null != subheader) {
    tmp9 = null;
    if (subheader.length > 0) {
      const obj3 = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: tmp3(subheader) };
      tmp9 = collapsedCategories(Text_Text.Text, obj3);
    }
  }
  items[1] = tmp9;
  let tmp12 = null;
  if (null != description) {
    tmp12 = null;
    if (description.length > 0) {
      const obj4 = { style: tmp.description, variant: "text-xs/medium", color: "text-default", children: description };
      tmp12 = collapsedCategories(Text_Text.Text, obj4);
    }
  }
  items[2] = tmp12;
  obj.children = items;
  return closure_1_19(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function InfoView(node) {
  const cResult = c.c(22);
  const info = node.node.info;
  const tmp4 = closure_20();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return CustomMarkupAll.getParser();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (null == info) {
    return null;
  } else {
    if (cResult[1] !== tmp4.infoBox.backgroundColor) {
      const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp4.infoBox.backgroundColor, 0.1);
      cResult[1] = tmp4.infoBox.backgroundColor;
      cResult[2] = hexWithOpacityResult;
      let tmp7 = hexWithOpacityResult;
      const tmpResult = ColorUtils;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp7) {
      const obj2 = { backgroundColor: tmp7 };
      cResult[3] = tmp7;
      cResult[4] = obj2;
      let tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.infoBox) {
      if (cResult[6] === tmp9) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] !== tmp4.infoBox.backgroundColor) {
        const obj3 = { size: "md", color: tmp4.infoBox.backgroundColor };
        const tmp13 = collapsedCategories(CircleInformationIcon.CircleInformationIcon, obj3);
        cResult[8] = tmp4.infoBox.backgroundColor;
        cResult[9] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[9];
      }
      if (cResult[10] === info) {
        if (cResult[11] === tmp6) {
          let tmp15 = cResult[12];
        }
        if (cResult[13] !== tmp15) {
          const obj4 = { variant: "text-sm/normal", color: "interactive-text-active", includeFontPadding: true, children: tmp15 };
          const tmp19 = collapsedCategories(Text_Text.Text, obj4);
          cResult[13] = tmp15;
          cResult[14] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp4.infoBoxText) {
          if (cResult[16] === tmp17) {
            let tmp20 = cResult[17];
          }
          if (cResult[18] === tmp20) {
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp11) {
                let tmp24 = cResult[21];
              }
              return tmp24;
            }
          }
          const obj5 = { style: tmp10, children: null };
          const items = [tmp11, tmp20];
          obj5.children = items;
          const tmp27 = closure_1_19(closure_1_8, obj5);
          cResult[18] = tmp20;
          cResult[19] = tmp10;
          cResult[20] = tmp11;
          cResult[21] = tmp27;
          tmp24 = tmp27;
        }
        const obj6 = { style: tmp14, children: tmp17 };
        const tmp23 = collapsedCategories(closure_1_8, obj6);
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
    const items1 = [tmp4.infoBox, tmp9];
    cResult[5] = tmp4.infoBox;
    cResult[6] = tmp9;
    cResult[7] = items1;
    tmp10 = items1;
  }
}) : (function InfoView(node) {
  const info = node.node.info;
  const tmp = closure_20();
  let tmp4 = null;
  if (null != info) {
    const obj = { style: null, children: null };
    const items = [tmp.infoBox, ];
    const obj2 = { backgroundColor: ColorUtils.hexWithOpacity(tmp.infoBox.backgroundColor, 0.1) };
    items[1] = obj2;
    obj.style = items;
    const obj4 = { size: "md", color: tmp.infoBox.backgroundColor };
    const items1 = [collapsedCategories(CircleInformationIcon.CircleInformationIcon, obj4), ];
    const obj5 = { style: tmp.infoBoxText, children: null };
    const obj6 = { variant: "text-sm/normal", color: "interactive-text-active", includeFontPadding: true, children: tmp3(info) };
    obj5.children = collapsedCategories(Text_Text.Text, obj6);
    items1[1] = collapsedCategories(closure_1_8, obj5);
    obj.children = items1;
    tmp4 = closure_1_19(closure_1_8, obj);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChildItem(child) {
  const cResult = require("c").c(28);
  if (cResult[0] !== child) {
    child = child.child;
    _require = child;
    const nodeMap = child.nodeMap;
    const tmp9 = _objectWithoutProperties(child, closure_4);
    closure_1 = tmp9;
    cResult[0] = child;
    cResult[1] = child;
    cResult[2] = nodeMap;
    cResult[3] = tmp9;
    let tmp5 = nodeMap;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    closure_1 = cResult[3];
  }
  const tmp10 = closure_20();
  const obj = require("c");
  const first = _slicedToArray(tmp4, 2)[0];
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp6) {
      let tmp15 = cResult[6];
    }
    const first1 = _slicedToArray(noop.useState(tmp15), 1)[0];
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [DevSettingsStore];
      class B {
        constructor() {
          return closure_1_10.get("iar_show_report_sub_type_labels");
        }
      }
      cResult[7] = items;
      cResult[8] = B;
      let tmp20 = B;
      let tmp19 = items;
    } else {
      tmp19 = cResult[7];
      tmp20 = cResult[8];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp19, tmp20);
    if (tmp5[tmp14] != null) {
      const report_type = tmp23.report_type;
    }
    if (cResult[9] === first) {
      if (cResult[10] === tmp10.childButtonText) {
        let tmp25 = cResult[11];
      }
      if (cResult[12] === stateFromStores) {
        if (cResult[13] === tmp10.debugText) {
          if (cResult[14] === report_type) {
            let tmp28 = cResult[15];
          }
          if (cResult[16] === tmp10.childContent) {
            if (cResult[17] === tmp25) {
              if (cResult[18] === tmp28) {
                let tmp31 = cResult[19];
              }
              const _Symbol2 = Symbol;
              class B {
                constructor() {
                  return closure_1_10.get("iar_show_report_sub_type_labels");
                }
              }
              if (cResult[21] === tmp10.childContainer) {
                if (cResult[22] === tmp31) {
                  let tmp36 = cResult[23];
                }
                if (cResult[24] === first1) {
                  if (cResult[25] === tmp10.childButton) {
                    if (cResult[26] === tmp36) {
                      let tmp40 = cResult[27];
                    }
                    return tmp40;
                  }
                }
                class B {
                  constructor() {
                    return closure_1_10.get("iar_show_report_sub_type_labels");
                  }
                }
                tmp42[0] = tmp10.childButton;
                tmp42[2] = first1;
                tmp42[3] = tmp36;
                const tmp43 = closure_18(tmp(6184).PressableHighlight, tmp42);
                cResult[24] = first1;
                cResult[25] = tmp10.childButton;
                cResult[26] = tmp36;
                cResult[27] = tmp43;
                tmp40 = tmp43;
              }
              const obj2 = { style: tmp10.childContainer, children: null };
              const items1 = [tmp31, tmp35];
              obj2.children = items1;
              const tmp39 = closure_19(closure_8, obj2);
              cResult[21] = tmp10.childContainer;
              cResult[22] = tmp31;
              cResult[23] = tmp39;
              tmp36 = tmp39;
            }
          }
          class B {
            constructor() {
              return closure_1_10.get("iar_show_report_sub_type_labels");
            }
          }
          const obj3 = { style: tmp10.childContent, children: null };
          const items2 = [tmp25, tmp28];
          obj3.children = items2;
          const tmp33 = closure_19(closure_8, obj3);
          cResult[16] = tmp10.childContent;
          cResult[17] = tmp25;
          cResult[18] = tmp28;
          cResult[19] = tmp33;
          tmp31 = tmp33;
        }
      }
      let tmp29 = stateFromStores;
      class B {
        constructor() {
          return closure_1_10.get("iar_show_report_sub_type_labels");
        }
      }
      if (tmp29) {
        const obj4 = { style: tmp10.debugText, variant: "text-xs/normal", color: "text-muted", children: null };
        class B {
          constructor() {
            return closure_1_10.get("iar_show_report_sub_type_labels");
          }
        }
        tmp29 = closure_18(tmp(5088).Text, obj4);
      }
      cResult[12] = stateFromStores;
      cResult[13] = tmp10.debugText;
      cResult[14] = report_type;
      cResult[15] = tmp29;
      tmp28 = tmp29;
    }
    const obj5 = { style: tmp10.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: first };
    const tmp27 = closure_18(tmp(5088).Text, obj5);
    cResult[9] = first;
    cResult[10] = tmp10.childButtonText;
    cResult[11] = tmp27;
    tmp25 = tmp27;
    const tmpResult = tmp(504);
  }
  const fn = function _() {
    return () => closure_1_1.onPress(closure_1_0);
  };
  cResult[4] = tmp4;
  cResult[5] = tmp6;
  cResult[6] = fn;
  tmp15 = fn;
  const tmp12 = _slicedToArray(tmp4, 2);
}) : (function ChildItem(child) {
  child = child.child;
  importDefault = Object.assign(child, Object.assign({ child: 0, nodeMap: 0 }));
  const tmp = closure_20();
  [tmp3, tmp4] = child;
  const tmp2 = _slicedToArray(child, 2);
  const items = [DevSettingsStore];
  let stateFromStores = child(504).useStateFromStores(items, () => DevSettingsStore.get("iar_show_report_sub_type_labels"));
  if (child.nodeMap[tmp4] != null) {
    const report_type = tmp8.report_type;
  }
  const obj2 = { style: tmp.childButton, accessibilityRole: "button", onPress: _slicedToArray(noop.useState(() => () => closure_1_1.onPress(child)), 1)[0], children: null };
  const obj3 = { style: tmp.childContainer, children: null };
  const obj4 = { style: tmp.childContent, children: null };
  const items1 = [closure_18(child(5088).Text, { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp3 }), ];
  if (stateFromStores) {
    stateFromStores = null != report_type;
  }
  if (stateFromStores) {
    const obj6 = { style: tmp.debugText, variant: "text-xs/normal", color: "text-muted", children: report_type };
    stateFromStores = closure_18(tmp5(5088).Text, obj6);
  }
  items1[1] = stateFromStores;
  obj4.children = items1;
  const items2 = [closure_19(closure_8, obj4), closure_18(ArrowDefault, {})];
  obj3.children = items2;
  obj2.children = closure_19(closure_8, obj3);
  return closure_18(child(6184).PressableHighlight, obj2);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChildrenView(onSelectChild) {
  const cResult = onSelectChild(576).c(10);
  onSelectChild = onSelectChild.onSelectChild;
  const nodeMap = onSelectChild.nodeMap;
  const children = onSelectChild.node.children;
  const tmp2 = closure_20();
  if (null != children) {
    let num6 = 0;
    if (0 !== children.length) {
      if (cResult[0] === children) {
        if (cResult[1] === nodeMap) {
          if (cResult[2] === onSelectChild) {
            if (cResult[7] === tmp2.childrenContainer) {
              if (cResult[8] === tmp3) {
                let tmp7 = cResult[9];
              }
              return tmp7;
            }
            const obj2 = { style: tmp11, children: cResult[3] };
            const tmp10 = closure_18(closure_8, obj2);
            cResult[7] = tmp2.childrenContainer;
            cResult[8] = cResult[3];
            cResult[9] = tmp10;
            tmp7 = tmp10;
          }
        }
      }
      if (cResult[4] === nodeMap) {
        if (cResult[5] === onSelectChild) {
          let tmp4 = cResult[6];
        }
        const mapped = children.map(tmp4);
        cResult[num6] = children;
        cResult[1] = nodeMap;
        cResult[2] = onSelectChild;
        num6 = 3;
        cResult[3] = mapped;
      }
      const fn = function f(child) {
        const tmp = _slicedToArray(child, 2);
        return collapsedCategories(closure_23, { child, nodeMap, onPress: onSelectChild }, "" + tmp[0] + "+" + tmp[1]);
      };
      cResult[4] = nodeMap;
      cResult[5] = onSelectChild;
      cResult[6] = fn;
      tmp4 = fn;
    }
  }
  return null;
}) : (function ChildrenView(node) {
  const children = node.node.children;
  ({ onSelectChild: require, nodeMap: importDefault } = node);
  let tmp2 = null;
  if (null != children) {
    tmp2 = null;
    if (0 !== children.length) {
      const obj = {
        style: tmp.childrenContainer,
        children: children.map((child) => {
              const tmp = _slicedToArray(child, 2);
              return collapsedCategories(closure_23, { child, nodeMap, onPress }, "" + tmp[0] + "+" + tmp[1]);
            })
      };
      tmp2 = closure_18(closure_8, obj);
    }
  }
  return tmp2;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/NodeView.tsx");

export default function NodeView(node) {
  let external_link = node;
  const tmp = callback1();
  let navigation = external_link(ref[24]).useNavigation();
  let obj = external_link(ref[24]);
  const isScreenReaderEnabled = external_link(ref[25]).useIsScreenReaderEnabled();
  ref = history.useRef(null);
  closure_4 = history.useRef(false);
  let items = [navigation, isScreenReaderEnabled];
  const effect = history.useEffect(() => {
    if (isScreenReaderEnabled) {
      function focusHeader() {
        if (!ref2.current) {
          tmp.current = true;
          const obj2 = { ref, delay: 300 };
          const result = external_link(ref[26]).setAccessibilityFocus(obj2);
          const obj = external_link(ref[26]);
        }
      }
      closure_0 = navigation.addListener("transitionEnd", (data) => {
        data = data.data;
        let closing;
        if (data != null) {
          closing = data.closing;
        }
        if (true !== closing) {
          if (!ref2.current) {
            ref2.current = true;
            const obj2 = { ref, delay: 300 };
            const result = external_link(ref[26]).setAccessibilityFocus(obj2);
            const obj = external_link(ref[26]);
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
  const memo = history.useMemo(() => {
    let channel_id;
    if ("message" === reportType.name) {
      channel_id = reportType.record.channel_id;
    }
    return channel_id;
  }, items1);
  const elements1 = node.elements;
  external_link = "checkbox";
  const found = elements1.find((type) => type.type === skip);
  const elements2 = node.elements;
  external_link = "text_line_resource";
  const found1 = elements2.find((type) => type.type === skip);
  const elements3 = node.elements;
  external_link = "text";
  const found2 = elements3.find((type) => type.type === skip);
  const REPORT_TO_MOD = external_link(ref[27]).ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(reportType.name);
  let obj2 = external_link(ref[25]);
  [tmp14, REMEDIATION_ELEMENT_TYPES] = node(history.useState(false), 2);
  const tmp15 = node(history.useState(false), 2);
  const first = tmp15[0];
  closure_15 = tmp15[1];
  const tmp17 = node(history.useState(() => ({})), 2);
  const first1 = tmp17[0];
  closure_17 = tmp17[1];
  const tmp19 = node(history.useState(false), 2);
  closure_18 = tmp19[1];
  const items2 = [node, found, first1];
  const callback = history.useCallback((destination) => {
    const obj = { nodeRef: node.id, destination, multiSelect: null };
    let tmp2;
    if (null != found) {
      const obj2 = { name: tmp.name, state: first1 };
      tmp2 = obj2;
    }
    obj.multiSelect = tmp2;
    return obj;
  }, items2);
  const items3 = [found];
  const effect1 = history.useEffect(() => {
    if (null != found) {
      const data = found.data;
      if (null != data) {
        function _loop(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
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
          closure_0 = tmp7[3];
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
    let is_auto_submit = node.is_auto_submit;
    if (is_auto_submit) {
      is_auto_submit = !first;
    }
    if (is_auto_submit) {
      closure_15(true);
      const obj = { nodeRef: node.id, destination: null };
      const items = ["", node.id];
      obj.destination = items;
      onSubmit(obj);
    }
  }, items5);
  const items6 = [node, nodeMap, navigation, history, onNavigate, closeModal, reportType, callback];
  callback1 = history.useCallback((arg0) => {
    const tmp2 = nodeMap[_slicedToArray(undefined, arg0, 2)[1]];
    if (null == tmp2) {
      closeModal();
    } else {
      const elements = tmp2.elements;
      const skip = "skip";
      if (null != elements.find((type) => type.type === skip)) {
        const button = tmp2.button;
        let type;
        if (button != null) {
          type = button.type;
        }
        if ("next" === type) {
          const items = ["", tmp2.button.target];
          return callback1(items);
        }
      }
      if (reportType.name === MenuTypes.ReportNames.MESSAGE) {
        const obj2 = { message_id: reportType.record.id, content_type: reportType.name, report_sub_type: tmp2.report_type, current_node: node.id, next_node: tmp2.id };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.IAR_NAVIGATE, obj2);
      }
      const obj3 = { node: tmp2, history: null };
      const items1 = [];
      items1[HermesBuiltin.arraySpread(history, 0)] = tmp;
      obj3.history = items1;
      navigation.push(IN_APP_REPORTS_NODE, obj3);
      if (onNavigate != null) {
        tmp16(tmp2.key);
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
  const tmp13 = node(history.useState(false), 2);
  const iarReportSettingsUpsells = external_link(ref[30]).useIarReportSettingsUpsells(reportSubType);
  const elements4 = node.elements;
  external_link = "ignore_users";
  let tmp28 = null != elements4.find((type) => type.type === skip);
  if (tmp28) {
    let tmp29 = "message" === reportType.name;
    if (!tmp29) {
      tmp29 = "first_dm" === reportType.name;
    }
    if (!tmp29) {
      tmp29 = "user" === reportType.name;
    }
    if (!tmp29) {
      tmp29 = "report_to_mod_message" === reportType.name;
    }
    tmp28 = tmp29;
  }
  let obj3 = external_link(ref[30]);
  let userIsTeen = external_link(ref[31]).useUserIsTeen();
  const tmp2Result = external_link(ref[31]);
  const activeLinkUsers = external_link(ref[32]).useActiveLinkUsers();
  if (userIsTeen) {
    userIsTeen = activeLinkUsers.length > 0;
  }
  if (userIsTeen) {
    const elements5 = node.elements;
    external_link = "share_with_parents";
    userIsTeen = null != elements5.find((type) => type.type === skip);
  }
  const rect = { style: tmp.container, bottom: true, top: true, children: null };
  const obj4 = { style: tmp.scrollView, children: null };
  const obj5 = { element: null };
  const elements6 = node.elements;
  external_link = "success";
  const tmp2Result2 = external_link(ref[32]);
  const tmp32 = closeModal;
  obj5.element = elements6.find((type) => type.type === skip);
  const items8 = [closure_18(navigation(ref[34]), obj5), closure_18(closure_21, { node, headerRef: ref }), closure_18(closure_22, { node }), , , , , , , , , , , , , , , ];
  let tmp33Result = null;
  if (null != found1) {
    const obj6 = { element: found1 };
    tmp33Result = tmp33(tmp34(tmp3[35]), obj6);
  }
  items8[3] = tmp33Result;
  let tmp33Result15 = null != found2;
  if (tmp33Result15) {
    const obj7 = { element: found2 };
    tmp33Result15 = tmp33(tmp34(tmp3[36]), obj7);
  }
  items8[4] = tmp33Result15;
  const elements7 = node.elements;
  external_link = "message_preview";
  let tmp33Result16 = null;
  if (null != elements7.find((type) => type.type === skip)) {
    if ("message" !== reportType.name) {
      if ("first_dm" !== reportType.name) {
        tmp33Result16 = null;
      }
    }
    const obj8 = { message: reportType.record };
    tmp33Result16 = tmp33(tmp34(tmp3[37]), obj8);
  }
  items8[5] = tmp33Result16;
  const elements8 = node.elements;
  external_link = "user_preview";
  let tmp33Result17 = null;
  if (null != elements8.find((type) => type.type === skip)) {
    tmp33Result17 = null;
    if ("user" === reportType.name) {
      const obj9 = { user: reportType.record };
      tmp33Result17 = tmp33(tmp34(tmp3[38]), obj9);
    }
  }
  items8[6] = tmp33Result17;
  const elements9 = node.elements;
  external_link = "widget_preview";
  let tmp33Result18 = null;
  if (null != elements9.find((type) => type.type === skip)) {
    tmp33Result18 = null;
    if ("widget" === reportType.name) {
      ({ widget: obj13.widget, user_id: obj13.userId } = reportType);
      tmp33Result18 = tmp33(tmp34(tmp3[39]), { widget: null, userId: null });
      const obj10 = { widget: null, userId: null };
    }
  }
  items8[7] = tmp33Result18;
  const elements10 = node.elements;
  external_link = "channel_preview";
  let tmp33Result19 = null;
  if (null != elements10.find((type) => type.type === skip)) {
    tmp33Result19 = null;
    if ("stage_channel" === reportType.name) {
      const obj11 = { stageInstance: reportType.record };
      tmp33Result19 = tmp33(tmp34(tmp3[40]), obj11);
    }
  }
  items8[8] = tmp33Result19;
  const elements11 = node.elements;
  external_link = "guild_preview";
  let tmp33Result20 = null;
  if (null != elements11.find((type) => type.type === skip)) {
    tmp33Result20 = null;
    if ("guild" === reportType.name) {
      const obj12 = { guild: reportType.record };
      tmp33Result20 = tmp33(tmp34(tmp3[41]), obj12);
    }
  }
  items8[9] = tmp33Result20;
  const elements12 = node.elements;
  external_link = "guild_scheduled_event_preview";
  let tmp33Result21 = null;
  if (null != elements12.find((type) => type.type === skip)) {
    tmp33Result21 = null;
    if ("guild_scheduled_event" === reportType.name) {
      const obj14 = { event: reportType.record };
      tmp33Result21 = tmp33(tmp34(tmp3[42]), obj14);
    }
  }
  items8[10] = tmp33Result21;
  const elements13 = node.elements;
  external_link = "guild_discovery_preview";
  let tmp33Result22 = null;
  if (null != elements13.find((type) => type.type === skip)) {
    tmp33Result22 = null;
    if ("guild_discovery" === reportType.name) {
      const obj15 = { guild: reportType.record };
      tmp33Result22 = tmp33(tmp34(tmp3[43]), obj15);
    }
  }
  items8[11] = tmp33Result22;
  const obj16 = { element: null, menuName: null, history: null };
  const elements14 = node.elements;
  external_link = "breadcrumbs";
  const tmp35 = navigation(ref[34]);
  obj16.element = elements14.find((type) => type.type === skip);
  obj16.menuName = reportType.name;
  obj16.history = history;
  items8[12] = closure_18(navigation(ref[44]), obj16);
  let elements = node.elements;
  let someResult = elements.some((type) => REMEDIATION_ELEMENT_TYPES.includes(type.type));
  if (someResult) {
    if (!tmp28) {
      const items9 = [tmp28, , , , , ];
      if (userIsTeen) {
        const obj17 = { parents: activeLinkUsers };
        userIsTeen = tmp33(tmp34(tmp3[47]), obj17);
      }
      items9[1] = userIsTeen;
      const elements15 = node.elements;
      external_link = "block_users";
      let tmp51 = null != elements15.find((type) => type.type === skip);
      if (tmp51) {
        let tmp52 = "message" === reportType.name;
        if (!tmp52) {
          tmp52 = "first_dm" === reportType.name;
        }
        if (!tmp52) {
          tmp52 = "user" === reportType.name;
        }
        if (!tmp52) {
          tmp52 = "report_to_mod_message" === reportType.name;
        }
        tmp51 = tmp52;
      }
      if (!tmp51) {
        items9[2] = tmp51;
        let tmp55 = !tmp28;
        if (!tmp28) {
          const elements16 = node.elements;
          external_link = "mute_users";
          tmp55 = null != elements16.find((type) => type.type === skip);
        }
        if (tmp55) {
          let tmp56 = "message" === reportType.name;
          if (!tmp56) {
            tmp56 = "first_dm" === reportType.name;
          }
          if (!tmp56) {
            tmp56 = "user" === reportType.name;
          }
          if (!tmp56) {
            tmp56 = "report_to_mod_message" === reportType.name;
          }
          tmp55 = tmp56;
        }
        if (!tmp55) {
          items9[3] = tmp55;
          const elements17 = node.elements;
          external_link = "delete_message";
          let callback2Result = null != elements17.find((type) => type.type === skip);
          if (callback2Result) {
            let tmp60 = "message" === reportType.name;
            if (!tmp60) {
              tmp60 = "report_to_mod_message" === reportType.name;
            }
            callback2Result = tmp60;
          }
          if (callback2Result) {
            callback2Result = callback2(reportType.record);
          }
          if (callback2Result) {
            const obj18 = { message: reportType.record, reportId };
            callback2Result = tmp33(tmp34(tmp3[50]), obj18);
          }
          items9[4] = callback2Result;
          const elements18 = node.elements;
          external_link = "leave_guild";
          let tmp33Result23 = null != elements18.find((type) => type.type === skip);
          if (tmp33Result23) {
            tmp33Result23 = "guild" === reportType.name;
          }
          if (tmp33Result23) {
            const obj19 = { guild: reportType.record, reportId, addCallback: node.addOnCloseCallback };
            tmp33Result23 = tmp33(tmp34(tmp3[51]), obj19);
          }
          const obj20 = { children: null };
          items9[5] = tmp33Result23;
          obj20.children = items9;
          someResult = tmp31(tmp47, obj20);
        } else {
          if ("user" === reportType.name) {
            let author3 = reportType.record;
          } else {
            author3 = reportType.record.author;
          }
          const obj21 = { user: author3, channelId: memo, reportId };
          tmp33(tmp34(tmp3[49]), obj21);
          const tmp34Result6 = tmp34(tmp3[49]);
        }
      } else {
        if ("user" === reportType.name) {
          let author2 = reportType.record;
        } else {
          author2 = reportType.record.author;
        }
        const obj22 = { user: author2, channelId: memo, reportId };
        tmp33(tmp34(tmp3[48]), obj22);
        const tmp34Result7 = tmp34(tmp3[48]);
      }
    } else {
      if ("user" === reportType.name) {
        let author = reportType.record;
      } else {
        author = reportType.record.author;
      }
      const obj23 = { user: author, channelId: memo, reportId };
      tmp33(tmp34(tmp3[46]), obj23);
      const tmp34Result8 = tmp34(tmp3[46]);
    }
  }
  items8[13] = someResult;
  const elements19 = node.elements;
  external_link = "settings_upsells";
  let tmp33Result27 = null != elements19.find((type) => type.type === skip);
  if (tmp33Result27) {
    let tmp63 = "message" === reportType.name;
    if (!tmp63) {
      tmp63 = "report_to_mod_message" === reportType.name;
    }
    tmp33Result27 = tmp63;
  }
  if (tmp33Result27) {
    tmp33Result27 = null != iarReportSettingsUpsells;
  }
  if (tmp33Result27) {
    const obj24 = { settingsUpsells: iarReportSettingsUpsells, channelId: reportType.record.channel_id, reportId, reportType, reportSubType };
    tmp33Result27 = tmp33(tmp34(tmp3[52]), obj24);
  }
  items8[14] = tmp33Result27;
  items8[15] = closure_18(navigation(ref[53]), {
    element: found,
    state: first1,
    onPress(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(first1);
      if (arg0 in first1) {
        delete tmp[tmp2];
      } else {
        obj[arg0] = arg1;
      }
      closure_17(obj);
    }
  });
  items8[16] = closure_18(closure_24, { node, onSelectChild: callback1, nodeMap });
  const elements20 = node.elements;
  external_link = "external_link";
  let tmp33Result28 = null;
  if (null != elements20.find((type) => type.type === skip)) {
    const obj26 = { elements: null };
    const elements21 = node.elements;
    external_link = "external_link";
    obj26.elements = elements21.filter((type) => type.type === external_link);
    tmp33Result28 = tmp33(tmp34(tmp3[54]), obj26);
    const tmp34Result9 = tmp34(tmp3[54]);
  }
  items8[17] = tmp33Result28;
  obj4.children = items8;
  const items10 = [callback(tmp32, obj4), ];
  const obj27 = { isModeratorReport: hasItem, disabled: null, button: null, hasError: null, onPress: null };
  const obj25 = {
    element: found,
    state: first1,
    onPress(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(first1);
      if (arg0 in first1) {
        delete tmp[tmp2];
      } else {
        obj[arg0] = arg1;
      }
      closure_17(obj);
    }
  };
  const tmp34Result = navigation(ref[44]);
  if (!tmp14) {
    let should_submit_data;
    if (found != null) {
      should_submit_data = found.should_submit_data;
    }
    let tmp68 = true === should_submit_data;
    if (tmp68) {
      const _Object = Object;
      tmp68 = 0 === Object.keys(first1).length;
    }
  }
  obj27.disabled = tmp14;
  obj27.button = node.button;
  obj27.hasError = tmp19[0];
  obj27.onPress = function onPress(type) {
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
          const nextPromise = onSubmit(callback(items1)).then(() => {
            closure_18(false);
            callback1(items1);
          });
          onSubmit(callback(items1)).then(() => {
            closure_18(false);
            callback1(items1);
          }).catch(() => {
            closure_1_18(true);
          }).finally(() => {
            closure_1_13(false);
          });
          const catchPromise = onSubmit(callback(items1)).then(() => {
            closure_18(false);
            callback1(items1);
          }).catch(() => {
            closure_1_18(true);
          });
        }
      }
    }
    callback1(["", -1]);
  };
  items10[1] = closure_18(navigation(ref[55]), obj27);
  rect.children = items10;
  return callback(external_link(ref[33]).SafeAreaPaddingView, rect);
};