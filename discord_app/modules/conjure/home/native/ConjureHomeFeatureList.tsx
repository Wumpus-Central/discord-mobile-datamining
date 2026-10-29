// === Module 12793: ConjureHomeFeatureList ===

// Module 12793 (ConjureHomeFeatureList)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import Text_Text from "Text/Text" /* 5271 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7327 */;
import ShieldIcon from "ShieldIcon" /* 11027 */;
import RobotIcon from "RobotIcon" /* 12247 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const _modDef683 = tmp5(683);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let obj = { list: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, card: null, visual: null, caption: null, window: null, line: null, lineTitle: null, lineName: null, lineShort: null, lineMedium: null, lineLong: null, windowBar: null, windowDot: null, pollOption: null, pollFill: null, pollFillWinner: null, pollLabel: null, pollLabelWinner: null, gameCanvas: null, cloud: null, pipe: null, player: null, pill: null, joinRow: null, joinArrow: null, message: null, messageBody: null, messageHeader: null, avatar: null, avatarBrand: null, botTag: null, profile: null, profileBanner: null, profileBody: null, profileAvatar: null, statsWidget: null, stats: null, stat: null, statValue: null, statLabel: null, chart: null, chartBar: null, chartBarDown: null, scene: null, sceneHills: null, sceneScrim: null, crosshair: null, overlayPanel: null, overlayMember: null, overlayAvatar: null, speaking: null, overlayName: null, overlayTimer: null, overlayTimerValue: null, redacted: null, blockedNotice: null, blockedText: null, lineCritical: null };
let obj3 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = { gap: nativeDefault.space.PX_24, padding: nativeDefault.space.PX_24, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj.visual = { height: 132, alignItems: "center", justifyContent: "center" };
let obj4 = { gap: nativeDefault.space.PX_24, padding: nativeDefault.space.PX_24, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj.caption = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj.window = { width: 200, gap: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { width: 200, gap: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.line = { height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let size = { width: "60%", height: nativeDefault.space.PX_8 };
obj.lineTitle = size;
let obj7 = { height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.lineName = { width: 56, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, opacity: 0.6 };
obj.lineShort = { width: "40%" };
obj.lineMedium = { width: "64%" };
obj.lineLong = { width: "92%" };
let obj8 = { width: 56, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, opacity: 0.6 };
obj.windowBar = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
const size1 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.windowDot = size1;
let obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj.pollOption = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, height: 20, paddingHorizontal: nativeDefault.space.PX_6, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj11 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj11.right = undefined;
obj11.backgroundColor = nativeDefault.colors.BACKGROUND_MOD_NORMAL;
obj.pollFill = obj11;
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, height: 20, paddingHorizontal: nativeDefault.space.PX_6, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.pollFillWinner = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, opacity: 0.35 };
obj.pollLabel = { width: "40%" };
let obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, opacity: 0.35 };
obj.pollLabelWinner = { width: "52%", backgroundColor: nativeDefault.colors.TEXT_STRONG, opacity: 0.7 };
const size2 = { width: 200, height: 108, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md };
obj.gameCanvas = size2;
let obj13 = { width: "52%", backgroundColor: nativeDefault.colors.TEXT_STRONG, opacity: 0.7 };
obj.cloud = { position: "absolute", height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, opacity: 0.7 };
let obj14 = { position: "absolute", height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, opacity: 0.7 };
obj.pipe = { position: "absolute", width: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300 };
const size3 = { position: "absolute", top: 48, left: 34, width: 14, height: 11, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj.player = size3;
let obj15 = { position: "absolute", width: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300 };
obj.pill = { position: "absolute", top: nativeDefault.space.PX_6, flexDirection: "row", alignItems: "center", gap: 2, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
const obj16 = { position: "absolute", top: nativeDefault.space.PX_6, flexDirection: "row", alignItems: "center", gap: 2, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj.joinRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8 };
const size4 = { width: nativeDefault.space.PX_12, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
obj.joinArrow = size4;
const obj17 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8 };
obj.message = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const obj18 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.messageBody = { flex: 1, gap: nativeDefault.space.PX_6, paddingTop: nativeDefault.space.PX_4 };
const obj19 = { flex: 1, gap: nativeDefault.space.PX_6, paddingTop: nativeDefault.space.PX_4 };
obj.messageHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6 };
const size5 = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.avatar = size5;
const obj20 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6 };
obj.avatarBrand = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj21 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.botTag = { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.profile = { padding: 0, gap: 0, overflow: "hidden" };
const obj22 = { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.profileBanner = { height: nativeDefault.space.PX_24 };
const obj23 = { height: nativeDefault.space.PX_24 };
obj.profileBody = { gap: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, paddingBottom: nativeDefault.space.PX_10 };
const size6 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, marginTop: -nativeDefault.space.PX_16, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.profileAvatar = size6;
const obj24 = { gap: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, paddingBottom: nativeDefault.space.PX_10 };
obj.statsWidget = { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const obj25 = { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.stats = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const obj26 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.stat = { gap: nativeDefault.space.PX_4 };
const size7 = { width: 20, height: nativeDefault.space.PX_10, backgroundColor: nativeDefault.colors.TEXT_STRONG, opacity: 0.8 };
obj.statValue = size7;
const size8 = { width: 26, height: nativeDefault.space.PX_4 };
obj.statLabel = size8;
const obj27 = { gap: nativeDefault.space.PX_4 };
obj.chart = { flexDirection: "row", alignItems: "flex-end", gap: 2, height: nativeDefault.space.PX_24 };
const obj28 = { flexDirection: "row", alignItems: "flex-end", gap: 2, height: nativeDefault.space.PX_24 };
obj.chartBar = { width: 5, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
const obj29 = { width: 5, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
obj.chartBarDown = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
const size9 = { width: 224, height: 116, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md };
obj.scene = size9;
let rect = { position: "absolute", top: "55%", left: "-10%", right: "-10%", height: "90%", borderTopLeftRadius: nativeDefault.radii.round, borderTopRightRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BLUE_760 };
obj.sceneHills = rect;
const obj31 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj31.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj.sceneScrim = obj31;
const size10 = { position: "absolute", top: 50, left: 104, width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderWidth: 2, borderColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, borderRadius: nativeDefault.radii.round, opacity: 0.5 };
obj.crosshair = size10;
let rect1 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.overlayPanel = rect1;
const obj30 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj.overlayMember = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size11 = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.overlayAvatar = size11;
const obj32 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.speaking = { borderWidth: 2, borderColor: nativeDefault.colors.STATUS_ONLINE, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size12 = { width: 36, height: nativeDefault.space.PX_4 };
obj.overlayName = size12;
const rect2 = { top: "r", bottom: nativeDefault.space.PX_6, left: nativeDefault.space.PX_6 };
obj.overlayTimer = rect2;
const size13 = { width: 20, height: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT };
obj.overlayTimerValue = size13;
obj.redacted = { opacity: 0.4 };
const obj33 = { borderWidth: 2, borderColor: nativeDefault.colors.STATUS_ONLINE, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.blockedNotice = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
const obj34 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.blockedText = { flex: 1, gap: nativeDefault.space.PX_6 };
const obj35 = { flex: 1, gap: nativeDefault.space.PX_6 };
obj.lineCritical = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, opacity: 0.6 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function Line(style) {
  const cResult = c.c(3);
  style = style.style;
  const tmp2 = closure_7();
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.line) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: null };
  items = [tmp2.line, style];
  obj2.style = items;
  const tmp4 = hasOwnProperty(React4, obj2);
  cResult[0] = style;
  cResult[1] = tmp2.line;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function Line(style) {
  const obj = { style: null };
  items = [closure_7().line, style.style];
  obj.style = items;
  return hasOwnProperty(React4, obj);
});
let closure_9 = ["68%", "24%", "12%"];
fn(558);
let items = [{ left: 62, top: -3, height: 30 }, { left: 62, bottom: -3, height: 36 }, { left: 118, top: -3, height: 44 }, { left: 118, bottom: -3, height: 22 }];
const obj36 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, opacity: 0.6 };
let items1 = [nativeDefault.unsafe_rawColors.BRAND_500, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
let items2 = [nativeDefault.unsafe_rawColors.BLUE_600, nativeDefault.unsafe_rawColors.ORANGE_360];
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppsVisual(styles) {
  const cResult = styles(576).c(19);
  styles = styles.styles;
  ({ window: _window, windowBar } = styles);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [0, 1, 2];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== styles.windowDot) {
    const mapped = first.map((item) => hasOwnProperty(React4, { style: styles.windowDot }, item));
    cResult[1] = styles.windowDot;
    cResult[2] = mapped;
    let tmp2 = mapped;
  } else {
    tmp2 = cResult[2];
  }
  if (cResult[3] === styles.windowBar) {
    if (cResult[4] === tmp2) {
      let tmp4 = cResult[5];
    }
    if (cResult[6] !== styles.lineTitle) {
      const obj2 = { style: styles.lineTitle };
      const tmp9 = closure_5(closure_8, obj2);
      cResult[6] = styles.lineTitle;
      cResult[7] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[7];
    }
    if (cResult[8] === styles.pollFill) {
      if (cResult[9] === styles.pollFillWinner) {
        if (cResult[10] === styles.pollLabel) {
          if (cResult[11] === styles.pollLabelWinner) {
            if (cResult[12] === styles.pollOption) {
              let tmp10 = cResult[13];
            }
            if (cResult[14] === styles.window) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === tmp6) {
                  if (cResult[17] === tmp10) {
                    let tmp13 = cResult[18];
                  }
                  return tmp13;
                }
              }
            }
            let obj3 = { style: _window, children: null };
            items1 = [tmp4, tmp6, tmp10];
            obj3.children = items1;
            const tmp16 = closure_6(closure_4, obj3);
            cResult[14] = styles.window;
            cResult[15] = tmp4;
            cResult[16] = tmp6;
            cResult[17] = tmp10;
            cResult[18] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
    }
    const mapped1 = closure_9.map((width, index) => {
      const obj = { style: styles.pollOption, children: null };
      items = [styles.pollFill, { width }, ];
      let pollFillWinner = tmp5;
      if (0 === index) {
        pollFillWinner = styles.pollFillWinner;
      }
      items[2] = pollFillWinner;
      items1 = [hasOwnProperty(React4, { style: items }), , ];
      let tmp4Result = null;
      if (0 === index) {
        const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_BRAND };
        tmp4Result = hasOwnProperty(CircleCheckIcon.CircleCheckIcon, obj3);
      }
      items1[1] = tmp4Result;
      items1[2] = hasOwnProperty(closure_8, { style: 0 === index ? styles.pollLabelWinner : styles.pollLabel });
      obj.children = items1;
      return timestampProducer(React4, obj, index);
    });
    cResult[8] = styles.pollFill;
    cResult[9] = styles.pollFillWinner;
    cResult[10] = styles.pollLabel;
    cResult[11] = styles.pollLabelWinner;
    cResult[12] = styles.pollOption;
    cResult[13] = mapped1;
    tmp10 = mapped1;
  }
  const tmp5 = closure_5(closure_4, { style: windowBar, children: tmp2 });
  cResult[3] = styles.windowBar;
  cResult[4] = tmp2;
  cResult[5] = tmp5;
  tmp4 = tmp5;
  let obj = styles(576);
}) : (function AppsVisual(styles) {
  styles = styles.styles;
  let obj = { style: styles.window, children: null };
  const obj2 = { style: styles.windowBar, children: null };
  items = [0, 1, 2];
  obj2.children = items.map((item) => hasOwnProperty(React4, { style: styles.windowDot }, item));
  items1 = [
    closure_5(closure_4, obj2),
    closure_5(closure_8, { style: styles.lineTitle }),
    closure_9.map((width, index) => {
      const obj = { style: styles.pollOption, children: null };
      items = [styles.pollFill, { width }, ];
      let pollFillWinner = tmp5;
      if (0 === index) {
        pollFillWinner = styles.pollFillWinner;
      }
      items[2] = pollFillWinner;
      items1 = [hasOwnProperty(React4, { style: items }), , ];
      let tmp4Result = null;
      if (0 === index) {
        const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_BRAND };
        tmp4Result = hasOwnProperty(CircleCheckIcon.CircleCheckIcon, obj3);
      }
      items1[1] = tmp4Result;
      items1[2] = hasOwnProperty(closure_8, { style: 0 === index ? styles.pollLabelWinner : styles.pollLabel });
      obj.children = items1;
      return timestampProducer(React4, obj, index);
    })
  ];
  obj.children = items1;
  return closure_6(closure_4, obj);
});
ReactCompilerGating = fn(558);
let items3 = [{ height: "60%", down: false }, { height: "35%", down: true }, { height: "85%", down: false }, { height: "60%", down: false }, { height: "35%", down: true }, { height: "100%", down: false }];
const obj37 = {
  apps: tmp6,
  games: ReactCompilerGating.isReactCompilerEnabled() ? (function GamesVisual(styles) {
    const cResult = styles(576).c(33);
    styles = styles.styles;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const rect = { top: 30, left: 16, width: 32 };
      cResult[0] = rect;
      let first = rect;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== styles.cloud) {
      const obj2 = { style: null };
      items = [styles.cloud, first];
      obj2.style = items;
      const tmp8 = closure_5(closure_4, obj2);
      cResult[1] = styles.cloud;
      cResult[2] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[2];
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const rect1 = { top: 64, left: 80, width: 24 };
      cResult[3] = rect1;
      let tmp9 = rect1;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== styles.cloud) {
      const obj3 = { style: null };
      items1 = [styles.cloud, tmp9];
      obj3.style = items1;
      const tmp13 = closure_5(closure_4, obj3);
      cResult[4] = styles.cloud;
      cResult[5] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== styles.pipe) {
      const mapped = items.map((item, index) => {
        const obj = { style: null };
        items = [styles.pipe, item];
        obj.style = items;
        return hasOwnProperty(React4, obj, index);
      });
      cResult[6] = styles.pipe;
      cResult[7] = mapped;
      let tmp14 = mapped;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== styles.player) {
      const obj4 = { style: styles.player };
      const tmp20 = closure_5(closure_4, obj4);
      cResult[8] = styles.player;
      cResult[9] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { left: nativeDefault.space.PX_6 };
      cResult[10] = obj5;
      let tmp21 = obj5;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] !== styles.pill) {
      items2 = [styles.pill, tmp21];
      cResult[11] = styles.pill;
      cResult[12] = items2;
      let tmp23 = items2;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const tmp28 = closure_5(tmp(9344).TrophyIcon, obj6);
      const tmp29 = closure_5(tmp(5271).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 });
      cResult[13] = tmp28;
      cResult[14] = tmp29;
      let tmp25 = tmp29;
      let tmp24 = tmp28;
    } else {
      tmp24 = cResult[13];
      tmp25 = cResult[14];
    }
    if (cResult[15] !== tmp23) {
      const obj7 = { style: tmp23, children: null };
      items3 = [tmp24, tmp25];
      obj7.children = items3;
      const tmp33 = closure_6(closure_4, obj7);
      cResult[15] = tmp23;
      cResult[16] = tmp33;
      let tmp30 = tmp33;
    } else {
      tmp30 = cResult[16];
    }
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { right: nativeDefault.space.PX_6 };
      cResult[17] = obj8;
      let tmp34 = obj8;
    } else {
      tmp34 = cResult[17];
    }
    if (cResult[18] !== styles.pill) {
      const items4 = [styles.pill, tmp34];
      cResult[18] = styles.pill;
      cResult[19] = items4;
      let tmp36 = items4;
    } else {
      tmp36 = cResult[19];
    }
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      const tmp42 = closure_5(tmp(9429).HeartIcon, obj9);
      const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      const tmp43 = closure_5(tmp(9429).HeartIcon, obj10);
      const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
      const tmp44 = closure_5(tmp(9429).HeartIcon, obj11);
      cResult[20] = tmp42;
      cResult[21] = tmp43;
      cResult[22] = tmp44;
      let tmp39 = tmp44;
      let tmp38 = tmp43;
      let tmp37 = tmp42;
    } else {
      tmp37 = cResult[20];
      tmp38 = cResult[21];
      tmp39 = cResult[22];
    }
    if (cResult[23] !== tmp36) {
      const obj12 = { style: tmp36, children: null };
      const items5 = [tmp37, tmp38, tmp39];
      obj12.children = items5;
      const tmp48 = closure_6(closure_4, obj12);
      cResult[23] = tmp36;
      cResult[24] = tmp48;
      let tmp45 = tmp48;
    } else {
      tmp45 = cResult[24];
    }
    if (cResult[25] === styles.gameCanvas) {
      if (cResult[26] === tmp30) {
        if (cResult[27] === tmp45) {
          if (cResult[28] === tmp5) {
            if (cResult[29] === tmp10) {
              if (cResult[30] === tmp14) {
                if (cResult[31] === tmp17) {
                  let tmp49 = cResult[32];
                }
                return tmp49;
              }
            }
          }
        }
      }
    }
    const obj13 = { style: styles.gameCanvas, colors: items1, children: null };
    const items6 = [tmp5, tmp10, tmp14, tmp17, tmp30, tmp45];
    obj13.children = items6;
    const tmp50 = closure_6(LinearGradientDefault, obj13);
    cResult[25] = styles.gameCanvas;
    cResult[26] = tmp30;
    cResult[27] = tmp45;
    cResult[28] = tmp5;
    cResult[29] = tmp10;
    cResult[30] = tmp14;
    cResult[31] = tmp17;
    cResult[32] = tmp50;
    tmp49 = tmp50;
    let obj = styles(576);
  }) : (function GamesVisual(styles) {
    styles = styles.styles;
    let obj = { style: styles.gameCanvas, colors: items1, children: null };
    const obj2 = { style: null };
    items = [styles.cloud, { top: 30, left: 16, width: 32 }];
    obj2.style = items;
    items1 = [closure_5(closure_4, obj2), , , , , ];
    const obj3 = { style: null };
    items2 = [styles.cloud, { top: 64, left: 80, width: 24 }];
    obj3.style = items2;
    items1[1] = closure_5(closure_4, obj3);
    items1[2] = items.map((item, index) => {
      const obj = { style: null };
      items = [styles.pipe, item];
      obj.style = items;
      return hasOwnProperty(React4, obj, index);
    });
    items1[3] = closure_5(closure_4, { style: styles.player });
    const obj5 = { style: null, children: null };
    items3 = [styles.pill, ];
    const obj4 = { style: styles.player };
    const tmp = LinearGradientDefault;
    items3[1] = { left: nativeDefault.space.PX_6 };
    obj5.style = items3;
    const obj6 = { left: nativeDefault.space.PX_6 };
    const items4 = [closure_5(styles(9344).TrophyIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING }), closure_5(styles(5271).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 })];
    obj5.children = items4;
    items1[4] = closure_6(closure_4, obj5);
    const obj8 = { style: null, children: null };
    const items5 = [styles.pill, ];
    const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    items5[1] = { right: nativeDefault.space.PX_6 };
    obj8.style = items5;
    const obj9 = { right: nativeDefault.space.PX_6 };
    const items6 = [closure_5(styles(9429).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }), , ];
    const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    items6[1] = closure_5(styles(9429).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
    const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    items6[2] = closure_5(styles(9429).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT });
    obj8.children = items6;
    items1[5] = closure_6(closure_4, obj8);
    obj.children = items1;
    return closure_6(tmp, obj);
  }),
  bots: ReactCompilerGating.isReactCompilerEnabled() ? (function BotsVisual(styles) {
    const cResult = c.c(40);
    styles = styles.styles;
    if (cResult[0] !== styles.joinArrow) {
      const obj2 = { style: styles.joinArrow };
      const tmp7 = hasOwnProperty(React4, obj2);
      cResult[0] = styles.joinArrow;
      cResult[1] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== styles.lineMedium) {
      const obj3 = { style: styles.lineMedium };
      const tmp11 = hasOwnProperty(closure_8, obj3);
      cResult[2] = styles.lineMedium;
      cResult[3] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === styles.joinRow) {
      if (cResult[5] === tmp4) {
        if (cResult[6] === tmp8) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === styles.avatar) {
          if (cResult[9] === styles.avatarBrand) {
            let tmp14 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
            const tmp19 = hasOwnProperty(RobotIcon.RobotIcon, obj4);
            cResult[11] = tmp19;
            let tmp16 = tmp19;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] !== tmp14) {
            const obj5 = { style: tmp14, children: tmp16 };
            const tmp23 = hasOwnProperty(React4, obj5);
            cResult[12] = tmp14;
            cResult[13] = tmp23;
            let tmp20 = tmp23;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] !== styles.lineName) {
            const obj6 = { style: styles.lineName };
            const tmp27 = hasOwnProperty(closure_8, obj6);
            cResult[14] = styles.lineName;
            cResult[15] = tmp27;
            let tmp24 = tmp27;
          } else {
            tmp24 = cResult[15];
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-xxs/bold", color: "text-overlay-light", children: null };
            const intl = util.intl;
            obj7.children = intl.string(_modDef3864.VlgiLf);
            const tmp31 = hasOwnProperty(Text_Text.Text, obj7);
            cResult[16] = tmp31;
            let tmp28 = tmp31;
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] !== styles.botTag) {
            const obj8 = { style: styles.botTag, children: tmp28 };
            const tmp35 = hasOwnProperty(React4, obj8);
            cResult[17] = styles.botTag;
            cResult[18] = tmp35;
            let tmp32 = tmp35;
          } else {
            tmp32 = cResult[18];
          }
          if (cResult[19] === styles.messageHeader) {
            if (cResult[20] === tmp24) {
              if (cResult[21] === tmp32) {
                let tmp36 = cResult[22];
              }
              if (cResult[23] !== styles.lineLong) {
                const obj9 = { style: styles.lineLong };
                const tmp43 = hasOwnProperty(closure_8, obj9);
                cResult[23] = styles.lineLong;
                cResult[24] = tmp43;
                let tmp40 = tmp43;
              } else {
                tmp40 = cResult[24];
              }
              if (cResult[25] !== styles.lineMedium) {
                const obj10 = { style: styles.lineMedium };
                const tmp47 = hasOwnProperty(closure_8, obj10);
                cResult[25] = styles.lineMedium;
                cResult[26] = tmp47;
                let tmp44 = tmp47;
              } else {
                tmp44 = cResult[26];
              }
              if (cResult[27] === styles.messageBody) {
                if (cResult[28] === tmp36) {
                  if (cResult[29] === tmp40) {
                    if (cResult[30] === tmp44) {
                      let tmp48 = cResult[31];
                    }
                    if (cResult[32] === styles.message) {
                      if (cResult[33] === tmp48) {
                        if (cResult[34] === tmp20) {
                          let tmp52 = cResult[35];
                        }
                        if (cResult[36] === styles.window) {
                          if (cResult[37] === tmp52) {
                            if (cResult[38] === tmp12) {
                              let tmp56 = cResult[39];
                            }
                            return tmp56;
                          }
                        }
                        const obj11 = { style: styles.window, children: null };
                        items = [tmp12, tmp52];
                        obj11.children = items;
                        const tmp59 = timestampProducer(React4, obj11);
                        cResult[36] = styles.window;
                        cResult[37] = tmp52;
                        cResult[38] = tmp12;
                        cResult[39] = tmp59;
                        tmp56 = tmp59;
                      }
                    }
                    const obj12 = { style: styles.message, children: null };
                    items1 = [tmp20, tmp48];
                    obj12.children = items1;
                    const tmp55 = timestampProducer(React4, obj12);
                    cResult[32] = styles.message;
                    cResult[33] = tmp48;
                    cResult[34] = tmp20;
                    cResult[35] = tmp55;
                    tmp52 = tmp55;
                  }
                }
              }
              const obj13 = { style: styles.messageBody, children: null };
              items2 = [tmp36, tmp40, tmp44];
              obj13.children = items2;
              const tmp51 = timestampProducer(React4, obj13);
              cResult[27] = styles.messageBody;
              cResult[28] = tmp36;
              cResult[29] = tmp40;
              cResult[30] = tmp44;
              cResult[31] = tmp51;
              tmp48 = tmp51;
            }
          }
          const obj14 = { style: styles.messageHeader, children: null };
          items3 = [tmp24, tmp32];
          obj14.children = items3;
          const tmp39 = timestampProducer(React4, obj14);
          cResult[19] = styles.messageHeader;
          cResult[20] = tmp24;
          cResult[21] = tmp32;
          cResult[22] = tmp39;
          tmp36 = tmp39;
        }
        const items4 = [, ];
        ({ avatar: arr2[0], avatarBrand: arr2[1] } = styles);
        cResult[8] = styles.avatar;
        cResult[9] = styles.avatarBrand;
        cResult[10] = items4;
        tmp14 = items4;
      }
    }
    const obj15 = { style: styles.joinRow, children: null };
    const items5 = [tmp4, tmp8];
    obj15.children = items5;
    const tmp13 = timestampProducer(React4, obj15);
    cResult[4] = styles.joinRow;
    cResult[5] = tmp4;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp12 = tmp13;
  }) : (function BotsVisual(styles) {
    styles = styles.styles;
    const obj = { style: styles.window, children: null };
    const obj2 = { style: styles.joinRow, children: null };
    items = [hasOwnProperty(React4, { style: styles.joinArrow }), hasOwnProperty(closure_8, { style: styles.lineMedium })];
    obj2.children = items;
    items1 = [timestampProducer(React4, obj2), ];
    const obj5 = { style: styles.message, children: null };
    const obj6 = { style: null, children: hasOwnProperty(RobotIcon.RobotIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT }) };
    items2 = [, ];
    ({ avatar: arr3[0], avatarBrand: arr3[1] } = styles);
    obj6.style = items2;
    items3 = [hasOwnProperty(React4, obj6), ];
    const obj8 = { style: styles.messageBody, children: null };
    const obj9 = { style: styles.messageHeader, children: null };
    const items4 = [hasOwnProperty(closure_8, { style: styles.lineName }), ];
    const obj11 = { style: styles.botTag, children: null };
    const obj12 = { variant: "text-xxs/bold", color: "text-overlay-light", children: null };
    const intl = util.intl;
    obj12.children = intl.string(_modDef3864.VlgiLf);
    obj11.children = hasOwnProperty(Text_Text.Text, obj12);
    items4[1] = hasOwnProperty(React4, obj11);
    obj9.children = items4;
    const items5 = [timestampProducer(React4, obj9), hasOwnProperty(closure_8, { style: styles.lineLong }), hasOwnProperty(closure_8, { style: styles.lineMedium })];
    obj8.children = items5;
    items3[1] = timestampProducer(React4, obj8);
    obj5.children = items3;
    items1[1] = timestampProducer(React4, obj5);
    obj.children = items1;
    return timestampProducer(React4, obj);
  }),
  "profile-widgets": null,
  "overlay-widgets": null,
  automod: null
};
ReactCompilerGating = fn(558);
obj37["profile-widgets"] = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileWidgetsVisual(styles) {
  const cResult = styles(576).c(42);
  styles = styles.styles;
  let obj = styles(576);
  const token = styles(5289).useToken(nativeDefault.colors.BACKGROUND_BRAND);
  if (cResult[0] !== token) {
    items = [token, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
    cResult[0] = token;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === styles.profile) {
    if (cResult[3] === styles.window) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0.5 };
      const point1 = { x: 1, y: 0.5 };
      cResult[5] = point;
      cResult[6] = point1;
      let tmp9 = point1;
      let tmp8 = point;
    } else {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      if (cResult[8] === styles.profileBanner) {
        let tmp10 = cResult[9];
      }
      if (cResult[10] === styles.avatar) {
        if (cResult[11] === styles.profileAvatar) {
          let tmp14 = cResult[12];
        }
        if (cResult[13] !== styles.lineName) {
          const obj3 = { style: styles.lineName };
          const tmp21 = closure_5(closure_8, obj3);
          cResult[13] = styles.lineName;
          cResult[14] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[14];
        }
        const _Symbol2 = Symbol;
        ({ statsWidget, stats } = styles);
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          items1 = [0, 1];
          cResult[15] = items1;
          let arr4 = items1;
        } else {
          arr4 = cResult[15];
        }
        if (cResult[16] === styles.stat) {
          if (cResult[17] === styles.statLabel) {
            if (cResult[18] === styles.statValue) {
              let tmp22 = cResult[19];
            }
            if (cResult[20] === styles.stats) {
              if (cResult[21] === tmp22) {
                let tmp24 = cResult[22];
              }
              if (cResult[23] === styles.chartBar) {
                if (cResult[24] === styles.chartBarDown) {
                  let tmp29 = cResult[25];
                }
                if (cResult[26] === styles.chart) {
                  if (cResult[27] === tmp29) {
                    let tmp32 = cResult[28];
                  }
                  if (cResult[29] === styles.statsWidget) {
                    if (cResult[30] === tmp24) {
                      if (cResult[31] === tmp32) {
                        let tmp36 = cResult[32];
                      }
                      if (cResult[33] === styles.profileBody) {
                        if (cResult[34] === tmp36) {
                          if (cResult[35] === tmp14) {
                            if (cResult[36] === tmp18) {
                              let tmp40 = cResult[37];
                            }
                            if (cResult[38] === tmp40) {
                              if (cResult[39] === tmp6) {
                                if (cResult[40] === tmp10) {
                                  let tmp44 = cResult[41];
                                }
                                return tmp44;
                              }
                            }
                            const obj4 = { style: tmp6, children: null };
                            items2 = [tmp10, tmp40];
                            obj4.children = items2;
                            const tmp47 = closure_6(closure_4, obj4);
                            cResult[38] = tmp40;
                            cResult[39] = tmp6;
                            cResult[40] = tmp10;
                            cResult[41] = tmp47;
                            tmp44 = tmp47;
                          }
                        }
                      }
                      const obj5 = { style: tmp13, children: null };
                      items3 = [tmp14, tmp18, tmp36];
                      obj5.children = items3;
                      const tmp43 = closure_6(closure_4, obj5);
                      cResult[33] = styles.profileBody;
                      cResult[34] = tmp36;
                      cResult[35] = tmp14;
                      cResult[36] = tmp18;
                      cResult[37] = tmp43;
                      tmp40 = tmp43;
                    }
                  }
                  const obj6 = { style: statsWidget, children: null };
                  const items4 = [tmp24, tmp32];
                  obj6.children = items4;
                  const tmp39 = closure_6(closure_4, obj6);
                  cResult[29] = styles.statsWidget;
                  cResult[30] = tmp24;
                  cResult[31] = tmp32;
                  cResult[32] = tmp39;
                  tmp36 = tmp39;
                }
                const obj7 = { style: tmp28, children: tmp29 };
                const tmp35 = closure_5(closure_4, obj7);
                cResult[26] = styles.chart;
                cResult[27] = tmp29;
                cResult[28] = tmp35;
                tmp32 = tmp35;
              }
              const mapped = items3.map((down, index) => {
                let chartBarDown = down.down;
                const style = [styles.chartBar, { height: down.height }, ];
                if (chartBarDown) {
                  chartBarDown = styles.chartBarDown;
                }
                style[2] = chartBarDown;
                return hasOwnProperty(React4, { style }, index);
              });
              cResult[23] = styles.chartBar;
              cResult[24] = styles.chartBarDown;
              cResult[25] = mapped;
              tmp29 = mapped;
            }
            const obj8 = { style: stats, children: tmp22 };
            const tmp27 = closure_5(closure_4, obj8);
            cResult[20] = styles.stats;
            cResult[21] = tmp22;
            cResult[22] = tmp27;
            tmp24 = tmp27;
          }
        }
        const mapped1 = arr4.map((item) => {
          const obj = { style: styles.stat, children: null };
          items = [hasOwnProperty(closure_8, { style: styles.statValue }), hasOwnProperty(closure_8, { style: styles.statLabel })];
          obj.children = items;
          return timestampProducer(React4, obj, item);
        });
        cResult[16] = styles.stat;
        cResult[17] = styles.statLabel;
        cResult[18] = styles.statValue;
        cResult[19] = mapped1;
        tmp22 = mapped1;
      }
      const obj9 = { style: null };
      const items5 = [, ];
      ({ avatar: arr3[0], profileAvatar: arr3[1] } = styles);
      obj9.style = items5;
      const tmp17 = closure_5(closure_4, obj9);
      cResult[10] = styles.avatar;
      cResult[11] = styles.profileAvatar;
      cResult[12] = tmp17;
      tmp14 = tmp17;
    }
    const obj10 = { style: styles.profileBanner, colors: tmp5, start: tmp8, end: tmp9 };
    const tmp12 = closure_5(LinearGradientDefault, obj10);
    cResult[7] = tmp5;
    cResult[8] = styles.profileBanner;
    cResult[9] = tmp12;
    tmp10 = tmp12;
  }
  const items6 = [, ];
  ({ window: arr2[0], profile: arr2[1] } = styles);
  cResult[2] = styles.profile;
  cResult[3] = styles.window;
  cResult[4] = items6;
  tmp6 = items6;
  const obj2 = styles(5289);
}) : (function ProfileWidgetsVisual(styles) {
  styles = styles.styles;
  let token;
  token = styles(5289).useToken(token(587).colors.BACKGROUND_BRAND);
  items = [token];
  const obj2 = { style: null, children: null };
  items1 = [, ];
  ({ window: arr2[0], profile: arr2[1] } = styles);
  obj2.style = items1;
  const memo = noop.useMemo(() => {
    items = [token, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
    return items;
  }, items);
  items2 = [closure_5(token(5295), { style: styles.profileBanner, colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } }), ];
  const obj4 = { style: styles.profileBody, children: null };
  const obj5 = { style: null };
  items3 = [, ];
  ({ avatar: arr4[0], profileAvatar: arr4[1] } = styles);
  obj5.style = items3;
  const items4 = [closure_5(closure_4, obj5), closure_5(closure_8, { style: styles.lineName }), ];
  const obj7 = { style: styles.statsWidget, children: null };
  const obj8 = { style: styles.stats, children: null };
  const items5 = [0, 1];
  obj8.children = items5.map((item) => {
    const obj = { style: styles.stat, children: null };
    items = [hasOwnProperty(closure_8, { style: styles.statValue }), hasOwnProperty(closure_8, { style: styles.statLabel })];
    obj.children = items;
    return timestampProducer(React4, obj, item);
  });
  const items6 = [closure_5(closure_4, obj8), ];
  let obj = styles(5289);
  const obj3 = { style: styles.profileBanner, colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
  const obj6 = { style: styles.lineName };
  items6[1] = closure_5(closure_4, {
    style: styles.chart,
    children: items3.map((down, index) => {
      let chartBarDown = down.down;
      const style = [styles.chartBar, { height: down.height }, ];
      if (chartBarDown) {
        chartBarDown = styles.chartBarDown;
      }
      style[2] = chartBarDown;
      return hasOwnProperty(React4, { style }, index);
    })
  });
  obj7.children = items6;
  items4[2] = closure_6(closure_4, obj7);
  obj4.children = items4;
  items2[1] = closure_6(closure_4, obj4);
  obj2.children = items2;
  return closure_6(closure_4, obj2);
});
ReactCompilerGating = fn(558);
obj37["overlay-widgets"] = ReactCompilerGating.isReactCompilerEnabled() ? (function OverlayWidgetsVisual(styles) {
  const cResult = styles(576).c(31);
  styles = styles.styles;
  if (cResult[0] !== styles.sceneHills) {
    const obj2 = { style: styles.sceneHills };
    const tmp7 = closure_5(closure_4, obj2);
    cResult[0] = styles.sceneHills;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== styles.sceneScrim) {
    const obj3 = { style: styles.sceneScrim };
    const tmp11 = closure_5(closure_4, obj3);
    cResult[2] = styles.sceneScrim;
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== styles.crosshair) {
    const obj4 = { style: styles.crosshair };
    const tmp15 = closure_5(closure_4, obj4);
    cResult[4] = styles.crosshair;
    cResult[5] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    items = [0, 1, 2];
    cResult[6] = items;
    let arr = items;
  } else {
    arr = cResult[6];
  }
  if (cResult[7] === styles.overlayAvatar) {
    if (cResult[8] === styles.overlayMember) {
      if (cResult[9] === styles.overlayName) {
        if (cResult[10] === styles.speaking) {
          let tmp16 = cResult[11];
        }
        if (cResult[12] === styles.overlayPanel) {
          if (cResult[13] === tmp16) {
            let tmp18 = cResult[14];
          }
          if (cResult[15] === styles.overlayTimer) {
            if (cResult[16] === styles.pill) {
              let tmp22 = cResult[17];
            }
            const _Symbol = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
              const tmp26 = closure_5(tmp(5729).ClockIcon, obj5);
              cResult[18] = tmp26;
              let tmp23 = tmp26;
            } else {
              tmp23 = cResult[18];
            }
            if (cResult[19] !== styles.overlayTimerValue) {
              const obj6 = { style: styles.overlayTimerValue };
              const tmp30 = closure_5(closure_8, obj6);
              cResult[19] = styles.overlayTimerValue;
              cResult[20] = tmp30;
              let tmp27 = tmp30;
            } else {
              tmp27 = cResult[20];
            }
            if (cResult[21] === tmp27) {
              if (cResult[22] === tmp22) {
                let tmp31 = cResult[23];
              }
              if (cResult[24] === styles.scene) {
                if (cResult[25] === tmp31) {
                  if (cResult[26] === tmp4) {
                    if (cResult[27] === tmp8) {
                      if (cResult[28] === tmp12) {
                        if (cResult[29] === tmp18) {
                          let tmp35 = cResult[30];
                        }
                        return tmp35;
                      }
                    }
                  }
                }
              }
              const obj7 = { style: styles.scene, colors: items2, children: null };
              items1 = [tmp4, tmp8, tmp12, tmp18, tmp31];
              obj7.children = items1;
              const tmp39 = closure_6(LinearGradientDefault, obj7);
              cResult[24] = styles.scene;
              cResult[25] = tmp31;
              cResult[26] = tmp4;
              cResult[27] = tmp8;
              cResult[28] = tmp12;
              cResult[29] = tmp18;
              cResult[30] = tmp39;
              tmp35 = tmp39;
            }
            const obj8 = { style: tmp22, children: null };
            items2 = [tmp23, tmp27];
            obj8.children = items2;
            const tmp34 = closure_6(closure_4, obj8);
            cResult[21] = tmp27;
            cResult[22] = tmp22;
            cResult[23] = tmp34;
            tmp31 = tmp34;
          }
          items3 = [, ];
          ({ pill: arr3[0], overlayTimer: arr3[1] } = styles);
          cResult[15] = styles.overlayTimer;
          cResult[16] = styles.pill;
          cResult[17] = items3;
          tmp22 = items3;
        }
        const obj9 = { style: styles.overlayPanel, children: tmp16 };
        const tmp21 = closure_5(closure_4, obj9);
        cResult[12] = styles.overlayPanel;
        cResult[13] = tmp16;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
    }
  }
  const mapped = arr.map((item) => {
    const obj = { style: styles.overlayMember, children: null };
    items = [styles.overlayAvatar, ];
    let speaking = 0 === item;
    if (speaking) {
      speaking = styles.speaking;
    }
    items[1] = speaking;
    items1 = [hasOwnProperty(React4, { style: items }), hasOwnProperty(closure_8, { style: styles.overlayName })];
    obj.children = items1;
    return timestampProducer(React4, obj, item);
  });
  cResult[7] = styles.overlayAvatar;
  cResult[8] = styles.overlayMember;
  cResult[9] = styles.overlayName;
  cResult[10] = styles.speaking;
  cResult[11] = mapped;
  tmp16 = mapped;
  let obj = styles(576);
  tmp = styles;
}) : (function OverlayWidgetsVisual(styles) {
  styles = styles.styles;
  let obj = { style: styles.scene, colors: items2, children: null };
  items = [closure_5(closure_4, { style: styles.sceneHills }), closure_5(closure_4, { style: styles.sceneScrim }), closure_5(closure_4, { style: styles.crosshair }), , ];
  const obj5 = { style: styles.overlayPanel, children: null };
  items1 = [0, 1, 2];
  obj5.children = items1.map((item) => {
    const obj = { style: styles.overlayMember, children: null };
    items = [styles.overlayAvatar, ];
    let speaking = 0 === item;
    if (speaking) {
      speaking = styles.speaking;
    }
    items[1] = speaking;
    items1 = [hasOwnProperty(React4, { style: items }), hasOwnProperty(closure_8, { style: styles.overlayName })];
    obj.children = items1;
    return timestampProducer(React4, obj, item);
  });
  items[3] = closure_5(closure_4, obj5);
  const obj6 = { style: null, children: null };
  items2 = [, ];
  ({ pill: arr3[0], overlayTimer: arr3[1] } = styles);
  obj6.style = items2;
  const obj2 = { style: styles.sceneHills };
  const obj3 = { style: styles.sceneScrim };
  const obj4 = { style: styles.crosshair };
  const tmp = LinearGradientDefault;
  items3 = [closure_5(styles(5729).ClockIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT }), closure_5(closure_8, { style: styles.overlayTimerValue })];
  obj6.children = items3;
  items[4] = closure_6(closure_4, obj6);
  obj.children = items;
  return closure_6(tmp, obj);
});
ReactCompilerGating = fn(558);
obj37.automod = ReactCompilerGating.isReactCompilerEnabled() ? (function AutoModVisual(styles) {
  const cResult = c.c(37);
  styles = styles.styles;
  if (cResult[0] !== styles.avatar) {
    const obj2 = { style: styles.avatar };
    const tmp7 = hasOwnProperty(React4, obj2);
    cResult[0] = styles.avatar;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== styles.lineName) {
    const obj3 = { style: styles.lineName };
    const tmp11 = hasOwnProperty(closure_8, obj3);
    cResult[2] = styles.lineName;
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === styles.lineLong) {
    if (cResult[5] === styles.redacted) {
      let tmp12 = cResult[6];
    }
    if (cResult[7] === styles.lineMedium) {
      if (cResult[8] === styles.redacted) {
        let tmp14 = cResult[9];
      }
      if (cResult[10] === styles.messageBody) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp14) {
              let tmp18 = cResult[14];
            }
            if (cResult[15] === styles.message) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp18) {
                  let tmp22 = cResult[18];
                }
                const _Symbol = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
                  const tmp30 = hasOwnProperty(ShieldIcon.ShieldIcon, obj4);
                  cResult[19] = tmp30;
                  let tmp27 = tmp30;
                } else {
                  tmp27 = cResult[19];
                }
                if (cResult[20] === styles.lineCritical) {
                  if (cResult[21] === styles.lineMedium) {
                    let tmp31 = cResult[22];
                  }
                  if (cResult[23] === styles.lineCritical) {
                    if (cResult[24] === styles.lineShort) {
                      let tmp35 = cResult[25];
                    }
                    if (cResult[26] === styles.blockedText) {
                      if (cResult[27] === tmp31) {
                        if (cResult[28] === tmp35) {
                          let tmp39 = cResult[29];
                        }
                        if (cResult[30] === styles.blockedNotice) {
                          if (cResult[31] === tmp39) {
                            let tmp43 = cResult[32];
                          }
                          if (cResult[33] === styles.window) {
                            if (cResult[34] === tmp43) {
                              if (cResult[35] === tmp22) {
                                let tmp47 = cResult[36];
                              }
                              return tmp47;
                            }
                          }
                          const obj5 = { style: styles.window, children: null };
                          items = [tmp22, tmp43];
                          obj5.children = items;
                          const tmp50 = timestampProducer(React4, obj5);
                          cResult[33] = styles.window;
                          cResult[34] = tmp43;
                          cResult[35] = tmp22;
                          cResult[36] = tmp50;
                          tmp47 = tmp50;
                        }
                        const obj6 = { style: styles.blockedNotice, children: null };
                        items1 = [tmp27, tmp39];
                        obj6.children = items1;
                        const tmp46 = timestampProducer(React4, obj6);
                        cResult[30] = styles.blockedNotice;
                        cResult[31] = tmp39;
                        cResult[32] = tmp46;
                        tmp43 = tmp46;
                      }
                    }
                    const obj7 = { style: styles.blockedText, children: null };
                    items2 = [tmp31, tmp35];
                    obj7.children = items2;
                    const tmp42 = timestampProducer(React4, obj7);
                    cResult[26] = styles.blockedText;
                    cResult[27] = tmp31;
                    cResult[28] = tmp35;
                    cResult[29] = tmp42;
                    tmp39 = tmp42;
                  }
                  const obj8 = { style: null };
                  items3 = [, ];
                  ({ lineShort: arr6[0], lineCritical: arr6[1] } = styles);
                  obj8.style = items3;
                  const tmp38 = hasOwnProperty(closure_8, obj8);
                  cResult[23] = styles.lineCritical;
                  cResult[24] = styles.lineShort;
                  cResult[25] = tmp38;
                  tmp35 = tmp38;
                }
                const obj9 = { style: null };
                const items4 = [, ];
                ({ lineMedium: arr5[0], lineCritical: arr5[1] } = styles);
                obj9.style = items4;
                const tmp34 = hasOwnProperty(closure_8, obj9);
                cResult[20] = styles.lineCritical;
                cResult[21] = styles.lineMedium;
                cResult[22] = tmp34;
                tmp31 = tmp34;
              }
            }
            const obj10 = { style: styles.message, children: null };
            const items5 = [tmp4, tmp18];
            obj10.children = items5;
            const tmp25 = timestampProducer(React4, obj10);
            cResult[15] = styles.message;
            cResult[16] = tmp4;
            cResult[17] = tmp18;
            cResult[18] = tmp25;
            tmp22 = tmp25;
          }
        }
      }
      const obj11 = { style: styles.messageBody, children: null };
      const items6 = [tmp8, tmp12, tmp14];
      obj11.children = items6;
      const tmp21 = timestampProducer(React4, obj11);
      cResult[10] = styles.messageBody;
      cResult[11] = tmp8;
      cResult[12] = tmp12;
      cResult[13] = tmp14;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
    const obj12 = { style: null };
    const items7 = [, ];
    ({ lineMedium: arr2[0], redacted: arr2[1] } = styles);
    obj12.style = items7;
    const tmp17 = hasOwnProperty(closure_8, obj12);
    cResult[7] = styles.lineMedium;
    cResult[8] = styles.redacted;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj13 = { style: null };
  const items8 = [, ];
  ({ lineLong: arr[0], redacted: arr[1] } = styles);
  obj13.style = items8;
  const tmp13 = hasOwnProperty(closure_8, obj13);
  cResult[4] = styles.lineLong;
  cResult[5] = styles.redacted;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function AutoModVisual(styles) {
  styles = styles.styles;
  const obj = { style: styles.window, children: null };
  const obj2 = { style: styles.message, children: null };
  items = [hasOwnProperty(React4, { style: styles.avatar }), ];
  const obj4 = { style: styles.messageBody, children: null };
  items1 = [hasOwnProperty(closure_8, { style: styles.lineName }), , ];
  const obj6 = { style: null };
  items2 = [, ];
  ({ lineLong: arr3[0], redacted: arr3[1] } = styles);
  obj6.style = items2;
  items1[1] = hasOwnProperty(closure_8, obj6);
  const obj7 = { style: null };
  items3 = [, ];
  ({ lineMedium: arr4[0], redacted: arr4[1] } = styles);
  obj7.style = items3;
  items1[2] = hasOwnProperty(closure_8, obj7);
  obj4.children = items1;
  items[1] = timestampProducer(React4, obj4);
  obj2.children = items;
  const items4 = [timestampProducer(React4, obj2), ];
  const obj8 = { style: styles.blockedNotice, children: null };
  const items5 = [hasOwnProperty(ShieldIcon.ShieldIcon, { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }), ];
  const obj10 = { style: styles.blockedText, children: null };
  const obj11 = { style: null };
  const items6 = [, ];
  ({ lineMedium: arr7[0], lineCritical: arr7[1] } = styles);
  obj11.style = items6;
  const items7 = [hasOwnProperty(closure_8, obj11), ];
  const obj12 = { style: null };
  const items8 = [, ];
  ({ lineShort: arr9[0], lineCritical: arr9[1] } = styles);
  obj12.style = items8;
  items7[1] = hasOwnProperty(closure_8, obj12);
  obj10.children = items7;
  items5[1] = timestampProducer(React4, obj10);
  obj8.children = items5;
  items4[1] = timestampProducer(React4, obj8);
  obj.children = items4;
  return timestampProducer(React4, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShowcaseVisual(styles) {
  const cResult = c.c(3);
  styles = styles.styles;
  if (cResult[0] === obj37[styles.id]) {
    if (cResult[1] === styles) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = hasOwnProperty(obj37[styles.id], { styles });
  cResult[0] = obj37[styles.id];
  cResult[1] = styles;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function ShowcaseVisual(styles) {
  return hasOwnProperty(obj37[styles.id], { styles: styles.styles });
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GamesVisual(styles) {
  const cResult = styles(576).c(33);
  styles = styles.styles;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 30, left: 16, width: 32 };
    cResult[0] = rect;
    let first = rect;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== styles.cloud) {
    const obj2 = { style: null };
    items = [styles.cloud, first];
    obj2.style = items;
    const tmp8 = closure_5(closure_4, obj2);
    cResult[1] = styles.cloud;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const rect1 = { top: 64, left: 80, width: 24 };
    cResult[3] = rect1;
    let tmp9 = rect1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== styles.cloud) {
    const obj3 = { style: null };
    items1 = [styles.cloud, tmp9];
    obj3.style = items1;
    const tmp13 = closure_5(closure_4, obj3);
    cResult[4] = styles.cloud;
    cResult[5] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== styles.pipe) {
    const mapped = items.map((item, index) => {
      const obj = { style: null };
      items = [styles.pipe, item];
      obj.style = items;
      return hasOwnProperty(React4, obj, index);
    });
    cResult[6] = styles.pipe;
    cResult[7] = mapped;
    let tmp14 = mapped;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== styles.player) {
    const obj4 = { style: styles.player };
    const tmp20 = closure_5(closure_4, obj4);
    cResult[8] = styles.player;
    cResult[9] = tmp20;
    let tmp17 = tmp20;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { left: nativeDefault.space.PX_6 };
    cResult[10] = obj5;
    let tmp21 = obj5;
  } else {
    tmp21 = cResult[10];
  }
  if (cResult[11] !== styles.pill) {
    items2 = [styles.pill, tmp21];
    cResult[11] = styles.pill;
    cResult[12] = items2;
    let tmp23 = items2;
  } else {
    tmp23 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    const tmp28 = closure_5(tmp(9344).TrophyIcon, obj6);
    const tmp29 = closure_5(tmp(5271).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 });
    cResult[13] = tmp28;
    cResult[14] = tmp29;
    let tmp25 = tmp29;
    let tmp24 = tmp28;
  } else {
    tmp24 = cResult[13];
    tmp25 = cResult[14];
  }
  if (cResult[15] !== tmp23) {
    const obj7 = { style: tmp23, children: null };
    items3 = [tmp24, tmp25];
    obj7.children = items3;
    const tmp33 = closure_6(closure_4, obj7);
    cResult[15] = tmp23;
    cResult[16] = tmp33;
    let tmp30 = tmp33;
  } else {
    tmp30 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { right: nativeDefault.space.PX_6 };
    cResult[17] = obj8;
    let tmp34 = obj8;
  } else {
    tmp34 = cResult[17];
  }
  if (cResult[18] !== styles.pill) {
    const items4 = [styles.pill, tmp34];
    cResult[18] = styles.pill;
    cResult[19] = items4;
    let tmp36 = items4;
  } else {
    tmp36 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const tmp42 = closure_5(tmp(9429).HeartIcon, obj9);
    const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const tmp43 = closure_5(tmp(9429).HeartIcon, obj10);
    const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const tmp44 = closure_5(tmp(9429).HeartIcon, obj11);
    cResult[20] = tmp42;
    cResult[21] = tmp43;
    cResult[22] = tmp44;
    let tmp39 = tmp44;
    let tmp38 = tmp43;
    let tmp37 = tmp42;
  } else {
    tmp37 = cResult[20];
    tmp38 = cResult[21];
    tmp39 = cResult[22];
  }
  if (cResult[23] !== tmp36) {
    const obj12 = { style: tmp36, children: null };
    const items5 = [tmp37, tmp38, tmp39];
    obj12.children = items5;
    const tmp48 = closure_6(closure_4, obj12);
    cResult[23] = tmp36;
    cResult[24] = tmp48;
    let tmp45 = tmp48;
  } else {
    tmp45 = cResult[24];
  }
  if (cResult[25] === styles.gameCanvas) {
    if (cResult[26] === tmp30) {
      if (cResult[27] === tmp45) {
        if (cResult[28] === tmp5) {
          if (cResult[29] === tmp10) {
            if (cResult[30] === tmp14) {
              if (cResult[31] === tmp17) {
                let tmp49 = cResult[32];
              }
              return tmp49;
            }
          }
        }
      }
    }
  }
  const obj13 = { style: styles.gameCanvas, colors: items1, children: null };
  const items6 = [tmp5, tmp10, tmp14, tmp17, tmp30, tmp45];
  obj13.children = items6;
  const tmp50 = closure_6(LinearGradientDefault, obj13);
  cResult[25] = styles.gameCanvas;
  cResult[26] = tmp30;
  cResult[27] = tmp45;
  cResult[28] = tmp5;
  cResult[29] = tmp10;
  cResult[30] = tmp14;
  cResult[31] = tmp17;
  cResult[32] = tmp50;
  tmp49 = tmp50;
  let obj = styles(576);
}) : (function GamesVisual(styles) {
  styles = styles.styles;
  let obj = { style: styles.gameCanvas, colors: items1, children: null };
  const obj2 = { style: null };
  items = [styles.cloud, { top: 30, left: 16, width: 32 }];
  obj2.style = items;
  items1 = [closure_5(closure_4, obj2), , , , , ];
  const obj3 = { style: null };
  items2 = [styles.cloud, { top: 64, left: 80, width: 24 }];
  obj3.style = items2;
  items1[1] = closure_5(closure_4, obj3);
  items1[2] = items.map((item, index) => {
    const obj = { style: null };
    items = [styles.pipe, item];
    obj.style = items;
    return hasOwnProperty(React4, obj, index);
  });
  items1[3] = closure_5(closure_4, { style: styles.player });
  const obj5 = { style: null, children: null };
  items3 = [styles.pill, ];
  const obj4 = { style: styles.player };
  const tmp = LinearGradientDefault;
  items3[1] = { left: nativeDefault.space.PX_6 };
  obj5.style = items3;
  const obj6 = { left: nativeDefault.space.PX_6 };
  const items4 = [closure_5(styles(9344).TrophyIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING }), closure_5(styles(5271).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 })];
  obj5.children = items4;
  items1[4] = closure_6(closure_4, obj5);
  const obj8 = { style: null, children: null };
  const items5 = [styles.pill, ];
  const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  items5[1] = { right: nativeDefault.space.PX_6 };
  obj8.style = items5;
  const obj9 = { right: nativeDefault.space.PX_6 };
  const items6 = [closure_5(styles(9429).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }), , ];
  const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  items6[1] = closure_5(styles(9429).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
  const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  items6[2] = closure_5(styles(9429).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT });
  obj8.children = items6;
  items1[5] = closure_6(closure_4, obj8);
  obj.children = items1;
  return closure_6(tmp, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeFeatureList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeFeatureList() {
  const cResult = require("c").c(13);
  const tmp4 = closure_7();
  _require = tmp4;
  let obj = require("c");
  const tmp = _require;
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] !== token) {
    const obj3 = _modDef683(token);
    const cssResult = _modDef683(token).alpha(0.6).css();
    cResult[0] = token;
    cResult[1] = cssResult;
    let tmp7 = cssResult;
    const alphaResult = _modDef683(token).alpha(0.6);
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp7) {
    let obj4 = { backgroundColor: tmp7 };
    cResult[2] = tmp7;
    cResult[3] = obj4;
    let tmp9 = obj4;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.card) {
    if (cResult[5] === tmp9) {
      let tmp10 = cResult[6];
    }
    importDefault = tmp10;
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp4) {
        let tmp12 = cResult[9];
      }
      if (cResult[10] === tmp4.list) {
        if (cResult[11] === tmp12) {
          let tmp14 = cResult[12];
        }
        return tmp14;
      }
      let obj5 = { style: tmp11, children: tmp12 };
      const tmp17 = closure_5(closure_4, obj5);
      cResult[10] = tmp4.list;
      cResult[11] = tmp12;
      cResult[12] = tmp17;
      tmp14 = tmp17;
    }
    const prop = tmp(12794).CONJURE_HOME_SHOWCASE_TILES;
    const mapped = prop.map((id) => {
      id = id.id;
      const obj = { style, children: null };
      const obj2 = { style: styles.visual, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(closure_15, { id, styles }) };
      ({ title, description } = id);
      items = [hasOwnProperty(React4, obj2), ];
      const obj4 = { style: styles.caption, children: null };
      const obj5 = { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children: null };
      const intl = util.intl;
      obj5.children = intl.string(title);
      items1 = [hasOwnProperty(Text_Text.Text, obj5), ];
      const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: null };
      const intl2 = util.intl;
      obj6.children = intl2.string(description);
      items1[1] = hasOwnProperty(Text_Text.Text, obj6);
      obj4.children = items1;
      items[1] = timestampProducer(React4, obj4);
      obj.children = items;
      return timestampProducer(React4, obj, id);
    });
    cResult[7] = tmp10;
    cResult[8] = tmp4;
    cResult[9] = mapped;
    tmp12 = mapped;
  }
  items = [tmp4.card, tmp9];
  cResult[4] = tmp4.card;
  cResult[5] = tmp9;
  cResult[6] = items;
  tmp10 = items;
  let obj2 = require("useToken");
}) : (function ConjureHomeFeatureList() {
  const tmp = closure_7();
  _require = tmp;
  token = require("useToken").useToken(token(587).colors.BACKGROUND_BASE_LOWEST);
  items = [tmp.card, token];
  dependencyMap = noop.useMemo(() => {
    items = [styles.card, ];
    const obj = { backgroundColor: null };
    const obj2 = _modDef683(token);
    obj.backgroundColor = _modDef683(token).alpha(0.6).css();
    items[1] = obj;
    return items;
  }, items);
  let obj2 = { style: tmp.list, children: null };
  const prop = require("conjureHomeShowcaseTiles").CONJURE_HOME_SHOWCASE_TILES;
  obj2.children = prop.map((id) => {
    id = id.id;
    const obj = { style, children: null };
    const obj2 = { style: styles.visual, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(closure_15, { id, styles }) };
    ({ title, description } = id);
    items = [hasOwnProperty(React4, obj2), ];
    const obj4 = { style: styles.caption, children: null };
    const obj5 = { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children: null };
    const intl = util.intl;
    obj5.children = intl.string(title);
    items1 = [hasOwnProperty(Text_Text.Text, obj5), ];
    const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(description);
    items1[1] = hasOwnProperty(Text_Text.Text, obj6);
    obj4.children = items1;
    items[1] = timestampProducer(React4, obj4);
    obj.children = items;
    return timestampProducer(React4, obj, id);
  });
  return closure_5(closure_4, obj2);
}));