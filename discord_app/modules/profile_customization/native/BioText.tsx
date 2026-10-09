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
const CHANGELOG_URL = fn(2114).CHANGELOG_URL;
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
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
  ? function LinkButton(arg0) {
      const cResult = c.c(8);
      ({ lineClamp, text } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        function handlePress() {
          LinkingDefault.openURL(target);
          AnalyticsUtilsDefault.track(constants.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target });
        }
        cResult[0] = handlePress;
        let first = handlePress;
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
  : function LinkButton(arg0) {
      ({ lineClamp, text } = arg0);
      const tmp = closure_10();
      let obj = {
        onPress: function handlePress() {
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
  ? function BioText(arg0) {
      const cResult = lineClamp(576).c(27);
      ({ placeholder, bio, lineClamp } = arg0);
      ({ userId, guildId, textVariant } = arg0);
      let str = "text-md/normal";
      if (undefined !== textVariant) {
        str = textVariant;
      }
      const tmp4 = closure_10();
      if (cResult[0] === bio) {
        if (cResult[1] === guildId) {
          if (cResult[2] === str) {
            let tmp5 = cResult[3];
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
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = lineClamp(1126).intl;
              const stringResult = intl.string(lineClamp(1126).t.OJmNR9);
              cResult[4] = stringResult;
              let tmp14 = stringResult;
            } else {
              tmp14 = cResult[4];
            }
            if (cResult[5] === lineClamp) {
              if (cResult[6] === tmp4.text) {
                if (cResult[7] === str4) {
                  if (cResult[8] === str) {
                    let tmp16 = cResult[9];
                  }
                  if (tmp7) {
                    str3 = "text-muted";
                  }
                  if (cResult[10] !== lineClamp) {
                    const intl2 = lineClamp(1126).intl;
                    const obj2 = {
                      blogHook(text, arg1) {
                        return closure_2_8(closure_11, { lineClamp, text }, arg1);
                      },
                    };
                    const formatResult = intl2.format(lineClamp(1126).t.RCYeBL, obj2);
                    cResult[10] = lineClamp;
                    cResult[11] = formatResult;
                    let tmp19 = formatResult;
                  } else {
                    tmp19 = cResult[11];
                  }
                  if (cResult[12] === lineClamp) {
                    if (cResult[13] === tmp4.span) {
                      if (cResult[14] === tmp19) {
                        if (cResult[15] === str3) {
                          if (cResult[16] === str) {
                            let tmp21 = cResult[17];
                          }
                          if (cResult[18] === tmp21) {
                            if (cResult[19] === tmp16) {
                              let tmp24 = cResult[20];
                            }
                            return tmp24;
                          }
                          const obj3 = { children: null };
                          const items = [tmp16, tmp21];
                          obj3.children = items;
                          const tmp27 = closure_7(closure_9, obj3);
                          cResult[18] = tmp21;
                          cResult[19] = tmp16;
                          cResult[20] = tmp27;
                          tmp24 = tmp27;
                        }
                      }
                    }
                  }
                  const obj4 = { variant: str, color: str3, lineClamp, style: tmp4.span, children: tmp19 };
                  const tmp23 = closure_8(lineClamp(5087).Text, obj4, "changelog-cta");
                  cResult[12] = lineClamp;
                  cResult[13] = tmp4.span;
                  cResult[14] = tmp19;
                  cResult[15] = str3;
                  cResult[16] = str;
                  cResult[17] = tmp23;
                  tmp21 = tmp23;
                }
              }
            }
            const obj5 = { variant: str, color: str4, lineClamp, style: tmp4.text, children: null };
            const items1 = [tmp14, "\n"];
            obj5.children = items1;
            const tmp18 = closure_7(lineClamp(5087).Text, obj5, "changelog-bio");
            cResult[5] = lineClamp;
            cResult[6] = tmp4.text;
            cResult[7] = str4;
            cResult[8] = str;
            cResult[9] = tmp18;
            tmp16 = tmp18;
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
            if (cResult[21] === lineClamp) {
              if (cResult[22] === tmp4.text) {
                if (cResult[23] === str2) {
                  if (cResult[24] === tmp5) {
                    if (cResult[25] === str) {
                      let tmp10 = cResult[26];
                    }
                    return tmp10;
                  }
                }
              }
            }
            const obj6 = { variant: str, color: str2, lineClamp, style: tmp4.text, children: tmp5 };
            const tmp12 = closure_8(lineClamp(5087).Text, obj6);
            cResult[21] = lineClamp;
            cResult[22] = tmp4.text;
            cResult[23] = str2;
            cResult[24] = tmp5;
            cResult[25] = str;
            cResult[26] = tmp12;
            tmp10 = tmp12;
          }
        }
      }
      const obj = lineClamp(576);
      const obj7 = { guildId, linkVariant: str, textVariant: str, customEmojiOffsetY: null };
      const tmpResult = lineClamp(10580);
      let num;
      if (tmpResult2.isAndroid()) {
        num = 3;
      }
      obj7.customEmojiOffsetY = num;
      const parseBioReactResult = tmpResult.parseBioReact(bio, undefined, obj7);
      cResult[0] = bio;
      cResult[1] = guildId;
      cResult[2] = str;
      cResult[3] = parseBioReactResult;
      tmp5 = parseBioReactResult;
      tmpResult2 = lineClamp(1382);
    }
  : function BioText(lineClamp) {
      ({ placeholder, bio } = lineClamp);
      lineClamp = lineClamp.lineClamp;
      ({ userId, guildId } = lineClamp);
      let str = lineClamp.textVariant;
      if (str === undefined) {
        str = "text-md/normal";
      }
      const tmp = closure_10();
      const items = [bio, guildId, str];
      let memo = str.useMemo(() => {
        const obj2 = { guildId, linkVariant: str, textVariant: str, customEmojiOffsetY: null };
        const obj = BioMarkupUtils;
        let num;
        if (tmpResult.isAndroid()) {
          num = 3;
        }
        obj2.customEmojiOffsetY = num;
        return obj.parseBioReact(bio, undefined, obj2);
      }, items);
      let tmp3 = 0 === bio.length;
      if (tmp3) {
        tmp3 = !lineClamp(guildId[13])(userId);
      }
      if (lineClamp(guildId[13])(userId)) {
        let obj2 = { variant: str, color: null, lineClamp: null, style: null, children: null };
        let str3 = "text-default";
        let str4 = "text-default";
        if (tmp3) {
          str4 = "text-muted";
        }
        obj2.color = str4;
        obj2.lineClamp = lineClamp;
        obj2.style = tmp.text;
        const intl = bio(guildId[14]).intl;
        const items1 = [intl.string(bio(guildId[14]).t.OJmNR9), "\n"];
        obj2.children = items1;
        const items2 = [closure_7(bio(guildId[10]).Text, obj2, "changelog-bio")];
        const obj3 = { variant: str, color: null, lineClamp: null, style: null, children: null };
        if (tmp3) {
          str3 = "text-muted";
        }
        const obj4 = { children: null };
        obj3.color = str3;
        obj3.lineClamp = lineClamp;
        obj3.style = tmp.span;
        const intl2 = bio(guildId[14]).intl;
        const obj5 = {
          blogHook(text, arg1) {
            return closure_2_8(closure_11, { lineClamp, text }, arg1);
          },
        };
        obj3.children = intl2.format(bio(guildId[14]).t.RCYeBL, obj5);
        items2[1] = closure_8(bio(guildId[10]).Text, obj3, "changelog-cta");
        obj4.children = items2;
        let tmp8Result = closure_7(closure_9, obj4);
      } else if (!tmp3) {
        let obj = { variant: str, color: null, lineClamp: null, style: null, children: null };
        let str2 = "text-default";
        if (tmp3) {
          str2 = "text-muted";
        }
        obj.color = str2;
        obj.lineClamp = lineClamp;
        obj.style = tmp.text;
        if (tmp3) {
          memo = placeholder;
        }
        obj.children = memo;
        tmp8Result = closure_8(bio(guildId[10]).Text, obj);
      } else {
        tmp8Result = null;
      }
      return tmp8Result;
    };
