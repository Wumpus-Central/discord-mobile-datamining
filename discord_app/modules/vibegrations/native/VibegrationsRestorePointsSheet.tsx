// === Module 17088: VibegrationsRestorePointsSheet ===

// Module 17088 (VibegrationsRestorePointsSheet)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import _modDef4416 from "module_4416" /* 4416 */;
import DateUtils from "DateUtils" /* 4507 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import VibegrationsRestorePanelOp from "VibegrationsRestorePanelOp" /* 17089 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VibegrationsConnectionStore = fn(13457);
({ createDatabaseRestorePoint: closure_7, fetchDatabaseRestorePoints: closure_8, fetchDatabaseRestoreWindow: closure_9, restoreDatabaseToPoint: c10, restoreDatabaseToTimestamp: closure_11 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, section: null, state: null, notice: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.state = { alignItems: "center", padding: nativeDefault.space.PX_24 };
let obj5 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
obj2.notice = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRestorePointsSheet.tsx");

export default function VibegrationsRestorePointsSheet(projectId) {
  projectId = projectId.projectId;
  const installScope = projectId.installScope;
  let environment;
  noop = undefined;
  c5 = undefined;
  let first1;
  closure_7 = undefined;
  let first2;
  closure_9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  c12 = undefined;
  let callback;
  let num;
  let prop;
  let callback1;
  closure_17 = undefined;
  c18 = undefined;
  c19 = undefined;
  let callback5;
  const tmp = num();
  let items = [installScope];
  const memo = noop.useMemo(() => VibegrationsRestorePanelOp.restorePanelEnvironments(installScope), items);
  let str = memo[0];
  if (str == null) {
    str = "stable";
  }
  const tmp5 = environment(noop.useState(str), 2);
  environment = tmp5[0];
  noop = tmp5[1];
  [obj2, c5] = environment(noop.useState({ status: "loading" }), 2);
  const tmp8 = environment(noop.useState(""), 2);
  first1 = tmp8[0];
  closure_7 = tmp10;
  const tmp11 = environment(noop.useState(null), 2);
  first2 = tmp11[0];
  closure_9 = tmp11[1];
  const tmp4 = environment;
  const tmp7 = environment(noop.useState({ status: "loading" }), 2);
  [tmp14, c10] = environment(noop.useState({ phase: "idle" }), 2);
  let tmp15 = "busy" === tmp14.phase;
  closure_11 = tmp15;
  const tmp13 = environment(noop.useState({ phase: "idle" }), 2);
  [tmp17, c12] = environment(noop.useState(0), 2);
  callback = obj.useCallback(() => _undefined2((arg0) => arg0 + 1), []);
  const items1 = [projectId, environment, tmp17];
  const effect = obj.useEffect(() => {
    c0 = false;
    "" + c0 + "|" + first;
    const items = [first2(c0, first), closure_9(c0, first)];
    const allPromises = Promise.all(items);
    Promise.all(items).then((result) => {
      [tmp, tmp2] = result;
      if (!c0) {
        const obj = { status: "loaded", key, points: tmp, window: tmp2, nowMs: null };
        const _Date = Date;
        obj.nowMs = Date.now();
        c5(obj);
      }
    }).catch(() => {
      if (!c0) {
        const obj = { status: "failed", key };
        c5(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items1);
  if ("loading" === obj5.status) {
    obj5 = { status: "loading" };
  } else {
    const _HermesInternal = HermesInternal;
  }
  let _window = null;
  if ("loaded" === obj5.status) {
    _window = obj5.window;
  }
  num = 0;
  if ("loaded" === obj5.status) {
    num = obj5.nowMs;
  }
  prop = undefined;
  if (_window != null) {
    prop = _window.earliestRestoreTimestampMs;
  }
  if (prop == null) {
    prop = num - 24 * projectId(tmp3[10]).RESTORE_WINDOW_DAYS * 60 * 60 * 1000;
  }
  const tmp16 = environment(noop.useState(0), 2);
  const result = projectId(memo[10]).restorePanelStatusForEnvironment(tmp14, environment);
  callback1 = obj.useCallback((environment, tone, text) => _undefined({ phase: "settled", environment, tone, text }), []);
  const items2 = [environment, memo, callback, callback1];
  closure_17 = obj.useCallback((target, arg1) => {
    closure_0 = arg1;
    const obj2 = { key: "VibegrationsRestoreData", title: null, content: null, confirmText: null, onConfirm: null };
    let intl = projectId(memo[12]).intl;
    obj2.title = intl.string(installScope(memo[13]).S3WHxG);
    if (1 === memo.length) {
      let intl3 = projectId(memo[12]).intl;
      const obj3 = { target };
      let formatToPlainStringResult = intl3.formatToPlainString(installScope(memo[13])["0lt6bH"], obj3);
    } else {
      let intl2 = projectId(memo[12]).intl;
      const obj4 = { environment: projectId(memo[10]).restoreEnvironmentLabel(first), target };
      formatToPlainStringResult = intl2.formatToPlainString(installScope(memo[13]).zVcDfj, obj4);
      const tmpResult = projectId(memo[10]);
    }
    obj2.content = formatToPlainStringResult;
    let intl4 = projectId(memo[12]).intl;
    obj2.confirmText = intl4.string(installScope(memo[13]).ZlKerR);
    obj2.onConfirm = function onConfirm() {
      c10({ phase: "busy", environment, kind: "restore" });
      let obj = { phase: "busy", environment, kind: "restore" };
      const promise = closure_0();
      closure_0().then((ok) => {
        if (ok.ok) {
          const intl4 = closure_0(1115).intl;
          closure_1_16(closure_1_3, "positive", intl4.string(installScope(3714).kIWqXR));
          closure_1_13();
        } else if ("expired" === ok.code) {
          const intl3 = closure_0(1115).intl;
          const obj = { days: closure_0(17089).RESTORE_WINDOW_DAYS };
          closure_1_16(closure_1_3, "danger", intl3.formatToPlainString(installScope(3714).PeVYaC, obj));
          closure_1_13();
        } else if ("unconfirmed" === ok.code) {
          const intl2 = closure_0(1115).intl;
          closure_1_16(closure_1_3, "danger", intl2.string(installScope(3714)["2xSPXh"]));
          closure_1_13();
        } else {
          const intl = closure_0(1115).intl;
          closure_1_16(closure_1_3, "danger", intl.string(installScope(3714).kXofol));
        }
      }).catch(() => {
        const intl = closure_0(1115).intl;
        closure_1_16(closure_1_3, "danger", intl.string(installScope(3714).kXofol));
      });
    };
    projectId(memo[11]).showConfirmModal(obj2);
    let obj = projectId(memo[11]);
  }, items2);
  const items3 = [projectId, environment, first1, callback, callback1];
  const callback2 = obj.useCallback(() => {
    _undefined({ phase: "busy", environment, kind: "create" });
    const obj = { phase: "busy", environment, kind: "create" };
    const promise = React5(projectId, environment, first1);
    React5(projectId, environment, first1).then(() => {
      closure_1_7("");
      const intl = projectId(memo[12]).intl;
      callback1(environment, "positive", intl.string(installScope(memo[13]).mfAoFT));
      callback();
    }).catch(() => {
      const intl = projectId(memo[12]).intl;
      callback1(environment, "danger", intl.string(installScope(memo[13]).uhhqP3));
    });
  }, items3);
  let obj3 = projectId(memo[10]);
  [tmp29, c18] = tmp4(noop.useState(0), 2);
  const items4 = [memo];
  const callback3 = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.width);
  }, []);
  const items5 = [memo];
  const memo1 = obj.useMemo(() => memo.map((id) => {
    const obj = { id, label: projectId(memo[10]).restoreEnvironmentLabel(id), page: null };
    return obj;
  }), items4);
  const callback4 = obj.useCallback((arg0) => {
    if (null != memo[arg0]) {
      closure_4(tmp);
    }
  }, items5);
  const tmp4Result = tmp4(noop.useState(0), 2);
  const segmentedControlState = projectId(memo[14]).useSegmentedControlState({ items: memo1, pageWidth: tmp29, onSetActiveIndex: callback4 });
  let intl = projectId(tmp3[12]).intl;
  let stringResult = intl.string(installScope(memo[13]).rI7mpv);
  c19 = stringResult;
  const items6 = [stringResult];
  callback5 = obj.useCallback((mode, startDate, minimumDate, onSubmit) => {
    const obj = ActionSheetActionCreatorsDefault;
    let str = "VibegrationsRestoreTime";
    if ("date" === mode) {
      str = "VibegrationsRestoreDate";
    }
    obj.openLazy(asyncRequireImpl(9886, dependencyMap.paths), str, { mode, title, startDate, minimumDate: minimumDate[0], maximumDate: minimumDate[1], onSubmit }, "stack");
  }, items6);
  const items7 = [prop, num, callback5, first2];
  const callback6 = obj.useCallback(() => {
    const obj = _modDef4416(prop);
    let items = [_modDef4416(prop).startOf("day").toDate(), ];
    const startOfResult = _modDef4416(prop).startOf("day");
    const obj3 = _modDef4416(num);
    items[1] = _modDef4416(num).endOf("day").toDate();
    let tmp3 = first2;
    if (first2 == null) {
      tmp3 = num;
    }
    const endOfResult = _modDef4416(num).endOf("day");
    callback5("date", new Date(tmp3), items, (arg0) => {
      closure_0 = arg0;
      const timerId = setTimeout(() => {
        const toDateResult = closure_0.toDate();
        const items = [new Date(prop), ];
        const date = new Date(prop);
        items[1] = new Date(num);
        callback5("time", toDateResult, items, (arg0) => {
          closure_1_9(Math.min(closure_1_14, Math.max(closure_1_15, arg0.valueOf())));
        });
      }, 0);
    });
    let date = new Date(tmp3);
  }, items7);
  if ("loading" === obj5.status) {
    const obj6 = { style: tmp.state, children: c12(c5, {}) };
    let tmp38 = c12(first1, obj6);
    let tmp37 = c12;
  } else if ("failed" === obj5.status) {
    const obj7 = { style: tmp.state, accessibilityRole: "alert", children: null };
    const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl3 = tmp24(tmp3[12]).intl;
    obj8.children = intl3.string(tmp2(tmp3[13]).pwFaXc);
    obj7.children = c12(tmp24(tmp3[18]).Text, obj8);
    tmp38 = c12(first1, obj7);
    tmp37 = c12;
  } else if (0 === obj5.points.length) {
    const obj9 = { style: tmp.state, children: null };
    const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl2 = tmp24(tmp3[12]).intl;
    obj10.children = intl2.string(tmp2(tmp3[13])["7hBXn4"]);
    obj9.children = c12(tmp24(tmp3[18]).Text, obj10);
    tmp38 = c12(first1, obj9);
    tmp37 = c12;
  } else {
    tmp37 = c12;
    const obj11 = { hasIcons: false, children: null };
    const points = obj5.points;
    obj11.children = points.map((createdAt) => {
      const label = createdAt;
      let parsed = Date.parse(createdAt.createdAt);
      let tmp2 = null;
      if (!Number.isNaN(parsed)) {
        tmp2 = parsed;
      }
      parsed = tmp2;
      const items = [projectId(memo[10]).restorePointOriginLabel(createdAt.origin), , ];
      let relativeTimestamp = null;
      if (null != tmp2) {
        relativeTimestamp = projectId(memo[20]).getRelativeTimestamp(tmp2, false);
        const tmp3Result = projectId(memo[20]);
      }
      items[1] = relativeTimestamp;
      let stringResult = null;
      if (createdAt.expired) {
        const intl = projectId(memo[12]).intl;
        stringResult = intl.string(installScope(memo[13]).TtQOSW);
      }
      items[2] = stringResult;
      const found = items.filter((item) => null != item);
      const joined = found.join(" \u00B7 ");
      const obj2 = { label: createdAt.label, subLabel: joined, arrow: !createdAt.expired, disabled: null, onPress: null };
      let expired = createdAt.expired;
      if (!expired) {
        expired = closure_11;
      }
      obj2.disabled = expired;
      obj2.onPress = function onPress() {
        if (null != parsed) {
          let createdAt = DateUtils.dateFormat(_modDef4416(tmp3), "LLL");
        } else {
          createdAt = tmp2.createdAt;
        }
        return closure_17("" + label.label + " (" + createdAt + ")", () => c10(closure_0, id.id));
      };
      return _undefined2(projectId(memo[21]).TableRow, obj2, createdAt.id);
    });
    tmp38 = c12(tmp24(tmp3[19]).TableRowGroup, obj11);
  }
  const obj12 = { scrollable: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  const obj13 = { title: null };
  let intl4 = tmp24(tmp3[12]).intl;
  obj13.title = intl4.string(installScope(memo[13]).FRjicO);
  obj12.header = tmp37(projectId(memo[23]).BottomSheetTitleHeader, obj13);
  const obj14 = { contentContainerStyle: { paddingBottom: installScope(memo[9])().bottom }, children: null };
  const obj15 = { style: tmp.content, children: null };
  let tmp37Result = null;
  if (memo.length > 1) {
    const obj16 = { onLayout: callback3, accessibilityLabel: null, children: null };
    const intl5 = tmp24(tmp3[12]).intl;
    obj16.accessibilityLabel = intl5.string(tmp2(tmp3[13]).CNvRyJ);
    const obj17 = { state: segmentedControlState };
    obj16.children = tmp37(tmp24(tmp3[25]).SegmentedControl, obj17);
    tmp37Result = tmp37(tmp47, obj16);
  }
  const items8 = [tmp37Result, , , , , ];
  const intl6 = tmp24(tmp3[12]).intl;
  let obj4 = projectId(memo[14]);
  const items9 = [intl6.formatToPlainString(installScope(memo[13]).l07ism, { days: projectId(memo[10]).RESTORE_WINDOW_DAYS }), ];
  let str3 = "";
  if (null != _window) {
    const _HermesInternal2 = HermesInternal;
    str3 = " " + tmp24(tmp3[7]).dateFormat(tmp2(tmp3[8])(_window.earliestRestoreTimestampMs), "LLL") + " \u2192";
    const tmp24Result = tmp24(tmp3[7]);
  }
  items9[1] = str3;
  items8[1] = callback(projectId(memo[18]).Text, { variant: "text-sm/normal", color: "text-muted", children: items9 });
  if ("pending" === result.kind) {
    const obj19 = { style: tmp.notice, children: null };
    const items10 = [tmp37(c5, { size: "small" }), ];
    const obj20 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl7 = tmp24(tmp3[12]).intl;
    obj20.children = intl7.string(tmp2(tmp3[13]).xMAiew);
    items10[1] = tmp37(tmp24(tmp3[18]).Text, obj20);
    obj19.children = items10;
    let tmp37Result1 = tmp46(tmp47, obj19);
  } else {
    tmp37Result1 = null;
    if ("notice" === result.kind) {
      let str8;
      if ("danger" === result.tone) {
        str8 = "alert";
      }
      const obj21 = { accessibilityRole: str8, children: null };
      let str9 = "text-feedback-positive";
      if ("danger" === result.tone) {
        str9 = "text-feedback-critical";
      }
      const obj22 = { variant: "text-sm/normal", color: str9, children: result.text };
      obj21.children = tmp37(tmp24(tmp3[18]).Text, obj22);
      tmp37Result1 = tmp37(tmp47, obj21);
    }
  }
  items8[2] = tmp37Result1;
  items8[3] = tmp38;
  const obj23 = { style: tmp.section, children: null };
  const obj24 = { label: null, value: null, onChange: null, maxLength: 200, disabled: null };
  const intl8 = tmp24(tmp3[12]).intl;
  obj24.label = intl8.string(installScope(memo[13]).hJb78b);
  obj24.value = first1;
  obj24.onChange = tmp8[1];
  obj24.disabled = tmp15;
  const items11 = [tmp37(projectId(memo[26]).TextInput, obj24), ];
  const obj25 = { variant: "secondary", text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp24(tmp3[12]).intl;
  obj25.text = intl9.string(installScope(memo[13])["14UarN"]);
  let tmp52 = "busy" === tmp14.phase;
  if (tmp52) {
    tmp52 = "create" === tmp14.kind;
  }
  obj25.loading = tmp52;
  obj25.disabled = tmp15;
  obj25.onPress = callback2;
  items11[1] = tmp37(projectId(memo[27]).Button, obj25);
  obj23.children = items11;
  items8[4] = callback(first1, obj23);
  const obj26 = { style: tmp.section, children: null };
  const obj27 = { label: stringResult, subLabel: null, arrow: true, disabled: null, onPress: null };
  let dateFormatResult;
  if (null != first2) {
    dateFormatResult = tmp24(tmp3[7]).dateFormat(tmp2(tmp3[8])(first2), "LLL");
    const tmp24Result2 = tmp24(tmp3[7]);
  }
  obj27.subLabel = dateFormatResult;
  let tmp54 = tmp15;
  if (!tmp15) {
    tmp54 = null == _window;
  }
  const obj18 = { days: projectId(memo[10]).RESTORE_WINDOW_DAYS };
  obj27.disabled = tmp54;
  obj27.onPress = callback6;
  const items12 = [tmp37(projectId(memo[19]).TableRowGroup, { hasIcons: false, children: tmp37(projectId(memo[21]).TableRow, obj27) }), ];
  const obj29 = { variant: "critical-primary", text: null, disabled: null, onPress: null };
  const intl10 = tmp24(tmp3[12]).intl;
  obj29.text = intl10.string(installScope(memo[13])["3D/vYN"]);
  if (!tmp15) {
    tmp15 = !(null != first2 && first2 >= prop && first2 <= num);
    const tmp55 = null != first2 && first2 >= prop && first2 <= num;
  }
  obj29.disabled = tmp15;
  obj29.onPress = function onPress() {
    if (null != first2) {
      closure_17(DateUtils.dateFormat(_modDef4416(tmp), "LLL"), () => closure_11(projectId, environment, first2));
    }
  };
  items12[1] = tmp37(projectId(memo[27]).Button, obj29);
  obj26.children = items12;
  items8[5] = callback(first1, obj26);
  obj15.children = items8;
  obj14.children = callback(first1, obj15);
  obj12.children = tmp37(projectId(memo[24]).BottomSheetScrollView, obj14);
  return tmp37(projectId(memo[22]).ActionSheet, obj12);
};
export const VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY = "VibegrationsRestorePointsSheet";