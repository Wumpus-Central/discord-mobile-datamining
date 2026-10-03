// === Module 11845: ForLaterMessageRow ===

// Module 11845 (ForLaterMessageRow)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useThemeDefault from "useTheme" /* 4791 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" }, flushToCardBottom: { marginBottom: -16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS }, footer: { paddingHorizontal: 16, paddingTop: 8 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: -16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = lineClamp(576).c(23);
  ({ message, lineClamp } = arg0);
  ({ maxHeight, footer } = arg0);
  const tmp4 = closure_7();
  const tmp6 = useThemeDefault();
  if (cResult[0] !== tmp6) {
    let obj2 = { seeMoreLabelColor: tmp5(587).colors.TEXT_DEFAULT };
    const tmp8 = lineClamp(4890).createNativeStyleProperties(obj2)(tmp6);
    cResult[0] = tmp6;
    cResult[1] = tmp8;
    let tmp7 = tmp8;
    const tmpResult = lineClamp(4890);
  } else {
    tmp7 = cResult[1];
  }
  importDefault = tmp7;
  if (cResult[2] === lineClamp) {
    if (cResult[3] === tmp7) {
      let tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const RenderEmbeds = lineClamp(2028).RenderEmbeds;
      const setting = RenderEmbeds.getSetting();
      cResult[5] = setting;
      let tmp11 = setting;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const InlineEmbedMedia = lineClamp(2028).InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.getSetting();
      cResult[6] = setting1;
      let tmp13 = setting1;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const InlineAttachmentMedia = lineClamp(2028).InlineAttachmentMedia;
      const setting2 = InlineAttachmentMedia.getSetting();
      cResult[7] = setting2;
      let tmp15 = setting2;
    } else {
      tmp15 = cResult[7];
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = new tmp5(7591)();
      let obj3 = { renderEmbeds: tmp11, inlineEmbedMedia: tmp13, inlineAttachmentMedia: tmp15, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
      obj4.setOptions(obj3);
      cResult[8] = obj4;
      let tmp17 = obj4;
    } else {
      tmp17 = cResult[8];
    }
    let flushToCardBottom = null;
    if (null == footer) {
      flushToCardBottom = tmp4.flushToCardBottom;
    }
    if (cResult[9] === tmp4.preview) {
      if (cResult[10] === flushToCardBottom) {
        let tmp24 = cResult[11];
      }
      if (cResult[12] === maxHeight) {
        if (cResult[13] === message) {
          if (cResult[14] === tmp9) {
            let tmp26 = cResult[15];
          }
          if (cResult[16] === footer) {
            if (cResult[17] === tmp4.footer) {
              let tmp29 = cResult[18];
            }
            if (cResult[19] === tmp24) {
              if (cResult[20] === tmp26) {
                if (cResult[21] === tmp29) {
                  const tmp33 = cResult[22];
                }
                return tmp33;
              }
            }
            const obj5 = { style: tmp24, children: null };
            const items = [tmp26, tmp29];
            obj5.children = items;
            cResult[19] = tmp24;
            cResult[20] = tmp26;
            cResult[21] = tmp29;
            cResult[22] = closure_6(View, obj5);
            class M {
              constructor(arg0) {
                if (null != lineClamp) {
                  obj = { numberOfLines: null, expandable: null, seeMoreLabel: null, seeMoreLabelColor: null };
                  obj.numberOfLines = tmp;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj2 = closure_0(closure_2[8]);
                  obj.expandable = obj2.isIOS();
                  obj3 = closure_0(closure_2[8]);
                  str = "";
                  if (obj3.isIOS()) {
                    str = "...";
                  }
                  tmp4 = arg0;
                  obj.seeMoreLabel = str;
                  tmp5 = closure_1;
                  obj.seeMoreLabelColor = closure_1.seeMoreLabelColor;
                  arg0.truncation = obj;
                }
                return;
              }
            }
            const tmp36 = closure_6(View, obj5);
          }
          let tmp30 = null;
          if (null != footer) {
            const obj6 = { style: tmp4.footer, children: footer };
            tmp30 = closure_5(View, obj6);
          }
          cResult[16] = footer;
          cResult[17] = tmp4.footer;
          cResult[18] = tmp30;
          tmp29 = tmp30;
        }
      }
      const obj7 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: tmp9, message, rowGenerator: tmp17, maxHeight };
      const tmp28 = closure_5(tmp5(8303), obj7);
      cResult[12] = maxHeight;
      cResult[13] = message;
      cResult[14] = tmp9;
      cResult[15] = tmp28;
      tmp26 = tmp28;
    }
    class M {
      constructor(arg0) {
        if (null != lineClamp) {
          obj = { numberOfLines: null, expandable: null, seeMoreLabel: null, seeMoreLabelColor: null };
          obj.numberOfLines = tmp;
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj2 = closure_0(closure_2[8]);
          obj.expandable = obj2.isIOS();
          obj3 = closure_0(closure_2[8]);
          str = "";
          if (obj3.isIOS()) {
            str = "...";
          }
          tmp4 = arg0;
          obj.seeMoreLabel = str;
          tmp5 = closure_1;
          obj.seeMoreLabelColor = closure_1.seeMoreLabelColor;
          arg0.truncation = obj;
        }
        return;
      }
    }
    tmp25[0] = tmp4.preview;
    tmp25[1] = flushToCardBottom;
    cResult[9] = tmp4.preview;
    cResult[10] = flushToCardBottom;
    cResult[11] = tmp25;
    tmp24 = tmp25;
  }
  class M {
    constructor(arg0) {
      if (null != lineClamp) {
        obj = { numberOfLines: null, expandable: null, seeMoreLabel: null, seeMoreLabelColor: null };
        obj.numberOfLines = tmp;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj2 = closure_0(closure_2[8]);
        obj.expandable = obj2.isIOS();
        obj3 = closure_0(closure_2[8]);
        str = "";
        if (obj3.isIOS()) {
          str = "...";
        }
        tmp4 = arg0;
        obj.seeMoreLabel = str;
        tmp5 = closure_1;
        obj.seeMoreLabelColor = closure_1.seeMoreLabelColor;
        arg0.truncation = obj;
      }
      return;
    }
  }
  cResult[2] = lineClamp;
  cResult[3] = tmp7;
  cResult[4] = M;
  tmp9 = M;
  let obj = lineClamp(576);
}) : ((arg0) => {
  ({ lineClamp: require, footer } = arg0);
  importDefault = undefined;
  let setting;
  ({ message, maxHeight } = arg0);
  const tmp = closure_7();
  const tmp2 = importDefault;
  const tmp3 = setting;
  const tmp4 = require("useTheme")();
  let obj = require("createStyles");
  importDefault = obj.createNativeStyleProperties({ seeMoreLabelColor: require("native").colors.TEXT_DEFAULT })(tmp4);
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const items1 = [tmp.preview, ];
  let flushToCardBottom = null;
  const memo = setting1.useMemo(() => {
    const obj = new RowGeneratorDefault();
    obj.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, items);
  if (null == footer) {
    flushToCardBottom = tmp.flushToCardBottom;
  }
  let obj3 = { style: items1, children: null };
  items1[1] = flushToCardBottom;
  const items2 = [
    closure_5(tmp2(tmp3[11]), {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(arg0) {
        if (null != _require) {
          const obj = { numberOfLines: tmp, expandable: PlatformUtils.isIOS(), seeMoreLabel: null, seeMoreLabelColor: null };
          let str = "";
          if (obj3.isIOS()) {
            str = "...";
          }
          obj.seeMoreLabel = str;
          obj.seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
          arg0.truncation = obj;
          obj3 = PlatformUtils;
        }
      },
      message,
      rowGenerator: memo,
      maxHeight
    }),

  ];
  let tmp12Result = null;
  if (null != footer) {
    const obj5 = { style: tmp.footer, children: footer };
    tmp12Result = closure_5(tmp10, obj5);
  }
  items2[1] = tmp12Result;
  obj3.children = items2;
  return closure_6(setting2, obj3);
});