// discord_app/modules/vibegrations/native/VibegrationsRestorePointsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import _modDef4231 from "../../../../_runtime/metro/04231__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Sheet_showSimpleActionSheet from "../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VibegrationsConnectionStore = fn(16752);
({
  createDatabaseRestorePoint: closure_7,
  fetchDatabaseRestorePoints: closure_8,
  fetchDatabaseRestoreWindow: closure_9,
  restoreDatabaseToPoint: c10,
  restoreDatabaseToTimestamp: closure_11,
} = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4640);
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
  environment = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  first1 = undefined;
  closure_6 = undefined;
  let first2;
  closure_8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  c11 = undefined;
  let callback;
  let num;
  let prop;
  let callback1;
  closure_16 = undefined;
  c17 = undefined;
  let stringResult1;
  let callback4;
  const tmp = prop();
  let result = projectId(environment[10]).restorePanelEnvironments(projectId.installScope);
  importDefault = result;
  let str = result[0];
  if (str == null) {
    str = "stable";
  }
  [environment, _slicedToArray] = noop.useState(str);
  let obj = projectId(environment[10]);
  [obj3, c4] = noop.useState({ status: "loading" });
  [first1, obj24.onChange] = noop.useState("");
  closure_6 = tmp10;
  const tmp11 = _slicedToArray(noop.useState(null), 2);
  first2 = tmp11[0];
  closure_8 = tmp11[1];
  const tmp7 = _slicedToArray(noop.useState({ status: "loading" }), 2);
  [tmp14, c9] = _slicedToArray(noop.useState({ phase: "idle" }), 2);
  let tmp15 = "busy" === tmp14.phase;
  closure_10 = tmp15;
  const tmp13 = _slicedToArray(noop.useState({ phase: "idle" }), 2);
  [tmp17, c11] = _slicedToArray(noop.useState(0), 2);
  callback = obj2.useCallback(() => _undefined3((arg0) => arg0 + 1), []);
  let items = [projectId, environment, tmp17];
  const effect = obj2.useEffect(() => {
    c0 = false;
    "" + c0 + "|" + first;
    const items = [closure_8(c0, first), _undefined2(c0, first)];
    const allPromises = Promise.all(items);
    Promise.all(items)
      .then((result) => {
        [tmp, tmp2] = result;
        if (!c0) {
          const obj = { status: "loaded", key, points: tmp, window: tmp2, nowMs: null };
          const _Date = Date;
          obj.nowMs = Date.now();
          c4(obj);
        }
      })
      .catch(() => {
        if (!c0) {
          const obj = { status: "failed", key };
          c4(obj);
        }
      });
    return () => {
      c0 = true;
    };
  }, items);
  if ("loading" === obj4.status) {
    obj4 = { status: "loading" };
  } else {
    const _HermesInternal = HermesInternal;
  }
  let _window = null;
  if ("loaded" === obj4.status) {
    _window = obj4.window;
  }
  num = 0;
  if ("loaded" === obj4.status) {
    num = obj4.nowMs;
  }
  prop = undefined;
  if (_window != null) {
    prop = _window.earliestRestoreTimestampMs;
  }
  if (prop == null) {
    prop = num - 24 * tmp4(tmp3[10]).RESTORE_WINDOW_DAYS * 60 * 60 * 1000;
  }
  const tmp16 = _slicedToArray(noop.useState(0), 2);
  const result1 = projectId(environment[10]).restorePanelStatusForEnvironment(tmp14, environment);
  callback1 = obj2.useCallback(
    (environment, tone, text) => _undefined2({ phase: "settled", environment, tone, text }),
    [],
  );
  const items1 = [environment, result, callback, callback1];
  closure_16 = obj2.useCallback((target, arg1) => {
    closure_0 = arg1;
    const obj2 = { key: "VibegrationsRestoreData", title: null, content: null, confirmText: null, onConfirm: null };
    let intl = projectId(first[12]).intl;
    obj2.title = intl.string(_undefined(first[13]).S3WHxG);
    if (1 === _undefined.length) {
      let intl3 = projectId(first[12]).intl;
      const obj3 = { target };
      let formatToPlainStringResult = intl3.formatToPlainString(_undefined(first[13])["0lt6bH"], obj3);
    } else {
      let intl2 = projectId(first[12]).intl;
      const obj4 = { environment: projectId(first[10]).restoreEnvironmentLabel(first), target };
      formatToPlainStringResult = intl2.formatToPlainString(_undefined(first[13]).zVcDfj, obj4);
      const tmpResult = projectId(first[10]);
    }
    obj2.content = formatToPlainStringResult;
    let intl4 = projectId(first[12]).intl;
    obj2.confirmText = intl4.string(_undefined(first[13]).ZlKerR);
    obj2.onConfirm = function onConfirm() {
      c9({ phase: "busy", environment, kind: "restore" });
      let obj = { phase: "busy", environment, kind: "restore" };
      const promise = closure_0();
      closure_0()
        .then((ok) => {
          if (ok.ok) {
            const intl4 = closure_0(1115).intl;
            closure_1_15(dependencyMap, "positive", intl4.string(_undefined(3593).kIWqXR));
            closure_1_12();
          } else if ("expired" === ok.code) {
            const intl3 = closure_0(1115).intl;
            const obj = { days: closure_0(16791).RESTORE_WINDOW_DAYS };
            closure_1_15(dependencyMap, "danger", intl3.formatToPlainString(_undefined(3593).PeVYaC, obj));
            closure_1_12();
          } else if ("unconfirmed" === ok.code) {
            const intl2 = closure_0(1115).intl;
            closure_1_15(dependencyMap, "danger", intl2.string(_undefined(3593)["2xSPXh"]));
            closure_1_12();
          } else {
            const intl = closure_0(1115).intl;
            closure_1_15(dependencyMap, "danger", intl.string(_undefined(3593).kXofol));
          }
        })
        .catch(() => {
          const intl = closure_0(1115).intl;
          closure_1_15(dependencyMap, "danger", intl.string(_undefined(3593).kXofol));
        });
    };
    projectId(first[11]).showConfirmModal(obj2);
    let obj = projectId(first[11]);
  }, items1);
  const items2 = [projectId, environment, first1, callback, callback1];
  const callback2 = obj2.useCallback(() => {
    _undefined2({ phase: "busy", environment, kind: "create" });
    const obj = { phase: "busy", environment, kind: "create" };
    const promise = React5(projectId, environment, first1);
    React5(projectId, environment, first1)
      .then(() => {
        closure_1_6("");
        const intl = projectId(first[12]).intl;
        callback1(environment, "positive", intl.string(c1(first[13]).mfAoFT));
        callback();
      })
      .catch(() => {
        const intl = projectId(first[12]).intl;
        callback1(environment, "danger", intl.string(c1(first[13]).uhhqP3));
      });
  }, items2);
  let intl = tmp4(tmp3[12]).intl;
  let stringResult = intl.string(require("../intl/VibegrationsUntranslated.messages.js").CNvRyJ);
  c17 = stringResult;
  const items3 = [stringResult, result];
  const callback3 = obj2.useCallback(() => {
    const obj2 = {
      key: "VibegrationsRestoreEnvironment",
      stackingBehavior: "stack",
      header: { title },
      hasIcons: false,
      options: _undefined.map((item) => {
        closure_0 = item;
        const obj = {
          label: projectId(environment[10]).restoreEnvironmentLabel(item),
          onPress() {
            return closure_2_3(closure_0);
          },
        };
        return obj;
      }),
    };
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items3);
  let intl2 = tmp4(tmp3[12]).intl;
  stringResult1 = intl2.string(tmp2(tmp3[13]).rI7mpv);
  const items4 = [stringResult1];
  callback4 = obj2.useCallback((mode, startDate, minimumDate, onSubmit) => {
    const obj = ActionSheetActionCreatorsDefault;
    let str = "VibegrationsRestoreTime";
    if ("date" === mode) {
      str = "VibegrationsRestoreDate";
    }
    obj.openLazy(
      asyncRequireImpl(9868, dependencyMap.paths),
      str,
      { mode, title: stringResult1, startDate, minimumDate: minimumDate[0], maximumDate: minimumDate[1], onSubmit },
      "stack",
    );
  }, items4);
  const items5 = [prop, num, callback4, first2];
  const callback5 = obj2.useCallback(() => {
    const obj = _modDef4231(prop);
    let items = [_modDef4231(prop).startOf("day").toDate()];
    const startOfResult = _modDef4231(prop).startOf("day");
    const obj3 = _modDef4231(num);
    items[1] = _modDef4231(num).endOf("day").toDate();
    let tmp3 = first2;
    if (first2 == null) {
      tmp3 = num;
    }
    const endOfResult = _modDef4231(num).endOf("day");
    callback4("date", new Date(tmp3), items, (arg0) => {
      closure_0 = arg0;
      const timerId = setTimeout(() => {
        const toDateResult = closure_0.toDate();
        const items = [new Date(prop)];
        const date = new Date(prop);
        items[1] = new Date(num);
        callback4("time", toDateResult, items, (arg0) => {
          closure_1_8(Math.min(closure_1_13, Math.max(closure_1_14, arg0.valueOf())));
        });
      }, 0);
    });
    let date = new Date(tmp3);
  }, items5);
  if ("loading" === obj4.status) {
    const obj5 = { style: tmp.state, children: callback(first1, {}) };
    let tmp32 = callback(closure_6, obj5);
    let tmp31 = callback;
  } else if ("failed" === obj4.status) {
    const obj6 = { style: tmp.state, accessibilityRole: "alert", children: null };
    const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl4 = tmp4(tmp3[12]).intl;
    obj7.children = intl4.string(tmp2(tmp3[13]).pwFaXc);
    obj6.children = callback(tmp4(tmp3[18]).Text, obj7);
    tmp32 = callback(closure_6, obj6);
    tmp31 = callback;
  } else if (0 === obj4.points.length) {
    const obj8 = { style: tmp.state, children: null };
    const obj9 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl3 = tmp4(tmp3[12]).intl;
    obj9.children = intl3.string(tmp2(tmp3[13])["7hBXn4"]);
    obj8.children = callback(tmp4(tmp3[18]).Text, obj9);
    tmp32 = callback(closure_6, obj8);
    tmp31 = callback;
  } else {
    tmp31 = callback;
    const obj10 = { hasIcons: false, children: null };
    const points = obj4.points;
    obj10.children = points.map((createdAt) => {
      const label = createdAt;
      let parsed = Date.parse(createdAt.createdAt);
      let tmp2 = null;
      if (!Number.isNaN(parsed)) {
        tmp2 = parsed;
      }
      parsed = tmp2;
      const items = [projectId(first[10]).restorePointOriginLabel(createdAt.origin), ,];
      let relativeTimestamp = null;
      if (null != tmp2) {
        relativeTimestamp = projectId(first[20]).getRelativeTimestamp(tmp2, false);
        const tmp3Result = projectId(first[20]);
      }
      items[1] = relativeTimestamp;
      let stringResult = null;
      if (createdAt.expired) {
        const intl = projectId(first[12]).intl;
        stringResult = intl.string(_undefined(first[13]).TtQOSW);
      }
      items[2] = stringResult;
      const found = items.filter((item) => null != item);
      const joined = found.join(" \u00B7 ");
      const obj2 = {
        label: createdAt.label,
        subLabel: joined,
        arrow: !createdAt.expired,
        disabled: null,
        onPress: null,
      };
      let expired = createdAt.expired;
      if (!expired) {
        expired = closure_10;
      }
      obj2.disabled = expired;
      obj2.onPress = function onPress() {
        if (null != parsed) {
          let createdAt = DateUtils.dateFormat(_modDef4231(tmp3), "LLL");
        } else {
          createdAt = tmp2.createdAt;
        }
        return closure_16("" + label.label + " (" + createdAt + ")", () => closure_10(closure_0, id.id));
      };
      return callback(projectId(first[21]).TableRow, obj2, createdAt.id);
    });
    tmp32 = callback(tmp4(tmp3[19]).TableRowGroup, obj10);
  }
  const obj11 = { scrollable: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  const obj12 = { title: null };
  const intl5 = tmp4(tmp3[12]).intl;
  obj12.title = intl5.string(require("../intl/VibegrationsUntranslated.messages.js").FRjicO);
  obj11.header = tmp31(projectId(environment[23]).BottomSheetTitleHeader, obj12);
  const obj13 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
  const obj14 = { style: tmp.content, children: null };
  let tmp31Result = null;
  if (result.length > 1) {
    const obj15 = { hasIcons: false, children: null };
    const obj16 = { label: stringResult, trailing: null, arrow: true, onPress: null };
    const obj17 = {
      variant: "text-md/normal",
      color: "text-muted",
      children: tmp4(tmp3[10]).restoreEnvironmentLabel(environment),
    };
    obj16.trailing = tmp31(tmp4(tmp3[18]).Text, obj17);
    obj16.onPress = callback3;
    obj15.children = tmp31(tmp4(tmp3[21]).TableRow, obj16);
    tmp31Result = tmp31(tmp4(tmp3[19]).TableRowGroup, obj15);
    const tmp4Result4 = tmp4(tmp3[10]);
  }
  const items6 = [tmp31Result, , , , ,];
  const intl6 = tmp4(tmp3[12]).intl;
  const tmp4Result = projectId(environment[10]);
  const items7 = [
    intl6.formatToPlainString(require("../intl/VibegrationsUntranslated.messages.js").l07ism, {
      days: projectId(environment[10]).RESTORE_WINDOW_DAYS,
    }),
  ];
  let str3 = "";
  if (null != _window) {
    const _HermesInternal2 = HermesInternal;
    str3 = " " + tmp4(tmp3[7]).dateFormat(tmp2(tmp3[8])(_window.earliestRestoreTimestampMs), "LLL") + " \u2192";
    const tmp4Result5 = tmp4(tmp3[7]);
  }
  items7[1] = str3;
  items6[1] = num(projectId(environment[18]).Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: items7,
  });
  if ("pending" === result1.kind) {
    const obj19 = { style: tmp.notice, children: null };
    const items8 = [tmp31(first1, { size: "small" })];
    const obj20 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl7 = tmp4(tmp3[12]).intl;
    obj20.children = intl7.string(tmp2(tmp3[13]).xMAiew);
    items8[1] = tmp31(tmp4(tmp3[18]).Text, obj20);
    obj19.children = items8;
    let tmp31Result1 = tmp40(tmp41, obj19);
  } else {
    tmp31Result1 = null;
    if ("notice" === result1.kind) {
      let str8;
      if ("danger" === result1.tone) {
        str8 = "alert";
      }
      const obj21 = { accessibilityRole: str8, children: null };
      let str9 = "text-feedback-positive";
      if ("danger" === result1.tone) {
        str9 = "text-feedback-critical";
      }
      const obj22 = { variant: "text-sm/normal", color: str9, children: result1.text };
      obj21.children = tmp31(tmp4(tmp3[18]).Text, obj22);
      tmp31Result1 = tmp31(tmp41, obj21);
    }
  }
  items6[2] = tmp31Result1;
  items6[3] = tmp32;
  const obj23 = { style: tmp.section, children: null };
  const obj24 = { label: null, value: null, onChange: null, maxLength: 200, disabled: null };
  const intl8 = tmp4(tmp3[12]).intl;
  obj24.label = intl8.string(require("../intl/VibegrationsUntranslated.messages.js").hJb78b);
  obj24.value = first1;
  obj24.disabled = tmp15;
  const items9 = [tmp31(projectId(environment[25]).TextInput, obj24)];
  const obj25 = { variant: "secondary", text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp4(tmp3[12]).intl;
  obj25.text = intl9.string(require("../intl/VibegrationsUntranslated.messages.js")["14UarN"]);
  let tmp46 = "busy" === tmp14.phase;
  if (tmp46) {
    tmp46 = "create" === tmp14.kind;
  }
  obj25.loading = tmp46;
  obj25.disabled = tmp15;
  obj25.onPress = callback2;
  items9[1] = tmp31(projectId(environment[26]).Button, obj25);
  obj23.children = items9;
  items6[4] = num(closure_6, obj23);
  const obj26 = { style: tmp.section, children: null };
  const obj27 = { label: stringResult1, subLabel: null, arrow: true, disabled: null, onPress: null };
  let dateFormatResult;
  if (null != first2) {
    dateFormatResult = tmp4(tmp3[7]).dateFormat(tmp2(tmp3[8])(first2), "LLL");
    const tmp4Result6 = tmp4(tmp3[7]);
  }
  obj27.subLabel = dateFormatResult;
  let tmp48 = tmp15;
  if (!tmp15) {
    tmp48 = null == _window;
  }
  const obj18 = { days: projectId(environment[10]).RESTORE_WINDOW_DAYS };
  obj27.disabled = tmp48;
  obj27.onPress = callback5;
  const items10 = [
    tmp31(projectId(environment[19]).TableRowGroup, {
      hasIcons: false,
      children: tmp31(projectId(environment[21]).TableRow, obj27),
    }),
  ];
  const obj29 = { variant: "critical-primary", text: null, disabled: null, onPress: null };
  const intl10 = tmp4(tmp3[12]).intl;
  obj29.text = intl10.string(require("../intl/VibegrationsUntranslated.messages.js")["3D/vYN"]);
  if (!tmp15) {
    tmp15 = !(null != first2 && first2 >= prop && first2 <= num);
    const tmp49 = null != first2 && first2 >= prop && first2 <= num;
  }
  obj29.disabled = tmp15;
  obj29.onPress = function onPress() {
    if (null != first2) {
      closure_16(DateUtils.dateFormat(_modDef4231(tmp), "LLL"), () => c11(projectId, environment, first2));
    }
  };
  items10[1] = tmp31(projectId(environment[26]).Button, obj29);
  obj26.children = items10;
  items6[5] = num(closure_6, obj26);
  obj14.children = items6;
  obj13.children = num(closure_6, obj14);
  obj11.children = tmp31(projectId(environment[24]).BottomSheetScrollView, obj13);
  return tmp31(projectId(environment[22]).ActionSheet, obj11);
}
export const VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY = "VibegrationsRestorePointsSheet";
