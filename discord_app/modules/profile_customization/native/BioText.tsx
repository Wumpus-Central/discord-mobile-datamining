// === Module 11000: BioText ===

// Module 11000 (BioText)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import isChangelogUserDefault from "isChangelogUser" /* 2101 */;
import ChangelogConstants from "ChangelogConstants" /* 2102 */;
import LinkingDefault from "Linking" /* 4571 */;
import Text_Text from "Text/Text" /* 4892 */;
import BioMarkupUtils from "BioMarkupUtils" /* 8971 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const Pressable = react_native.Pressable;
const AnalyticEvents = Constants.AnalyticEvents;
const CHANGELOG_URL = ChangelogConstants.CHANGELOG_URL;
({ jsxs: metroImportDefault, jsx: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 }, span: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, display: "flex", paddingBottom: 2 }, link: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, bottom: -4, position: "relative" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let items;
  let lineClamp;
  let target;
  let text;
  let obj = react2;
  const cResult = obj.c(8);
  ({ lineClamp, text } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const obj = LinkingDefault;
      obj.openURL(target);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { cta_type: "profile_bio", target };
      obj2.track(constants.CHANGE_LOG_CTA_CLICKED, obj3);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === lineClamp) {
    if (cResult[2] === tmp4.link) {
      let tmp6;
      if (cResult[3] === text) {
        tmp6 = cResult[4];
      }
      if (cResult[5] === tmp4.link) {
        let tmp8;
        if (cResult[6] === tmp6) {
          tmp8 = cResult[7];
        }
        return tmp8;
      }
      let obj2 = { onPress: first, style: tmp4.link, children: tmp6 };
      const tmp11 = metroImportAll(Pressable, obj2);
      cResult[5] = tmp4.link;
      cResult[6] = tmp6;
      cResult[7] = tmp11;
      tmp8 = tmp11;
    }
  }
  let obj3 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp4.link, children: items };
  items = ["\n", text];
  const tmp7 = metroImportDefault(Text_Text.Text, obj3);
  cResult[1] = lineClamp;
  cResult[2] = tmp4.link;
  cResult[3] = text;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  let items;
  let lineClamp;
  let obj2;
  let target;
  let text;
  ({ lineClamp, text } = arg0);
  const tmp = closure_10();
  let obj = {
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(target);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { cta_type: "profile_bio", target };
      obj2.track(constants.CHANGE_LOG_CTA_CLICKED, obj3);
    },
    style: tmp.link,
    children: metroImportDefault(Text_Text.Text, obj2)
  };
  obj2 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link, children: items };
  items = ["\n", text];
  return metroImportAll(Pressable, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bio;
  let items;
  let items1;
  let lineClamp;
  let num;
  let placeholder;
  let textVariant;
  let userId;
  let obj = lineClamp(576);
  const cResult = obj.c(26);
  ({ placeholder, bio, lineClamp } = arg0);
  ({ userId, textVariant } = arg0);
  let str = "text-md/normal";
  if (undefined !== textVariant) {
    str = textVariant;
  }
  const tmp4 = closure_10();
  if (cResult[0] === bio) {
    let tmp5;
    if (cResult[1] === str) {
      tmp5 = cResult[2];
    }
    const tmp8 = 0 === bio.length && !isChangelogUserDefault(userId);
    if (isChangelogUserDefault(userId)) {
      let tmp16;
      let str3 = "text-default";
      let str4 = "text-default";
      if (tmp8) {
        str4 = "text-muted";
      }
      const _Symbol = Symbol;
      const text = tmp4.text;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = lineClamp(1126).intl;
        const stringResult = intl.string(lineClamp(1126).t.OJmNR9);
        cResult[3] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[3];
      }
      if (cResult[4] === lineClamp) {
        if (cResult[5] === tmp4.text) {
          if (cResult[6] === str4) {
            let tmp18;
            let tmp21;
            if (cResult[7] === str) {
              tmp18 = cResult[8];
            }
            if (tmp8) {
              str3 = "text-muted";
            }
            const span = tmp4.span;
            if (cResult[9] !== lineClamp) {
              const intl2 = lineClamp(1126).intl;
              const obj2 = {
                blogHook(text, id) {
                              const obj = { lineClamp, text };
                              return metroImportAll(closure_11, obj, id);
                            }
              };
              const formatResult = intl2.format(lineClamp(1126).t.RCYeBL, obj2);
              cResult[9] = lineClamp;
              cResult[10] = formatResult;
              tmp21 = formatResult;
            } else {
              tmp21 = cResult[10];
            }
            if (cResult[11] === lineClamp) {
              if (cResult[12] === tmp4.span) {
                if (cResult[13] === str3) {
                  if (cResult[14] === tmp21) {
                    let tmp23;
                    if (cResult[15] === str) {
                      tmp23 = cResult[16];
                    }
                    if (cResult[17] === tmp23) {
                      let tmp26;
                      if (cResult[18] === tmp18) {
                        tmp26 = cResult[19];
                      }
                      return tmp26;
                    }
                    const obj3 = { children: items };
                    items = [tmp18, tmp23];
                    const tmp29 = closure_7(closure_9, obj3);
                    cResult[17] = tmp23;
                    cResult[18] = tmp18;
                    cResult[19] = tmp29;
                    tmp26 = tmp29;
                  }
                }
              }
            }
            const obj4 = { variant: str, color: str3, lineClamp, style: span, children: tmp21 };
            const tmp25 = closure_8(lineClamp(4892).Text, obj4, "changelog-cta");
            cResult[11] = lineClamp;
            cResult[12] = tmp4.span;
            cResult[13] = str3;
            cResult[14] = tmp21;
            cResult[15] = str;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
        }
      }
      const obj5 = { variant: str, color: str4, lineClamp, style: text, children: items1 };
      items1 = [tmp16, "\n"];
      const tmp20 = closure_7(lineClamp(4892).Text, obj5, "changelog-bio");
      cResult[4] = lineClamp;
      cResult[5] = tmp4.text;
      cResult[6] = str4;
      cResult[7] = str;
      cResult[8] = tmp20;
      tmp18 = tmp20;
    } else {
      if (tmp8) {
        if (null == placeholder) {
          return null;
        }
      }
      let str2 = "text-default";
      if (tmp8) {
        str2 = "text-muted";
      }
      if (tmp8) {
        tmp5 = placeholder;
      }
      if (cResult[20] === lineClamp) {
        if (cResult[21] === tmp4.text) {
          if (cResult[22] === str2) {
            if (cResult[23] === tmp5) {
              let tmp12;
              if (cResult[24] === str) {
                tmp12 = cResult[25];
              }
              return tmp12;
            }
          }
        }
      }
      const obj6 = { variant: str, color: str2, lineClamp, style: tmp4.text, children: tmp5 };
      const tmp14 = closure_8(lineClamp(4892).Text, obj6);
      cResult[20] = lineClamp;
      cResult[21] = tmp4.text;
      cResult[22] = str2;
      cResult[23] = tmp5;
      cResult[24] = str;
      cResult[25] = tmp14;
      tmp12 = tmp14;
    }
  }
  const obj7 = { linkVariant: str, textVariant: str, customEmojiOffsetY: num };
  const parseBioReact = lineClamp(8971).parseBioReact;
  lineClamp(8971);
  num = undefined;
  const tmpResult2 = lineClamp(1369);
  if (tmpResult2.isAndroid()) {
    num = 3;
  }
  const parseBioReactResult = parseBioReact(bio, undefined, obj7);
  cResult[0] = bio;
  cResult[1] = str;
  cResult[2] = parseBioReactResult;
  tmp5 = parseBioReactResult;
}) : ((lineClamp) => {
  let bio;
  let intl2;
  let items1;
  let obj5;
  let placeholder;
  let str;
  let str3;
  let textVariant;
  let tmp8Result;
  let userId;
  ({ placeholder, bio } = lineClamp);
  lineClamp = lineClamp.lineClamp;
  ({ userId, textVariant } = lineClamp);
  if (textVariant === undefined) {
    textVariant = "text-md/normal";
  }
  const tmp = closure_10();
  const items = [bio, textVariant];
  let memo = react.useMemo(() => {
    let num;
    const obj = { linkVariant: textVariant, textVariant, customEmojiOffsetY: num };
    const parseBioReact = BioMarkupUtils.parseBioReact;
    BioMarkupUtils;
    num = undefined;
    const obj2 = PlatformUtils;
    if (obj2.isAndroid()) {
      num = 3;
    }
    return parseBioReact(bio, undefined, obj);
  }, items);
  const tmp3 = 0 === bio.length && !lineClamp(textVariant[13])(userId);
  if (lineClamp(textVariant[13])(userId)) {
    let obj2 = { variant: textVariant, color: str3, lineClamp, style: tmp.text, children: items1 };
    let str2 = "text-default";
    str3 = "text-default";
    const Text2 = bio(tmp6[10]).Text;
    if (tmp3) {
      str3 = "text-muted";
    }
    const intl = bio(tmp6[14]).intl;
    items1 = [intl.string(bio(textVariant[14]).t.OJmNR9), "\n"];
    const items2 = [closure_7(Text2, obj2, "changelog-bio"), ];
    const obj3 = { variant: textVariant, color: str2, lineClamp, style: tmp.span, children: intl2.format(bio(textVariant[14]).t.RCYeBL, obj5) };
    const Text3 = bio(tmp6[10]).Text;
    if (tmp3) {
      str2 = "text-muted";
    }
    const obj4 = { children: items2 };
    intl2 = bio(tmp6[14]).intl;
    obj5 = {
      blogHook(text, id) {
          const obj = { lineClamp, text };
          return metroImportAll(closure_11, obj, id);
        }
    };
    items2[1] = closure_8(Text3, obj3, "changelog-cta");
    tmp8Result = closure_7(closure_9, obj4);
  } else if (!tmp3) {
    let obj = { variant: textVariant, color: str, lineClamp, style: tmp.text, children: memo };
    str = "text-default";
    const Text = bio(tmp6[10]).Text;
    if (tmp3) {
      str = "text-muted";
    }
    if (tmp3) {
      memo = placeholder;
    }
    tmp8Result = closure_8(Text, obj);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default tmp3;