// discord_app/modules/profile_customization/native/BioText.tsx
import c from "../../../../_runtime/00576_c.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import isChangelogUserDefault from "../../changelog/utils/isChangelogUser.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BioMarkupUtils from "../../markup/BioMarkupUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const AnalyticEvents = fn(1085).AnalyticEvents;
const CHANGELOG_URL = fn(2102).CHANGELOG_URL;
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({
  text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 },
  span: {
    alignSelf: "stretch",
    textAlignVertical: "bottom",
    width: "100%",
    flexGrow: 1,
    display: "flex",
    paddingBottom: 2,
  },
  link: {
    alignSelf: "stretch",
    textAlignVertical: "bottom",
    width: "100%",
    flexGrow: 1,
    bottom: -4,
    position: "relative",
  },
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ lineClamp, text } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          LinkingDefault.openURL(target);
          AnalyticsUtilsDefault.track(constants.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === lineClamp) {
        if (cResult[2] === tmp4.link) {
          if (cResult[3] === text) {
            let tmp6 = cResult[4];
          }
          if (cResult[5] === tmp4.link) {
            if (cResult[6] === tmp6) {
              let tmp8 = cResult[7];
            }
            return tmp8;
          }
          const obj2 = { onPress: first, style: tmp4.link, children: tmp6 };
          const tmp11 = closure_1_8(Pressable, obj2);
          cResult[5] = tmp4.link;
          cResult[6] = tmp6;
          cResult[7] = tmp11;
          tmp8 = tmp11;
        }
      }
      const obj3 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp4.link, children: null };
      const items = ["\n", text];
      obj3.children = items;
      const tmp7 = React5(Text_Text.Text, obj3);
      cResult[1] = lineClamp;
      cResult[2] = tmp4.link;
      cResult[3] = text;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      ({ lineClamp, text } = arg0);
      const tmp = closure_10();
      let obj = {
        onPress() {
          LinkingDefault.openURL(target);
          AnalyticsUtilsDefault.track(constants.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target });
        },
        style: tmp.link,
        children: null,
      };
      const obj2 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link, children: null };
      const items = ["\n", text];
      obj2.children = items;
      obj.children = React5(Text_Text.Text, obj2);
      return closure_1_8(Pressable, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = lineClamp(576).c(26);
      ({ placeholder, bio, lineClamp } = arg0);
      ({ userId, textVariant } = arg0);
      let str = "text-md/normal";
      if (undefined !== textVariant) {
        str = textVariant;
      }
      const tmp4 = closure_10();
      if (cResult[0] === bio) {
        if (cResult[1] === str) {
          let tmp5 = cResult[2];
        }
        let tmp7 = 0 === bio.length;
        if (tmp7) {
          tmp7 = !isChangelogUserDefault(userId);
        }
        if (isChangelogUserDefault(userId)) {
          let str3 = "text-default";
          let str4 = "text-default";
          if (tmp7) {
            str4 = "text-muted";
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = lineClamp(1126).intl;
            const stringResult = intl.string(lineClamp(1126).t.OJmNR9);
            cResult[3] = stringResult;
            let tmp15 = stringResult;
          } else {
            tmp15 = cResult[3];
          }
          if (cResult[4] === lineClamp) {
            if (cResult[5] === tmp4.text) {
              if (cResult[6] === str4) {
                if (cResult[7] === str) {
                  let tmp17 = cResult[8];
                }
                if (tmp7) {
                  str3 = "text-muted";
                }
                if (cResult[9] !== lineClamp) {
                  const intl2 = lineClamp(1126).intl;
                  const obj2 = {
                    blogHook(text, arg1) {
                      return closure_2_8(closure_11, { lineClamp, text }, arg1);
                    },
                  };
                  const formatResult = intl2.format(lineClamp(1126).t.RCYeBL, obj2);
                  cResult[9] = lineClamp;
                  cResult[10] = formatResult;
                  let tmp20 = formatResult;
                } else {
                  tmp20 = cResult[10];
                }
                if (cResult[11] === lineClamp) {
                  if (cResult[12] === tmp4.span) {
                    if (cResult[13] === str3) {
                      if (cResult[14] === tmp20) {
                        if (cResult[15] === str) {
                          let tmp22 = cResult[16];
                        }
                        if (cResult[17] === tmp22) {
                          if (cResult[18] === tmp17) {
                            let tmp25 = cResult[19];
                          }
                          return tmp25;
                        }
                        const obj3 = { children: null };
                        const items = [tmp17, tmp22];
                        obj3.children = items;
                        const tmp28 = closure_7(closure_9, obj3);
                        cResult[17] = tmp22;
                        cResult[18] = tmp17;
                        cResult[19] = tmp28;
                        tmp25 = tmp28;
                      }
                    }
                  }
                }
                const obj4 = { variant: str, color: str3, lineClamp, style: tmp4.span, children: tmp20 };
                const tmp24 = closure_8(lineClamp(4886).Text, obj4, "changelog-cta");
                cResult[11] = lineClamp;
                cResult[12] = tmp4.span;
                cResult[13] = str3;
                cResult[14] = tmp20;
                cResult[15] = str;
                cResult[16] = tmp24;
                tmp22 = tmp24;
              }
            }
          }
          const obj5 = { variant: str, color: str4, lineClamp, style: tmp4.text, children: null };
          const items1 = [tmp15, "\n"];
          obj5.children = items1;
          const tmp19 = closure_7(lineClamp(4886).Text, obj5, "changelog-bio");
          cResult[4] = lineClamp;
          cResult[5] = tmp4.text;
          cResult[6] = str4;
          cResult[7] = str;
          cResult[8] = tmp19;
          tmp17 = tmp19;
        } else {
          if (tmp7) {
            if (null == placeholder) {
              return null;
            }
          }
          let str2 = "text-default";
          if (tmp7) {
            str2 = "text-muted";
          }
          if (tmp7) {
            tmp5 = placeholder;
          }
          if (cResult[20] === lineClamp) {
            if (cResult[21] === tmp4.text) {
              if (cResult[22] === str2) {
                if (cResult[23] === tmp5) {
                  if (cResult[24] === str) {
                    let tmp11 = cResult[25];
                  }
                  return tmp11;
                }
              }
            }
          }
          const obj6 = { variant: str, color: str2, lineClamp, style: tmp4.text, children: tmp5 };
          const tmp13 = closure_8(lineClamp(4886).Text, obj6);
          cResult[20] = lineClamp;
          cResult[21] = tmp4.text;
          cResult[22] = str2;
          cResult[23] = tmp5;
          cResult[24] = str;
          cResult[25] = tmp13;
          tmp11 = tmp13;
        }
      }
      const obj = lineClamp(576);
      const obj7 = { linkVariant: str, textVariant: str, customEmojiOffsetY: null };
      const tmpResult = lineClamp(8942);
      let num;
      if (tmpResult2.isAndroid()) {
        num = 3;
      }
      obj7.customEmojiOffsetY = num;
      const parseBioReactResult = tmpResult.parseBioReact(bio, undefined, obj7);
      cResult[0] = bio;
      cResult[1] = str;
      cResult[2] = parseBioReactResult;
      tmp5 = parseBioReactResult;
      tmpResult2 = lineClamp(1369);
    }
  : (lineClamp) => {
      ({ placeholder, bio } = lineClamp);
      lineClamp = lineClamp.lineClamp;
      ({ userId, textVariant } = lineClamp);
      if (textVariant === undefined) {
        textVariant = "text-md/normal";
      }
      const tmp = closure_10();
      const items = [bio, textVariant];
      let memo = noop.useMemo(() => {
        const obj2 = { linkVariant: textVariant, textVariant, customEmojiOffsetY: null };
        const obj = BioMarkupUtils;
        let num;
        if (obj3.isAndroid()) {
          num = 3;
        }
        obj2.customEmojiOffsetY = num;
        return obj.parseBioReact(bio, undefined, obj2);
      }, items);
      let tmp3 = 0 === bio.length;
      if (tmp3) {
        tmp3 = !lineClamp(textVariant[13])(userId);
      }
      if (lineClamp(textVariant[13])(userId)) {
        let obj2 = { variant: textVariant, color: null, lineClamp: null, style: null, children: null };
        let str2 = "text-default";
        let str3 = "text-default";
        if (tmp3) {
          str3 = "text-muted";
        }
        obj2.color = str3;
        obj2.lineClamp = lineClamp;
        obj2.style = tmp.text;
        const intl = bio(tmp6[14]).intl;
        const items1 = [intl.string(bio(tmp6[14]).t.OJmNR9), "\n"];
        obj2.children = items1;
        const items2 = [closure_7(bio(tmp6[10]).Text, obj2, "changelog-bio")];
        const obj3 = { variant: textVariant, color: null, lineClamp: null, style: null, children: null };
        if (tmp3) {
          str2 = "text-muted";
        }
        const obj4 = { children: null };
        obj3.color = str2;
        obj3.lineClamp = lineClamp;
        obj3.style = tmp.span;
        const intl2 = bio(tmp6[14]).intl;
        const obj5 = {
          blogHook(text, arg1) {
            return closure_2_8(closure_11, { lineClamp, text }, arg1);
          },
        };
        obj3.children = intl2.format(bio(tmp6[14]).t.RCYeBL, obj5);
        items2[1] = closure_8(bio(tmp6[10]).Text, obj3, "changelog-cta");
        obj4.children = items2;
        let tmp8Result = closure_7(closure_9, obj4);
      } else if (!tmp3) {
        let obj = { variant: textVariant, color: null, lineClamp: null, style: null, children: null };
        let str = "text-default";
        if (tmp3) {
          str = "text-muted";
        }
        obj.color = str;
        obj.lineClamp = lineClamp;
        obj.style = tmp.text;
        if (tmp3) {
          memo = placeholder;
        }
        obj.children = memo;
        tmp8Result = closure_8(bio(tmp6[10]).Text, obj);
      } else {
        tmp8Result = null;
      }
      return tmp8Result;
    };
