// discord_app/modules/saved_messages/native/ForLaterMessageRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import RowGeneratorDefault from "../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../components_native/chat/ChatItem.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, tmp5;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" },
  flushToCardBottom: obj2,
  footer: { paddingHorizontal: 16, paddingTop: 8 },
};
obj2 = {
  marginBottom: -16,
  borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
  borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
let closure_7 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let footer;
      let items;
      let lineClamp;
      let maxHeight;
      let message;
      let seeMoreLabelColor;
      let tmp7;
      let obj = lineClamp(576);
      const cResult = obj.c(23);
      ({ message, lineClamp } = arg0);
      ({ maxHeight, footer } = arg0);
      const tmp4 = closure_7();
      const tmp6 = useThemeDefault();
      if (cResult[0] !== tmp6) {
        let obj2 = { seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT };
        const createNativeStyleProperties = lineClamp(4896).createNativeStyleProperties;
        lineClamp(4896);
        const tmp9 = createNativeStyleProperties(obj2)(tmp6);
        cResult[0] = tmp6;
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      importDefault = tmp7;
      if (cResult[2] === lineClamp) {
        let tmp10;
        let tmp12;
        let tmp14;
        let tmp16;
        let tmp18;
        if (cResult[3] === tmp7) {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const RenderEmbeds = lineClamp(2028).RenderEmbeds;
          const setting = RenderEmbeds.getSetting();
          cResult[5] = setting;
          tmp12 = setting;
        } else {
          tmp12 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const InlineEmbedMedia = lineClamp(2028).InlineEmbedMedia;
          const setting1 = InlineEmbedMedia.getSetting();
          cResult[6] = setting1;
          tmp14 = setting1;
        } else {
          tmp14 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const InlineAttachmentMedia = lineClamp(2028).InlineAttachmentMedia;
          const setting2 = InlineAttachmentMedia.getSetting();
          cResult[7] = setting2;
          tmp16 = setting2;
        } else {
          tmp16 = cResult[7];
        }
        const _Symbol4 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const self = this;
          const self2 = this;
          let obj3 = new tmp5(7602)();
          const obj4 = {
            renderEmbeds: tmp12,
            inlineEmbedMedia: tmp14,
            inlineAttachmentMedia: tmp16,
            renderReplies: false,
            renderExecutedCommands: false,
            animateEmoji: false,
            renderGiftCode: false,
            renderActivityInstanceEmbed: false,
            renderActivityInviteEmbed: false,
            renderThreadEmbeds: false,
            renderForumPostActions: false,
            ignoreMentioned: true,
            shouldDisableInteractiveComponents: true,
          };
          obj3.setOptions(obj4);
          cResult[8] = obj3;
          tmp18 = obj3;
        } else {
          tmp18 = cResult[8];
        }
        let flushToCardBottom = null;
        if (null == footer) {
          flushToCardBottom = tmp4.flushToCardBottom;
        }
        if (cResult[9] === tmp4.preview) {
          let tmp23;
          if (cResult[10] === flushToCardBottom) {
            tmp23 = cResult[11];
          }
          if (cResult[12] === maxHeight) {
            if (cResult[13] === message) {
              let tmp25;
              if (cResult[14] === tmp10) {
                tmp25 = cResult[15];
              }
              if (cResult[16] === footer) {
                let tmp28;
                if (cResult[17] === tmp4.footer) {
                  tmp28 = cResult[18];
                }
                if (cResult[19] === tmp23) {
                  if (cResult[20] === tmp25) {
                    let tmp32;
                    if (cResult[21] === tmp28) {
                      tmp32 = cResult[22];
                    }
                    return tmp32;
                  }
                }
                const obj5 = { style: tmp23, children: items };
                items = [tmp25, tmp28];
                cResult[19] = tmp23;
                cResult[20] = tmp25;
                cResult[21] = tmp28;
                cResult[22] = closure_6(View, obj5);
                closure_6(View, obj5);
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
              }
              let tmp29 = null;
              if (null != footer) {
                const obj6 = { style: tmp4.footer, children: footer };
                tmp29 = closure_5(View, obj6);
              }
              cResult[16] = footer;
              cResult[17] = tmp4.footer;
              cResult[18] = tmp29;
              tmp28 = tmp29;
            }
          }
          const obj7 = {
            pointerEvents: "none",
            horizontalOffset: 0,
            modifyRow: tmp10,
            message,
            rowGenerator: tmp18,
            maxHeight,
          };
          const tmp27 = closure_5(ChatItemDefault, obj7);
          cResult[12] = maxHeight;
          cResult[13] = message;
          cResult[14] = tmp10;
          cResult[15] = tmp27;
          tmp25 = tmp27;
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
        tmp24[0] = tmp4.preview;
        tmp24[1] = flushToCardBottom;
        cResult[9] = tmp4.preview;
        cResult[10] = flushToCardBottom;
        cResult[11] = tmp24;
        tmp23 = tmp24;
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
      tmp10 = M;
    }
  : (arg0) => {
      let footer;
      let items2;
      let maxHeight;
      let message;
      let require;
      let seeMoreLabelColor;
      ({ lineClamp: require, footer } = arg0);
      importDefault = undefined;
      let setting;
      ({ message, maxHeight } = arg0);
      const tmp = closure_7();
      const tmp4 = require("useTheme")();
      let obj = require("createStyles");
      let obj2 = { seeMoreLabelColor: require("native").colors.TEXT_DEFAULT };
      const tmp2 = importDefault;
      importDefault = obj.createNativeStyleProperties(obj2)(tmp4);
      const RenderEmbeds = require("UserSettings").RenderEmbeds;
      const tmp3 = setting;
      setting = RenderEmbeds.getSetting();
      const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.getSetting();
      const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
      const setting2 = InlineAttachmentMedia.getSetting();
      const items = [setting, setting1, setting2];
      const items1 = [tmp.preview];
      let flushToCardBottom = null;
      const memo = setting1.useMemo(() => {
        const obj = new RowGeneratorDefault();
        const obj2 = {
          renderEmbeds: setting,
          inlineEmbedMedia: setting1,
          inlineAttachmentMedia: setting2,
          renderReplies: false,
          renderExecutedCommands: false,
          animateEmoji: false,
          renderGiftCode: false,
          renderActivityInstanceEmbed: false,
          renderActivityInviteEmbed: false,
          renderThreadEmbeds: false,
          renderForumPostActions: false,
          ignoreMentioned: true,
          shouldDisableInteractiveComponents: true,
        };
        obj.setOptions(obj2);
        return obj;
      }, items);
      if (null == footer) {
        flushToCardBottom = tmp.flushToCardBottom;
      }
      let obj3 = { style: items1, children: items2 };
      items1[1] = flushToCardBottom;
      items2 = [,];
      const obj4 = {
        pointerEvents: "none",
        horizontalOffset: 0,
        modifyRow(arg0) {
          let obj2;
          let str;
          if (null != _require) {
            const obj = {
              numberOfLines: tmp,
              expandable: obj2.isIOS(),
              seeMoreLabel: str,
              seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor,
            };
            str = "";
            obj2 = PlatformUtils;
            const obj3 = PlatformUtils;
            if (obj3.isIOS()) {
              str = "...";
            }
            arg0.truncation = obj;
          }
        },
        message,
        rowGenerator: memo,
        maxHeight,
      };
      items2[0] = closure_5(tmp2(tmp3[11]), obj4);
      let tmp12Result = null;
      if (null != footer) {
        const obj5 = { style: tmp.footer, children: footer };
        tmp12Result = closure_5(tmp10, obj5);
      }
      items2[1] = tmp12Result;
      return closure_6(setting2, obj3);
    };
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = tmp3;
