// discord_app/modules/in_app_reports/native/components/NodeView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import CustomMarkupAll from "../../../markup/CustomMarkup.native.tsx";
import MenuTypes from "../../MenuTypes.tsx";
import ArrowDefault from "Arrow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

require = fn;
function HeaderView(node) {
  ({ header, subheader, description } = node.node);
  const tmp = closure_18();
  let obj = { style: tmp.headerContainer, children: null };
  let tmp6 = null != header;
  if (tmp6) {
    tmp6 = "" !== header;
  }
  if (tmp6) {
    obj = {
      ref: node.headerRef,
      style: tmp.header,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: header,
    };
    tmp6 = value2(Text_Text.Text, obj);
  }
  const items = [tmp6, ,];
  let tmp9 = null;
  if (null != subheader) {
    tmp9 = null;
    if (subheader.length > 0) {
      obj = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: tmp3(subheader) };
      tmp9 = value2(Text_Text.Text, obj);
    }
  }
  items[1] = tmp9;
  let tmp12 = null;
  if (null != description) {
    tmp12 = null;
    if (description.length > 0) {
      const obj1 = { style: tmp.description, variant: "text-xs/medium", color: "text-default", children: description };
      tmp12 = value2(Text_Text.Text, obj1);
    }
  }
  items[2] = tmp12;
  obj.children = items;
  return closure_1_17(timestampProducer, obj);
}
function InfoView(node) {
  const info = node.node.info;
  const tmp = closure_18();
  let tmp4 = null;
  if (null != info) {
    let obj = { style: null, children: null };
    const items = [tmp.infoBox];
    obj = { backgroundColor: null };
    let obj2 = ColorUtils;
    obj.backgroundColor = obj2.hexWithOpacity(tmp.infoBox.backgroundColor, 0.1);
    items[1] = obj;
    obj.style = items;
    obj = { size: "md", color: tmp.infoBox.backgroundColor };
    const items1 = [value2(CircleInformationIcon.CircleInformationIcon, obj)];
    const obj1 = { style: tmp.infoBoxText, children: null };
    obj2 = {
      variant: "text-sm/normal",
      color: "interactive-text-active",
      includeFontPadding: true,
      children: tmp3(info),
    };
    obj1.children = value2(Text_Text.Text, obj2);
    items1[1] = value2(timestampProducer, obj1);
    obj.children = items1;
    tmp4 = closure_1_17(timestampProducer, obj);
  }
  return tmp4;
}
function ChildItem(child) {
  child = child.child;
  importDefault = Object.assign(child, Object.assign({ child: 0, nodeMap: 0 }));
  const tmp = closure_18();
  [tmp3, tmp4] = _slicedToArray(child, 2);
  let obj = child(504);
  const items = [DevSettingsStore];
  let stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("iar_show_report_sub_type_labels"));
  if (child.nodeMap[tmp4] != null) {
    const report_type = tmp8.report_type;
  }
  obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress: _slicedToArray(
      noop.useState(() => () => closure_1_1.onPress(child)),
      1,
    )[0],
    children: null,
  };
  obj = { style: tmp.childContainer, children: null };
  const obj1 = { style: tmp.childContent, children: null };
  const items1 = [
    closure_16(child(4556).Text, {
      style: tmp.childButtonText,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: tmp3,
    }),
  ];
  if (stateFromStores) {
    stateFromStores = null != report_type;
  }
  if (stateFromStores) {
    const obj3 = { style: tmp.debugText, variant: "text-xs/normal", color: "text-muted", children: report_type };
    stateFromStores = tmp9(tmp5(4556).Text, obj3);
  }
  items1[1] = stateFromStores;
  obj1.children = items1;
  const items2 = [closure_17(closure_6, obj1), closure_16(ArrowDefault, {})];
  obj.children = items2;
  obj.children = closure_17(closure_6, obj);
  return closure_16(child(5123).PressableHighlight, obj);
}
function ChildrenView(node) {
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
          return value2(ChildItem, { child, nodeMap, onPress }, "" + tmp[0] + "+" + tmp[1]);
        }),
      };
      tmp2 = closure_16(closure_6, obj);
    }
  }
  return tmp2;
}
function NullComponent() {
  return null;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const REMEDIATION_ELEMENT_TYPES = fn(8637).REMEDIATION_ELEMENT_TYPES;
const IN_APP_REPORTS_NODE = fn(8635).IN_APP_REPORTS_NODE;
const Constants = fn(1074);
({ AnalyticEvents: map1, ChannelTypes: closure_14 } = Constants);
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  scrollView: null,
  childrenContainer: null,
  headerContainer: null,
  header: null,
  subheader: null,
  description: null,
  infoBox: null,
  infoBoxText: null,
  childButton: null,
  childContainer: null,
  childContent: null,
  childButtonText: null,
  debugText: null,
};
createStyles = {
  flex: 1,
  alignSelf: "stretch",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  marginTop: 30,
};
createStyles.container = createStyles;
createStyles.scrollView = { flex: 1, alignSelf: "stretch", marginTop: 24 };
createStyles.childrenContainer = { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 };
createStyles.headerContainer = { alignSelf: "stretch", marginBottom: 24, paddingHorizontal: 16 };
createStyles.header = { marginBottom: 8, textAlign: "center" };
createStyles.subheader = { lineHeight: 20, marginBottom: 8, textAlign: "center" };
createStyles.description = { lineHeight: 16, marginBottom: 8, textAlign: "center" };
createStyles.infoBox = {
  alignSelf: "stretch",
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.BLUE_345,
  borderRadius: nativeDefault.radii.xs,
  borderColor: nativeDefault.unsafe_rawColors.BLUE_345,
  borderWidth: 1,
  padding: 8,
  flexDirection: "row",
  marginBottom: 16,
  marginHorizontal: 16,
};
createStyles.infoBoxText = { flex: 1, marginStart: 8 };
let obj1 = {
  alignSelf: "stretch",
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.BLUE_345,
  borderRadius: nativeDefault.radii.xs,
  borderColor: nativeDefault.unsafe_rawColors.BLUE_345,
  borderWidth: 1,
  padding: 8,
  flexDirection: "row",
  marginBottom: 16,
  marginHorizontal: 16,
};
createStyles.childButton = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
let obj2 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
createStyles.childContainer = {
  minHeight: 60,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingVertical: 16,
  paddingStart: 16,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.childContent = { flex: 1 };
createStyles.childButtonText = { lineHeight: 20 };
createStyles.debugText = { marginTop: 4, lineHeight: 16 };
let closure_18 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/NodeView.tsx");

export default function NodeView(node) {
  let external_link = node;
  const tmp = closure_18();
  let obj = external_link(ref[21]);
  let navigation = obj.useNavigation();
  let obj1 = external_link(ref[22]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = node.useRef(null);
  _slicedToArray = node.useRef(false);
  let items = [navigation, isScreenReaderEnabled];
  const effect = node.useEffect(() => {
    if (isScreenReaderEnabled) {
      function focusHeader() {
        if (!ref2.current) {
          tmp.current = true;
          external_link(ref[23]);
          const obj = { ref, delay: 300 };
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
          if (!ref2.current) {
            ref2.current = true;
            external_link(ref[23]);
            const obj = { ref, delay: 300 };
            const result = obj.setAccessibilityFocus(obj);
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
  const memo = node.useMemo(() => {
    let channel_id;
    if ("message" === reportType.name) {
      channel_id = reportType.record.channel_id;
    }
    return channel_id;
  }, items1);
  let elements = node.elements;
  external_link = "checkbox";
  const found = elements.find((type) => type.type === skip);
  const elements1 = node.elements;
  external_link = "text_line_resource";
  const found1 = elements1.find((type) => type.type === skip);
  const elements2 = node.elements;
  external_link = "text";
  const found2 = elements2.find((type) => type.type === skip);
  const REPORT_TO_MOD = external_link(ref[24]).ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(reportType.name);
  [tmp14, closure_13] = _slicedToArray(node.useState(false), 2);
  const tmp15 = _slicedToArray(node.useState(false), 2);
  const first = tmp15[0];
  closure_15 = tmp15[1];
  const tmp17 = _slicedToArray(
    node.useState(() => ({})),
    2,
  );
  const first1 = tmp17[0];
  closure_17 = tmp17[1];
  const tmp19 = _slicedToArray(node.useState(false), 2);
  closure_18 = tmp19[1];
  const items2 = [node, found, first1];
  const callback = node.useCallback((destination) => {
    let obj = { nodeRef: node.id, destination, multiSelect: null };
    let tmp2;
    if (null != found) {
      obj = { name: tmp.name, state: first1 };
      tmp2 = obj;
    }
    obj.multiSelect = tmp2;
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
          let tmp7 = closure_4(tmp4, 4);
          closure_0 = tmp7[3];
          let _loopResult = _loop(tmp7[0], tmp7[1]);
          continue;
        }
      }
    }
  }, items3);
  const items4 = [navigation, node];
  const effect2 = node.useEffect(
    () =>
      navigation.addListener("beforeRemove", () => {
        onNavigate = onNavigate.onNavigate;
        if (onNavigate != null) {
          onNavigate("..");
        }
      }),
    items4,
  );
  const items5 = [node.is_auto_submit, first, onSubmit, node.id];
  const effect3 = node.useEffect(() => {
    let is_auto_submit = node.is_auto_submit;
    if (is_auto_submit) {
      is_auto_submit = !first;
    }
    if (is_auto_submit) {
      closure_15(true);
      const obj = { nodeRef: tmp.id, destination: null };
      const items = ["", tmp.id];
      obj.destination = items;
      onSubmit(obj);
    }
  }, items5);
  const items6 = [node, nodeMap, navigation, history, onNavigate, closeModal, reportType, callback];
  const callback1 = node.useCallback((arg0) => {
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
        let obj = {
          message_id: tmp4.record.id,
          content_type: tmp4.name,
          report_sub_type: tmp2.report_type,
          current_node: node.id,
          next_node: tmp2.id,
        };
        obj.trackWithMetadata(constants.IAR_NAVIGATE, obj);
      }
      obj = { node: tmp2, history: null };
      const items1 = [];
      items1[HermesBuiltin.arraySpread(history, 0)] = tmp;
      obj.history = items1;
      navigation.push(IN_APP_REPORTS_NODE, obj);
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
      const obj = { headerLeft: NullComponent };
      navigation.setOptions(obj);
    }
  }, items7);
  const callback2 = node.useCallback((getChannelId) => {
    const channel = closeModal.getChannel(getChannelId.getChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      let result = channel.type !== first.DM && channel.type !== tmp3.GROUP_DM;
      if (result) {
        const obj = { channelId: channel.id };
        result = onSubmit.canWithPartialContext(closure_15.MANAGE_MESSAGES, obj);
      }
      tmp2 = result;
    }
    return tmp2;
  }, []);
  let obj2 = external_link(ref[28]);
  const iarReportSettingsUpsells = obj2.useIarReportSettingsUpsells(reportSubType);
  const elements3 = node.elements;
  external_link = "ignore_users";
  let tmp28 = null != elements3.find((type) => type.type === skip);
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
    userIsTeen = null != elements4.find((type) => type.type === skip);
  }
  const rect = { style: tmp.container, bottom: true, top: true, children: null };
  obj = { style: tmp.scrollView, children: null };
  obj = { element: null };
  const elements5 = node.elements;
  external_link = "success";
  const tmp13 = _slicedToArray(node.useState(false), 2);
  const tmp32 = history;
  obj.element = elements5.find((type) => type.type === skip);
  const items8 = [
    first1(navigation(ref[32]), obj),
    first1(callback, { node, headerRef: ref }),
    first1(callback1, { node }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
  ];
  let tmp33Result = null;
  if (null != found1) {
    obj1 = { element: found1 };
    tmp33Result = tmp33(tmp34(tmp3[33]), obj1);
  }
  items8[3] = tmp33Result;
  tmp33Result = null != found2;
  if (tmp33Result) {
    obj2 = { element: found2 };
    tmp33Result = tmp33(tmp34(tmp3[34]), obj2);
  }
  items8[4] = tmp33Result;
  const elements6 = node.elements;
  external_link = "message_preview";
  let tmp33Result1 = null;
  if (null != elements6.find((type) => type.type === skip)) {
    if ("message" !== reportType.name) {
      if ("first_dm" !== reportType.name) {
        tmp33Result1 = null;
      }
    }
    const obj3 = { message: reportType.record };
    tmp33Result1 = tmp33(tmp34(tmp3[35]), obj3);
  }
  items8[5] = tmp33Result1;
  const elements7 = node.elements;
  external_link = "user_preview";
  let tmp33Result2 = null;
  if (null != elements7.find((type) => type.type === skip)) {
    tmp33Result2 = null;
    if ("user" === reportType.name) {
      const obj4 = { user: reportType.record };
      tmp33Result2 = tmp33(tmp34(tmp3[36]), obj4);
    }
  }
  items8[6] = tmp33Result2;
  const elements8 = node.elements;
  external_link = "widget_preview";
  let tmp33Result3 = null;
  if (null != elements8.find((type) => type.type === skip)) {
    tmp33Result3 = null;
    if ("widget" === reportType.name) {
      ({ widget: obj13.widget, user_id: obj13.userId } = reportType);
      tmp33Result3 = tmp33(tmp34(tmp3[37]), { widget: null, userId: null });
      const obj5 = { widget: null, userId: null };
    }
  }
  items8[7] = tmp33Result3;
  const elements9 = node.elements;
  external_link = "channel_preview";
  let tmp33Result4 = null;
  if (null != elements9.find((type) => type.type === skip)) {
    tmp33Result4 = null;
    if ("stage_channel" === reportType.name) {
      const obj6 = { stageInstance: reportType.record };
      tmp33Result4 = tmp33(tmp34(tmp3[38]), obj6);
    }
  }
  items8[8] = tmp33Result4;
  const elements10 = node.elements;
  external_link = "guild_preview";
  let tmp33Result5 = null;
  if (null != elements10.find((type) => type.type === skip)) {
    tmp33Result5 = null;
    if ("guild" === reportType.name) {
      const obj7 = { guild: reportType.record };
      tmp33Result5 = tmp33(tmp34(tmp3[39]), obj7);
    }
  }
  items8[9] = tmp33Result5;
  const elements11 = node.elements;
  external_link = "guild_scheduled_event_preview";
  let tmp33Result6 = null;
  if (null != elements11.find((type) => type.type === skip)) {
    tmp33Result6 = null;
    if ("guild_scheduled_event" === reportType.name) {
      const obj8 = { event: reportType.record };
      tmp33Result6 = tmp33(tmp34(tmp3[40]), obj8);
    }
  }
  items8[10] = tmp33Result6;
  const elements12 = node.elements;
  external_link = "guild_discovery_preview";
  let tmp33Result7 = null;
  if (null != elements12.find((type) => type.type === skip)) {
    tmp33Result7 = null;
    if ("guild_discovery" === reportType.name) {
      const obj9 = { guild: reportType.record };
      tmp33Result7 = tmp33(tmp34(tmp3[41]), obj9);
    }
  }
  items8[11] = tmp33Result7;
  const obj10 = { element: null, menuName: null, history: null };
  const elements13 = node.elements;
  external_link = "breadcrumbs";
  let tmp34Result = tmp34(tmp3[42]);
  obj10.element = elements13.find((type) => type.type === skip);
  obj10.menuName = reportType.name;
  obj10.history = history;
  items8[12] = first1(tmp34Result, obj10);
  elements = node.elements;
  let someResult = elements.some((type) => onNavigate.includes(type.type));
  if (someResult) {
    if (!tmp28) {
      const items9 = [tmp28, , , , ,];
      if (userIsTeen) {
        const obj11 = { parents: activeLinkUsers };
        userIsTeen = tmp33(tmp34(tmp3[45]), obj11);
      }
      items9[1] = userIsTeen;
      const elements14 = node.elements;
      external_link = "block_users";
      let tmp51 = null != elements14.find((type) => type.type === skip);
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
          tmp55 = null != elements15.find((type) => type.type === skip);
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
          let callback2Result = null != elements16.find((type) => type.type === skip);
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
            const obj12 = { message: reportType.record, reportId };
            callback2Result = tmp33(tmp34(tmp3[48]), obj12);
          }
          items9[4] = callback2Result;
          const elements17 = node.elements;
          external_link = "leave_guild";
          let tmp33Result8 = null != elements17.find((type) => type.type === skip);
          if (tmp33Result8) {
            tmp33Result8 = "guild" === reportType.name;
          }
          if (tmp33Result8) {
            const obj13 = { guild: reportType.record, reportId, addCallback: node.addOnCloseCallback };
            tmp33Result8 = tmp33(tmp34(tmp3[49]), obj13);
          }
          const obj14 = { children: null };
          items9[5] = tmp33Result8;
          obj14.children = items9;
          someResult = tmp31(tmp47, obj14);
        } else {
          tmp34Result = tmp34(tmp3[47]);
          if ("user" === reportType.name) {
            let author3 = reportType.record;
          } else {
            author3 = reportType.record.author;
          }
          const obj15 = { user: author3, channelId: memo, reportId };
          tmp33(tmp34Result, obj15);
        }
      } else {
        if ("user" === reportType.name) {
          let author2 = reportType.record;
        } else {
          author2 = reportType.record.author;
        }
        const obj16 = { user: author2, channelId: memo, reportId };
        tmp33(tmp34(tmp3[46]), obj16);
        const tmp34Result1 = tmp34(tmp3[46]);
      }
    } else {
      if ("user" === reportType.name) {
        let author = reportType.record;
      } else {
        author = reportType.record.author;
      }
      const obj17 = { user: author, channelId: memo, reportId };
      tmp33(tmp34(tmp3[44]), obj17);
      const tmp34Result2 = tmp34(tmp3[44]);
    }
  }
  items8[13] = someResult;
  const elements18 = node.elements;
  external_link = "settings_upsells";
  let tmp33Result12 = null != elements18.find((type) => type.type === skip);
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
    const obj18 = {
      settingsUpsells: iarReportSettingsUpsells,
      channelId: reportType.record.channel_id,
      reportId,
      reportType,
      reportSubType,
    };
    tmp33Result12 = tmp33(tmp34(tmp3[50]), obj18);
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
      closure_17(obj);
    },
  });
  items8[16] = first1(ChildrenView, { node, onSelectChild: callback1, nodeMap });
  const elements19 = node.elements;
  external_link = "external_link";
  let tmp33Result13 = null;
  if (null != elements19.find((type) => type.type === skip)) {
    const obj20 = { elements: null };
    const elements20 = node.elements;
    external_link = "external_link";
    obj20.elements = elements20.filter((type) => type.type === external_link);
    tmp33Result13 = tmp33(tmp34(tmp3[52]), obj20);
    const tmp34Result3 = tmp34(tmp3[52]);
  }
  items8[17] = tmp33Result13;
  obj.children = items8;
  const items10 = [closure_17(tmp32, obj)];
  const obj21 = { isModeratorReport: hasItem, disabled: null, button: null, hasError: null, onPress: null };
  const obj19 = {
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
    },
  };
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
  obj21.disabled = tmp14;
  obj21.button = node.button;
  obj21.hasError = tmp19[0];
  obj21.onPress = function onPress(type) {
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
            let header;
            if (nodeMap[external_link.successNodeId] != null) {
              header = tmp2.header;
            }
            if (null != header) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(tmp2.header);
            }
            callback1(items1);
          });
          onSubmit(callback(items1))
            .then(() => {
              closure_18(false);
              let header;
              if (nodeMap[external_link.successNodeId] != null) {
                header = tmp2.header;
              }
              if (null != header) {
                const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2.header);
              }
              callback1(items1);
            })
            .catch(() => {
              closure_1_18(true);
            })
            .finally(() => {
              closure_1_13(false);
            });
          const catchPromise = onSubmit(callback(items1))
            .then(() => {
              closure_18(false);
              let header;
              if (nodeMap[external_link.successNodeId] != null) {
                header = tmp2.header;
              }
              if (null != header) {
                const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2.header);
              }
              callback1(items1);
            })
            .catch(() => {
              closure_1_18(true);
            });
        }
      }
    }
    callback1(["", -1]);
  };
  items10[1] = first1(navigation(ref[53]), obj21);
  rect.children = items10;
  return closure_17(external_link(ref[31]).SafeAreaPaddingView, rect);
}
