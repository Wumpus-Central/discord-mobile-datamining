// === Module 14382: CheckpointVoiceStatsScreen ===

// Module 14382 (CheckpointVoiceStatsScreen)
import nativeDefault from "native" /* 575 */;
import _modDef3269 from "module_3269" /* 3269 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14388 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6314).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null };
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
obj2.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.image = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.copy = { flexShrink: 1 };
let obj5 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default function CheckpointVoiceStatsScreen() {
  const tmp = closure_9();
  items = [CheckpointStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let voice;
    if (stats != null) {
      voice = stats.voice;
    }
    return voice;
  });
  const obj = stateFromStores1(504);
  const items1 = [CheckpointStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let peakHourUtc;
    if (globalStats != null) {
      const voice = globalStats.voice;
      if (voice != null) {
        peakHourUtc = voice.peakHourUtc;
      }
    }
    return peakHourUtc;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  const items2 = [stateFromStores1];
  const memo = noop.useMemo(() => CheckpointStatsUtils.formatCheckpointPeakHour(stateFromStores1), items2);
  const obj2 = stateFromStores1(504);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = stateFromStores1(6684).getCheckpointTopPercent(prop);
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const tmp12 = _modDef3269;
  if (rounded <= 0) {
    let stringResult = string(tmp12.ZCwB8J);
    let tmp13 = importDefault;
  } else {
    stringResult = string(tmp12["3/T12E"]);
    tmp13 = importDefault;
  }
  let formatToPlainStringResult;
  if (rounded > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1113).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3269)["5vpcvA"], obj3);
    }
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.imageContainer, children: null };
  const tmp2Result = stateFromStores1(6684);
  const obj6 = { animatedUri: null, staticUri: null, style: null };
  const tmp13Result = tmp13(14163);
  obj6.animatedUri = tmp13(14383);
  obj6.staticUri = tmp13(14384);
  obj6.style = tmp.image;
  obj5.children = closure_7(tmp13(14166), obj6);
  const items3 = [closure_7(View, obj5), ];
  const obj7 = { style: tmp.copy, children: null };
  const obj8 = { style: tmp.title, children: null };
  const items4 = [closure_7(stateFromStores1(12958).MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj10 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp13Result4 = tmp13(14166);
  obj10.children = stringResult.toLocaleUpperCase();
  items4[1] = closure_7(tmp13(14164), obj10);
  obj8.children = items4;
  const items5 = [closure_8(View, obj8), , , ];
  let tmp15Result = tmp7;
  if (rounded <= 0) {
    tmp15Result = null != memo;
  }
  if (tmp15Result) {
    ({ value: obj13.value, label: obj13.accessibilityLabel } = memo);
    tmp15Result = closure_7(tmp13(14385), { value: null, accessibilityLabel: null });
    const obj11 = { value: null, accessibilityLabel: null };
  }
  items5[1] = tmp15Result;
  let tmp15Result2 = !tmp7;
  if (rounded > 0) {
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const intl3 = tmp2(1113).intl;
    const obj14 = { duration: null };
    const intl4 = tmp2(1113).intl;
    const obj15 = { minutes: rounded };
    obj14.duration = intl4.formatToPlainString(tmp13(3269).x7PkHm, obj15);
    obj12.accessibilityLabel = intl3.formatToPlainString(tmp13(3269).lw35aH, obj14);
    obj12.style = tmp.number;
    const obj16 = { end: rounded };
    obj12.children = closure_7(tmp13(14386), obj16);
    tmp15Result2 = closure_7(View, obj12);
  }
  items5[2] = tmp15Result2;
  const obj17 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp13Result5 = tmp13(14164);
  if (rounded <= 0) {
    const intl7 = tmp2(1113).intl;
    let stringResult1 = intl7.string(tmp13(3269).huiTne);
  } else if (null != checkpointTopPercent) {
    const intl6 = tmp2(1113).intl;
    const obj18 = {
      numMinutes: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    stringResult1 = intl6.format(tmp13(3269).RqXsIs, obj18);
  } else {
    const intl5 = tmp2(1113).intl;
    const obj19 = { numMinutes: rounded };
    stringResult1 = intl5.format(tmp13(3269).Y3poDW, obj19);
  }
  const obj20 = { children: null };
  obj17.children = stringResult1;
  items5[3] = closure_7(tmp13(14164), obj17);
  obj7.children = items5;
  items3[1] = closure_8(View, obj7);
  obj4.children = items3;
  obj20.children = closure_8(View, obj4);
  return closure_7(tmp13Result, obj20);
};