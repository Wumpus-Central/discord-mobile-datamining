// === Module 8539: ContextMenuConstants ===

// Module 8539 (ContextMenuConstants)
import HapticUtils from "HapticUtils" /* 5010 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isIOS();
const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuConstants.native.tsx");

export const CONTEXT_MENU_LONG_PRESS_DURATION_MS = 300;
export const CONTEXT_MENU_OPEN_HAPTIC = PlatformUtils ? HapticFeedbackTypes.IMPACT_HEAVY : HapticFeedbackTypes.IMPACT_MEDIUM;
export const CONTEXT_MENU_ITEM_PADDING = 12;
export const CONTEXT_MENU_ITEM_BASE_HEIGHT = 42;
export const CONTEXT_MENU_ITEM_GAP = 8;
export const CONTEXT_MENU_ITEM_ICON_SIZE = 20;
export const CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT = "body-xs/medium";
export const CONTEXT_MENU_ITEM_SUB_LABEL_GLYPH_WIDTH = 0.55;
export const CONTEXT_MENU_ITEM_SUB_LABEL_FULL_WIDTH_CHARACTERS = /(?:[\u1100-\u11FF\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u302E\u302F\u3038-\u303B\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u3131-\u318E\u31F0-\u321E\u3260-\u327E\u32D0-\u32FE\u3300-\u3357\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67]|\uD83C\uDE00|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/g;
export const CONTEXT_MENU_DIVIDER_HEIGHT = 4;
export const CONTEXT_MENU_EDGE_OFFSET = 12;
export const CONTEXT_MENU_MIN_WIDTH = 220;
export const CONTEXT_MENU_OFFSET = 10;
export const CONTEXT_MENU_MIN_SCALE = 0.5;
export const CONTEXT_MENU_SPRING = { mass: 0.3, damping: 20, stiffness: 200, overshootClamping: true };