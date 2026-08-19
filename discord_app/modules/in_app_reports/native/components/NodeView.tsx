// === Module 8144: HeaderView ===

// Module 8144 (HeaderView)
import ThemesDefault from "Themes" /* 712 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4330 */;
import Text from "Text" /* 4734 */;
import ArrowDefault from "Arrow" /* 8146 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getUserAgnosticState from "getUserAgnosticState" /* 4737 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { REMEDIATION_ELEMENT_TYPES } from "REMEDIATION_ELEMENT_TYPES" /* 8145 */;
import { IN_APP_REPORTS_NODE } from "IN_APP_REPORTS_NODE" /* 8142 */;
import ME from "ME" /* 676 */;
import { Permissions } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function HeaderView(node) {
  ({ header, subheader, description } = node.node);
  const tmp = callback4();
  let obj = { style: tmp.headerContainer, children: null };
  let tmp6 = null != header;
  if (tmp6) {
    tmp6 = "" !== header;
  }
  if (tmp6) {
    obj = { ref: null, style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj[0] = node.headerRef;
    obj[1] = tmp.header;
    obj[5] = header;
    tmp6 = callback2(Text.Text, obj);
  }
  const items = [tmp6, , ];
  let tmp9 = null;
  if (null != subheader) {
    tmp9 = null;
    if (subheader.length > 0) {
      obj = { style: null, variant: "text-md/medium", color: "text-default", children: null };
      obj[0] = tmp.subheader;
      obj[3] = tmp3(subheader);
      tmp9 = callback2(Text.Text, obj);
    }
  }
  items[1] = tmp9;
  let tmp12 = null;
  if (null != description) {
    tmp12 = null;
    if (description.length > 0) {
      obj1 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
      obj1[0] = tmp.description;
      obj1[3] = description;
      tmp12 = callback2(Text.Text, obj1);
    }
  }
  items[2] = tmp12;
  obj[1] = items;
  return callback(closure_6, obj);
}
function InfoView(node) {
  const info = node.node.info;
  const tmp = callback4();
  let tmp4 = null;
  if (null != info) {
    const items = [tmp.infoBox, ];
    let obj = { backgroundColor: null };
    obj[0] = hexToRgba.hexWithOpacity(tmp.infoBox.backgroundColor, 0.1);
    items[1] = obj;
    obj[0] = items;
    obj = { size: "md", color: null };
    obj[1] = tmp.infoBox.backgroundColor;
    const items1 = [callback2(CircleInformationIcon.CircleInformationIcon, obj), ];
    obj1 = { style: null, variant: "text-sm/normal", color: "interactive-text-active", children: null };
    obj1[0] = tmp.infoBoxText;
    obj1[3] = tmp3(info);
    items1[1] = callback2(Text.Text, obj1);
    obj[1] = items1;
    tmp4 = callback3(closure_6, obj);
  }
  return tmp4;
}
function ChildItem(child) {
  child = child.child;
  importDefault = Object.assign(child, Object.create(null));
  const tmp = callback4();
  [tmp3, tmp4] = callback(child, 2);
  let obj = child(589);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => closure_8.get("iar_show_report_sub_type_labels"));
  if (child.nodeMap[tmp4] != null) {
    const report_type = tmp8.report_type;
  }
  { style: tmp.childButton, accessibilityRole: "button", onPress: callback(React.useState(() => () => closure_1.onPress(closure_0)), 1)[0], children: null };
  obj = { style: tmp.childContainer, children: null };
  obj1 = { style: tmp.childContent, children: null };
  const items1 = [callback2(child(4734).Text, { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp3 }), ];
  if (stateFromStores) {
    stateFromStores = null != report_type;
  }
  if (stateFromStores) {
    const obj3 = { style: null, variant: "text-xs/normal", color: "text-muted", children: null };
    obj3[0] = tmp.debugText;
    obj3[3] = report_type;
    stateFromStores = callback2(tmp5(4734).Text, obj3);
  }
  items1[1] = stateFromStores;
  obj1[1] = items1;
  const items2 = [callback(closure_6, obj1), callback2(ArrowDefault, {})];
  obj[1] = items2;
  obj[3] = callback(closure_6, obj);
  return callback2(child(5433).PressableHighlight, obj);
}
function ChildrenView(node) {
  const children = node.node.children;
  ({ onSelectChild: require, nodeMap: importDefault } = node);
  let tmp2 = null;
  if (null != children) {
    tmp2 = null;
    if (0 !== children.length) {
      const obj = { style: null, children: null };
      obj[0] = tmp.childrenContainer;
      obj[1] = children.map((item, index) => {
        const tmp = closure_1_4(item, 2);
        return closure_1_16(ChildItem, { child: item, nodeMap: closure_1, onPress: closure_0 }, "" + tmp[0] + "+" + tmp[1]);
      });
      tmp2 = callback2(closure_6, obj);
    }
  }
  return tmp2;
}
function NullComponent() {
  return null;
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: map1, ChannelTypes: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createCacheKey = { flex: 1, alignSelf: "stretch", justifyContent: "flex-start", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, marginTop: 30 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignSelf: "stretch", marginTop: 24 };
createCacheKey[2] = { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 };
createCacheKey[3] = { alignSelf: "stretch", marginBottom: 24, paddingHorizontal: 16 };
createCacheKey[4] = { marginBottom: 8, textAlign: "center" };
createCacheKey[5] = { lineHeight: 20, marginBottom: 8, textAlign: "center" };
createCacheKey[6] = { lineHeight: 16, marginBottom: 8, textAlign: "center" };
createCacheKey[7] = { alignSelf: "stretch", backgroundColor: ThemesDefault.unsafe_rawColors.BLUE_345, borderRadius: ThemesDefault.radii.xs, borderColor: ThemesDefault.unsafe_rawColors.BLUE_345, borderWidth: 1, padding: 8, flexDirection: "row", marginBottom: 16, marginHorizontal: 16 };
createCacheKey[8] = { flex: 1, lineHeight: 18, marginStart: 8, marginTop: 3 };
createCacheKey[9] = { marginBottom: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[10] = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[11] = { flex: 1 };
createCacheKey[12] = { lineHeight: 20 };
createCacheKey[13] = { marginTop: 4, lineHeight: 16 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/NodeView.tsx");

export default function NodeView(node) {
  let external_link = node;
  const tmp = callback4();
  let obj = external_link(ref[21]);
  let navigation = obj.useNavigation();
  obj1 = external_link(ref[22]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = node.useRef(null);
  let callback = node.useRef(false);
  let items = [navigation, isScreenReaderEnabled];
  const effect = node.useEffect(() => {
    if (isScreenReaderEnabled) {
      function focusHeader() {
        if (!ref.current) {
          tmp.current = true;
          callback(closure_1_3[23]);
          const obj = { ref: null, delay: 300 };
          obj[0] = closure_3;
          const result = obj.setAccessibilityFocus(obj);
        }
      }
      closure_0 = navigation.addListener("transitionEnd", (data) => {
        data = data.data;
        let closing;
        if (data != null) {
          closing = data.closing;
        }
        if (true !== closing) {
          if (!ref.current) {
            ref.current = true;
            callback(closure_1_3[23]);
            const obj = { ref: null, delay: 300 };
            obj[0] = closure_3;
            const result = obj.setAccessibilityFocus(obj);
          }
        }
      });
      const _setTimeout = setTimeout;
      navigation = setTimeout(focusHeader, 500);
      return () => {
        callback();
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
  const memo = node.useMemo(() => {
    let channel_id;
    if ("message" === reportType.name) {
      channel_id = reportType.record.channel_id;
    }
    return channel_id;
  }, items1);
  let elements = node.elements;
  const found = elements.find((item, index) => item.type === skip);
  const elements1 = node.elements;
  const found1 = elements1.find((item, index) => item.type === skip);
  const elements2 = node.elements;
  external_link = "text";
  const found2 = elements2.find((item, index) => item.type === skip);
  const REPORT_TO_MOD = external_link(ref[24]).ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(reportType.name);
  [tmp14, closure_13] = callback(node.useState(false), 2);
  const tmp15 = callback(node.useState(false), 2);
  const first = tmp15[0];
  closure_15 = tmp15[1];
  const tmp17 = callback(node.useState(() => ({})), 2);
  const first1 = tmp17[0];
  closure_17 = tmp17[1];
  const tmp19 = callback(node.useState(false), 2);
  callback4 = tmp19[1];
  const items2 = [node, found, first1];
  callback = node.useCallback((destination) => {
    let obj = { nodeRef: node.id, destination, multiSelect: null };
    let tmp2;
    if (null != found) {
      obj = { name: null, state: null };
      obj[0] = tmp.name;
      obj[1] = first1;
      tmp2 = obj;
    }
    obj[2] = tmp2;
    return obj;
  }, items2);
  const items3 = [found];
  const effect1 = node.useEffect(() => {
    if (null != found) {
      const data = found.data;
      if (null != data) {
        function _loop(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          if (true === closure_0) {
            closure_1_17((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = closure_1;
              return obj;
            });
          }
        }
        const tmp2 = data[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let tmp7 = callback(tmp4, 4);
          closure_0 = tmp7[3];
          let _loopResult = _loop(tmp7[0], tmp7[1]);
          continue;
        }
      }
    }
  }, items3);
  const items4 = [navigation, node];
  const effect2 = node.useEffect(() => navigation.addListener("beforeRemove", () => {
    onNavigate = onNavigate.onNavigate;
    if (onNavigate != null) {
      onNavigate("..");
    }
  }), items4);
  const items5 = [node.is_auto_submit, first, onSubmit, node.id];
  const effect3 = node.useEffect(() => {
    let is_auto_submit = node.is_auto_submit;
    if (is_auto_submit) {
      is_auto_submit = !first;
    }
    if (is_auto_submit) {
      lib(true);
      const obj = { nodeRef: null, destination: null };
      obj[0] = node.id;
      const items = ["", node.id];
      obj[1] = items;
      onSubmit(obj);
    }
  }, items5);
  const items6 = [node, nodeMap, navigation, history, onNavigate, closeModal, reportType, callback];
  const callback1 = node.useCallback((arg0) => {
    const tmp2 = nodeMap[callback(undefined, arg0, 2)[1]];
    if (null == tmp2) {
      closeModal();
    } else {
      const elements = tmp2.elements;
      const skip = "skip";
      if (null != elements.find((item, index) => item.type === skip)) {
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
      if (reportType.name === external_link(ref[25]).ReportNames.MESSAGE) {
        navigation(ref[26]);
        let obj = { message_id: null, content_type: null, report_sub_type: null, current_node: null, next_node: null };
        obj[0] = reportType.record.id;
        obj[1] = reportType.name;
        obj[2] = tmp2.report_type;
        obj[3] = node.id;
        obj[4] = tmp2.id;
        obj.trackWithMetadata(closure_1_13.IAR_NAVIGATE, obj);
      }
      obj = { node: null, history: null };
      obj[0] = tmp2;
      const items1 = [];
      items1[HermesBuiltin.arraySpread(history, 0)] = tmp;
      obj[1] = items1;
      navigation.push(found, obj);
      if (onNavigate != null) {
        tmp16(tmp2.key);
      }
    }
  }, items6);
  const items7 = [node, history, navigation];
  const effect4 = node.useEffect(() => {
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
      const obj = { headerLeft: null };
      obj[0] = NullComponent;
      navigation.setOptions(obj);
    }
  }, items7);
  const callback2 = node.useCallback((getChannelId) => {
    const channel = closeModal.getChannel(getChannelId.getChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      let result = channel.type !== first.DM && channel.type !== tmp3.GROUP_DM;
      if (result) {
        const obj = { channelId: null };
        obj[0] = channel.id;
        result = onSubmit.canWithPartialContext(lib.MANAGE_MESSAGES, obj);
      }
      tmp2 = result;
    }
    return tmp2;
  }, []);
  let obj2 = external_link(ref[28]);
  const iarReportSettingsUpsells = obj2.useIarReportSettingsUpsells(reportSubType);
  const elements3 = node.elements;
  external_link = "ignore_users";
  let tmp28 = null != elements3.find((item, index) => item.type === skip);
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
  let tmp2Result = tmp2(tmp3[29]);
  let userIsTeen = tmp2Result.useUserIsTeen();
  tmp2Result = tmp2(tmp3[30]);
  const activeLinkUsers = tmp2Result.useActiveLinkUsers();
  if (userIsTeen) {
    userIsTeen = activeLinkUsers.length > 0;
  }
  if (userIsTeen) {
    const elements4 = node.elements;
    external_link = "share_with_parents";
    userIsTeen = null != elements4.find((item, index) => item.type === skip);
  }
  obj = { style: tmp.scrollView, children: null };
  obj1 = { element: null };
  const elements5 = node.elements;
  external_link = "success";
  const tmp13 = callback(node.useState(false), 2);
  const tmp32 = history;
  obj1[0] = elements5.find((item, index) => item.type === skip);
  const items8 = [first1(navigation(ref[32]), obj1), first1(callback, { node, headerRef: ref }), first1(callback1, { node }), , , , , , , , , , , , , , , ];
  let tmp33Result = null;
  if (null != found1) {
    obj2 = { element: null };
    obj2[0] = found1;
    tmp33Result = tmp33(tmp34(tmp3[33]), obj2);
  }
  items8[3] = tmp33Result;
  tmp33Result = null != found2;
  if (tmp33Result) {
    const obj3 = { element: null };
    obj3[0] = found2;
    tmp33Result = tmp33(tmp34(tmp3[34]), obj3);
  }
  items8[4] = tmp33Result;
  const elements6 = node.elements;
  external_link = "message_preview";
  let tmp33Result1 = null;
  if (null != elements6.find((item, index) => item.type === skip)) {
    if ("message" !== reportType.name) {
      if ("first_dm" !== reportType.name) {
        tmp33Result1 = null;
      }
    }
    const obj4 = { message: null };
    obj4[0] = reportType.record;
    tmp33Result1 = tmp33(tmp34(tmp3[35]), obj4);
  }
  items8[5] = tmp33Result1;
  const elements7 = node.elements;
  external_link = "user_preview";
  let tmp33Result2 = null;
  if (null != elements7.find((item, index) => item.type === skip)) {
    tmp33Result2 = null;
    if ("user" === reportType.name) {
      const obj5 = { user: null };
      obj5[0] = reportType.record;
      tmp33Result2 = tmp33(tmp34(tmp3[36]), obj5);
    }
  }
  items8[6] = tmp33Result2;
  const elements8 = node.elements;
  external_link = "widget_preview";
  let tmp33Result3 = null;
  if (null != elements8.find((item, index) => item.type === skip)) {
    tmp33Result3 = null;
    if ("widget" === reportType.name) {
      ({ widget: obj13[0], user_id: obj13[1] } = reportType);
      tmp33Result3 = tmp33(tmp34(tmp3[37]), { widget: null, userId: null });
    }
  }
  items8[7] = tmp33Result3;
  const elements9 = node.elements;
  external_link = "channel_preview";
  let tmp33Result4 = null;
  if (null != elements9.find((item, index) => item.type === skip)) {
    tmp33Result4 = null;
    if ("stage_channel" === reportType.name) {
      const obj7 = { stageInstance: null };
      obj7[0] = reportType.record;
      tmp33Result4 = tmp33(tmp34(tmp3[38]), obj7);
    }
  }
  items8[8] = tmp33Result4;
  const elements10 = node.elements;
  external_link = "guild_preview";
  let tmp33Result5 = null;
  if (null != elements10.find((item, index) => item.type === skip)) {
    tmp33Result5 = null;
    if ("guild" === reportType.name) {
      const obj8 = { guild: null };
      obj8[0] = reportType.record;
      tmp33Result5 = tmp33(tmp34(tmp3[39]), obj8);
    }
  }
  items8[9] = tmp33Result5;
  const elements11 = node.elements;
  external_link = "guild_scheduled_event_preview";
  let tmp33Result6 = null;
  if (null != elements11.find((item, index) => item.type === skip)) {
    tmp33Result6 = null;
    if ("guild_scheduled_event" === reportType.name) {
      const obj9 = { event: null };
      obj9[0] = reportType.record;
      tmp33Result6 = tmp33(tmp34(tmp3[40]), obj9);
    }
  }
  items8[10] = tmp33Result6;
  const elements12 = node.elements;
  external_link = "guild_discovery_preview";
  let tmp33Result7 = null;
  if (null != elements12.find((item, index) => item.type === skip)) {
    tmp33Result7 = null;
    if ("guild_discovery" === reportType.name) {
      const obj10 = { guild: null };
      obj10[0] = reportType.record;
      tmp33Result7 = tmp33(tmp34(tmp3[41]), obj10);
    }
  }
  items8[11] = tmp33Result7;
  const obj11 = { element: null, menuName: null, history: null };
  const elements13 = node.elements;
  external_link = "breadcrumbs";
  let tmp34Result = tmp34(tmp3[42]);
  obj11[0] = elements13.find((item, index) => item.type === skip);
  obj11[1] = reportType.name;
  obj11[2] = history;
  items8[12] = first1(tmp34Result, obj11);
  elements = node.elements;
  let someResult = elements.some((item, index) => onNavigate.includes(item.type));
  if (someResult) {
    if (!tmp28) {
      const items9 = [tmp28, , , , , ];
      if (userIsTeen) {
        const obj12 = { parents: null };
        obj12[0] = activeLinkUsers;
        userIsTeen = tmp33(tmp34(tmp3[45]), obj12);
      }
      items9[1] = userIsTeen;
      const elements14 = node.elements;
      external_link = "block_users";
      let tmp51 = null != elements14.find((item, index) => item.type === skip);
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
          const elements15 = node.elements;
          external_link = "mute_users";
          tmp55 = null != elements15.find((item, index) => item.type === skip);
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
          const elements16 = node.elements;
          external_link = "delete_message";
          let callback2Result = null != elements16.find((item, index) => item.type === skip);
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
            const obj13 = { message: null, reportId: null };
            obj13[0] = reportType.record;
            obj13[1] = reportId;
            callback2Result = tmp33(tmp34(tmp3[48]), obj13);
          }
          items9[4] = callback2Result;
          const elements17 = node.elements;
          external_link = "leave_guild";
          let tmp33Result8 = null != elements17.find((item, index) => item.type === skip);
          if (tmp33Result8) {
            tmp33Result8 = "guild" === reportType.name;
          }
          if (tmp33Result8) {
            const obj14 = { guild: null, reportId: null, addCallback: null };
            obj14[0] = reportType.record;
            obj14[1] = reportId;
            obj14[2] = node.addOnCloseCallback;
            tmp33Result8 = tmp33(tmp34(tmp3[49]), obj14);
          }
          const obj15 = { children: null };
          items9[5] = tmp33Result8;
          obj15[0] = items9;
          someResult = tmp31(tmp47, obj15);
        } else {
          tmp34Result = tmp34(tmp3[47]);
          if ("user" === reportType.name) {
            let author3 = reportType.record;
          } else {
            author3 = reportType.record.author;
          }
          const obj16 = { user: null, channelId: null, reportId: null };
          obj16[0] = author3;
          obj16[1] = memo;
          obj16[2] = reportId;
          tmp33(tmp34Result, obj16);
        }
      } else {
        if ("user" === reportType.name) {
          let author2 = reportType.record;
        } else {
          author2 = reportType.record.author;
        }
        const obj17 = { user: null, channelId: null, reportId: null };
        obj17[0] = author2;
        obj17[1] = memo;
        obj17[2] = reportId;
        tmp33(tmp34(tmp3[46]), obj17);
        const tmp34Result1 = tmp34(tmp3[46]);
      }
    } else {
      if ("user" === reportType.name) {
        let author = reportType.record;
      } else {
        author = reportType.record.author;
      }
      const obj18 = { user: null, channelId: null, reportId: null };
      obj18[0] = author;
      obj18[1] = memo;
      obj18[2] = reportId;
      tmp33(tmp34(tmp3[44]), obj18);
      const tmp34Result2 = tmp34(tmp3[44]);
    }
  }
  items8[13] = someResult;
  const elements18 = node.elements;
  external_link = "settings_upsells";
  let tmp33Result12 = null != elements18.find((item, index) => item.type === skip);
  if (tmp33Result12) {
    let tmp63 = "message" === reportType.name;
    if (!tmp63) {
      tmp63 = "report_to_mod_message" === reportType.name;
    }
    tmp33Result12 = tmp63;
  }
  if (tmp33Result12) {
    tmp33Result12 = null != iarReportSettingsUpsells;
  }
  if (tmp33Result12) {
    const obj19 = { settingsUpsells: null, channelId: null, reportId: null, reportType: null, reportSubType: null };
    obj19[0] = iarReportSettingsUpsells;
    obj19[1] = reportType.record.channel_id;
    obj19[2] = reportId;
    obj19[3] = reportType;
    obj19[4] = reportSubType;
    tmp33Result12 = tmp33(tmp34(tmp3[50]), obj19);
  }
  items8[14] = tmp33Result12;
  items8[15] = first1(navigation(ref[51]), {
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
      callback3(obj);
    }
  });
  items8[16] = first1(ChildrenView, { node, onSelectChild: callback1, nodeMap });
  const elements19 = node.elements;
  external_link = "external_link";
  let tmp33Result13 = null;
  if (null != elements19.find((item, index) => item.type === skip)) {
    const obj21 = { elements: null };
    const elements20 = node.elements;
    external_link = "external_link";
    obj21[0] = elements20.filter((item, index) => item.type === external_link);
    tmp33Result13 = tmp33(tmp34(tmp3[52]), obj21);
    const tmp34Result3 = tmp34(tmp3[52]);
  }
  items8[17] = tmp33Result13;
  obj[1] = items8;
  const items10 = [closure_17(tmp32, obj), ];
  const obj22 = { isModeratorReport: hasItem, disabled: null, button: null, hasError: null, onPress: null };
  const tmp35 = navigation(ref[32]);
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
  obj22[1] = tmp14;
  obj22[2] = node.button;
  obj22[3] = tmp19[0];
  obj22[4] = function onPress(type) {
    type = type.type;
    if ("done" !== type) {
      if ("cancel" !== type) {
        if ("next" === type) {
          const items = ["", type.target];
          callback1(items);
        } else if ("submit" === type) {
          callback2(true);
          const items1 = [""];
          items1[1] = items1.successNodeId;
          const promise = onSubmit(callback(items1));
          const nextPromise = onSubmit(callback(items1)).then((result) => {
            closure_1_18(false);
            let header;
            if (nodeMap[items1.successNodeId] != null) {
              header = tmp2.header;
            }
            if (null != header) {
              const AccessibilityAnnouncer = external_link(ref[27]).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(tmp2.header);
            }
            callback1(items1);
          });
          onSubmit(callback(items1)).then((result) => {
            closure_1_18(false);
            let header;
            if (nodeMap[items1.successNodeId] != null) {
              header = tmp2.header;
            }
            if (null != header) {
              const AccessibilityAnnouncer = external_link(ref[27]).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(tmp2.header);
            }
            callback1(items1);
          }).catch((error) => {
            callback2(true);
          }).finally(() => {
            callback(false);
          });
          const catchPromise = onSubmit(callback(items1)).then((result) => {
            closure_1_18(false);
            let header;
            if (nodeMap[items1.successNodeId] != null) {
              header = tmp2.header;
            }
            if (null != header) {
              const AccessibilityAnnouncer = external_link(ref[27]).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(tmp2.header);
            }
            callback1(items1);
          }).catch((error) => {
            callback2(true);
          });
        }
      }
    }
    callback1(["", -1]);
  };
  items10[1] = first1(navigation(ref[53]), obj22);
  obj[3] = items10;
  return closure_17(external_link(ref[31]).SafeAreaPaddingView, obj);
};