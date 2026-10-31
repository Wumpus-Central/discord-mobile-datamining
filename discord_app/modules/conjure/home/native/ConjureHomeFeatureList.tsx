// === Module 12977: ConjureHomeFeatureList ===

// Module 12977 (ConjureHomeFeatureList)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7340 */;
import ShieldIcon from "ShieldIcon" /* 11281 */;
import RobotIcon from "RobotIcon" /* 12446 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function Line(style) {
  const obj = { style: null };
  items = [closure_7().line, style.style];
  obj.style = items;
  return hasOwnProperty(React4, obj);
}
function ShowcaseVisual(styles) {
  return hasOwnProperty(closure_14[styles.id], { styles: styles.styles });
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
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
const obj13 = { width: "52%", backgroundColor: nativeDefault.colors.TEXT_STRONG, opacity: 0.7 };
obj.cloud = { position: "absolute", height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, opacity: 0.7 };
const obj14 = { position: "absolute", height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, opacity: 0.7 };
obj.pipe = { position: "absolute", width: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300 };
const size3 = { position: "absolute", top: 48, left: 34, width: 14, height: 11, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj.player = size3;
const obj15 = { position: "absolute", width: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300 };
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
const rect = { position: "absolute", top: "55%", left: "-10%", right: "-10%", height: "90%", borderTopLeftRadius: nativeDefault.radii.round, borderTopRightRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BLUE_760 };
obj.sceneHills = rect;
const obj31 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj31.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj.sceneScrim = obj31;
const size10 = { position: "absolute", top: 50, left: 104, width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderWidth: 2, borderColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, borderRadius: nativeDefault.radii.round, opacity: 0.5 };
obj.crosshair = size10;
const rect1 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
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
let closure_9 = ["68%", "24%", "12%"];
let items = [{ left: 62, top: -3, height: 30 }, { left: 62, bottom: -3, height: 36 }, { left: 118, top: -3, height: 44 }, { left: 118, bottom: -3, height: 22 }];
let items1 = [nativeDefault.unsafe_rawColors.BRAND_500, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
let items2 = [nativeDefault.unsafe_rawColors.BLUE_600, nativeDefault.unsafe_rawColors.ORANGE_360];
let items3 = [{ height: "60%", down: false }, { height: "35%", down: true }, { height: "85%", down: false }, { height: "60%", down: false }, { height: "35%", down: true }, { height: "100%", down: false }];
let closure_14 = {
  apps: function AppsVisual(styles) {
    styles = styles.styles;
    let obj = { style: styles.window, children: null };
    const obj2 = { style: styles.windowBar, children: null };
    items = [0, 1, 2];
    obj2.children = items.map((item) => hasOwnProperty(React4, { style: styles.windowDot }, item));
    items1 = [
      closure_5(closure_4, obj2),
      closure_5(Line, { style: styles.lineTitle }),
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
        items1[2] = hasOwnProperty(Line, { style: 0 === index ? styles.pollLabelWinner : styles.pollLabel });
        obj.children = items1;
        return timestampProducer(React4, obj, index);
      })
    ];
    obj.children = items1;
    return closure_6(closure_4, obj);
  },
  games: function GamesVisual(styles) {
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
    const items4 = [closure_5(styles(9378).TrophyIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING }), closure_5(styles(5624).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 })];
    obj5.children = items4;
    items1[4] = closure_6(closure_4, obj5);
    const obj8 = { style: null, children: null };
    const items5 = [styles.pill, ];
    const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    items5[1] = { right: nativeDefault.space.PX_6 };
    obj8.style = items5;
    const obj9 = { right: nativeDefault.space.PX_6 };
    const items6 = [closure_5(styles(9468).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }), , ];
    const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    items6[1] = closure_5(styles(9468).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
    const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    items6[2] = closure_5(styles(9468).HeartIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT });
    obj8.children = items6;
    items1[5] = closure_6(closure_4, obj8);
    obj.children = items1;
    return closure_6(tmp, obj);
  },
  bots: function BotsVisual(styles) {
    styles = styles.styles;
    const obj = { style: styles.window, children: null };
    const obj2 = { style: styles.joinRow, children: null };
    items = [hasOwnProperty(React4, { style: styles.joinArrow }), hasOwnProperty(Line, { style: styles.lineMedium })];
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
    const items4 = [hasOwnProperty(Line, { style: styles.lineName }), ];
    const obj11 = { style: styles.botTag, children: null };
    const obj12 = { variant: "text-xxs/bold", color: "text-overlay-light", children: null };
    const intl = util.intl;
    obj12.children = intl.string(_modDef3868.VlgiLf);
    obj11.children = hasOwnProperty(Text_Text.Text, obj12);
    items4[1] = hasOwnProperty(React4, obj11);
    obj9.children = items4;
    const items5 = [timestampProducer(React4, obj9), hasOwnProperty(Line, { style: styles.lineLong }), hasOwnProperty(Line, { style: styles.lineMedium })];
    obj8.children = items5;
    items3[1] = timestampProducer(React4, obj8);
    obj5.children = items3;
    items1[1] = timestampProducer(React4, obj5);
    obj.children = items1;
    return timestampProducer(React4, obj);
  },
  "profile-widgets": function ProfileWidgetsVisual(styles) {
    styles = styles.styles;
    let token;
    token = styles(5596).useToken(token(575).colors.BACKGROUND_BRAND);
    items = [token];
    const obj2 = { style: null, children: null };
    items1 = [, ];
    ({ window: arr2[0], profile: arr2[1] } = styles);
    obj2.style = items1;
    const memo = noop.useMemo(() => {
      items = [token, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
      return items;
    }, items);
    items2 = [closure_5(token(5587), { style: styles.profileBanner, colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } }), ];
    const obj4 = { style: styles.profileBody, children: null };
    const obj5 = { style: null };
    items3 = [, ];
    ({ avatar: arr4[0], profileAvatar: arr4[1] } = styles);
    obj5.style = items3;
    const items4 = [closure_5(closure_4, obj5), closure_5(Line, { style: styles.lineName }), ];
    const obj7 = { style: styles.statsWidget, children: null };
    const obj8 = { style: styles.stats, children: null };
    const items5 = [0, 1];
    obj8.children = items5.map((item) => {
      const obj = { style: styles.stat, children: null };
      items = [hasOwnProperty(Line, { style: styles.statValue }), hasOwnProperty(Line, { style: styles.statLabel })];
      obj.children = items;
      return timestampProducer(React4, obj, item);
    });
    const items6 = [closure_5(closure_4, obj8), ];
    let obj = styles(5596);
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
  },
  "overlay-widgets": function OverlayWidgetsVisual(styles) {
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
      items1 = [hasOwnProperty(React4, { style: items }), hasOwnProperty(Line, { style: styles.overlayName })];
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
    items3 = [closure_5(styles(5740).ClockIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT }), closure_5(Line, { style: styles.overlayTimerValue })];
    obj6.children = items3;
    items[4] = closure_6(closure_4, obj6);
    obj.children = items;
    return closure_6(tmp, obj);
  },
  automod: function AutoModVisual(styles) {
    styles = styles.styles;
    const obj = { style: styles.window, children: null };
    const obj2 = { style: styles.message, children: null };
    items = [hasOwnProperty(React4, { style: styles.avatar }), ];
    const obj4 = { style: styles.messageBody, children: null };
    items1 = [hasOwnProperty(Line, { style: styles.lineName }), , ];
    const obj6 = { style: null };
    items2 = [, ];
    ({ lineLong: arr3[0], redacted: arr3[1] } = styles);
    obj6.style = items2;
    items1[1] = hasOwnProperty(Line, obj6);
    const obj7 = { style: null };
    items3 = [, ];
    ({ lineMedium: arr4[0], redacted: arr4[1] } = styles);
    obj7.style = items3;
    items1[2] = hasOwnProperty(Line, obj7);
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
    const items7 = [hasOwnProperty(Line, obj11), ];
    const obj12 = { style: null };
    const items8 = [, ];
    ({ lineShort: arr9[0], lineCritical: arr9[1] } = styles);
    obj12.style = items8;
    items7[1] = hasOwnProperty(Line, obj12);
    obj10.children = items7;
    items5[1] = timestampProducer(React4, obj10);
    obj8.children = items5;
    items4[1] = timestampProducer(React4, obj8);
    obj.children = items4;
    return timestampProducer(React4, obj);
  }
};
const obj36 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, opacity: 0.6 };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeFeatureList.tsx");

export default noop.memo(function ConjureHomeFeatureList() {
  const tmp = closure_7();
  _require = tmp;
  token = require("useToken").useToken(token(575).colors.BACKGROUND_BASE_LOWEST);
  items = [tmp.card, token];
  dependencyMap = noop.useMemo(() => {
    items = [styles.card, ];
    const obj = { backgroundColor: null };
    const obj2 = _modDef671(token);
    obj.backgroundColor = _modDef671(token).alpha(0.6).css();
    items[1] = obj;
    return items;
  }, items);
  let obj2 = { style: tmp.list, children: null };
  const prop = require("conjureHomeShowcaseTiles").CONJURE_HOME_SHOWCASE_TILES;
  obj2.children = prop.map((id) => {
    id = id.id;
    const obj = { style, children: null };
    const obj2 = { style: styles.visual, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(ShowcaseVisual, { id, styles }) };
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
});