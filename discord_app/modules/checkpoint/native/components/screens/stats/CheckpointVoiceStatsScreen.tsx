// === Module 14501: CheckpointVoiceStatsScreen ===

// Module 14501 (CheckpointVoiceStatsScreen)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _modDef3317 from "module_3317" /* 3317 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 14273 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 14485 */;
import _modDef14502 from "module_14502" /* 14502 */;
import _modDef14503 from "module_14503" /* 14503 */;
import CheckpointGlobalStatNumberDefault from "CheckpointGlobalStatNumber" /* 14504 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14507 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(6377).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null, wideBackdrop: null, wideImage: null, wideContainer: null, wideCopy: null, wideTitle: null, wideText: null };
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
obj2.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.image = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.copy = { flexShrink: 1 };
let obj5 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj7 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.justifyContent = "center";
obj7.alignItems = "center";
obj2.wideBackdrop = obj7;
obj2.wideImage = { marginBottom: 0 };
obj2.wideContainer = { flexGrow: 1, justifyContent: "center", alignItems: "center" };
obj2.wideCopy = { maxWidth: 327, alignItems: "center" };
obj2.wideTitle = { justifyContent: "center" };
obj2.wideText = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default function CheckpointVoiceStatsScreen() {
  const tmp = closure_10();
  let wideText = useIsCheckpointWideDefault();
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
  const checkpointTopPercent = stateFromStores1(6747).getCheckpointTopPercent(prop);
  const intl = tmp4(1113).intl;
  const string = intl.string;
  const tmp2Result = _modDef3317;
  if (rounded <= 0) {
    let stringResult = string(tmp2Result.ZCwB8J);
  } else {
    stringResult = string(tmp2Result["3/T12E"]);
  }
  let formatToPlainStringResult;
  if (rounded > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp4(1113).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3317["5vpcvA"], obj3);
    }
  }
  const obj4 = { animatedUri: null, staticUri: null, style: null };
  const tmp4Result = stateFromStores1(6747);
  obj4.animatedUri = _modDef14502;
  obj4.staticUri = _modDef14503;
  const items3 = [tmp.image, ];
  let tmp16 = wideText;
  if (wideText) {
    const items4 = [tmp.wideImage, ];
    const obj5 = { width: 0.8 * useWindowDimensionsDefault({ ignoreKeyboard: true }).width / 0.6444444444444445 };
    items4[1] = obj5;
    tmp16 = items4;
  }
  items3[1] = tmp16;
  obj4.style = items3;
  const tmp14Result = closure_7(CheckpointApngPlayerDefault, obj4);
  let tmp14Result5 = wideText;
  if (wideText) {
    const obj6 = { pointerEvents: "none", style: tmp.wideBackdrop, children: tmp14Result };
    tmp14Result5 = closure_7(closure_4, obj6);
  }
  const items5 = [tmp14Result5, ];
  const obj7 = { centered: wideText, children: null };
  const obj8 = { style: wideText ? tmp.wideContainer : tmp.container, children: null };
  let tmp14Result6 = !wideText;
  const tmp2Result5 = CheckpointApngPlayerDefault;
  if (!wideText) {
    const obj9 = { style: tmp.imageContainer, children: tmp14Result };
    tmp14Result6 = closure_7(closure_4, obj9);
  }
  const items6 = [tmp14Result6, ];
  const obj10 = { style: wideText ? tmp.wideCopy : tmp.copy, children: null };
  const items7 = [tmp.title, ];
  let wideTitle = wideText;
  if (wideText) {
    wideTitle = tmp.wideTitle;
  }
  const obj11 = { style: items7, children: null };
  items7[1] = wideTitle;
  const items8 = [closure_7(stateFromStores1(13048).MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj13 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const obj12 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp2Result6 = CheckpointScreenDefault;
  obj13.children = stringResult.toLocaleUpperCase();
  items8[1] = closure_7(CheckpointTextDefault, obj13);
  obj11.children = items8;
  const items9 = [closure_8(closure_4, obj11), , , ];
  let tmp14Result7 = tmp8;
  if (rounded <= 0) {
    tmp14Result7 = null != memo;
  }
  if (tmp14Result7) {
    ({ value: obj16.value, label: obj16.accessibilityLabel } = memo);
    tmp14Result7 = closure_7(CheckpointGlobalStatNumberDefault, { value: null, accessibilityLabel: null });
    const obj14 = { value: null, accessibilityLabel: null };
  }
  items9[1] = tmp14Result7;
  let tmp14Result8 = !tmp8;
  if (rounded > 0) {
    const obj15 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const intl3 = tmp4(1113).intl;
    const obj17 = { duration: null };
    const intl4 = tmp4(1113).intl;
    const obj18 = { minutes: rounded };
    obj17.duration = intl4.formatToPlainString(_modDef3317.x7PkHm, obj18);
    obj15.accessibilityLabel = intl3.formatToPlainString(_modDef3317.lw35aH, obj17);
    obj15.style = tmp.number;
    const obj19 = { end: rounded };
    obj15.children = closure_7(CheckpointCountUpStatNumberDefault, obj19);
    tmp14Result8 = closure_7(closure_4, obj15);
  }
  items9[2] = tmp14Result8;
  const obj20 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, style: null, children: null };
  const tmp2Result7 = CheckpointTextDefault;
  if (wideText) {
    wideText = tmp.wideText;
  }
  obj20.style = wideText;
  if (rounded <= 0) {
    const intl7 = tmp4(1113).intl;
    let stringResult1 = intl7.string(_modDef3317.huiTne);
  } else if (null != checkpointTopPercent) {
    const intl6 = tmp4(1113).intl;
    const obj21 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    stringResult1 = intl6.format(_modDef3317.RqXsIs, obj21);
  } else {
    const intl5 = tmp4(1113).intl;
    const obj22 = { numMinutes: rounded };
    stringResult1 = intl5.format(_modDef3317.Y3poDW, obj22);
  }
  const obj23 = { children: null };
  obj20.children = stringResult1;
  items9[3] = closure_7(CheckpointTextDefault, obj20);
  obj10.children = items9;
  items6[1] = closure_8(closure_4, obj10);
  obj8.children = items6;
  obj7.children = closure_8(closure_4, obj8);
  items5[1] = closure_7(tmp2Result6, obj7);
  obj23.children = items5;
  return closure_8(closure_9, obj23);
};